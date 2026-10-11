import { test, expect } from '@playwright/test';
import { createDemoState, holdEscrowDeposit, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
import { resetDemo, login, fixedTime } from './demoHelpers.js';

const seed = () => createDemoState(fixedTime);
const withdrawal = page => page.getByRole('button', { name: 'Rút tiền về STK Ngân hàng', exact: true });

test('UI-COMP-T01 Tutor Wallet resolves the canonical account balance', async ({ page }) => {
  const state = seed();
  await resetDemo(page, { state });
  await login(page, 'giabao', '/tutor/wallet');
  await expect(page.locator('.wallet-card--available .wallet-card-amount')).toHaveText(`${state.wallets['demo-tutor'].availableBalance.toLocaleString('vi-VN')} đ`);
  await expect(withdrawal(page)).toBeEnabled();
});

// Controlled compatibility state isolates modal behavior from T01. Both stable
// identity keys reference existing approved wallet data; the fixture is untouched.
async function openPayout(page) {
  const state = seed();
  state.wallets['quoc-bao'] = structuredClone(state.wallets['demo-tutor']);
  await resetDemo(page, { state });
  await login(page, 'giabao', '/tutor/wallet');
  await withdrawal(page).click();
  const dialog = page.getByRole('dialog', { name: 'Rút tiền về tài khoản ngân hàng' });
  await expect(dialog).toBeVisible();
  return dialog;
}

test('UI-COMP-T02 payout dialog receives keyboard focus', async ({ page }) => {
  const dialog = await openPayout(page);
  expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
});

test('UI-COMP-T02 Escape closes payout dialog and returns focus', async ({ page }) => {
  const dialog = await openPayout(page);
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(withdrawal(page)).toBeFocused();
});

test('UI-COMP-T03 payout bank account input has an associated visible label', async ({ page }) => {
  const dialog = await openPayout(page);
  await expect(dialog.getByRole('textbox', { name: 'Số tài khoản ngân hàng:' })).toBeVisible();
});

test('UI-COMP-T04 accidental click does not activate the three-second SOS action', async ({ page }) => {
  await resetDemo(page);
  await login(page, 'giabao', '/tutor/timetable');
  await page.getByRole('button', { name: 'SOS KHẨN CẤP', exact: true }).first().click();
  await expect(page.getByRole('alertdialog')).toHaveCount(0);
});

test('UI-COMP-T05 SOS explicitly discloses local simulation instead of claiming real SMS or GPS delivery', async ({ page }) => {
  await resetDemo(page);
  await login(page, 'giabao', '/tutor/timetable');
  // Holding also remains valid when the planned activation guard is implemented.
  const trigger = page.getByRole('button', { name: 'SOS KHẨN CẤP', exact: true }).first();
  await trigger.hover(); await page.mouse.down();
  await page.clock.runFor(3100); await page.mouse.up();
  const dialog = page.getByRole('alertdialog');
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText(/mô phỏng|demo|không gửi/i);
});

test('UI-COMP-T06 another Tutor cannot see canonical Tutor private applications', async ({ page }) => {
  const state = seed();
  const user = state.users.find(u => u.role === 'tutor' && u.id !== 'demo-tutor');
  expect(user).toBeTruthy();
  await resetDemo(page, { state, user });
  await page.goto('/tutor/find-students');
  await page.getByRole('tab', { name: /Đơn ứng tuyển của tôi/ }).click();
  await expect(page.locator('.my-proposal-card')).toHaveCount(state.proposals.filter(p => p.tutorId === user.id).length);
});

test('UI-COMP-T07 another Tutor cannot read canonical Tutor private notifications', async ({ page }) => {
  const state = seed();
  const user = state.users.find(u => u.role === 'tutor' && u.id !== 'demo-tutor');
  expect(user).toBeTruthy();
  await resetDemo(page, { state, user });
  await page.goto('/tutor/dashboard');
  await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  for (const notification of state.notifications.filter(n => n.recipientId === 'demo-tutor')) {
    await expect(page.getByText(notification.message, { exact: true })).toHaveCount(0);
  }
});

test('UI-COMP-T08 completing a funded Lesson disburses its linked escrow exactly once', async ({ page }) => {
  const state = seed(); const lesson = state.lessons.find(l => l.id === 'seed-0');
  const funded = holdEscrowDeposit(state, {
    learnerId: 'demo-learner', tutorId: 'demo-tutor', lessonId: lesson.id,
    amount: lesson.sessionFee, subject: lesson.subject, sessionCount: 1, feePerSession: lesson.sessionFee,
  });
  expect(funded.error).toBeFalsy();
  const linked = funded.state.escrowTransactions.find(e => e.lessonId === lesson.id);
  expect(linked).toBeTruthy();
  await resetDemo(page, { state: funded.state });
  await login(page, 'giabao', '/tutor/timetable');
  await page.getByRole('button', { name: new RegExp(`${lesson.subject}.*${lesson.learner}`) }).click();
  const dialog = page.getByRole('dialog', { name: 'Chi tiết lớp học' });
  await dialog.getByRole('button', { name: 'Đánh dấu hoàn tất' }).click();
  await expect(dialog).toContainText('Hoàn tất');
  const after = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);
  expect(after.escrowTransactions.find(e => e.id === linked.id).status).toBe('disbursed');
  expect(after.wallets['demo-tutor'].ledger.filter(tx => tx.type === 'lesson_disbursed' && tx.refId === linked.id)).toHaveLength(1);
});

test('UI-COMP-T09 Tutor sidebar preserves a direct route to the approved Income screen', async ({ page }) => {
  await resetDemo(page); await login(page, 'giabao', '/tutor/dashboard');
  const income = page.locator('.tutor-sidebar a[href="/tutor/income"]');
  await expect(income).toHaveCount(1);
  await income.click();
  await expect(page).toHaveURL(/\/tutor\/income$/);
});

test('AUDIT core direct request remains shared through Tutor acceptance and Learner confirmation', async ({ page }) => {
  await resetDemo(page);
  await login(page, 'minhanh', '/tutors/quoc-bao');
  await page.locator('#profile-subjects').getByRole('button', { name: 'Tiếng Anh', exact: true }).click();
  await page.locator('#profile-subjects').getByRole('button', { name: 'THCS', exact: true }).click();
  await page.getByRole('region', { name: 'Lịch rảnh của Trần Gia Bảo' }).getByRole('button').first().click();
  await page.locator('#profile-location').getByRole('button', { name: 'Online', exact: true }).click();
  await page.getByLabel('Mong muốn học tập *').fill('Kiểm tra luồng yêu cầu trực tiếp');
  await page.getByRole('button', { name: 'Gửi yêu cầu học', exact: true }).click();
  await expect(page).toHaveURL(/\/requests\/[^/]+$/);
  const requestId = new URL(page.url()).pathname.split('/').at(-1);
  const { logout } = await import('./demoHelpers.js');
  await logout(page); await login(page, 'giabao', '/tutor/requests');
  await page.locator(`a[href="/tutor/requests/${requestId}"]`).click();
  await page.getByRole('button', { name: 'Nhận yêu cầu', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Đã nhận');
  await page.goto('/tutor/timetable');
  await expect(page.getByRole('button', { name: /Tiếng Anh.*Nguyễn Minh Anh/ }).first()).toBeVisible();
  await logout(page); await login(page, 'minhanh', `/requests/${requestId}`);
  await expect(page.locator('main')).toContainText('Đã xác nhận');
});
