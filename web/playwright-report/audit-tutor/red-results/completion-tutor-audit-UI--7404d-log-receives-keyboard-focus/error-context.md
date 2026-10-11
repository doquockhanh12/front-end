# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-tutor-audit.spec.js >> UI-COMP-T02 payout dialog receives keyboard focus
- Location: tests\e2e\completion-tutor-audit.spec.js:29:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - complementary "Điều hướng gia sư" [ref=e4]:
        - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn." [ref=e6] [cursor=pointer]:
          - /url: /
          - strong [ref=e7]: TutorNearMe
          - generic [ref=e8]: Gia sư gần bạn. Tri thức gần hơn.
        - navigation "Các mục của gia sư" [ref=e9]:
          - link "Tổng quan" [ref=e10] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Yêu cầu học 6" [ref=e17] [cursor=pointer]:
            - /url: /tutor/requests
            - generic [ref=e21]: Yêu cầu học
            - generic [ref=e22]: "6"
          - link "Lịch dạy học" [ref=e23] [cursor=pointer]:
            - /url: /tutor/timetable
          - link "Tìm học viên mới" [ref=e27] [cursor=pointer]:
            - /url: /tutor/find-students
          - link "Ví & Thu nhập" [ref=e34] [cursor=pointer]:
            - /url: /tutor/wallet
          - link "Hồ sơ gia sư" [ref=e39] [cursor=pointer]:
            - /url: /tutor/profile
          - link "Tin nhắn" [ref=e44] [cursor=pointer]:
            - /url: /messages
          - link "Kháng cáo" [ref=e48] [cursor=pointer]:
            - /url: /appeals
          - link "Trung tâm Trợ giúp" [ref=e54] [cursor=pointer]:
            - /url: /help
      - generic [ref=e59]:
        - banner [ref=e60]:
          - navigation "Điều hướng nhanh" [ref=e61]:
            - link "Tìm lớp gần tôi" [ref=e62] [cursor=pointer]:
              - /url: /tutor/map
            - link "Tổng Quan" [ref=e66] [cursor=pointer]:
              - /url: /tutor/dashboard
          - generic [ref=e72]:
            - button "Thông báo" [ref=e74] [cursor=pointer]:
              - generic [ref=e78]: "1"
            - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=e79] [cursor=pointer]:
              - /url: /tutor/profile
              - img "Ảnh đại diện của Trần Gia Bảo" [ref=e80]:
                - generic [aria-hidden] [ref=e81]: GB
              - generic [ref=e82]: giabao
            - button "Đăng xuất" [ref=e83] [cursor=pointer]
        - main [ref=e87]:
          - generic [ref=e89]:
            - text: KHÔNG GIAN GIA SƯ · DEMO
            - heading "Ví & Rút tiền" [level=1] [ref=e90]
            - paragraph [ref=e91]: Quản lý thù lao giảng dạy sau trừ 10% phí sàn, tiền bồi thường hủy lịch và yêu cầu rút tiền về ngân hàng.
          - generic [ref=e92]:
            - generic [ref=e93]:
              - generic [ref=e94]:
                - generic [ref=e95]:
                  - generic [ref=e96]: Số dư khả dụng
                  - generic [ref=e105]: 1.250.000 đ
                  - paragraph [ref=e106]: Số dư thực nhận sẵn sàng để rút về tài khoản ngân hàng bất kỳ lúc nào.
                - button "Rút tiền về STK Ngân hàng" [active] [ref=e108] [cursor=pointer]
              - generic [ref=e113]:
                - generic [ref=e114]: Tổng thu nhập tích lũy
                - generic [ref=e123]: 506.000 đ
                - generic [ref=e124]: Đã khấu trừ 10% phí nền tảng TutorNearMe
                - paragraph [ref=e128]: Bao gồm thù lao các buổi dạy đã hoàn tất (90% giá gói) và tiền đền bù khi học viên hủy lịch (50% hoặc 100%).
            - generic [ref=e129]:
              - generic [ref=e130]:
                - heading "Sổ cái giao dịch thu nhập & rút tiền" [level=2] [ref=e131]
                - tablist [ref=e137]:
                  - button "Tất cả (2)" [ref=e138] [cursor=pointer]
                  - button "Thù lao dạy học (90%)" [ref=e139] [cursor=pointer]
                  - button "Bồi thường hủy lịch" [ref=e140] [cursor=pointer]
                  - button "Lệnh rút tiền" [ref=e141] [cursor=pointer]
              - table [ref=e143]:
                - rowgroup [ref=e144]:
                  - row [ref=e145]:
                    - columnheader "Thời gian" [ref=e146]
                    - columnheader "Mã GD" [ref=e147]
                    - columnheader "Loại khoản tiền" [ref=e148]
                    - columnheader "Chi tiết diễn giải" [ref=e149]
                    - columnheader "Số tiền" [ref=e150]
                    - columnheader "Trạng thái" [ref=e151]
                - rowgroup [ref=e152]:
                  - row [ref=e153]:
                    - cell "20:00 30/09/2026" [ref=e154]
                    - cell "tx-t-001" [ref=e155]
                    - cell "Thù lao buổi học (90%)" [ref=e156]
                    - cell "Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn)" [ref=e161]
                    - cell "+396.000 đ" [ref=e162]
                    - cell "Thành công" [ref=e163]
                  - row [ref=e168]:
                    - cell "18:00 03/10/2026" [ref=e169]
                    - cell "tx-t-002" [ref=e170]
                    - cell "Bồi thường hủy lịch" [ref=e171]
                    - cell "Đền bù học viên hủy lịch sát giờ (50% học phí 220.000đ)" [ref=e176]
                    - cell "+110.000 đ" [ref=e177]
                    - cell "Thành công" [ref=e178]
    - complementary "Widget nhắn tin nhanh" [ref=e183]:
      - button "Mở cửa sổ trò chuyện" [ref=e184] [cursor=pointer]
  - dialog [ref=e188]:
    - button "Đóng cửa sổ" [ref=e189] [cursor=pointer]
    - banner [ref=e193]:
      - heading "Rút tiền về tài khoản ngân hàng" [level=2] [ref=e194]
      - paragraph [ref=e198]: Lệnh rút tiền sẽ được bộ phận tài vụ phê duyệt và chuyển khoản nhanh 24/7.
    - generic [ref=e199]:
      - generic [ref=e200]:
        - generic [ref=e201]: "Ngân hàng nhận tiền:"
        - combobox [ref=e202] [cursor=pointer]:
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
      - generic [ref=e203]:
        - generic [ref=e204]: "Số tài khoản ngân hàng:"
        - 'textbox "Ví dụ: 1012345678" [ref=e205]': "1012345678"
      - generic [ref=e206]:
        - generic [ref=e207]: "Tên chủ tài khoản (Viết hoa không dấu):"
        - textbox "TRAN GIA BAO" [ref=e208]
      - generic [ref=e209]:
        - generic [ref=e210]:
          - generic [ref=e211]: "Số tiền muốn rút (VNĐ):"
          - button "Rút toàn bộ (1.250.000 đ)" [ref=e212] [cursor=pointer]
        - generic [ref=e213]:
          - spinbutton [ref=e214]: "500000"
          - generic [ref=e215]: VNĐ
        - generic [ref=e216]: "Khả dụng tối đa: 1.250.000 đ"
      - generic [ref=e217]:
        - button "Hủy bỏ" [ref=e218] [cursor=pointer]
        - button "Xác nhận rút tiền" [ref=e219] [cursor=pointer]
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
> 31  |   expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
      |                                                                            ^ Error: expect(received).toBe(expected) // Object.is equality
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
  43  |   await expect(dialog.getByRole('textbox', { name: 'Số tài khoản ngân hàng:' })).toBeVisible();
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
  71  |   await page.getByRole('button', { name: /Đơn ứng tuyển của tôi/ }).click();
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
  104 |   expect(after.wallets['demo-tutor'].ledger.filter(tx => tx.type === 'lesson_disbursed' && tx.escrowId === linked.id)).toHaveLength(1);
  105 | });
  106 | 
```