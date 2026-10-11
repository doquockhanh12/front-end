# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-completion-flows.spec.js >> APPEAL-MASTER confirmed refund verdict applies once to the linked escrow
- Location: tests\e2e\admin-completion-flows.spec.js:35:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('status')
Expected substring: "Đã lưu"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('status') with timeout 5000ms
  - waiting for getByRole('status')

```

```yaml
- complementary "Điều hướng quản trị":
  - link "TutorNearMe — trang chủ":
    - /url: /
    - text: TutorNearMe
  - text: QUẢN TRỊ HỆ THỐNG
  - navigation "Các mục quản trị":
    - link "Tổng quan":
      - /url: /admin/dashboard
    - link "Gia sư 3":
      - /url: /admin/tutors
    - link "Người dùng":
      - /url: /admin/users
    - link "Đánh giá 2":
      - /url: /admin/reviews
    - link "Báo cáo & sự cố 4":
      - /url: /admin/issues
    - link "Kháng cáo":
      - /url: /admin/appeals
    - link "Lớp học":
      - /url: /admin/classes
    - link "Tài chính Escrow 1":
      - /url: /admin/finance
    - link "Môn học":
      - /url: /admin/subjects
    - link "Khu vực":
      - /url: /admin/locations
    - link "Cài đặt":
      - /url: /admin/settings
    - link "Nhật ký":
      - /url: /admin/logs
  - text: Bản demo frontend TutorNearMe · Admin workspace
- banner:
  - text: Quản trị
  - strong: Kháng cáo
  - img "Ảnh đại diện của Quản trị viên"
  - text: Quản trị viên
  - button "Đăng xuất"
- main:
  - text: XEM XÉT LẠI BÁO CÁO
  - heading "Kháng cáo" [level=1]
  - paragraph: Đối chiếu giải trình và bằng chứng của bên bị báo cáo trước khi đưa ra kết quả.
  - link "Báo cáo & sự cố":
    - /url: /admin/issues
  - text: Trạng thái kháng cáo
  - combobox "Trạng thái kháng cáo":
    - option "Tất cả" [selected]
    - option "Chờ xem xét"
    - option "Đang xem xét"
    - option "Chấp nhận"
    - option "Không chấp nhận"
  - text: Tìm kháng cáo
  - searchbox "Tìm kháng cáo"
  - paragraph: Hiển thị 1 / 1 hồ sơ
  - region "Bảng kháng cáo":
    - table:
      - rowgroup:
        - row "Hồ sơ / sự cố Tài khoản Lý do Ngày gửi Trạng thái Thao tác":
          - columnheader "Hồ sơ / sự cố"
          - columnheader "Tài khoản"
          - columnheader "Lý do"
          - columnheader "Ngày gửi"
          - columnheader "Trạng thái"
          - columnheader "Thao tác"
      - rowgroup:
        - row "appeal-audit ISSUE-105 Trần Gia Bảo Hiểu nhầm 5/10/2026 Chờ xem xét Xem kháng cáo appeal-audit":
          - cell "appeal-audit ISSUE-105":
            - strong: appeal-audit
            - text: ISSUE-105
          - cell "Trần Gia Bảo"
          - cell "Hiểu nhầm"
          - cell "5/10/2026"
          - cell "Chờ xem xét"
          - cell "Xem kháng cáo appeal-audit":
            - button "Xem kháng cáo appeal-audit"
  - dialog "Kháng cáo appeal-audit":
    - complementary:
      - heading "Kháng cáo appeal-audit" [level=2]
      - text: Chờ xem xét
      - button "Đóng bảng chi tiết"
      - heading "Trần Gia Bảo" [level=3]
      - paragraph:
        - strong: ISSUE-105
        - text: · Phản ánh thái độ thiếu kiên nhẫn khi giảng bài
      - paragraph: Hiểu nhầm
      - paragraph: Đề nghị đối chiếu bằng chứng và quyết định tiền ký quỹ theo buổi học đã liên kết.
      - text: Người gửi đã cam kết nội dung và bằng chứng trung thực. Admin cần đối chiếu độc lập.
      - heading "Người học / Phụ huynh" [level=3]
      - strong: Nguyễn Minh Anh
      - paragraph: Chưa có giải trình và bằng chứng của bên này.
      - heading "Gia sư" [level=3]
      - strong: Trần Gia Bảo
      - article:
        - paragraph: Đề nghị đối chiếu bằng chứng và quyết định tiền ký quỹ theo buổi học đã liên kết.
        - article:
          - strong: Bằng chứng 1
          - paragraph: Bằng chứng demo phục vụ đối chiếu.
          - link "Mở bằng chứng":
            - /url: https://example.org/appeal-proof
        - text: 06:00:00 5/10/2026
      - heading "Xem xét kháng cáo" [level=3]
      - text: Kết quả xem xét
      - combobox "Kết quả xem xét":
        - option "Đang xem xét"
        - option "Chấp nhận" [selected]
        - option "Không chấp nhận"
      - text: Căn cứ / phản hồi
      - textbox "Căn cứ / phản hồi": Đã đối chiếu bằng chứng của hồ sơ demo và xác nhận phương án xử lý ký quỹ.
      - text: Tài khoản áp dụng
      - combobox "Tài khoản áp dụng":
        - option "Nguyễn Minh Anh"
        - option "Trần Gia Bảo" [selected]
      - text: Xử lý tài khoản
      - combobox "Xử lý tài khoản":
        - option "Giữ nguyên tài khoản" [selected]
        - option "Mở khóa tài khoản"
        - option "Giảm một cảnh cáo liên quan"
      - text: Xử lý ký quỹ
      - combobox "Xử lý ký quỹ":
        - option "Giữ nguyên ký quỹ"
        - option "Hoàn cọc cho người học" [disabled] [selected]
        - option "Giải ngân cho gia sư" [disabled]
        - option "Chia 50/50 cho hai bên" [disabled]
      - text: Giao dịch ký quỹ liên quan
      - combobox "Giao dịch ký quỹ liên quan"
      - paragraph: Không có ký quỹ đang giữ liên kết với buổi học của sự cố; không thể xử lý một giao dịch khác.
      - text: Đánh giá liên quan
      - combobox "Đánh giá liên quan":
        - option "Giữ nguyên đánh giá" [selected]
        - option "Ẩn review-1 · 5/5"
      - alert: Chỉ quyết toán ký quỹ chưa xử lý của buổi liên quan.
      - button "Lưu kết quả"
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
  39 |     issue.relatedLessonId = escrow.lessonId;
  40 |     state.appeals = [{ id: 'appeal-audit', issueId: issue.id, accountId: 'demo-tutor', reason: 'misunderstanding',
  41 |       content: 'Đề nghị đối chiếu bằng chứng và quyết định tiền ký quỹ theo buổi học đã liên kết.', truthful: true,
  42 |       evidence: [{ kind: 'link', url: 'https://example.org/appeal-proof', description: 'Bằng chứng demo phục vụ đối chiếu.' }],
  43 |       status: 'pending', createdAt: fixedTime.toISOString() }];
  44 |     await resetDemo(page, { state });
  45 |     await login(page, 'admin', '/admin/appeals');
  46 |     await page.getByRole('button', { name: 'Xem kháng cáo appeal-audit' }).click();
  47 |     await page.getByLabel('Kết quả xem xét').selectOption('accepted');
  48 |     await page.getByLabel('Căn cứ / phản hồi').fill('Đã đối chiếu bằng chứng của hồ sơ demo và xác nhận phương án xử lý ký quỹ.');
  49 |     await page.getByRole('combobox', { name: /^Xử lý ký quỹ/ }).selectOption(action);
  50 |     await page.getByRole('button', { name: 'Lưu kết quả', exact: true }).click();
  51 |     await expect(page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true })).toBeVisible();
  52 |     expect(await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id).status, escrow.id)).toBe('held');
  53 |     await page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true }).click();
> 54 |     await expect(page.getByRole('status')).toContainText('Đã lưu');
     |                                            ^ Error: expect(locator).toContainText(expected) failed
  55 |     const after = await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id), escrow.id);
  56 |     expect(after.status).toBe(action === 'refund' ? 'refunded' : action === 'disburse' ? 'disbursed' : 'split');
  57 |     await page.reload();
  58 |     await page.getByRole('button', { name: 'Xem kháng cáo appeal-audit' }).click();
  59 |     await expect(page.getByRole('button', { name: 'Lưu kết quả', exact: true })).toHaveCount(0);
  60 |     await expect(page.getByRole('dialog')).toContainText('Đã áp dụng');
  61 |   });
  62 | }
  63 | 
  64 | test('ADMIN-MASTER account locking requires a reason and records the decision', async ({ page }) => {
  65 |   await resetDemo(page);
  66 |   await login(page, 'admin', '/admin/users');
  67 |   await page.getByRole('searchbox', { name: 'Tìm kiếm người dùng' }).fill('minhanh');
  68 |   await page.getByRole('button', { name: 'Khóa tài khoản minhanh', exact: true }).click();
  69 |   await page.getByRole('button', { name: 'Xác nhận khóa tài khoản', exact: true }).click();
  70 |   await expect(page.getByRole('alert')).toContainText('lý do');
  71 |   await page.getByLabel('Lý do quyết định').fill('Đã đối chiếu báo cáo demo và cần tạm khóa để xử lý sự cố.');
  72 |   await page.getByRole('button', { name: 'Xác nhận khóa tài khoản', exact: true }).click();
  73 |   await expect(page.locator('tbody')).toContainText('Đang bị khóa');
  74 |   await page.goto('/admin/logs');
  75 |   await expect(page.locator('tbody')).toContainText('Đã đối chiếu báo cáo demo');
  76 | });
  77 | 
```