import { test, expect } from '@playwright/test';
import { resetDemo, login, logout } from './demoHelpers.js';

test.beforeEach(async ({ page }) => { await resetDemo(page); });

for (const tab of ['Lệnh rút tiền ngân hàng', 'Két Ký quỹ Escrow', 'Sổ cái Dòng tiền']) {
  test(`UI-COMP-A01 Finance search filters ${tab}`, async ({ page }) => {
    await login(page, 'admin', '/admin/finance');
    await page.getByRole('button', { name: tab, exact: false }).click();
    await page.getByPlaceholder('Tìm kiếm tài khoản, mã lệnh...').fill('NO_MATCH_COMPLETION_AUDIT');
    await expect(page.locator('tbody tr').filter({ hasText: /Trần Gia Bảo|escrow-001|demo-learner|demo-tutor/ })).toHaveCount(0);
    await expect(page.locator('tbody')).toContainText(/Không|Chưa/);
  });
}

test('UI-COMP-A02 Finance platform revenue is derived without invented fixed money', async ({ page }) => {
  await login(page, 'admin', '/admin/finance');
  const state = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  const expected = state.escrowTransactions.filter(e => e.status === 'disbursed').reduce((total, e) => total + Math.round(e.amount * (e.platformFeePercent ?? 10) / 100), 0);
  const card = page.locator('.admin-stat-card').filter({ hasText: 'Doanh thu phí sàn tích lũy' });
  await expect(card).toBeVisible();
  await expect.poll(async () => Number((await card.innerText()).replace(/\D/g, ''))).toBe(expected);
});

for (const [route, open, label] of [
  ['/admin/subjects', 'Thêm môn học mới', 'Tên môn học *'],
  ['/admin/locations', 'Thêm khu vực mới', 'Tên quận / huyện *'],
  ['/admin/settings', null, 'Phí nền tảng tiêu chuẩn (%)'],
]) {
  test(`UI-COMP-A03 ${route} form control is connected to its visible label`, async ({ page }) => {
    await login(page, 'admin', route);
    if (open) await page.getByRole('button', { name: open }).click();
    await expect(page.getByLabel(label, { exact: true })).toBeVisible();
  });
}

test('UI-COMP-A04 Settings renders a readable rating rule rather than raw markup', async ({ page }) => {
  await login(page, 'admin', '/admin/settings');
  await expect(page.locator('main')).not.toContainText('\\ge');
  await expect(page.locator('main')).not.toContainText('\\star');
  await expect(page.locator('main')).toContainText('4.9');
});

test('UI-COMP-A05 Settings rejects invalid operational time instead of persisting it', async ({ page }) => {
  await login(page, 'admin', '/admin/settings');
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).systemSettings.maxStartHour);
  await page.locator('main input[type=text]').fill('not-a-time');
  await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).systemSettings.maxStartHour);
  expect(after).toBe(before);
  await expect(page.locator('main')).not.toContainText('Đã lưu cấu hình tham số');
});

test('UI-COMP-A06 Admin rejected class is no longer discoverable on Tutor board', async ({ page }) => {
  await login(page, 'giabao', '/tutor/find-students');
  await expect(page.locator('.tutor-find__class').filter({ hasText: 'Nguyễn Minh Anh' })).toBeVisible();
  await logout(page);
  await login(page, 'admin', '/admin/classes');
  const post = page.locator('tbody tr').filter({ hasText: 'Nguyễn Minh Anh' });
  await post.getByTitle('Từ chối tin đăng').click();
  await expect(post).toContainText('Đã từ chối');
  await logout(page);
  await login(page, 'giabao', '/tutor/find-students');
  await expect(page.getByRole('heading', { name: 'Tìm học viên & Nhận lớp mới', exact: true })).toBeVisible();
  await expect(page.locator('.tutor-find__class').filter({ hasText: 'Nguyễn Minh Anh' })).toHaveCount(0);
});

test('UI-COMP-A07 Catalog status change creates a corresponding visible Audit entry', async ({ page }) => {
  await login(page, 'admin', '/admin/subjects');
  const row = page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) });
  await row.getByTitle('Tạm dừng áp dụng').click();
  await expect(row).toContainText('Tạm dừng');
  await page.goto('/admin/logs');
  await expect(page.locator('tbody')).toContainText('Toán');
});

test('UI-COMP-A08 inactive Admin subject is unavailable for new Learner search selections', async ({ page }) => {
  await login(page, 'minhanh', '/learner/search');
  await expect(page.getByRole('checkbox', { name: 'Toán', exact: true })).toBeVisible();
  await logout(page);
  await login(page, 'admin', '/admin/subjects');
  const row = page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) });
  await row.getByTitle('Tạm dừng áp dụng').click();
  await expect(row).toContainText('Tạm dừng');
  await logout(page);
  await login(page, 'minhanh', '/learner/search');
  await expect(page.locator('.search-checkbox-group').first()).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Toán', exact: true })).toHaveCount(0);
});

test('Admin current catalog editing and valid settings persist across reload', async ({ page }) => {
  await login(page, 'admin', '/admin/subjects');
  await page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) }).getByTitle('Chỉnh sửa môn học').click();
  await page.getByRole('dialog').getByRole('combobox').selectOption('Khác');
  await page.getByRole('button', { name: 'Lưu cập nhật' }).click();
  await page.reload();
  await expect(page.locator('tbody tr').filter({ has: page.getByText('Toán', { exact: true }) })).toContainText('Khác');
  await page.goto('/admin/locations');
  await page.locator('tbody tr').filter({ has: page.getByText('Quận 1', { exact: true }) }).getByTitle('Chỉnh sửa khu vực').click();
  await page.getByRole('dialog').getByRole('combobox').selectOption('Đà Nẵng');
  await page.getByRole('button', { name: 'Lưu cập nhật' }).click();
  await page.reload();
  await expect(page.locator('tbody tr').filter({ has: page.getByText('Quận 1', { exact: true }) })).toContainText('Đà Nẵng');
  await page.goto('/admin/settings');
  await page.locator('main input[type=number]').first().fill('10');
  await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  await page.reload();
  await expect(page.locator('main input[type=number]').first()).toHaveValue('10');
  await page.goto('/admin/logs');
  await expect(page.locator('tbody')).toContainText('UPDATE_SYSTEM_SETTINGS');
});

test('UI-COMP-A11 Admin payout approval button is clickable and updates the same payout', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await login(page, 'admin', '/admin/finance');
  const approve = page.getByRole('button', { name: 'Duyệt chuyển', exact: true });
  await expect(approve).toBeVisible();
  const bounds = await approve.evaluate(button => ({ button: button.getBoundingClientRect().toJSON(), cell: button.closest('td').getBoundingClientRect().toJSON() }));
  expect(bounds.button.left, 'The full payout action must remain inside its own visible table cell').toBeGreaterThanOrEqual(bounds.cell.left);
  expect(bounds.button.right).toBeLessThanOrEqual(bounds.cell.right);
  const hit = await approve.evaluate(button => { const r = button.getBoundingClientRect(); const target = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); return button === target || button.contains(target); });
  expect(hit, 'Payout approval center must not be covered by an adjacent table cell').toBe(true);
  await page.getByRole('button', { name: 'Duyệt chuyển', exact: true }).click();
  await expect(page.locator('tbody')).toContainText('Đã duyệt chuyển');
  await page.reload();
  await expect(page.locator('tbody')).toContainText('Đã duyệt chuyển');
  await expect(page.getByRole('button', { name: 'Duyệt chuyển', exact: true })).toHaveCount(0);
  await page.goto('/admin/logs');
  await expect(page.locator('tbody')).toContainText('APPROVE_PAYOUT');
});

test('UI-COMP-A09 saved warning threshold controls the following account suspension decision', async ({ page }) => {
  await login(page, 'admin', '/admin/settings');
  await page.locator('main input[type=number]').last().fill('1');
  await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  await page.goto('/admin/issues');
  await page.locator('tbody tr').filter({ hasText: 'ISSUE-104' }).getByRole('button', { name: /Xử lý sự cố/ }).click();
  await page.locator('#warning-reason-input').fill('Cần xử lý phản ánh theo ngưỡng cảnh cáo đã được quản trị viên cấu hình.');
  await page.getByRole('button', { name: /Gửi cảnh cáo & Giải quyết sự cố/ }).click();
  await page.goto('/admin/users');
  await page.getByRole('searchbox', { name: 'Tìm kiếm người dùng' }).fill('giabao');
  await expect(page.locator('tbody tr')).toContainText('Đang bị khóa');
});

test('UI-COMP-A10 Admin icon-enabled actions display the requested Lucide icon', async ({ page }) => {
  await login(page, 'admin', '/admin/subjects');
  await expect(page.getByRole('button', { name: 'Thêm môn học mới' }).locator('svg')).toHaveCount(1);
  await page.goto('/admin/settings');
  await expect(page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).locator('svg')).toHaveCount(1);
});

for (const width of [1440, 1024, 390]) {
  test(`Admin completion connected screens have no page overflow or runtime errors at ${width}px`, async ({ page }) => {
    const errors = []; page.on('pageerror', error => errors.push(String(error)));
    await page.setViewportSize({ width, height: 900 });
    await login(page, 'admin', '/admin/dashboard');
    for (const route of ['dashboard', 'users', 'tutors', 'reviews', 'issues', 'appeals', 'classes', 'finance', 'subjects', 'locations', 'settings', 'logs']) {
      await page.goto(`/admin/${route}`);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth), route).toBeLessThanOrEqual(width);
      await page.screenshot({ path: `playwright-report/audit-admin/${route}-${width}.png`, fullPage: true });
      for (const table of await page.locator('.admin-table-scroll,.admin-table-container').all()) {
        await table.evaluate(e => { e.scrollLeft = e.scrollWidth; e.scrollTop = e.scrollHeight; });
      }
      await page.screenshot({ path: `playwright-report/audit-admin/${route}-${width}-end.png`, fullPage: true });
    }
    expect(errors).toEqual([]);
  });
}
