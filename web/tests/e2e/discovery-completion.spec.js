import { test, expect } from '@playwright/test';
import { resetDemo, login } from './demoHelpers.js';

test('Split discovery pages cards and selects off-page pins without moving map positions', async ({ page }) => {
  await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  await expect(page.locator('.tutor-results-grid .tutor-card')).toHaveCount(6);
  await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  const cards = page.locator('.learner-split-list .tutor-card');
  const pagination = page.getByRole('navigation', { name: 'Phân trang gia sư' });
  await expect(cards).toHaveCount(3);
  await expect(pagination).toContainText('1–3 / 6 gia sư');
  await expect(pagination.getByRole('button', { name: 'Trang trước' })).toBeDisabled();
  const visibleNames = await cards.locator('h3').allTextContents();
  const pins = page.locator('.learner-split-map .tutor-map__pin');
  const offPagePin = await pins.evaluateAll((items, names) => {
    const pin = items.find(item => !names.some(name => item.getAttribute('aria-label').startsWith(`Chọn ${name},`)));
    return { label: pin.getAttribute('aria-label'), position: pin.getAttribute('transform') };
  }, visibleNames);
  await page.getByRole('button', { name: offPagePin.label, exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(pagination).toContainText('4–6 / 6 gia sư');
  await expect(page.locator('.learner-split-list .tutor-card.is-highlighted')).toHaveCount(1);
  await expect(pagination.getByRole('button', { name: 'Trang sau' })).toBeDisabled();
  await cards.first().hover();
  await expect(page.locator('.learner-split-map .tutor-map__pin[aria-pressed="true"]')).toHaveCount(1);
  await page.getByLabel('Sắp xếp', { exact: true }).selectOption('price');
  await expect(pagination).toContainText('1–3 / 6 gia sư');
  await expect(page.getByRole('button', { name: offPagePin.label, exact: true })).toHaveAttribute('transform', offPagePin.position);
  await pagination.getByRole('button', { name: 'Trang sau' }).click();
  await page.locator('#tutor-search').fill('Trần Gia Bảo');
  await expect(cards).toHaveCount(1);
  await expect(pagination).toContainText('1–1 / 1 gia sư');
  await expect(page.locator('.learner-results__toolbar')).toContainText('1 gia sư phù hợp');
  await page.locator('#tutor-search').fill('no-tutor-matches');
  await expect(page.getByText('Chưa tìm thấy gia sư phù hợp', { exact: true })).toBeVisible();
  await expect(pagination).toHaveCount(0);
});

test('Tutor class radius is explicitly unavailable without approved distance data', async ({ page }) => {
  await resetDemo(page); await login(page, 'giabao', '/tutor/find-students');
  await expect(page.getByText('Chưa có dữ liệu khoảng cách cho tin lớp trong bản demo.', { exact: true })).toBeVisible();
});

for (const width of [1440, 1024, 390]) {
  test(`Split discovery pagination fits ${width}px and preserves profile targets`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await resetDemo(page); await login(page, 'minhanh', '/learner/search');
    await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
    const pagination = page.getByRole('navigation', { name: 'Phân trang gia sư' });
    await pagination.scrollIntoViewIfNeeded();
    const bounds = await pagination.boundingBox();
    expect(bounds.x).toBeGreaterThanOrEqual(0); expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
    for (const link of await page.locator('.learner-split-list .tutor-card__bottom a').all()) {
      const linkBox = await link.boundingBox(); const cardBox = await link.locator('xpath=ancestor::article').boundingBox();
      expect(linkBox.x + linkBox.width).toBeLessThanOrEqual(cardBox.x + cardBox.width + 1);
    }
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `../../artifacts/discovery-completion/split-${width}.png`, fullPage: true });
  });
}
