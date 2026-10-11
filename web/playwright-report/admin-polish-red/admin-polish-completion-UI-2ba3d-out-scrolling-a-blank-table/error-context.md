# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-polish-completion.spec.js >> UI-COMP-A13 mobile appeal empty state is readable without scrolling a blank table
- Location: tests\e2e\admin-polish-completion.spec.js:3:1

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 390
Received:    633
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary "Điều hướng quản trị" [ref=e4]:
    - generic [ref=e5]:
      - link "TutorNearMe — trang chủ" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [aria-hidden] [ref=e7]: TN
        - generic [ref=e8]: TutorNearMe
      - button "Đóng điều hướng" [ref=e9] [cursor=pointer]
    - generic [ref=e13]: QUẢN TRỊ HỆ THỐNG
    - navigation "Các mục quản trị" [ref=e14]:
      - link "Tổng quan" [ref=e15] [cursor=pointer]:
        - /url: /admin/dashboard
      - link "Gia sư 3" [ref=e22] [cursor=pointer]:
        - /url: /admin/tutors
        - generic [ref=e26]: Gia sư
        - generic [ref=e27]: "3"
      - link "Người dùng" [ref=e28] [cursor=pointer]:
        - /url: /admin/users
      - link "Đánh giá 2" [ref=e35] [cursor=pointer]:
        - /url: /admin/reviews
        - generic [ref=e38]: Đánh giá
        - generic [ref=e39]: "2"
      - link "Báo cáo & sự cố 4" [ref=e40] [cursor=pointer]:
        - /url: /admin/issues
        - generic [ref=e43]: Báo cáo & sự cố
        - generic [ref=e44]: "4"
      - link "Kháng cáo" [ref=e45] [cursor=pointer]:
        - /url: /admin/appeals
      - link "Lớp học" [ref=e51] [cursor=pointer]:
        - /url: /admin/classes
      - link "Tài chính Escrow 1" [ref=e56] [cursor=pointer]:
        - /url: /admin/finance
        - generic [ref=e59]: Tài chính Escrow
        - generic [ref=e60]: "1"
      - link "Môn học" [ref=e61] [cursor=pointer]:
        - /url: /admin/subjects
      - link "Khu vực" [ref=e65] [cursor=pointer]:
        - /url: /admin/locations
      - link "Cài đặt" [ref=e70] [cursor=pointer]:
        - /url: /admin/settings
      - link "Nhật ký" [ref=e75] [cursor=pointer]:
        - /url: /admin/logs
    - generic [ref=e80]:
      - generic [ref=e81]: Bản demo frontend
      - generic [ref=e83]: TutorNearMe · Admin workspace
  - generic [ref=e84]:
    - banner [ref=e85]:
      - button "Mở điều hướng" [ref=e86] [cursor=pointer]
      - link "TutorNearMe — trang chủ" [ref=e89] [cursor=pointer]:
        - /url: /
        - generic [aria-hidden] [ref=e90]: TN
      - button "Đăng xuất" [ref=e92] [cursor=pointer]
    - main [ref=e96]:
      - generic [ref=e97]:
        - generic [ref=e98]:
          - text: XEM XÉT LẠI BÁO CÁO
          - heading "Kháng cáo" [level=1] [ref=e99]
          - paragraph [ref=e100]: Đối chiếu giải trình và bằng chứng của bên bị báo cáo trước khi đưa ra kết quả.
        - link "Báo cáo & sự cố" [ref=e101] [cursor=pointer]:
          - /url: /admin/issues
      - generic [ref=e102]:
        - generic [ref=e103]:
          - text: Trạng thái kháng cáo
          - combobox "Trạng thái kháng cáo" [ref=e104] [cursor=pointer]:
            - option "Tất cả" [selected]
            - option "Chờ xem xét"
            - option "Đang xem xét"
            - option "Chấp nhận"
            - option "Không chấp nhận"
        - generic [ref=e105]:
          - generic [ref=e106]: Tìm kháng cáo
          - searchbox "Tìm kháng cáo" [ref=e107]
      - paragraph [ref=e108]: Hiển thị 0 / 0 hồ sơ
      - region "Bảng kháng cáo" [ref=e110]:
        - table [ref=e111]:
          - rowgroup [ref=e112]:
            - row [ref=e113]:
              - columnheader "Hồ sơ / sự cố" [ref=e114]
              - columnheader "Tài khoản" [ref=e115]
              - columnheader "Lý do" [ref=e116]
              - columnheader "Ngày gửi" [ref=e117]
              - columnheader "Trạng thái" [ref=e118]
              - columnheader "Thao tác" [ref=e119]
          - rowgroup [ref=e120]:
            - row [ref=e121]:
              - cell "Chưa có kháng cáo. Hồ sơ người dùng gửi sẽ xuất hiện tại đây." [ref=e122]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login } from './demoHelpers.js';
  3  | test('UI-COMP-A13 mobile appeal empty state is readable without scrolling a blank table', async ({ page }) => {
  4  |   await resetDemo(page);
  5  |   await page.setViewportSize({ width: 390, height: 900 });
  6  |   await login(page, 'admin', '/admin/appeals');
  7  |   const message = page.getByText('Chưa có kháng cáo. Hồ sơ người dùng gửi sẽ xuất hiện tại đây.', { exact: true });
  8  |   await expect(message).toBeVisible();
  9  |   const bounds = await message.boundingBox();
  10 |   expect(bounds.x).toBeGreaterThanOrEqual(0);
> 11 |   expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
     |                                   ^ Error: expect(received).toBeLessThanOrEqual(expected)
  12 | });
  13 | test('MASTER Admin notification opens a private actionable message', async ({ page }) => {
  14 |   await resetDemo(page);
  15 |   await login(page, 'admin', '/admin/dashboard');
  16 |   await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  17 |   await expect(page.getByText('Thông báo', { exact: true }).last()).toBeVisible();
  18 | });
  19 | 
```