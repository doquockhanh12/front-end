# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-polish-completion.spec.js >> UI-COMP-S01 minhanh mobile notification panel stays inside viewport
- Location: tests\e2e\admin-polish-completion.spec.js:34:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('region', { name: 'Thông báo của bạn' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('region', { name: 'Thông báo của bạn' }) with timeout 5000ms
  - waiting for getByRole('region', { name: 'Thông báo của bạn' })

```

```yaml
- banner:
  - link "TutorNearMe — trang chủ":
    - /url: /
    - text: TN
    - strong: TutorNearMe
    - text: Gia sư gần bạn
  - button "Mở menu"
- main:
  - text: TUTORNEARME · HỌC GẦN HƠN, HIỂU NHAU HƠN
  - heading "Bạn đau đầu để tìm gia sư tốt, TutorNearMe sẽ giúp bạn." [level=1]:
    - text: Bạn đau đầu để tìm gia sư tốt,
    - emphasis: TutorNearMe sẽ giúp bạn.
  - paragraph: Tìm sinh viên gia sư theo đúng môn, khu vực, thời gian rảnh và mức phí gia đình mong muốn — tất cả trong một trải nghiệm rõ ràng, dễ so sánh.
  - link "Tìm gia sư phù hợp":
    - /url: "#search-controls"
  - link "Xem cách hoạt động ↘":
    - /url: /learner#how
  - img "Học sinh học tập cùng bạn bè"
  - img "Gia sư đang hướng dẫn bài học"
  - text: Gần bạn ưu tiên khu vực phù hợp 4.9/5 đánh giá demo
  - region "Tìm kiếm nhanh":
    - text: Tên hoặc từ khóa
    - searchbox "Tên hoặc từ khóa"
    - text: Môn học
    - combobox "Môn học":
      - option "Tất cả môn" [selected]
      - option "Toán"
      - option "Ngữ văn"
      - option "Tiếng Anh"
      - option "Vật lý"
      - option "Hóa học"
      - option "Sinh học"
      - option "Lịch sử"
      - option "Địa lý"
      - option "Tin học"
      - option "IELTS"
      - option "TOEIC"
      - option "Lập trình Python"
      - option "Giáo dục Kinh tế & Pháp luật"
      - option "Tiếng Trung"
      - option "Tiếng Nhật"
      - option "SAT"
      - option "Cấu trúc dữ liệu và giải thuật"
      - option "Khác"
    - text: Khu vực
    - combobox "Khu vực":
      - option "Tất cả khu vực" [selected]
      - option "Quận 1"
      - option "Quận 3"
      - option "Quận 5"
      - option "Quận 7"
      - option "Quận 10"
      - option "Bình Thạnh"
      - option "Phú Nhuận"
      - option "Thủ Đức"
      - option "Cầu Giấy"
      - option "Đống Đa"
    - text: Thời gian rảnh
    - combobox "Thời gian rảnh":
      - option "Mọi khung giờ" [selected]
      - option "Buổi sáng"
      - option "Buổi chiều"
      - option "Buổi tối"
      - option "Cuối tuần"
    - text: Mức phí
    - combobox "Mức phí":
      - option "Mọi mức phí" [selected]
      - option "Đến 160.000đ"
      - option "Đến 180.000đ"
      - option "Đến 200.000đ"
    - button "Tìm gia sư"
  - text: KHÁM PHÁ GIA SƯ
  - heading "Một lựa chọn tốt bắt đầu từ sự phù hợp" [level=2]
  - paragraph: Lọc theo điều quan trọng với bạn, rồi so sánh trong một góc nhìn rõ ràng.
  - region "Kết quả tìm gia sư":
    - strong: 6 gia sư phù hợp
    - text: tại TP. Hồ Chí Minh
    - group "Chế độ hiển thị":
      - button "Danh sách" [pressed]
      - button "Bản đồ chia đôi"
    - button "Bộ lọc"
    - text: Sắp xếp
    - combobox "Sắp xếp":
      - option "Đề xuất" [selected]
      - option "Đánh giá cao"
      - option "Học phí thấp"
    - article:
      - img "Ảnh đại diện của Nguyễn Mai Anh"
      - text: Gia sư nổi bật
      - heading "Nguyễn Mai Anh" [level=3]
      - paragraph: ĐH Khoa học Tự nhiên
      - button "Lưu Nguyễn Mai Anh"
      - strong: "4.9"
      - text: (48 đánh giá) Đã xác minh
      - paragraph: Giúp học sinh xây nền tảng vững chắc qua cách giải thích gần gũi và lộ trình học rõ ràng.
      - text: Toán Vật lý Bình Thạnh 17:00–21:00 · 09:00–12:00
      - strong: 180.000đ
      - text: / buổi
      - link "Xem hồ sơ":
        - /url: /tutors/mai-anh
    - article:
      - img "Ảnh đại diện của Trần Gia Bảo"
      - heading "Trần Gia Bảo" [level=3]
      - paragraph: ĐH Ngoại thương
      - button "Lưu Trần Gia Bảo"
      - strong: "4.9"
      - text: (36 đánh giá) Đã xác minh Tiếng Anh IELTS Thủ Đức 18:00–21:00 · 09:00–12:00
      - strong: 220.000đ
      - text: / buổi
      - link "Xem hồ sơ":
        - /url: /tutors/quoc-bao
    - article:
      - img "Ảnh đại diện của Phạm Hà Linh"
      - heading "Phạm Hà Linh" [level=3]
      - paragraph: ĐH Sư phạm TP.HCM
      - button "Lưu Phạm Hà Linh"
      - strong: "4.8"
      - text: (29 đánh giá) Đã xác minh Ngữ văn Tiếng Anh Quận 3 13:00–17:00 · 09:00–12:00
      - strong: 160.000đ
      - text: / buổi
      - link "Xem hồ sơ":
        - /url: /tutors/ha-linh
    - article:
      - img "Ảnh đại diện của Lê Đức Minh"
      - heading "Lê Đức Minh" [level=3]
      - paragraph: ĐH Bách khoa TP.HCM
      - button "Lưu Lê Đức Minh"
      - strong: "4.8"
      - text: (31 đánh giá) Đã xác minh Toán Hóa học Phú Nhuận 17:00–21:00 · 13:00–17:00
      - strong: 170.000đ
      - text: / buổi
      - link "Xem hồ sơ":
        - /url: /tutors/duc-minh
    - article:
      - img "Ảnh đại diện của Võ Thu Trang"
      - heading "Võ Thu Trang" [level=3]
      - paragraph: ĐH Sư phạm TP.HCM
      - button "Lưu Võ Thu Trang"
      - strong: "4.7"
      - text: (22 đánh giá) Đã xác minh Tiếng Anh Ngữ văn Bình Thạnh 08:00–12:00
      - strong: 190.000đ
      - text: / buổi
      - link "Xem hồ sơ":
        - /url: /tutors/thu-trang
    - article:
      - img "Ảnh đại diện của Đặng Gia Huy"
      - heading "Đặng Gia Huy" [level=3]
      - paragraph: ĐH Khoa học Tự nhiên
      - button "Lưu Đặng Gia Huy"
      - strong: "4.7"
      - text: (18 đánh giá) Vật lý Toán Thủ Đức 19:00–21:00
      - strong: 150.000đ
      - text: / buổi
      - link "Xem hồ sơ":
        - /url: /tutors/gia-huy
  - complementary "Thông tin hỗ trợ":
    - link "KHÁM PHÁ KHU VỰC Bản đồ gia sư gần bạn Bản đồ minh họa khu vực gia sư Xem khu vực và khoảng cách giữa các gia sư. Mở bản đồ":
      - /url: /learner/map
      - text: KHÁM PHÁ KHU VỰC
      - heading "Bản đồ gia sư gần bạn" [level=3]
      - img "Bản đồ minh họa khu vực gia sư": PHÚ NHUẬN BÌNH THẠNH THỦ ĐỨC QUẬN 3 MA GB HL ĐM TT GH TV HP MC TA QH
      - paragraph: Xem khu vực và khoảng cách giữa các gia sư.
      - text: Mở bản đồ
    - text: BẮT ĐẦU ĐƠN GIẢN
    - heading "Ba bước để bắt đầu" [level=3]
    - list:
      - listitem: 01 Chọn môn và khu vực
      - listitem: 02 So sánh hồ sơ gia sư
      - listitem: 03 Gửi yêu cầu học phù hợp
    - paragraph:
      - strong: Thông tin minh bạch
      - text: Bạn luôn thấy mức phí và lịch rảnh trước khi quyết định.
- contentinfo:
  - link "TutorNearMe — trang chủ":
    - /url: /
    - text: TutorNearMe
  - paragraph: Kết nối đúng người. Học theo cách của bạn.
  - text: Giao diện mẫu · TutorNearMe
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện": "1"
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
  38 |     if (username === 'minhanh') await page.getByRole('button', { name: 'Mở menu' }).click();
  39 |     await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  40 |     const panel = page.getByRole('region', { name: 'Thông báo của bạn' });
> 41 |     await expect(panel).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
  42 |     const bounds = await panel.boundingBox();
  43 |     expect(bounds.x).toBeGreaterThanOrEqual(0);
  44 |     expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
  45 |   });
  46 | }
  47 | 
```