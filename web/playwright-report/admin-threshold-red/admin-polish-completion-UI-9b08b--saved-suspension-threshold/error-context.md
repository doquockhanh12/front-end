# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-polish-completion.spec.js >> UI-COMP-A14 warning feedback uses saved suspension threshold
- Location: tests\e2e\admin-polish-completion.spec.js:20:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('status')
Expected substring: "TỰ ĐỘNG BỊ KHÓA"
Received string:    "Đã gửi cảnh cáo tranh chấp vi phạm tới Trần Gia Bảo (2/3 cảnh cáo). Sự cố ISSUE-104 đã giải quyết xong.✕"
Timeout: 5000ms

Call log:
  - Expect "toContainText" getByRole('status') with timeout 5000ms
  - waiting for getByRole('status')
    13 × locator resolved to <div role="status" class="admin-feedback-banner admin-feedback-banner--warning">…</div>
       - unexpected value "Đã gửi cảnh cáo tranh chấp vi phạm tới Trần Gia Bảo (2/3 cảnh cáo). Sự cố ISSUE-104 đã giải quyết xong.✕"

```

```yaml
- status:
  - text: Đã gửi cảnh cáo tranh chấp vi phạm tới Trần Gia Bảo (2/3 cảnh cáo). Sự cố ISSUE-104 đã giải quyết xong.
  - button "Đóng thông báo": ✕
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
> 29 |   await expect(page.getByRole('status')).toContainText('TỰ ĐỘNG BỊ KHÓA');
     |                                          ^ Error: expect(locator).toContainText(expected) failed
  30 |   await expect(page.getByRole('status')).toContainText('vượt quá 1 lần');
  31 | });
  32 | 
```