# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-admin-audit.spec.js >> UI-COMP-A06 Admin rejected class is no longer discoverable on Tutor board
- Location: tests\e2e\completion-admin-audit.spec.js:54:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.tutor-find__class').filter({ hasText: 'Nguyễn Minh Anh' })
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.tutor-find__class').filter({ hasText: 'Nguyễn Minh Anh' }) with timeout 5000ms
  - waiting for locator('.tutor-find__class').filter({ hasText: 'Nguyễn Minh Anh' })
    14 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - complementary "Điều hướng gia sư" [ref=f2e4]:
      - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn." [ref=f2e6] [cursor=pointer]:
        - /url: /
        - strong [ref=f2e7]: TutorNearMe
        - generic [ref=f2e8]: Gia sư gần bạn. Tri thức gần hơn.
      - navigation "Các mục của gia sư" [ref=f2e9]:
        - link "Tổng quan" [ref=f2e10] [cursor=pointer]:
          - /url: /tutor/dashboard
        - link "Yêu cầu học 6" [ref=f2e17] [cursor=pointer]:
          - /url: /tutor/requests
          - generic [ref=f2e21]: Yêu cầu học
          - generic [ref=f2e22]: "6"
        - link "Lịch dạy học" [ref=f2e23] [cursor=pointer]:
          - /url: /tutor/timetable
        - link "Tìm học viên mới" [ref=f2e27] [cursor=pointer]:
          - /url: /tutor/find-students
        - link "Ví & Thu nhập" [ref=f2e34] [cursor=pointer]:
          - /url: /tutor/wallet
        - link "Hồ sơ gia sư" [ref=f2e39] [cursor=pointer]:
          - /url: /tutor/profile
        - link "Tin nhắn" [ref=f2e44] [cursor=pointer]:
          - /url: /messages
        - link "Kháng cáo" [ref=f2e48] [cursor=pointer]:
          - /url: /appeals
        - link "Trung tâm Trợ giúp" [ref=f2e54] [cursor=pointer]:
          - /url: /help
    - generic [ref=f2e59]:
      - banner [ref=f2e60]:
        - navigation "Điều hướng nhanh" [ref=f2e61]:
          - link "Tìm lớp gần tôi" [ref=f2e62] [cursor=pointer]:
            - /url: /tutor/map
          - link "Tổng Quan" [ref=f2e66] [cursor=pointer]:
            - /url: /tutor/dashboard
        - generic [ref=f2e72]:
          - button "Thông báo" [ref=f2e74] [cursor=pointer]:
            - generic [ref=f2e78]: "1"
          - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=f2e79] [cursor=pointer]:
            - /url: /tutor/profile
            - img "Ảnh đại diện của Trần Gia Bảo" [ref=f2e80]:
              - generic [aria-hidden] [ref=f2e81]: GB
            - generic [ref=f2e82]: giabao
          - button "Đăng xuất" [ref=f2e83] [cursor=pointer]
      - main [ref=f2e87]:
        - generic [ref=f2e89]:
          - text: KHÔNG GIAN GIA SƯ · DEMO
          - heading "Tìm học viên & Nhận lớp mới" [level=1] [ref=f2e90]
          - paragraph [ref=f2e91]: Bảng tin tìm gia sư trực tiếp từ học viên và phụ huynh. Ứng tuyển minh bạch, nhận lớp an toàn.
        - alert [ref=f2e92]:
          - generic [ref=f2e95]:
            - strong [ref=f2e96]: "⚠️ CẢNH BÁO AN TOÀN: TutorNearMe không bao giờ thu phí nhận lớp hay tiền cọc giữ chỗ. Mọi yêu cầu chuyển tiền nhận lớp ngoài sàn đều là lừa đảo đa cấp!"
            - paragraph [ref=f2e97]: Tất cả giao dịch học phí và phí sàn (10% hoặc 7% cho Top-Rated) được giải ngân minh bạch qua ví số sau khi buổi học hoàn thành. Không thanh toán bất kỳ khoản tiền nào trước khi dạy.
        - tablist [ref=f2e98]:
          - tab "Bảng tin Lớp học Mới (3)" [selected] [ref=f2e99] [cursor=pointer]
          - tab "Đơn ứng tuyển của tôi (1)" [ref=f2e100] [cursor=pointer]
        - generic [ref=f2e101]:
          - complementary "Bộ lọc tìm lớp" [ref=f2e102]:
            - generic [ref=f2e103]:
              - heading "Bộ lọc tìm lớp" [level=2] [ref=f2e104]
              - button "Đặt lại" [ref=f2e106] [cursor=pointer]
            - group "Điều kiện tìm lớp" [ref=f2e107]:
              - group "Môn học Có thể chọn nhiều" [ref=f2e109]:
                - generic [ref=f2e110]:
                  - text: Môn học
                  - generic [ref=f2e111]: Có thể chọn nhiều
                - generic [ref=f2e112] [cursor=pointer]:
                  - checkbox "Toán" [ref=f2e113]
                  - generic [ref=f2e114]: Toán
                - generic [ref=f2e115] [cursor=pointer]:
                  - checkbox "Tiếng Anh" [ref=f2e116]
                  - generic [ref=f2e117]: Tiếng Anh
                - generic [ref=f2e118] [cursor=pointer]:
                  - checkbox "Vật lý" [ref=f2e119]
                  - generic [ref=f2e120]: Vật lý
              - group "Khu vực Có thể chọn nhiều" [ref=f2e121]:
                - generic [ref=f2e122]:
                  - text: Khu vực
                  - generic [ref=f2e123]: Có thể chọn nhiều
                - generic [ref=f2e124] [cursor=pointer]:
                  - checkbox "Bình Thạnh, TP. Hồ Chí Minh" [ref=f2e125]
                  - generic [ref=f2e126]: Bình Thạnh, TP. Hồ Chí Minh
                - generic [ref=f2e127] [cursor=pointer]:
                  - checkbox "Toàn quốc (Online)" [ref=f2e128]
                  - generic [ref=f2e129]: Toàn quốc (Online)
                - generic [ref=f2e130] [cursor=pointer]:
                  - checkbox "Quận 3, TP. Hồ Chí Minh" [ref=f2e131]
                  - generic [ref=f2e132]: Quận 3, TP. Hồ Chí Minh
              - group "Khoảng học phí VNĐ / buổi" [ref=f2e133]:
                - generic [ref=f2e134]:
                  - text: Khoảng học phí
                  - generic [ref=f2e135]: VNĐ / buổi
                - generic [ref=f2e136]:
                  - status "Học phí từ" [ref=f2e137]: 0đ
                  - generic [ref=f2e138]: –
                  - status "Học phí đến" [ref=f2e139]: 500.000đ
                - generic [ref=f2e140]:
                  - slider "Học phí tối thiểu": "0"
                  - slider "Học phí tối đa": "500000"
                - generic [ref=f2e142]:
                  - generic [ref=f2e143]: 0đ
                  - generic [ref=f2e144]: 500.000đ
            - generic [ref=f2e145]:
              - text: 💡
              - strong [ref=f2e146]: "Mẹo nhận lớp:"
              - text: Nộp hồ sơ sớm kèm lời giới thiệu phương pháp dạy chi tiết giúp tăng 80% cơ hội được phụ huynh chọn.
          - region "Danh sách lớp học mở" [ref=f2e147]:
            - generic [ref=f2e149]:
              - text: BẢNG TIN THỊ TRƯỜNG
              - heading "3 lớp đang tìm gia sư" [level=2] [ref=f2e150]
            - paragraph [ref=f2e151]: Các lớp học được đăng tải trực tiếp bởi phụ huynh và học viên. Bạn có thể tự do đề xuất mức học phí phù hợp.
            - generic [ref=f2e152]:
              - article [ref=f2e153]:
                - generic [ref=f2e154]:
                  - generic [ref=f2e155]:
                    - generic [ref=f2e156]: Toán – Lớp 8
                    - 'heading "Học viên: Nguyễn Minh Anh · Mã #post-101" [level=3] [ref=f2e159]'
                  - generic [ref=f2e160]: "Cố định: 220.000đ / buổi"
                - paragraph [ref=f2e162]: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
                - generic [ref=f2e163]:
                  - generic [ref=f2e164]: Bình Thạnh, TP. Hồ Chí Minh (Tại nhà)
                  - generic [ref=f2e168]: Thứ 3 và Thứ 5 (18:30 - 20:00)
                  - generic [ref=f2e171]: 📍 Khoảng cách ~ 2.5 km
                  - generic [ref=f2e172]: 🎯 Yêu cầu học thử 30-45 phút
                  - generic [ref=f2e173]: 2 đã ứng tuyển
                - generic [ref=f2e179]:
                  - generic [ref=f2e180]: "Đăng lúc: Thứ 7, 03/10"
                  - generic [ref=f2e181]: Đã nộp đơn ứng tuyển
              - article [ref=f2e184]:
                - generic [ref=f2e185]:
                  - generic [ref=f2e186]:
                    - generic [ref=f2e187]: Tiếng Anh – Lớp 9
                    - 'heading "Học viên: Trần Thu Hà · Mã #post-102" [level=3] [ref=f2e190]'
                  - generic [ref=f2e191]: "Khoảng giá: 220.000đ – 280.000đ / buổi"
                - paragraph [ref=f2e193]: Luyện đề thi tuyển sinh vào lớp 10 chuyên Anh
                - generic [ref=f2e194]:
                  - generic [ref=f2e195]: Toàn quốc (Online) (Online)
                  - generic [ref=f2e199]: Thứ 2, Thứ 4, Thứ 6 (19:30 - 21:00)
                  - generic [ref=f2e202]: 1 đã ứng tuyển
                - generic [ref=f2e208]:
                  - generic [ref=f2e209]: "Đăng lúc: CN, 04/10"
                  - button "Ứng tuyển nhận lớp" [ref=f2e210] [cursor=pointer]
              - article [ref=f2e211]:
                - generic [ref=f2e212]:
                  - generic [ref=f2e213]:
                    - generic [ref=f2e214]: Vật lý – Lớp 11
                    - 'heading "Học viên: Lê Hoàng Nam · Mã #post-103" [level=3] [ref=f2e217]'
                  - generic [ref=f2e218]: Thương lượng với gia sư
                - paragraph [ref=f2e220]: Nắm vững kiến thức điện xoay chiều và dao động điều hòa
                - generic [ref=f2e221]:
                  - generic [ref=f2e222]: Quận 3, TP. Hồ Chí Minh (Tại nhà)
                  - generic [ref=f2e226]: Thứ 7 & Chủ nhật (09:00 - 10:30)
                  - generic [ref=f2e229]: 📍 Khoảng cách ~ 2.5 km
                  - generic [ref=f2e230]: 🎯 Yêu cầu học thử 30-45 phút
                  - generic [ref=f2e231]: 0 đã ứng tuyển
                - generic [ref=f2e237]:
                  - generic [ref=f2e238]: "Đăng lúc: Thứ 2, 05/10"
                  - button "Ứng tuyển nhận lớp" [ref=f2e239] [cursor=pointer]
  - complementary "Widget nhắn tin nhanh" [ref=f2e240]:
    - button "Mở cửa sổ trò chuyện" [ref=f2e241] [cursor=pointer]
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
  33  |     await expect(page.getByLabel(label, { exact: true })).toBeVisible();
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
> 65  |   await expect(page.locator('.tutor-find__class').filter({ hasText: 'Nguyễn Minh Anh' })).toHaveCount(0);
      |                                                                                           ^ Error: expect(locator).toHaveCount(expected) failed
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
  134 |   await page.locator('main input[type=number]').last().fill('1');
  135 |   await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  136 |   await page.goto('/admin/issues');
  137 |   await page.locator('tbody tr').filter({ hasText: 'ISSUE-104' }).getByRole('button', { name: /Xử lý sự cố/ }).click();
  138 |   await page.locator('#warning-reason-input').fill('Cần xử lý phản ánh theo ngưỡng cảnh cáo đã được quản trị viên cấu hình.');
  139 |   await page.getByRole('button', { name: /Gửi cảnh cáo & Giải quyết sự cố/ }).click();
  140 |   await page.goto('/admin/users');
  141 |   await page.getByRole('searchbox', { name: 'Tìm kiếm người dùng' }).fill('giabao');
  142 |   await expect(page.locator('tbody tr')).toContainText('Đang bị khóa');
  143 | });
  144 | 
  145 | test('UI-COMP-A10 Admin icon-enabled actions display the requested Lucide icon', async ({ page }) => {
  146 |   await login(page, 'admin', '/admin/subjects');
  147 |   await expect(page.getByRole('button', { name: 'Thêm môn học mới' }).locator('svg')).toHaveCount(1);
  148 |   await page.goto('/admin/settings');
  149 |   await expect(page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).locator('svg')).toHaveCount(1);
  150 | });
  151 | 
  152 | for (const width of [1440, 1024, 390]) {
  153 |   test(`Admin completion connected screens have no page overflow or runtime errors at ${width}px`, async ({ page }) => {
  154 |     const errors = []; page.on('pageerror', error => errors.push(String(error)));
  155 |     await page.setViewportSize({ width, height: 900 });
  156 |     await login(page, 'admin', '/admin/dashboard');
  157 |     for (const route of ['dashboard', 'users', 'tutors', 'reviews', 'issues', 'appeals', 'classes', 'finance', 'subjects', 'locations', 'settings', 'logs']) {
  158 |       await page.goto(`/admin/${route}`);
  159 |       await page.evaluate(() => document.fonts.ready);
  160 |       await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  161 |       expect(await page.evaluate(() => document.documentElement.scrollWidth), route).toBeLessThanOrEqual(width);
  162 |       await page.screenshot({ path: `playwright-report/audit-admin/${route}-${width}.png`, fullPage: true });
  163 |       for (const table of await page.locator('.admin-table-scroll,.admin-table-container').all()) {
  164 |         await table.evaluate(e => { e.scrollLeft = e.scrollWidth; e.scrollTop = e.scrollHeight; });
  165 |       }
```