import { test, expect } from '@playwright/test';
import { resetDemo, login } from './demoHelpers.js';
test('UI-COMP-A13 mobile appeal empty state is readable without scrolling a blank table', async ({ page }) => {
  await resetDemo(page);
  await page.setViewportSize({ width: 390, height: 900 });
  await login(page, 'admin', '/admin/appeals');
  const message = page.getByText('Chưa có kháng cáo. Hồ sơ người dùng gửi sẽ xuất hiện tại đây.', { exact: true });
  await expect(message).toBeVisible();
  const bounds = await message.boundingBox();
  expect(bounds.x).toBeGreaterThanOrEqual(0);
  expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
});
test('MASTER Admin notification opens a private actionable message', async ({ page }) => {
  await resetDemo(page);
  await login(page, 'admin', '/admin/dashboard');
  await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  await expect(page.getByRole('region', { name: 'Thông báo của bạn' })).toBeVisible();
});

test('UI-COMP-A14 warning feedback uses saved suspension threshold', async ({ page }) => {
  await resetDemo(page);
  await login(page, 'admin', '/admin/settings');
  await page.locator('main input[type=number]').last().fill('1');
  await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  await page.goto('/admin/issues');
  await page.locator('tbody tr').filter({ hasText: 'ISSUE-104' }).getByRole('button', { name: /Xử lý sự cố/ }).click();
  await page.locator('#warning-reason-input').fill('Cảnh cáo căn cứ đối chiếu sự cố và cấu hình được quản trị viên phê duyệt.');
  await page.getByRole('button', { name: /Gửi cảnh cáo & Giải quyết sự cố/ }).click();
  await expect(page.getByRole('status')).toContainText('TỰ ĐỘNG BỊ KHÓA');
  await expect(page.getByRole('status')).toContainText('vượt quá 1 lần');
});

for (const [username, route] of [['admin', '/admin/dashboard'], ['giabao', '/tutor/dashboard'], ['minhanh', '/learner/search']]) {
  test(`UI-COMP-S01 ${username} mobile notification panel stays inside viewport`, async ({ page }) => {
    await resetDemo(page);
    await page.setViewportSize({ width: 390, height: 900 });
    await login(page, username, route);
    if (username === 'minhanh') await page.getByRole('button', { name: 'Mở menu' }).click();
    await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
    const panel = page.getByRole('region', { name: 'Thông báo của bạn' });
    await expect(panel).toBeVisible();
    const bounds = await panel.boundingBox();
    expect(bounds.x).toBeGreaterThanOrEqual(0);
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
  });
}
