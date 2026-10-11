# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: timetable-history.spec.js >> INCOME-002 completed legacy Lesson explains its fee and accounting month without appearing in the wrong month
- Location: tests\e2e\timetable-history.spec.js:92:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Thu nhập', exact: true })

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
        - link "Yêu cầu học 5" [ref=e17] [cursor=pointer]:
          - /url: /tutor/requests
          - generic [ref=e21]: Yêu cầu học
          - generic [ref=e22]: "5"
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
                    - generic [ref=e106]: Thứ 5, 01/10 (08:30 – 09:15)
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
                    - generic [ref=e142]: Thứ 6, 02/10 (13:00 – 13:45)
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
                    - generic [ref=e178]: Thứ 4, 30/09 (14:30 – 15:15)
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
                    - generic [ref=e214]: Thứ 7, 03/10 (16:45 – 17:30)
                    - generic [ref=e218]: Địa điểm minh họa
                - generic [ref=e222]:
                  - button "Bắt đầu di chuyển" [ref=e223] [cursor=pointer]
                  - button "Check-in an toàn" [ref=e226] [cursor=pointer]
                  - button "Check-out ra về" [ref=e230] [cursor=pointer]
                  - button "Chia sẻ buổi dạy" [ref=e233] [cursor=pointer]
                  - button "SOS KHẨN CẤP" [ref=e240] [cursor=pointer]
              - article [ref=e246]:
                - generic [ref=e247]:
                  - generic [ref=e248]: Toán lớp 8 · Phụ huynh bé An
                  - generic [ref=e249]:
                    - generic [ref=e250]: Thứ 3, 29/09 (18:15 – 19:45)
                    - generic [ref=e254]: Bình Thạnh
                - generic [ref=e258]:
                  - button "Bắt đầu di chuyển" [ref=e259] [cursor=pointer]
                  - button "Check-in an toàn" [ref=e262] [cursor=pointer]
                  - button "Check-out ra về" [ref=e266] [cursor=pointer]
                  - button "Chia sẻ buổi dạy" [ref=e269] [cursor=pointer]
                  - button "SOS KHẨN CẤP" [ref=e276] [cursor=pointer]
              - article [ref=e282]:
                - generic [ref=e283]:
                  - generic [ref=e284]: Toán lớp 8 · Phụ huynh bé An
                  - generic [ref=e285]:
                    - generic [ref=e286]: Thứ 5, 01/10 (18:15 – 19:45)
                    - generic [ref=e290]: Bình Thạnh
                - generic [ref=e294]:
                  - button "Bắt đầu di chuyển" [ref=e295] [cursor=pointer]
                  - button "Check-in an toàn" [ref=e298] [cursor=pointer]
                  - button "Check-out ra về" [ref=e302] [cursor=pointer]
                  - button "Chia sẻ buổi dạy" [ref=e305] [cursor=pointer]
                  - button "SOS KHẨN CẤP" [ref=e312] [cursor=pointer]
          - generic [ref=e318]:
            - generic [ref=e319]:
              - button "Tuần trước" [ref=e320] [cursor=pointer]
              - strong [ref=e323]: "Tuần: 28/9/2026 – 4/10/2026"
              - button "Tuần sau" [ref=e324] [cursor=pointer]
            - generic [ref=e327]:
              - text: Thời lượng mỗi buổi
              - combobox "Thời lượng mỗi buổi" [ref=e328] [cursor=pointer]:
                - option "45 phút" [selected]
                - option "90 phút"
          - generic [ref=e329]:
            - generic [ref=e330]: Chưa chọn
            - generic [ref=e332]: Lịch rảnh
            - generic [ref=e334]: Lịch dạy
            - paragraph [ref=e336]: Mở chi tiết một giờ bằng dấu + ở trục giờ; chọn giờ để thêm nhanh, hoặc kéo khung rảnh để đổi ngày và giờ.
          - alert [ref=e337]:
            - strong [ref=e338]: Trùng lịch trong dữ liệu đã lưu
            - paragraph [ref=e339]: Các lớp dưới đây có giờ trùng nhau và được hiển thị ở cột riêng. Ngày giờ được giữ nguyên; cần xác nhận lại lịch trước khi dạy.
            - list [ref=e340]:
              - listitem [ref=e341]: "Thứ 5, 01/10: Toán lớp 8 · Phụ huynh bé An (18:15–19:45) / Tiếng Anh · Nguyễn Minh Anh (18:00–18:45)"
          - region "Lịch dạy và lịch rảnh của gia sư, cuộn ngang và dọc để xem đầy đủ" [ref=e342]:
            - generic [ref=e343]:
              - generic [ref=e344]: Giờ
              - generic [ref=e345]:
                - strong [ref=e346]: Thứ 2
                - text: 28-09
                - button "Thêm lịch rảnh Thứ 2" [ref=e347] [cursor=pointer]
              - generic [ref=e349]:
                - strong [ref=e350]: Thứ 3
                - text: 29-09
                - button "Thêm lịch rảnh Thứ 3" [ref=e351] [cursor=pointer]
              - generic [ref=e353]:
                - strong [ref=e354]: Thứ 4
                - text: 30-09
                - button "Thêm lịch rảnh Thứ 4" [ref=e355] [cursor=pointer]
              - generic [ref=e357]:
                - strong [ref=e358]: Thứ 5
                - text: 01-10
                - button "Thêm lịch rảnh Thứ 5" [ref=e359] [cursor=pointer]
              - generic [ref=e361]:
                - strong [ref=e362]: Thứ 6
                - text: 02-10
                - button "Thêm lịch rảnh Thứ 6" [ref=e363] [cursor=pointer]
              - generic [ref=e365]:
                - strong [ref=e366]: Thứ 7
                - text: 03-10
                - button "Thêm lịch rảnh Thứ 7" [ref=e367] [cursor=pointer]
              - generic [ref=e369]:
                - strong [ref=e370]: CN
                - text: 04-10
                - button "Thêm lịch rảnh CN" [ref=e371] [cursor=pointer]
              - generic [ref=e373]:
                - generic [ref=e375]:
                  - generic [ref=e376]: 06:00
                  - button "Mở chi tiết 06:00" [ref=e377] [cursor=pointer]
                - generic [ref=e380]:
                  - generic [ref=e381]: 07:00
                  - button "Mở chi tiết 07:00" [ref=e382] [cursor=pointer]
                - generic [ref=e385]:
                  - generic [ref=e386]: 08:00
                  - button "Mở chi tiết 08:00" [ref=e387] [cursor=pointer]
                - generic [ref=e390]:
                  - generic [ref=e391]: 09:00
                  - button "Mở chi tiết 09:00" [ref=e392] [cursor=pointer]
                - generic [ref=e395]:
                  - generic [ref=e396]: 10:00
                  - button "Mở chi tiết 10:00" [ref=e397] [cursor=pointer]
                - generic [ref=e400]:
                  - generic [ref=e401]: 11:00
                  - button "Mở chi tiết 11:00" [ref=e402] [cursor=pointer]
                - generic [ref=e405]:
                  - generic [ref=e406]: 12:00
                  - button "Mở chi tiết 12:00" [ref=e407] [cursor=pointer]
                - generic [ref=e410]:
                  - generic [ref=e411]: 13:00
                  - button "Mở chi tiết 13:00" [ref=e412] [cursor=pointer]
                - generic [ref=e415]:
                  - generic [ref=e416]: 14:00
                  - button "Mở chi tiết 14:00" [ref=e417] [cursor=pointer]
                - generic [ref=e420]:
                  - generic [ref=e421]: 15:00
                  - button "Mở chi tiết 15:00" [ref=e422] [cursor=pointer]
                - generic [ref=e425]:
                  - generic [ref=e426]: 16:00
                  - button "Mở chi tiết 16:00" [ref=e427] [cursor=pointer]
                - generic [ref=e430]:
                  - generic [ref=e431]: 17:00
                  - button "Mở chi tiết 17:00" [ref=e432] [cursor=pointer]
                - generic [ref=e435]:
                  - generic [ref=e436]: 18:00
                  - button "Mở chi tiết 18:00" [ref=e437] [cursor=pointer]
                - generic [ref=e440]:
                  - generic [ref=e441]: 19:00
                  - button "Mở chi tiết 19:00" [ref=e442] [cursor=pointer]
                - generic [ref=e445]:
                  - generic [ref=e446]: 20:00
                  - button "Mở chi tiết 20:00" [ref=e447] [cursor=pointer]
                - generic [ref=e450]:
                  - generic [ref=e451]: 21:00
                  - button "Mở chi tiết 21:00" [ref=e452] [cursor=pointer]
                - generic [ref=e455]:
                  - generic [ref=e456]: 22:00
                  - button "Mở chi tiết 22:00" [ref=e457] [cursor=pointer]
                - generic [ref=e460]:
                  - generic [ref=e461]: 23:00
                  - button "Mở chi tiết 23:00" [ref=e462] [cursor=pointer]
                - generic [ref=e464]: 24:00
              - generic [ref=e466]:
                - button "Toán N.M.A · Hoàn tất 2026-09-29 07:00–07:45" [active] [ref=e468] [cursor=pointer]:
                  - generic [ref=e469]: 07:00
                  - strong [ref=e471]: Toán
                  - generic [ref=e472]: 07:45
                - generic [ref=e473]:
                  - button "Lịch rảnh 2026-09-29 18:00–18:15" [ref=e474]:
                    - generic [ref=e475]: 18:00
                    - generic:
                      - strong: Lịch rảnh
                    - generic [ref=e476]: 18:15
                  - button "Xóa lịch rảnh 2026-09-29 18:00" [ref=e477] [cursor=pointer]
                - button "Toán lớp 8 Phụ huynh bé An 2026-09-29 18:15–19:45" [ref=e482] [cursor=pointer]:
                  - generic [ref=e483]: 18:15
                  - generic [ref=e484]:
                    - strong [ref=e485]: Toán lớp 8
                    - generic [ref=e486]: Phụ huynh bé An
                  - generic [ref=e487]: 19:45
                - generic [ref=e488]:
                  - button "Lịch rảnh 2026-09-29 19:45–21:00" [ref=e489]:
                    - generic [ref=e490]: 19:45
                    - strong [ref=e492]: Lịch rảnh
                    - generic [ref=e493]: 21:00
                  - button "Xóa lịch rảnh 2026-09-29 19:45" [ref=e494] [cursor=pointer]
              - button "Toán L.A 2026-09-30 14:30–15:15" [ref=e500] [cursor=pointer]:
                - generic [ref=e501]: 14:30
                - strong [ref=e503]: Toán
                - generic [ref=e504]: 15:15
              - generic [ref=e505]:
                - button "Tiếng Anh P.K 2026-10-01 08:30–09:15" [ref=e507] [cursor=pointer]:
                  - generic [ref=e508]: 08:30
                  - strong [ref=e510]: Tiếng Anh
                  - generic [ref=e511]: 09:15
                - button "Tiếng Anh Nguyễn Minh Anh · Hoàn tất 2026-10-01 18:00–18:45" [ref=e513] [cursor=pointer]:
                  - generic [ref=e514]: 18:00
                  - strong [ref=e516]: Tiếng Anh
                  - generic [ref=e517]: 18:45
                - button "Toán lớp 8 Phụ huynh bé An 2026-10-01 18:15–19:45" [ref=e519] [cursor=pointer]:
                  - generic [ref=e520]: 18:15
                  - generic [ref=e521]:
                    - strong [ref=e522]: Toán lớp 8
                    - generic [ref=e523]: Phụ huynh bé An
                  - generic [ref=e524]: 19:45
                - generic [ref=e525]:
                  - button "Lịch rảnh 2026-10-01 19:45–21:00" [ref=e526]:
                    - generic [ref=e527]: 19:45
                    - strong [ref=e529]: Lịch rảnh
                    - generic [ref=e530]: 21:00
                  - button "Xóa lịch rảnh 2026-10-01 19:45" [ref=e531] [cursor=pointer]
              - generic [ref=e535]:
                - button "Vật lý H.N 2026-10-02 13:00–13:45" [ref=e537] [cursor=pointer]:
                  - generic [ref=e538]: 13:00
                  - strong [ref=e540]: Vật lý
                  - generic [ref=e541]: 13:45
                - generic [ref=e542]:
                  - button "Lịch rảnh 2026-10-02 18:15–19:00" [ref=e543]:
                    - generic [ref=e544]: 18:15
                    - strong [ref=e546]: Lịch rảnh
                    - generic [ref=e547]: 19:00
                  - button "Xóa lịch rảnh 2026-10-02 18:15" [ref=e548] [cursor=pointer]
                - button "IELTS Học sinh THPT · Hoàn tất 2026-10-02 19:00–19:45" [ref=e553] [cursor=pointer]:
                  - generic [ref=e554]: 19:00
                  - strong [ref=e556]: IELTS
                  - generic [ref=e557]: 19:45
                - generic [ref=e558]:
                  - button "Lịch rảnh 2026-10-02 19:45–22:00" [ref=e559]:
                    - generic [ref=e560]: 19:45
                    - strong [ref=e562]: Lịch rảnh
                    - generic [ref=e563]: 22:00
                  - button "Xóa lịch rảnh 2026-10-02 19:45" [ref=e564] [cursor=pointer]
              - generic [ref=e568]:
                - button "Tiếng Anh Ngọc Lan · Hoàn tất 2026-10-03 09:00–09:45" [ref=e570] [cursor=pointer]:
                  - generic [ref=e571]: 09:00
                  - strong [ref=e573]: Tiếng Anh
                  - generic [ref=e574]: 09:45
                - generic [ref=e575]:
                  - button "Lịch rảnh 2026-10-03 09:45–12:00" [ref=e576]:
                    - generic [ref=e577]: 09:45
                    - strong [ref=e579]: Lịch rảnh
                    - generic [ref=e580]: 12:00
                  - button "Xóa lịch rảnh 2026-10-03 09:45" [ref=e581] [cursor=pointer]
                - button "Tiếng Anh M.K 2026-10-03 16:45–17:30" [ref=e586] [cursor=pointer]:
                  - generic [ref=e587]: 16:45
                  - strong [ref=e589]: Tiếng Anh
                  - generic [ref=e590]: 17:30
          - paragraph [ref=e592]: Timeline hiển thị 06:00–24:00; lịch rảnh và buổi học dùng ngày cùng giờ bắt đầu và kết thúc. Dữ liệu được mô phỏng trong prototype.
  - complementary "Widget nhắn tin nhanh" [ref=e593]:
    - button "Mở cửa sổ trò chuyện" [ref=e594] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { login, resetDemo } from './demoHelpers.js';
  3   | import { createDemoState, decideRequest } from '../../src/features/domain/demoDomain.js';
  4   | 
  5   | function legacyWeek() {
  6   |   const referenceTime = new Date('2026-10-04T10:00:00+07:00');
  7   |   const state = createDemoState(referenceTime);
  8   |   state.lessons = state.lessons.filter((lesson) => !lesson.id.startsWith('history-'));
  9   |   const accepted = decideRequest(state, 'req-1', 'accepted', 'quoc-bao').state;
  10  |   accepted.lessons[0].status = 'completed';
  11  |   delete accepted.lessons[0].sessionFee;
  12  |   accepted.availability = accepted.availability.filter((range) => range.date !== '2026-10-02');
  13  |   accepted.availability.push({ id: 'runtime-friday-range', tutorId: 'quoc-bao', date: '2026-10-02', start: 1095, end: 1320 });
  14  |   return { state: accepted, referenceTime };
  15  | }
  16  | 
  17  | test('SCHED-005 approved cleanup keeps Thursday English and Friday IELTS across reload', async ({ page }, testInfo) => {
  18  |   const setup = legacyWeek();
  19  |   delete setup.state.appliedDemoCleanups;
  20  |   await resetDemo(page, setup);
  21  |   await login(page, 'giabao', '/tutor/timetable');
  22  |   await expect(page.getByRole('heading', { name: 'Lịch dạy học', exact: true })).toBeVisible();
  23  |   await expect(page.getByRole('button', { name: /Toán lớp 8 Phụ huynh bé An 2026-10-01/ })).toHaveCount(0);
  24  |   await expect(page.getByRole('button', { name: /Toán lớp 8 Phụ huynh bé An 2026-09-29/ })).toBeVisible();
  25  |   await page.getByRole('button', { name: /Tiếng Anh Nguyễn Minh Anh.*2026-10-01/ }).click();
  26  |   await expect(page.getByRole('dialog')).toContainText('Nguyễn Minh Anh');
  27  |   await page.keyboard.press('Escape');
  28  |   await expect(page.getByRole('button', { name: /Lịch rảnh 2026-10-02 18:/ })).toHaveCount(0);
  29  |   await expect(page.getByRole('button', { name: /Lịch rảnh 2026-10-02 19:45/ })).toHaveCount(0);
  30  |   await page.getByRole('button', { name: /IELTS Học sinh THPT.*2026-10-02/ }).click();
  31  |   await expect(page.getByRole('dialog')).toContainText('Học sinh THPT');
  32  |   await page.keyboard.press('Escape');
  33  |   await expect(page.getByRole('alert')).toHaveCount(0);
  34  |   await page.screenshot({ path: testInfo.outputPath('approved-demo-cleanup.png'), fullPage: true });
  35  |   await page.reload();
  36  |   await expect(page.getByRole('heading', { name: 'Lịch dạy học', exact: true })).toBeVisible();
  37  |   await expect(page.getByRole('button', { name: /Toán lớp 8 Phụ huynh bé An 2026-10-01/ })).toHaveCount(0);
  38  | });
  39  | 
  40  | test('SCHED-003 restoring the previous demo week cuts IELTS out of saved Friday availability', async ({ page }) => {
  41  |   await resetDemo(page, legacyWeek());
  42  |   await login(page, 'giabao', '/tutor/timetable');
  43  |   await expect(page.getByRole('heading', { name: 'Lịch dạy học', exact: true })).toBeVisible();
  44  |   await expect(page.getByRole('button', { name: 'Lịch rảnh 2026-10-02 18:15–22:00', exact: true })).toHaveCount(0);
  45  |   await expect(page.getByRole('button', { name: 'Lịch rảnh 2026-10-02 18:15–19:00', exact: true })).toBeVisible();
  46  |   await expect(page.getByRole('button', { name: 'Lịch rảnh 2026-10-02 19:45–22:00', exact: true })).toBeVisible();
  47  |   await expect(page.getByRole('button', { name: /IELTS Học sinh THPT.*2026-10-02/ })).toBeVisible();
  48  |   await page.reload();
  49  |   await expect(page.getByRole('button', { name: 'Lịch rảnh 2026-10-02 18:15–22:00', exact: true })).toHaveCount(0);
  50  | });
  51  | 
  52  | for (const width of [1440, 1024, 390]) {
  53  |   test(`SCHED-004 persisted overlapping lessons remain separately readable and clickable at ${width}px`, async ({ page }, testInfo) => {
  54  |     await resetDemo(page, legacyWeek());
  55  |     await page.setViewportSize({ width, height: 900 });
  56  |     const errors = [];
  57  |     page.on('pageerror', (error) => errors.push(error.message));
  58  |     page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  59  |     await login(page, 'giabao', '/tutor/timetable');
  60  |     const english = page.getByRole('button', { name: /Tiếng Anh Nguyễn Minh Anh.*2026-10-01/ });
  61  |     const math = page.getByRole('button', { name: /Toán lớp 8 Phụ huynh bé An 2026-10-01/ });
  62  |     await english.scrollIntoViewIfNeeded();
  63  |     await page.screenshot({ path: testInfo.outputPath('overlapping-lessons.png') });
  64  |     const first = await english.boundingBox();
  65  |     const second = await math.boundingBox();
  66  |     const intersects = first.x < second.x + second.width && first.x + first.width > second.x && first.y < second.y + second.height && first.y + first.height > second.y;
  67  |     expect(intersects, 'both Lesson hit targets must remain visible, never stacked over one another').toBe(false);
  68  |     expect(Math.min(first.width, second.width), 'overlap lanes must not squeeze readable content').toBeGreaterThanOrEqual(110);
  69  |     await expect(page.getByRole('alert')).toContainText('Trùng lịch');
  70  |     await expect(page.getByRole('alert')).toContainText('Nguyễn Minh Anh');
  71  |     await expect(page.getByRole('alert')).toContainText('Phụ huynh bé An');
  72  |     const alertTitle = await page.getByRole('alert').locator('strong').boundingBox();
  73  |     const alertBody = await page.getByRole('alert').locator('p').boundingBox();
  74  |     expect(alertBody.y, 'conflict explanation must wrap below its heading, not squeeze beside it').toBeGreaterThanOrEqual(alertTitle.y + alertTitle.height);
  75  |     const alertBounds = await page.getByRole('alert').boundingBox();
  76  |     const conflictRow = await page.getByRole('alert').getByRole('listitem').first().boundingBox();
  77  |     expect(conflictRow.x - alertBounds.x, 'list markers must stay inside the alert border').toBeGreaterThanOrEqual(24);
  78  |     for (const [button, learner] of [[english, 'Nguyễn Minh Anh'], [math, 'Phụ huynh bé An']]) {
  79  |       await button.click();
  80  |       await expect(page.getByRole('dialog')).toContainText(learner);
  81  |       await page.keyboard.press('Escape');
  82  |     }
  83  |     await page.getByRole('button', { name: 'Mở chi tiết 18:00', exact: true }).click();
  84  |     const expandedFirst = await english.boundingBox();
  85  |     const expandedSecond = await math.boundingBox();
  86  |     expect(expandedFirst.x + expandedFirst.width).toBeLessThanOrEqual(expandedSecond.x);
  87  |     await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
  88  |     expect(errors).toEqual([]);
  89  |   });
  90  | }
  91  | 
  92  | test('INCOME-002 completed legacy Lesson explains its fee and accounting month without appearing in the wrong month', async ({ page }) => {
  93  |   await resetDemo(page, legacyWeek());
  94  |   await login(page, 'giabao', '/tutor/timetable');
  95  |   await page.getByRole('button', { name: /Toán N.M.A.*Hoàn tất 2026-09-29/ }).click();
  96  |   const modal = page.getByRole('dialog');
  97  |   await expect(modal).toContainText('29/09/2026');
  98  |   await expect(modal).toContainText('220.000đ / buổi');
  99  |   await expect(modal).toContainText('thu nhập tháng 09/2026');
  100 |   await page.keyboard.press('Escape');
> 101 |   await page.getByRole('link', { name: 'Thu nhập', exact: true }).click();
      |                                                                   ^ Error: locator.click: Test timeout of 60000ms exceeded.
  102 |   await expect(page.getByLabel('Tổng quan thu nhập tháng hiện tại')).toContainText('660.000đ');
  103 |   await expect(page.getByRole('table')).not.toContainText('N.M.A');
  104 |   await expect(page.getByLabel('Giá trị thu nhập theo tháng').getByRole('listitem').nth(4)).toContainText('1.100.000đ');
  105 | });
  106 | 
```