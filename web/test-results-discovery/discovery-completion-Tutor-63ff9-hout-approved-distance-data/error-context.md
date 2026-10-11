# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: discovery-completion.spec.js >> Tutor class radius is explicitly unavailable without approved distance data
- Location: tests\e2e\discovery-completion.spec.js:38:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Chưa có dữ liệu khoảng cách cho tin lớp trong bản demo.', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Chưa có dữ liệu khoảng cách cho tin lớp trong bản demo.', { exact: true }) with timeout 5000ms
  - waiting for getByText('Chưa có dữ liệu khoảng cách cho tin lớp trong bản demo.', { exact: true })

```

```yaml
- complementary "Điều hướng gia sư":
  - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn.":
    - /url: /
    - strong: TutorNearMe
    - text: Gia sư gần bạn. Tri thức gần hơn.
  - navigation "Các mục của gia sư":
    - link "Tổng quan":
      - /url: /tutor/dashboard
    - link "Yêu cầu học 6":
      - /url: /tutor/requests
    - link "Lịch dạy học":
      - /url: /tutor/timetable
    - link "Tìm học viên mới":
      - /url: /tutor/find-students
    - link "Ví & Thu nhập":
      - /url: /tutor/wallet
    - link "Thu nhập":
      - /url: /tutor/income
    - link "Hồ sơ gia sư":
      - /url: /tutor/profile
    - link "Tin nhắn":
      - /url: /messages
    - link "Kháng cáo":
      - /url: /appeals
    - link "Trung tâm Trợ giúp":
      - /url: /help
- banner:
  - navigation "Điều hướng nhanh":
    - link "Tìm lớp gần tôi":
      - /url: /tutor/map
    - link "Tổng Quan":
      - /url: /tutor/dashboard
  - button "Thông báo": "1"
  - link "Ảnh đại diện của Trần Gia Bảo giabao":
    - /url: /tutor/profile
    - img "Ảnh đại diện của Trần Gia Bảo"
    - text: giabao
  - button "Đăng xuất"
- main:
  - text: KHÔNG GIAN GIA SƯ · DEMO
  - heading "Tìm học viên & Nhận lớp mới" [level=1]
  - paragraph: Bảng tin tìm gia sư trực tiếp từ học viên và phụ huynh. Ứng tuyển minh bạch, nhận lớp an toàn.
  - alert:
    - strong: "CẢNH BÁO AN TOÀN: Không chuyển tiền nhận lớp hoặc giữ chỗ ngoài ứng dụng. Kiểm tra và báo cáo yêu cầu đáng ngờ."
    - paragraph: Tất cả giao dịch học phí và phí sàn (10% hoặc 7% cho Top-Rated) được giải ngân minh bạch qua ví số sau khi buổi học hoàn thành. Không thanh toán bất kỳ khoản tiền nào trước khi dạy.
    - paragraph: Dùng nút “Báo cáo tin đáng ngờ” trên tin lớp để gửi lý do cho Admin kiểm tra trong bản demo.
  - tablist:
    - tab "Bảng tin Lớp học Mới (3)" [selected]
    - tab "Đơn ứng tuyển của tôi (1)"
  - complementary "Bộ lọc tìm lớp":
    - heading "Bộ lọc tìm lớp" [level=2]
    - button "Đặt lại"
    - group "Điều kiện tìm lớp":
      - text: Điều kiện tìm lớp
      - group "Môn học Có thể chọn nhiều":
        - text: Môn học Có thể chọn nhiều
        - checkbox "Toán"
        - text: Toán
        - checkbox "Tiếng Anh"
        - text: Tiếng Anh
        - checkbox "Vật lý"
        - text: Vật lý
      - group "Khu vực Có thể chọn nhiều":
        - text: Khu vực Có thể chọn nhiều
        - checkbox "Bình Thạnh, TP. Hồ Chí Minh"
        - text: Bình Thạnh, TP. Hồ Chí Minh
        - checkbox "Toàn quốc (Online)"
        - text: Toàn quốc (Online)
        - checkbox "Quận 3, TP. Hồ Chí Minh"
        - text: Quận 3, TP. Hồ Chí Minh
      - group "Khoảng học phí VNĐ / buổi":
        - text: Khoảng học phí VNĐ / buổi
        - status "Học phí từ": 0đ
        - text: –
        - status "Học phí đến": 500.000đ
        - slider "Học phí tối thiểu": "0"
        - slider "Học phí tối đa": "500000"
        - text: 0đ 500.000đ
    - strong: "Mẹo nhận lớp:"
    - text: Giới thiệu phương pháp dạy rõ ràng và mức học phí phù hợp để phụ huynh so sánh.
  - region "Danh sách lớp học mở":
    - text: BẢNG TIN THỊ TRƯỜNG
    - heading "3 lớp đang tìm gia sư" [level=2]
    - paragraph: Các lớp học được đăng tải trực tiếp bởi phụ huynh và học viên. Bạn có thể tự do đề xuất mức học phí phù hợp.
    - article:
      - text: Toán – Lớp 8
      - 'heading "Học viên: Nguyễn Minh Anh · Mã #post-101" [level=3]'
      - text: "Cố định: 220.000đ / buổi"
      - paragraph: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
      - text: "Bình Thạnh, TP. Hồ Chí Minh (Tại nhà) Thứ 3 và Thứ 5 (18:30 - 20:00) Chưa có khoảng cách được xác nhận Yêu cầu học thử 45 phút 2 đã ứng tuyển Đăng lúc: Thứ 7, 03/10"
      - button "Báo cáo tin đáng ngờ"
      - text: Đã nộp đơn ứng tuyển
    - article:
      - text: Tiếng Anh – Lớp 9
      - 'heading "Học viên: Trần Thu Hà · Mã #post-102" [level=3]'
      - text: "Khoảng giá: 220.000đ – 280.000đ / buổi"
      - paragraph: Luyện đề thi tuyển sinh vào lớp 10 chuyên Anh
      - text: "Toàn quốc (Online) (Online) Thứ 2, Thứ 4, Thứ 6 (19:30 - 21:00) 1 đã ứng tuyển Đăng lúc: CN, 04/10"
      - button "Báo cáo tin đáng ngờ"
      - button "Ứng tuyển nhận lớp"
    - article:
      - text: Vật lý – Lớp 11
      - 'heading "Học viên: Lê Hoàng Nam · Mã #post-103" [level=3]'
      - text: Thương lượng với gia sư
      - paragraph: Nắm vững kiến thức điện xoay chiều và dao động điều hòa
      - text: "Quận 3, TP. Hồ Chí Minh (Tại nhà) Thứ 7 & Chủ nhật (09:00 - 10:30) Chưa có khoảng cách được xác nhận Yêu cầu học thử 45 phút 0 đã ứng tuyển Đăng lúc: Thứ 2, 05/10"
      - button "Báo cáo tin đáng ngờ"
      - button "Ứng tuyển nhận lớp"
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login } from './demoHelpers.js';
  3  | 
  4  | test('Split discovery pages cards and selects off-page pins without moving map positions', async ({ page }) => {
  5  |   await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  6  |   await expect(page.locator('.tutor-results-grid .tutor-card')).toHaveCount(6);
  7  |   await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  8  |   const cards = page.locator('.learner-split-list .tutor-card');
  9  |   const pagination = page.getByRole('navigation', { name: 'Phân trang gia sư' });
  10 |   await expect(cards).toHaveCount(3);
  11 |   await expect(pagination).toContainText('1–3 / 6 gia sư');
  12 |   await expect(pagination.getByRole('button', { name: 'Trang trước' })).toBeDisabled();
  13 |   const visibleIds = await cards.evaluateAll(items => items.map(item => item.id.replace('tutor-card-', '')));
  14 |   const pins = page.locator('.learner-split-map .tutor-map__pin');
  15 |   const offPagePin = await pins.evaluateAll((items, ids) => {
  16 |     const pin = items.find(item => !ids.some(id => document.getElementById(`tutor-card-${id}`)?.textContent.includes(item.getAttribute('aria-label').split(',')[0].replace('Chọn ', ''))));
  17 |     return { label: pin.getAttribute('aria-label'), position: pin.getAttribute('transform') };
  18 |   }, visibleIds);
  19 |   await page.getByRole('button', { name: offPagePin.label, exact: true }).click();
  20 |   await expect(pagination).toContainText('4–6 / 6 gia sư');
  21 |   await expect(page.locator('.learner-split-list .tutor-card.is-highlighted')).toHaveCount(1);
  22 |   await expect(pagination.getByRole('button', { name: 'Trang sau' })).toBeDisabled();
  23 |   await cards.first().hover();
  24 |   await expect(page.locator('.learner-split-map .tutor-map__pin[aria-pressed="true"]')).toHaveCount(1);
  25 |   await page.getByLabel('Sắp xếp', { exact: true }).selectOption('price');
  26 |   await expect(pagination).toContainText('1–3 / 6 gia sư');
  27 |   await expect(page.getByRole('button', { name: offPagePin.label, exact: true })).toHaveAttribute('transform', offPagePin.position);
  28 |   await pagination.getByRole('button', { name: 'Trang sau' }).click();
  29 |   await page.locator('#tutor-search').fill('Trần Gia Bảo');
  30 |   await expect(cards).toHaveCount(1);
  31 |   await expect(pagination).toContainText('1–1 / 1 gia sư');
  32 |   await expect(page.locator('.learner-results__toolbar')).toContainText('1 gia sư phù hợp');
  33 |   await page.locator('#tutor-search').fill('no-tutor-matches');
  34 |   await expect(page.getByText('Chưa tìm thấy gia sư phù hợp', { exact: true })).toBeVisible();
  35 |   await expect(pagination).toHaveCount(0);
  36 | });
  37 | 
  38 | test('Tutor class radius is explicitly unavailable without approved distance data', async ({ page }) => {
  39 |   await resetDemo(page); await login(page, 'giabao', '/tutor/find-students');
> 40 |   await expect(page.getByText('Chưa có dữ liệu khoảng cách cho tin lớp trong bản demo.', { exact: true })).toBeVisible();
     |                                                                                                            ^ Error: expect(locator).toBeVisible() failed
  41 | });
  42 | 
  43 | for (const width of [1440, 1024, 390]) {
  44 |   test(`Split discovery pagination fits ${width}px and preserves profile targets`, async ({ page }) => {
  45 |     await page.setViewportSize({ width, height: 900 });
  46 |     await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  47 |     await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  48 |     const pagination = page.getByRole('navigation', { name: 'Phân trang gia sư' });
  49 |     await pagination.scrollIntoViewIfNeeded();
  50 |     const bounds = await pagination.boundingBox();
  51 |     expect(bounds.x).toBeGreaterThanOrEqual(0); expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
  52 |     for (const link of await page.locator('.learner-split-list .tutor-card__bottom a').all()) {
  53 |       const linkBox = await link.boundingBox(); const cardBox = await link.locator('xpath=ancestor::article').boundingBox();
  54 |       expect(linkBox.x + linkBox.width).toBeLessThanOrEqual(cardBox.x + cardBox.width + 1);
  55 |     }
  56 |     await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  57 |     await page.screenshot({ path: `../../artifacts/discovery-completion/split-${width}.png`, fullPage: true });
  58 |   });
  59 | }
  60 | 
```