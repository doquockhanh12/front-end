# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: config-completion.spec.js >> Canonical Tutor proposal does not claim Top-Rated with unknown punctuality
- Location: tests\e2e\config-completion.spec.js:32:1

# Error details

```
Error: expect(locator).not.toContainText(expected) failed

Locator: locator('.myclass-proposal-card').filter({ hasText: 'Trần Gia Bảo' }).first()
Expected substring: not "Top-Rated"
Received string: "GBTrần Gia Bảo✓ Tích xanhTop-RatedĐH Ngoại thương 4.9· Đúng giờ: Chưa có dữ liệuĐề xuất học phí220.000 đ / buổiThực nhận: 198.000 đChọn gia sư này Nhắn tin"
Timeout: 5000ms

Call log:
  - Expect "not toContainText" locator('.myclass-proposal-card').filter({ hasText: 'Trần Gia Bảo' }).first() with timeout 5000ms
  - waiting for locator('.myclass-proposal-card').filter({ hasText: 'Trần Gia Bảo' }).first()
    13 × locator resolved to <div class="myclass-proposal-card ">…</div>
       - unexpected value "GBTrần Gia Bảo✓ Tích xanhTop-RatedĐH Ngoại thương 4.9· Đúng giờ: Chưa có dữ liệuĐề xuất học phí220.000 đ / buổiThực nhận: 198.000 đChọn gia sư này Nhắn tin"

```

```yaml
- img "Ảnh đại diện của Trần Gia Bảo"
- strong: Trần Gia Bảo
- text: "✓ Tích xanh Top-Rated ĐH Ngoại thương 4.9 · Đúng giờ: Chưa có dữ liệu Đề xuất học phí"
- strong: 220.000 đ / buổi
- text: "Thực nhận: 198.000 đ"
- button "Chọn gia sư này"
- button "Nhắn tin"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { createDemoState } from '../../src/features/domain/demoDomain.js';
  3  | import { resetDemo } from './demoHelpers.js';
  4  | for (const width of [1440, 390]) test(`Tutor registration uses active Admin subject/duration configuration at ${width}px`, async ({ page }) => {
  5  |   const state = createDemoState(new Date('2026-10-05T06:00:00+07:00'));
  6  |   state.subjects = state.subjects.map(row => row.name === 'Tiếng Anh' ? { ...row, isActive: false } : row);
  7  |   state.subjects.push({ id: 'test-subject', name: 'Kỹ năng tư duy', isActive: true });
  8  |   state.systemSettings = { ...state.systemSettings, sessionDurations: [90], defaultSessionDuration: 90 };
  9  |   await resetDemo(page, { state }); await page.setViewportSize({ width, height: 900 });
  10 |   await page.goto('/tutor/register?redirect=%2Ftutor%2Fprofile');
  11 |   await expect(page.getByRole('checkbox', { name: 'Tiếng Anh', exact: true })).toHaveCount(0);
  12 |   await expect(page.getByRole('checkbox', { name: 'Kỹ năng tư duy', exact: true })).toBeVisible();
  13 |   await expect(page.getByRole('checkbox', { name: 'SAT', exact: true })).toBeVisible();
  14 |   await expect(page.getByLabel('Thời lượng buổi học', { exact: true })).toHaveValue('90');
  15 |   await expect(page.getByLabel('Thời lượng buổi học', { exact: true }).locator('option')).toHaveCount(1);
  16 |   await expect(page.locator('.auth-form__foot').getByRole('link', { name: 'Đăng nhập', exact: true })).toHaveAttribute('href', /redirect=%2Ftutor%2Fprofile/);
  17 |   expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  18 |   await page.screenshot({ path: `test-results/config-completion/registration-${width}.png`, fullPage: true });
  19 | });
  20 | test('Admin review moderation records actor and target in persisted audit log', async ({ page }) => {
  21 |   await resetDemo(page);
  22 |   await page.goto('/login?redirect=%2Fadmin%2Freviews');
  23 |   await page.getByLabel('Username / Email / Số điện thoại *').fill('admin');
  24 |   await page.getByLabel('Mật khẩu *', { exact: true }).fill('demo1234');
  25 |   await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
  26 |   await expect(page).toHaveURL(/admin\/reviews$/);
  27 |   const button = page.getByRole('button', { name: /^Ẩn đánh giá / }).first();
  28 |   const label = await button.getAttribute('aria-label');
  29 |   await button.click();
  30 |   await expect.poll(async () => page.evaluate(target => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).auditLogs.some(log => log.actorId === 'demo-admin' && log.targetId === target && log.action === 'HIDE_REVIEW'), label.replace('Ẩn đánh giá ', ''))).toBe(true);
  31 | });
  32 | test('Canonical Tutor proposal does not claim Top-Rated with unknown punctuality', async ({ page }) => {
  33 |   await resetDemo(page);
  34 |   await page.goto('/login?redirect=%2Flearner%2Fmy-classes');
  35 |   await page.getByLabel('Username / Email / Số điện thoại *').fill('minhanh');
  36 |   await page.getByLabel('Mật khẩu *', { exact: true }).fill('demo1234');
  37 |   await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
  38 |   await expect(page).toHaveURL(/learner\/my-classes$/);
  39 |   const card = page.locator('.myclass-proposal-card').filter({ hasText: 'Trần Gia Bảo' }).first();
  40 |   await expect(card).toBeVisible();
  41 |   await expect(card).toContainText('Chưa có dữ liệu');
> 42 |   await expect(card).not.toContainText('Top-Rated');
     |                          ^ Error: expect(locator).not.toContainText(expected) failed
  43 | });
  44 | 
```