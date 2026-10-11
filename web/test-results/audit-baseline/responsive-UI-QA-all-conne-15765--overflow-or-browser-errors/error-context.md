# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.js >> UI-QA all connected screens at 1440px without overflow or browser errors
- Location: tests\e2e\responsive.spec.js:17:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('main')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('main') with timeout 5000ms
  - waiting for locator('main')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { login, logout, resetDemo } from './demoHelpers.js';
  3  | 
  4  | test('UI-QA-001 mobile Tutor request text retains readable width beside status', async ({ page }, testInfo) => {
  5  |   await resetDemo(page);
  6  |   await page.setViewportSize({ width: 390, height: 900 });
  7  |   await login(page, 'giabao', '/tutor/requests');
  8  |   const title = page.getByText('Tiếng Anh · Nguyễn Minh Anh', { exact: true });
  9  |   await expect(title).toBeVisible();
  10 |   const bounds = await title.boundingBox();
  11 |   expect(bounds.width, 'status must not compress the subject/learner column to a few characters').toBeGreaterThanOrEqual(150);
  12 |   await expect(page.locator('.flow-row').first().getByText('Đã nhận', { exact: true })).toBeVisible();
  13 |   await page.screenshot({ path: testInfo.outputPath('mobile-request-rows.png'), fullPage: true });
  14 | });
  15 | 
  16 | for (const width of [1440, 1024, 390]) {
  17 |   test(`UI-QA all connected screens at ${width}px without overflow or browser errors`, async ({ page }, testInfo) => {
  18 |     test.setTimeout(120_000);
  19 |     await resetDemo(page);
  20 |     await page.setViewportSize({ width, height: 900 });
  21 |     const errors = []; const resources = [];
  22 |     page.on('pageerror', (error) => errors.push(error.message));
  23 |     page.on('console', (message) => {
  24 |       if (message.type() !== 'error') return;
  25 |       if (/Failed to load resource/.test(message.text()) && /images\.unsplash\.com/.test(message.location().url)) resources.push(message.text());
  26 |       else errors.push(message.text());
  27 |     });
  28 |     const check = async (route, expected = route) => {
  29 |       await page.goto(route);
> 30 |       await expect(page.locator('main')).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
  31 |       await expect(page).toHaveURL((url) => url.pathname === expected.split('?')[0]);
  32 |       await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth), { message: `page overflow: ${route} at ${width}` }).toBeLessThanOrEqual(1);
  33 |       await page.screenshot({ path: testInfo.outputPath(route.replace(/[^a-z0-9]+/gi, '-') + '.png'), fullPage: true });
  34 |     };
  35 |     for (const route of ['/', '/learner', '/tutor', '/login', '/register', '/tutor/register']) await check(route);
  36 |     await page.goto('/login');
  37 |     await page.getByRole('button', { name: 'Tiếp tục với số điện thoại' }).click();
  38 |     const phone = page.getByRole('dialog');
  39 |     await expect(phone).toBeVisible();
  40 |     const bounds = await phone.boundingBox();
  41 |     expect(bounds.x).toBeGreaterThanOrEqual(0);
  42 |     expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
  43 |     await page.screenshot({ path: testInfo.outputPath('phone-modal.png') });
  44 |     await page.keyboard.press('Escape');
  45 |     await login(page, 'minhanh', '/learner/search');
  46 |     for (const route of ['/learner/search','/learner/dashboard','/tutors/quoc-bao','/requests','/requests/demo-02']) await check(route);
  47 |     await check('/requests/new?tutor=quoc-bao', '/tutors/quoc-bao');
  48 |     await logout(page);
  49 |     await login(page, 'giabao', '/tutor/dashboard');
  50 |     for (const route of ['/tutor/dashboard','/tutor/income','/tutor/profile','/tutor/timetable','/tutor/find-students','/tutor/requests','/tutor/requests/req-1']) await check(route);
  51 |     await check('/tutor/availability', '/tutor/timetable');
  52 |     await check('/tutor/lessons', '/tutor/timetable');
  53 |     await page.getByRole('button', { name: /Toán.*N.M.A/ }).click();
  54 |     const lesson = page.getByRole('dialog', { name: 'Chi tiết lớp học' });
  55 |     await expect(lesson).toBeVisible();
  56 |     const lessonBounds = await lesson.boundingBox();
  57 |     expect(lessonBounds.x).toBeGreaterThanOrEqual(0);
  58 |     expect(lessonBounds.x + lessonBounds.width).toBeLessThanOrEqual(width);
  59 |     expect(lessonBounds.y + lessonBounds.height).toBeLessThanOrEqual(900);
  60 |     await page.screenshot({ path: testInfo.outputPath('lesson-modal.png') });
  61 |     await page.keyboard.press('Escape');
  62 |     await testInfo.attach('external-image-errors', { body: JSON.stringify(resources), contentType: 'application/json' });
  63 |     expect(errors, 'uncaught errors or React/DOM console errors').toEqual([]);
  64 |   });
  65 | }
  66 | 
```