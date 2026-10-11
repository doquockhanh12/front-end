# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-tutor-audit.spec.js >> UI-COMP-T03 payout bank account input has an associated visible label
- Location: tests\e2e\completion-tutor-audit.spec.js:41:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('dialog', { name: 'Rút tiền về tài khoản ngân hàng' }).getByRole('textbox', { name: 'Số tài khoản ngân hàng:' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('dialog', { name: 'Rút tiền về tài khoản ngân hàng' }).getByRole('textbox', { name: 'Số tài khoản ngân hàng:' }) with timeout 5000ms
  - waiting for getByRole('dialog', { name: 'Rút tiền về tài khoản ngân hàng' }).getByRole('textbox', { name: 'Số tài khoản ngân hàng:' })

```

```yaml
- complementary "Điều hướng gia sư":
  - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn.":
    - /url: /
    - strong: TutorNearMe
    - text: Gia sư gần bạn. Tri thức gần hơn.
  - navigation "Các mục của gia sư":
    - link "Tổng quan":
      - /url: /tutor/dashboard
    - link "Yêu cầu học 6":
      - /url: /tutor/requests
    - link "Lịch dạy học":
      - /url: /tutor/timetable
    - link "Tìm học viên mới":
      - /url: /tutor/find-students
    - link "Ví & Thu nhập":
      - /url: /tutor/wallet
    - link "Hồ sơ gia sư":
      - /url: /tutor/profile
    - link "Tin nhắn":
      - /url: /messages
    - link "Kháng cáo":
      - /url: /appeals
    - link "Trung tâm Trợ giúp":
      - /url: /help
- banner:
  - navigation "Điều hướng nhanh":
    - link "Tìm lớp gần tôi":
      - /url: /tutor/map
    - link "Tổng Quan":
      - /url: /tutor/dashboard
  - button "Thông báo": "1"
  - link "Ảnh đại diện của Trần Gia Bảo giabao":
    - /url: /tutor/profile
    - img "Ảnh đại diện của Trần Gia Bảo"
    - text: giabao
  - button "Đăng xuất"
- main:
  - text: KHÔNG GIAN GIA SƯ · DEMO
  - heading "Ví & Rút tiền" [level=1]
  - paragraph: Quản lý thù lao giảng dạy sau trừ 10% phí sàn, tiền bồi thường hủy lịch và yêu cầu rút tiền về ngân hàng.
  - text: Số dư khả dụng 1.250.000 đ
  - paragraph: Số dư thực nhận sẵn sàng để rút về tài khoản ngân hàng bất kỳ lúc nào.
  - button "Rút tiền về STK Ngân hàng"
  - text: Tổng thu nhập tích lũy 506.000 đ Đã khấu trừ 10% phí nền tảng TutorNearMe
  - paragraph: Bao gồm thù lao các buổi dạy đã hoàn tất (90% giá gói) và tiền đền bù khi học viên hủy lịch (50% hoặc 100%).
  - heading "Sổ cái giao dịch thu nhập & rút tiền" [level=2]
  - tablist:
    - button "Tất cả (2)"
    - button "Thù lao dạy học (90%)"
    - button "Bồi thường hủy lịch"
    - button "Lệnh rút tiền"
  - table:
    - rowgroup:
      - row "Thời gian Mã GD Loại khoản tiền Chi tiết diễn giải Số tiền Trạng thái":
        - columnheader "Thời gian"
        - columnheader "Mã GD"
        - columnheader "Loại khoản tiền"
        - columnheader "Chi tiết diễn giải"
        - columnheader "Số tiền"
        - columnheader "Trạng thái"
    - rowgroup:
      - row "20:00 30/09/2026 tx-t-001 Thù lao buổi học (90%) Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn) +396.000 đ Thành công":
        - cell "20:00 30/09/2026"
        - cell "tx-t-001"
        - cell "Thù lao buổi học (90%)"
        - cell "Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn)"
        - cell "+396.000 đ"
        - cell "Thành công"
      - row "18:00 03/10/2026 tx-t-002 Bồi thường hủy lịch Đền bù học viên hủy lịch sát giờ (50% học phí 220.000đ) +110.000 đ Thành công":
        - cell "18:00 03/10/2026"
        - cell "tx-t-002"
        - cell "Bồi thường hủy lịch"
        - cell "Đền bù học viên hủy lịch sát giờ (50% học phí 220.000đ)"
        - cell "+110.000 đ"
        - cell "Thành công"
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện"
- dialog "Rút tiền về tài khoản ngân hàng":
  - button "Đóng cửa sổ"
  - banner:
    - heading "Rút tiền về tài khoản ngân hàng" [level=2]
    - paragraph: Lệnh rút tiền sẽ được bộ phận tài vụ phê duyệt và chuyển khoản nhanh 24/7.
  - text: "Ngân hàng nhận tiền:"
  - combobox:
    - option "Vietcombank" [selected]
    - option "MBBank (Quân Đội)"
    - option "Techcombank"
    - option "ACB (Á Châu)"
    - option "VPBank"
    - option "BIDV"
    - option "VietinBank"
    - option "TPBank"
    - option "HDBank"
    - option "Sacombank"
  - text: "Số tài khoản ngân hàng:"
  - 'textbox "Ví dụ: 1012345678"': "1012345678"
  - text: "Tên chủ tài khoản (Viết hoa không dấu):"
  - textbox "TRAN GIA BAO"
  - text: "Số tiền muốn rút (VNĐ):"
  - button "Rút toàn bộ (1.250.000 đ)"
  - spinbutton: "500000"
  - text: "VNĐ Khả dụng tối đa: 1.250.000 đ"
  - button "Hủy bỏ"
  - button "Xác nhận rút tiền"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { createDemoState, holdEscrowDeposit, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
  3   | import { resetDemo, login, fixedTime } from './demoHelpers.js';
  4   | 
  5   | const seed = () => createDemoState(fixedTime);
  6   | const withdrawal = page => page.getByRole('button', { name: 'Rút tiền về STK Ngân hàng', exact: true });
  7   | 
  8   | test('UI-COMP-T01 Tutor Wallet resolves the canonical account balance', async ({ page }) => {
  9   |   const state = seed();
  10  |   await resetDemo(page, { state });
  11  |   await login(page, 'giabao', '/tutor/wallet');
  12  |   await expect(page.locator('.wallet-card--available .wallet-card-amount')).toHaveText(`${state.wallets['demo-tutor'].availableBalance.toLocaleString('vi-VN')} đ`);
  13  |   await expect(withdrawal(page)).toBeEnabled();
  14  | });
  15  | 
  16  | // Controlled compatibility state isolates modal behavior from T01. Both stable
  17  | // identity keys reference existing approved wallet data; the fixture is untouched.
  18  | async function openPayout(page) {
  19  |   const state = seed();
  20  |   state.wallets['quoc-bao'] = structuredClone(state.wallets['demo-tutor']);
  21  |   await resetDemo(page, { state });
  22  |   await login(page, 'giabao', '/tutor/wallet');
  23  |   await withdrawal(page).click();
  24  |   const dialog = page.getByRole('dialog', { name: 'Rút tiền về tài khoản ngân hàng' });
  25  |   await expect(dialog).toBeVisible();
  26  |   return dialog;
  27  | }
  28  | 
  29  | test('UI-COMP-T02 payout dialog receives keyboard focus', async ({ page }) => {
  30  |   const dialog = await openPayout(page);
  31  |   expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
  32  | });
  33  | 
  34  | test('UI-COMP-T02 Escape closes payout dialog and returns focus', async ({ page }) => {
  35  |   const dialog = await openPayout(page);
  36  |   await page.keyboard.press('Escape');
  37  |   await expect(dialog).toHaveCount(0);
  38  |   await expect(withdrawal(page)).toBeFocused();
  39  | });
  40  | 
  41  | test('UI-COMP-T03 payout bank account input has an associated visible label', async ({ page }) => {
  42  |   const dialog = await openPayout(page);
> 43  |   await expect(dialog.getByRole('textbox', { name: 'Số tài khoản ngân hàng:' })).toBeVisible();
      |                                                                                  ^ Error: expect(locator).toBeVisible() failed
  44  | });
  45  | 
  46  | test('UI-COMP-T04 accidental click does not activate the three-second SOS action', async ({ page }) => {
  47  |   await resetDemo(page);
  48  |   await login(page, 'giabao', '/tutor/timetable');
  49  |   await page.getByRole('button', { name: 'SOS KHẨN CẤP', exact: true }).first().click();
  50  |   await expect(page.getByRole('alertdialog')).toHaveCount(0);
  51  | });
  52  | 
  53  | test('UI-COMP-T05 SOS explicitly discloses local simulation instead of claiming real SMS or GPS delivery', async ({ page }) => {
  54  |   await resetDemo(page);
  55  |   await login(page, 'giabao', '/tutor/timetable');
  56  |   // Holding also remains valid when the planned activation guard is implemented.
  57  |   const trigger = page.getByRole('button', { name: 'SOS KHẨN CẤP', exact: true }).first();
  58  |   await trigger.hover(); await page.mouse.down();
  59  |   await page.clock.runFor(3100); await page.mouse.up();
  60  |   const dialog = page.getByRole('alertdialog');
  61  |   await expect(dialog).toBeVisible();
  62  |   await expect(dialog).toContainText(/mô phỏng|demo|không gửi/i);
  63  | });
  64  | 
  65  | test('UI-COMP-T06 another Tutor cannot see canonical Tutor private applications', async ({ page }) => {
  66  |   const state = seed();
  67  |   const user = state.users.find(u => u.role === 'tutor' && u.id !== 'demo-tutor');
  68  |   expect(user).toBeTruthy();
  69  |   await resetDemo(page, { state, user });
  70  |   await page.goto('/tutor/find-students');
  71  |   await page.getByRole('tab', { name: /Đơn ứng tuyển của tôi/ }).click();
  72  |   await expect(page.locator('.my-proposal-card')).toHaveCount(state.proposals.filter(p => p.tutorId === user.id).length);
  73  | });
  74  | 
  75  | test('UI-COMP-T07 another Tutor cannot read canonical Tutor private notifications', async ({ page }) => {
  76  |   const state = seed();
  77  |   const user = state.users.find(u => u.role === 'tutor' && u.id !== 'demo-tutor');
  78  |   expect(user).toBeTruthy();
  79  |   await resetDemo(page, { state, user });
  80  |   await page.goto('/tutor/dashboard');
  81  |   await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  82  |   for (const notification of state.notifications.filter(n => n.recipientId === 'demo-tutor')) {
  83  |     await expect(page.getByText(notification.message, { exact: true })).toHaveCount(0);
  84  |   }
  85  | });
  86  | 
  87  | test('UI-COMP-T08 completing a funded Lesson disburses its linked escrow exactly once', async ({ page }) => {
  88  |   const state = seed(); const lesson = state.lessons.find(l => l.id === 'seed-0');
  89  |   const funded = holdEscrowDeposit(state, {
  90  |     learnerId: 'demo-learner', tutorId: 'demo-tutor', lessonId: lesson.id,
  91  |     amount: lesson.sessionFee, subject: lesson.subject, sessionCount: 1, feePerSession: lesson.sessionFee,
  92  |   });
  93  |   expect(funded.error).toBeFalsy();
  94  |   const linked = funded.state.escrowTransactions.find(e => e.lessonId === lesson.id);
  95  |   expect(linked).toBeTruthy();
  96  |   await resetDemo(page, { state: funded.state });
  97  |   await login(page, 'giabao', '/tutor/timetable');
  98  |   await page.getByRole('button', { name: new RegExp(`${lesson.subject}.*${lesson.learner}`) }).click();
  99  |   const dialog = page.getByRole('dialog', { name: 'Chi tiết lớp học' });
  100 |   await dialog.getByRole('button', { name: 'Đánh dấu hoàn tất' }).click();
  101 |   await expect(dialog).toContainText('Hoàn tất');
  102 |   const after = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);
  103 |   expect(after.escrowTransactions.find(e => e.id === linked.id).status).toBe('disbursed');
  104 |   expect(after.wallets['demo-tutor'].ledger.filter(tx => tx.type === 'lesson_disbursed' && tx.refId === linked.id)).toHaveLength(1);
  105 | });
  106 | 
```