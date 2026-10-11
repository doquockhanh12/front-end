# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: income.spec.js >> Tutor sidebar Income shows derived October summary, six-month values and exact eligible details
- Location: tests\e2e\income.spec.js:5:1

# Error details

```
Error: expect(locator).toHaveCSS(expected) failed

Locator:  locator('.income-chart__point[data-tone="normal"]').first()
Expected: "rgb(255, 211, 61)"
Received: "rgb(245, 158, 11)"
Timeout:  5000ms

Call log:
  - Expect "toHaveCSS" locator('.income-chart__point[data-tone="normal"]').first() with timeout 5000ms
  - waiting for locator('.income-chart__point[data-tone="normal"]').first()
    14 × locator resolved to <circle r="6" cx="165" data-tone="normal" cy="141.5909090909091" class="income-chart__point"></circle>
       - unexpected value "rgb(245, 158, 11)"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - complementary "Điều hướng gia sư" [ref=e4]:
      - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn." [ref=e6] [cursor=pointer]:
        - /url: /
        - strong [ref=e7]: TutorNearMe
        - generic [ref=e8]: Gia sư gần bạn. Tri thức gần hơn.
      - navigation "Các mục của gia sư" [ref=e9]:
        - link "Tổng quan" [ref=e10] [cursor=pointer]:
          - /url: /tutor/dashboard
        - link "Yêu cầu học 6" [ref=e17] [cursor=pointer]:
          - /url: /tutor/requests
          - generic [ref=e21]: Yêu cầu học
          - generic [ref=e22]: "6"
        - link "Lịch dạy học" [ref=e23] [cursor=pointer]:
          - /url: /tutor/timetable
        - link "Tìm học viên mới" [ref=e27] [cursor=pointer]:
          - /url: /tutor/find-students
        - link "Ví & Thu nhập" [ref=e34] [cursor=pointer]:
          - /url: /tutor/wallet
        - link "Thu nhập" [ref=e39] [cursor=pointer]:
          - /url: /tutor/income
        - link "Hồ sơ gia sư" [ref=e44] [cursor=pointer]:
          - /url: /tutor/profile
        - link "Tin nhắn" [ref=e49] [cursor=pointer]:
          - /url: /messages
        - link "Kháng cáo" [ref=e53] [cursor=pointer]:
          - /url: /appeals
        - link "Trung tâm Trợ giúp" [ref=e59] [cursor=pointer]:
          - /url: /help
    - generic [ref=e64]:
      - banner [ref=e65]:
        - navigation "Điều hướng nhanh" [ref=e66]:
          - link "Tìm lớp gần tôi" [ref=e67] [cursor=pointer]:
            - /url: /tutor/map
          - link "Tổng Quan" [ref=e71] [cursor=pointer]:
            - /url: /tutor/dashboard
        - generic [ref=e77]:
          - button "Thông báo" [ref=e79] [cursor=pointer]:
            - generic [ref=e83]: "1"
          - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=e84] [cursor=pointer]:
            - /url: /tutor/profile
            - img "Ảnh đại diện của Trần Gia Bảo" [ref=e85]:
              - generic [aria-hidden] [ref=e86]: GB
            - generic [ref=e87]: giabao
          - button "Đăng xuất" [ref=e88] [cursor=pointer]
      - main [ref=e92]:
        - generic [ref=e94]:
          - text: KHÔNG GIAN GIA SƯ · DEMO
          - heading "Thu nhập" [level=1] [ref=e95]
          - paragraph [ref=e96]: Theo dõi thu nhập từ các buổi học đã hoàn tất.
        - generic [ref=e97]:
          - paragraph [ref=e98]: Tháng 10/2026
          - generic "Tổng quan thu nhập tháng hiện tại" [ref=e99]:
            - generic [ref=e100]:
              - heading "Tổng thu nhập tháng hiện tại" [level=2] [ref=e104]
              - strong [ref=e105]: 660.000đ
              - paragraph [ref=e106]: Từ các buổi học đã hoàn tất
            - generic [ref=e107]:
              - heading "Số buổi đã hoàn tất" [level=2] [ref=e111]
              - strong [ref=e112]: "3"
              - paragraph [ref=e113]: Buổi tạo thu nhập trong tháng
            - generic [ref=e114]:
              - heading "Nguồn thu cao nhất" [level=2] [ref=e117]
              - strong [ref=e118]: Tiếng Anh
              - paragraph [ref=e119]: 440.000đ · 2 buổi
          - region [ref=e120]:
            - generic [ref=e121]:
              - generic [ref=e122]:
                - heading "Thu nhập theo tháng" [level=2] [ref=e123]
                - paragraph [ref=e124]: 6 tháng gần nhất · VNĐ
              - generic [ref=e125]:
                - generic [ref=e126]: Cao nhất
                - generic [ref=e127]: Thấp nhất
            - img "Biểu đồ thu nhập 6 tháng gần nhất" [ref=e128]:
              - generic [ref=e129]: "0"
              - generic [ref=e130]: 440 N
              - generic [ref=e131]: 880 N
              - generic: 05/2026
              - generic: 06/2026
              - generic: 07/2026
              - generic: 08/2026
              - generic: 09/2026
              - generic: 10/2026
              - 'button "Xem chi tiết tháng 05/2026: 180.000đ" [ref=e133] [cursor=pointer]'
              - 'button "Xem chi tiết tháng 06/2026: 360.000đ" [ref=e135] [cursor=pointer]'
              - 'button "Xem chi tiết tháng 07/2026: 400.000đ" [ref=e137] [cursor=pointer]'
              - 'button "Xem chi tiết tháng 08/2026: 620.000đ" [ref=e139] [cursor=pointer]'
              - 'button "Xem chi tiết tháng 09/2026: 880.000đ" [ref=e141] [cursor=pointer]'
              - 'button "Xem chi tiết tháng 10/2026: 660.000đ" [pressed] [ref=e143] [cursor=pointer]'
            - list "Giá trị thu nhập theo tháng" [ref=e145]:
              - 'listitem "05/2026: 180.000đ · Thấp nhất" [ref=e146]':
                - generic [ref=e147]: 05/2026
                - strong [ref=e148]: 180.000đ
                - generic [ref=e149]: Thấp nhất
              - 'listitem "06/2026: 360.000đ" [ref=e150]':
                - generic [ref=e151]: 06/2026
                - strong [ref=e152]: 360.000đ
              - 'listitem "07/2026: 400.000đ" [ref=e153]':
                - generic [ref=e154]: 07/2026
                - strong [ref=e155]: 400.000đ
              - 'listitem "08/2026: 620.000đ" [ref=e156]':
                - generic [ref=e157]: 08/2026
                - strong [ref=e158]: 620.000đ
              - 'listitem "09/2026: 880.000đ · Cao nhất" [ref=e159]':
                - generic [ref=e160]: 09/2026
                - strong [ref=e161]: 880.000đ
                - generic [ref=e162]: Cao nhất
              - 'listitem "10/2026: 660.000đ" [ref=e163]':
                - generic [ref=e164]: 10/2026
                - strong [ref=e165]: 660.000đ
          - region [ref=e166]:
            - generic [ref=e168]:
              - heading "Các buổi tạo thu nhập trong tháng" [level=2] [ref=e169]
              - paragraph [ref=e170]: 3 buổi · Tháng 10/2026
            - table [ref=e172]:
              - caption [ref=e173]: Các buổi tạo thu nhập trong tháng 10/2026, mới nhất trước
              - rowgroup [ref=e174]:
                - row [ref=e175]:
                  - columnheader "Ngày học" [ref=e176]
                  - columnheader "Người học" [ref=e177]
                  - columnheader "Môn học" [ref=e178]
                  - columnheader "Thời gian" [ref=e179]
                  - columnheader "Thu nhập" [ref=e180]
              - rowgroup [ref=e181]:
                - row [ref=e182]:
                  - cell "03/10/2026" [ref=e183]
                  - cell "Ngọc Lan" [ref=e184]
                  - cell "Tiếng Anh" [ref=e185]
                  - cell "09:00–09:45" [ref=e186]
                  - cell [ref=e187]:
                    - strong [ref=e188]: 220.000đ
                - row [ref=e189]:
                  - cell "02/10/2026" [ref=e190]
                  - cell "Học sinh THPT" [ref=e191]
                  - cell "IELTS" [ref=e192]
                  - cell "19:00–19:45" [ref=e193]
                  - cell [ref=e194]:
                    - strong [ref=e195]: 220.000đ
                - row [ref=e196]:
                  - cell "01/10/2026" [ref=e197]
                  - cell "Nguyễn Minh Anh" [ref=e198]
                  - cell "Tiếng Anh" [ref=e199]
                  - cell "18:00–18:45" [ref=e200]
                  - cell [ref=e201]:
                    - strong [ref=e202]: 220.000đ
          - paragraph [ref=e203]: Thu nhập tính theo học phí của từng buổi học, chưa thể hiện giao dịch hay thanh toán thực tế.
  - complementary "Widget nhắn tin nhanh" [ref=e204]:
    - button "Mở cửa sổ trò chuyện" [ref=e205] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { login, resetDemo } from './demoHelpers.js';
  3   | import { demoReferenceData } from '../../src/data/demoReferenceData.js';
  4   | 
  5   | test('Tutor sidebar Income shows derived October summary, six-month values and exact eligible details', async ({ page }) => {
  6   |   await resetDemo(page);
  7   |   await login(page, 'giabao', '/tutor/dashboard');
  8   |   await expect(page.locator('#tutor-income')).toContainText('660.000đ');
  9   |   await expect(page.locator('#tutor-income')).toContainText('Tháng 10/2026');
  10  |   await page.getByRole('link', { name: 'Thu nhập', exact: true }).click();
  11  |   await expect(page).toHaveURL(/\/tutor\/income$/);
  12  |   await expect(page.getByRole('heading', { name: 'Thu nhập', exact: true })).toBeVisible();
  13  | 
  14  |   const summary = page.getByLabel('Tổng quan thu nhập tháng hiện tại');
  15  |   await expect(summary).toContainText('660.000đ');
  16  |   await expect(summary).toContainText('Tiếng Anh');
  17  |   await expect(summary).toContainText('440.000đ · 2 buổi');
  18  |   await expect(summary.locator('section').nth(1).getByText('3', { exact: true })).toBeVisible();
  19  | 
  20  |   const values = page.getByLabel('Giá trị thu nhập theo tháng').getByRole('listitem');
  21  |   await expect(values).toHaveCount(6);
  22  |   for (const [index, month, amount, tone] of [
  23  |     [0, '05/2026', '180.000đ', 'minimum'], [1, '06/2026', '360.000đ', 'normal'],
  24  |     [2, '07/2026', '400.000đ', 'normal'], [3, '08/2026', '620.000đ', 'normal'],
  25  |     [4, '09/2026', '880.000đ', 'maximum'], [5, '10/2026', '660.000đ', 'normal'],
  26  |   ]) {
  27  |     await expect(values.nth(index)).toHaveAccessibleName(new RegExp(`${month}: ${amount}`));
  28  |     await expect(values.nth(index)).toHaveAttribute('data-tone', tone);
  29  |   }
  30  | 
> 31  |   await expect(page.locator('.income-chart__point[data-tone="normal"]').first()).toHaveCSS('fill', 'rgb(255, 211, 61)');
      |                                                                                  ^ Error: expect(locator).toHaveCSS(expected) failed
  32  |   await expect(page.locator('.income-chart__point[data-tone="maximum"]')).toHaveCSS('fill', 'rgb(232, 45, 63)');
  33  |   await expect(page.locator('.income-chart__point[data-tone="minimum"]')).toHaveCSS('fill', 'rgb(40, 121, 87)');
  34  | 
  35  |   const rows = page.getByRole('table').locator('tbody tr');
  36  |   await expect(rows).toHaveCount(3);
  37  |   await expect(rows).toHaveText([
  38  |     '03/10/2026Ngọc LanTiếng Anh09:00–09:45220.000đ',
  39  |     '02/10/2026Học sinh THPTIELTS19:00–19:45220.000đ',
  40  |     '01/10/2026Nguyễn Minh AnhTiếng Anh18:00–18:45220.000đ',
  41  |   ]);
  42  | 
  43  |   await page.goto('/tutor/dashboard');
  44  |   await page.locator('#tutor-income').getByRole('link', { name: 'Xem thêm' }).click();
  45  |   await expect(page).toHaveURL(/\/tutor\/income$/);
  46  | });
  47  | 
  48  | test('Clicking a chart point switches the lesson table to that month and the same Lesson exists in timetable history', async ({ page }) => {
  49  |   await resetDemo(page);
  50  |   await login(page, 'giabao', '/tutor/income');
  51  | 
  52  |   const september = page.getByRole('button', { name: 'Xem chi tiết tháng 09/2026: 880.000đ' });
  53  |   await september.click();
  54  |   await expect(september).toHaveAttribute('aria-pressed', 'true');
  55  |   await expect(page.getByText('4 buổi · Tháng 09/2026', { exact: true })).toBeVisible();
  56  | 
  57  |   const rows = page.getByRole('table').locator('tbody tr');
  58  |   await expect(rows).toHaveCount(4);
  59  |   await expect(rows).toHaveText([
  60  |     '27/09/2026Nguyễn Minh AnhIELTS19:00–19:45220.000đ',
  61  |     '20/09/2026Nguyễn Minh AnhTiếng Anh18:00–18:45220.000đ',
  62  |     '12/09/2026Ngọc LanTiếng Anh18:00–18:45220.000đ',
  63  |     '05/09/2026Học sinh THPTIELTS19:00–19:45220.000đ',
  64  |   ]);
  65  | 
  66  |   await page.goto('/tutor/timetable');
  67  |   const previousWeek = page.getByRole('button', { name: 'Tuần trước', exact: true });
  68  |   await previousWeek.click();
  69  |   await previousWeek.click();
  70  |   await expect(page.getByRole('button', { name: /IELTS Nguyễn Minh Anh.*2026-09-27/ })).toBeVisible();
  71  | });
  72  | 
  73  | test('Income chart point supports keyboard month selection', async ({ page }) => {
  74  |   await resetDemo(page);
  75  |   await login(page, 'giabao', '/tutor/income');
  76  | 
  77  |   const august = page.getByRole('button', { name: 'Xem chi tiết tháng 08/2026: 620.000đ' });
  78  |   await august.focus();
  79  |   await page.keyboard.press('Enter');
  80  |   await expect(august).toHaveAttribute('aria-pressed', 'true');
  81  |   await expect(page.getByText('3 buổi · Tháng 08/2026', { exact: true })).toBeVisible();
  82  |   await expect(page.getByRole('table').locator('tbody tr')).toHaveCount(3);
  83  | });
  84  | 
  85  | test('Income route preserves auth redirect', async ({ page }) => {
  86  |   await resetDemo(page);
  87  |   await page.goto('/tutor/income');
  88  |   await expect(page).toHaveURL(/\/login\?redirect=/);
  89  |   await login(page, 'giabao', '/tutor/income');
  90  |   await expect(page.getByRole('heading', { name: 'Thu nhập', exact: true })).toBeVisible();
  91  | });
  92  | 
  93  | test('Income empty state has zero values with normal chart tones for an account without Lessons', async ({ page }) => {
  94  |   await resetDemo(page, { user: { ...demoReferenceData.accounts[1], id: 'income-isolation-tutor' } });
  95  |   await page.goto('/tutor/income');
  96  |   await expect(page.getByRole('heading', { name: 'Chưa có thu nhập trong tháng này' })).toBeVisible();
  97  |   await expect(page.getByRole('table')).toHaveCount(0);
  98  |   const values = page.getByLabel('Giá trị thu nhập theo tháng').getByRole('listitem');
  99  |   await expect(values).toHaveCount(6);
  100 |   for (const value of await values.all()) {
  101 |     await expect(value).toContainText('0đ');
  102 |     await expect(value).toHaveAttribute('data-tone', 'normal');
  103 |   }
  104 | });
  105 | 
  106 | test('Income tied extrema receive their semantic state', async ({ page }) => {
  107 |   const lessons = demoReferenceData.historicalLessons.map((lesson) => ({ ...lesson, sessionFee: 0 }));
  108 |   lessons.find((lesson) => lesson.date.startsWith('2026-05')).sessionFee = 100000;
  109 |   lessons.find((lesson) => lesson.date.startsWith('2026-06')).sessionFee = 100000;
  110 |   await resetDemo(page, { lessons });
  111 |   await login(page, 'giabao', '/tutor/income');
  112 |   const values = page.getByLabel('Giá trị thu nhập theo tháng').getByRole('listitem');
  113 |   await expect(values.nth(0)).toHaveAttribute('data-tone', 'maximum');
  114 |   await expect(values.nth(1)).toHaveAttribute('data-tone', 'maximum');
  115 |   for (const index of [2, 3, 4, 5]) await expect(values.nth(index)).toHaveAttribute('data-tone', 'minimum');
  116 | });
  117 | 
  118 | test('INCOME-001 accepting and completing a Request uses its snapshot fee in both Income and Dashboard', async ({ page }) => {
  119 |   await resetDemo(page);
  120 |   await login(page, 'giabao', '/tutor/requests/req-2');
  121 |   await page.getByRole('button', { name: 'Nhận yêu cầu', exact: true }).click();
  122 |   await page.goto('/tutor/timetable');
  123 |   await page.getByRole('button', { name: /Vật lý lớp 10.*Nguyễn Khánh Linh/ }).click();
  124 |   await page.getByRole('dialog').getByRole('button', { name: 'Đánh dấu hoàn tất' }).click();
  125 |   await page.goto('/tutor/income');
  126 |   await expect(page.getByLabel('Tổng quan thu nhập tháng hiện tại')).toContainText('860.000đ');
  127 |   await expect(page.getByRole('table')).toContainText('Nguyễn Khánh Linh');
  128 |   await page.reload();
  129 |   await expect(page.getByLabel('Tổng quan thu nhập tháng hiện tại')).toContainText('860.000đ');
  130 |   await page.goto('/tutor/dashboard');
  131 |   await expect(page.locator('#tutor-income')).toContainText('860.000đ');
```