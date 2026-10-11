# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-polish-completion.spec.js >> MASTER Admin notification opens a private actionable message
- Location: tests\e2e\admin-polish-completion.spec.js:13:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Thông báo', { exact: true }).last()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Thông báo', { exact: true }).last() with timeout 5000ms
  - waiting for getByText('Thông báo', { exact: true }).last()

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
  - strong: Tổng quan
  - button "Thông báo": "1"
  - text: Thông báo (1)
  - button "Đã đọc tất cả"
  - text: Hồ sơ sinh viên chờ duyệt Gia sư Lê Thảo Vy vừa cập nhật thẻ sinh viên ĐH Bách Khoa cần đối soát cấp Tích xanh. 08:00 · 5/10/2026
  - img "Ảnh đại diện của Quản trị viên"
  - text: Quản trị viên
  - button "Đăng xuất"
- main:
  - text: VẬN HÀNH TUTORNEARME
  - heading "Tổng quan hệ thống" [level=1]
  - paragraph: Theo dõi hoạt động thực tế trên nền tảng và xử lý những mục đang cần chú ý.
  - text: Thứ Hai, 5 tháng 10 Gia sư trên hệ thống
  - strong: "11"
  - text: 3 hồ sơ chờ duyệt Người dùng hoạt động
  - strong: "5"
  - text: 2 tài khoản bị khóa Đánh giá gửi về
  - strong: "6"
  - text: 2 cần kiểm duyệt Sự cố & khiếu nại
  - strong: "5"
  - text: 4 mục cần xử lý Số dư Ký quỹ Escrow
  - strong: 440.000 đ
  - text: 1 lệnh rút chờ duyệt Tin đăng tìm gia sư
  - strong: "3"
  - text: 0 tin chờ duyệt Doanh thu phí sàn
  - strong: 0 đ
  - text: Từ các khoản ký quỹ đã quyết toán Kháng cáo đang mở
  - strong: "0"
  - text: Chờ đối chiếu và xét duyệt Cảnh báo SOS
  - strong: "0"
  - text: Mỗi sự cố được tính một lần
  - region "Gia sư chờ duyệt":
    - text: KIỂM DUYỆT HỒ SƠ
    - heading "Gia sư chờ duyệt" [level=2]
    - text: 3 hồ sơ cần xử lý
    - link "Xem tất cả":
      - /url: /admin/tutors
    - text: Trạng thái
    - combobox "Trạng thái":
      - option "Chờ duyệt" [selected]
      - option "Tất cả"
      - option "Đã duyệt"
      - option "Từ chối"
      - option "Tạm khóa"
    - region "Bảng hồ sơ gia sư chờ duyệt":
      - table:
        - rowgroup:
          - row "Gia sư Môn dạy Gửi lúc Trạng thái Thao tác":
            - columnheader "Gia sư"
            - columnheader "Môn dạy"
            - columnheader "Gửi lúc"
            - columnheader "Trạng thái"
            - columnheader "Thao tác"
        - rowgroup:
          - row "Ảnh đại diện của Lê Thảo Vy Lê Thảo Vy ĐH Sư phạm TP.HCM Tiếng Anh 04/10/2026 Chờ duyệt Duyệt hồ sơ Lê Thảo Vy Từ chối hồ sơ Lê Thảo Vy":
            - cell "Ảnh đại diện của Lê Thảo Vy Lê Thảo Vy ĐH Sư phạm TP.HCM":
              - img "Ảnh đại diện của Lê Thảo Vy"
              - strong: Lê Thảo Vy
              - text: ĐH Sư phạm TP.HCM
            - cell "Tiếng Anh"
            - cell "04/10/2026"
            - cell "Chờ duyệt"
            - cell "Duyệt hồ sơ Lê Thảo Vy Từ chối hồ sơ Lê Thảo Vy":
              - button "Duyệt hồ sơ Lê Thảo Vy"
              - button "Từ chối hồ sơ Lê Thảo Vy"
          - row "Ảnh đại diện của Nguyễn Hoàng Phúc Nguyễn Hoàng Phúc ĐH Bách khoa TP.HCM Toán, Vật lý 04/10/2026 Chờ duyệt Duyệt hồ sơ Nguyễn Hoàng Phúc Từ chối hồ sơ Nguyễn Hoàng Phúc":
            - cell "Ảnh đại diện của Nguyễn Hoàng Phúc Nguyễn Hoàng Phúc ĐH Bách khoa TP.HCM":
              - img "Ảnh đại diện của Nguyễn Hoàng Phúc"
              - strong: Nguyễn Hoàng Phúc
              - text: ĐH Bách khoa TP.HCM
            - cell "Toán, Vật lý"
            - cell "04/10/2026"
            - cell "Chờ duyệt"
            - cell "Duyệt hồ sơ Nguyễn Hoàng Phúc Từ chối hồ sơ Nguyễn Hoàng Phúc":
              - button "Duyệt hồ sơ Nguyễn Hoàng Phúc"
              - button "Từ chối hồ sơ Nguyễn Hoàng Phúc"
          - row "Ảnh đại diện của Trần Minh Châu Trần Minh Châu ĐH KHXH&NV Ngữ văn 03/10/2026 Chờ duyệt Duyệt hồ sơ Trần Minh Châu Từ chối hồ sơ Trần Minh Châu":
            - cell "Ảnh đại diện của Trần Minh Châu Trần Minh Châu ĐH KHXH&NV":
              - img "Ảnh đại diện của Trần Minh Châu"
              - strong: Trần Minh Châu
              - text: ĐH KHXH&NV
            - cell "Ngữ văn"
            - cell "03/10/2026"
            - cell "Chờ duyệt"
            - cell "Duyệt hồ sơ Trần Minh Châu Từ chối hồ sơ Trần Minh Châu":
              - button "Duyệt hồ sơ Trần Minh Châu"
              - button "Từ chối hồ sơ Trần Minh Châu"
    - paragraph: Thao tác duyệt cập nhật tức thì vào danh sách gia sư công khai trên toàn hệ thống.
  - region "Báo cáo & sự cố":
    - text: CẦN THEO DÕI
    - heading "Báo cáo & sự cố" [level=2]
    - text: 4 sự cố mở
    - link "Xem tất cả":
      - /url: /admin/issues
    - text: ISSUE-101
    - strong: Vắng mặt không báo trước
    - text: Nguyễn Minh Anh · 32 phút trước Mới tiếp nhận ISSUE-102
    - strong: Tranh chấp giờ học
    - text: Lê Hoàng Nam · 2 giờ trước Đang xử lý ISSUE-103
    - strong: Hủy buổi đột xuất
    - text: Nguyễn Minh Anh · Hôm qua Đang xử lý ISSUE-104
    - strong: Tranh chấp học phí
    - text: Lê Hoàng Nam · 2 ngày trước Mới tiếp nhận ISSUE-105
    - strong: Phản ánh thái độ
    - text: Nguyễn Minh Anh · 29/09/2026 Đã giải quyết
  - region "Lớp học đang diễn ra":
    - text: GIÁM SÁT HÔM NAY
    - heading "Lớp học đang diễn ra" [level=2]
    - text: 3 trực tiếp
    - strong: 07:00
    - text: Địa điểm minh họa
    - strong: Toán
    - text: Trần Gia Bảo · N.M.A Đang diễn ra
    - strong: 08:30
    - text: Địa điểm minh họa
    - strong: Tiếng Anh
    - text: Trần Gia Bảo · P.K Sắp tới
    - strong: 14:30
    - text: Địa điểm minh họa
    - strong: Toán
    - text: Trần Gia Bảo · L.A Đang diễn ra
    - strong: 16:45
    - text: Địa điểm minh họa
    - strong: Tiếng Anh
    - text: Trần Gia Bảo · M.K Đang diễn ra
  - region "Đánh giá cần xem":
    - text: CHẤT LƯỢNG CỘNG ĐỒNG
    - heading "Đánh giá cần xem" [level=2]
    - text: 2 chờ xử lý
    - link "Xem tất cả":
      - /url: /admin/reviews
    - article:
      - strong: Nguyễn Minh Anh
      - text: về Nguyễn Mai Anh · 5/5 sao
      - paragraph: “Cô Mai Anh giảng bài rất chi tiết và kiên nhẫn. Sau 2 tháng học thì điểm thi thử của em đã tăng rõ rệt.”
      - text: Đã hiển thị
    - article:
      - strong: Nguyễn Minh Anh
      - text: về Trần Gia Bảo · 5/5 sao
      - paragraph: “Thầy dạy nhiệt tình, phương pháp luyện đề bám sát đề thi thật. Kỹ năng Speaking cải thiện nhiều.”
      - text: Đã hiển thị
    - article:
      - strong: Nguyễn Minh Anh
      - text: về Phạm Hà Linh · 5/5 sao
      - paragraph: “Cô dạy Ngữ văn rất truyền cảm hứng, em không còn cảm thấy sợ môn này nữa.”
      - text: Đã hiển thị
    - article:
      - strong: Lê Hoàng Nam
      - text: về Nguyễn Mai Anh · 5/5 sao
      - paragraph: “Cách giảng dễ hiểu, bé tự tin hơn sau vài buổi học Toán.”
      - button "Duyệt"
      - button "Ẩn"
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
> 17 |   await expect(page.getByText('Thông báo', { exact: true }).last()).toBeVisible();
     |                                                                     ^ Error: expect(locator).toBeVisible() failed
  18 | });
  19 | 
```