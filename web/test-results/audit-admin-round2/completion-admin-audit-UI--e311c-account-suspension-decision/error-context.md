# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-admin-audit.spec.js >> UI-COMP-A09 saved warning threshold controls the following account suspension decision
- Location: tests\e2e\completion-admin-audit.spec.js:132:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('tbody tr')
Expected substring: "Đang bị khóa"
Received string:    "GBTrần Gia Bảo@giabaotutor@demo.tutornearme.vn0900000002Gia sư01/09/2026Đang hoạt động"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('tbody tr') with timeout 5000ms
  - waiting for locator('tbody tr')
    13 × locator resolved to <tr>…</tr>
       - unexpected value "GBTrần Gia Bảo@giabaotutor@demo.tutornearme.vn0900000002Gia sư01/09/2026Đang hoạt động"

```

```yaml
- row "Ảnh đại diện của Trần Gia Bảo Trần Gia Bảo @giabao tutor@demo.tutornearme.vn 0900000002 Gia sư 01/09/2026 Đang hoạt động Xem chi tiết người dùng Trần Gia Bảo Khóa tài khoản giabao":
  - cell "Ảnh đại diện của Trần Gia Bảo Trần Gia Bảo @giabao":
    - img "Ảnh đại diện của Trần Gia Bảo"
    - strong: Trần Gia Bảo
    - text: "@giabao"
  - cell "tutor@demo.tutornearme.vn"
  - cell "0900000002"
  - cell "Gia sư"
  - cell "01/09/2026"
  - cell "Đang hoạt động"
  - cell "Xem chi tiết người dùng Trần Gia Bảo Khóa tài khoản giabao":
    - button "Xem chi tiết người dùng Trần Gia Bảo"
    - button "Khóa tài khoản giabao"
```

# Test source

```ts
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
> 142 |   await expect(page.locator('tbody tr')).toContainText('Đang bị khóa');
      |                                          ^ Error: expect(locator).toContainText(expected) failed
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