import { test, expect } from '@playwright/test';
import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';
import { createDemoState } from '../../src/features/domain/demoDomain.js';

test('APPEAL-MASTER two parties submit independent evidence and Admin sees both', async ({ page }) => {
  await resetDemo(page);
  await login(page, 'giabao', '/appeals');
  await page.getByLabel('Sự cố cần kháng cáo').selectOption('ISSUE-105');
  await page.getByLabel('Nội dung giải trình', { exact: true }).fill('Đề nghị đối chiếu lại diễn biến buổi học và nội dung trao đổi của hai bên.');
  await page.getByLabel('Liên kết bằng chứng', { exact: true }).fill('https://example.org/tutor-evidence');
  await page.getByLabel('Mô tả và nguồn bằng chứng', { exact: true }).fill('Bản trao đổi demo do gia sư cung cấp để đối chiếu.');
  await page.getByRole('checkbox', { name: /Tôi cam kết/ }).check();
  await page.getByRole('button', { name: 'Gửi kháng cáo', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Đã gửi kháng cáo');
  await logout(page);
  await login(page, 'minhanh', '/appeals');
  await page.getByRole('button', { name: 'Bổ sung giải trình', exact: true }).click();
  await page.getByLabel('Nội dung phản hồi').fill('Tôi bổ sung nội dung trao đổi từ phía người học để quản trị viên đối chiếu sự việc.');
  await page.getByLabel('Liên kết bằng chứng phản hồi').fill('https://example.org/learner-evidence');
  await page.getByLabel('Mô tả nguồn bằng chứng phản hồi').fill('Bản trao đổi demo do người học cung cấp.');
  await page.getByRole('checkbox', { name: /Tôi cam kết phản hồi/ }).check();
  await page.getByRole('button', { name: 'Gửi phản hồi', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Đã bổ sung');
  await logout(page);
  await login(page, 'admin', '/admin/appeals');
  await page.getByRole('button', { name: /Xem kháng cáo appeal-/ }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('heading', { name: 'Người học / Phụ huynh' })).toBeVisible();
  await expect(dialog.getByRole('heading', { name: 'Gia sư' })).toBeVisible();
  await expect(dialog).toContainText('Tôi bổ sung nội dung trao đổi');
  await expect(dialog).toContainText('Đề nghị đối chiếu lại diễn biến');
});

for (const action of ['refund', 'disburse', 'split']) {
  test(`APPEAL-MASTER confirmed ${action} verdict applies once to the linked escrow`, async ({ page }) => {
    const state = createDemoState(fixedTime);
    const escrow = state.escrowTransactions.find(e => e.status === 'held');
    const issue = state.issues.find(i => i.id === 'ISSUE-105');
    escrow.lessonId = state.lessons.find(l => l.tutorId === 'quoc-bao' && l.learnerId === 'demo-learner').id;
    escrow.lessonIds = [escrow.lessonId];
    issue.relatedLessonId = escrow.lessonId;
    state.appeals = [{ id: 'appeal-audit', issueId: issue.id, accountId: 'demo-tutor', reason: 'misunderstanding',
      content: 'Đề nghị đối chiếu bằng chứng và quyết định tiền ký quỹ theo buổi học đã liên kết.', truthful: true,
      evidence: [{ kind: 'link', url: 'https://example.org/appeal-proof', description: 'Bằng chứng demo phục vụ đối chiếu.' }],
      status: 'pending', createdAt: fixedTime.toISOString() }];
    await resetDemo(page, { state });
    await login(page, 'admin', '/admin/appeals');
    await page.getByRole('button', { name: 'Xem kháng cáo appeal-audit' }).click();
    await page.getByLabel('Kết quả xem xét').selectOption('accepted');
    await page.getByLabel('Căn cứ / phản hồi').fill('Đã đối chiếu bằng chứng của hồ sơ demo và xác nhận phương án xử lý ký quỹ.');
    await page.getByRole('combobox', { name: /^Xử lý ký quỹ/ }).selectOption(action);
    await page.getByRole('button', { name: 'Lưu kết quả', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true })).toBeVisible();
    expect(await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id).status, escrow.id)).toBe('held');
    await page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('Đã lưu');
    const after = await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id), escrow.id);
    expect(after.status).toBe(action === 'refund' ? 'refunded' : action === 'disburse' ? 'disbursed' : 'partially_refunded');
    expect(after.settlements[0].refund).toBe(action === 'refund' ? escrow.amount : action === 'split' ? escrow.amount / 2 : 0);
    await page.reload();
    await page.getByRole('button', { name: 'Xem kháng cáo appeal-audit' }).click();
    await expect(page.getByRole('button', { name: 'Lưu kết quả', exact: true })).toHaveCount(0);
    await expect(page.getByRole('dialog')).toContainText('Đã áp dụng');
  });
}

test('ADMIN-MASTER account locking requires a reason and records the decision', async ({ page }) => {
  await resetDemo(page);
  await login(page, 'admin', '/admin/users');
  await page.getByRole('searchbox', { name: 'Tìm kiếm người dùng' }).fill('minhanh');
  await page.getByRole('button', { name: 'Khóa tài khoản minhanh', exact: true }).click();
  await page.getByRole('button', { name: 'Xác nhận khóa tài khoản', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('lý do');
  await page.getByLabel('Lý do quyết định').fill('Đã đối chiếu báo cáo demo và cần tạm khóa để xử lý sự cố.');
  await page.getByRole('button', { name: 'Xác nhận khóa tài khoản', exact: true }).click();
  await expect(page.locator('tbody')).toContainText('Đang bị khóa');
  await page.goto('/admin/logs');
  await expect(page.locator('tbody')).toContainText('Đã đối chiếu báo cáo demo');
});

test('ADMIN-MASTER approval preview uses uploaded student card images without inventing verified documents', async ({ page }) => {
  const state = createDemoState(fixedTime);
  const profile = state.profiles.find(p => p.accountId === 'demo-tutor');
  const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==';
  profile.verificationDocuments = [
    { side: 'front', name: 'uploaded-front.png', type: 'image/png', dataUrl: png },
    { side: 'back', name: 'uploaded-back.png', type: 'image/png', dataUrl: png },
  ];
  await resetDemo(page, { state });
  await login(page, 'admin', '/admin/tutors');
  await page.getByRole('tab', { name: 'Tất cả', exact: true }).click();
  await page.getByRole('button', { name: 'Xem chi tiết hồ sơ Trần Gia Bảo', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('img', { name: 'Mặt trước thẻ sinh viên' })).toBeVisible();
  await expect(dialog.getByRole('img', { name: 'Mặt sau thẻ sinh viên' })).toBeVisible();
  await expect(dialog.locator('.admin-verification-docs')).not.toContainText('Đã kiểm tra');
  await expect(dialog.locator('.admin-verification-docs')).toContainText('uploaded-front.png');
});

test('ADMIN-MASTER dashboard counts each SOS incident once and derives outstanding funds', async ({ page }) => {
  const state = createDemoState(fixedTime);
  const lesson = state.lessons.find(l => l.tutorId === 'quoc-bao');
  state.safetyLogs = [{ id: 'audit-sos', action: 'sos', tutorId: lesson.tutorId, lessonId: lesson.id, timestamp: fixedTime.toISOString(), note: 'Tín hiệu SOS demo' }];
  state.notifications.push({ id: 'audit-sos-notice', eventId: 'audit-sos', type: 'sos_alert', recipientId: 'demo-admin', tutorId: lesson.tutorId, lessonId: lesson.id, createdAt: fixedTime.toISOString(), message: 'Tín hiệu SOS demo' });
  const escrow = state.escrowTransactions.find(e => e.status === 'held');
  escrow.settlements = [{ lessonId: lesson.id, amount: escrow.feePerSession, refund: 0, tutorNet: escrow.feePerSession * 0.9, platformFee: escrow.feePerSession * 0.1 }];
  await resetDemo(page, { state });
  await login(page, 'admin', '/admin/dashboard');
  const pending = escrow.amount - escrow.feePerSession;
  await expect(page.locator('.stat-item').filter({ hasText: 'Cảnh báo SOS' })).toContainText('1');
  await expect(page.locator('.stat-item').filter({ hasText: 'Số dư Ký quỹ Escrow' })).toContainText(pending.toLocaleString('vi-VN'));
  await expect(page.locator('.stat-item').filter({ hasText: 'Doanh thu phí sàn' })).toContainText((escrow.feePerSession * .1).toLocaleString('vi-VN'));
});

for (const action of ['unsuspend', 'reduce_warning', 'hide_review']) {
  test(`APPEAL-MASTER ${action} requires confirmation and changes only the linked entity`, async ({ page }) => {
    const state = createDemoState(fixedTime);
    const issue = state.issues.find(i => i.id === 'ISSUE-105');
    const account = state.users.find(u => u.id === 'demo-tutor');
    const review = state.reviews[0];
    if (action === 'unsuspend') account.status = 'suspended';
    issue.relatedReviewId = review.id;
    const priorCount = account.warningCount;
    state.appeals = [{ id: 'appeal-account-audit', issueId: issue.id, accountId: account.id, reason: 'wrongful', content: 'Đề nghị đối chiếu lại hồ sơ, cảnh cáo và đánh giá liên quan tới sự cố.', truthful: true,
      evidence: [{ kind: 'link', url: 'https://example.org/account-proof', description: 'Bằng chứng demo phục vụ xét hồ sơ.' }], status: 'pending', createdAt: fixedTime.toISOString() }];
    await resetDemo(page, { state });
    await login(page, 'admin', '/admin/appeals');
    await page.getByRole('button', { name: 'Xem kháng cáo appeal-account-audit' }).click();
    await page.getByRole('combobox', { name: /^Kết quả xem xét/ }).selectOption('accepted');
    await page.getByLabel('Căn cứ / phản hồi').fill('Đã đối chiếu bằng chứng độc lập và xác nhận xử lý đúng đối tượng liên quan.');
    if (action === 'hide_review') await page.getByRole('combobox', { name: /^Đánh giá liên quan/ }).selectOption(review.id);
    else {
      await page.getByRole('combobox', { name: /^Xử lý tài khoản/ }).selectOption(action);
      if (action === 'reduce_warning') await page.getByRole('combobox', { name: /^Cảnh cáo cần xem xét/ }).selectOption(account.warnings.find(w => w.issueId === issue.id).id);
    }
    await page.getByRole('button', { name: 'Lưu kết quả', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('Đã lưu');
    const updated = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
    if (action === 'unsuspend') expect(updated.users.find(u => u.id === account.id).status).toBe('active');
    else if (action === 'reduce_warning') expect(updated.users.find(u => u.id === account.id).warningCount).toBe(priorCount - 1);
    else expect(updated.reviews.find(r => r.id === review.id).moderationStatus).toBe('hidden');
    await page.goto('/admin/logs');
    await expect(page.locator('tbody')).toContainText('APPEAL_DECISION');
  });
}
