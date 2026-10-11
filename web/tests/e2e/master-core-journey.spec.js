import { test, expect } from '@playwright/test';
import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
import { getBookableRanges, isFutureSession, proposalLabel, timeLabel, shortDate } from '../../src/data/tutorSchedule.js';
import { bookableSessions } from '../../src/features/learner/profileSelection.js';
import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';

// Storage is initialized once by resetDemo. Every subsequent mutation is a UI action.
const readState = page => page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);

test('MASTER-CORE UI post → moderation → application → private offer → deposit → lessons → settlement → payout', async ({ page }) => {
  test.setTimeout(120_000);
  page.setDefaultTimeout(15_000);
  await page.setViewportSize({ width: 1440, height: 1000 });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const seed = createDemoState(fixedTime);
  const learner = seed.users.find(user => user.username === 'minhanh');
  const tutor = seed.users.find(user => user.username === 'giabao');
  const admin = seed.users.find(user => user.role === 'admin');
  const profile = seed.profiles.find(item => item.accountId === tutor.id);
  const exemplar = seed.classPosts.find(post => post.subject === profile.subjects[0]);
  const sessions = bookableSessions(getBookableRanges(seed.availability, seed.lessons, profile.id), profile.sessionMinutes)
    .filter(session => isFutureSession(session, fixedTime)).slice(0, 2);
  expect(sessions).toHaveLength(2);
  expect(sessions.every(session => session.end - session.start === 45)).toBe(true);
  const goal = `Kiểm thử hành trình Master: ${exemplar.learningGoal}`;
  await resetDemo(page, { state: seed });
  await login(page, learner.username, '/learner/post-class');

  await test.step('Learner creates a pending English class using canonical fee and concrete future dates', async () => {
    await page.getByLabel('Môn học cần tìm gia sư *').fill(profile.subjects[0]);
    await page.getByLabel('Khối lớp học viên *').selectOption(exemplar.grade);
    await page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' }).click();
    await page.getByRole('button', { name: /Trực tuyến \(Online\)/ }).click();
    for (const session of sessions) {
      await page.getByLabel('Ngày học mong muốn').fill(session.date);
      await page.getByLabel('Giờ bắt đầu', { exact: true }).fill(timeLabel(session.start));
      await page.getByLabel('Thời lượng buổi học').selectOption('45');
      await page.getByRole('button', { name: 'Thêm buổi học', exact: true }).click();
    }
    await page.getByRole('button', { name: 'Tiếp tục: Ngân sách & Mục tiêu' }).click();
    await page.getByLabel('Nhập số tiền học phí mong muốn (VNĐ / buổi học):').fill(String(profile.price));
    await page.locator('#class-goal').fill(goal);
    await page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last().click();
    await expect(page).toHaveURL(/\/learner\/my-classes$/);
    await expect(page.locator('.myclass-card').filter({ hasText: goal })).toContainText('Chờ kiểm duyệt');
  });

  const created = (await readState(page)).classPosts.find(post => post.learningGoal === goal);
  expect(created).toMatchObject({ learnerId: learner.id, subject: profile.subjects[0], moderationStatus: 'pending' });
  expect(created.proposals).toEqual(sessions);

  await test.step('Admin approves the new post and Tutor submits an application', async () => {
    await logout(page);
    await login(page, tutor.username, '/tutor/find-students');
    await expect(page.locator('.tutor-find__class').filter({ hasText: goal })).toHaveCount(0);
    await logout(page);
    await login(page, admin.username, '/admin/classes');
    await page.getByRole('button', { name: 'Chờ kiểm duyệt', exact: true }).click();
    const row = page.locator('tbody tr').filter({ hasText: profile.subjects[0] }).filter({ hasText: exemplar.grade });
    await expect(row).toHaveCount(1);
    await row.getByRole('button', { name: 'Duyệt hiển thị', exact: true }).click();
    await expect.poll(async () => (await readState(page)).classPosts.find(post => post.id === created.id).moderationStatus).toBe('approved');
    await logout(page);
    await login(page, tutor.username, '/tutor/find-students');
    const card = page.locator('.tutor-find__class').filter({ hasText: goal });
    await expect(card).toBeVisible();
    await card.getByRole('button', { name: 'Ứng tuyển nhận lớp', exact: true }).click();
    await page.getByLabel('Học phí đề xuất của bạn (VNĐ / buổi học) *').fill(String(profile.price));
    await page.getByLabel('Lời nhắn gửi phụ huynh & Giới thiệu phương pháp dạy *').fill(`Kiểm thử ứng tuyển: ${profile.intro}`);
    await page.getByRole('button', { name: 'Gửi hồ sơ ứng tuyển', exact: true }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });

  const application = (await readState(page)).proposals.find(item => item.classPostId === created.id && item.tutorId === tutor.id);
  expect(application).toBeTruthy();

  await test.step('Learner selects that Tutor without booking early and sends a private message', async () => {
    await logout(page);
    await login(page, learner.username, '/learner/my-classes');
    const card = page.locator('.myclass-card').filter({ hasText: goal });
    await expect(card).toContainText(profile.name);
    await card.getByRole('button', { name: 'Chọn gia sư này', exact: true }).click();
    await expect(card).toContainText('Đã chọn · Chờ đặt cọc');
    const selected = await readState(page);
    expect(selected.classPosts.find(post => post.id === created.id)).toMatchObject({ status: 'awaiting_deposit', selectedProposalId: application.id });
    expect(selected.lessons.map(lesson => lesson.id)).toEqual(seed.lessons.map(lesson => lesson.id));
    expect(selected.wallets[learner.id].availableBalance).toBe(seed.wallets[learner.id].availableBalance);
    await page.getByRole('link', { name: 'Đặt cọc trong hội thoại', exact: true }).click();
    await expect(page).toHaveURL(/\/messages\?thread=/);
    await page.getByLabel('Nội dung tin nhắn', { exact: true }).fill('Tin nhắn kiểm thử riêng: xác nhận hai buổi học đã chọn.');
    await page.getByRole('button', { name: 'Gửi', exact: true }).click();
    await expect(page.locator('.chat-messages-stream')).toContainText('Tin nhắn kiểm thử riêng');
  });

  const thread = (await readState(page)).chatThreads.find(item => item.classPostId === created.id);
  expect(thread.participants.slice().sort()).toEqual([learner.id, tutor.id].sort());
  const threadRoute = `/messages?thread=${encodeURIComponent(thread.id)}`;

  await test.step('Tutor reads the same private message and sends a concrete two-session offer', async () => {
    await page.goto('/learner/my-classes'); await logout(page);
    await login(page, tutor.username, '/tutor/dashboard');
    await page.goto(threadRoute);
    await expect(page.locator('.chat-messages-stream')).toContainText('Tin nhắn kiểm thử riêng');
    await page.getByRole('button', { name: 'Gửi Đề xuất Học phí', exact: true }).first().click();
    await page.getByLabel('Môn học', { exact: true }).fill(profile.subjects[0]);
    await page.getByLabel('Khối lớp / Trình độ').fill(exemplar.grade);
    await page.getByLabel('Số buổi học', { exact: true }).fill('2');
    await page.getByLabel('Học phí / buổi (VNĐ)').fill(String(profile.price));
    await page.getByLabel('Lịch học dự kiến').fill(sessions.map(proposalLabel).join(' · '));
    for (const session of sessions) await page.getByRole('dialog').getByRole('checkbox', { name: proposalLabel(session), exact: true }).check();
    await page.getByRole('button', { name: 'Xác nhận gửi đề xuất', exact: true }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });

  const sent = (await readState(page)).messages.find(message => message.threadId === thread.id && message.type === 'custom_offer');
  expect(sent.offerData.proposals).toEqual(sessions);
  const beforeDeposit = await readState(page);
  await test.step('Learner deposits from existing balance and both roles share exact Request/Lesson/Escrow IDs', async () => {
    await page.goto('/tutor/dashboard'); await logout(page);
    await login(page, learner.username, '/learner/my-classes'); await page.goto(threadRoute);
    const offer = page.getByTestId('custom-offer-card');
    await expect(offer).toHaveCount(1);
    await offer.getByRole('button', { name: 'Đồng ý & Đặt cọc ngay', exact: true }).click();
    await page.getByRole('button', { name: 'Xác nhận đặt cọc', exact: true }).click();
    await expect(offer.locator('[data-status="accepted"]')).toBeVisible();
  });
  const paid = await readState(page);
  const request = paid.requests.find(item => item.threadId === thread.id);
  const booked = paid.lessons.filter(lesson => lesson.requestId === request.id);
  const escrow = paid.escrowTransactions.find(item => item.id === request.escrowId);
  expect(booked).toHaveLength(2);
  expect(escrow.lessonIds).toEqual(booked.map(lesson => lesson.id));
  expect(request).toMatchObject({ learnerId: learner.id, tutorId: profile.id, classPostId: created.id, status: 'accepted', sessionFee: profile.price });
  expect(paid.classPosts.find(post => post.id === created.id)).toMatchObject({ status: 'matched', requestId: request.id, escrowId: escrow.id });
  expect(paid.proposals.find(item => item.id === application.id).status).toBe('matched');
  expect(escrow).toMatchObject({ learnerId: learner.id, tutorId: tutor.id, amount: profile.price * 2, status: 'held' });
  expect(paid.wallets[learner.id].availableBalance).toBe(beforeDeposit.wallets[learner.id].availableBalance - escrow.amount);
  for (const lesson of booked) expect(lesson).toMatchObject({ learnerId: learner.id, tutorId: profile.id, sessionFee: profile.price, escrowId: escrow.id, status: 'confirmed' });

  await test.step('Tutor completes those same Lesson IDs and receives only their linked allocation', async () => {
    await page.goto('/learner/schedule');
    for (const lesson of booked) await expect(page.locator('.lesson-card').filter({ hasText: shortDate(lesson.date) }).filter({ hasText: `${timeLabel(lesson.start)} – ${timeLabel(lesson.end)}` }).filter({ hasText: lesson.subject })).toBeVisible();
    await logout(page); await login(page, tutor.username, '/tutor/timetable');
    for (const lesson of booked) {
      const blockName = `${lesson.subject} ${learner.fullName} ${lesson.date} ${timeLabel(lesson.start)}–${timeLabel(lesson.end)}`;
      await page.getByRole('button', { name: blockName, exact: true }).click();
      await expect(page.getByRole('dialog')).toContainText(profile.price.toLocaleString('vi-VN'));
      await page.getByRole('button', { name: 'Đánh dấu hoàn tất', exact: true }).click();
      await expect(page.getByRole('dialog')).toContainText('Đã đánh dấu hoàn tất');
      await page.keyboard.press('Escape');
      await expect(page.getByRole('dialog')).toHaveCount(0);
      await expect.poll(async () => (await readState(page)).lessons.find(item => item.id === lesson.id).status).toBe('completed');
    }
  });
  const completed = await readState(page);
  const settled = completed.escrowTransactions.find(item => item.id === escrow.id);
  expect(settled.status).toBe('disbursed');
  expect(settled.settlements.map(item => item.lessonId)).toEqual(booked.map(lesson => lesson.id));
  expect(settled.settlements.reduce((sum, item) => sum + item.amount, 0)).toBe(escrow.amount);
  const net = escrow.amount * (1 - escrow.platformFeePercent / 100);
  expect(completed.wallets[tutor.id].availableBalance).toBe(paid.wallets[tutor.id].availableBalance + net);
  expect(completed.escrowTransactions.filter(item => item.id !== escrow.id)).toEqual(paid.escrowTransactions.filter(item => item.id !== escrow.id));

  await test.step('Tutor requests a demo payout and Admin approves the same payout ID', async () => {
    await page.goto('/tutor/wallet');
    await page.getByRole('button', { name: 'Rút tiền về STK Ngân hàng', exact: true }).click();
    // Canonical demo bank details; no real banking action is performed.
    const bank = seed.wallets[tutor.id].bankAccount;
    await page.getByLabel('Ngân hàng nhận tiền:').selectOption(bank.bankName);
    await page.getByLabel('Số tài khoản ngân hàng:').fill(bank.accountNumber);
    await page.getByLabel('Tên chủ tài khoản (Viết hoa không dấu):').fill(bank.accountHolder);
    await page.getByLabel('Số tiền muốn rút (VNĐ):').fill('100000');
    await page.getByRole('button', { name: 'Xác nhận rút tiền', exact: true }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
    const pending = await readState(page);
    const payout = pending.payoutRequests.find(item => !seed.payoutRequests.some(prior => prior.id === item.id));
    expect(payout).toMatchObject({ tutorId: tutor.id, status: 'pending', amount: 100000, accountNumber: bank.accountNumber });
    expect(pending.wallets[tutor.id].availableBalance).toBe(completed.wallets[tutor.id].availableBalance - payout.amount);
    await logout(page); await login(page, admin.username, '/admin/finance');
    const row = page.locator('tbody tr').filter({ hasText: bank.accountNumber }).filter({ hasText: '100.000' }).filter({ hasText: 'Chờ phê duyệt' });
    await expect(row).toHaveCount(1);
    await row.getByRole('button', { name: 'Duyệt chuyển', exact: true }).click();
    await expect(row).toHaveCount(0);
    const approved = await readState(page);
    expect(approved.payoutRequests.find(item => item.id === payout.id).status).toBe('approved');
    expect(approved.wallets[tutor.id].availableBalance).toBe(pending.wallets[tutor.id].availableBalance);
    await page.reload();
    expect((await readState(page)).payoutRequests.find(item => item.id === payout.id).status).toBe('approved');
  });

  await test.step('Learner sees the completed shared lessons after role switch and reload', async () => {
    await logout(page); await login(page, learner.username, '/learner/schedule');
    await page.getByRole('button', { name: 'Đã hoàn thành', exact: true }).click();
    for (const lesson of booked) {
      const card = page.locator('.lesson-card').filter({ hasText: shortDate(lesson.date) }).filter({ hasText: `${timeLabel(lesson.start)} – ${timeLabel(lesson.end)}` }).filter({ hasText: lesson.subject });
      await expect(card).toBeVisible();
      await card.getByRole('button', { name: 'Chi tiết & Hủy lịch', exact: true }).click();
      await expect(page.getByRole('dialog')).toContainText('Đánh giá & Gia hạn khóa học');
      await page.keyboard.press('Escape');
    }
    await page.reload();
    const finalState = await readState(page);
    for (const lesson of booked) expect(finalState.lessons.find(item => item.id === lesson.id)).toMatchObject({ status: 'completed', requestId: request.id, escrowId: escrow.id, sessionFee: profile.price });
    expect(finalState.wallets[learner.id].availableBalance).toBe(paid.wallets[learner.id].availableBalance);
    expect(finalState.wallets[learner.id].escrowBalance).toBe(beforeDeposit.wallets[learner.id].escrowBalance);
    expect(finalState.messages.find(message => message.id === sent.id).offerData).toMatchObject({ status: 'accepted', requestId: request.id, escrowId: escrow.id });
  });
  expect(errors).toEqual([]);
});
