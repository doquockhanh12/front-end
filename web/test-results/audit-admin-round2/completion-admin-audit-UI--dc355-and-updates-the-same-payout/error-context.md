# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-admin-audit.spec.js >> UI-COMP-A11 Admin payout approval button is clickable and updates the same payout
- Location: tests\e2e\completion-admin-audit.spec.js:113:1

# Error details

```
Error: The full payout action must remain inside its own visible table cell

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 1250.0625
Received:    1207.046875
```

# Page snapshot

```yaml
- generic [ref=e2]:
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
          - strong [ref=e85]: Quản trị Dòng tiền Ký quỹ & Rút tiền
        - generic [ref=e86]:
          - generic [ref=e87]:
            - img "Ảnh đại diện của Quản trị viên" [ref=e88]:
              - generic [aria-hidden] [ref=e89]: AD
            - generic [ref=e90]: Quản trị viên
          - button "Đăng xuất" [ref=e91] [cursor=pointer]
      - main [ref=e95]:
        - generic [ref=e96]:
          - generic [ref=e98]:
            - heading "Quản trị Tài chính, Ký quỹ Escrow & Phê duyệt Rút tiền" [level=1] [ref=e99]
            - paragraph [ref=e100]: Giám sát két bảo hiểm tiền cọc học viên, theo dõi dòng tiền minh bạch và phê duyệt lệnh rút thù lao của gia sư sinh viên.
          - generic [ref=e101]:
            - generic [ref=e107]:
              - text: Tiền cọc đang giữ trong Két Escrow
              - generic [ref=e108]: 440.000 đ
            - generic [ref=e113]:
              - text: Doanh thu phí sàn tích lũy
              - generic [ref=e114]: 1.250.000 đ
            - generic [ref=e119]:
              - text: Lệnh rút tiền chờ duyệt
              - generic [ref=e120]: 1 lệnh
          - generic [ref=e121]:
            - generic [ref=e122]:
              - button "Lệnh rút tiền ngân hàng1" [ref=e123] [cursor=pointer]
              - button "Két Ký quỹ Escrow" [ref=e124] [cursor=pointer]
              - button "Sổ cái Dòng tiền" [ref=e125] [cursor=pointer]
            - textbox "Tìm kiếm tài khoản, mã lệnh..." [ref=e130]
          - generic [ref=e131]:
            - generic [ref=e132]: Hiển thị 1 / 1 bản ghi
            - table [ref=e134]:
              - rowgroup [ref=e135]:
                - row [ref=e136]:
                  - columnheader "Gia sư" [ref=e137]
                  - columnheader "Ngân hàng thụ hưởng" [ref=e138]
                  - columnheader "Số tài khoản & Chủ TK" [ref=e139]
                  - columnheader "Số tiền rút" [ref=e140]
                  - columnheader "Thời gian yêu cầu" [ref=e141]
                  - columnheader "Trạng thái" [ref=e142]
                  - columnheader "Hành động" [ref=e143]
              - rowgroup [ref=e144]:
                - row [ref=e145]:
                  - cell "Trần Gia Bảo" [ref=e146]
                  - cell [ref=e147]:
                    - strong [ref=e148]: Vietcombank
                  - cell "1012345678 TRAN GIA BAO" [ref=e149]:
                    - text: "1012345678"
                    - generic [ref=e150]: TRAN GIA BAO
                  - cell "500.000 đ" [ref=e151]
                  - cell "16:00:00 4/10/2026" [ref=e152]
                  - cell "Chờ phê duyệt" [ref=e153]
                  - cell [ref=e155]:
                    - generic [ref=e156]:
                      - button "Duyệt chuyển" [ref=e157] [cursor=pointer]
                      - button "Từ chối" [ref=e158] [cursor=pointer]
  - complementary "Widget nhắn tin nhanh" [ref=e159]:
    - button "Mở cửa sổ trò chuyện" [ref=e160] [cursor=pointer]
```

# Test source

```ts
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
  64  |   await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
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
> 119 |   expect(bounds.button.left, 'The full payout action must remain inside its own visible table cell').toBeGreaterThanOrEqual(bounds.cell.left);
      |                                                                                                      ^ Error: The full payout action must remain inside its own visible table cell
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
  166 |       await page.screenshot({ path: `playwright-report/audit-admin/${route}-${width}-end.png`, fullPage: true });
  167 |     }
  168 |     expect(errors).toEqual([]);
  169 |   });
  170 | }
  171 | 
```