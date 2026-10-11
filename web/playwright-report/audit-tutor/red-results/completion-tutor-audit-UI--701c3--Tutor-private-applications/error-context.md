# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-tutor-audit.spec.js >> UI-COMP-T06 another Tutor cannot see canonical Tutor private applications
- Location: tests\e2e\completion-tutor-audit.spec.js:65:1

# Error details

```
Test timeout of 15000ms exceeded.
```

```
Error: locator.click: Test timeout of 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Đơn ứng tuyển của tôi/ })

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
          - tab "Bảng tin Lớp học Mới (3)" [selected] [ref=e98] [cursor=pointer]
          - tab "Đơn ứng tuyển của tôi (1)" [ref=e99] [cursor=pointer]
        - generic [ref=e100]:
          - complementary "Bộ lọc tìm lớp" [ref=e101]:
            - generic [ref=e102]:
              - heading "Bộ lọc tìm lớp" [level=2] [ref=e103]
              - button "Đặt lại" [ref=e105] [cursor=pointer]
            - group "Điều kiện tìm lớp" [ref=e106]:
              - group "Môn học Có thể chọn nhiều" [ref=e108]:
                - generic [ref=e109]:
                  - text: Môn học
                  - generic [ref=e110]: Có thể chọn nhiều
                - generic [ref=e111] [cursor=pointer]:
                  - checkbox "Toán" [ref=e112]
                  - generic [ref=e113]: Toán
                - generic [ref=e114] [cursor=pointer]:
                  - checkbox "Tiếng Anh" [ref=e115]
                  - generic [ref=e116]: Tiếng Anh
                - generic [ref=e117] [cursor=pointer]:
                  - checkbox "Vật lý" [ref=e118]
                  - generic [ref=e119]: Vật lý
              - group "Khu vực Có thể chọn nhiều" [ref=e120]:
                - generic [ref=e121]:
                  - text: Khu vực
                  - generic [ref=e122]: Có thể chọn nhiều
                - generic [ref=e123] [cursor=pointer]:
                  - checkbox "Bình Thạnh, TP. Hồ Chí Minh" [ref=e124]
                  - generic [ref=e125]: Bình Thạnh, TP. Hồ Chí Minh
                - generic [ref=e126] [cursor=pointer]:
                  - checkbox "Toàn quốc (Online)" [ref=e127]
                  - generic [ref=e128]: Toàn quốc (Online)
                - generic [ref=e129] [cursor=pointer]:
                  - checkbox "Quận 3, TP. Hồ Chí Minh" [ref=e130]
                  - generic [ref=e131]: Quận 3, TP. Hồ Chí Minh
              - group "Khoảng học phí VNĐ / buổi" [ref=e132]:
                - generic [ref=e133]:
                  - text: Khoảng học phí
                  - generic [ref=e134]: VNĐ / buổi
                - generic [ref=e135]:
                  - status "Học phí từ" [ref=e136]: 0đ
                  - generic [ref=e137]: –
                  - status "Học phí đến" [ref=e138]: 500.000đ
                - generic [ref=e139]:
                  - slider "Học phí tối thiểu": "0"
                  - slider "Học phí tối đa": "500000"
                - generic [ref=e141]:
                  - generic [ref=e142]: 0đ
                  - generic [ref=e143]: 500.000đ
            - generic [ref=e144]:
              - text: 💡
              - strong [ref=e145]: "Mẹo nhận lớp:"
              - text: Nộp hồ sơ sớm kèm lời giới thiệu phương pháp dạy chi tiết giúp tăng 80% cơ hội được phụ huynh chọn.
          - region "Danh sách lớp học mở" [ref=e146]:
            - generic [ref=e148]:
              - text: BẢNG TIN THỊ TRƯỜNG
              - heading "3 lớp đang tìm gia sư" [level=2] [ref=e149]
            - paragraph [ref=e150]: Các lớp học được đăng tải trực tiếp bởi phụ huynh và học viên. Bạn có thể tự do đề xuất mức học phí phù hợp.
            - generic [ref=e151]:
              - article [ref=e152]:
                - generic [ref=e153]:
                  - generic [ref=e154]:
                    - generic [ref=e155]: Toán – Lớp 8
                    - 'heading "Học viên: Nguyễn Minh Anh · Mã #post-101" [level=3] [ref=e158]'
                  - generic [ref=e159]: "Cố định: 220.000đ / buổi"
                - paragraph [ref=e161]: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
                - generic [ref=e162]:
                  - generic [ref=e163]: Bình Thạnh, TP. Hồ Chí Minh (Tại nhà)
                  - generic [ref=e167]: Thứ 3 và Thứ 5 (18:30 - 20:00)
                  - generic [ref=e170]: 📍 Khoảng cách ~ 2.5 km
                  - generic [ref=e171]: 🎯 Yêu cầu học thử 30-45 phút
                  - generic [ref=e172]: 2 đã ứng tuyển
                - generic [ref=e178]:
                  - generic [ref=e179]: "Đăng lúc: Thứ 7, 03/10"
                  - generic [ref=e180]: Đã nộp đơn ứng tuyển
              - article [ref=e183]:
                - generic [ref=e184]:
                  - generic [ref=e185]:
                    - generic [ref=e186]: Tiếng Anh – Lớp 9
                    - 'heading "Học viên: Trần Thu Hà · Mã #post-102" [level=3] [ref=e189]'
                  - generic [ref=e190]: "Khoảng giá: 220.000đ – 280.000đ / buổi"
                - paragraph [ref=e192]: Luyện đề thi tuyển sinh vào lớp 10 chuyên Anh
                - generic [ref=e193]:
                  - generic [ref=e194]: Toàn quốc (Online) (Online)
                  - generic [ref=e198]: Thứ 2, Thứ 4, Thứ 6 (19:30 - 21:00)
                  - generic [ref=e201]: 1 đã ứng tuyển
                - generic [ref=e207]:
                  - generic [ref=e208]: "Đăng lúc: CN, 04/10"
                  - button "Ứng tuyển nhận lớp" [ref=e209] [cursor=pointer]
              - article [ref=e210]:
                - generic [ref=e211]:
                  - generic [ref=e212]:
                    - generic [ref=e213]: Vật lý – Lớp 11
                    - 'heading "Học viên: Lê Hoàng Nam · Mã #post-103" [level=3] [ref=e216]'
                  - generic [ref=e217]: Thương lượng với gia sư
                - paragraph [ref=e219]: Nắm vững kiến thức điện xoay chiều và dao động điều hòa
                - generic [ref=e220]:
                  - generic [ref=e221]: Quận 3, TP. Hồ Chí Minh (Tại nhà)
                  - generic [ref=e225]: Thứ 7 & Chủ nhật (09:00 - 10:30)
                  - generic [ref=e228]: 📍 Khoảng cách ~ 2.5 km
                  - generic [ref=e229]: 🎯 Yêu cầu học thử 30-45 phút
                  - generic [ref=e230]: 0 đã ứng tuyển
                - generic [ref=e236]:
                  - generic [ref=e237]: "Đăng lúc: Thứ 2, 05/10"
                  - button "Ứng tuyển nhận lớp" [ref=e238] [cursor=pointer]
  - complementary "Widget nhắn tin nhanh" [ref=e239]:
    - button "Mở cửa sổ trò chuyện" [ref=e240] [cursor=pointer]
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
> 71  |   await page.getByRole('tab', { name: /Đơn ứng tuyển của tôi/ }).click();
      |                                                                     ^ Error: locator.click: Test timeout of 15000ms exceeded.
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