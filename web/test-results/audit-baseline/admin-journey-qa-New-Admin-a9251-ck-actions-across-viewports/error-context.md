# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-journey-qa.spec.js >> New Admin User Journey & UX Polish QA >> ADM-QA-001: New Admin visits Dashboard, inspects metrics and quick actions across viewports
- Location: tests\e2e\admin-journey-qa.spec.js:10:3

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.admin-summary .stat-item')
Expected: 4
Received: 6
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.admin-summary .stat-item') with timeout 5000ms
  - waiting for locator('.admin-summary .stat-item')
    13 × locator resolved to 6 elements
       - unexpected value "6"

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
          - strong [ref=e85]: Tổng quan
        - generic [ref=e86]:
          - generic [ref=e87]:
            - img "Ảnh đại diện của Quản trị viên" [ref=e88]:
              - generic [aria-hidden] [ref=e89]: AD
            - generic [ref=e90]: Quản trị viên
          - button "Đăng xuất" [ref=e91] [cursor=pointer]
      - main [ref=e95]:
        - generic [ref=e96]:
          - generic [ref=e97]:
            - text: VẬN HÀNH TUTORNEARME
            - heading "Tổng quan hệ thống" [level=1] [ref=e98]
            - paragraph [ref=e99]: Theo dõi hoạt động thực tế trên nền tảng và xử lý những mục đang cần chú ý.
          - generic [ref=e100]: Thứ Hai, 5 tháng 10
        - generic [ref=e101]:
          - generic [ref=e102]:
            - generic [ref=e103]: Gia sư trên hệ thống
            - strong [ref=e105]: "11"
            - text: 3 hồ sơ chờ duyệt
          - generic [ref=e106]:
            - generic [ref=e107]: Người dùng hoạt động
            - strong [ref=e109]: "5"
            - text: 2 tài khoản bị khóa
          - generic [ref=e110]:
            - generic [ref=e111]: Đánh giá gửi về
            - strong [ref=e113]: "6"
            - text: 2 cần kiểm duyệt
          - generic [ref=e114]:
            - generic [ref=e115]: Sự cố & khiếu nại
            - strong [ref=e117]: "5"
            - text: 4 mục cần xử lý
          - generic [ref=e118]:
            - generic [ref=e119]: Số dư Ký quỹ Escrow
            - strong [ref=e123]: 440.000 đ
            - text: 1 lệnh rút chờ duyệt
          - generic [ref=e124]:
            - generic [ref=e125]: Tin đăng tìm gia sư
            - strong [ref=e130]: "3"
            - text: 0 tin chờ duyệt
        - generic [ref=e131]:
          - generic [ref=e132]:
            - region [ref=e133]:
              - generic [ref=e134]:
                - generic [ref=e135]:
                  - text: KIỂM DUYỆT HỒ SƠ
                  - heading "Gia sư chờ duyệt" [level=2] [ref=e136]
                - generic [ref=e137]:
                  - generic [ref=e138]: 3 hồ sơ cần xử lý
                  - link "Xem tất cả" [ref=e139] [cursor=pointer]:
                    - /url: /admin/tutors
              - generic [ref=e142]:
                - generic [ref=e144]: Trạng thái
                - combobox "Trạng thái" [ref=e145] [cursor=pointer]:
                  - option "Chờ duyệt" [selected]
                  - option "Tất cả"
                  - option "Đã duyệt"
                  - option "Từ chối"
                  - option "Tạm khóa"
              - region "Bảng hồ sơ gia sư chờ duyệt" [ref=e146]:
                - table [ref=e147]:
                  - rowgroup [ref=e148]:
                    - row [ref=e149]:
                      - columnheader "Gia sư" [ref=e150]
                      - columnheader "Môn dạy" [ref=e151]
                      - columnheader "Gửi lúc" [ref=e152]
                      - columnheader "Trạng thái" [ref=e153]
                      - columnheader "Thao tác" [ref=e154]
                  - rowgroup [ref=e155]:
                    - row [ref=e156]:
                      - cell "Ảnh đại diện của Lê Thảo Vy Lê Thảo Vy ĐH Sư phạm TP.HCM" [ref=e157]:
                        - generic [ref=e158]:
                          - img "Ảnh đại diện của Lê Thảo Vy" [ref=e159]:
                            - generic [aria-hidden] [ref=e160]: TV
                          - generic [ref=e161]:
                            - strong [ref=e162]: Lê Thảo Vy
                            - generic "ĐH Sư phạm TP.HCM" [ref=e163]
                      - cell "Tiếng Anh" [ref=e164]
                      - cell "04/10/2026" [ref=e166]
                      - cell "Chờ duyệt" [ref=e168]
                      - cell [ref=e171]:
                        - generic [ref=e172]:
                          - button "Duyệt hồ sơ Lê Thảo Vy" [ref=e173] [cursor=pointer]
                          - button "Từ chối hồ sơ Lê Thảo Vy" [ref=e176] [cursor=pointer]
                    - row [ref=e180]:
                      - cell "Ảnh đại diện của Nguyễn Hoàng Phúc Nguyễn Hoàng Phúc ĐH Bách khoa TP.HCM" [ref=e181]:
                        - generic [ref=e182]:
                          - img "Ảnh đại diện của Nguyễn Hoàng Phúc" [ref=e183]:
                            - generic [aria-hidden] [ref=e184]: HP
                          - generic [ref=e185]:
                            - strong [ref=e186]: Nguyễn Hoàng Phúc
                            - generic "ĐH Bách khoa TP.HCM" [ref=e187]
                      - cell "Toán, Vật lý" [ref=e188]
                      - cell "04/10/2026" [ref=e190]
                      - cell "Chờ duyệt" [ref=e192]
                      - cell [ref=e195]:
                        - generic [ref=e196]:
                          - button "Duyệt hồ sơ Nguyễn Hoàng Phúc" [ref=e197] [cursor=pointer]
                          - button "Từ chối hồ sơ Nguyễn Hoàng Phúc" [ref=e200] [cursor=pointer]
                    - row [ref=e204]:
                      - cell "Ảnh đại diện của Trần Minh Châu Trần Minh Châu ĐH KHXH&NV" [ref=e205]:
                        - generic [ref=e206]:
                          - img "Ảnh đại diện của Trần Minh Châu" [ref=e207]:
                            - generic [aria-hidden] [ref=e208]: MC
                          - generic [ref=e209]:
                            - strong [ref=e210]: Trần Minh Châu
                            - generic "ĐH KHXH&NV" [ref=e211]
                      - cell "Ngữ văn" [ref=e212]
                      - cell "03/10/2026" [ref=e214]
                      - cell "Chờ duyệt" [ref=e216]
                      - cell [ref=e219]:
                        - generic [ref=e220]:
                          - button "Duyệt hồ sơ Trần Minh Châu" [ref=e221] [cursor=pointer]
                          - button "Từ chối hồ sơ Trần Minh Châu" [ref=e224] [cursor=pointer]
              - paragraph [ref=e228]: Thao tác duyệt cập nhật tức thì vào danh sách gia sư công khai trên toàn hệ thống.
            - region [ref=e229]:
              - generic [ref=e230]:
                - generic [ref=e231]:
                  - text: CẦN THEO DÕI
                  - heading "Báo cáo & sự cố" [level=2] [ref=e232]
                - generic [ref=e233]:
                  - generic [ref=e234]: 4 sự cố mở
                  - link "Xem tất cả" [ref=e235] [cursor=pointer]:
                    - /url: /admin/issues
              - generic [ref=e238]:
                - generic [ref=e239]:
                  - generic [ref=e240]: ISSUE-101
                  - generic [ref=e241]:
                    - strong [ref=e242]: Vắng mặt không báo trước
                    - generic [ref=e243]: Nguyễn Minh Anh · 32 phút trước
                  - generic [ref=e244]: Mới tiếp nhận
                - generic [ref=e245]:
                  - generic [ref=e246]: ISSUE-102
                  - generic [ref=e247]:
                    - strong [ref=e248]: Tranh chấp giờ học
                    - generic [ref=e249]: Lê Hoàng Nam · 2 giờ trước
                  - generic [ref=e250]: Đang xử lý
                - generic [ref=e251]:
                  - generic [ref=e252]: ISSUE-103
                  - generic [ref=e253]:
                    - strong [ref=e254]: Hủy buổi đột xuất
                    - generic [ref=e255]: Nguyễn Minh Anh · Hôm qua
                  - generic [ref=e256]: Đang xử lý
                - generic [ref=e257]:
                  - generic [ref=e258]: ISSUE-104
                  - generic [ref=e259]:
                    - strong [ref=e260]: Tranh chấp học phí
                    - generic [ref=e261]: Lê Hoàng Nam · 2 ngày trước
                  - generic [ref=e262]: Mới tiếp nhận
                - generic [ref=e263]:
                  - generic [ref=e264]: ISSUE-105
                  - generic [ref=e265]:
                    - strong [ref=e266]: Phản ánh thái độ
                    - generic [ref=e267]: Nguyễn Minh Anh · 29/09/2026
                  - generic [ref=e268]: Đã giải quyết
          - generic [ref=e269]:
            - region [ref=e270]:
              - generic [ref=e271]:
                - generic [ref=e272]:
                  - text: GIÁM SÁT HÔM NAY
                  - heading "Lớp học đang diễn ra" [level=2] [ref=e273]
                - generic [ref=e274]: 2 trực tiếp
              - generic [ref=e276]:
                - generic [ref=e277]:
                  - generic [ref=e278]:
                    - strong [ref=e279]: 16:00
                    - generic [ref=e280]: Tại nhà
                  - generic [ref=e281]:
                    - strong [ref=e282]: Toán lớp 9
                    - generic [ref=e283]: Mai Anh · Minh Khang
                  - generic [ref=e284]: Đang diễn ra
                - generic [ref=e286]:
                  - generic [ref=e287]:
                    - strong [ref=e288]: 16:30
                    - generic [ref=e289]: Trực tuyến
                  - generic [ref=e290]:
                    - strong [ref=e291]: Tiếng Anh
                    - generic [ref=e292]: Quốc Bảo · Thanh Mai
                  - generic [ref=e293]: Đang diễn ra
                - generic [ref=e295]:
                  - generic [ref=e296]:
                    - strong [ref=e297]: 18:30
                    - generic [ref=e298]: Tại nhà
                  - generic [ref=e299]:
                    - strong [ref=e300]: Vật lý lớp 10
                    - generic [ref=e301]: Đức Minh · Ngọc Hà
                  - generic [ref=e302]: Sắp tới
            - region [ref=e304]:
              - generic [ref=e305]:
                - generic [ref=e306]:
                  - text: CHẤT LƯỢNG CỘNG ĐỒNG
                  - heading "Đánh giá cần xem" [level=2] [ref=e307]
                - generic [ref=e308]:
                  - generic [ref=e309]: 2 chờ xử lý
                  - link "Xem tất cả" [ref=e310] [cursor=pointer]:
                    - /url: /admin/reviews
              - generic [ref=e313]:
                - article [ref=e314]:
                  - generic [ref=e315]:
                    - generic [ref=e316]:
                      - strong [ref=e317]: Nguyễn Minh Anh
                      - generic [ref=e318]: về Nguyễn Mai Anh · 5/5 sao
                    - paragraph [ref=e319]: “Cô Mai Anh giảng bài rất chi tiết và kiên nhẫn. Sau 2 tháng học thì điểm thi thử của em đã tăng rõ rệt.”
                  - generic [ref=e320]: Đã hiển thị
                - article [ref=e321]:
                  - generic [ref=e322]:
                    - generic [ref=e323]:
                      - strong [ref=e324]: Nguyễn Minh Anh
                      - generic [ref=e325]: về Trần Gia Bảo · 5/5 sao
                    - paragraph [ref=e326]: “Thầy dạy nhiệt tình, phương pháp luyện đề bám sát đề thi thật. Kỹ năng Speaking cải thiện nhiều.”
                  - generic [ref=e327]: Đã hiển thị
                - article [ref=e328]:
                  - generic [ref=e329]:
                    - generic [ref=e330]:
                      - strong [ref=e331]: Nguyễn Minh Anh
                      - generic [ref=e332]: về Phạm Hà Linh · 5/5 sao
                    - paragraph [ref=e333]: “Cô dạy Ngữ văn rất truyền cảm hứng, em không còn cảm thấy sợ môn này nữa.”
                  - generic [ref=e334]: Đã hiển thị
                - article [ref=e335]:
                  - generic [ref=e336]:
                    - generic [ref=e337]:
                      - strong [ref=e338]: Lê Hoàng Nam
                      - generic [ref=e339]: về Nguyễn Mai Anh · 5/5 sao
                    - paragraph [ref=e340]: “Cách giảng dễ hiểu, bé tự tin hơn sau vài buổi học Toán.”
                  - generic [ref=e341]:
                    - button "Duyệt" [ref=e342] [cursor=pointer]
                    - button "Ẩn" [ref=e343] [cursor=pointer]
  - complementary "Widget nhắn tin nhanh" [ref=e344]:
    - button "Mở cửa sổ trò chuyện" [ref=e345] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { resetDemo, login } from './demoHelpers.js';
  3   | 
  4   | test.describe('New Admin User Journey & UX Polish QA', () => {
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await resetDemo(page);
  7   |     await login(page, 'admin', '/admin/dashboard');
  8   |   });
  9   | 
  10  |   test('ADM-QA-001: New Admin visits Dashboard, inspects metrics and quick actions across viewports', async ({ page }) => {
  11  |     // 1440px Desktop
  12  |     await page.setViewportSize({ width: 1440, height: 900 });
  13  |     await expect(page.getByRole('heading', { name: 'Tổng quan hệ thống' })).toBeVisible();
  14  | 
  15  |     // Verify summary stat cards exist and have values
  16  |     const statCards = page.locator('.admin-summary .stat-item');
> 17  |     await expect(statCards).toHaveCount(4);
      |                             ^ Error: expect(locator).toHaveCount(expected) failed
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
  114 |     await expect(banner).toBeVisible();
  115 |     await expect(banner).toContainText('Đã tạm khóa tài khoản');
  116 |   });
  117 | 
```