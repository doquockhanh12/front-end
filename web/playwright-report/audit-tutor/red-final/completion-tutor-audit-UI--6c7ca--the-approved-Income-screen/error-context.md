# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-tutor-audit.spec.js >> UI-COMP-T09 Tutor sidebar preserves a direct route to the approved Income screen
- Location: tests\e2e\completion-tutor-audit.spec.js:107:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.tutor-sidebar a[href="/tutor/income"]')
Expected: 1
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.tutor-sidebar a[href="/tutor/income"]') with timeout 5000ms
  - waiting for locator('.tutor-sidebar a[href="/tutor/income"]')
    14 × locator resolved to 0 elements
       - unexpected value "0"

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
        - generic [ref=e88]:
          - generic [ref=e89]:
            - heading "Xin chào, Trần Gia Bảo" [level=1] [ref=e90]
            - paragraph [ref=e96]: Cùng tiếp tục tạo ra tác động tích cực qua từng buổi học.
          - generic "Chỉ số tổng quan" [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]: Yêu cầu học mới
              - strong [ref=e100]: "6"
              - generic [ref=e101]: ↑ +6
              - link "Xem chi tiết" [ref=e102] [cursor=pointer]:
                - /url: "#requests-title"
            - generic [ref=e105]:
              - generic [ref=e106]: Lịch dạy tuần này
              - strong [ref=e107]: "5"
              - generic [ref=e108]: ↑ +2
              - link "Xem chi tiết" [ref=e109] [cursor=pointer]:
                - /url: "#teaching-calendar"
            - generic [ref=e112]:
              - generic [ref=e113]: Thu nhập tháng này
              - strong [ref=e114]: 660.000đ
              - link "Xem chi tiết" [ref=e115] [cursor=pointer]:
                - /url: /tutor/income
            - generic [ref=e118]:
              - generic [ref=e119]: Đánh giá trung bình
              - strong [ref=e120]: 4.9/5
              - link "Xem chi tiết" [ref=e121] [cursor=pointer]:
                - /url: "#tutor-profile-summary"
          - generic [ref=e124]:
            - region [ref=e125]:
              - generic [ref=e126]:
                - heading "Yêu cầu học mới (6)" [level=2] [ref=e127]
                - link "Xem tất cả" [ref=e128] [cursor=pointer]:
                  - /url: /tutor/requests
              - generic [ref=e131]:
                - article [ref=e132]:
                  - generic [ref=e133]:
                    - generic [ref=e134]: Toán lớp 8
                    - heading "Phụ huynh bé An" [level=3] [ref=e135]
                    - strong [ref=e136]: 180.000đ / buổi
                  - paragraph [ref=e137]: Bình Thạnh
                  - generic [ref=e141]:
                    - paragraph [ref=e142]: "Mong muốn: Muốn củng cố kiến thức học kỳ I."
                    - paragraph [ref=e143]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e144]: Tối thứ 3, 5
                  - paragraph [ref=e145]: 2 giờ trước
                  - generic [ref=e149]:
                    - link "Xem chi tiết" [ref=e150] [cursor=pointer]:
                      - /url: /tutor/requests/req-1
                    - generic [ref=e151]:
                      - button "Từ chối" [ref=e152] [cursor=pointer]
                      - button "Chấp nhận" [ref=e153] [cursor=pointer]
                - article [ref=e154]:
                  - generic [ref=e155]:
                    - generic [ref=e156]: Vật lý lớp 10
                    - heading "Nguyễn Khánh Linh" [level=3] [ref=e157]
                    - strong [ref=e158]: 200.000đ / buổi
                  - paragraph [ref=e159]: Thủ Đức
                  - generic [ref=e163]:
                    - paragraph [ref=e164]: "Mong muốn: Cần hỗ trợ phần điện học."
                    - paragraph [ref=e165]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e166]: Chiều cuối tuần
                  - paragraph [ref=e167]: 5 giờ trước
                  - generic [ref=e171]:
                    - link "Xem chi tiết" [ref=e172] [cursor=pointer]:
                      - /url: /tutor/requests/req-2
                    - generic [ref=e173]:
                      - button "Từ chối" [ref=e174] [cursor=pointer]
                      - button "Chấp nhận" [ref=e175] [cursor=pointer]
                - article [ref=e176]:
                  - generic [ref=e177]:
                    - generic [ref=e178]: Toán lớp 9
                    - heading "Phụ huynh bé Nam" [level=3] [ref=e179]
                    - strong [ref=e180]: 220.000đ / buổi
                  - paragraph [ref=e181]: Quận 3
                  - generic [ref=e185]:
                    - paragraph [ref=e186]: "Mong muốn: Ôn tập trước kỳ thi chuyển cấp."
                    - paragraph [ref=e187]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e188]: Tối thứ 2, 4
                  - paragraph [ref=e189]: Hôm qua
                  - generic [ref=e193]:
                    - link "Xem chi tiết" [ref=e194] [cursor=pointer]:
                      - /url: /tutor/requests/req-3
                    - generic [ref=e195]:
                      - button "Từ chối" [ref=e196] [cursor=pointer]
                      - button "Chấp nhận" [ref=e197] [cursor=pointer]
            - region [ref=e198]:
              - generic [ref=e199]:
                - heading "Lịch dạy học" [level=2] [ref=e200]
                - link "Chỉnh sửa lịch" [ref=e201] [cursor=pointer]:
                  - /url: /tutor/timetable
              - table [ref=e205]:
                - caption [ref=e206]: Tổng quan lịch rảnh đã lưu và buổi dạy theo ngày và buổi trong tuần.
                - rowgroup [ref=e207]:
                  - row [ref=e208]:
                    - columnheader "Buổi" [ref=e209]
                    - columnheader "T2" [ref=e211]
                    - columnheader "T3" [ref=e212]
                    - columnheader "T4" [ref=e213]
                    - columnheader "T5" [ref=e214]
                    - columnheader "T6" [ref=e215]
                    - columnheader "T7" [ref=e216]
                    - columnheader "CN" [ref=e217]
                - rowgroup [ref=e218]:
                  - row [ref=e219]:
                    - rowheader "Sáng 06:00–12:00" [ref=e220]:
                      - text: Sáng
                      - generic [ref=e221]: 06:00–12:00
                    - cell [ref=e222]:
                      - link "Sáng T2, chưa có lịch rảnh" [ref=e223] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e224]
                    - cell [ref=e225]:
                      - link "Sáng T3, chưa có lịch rảnh, có buổi dạy" [ref=e226] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e227]
                    - cell [ref=e229]:
                      - link "Sáng T4, chưa có lịch rảnh" [ref=e230] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e231]
                    - cell [ref=e232]:
                      - link "Sáng T5, chưa có lịch rảnh, có buổi dạy" [ref=e233] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e234]
                    - cell [ref=e236]:
                      - link "Sáng T6, chưa có lịch rảnh" [ref=e237] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e238]
                    - cell [ref=e239]:
                      - link "Sáng T7, có lịch rảnh" [ref=e240] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e241]
                    - cell [ref=e242]:
                      - link "Sáng CN, chưa có lịch rảnh" [ref=e243] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e244]
                  - row [ref=e245]:
                    - rowheader "Chiều 12:00–17:00" [ref=e246]:
                      - text: Chiều
                      - generic [ref=e247]: 12:00–17:00
                    - cell [ref=e248]:
                      - link "Chiều T2, chưa có lịch rảnh" [ref=e249] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e250]
                    - cell [ref=e251]:
                      - link "Chiều T3, chưa có lịch rảnh" [ref=e252] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e253]
                    - cell [ref=e254]:
                      - link "Chiều T4, chưa có lịch rảnh, có buổi dạy" [ref=e255] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e256]
                    - cell [ref=e258]:
                      - link "Chiều T5, chưa có lịch rảnh" [ref=e259] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e260]
                    - cell [ref=e261]:
                      - link "Chiều T6, chưa có lịch rảnh, có buổi dạy" [ref=e262] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e263]
                    - cell [ref=e265]:
                      - link "Chiều T7, chưa có lịch rảnh, có buổi dạy" [ref=e266] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e267]
                    - cell [ref=e269]:
                      - link "Chiều CN, chưa có lịch rảnh" [ref=e270] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e271]
                  - row [ref=e272]:
                    - rowheader "Tối 17:00–24:00" [ref=e273]:
                      - text: Tối
                      - generic [ref=e274]: 17:00–24:00
                    - cell [ref=e275]:
                      - link "Tối T2, chưa có lịch rảnh" [ref=e276] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e277]
                    - cell [ref=e278]:
                      - link "Tối T3, có lịch rảnh" [ref=e279] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e280]
                    - cell [ref=e281]:
                      - link "Tối T4, chưa có lịch rảnh" [ref=e282] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e283]
                    - cell [ref=e284]:
                      - link "Tối T5, có lịch rảnh" [ref=e285] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e286]
                    - cell [ref=e287]:
                      - link "Tối T6, có lịch rảnh" [ref=e288] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e289]
                    - cell [ref=e290]:
                      - link "Tối T7, chưa có lịch rảnh, có buổi dạy" [ref=e291] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e292]
                    - cell [ref=e294]:
                      - link "Tối CN, chưa có lịch rảnh" [ref=e295] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e296]
              - generic [ref=e297]:
                - generic [ref=e298]: Có lịch rảnh
                - generic [ref=e300]: Có buổi học
              - paragraph [ref=e302]: Lịch rảnh đã lưu dùng ngày và khoảng giờ cụ thể. Mở thời khóa biểu để chỉnh sửa.
              - generic [ref=e303]:
                - heading "Buổi dạy trong tuần (5)" [level=3] [ref=e304]
                - paragraph [ref=e305]:
                  - strong [ref=e306]: Toán
                  - text: 06/10/2026 · 07:00–07:45
                - paragraph [ref=e307]:
                  - strong [ref=e308]: Tiếng Anh
                  - text: 08/10/2026 · 08:30–09:15
                - paragraph [ref=e309]:
                  - strong [ref=e310]: Vật lý
                  - text: 09/10/2026 · 13:00–13:45
              - link "Xem toàn bộ thời khóa biểu" [ref=e311] [cursor=pointer]:
                - /url: /tutor/timetable
        - complementary "Hồ sơ, thu nhập và cập nhật nhanh" [ref=e314]:
          - generic [ref=e315]:
            - generic [ref=e316]:
              - heading "Hồ sơ gia sư" [level=2] [ref=e317]
              - link "Chỉnh sửa" [ref=e318] [cursor=pointer]:
                - /url: /tutor/profile
            - generic [ref=e321]:
              - img "Ảnh đại diện của Trần Gia Bảo" [ref=e322]:
                - generic [aria-hidden] [ref=e323]: GB
              - generic [ref=e324]:
                - heading "Trần Gia Bảo" [level=3] [ref=e325]
                - paragraph [ref=e326]: Gia sư tại Thủ Đức
                - generic "4.9 trên 5, 36 đánh giá" [ref=e327]: 4.9 (36 đánh giá)
            - generic [ref=e339]:
              - generic [ref=e340]:
                - generic [ref=e341]: Hồ sơ hoàn thiện
                - strong [ref=e342]: 85%
              - progressbar "Độ hoàn thiện hồ sơ" [ref=e343]
            - generic [ref=e344]:
              - generic [ref=e345]:
                - term [ref=e346]: Môn dạy
                - definition [ref=e347]: Tiếng Anh, IELTS
              - generic [ref=e348]:
                - term [ref=e349]: Khu vực
                - definition [ref=e350]: Thủ Đức
              - generic [ref=e351]:
                - term [ref=e352]: Mức phí
                - definition [ref=e353]: 220.000đ / buổi
          - generic [ref=e354]:
            - heading "Thu nhập / buổi học gần đây" [level=2] [ref=e356]
            - strong [ref=e357]: 660.000đ
            - paragraph [ref=e358]: Tháng 10/2026
            - generic [ref=e359]:
              - generic [ref=e360]:
                - generic [ref=e361]: 03/10
                - generic [ref=e362]: Tiếng Anh
                - strong [ref=e363]: 220.000đ
              - generic [ref=e364]:
                - generic [ref=e365]: 02/10
                - generic [ref=e366]: IELTS
                - strong [ref=e367]: 220.000đ
              - generic [ref=e368]:
                - generic [ref=e369]: 01/10
                - generic [ref=e370]: Tiếng Anh
                - strong [ref=e371]: 220.000đ
            - link "Xem thêm" [ref=e372] [cursor=pointer]:
              - /url: /tutor/income
          - generic [ref=e375]:
            - heading "Cập nhật nhanh" [level=2] [ref=e377]
            - generic [ref=e378]:
              - link "Chỉnh sửa hồ sơ" [ref=e379] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Quản lý khu vực" [ref=e384] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Cập nhật môn dạy" [ref=e389] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Thiết lập mức phí" [ref=e393] [cursor=pointer]:
                - /url: /tutor/profile
            - paragraph [ref=e398]: Đã lưu 2 phút trước
  - complementary "Widget nhắn tin nhanh" [ref=e399]:
    - button "Mở cửa sổ trò chuyện" [ref=e400] [cursor=pointer]
```

# Test source

```ts
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
  103 |   expect(after.escrowTransactions.find(e => e.id === linked.id).status).toBe('disbursed');
  104 |   expect(after.wallets['demo-tutor'].ledger.filter(tx => tx.type === 'lesson_disbursed' && tx.refId === linked.id)).toHaveLength(1);
  105 | });
  106 | 
  107 | test('UI-COMP-T09 Tutor sidebar preserves a direct route to the approved Income screen', async ({ page }) => {
  108 |   await resetDemo(page); await login(page, 'giabao', '/tutor/dashboard');
  109 |   const income = page.locator('.tutor-sidebar a[href="/tutor/income"]');
> 110 |   await expect(income).toHaveCount(1);
      |                        ^ Error: expect(locator).toHaveCount(expected) failed
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