# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-completion-flows.spec.js >> APPEAL-MASTER confirmed refund verdict applies once to the linked escrow
- Location: tests\e2e\admin-completion-flows.spec.js:35:3

# Error details

```
Error: locator.selectOption: Error: strict mode violation: getByLabel('Xử lý ký quỹ') resolved to 2 elements:
    1) <textarea rows="4" required="" class="admin-textarea">Đã đối chiếu bằng chứng của hồ sơ demo và xác nhậ…</textarea> aka getByRole('textbox', { name: 'Căn cứ / phản hồi' })
    2) <select class="admin-select">…</select> aka getByLabel('Xử lý ký quỹGiữ nguyên ký quỹ')

Call log:
  - waiting for getByLabel('Xử lý ký quỹ')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary "Điều hướng quản trị" [ref=e4]:
    - link "TutorNearMe — trang chủ" [ref=e6] [cursor=pointer]:
      - /url: /
      - generic [aria-hidden] [ref=e7]: TN
      - generic [ref=e8]: TutorNearMe
    - generic [ref=e9]: QUẢN TRỊ HỆ THỐNG
    - navigation "Các mục quản trị" [ref=e10]:
      - link "Tổng quan" [ref=e11] [cursor=pointer]:
        - /url: /admin/dashboard
      - link "Gia sư 3" [ref=e18] [cursor=pointer]:
        - /url: /admin/tutors
        - generic [ref=e22]: Gia sư
        - generic [ref=e23]: "3"
      - link "Người dùng" [ref=e24] [cursor=pointer]:
        - /url: /admin/users
      - link "Đánh giá 2" [ref=e31] [cursor=pointer]:
        - /url: /admin/reviews
        - generic [ref=e34]: Đánh giá
        - generic [ref=e35]: "2"
      - link "Báo cáo & sự cố 4" [ref=e36] [cursor=pointer]:
        - /url: /admin/issues
        - generic [ref=e39]: Báo cáo & sự cố
        - generic [ref=e40]: "4"
      - link "Kháng cáo" [ref=e41] [cursor=pointer]:
        - /url: /admin/appeals
      - link "Lớp học" [ref=e47] [cursor=pointer]:
        - /url: /admin/classes
      - link "Tài chính Escrow 1" [ref=e52] [cursor=pointer]:
        - /url: /admin/finance
        - generic [ref=e55]: Tài chính Escrow
        - generic [ref=e56]: "1"
      - link "Môn học" [ref=e57] [cursor=pointer]:
        - /url: /admin/subjects
      - link "Khu vực" [ref=e61] [cursor=pointer]:
        - /url: /admin/locations
      - link "Cài đặt" [ref=e66] [cursor=pointer]:
        - /url: /admin/settings
      - link "Nhật ký" [ref=e71] [cursor=pointer]:
        - /url: /admin/logs
    - generic [ref=e76]:
      - generic [ref=e77]: Bản demo frontend
      - generic [ref=e79]: TutorNearMe · Admin workspace
  - generic [ref=e80]:
    - banner [ref=e81]:
      - generic [ref=e82]:
        - text: Quản trị
        - strong [ref=e85]: Kháng cáo
      - generic [ref=e86]:
        - generic [ref=e87]:
          - img "Ảnh đại diện của Quản trị viên" [ref=e88]:
            - generic [aria-hidden] [ref=e89]: AD
          - generic [ref=e90]: Quản trị viên
        - button "Đăng xuất" [ref=e91] [cursor=pointer]
    - main [ref=e95]:
      - generic [ref=e96]:
        - generic [ref=e97]:
          - text: XEM XÉT LẠI BÁO CÁO
          - heading "Kháng cáo" [level=1] [ref=e98]
          - paragraph [ref=e99]: Đối chiếu giải trình và bằng chứng của bên bị báo cáo trước khi đưa ra kết quả.
        - link "Báo cáo & sự cố" [ref=e100] [cursor=pointer]:
          - /url: /admin/issues
      - generic [ref=e101]:
        - generic [ref=e102]:
          - text: Trạng thái kháng cáo
          - combobox "Trạng thái kháng cáo" [ref=e103] [cursor=pointer]:
            - option "Tất cả" [selected]
            - option "Chờ xem xét"
            - option "Đang xem xét"
            - option "Chấp nhận"
            - option "Không chấp nhận"
        - generic [ref=e104]:
          - generic [ref=e105]: Tìm kháng cáo
          - searchbox "Tìm kháng cáo" [ref=e106]
      - paragraph [ref=e107]: Hiển thị 1 / 1 hồ sơ
      - region "Bảng kháng cáo" [ref=e109]:
        - table [ref=e110]:
          - rowgroup [ref=e111]:
            - row [ref=e112]:
              - columnheader "Hồ sơ / sự cố" [ref=e113]
              - columnheader "Tài khoản" [ref=e114]
              - columnheader "Lý do" [ref=e115]
              - columnheader "Ngày gửi" [ref=e116]
              - columnheader "Trạng thái" [ref=e117]
              - columnheader "Thao tác" [ref=e118]
          - rowgroup [ref=e119]:
            - row [ref=e120]:
              - cell [ref=e121]:
                - strong [ref=e122]: appeal-audit
                - text: ISSUE-105
              - cell "Trần Gia Bảo" [ref=e123]
              - cell "Hiểu nhầm" [ref=e125]
              - cell "5/10/2026" [ref=e127]
              - cell "Chờ xem xét" [ref=e128]
              - cell [ref=e130]:
                - button "Xem kháng cáo appeal-audit" [ref=e132] [cursor=pointer]
      - dialog [ref=e136]:
        - complementary [ref=e138]:
          - generic [ref=e139]:
            - generic [ref=e141]:
              - heading "Kháng cáo appeal-audit" [level=2] [ref=e142]
              - generic [ref=e143]: Chờ xem xét
            - button "Đóng bảng chi tiết" [ref=e144] [cursor=pointer]
          - generic [ref=e149]:
            - generic [ref=e150]:
              - heading "Trần Gia Bảo" [level=3] [ref=e151]
              - paragraph [ref=e152]:
                - strong [ref=e153]: ISSUE-105
                - text: · Phản ánh thái độ thiếu kiên nhẫn khi giảng bài
              - paragraph [ref=e154]: Hiểu nhầm
              - paragraph [ref=e155]: Đề nghị đối chiếu bằng chứng và quyết định tiền ký quỹ theo buổi học đã liên kết.
              - text: Người gửi đã cam kết nội dung và bằng chứng trung thực. Admin cần đối chiếu độc lập.
            - generic [ref=e156]:
              - generic [ref=e157]:
                - heading "Người học / Phụ huynh" [level=3] [ref=e158]
                - strong [ref=e159]: Nguyễn Minh Anh
                - paragraph [ref=e160]: Chưa có giải trình và bằng chứng của bên này.
              - generic [ref=e161]:
                - heading "Gia sư" [level=3] [ref=e162]
                - strong [ref=e163]: Trần Gia Bảo
                - article [ref=e164]:
                  - paragraph [ref=e165]: Đề nghị đối chiếu bằng chứng và quyết định tiền ký quỹ theo buổi học đã liên kết.
                  - article [ref=e167]:
                    - strong [ref=e168]: Bằng chứng 1
                    - paragraph [ref=e169]: Bằng chứng demo phục vụ đối chiếu.
                    - link "Mở bằng chứng" [ref=e170] [cursor=pointer]:
                      - /url: https://example.org/appeal-proof
                  - text: 06:00:00 5/10/2026
            - generic [ref=e171]:
              - heading "Xem xét kháng cáo" [level=3] [ref=e172]
              - generic [ref=e173]:
                - text: Kết quả xem xét
                - combobox "Kết quả xem xét" [ref=e174] [cursor=pointer]:
                  - option "Đang xem xét"
                  - option "Chấp nhận" [selected]
                  - option "Không chấp nhận"
              - generic [ref=e175]:
                - text: Căn cứ / phản hồi
                - textbox "Căn cứ / phản hồi" [active] [ref=e176]: Đã đối chiếu bằng chứng của hồ sơ demo và xác nhận phương án xử lý ký quỹ.
              - generic [ref=e177]:
                - generic [ref=e178]:
                  - text: Tài khoản áp dụng
                  - combobox "Tài khoản áp dụng" [ref=e179] [cursor=pointer]:
                    - option "Nguyễn Minh Anh"
                    - option "Trần Gia Bảo" [selected]
                - generic [ref=e180]:
                  - text: Xử lý tài khoản
                  - combobox "Xử lý tài khoản" [ref=e181] [cursor=pointer]:
                    - option "Giữ nguyên tài khoản" [selected]
                    - option "Mở khóa tài khoản"
                    - option "Giảm một cảnh cáo liên quan"
                - generic [ref=e182]:
                  - text: Xử lý ký quỹ
                  - combobox "Xử lý ký quỹ" [ref=e183] [cursor=pointer]:
                    - option "Giữ nguyên ký quỹ" [selected]
                    - option "Hoàn cọc cho người học" [disabled]
                    - option "Giải ngân cho gia sư" [disabled]
                    - option "Chia 50/50 cho hai bên" [disabled]
                - paragraph [ref=e184]: Không có ký quỹ đang giữ liên kết với buổi học của sự cố; không thể xử lý một giao dịch khác.
                - generic [ref=e185]:
                  - text: Đánh giá liên quan
                  - combobox "Đánh giá liên quan" [ref=e186] [cursor=pointer]:
                    - option "Giữ nguyên đánh giá" [selected]
                    - option "Ẩn review-1 · 5/5"
          - button "Lưu kết quả" [ref=e188] [cursor=pointer]
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
> 49 |     await page.getByLabel('Xử lý ký quỹ').selectOption(action);
     |                                           ^ Error: locator.selectOption: Error: strict mode violation: getByLabel('Xử lý ký quỹ') resolved to 2 elements:
  50 |     await page.getByRole('button', { name: 'Lưu kết quả', exact: true }).click();
  51 |     await expect(page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true })).toBeVisible();
  52 |     expect(await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id).status, escrow.id)).toBe('held');
  53 |     await page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true }).click();
  54 |     await expect(page.getByRole('status')).toContainText('Đã lưu');
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