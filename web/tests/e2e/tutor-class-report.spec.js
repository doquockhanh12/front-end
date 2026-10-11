import { test, expect } from '@playwright/test';
import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';

test('TUTOR-SAFETY suspicious class report persists once and reaches Admin with its reason', async ({ page }) => {
  const state = createDemoState(fixedTime);
  const post = state.classPosts.find(item => item.status === 'open' && item.moderationStatus === 'approved');
  const reason = 'Tin đăng yêu cầu chuyển phí giữ chỗ ngoài ứng dụng. Đề nghị kiểm tra.';
  await resetDemo(page, { state });
  await login(page, 'giabao', '/tutor/find-students');
  const card = page.locator('.tutor-find__class').filter({ hasText: `Mã #${post.id}` });
  const trigger = card.getByRole('button', { name: 'Báo cáo tin đáng ngờ', exact: true });
  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Báo cáo tin lớp đáng ngờ' });
  expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await trigger.click();
  await dialog.getByRole('button', { name: 'Gửi báo cáo demo', exact: true }).click();
  await expect(dialog.getByRole('alert')).toContainText('Vui lòng');
  await dialog.getByLabel('Lý do báo cáo *').fill(reason);
  await dialog.getByRole('button', { name: 'Gửi báo cáo demo', exact: true }).click();
  await expect(dialog).toHaveCount(0);
  await expect(page.getByRole('status').filter({ hasText: 'Đã gửi báo cáo' })).toContainText('CLASS-REPORT-');
  await expect(card.getByRole('button', { name: 'Đã gửi báo cáo', exact: true })).toBeDisabled();
  await page.reload();
  await expect(card.getByRole('button', { name: 'Đã gửi báo cáo', exact: true })).toBeDisabled();
  const after = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);
  const reports = after.issues.filter(issue => issue.relatedClassPostId === post.id && issue.reporterId === 'demo-tutor');
  expect(reports).toHaveLength(1);
  expect(reports[0].description).toContain(reason);
  await logout(page);
  await login(page, 'admin', '/admin/issues');
  await page.getByRole('searchbox', { name: 'Tìm kiếm sự cố' }).fill(reports[0].id);
  await page.getByRole('button', { name: `Xử lý sự cố ${reports[0].id}` }).click();
  await expect(page.getByRole('dialog')).toContainText(reason);
  await expect(page.getByRole('dialog')).toContainText('Trần Gia Bảo');
});

for (const width of [1440, 1024, 390]) {
  test(`TUTOR-SAFETY report dialog is usable at ${width}px`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(String(error)));
    await page.setViewportSize({ width, height: 900 });
    await resetDemo(page);
    await login(page, 'giabao', '/tutor/find-students');
    await page.getByRole('button', { name: 'Báo cáo tin đáng ngờ', exact: true }).first().click();
    const dialog = page.getByRole('dialog', { name: 'Báo cáo tin lớp đáng ngờ' });
    const bounds = await dialog.boundingBox();
    expect(bounds.x).toBeGreaterThanOrEqual(0);
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
    const title = await dialog.getByRole('heading', { level: 2 }).boundingBox();
    const close = await dialog.getByRole('button', { name: 'Đóng báo cáo' }).boundingBox();
    expect(title.x + title.width).toBeLessThanOrEqual(close.x);
    await expect(dialog.getByLabel('Lý do báo cáo *')).toBeVisible();
    await expect(dialog.getByRole('button', { name: 'Gửi báo cáo demo' })).toBeVisible();
    await page.screenshot({ path: `playwright-report/completion-tutor/report/${width}-report-dialog.png` });
    await page.keyboard.press('Escape');
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    expect(errors).toEqual([]);
  });
}
