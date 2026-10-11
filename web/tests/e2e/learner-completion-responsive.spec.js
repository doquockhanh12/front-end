import { test, expect } from '@playwright/test';
import { resetDemo, login } from './demoHelpers.js';
import { mkdirSync } from 'node:fs';

for (const width of [1440, 1024, 390]) test(`Learner completion real browser connected routes and modal ${width}px`, async ({ page }) => {
  test.setTimeout(180000);
  await page.setViewportSize({ width, height: 900 });
  await resetDemo(page); await login(page, 'minhanh', '/learner/dashboard');
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error' && /React|render|DOM|hook|Maximum update/.test(message.text())) errors.push(message.text()); });
  const folder = 'playwright-report/completion-learner/screens'; mkdirSync(folder, { recursive: true });
  for (const route of ['/learner/search', '/learner/dashboard', '/tutors/quoc-bao', '/requests', '/requests/new', '/learner/post-class', '/learner/my-classes', '/learner/schedule', '/learner/wallet', '/messages', '/appeals']) {
    await page.goto(route); await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('body')).not.toBeEmpty();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), route).toBe(true);
    await page.screenshot({ path: `${folder}/${width}-${route.replaceAll('/', '_')}.png`, fullPage: true });
    if (route === '/learner/schedule') {
      await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
      const dialog = page.getByRole('dialog'); const box = await dialog.boundingBox();
      expect(box.x).toBeGreaterThanOrEqual(0); expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
      await dialog.evaluate(node => node.scrollTo(0, node.scrollHeight));
      await page.screenshot({ path: `${folder}/${width}-lesson-modal-bottom.png` });
      await page.keyboard.press('Escape'); await expect(dialog).toHaveCount(0);
    }
  }
  expect(errors).toEqual([]);
});
