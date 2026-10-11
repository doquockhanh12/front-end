import { test, expect } from '@playwright/test';
import { resetDemo, login, logout } from './demoHelpers.js';
import { createDemoState } from '../../src/features/domain/demoDomain.js';
import { fixedTime } from './demoHelpers.js';
import { acceptDomainOffer } from '../../src/features/domain/commerce.js';
import { getBookableRanges } from '../../src/data/tutorSchedule.js';
import { bookableSessions } from '../../src/features/learner/profileSelection.js';

test('Learner lesson downloads real attached content and can submit homework', async ({ page }) => {
  const state = createDemoState(fixedTime);
  const lesson = state.lessons.find(item => item.learnerId === 'demo-learner');
  lesson.materials = [{ name: 'assignment.txt', type: 'text/plain', dataUrl: 'data:text/plain;base64,bGVzc29u' }];
  await resetDemo(page, { state }); await login(page, 'minhanh', '/learner/schedule');
  await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  const downloaded = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Tải assignment.txt' }).click();
  expect((await downloaded).suggestedFilename()).toBe('assignment.txt');
  await page.getByLabel('Nộp bài tập').setInputFiles({ name: 'homework.txt', mimeType: 'text/plain', buffer: Buffer.from('Learner submission') });
  await expect(page.getByText('homework.txt', { exact: true })).toBeVisible();
});

test('Learner completed lesson supports review and a four-session renewal with concrete dates', async ({ page }) => {
  await resetDemo(page); await login(page, 'minhanh', '/learner/schedule');
  await page.getByRole('button', { name: 'Đã hoàn thành', exact: true }).click();
  await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  await page.getByLabel('Nhận xét', { exact: true }).fill('Buổi học rõ ràng, giải thích dễ hiểu.');
  await page.getByRole('button', { name: 'Gửi đánh giá buổi học' }).click();
  await expect(page.getByRole('status')).toContainText('Đã gửi đánh giá');
  await page.getByLabel(/Gia hạn với gia sư/).selectOption('4');
  for (let index = 0; index < 4; index++) await page.locator('.offer-session-picker input').nth(index).check();
  await page.getByRole('button', { name: 'Đặt cọc gia hạn' }).click();
  await expect(page.getByRole('status')).toContainText('Đã đặt cọc và gia hạn');
});

test('Learner reschedules an owned future lesson while preserving linked lesson identity', async ({ page }) => {
  const seed = createDemoState(fixedTime);
  const proposals = bookableSessions(getBookableRanges(seed.availability, seed.lessons, 'quoc-bao'), 45)
    .filter(item => new Date(`${item.date}T00:00:00+07:00`).getTime() + item.start * 60000 - fixedTime.getTime() >= 86400000).slice(0, 2);
  const paid = acceptDomainOffer(seed, 'msg-003', 'accepted', seed.users.find(user => user.id === 'demo-learner'), { proposals }, fixedTime);
  expect(paid.ok, paid.error).toBe(true);
  const original = paid.state.lessons.find(lesson => lesson.id === paid.lessonIds[0]);
  await resetDemo(page, { state: paid.state }); await login(page, 'minhanh', '/learner/schedule');
  await page.getByRole('button', { name: 'Sắp diễn ra', exact: true }).click();
  await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  await page.getByRole('button', { name: 'Yêu cầu đổi lịch' }).click();
  await page.locator('.lesson-reschedule .offer-session-picker input').first().check();
  await page.getByRole('button', { name: 'Xác nhận đổi lịch' }).click();
  await expect(page.getByRole('status')).toContainText('Đã đổi lịch');
  const updated = await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).lessons.find(lesson => lesson.id === id), original.id);
  for (const field of ['id', 'requestId', 'escrowId', 'sessionFee']) expect(updated[field]).toBe(original[field]);
  expect([updated.date, updated.start, updated.end]).not.toEqual([original.date, original.start, original.end]);
  await expect(page.getByRole('dialog').locator('.lesson-info-meta')).toContainText(`${String(updated.start / 60 | 0).padStart(2, '0')}:${String(updated.start % 60).padStart(2, '0')}`);
});

test('UI-COMP-L16 cancellation preview uses the actual lesson time and linked deposit', async ({ page }) => {
  const seed = createDemoState(fixedTime);
  const proposals = bookableSessions(getBookableRanges(seed.availability, seed.lessons, 'quoc-bao'), 45).slice(0, 2);
  const paid = acceptDomainOffer(seed, 'msg-003', 'accepted', seed.users.find(user => user.id === 'demo-learner'), { proposals }, fixedTime);
  expect(paid.ok, paid.error).toBe(true);
  const lesson = paid.state.lessons.find(item => item.id === paid.lessonIds[0]);
  const referenceTime = new Date(new Date(`${lesson.date}T00:00:00+07:00`).getTime() + lesson.start * 60000 - 5 * 3600000);
  await resetDemo(page, { state: paid.state, referenceTime }); await login(page, 'minhanh', '/learner/schedule');
  await page.getByRole('button', { name: 'Sắp diễn ra', exact: true }).click();
  await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  await expect(page.getByRole('dialog')).toContainText('Hủy trong 2h – 24h: Hoàn tiền 50%');
  await expect(page.getByRole('button', { name: /Ví dụ:.*giờ/ })).toHaveCount(0);
  await page.getByRole('button', { name: 'Hủy buổi học này', exact: true }).click();
  await page.getByRole('button', { name: 'Xác nhận hủy buổi học' }).click();
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  expect(after.lessons.find(item => item.id === lesson.id).status).toBe('cancelled');
  expect(after.wallets['demo-learner'].availableBalance).toBe(paid.state.wallets['demo-learner'].availableBalance + lesson.sessionFee / 2);
});

test('UI-COMP-L18 concrete offer form remains scrollable and payable across roles', async ({ page }) => {
  const browserErrors = [];
  page.on('pageerror', error => browserErrors.push(error.message));
  await resetDemo(page); await login(page, 'giabao', '/messages');
  await page.getByRole('button', { name: 'Gửi Đề xuất Học phí', exact: true }).first().click();
  expect(browserErrors).toEqual([]);
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByLabel('Khối lớp / Trình độ').fill('THPT');
  await page.getByLabel('Lịch học dự kiến').fill('Lịch cụ thể đã chọn');
  await page.locator('.custom-offer-modal .offer-session-picker input').nth(0).check();
  await page.locator('.custom-offer-modal .offer-session-picker input').nth(1).check();
  await page.getByRole('button', { name: 'Xác nhận gửi đề xuất' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await page.goto('/tutor/dashboard'); await logout(page);
  await login(page, 'minhanh', '/messages');
  const offer = page.getByTestId('custom-offer-card').filter({ hasText: 'THPT' });
  await offer.getByRole('button', { name: 'Đồng ý & Đặt cọc ngay' }).click();
  await page.getByRole('button', { name: 'Xác nhận đặt cọc', exact: true }).click();
  await expect(offer.locator('[data-status="accepted"]')).toBeVisible();
});

test('Learner discovery preserves tutor map positions after sorting and filters by level', async ({ page }) => {
  await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  const pin = page.getByRole('button', { name: /Chọn Trần Gia Bảo,/ });
  const before = await pin.getAttribute('transform');
  await page.getByLabel('Sắp xếp').selectOption('price');
  expect(await pin.getAttribute('transform')).toBe(before);
  await page.getByRole('group', { name: 'Cấp độ học' }).getByLabel('THCS', { exact: true }).check();
  await expect(page.locator('.learner-split-list .tutor-card')).not.toHaveCount(0);
});

test('Learner post supports Mầm non and stores user-selected concrete session proposals', async ({ page }) => {
  await resetDemo(page); await login(page, 'minhanh', '/learner/post-class');
  await page.getByLabel('Khối lớp học viên *').selectOption('Mầm non');
  await page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' }).click();
  await page.getByLabel('Ngày học mong muốn').fill('2026-10-08');
  await page.getByLabel('Giờ bắt đầu').fill('18:00');
  await page.getByRole('button', { name: 'Thêm buổi học' }).click();
  await page.getByRole('button', { name: 'Tiếp tục: Ngân sách & Mục tiêu' }).click();
  await page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last().click();
  await expect(page).toHaveURL(/my-classes$/);
  await expect(page.locator('.myclass-card').filter({ hasText: 'Mầm non' })).toContainText('08/10');
});

test('UI-COMP-L17 negotiable class does not persist hidden mock budget amounts', async ({ page }) => {
  await resetDemo(page); await login(page, 'minhanh', '/learner/post-class');
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).classPosts.map(post => post.id));
  await page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' }).click();
  await page.getByRole('button', { name: 'Tiếp tục: Ngân sách & Mục tiêu' }).click();
  await page.getByRole('button', { name: /4. Thương lượng/ }).click();
  await page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last().click();
  await expect(page).toHaveURL(/my-classes$/);
  const created = await page.evaluate(ids => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).classPosts.find(post => !ids.includes(post.id)), before);
  expect(created.budgetMode).toBe('negotiable');
  for (const field of ['budgetAmount', 'minBudget', 'maxBudget']) expect(created[field]).toBeNull();
});

test('Learner incident refund records selected reason and only settles the linked lesson allocation', async ({ page }) => {
  const seed = createDemoState(fixedTime);
  const proposals = bookableSessions(getBookableRanges(seed.availability, seed.lessons, 'quoc-bao'), 45).slice(0, 2);
  const paid = acceptDomainOffer(seed, 'msg-003', 'accepted', seed.users.find(user => user.id === 'demo-learner'), { proposals }, fixedTime);
  expect(paid.ok, paid.error).toBe(true);
  const lesson = paid.state.lessons.find(item => item.id === paid.lessonIds[0]);
  await resetDemo(page, { state: paid.state }); await login(page, 'minhanh', '/learner/schedule');
  await page.getByRole('button', { name: 'Sắp diễn ra', exact: true }).click();
  await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  const refund = page.getByRole('button', { name: 'Yêu cầu Hoàn tiền 100% vì Sự cố' });
  await expect(refund).toBeDisabled();
  const reason = 'Gia sư trễ từ 15 phút';
  await page.getByLabel('Lý do yêu cầu hoàn tiền').selectOption(reason);
  await refund.click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  const escrow = after.escrowTransactions.find(item => item.id === lesson.escrowId);
  expect(escrow.status).toBe('held');
  expect(escrow.settlements).toHaveLength(1);
  expect(escrow.settlements[0]).toMatchObject({ lessonId: lesson.id, reason, refund: lesson.sessionFee });
  expect(after.lessons.find(item => item.id === lesson.id)).toMatchObject({ status: 'cancelled', cancelReason: reason });
  expect(after.lessons.find(item => item.id === paid.lessonIds[1]).status).toBe('confirmed');
  expect(after.wallets['demo-learner'].availableBalance).toBe(paid.state.wallets['demo-learner'].availableBalance + lesson.sessionFee);
});
