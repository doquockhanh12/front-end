# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-tutor-audit.spec.js >> UI-COMP-T04 accidental click does not activate the three-second SOS action
- Location: tests\e2e\completion-tutor-audit.spec.js:46:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('alertdialog')
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByRole('alertdialog') with timeout 5000ms
  - waiting for getByRole('alertdialog')
    12 × locator resolved to 1 element
       - unexpected value "1"

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
            - heading "Lịch dạy học & Khiên An Toàn" [level=1] [ref=e90]
            - paragraph [ref=e91]: Xem buổi dạy, giám sát an toàn hành trình và quản lý lịch rảnh từ 06:00 đến 24:00.
          - region "Thời khóa biểu lịch dạy và lịch rảnh" [ref=e92]:
            - region "Khiên an toàn gia sư" [ref=e93]:
              - generic [ref=e95]:
                - heading "Khiên An Toàn Gia Sư (Tutor Safety Shield)" [level=2] [ref=e96]
                - paragraph [ref=e100]: Giám sát hành trình di chuyển thời gian thực, cơ chế Check-in/out tự động và Nút báo động SOS khẩn cấp kết nối 113.
              - generic [ref=e101]:
                - article [ref=e102]:
                  - generic [ref=e103]:
                    - generic [ref=e104]: Toán · N.M.A
                    - generic [ref=e105]:
                      - generic [ref=e106]: Thứ 3, 06/10 (07:00 – 07:45)
                      - generic [ref=e110]: Địa điểm minh họa
                      - generic [ref=e114]: "Trạng thái: 🚨 ĐÃ BÁO ĐỘNG SOS"
                  - generic [ref=e115]:
                    - button "Bắt đầu di chuyển" [ref=e116] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e119] [cursor=pointer]
                    - button "Check-out ra về" [ref=e123] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e126] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [active] [ref=e133] [cursor=pointer]
                - article [ref=e139]:
                  - generic [ref=e140]:
                    - generic [ref=e141]: Tiếng Anh · P.K
                    - generic [ref=e142]:
                      - generic [ref=e143]: Thứ 5, 08/10 (08:30 – 09:15)
                      - generic [ref=e147]: Địa điểm minh họa
                  - generic [ref=e151]:
                    - button "Bắt đầu di chuyển" [ref=e152] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e155] [cursor=pointer]
                    - button "Check-out ra về" [ref=e159] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e162] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e169] [cursor=pointer]
                - article [ref=e175]:
                  - generic [ref=e176]:
                    - generic [ref=e177]: Vật lý · H.N
                    - generic [ref=e178]:
                      - generic [ref=e179]: Thứ 6, 09/10 (13:00 – 13:45)
                      - generic [ref=e183]: Địa điểm minh họa
                  - generic [ref=e187]:
                    - button "Bắt đầu di chuyển" [ref=e188] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e191] [cursor=pointer]
                    - button "Check-out ra về" [ref=e195] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e198] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e205] [cursor=pointer]
                - article [ref=e211]:
                  - generic [ref=e212]:
                    - generic [ref=e213]: Toán · L.A
                    - generic [ref=e214]:
                      - generic [ref=e215]: Thứ 4, 07/10 (14:30 – 15:15)
                      - generic [ref=e219]: Địa điểm minh họa
                  - generic [ref=e223]:
                    - button "Bắt đầu di chuyển" [ref=e224] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e227] [cursor=pointer]
                    - button "Check-out ra về" [ref=e231] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e234] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e241] [cursor=pointer]
                - article [ref=e247]:
                  - generic [ref=e248]:
                    - generic [ref=e249]: Tiếng Anh · M.K
                    - generic [ref=e250]:
                      - generic [ref=e251]: Thứ 7, 10/10 (16:45 – 17:30)
                      - generic [ref=e255]: Địa điểm minh họa
                  - generic [ref=e259]:
                    - button "Bắt đầu di chuyển" [ref=e260] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e263] [cursor=pointer]
                    - button "Check-out ra về" [ref=e267] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e270] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e277] [cursor=pointer]
            - generic [ref=e283]:
              - generic [ref=e284]:
                - button "Tuần trước" [ref=e285] [cursor=pointer]
                - strong [ref=e288]: "Tuần: 5/10/2026 – 11/10/2026"
                - button "Tuần sau" [ref=e289] [cursor=pointer]
              - generic [ref=e292]:
                - text: Thời lượng mỗi buổi
                - combobox "Thời lượng mỗi buổi" [ref=e293] [cursor=pointer]:
                  - option "45 phút" [selected]
                  - option "90 phút"
            - generic [ref=e294]:
              - generic [ref=e295]: Chưa chọn
              - generic [ref=e297]: Lịch rảnh
              - generic [ref=e299]: Lịch dạy
              - paragraph [ref=e301]: Mở chi tiết một giờ bằng dấu + ở trục giờ; chọn giờ để thêm nhanh, hoặc kéo khung rảnh để đổi ngày và giờ.
            - region "Lịch dạy và lịch rảnh của gia sư, cuộn ngang và dọc để xem đầy đủ" [ref=e302]:
              - generic [ref=e303]:
                - generic [ref=e304]: Giờ
                - generic [ref=e305]:
                  - strong [ref=e306]: Thứ 2
                  - text: 05-10
                  - button "Thêm lịch rảnh Thứ 2" [ref=e307] [cursor=pointer]
                - generic [ref=e309]:
                  - strong [ref=e310]: Thứ 3
                  - text: 06-10
                  - button "Thêm lịch rảnh Thứ 3" [ref=e311] [cursor=pointer]
                - generic [ref=e313]:
                  - strong [ref=e314]: Thứ 4
                  - text: 07-10
                  - button "Thêm lịch rảnh Thứ 4" [ref=e315] [cursor=pointer]
                - generic [ref=e317]:
                  - strong [ref=e318]: Thứ 5
                  - text: 08-10
                  - button "Thêm lịch rảnh Thứ 5" [ref=e319] [cursor=pointer]
                - generic [ref=e321]:
                  - strong [ref=e322]: Thứ 6
                  - text: 09-10
                  - button "Thêm lịch rảnh Thứ 6" [ref=e323] [cursor=pointer]
                - generic [ref=e325]:
                  - strong [ref=e326]: Thứ 7
                  - text: 10-10
                  - button "Thêm lịch rảnh Thứ 7" [ref=e327] [cursor=pointer]
                - generic [ref=e329]:
                  - strong [ref=e330]: CN
                  - text: 11-10
                  - button "Thêm lịch rảnh CN" [ref=e331] [cursor=pointer]
                - generic [ref=e333]:
                  - generic [ref=e335]:
                    - generic [ref=e336]: 06:00
                    - button "Mở chi tiết 06:00" [ref=e337] [cursor=pointer]
                  - generic [ref=e340]:
                    - generic [ref=e341]: 07:00
                    - button "Mở chi tiết 07:00" [ref=e342] [cursor=pointer]
                  - generic [ref=e345]:
                    - generic [ref=e346]: 08:00
                    - button "Mở chi tiết 08:00" [ref=e347] [cursor=pointer]
                  - generic [ref=e350]:
                    - generic [ref=e351]: 09:00
                    - button "Mở chi tiết 09:00" [ref=e352] [cursor=pointer]
                  - generic [ref=e355]:
                    - generic [ref=e356]: 10:00
                    - button "Mở chi tiết 10:00" [ref=e357] [cursor=pointer]
                  - generic [ref=e360]:
                    - generic [ref=e361]: 11:00
                    - button "Mở chi tiết 11:00" [ref=e362] [cursor=pointer]
                  - generic [ref=e365]:
                    - generic [ref=e366]: 12:00
                    - button "Mở chi tiết 12:00" [ref=e367] [cursor=pointer]
                  - generic [ref=e370]:
                    - generic [ref=e371]: 13:00
                    - button "Mở chi tiết 13:00" [ref=e372] [cursor=pointer]
                  - generic [ref=e375]:
                    - generic [ref=e376]: 14:00
                    - button "Mở chi tiết 14:00" [ref=e377] [cursor=pointer]
                  - generic [ref=e380]:
                    - generic [ref=e381]: 15:00
                    - button "Mở chi tiết 15:00" [ref=e382] [cursor=pointer]
                  - generic [ref=e385]:
                    - generic [ref=e386]: 16:00
                    - button "Mở chi tiết 16:00" [ref=e387] [cursor=pointer]
                  - generic [ref=e390]:
                    - generic [ref=e391]: 17:00
                    - button "Mở chi tiết 17:00" [ref=e392] [cursor=pointer]
                  - generic [ref=e395]:
                    - generic [ref=e396]: 18:00
                    - button "Mở chi tiết 18:00" [ref=e397] [cursor=pointer]
                  - generic [ref=e400]:
                    - generic [ref=e401]: 19:00
                    - button "Mở chi tiết 19:00" [ref=e402] [cursor=pointer]
                  - generic [ref=e405]:
                    - generic [ref=e406]: 20:00
                    - button "Mở chi tiết 20:00" [ref=e407] [cursor=pointer]
                  - generic [ref=e410]:
                    - generic [ref=e411]: 21:00
                    - button "Mở chi tiết 21:00" [ref=e412] [cursor=pointer]
                  - generic [ref=e415]:
                    - generic [ref=e416]: 22:00
                    - button "Mở chi tiết 22:00" [ref=e417] [cursor=pointer]
                  - generic [ref=e420]:
                    - generic [ref=e421]: 23:00
                    - button "Mở chi tiết 23:00" [ref=e422] [cursor=pointer]
                  - generic [ref=e424]: 24:00
                - generic [ref=e426]:
                  - button "Toán N.M.A 2026-10-06 07:00–07:45" [ref=e428] [cursor=pointer]:
                    - generic [ref=e429]: 07:00
                    - strong [ref=e431]: Toán
                    - generic [ref=e432]: 07:45
                  - generic [ref=e433]:
                    - button "Lịch rảnh 2026-10-06 18:00–21:00" [ref=e434]:
                      - generic [ref=e435]: 18:00
                      - strong [ref=e437]: Lịch rảnh
                      - generic [ref=e438]: 21:00
                    - button "Xóa lịch rảnh 2026-10-06 18:00" [ref=e439] [cursor=pointer]
                - button "Toán L.A 2026-10-07 14:30–15:15" [ref=e445] [cursor=pointer]:
                  - generic [ref=e446]: 14:30
                  - strong [ref=e448]: Toán
                  - generic [ref=e449]: 15:15
                - generic [ref=e450]:
                  - button "Tiếng Anh P.K 2026-10-08 08:30–09:15" [ref=e452] [cursor=pointer]:
                    - generic [ref=e453]: 08:30
                    - strong [ref=e455]: Tiếng Anh
                    - generic [ref=e456]: 09:15
                  - generic [ref=e457]:
                    - button "Lịch rảnh 2026-10-08 18:00–21:00" [ref=e458]:
                      - generic [ref=e459]: 18:00
                      - strong [ref=e461]: Lịch rảnh
                      - generic [ref=e462]: 21:00
                    - button "Xóa lịch rảnh 2026-10-08 18:00" [ref=e463] [cursor=pointer]
                - generic [ref=e467]:
                  - button "Vật lý H.N 2026-10-09 13:00–13:45" [ref=e469] [cursor=pointer]:
                    - generic [ref=e470]: 13:00
                    - strong [ref=e472]: Vật lý
                    - generic [ref=e473]: 13:45
                  - generic [ref=e474]:
                    - button "Lịch rảnh 2026-10-09 18:00–21:00" [ref=e475]:
                      - generic [ref=e476]: 18:00
                      - strong [ref=e478]: Lịch rảnh
                      - generic [ref=e479]: 21:00
                    - button "Xóa lịch rảnh 2026-10-09 18:00" [ref=e480] [cursor=pointer]
                - generic [ref=e484]:
                  - generic [ref=e485]:
                    - button "Lịch rảnh 2026-10-10 09:00–12:00" [ref=e486]:
                      - generic [ref=e487]: 09:00
                      - strong [ref=e489]: Lịch rảnh
                      - generic [ref=e490]: 12:00
                    - button "Xóa lịch rảnh 2026-10-10 09:00" [ref=e491] [cursor=pointer]
                  - button "Tiếng Anh M.K 2026-10-10 16:45–17:30" [ref=e496] [cursor=pointer]:
                    - generic [ref=e497]: 16:45
                    - strong [ref=e499]: Tiếng Anh
                    - generic [ref=e500]: 17:30
            - paragraph [ref=e502]: Timeline hiển thị 06:00–24:00; lịch rảnh và buổi học dùng ngày cùng giờ bắt đầu và kết thúc. Dữ liệu được mô phỏng trong prototype.
    - complementary "Widget nhắn tin nhanh" [ref=e503]:
      - button "Mở cửa sổ trò chuyện" [ref=e504] [cursor=pointer]
  - alertdialog [ref=e508]:
    - button "Đóng cảnh báo" [ref=e509] [cursor=pointer]
    - heading "🚨 BÁO ĐỘNG SOS KHẨN CẤP ĐÃ KÍCH HOẠT!" [level=2] [ref=e519]
    - paragraph [ref=e520]: Tín hiệu khẩn cấp đã được gửi tới Ban Quản Trị TutorNearMe và trung tâm ứng cứu khẩn cấp 24/7.
    - generic [ref=e521]:
      - generic [ref=e522]:
        - strong [ref=e523]: "Buổi dạy:"
        - text: Toán · N.M.A
      - generic [ref=e524]:
        - strong [ref=e525]: "Địa điểm:"
        - text: Địa điểm minh họa
      - generic [ref=e526]:
        - strong [ref=e527]: "Thời gian:"
        - text: Thứ 3, 06/10 (07:00 – 07:45)
      - generic [ref=e528]: ✓ Đã phát định vị GPS và gửi tin nhắn SMS khẩn cấp tới 3 người thân.
    - link "Gọi trực tiếp Hotline 113" [ref=e529] [cursor=pointer]:
      - /url: tel:113
    - button "Tôi đã an toàn / Đóng cảnh báo" [ref=e534] [cursor=pointer]
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
> 50  |   await expect(page.getByRole('alertdialog')).toHaveCount(0);
      |                                               ^ Error: expect(locator).toHaveCount(expected) failed
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