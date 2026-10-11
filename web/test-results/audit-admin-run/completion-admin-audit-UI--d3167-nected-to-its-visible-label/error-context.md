# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-admin-audit.spec.js >> UI-COMP-A03 /admin/settings form control is connected to its visible label
- Location: tests\e2e\completion-admin-audit.spec.js:30:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Phí nền tảng tiêu chuẩn (%)', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByLabel('Phí nền tảng tiêu chuẩn (%)', { exact: true }) with timeout 5000ms
  - waiting for getByLabel('Phí nền tảng tiêu chuẩn (%)', { exact: true })

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
  - strong: Cài đặt Hệ thống (A13)
  - img "Ảnh đại diện của Quản trị viên"
  - text: Quản trị viên
  - button "Đăng xuất"
- main:
  - heading "Cài đặt Tham số Toàn sàn" [level=1]
  - paragraph: Cấu hình tỷ lệ thu phí nền tảng, thời lượng buổi học, khung giờ vận hành tối đa và ngưỡng tự động khóa tài khoản vi phạm.
  - heading "Biểu phí Nền tảng & Ký quỹ Escrow" [level=2]
  - text: Tỷ lệ hoa hồng trích từ thù lao gia sư khi buổi học hoàn tất thành công. Phí nền tảng tiêu chuẩn (%)
  - spinbutton: "10"
  - text: Áp dụng cho gia sư mới (Active) và thông thường (mặc định 10%). Ưu đãi Gia sư Xuất sắc (Top-Rated Tutor) (%)
  - spinbutton: "7"
  - text: Ưu đãi giảm phí sàn cho gia sư có tích xanh $\ge 4.9\star$ (mặc định 7%).
  - heading "Thời lượng Buổi học & Giờ Vận hành" [level=2]
  - text: Đảm bảo sức khỏe và an toàn sinh hoạt cho học viên và gia sư sinh viên. Thời lượng buổi học mặc định
  - combobox:
    - option "45 phút (Chuẩn 1 tiết học)" [selected]
    - option "90 phút (2 tiết đôi)"
  - text: Giờ bắt đầu buổi học muộn nhất
  - textbox: 22:00
  - text: Không cho phép mở lớp học sau 22:00 tối để phòng tránh rủi ro an toàn.
  - heading "Ngưỡng Tự động Khóa Tài khoản (Auto-Suspend)" [level=2]
  - text: Chế tài kỷ luật nghiêm khắc bảo vệ quyền lợi người học và uy tín sàn. Số lần cảnh cáo tối đa cho phép trước khi khóa tài khoản
  - spinbutton: "3"
  - text: ⚠️ Người dùng hoặc gia sư vượt quá 3 lần bị cảnh cáo tranh chấp sẽ bị hệ thống tự động khóa tài khoản tức thì.
  - button "Lưu cấu hình hệ thống"
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { resetDemo, login, logout } from './demoHelpers.js';
  3   | 
  4   | test.beforeEach(async ({ page }) => { await resetDemo(page); });
  5   | 
  6   | for (const tab of ['Lệnh rút tiền ngân hàng', 'Két Ký quỹ Escrow', 'Sổ cái Dòng tiền']) {
  7   |   test(`UI-COMP-A01 Finance search filters ${tab}`, async ({ page }) => {
  8   |     await login(page, 'admin', '/admin/finance');
  9   |     await page.getByRole('button', { name: tab, exact: false }).click();
  10  |     await page.getByPlaceholder('Tìm kiếm tài khoản, mã lệnh...').fill('NO_MATCH_COMPLETION_AUDIT');
  11  |     await expect(page.locator('tbody tr').filter({ hasText: /Trần Gia Bảo|escrow-001|demo-learner|demo-tutor/ })).toHaveCount(0);
  12  |     await expect(page.locator('tbody')).toContainText(/Không|Chưa/);
  13  |   });
  14  | }
  15  | 
  16  | test('UI-COMP-A02 Finance platform revenue is derived without invented fixed money', async ({ page }) => {
  17  |   await login(page, 'admin', '/admin/finance');
  18  |   const state = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  19  |   const expected = state.escrowTransactions.filter(e => e.status === 'disbursed').reduce((total, e) => total + Math.round(e.amount * (e.platformFeePercent ?? 10) / 100), 0);
  20  |   const card = page.locator('.admin-stat-card').filter({ hasText: 'Doanh thu phí sàn tích lũy' });
  21  |   await expect(card).toContainText(`${expected.toLocaleString('vi-VN')} đ`);
  22  |   await expect(card).not.toContainText('1.250.000 đ');
  23  | });
  24  | 
  25  | for (const [route, open, label] of [
  26  |   ['/admin/subjects', 'Thêm môn học mới', 'Tên môn học *'],
  27  |   ['/admin/locations', 'Thêm khu vực mới', 'Tên quận / huyện *'],
  28  |   ['/admin/settings', null, 'Phí nền tảng tiêu chuẩn (%)'],
  29  | ]) {
  30  |   test(`UI-COMP-A03 ${route} form control is connected to its visible label`, async ({ page }) => {
  31  |     await login(page, 'admin', route);
  32  |     if (open) await page.getByRole('button', { name: open }).click();
> 33  |     await expect(page.getByLabel(label, { exact: true })).toBeVisible();
      |                                                           ^ Error: expect(locator).toBeVisible() failed
  34  |   });
  35  | }
  36  | 
  37  | test('UI-COMP-A04 Settings renders a readable rating rule rather than raw markup', async ({ page }) => {
  38  |   await login(page, 'admin', '/admin/settings');
  39  |   await expect(page.locator('main')).not.toContainText('\\ge');
  40  |   await expect(page.locator('main')).not.toContainText('\\star');
  41  |   await expect(page.locator('main')).toContainText('4.9');
  42  | });
  43  | 
  44  | test('UI-COMP-A05 Settings rejects invalid operational time instead of persisting it', async ({ page }) => {
  45  |   await login(page, 'admin', '/admin/settings');
  46  |   const before = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).systemSettings.maxStartHour);
  47  |   await page.locator('main input[type=text]').fill('not-a-time');
  48  |   await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  49  |   const after = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).systemSettings.maxStartHour);
  50  |   expect(after).toBe(before);
  51  |   await expect(page.locator('main')).not.toContainText('Đã lưu cấu hình tham số');
  52  | });
  53  | 
  54  | test('UI-COMP-A06 Admin rejected class is no longer discoverable on Tutor board', async ({ page }) => {
  55  |   await login(page, 'admin', '/admin/classes');
  56  |   const post = page.locator('tbody tr').filter({ hasText: 'Lê Hoàng Nam' });
  57  |   await post.getByTitle('Từ chối tin đăng').click();
  58  |   await expect(post).toContainText('Đã từ chối');
  59  |   await logout(page);
  60  |   await login(page, 'giabao', '/tutor/find-students');
  61  |   await expect(page.locator('.tutor-find__class').filter({ hasText: 'Lê Hoàng Nam' })).toHaveCount(0);
  62  | });
  63  | 
  64  | test('UI-COMP-A07 Catalog status change creates a corresponding visible Audit entry', async ({ page }) => {
  65  |   await login(page, 'admin', '/admin/subjects');
  66  |   const row = page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) });
  67  |   await row.getByTitle('Tạm dừng áp dụng').click();
  68  |   await expect(row).toContainText('Tạm dừng');
  69  |   await page.goto('/admin/logs');
  70  |   await expect(page.locator('tbody')).toContainText('Toán');
  71  | });
  72  | 
  73  | test('UI-COMP-A08 inactive Admin subject is unavailable for new Learner search selections', async ({ page }) => {
  74  |   await login(page, 'admin', '/admin/subjects');
  75  |   const row = page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) });
  76  |   await row.getByTitle('Tạm dừng áp dụng').click();
  77  |   await expect(row).toContainText('Tạm dừng');
  78  |   await logout(page);
  79  |   await login(page, 'minhanh', '/learner/search');
  80  |   await expect(page.getByRole('checkbox', { name: 'Toán', exact: true })).toHaveCount(0);
  81  | });
  82  | 
  83  | test('Admin current catalog editing and valid settings persist across reload', async ({ page }) => {
  84  |   await login(page, 'admin', '/admin/subjects');
  85  |   await page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) }).getByTitle('Chỉnh sửa môn học').click();
  86  |   await page.getByRole('dialog').getByRole('combobox').selectOption('Khác');
  87  |   await page.getByRole('button', { name: 'Lưu cập nhật' }).click();
  88  |   await page.reload();
  89  |   await expect(page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) })).toContainText('Khác');
  90  |   await page.goto('/admin/locations');
  91  |   await page.locator('tbody tr').filter({ has: page.getByText('Quận 1', { exact: true }) }).getByTitle('Chỉnh sửa khu vực').click();
  92  |   await page.getByRole('dialog').getByRole('combobox').selectOption('Đà Nẵng');
  93  |   await page.getByRole('button', { name: 'Lưu cập nhật' }).click();
  94  |   await page.reload();
  95  |   await expect(page.locator('tbody tr').filter({ has: page.getByText('Quận 1', { exact: true }) })).toContainText('Đà Nẵng');
  96  |   await page.goto('/admin/settings');
  97  |   await page.locator('main input[type=number]').first().fill('10');
  98  |   await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  99  |   await page.reload();
  100 |   await expect(page.locator('main input[type=number]').first()).toHaveValue('10');
  101 |   await page.goto('/admin/logs');
  102 |   await expect(page.locator('tbody')).toContainText('UPDATE_SYSTEM_SETTINGS');
  103 | });
  104 | 
  105 | test('Admin payout approval updates the same persisted payout and audit trail', async ({ page }) => {
  106 |   await login(page, 'admin', '/admin/finance');
  107 |   await page.getByRole('button', { name: 'Duyệt chuyển', exact: true }).click();
  108 |   await expect(page.locator('tbody')).toContainText('Đã duyệt chuyển');
  109 |   await page.reload();
  110 |   await expect(page.locator('tbody')).toContainText('Đã duyệt chuyển');
  111 |   await expect(page.getByRole('button', { name: 'Duyệt chuyển', exact: true })).toHaveCount(0);
  112 |   await page.goto('/admin/logs');
  113 |   await expect(page.locator('tbody')).toContainText('APPROVE_PAYOUT');
  114 | });
  115 | 
  116 | test('UI-COMP-A09 saved warning threshold controls the following account suspension decision', async ({ page }) => {
  117 |   await login(page, 'admin', '/admin/settings');
  118 |   await page.locator('main input[type=number]').last().fill('1');
  119 |   await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  120 |   await page.goto('/admin/issues');
  121 |   await page.locator('tbody tr').filter({ hasText: 'ISSUE-104' }).getByRole('button', { name: /Xử lý sự cố/ }).click();
  122 |   await page.locator('#warning-reason-input').fill('Cần xử lý phản ánh theo ngưỡng cảnh cáo đã được quản trị viên cấu hình.');
  123 |   await page.getByRole('button', { name: /Gửi cảnh cáo & Giải quyết sự cố/ }).click();
  124 |   await page.goto('/admin/users');
  125 |   await page.getByRole('searchbox', { name: 'Tìm kiếm người dùng' }).fill('giabao');
  126 |   await expect(page.locator('tbody tr')).toContainText('Đang bị khóa');
  127 | });
  128 | 
  129 | for (const width of [1440, 1024, 390]) {
  130 |   test(`Admin completion connected screens have no page overflow or runtime errors at ${width}px`, async ({ page }) => {
  131 |     const errors = []; page.on('pageerror', error => errors.push(String(error)));
  132 |     await page.setViewportSize({ width, height: 900 });
  133 |     await login(page, 'admin', '/admin/dashboard');
```