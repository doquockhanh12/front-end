# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-polish-completion.spec.js >> UI-COMP-S01 admin mobile notification panel stays inside viewport
- Location: tests\e2e\admin-polish-completion.spec.js:34:3

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 0
Received:    -18
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
      - generic [ref=e91]:
        - generic [ref=e92]:
          - button "Thông báo" [expanded] [active] [ref=e93] [cursor=pointer]:
            - generic [ref=e97]: "1"
          - region "Thông báo của bạn" [ref=e98]:
            - generic [ref=e99]:
              - generic [ref=e100]:
                - text: Thông báo
                - generic [ref=e101]: (1)
              - button "Đã đọc tất cả" [ref=e102] [cursor=pointer]
            - generic [ref=e111] [cursor=pointer]:
              - generic [ref=e112]: Hồ sơ sinh viên chờ duyệt
              - generic [ref=e113]: Gia sư Lê Thảo Vy vừa cập nhật thẻ sinh viên ĐH Bách Khoa cần đối soát cấp Tích xanh.
              - generic [ref=e114]: 08:00 · 5/10/2026
        - button "Đăng xuất" [ref=e116] [cursor=pointer]
    - main [ref=e120]:
      - generic [ref=e121]:
        - generic [ref=e122]:
          - text: VẬN HÀNH TUTORNEARME
          - heading "Tổng quan hệ thống" [level=1] [ref=e123]
          - paragraph [ref=e124]: Theo dõi hoạt động thực tế trên nền tảng và xử lý những mục đang cần chú ý.
        - generic [ref=e125]: Thứ Hai, 5 tháng 10
      - generic [ref=e126]:
        - generic [ref=e127]:
          - generic [ref=e128]: Gia sư trên hệ thống
          - strong [ref=e130]: "11"
        - generic [ref=e131]:
          - generic [ref=e132]: Người dùng hoạt động
          - strong [ref=e134]: "5"
        - generic [ref=e135]:
          - generic [ref=e136]: Đánh giá gửi về
          - strong [ref=e138]: "6"
        - generic [ref=e139]:
          - generic [ref=e140]: Sự cố & khiếu nại
          - strong [ref=e142]: "5"
        - generic [ref=e143]:
          - generic [ref=e144]: Số dư Ký quỹ Escrow
          - strong [ref=e148]: 440.000 đ
        - generic [ref=e149]:
          - generic [ref=e150]: Tin đăng tìm gia sư
          - strong [ref=e155]: "3"
        - generic [ref=e156]:
          - generic [ref=e157]: Doanh thu phí sàn
          - strong [ref=e159]: 0 đ
        - generic [ref=e160]:
          - generic [ref=e161]: Kháng cáo đang mở
          - strong [ref=e163]: "0"
        - generic [ref=e164]:
          - generic [ref=e165]: Cảnh báo SOS
          - strong [ref=e167]: "0"
      - generic [ref=e168]:
        - generic [ref=e169]:
          - region [ref=e170]:
            - generic [ref=e171]:
              - generic [ref=e172]:
                - text: KIỂM DUYỆT HỒ SƠ
                - heading "Gia sư chờ duyệt" [level=2] [ref=e173]
              - generic [ref=e174]:
                - generic [ref=e175]: 3 hồ sơ cần xử lý
                - link "Xem tất cả" [ref=e176] [cursor=pointer]:
                  - /url: /admin/tutors
            - generic [ref=e179]:
              - generic [ref=e181]: Trạng thái
              - combobox "Trạng thái" [ref=e182] [cursor=pointer]:
                - option "Chờ duyệt" [selected]
                - option "Tất cả"
                - option "Đã duyệt"
                - option "Từ chối"
                - option "Tạm khóa"
            - region "Bảng hồ sơ gia sư chờ duyệt" [ref=e183]:
              - table [ref=e184]:
                - rowgroup [ref=e185]:
                  - row [ref=e186]:
                    - columnheader "Gia sư" [ref=e187]
                    - columnheader "Môn dạy" [ref=e188]
                    - columnheader "Gửi lúc" [ref=e189]
                    - columnheader "Trạng thái" [ref=e190]
                    - columnheader "Thao tác" [ref=e191]
                - rowgroup [ref=e192]:
                  - row [ref=e193]:
                    - cell "Ảnh đại diện của Lê Thảo Vy Lê Thảo Vy ĐH Sư phạm TP.HCM" [ref=e194]:
                      - generic [ref=e195]:
                        - img "Ảnh đại diện của Lê Thảo Vy" [ref=e196]:
                          - generic [aria-hidden] [ref=e197]: TV
                        - generic [ref=e198]:
                          - strong [ref=e199]: Lê Thảo Vy
                          - generic "ĐH Sư phạm TP.HCM" [ref=e200]
                    - cell "Tiếng Anh" [ref=e201]
                    - cell "04/10/2026" [ref=e203]
                    - cell "Chờ duyệt" [ref=e205]
                    - cell [ref=e208]:
                      - generic [ref=e209]:
                        - button "Duyệt hồ sơ Lê Thảo Vy" [ref=e210] [cursor=pointer]
                        - button "Từ chối hồ sơ Lê Thảo Vy" [ref=e213] [cursor=pointer]
                  - row [ref=e217]:
                    - cell "Ảnh đại diện của Nguyễn Hoàng Phúc Nguyễn Hoàng Phúc ĐH Bách khoa TP.HCM" [ref=e218]:
                      - generic [ref=e219]:
                        - img "Ảnh đại diện của Nguyễn Hoàng Phúc" [ref=e220]:
                          - generic [aria-hidden] [ref=e221]: HP
                        - generic [ref=e222]:
                          - strong [ref=e223]: Nguyễn Hoàng Phúc
                          - generic "ĐH Bách khoa TP.HCM" [ref=e224]
                    - cell "Toán, Vật lý" [ref=e225]
                    - cell "04/10/2026" [ref=e227]
                    - cell "Chờ duyệt" [ref=e229]
                    - cell [ref=e232]:
                      - generic [ref=e233]:
                        - button "Duyệt hồ sơ Nguyễn Hoàng Phúc" [ref=e234] [cursor=pointer]
                        - button "Từ chối hồ sơ Nguyễn Hoàng Phúc" [ref=e237] [cursor=pointer]
                  - row [ref=e241]:
                    - cell "Ảnh đại diện của Trần Minh Châu Trần Minh Châu ĐH KHXH&NV" [ref=e242]:
                      - generic [ref=e243]:
                        - img "Ảnh đại diện của Trần Minh Châu" [ref=e244]:
                          - generic [aria-hidden] [ref=e245]: MC
                        - generic [ref=e246]:
                          - strong [ref=e247]: Trần Minh Châu
                          - generic "ĐH KHXH&NV" [ref=e248]
                    - cell "Ngữ văn" [ref=e249]
                    - cell "03/10/2026" [ref=e251]
                    - cell "Chờ duyệt" [ref=e253]
                    - cell [ref=e256]:
                      - generic [ref=e257]:
                        - button "Duyệt hồ sơ Trần Minh Châu" [ref=e258] [cursor=pointer]
                        - button "Từ chối hồ sơ Trần Minh Châu" [ref=e261] [cursor=pointer]
            - paragraph [ref=e265]: Thao tác duyệt cập nhật tức thì vào danh sách gia sư công khai trên toàn hệ thống.
          - region [ref=e266]:
            - generic [ref=e267]:
              - generic [ref=e268]:
                - text: CẦN THEO DÕI
                - heading "Báo cáo & sự cố" [level=2] [ref=e269]
              - generic [ref=e270]:
                - generic [ref=e271]: 4 sự cố mở
                - link "Xem tất cả" [ref=e272] [cursor=pointer]:
                  - /url: /admin/issues
            - generic [ref=e275]:
              - generic [ref=e276]:
                - generic [ref=e277]: ISSUE-101
                - generic [ref=e278]:
                  - strong [ref=e279]: Vắng mặt không báo trước
                  - generic [ref=e280]: Nguyễn Minh Anh · 32 phút trước
                - generic [ref=e281]: Mới tiếp nhận
              - generic [ref=e282]:
                - generic [ref=e283]: ISSUE-102
                - generic [ref=e284]:
                  - strong [ref=e285]: Tranh chấp giờ học
                  - generic [ref=e286]: Lê Hoàng Nam · 2 giờ trước
                - generic [ref=e287]: Đang xử lý
              - generic [ref=e288]:
                - generic [ref=e289]: ISSUE-103
                - generic [ref=e290]:
                  - strong [ref=e291]: Hủy buổi đột xuất
                  - generic [ref=e292]: Nguyễn Minh Anh · Hôm qua
                - generic [ref=e293]: Đang xử lý
              - generic [ref=e294]:
                - generic [ref=e295]: ISSUE-104
                - generic [ref=e296]:
                  - strong [ref=e297]: Tranh chấp học phí
                  - generic [ref=e298]: Lê Hoàng Nam · 2 ngày trước
                - generic [ref=e299]: Mới tiếp nhận
              - generic [ref=e300]:
                - generic [ref=e301]: ISSUE-105
                - generic [ref=e302]:
                  - strong [ref=e303]: Phản ánh thái độ
                  - generic [ref=e304]: Nguyễn Minh Anh · 29/09/2026
                - generic [ref=e305]: Đã giải quyết
        - generic [ref=e306]:
          - region [ref=e307]:
            - generic [ref=e308]:
              - generic [ref=e309]:
                - text: GIÁM SÁT HÔM NAY
                - heading "Lớp học đang diễn ra" [level=2] [ref=e310]
              - generic [ref=e311]: 3 trực tiếp
            - generic [ref=e313]:
              - generic [ref=e314]:
                - generic [ref=e315]:
                  - strong [ref=e316]: 07:00
                  - generic [ref=e317]: Địa điểm minh họa
                - generic [ref=e318]:
                  - strong [ref=e319]: Toán
                  - generic [ref=e320]: Trần Gia Bảo · N.M.A
                - generic [ref=e321]: Đang diễn ra
              - generic [ref=e323]:
                - generic [ref=e324]:
                  - strong [ref=e325]: 08:30
                  - generic [ref=e326]: Địa điểm minh họa
                - generic [ref=e327]:
                  - strong [ref=e328]: Tiếng Anh
                  - generic [ref=e329]: Trần Gia Bảo · P.K
                - generic [ref=e330]: Sắp tới
              - generic [ref=e332]:
                - generic [ref=e333]:
                  - strong [ref=e334]: 14:30
                  - generic [ref=e335]: Địa điểm minh họa
                - generic [ref=e336]:
                  - strong [ref=e337]: Toán
                  - generic [ref=e338]: Trần Gia Bảo · L.A
                - generic [ref=e339]: Đang diễn ra
              - generic [ref=e341]:
                - generic [ref=e342]:
                  - strong [ref=e343]: 16:45
                  - generic [ref=e344]: Địa điểm minh họa
                - generic [ref=e345]:
                  - strong [ref=e346]: Tiếng Anh
                  - generic [ref=e347]: Trần Gia Bảo · M.K
                - generic [ref=e348]: Đang diễn ra
          - region [ref=e350]:
            - generic [ref=e351]:
              - generic [ref=e352]:
                - text: CHẤT LƯỢNG CỘNG ĐỒNG
                - heading "Đánh giá cần xem" [level=2] [ref=e353]
              - generic [ref=e354]:
                - generic [ref=e355]: 2 chờ xử lý
                - link "Xem tất cả" [ref=e356] [cursor=pointer]:
                  - /url: /admin/reviews
            - generic [ref=e359]:
              - article [ref=e360]:
                - generic [ref=e361]:
                  - generic [ref=e362]:
                    - strong [ref=e363]: Nguyễn Minh Anh
                    - generic [ref=e364]: về Nguyễn Mai Anh · 5/5 sao
                  - paragraph [ref=e365]: “Cô Mai Anh giảng bài rất chi tiết và kiên nhẫn. Sau 2 tháng học thì điểm thi thử của em đã tăng rõ rệt.”
                - generic [ref=e366]: Đã hiển thị
              - article [ref=e367]:
                - generic [ref=e368]:
                  - generic [ref=e369]:
                    - strong [ref=e370]: Nguyễn Minh Anh
                    - generic [ref=e371]: về Trần Gia Bảo · 5/5 sao
                  - paragraph [ref=e372]: “Thầy dạy nhiệt tình, phương pháp luyện đề bám sát đề thi thật. Kỹ năng Speaking cải thiện nhiều.”
                - generic [ref=e373]: Đã hiển thị
              - article [ref=e374]:
                - generic [ref=e375]:
                  - generic [ref=e376]:
                    - strong [ref=e377]: Nguyễn Minh Anh
                    - generic [ref=e378]: về Phạm Hà Linh · 5/5 sao
                  - paragraph [ref=e379]: “Cô dạy Ngữ văn rất truyền cảm hứng, em không còn cảm thấy sợ môn này nữa.”
                - generic [ref=e380]: Đã hiển thị
              - article [ref=e381]:
                - generic [ref=e382]:
                  - generic [ref=e383]:
                    - strong [ref=e384]: Lê Hoàng Nam
                    - generic [ref=e385]: về Nguyễn Mai Anh · 5/5 sao
                  - paragraph [ref=e386]: “Cách giảng dễ hiểu, bé tự tin hơn sau vài buổi học Toán.”
                - generic [ref=e387]:
                  - button "Duyệt" [ref=e388] [cursor=pointer]
                  - button "Ẩn" [ref=e389] [cursor=pointer]
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
  11 |   expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
  12 | });
  13 | test('MASTER Admin notification opens a private actionable message', async ({ page }) => {
  14 |   await resetDemo(page);
  15 |   await login(page, 'admin', '/admin/dashboard');
  16 |   await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  17 |   await expect(page.getByRole('region', { name: 'Thông báo của bạn' })).toBeVisible();
  18 | });
  19 | 
  20 | test('UI-COMP-A14 warning feedback uses saved suspension threshold', async ({ page }) => {
  21 |   await resetDemo(page);
  22 |   await login(page, 'admin', '/admin/settings');
  23 |   await page.locator('main input[type=number]').last().fill('1');
  24 |   await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  25 |   await page.goto('/admin/issues');
  26 |   await page.locator('tbody tr').filter({ hasText: 'ISSUE-104' }).getByRole('button', { name: /Xử lý sự cố/ }).click();
  27 |   await page.locator('#warning-reason-input').fill('Cảnh cáo căn cứ đối chiếu sự cố và cấu hình được quản trị viên phê duyệt.');
  28 |   await page.getByRole('button', { name: /Gửi cảnh cáo & Giải quyết sự cố/ }).click();
  29 |   await expect(page.getByRole('status')).toContainText('TỰ ĐỘNG BỊ KHÓA');
  30 |   await expect(page.getByRole('status')).toContainText('vượt quá 1 lần');
  31 | });
  32 | 
  33 | for (const [username, route] of [['admin', '/admin/dashboard'], ['giabao', '/tutor/dashboard'], ['minhanh', '/learner/search']]) {
  34 |   test(`UI-COMP-S01 ${username} mobile notification panel stays inside viewport`, async ({ page }) => {
  35 |     await resetDemo(page);
  36 |     await page.setViewportSize({ width: 390, height: 900 });
  37 |     await login(page, username, route);
  38 |     await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  39 |     const panel = page.getByRole('region', { name: 'Thông báo của bạn' });
  40 |     await expect(panel).toBeVisible();
  41 |     const bounds = await panel.boundingBox();
> 42 |     expect(bounds.x).toBeGreaterThanOrEqual(0);
     |                      ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  43 |     expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
  44 |   });
  45 | }
  46 | 
```