# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: timetable-history.spec.js >> SCHED-003 restoring the previous demo week cuts IELTS out of saved Friday availability
- Location: tests\e2e\timetable-history.spec.js:40:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Lịch dạy học', exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Lịch dạy học', exact: true }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Lịch dạy học', exact: true })

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
    - link "Yêu cầu học 5":
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
  - heading "Lịch dạy học & Khiên An Toàn" [level=1]
  - paragraph: Xem buổi dạy, giám sát an toàn hành trình và quản lý lịch rảnh từ 06:00 đến 24:00.
  - region "Thời khóa biểu lịch dạy và lịch rảnh":
    - region "Khiên an toàn gia sư":
      - heading "Khiên An Toàn Gia Sư (Tutor Safety Shield)" [level=2]
      - paragraph: Giám sát hành trình di chuyển thời gian thực, cơ chế Check-in/out tự động và Nút báo động SOS khẩn cấp kết nối 113.
      - article:
        - text: Tiếng Anh · P.K Thứ 5, 01/10 (08:30 – 09:15) Địa điểm minh họa
        - button "Bắt đầu di chuyển"
        - button "Check-in an toàn"
        - button "Check-out ra về"
        - button "Chia sẻ buổi dạy"
        - button "SOS KHẨN CẤP"
      - article:
        - text: Vật lý · H.N Thứ 6, 02/10 (13:00 – 13:45) Địa điểm minh họa
        - button "Bắt đầu di chuyển"
        - button "Check-in an toàn"
        - button "Check-out ra về"
        - button "Chia sẻ buổi dạy"
        - button "SOS KHẨN CẤP"
      - article:
        - text: Toán · L.A Thứ 4, 30/09 (14:30 – 15:15) Địa điểm minh họa
        - button "Bắt đầu di chuyển"
        - button "Check-in an toàn"
        - button "Check-out ra về"
        - button "Chia sẻ buổi dạy"
        - button "SOS KHẨN CẤP"
      - article:
        - text: Tiếng Anh · M.K Thứ 7, 03/10 (16:45 – 17:30) Địa điểm minh họa
        - button "Bắt đầu di chuyển"
        - button "Check-in an toàn"
        - button "Check-out ra về"
        - button "Chia sẻ buổi dạy"
        - button "SOS KHẨN CẤP"
      - article:
        - text: Toán lớp 8 · Phụ huynh bé An Thứ 3, 29/09 (18:15 – 19:45) Bình Thạnh
        - button "Bắt đầu di chuyển"
        - button "Check-in an toàn"
        - button "Check-out ra về"
        - button "Chia sẻ buổi dạy"
        - button "SOS KHẨN CẤP"
      - article:
        - text: Toán lớp 8 · Phụ huynh bé An Thứ 5, 01/10 (18:15 – 19:45) Bình Thạnh
        - button "Bắt đầu di chuyển"
        - button "Check-in an toàn"
        - button "Check-out ra về"
        - button "Chia sẻ buổi dạy"
        - button "SOS KHẨN CẤP"
    - button "Tuần trước"
    - strong: "Tuần: 28/9/2026 – 4/10/2026"
    - button "Tuần sau"
    - text: Thời lượng mỗi buổi
    - combobox "Thời lượng mỗi buổi":
      - option "45 phút" [selected]
      - option "90 phút"
    - text: Chưa chọn Lịch rảnh Lịch dạy
    - paragraph: Mở chi tiết một giờ bằng dấu + ở trục giờ; chọn giờ để thêm nhanh, hoặc kéo khung rảnh để đổi ngày và giờ.
    - alert:
      - strong: Trùng lịch trong dữ liệu đã lưu
      - paragraph: Các lớp dưới đây có giờ trùng nhau và được hiển thị ở cột riêng. Ngày giờ được giữ nguyên; cần xác nhận lại lịch trước khi dạy.
      - list:
        - listitem: "Thứ 5, 01/10: Toán lớp 8 · Phụ huynh bé An (18:15–19:45) / Tiếng Anh · Nguyễn Minh Anh (18:00–18:45)"
    - region "Lịch dạy và lịch rảnh của gia sư, cuộn ngang và dọc để xem đầy đủ":
      - text: Giờ
      - strong: Thứ 2
      - text: 28-09
      - button "Thêm lịch rảnh Thứ 2"
      - strong: Thứ 3
      - text: 29-09
      - button "Thêm lịch rảnh Thứ 3"
      - strong: Thứ 4
      - text: 30-09
      - button "Thêm lịch rảnh Thứ 4"
      - strong: Thứ 5
      - text: 01-10
      - button "Thêm lịch rảnh Thứ 5"
      - strong: Thứ 6
      - text: 02-10
      - button "Thêm lịch rảnh Thứ 6"
      - strong: Thứ 7
      - text: 03-10
      - button "Thêm lịch rảnh Thứ 7"
      - strong: CN
      - text: 04-10
      - button "Thêm lịch rảnh CN"
      - text: 06:00
      - button "Mở chi tiết 06:00"
      - text: 07:00
      - button "Mở chi tiết 07:00"
      - text: 08:00
      - button "Mở chi tiết 08:00"
      - text: 09:00
      - button "Mở chi tiết 09:00"
      - text: 10:00
      - button "Mở chi tiết 10:00"
      - text: 11:00
      - button "Mở chi tiết 11:00"
      - text: 12:00
      - button "Mở chi tiết 12:00"
      - text: 13:00
      - button "Mở chi tiết 13:00"
      - text: 14:00
      - button "Mở chi tiết 14:00"
      - text: 15:00
      - button "Mở chi tiết 15:00"
      - text: 16:00
      - button "Mở chi tiết 16:00"
      - text: 17:00
      - button "Mở chi tiết 17:00"
      - text: 18:00
      - button "Mở chi tiết 18:00"
      - text: 19:00
      - button "Mở chi tiết 19:00"
      - text: 20:00
      - button "Mở chi tiết 20:00"
      - text: 21:00
      - button "Mở chi tiết 21:00"
      - text: 22:00
      - button "Mở chi tiết 22:00"
      - text: 23:00
      - button "Mở chi tiết 23:00"
      - text: 24:00
      - button "Toán N.M.A · Hoàn tất 2026-09-29 07:00–07:45":
        - text: 07:00
        - strong: Toán
        - text: 07:45
      - button "Lịch rảnh 2026-09-29 18:00–18:15":
        - text: 18:00
        - strong: Lịch rảnh
        - text: 18:15
      - button "Xóa lịch rảnh 2026-09-29 18:00"
      - button "Toán lớp 8 Phụ huynh bé An 2026-09-29 18:15–19:45":
        - text: 18:15
        - strong: Toán lớp 8
        - text: Phụ huynh bé An 19:45
      - button "Lịch rảnh 2026-09-29 19:45–21:00":
        - text: 19:45
        - strong: Lịch rảnh
        - text: 21:00
      - button "Xóa lịch rảnh 2026-09-29 19:45"
      - button "Toán L.A 2026-09-30 14:30–15:15":
        - text: 14:30
        - strong: Toán
        - text: 15:15
      - button "Tiếng Anh P.K 2026-10-01 08:30–09:15":
        - text: 08:30
        - strong: Tiếng Anh
        - text: 09:15
      - button "Tiếng Anh Nguyễn Minh Anh · Hoàn tất 2026-10-01 18:00–18:45":
        - text: 18:00
        - strong: Tiếng Anh
        - text: 18:45
      - button "Toán lớp 8 Phụ huynh bé An 2026-10-01 18:15–19:45":
        - text: 18:15
        - strong: Toán lớp 8
        - text: Phụ huynh bé An 19:45
      - button "Lịch rảnh 2026-10-01 19:45–21:00":
        - text: 19:45
        - strong: Lịch rảnh
        - text: 21:00
      - button "Xóa lịch rảnh 2026-10-01 19:45"
      - button "Vật lý H.N 2026-10-02 13:00–13:45":
        - text: 13:00
        - strong: Vật lý
        - text: 13:45
      - button "Lịch rảnh 2026-10-02 18:15–19:00":
        - text: 18:15
        - strong: Lịch rảnh
        - text: 19:00
      - button "Xóa lịch rảnh 2026-10-02 18:15"
      - button "IELTS Học sinh THPT · Hoàn tất 2026-10-02 19:00–19:45":
        - text: 19:00
        - strong: IELTS
        - text: 19:45
      - button "Lịch rảnh 2026-10-02 19:45–22:00":
        - text: 19:45
        - strong: Lịch rảnh
        - text: 22:00
      - button "Xóa lịch rảnh 2026-10-02 19:45"
      - button "Tiếng Anh Ngọc Lan · Hoàn tất 2026-10-03 09:00–09:45":
        - text: 09:00
        - strong: Tiếng Anh
        - text: 09:45
      - button "Lịch rảnh 2026-10-03 09:45–12:00":
        - text: 09:45
        - strong: Lịch rảnh
        - text: 12:00
      - button "Xóa lịch rảnh 2026-10-03 09:45"
      - button "Tiếng Anh M.K 2026-10-03 16:45–17:30":
        - text: 16:45
        - strong: Tiếng Anh
        - text: 17:30
    - paragraph: Timeline hiển thị 06:00–24:00; lịch rảnh và buổi học dùng ngày cùng giờ bắt đầu và kết thúc. Dữ liệu được mô phỏng trong prototype.
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { login, resetDemo } from './demoHelpers.js';
  3   | import { createDemoState, decideRequest } from '../../src/features/domain/demoDomain.js';
  4   | 
  5   | function legacyWeek() {
  6   |   const referenceTime = new Date('2026-10-04T10:00:00+07:00');
  7   |   const state = createDemoState(referenceTime);
  8   |   state.lessons = state.lessons.filter((lesson) => !lesson.id.startsWith('history-'));
  9   |   const accepted = decideRequest(state, 'req-1', 'accepted', 'quoc-bao').state;
  10  |   accepted.lessons[0].status = 'completed';
  11  |   delete accepted.lessons[0].sessionFee;
  12  |   accepted.availability = accepted.availability.filter((range) => range.date !== '2026-10-02');
  13  |   accepted.availability.push({ id: 'runtime-friday-range', tutorId: 'quoc-bao', date: '2026-10-02', start: 1095, end: 1320 });
  14  |   return { state: accepted, referenceTime };
  15  | }
  16  | 
  17  | test('SCHED-005 approved cleanup keeps Thursday English and Friday IELTS across reload', async ({ page }, testInfo) => {
  18  |   const setup = legacyWeek();
  19  |   delete setup.state.appliedDemoCleanups;
  20  |   await resetDemo(page, setup);
  21  |   await login(page, 'giabao', '/tutor/timetable');
  22  |   await expect(page.getByRole('heading', { name: 'Lịch dạy học', exact: true })).toBeVisible();
  23  |   await expect(page.getByRole('button', { name: /Toán lớp 8 Phụ huynh bé An 2026-10-01/ })).toHaveCount(0);
  24  |   await expect(page.getByRole('button', { name: /Toán lớp 8 Phụ huynh bé An 2026-09-29/ })).toBeVisible();
  25  |   await page.getByRole('button', { name: /Tiếng Anh Nguyễn Minh Anh.*2026-10-01/ }).click();
  26  |   await expect(page.getByRole('dialog')).toContainText('Nguyễn Minh Anh');
  27  |   await page.keyboard.press('Escape');
  28  |   await expect(page.getByRole('button', { name: /Lịch rảnh 2026-10-02 18:/ })).toHaveCount(0);
  29  |   await expect(page.getByRole('button', { name: /Lịch rảnh 2026-10-02 19:45/ })).toHaveCount(0);
  30  |   await page.getByRole('button', { name: /IELTS Học sinh THPT.*2026-10-02/ }).click();
  31  |   await expect(page.getByRole('dialog')).toContainText('Học sinh THPT');
  32  |   await page.keyboard.press('Escape');
  33  |   await expect(page.getByRole('alert')).toHaveCount(0);
  34  |   await page.screenshot({ path: testInfo.outputPath('approved-demo-cleanup.png'), fullPage: true });
  35  |   await page.reload();
  36  |   await expect(page.getByRole('heading', { name: 'Lịch dạy học', exact: true })).toBeVisible();
  37  |   await expect(page.getByRole('button', { name: /Toán lớp 8 Phụ huynh bé An 2026-10-01/ })).toHaveCount(0);
  38  | });
  39  | 
  40  | test('SCHED-003 restoring the previous demo week cuts IELTS out of saved Friday availability', async ({ page }) => {
  41  |   await resetDemo(page, legacyWeek());
  42  |   await login(page, 'giabao', '/tutor/timetable');
> 43  |   await expect(page.getByRole('heading', { name: 'Lịch dạy học', exact: true })).toBeVisible();
      |                                                                                  ^ Error: expect(locator).toBeVisible() failed
  44  |   await expect(page.getByRole('button', { name: 'Lịch rảnh 2026-10-02 18:15–22:00', exact: true })).toHaveCount(0);
  45  |   await expect(page.getByRole('button', { name: 'Lịch rảnh 2026-10-02 18:15–19:00', exact: true })).toBeVisible();
  46  |   await expect(page.getByRole('button', { name: 'Lịch rảnh 2026-10-02 19:45–22:00', exact: true })).toBeVisible();
  47  |   await expect(page.getByRole('button', { name: /IELTS Học sinh THPT.*2026-10-02/ })).toBeVisible();
  48  |   await page.reload();
  49  |   await expect(page.getByRole('button', { name: 'Lịch rảnh 2026-10-02 18:15–22:00', exact: true })).toHaveCount(0);
  50  | });
  51  | 
  52  | for (const width of [1440, 1024, 390]) {
  53  |   test(`SCHED-004 persisted overlapping lessons remain separately readable and clickable at ${width}px`, async ({ page }, testInfo) => {
  54  |     await resetDemo(page, legacyWeek());
  55  |     await page.setViewportSize({ width, height: 900 });
  56  |     const errors = [];
  57  |     page.on('pageerror', (error) => errors.push(error.message));
  58  |     page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  59  |     await login(page, 'giabao', '/tutor/timetable');
  60  |     const english = page.getByRole('button', { name: /Tiếng Anh Nguyễn Minh Anh.*2026-10-01/ });
  61  |     const math = page.getByRole('button', { name: /Toán lớp 8 Phụ huynh bé An 2026-10-01/ });
  62  |     await english.scrollIntoViewIfNeeded();
  63  |     await page.screenshot({ path: testInfo.outputPath('overlapping-lessons.png') });
  64  |     const first = await english.boundingBox();
  65  |     const second = await math.boundingBox();
  66  |     const intersects = first.x < second.x + second.width && first.x + first.width > second.x && first.y < second.y + second.height && first.y + first.height > second.y;
  67  |     expect(intersects, 'both Lesson hit targets must remain visible, never stacked over one another').toBe(false);
  68  |     expect(Math.min(first.width, second.width), 'overlap lanes must not squeeze readable content').toBeGreaterThanOrEqual(110);
  69  |     await expect(page.getByRole('alert')).toContainText('Trùng lịch');
  70  |     await expect(page.getByRole('alert')).toContainText('Nguyễn Minh Anh');
  71  |     await expect(page.getByRole('alert')).toContainText('Phụ huynh bé An');
  72  |     const alertTitle = await page.getByRole('alert').locator('strong').boundingBox();
  73  |     const alertBody = await page.getByRole('alert').locator('p').boundingBox();
  74  |     expect(alertBody.y, 'conflict explanation must wrap below its heading, not squeeze beside it').toBeGreaterThanOrEqual(alertTitle.y + alertTitle.height);
  75  |     const alertBounds = await page.getByRole('alert').boundingBox();
  76  |     const conflictRow = await page.getByRole('alert').getByRole('listitem').first().boundingBox();
  77  |     expect(conflictRow.x - alertBounds.x, 'list markers must stay inside the alert border').toBeGreaterThanOrEqual(24);
  78  |     for (const [button, learner] of [[english, 'Nguyễn Minh Anh'], [math, 'Phụ huynh bé An']]) {
  79  |       await button.click();
  80  |       await expect(page.getByRole('dialog')).toContainText(learner);
  81  |       await page.keyboard.press('Escape');
  82  |     }
  83  |     await page.getByRole('button', { name: 'Mở chi tiết 18:00', exact: true }).click();
  84  |     const expandedFirst = await english.boundingBox();
  85  |     const expandedSecond = await math.boundingBox();
  86  |     expect(expandedFirst.x + expandedFirst.width).toBeLessThanOrEqual(expandedSecond.x);
  87  |     await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
  88  |     expect(errors).toEqual([]);
  89  |   });
  90  | }
  91  | 
  92  | test('INCOME-002 completed legacy Lesson explains its fee and accounting month without appearing in the wrong month', async ({ page }) => {
  93  |   await resetDemo(page, legacyWeek());
  94  |   await login(page, 'giabao', '/tutor/timetable');
  95  |   await page.getByRole('button', { name: /Toán N.M.A.*Hoàn tất 2026-09-29/ }).click();
  96  |   const modal = page.getByRole('dialog');
  97  |   await expect(modal).toContainText('29/09/2026');
  98  |   await expect(modal).toContainText('220.000đ / buổi');
  99  |   await expect(modal).toContainText('thu nhập tháng 09/2026');
  100 |   await page.keyboard.press('Escape');
  101 |   await page.getByRole('link', { name: 'Thu nhập', exact: true }).click();
  102 |   await expect(page.getByLabel('Tổng quan thu nhập tháng hiện tại')).toContainText('660.000đ');
  103 |   await expect(page.getByRole('table')).not.toContainText('N.M.A');
  104 |   await expect(page.getByLabel('Giá trị thu nhập theo tháng').getByRole('listitem').nth(4)).toContainText('1.100.000đ');
  105 | });
  106 | 
```