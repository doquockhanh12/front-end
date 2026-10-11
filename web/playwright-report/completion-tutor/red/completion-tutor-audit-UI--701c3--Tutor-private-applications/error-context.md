# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-tutor-audit.spec.js >> UI-COMP-T06 another Tutor cannot see canonical Tutor private applications
- Location: tests\e2e\completion-tutor-audit.spec.js:65:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.my-proposal-card')
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.my-proposal-card') with timeout 5000ms
  - waiting for locator('.my-proposal-card')
    11 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
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
        - link "Yêu cầu học 0" [ref=e17] [cursor=pointer]:
          - /url: /tutor/requests
          - generic [ref=e21]: Yêu cầu học
          - text: "0"
        - link "Lịch dạy học" [ref=e22] [cursor=pointer]:
          - /url: /tutor/timetable
        - link "Tìm học viên mới" [ref=e26] [cursor=pointer]:
          - /url: /tutor/find-students
        - link "Ví & Thu nhập" [ref=e33] [cursor=pointer]:
          - /url: /tutor/wallet
        - link "Hồ sơ gia sư" [ref=e38] [cursor=pointer]:
          - /url: /tutor/profile
        - link "Tin nhắn" [ref=e43] [cursor=pointer]:
          - /url: /messages
        - link "Kháng cáo" [ref=e47] [cursor=pointer]:
          - /url: /appeals
        - link "Trung tâm Trợ giúp" [ref=e53] [cursor=pointer]:
          - /url: /help
    - generic [ref=e58]:
      - banner [ref=e59]:
        - navigation "Điều hướng nhanh" [ref=e60]:
          - link "Tìm lớp gần tôi" [ref=e61] [cursor=pointer]:
            - /url: /tutor/map
          - link "Tổng Quan" [ref=e65] [cursor=pointer]:
            - /url: /tutor/dashboard
        - generic [ref=e71]:
          - button "Thông báo" [ref=e73] [cursor=pointer]:
            - generic [ref=e77]: "1"
          - link "Ảnh đại diện của Nguyễn Mai Anh maianh" [ref=e78] [cursor=pointer]:
            - /url: /tutor/profile
            - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=e79]:
              - generic [aria-hidden] [ref=e80]: MA
            - generic [ref=e81]: maianh
          - button "Đăng xuất" [ref=e82] [cursor=pointer]
      - main [ref=e86]:
        - generic [ref=e88]:
          - text: KHÔNG GIAN GIA SƯ · DEMO
          - heading "Tìm học viên & Nhận lớp mới" [level=1] [ref=e89]
          - paragraph [ref=e90]: Bảng tin tìm gia sư trực tiếp từ học viên và phụ huynh. Ứng tuyển minh bạch, nhận lớp an toàn.
        - alert [ref=e91]:
          - generic [ref=e94]:
            - strong [ref=e95]: "⚠️ CẢNH BÁO AN TOÀN: TutorNearMe không bao giờ thu phí nhận lớp hay tiền cọc giữ chỗ. Mọi yêu cầu chuyển tiền nhận lớp ngoài sàn đều là lừa đảo đa cấp!"
            - paragraph [ref=e96]: Tất cả giao dịch học phí và phí sàn (10% hoặc 7% cho Top-Rated) được giải ngân minh bạch qua ví số sau khi buổi học hoàn thành. Không thanh toán bất kỳ khoản tiền nào trước khi dạy.
        - tablist [ref=e97]:
          - tab "Bảng tin Lớp học Mới (3)" [ref=e98] [cursor=pointer]
          - tab "Đơn ứng tuyển của tôi (1)" [active] [selected] [ref=e99] [cursor=pointer]
        - region "Đơn ứng tuyển của tôi" [ref=e100]:
          - generic [ref=e101]:
            - heading "Quản lý hồ sơ ứng tuyển (1)" [level=2] [ref=e102]
            - paragraph [ref=e103]: Theo dõi trạng thái duyệt của phụ huynh, phản hồi phỏng vấn và các lớp đã trúng tuyển.
          - article [ref=e105]:
            - generic [ref=e106]:
              - generic [ref=e107]:
                - generic [ref=e108]:
                  - generic [ref=e109]: "MÃ ĐƠN: #prop-201"
                  - generic [ref=e110]: ⏳ Đang chờ phụ huynh phản hồi
                - heading "Toán – Lớp 8" [level=3] [ref=e111]
                - paragraph [ref=e112]: "Phụ huynh: Nguyễn Minh Anh · Khu vực: Bình Thạnh, TP. Hồ Chí Minh"
              - generic [ref=e113]:
                - generic [ref=e114]: Học phí bạn đề xuất
                - strong [ref=e115]: 220.000đ / buổi
                - generic [ref=e116]: "Thực nhận ví: 198.000đ (Phí sàn: -22.000đ)"
            - generic [ref=e117]:
              - generic [ref=e118]: "Lời nhắn của bạn gửi phụ huynh:"
              - text: "\"Chào phụ huynh, em là sinh viên năm 3 Sư Phạm Toán, đã có 2 năm kinh nghiệm dạy kèm toán 8-9 lấy lại căn bản rất nhanh.\""
            - generic [ref=e119]:
              - generic [ref=e120]: "Ngày nộp: Thứ 7, 03/10"
              - link "Trao đổi với phụ huynh" [ref=e122] [cursor=pointer]:
                - /url: /messages
  - complementary "Widget nhắn tin nhanh" [ref=e123]:
    - button "Mở cửa sổ trò chuyện" [ref=e124] [cursor=pointer]
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
  71  |   await page.getByRole('tab', { name: /Đơn ứng tuyển của tôi/ }).click();
> 72  |   await expect(page.locator('.my-proposal-card')).toHaveCount(state.proposals.filter(p => p.tutorId === user.id).length);
      |                                                   ^ Error: expect(locator).toHaveCount(expected) failed
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
  107 | test('UI-COMP-T09 Tutor sidebar preserves a direct route to the approved Income screen', async ({ page }) => {
  108 |   await resetDemo(page); await login(page, 'giabao', '/tutor/dashboard');
  109 |   const income = page.locator('.tutor-sidebar a[href="/tutor/income"]');
  110 |   await expect(income).toHaveCount(1);
  111 |   await income.click();
  112 |   await expect(page).toHaveURL(/\/tutor\/income$/);
  113 | });
  114 | 
  115 | test('AUDIT core direct request remains shared through Tutor acceptance and Learner confirmation', async ({ page }) => {
  116 |   await resetDemo(page);
  117 |   await login(page, 'minhanh', '/tutors/quoc-bao');
  118 |   await page.locator('#profile-subjects').getByRole('button', { name: 'Tiếng Anh', exact: true }).click();
  119 |   await page.locator('#profile-subjects').getByRole('button', { name: 'THCS', exact: true }).click();
  120 |   await page.getByRole('region', { name: 'Lịch rảnh của Trần Gia Bảo' }).getByRole('button').first().click();
  121 |   await page.locator('#profile-location').getByRole('button', { name: 'Online', exact: true }).click();
  122 |   await page.getByLabel('Mong muốn học tập *').fill('Kiểm tra luồng yêu cầu trực tiếp');
  123 |   await page.getByRole('button', { name: 'Gửi yêu cầu học', exact: true }).click();
  124 |   await expect(page).toHaveURL(/\/requests\/[^/]+$/);
  125 |   const requestId = new URL(page.url()).pathname.split('/').at(-1);
  126 |   const { logout } = await import('./demoHelpers.js');
  127 |   await logout(page); await login(page, 'giabao', '/tutor/requests');
  128 |   await page.locator(`a[href="/tutor/requests/${requestId}"]`).click();
  129 |   await page.getByRole('button', { name: 'Nhận yêu cầu', exact: true }).click();
  130 |   await expect(page.getByRole('status')).toContainText('Đã nhận');
  131 |   await page.goto('/tutor/timetable');
  132 |   await expect(page.getByRole('button', { name: /Tiếng Anh.*Nguyễn Minh Anh/ }).first()).toBeVisible();
  133 |   await logout(page); await login(page, 'minhanh', `/requests/${requestId}`);
  134 |   await expect(page.locator('main')).toContainText('Đã xác nhận');
  135 | });
  136 | 
```