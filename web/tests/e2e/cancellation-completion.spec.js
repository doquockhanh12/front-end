import { test, expect } from '@playwright/test';
import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
import { acceptDomainOffer } from '../../src/features/domain/commerce.js';
import { validOfferProposals } from '../offerTestHelpers.js';
import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';

const runtime = page => page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);
const startTime = lesson => new Date(new Date(`${lesson.date}T00:00:00+07:00`).getTime() + lesson.start * 60000);
function paidFixture() {
  const seed = createDemoState(fixedTime);
  const paid = acceptDomainOffer(seed, 'msg-003', 'accepted', seed.users.find(u => u.id === 'demo-learner'), { proposals: validOfferProposals(seed, 2, fixedTime) }, fixedTime);
  expect(paid.ok, paid.error).toBe(true);
  return { state: paid.state, lesson: paid.state.lessons.find(l => l.id === paid.lessonIds[0]) };
}
async function openLesson(page, lesson) {
  await page.locator('.weekly-timeline').getByRole('button', { name: new RegExp(`${lesson.subject}.*${lesson.learner}`) }).first().click();
  return page.getByRole('dialog', { name: 'Chi tiết lớp học' });
}
async function checkDialog(page, dialog, width, tag) {
  const box = await dialog.boundingBox();
  expect(box.x).toBeGreaterThanOrEqual(0); expect(box.x + box.width).toBeLessThanOrEqual(width);
  const confirm = dialog.getByRole('button', { name: /Xác nhận .* demo/ });
  await confirm.scrollIntoViewIfNeeded();
  const target = await confirm.boundingBox();
  expect(target.x).toBeGreaterThanOrEqual(box.x); expect(target.x + target.width).toBeLessThanOrEqual(box.x + box.width);
  expect(await confirm.evaluate(el => { const r = el.getBoundingClientRect(); return el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)); })).toBe(true);
  await page.screenshot({ path: `playwright-report/cancellation-completion/${tag}-${width}.png` });
}

for (const [hours, threshold] of [[26, 3], [5, 1]]) test(`CANCEL-COMP-${hours===26?'01':'02'} actual Tutor cancellation ${hours}h settles only the owned lesson and warning policy`, async ({ page }) => {
  const { state, lesson } = paidFixture(); state.systemSettings.autoSuspendThreshold = threshold;
  const tutor = state.users.find(u => u.id === 'demo-tutor');
  await resetDemo(page, { state, referenceTime: new Date(startTime(lesson).getTime() - hours*3600000) });
  await login(page, 'giabao', '/tutor/timetable');
  const dialog = await openLesson(page, lesson);
  await dialog.getByRole('button', { name: 'Hủy buổi dạy', exact: true }).click();
  await expect(dialog).toContainText(hours===26?'không cảnh cáo':'thêm 1 cảnh cáo');
  await expect(dialog.getByRole('button', { name: 'Xác nhận hủy buổi dạy demo' })).toBeDisabled();
  await dialog.getByLabel('Tôi xác nhận xử lý buổi học trong bản demo').check();
  await dialog.getByRole('button', { name: 'Xác nhận hủy buổi dạy demo' }).click();
  await expect(dialog).toContainText('Đã hủy buổi dạy theo giờ bắt đầu thực tế');
  await expect(dialog.getByRole('button', { name: 'Đánh dấu hoàn tất' })).toHaveCount(0);
  const after = await runtime(page), account = after.users.find(u=>u.id===tutor.id);
  expect(account.warningCount).toBe(tutor.warningCount+(hours<24?1:0));
  expect(account.status).toBe(hours<24?'suspended':tutor.status);
  expect(after.wallets['demo-learner'].availableBalance).toBe(state.wallets['demo-learner'].availableBalance+lesson.sessionFee);
  expect(after.escrowTransactions[0].settlements).toHaveLength(1);
  await page.reload(); expect((await runtime(page)).lessons.find(l=>l.id===lesson.id).status).toBe('cancelled');
});

for (const width of [1440,1024,390]) test(`MASTER-NOSHOW confirmed lesson action, modal bounds and persisted compensation at ${width}px`, async ({ page }) => {
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const {state,lesson}=paidFixture();
  await page.setViewportSize({width,height:900});
  await resetDemo(page,{state,referenceTime:new Date(startTime(lesson).getTime()+60000)});await login(page,'giabao','/tutor/timetable');
  const dialog=await openLesson(page,lesson);
  await expect(dialog.getByRole('button',{name:'Hủy buổi dạy',exact:true})).toHaveCount(0);
  await dialog.getByRole('button',{name:'Ghi nhận người học vắng mặt'}).click();
  await expect(dialog.getByRole('button',{name:'Xác nhận vắng mặt demo'})).toBeDisabled();
  await dialog.getByLabel('Tôi xác nhận xử lý buổi học trong bản demo').check();
  await checkDialog(page,dialog,width,'no-show-confirmation');
  await dialog.getByRole('button',{name:'Xác nhận vắng mặt demo'}).click();
  await expect(dialog).toContainText('chuyển 100% ký quỹ');
  await expect(dialog.getByRole('button',{name:'Ghi nhận người học vắng mặt'})).toHaveCount(0);
  await expect(dialog.getByRole('button',{name:'Đánh dấu hoàn tất'})).toHaveCount(0);
  const after=await runtime(page);
  expect(after.wallets['demo-tutor'].availableBalance).toBe(state.wallets['demo-tutor'].availableBalance+lesson.sessionFee);
  expect(after.escrowTransactions[0].settlements).toHaveLength(1);
  await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  await page.reload();expect((await runtime(page)).wallets['demo-tutor'].availableBalance).toBe(after.wallets['demo-tutor'].availableBalance);
  expect(errors).toEqual([]);
});

test('MASTER-NOSHOW actual negotiated paid offer resolves across Tutor and Learner without completing Income',async({page})=>{
  await resetDemo(page);await login(page,'giabao','/messages');
  await page.getByRole('button',{name:'Gửi Đề xuất Học phí',exact:true}).first().click();
  await page.getByLabel('Khối lớp / Trình độ').fill('THPT no-show');
  await page.getByLabel('Lịch học dự kiến').fill('Các buổi cụ thể đã chọn');
  await page.locator('.custom-offer-modal .offer-session-picker input').nth(0).check();
  await page.locator('.custom-offer-modal .offer-session-picker input').nth(1).check();
  await page.getByRole('button',{name:'Xác nhận gửi đề xuất'}).click();
  await page.goto('/tutor/dashboard');await logout(page);await login(page,'minhanh','/messages');
  const offer=page.getByTestId('custom-offer-card').filter({hasText:'THPT no-show'});
  await offer.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  await page.getByRole('button',{name:'Xác nhận đặt cọc',exact:true}).click();
  await expect(offer.locator('[data-status="accepted"]')).toBeVisible();
  const paid=await runtime(page);const message=paid.messages.find(m=>m.offerData?.level==='THPT no-show'||m.offerData?.grade==='THPT no-show');
  const request=paid.requests.find(r=>r.id===message?.offerData?.requestId)||paid.requests.at(-1);
  const lesson=paid.lessons.find(l=>l.requestId===request.id);
  expect(lesson).toBeTruthy();
  await page.clock.setFixedTime(new Date(startTime(lesson).getTime()+60000));
  await page.goto('/learner/schedule');await logout(page);await login(page,'giabao','/tutor/timetable');
  const dialog=await openLesson(page,lesson);await dialog.getByRole('button',{name:'Ghi nhận người học vắng mặt'}).click();
  await dialog.getByLabel('Tôi xác nhận xử lý buổi học trong bản demo').check();await dialog.getByRole('button',{name:'Xác nhận vắng mặt demo'}).click();
  await expect(dialog).toContainText('chuyển 100% ký quỹ');
  await page.keyboard.press('Escape');await page.goto('/tutor/income');
  const resolved=await runtime(page);expect(resolved.lessons.find(l=>l.id===lesson.id).status).toBe('cancelled');
  await page.goto('/tutor/wallet');await expect(page.locator('main')).toContainText(/vắng mặt/i);
  await logout(page);await login(page,'minhanh','/learner/schedule');
  await page.getByRole('button',{name:'Đã hủy',exact:true}).click();
  await expect(page.locator('main')).toContainText(lesson.subject);
  await page.reload();const final=await runtime(page);
  expect(final.wallets['demo-tutor'].availableBalance).toBe(paid.wallets['demo-tutor'].availableBalance+lesson.sessionFee);
  expect(final.escrowTransactions.find(e=>e.id===lesson.escrowId).settlements.filter(s=>s.lessonId===lesson.id)).toHaveLength(1);
});
