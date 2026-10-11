import { test, expect } from '@playwright/test';
import { resetDemo, login } from './demoHelpers.js';
test('UI-COMP-S02 mobile chat launcher does not cover the post-class primary action', async ({ page }) => {
  await resetDemo(page);
  await page.setViewportSize({ width: 390, height: 900 });
  await login(page, 'minhanh', '/learner/post-class');
  const primary = page.getByRole('button', { name: /Tiếp tục/ });
  await expect(primary).toBeVisible();
  const usable = await primary.evaluate(button => {
    const r = button.getBoundingClientRect();
    return [.15, .5, .85, .97].every(fraction => [.15, .5, .85].every(vertical => {
      const hit = document.elementFromPoint(r.left + r.width * fraction, r.top + r.height * vertical);
      return hit === button || button.contains(hit);
    }));
  });
  expect(usable, 'Every section of the primary action should accept its own clicks, including the right edge').toBe(true);
});

test('UI-COMP-S02 mobile chat launcher avoids controls after scrolling and changing form step', async ({ page }, testInfo) => {
  await resetDemo(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await login(page, 'minhanh', '/learner/post-class');
  for (const step of [1, 2]) {
    const primary = page.getByRole('button', { name: /Tiếp tục/ });
    await primary.scrollIntoViewIfNeeded();
    await expect.poll(() => primary.evaluate(button => {
      const r = button.getBoundingClientRect();
      return [.15, .5, .85, .97].every(horizontal => [.15, .5, .85].every(vertical => {
        const hit = document.elementFromPoint(r.left + r.width * horizontal, r.top + r.height * vertical);
        return hit === button || button.contains(hit);
      }));
    })).toBe(true);
    await page.screenshot({ path: testInfo.outputPath(`post-step-${step}-launcher.png`) });
    await primary.click();
  }
  await expect(page.getByRole('heading', { name: 'Bước 3: Ngân sách & Mục tiêu học tập', exact: true })).toBeVisible();
});

test('UI-COMP-S02 mobile chat launcher does not obstruct footer navigation', async ({ page }) => {
  await resetDemo(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await login(page, 'minhanh', '/learner/post-class');
  const link = page.getByRole('contentinfo').getByRole('link', { name: 'Không gian gia sư', exact: true });
  await link.scrollIntoViewIfNeeded();
  await expect.poll(() => link.evaluate(element => {
    const r = element.getBoundingClientRect();
    return [.15, .5, .85].every(horizontal => {
      const hit = document.elementFromPoint(r.left + r.width * horizontal, r.top + r.height / 2);
      return hit === element || element.contains(hit);
    });
  })).toBe(true);
});

for (const height of [844, 900]) {
  test(`UI-COMP-S02 chat launcher leaves Tutor wallet explanation readable at 390x${height}`, async ({ page }, testInfo) => {
    await resetDemo(page);
    await page.setViewportSize({ width: 390, height });
    await login(page, 'giabao', '/tutor/wallet');
    await page.evaluate(() => document.fonts.ready);
    const explanation = page.getByText(/^Bao gồm thù lao các buổi dạy đã hoàn tất/);
    const launcher = page.getByRole('button', { name: 'Mở cửa sổ trò chuyện' });
    await expect(explanation).toBeVisible();
    await expect.poll(async () => {
      const text = await explanation.boundingBox(); const button = await launcher.boundingBox();
      return text.x < button.x + button.width && text.x + text.width > button.x
        && text.y < button.y + button.height && text.y + text.height > button.y;
    }, { message: 'Chat launcher must not cover the visible wallet explanation' }).toBe(false);
    const feeBadge = page.getByText('Thù lao đã ghi nhận sau phí nền tảng TutorNearMe', { exact: true });
    await expect.poll(async () => {
      const badge = await feeBadge.boundingBox(); const button = await launcher.boundingBox();
      return badge.x < button.x + button.width && badge.x + badge.width > button.x
        && badge.y < button.y + button.height && badge.y + badge.height > button.y;
    }, { message: 'Chat launcher must leave the entire fee explanation badge unobscured' }).toBe(false);
    await page.screenshot({ path: testInfo.outputPath('wallet-launcher.png') });
  });
}
