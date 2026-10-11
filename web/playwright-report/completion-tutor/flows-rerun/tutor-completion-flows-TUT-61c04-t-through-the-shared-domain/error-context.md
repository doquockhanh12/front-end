# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tutor-completion-flows.spec.js >> TUTOR-FLOW lesson progress, material and learner review persist through the shared domain
- Location: tests\e2e\tutor-completion-flows.spec.js:43:1

# Error details

```
Error: locator.selectOption: Error: strict mode violation: getByRole('dialog', { name: 'Chi tiết lớp học' }).getByLabel('Đánh giá người học') resolved to 2 elements:
    1) <section aria-label="Đánh giá người học">…</section> aka getByRole('region', { name: 'Đánh giá người học' })
    2) <select>…</select> aka getByLabel('Đánh giá người học5 sao4 sao3')

Call log:
  - waiting for getByRole('dialog', { name: 'Chi tiết lớp học' }).getByLabel('Đánh giá người học')

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
          - link "Thu nhập" [ref=e39] [cursor=pointer]:
            - /url: /tutor/income
          - link "Hồ sơ gia sư" [ref=e44] [cursor=pointer]:
            - /url: /tutor/profile
          - link "Tin nhắn" [ref=e49] [cursor=pointer]:
            - /url: /messages
          - link "Kháng cáo" [ref=e53] [cursor=pointer]:
            - /url: /appeals
          - link "Trung tâm Trợ giúp" [ref=e59] [cursor=pointer]:
            - /url: /help
      - generic [ref=e64]:
        - banner [ref=e65]:
          - navigation "Điều hướng nhanh" [ref=e66]:
            - link "Tìm lớp gần tôi" [ref=e67] [cursor=pointer]:
              - /url: /tutor/map
            - link "Tổng Quan" [ref=e71] [cursor=pointer]:
              - /url: /tutor/dashboard
          - generic [ref=e77]:
            - button "Thông báo" [ref=e79] [cursor=pointer]:
              - generic [ref=e83]: "1"
            - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=e84] [cursor=pointer]:
              - /url: /tutor/profile
              - img "Ảnh đại diện của Trần Gia Bảo" [ref=e85]:
                - generic [aria-hidden] [ref=e86]: GB
              - generic [ref=e87]: giabao
            - button "Đăng xuất" [ref=e88] [cursor=pointer]
        - main [ref=e92]:
          - generic [ref=e94]:
            - text: KHÔNG GIAN GIA SƯ · DEMO
            - heading "Lịch dạy học & Khiên An Toàn" [level=1] [ref=e95]
            - paragraph [ref=e96]: Xem buổi dạy, giám sát an toàn hành trình và quản lý lịch rảnh từ 06:00 đến 24:00.
          - region "Thời khóa biểu lịch dạy và lịch rảnh" [ref=e97]:
            - region "Khiên an toàn gia sư" [ref=e98]:
              - generic [ref=e100]:
                - heading "Khiên An Toàn Gia Sư (Tutor Safety Shield)" [level=2] [ref=e101]
                - paragraph [ref=e105]: Ghi nhận Check-in/out và cảnh báo trong bản demo. Giữ SOS 3 giây; không gửi GPS, SMS hoặc gọi tự động.
              - generic [ref=e106]:
                - article [ref=e107]:
                  - generic [ref=e108]:
                    - generic [ref=e109]: Tiếng Anh · P.K
                    - generic [ref=e110]:
                      - generic [ref=e111]: Thứ 5, 08/10 (08:30 – 09:15)
                      - generic [ref=e115]: Địa điểm minh họa
                  - generic [ref=e119]:
                    - button "Bắt đầu di chuyển" [ref=e120] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e123] [cursor=pointer]
                    - button "Check-out ra về" [ref=e127] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e130] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e137] [cursor=pointer]
                - article [ref=e143]:
                  - generic [ref=e144]:
                    - generic [ref=e145]: Vật lý · H.N
                    - generic [ref=e146]:
                      - generic [ref=e147]: Thứ 6, 09/10 (13:00 – 13:45)
                      - generic [ref=e151]: Địa điểm minh họa
                  - generic [ref=e155]:
                    - button "Bắt đầu di chuyển" [ref=e156] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e159] [cursor=pointer]
                    - button "Check-out ra về" [ref=e163] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e166] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e173] [cursor=pointer]
                - article [ref=e179]:
                  - generic [ref=e180]:
                    - generic [ref=e181]: Toán · L.A
                    - generic [ref=e182]:
                      - generic [ref=e183]: Thứ 4, 07/10 (14:30 – 15:15)
                      - generic [ref=e187]: Địa điểm minh họa
                  - generic [ref=e191]:
                    - button "Bắt đầu di chuyển" [ref=e192] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e195] [cursor=pointer]
                    - button "Check-out ra về" [ref=e199] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e202] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e209] [cursor=pointer]
                - article [ref=e215]:
                  - generic [ref=e216]:
                    - generic [ref=e217]: Tiếng Anh · M.K
                    - generic [ref=e218]:
                      - generic [ref=e219]: Thứ 7, 10/10 (16:45 – 17:30)
                      - generic [ref=e223]: Địa điểm minh họa
                  - generic [ref=e227]:
                    - button "Bắt đầu di chuyển" [ref=e228] [cursor=pointer]
                    - button "Check-in an toàn" [ref=e231] [cursor=pointer]
                    - button "Check-out ra về" [ref=e235] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=e238] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=e245] [cursor=pointer]
            - generic [ref=e251]:
              - generic [ref=e252]:
                - button "Tuần trước" [ref=e253] [cursor=pointer]
                - strong [ref=e256]: "Tuần: 5/10/2026 – 11/10/2026"
                - button "Tuần sau" [ref=e257] [cursor=pointer]
              - generic [ref=e260]:
                - text: Thời lượng mỗi buổi
                - combobox "Thời lượng mỗi buổi" [ref=e261] [cursor=pointer]:
                  - option "45 phút" [selected]
                  - option "90 phút"
            - generic [ref=e262]:
              - generic [ref=e263]: Chưa chọn
              - generic [ref=e265]: Lịch rảnh
              - generic [ref=e267]: Lịch dạy
              - paragraph [ref=e269]: Mở chi tiết một giờ bằng dấu + ở trục giờ; chọn giờ để thêm nhanh, hoặc kéo khung rảnh để đổi ngày và giờ.
            - region "Lịch dạy và lịch rảnh của gia sư, cuộn ngang và dọc để xem đầy đủ" [ref=e270]:
              - generic [ref=e271]:
                - generic [ref=e272]: Giờ
                - generic [ref=e273]:
                  - strong [ref=e274]: Thứ 2
                  - text: 05-10
                  - button "Thêm lịch rảnh Thứ 2" [ref=e275] [cursor=pointer]
                - generic [ref=e277]:
                  - strong [ref=e278]: Thứ 3
                  - text: 06-10
                  - button "Thêm lịch rảnh Thứ 3" [ref=e279] [cursor=pointer]
                - generic [ref=e281]:
                  - strong [ref=e282]: Thứ 4
                  - text: 07-10
                  - button "Thêm lịch rảnh Thứ 4" [ref=e283] [cursor=pointer]
                - generic [ref=e285]:
                  - strong [ref=e286]: Thứ 5
                  - text: 08-10
                  - button "Thêm lịch rảnh Thứ 5" [ref=e287] [cursor=pointer]
                - generic [ref=e289]:
                  - strong [ref=e290]: Thứ 6
                  - text: 09-10
                  - button "Thêm lịch rảnh Thứ 6" [ref=e291] [cursor=pointer]
                - generic [ref=e293]:
                  - strong [ref=e294]: Thứ 7
                  - text: 10-10
                  - button "Thêm lịch rảnh Thứ 7" [ref=e295] [cursor=pointer]
                - generic [ref=e297]:
                  - strong [ref=e298]: CN
                  - text: 11-10
                  - button "Thêm lịch rảnh CN" [ref=e299] [cursor=pointer]
                - generic [ref=e301]:
                  - generic [ref=e303]:
                    - generic [ref=e304]: 06:00
                    - button "Mở chi tiết 06:00" [ref=e305] [cursor=pointer]
                  - generic [ref=e308]:
                    - generic [ref=e309]: 07:00
                    - button "Mở chi tiết 07:00" [ref=e310] [cursor=pointer]
                  - generic [ref=e313]:
                    - generic [ref=e314]: 08:00
                    - button "Mở chi tiết 08:00" [ref=e315] [cursor=pointer]
                  - generic [ref=e318]:
                    - generic [ref=e319]: 09:00
                    - button "Mở chi tiết 09:00" [ref=e320] [cursor=pointer]
                  - generic [ref=e323]:
                    - generic [ref=e324]: 10:00
                    - button "Mở chi tiết 10:00" [ref=e325] [cursor=pointer]
                  - generic [ref=e328]:
                    - generic [ref=e329]: 11:00
                    - button "Mở chi tiết 11:00" [ref=e330] [cursor=pointer]
                  - generic [ref=e333]:
                    - generic [ref=e334]: 12:00
                    - button "Mở chi tiết 12:00" [ref=e335] [cursor=pointer]
                  - generic [ref=e338]:
                    - generic [ref=e339]: 13:00
                    - button "Mở chi tiết 13:00" [ref=e340] [cursor=pointer]
                  - generic [ref=e343]:
                    - generic [ref=e344]: 14:00
                    - button "Mở chi tiết 14:00" [ref=e345] [cursor=pointer]
                  - generic [ref=e348]:
                    - generic [ref=e349]: 15:00
                    - button "Mở chi tiết 15:00" [ref=e350] [cursor=pointer]
                  - generic [ref=e353]:
                    - generic [ref=e354]: 16:00
                    - button "Mở chi tiết 16:00" [ref=e355] [cursor=pointer]
                  - generic [ref=e358]:
                    - generic [ref=e359]: 17:00
                    - button "Mở chi tiết 17:00" [ref=e360] [cursor=pointer]
                  - generic [ref=e363]:
                    - generic [ref=e364]: 18:00
                    - button "Mở chi tiết 18:00" [ref=e365] [cursor=pointer]
                  - generic [ref=e368]:
                    - generic [ref=e369]: 19:00
                    - button "Mở chi tiết 19:00" [ref=e370] [cursor=pointer]
                  - generic [ref=e373]:
                    - generic [ref=e374]: 20:00
                    - button "Mở chi tiết 20:00" [ref=e375] [cursor=pointer]
                  - generic [ref=e378]:
                    - generic [ref=e379]: 21:00
                    - button "Mở chi tiết 21:00" [ref=e380] [cursor=pointer]
                  - generic [ref=e383]:
                    - generic [ref=e384]: 22:00
                    - button "Mở chi tiết 22:00" [ref=e385] [cursor=pointer]
                  - generic [ref=e388]:
                    - generic [ref=e389]: 23:00
                    - button "Mở chi tiết 23:00" [ref=e390] [cursor=pointer]
                  - generic [ref=e392]: 24:00
                - generic [ref=e394]:
                  - button "Toán Nguyễn Minh Anh · Hoàn tất 2026-10-06 07:00–07:45" [ref=e396] [cursor=pointer]:
                    - generic [ref=e397]: 07:00
                    - strong [ref=e399]: Toán
                    - generic [ref=e400]: 07:45
                  - generic [ref=e401]:
                    - button "Lịch rảnh 2026-10-06 18:00–21:00" [ref=e402]:
                      - generic [ref=e403]: 18:00
                      - strong [ref=e405]: Lịch rảnh
                      - generic [ref=e406]: 21:00
                    - button "Xóa lịch rảnh 2026-10-06 18:00" [ref=e407] [cursor=pointer]
                - button "Toán L.A 2026-10-07 14:30–15:15" [ref=e413] [cursor=pointer]:
                  - generic [ref=e414]: 14:30
                  - strong [ref=e416]: Toán
                  - generic [ref=e417]: 15:15
                - generic [ref=e418]:
                  - button "Tiếng Anh P.K 2026-10-08 08:30–09:15" [ref=e420] [cursor=pointer]:
                    - generic [ref=e421]: 08:30
                    - strong [ref=e423]: Tiếng Anh
                    - generic [ref=e424]: 09:15
                  - generic [ref=e425]:
                    - button "Lịch rảnh 2026-10-08 18:00–21:00" [ref=e426]:
                      - generic [ref=e427]: 18:00
                      - strong [ref=e429]: Lịch rảnh
                      - generic [ref=e430]: 21:00
                    - button "Xóa lịch rảnh 2026-10-08 18:00" [ref=e431] [cursor=pointer]
                - generic [ref=e435]:
                  - button "Vật lý H.N 2026-10-09 13:00–13:45" [ref=e437] [cursor=pointer]:
                    - generic [ref=e438]: 13:00
                    - strong [ref=e440]: Vật lý
                    - generic [ref=e441]: 13:45
                  - generic [ref=e442]:
                    - button "Lịch rảnh 2026-10-09 18:00–21:00" [ref=e443]:
                      - generic [ref=e444]: 18:00
                      - strong [ref=e446]: Lịch rảnh
                      - generic [ref=e447]: 21:00
                    - button "Xóa lịch rảnh 2026-10-09 18:00" [ref=e448] [cursor=pointer]
                - generic [ref=e452]:
                  - generic [ref=e453]:
                    - button "Lịch rảnh 2026-10-10 09:00–12:00" [ref=e454]:
                      - generic [ref=e455]: 09:00
                      - strong [ref=e457]: Lịch rảnh
                      - generic [ref=e458]: 12:00
                    - button "Xóa lịch rảnh 2026-10-10 09:00" [ref=e459] [cursor=pointer]
                  - button "Tiếng Anh M.K 2026-10-10 16:45–17:30" [ref=e464] [cursor=pointer]:
                    - generic [ref=e465]: 16:45
                    - strong [ref=e467]: Tiếng Anh
                    - generic [ref=e468]: 17:30
            - paragraph [ref=e470]: Timeline hiển thị 06:00–24:00; lịch rảnh và buổi học dùng ngày cùng giờ bắt đầu và kết thúc. Dữ liệu được mô phỏng trong prototype.
    - complementary "Widget nhắn tin nhanh" [ref=e471]:
      - button "Mở cửa sổ trò chuyện" [ref=e472] [cursor=pointer]
  - dialog [ref=e476]:
    - banner [ref=e477]:
      - generic [ref=e478]:
        - paragraph [ref=e479]: BUỔI DẠY
        - heading "Chi tiết lớp học" [level=2] [ref=e480]
      - button "Đóng chi tiết lớp học" [ref=e481] [cursor=pointer]
    - generic [ref=e485]:
      - generic [ref=e486]:
        - term [ref=e487]: Môn học
        - definition [ref=e488]: Toán
      - generic [ref=e489]:
        - term [ref=e490]: Người học
        - definition [ref=e491]: Nguyễn Minh Anh
      - generic [ref=e492]:
        - term [ref=e493]: Thời gian
        - definition [ref=e494]: Thứ 3, 06/10/202607:00–07:45
      - generic [ref=e495]:
        - term [ref=e496]: Địa điểm
        - definition [ref=e497]: Địa điểm minh họa
      - generic [ref=e498]:
        - term [ref=e499]: Học phí
        - definition [ref=e500]: 220.000đ / buổi
      - generic [ref=e501]:
        - term [ref=e502]: Trạng thái
        - definition [ref=e503]: Hoàn tất
    - paragraph [ref=e506]: Buổi học này được tính vào thu nhập tháng 10/2026 theo ngày học.
    - generic [ref=e507]:
      - text: Ghi chú cho lớp học
      - textbox "Ghi chú cho lớp học" [ref=e508]:
        - /placeholder: Nội dung đã học, bài tập hoặc lưu ý cho buổi sau…
    - status [ref=e509]: Đã đánh dấu hoàn tất và lưu ghi chú.
    - region "Thực hiện buổi dạy" [ref=e510]:
      - heading "Nội dung và tiến độ buổi học" [level=3] [ref=e511]
      - generic [ref=e512]:
        - text: Nhận xét tiến độ buổi học
        - textbox "Nhận xét tiến độ buổi học" [ref=e513]: Đã nắm chắc nội dung; luyện thêm bài tập.
      - generic [ref=e514]:
        - text: Tài liệu và bài tập buổi học
        - button "Tài liệu và bài tập buổi học" [ref=e515]
      - list [ref=e516]:
        - listitem [ref=e517]:
          - link "lesson.txt" [ref=e521] [cursor=pointer]:
            - /url: data:text/plain;base64,…
          - button "Bỏ tài liệu lesson.txt" [ref=e522] [cursor=pointer]: Bỏ
      - button "Lưu tiến độ và tài liệu" [ref=e523] [cursor=pointer]
      - region "Đánh giá người học" [ref=e524]:
        - heading "Đánh giá hai chiều" [level=3] [ref=e525]
        - generic [ref=e526]:
          - text: Đánh giá người học
          - combobox "Đánh giá người học" [ref=e527] [cursor=pointer]:
            - option "5 sao" [selected]
            - option "4 sao"
            - option "3 sao"
            - option "2 sao"
            - option "1 sao"
        - generic [ref=e528]:
          - text: Nhận xét về người học
          - textbox "Nhận xét về người học" [ref=e529]
        - button "Gửi đánh giá người học" [disabled] [ref=e530]
      - status [ref=e531]: Đã lưu tiến độ và tài liệu buổi học.
    - contentinfo [ref=e532]:
      - button "Lưu ghi chú" [disabled] [ref=e533]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
  3  | import { resetDemo, login, fixedTime } from './demoHelpers.js';
  4  | 
  5  | test('TUTOR-FLOW share trip opens a functional local demo view and stays within mobile bounds', async ({ page }) => {
  6  |   await page.setViewportSize({width:390,height:844});
  7  |   await resetDemo(page); await login(page,'giabao','/tutor/timetable');
  8  |   await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  9  |   const dialog=page.getByRole('dialog',{name:'Chia sẻ hành trình dạy học cho người thân'});
  10 |   const link=dialog.getByLabel('Liên kết demo buổi dạy');
  11 |   await expect(link).toHaveValue(/\/safety\/trip\?lesson=/);
  12 |   const box=await dialog.boundingBox(); const copy=await dialog.getByRole('button',{name:'Sao chép',exact:true}).boundingBox();
  13 |   expect(copy.x+copy.width).toBeLessThanOrEqual(box.x+box.width);
  14 |   await dialog.getByRole('link',{name:'Xem hành trình demo'}).click();
  15 |   await expect(page.getByRole('heading',{name:'Hành trình buổi dạy demo'})).toBeVisible();
  16 |   await expect(page.locator('main')).toContainText(/không.*GPS/i);
  17 | });
  18 | 
  19 | test('TUTOR-FLOW onboarding checklist and two student card images persist', async ({page})=>{
  20 |   await resetDemo(page); await login(page,'giabao','/tutor/profile');
  21 |   const image={name:'student-card.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5ZkAAAAASUVORK5CYII=','base64')};
  22 |   await page.getByLabel('Ảnh mặt trước thẻ sinh viên').setInputFiles(image);
  23 |   await page.getByLabel('Ảnh mặt sau thẻ sinh viên').setInputFiles({...image,name:'student-card-back.png'});
  24 |   await page.getByRole('button',{name:'Gửi hồ sơ xác minh demo'}).click();
  25 |   await expect(page.getByRole('status')).toContainText('chờ Admin');
  26 |   await page.reload();
  27 |   await expect(page.getByRole('img',{name:'Mặt trước thẻ sinh viên'})).toBeVisible();
  28 |   await expect(page.getByRole('img',{name:'Mặt sau thẻ sinh viên'})).toBeVisible();
  29 |   await page.goto('/tutor/dashboard');
  30 |   await expect(page.getByLabel('Checklist hồ sơ gia sư')).toContainText('6/6');
  31 | });
  32 | 
  33 | test('TUTOR-FLOW pending application can be withdrawn and remains withdrawn on reload',async({page})=>{
  34 |   await resetDemo(page); await login(page,'giabao','/tutor/find-students');
  35 |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  36 |   const card=page.locator('.my-proposal-card').first();
  37 |   await card.getByRole('button',{name:'Rút đơn ứng tuyển'}).click();
  38 |   await expect(card).toContainText('Đã rút đơn'); await page.reload();
  39 |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  40 |   await expect(page.locator('.my-proposal-card').first()).toContainText('Đã rút đơn');
  41 | });
  42 | 
  43 | test('TUTOR-FLOW lesson progress, material and learner review persist through the shared domain',async({page})=>{
  44 |   const state=createDemoState(fixedTime);const lesson=state.lessons.find(l=>l.id==='seed-0');
  45 |   // Isolate learning/review behavior with the existing canonical learner identity.
  46 |   // Historical/operational lessons without learnerId cannot receive a review.
  47 |   const learner=state.users.find(u=>u.id==='demo-learner');
  48 |   lesson.learnerId=learner.id; lesson.learner=learner.fullName;
  49 |   await resetDemo(page,{state}); await login(page,'giabao','/tutor/timetable');
  50 |   await page.getByRole('button',{name:new RegExp(`${lesson.subject}.*${lesson.learner}`)}).click();
  51 |   const dialog=page.getByRole('dialog',{name:'Chi tiết lớp học'});
  52 |   await dialog.getByLabel('Nhận xét tiến độ buổi học').fill('Đã nắm chắc nội dung; luyện thêm bài tập.');
  53 |   await dialog.getByLabel('Tài liệu và bài tập buổi học').setInputFiles({name:'lesson.txt',mimeType:'text/plain',buffer:Buffer.from('Demo lesson material')});
  54 |   await dialog.getByRole('button',{name:'Lưu tiến độ và tài liệu'}).click();
  55 |   await expect(dialog.getByRole('link',{name:'lesson.txt'})).toBeVisible();
  56 |   await dialog.getByRole('button',{name:'Đánh dấu hoàn tất'}).click();
> 57 |   await dialog.getByLabel('Đánh giá người học').selectOption('5');
     |                                                 ^ Error: locator.selectOption: Error: strict mode violation: getByRole('dialog', { name: 'Chi tiết lớp học' }).getByLabel('Đánh giá người học') resolved to 2 elements:
  58 |   await dialog.getByLabel('Nhận xét về người học').fill('Người học tích cực và đúng giờ.');
  59 |   await dialog.getByRole('button',{name:'Gửi đánh giá người học'}).click();
  60 |   await expect(dialog).toContainText('Đã lưu đánh giá người học');
  61 |   const runtime=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),DOMAIN_STORAGE_KEY);
  62 |   const saved=runtime.lessons.find(l=>l.id===lesson.id);
  63 |   expect(saved.progress).toContain('Đã nắm chắc');expect(saved.materials[0].name).toBe('lesson.txt');
  64 |   expect(runtime.twoWayReviews.some(r=>r.lessonId===lesson.id)).toBe(true);
  65 | });
  66 | 
```