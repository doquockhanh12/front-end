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
Received: 9
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.admin-summary .stat-item') with timeout 5000ms
  - waiting for locator('.admin-summary .stat-item')
    14 × locator resolved to 9 elements
       - unexpected value "9"

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
        - strong [ref=e85]: Tổng quan
      - generic [ref=e86]:
        - button "Thông báo" [ref=e88] [cursor=pointer]:
          - generic [ref=e92]: "1"
        - generic [ref=e93]:
          - img "Ảnh đại diện của Quản trị viên" [ref=e94]:
            - generic [aria-hidden] [ref=e95]: AD
          - generic [ref=e96]: Quản trị viên
        - button "Đăng xuất" [ref=e97] [cursor=pointer]
    - main [ref=e101]:
      - generic [ref=e102]:
        - generic [ref=e103]:
          - text: VẬN HÀNH TUTORNEARME
          - heading "Tổng quan hệ thống" [level=1] [ref=e104]
          - paragraph [ref=e105]: Theo dõi hoạt động thực tế trên nền tảng và xử lý những mục đang cần chú ý.
        - generic [ref=e106]: Thứ Hai, 5 tháng 10
      - generic [ref=e107]:
        - generic [ref=e108]:
          - generic [ref=e109]: Gia sư trên hệ thống
          - strong [ref=e111]: "11"
          - text: 3 hồ sơ chờ duyệt
        - generic [ref=e112]:
          - generic [ref=e113]: Người dùng hoạt động
          - strong [ref=e115]: "5"
          - text: 2 tài khoản bị khóa
        - generic [ref=e116]:
          - generic [ref=e117]: Đánh giá gửi về
          - strong [ref=e119]: "6"
          - text: 2 cần kiểm duyệt
        - generic [ref=e120]:
          - generic [ref=e121]: Sự cố & khiếu nại
          - strong [ref=e123]: "5"
          - text: 4 mục cần xử lý
        - generic [ref=e124]:
          - generic [ref=e125]: Số dư Ký quỹ Escrow
          - strong [ref=e129]: 440.000 đ
          - text: 1 lệnh rút chờ duyệt
        - generic [ref=e130]:
          - generic [ref=e131]: Tin đăng tìm gia sư
          - strong [ref=e136]: "3"
          - text: 0 tin chờ duyệt
        - generic [ref=e137]:
          - generic [ref=e138]: Doanh thu phí sàn
          - strong [ref=e140]: 0 đ
          - text: Từ các khoản ký quỹ đã quyết toán
        - generic [ref=e141]:
          - generic [ref=e142]: Kháng cáo đang mở
          - strong [ref=e144]: "0"
          - text: Chờ đối chiếu và xét duyệt
        - generic [ref=e145]:
          - generic [ref=e146]: Cảnh báo SOS
          - strong [ref=e148]: "0"
          - text: Mỗi sự cố được tính một lần
      - generic [ref=e149]:
        - generic [ref=e150]:
          - region [ref=e151]:
            - generic [ref=e152]:
              - generic [ref=e153]:
                - text: KIỂM DUYỆT HỒ SƠ
                - heading "Gia sư chờ duyệt" [level=2] [ref=e154]
              - generic [ref=e155]:
                - generic [ref=e156]: 3 hồ sơ cần xử lý
                - link "Xem tất cả" [ref=e157] [cursor=pointer]:
                  - /url: /admin/tutors
            - generic [ref=e160]:
              - generic [ref=e162]: Trạng thái
              - combobox "Trạng thái" [ref=e163] [cursor=pointer]:
                - option "Chờ duyệt" [selected]
                - option "Tất cả"
                - option "Đã duyệt"
                - option "Từ chối"
                - option "Tạm khóa"
            - region "Bảng hồ sơ gia sư chờ duyệt" [ref=e164]:
              - table [ref=e165]:
                - rowgroup [ref=e166]:
                  - row [ref=e167]:
                    - columnheader "Gia sư" [ref=e168]
                    - columnheader "Môn dạy" [ref=e169]
                    - columnheader "Gửi lúc" [ref=e170]
                    - columnheader "Trạng thái" [ref=e171]
                    - columnheader "Thao tác" [ref=e172]
                - rowgroup [ref=e173]:
                  - row [ref=e174]:
                    - cell "Ảnh đại diện của Lê Thảo Vy Lê Thảo Vy ĐH Sư phạm TP.HCM" [ref=e175]:
                      - generic [ref=e176]:
                        - img "Ảnh đại diện của Lê Thảo Vy" [ref=e177]:
                          - generic [aria-hidden] [ref=e178]: TV
                        - generic [ref=e179]:
                          - strong [ref=e180]: Lê Thảo Vy
                          - generic "ĐH Sư phạm TP.HCM" [ref=e181]
                    - cell "Tiếng Anh" [ref=e182]
                    - cell "04/10/2026" [ref=e184]
                    - cell "Chờ duyệt" [ref=e186]
                    - cell [ref=e189]:
                      - generic [ref=e190]:
                        - button "Duyệt hồ sơ Lê Thảo Vy" [ref=e191] [cursor=pointer]
                        - button "Từ chối hồ sơ Lê Thảo Vy" [ref=e194] [cursor=pointer]
                  - row [ref=e198]:
                    - cell "Ảnh đại diện của Nguyễn Hoàng Phúc Nguyễn Hoàng Phúc ĐH Bách khoa TP.HCM" [ref=e199]:
                      - generic [ref=e200]:
                        - img "Ảnh đại diện của Nguyễn Hoàng Phúc" [ref=e201]:
                          - generic [aria-hidden] [ref=e202]: HP
                        - generic [ref=e203]:
                          - strong [ref=e204]: Nguyễn Hoàng Phúc
                          - generic "ĐH Bách khoa TP.HCM" [ref=e205]
                    - cell "Toán, Vật lý" [ref=e206]
                    - cell "04/10/2026" [ref=e208]
                    - cell "Chờ duyệt" [ref=e210]
                    - cell [ref=e213]:
                      - generic [ref=e214]:
                        - button "Duyệt hồ sơ Nguyễn Hoàng Phúc" [ref=e215] [cursor=pointer]
                        - button "Từ chối hồ sơ Nguyễn Hoàng Phúc" [ref=e218] [cursor=pointer]
                  - row [ref=e222]:
                    - cell "Ảnh đại diện của Trần Minh Châu Trần Minh Châu ĐH KHXH&NV" [ref=e223]:
                      - generic [ref=e224]:
                        - img "Ảnh đại diện của Trần Minh Châu" [ref=e225]:
                          - generic [aria-hidden] [ref=e226]: MC
                        - generic [ref=e227]:
                          - strong [ref=e228]: Trần Minh Châu
                          - generic "ĐH KHXH&NV" [ref=e229]
                    - cell "Ngữ văn" [ref=e230]
                    - cell "03/10/2026" [ref=e232]
                    - cell "Chờ duyệt" [ref=e234]
                    - cell [ref=e237]:
                      - generic [ref=e238]:
                        - button "Duyệt hồ sơ Trần Minh Châu" [ref=e239] [cursor=pointer]
                        - button "Từ chối hồ sơ Trần Minh Châu" [ref=e242] [cursor=pointer]
            - paragraph [ref=e246]: Thao tác duyệt cập nhật tức thì vào danh sách gia sư công khai trên toàn hệ thống.
          - region [ref=e247]:
            - generic [ref=e248]:
              - generic [ref=e249]:
                - text: CẦN THEO DÕI
                - heading "Báo cáo & sự cố" [level=2] [ref=e250]
              - generic [ref=e251]:
                - generic [ref=e252]: 4 sự cố mở
                - link "Xem tất cả" [ref=e253] [cursor=pointer]:
                  - /url: /admin/issues
            - generic [ref=e256]:
              - generic [ref=e257]:
                - generic [ref=e258]: ISSUE-101
                - generic [ref=e259]:
                  - strong [ref=e260]: Vắng mặt không báo trước
                  - generic [ref=e261]: Nguyễn Minh Anh · 32 phút trước
                - generic [ref=e262]: Mới tiếp nhận
              - generic [ref=e263]:
                - generic [ref=e264]: ISSUE-102
                - generic [ref=e265]:
                  - strong [ref=e266]: Tranh chấp giờ học
                  - generic [ref=e267]: Lê Hoàng Nam · 2 giờ trước
                - generic [ref=e268]: Đang xử lý
              - generic [ref=e269]:
                - generic [ref=e270]: ISSUE-103
                - generic [ref=e271]:
                  - strong [ref=e272]: Hủy buổi đột xuất
                  - generic [ref=e273]: Nguyễn Minh Anh · Hôm qua
                - generic [ref=e274]: Đang xử lý
              - generic [ref=e275]:
                - generic [ref=e276]: ISSUE-104
                - generic [ref=e277]:
                  - strong [ref=e278]: Tranh chấp học phí
                  - generic [ref=e279]: Lê Hoàng Nam · 2 ngày trước
                - generic [ref=e280]: Mới tiếp nhận
              - generic [ref=e281]:
                - generic [ref=e282]: ISSUE-105
                - generic [ref=e283]:
                  - strong [ref=e284]: Phản ánh thái độ
                  - generic [ref=e285]: Nguyễn Minh Anh · 29/09/2026
                - generic [ref=e286]: Đã giải quyết
        - generic [ref=e287]:
          - region [ref=e288]:
            - generic [ref=e289]:
              - generic [ref=e290]:
                - text: GIÁM SÁT HÔM NAY
                - heading "Lớp học đang diễn ra" [level=2] [ref=e291]
              - generic [ref=e292]: 3 trực tiếp
            - generic [ref=e294]:
              - generic [ref=e295]:
                - generic [ref=e296]:
                  - strong [ref=e297]: 07:00
                  - generic [ref=e298]: Địa điểm minh họa
                - generic [ref=e299]:
                  - strong [ref=e300]: Toán
                  - generic [ref=e301]: Trần Gia Bảo · N.M.A
                - generic [ref=e302]: Đang diễn ra
              - generic [ref=e304]:
                - generic [ref=e305]:
                  - strong [ref=e306]: 08:30
                  - generic [ref=e307]: Địa điểm minh họa
                - generic [ref=e308]:
                  - strong [ref=e309]: Tiếng Anh
                  - generic [ref=e310]: Trần Gia Bảo · P.K
                - generic [ref=e311]: Sắp tới
              - generic [ref=e313]:
                - generic [ref=e314]:
                  - strong [ref=e315]: 14:30
                  - generic [ref=e316]: Địa điểm minh họa
                - generic [ref=e317]:
                  - strong [ref=e318]: Toán
                  - generic [ref=e319]: Trần Gia Bảo · L.A
                - generic [ref=e320]: Đang diễn ra
              - generic [ref=e322]:
                - generic [ref=e323]:
                  - strong [ref=e324]: 16:45
                  - generic [ref=e325]: Địa điểm minh họa
                - generic [ref=e326]:
                  - strong [ref=e327]: Tiếng Anh
                  - generic [ref=e328]: Trần Gia Bảo · M.K
                - generic [ref=e329]: Đang diễn ra
          - region [ref=e331]:
            - generic [ref=e332]:
              - generic [ref=e333]:
                - text: CHẤT LƯỢNG CỘNG ĐỒNG
                - heading "Đánh giá cần xem" [level=2] [ref=e334]
              - generic [ref=e335]:
                - generic [ref=e336]: 2 chờ xử lý
                - link "Xem tất cả" [ref=e337] [cursor=pointer]:
                  - /url: /admin/reviews
            - generic [ref=e340]:
              - article [ref=e341]:
                - generic [ref=e342]:
                  - generic [ref=e343]:
                    - strong [ref=e344]: Nguyễn Minh Anh
                    - generic [ref=e345]: về Nguyễn Mai Anh · 5/5 sao
                  - paragraph [ref=e346]: “Cô Mai Anh giảng bài rất chi tiết và kiên nhẫn. Sau 2 tháng học thì điểm thi thử của em đã tăng rõ rệt.”
                - generic [ref=e347]: Đã hiển thị
              - article [ref=e348]:
                - generic [ref=e349]:
                  - generic [ref=e350]:
                    - strong [ref=e351]: Nguyễn Minh Anh
                    - generic [ref=e352]: về Trần Gia Bảo · 5/5 sao
                  - paragraph [ref=e353]: “Thầy dạy nhiệt tình, phương pháp luyện đề bám sát đề thi thật. Kỹ năng Speaking cải thiện nhiều.”
                - generic [ref=e354]: Đã hiển thị
              - article [ref=e355]:
                - generic [ref=e356]:
                  - generic [ref=e357]:
                    - strong [ref=e358]: Nguyễn Minh Anh
                    - generic [ref=e359]: về Phạm Hà Linh · 5/5 sao
                  - paragraph [ref=e360]: “Cô dạy Ngữ văn rất truyền cảm hứng, em không còn cảm thấy sợ môn này nữa.”
                - generic [ref=e361]: Đã hiển thị
              - article [ref=e362]:
                - generic [ref=e363]:
                  - generic [ref=e364]:
                    - strong [ref=e365]: Lê Hoàng Nam
                    - generic [ref=e366]: về Nguyễn Mai Anh · 5/5 sao
                  - paragraph [ref=e367]: “Cách giảng dễ hiểu, bé tự tin hơn sau vài buổi học Toán.”
                - generic [ref=e368]:
                  - button "Duyệt" [ref=e369] [cursor=pointer]
                  - button "Ẩn" [ref=e370] [cursor=pointer]
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