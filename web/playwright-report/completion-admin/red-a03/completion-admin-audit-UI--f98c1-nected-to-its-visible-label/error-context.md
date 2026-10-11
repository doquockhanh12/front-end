# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-admin-audit.spec.js >> UI-COMP-A03 /admin/locations form control is connected to its visible label
- Location: tests\e2e\completion-admin-audit.spec.js:30:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Tên quận / huyện *', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByLabel('Tên quận / huyện *', { exact: true }) with timeout 5000ms
  - waiting for getByLabel('Tên quận / huyện *', { exact: true })

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
  - strong: Khu vực & Địa bàn (A11)
  - img "Ảnh đại diện của Quản trị viên"
  - text: Quản trị viên
  - button "Đăng xuất"
- main:
  - heading "Quản lý Khu vực & Địa bàn Hoạt động" [level=1]
  - paragraph: Cấu hình các quận/huyện, thành phố phục vụ việc gia sư di chuyển dạy tại nhà và tính toán bán kính gần bạn.
  - button "Thêm khu vực mới"
  - button "Tất cả"
  - button "Đang mở"
  - button "Tạm dừng"
  - textbox "Tìm kiếm quận huyện, thành phố..."
  - text: Hiển thị 10 / 10 bản ghi
  - table:
    - rowgroup:
      - row "Khu vực / Quận Tỉnh / Thành phố Trạng thái Ngày thêm Thao tác":
        - columnheader "Khu vực / Quận"
        - columnheader "Tỉnh / Thành phố"
        - columnheader "Trạng thái"
        - columnheader "Ngày thêm"
        - columnheader "Thao tác"
    - rowgroup:
      - row "Quận 1 TP. Hồ Chí Minh Đang mở 1/9/2026":
        - cell "Quận 1"
        - cell "TP. Hồ Chí Minh"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Quận 3 TP. Hồ Chí Minh Đang mở 1/9/2026":
        - cell "Quận 3"
        - cell "TP. Hồ Chí Minh"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Quận 5 TP. Hồ Chí Minh Đang mở 1/9/2026":
        - cell "Quận 5"
        - cell "TP. Hồ Chí Minh"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Quận 7 TP. Hồ Chí Minh Đang mở 1/9/2026":
        - cell "Quận 7"
        - cell "TP. Hồ Chí Minh"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Quận 10 TP. Hồ Chí Minh Đang mở 1/9/2026":
        - cell "Quận 10"
        - cell "TP. Hồ Chí Minh"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Bình Thạnh TP. Hồ Chí Minh Đang mở 1/9/2026":
        - cell "Bình Thạnh"
        - cell "TP. Hồ Chí Minh"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Phú Nhuận TP. Hồ Chí Minh Đang mở 1/9/2026":
        - cell "Phú Nhuận"
        - cell "TP. Hồ Chí Minh"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Thủ Đức TP. Hồ Chí Minh Đang mở 1/9/2026":
        - cell "Thủ Đức"
        - cell "TP. Hồ Chí Minh"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Cầu Giấy Hà Nội Đang mở 1/9/2026":
        - cell "Cầu Giấy"
        - cell "Hà Nội"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
      - row "Đống Đa Hà Nội Đang mở 1/9/2026":
        - cell "Đống Đa"
        - cell "Hà Nội"
        - cell "Đang mở"
        - cell "1/9/2026"
        - cell:
          - button "Chỉnh sửa khu vực"
          - button "Tạm dừng khu vực"
  - dialog "Thêm Khu vực Mới":
    - complementary:
      - heading "Thêm Khu vực Mới" [level=2]
      - button "Đóng bảng chi tiết"
      - text: Tên quận / huyện *
      - 'textbox "Ví dụ: Quận 1, Quận Bình Thạnh, Cầu Giấy..."'
      - text: Tỉnh / Thành phố
      - combobox:
        - option "TP. Hồ Chí Minh" [selected]
        - option "Hà Nội"
        - option "Đà Nẵng"
        - option "Cần Thơ"
        - option "Hải Phòng"
      - checkbox "Mở hoạt động kết nối gia sư ngay" [checked]
      - text: Mở hoạt động kết nối gia sư ngay
      - button "Hủy bỏ"
      - button "Tạo khu vực"
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
  21  |   await expect(card).toBeVisible();
  22  |   await expect.poll(async () => Number((await card.innerText()).replace(/\D/g, ''))).toBe(expected);
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
  55  |   await login(page, 'giabao', '/tutor/find-students');
  56  |   await expect(page.locator('.tutor-find__class').filter({ hasText: 'Nguyễn Minh Anh' })).toBeVisible();
  57  |   await logout(page);
  58  |   await login(page, 'admin', '/admin/classes');
  59  |   const post = page.locator('tbody tr').filter({ hasText: 'Nguyễn Minh Anh' });
  60  |   await post.getByTitle('Từ chối tin đăng').click();
  61  |   await expect(post).toContainText('Đã từ chối');
  62  |   await logout(page);
  63  |   await login(page, 'giabao', '/tutor/find-students');
  64  |   await expect(page.getByRole('heading', { name: 'Tìm học viên & Nhận lớp mới', exact: true })).toBeVisible();
  65  |   await expect(page.locator('.tutor-find__class').filter({ hasText: 'Nguyễn Minh Anh' })).toHaveCount(0);
  66  | });
  67  | 
  68  | test('UI-COMP-A07 Catalog status change creates a corresponding visible Audit entry', async ({ page }) => {
  69  |   await login(page, 'admin', '/admin/subjects');
  70  |   const row = page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) });
  71  |   await row.getByTitle('Tạm dừng áp dụng').click();
  72  |   await expect(row).toContainText('Tạm dừng');
  73  |   await page.goto('/admin/logs');
  74  |   await expect(page.locator('tbody')).toContainText('Toán');
  75  | });
  76  | 
  77  | test('UI-COMP-A08 inactive Admin subject is unavailable for new Learner search selections', async ({ page }) => {
  78  |   await login(page, 'minhanh', '/learner/search');
  79  |   await expect(page.getByRole('checkbox', { name: 'Toán', exact: true })).toBeVisible();
  80  |   await logout(page);
  81  |   await login(page, 'admin', '/admin/subjects');
  82  |   const row = page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) });
  83  |   await row.getByTitle('Tạm dừng áp dụng').click();
  84  |   await expect(row).toContainText('Tạm dừng');
  85  |   await logout(page);
  86  |   await login(page, 'minhanh', '/learner/search');
  87  |   await expect(page.locator('.search-checkbox-group').first()).toBeVisible();
  88  |   await expect(page.getByRole('checkbox', { name: 'Toán', exact: true })).toHaveCount(0);
  89  | });
  90  | 
  91  | test('Admin current catalog editing and valid settings persist across reload', async ({ page }) => {
  92  |   await login(page, 'admin', '/admin/subjects');
  93  |   await page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) }).getByTitle('Chỉnh sửa môn học').click();
  94  |   await page.getByRole('dialog').getByRole('combobox').selectOption('Khác');
  95  |   await page.getByRole('button', { name: 'Lưu cập nhật' }).click();
  96  |   await page.reload();
  97  |   await expect(page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) })).toContainText('Khác');
  98  |   await page.goto('/admin/locations');
  99  |   await page.locator('tbody tr').filter({ has: page.getByText('Quận 1', { exact: true }) }).getByTitle('Chỉnh sửa khu vực').click();
  100 |   await page.getByRole('dialog').getByRole('combobox').selectOption('Đà Nẵng');
  101 |   await page.getByRole('button', { name: 'Lưu cập nhật' }).click();
  102 |   await page.reload();
  103 |   await expect(page.locator('tbody tr').filter({ has: page.getByText('Quận 1', { exact: true }) })).toContainText('Đà Nẵng');
  104 |   await page.goto('/admin/settings');
  105 |   await page.locator('main input[type=number]').first().fill('10');
  106 |   await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  107 |   await page.reload();
  108 |   await expect(page.locator('main input[type=number]').first()).toHaveValue('10');
  109 |   await page.goto('/admin/logs');
  110 |   await expect(page.locator('tbody')).toContainText('UPDATE_SYSTEM_SETTINGS');
  111 | });
  112 | 
  113 | test('UI-COMP-A11 Admin payout approval button is clickable and updates the same payout', async ({ page }) => {
  114 |   await page.setViewportSize({ width: 1440, height: 900 });
  115 |   await login(page, 'admin', '/admin/finance');
  116 |   const approve = page.getByRole('button', { name: 'Duyệt chuyển', exact: true });
  117 |   await expect(approve).toBeVisible();
  118 |   const bounds = await approve.evaluate(button => ({ button: button.getBoundingClientRect().toJSON(), cell: button.closest('td').getBoundingClientRect().toJSON() }));
  119 |   expect(bounds.button.left, 'The full payout action must remain inside its own visible table cell').toBeGreaterThanOrEqual(bounds.cell.left);
  120 |   expect(bounds.button.right).toBeLessThanOrEqual(bounds.cell.right);
  121 |   const hit = await approve.evaluate(button => { const r = button.getBoundingClientRect(); const target = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); return button === target || button.contains(target); });
  122 |   expect(hit, 'Payout approval center must not be covered by an adjacent table cell').toBe(true);
  123 |   await page.getByRole('button', { name: 'Duyệt chuyển', exact: true }).click();
  124 |   await expect(page.locator('tbody')).toContainText('Đã duyệt chuyển');
  125 |   await page.reload();
  126 |   await expect(page.locator('tbody')).toContainText('Đã duyệt chuyển');
  127 |   await expect(page.getByRole('button', { name: 'Duyệt chuyển', exact: true })).toHaveCount(0);
  128 |   await page.goto('/admin/logs');
  129 |   await expect(page.locator('tbody')).toContainText('APPROVE_PAYOUT');
  130 | });
  131 | 
  132 | test('UI-COMP-A09 saved warning threshold controls the following account suspension decision', async ({ page }) => {
  133 |   await login(page, 'admin', '/admin/settings');
```