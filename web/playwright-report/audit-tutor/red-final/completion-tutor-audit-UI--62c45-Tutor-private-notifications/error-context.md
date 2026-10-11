# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-tutor-audit.spec.js >> UI-COMP-T07 another Tutor cannot read canonical Tutor private notifications
- Location: tests\e2e\completion-tutor-audit.spec.js:75:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByText('Có phụ huynh vừa đăng tin tìm gia sư Tiếng Anh lớp 9 tại Quận Bình Thạnh.', { exact: true })
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByText('Có phụ huynh vừa đăng tin tìm gia sư Tiếng Anh lớp 9 tại Quận Bình Thạnh.', { exact: true }) with timeout 5000ms
  - waiting for getByText('Có phụ huynh vừa đăng tin tìm gia sư Tiếng Anh lớp 9 tại Quận Bình Thạnh.', { exact: true })
    13 × locator resolved to 1 element
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
          - generic [ref=e72]:
            - button "Thông báo" [active] [ref=e73] [cursor=pointer]:
              - generic [ref=e77]: "1"
            - generic [ref=e78]:
              - generic [ref=e79]:
                - generic [ref=e80]:
                  - text: Thông báo
                  - generic [ref=e81]: (1)
                - button "Đã đọc tất cả" [ref=e82] [cursor=pointer]
              - generic [ref=e92] [cursor=pointer]:
                - generic [ref=e93]: Lớp học mới gần bạn!
                - generic [ref=e94]: Có phụ huynh vừa đăng tin tìm gia sư Tiếng Anh lớp 9 tại Quận Bình Thạnh.
                - generic [ref=e95]: 17:00 · 4/10/2026
          - link "Ảnh đại diện của Nguyễn Mai Anh maianh" [ref=e97] [cursor=pointer]:
            - /url: /tutor/profile
            - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=e98]:
              - generic [aria-hidden] [ref=e99]: MA
            - generic [ref=e100]: maianh
          - button "Đăng xuất" [ref=e101] [cursor=pointer]
      - main [ref=e105]:
        - generic [ref=e106]:
          - generic [ref=e107]:
            - heading "Xin chào, Nguyễn Mai Anh" [level=1] [ref=e108]
            - paragraph [ref=e114]: Cùng tiếp tục tạo ra tác động tích cực qua từng buổi học.
          - generic "Chỉ số tổng quan" [ref=e115]:
            - generic [ref=e116]:
              - generic [ref=e117]: Yêu cầu học mới
              - strong [ref=e118]: "0"
              - generic [ref=e119]: ↑ +0
              - link "Xem chi tiết" [ref=e120] [cursor=pointer]:
                - /url: "#requests-title"
            - generic [ref=e123]:
              - generic [ref=e124]: Lịch dạy tuần này
              - strong [ref=e125]: "0"
              - generic [ref=e126]: ↑ +2
              - link "Xem chi tiết" [ref=e127] [cursor=pointer]:
                - /url: "#teaching-calendar"
            - generic [ref=e130]:
              - generic [ref=e131]: Thu nhập tháng này
              - strong [ref=e132]: 0đ
              - link "Xem chi tiết" [ref=e133] [cursor=pointer]:
                - /url: /tutor/income
            - generic [ref=e136]:
              - generic [ref=e137]: Đánh giá trung bình
              - strong [ref=e138]: —/5
              - link "Xem chi tiết" [ref=e139] [cursor=pointer]:
                - /url: "#tutor-profile-summary"
          - generic [ref=e142]:
            - region [ref=e143]:
              - generic [ref=e144]:
                - heading "Yêu cầu học mới (0)" [level=2] [ref=e145]
                - link "Xem tất cả" [ref=e146] [cursor=pointer]:
                  - /url: /tutor/requests
            - region [ref=e149]:
              - generic [ref=e150]:
                - heading "Lịch dạy học" [level=2] [ref=e151]
                - link "Chỉnh sửa lịch" [ref=e152] [cursor=pointer]:
                  - /url: /tutor/timetable
              - table [ref=e156]:
                - caption [ref=e157]: Tổng quan lịch rảnh đã lưu và buổi dạy theo ngày và buổi trong tuần.
                - rowgroup [ref=e158]:
                  - row [ref=e159]:
                    - columnheader "Buổi" [ref=e160]
                    - columnheader "T2" [ref=e162]
                    - columnheader "T3" [ref=e163]
                    - columnheader "T4" [ref=e164]
                    - columnheader "T5" [ref=e165]
                    - columnheader "T6" [ref=e166]
                    - columnheader "T7" [ref=e167]
                    - columnheader "CN" [ref=e168]
                - rowgroup [ref=e169]:
                  - row [ref=e170]:
                    - rowheader "Sáng 06:00–12:00" [ref=e171]:
                      - text: Sáng
                      - generic [ref=e172]: 06:00–12:00
                    - cell [ref=e173]:
                      - link "Sáng T2, chưa có lịch rảnh" [ref=e174] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e175]
                    - cell [ref=e176]:
                      - link "Sáng T3, chưa có lịch rảnh" [ref=e177] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e178]
                    - cell [ref=e179]:
                      - link "Sáng T4, chưa có lịch rảnh" [ref=e180] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e181]
                    - cell [ref=e182]:
                      - link "Sáng T5, chưa có lịch rảnh" [ref=e183] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e184]
                    - cell [ref=e185]:
                      - link "Sáng T6, chưa có lịch rảnh" [ref=e186] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e187]
                    - cell [ref=e188]:
                      - link "Sáng T7, chưa có lịch rảnh" [ref=e189] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e190]
                    - cell [ref=e191]:
                      - link "Sáng CN, chưa có lịch rảnh" [ref=e192] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e193]
                  - row [ref=e194]:
                    - rowheader "Chiều 12:00–17:00" [ref=e195]:
                      - text: Chiều
                      - generic [ref=e196]: 12:00–17:00
                    - cell [ref=e197]:
                      - link "Chiều T2, chưa có lịch rảnh" [ref=e198] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e199]
                    - cell [ref=e200]:
                      - link "Chiều T3, chưa có lịch rảnh" [ref=e201] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e202]
                    - cell [ref=e203]:
                      - link "Chiều T4, chưa có lịch rảnh" [ref=e204] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e205]
                    - cell [ref=e206]:
                      - link "Chiều T5, chưa có lịch rảnh" [ref=e207] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e208]
                    - cell [ref=e209]:
                      - link "Chiều T6, chưa có lịch rảnh" [ref=e210] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e211]
                    - cell [ref=e212]:
                      - link "Chiều T7, chưa có lịch rảnh" [ref=e213] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e214]
                    - cell [ref=e215]:
                      - link "Chiều CN, chưa có lịch rảnh" [ref=e216] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e217]
                  - row [ref=e218]:
                    - rowheader "Tối 17:00–24:00" [ref=e219]:
                      - text: Tối
                      - generic [ref=e220]: 17:00–24:00
                    - cell [ref=e221]:
                      - link "Tối T2, chưa có lịch rảnh" [ref=e222] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e223]
                    - cell [ref=e224]:
                      - link "Tối T3, chưa có lịch rảnh" [ref=e225] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e226]
                    - cell [ref=e227]:
                      - link "Tối T4, chưa có lịch rảnh" [ref=e228] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e229]
                    - cell [ref=e230]:
                      - link "Tối T5, chưa có lịch rảnh" [ref=e231] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e232]
                    - cell [ref=e233]:
                      - link "Tối T6, chưa có lịch rảnh" [ref=e234] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e235]
                    - cell [ref=e236]:
                      - link "Tối T7, chưa có lịch rảnh" [ref=e237] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e238]
                    - cell [ref=e239]:
                      - link "Tối CN, chưa có lịch rảnh" [ref=e240] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e241]
              - generic [ref=e242]:
                - generic [ref=e243]: Có lịch rảnh
                - generic [ref=e245]: Có buổi học
              - paragraph [ref=e247]: Lịch rảnh đã lưu dùng ngày và khoảng giờ cụ thể. Mở thời khóa biểu để chỉnh sửa.
              - generic [ref=e248]:
                - heading "Buổi dạy trong tuần (0)" [level=3] [ref=e249]
                - paragraph [ref=e250]: Chưa có buổi dạy trong tuần.
              - link "Xem toàn bộ thời khóa biểu" [ref=e251] [cursor=pointer]:
                - /url: /tutor/timetable
        - complementary "Hồ sơ, thu nhập và cập nhật nhanh" [ref=e254]:
          - generic [ref=e255]:
            - generic [ref=e256]:
              - heading "Hồ sơ gia sư" [level=2] [ref=e257]
              - link "Chỉnh sửa" [ref=e258] [cursor=pointer]:
                - /url: /tutor/profile
            - generic [ref=e261]:
              - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=e262]:
                - generic [aria-hidden] [ref=e263]: MA
              - generic [ref=e264]:
                - heading "Nguyễn Mai Anh" [level=3] [ref=e265]
                - paragraph [ref=e266]: Gia sư tại
                - paragraph [ref=e267]: Chưa có đánh giá
            - generic [ref=e268]:
              - generic [ref=e269]:
                - generic [ref=e270]: Hồ sơ hoàn thiện
                - strong [ref=e271]: 85%
              - progressbar "Độ hoàn thiện hồ sơ" [ref=e272]
            - generic [ref=e273]:
              - generic [ref=e274]:
                - term [ref=e275]: Môn dạy
                - definition
              - generic [ref=e276]:
                - term [ref=e277]: Khu vực
                - definition
              - generic [ref=e278]:
                - term [ref=e279]: Mức phí
                - definition [ref=e280]: 0đ / buổi
          - generic [ref=e281]:
            - heading "Thu nhập / buổi học gần đây" [level=2] [ref=e283]
            - strong [ref=e284]: 0đ
            - paragraph [ref=e285]: Tháng 10/2026
            - paragraph [ref=e287]: Chưa có buổi học tạo thu nhập trong tháng.
            - link "Xem thêm" [ref=e288] [cursor=pointer]:
              - /url: /tutor/income
          - generic [ref=e291]:
            - heading "Cập nhật nhanh" [level=2] [ref=e293]
            - generic [ref=e294]:
              - link "Chỉnh sửa hồ sơ" [ref=e295] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Quản lý khu vực" [ref=e300] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Cập nhật môn dạy" [ref=e305] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Thiết lập mức phí" [ref=e309] [cursor=pointer]:
                - /url: /tutor/profile
            - paragraph [ref=e314]: Đã lưu 2 phút trước
  - complementary "Widget nhắn tin nhanh" [ref=e315]:
    - button "Mở cửa sổ trò chuyện" [ref=e316] [cursor=pointer]
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
> 83  |     await expect(page.getByText(notification.message, { exact: true })).toHaveCount(0);
      |                                                                         ^ Error: expect(locator).toHaveCount(expected) failed
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