# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tutor-completion-flows.spec.js >> TUTOR-QA all connected Tutor screens and dialogs remain usable at 390px
- Location: tests\e2e\tutor-completion-flows.spec.js:85:36

# Error details

```
Error: Share title must not extend under close target

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 322
Received:    350
```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - generic [ref=f3e2]:
    - generic [ref=f3e3]:
      - complementary "Điều hướng gia sư" [ref=f3e4]:
        - generic [ref=f3e5]:
          - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn." [ref=f3e6] [cursor=pointer]:
            - /url: /
            - strong [ref=f3e7]: TutorNearMe
            - generic [ref=f3e8]: Gia sư gần bạn. Tri thức gần hơn.
          - button "Đóng điều hướng" [ref=f3e9] [cursor=pointer]
        - navigation "Các mục của gia sư" [ref=f3e13]:
          - link "Tổng quan" [ref=f3e14] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Yêu cầu học 6" [ref=f3e21] [cursor=pointer]:
            - /url: /tutor/requests
            - generic [ref=f3e25]: Yêu cầu học
            - generic [ref=f3e26]: "6"
          - link "Lịch dạy học" [ref=f3e27] [cursor=pointer]:
            - /url: /tutor/timetable
          - link "Tìm học viên mới" [ref=f3e31] [cursor=pointer]:
            - /url: /tutor/find-students
          - link "Ví & Thu nhập" [ref=f3e38] [cursor=pointer]:
            - /url: /tutor/wallet
          - link "Thu nhập" [ref=f3e43] [cursor=pointer]:
            - /url: /tutor/income
          - link "Hồ sơ gia sư" [ref=f3e48] [cursor=pointer]:
            - /url: /tutor/profile
          - link "Tin nhắn" [ref=f3e53] [cursor=pointer]:
            - /url: /messages
          - link "Kháng cáo" [ref=f3e57] [cursor=pointer]:
            - /url: /appeals
          - link "Trung tâm Trợ giúp" [ref=f3e63] [cursor=pointer]:
            - /url: /help
      - generic [ref=f3e68]:
        - banner [ref=f3e69]:
          - button "Mở điều hướng" [ref=f3e70] [cursor=pointer]
          - navigation "Điều hướng nhanh" [ref=f3e72]:
            - link "Tìm lớp gần tôi" [ref=f3e73] [cursor=pointer]:
              - /url: /tutor/map
            - link "Tổng Quan" [ref=f3e77] [cursor=pointer]:
              - /url: /tutor/dashboard
          - generic [ref=f3e83]:
            - button "Thông báo" [ref=f3e85] [cursor=pointer]:
              - generic [ref=f3e89]: "1"
            - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=f3e90] [cursor=pointer]:
              - /url: /tutor/profile
              - img "Ảnh đại diện của Trần Gia Bảo" [ref=f3e91]:
                - generic [aria-hidden] [ref=f3e92]: GB
              - generic [ref=f3e93]: giabao
            - button "Đăng xuất" [ref=f3e94] [cursor=pointer]
        - main [ref=f3e98]:
          - generic [ref=f3e100]:
            - text: KHÔNG GIAN GIA SƯ · DEMO
            - heading "Lịch dạy học & Khiên An Toàn" [level=1] [ref=f3e101]
            - paragraph [ref=f3e102]: Xem buổi dạy, giám sát an toàn hành trình và quản lý lịch rảnh từ 06:00 đến 24:00.
          - region "Thời khóa biểu lịch dạy và lịch rảnh" [ref=f3e103]:
            - region "Khiên an toàn gia sư" [ref=f3e104]:
              - generic [ref=f3e106]:
                - heading "Khiên An Toàn Gia Sư (Tutor Safety Shield)" [level=2] [ref=f3e107]
                - paragraph [ref=f3e111]: Ghi nhận Check-in/out và cảnh báo trong bản demo. Giữ SOS 3 giây; không gửi GPS, SMS hoặc gọi tự động.
              - generic [ref=f3e112]:
                - article [ref=f3e113]:
                  - generic [ref=f3e114]:
                    - generic [ref=f3e115]: Toán · N.M.A
                    - generic [ref=f3e116]:
                      - generic [ref=f3e117]: Thứ 3, 06/10 (07:00 – 07:45)
                      - generic [ref=f3e121]: Địa điểm minh họa
                  - generic [ref=f3e125]:
                    - button "Bắt đầu di chuyển" [ref=f3e126] [cursor=pointer]
                    - button "Check-in an toàn" [ref=f3e129] [cursor=pointer]
                    - button "Check-out ra về" [ref=f3e133] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=f3e136] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=f3e143] [cursor=pointer]
                - article [ref=f3e149]:
                  - generic [ref=f3e150]:
                    - generic [ref=f3e151]: Tiếng Anh · P.K
                    - generic [ref=f3e152]:
                      - generic [ref=f3e153]: Thứ 5, 08/10 (08:30 – 09:15)
                      - generic [ref=f3e157]: Địa điểm minh họa
                  - generic [ref=f3e161]:
                    - button "Bắt đầu di chuyển" [ref=f3e162] [cursor=pointer]
                    - button "Check-in an toàn" [ref=f3e165] [cursor=pointer]
                    - button "Check-out ra về" [ref=f3e169] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=f3e172] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=f3e179] [cursor=pointer]
                - article [ref=f3e185]:
                  - generic [ref=f3e186]:
                    - generic [ref=f3e187]: Toán · L.A
                    - generic [ref=f3e188]:
                      - generic [ref=f3e189]: Thứ 4, 07/10 (14:30 – 15:15)
                      - generic [ref=f3e193]: Địa điểm minh họa
                  - generic [ref=f3e197]:
                    - button "Bắt đầu di chuyển" [ref=f3e198] [cursor=pointer]
                    - button "Check-in an toàn" [ref=f3e201] [cursor=pointer]
                    - button "Check-out ra về" [ref=f3e205] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=f3e208] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=f3e215] [cursor=pointer]
                - article [ref=f3e221]:
                  - generic [ref=f3e222]:
                    - generic [ref=f3e223]: Tiếng Anh · M.K
                    - generic [ref=f3e224]:
                      - generic [ref=f3e225]: Thứ 7, 10/10 (16:45 – 17:30)
                      - generic [ref=f3e229]: Địa điểm minh họa
                  - generic [ref=f3e233]:
                    - button "Bắt đầu di chuyển" [ref=f3e234] [cursor=pointer]
                    - button "Check-in an toàn" [ref=f3e237] [cursor=pointer]
                    - button "Check-out ra về" [ref=f3e241] [cursor=pointer]
                    - button "Chia sẻ buổi dạy" [ref=f3e244] [cursor=pointer]
                    - button "SOS KHẨN CẤP" [ref=f3e251] [cursor=pointer]
            - generic [ref=f3e257]:
              - generic [ref=f3e258]:
                - button "Tuần trước" [ref=f3e259] [cursor=pointer]
                - strong [ref=f3e262]: "Tuần: 5/10/2026 – 11/10/2026"
                - button "Tuần sau" [ref=f3e263] [cursor=pointer]
              - generic [ref=f3e266]:
                - text: Thời lượng mỗi buổi
                - combobox "Thời lượng mỗi buổi" [ref=f3e267] [cursor=pointer]:
                  - option "45 phút" [selected]
                  - option "90 phút"
            - generic [ref=f3e268]:
              - generic [ref=f3e269]: Chưa chọn
              - generic [ref=f3e271]: Lịch rảnh
              - generic [ref=f3e273]: Lịch dạy
              - paragraph [ref=f3e275]: Mở chi tiết một giờ bằng dấu + ở trục giờ; chọn giờ để thêm nhanh, hoặc kéo khung rảnh để đổi ngày và giờ.
            - region "Lịch dạy và lịch rảnh của gia sư, cuộn ngang và dọc để xem đầy đủ" [ref=f3e276]:
              - generic [ref=f3e277]:
                - generic [ref=f3e278]: Giờ
                - generic [ref=f3e279]:
                  - strong [ref=f3e280]: Thứ 2
                  - text: 05-10
                  - button "Thêm lịch rảnh Thứ 2" [ref=f3e281] [cursor=pointer]
                - generic [ref=f3e283]:
                  - strong [ref=f3e284]: Thứ 3
                  - text: 06-10
                  - button "Thêm lịch rảnh Thứ 3" [ref=f3e285] [cursor=pointer]
                - generic [ref=f3e287]:
                  - strong [ref=f3e288]: Thứ 4
                  - text: 07-10
                  - button "Thêm lịch rảnh Thứ 4" [ref=f3e289] [cursor=pointer]
                - generic [ref=f3e291]:
                  - strong [ref=f3e292]: Thứ 5
                  - text: 08-10
                  - button "Thêm lịch rảnh Thứ 5" [ref=f3e293] [cursor=pointer]
                - generic [ref=f3e295]:
                  - strong [ref=f3e296]: Thứ 6
                  - text: 09-10
                  - button "Thêm lịch rảnh Thứ 6" [ref=f3e297] [cursor=pointer]
                - generic [ref=f3e299]:
                  - strong [ref=f3e300]: Thứ 7
                  - text: 10-10
                  - button "Thêm lịch rảnh Thứ 7" [ref=f3e301] [cursor=pointer]
                - generic [ref=f3e303]:
                  - strong [ref=f3e304]: CN
                  - text: 11-10
                  - button "Thêm lịch rảnh CN" [ref=f3e305] [cursor=pointer]
                - generic [ref=f3e307]:
                  - generic [ref=f3e309]:
                    - generic [ref=f3e310]: 06:00
                    - button "Mở chi tiết 06:00" [ref=f3e311] [cursor=pointer]
                  - generic [ref=f3e314]:
                    - generic [ref=f3e315]: 07:00
                    - button "Mở chi tiết 07:00" [ref=f3e316] [cursor=pointer]
                  - generic [ref=f3e319]:
                    - generic [ref=f3e320]: 08:00
                    - button "Mở chi tiết 08:00" [ref=f3e321] [cursor=pointer]
                  - generic [ref=f3e324]:
                    - generic [ref=f3e325]: 09:00
                    - button "Mở chi tiết 09:00" [ref=f3e326] [cursor=pointer]
                  - generic [ref=f3e329]:
                    - generic [ref=f3e330]: 10:00
                    - button "Mở chi tiết 10:00" [ref=f3e331] [cursor=pointer]
                  - generic [ref=f3e334]:
                    - generic [ref=f3e335]: 11:00
                    - button "Mở chi tiết 11:00" [ref=f3e336] [cursor=pointer]
                  - generic [ref=f3e339]:
                    - generic [ref=f3e340]: 12:00
                    - button "Mở chi tiết 12:00" [ref=f3e341] [cursor=pointer]
                  - generic [ref=f3e344]:
                    - generic [ref=f3e345]: 13:00
                    - button "Mở chi tiết 13:00" [ref=f3e346] [cursor=pointer]
                  - generic [ref=f3e349]:
                    - generic [ref=f3e350]: 14:00
                    - button "Mở chi tiết 14:00" [ref=f3e351] [cursor=pointer]
                  - generic [ref=f3e354]:
                    - generic [ref=f3e355]: 15:00
                    - button "Mở chi tiết 15:00" [ref=f3e356] [cursor=pointer]
                  - generic [ref=f3e359]:
                    - generic [ref=f3e360]: 16:00
                    - button "Mở chi tiết 16:00" [ref=f3e361] [cursor=pointer]
                  - generic [ref=f3e364]:
                    - generic [ref=f3e365]: 17:00
                    - button "Mở chi tiết 17:00" [ref=f3e366] [cursor=pointer]
                  - generic [ref=f3e369]:
                    - generic [ref=f3e370]: 18:00
                    - button "Mở chi tiết 18:00" [ref=f3e371] [cursor=pointer]
                  - generic [ref=f3e374]:
                    - generic [ref=f3e375]: 19:00
                    - button "Mở chi tiết 19:00" [ref=f3e376] [cursor=pointer]
                  - generic [ref=f3e379]:
                    - generic [ref=f3e380]: 20:00
                    - button "Mở chi tiết 20:00" [ref=f3e381] [cursor=pointer]
                  - generic [ref=f3e384]:
                    - generic [ref=f3e385]: 21:00
                    - button "Mở chi tiết 21:00" [ref=f3e386] [cursor=pointer]
                  - generic [ref=f3e389]:
                    - generic [ref=f3e390]: 22:00
                    - button "Mở chi tiết 22:00" [ref=f3e391] [cursor=pointer]
                  - generic [ref=f3e394]:
                    - generic [ref=f3e395]: 23:00
                    - button "Mở chi tiết 23:00" [ref=f3e396] [cursor=pointer]
                  - generic [ref=f3e398]: 24:00
                - generic [ref=f3e400]:
                  - button "Toán N.M.A 2026-10-06 07:00–07:45" [ref=f3e402] [cursor=pointer]:
                    - generic [ref=f3e403]: 07:00
                    - strong [ref=f3e405]: Toán
                    - generic [ref=f3e406]: 07:45
                  - generic [ref=f3e407]:
                    - button "Lịch rảnh 2026-10-06 18:00–21:00" [ref=f3e408]:
                      - generic [ref=f3e409]: 18:00
                      - strong [ref=f3e411]: Lịch rảnh
                      - generic [ref=f3e412]: 21:00
                    - button "Xóa lịch rảnh 2026-10-06 18:00" [ref=f3e413] [cursor=pointer]
                - button "Toán L.A 2026-10-07 14:30–15:15" [ref=f3e419] [cursor=pointer]:
                  - generic [ref=f3e420]: 14:30
                  - strong [ref=f3e422]: Toán
                  - generic [ref=f3e423]: 15:15
                - generic [ref=f3e424]:
                  - button "Tiếng Anh P.K 2026-10-08 08:30–09:15" [ref=f3e426] [cursor=pointer]:
                    - generic [ref=f3e427]: 08:30
                    - strong [ref=f3e429]: Tiếng Anh
                    - generic [ref=f3e430]: 09:15
                  - generic [ref=f3e431]:
                    - button "Lịch rảnh 2026-10-08 18:00–21:00" [ref=f3e432]:
                      - generic [ref=f3e433]: 18:00
                      - strong [ref=f3e435]: Lịch rảnh
                      - generic [ref=f3e436]: 21:00
                    - button "Xóa lịch rảnh 2026-10-08 18:00" [ref=f3e437] [cursor=pointer]
                - generic [ref=f3e441]:
                  - button "Vật lý H.N 2026-10-09 13:00–13:45" [ref=f3e443] [cursor=pointer]:
                    - generic [ref=f3e444]: 13:00
                    - strong [ref=f3e446]: Vật lý
                    - generic [ref=f3e447]: 13:45
                  - generic [ref=f3e448]:
                    - button "Lịch rảnh 2026-10-09 18:00–21:00" [ref=f3e449]:
                      - generic [ref=f3e450]: 18:00
                      - strong [ref=f3e452]: Lịch rảnh
                      - generic [ref=f3e453]: 21:00
                    - button "Xóa lịch rảnh 2026-10-09 18:00" [ref=f3e454] [cursor=pointer]
                - generic [ref=f3e458]:
                  - generic [ref=f3e459]:
                    - button "Lịch rảnh 2026-10-10 09:00–12:00" [ref=f3e460]:
                      - generic [ref=f3e461]: 09:00
                      - strong [ref=f3e463]: Lịch rảnh
                      - generic [ref=f3e464]: 12:00
                    - button "Xóa lịch rảnh 2026-10-10 09:00" [ref=f3e465] [cursor=pointer]
                  - button "Tiếng Anh M.K 2026-10-10 16:45–17:30" [ref=f3e470] [cursor=pointer]:
                    - generic [ref=f3e471]: 16:45
                    - strong [ref=f3e473]: Tiếng Anh
                    - generic [ref=f3e474]: 17:30
            - paragraph [ref=f3e476]: Timeline hiển thị 06:00–24:00; lịch rảnh và buổi học dùng ngày cùng giờ bắt đầu và kết thúc. Dữ liệu được mô phỏng trong prototype.
    - complementary "Widget nhắn tin nhanh" [ref=f3e477]:
      - button "Mở cửa sổ trò chuyện" [ref=f3e478] [cursor=pointer]
  - dialog [ref=f3e482]:
    - button "Đóng cửa sổ" [active] [ref=f3e483] [cursor=pointer]
    - banner [ref=f3e487]:
      - heading "Chia sẻ hành trình dạy học cho người thân" [level=2] [ref=f3e488]
      - paragraph [ref=f3e495]: Liên kết demo đọc buổi học và trạng thái trong trình duyệt này. Không có GPS trực tiếp, mã bảo mật hoặc đồng bộ sang thiết bị khác.
    - generic [ref=f3e496]:
      - generic [ref=f3e497]:
        - strong [ref=f3e498]: "Môn dạy:"
        - text: Toán
      - generic [ref=f3e499]:
        - strong [ref=f3e500]: "Học viên:"
        - text: N.M.A
      - generic [ref=f3e501]:
        - strong [ref=f3e502]: "Thời gian:"
        - text: Thứ 3, 06/10 · 07:00 – 07:45
      - generic [ref=f3e503]:
        - strong [ref=f3e504]: "Địa chỉ:"
        - text: Địa điểm minh họa
    - generic [ref=f3e505]:
      - generic [ref=f3e506]: Liên kết demo buổi dạy
      - generic [ref=f3e507]:
        - textbox "Liên kết demo buổi dạy" [ref=f3e508]: http://127.0.0.1:5180/safety/trip?lesson=seed-0
        - button "Sao chép" [ref=f3e509] [cursor=pointer]
    - link "Xem hành trình demo" [ref=f3e513] [cursor=pointer]:
      - /url: /safety/trip?lesson=seed-0
    - button "Đóng" [ref=f3e515] [cursor=pointer]
```

# Test source

```ts
  4   | import { selectTutorTier } from '../../src/features/domain/commerce.js';
  5   | 
  6   | test('TUTOR-FLOW tier and profile catalog read runtime data without invented punctuality',async({page})=>{
  7   |   const state=createDemoState(fixedTime);state.subjects[0].isActive=false;
  8   |   await resetDemo(page,{state});await login(page,'giabao','/tutor/profile');
  9   |   const tier=selectTutorTier(state,'quoc-bao');
  10  |   await expect(page.getByLabel('Danh hiệu gia sư')).toContainText(`${tier.feePercent}%`);
  11  |   if(!Number.isFinite(tier.punctuality))await expect(page.getByLabel('Danh hiệu gia sư')).toContainText('Chưa đủ dữ liệu xác nhận');
  12  |   await expect(page.locator('#tutor-active-subjects option')).toHaveCount(state.subjects.filter(s=>s.isActive).length);
  13  |   await expect(page.locator('#tutor-active-subjects option[value="Toán"]')).toHaveCount(0);
  14  | });
  15  | 
  16  | test('TUTOR-FLOW Help opens a private canonical Admin support conversation',async({page})=>{
  17  |   await resetDemo(page);await login(page,'giabao','/help');
  18  |   await page.getByRole('button',{name:'Chat hỗ trợ demo'}).click();
  19  |   await expect(page).toHaveURL(/\/messages\?thread=/);
  20  |   await expect(page.locator('main')).toContainText(/hỗ trợ/i);
  21  | });
  22  | 
  23  | test('TUTOR-FLOW share trip opens a functional local demo view and stays within mobile bounds', async ({ page }) => {
  24  |   await page.setViewportSize({width:390,height:844});
  25  |   await resetDemo(page); await login(page,'giabao','/tutor/timetable');
  26  |   await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  27  |   const dialog=page.getByRole('dialog',{name:'Chia sẻ hành trình dạy học cho người thân'});
  28  |   const link=dialog.getByLabel('Liên kết demo buổi dạy');
  29  |   await expect(link).toHaveValue(/\/safety\/trip\?lesson=/);
  30  |   const box=await dialog.boundingBox(); const copy=await dialog.getByRole('button',{name:'Sao chép',exact:true}).boundingBox();
  31  |   expect(copy.x+copy.width).toBeLessThanOrEqual(box.x+box.width);
  32  |   await dialog.getByRole('link',{name:'Xem hành trình demo'}).click();
  33  |   await expect(page.getByRole('heading',{name:'Hành trình buổi dạy demo'})).toBeVisible();
  34  |   await expect(page.locator('main')).toContainText(/không.*GPS/i);
  35  | });
  36  | 
  37  | test('TUTOR-FLOW onboarding checklist and two student card images persist', async ({page})=>{
  38  |   await resetDemo(page); await login(page,'giabao','/tutor/profile');
  39  |   const image={name:'student-card.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5ZkAAAAASUVORK5CYII=','base64')};
  40  |   await page.getByLabel('Ảnh mặt trước thẻ sinh viên').setInputFiles(image);
  41  |   await page.getByLabel('Ảnh mặt sau thẻ sinh viên').setInputFiles({...image,name:'student-card-back.png'});
  42  |   await page.getByRole('button',{name:'Gửi hồ sơ xác minh demo'}).click();
  43  |   await expect(page.getByRole('status')).toContainText('chờ Admin');
  44  |   await page.reload();
  45  |   await expect(page.getByRole('img',{name:'Mặt trước thẻ sinh viên'})).toBeVisible();
  46  |   await expect(page.getByRole('img',{name:'Mặt sau thẻ sinh viên'})).toBeVisible();
  47  |   await page.goto('/tutor/dashboard');
  48  |   await expect(page.getByLabel('Checklist hồ sơ gia sư')).toContainText('6/6');
  49  | });
  50  | 
  51  | test('TUTOR-FLOW pending application can be withdrawn and remains withdrawn on reload',async({page})=>{
  52  |   await resetDemo(page); await login(page,'giabao','/tutor/find-students');
  53  |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  54  |   const card=page.locator('.my-proposal-card').first();
  55  |   await card.getByRole('button',{name:'Rút đơn ứng tuyển'}).click();
  56  |   await expect(card).toContainText('Đã rút đơn'); await page.reload();
  57  |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  58  |   await expect(page.locator('.my-proposal-card').first()).toContainText('Đã rút đơn');
  59  | });
  60  | 
  61  | test('TUTOR-FLOW lesson progress, material and learner review persist through the shared domain',async({page})=>{
  62  |   const state=createDemoState(fixedTime);const lesson=state.lessons.find(l=>l.id==='seed-0');
  63  |   // Isolate learning/review behavior with the existing canonical learner identity.
  64  |   // Historical/operational lessons without learnerId cannot receive a review.
  65  |   const learner=state.users.find(u=>u.id==='demo-learner');
  66  |   lesson.learnerId=learner.id; lesson.learner=learner.fullName;
  67  |   await resetDemo(page,{state}); await login(page,'giabao','/tutor/timetable');
  68  |   await page.getByRole('button',{name:new RegExp(`${lesson.subject}.*${lesson.learner}`)}).click();
  69  |   const dialog=page.getByRole('dialog',{name:'Chi tiết lớp học'});
  70  |   await dialog.getByLabel('Nhận xét tiến độ buổi học').fill('Đã nắm chắc nội dung; luyện thêm bài tập.');
  71  |   await dialog.getByLabel('Tài liệu và bài tập buổi học').setInputFiles({name:'lesson.txt',mimeType:'text/plain',buffer:Buffer.from('Demo lesson material')});
  72  |   await dialog.getByRole('button',{name:'Lưu tiến độ và tài liệu'}).click();
  73  |   await expect(dialog.getByRole('link',{name:'lesson.txt'})).toBeVisible();
  74  |   await dialog.getByRole('button',{name:'Đánh dấu hoàn tất'}).click();
  75  |   await dialog.getByLabel('Đánh giá người học').selectOption('5');
  76  |   await dialog.getByLabel('Nhận xét về người học').fill('Người học tích cực và đúng giờ.');
  77  |   await dialog.getByRole('button',{name:'Gửi đánh giá người học'}).click();
  78  |   await expect(dialog).toContainText('Đã lưu đánh giá người học');
  79  |   const runtime=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),DOMAIN_STORAGE_KEY);
  80  |   const saved=runtime.lessons.find(l=>l.id===lesson.id);
  81  |   expect(saved.progress).toContain('Đã nắm chắc');expect(saved.materials[0].name).toBe('lesson.txt');
  82  |   expect(runtime.twoWayReviews.some(r=>r.lessonId===lesson.id)).toBe(true);
  83  | });
  84  | 
  85  | for(const width of [1440,1024,390])test(`TUTOR-QA all connected Tutor screens and dialogs remain usable at ${width}px`,async({page})=>{
  86  |   const errors=[];page.on('pageerror',error=>errors.push(String(error)));
  87  |   await page.setViewportSize({width,height:900});await resetDemo(page);await login(page,'giabao','/tutor/dashboard');
  88  |   for(const path of ['dashboard','profile','timetable','find-students','requests','requests/req-1','income','wallet']){
  89  |     await page.goto(`/tutor/${path}`);await page.evaluate(()=>document.fonts.ready);
  90  |     await expect(page.getByRole('heading',{level:1})).toBeVisible();
  91  |     expect(await page.evaluate(()=>document.documentElement.scrollWidth),path).toBeLessThanOrEqual(width);
  92  |     await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-${path.replaceAll('/','-')}.png`,fullPage:true});
  93  |     if(path==='timetable'){
  94  |       const timelines=page.locator('.weekly-timeline-scroll');await expect(timelines).toHaveCount(1);
  95  |       for(const timeline of await timelines.all()){
  96  |         await timeline.evaluate(el=>{el.scrollTop=el.scrollHeight;el.scrollLeft=el.scrollWidth;});
  97  |         expect(await timeline.evaluate(el=>Math.abs(el.scrollHeight-el.clientHeight-el.scrollTop))).toBeLessThanOrEqual(1);
  98  |       }
  99  |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-timetable-end.png`,fullPage:true});
  100 |       await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  101 |       const dialog=page.getByRole('dialog');const bounds=await dialog.boundingBox();
  102 |       expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
  103 |       const heading=await dialog.getByRole('heading',{level:2}).boundingBox();const close=await dialog.getByRole('button',{name:'Đóng cửa sổ'}).boundingBox();
> 104 |       expect(heading.x+heading.width,'Share title must not extend under close target').toBeLessThanOrEqual(close.x);
      |                                                                                        ^ Error: Share title must not extend under close target
  105 |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-share-modal.png`});
  106 |       await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  107 |     }
  108 |     if(path==='wallet'){
  109 |       await page.getByRole('button',{name:'Rút tiền về STK Ngân hàng',exact:true}).click();
  110 |       const dialog=page.getByRole('dialog');await expect(dialog.getByLabel('Số tài khoản ngân hàng:')).toBeVisible();
  111 |       const bounds=await dialog.boundingBox();expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
  112 |       const heading=await dialog.getByRole('heading',{level:2}).boundingBox();const close=await dialog.getByRole('button',{name:'Đóng cửa sổ'}).boundingBox();
  113 |       expect(heading.x+heading.width,'Modal title must not extend under close target').toBeLessThanOrEqual(close.x);
  114 |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-payout-modal.png`});
  115 |       await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  116 |     }
  117 |   }
  118 |   expect(errors).toEqual([]);
  119 | });
  120 | 
```