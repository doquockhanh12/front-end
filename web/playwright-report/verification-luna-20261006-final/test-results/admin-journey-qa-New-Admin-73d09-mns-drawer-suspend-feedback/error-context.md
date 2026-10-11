# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-journey-qa.spec.js >> New Admin User Journey & UX Polish QA >> ADM-QA-003: New Admin operates /admin/users, checks 7 columns, drawer & suspend feedback
- Location: tests\e2e\admin-journey-qa.spec.js:73:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.admin-feedback-banner')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.admin-feedback-banner') with timeout 5000ms
  - waiting for locator('.admin-feedback-banner')

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
  - strong: Quản lý người dùng
  - button "Thông báo": "1"
  - img "Ảnh đại diện của Quản trị viên"
  - text: Quản trị viên
  - button "Đăng xuất"
- main:
  - text: TÀI KHOẢN & PHÂN QUYỀN
  - heading "Quản lý Người dùng" [level=1]
  - paragraph: Danh sách học viên, phụ huynh và gia sư trên hệ sinh thái TutorNearMe.
  - tablist "Lọc theo vai trò và trạng thái":
    - tab "Tất cả" [selected]
    - tab "Học viên/Phụ huynh"
    - tab "Gia sư"
    - tab "Đang hoạt động"
    - tab "Đang bị khóa"
  - searchbox "Tìm kiếm người dùng": minhanh
  - text: Hiển thị 1 / 7 bản ghi
  - region "Bảng người dùng":
    - table:
      - rowgroup:
        - row "Người dùng Email Số điện thoại Vai trò Ngày tham gia Trạng thái Thao tác":
          - columnheader "Người dùng"
          - columnheader "Email"
          - columnheader "Số điện thoại"
          - columnheader "Vai trò"
          - columnheader "Ngày tham gia"
          - columnheader "Trạng thái"
          - columnheader "Thao tác"
      - rowgroup:
        - row "Ảnh đại diện của Nguyễn Minh Anh Nguyễn Minh Anh @minhanh learner@demo.tutornearme.vn 0900000001 Học viên 01/09/2026 Đang hoạt động Xem chi tiết người dùng Nguyễn Minh Anh Khóa tài khoản minhanh":
          - cell "Ảnh đại diện của Nguyễn Minh Anh Nguyễn Minh Anh @minhanh":
            - img "Ảnh đại diện của Nguyễn Minh Anh"
            - strong: Nguyễn Minh Anh
            - text: "@minhanh"
          - cell "learner@demo.tutornearme.vn"
          - cell "0900000001"
          - cell "Học viên"
          - cell "01/09/2026"
          - cell "Đang hoạt động"
          - cell "Xem chi tiết người dùng Nguyễn Minh Anh Khóa tài khoản minhanh":
            - button "Xem chi tiết người dùng Nguyễn Minh Anh"
            - button "Khóa tài khoản minhanh"
  - dialog "Khóa tài khoản":
    - complementary:
      - heading "Khóa tài khoản" [level=2]
      - paragraph: Nguyễn Minh Anh
      - button "Đóng bảng chi tiết"
      - paragraph: Đây là quyết định quản trị trong bản demo, được ghi vào nhật ký của tài khoản liên quan.
      - text: Lý do quyết định
      - textbox "Lý do quyết định"
      - button "Xác nhận khóa tài khoản"
```

# Test source

```ts
  14  | 
  15  |     // Verify summary stat cards exist and have values
  16  |     const statCards = page.locator('.admin-summary .stat-item');
  17  |     await expect(statCards).toHaveCount(4);
  18  | 
  19  |     // Verify approvals table has sticky header and clean layout
  20  |     await expect(page.locator('.admin-table--approvals th').first()).toHaveText('Gia sư');
  21  | 
  22  |     // 1024px Tablet
  23  |     await page.setViewportSize({ width: 1024, height: 768 });
  24  |     await expect(page.locator('.admin-summary')).toBeVisible();
  25  | 
  26  |     // 390px Mobile
  27  |     await page.setViewportSize({ width: 390, height: 844 });
  28  |     await expect(page.locator('.workspace-topbar__menu')).toBeVisible();
  29  |     await expect(page.locator('.admin-summary .stat-item')).toHaveCount(4);
  30  |   });
  31  | 
  32  |   test('ADM-QA-002: New Admin operates /admin/tutors with instant search, tabs, drawer & feedback banner', async ({ page }) => {
  33  |     await page.setViewportSize({ width: 1440, height: 900 });
  34  |     await page.goto('/admin/tutors');
  35  | 
  36  |     // Counter matches format
  37  |     await expect(page.locator('.admin-record-counter')).toContainText(/Hiển thị \d+ \/ \d+ bản ghi/);
  38  | 
  39  |     // Filter by pending tab
  40  |     await page.getByRole('tab', { name: 'Chờ duyệt' }).click();
  41  |     await expect(page.locator('.admin-record-counter')).toContainText(/Hiển thị 3 \/ \d+ bản ghi/);
  42  | 
  43  |     // Search instant filter
  44  |     const searchInput = page.getByRole('searchbox', { name: 'Tìm kiếm gia sư' });
  45  |     await searchInput.fill('Thảo Vy');
  46  |     await expect(page.locator('.admin-record-counter')).toContainText(/Hiển thị 1 \/ \d+ bản ghi/);
  47  | 
  48  |     // Open drawer
  49  |     await page.getByRole('button', { name: /Xem chi tiết hồ sơ/ }).click();
  50  |     await expect(page.locator('#slideover-title')).toContainText('Lê Thảo Vy');
  51  | 
  52  |     // Verify verification documents card exists in drawer
  53  |     await expect(page.locator('.admin-doc-item')).toHaveCount(2);
  54  | 
  55  |     // Approve tutor from drawer
  56  |     await page.locator('.admin-drawer-actions').getByRole('button', { name: 'Phê duyệt hồ sơ' }).click();
  57  | 
  58  |     // Verify feedback banner appears
  59  |     const banner = page.locator('.admin-feedback-banner--success');
  60  |     await expect(banner).toBeVisible();
  61  |     await expect(banner).toContainText('Đã phê duyệt hồ sơ');
  62  | 
  63  |     // Test mobile drawer full-width
  64  |     await page.setViewportSize({ width: 390, height: 844 });
  65  |     const panel = page.locator('.admin-slideover__panel');
  66  |     await expect(panel).toBeVisible();
  67  | 
  68  |     // Close drawer via ESC
  69  |     await page.keyboard.press('Escape');
  70  |     await expect(panel).not.toBeVisible();
  71  |   });
  72  | 
  73  |   test('ADM-QA-003: New Admin operates /admin/users, checks 7 columns, drawer & suspend feedback', async ({ page }) => {
  74  |     await page.setViewportSize({ width: 1440, height: 900 });
  75  |     await page.goto('/admin/users');
  76  | 
  77  |     // Table has 7 columns
  78  |     const headers = page.locator('.admin-table--users th');
  79  |     await expect(headers).toHaveCount(7);
  80  |     await expect(headers.nth(0)).toHaveText('Người dùng');
  81  |     await expect(headers.nth(1)).toHaveText('Email');
  82  |     await expect(headers.nth(2)).toHaveText('Số điện thoại');
  83  |     await expect(headers.nth(3)).toHaveText('Vai trò');
  84  |     await expect(headers.nth(4)).toHaveText('Ngày tham gia');
  85  |     await expect(headers.nth(5)).toHaveText('Trạng thái');
  86  |     await expect(headers.nth(6)).toHaveText('Thao tác');
  87  | 
  88  |     // Verify dates are formatted cleanly as DD/MM/YYYY without raw ISO timestamp 'T'
  89  |     const dateCell = page.locator('.admin-table--users tbody tr td:nth-child(5) span').first();
  90  |     const dateText = await dateCell.innerText();
  91  |     expect(dateText).toMatch(/^\d{2}\/\d{2}\/\d{4}$|^Tháng \d+\/\d{4}$/);
  92  |     expect(dateText).not.toContain('T');
  93  | 
  94  |     // Verify cell truncation styling is applied to prevent text collision
  95  |     const emailCell = page.locator('.admin-table--users tbody tr td:nth-child(2) span').first();
  96  |     await expect(emailCell).toHaveClass(/admin-cell-truncate/);
  97  | 
  98  |     // Search user
  99  |     await page.getByRole('searchbox', { name: 'Tìm kiếm người dùng' }).fill('minhanh');
  100 |     await expect(page.locator('.admin-record-counter')).toContainText(/Hiển thị 1 \/ \d+ bản ghi/);
  101 | 
  102 |     // Open drawer
  103 |     await page.getByRole('button', { name: /Xem chi tiết người dùng/ }).click();
  104 |     await expect(page.locator('#slideover-title')).toBeVisible();
  105 | 
  106 |     // Drawer displays activity statistics
  107 |     await expect(page.getByText('Số yêu cầu học')).toBeVisible();
  108 | 
  109 |     // Toggle suspend
  110 |     await page.locator('.admin-drawer-actions').getByRole('button', { name: /Khóa tài khoản/ }).click();
  111 | 
  112 |     // Feedback banner appears
  113 |     const banner = page.locator('.admin-feedback-banner');
> 114 |     await expect(banner).toBeVisible();
      |                          ^ Error: expect(locator).toBeVisible() failed
  115 |     await expect(banner).toContainText('Đã tạm khóa tài khoản');
  116 |   });
  117 | 
  118 |   test('ADM-QA-004: New Admin operates /admin/reviews, checks 7 columns & approval/hide actions', async ({ page }) => {
  119 |     await page.setViewportSize({ width: 1440, height: 900 });
  120 |     await page.goto('/admin/reviews');
  121 | 
  122 |     // Table has 7 columns
  123 |     const headers = page.locator('.admin-table--reviews th');
  124 |     await expect(headers).toHaveCount(7);
  125 |     await expect(headers.nth(0)).toHaveText('Người đánh giá');
  126 |     await expect(headers.nth(3)).toHaveText('Nội dung nhận xét');
  127 |     await expect(headers.nth(6)).toHaveText('Thao tác');
  128 | 
  129 |     // Switch to Cần duyệt tab
  130 |     await page.getByRole('tab', { name: 'Cần duyệt / Xem xét' }).click();
  131 | 
  132 |     // Approve the first pending review
  133 |     const approveBtn = page.locator('.admin-row-actions').getByRole('button', { name: /Duyệt hiển thị/ }).first();
  134 |     await approveBtn.click();
  135 | 
  136 |     // Verify feedback banner appears
  137 |     const banner = page.locator('.admin-feedback-banner--success');
  138 |     await expect(banner).toBeVisible();
  139 |     await expect(banner).toContainText('Đã phê duyệt hiển thị đánh giá');
  140 |   });
  141 | 
  142 |   test('ADM-QA-005: New Admin operates /admin/issues, checks 2-party trust metrics, dispute warnings & dismissal', async ({ page }) => {
  143 |     await page.setViewportSize({ width: 1440, height: 900 });
  144 |     await page.goto('/admin/issues');
  145 | 
  146 |     // Table has 7 columns
  147 |     const headers = page.locator('.admin-table--issues th');
  148 |     await expect(headers).toHaveCount(7);
  149 |     await expect(headers.nth(0)).toHaveText('Mã sự cố');
  150 |     await expect(headers.nth(1)).toHaveText('Phân loại');
  151 |     await expect(headers.nth(2)).toHaveText('Người gửi');
  152 |     await expect(headers.nth(3)).toHaveText('Bên liên quan');
  153 |     await expect(headers.nth(6)).toHaveText('Thao tác');
  154 | 
  155 |     // Filter tabs include 'Đã từ chối'
  156 |     await expect(page.getByRole('tab', { name: 'Đã từ chối' })).toBeVisible();
  157 | 
  158 |     // 1. Open drawer for an open issue and verify two-party inspection & trust metrics
  159 |     await page.locator('.admin-row-actions').getByRole('button', { name: /Xử lý sự cố/ }).first().click();
  160 |     await expect(page.locator('#slideover-title')).toContainText('Sự cố');
  161 | 
  162 |     // Two-party comparison grid is visible
  163 |     const partiesGrid = page.locator('.admin-parties-grid');
  164 |     await expect(partiesGrid).toBeVisible();
  165 |     await expect(partiesGrid).toContainText('Bên gửi phản ánh');
  166 |     await expect(partiesGrid).toContainText('Đối tượng bị khiếu nại');
  167 |     await expect(partiesGrid.locator('.admin-party-trust-badge--reporter')).toBeVisible();
  168 |     await expect(partiesGrid.locator('.admin-warning-meter')).toBeVisible();
  169 | 
  170 |     // 2. Test Warning Dispute Flow (Tab: Gửi cảnh cáo vi phạm)
  171 |     // Try to send warning without note -> validation error
  172 |     await page.getByRole('button', { name: /Gửi cảnh cáo & Giải quyết sự cố/ }).click();
  173 |     await expect(page.getByText(/Vui lòng nhập lý do.*cảnh cáo vi phạm/i)).toBeVisible();
  174 | 
  175 |     // Enter warning reason and submit
  176 |     await page.locator('#warning-reason-input').fill('Vắng mặt buổi học online không thông báo trước.');
  177 |     await page.getByRole('button', { name: /Gửi cảnh cáo & Giải quyết sự cố/ }).click();
  178 | 
  179 |     // Feedback banner for warning appears (since target user exceeded 3 warnings, auto-suspension triggered)
  180 |     const warningBanner = page.locator('.admin-feedback-banner');
  181 |     await expect(warningBanner).toBeVisible();
  182 |     await expect(warningBanner).toContainText('Đã gửi cảnh cáo vi phạm');
  183 |     await expect(warningBanner).toContainText('Tài khoản đã TỰ ĐỘNG BỊ KHÓA');
  184 | 
  185 |     // 3. Test Report Dismissal Flow
  186 |     // Switch to Mới tiếp nhận tab to find an open issue
  187 |     await page.getByRole('tab', { name: 'Mới tiếp nhận' }).click();
  188 |     const openRowBtn = page.locator('.admin-row-actions').getByRole('button', { name: /Xử lý sự cố/ }).first();
  189 |     await openRowBtn.click();
  190 |     await expect(page.locator('#slideover-title')).toBeVisible();
  191 | 
  192 |     // Switch to 'Từ chối báo cáo' action tab
  193 |     await page.getByRole('tab', { name: 'Từ chối báo cáo' }).click();
  194 |     await expect(page.getByText('Chính sách bảo vệ tài khoản')).toBeVisible();
  195 | 
  196 |     // Try to dismiss without reason -> validation error
  197 |     await page.getByRole('button', { name: /Từ chối báo cáo & Gửi thông báo/ }).click();
  198 |     await expect(page.getByText('Vui lòng nhập thông báo lý do từ chối')).toBeVisible();
  199 | 
  200 |     // Fill dismissal reason and submit
  201 |     await page.locator('#dismissal-reason-input').fill('Chưa đủ chứng cứ xác thực khiếu nại, hai bên đã thống nhất bù giờ học.');
  202 |     await page.getByRole('button', { name: /Từ chối báo cáo & Gửi thông báo/ }).click();
  203 | 
  204 |     // Feedback banner for dismissal appears
  205 |     const dismissBanner = page.locator('.admin-feedback-banner');
  206 |     await expect(dismissBanner).toBeVisible();
  207 |     await expect(dismissBanner).toContainText('Đã từ chối báo cáo');
  208 | 
  209 |     // 4. Verify dismissed issue appears under 'Đã từ chối' tab
  210 |     await page.getByRole('tab', { name: 'Đã từ chối' }).click();
  211 |     await expect(page.locator('.admin-table tbody tr')).not.toHaveCount(0);
  212 |     await expect(page.locator('.admin-table tbody tr').first()).toContainText('Đã từ chối');
  213 |   });
  214 | });
```