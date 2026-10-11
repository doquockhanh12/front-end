# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-tutor-interface.spec.js >> Learner and Tutor screens avoid page overflow at mobile width
- Location: tests\e2e\learner-tutor-interface.spec.js:26:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5180/login?redirect=%2Flearner%2Fsearch
Call log:
  - navigating to "http://127.0.0.1:5180/login?redirect=%2Flearner%2Fsearch", waiting until "load"

```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { resetDemo, logout } from './demoHelpers.js';
  3  | 
  4  | test.beforeEach(async ({ page }) => resetDemo(page));
  5  | 
  6  | const appUrl = process.env.E2E_BASE_URL || 'http://127.0.0.1:5173';
  7  | 
  8  | async function signIn(page, username, destination) {
> 9  |   await page.goto(`${appUrl}/login?redirect=${encodeURIComponent(destination)}`);
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5180/login?redirect=%2Flearner%2Fsearch
  10 |   await page.getByLabel('Username / Email / Số điện thoại *').fill(username);
  11 |   await page.getByLabel('Mật khẩu *').fill('demo1234');
  12 |   await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
  13 |   await expect(page).toHaveURL(`${appUrl}${destination}`);
  14 | }
  15 | 
  16 | async function expectNoPageOverflow(page, route) {
  17 |   await page.goto(`${appUrl}${route}`);
  18 |   await expect(page.locator('main')).toBeVisible();
  19 |   const dimensions = await page.evaluate(() => ({
  20 |     viewport: document.documentElement.clientWidth,
  21 |     content: document.documentElement.scrollWidth,
  22 |   }));
  23 |   expect(dimensions.content, `horizontal page overflow at ${route}`).toBeLessThanOrEqual(dimensions.viewport);
  24 | }
  25 | 
  26 | test('Learner and Tutor screens avoid page overflow at mobile width', async ({ page }) => {
  27 |   await page.setViewportSize({ width: 390, height: 844 });
  28 |   await signIn(page, 'minhanh', '/learner/search');
  29 | 
  30 |   for (const route of [
  31 |     '/learner/search',
  32 |     '/tutors/mai-anh',
  33 |     '/requests',
  34 |     '/requests/demo-02',
  35 |     '/learner/dashboard',
  36 |     '/learner/map',
  37 |   ]) {
  38 |     await expectNoPageOverflow(page, route);
  39 |   }
  40 | 
  41 |   await logout(page);
  42 |   await signIn(page, 'giabao', '/tutor/dashboard');
  43 | 
  44 |   for (const route of [
  45 |     '/tutor/dashboard',
  46 |     '/tutor/profile',
  47 |     '/tutor/timetable',
  48 |     '/tutor/requests',
  49 |     '/tutor/requests/req-3',
  50 |     '/tutor/find-students',
  51 |     '/tutor/map',
  52 |   ]) {
  53 |     await expectNoPageOverflow(page, route);
  54 |   }
  55 | 
  56 |   await page.goto(`${appUrl}/tutor/timetable`);
  57 |   await page.locator('.weekly-timeline-block.lesson button').first().click();
  58 |   await expect(page.getByRole('dialog', { name: 'Chi tiết lớp học' })).toBeVisible();
  59 |   await expect(page.getByLabel('Ghi chú cho lớp học')).toBeVisible();
  60 | });
  61 | 
  62 | test('Learner weekly calendar does not offer past dates as selectable sessions', async ({ page }) => {
  63 |   await page.setViewportSize({ width: 1280, height: 900 });
  64 |   await signIn(page, 'minhanh', '/learner/search');
  65 |   await page.goto(`${appUrl}/tutors/mai-anh`);
  66 |   const sessionButtons = page.locator('.profile-session-table button');
  67 |   const dates = await sessionButtons.evaluateAll((buttons) => buttons.map((button) => {
  68 |     const match = button.getAttribute('aria-label')?.match(/(\d{2})\/(\d{2}) ·/);
  69 |     return match ? `${match[2]}-${match[1]}` : null;
  70 |   }).filter(Boolean));
  71 | 
  72 |   const today = await page.evaluate(() => {
  73 |     const now = new Date();
  74 |     now.setHours(0, 0, 0, 0);
  75 |     return now.getTime();
  76 |   });
  77 | 
  78 |   expect(dates.length).toBeGreaterThan(0);
  79 |   for (const date of dates) {
  80 |     const [month, day] = date.split('-').map(Number);
  81 |     const candidate = await page.evaluate(({ month, day }) => {
  82 |       const now = new Date();
  83 |       return new Date(now.getFullYear(), month - 1, day).getTime();
  84 |     }, { month, day });
  85 |     expect(candidate, `past session date ${date} remains selectable`).toBeGreaterThanOrEqual(today);
  86 |   }
  87 | });
  88 | 
```