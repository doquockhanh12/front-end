# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-completion-flows.spec.js >> ADMIN-MASTER account locking requires a reason and records the decision
- Location: tests\e2e\admin-completion-flows.spec.js:67:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('tbody')
Expected substring: "Đã đối chiếu báo cáo demo"
Received string:    "09:30:00 1/10/2026Quản trị viênAPPROVE_TUTORtutor_profile: mai-anhPhê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên14:15:00 2/10/2026Quản trị viênRESOLVE_DISPUTEissue: ISSUE-101Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính10:00:00 3/10/2026Quản trị viênUPDATE_SETTINGSsystem_settings: fee_configurationCập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('tbody') with timeout 5000ms
  - waiting for locator('tbody')
    13 × locator resolved to <tbody>…</tbody>
       - unexpected value "09:30:00 1/10/2026Quản trị viênAPPROVE_TUTORtutor_profile: mai-anhPhê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên14:15:00 2/10/2026Quản trị viênRESOLVE_DISPUTEissue: ISSUE-101Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính10:00:00 3/10/2026Quản trị viênUPDATE_SETTINGSsystem_settings: fee_configurationCập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%"

```

```yaml
- rowgroup:
  - 'row "09:30:00 1/10/2026 Quản trị viên APPROVE_TUTOR tutor_profile: mai-anh Phê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên"':
    - cell "09:30:00 1/10/2026"
    - cell "Quản trị viên"
    - cell "APPROVE_TUTOR"
    - 'cell "tutor_profile: mai-anh"'
    - cell "Phê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên"
  - 'row "14:15:00 2/10/2026 Quản trị viên RESOLVE_DISPUTE issue: ISSUE-101 Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính"':
    - cell "14:15:00 2/10/2026"
    - cell "Quản trị viên"
    - cell "RESOLVE_DISPUTE"
    - 'cell "issue: ISSUE-101"'
    - cell "Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính"
  - 'row "10:00:00 3/10/2026 Quản trị viên UPDATE_SETTINGS system_settings: fee_configuration Cập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%"':
    - cell "10:00:00 3/10/2026"
    - cell "Quản trị viên"
    - cell "UPDATE_SETTINGS"
    - 'cell "system_settings: fee_configuration"'
    - cell "Cập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';
  3  | import { createDemoState } from '../../src/features/domain/demoDomain.js';
  4  | 
  5  | test('APPEAL-MASTER two parties submit independent evidence and Admin sees both', async ({ page }) => {
  6  |   await resetDemo(page);
  7  |   await login(page, 'giabao', '/appeals');
  8  |   await page.getByLabel('Sự cố cần kháng cáo').selectOption('ISSUE-105');
  9  |   await page.getByLabel('Nội dung giải trình', { exact: true }).fill('Đề nghị đối chiếu lại diễn biến buổi học và nội dung trao đổi của hai bên.');
  10 |   await page.getByLabel('Liên kết bằng chứng', { exact: true }).fill('https://example.org/tutor-evidence');
  11 |   await page.getByLabel('Mô tả và nguồn bằng chứng', { exact: true }).fill('Bản trao đổi demo do gia sư cung cấp để đối chiếu.');
  12 |   await page.getByRole('checkbox', { name: /Tôi cam kết/ }).check();
  13 |   await page.getByRole('button', { name: 'Gửi kháng cáo', exact: true }).click();
  14 |   await expect(page.getByRole('status')).toContainText('Đã gửi kháng cáo');
  15 |   await logout(page);
  16 |   await login(page, 'minhanh', '/appeals');
  17 |   await page.getByRole('button', { name: 'Bổ sung giải trình', exact: true }).click();
  18 |   await page.getByLabel('Nội dung phản hồi').fill('Tôi bổ sung nội dung trao đổi từ phía người học để quản trị viên đối chiếu sự việc.');
  19 |   await page.getByLabel('Liên kết bằng chứng phản hồi').fill('https://example.org/learner-evidence');
  20 |   await page.getByLabel('Mô tả nguồn bằng chứng phản hồi').fill('Bản trao đổi demo do người học cung cấp.');
  21 |   await page.getByRole('checkbox', { name: /Tôi cam kết phản hồi/ }).check();
  22 |   await page.getByRole('button', { name: 'Gửi phản hồi', exact: true }).click();
  23 |   await expect(page.getByRole('status')).toContainText('Đã bổ sung');
  24 |   await logout(page);
  25 |   await login(page, 'admin', '/admin/appeals');
  26 |   await page.getByRole('button', { name: /Xem kháng cáo appeal-/ }).click();
  27 |   const dialog = page.getByRole('dialog');
  28 |   await expect(dialog.getByRole('heading', { name: 'Người học / Phụ huynh' })).toBeVisible();
  29 |   await expect(dialog.getByRole('heading', { name: 'Gia sư' })).toBeVisible();
  30 |   await expect(dialog).toContainText('Tôi bổ sung nội dung trao đổi');
  31 |   await expect(dialog).toContainText('Đề nghị đối chiếu lại diễn biến');
  32 | });
  33 | 
  34 | for (const action of ['refund', 'disburse', 'split']) {
  35 |   test(`APPEAL-MASTER confirmed ${action} verdict applies once to the linked escrow`, async ({ page }) => {
  36 |     const state = createDemoState(fixedTime);
  37 |     const escrow = state.escrowTransactions.find(e => e.status === 'held');
  38 |     const issue = state.issues.find(i => i.id === 'ISSUE-105');
  39 |     escrow.lessonId = state.lessons.find(l => l.tutorId === 'quoc-bao' && l.learnerId === 'demo-learner').id;
  40 |     escrow.lessonIds = [escrow.lessonId];
  41 |     issue.relatedLessonId = escrow.lessonId;
  42 |     state.appeals = [{ id: 'appeal-audit', issueId: issue.id, accountId: 'demo-tutor', reason: 'misunderstanding',
  43 |       content: 'Đề nghị đối chiếu bằng chứng và quyết định tiền ký quỹ theo buổi học đã liên kết.', truthful: true,
  44 |       evidence: [{ kind: 'link', url: 'https://example.org/appeal-proof', description: 'Bằng chứng demo phục vụ đối chiếu.' }],
  45 |       status: 'pending', createdAt: fixedTime.toISOString() }];
  46 |     await resetDemo(page, { state });
  47 |     await login(page, 'admin', '/admin/appeals');
  48 |     await page.getByRole('button', { name: 'Xem kháng cáo appeal-audit' }).click();
  49 |     await page.getByLabel('Kết quả xem xét').selectOption('accepted');
  50 |     await page.getByLabel('Căn cứ / phản hồi').fill('Đã đối chiếu bằng chứng của hồ sơ demo và xác nhận phương án xử lý ký quỹ.');
  51 |     await page.getByRole('combobox', { name: /^Xử lý ký quỹ/ }).selectOption(action);
  52 |     await page.getByRole('button', { name: 'Lưu kết quả', exact: true }).click();
  53 |     await expect(page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true })).toBeVisible();
  54 |     expect(await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id).status, escrow.id)).toBe('held');
  55 |     await page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true }).click();
  56 |     await expect(page.getByRole('status')).toContainText('Đã lưu');
  57 |     const after = await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id), escrow.id);
  58 |     expect(after.status).toBe(action === 'refund' ? 'refunded' : action === 'disburse' ? 'disbursed' : 'partially_refunded');
  59 |     expect(after.settlements[0].refund).toBe(action === 'refund' ? escrow.amount : action === 'split' ? escrow.amount / 2 : 0);
  60 |     await page.reload();
  61 |     await page.getByRole('button', { name: 'Xem kháng cáo appeal-audit' }).click();
  62 |     await expect(page.getByRole('button', { name: 'Lưu kết quả', exact: true })).toHaveCount(0);
  63 |     await expect(page.getByRole('dialog')).toContainText('Đã áp dụng');
  64 |   });
  65 | }
  66 | 
  67 | test('ADMIN-MASTER account locking requires a reason and records the decision', async ({ page }) => {
  68 |   await resetDemo(page);
  69 |   await login(page, 'admin', '/admin/users');
  70 |   await page.getByRole('searchbox', { name: 'Tìm kiếm người dùng' }).fill('minhanh');
  71 |   await page.getByRole('button', { name: 'Khóa tài khoản minhanh', exact: true }).click();
  72 |   await page.getByRole('button', { name: 'Xác nhận khóa tài khoản', exact: true }).click();
  73 |   await expect(page.getByRole('alert')).toContainText('lý do');
  74 |   await page.getByLabel('Lý do quyết định').fill('Đã đối chiếu báo cáo demo và cần tạm khóa để xử lý sự cố.');
  75 |   await page.getByRole('button', { name: 'Xác nhận khóa tài khoản', exact: true }).click();
  76 |   await expect(page.locator('tbody')).toContainText('Đang bị khóa');
  77 |   await page.goto('/admin/logs');
> 78 |   await expect(page.locator('tbody')).toContainText('Đã đối chiếu báo cáo demo');
     |                                       ^ Error: expect(locator).toContainText(expected) failed
  79 | });
  80 | 
```