# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-admin-audit.spec.js >> UI-COMP-A10 Admin icon-enabled actions display the requested Lucide icon
- Location: tests\e2e\completion-admin-audit.spec.js:145:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('button', { name: 'Thêm môn học mới' }).locator('svg')
Expected: 1
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByRole('button', { name: 'Thêm môn học mới' }).locator('svg') with timeout 5000ms
  - waiting for getByRole('button', { name: 'Thêm môn học mới' }).locator('svg')
    13 × locator resolved to 0 elements
       - unexpected value "0"

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
          - strong [ref=e85]: Danh mục Môn học (A07)
        - generic [ref=e86]:
          - generic [ref=e87]:
            - img "Ảnh đại diện của Quản trị viên" [ref=e88]:
              - generic [aria-hidden] [ref=e89]: AD
            - generic [ref=e90]: Quản trị viên
          - button "Đăng xuất" [ref=e91] [cursor=pointer]
      - main [ref=e95]:
        - generic [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e98]:
              - heading "Quản lý Danh mục Môn học" [level=1] [ref=e99]
              - paragraph [ref=e100]: Chuẩn hóa danh mục môn học, phân loại học thuật và đồng bộ trực tiếp với bộ lọc tìm kiếm toàn sàn.
            - button "Thêm môn học mới" [ref=e101] [cursor=pointer]
          - generic [ref=e102]:
            - generic [ref=e103]:
              - button "Tất cả" [ref=e104] [cursor=pointer]
              - button "Đang áp dụng" [ref=e105] [cursor=pointer]
              - button "Tạm dừng" [ref=e106] [cursor=pointer]
            - textbox "Tìm kiếm môn học, phân loại..." [ref=e111]
          - generic [ref=e112]: Hiển thị 12 / 12 bản ghi
          - table [ref=e114]:
            - rowgroup [ref=e115]:
              - row [ref=e116]:
                - columnheader "Môn học" [ref=e117]
                - columnheader "Nhóm phân loại" [ref=e118]
                - columnheader "Trạng thái" [ref=e119]
                - columnheader "Ngày thêm" [ref=e120]
                - columnheader "Thao tác" [ref=e121]
            - rowgroup [ref=e122]:
              - row [ref=e123]:
                - cell "Toán" [ref=e124]
                - cell "Khoa học tự nhiên" [ref=e129]
                - cell "Đang áp dụng" [ref=e130]
                - cell "1/9/2026" [ref=e132]
                - cell [ref=e133]:
                  - generic [ref=e134]:
                    - button "Chỉnh sửa môn học" [ref=e135] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e138] [cursor=pointer]
              - row [ref=e142]:
                - cell "Ngữ văn" [ref=e143]
                - cell "Khoa học xã hội" [ref=e148]
                - cell "Đang áp dụng" [ref=e149]
                - cell "1/9/2026" [ref=e151]
                - cell [ref=e152]:
                  - generic [ref=e153]:
                    - button "Chỉnh sửa môn học" [ref=e154] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e157] [cursor=pointer]
              - row [ref=e161]:
                - cell "Tiếng Anh" [ref=e162]
                - cell "Ngoại ngữ" [ref=e167]
                - cell "Đang áp dụng" [ref=e168]
                - cell "1/9/2026" [ref=e170]
                - cell [ref=e171]:
                  - generic [ref=e172]:
                    - button "Chỉnh sửa môn học" [ref=e173] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e176] [cursor=pointer]
              - row [ref=e180]:
                - cell "Vật lý" [ref=e181]
                - cell "Khoa học tự nhiên" [ref=e186]
                - cell "Đang áp dụng" [ref=e187]
                - cell "1/9/2026" [ref=e189]
                - cell [ref=e190]:
                  - generic [ref=e191]:
                    - button "Chỉnh sửa môn học" [ref=e192] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e195] [cursor=pointer]
              - row [ref=e199]:
                - cell "Hóa học" [ref=e200]
                - cell "Khoa học tự nhiên" [ref=e205]
                - cell "Đang áp dụng" [ref=e206]
                - cell "1/9/2026" [ref=e208]
                - cell [ref=e209]:
                  - generic [ref=e210]:
                    - button "Chỉnh sửa môn học" [ref=e211] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e214] [cursor=pointer]
              - row [ref=e218]:
                - cell "Sinh học" [ref=e219]
                - cell "Khoa học tự nhiên" [ref=e224]
                - cell "Đang áp dụng" [ref=e225]
                - cell "1/9/2026" [ref=e227]
                - cell [ref=e228]:
                  - generic [ref=e229]:
                    - button "Chỉnh sửa môn học" [ref=e230] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e233] [cursor=pointer]
              - row [ref=e237]:
                - cell "Lịch sử" [ref=e238]
                - cell "Khoa học xã hội" [ref=e243]
                - cell "Đang áp dụng" [ref=e244]
                - cell "1/9/2026" [ref=e246]
                - cell [ref=e247]:
                  - generic [ref=e248]:
                    - button "Chỉnh sửa môn học" [ref=e249] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e252] [cursor=pointer]
              - row [ref=e256]:
                - cell "Địa lý" [ref=e257]
                - cell "Khoa học xã hội" [ref=e262]
                - cell "Đang áp dụng" [ref=e263]
                - cell "1/9/2026" [ref=e265]
                - cell [ref=e266]:
                  - generic [ref=e267]:
                    - button "Chỉnh sửa môn học" [ref=e268] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e271] [cursor=pointer]
              - row [ref=e275]:
                - cell "Tin học" [ref=e276]
                - cell "Công nghệ" [ref=e281]
                - cell "Đang áp dụng" [ref=e282]
                - cell "1/9/2026" [ref=e284]
                - cell [ref=e285]:
                  - generic [ref=e286]:
                    - button "Chỉnh sửa môn học" [ref=e287] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e290] [cursor=pointer]
              - row [ref=e294]:
                - cell "IELTS" [ref=e295]
                - cell "Chứng chỉ ngoại ngữ" [ref=e300]
                - cell "Đang áp dụng" [ref=e301]
                - cell "1/9/2026" [ref=e303]
                - cell [ref=e304]:
                  - generic [ref=e305]:
                    - button "Chỉnh sửa môn học" [ref=e306] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e309] [cursor=pointer]
              - row [ref=e313]:
                - cell "TOEIC" [ref=e314]
                - cell "Chứng chỉ ngoại ngữ" [ref=e319]
                - cell "Đang áp dụng" [ref=e320]
                - cell "1/9/2026" [ref=e322]
                - cell [ref=e323]:
                  - generic [ref=e324]:
                    - button "Chỉnh sửa môn học" [ref=e325] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e328] [cursor=pointer]
              - row [ref=e332]:
                - cell "Lập trình Python" [ref=e333]
                - cell "Công nghệ" [ref=e338]
                - cell "Đang áp dụng" [ref=e339]
                - cell "1/9/2026" [ref=e341]
                - cell [ref=e342]:
                  - generic [ref=e343]:
                    - button "Chỉnh sửa môn học" [ref=e344] [cursor=pointer]
                    - button "Tạm dừng áp dụng" [ref=e347] [cursor=pointer]
  - complementary "Widget nhắn tin nhanh" [ref=e351]:
    - button "Mở cửa sổ trò chuyện" [ref=e352] [cursor=pointer]
```

# Test source

```ts
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
> 147 |   await expect(page.getByRole('button', { name: 'Thêm môn học mới' }).locator('svg')).toHaveCount(1);
      |                                                                                       ^ Error: expect(locator).toHaveCount(expected) failed
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