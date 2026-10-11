import { test, expect } from '@playwright/test';
import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';

const seed = () => createDemoState(fixedTime);
async function stateOf(page) {
  return page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);
}
async function setup(page, state = seed(), user = null) {
  await resetDemo(page, { state, ...(user ? {user} : {}) });
  if (user) await page.goto('/learner/dashboard');
  else await login(page, 'minhanh', '/learner/dashboard');
}

test('UI-COMP-L01 floating chat opens Messages without hook-order crash', async ({page}) => {
  await setup(page);
  const errors=[]; page.on('pageerror', error => errors.push(error.message));
  await page.getByRole('button', {name:'Mở cửa sổ trò chuyện'}).click();
  await page.getByRole('button', {name:'Mở toàn màn hình'}).click();
  await expect(page).toHaveURL(/\/messages$/);
  await expect(page.getByRole('textbox', {name:'Nội dung tin nhắn'})).toBeVisible();
  expect(errors).toEqual([]);
});

test('UI-COMP-L02 secondary learner cannot see another account class posts', async ({page}) => {
  const state=seed(); const user=state.users.find(u=>u.id==='user-learner-active-2');
  await setup(page,state,user);
  await page.goto('/learner/my-classes');
  await expect(page.getByText('MÃ LỚP: #post-101', {exact:true})).toHaveCount(0);
});

test('UI-COMP-L02 secondary learner cannot see another account conversation', async ({page}) => {
  const state=seed(); const user=state.users.find(u=>u.id==='user-learner-active-2');
  await setup(page,state,user);await page.goto('/messages');
  await expect(page.locator('.chat-thread-item')).toHaveCount(0);
});

test('UI-COMP-L02 unauthenticated visitor cannot read private seeded chat', async ({page}) => {
  const state=seed();await resetDemo(page,{state});await page.goto('/login');
  const trigger=page.getByRole('button',{name:'Mở cửa sổ trò chuyện'});
  if (await trigger.count()) await trigger.click();
  const privateText=state.messages.find(m=>m.type==='text').text;
  await expect(page.getByText(privateText,{exact:true})).toHaveCount(0);
});

test('UI-COMP-L02 learner schedule only shows owned lesson IDs, not unowned history', async ({page}) => {
  await setup(page);
  await page.goto('/learner/schedule');
  const ownedCount=seed().lessons.filter(l=>l.learnerId==='demo-learner').length;
  await expect(page.locator('.lesson-card')).toHaveCount(ownedCount);
});

test('UI-COMP-L03 completed lesson cannot be cancelled by learner', async ({page}) => {
  await setup(page); await page.goto('/learner/schedule');
  await page.getByRole('button', {name:/Đã hoàn thành/}).click();
  await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('button', {name:'Hủy buổi học này'})).toHaveCount(0);
});

test('UI-COMP-L04 refund without linked escrow never consumes unrelated class escrow', async ({page}) => {
  await setup(page); await page.goto('/learner/schedule');
  await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  const before=await stateOf(page);
  await page.getByLabel('Lý do yêu cầu hoàn tiền').selectOption('Gia sư vắng mặt');
  await page.getByRole('button', {name:'Yêu cầu Hoàn tiền 100% vì Sự cố'}).click();
  const after=await stateOf(page);
  expect(after.escrowTransactions).toEqual(before.escrowTransactions);
  expect(after.wallets).toEqual(before.wallets);
});

test('UI-COMP-L05 insufficient balance cannot mark offer deposit successful', async ({page}) => {
  const state=seed();state.wallets['demo-learner'].availableBalance=0;
  await setup(page,state);await page.goto('/messages');
  await page.locator('.offer-session-picker input[type="checkbox"]').nth(0).check();
  await page.locator('.offer-session-picker input[type="checkbox"]').nth(1).check();
  await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  await page.getByRole('button',{name:'Xác nhận đặt cọc',exact:true}).click();
  await expect(page.locator('[data-testid="custom-offer-card"] [data-status="accepted"]')).toHaveCount(0);
  expect((await stateOf(page)).messages.find(m=>m.type==='custom_offer').offerData.status).toBe('pending');
});

test('UI-COMP-L06 paid offer produces linked shared lessons visible to Tutor', async ({page}) => {
  await setup(page); await page.goto('/messages');
  const before=await stateOf(page);const offer=before.messages.find(m=>m.type==='custom_offer');
  await page.locator('.offer-session-picker input[type="checkbox"]').nth(0).check();
  await page.locator('.offer-session-picker input[type="checkbox"]').nth(1).check();
  await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  await page.getByRole('button',{name:'Xác nhận đặt cọc',exact:true}).click();
  const after=await stateOf(page);
  const newEscrow=after.escrowTransactions.find(e=>!before.escrowTransactions.some(old=>old.id===e.id));
  expect(newEscrow,'Successful payment must create canonical escrow').toBeTruthy();
  await page.goto('/learner/dashboard');await logout(page);
  await login(page,'giabao','/tutor/timetable');
  const tutorState=await stateOf(page);
  expect(tutorState.lessons.filter(l=>l.escrowId===newEscrow.id||l.offerId===offer.id||l.messageId===offer.id)).toHaveLength(offer.offerData.sessionsCount);
});

test('UI-COMP-L07 lesson modal supports keyboard Escape and focus return', async ({page}) => {
  await setup(page);await page.goto('/learner/schedule');
  const trigger=page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first();
  await trigger.click();await expect(page.getByRole('dialog')).toBeVisible();
  await expect.poll(()=>page.getByRole('dialog').evaluate(el=>el.contains(document.activeElement))).toBe(true);
  await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test('UI-COMP-L08 proposal profile agrees with canonical public tutor university', async ({page}) => {
  await setup(page);await page.goto('/learner/my-classes');
  const profile=seed().profiles.find(p=>p.id==='quoc-bao');
  const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  await expect(candidate).toContainText(profile.university);
});

test('UI-COMP-L09 newly submitted class awaits Admin moderation', async ({page}) => {
  await setup(page);await page.goto('/learner/post-class');
  await page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'}).click();
  await page.getByRole('button',{name:'Tiếp tục: Ngân sách & Mục tiêu'}).click();
  const before=await stateOf(page);
  await page.getByRole('button',{name:/Đăng tin|Gửi tin/}).last().click();
  await expect(page).toHaveURL(/\/learner\/my-classes$/);
  const created=(await stateOf(page)).classPosts.find(p=>!before.classPosts.some(old=>old.id===p.id));
  expect(created).toBeTruthy();expect(created.moderationStatus).toBe('pending');
});

test('UI-COMP-L10 selected candidate provides a deposit next step before claiming matched class', async ({page}) => {
  await setup(page);await page.goto('/learner/my-classes');
  const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  await candidate.getByRole('button',{name:'Chọn gia sư này'}).click();
  await expect(page.getByRole('button',{name:/Đặt cọc/}).or(page.getByRole('link',{name:/Đặt cọc/}))).toBeVisible();
});

test('UI-COMP-L11 mobile thread selection opens a readable conversation and composer', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await setup(page);await page.goto('/messages');
  await page.locator('.chat-thread-item').first().click();
  await expect(page.getByRole('textbox',{name:'Nội dung tin nhắn'})).toBeVisible();
});

test('UI-COMP-L12 mobile post-class Next control stays entirely inside form', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await setup(page);await page.goto('/learner/post-class');
  await page.evaluate(()=>document.fonts.ready);
  const next=page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'});
  const box=await next.boundingBox();
  expect(box.x+box.width,'Full label and arrow must not clip outside the viewport').toBeLessThanOrEqual(390);
});

test('UI-COMP-L13 background chat cannot overlap and intercept a lesson dialog', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await setup(page);await page.goto('/learner/schedule');
  await page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  const intercepts=await page.getByRole('button',{name:'Mở cửa sổ trò chuyện'}).evaluate(button=>{
    const r=button.getBoundingClientRect();const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);
    return Boolean(hit&&button.contains(hit));
  });
  expect(intercepts,'Background widget must stay below modal overlay').toBe(false);
});

test('UI-COMP-L14 mobile split-map tutor profile CTA remains fully inside its card', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await setup(page);await page.goto('/learner/search');
  await page.getByRole('button',{name:'Bản đồ chia đôi',exact:true}).click();
  await page.evaluate(()=>document.fonts.ready);
  const card=page.locator('#tutor-card-mai-anh');
  const cardBox=await card.boundingBox();const linkBox=await card.getByRole('link',{name:'Xem hồ sơ'}).boundingBox();
  expect(linkBox.x+linkBox.width,'Profile CTA must not clip inside narrow split-list').toBeLessThanOrEqual(cardBox.x+cardBox.width);
});
