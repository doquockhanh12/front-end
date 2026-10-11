# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: domain-regressions.spec.js >> BUG-001 learner-created request appears for the canonical tutor and decision returns to learner
- Location: tests\e2e\domain-regressions.spec.js:7:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href="/tutor/requests/request-1"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('a[href="/tutor/requests/request-1"]') with timeout 5000ms
  - waiting for locator('a[href="/tutor/requests/request-1"]')

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
    - link "Yêu cầu học 7":
      - /url: /tutor/requests
    - link "Lịch dạy học":
      - /url: /tutor/timetable
    - link "Tìm học viên mới":
      - /url: /tutor/find-students
    - link "Ví & Thu nhập":
      - /url: /tutor/wallet
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
    - strong: "⚠️ CẢNH BÁO AN TOÀN: TutorNearMe không bao giờ thu phí nhận lớp hay tiền cọc giữ chỗ. Mọi yêu cầu chuyển tiền nhận lớp ngoài sàn đều là lừa đảo đa cấp!"
    - paragraph: Tất cả giao dịch học phí và phí sàn (10% hoặc 7% cho Top-Rated) được giải ngân minh bạch qua ví số sau khi buổi học hoàn thành. Không thanh toán bất kỳ khoản tiền nào trước khi dạy.
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
    - text: 💡
    - strong: "Mẹo nhận lớp:"
    - text: Nộp hồ sơ sớm kèm lời giới thiệu phương pháp dạy chi tiết giúp tăng 80% cơ hội được phụ huynh chọn.
  - region "Danh sách lớp học mở":
    - text: BẢNG TIN THỊ TRƯỜNG
    - heading "3 lớp đang tìm gia sư" [level=2]
    - paragraph: Các lớp học được đăng tải trực tiếp bởi phụ huynh và học viên. Bạn có thể tự do đề xuất mức học phí phù hợp.
    - article:
      - text: Toán – Lớp 8
      - 'heading "Học viên: Nguyễn Minh Anh · Mã #post-101" [level=3]'
      - text: "Cố định: 220.000đ / buổi"
      - paragraph: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
      - text: "Bình Thạnh, TP. Hồ Chí Minh (Tại nhà) Thứ 3 và Thứ 5 (18:30 - 20:00) 📍 Khoảng cách ~ 2.5 km 🎯 Yêu cầu học thử 30-45 phút 2 đã ứng tuyển Đăng lúc: Thứ 7, 03/10 Đã nộp đơn ứng tuyển"
    - article:
      - text: Tiếng Anh – Lớp 9
      - 'heading "Học viên: Trần Thu Hà · Mã #post-102" [level=3]'
      - text: "Khoảng giá: 220.000đ – 280.000đ / buổi"
      - paragraph: Luyện đề thi tuyển sinh vào lớp 10 chuyên Anh
      - text: "Toàn quốc (Online) (Online) Thứ 2, Thứ 4, Thứ 6 (19:30 - 21:00) 1 đã ứng tuyển Đăng lúc: CN, 04/10"
      - button "Ứng tuyển nhận lớp"
    - article:
      - text: Vật lý – Lớp 11
      - 'heading "Học viên: Lê Hoàng Nam · Mã #post-103" [level=3]'
      - text: Thương lượng với gia sư
      - paragraph: Nắm vững kiến thức điện xoay chiều và dao động điều hòa
      - text: "Quận 3, TP. Hồ Chí Minh (Tại nhà) Thứ 7 & Chủ nhật (09:00 - 10:30) 📍 Khoảng cách ~ 2.5 km 🎯 Yêu cầu học thử 30-45 phút 0 đã ứng tuyển Đăng lúc: Thứ 2, 05/10"
      - button "Ứng tuyển nhận lớp"
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện"
```

# Test source

```ts
  1   | import { expect, test } from '@playwright/test';
  2   | import { login, logout, resetDemo } from './demoHelpers.js';
  3   | import { demoReferenceData } from '../../src/data/demoReferenceData.js';
  4   | 
  5   | test.beforeEach(async ({ page }) => resetDemo(page));
  6   | 
  7   | test('BUG-001 learner-created request appears for the canonical tutor and decision returns to learner', async ({ page }) => {
  8   |   await login(page, 'minhanh', '/tutors/quoc-bao');
  9   |   await page.locator('#profile-subjects').getByRole('button', { name: 'Tiếng Anh', exact: true }).click();
  10  |   await page.locator('#profile-subjects').getByRole('button', { name: 'THCS', exact: true }).click();
  11  |   await page.getByRole('region', { name: 'Lịch rảnh của Trần Gia Bảo' }).getByRole('button').first().click();
  12  |   await page.locator('#profile-location').getByRole('button', { name: 'Online', exact: true }).click();
  13  |   await page.getByLabel('Mong muốn học tập *').fill('Luyện giao tiếp');
  14  |   await page.getByRole('button', { name: 'Gửi yêu cầu học', exact: true }).click();
  15  |   await expect(page).toHaveURL(/\/requests\/[^/]+$/);
  16  |   const requestId = new URL(page.url()).pathname.split('/').at(-1);
  17  |   await logout(page);
  18  |   await login(page, 'giabao', '/tutor/find-students');
> 19  |   await expect(page.locator(`a[href="/tutor/requests/${requestId}"]`)).toBeVisible();
      |                                                                        ^ Error: expect(locator).toBeVisible() failed
  20  |   await login(page, 'giabao', '/tutor/requests');
  21  |   const requestLink = page.locator(`a[href="/tutor/requests/${requestId}"]`);
  22  |   await expect(requestLink).toBeVisible();
  23  |   await requestLink.click();
  24  |   await page.getByRole('button', { name: 'Nhận yêu cầu', exact: true }).click();
  25  |   await expect(page.getByRole('status')).toContainText('Đã nhận');
  26  |   await page.goto('/tutor/timetable');
  27  |   await expect(page.getByRole('button', { name: /Tiếng Anh.*Nguyễn Minh Anh/ }).first()).toBeVisible();
  28  |   await logout(page);
  29  |   await login(page, 'minhanh', `/requests/${requestId}`);
  30  |   await expect(page.locator('main')).toContainText('Đã xác nhận');
  31  | });
  32  | 
  33  | test('BUG-002 learner cannot complete an accepted request', async ({ page }) => {
  34  |   await login(page, 'minhanh', '/requests/demo-02');
  35  |   await expect(page.getByRole('heading', { name: 'Tiếng Anh với Trần Gia Bảo' })).toBeVisible();
  36  |   await expect(page.locator('main')).toContainText('Đã xác nhận');
  37  |   await expect(page.getByRole('button', { name: 'Đánh dấu đã học xong' })).toHaveCount(0);
  38  | });
  39  | 
  40  | test('BUG-013 missing legacy request areas do not imply an online lesson', async ({ page }) => {
  41  |   await login(page, 'minhanh', '/requests/demo-02');
  42  |   await expect(page.locator('main')).toContainText('Tại nhà');
  43  |   await expect(page.locator('main')).toContainText('Chưa có khu vực được gửi');
  44  |   await expect(page.locator('main')).not.toContainText('Không yêu cầu khu vực — học online');
  45  | });
  46  | 
  47  | test('BUG-003 learner filters use canonical states with separate completed lesson presentation', async ({ page }) => {
  48  |   await login(page, 'minhanh', '/requests');
  49  |   await page.getByRole('button', { name: 'Chờ phản hồi', exact: true }).click();
  50  |   await expect(page.locator('a[href="/requests/demo-01"]')).toBeVisible();
  51  |   await expect(page.locator('a[href="/requests/demo-02"]')).toHaveCount(0);
  52  |   await page.getByRole('button', { name: 'Hoàn tất', exact: true }).click();
  53  |   await expect(page.locator('a[href="/requests/demo-03"]')).toBeVisible();
  54  |   const statuses = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).requests.map((r) => r.status));
  55  |   expect(statuses.every((s) => ['pending','accepted','rejected','cancelled'].includes(s))).toBe(true);
  56  | });
  57  | 
  58  | test('BUG-004 learner request badges expose distinct semantic tones', async ({ page }) => {
  59  |   await login(page, 'minhanh', '/requests/demo-01');
  60  |   await expect(page.locator('main .badge').filter({ hasText: 'Chờ phản hồi' })).toHaveClass(/badge--warning/);
  61  |   await page.getByRole('button', { name: 'Hủy yêu cầu demo' }).click();
  62  |   await expect(page.locator('main .badge').filter({ hasText: 'Đã hủy' })).toHaveClass(/badge--danger/);
  63  |   await page.goto('/requests/demo-02');
  64  |   await expect(page.locator('main .badge').filter({ hasText: 'Đã xác nhận' })).toHaveClass(/badge--success/);
  65  |   await page.goto('/requests/demo-03');
  66  |   await expect(page.locator('main .badge').filter({ hasText: 'Hoàn tất' })).toHaveClass(/badge--info/);
  67  | });
  68  | 
  69  | for (const [decision, button, label, tone] of [['rejected','Từ chối','Đã từ chối','flow-error'], ['accepted','Nhận yêu cầu','Đã nhận','flow-success']]) {
  70  |   test(`BUG-005 tutor ${decision} decision feedback uses correct semantics`, async ({ page }) => {
  71  |     await login(page, 'giabao', '/tutor/requests/req-1');
  72  |     await page.getByRole('button', { name: button, exact: true }).click();
  73  |     await expect(page.getByRole('status').filter({ hasText: label })).toHaveClass(new RegExp(tone));
  74  |   });
  75  | }
  76  | 
  77  | test('BUG-006 tutor identity stays consistent across header dashboard profile and public profile', async ({ page }) => {
  78  |   await login(page, 'giabao', '/tutor/dashboard');
  79  |   await expect(page.getByRole('heading', { name: /Xin chào, Trần Gia Bảo/ })).toBeVisible();
  80  |   await expect(page.locator('#tutor-profile-summary')).toContainText('Trần Gia Bảo');
  81  |   await expect(page.getByRole('banner').getByRole('img', { name: 'Ảnh đại diện của Trần Gia Bảo' })).toBeVisible();
  82  |   await page.goto('/tutor/profile');
  83  |   await expect(page.getByLabel('Họ và tên', { exact: true })).toHaveValue('Trần Gia Bảo');
  84  |   await logout(page);
  85  |   await login(page, 'minhanh', '/tutors/quoc-bao');
  86  |   await expect(page.getByRole('heading', { name: 'Trần Gia Bảo', exact: true })).toBeVisible();
  87  | });
  88  | 
  89  | test('BUG-007 tutor geography and public profile agree without rewriting request origins', async ({ page }) => {
  90  |   await login(page, 'giabao', '/tutor/profile');
  91  |   await expect(page.getByLabel('Khu vực dạy', { exact: true })).toHaveValue('Thủ Đức');
  92  |   await page.goto('/tutor/dashboard');
  93  |   await expect(page.locator('#tutor-profile-summary')).toContainText('Thủ Đức');
  94  |   await expect(page.locator('#tutor-profile-summary')).not.toContainText('Hà Nội');
  95  | });
  96  | 
  97  | test('BUG-008 functional tutor fees use session units and keep existing amounts', async ({ page }) => {
  98  |   await login(page, 'giabao', '/tutor/dashboard');
  99  |   await expect(page.locator('#tutor-profile-summary')).toContainText('220.000đ / buổi');
  100 |   await expect(page.locator('main')).not.toContainText('/giờ');
  101 |   const requestFee = demoReferenceData.requests.find((r) => r.id === 'req-1').sessionFee;
  102 |   await expect(page.locator('.reference-request').first()).toContainText(`${requestFee.toLocaleString('vi-VN')}đ / buổi`);
  103 |   await page.goto('/tutor/find-students');
  104 |   await expect(page.getByRole('group', { name: /Khoảng học phí/ })).toContainText('VNĐ / buổi');
  105 |   await expect(page.getByRole('slider', { name: 'Học phí tối thiểu' })).toHaveAttribute('aria-valuetext', /mỗi buổi/);
  106 | });
  107 | 
  108 | test('BUG-003 tutor sees learner cancellation as cancelled rather than rejected', async ({ page }) => {
  109 |   await login(page, 'minhanh', '/requests/demo-01');
  110 |   await page.getByRole('button', { name: 'Hủy yêu cầu demo' }).click();
  111 |   // demo-01 belongs to another public Tutor; use the canonical Tutor's request flow.
  112 |   await page.goto('/tutors/quoc-bao');
  113 |   await page.locator('#profile-subjects').getByRole('button', { name: 'Tiếng Anh', exact: true }).click();
  114 |   await page.locator('#profile-subjects').getByRole('button', { name: 'THCS', exact: true }).click();
  115 |   await page.getByRole('region', { name: 'Lịch rảnh của Trần Gia Bảo' }).getByRole('button').first().click();
  116 |   await page.locator('#profile-location').getByRole('button', { name: 'Online', exact: true }).click();
  117 |   await page.getByLabel('Mong muốn học tập *').fill(demoReferenceData.requests[0].goal);
  118 |   await page.getByRole('button', { name: 'Gửi yêu cầu học', exact: true }).click();
  119 |   await expect(page).toHaveURL(/\/requests\/[^/]+$/);
```