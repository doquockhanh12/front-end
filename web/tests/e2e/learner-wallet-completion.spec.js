import { test, expect } from '@playwright/test';
import { resetDemo, login } from './demoHelpers.js';
import { mkdirSync } from 'node:fs';

test('UI-COMP-L15 wallet modal traps focus and restores trigger after Escape', async ({ page }) => {
  await resetDemo(page); await login(page, 'minhanh', '/learner/wallet');
  const trigger = page.getByRole('button', { name: 'Nạp tiền VietQR Napas 247', exact: true });
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await expect.poll(() => dialog.evaluate(node => node.contains(document.activeElement))).toBe(true);
  await page.keyboard.press('Escape'); await expect(dialog).toHaveCount(0); await expect(trigger).toBeFocused();
});

test('Learner local QR demonstration credits chosen amount once after three seconds without banking request', async ({ page }) => {
  const bankingRequests = [];
  page.on('request', request => { if (/vietqr\.io|napas/i.test(request.url())) bankingRequests.push(request.url()); });
  await resetDemo(page); await login(page, 'minhanh', '/learner/wallet');
  const balance = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).wallets['demo-learner'].availableBalance);
  await page.getByRole('button', { name: 'Nạp tiền VietQR Napas 247', exact: true }).click();
  await page.getByLabel('Số tiền nạp').fill('200000');
  await expect(page.getByRole('dialog')).toContainText('Không chuyển tiền thật');
  await page.clock.fastForward(3000);
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.getByRole('status')).toContainText('200.000');
  await page.clock.fastForward(6000);
  const state = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  expect(state.wallets['demo-learner'].availableBalance).toBe(balance + 200000);
  expect(bankingRequests).toEqual([]);
});

test('Learner QR demo rejects invalid amount and cancellation prevents a deposit', async ({ page }) => {
  await resetDemo(page); await login(page, 'minhanh', '/learner/wallet');
  const balance = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).wallets['demo-learner'].availableBalance);
  await page.getByRole('button', { name: 'Nạp tiền VietQR Napas 247', exact: true }).click();
  await page.getByLabel('Số tiền nạp').fill('-1');
  await page.clock.fastForward(4000); await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('alert')).toContainText('50.000');
  await page.getByLabel('Số tiền nạp').fill('200000'); await page.keyboard.press('Escape');
  await page.clock.fastForward(4000);
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).wallets['demo-learner'].availableBalance)).toBe(balance);
});

for (const width of [1440, 1024, 390]) test(`Learner local QR modal remains readable and usable at ${width}px`, async ({ page }) => {
  await page.setViewportSize({ width, height: 900 });
  await resetDemo(page); await login(page, 'minhanh', '/learner/wallet');
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.getByRole('button', { name: 'Nạp tiền VietQR Napas 247', exact: true }).click();
  const dialog = page.getByRole('dialog');
  const box = await dialog.boundingBox();
  expect(box.x).toBeGreaterThanOrEqual(0); expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
  expect(box.y).toBeGreaterThanOrEqual(0); expect(box.y + box.height).toBeLessThanOrEqual(901);
  const title = await dialog.getByRole('heading', { level: 2 }).boundingBox();
  const close = await dialog.getByRole('button', { name: 'Đóng cửa sổ' }).boundingBox();
  expect(title.x + title.width).toBeLessThanOrEqual(close.x);
  expect(await dialog.evaluate(node => node.scrollWidth <= node.clientWidth + 1)).toBe(true);
  const folder = 'playwright-report/completion-learner/screens'; mkdirSync(folder, { recursive: true });
  await page.screenshot({ path: `${folder}/${width}-qr-modal-top.png` });
  await dialog.getByRole('button', { name: 'Mô phỏng Chuyển khoản Thành công' }).scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${folder}/${width}-qr-modal-bottom.png` });
  await page.keyboard.press('Escape'); await expect(dialog).toHaveCount(0);
  expect(errors).toEqual([]);
});
