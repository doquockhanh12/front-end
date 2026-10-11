# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L13 background chat cannot overlap and intercept a lesson dialog
- Location: tests\e2e\completion-learner-audit.spec.js:142:1

# Error details

```
Error: Background widget must stay below modal overlay

expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e3]:
      - banner [ref=f1e4]:
        - generic [ref=f1e5]:
          - link "TutorNearMe — trang chủ" [ref=f1e6] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e7]: TN
            - generic [ref=f1e8]:
              - strong [ref=f1e9]: TutorNearMe
              - generic [ref=f1e10]: Gia sư gần bạn
          - button "Mở menu" [ref=f1e11] [cursor=pointer]
      - main [ref=f1e13]:
        - generic [ref=f1e14]:
          - generic [ref=f1e15]:
            - generic [ref=f1e16]: LỊCH HỌC & LỚP TRỰC TUYẾN
            - heading "Lịch học gia sư của bạn" [level=1] [ref=f1e17]
            - paragraph [ref=f1e18]: Xem lịch học, tham gia phòng học Google Meet và quản lý bảo lưu buổi dạy.
          - generic [ref=f1e19]:
            - button "Danh sách" [ref=f1e20] [cursor=pointer]
            - button "Lịch tuần" [ref=f1e22] [cursor=pointer]
        - generic [ref=f1e25]:
          - generic [ref=f1e26]:
            - button "Tất cả (5)" [ref=f1e27] [cursor=pointer]
            - button "Sắp diễn ra" [ref=f1e28] [cursor=pointer]
            - button "Đã hoàn thành" [ref=f1e29] [cursor=pointer]
            - button "Đã hủy" [ref=f1e30] [cursor=pointer]
          - generic [ref=f1e31]:
            - article [ref=f1e32]:
              - generic [ref=f1e33]:
                - generic [ref=f1e34]:
                  - strong [ref=f1e35]: Thứ 7, 06/06
                  - text: "2026"
                - generic [ref=f1e36]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e37]
                  - generic [ref=f1e38]:
                    - generic [ref=f1e39]: 18:00 – 18:45
                    - generic [ref=f1e43]: •
                    - generic [ref=f1e44]:
                      - text: "Gia sư:"
                      - strong [ref=f1e45]: Trần Gia Bảo
                    - generic [ref=f1e46]: •
                    - generic [ref=f1e47]: Online
              - generic [ref=f1e51]:
                - button "Vào phòng học Online" [ref=f1e52] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e56] [cursor=pointer]
            - article [ref=f1e57]:
              - generic [ref=f1e58]:
                - generic [ref=f1e59]:
                  - strong [ref=f1e60]: Thứ 6, 03/07
                  - text: "2026"
                - generic [ref=f1e61]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e62]
                  - generic [ref=f1e63]:
                    - generic [ref=f1e64]: 18:00 – 18:45
                    - generic [ref=f1e68]: •
                    - generic [ref=f1e69]:
                      - text: "Gia sư:"
                      - strong [ref=f1e70]: Trần Gia Bảo
                    - generic [ref=f1e71]: •
                    - generic [ref=f1e72]: Online
              - generic [ref=f1e76]:
                - button "Vào phòng học Online" [ref=f1e77] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e81] [cursor=pointer]
            - article [ref=f1e82]:
              - generic [ref=f1e83]:
                - generic [ref=f1e84]:
                  - strong [ref=f1e85]: CN, 20/09
                  - text: "2026"
                - generic [ref=f1e86]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e87]
                  - generic [ref=f1e88]:
                    - generic [ref=f1e89]: 18:00 – 18:45
                    - generic [ref=f1e93]: •
                    - generic [ref=f1e94]:
                      - text: "Gia sư:"
                      - strong [ref=f1e95]: Trần Gia Bảo
                    - generic [ref=f1e96]: •
                    - generic [ref=f1e97]: Online
              - generic [ref=f1e101]:
                - button "Vào phòng học Online" [ref=f1e102] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e106] [cursor=pointer]
            - article [ref=f1e107]:
              - generic [ref=f1e108]:
                - generic [ref=f1e109]:
                  - strong [ref=f1e110]: CN, 27/09
                  - text: "2026"
                - generic [ref=f1e111]:
                  - heading "IELTS" [level=3] [ref=f1e112]
                  - generic [ref=f1e113]:
                    - generic [ref=f1e114]: 19:00 – 19:45
                    - generic [ref=f1e118]: •
                    - generic [ref=f1e119]:
                      - text: "Gia sư:"
                      - strong [ref=f1e120]: Trần Gia Bảo
                    - generic [ref=f1e121]: •
                    - generic [ref=f1e122]: Online
              - generic [ref=f1e126]:
                - button "Vào phòng học Online" [ref=f1e127] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e131] [cursor=pointer]
            - article [ref=f1e132]:
              - generic [ref=f1e133]:
                - generic [ref=f1e134]:
                  - strong [ref=f1e135]: Thứ 5, 01/10
                  - text: "2026"
                - generic [ref=f1e136]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e137]
                  - generic [ref=f1e138]:
                    - generic [ref=f1e139]: 18:00 – 18:45
                    - generic [ref=f1e143]: •
                    - generic [ref=f1e144]:
                      - text: "Gia sư:"
                      - strong [ref=f1e145]: Trần Gia Bảo
                    - generic [ref=f1e146]: •
                    - generic [ref=f1e147]: Online
              - generic [ref=f1e151]:
                - button "Vào phòng học Online" [ref=f1e152] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e156] [cursor=pointer]
    - complementary "Widget nhắn tin nhanh" [ref=f1e157]:
      - button "Mở cửa sổ trò chuyện" [ref=f1e158] [cursor=pointer]:
        - generic [ref=f1e161]: "1"
  - dialog [ref=f1e163]:
    - button "Đóng cửa sổ" [active] [ref=f1e164] [cursor=pointer]
    - banner [ref=f1e168]:
      - generic [ref=f1e169]: CHI TIẾT BUỔI HỌC
      - heading "Tiếng Anh" [level=2] [ref=f1e170]
      - generic [ref=f1e171]:
        - generic [ref=f1e172]: Thứ 7, 06/06 · 18:00 – 18:45
        - generic [ref=f1e176]: •
        - generic [ref=f1e177]:
          - text: "Gia sư:"
          - strong [ref=f1e178]: Trần Gia Bảo
        - generic [ref=f1e179]: •
        - generic [ref=f1e180]:
          - text: "Học phí:"
          - strong [ref=f1e181]: 180.000 đ
    - generic [ref=f1e182]:
      - button "Vào phòng học Online (Google Meet)" [ref=f1e183] [cursor=pointer]
      - generic [ref=f1e187]: Phòng học kích hoạt tự động 15 phút trước giờ học và bảo mật chuẩn Google Meet HD.
    - generic [ref=f1e188]:
      - heading "Tài liệu & Bài tập về nhà" [level=3] [ref=f1e189]
      - generic [ref=f1e193]:
        - generic [ref=f1e194]:
          - generic [ref=f1e195]:
            - strong [ref=f1e196]: Slide_LyThuyet_ChuyenDe.pdf
            - generic [ref=f1e197]: PDF · 2.4 MB · Cập nhật bởi gia sư
          - button "Tải về" [ref=f1e198] [cursor=pointer]
        - generic [ref=f1e202]:
          - generic [ref=f1e203]:
            - strong [ref=f1e204]: BaiTap_TuLuyen_15Cau.docx
            - generic [ref=f1e205]: Tài liệu bài tập ôn tập tại nhà
          - button "Nộp bài" [ref=f1e206] [cursor=pointer]
        - generic [ref=f1e210]: "Ghi chú buổi học: Học sinh ôn kỹ lý thuyết chuyên đề và chuẩn bị câu hỏi trước khi vào lớp."
    - generic [ref=f1e211]:
      - generic [ref=f1e212]:
        - generic [ref=f1e213]: Gặp sự cố hoặc gia sư vắng mặt?
        - text: Bảo hiểm Escrow hoàn lại 100% học phí ngay lập tức.
      - button "Yêu cầu Hoàn tiền 100% vì Sự cố" [ref=f1e214] [cursor=pointer]
```

# Test source

```ts
  51  | });
  52  | 
  53  | test('UI-COMP-L03 completed lesson cannot be cancelled by learner', async ({page}) => {
  54  |   await setup(page); await page.goto('/learner/schedule');
  55  |   await page.getByRole('button', {name:/Đã hoàn thành/}).click();
  56  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  57  |   await expect(page.getByRole('dialog')).toBeVisible();
  58  |   await expect(page.getByRole('button', {name:'Hủy buổi học này'})).toHaveCount(0);
  59  | });
  60  | 
  61  | test('UI-COMP-L04 refund without linked escrow never consumes unrelated class escrow', async ({page}) => {
  62  |   await setup(page); await page.goto('/learner/schedule');
  63  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  64  |   const before=await stateOf(page);
  65  |   await page.getByRole('button', {name:'Yêu cầu Hoàn tiền 100% vì Sự cố'}).click();
  66  |   const after=await stateOf(page);
  67  |   expect(after.escrowTransactions).toEqual(before.escrowTransactions);
  68  |   expect(after.wallets).toEqual(before.wallets);
  69  | });
  70  | 
  71  | test('UI-COMP-L05 insufficient balance cannot mark offer deposit successful', async ({page}) => {
  72  |   const state=seed();state.wallets['demo-learner'].availableBalance=0;
  73  |   await setup(page,state);await page.goto('/messages');
  74  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  75  |   await expect(page.locator('[data-testid="custom-offer-card"] [data-status="accepted"]')).toHaveCount(0);
  76  |   expect((await stateOf(page)).messages.find(m=>m.type==='custom_offer').offerData.status).toBe('pending');
  77  | });
  78  | 
  79  | test('UI-COMP-L06 paid offer produces linked shared lessons visible to Tutor', async ({page}) => {
  80  |   await setup(page); await page.goto('/messages');
  81  |   const before=await stateOf(page);const offer=before.messages.find(m=>m.type==='custom_offer');
  82  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  83  |   const after=await stateOf(page);
  84  |   const newEscrow=after.escrowTransactions.find(e=>!before.escrowTransactions.some(old=>old.id===e.id));
  85  |   expect(newEscrow,'Successful payment must create canonical escrow').toBeTruthy();
  86  |   await page.goto('/learner/dashboard');await logout(page);
  87  |   await login(page,'giabao','/tutor/timetable');
  88  |   const tutorState=await stateOf(page);
  89  |   expect(tutorState.lessons.filter(l=>l.escrowId===newEscrow.id||l.offerId===offer.id||l.messageId===offer.id)).toHaveLength(offer.offerData.sessionsCount);
  90  | });
  91  | 
  92  | test('UI-COMP-L07 lesson modal supports keyboard Escape and focus return', async ({page}) => {
  93  |   await setup(page);await page.goto('/learner/schedule');
  94  |   const trigger=page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first();
  95  |   await trigger.click();await expect(page.getByRole('dialog')).toBeVisible();
  96  |   await expect.poll(()=>page.getByRole('dialog').evaluate(el=>el.contains(document.activeElement))).toBe(true);
  97  |   await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
  98  |   await expect(trigger).toBeFocused();
  99  | });
  100 | 
  101 | test('UI-COMP-L08 proposal profile agrees with canonical public tutor university', async ({page}) => {
  102 |   await setup(page);await page.goto('/learner/my-classes');
  103 |   const profile=seed().profiles.find(p=>p.id==='quoc-bao');
  104 |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  105 |   await expect(candidate).toContainText(profile.university);
  106 | });
  107 | 
  108 | test('UI-COMP-L09 newly submitted class awaits Admin moderation', async ({page}) => {
  109 |   await setup(page);await page.goto('/learner/post-class');
  110 |   await page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'}).click();
  111 |   await page.getByRole('button',{name:'Tiếp tục: Ngân sách & Mục tiêu'}).click();
  112 |   const before=await stateOf(page);
  113 |   await page.getByRole('button',{name:/Đăng tin|Gửi tin/}).last().click();
  114 |   await expect(page).toHaveURL(/\/learner\/my-classes$/);
  115 |   const created=(await stateOf(page)).classPosts.find(p=>!before.classPosts.some(old=>old.id===p.id));
  116 |   expect(created).toBeTruthy();expect(created.moderationStatus).toBe('pending');
  117 | });
  118 | 
  119 | test('UI-COMP-L10 selected candidate provides a deposit next step before claiming matched class', async ({page}) => {
  120 |   await setup(page);await page.goto('/learner/my-classes');
  121 |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  122 |   await candidate.getByRole('button',{name:'Chọn gia sư này'}).click();
  123 |   await expect(page.getByRole('button',{name:/Đặt cọc/}).or(page.getByRole('link',{name:/Đặt cọc/}))).toBeVisible();
  124 | });
  125 | 
  126 | test('UI-COMP-L11 mobile thread selection opens a readable conversation and composer', async ({page}) => {
  127 |   await page.setViewportSize({width:390,height:844});
  128 |   await setup(page);await page.goto('/messages');
  129 |   await page.locator('.chat-thread-item').first().click();
  130 |   await expect(page.getByRole('textbox',{name:'Nội dung tin nhắn'})).toBeVisible();
  131 | });
  132 | 
  133 | test('UI-COMP-L12 mobile post-class Next control stays entirely inside form', async ({page}) => {
  134 |   await page.setViewportSize({width:390,height:844});
  135 |   await setup(page);await page.goto('/learner/post-class');
  136 |   await page.evaluate(()=>document.fonts.ready);
  137 |   const next=page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'});
  138 |   const box=await next.boundingBox();
  139 |   expect(box.x+box.width,'Full label and arrow must not clip outside the viewport').toBeLessThanOrEqual(390);
  140 | });
  141 | 
  142 | test('UI-COMP-L13 background chat cannot overlap and intercept a lesson dialog', async ({page}) => {
  143 |   await page.setViewportSize({width:390,height:844});
  144 |   await setup(page);await page.goto('/learner/schedule');
  145 |   await page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first().click();
  146 |   await expect(page.getByRole('dialog')).toBeVisible();
  147 |   const intercepts=await page.getByRole('button',{name:'Mở cửa sổ trò chuyện'}).evaluate(button=>{
  148 |     const r=button.getBoundingClientRect();const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);
  149 |     return Boolean(hit&&button.contains(hit));
  150 |   });
> 151 |   expect(intercepts,'Background widget must stay below modal overlay').toBe(false);
      |                                                                        ^ Error: Background widget must stay below modal overlay
  152 | });
  153 | 
  154 | test('UI-COMP-L14 mobile split-map tutor profile CTA remains fully inside its card', async ({page}) => {
  155 |   await page.setViewportSize({width:390,height:844});
  156 |   await setup(page);await page.goto('/learner/search');
  157 |   await page.getByRole('button',{name:'Bản đồ chia đôi',exact:true}).click();
  158 |   await page.evaluate(()=>document.fonts.ready);
  159 |   const card=page.locator('#tutor-card-mai-anh');
  160 |   const cardBox=await card.boundingBox();const linkBox=await card.getByRole('link',{name:'Xem hồ sơ'}).boundingBox();
  161 |   expect(linkBox.x+linkBox.width,'Profile CTA must not clip inside narrow split-list').toBeLessThanOrEqual(cardBox.x+cardBox.width);
  162 | });
  163 | 
```