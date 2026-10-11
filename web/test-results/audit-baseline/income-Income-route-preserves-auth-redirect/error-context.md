# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: income.spec.js >> Income route preserves auth redirect
- Location: tests\e2e\income.spec.js:85:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5180/tutor/income
Call log:
  - navigating to "http://127.0.0.1:5180/tutor/income", waiting until "load"

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
  31  |   await expect(page.locator('.income-chart__point[data-tone="normal"]').first()).toHaveCSS('fill', 'rgb(255, 211, 61)');
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
> 87  |   await page.goto('/tutor/income');
      |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5180/tutor/income
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
  132 | });
  133 | 
```