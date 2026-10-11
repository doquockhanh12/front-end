# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-tutor-audit.spec.js >> UI-COMP-T08 completing a funded Lesson disburses its linked escrow exactly once
- Location: tests\e2e\completion-tutor-audit.spec.js:87:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "disbursed"
Received: "held"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
                    - generic [ref=e104]: Tiếng Anh · P.K
                    - generic [ref=e105]:
                      - generic [ref=e106]: Thứ 5, 08/10 (08:30 – 09:15)
                      - generic [ref=e110]: Địa điểm minh họa
                  - generic [ref=e114]:
                    - button "Bắt đầu di chuyển" [ref=e115] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e118] [cursor=pointer]
                    - button "Check-out ra về" [ref=e122] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e125] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e132] [cursor=pointer]
                - article [ref=e138]:
                  - generic [ref=e139]:
                    - generic [ref=e140]: Vật lý · H.N
                    - generic [ref=e141]:
                      - generic [ref=e142]: Thứ 6, 09/10 (13:00 – 13:45)
                      - generic [ref=e146]: Địa điểm minh họa
                  - generic [ref=e150]:
                    - button "Bắt đầu di chuyển" [ref=e151] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e154] [cursor=pointer]
                    - button "Check-out ra về" [ref=e158] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e161] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e168] [cursor=pointer]
                - article [ref=e174]:
                  - generic [ref=e175]:
                    - generic [ref=e176]: Toán · L.A
                    - generic [ref=e177]:
                      - generic [ref=e178]: Thứ 4, 07/10 (14:30 – 15:15)
                      - generic [ref=e182]: Địa điểm minh họa
                  - generic [ref=e186]:
                    - button "Bắt đầu di chuyển" [ref=e187] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e190] [cursor=pointer]
                    - button "Check-out ra về" [ref=e194] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e197] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e204] [cursor=pointer]
                - article [ref=e210]:
                  - generic [ref=e211]:
                    - generic [ref=e212]: Tiếng Anh · M.K
                    - generic [ref=e213]:
                      - generic [ref=e214]: Thứ 7, 10/10 (16:45 – 17:30)
                      - generic [ref=e218]: Địa điểm minh họa
                  - generic [ref=e222]:
                    - button "Bắt đầu di chuyển" [ref=e223] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e226] [cursor=pointer]
                    - button "Check-out ra về" [ref=e230] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e233] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e240] [cursor=pointer]
            - generic [ref=e246]:
              - generic [ref=e247]:
                - button "Tuần trước" [ref=e248] [cursor=pointer]
                - strong [ref=e251]: "Tuần: 5/10/2026 – 11/10/2026"
                - button "Tuần sau" [ref=e252] [cursor=pointer]
              - generic [ref=e255]:
                - text: Thời lượng mỗi buổi
                - combobox "Thời lượng mỗi buổi" [ref=e256] [cursor=pointer]:
                  - option "45 phút" [selected]
                  - option "90 phút"
            - generic [ref=e257]:
              - generic [ref=e258]: Chưa chọn
              - generic [ref=e260]: Lịch rảnh
              - generic [ref=e262]: Lịch dạy
              - paragraph [ref=e264]: Mở chi tiết một giờ bằng dấu + ở trục giờ; chọn giờ để thêm nhanh, hoặc kéo khung rảnh để đổi ngày và giờ.
            - region "Lịch dạy và lịch rảnh của gia sư, cuộn ngang và dọc để xem đầy đủ" [ref=e265]:
              - generic [ref=e266]:
                - generic [ref=e267]: Giờ
                - generic [ref=e268]:
                  - strong [ref=e269]: Thứ 2
                  - text: 05-10
                  - button "Thêm lịch rảnh Thứ 2" [ref=e270] [cursor=pointer]
                - generic [ref=e272]:
                  - strong [ref=e273]: Thứ 3
                  - text: 06-10
                  - button "Thêm lịch rảnh Thứ 3" [ref=e274] [cursor=pointer]
                - generic [ref=e276]:
                  - strong [ref=e277]: Thứ 4
                  - text: 07-10
                  - button "Thêm lịch rảnh Thứ 4" [ref=e278] [cursor=pointer]
                - generic [ref=e280]:
                  - strong [ref=e281]: Thứ 5
                  - text: 08-10
                  - button "Thêm lịch rảnh Thứ 5" [ref=e282] [cursor=pointer]
                - generic [ref=e284]:
                  - strong [ref=e285]: Thứ 6
                  - text: 09-10
                  - button "Thêm lịch rảnh Thứ 6" [ref=e286] [cursor=pointer]
                - generic [ref=e288]:
                  - strong [ref=e289]: Thứ 7
                  - text: 10-10
                  - button "Thêm lịch rảnh Thứ 7" [ref=e290] [cursor=pointer]
                - generic [ref=e292]:
                  - strong [ref=e293]: CN
                  - text: 11-10
                  - button "Thêm lịch rảnh CN" [ref=e294] [cursor=pointer]
                - generic [ref=e296]:
                  - generic [ref=e298]:
                    - generic [ref=e299]: 06:00
                    - button "Mở chi tiết 06:00" [ref=e300] [cursor=pointer]
                  - generic [ref=e303]:
                    - generic [ref=e304]: 07:00
                    - button "Mở chi tiết 07:00" [ref=e305] [cursor=pointer]
                  - generic [ref=e308]:
                    - generic [ref=e309]: 08:00
                    - button "Mở chi tiết 08:00" [ref=e310] [cursor=pointer]
                  - generic [ref=e313]:
                    - generic [ref=e314]: 09:00
                    - button "Mở chi tiết 09:00" [ref=e315] [cursor=pointer]
                  - generic [ref=e318]:
                    - generic [ref=e319]: 10:00
                    - button "Mở chi tiết 10:00" [ref=e320] [cursor=pointer]
                  - generic [ref=e323]:
                    - generic [ref=e324]: 11:00
                    - button "Mở chi tiết 11:00" [ref=e325] [cursor=pointer]
                  - generic [ref=e328]:
                    - generic [ref=e329]: 12:00
                    - button "Mở chi tiết 12:00" [ref=e330] [cursor=pointer]
                  - generic [ref=e333]:
                    - generic [ref=e334]: 13:00
                    - button "Mở chi tiết 13:00" [ref=e335] [cursor=pointer]
                  - generic [ref=e338]:
                    - generic [ref=e339]: 14:00
                    - button "Mở chi tiết 14:00" [ref=e340] [cursor=pointer]
                  - generic [ref=e343]:
                    - generic [ref=e344]: 15:00
                    - button "Mở chi tiết 15:00" [ref=e345] [cursor=pointer]
                  - generic [ref=e348]:
                    - generic [ref=e349]: 16:00
                    - button "Mở chi tiết 16:00" [ref=e350] [cursor=pointer]
                  - generic [ref=e353]:
                    - generic [ref=e354]: 17:00
                    - button "Mở chi tiết 17:00" [ref=e355] [cursor=pointer]
                  - generic [ref=e358]:
                    - generic [ref=e359]: 18:00
                    - button "Mở chi tiết 18:00" [ref=e360] [cursor=pointer]
                  - generic [ref=e363]:
                    - generic [ref=e364]: 19:00
                    - button "Mở chi tiết 19:00" [ref=e365] [cursor=pointer]
                  - generic [ref=e368]:
                    - generic [ref=e369]: 20:00
                    - button "Mở chi tiết 20:00" [ref=e370] [cursor=pointer]
                  - generic [ref=e373]:
                    - generic [ref=e374]: 21:00
                    - button "Mở chi tiết 21:00" [ref=e375] [cursor=pointer]
                  - generic [ref=e378]:
                    - generic [ref=e379]: 22:00
                    - button "Mở chi tiết 22:00" [ref=e380] [cursor=pointer]
                  - generic [ref=e383]:
                    - generic [ref=e384]: 23:00
                    - button "Mở chi tiết 23:00" [ref=e385] [cursor=pointer]
                  - generic [ref=e387]: 24:00
                - generic [ref=e389]:
                  - button "Toán N.M.A · Hoàn tất 2026-10-06 07:00–07:45" [ref=e391] [cursor=pointer]:
                    - generic [ref=e392]: 07:00
                    - strong [ref=e394]: Toán
                    - generic [ref=e395]: 07:45
                  - generic [ref=e396]:
                    - button "Lịch rảnh 2026-10-06 18:00–21:00" [ref=e397]:
                      - generic [ref=e398]: 18:00
                      - strong [ref=e400]: Lịch rảnh
                      - generic [ref=e401]: 21:00
                    - button "Xóa lịch rảnh 2026-10-06 18:00" [ref=e402] [cursor=pointer]
                - button "Toán L.A 2026-10-07 14:30–15:15" [ref=e408] [cursor=pointer]:
                  - generic [ref=e409]: 14:30
                  - strong [ref=e411]: Toán
                  - generic [ref=e412]: 15:15
                - generic [ref=e413]:
                  - button "Tiếng Anh P.K 2026-10-08 08:30–09:15" [ref=e415] [cursor=pointer]:
                    - generic [ref=e416]: 08:30
                    - strong [ref=e418]: Tiếng Anh
                    - generic [ref=e419]: 09:15
                  - generic [ref=e420]:
                    - button "Lịch rảnh 2026-10-08 18:00–21:00" [ref=e421]:
                      - generic [ref=e422]: 18:00
                      - strong [ref=e424]: Lịch rảnh
                      - generic [ref=e425]: 21:00
                    - button "Xóa lịch rảnh 2026-10-08 18:00" [ref=e426] [cursor=pointer]
                - generic [ref=e430]:
                  - button "Vật lý H.N 2026-10-09 13:00–13:45" [ref=e432] [cursor=pointer]:
                    - generic [ref=e433]: 13:00
                    - strong [ref=e435]: Vật lý
                    - generic [ref=e436]: 13:45
                  - generic [ref=e437]:
                    - button "Lịch rảnh 2026-10-09 18:00–21:00" [ref=e438]:
                      - generic [ref=e439]: 18:00
                      - strong [ref=e441]: Lịch rảnh
                      - generic [ref=e442]: 21:00
                    - button "Xóa lịch rảnh 2026-10-09 18:00" [ref=e443] [cursor=pointer]
                - generic [ref=e447]:
                  - generic [ref=e448]:
                    - button "Lịch rảnh 2026-10-10 09:00–12:00" [ref=e449]:
                      - generic [ref=e450]: 09:00
                      - strong [ref=e452]: Lịch rảnh
                      - generic [ref=e453]: 12:00
                    - button "Xóa lịch rảnh 2026-10-10 09:00" [ref=e454] [cursor=pointer]
                  - button "Tiếng Anh M.K 2026-10-10 16:45–17:30" [ref=e459] [cursor=pointer]:
                    - generic [ref=e460]: 16:45
                    - strong [ref=e462]: Tiếng Anh
                    - generic [ref=e463]: 17:30
            - paragraph [ref=e465]: Timeline hiển thị 06:00–24:00; lịch rảnh và buổi học dùng ngày cùng giờ bắt đầu và kết thúc. Dữ liệu được mô phỏng trong prototype.
    - complementary "Widget nhắn tin nhanh" [ref=e466]:
      - button "Mở cửa sổ trò chuyện" [ref=e467] [cursor=pointer]
  - dialog [ref=e471]:
    - banner [ref=e472]:
      - generic [ref=e473]:
        - paragraph [ref=e474]: BUỔI DẠY
        - heading "Chi tiết lớp học" [level=2] [ref=e475]
      - button "Đóng chi tiết lớp học" [ref=e476] [cursor=pointer]
    - generic [ref=e480]:
      - generic [ref=e481]:
        - term [ref=e482]: Môn học
        - definition [ref=e483]: Toán
      - generic [ref=e484]:
        - term [ref=e485]: Người học
        - definition [ref=e486]: N.M.A
      - generic [ref=e487]:
        - term [ref=e488]: Thời gian
        - definition [ref=e489]: Thứ 3, 06/10/202607:00–07:45
      - generic [ref=e490]:
        - term [ref=e491]: Địa điểm
        - definition [ref=e492]: Địa điểm minh họa
      - generic [ref=e493]:
        - term [ref=e494]: Học phí
        - definition [ref=e495]: 220.000đ / buổi
      - generic [ref=e496]:
        - term [ref=e497]: Trạng thái
        - definition [ref=e498]: Hoàn tất
    - paragraph [ref=e501]: Buổi học này được tính vào thu nhập tháng 10/2026 theo ngày học.
    - generic [ref=e502]:
      - text: Ghi chú cho lớp học
      - textbox "Ghi chú cho lớp học" [ref=e503]:
        - /placeholder: Nội dung đã học, bài tập hoặc lưu ý cho buổi sau…
    - status [ref=e504]: Đã đánh dấu hoàn tất và lưu ghi chú.
    - contentinfo [ref=e505]:
      - button "Lưu ghi chú" [disabled] [ref=e506]
```

# Test source

```ts
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
> 103 |   expect(after.escrowTransactions.find(e => e.id === linked.id).status).toBe('disbursed');
      |                                                                         ^ Error: expect(received).toBe(expected) // Object.is equality
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