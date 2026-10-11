# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L14 mobile split-map tutor profile CTA remains fully inside its card
- Location: tests\e2e\completion-learner-audit.spec.js:154:1

# Error details

```
Error: Profile CTA must not clip inside narrow split-list

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 175
Received:    267.671875
```

# Page snapshot

```yaml
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
      - generic [ref=f1e15]:
        - generic [ref=f1e16]:
          - generic [ref=f1e17]: TUTORNEARME · HỌC GẦN HƠN, HIỂU NHAU HƠN
          - heading [level=1] [ref=f1e18]:
            - text: Bạn đau đầu đểtìm gia sư tốt,
            - emphasis [ref=f1e19]: TutorNearMesẽ giúp bạn.
          - paragraph [ref=f1e20]: Tìm sinh viên gia sư theo đúng môn, khu vực, thời gian rảnh và mức phí gia đình mong muốn — tất cả trong một trải nghiệm rõ ràng, dễ so sánh.
          - generic [ref=f1e21]:
            - link "Tìm gia sư phù hợp" [ref=f1e22] [cursor=pointer]:
              - /url: "#search-controls"
            - link "Xem cách hoạt động ↘" [ref=f1e25] [cursor=pointer]:
              - /url: /learner#how
        - generic [ref=f1e26]:
          - img "Học sinh học tập cùng bạn bè" [ref=f1e27]
          - img "Gia sư đang hướng dẫn bài học" [ref=f1e28]
          - generic [ref=f1e29]:
            - generic [ref=f1e30]: Gần bạn
            - generic [ref=f1e31]: ưu tiên khu vực phù hợp
          - generic [ref=f1e32]:
            - generic [ref=f1e33]: 4.9/5
            - generic [ref=f1e34]: đánh giá demo
      - region "Tìm kiếm nhanh" [ref=f1e35]:
        - generic [ref=f1e36]:
          - generic [ref=f1e37]:
            - text: Tên hoặc từ khóa
            - searchbox "Tên hoặc từ khóa" [ref=f1e42]
          - generic [ref=f1e43]:
            - text: Môn học
            - combobox "Môn học" [ref=f1e44] [cursor=pointer]:
              - option "Tất cả môn" [selected]
              - option "Toán"
              - option "Vật lý"
              - option "Tiếng Anh"
              - option "IELTS"
              - option "Ngữ văn"
              - option "Hóa học"
          - generic [ref=f1e45]:
            - text: Khu vực
            - combobox "Khu vực" [ref=f1e46] [cursor=pointer]:
              - option "Tất cả khu vực" [selected]
              - option "Bình Thạnh"
              - option "Thủ Đức"
              - option "Quận 3"
              - option "Phú Nhuận"
          - generic [ref=f1e47]:
            - text: Thời gian rảnh
            - combobox "Thời gian rảnh" [ref=f1e48] [cursor=pointer]:
              - option "Mọi khung giờ" [selected]
              - option "Buổi sáng"
              - option "Buổi chiều"
              - option "Buổi tối"
              - option "Cuối tuần"
          - generic [ref=f1e49]:
            - text: Mức phí
            - combobox "Mức phí" [ref=f1e50] [cursor=pointer]:
              - option "Mọi mức phí" [selected]
              - option "Đến 160.000đ"
              - option "Đến 180.000đ"
              - option "Đến 200.000đ"
          - button "Tìm gia sư" [ref=f1e51] [cursor=pointer]
      - generic [ref=f1e55]:
        - generic [ref=f1e56]:
          - generic [ref=f1e57]:
            - text: KHÁM PHÁ GIA SƯ
            - heading "Một lựa chọn tốt bắt đầu từ sự phù hợp" [level=2] [ref=f1e58]
          - paragraph [ref=f1e59]: Lọc theo điều quan trọng với bạn, rồi so sánh trong một góc nhìn rõ ràng.
        - generic [ref=f1e60]:
          - region "Kết quả tìm gia sư" [ref=f1e61]:
            - generic [ref=f1e62]:
              - generic [ref=f1e63]:
                - strong [ref=f1e64]: 6 gia sư phù hợp
                - text: tại TP. Hồ Chí Minh
              - generic [ref=f1e65]:
                - group "Chế độ hiển thị" [ref=f1e66]:
                  - button "Danh sách" [ref=f1e67] [cursor=pointer]
                  - button "Bản đồ chia đôi" [active] [pressed] [ref=f1e71] [cursor=pointer]
                - button "Bộ lọc" [ref=f1e74] [cursor=pointer]
                - generic [ref=f1e76]: Sắp xếp
                - combobox "Sắp xếp" [ref=f1e77] [cursor=pointer]:
                  - option "Đề xuất" [selected]
                  - option "Đánh giá cao"
                  - option "Học phí thấp"
            - generic [ref=f1e78]:
              - generic [ref=f1e79]:
                - article [ref=f1e80]:
                  - generic [ref=f1e81]:
                    - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=f1e82]:
                      - generic [aria-hidden] [ref=f1e83]: MA
                    - generic:
                      - generic: Gia sư nổi bật
                      - heading "Nguyễn Mai Anh" [level=3]
                      - paragraph: ĐH Khoa học Tự nhiên
                    - button "Lưu Nguyễn Mai Anh" [ref=f1e84] [cursor=pointer]
                  - generic [ref=f1e87]:
                    - generic [ref=f1e88]:
                      - strong [ref=f1e91]: "4.9"
                      - generic [ref=f1e92]: (48 đánh giá)
                    - generic [ref=f1e93]: Đã xác minh
                  - paragraph [ref=f1e97]: Giúp học sinh xây nền tảng vững chắc qua cách giải thích gần gũi và lộ trình học rõ ràng.
                  - generic "Môn dạy" [ref=f1e98]:
                    - generic [ref=f1e99]: Toán
                    - generic [ref=f1e100]: Vật lý
                  - generic [ref=f1e101]:
                    - generic [ref=f1e102]: Bình Thạnh
                    - generic [ref=f1e106]: 17:00–21:00 · 09:00–12:00
                  - generic [ref=f1e110]:
                    - generic [ref=f1e111]:
                      - strong [ref=f1e112]: 180.000đ
                      - generic [ref=f1e113]: / buổi
                    - link "Xem hồ sơ" [ref=f1e114] [cursor=pointer]:
                      - /url: /tutors/mai-anh
                - article [ref=f1e118]:
                  - generic [ref=f1e119]:
                    - img "Ảnh đại diện của Trần Gia Bảo" [ref=f1e120]:
                      - generic [aria-hidden] [ref=f1e121]: GB
                    - generic:
                      - heading "Trần Gia Bảo" [level=3]
                      - paragraph: ĐH Ngoại thương
                    - button "Lưu Trần Gia Bảo" [ref=f1e122] [cursor=pointer]
                  - generic [ref=f1e125]:
                    - generic [ref=f1e126]:
                      - strong [ref=f1e129]: "4.9"
                      - generic [ref=f1e130]: (36 đánh giá)
                    - generic [ref=f1e131]: Đã xác minh
                  - generic "Môn dạy" [ref=f1e135]:
                    - generic [ref=f1e136]: Tiếng Anh
                    - generic [ref=f1e137]: IELTS
                  - generic [ref=f1e138]:
                    - generic [ref=f1e139]: Thủ Đức
                    - generic [ref=f1e143]: 18:00–21:00 · 09:00–12:00
                  - generic [ref=f1e147]:
                    - generic [ref=f1e148]:
                      - strong [ref=f1e149]: 220.000đ
                      - generic [ref=f1e150]: / buổi
                    - link "Xem hồ sơ" [ref=f1e151] [cursor=pointer]:
                      - /url: /tutors/quoc-bao
                - article [ref=f1e155]:
                  - generic [ref=f1e156]:
                    - img "Ảnh đại diện của Phạm Hà Linh" [ref=f1e157]:
                      - generic [aria-hidden] [ref=f1e158]: HL
                    - generic:
                      - heading "Phạm Hà Linh" [level=3]
                      - paragraph: ĐH Sư phạm TP.HCM
                    - button "Lưu Phạm Hà Linh" [ref=f1e159] [cursor=pointer]
                  - generic [ref=f1e162]:
                    - generic [ref=f1e163]:
                      - strong [ref=f1e166]: "4.8"
                      - generic [ref=f1e167]: (29 đánh giá)
                    - generic [ref=f1e168]: Đã xác minh
                  - generic "Môn dạy" [ref=f1e172]:
                    - generic [ref=f1e173]: Ngữ văn
                    - generic [ref=f1e174]: Tiếng Anh
                  - generic [ref=f1e175]:
                    - generic [ref=f1e176]: Quận 3
                    - generic [ref=f1e180]: 13:00–17:00 · 09:00–12:00
                  - generic [ref=f1e184]:
                    - generic [ref=f1e185]:
                      - strong [ref=f1e186]: 160.000đ
                      - generic [ref=f1e187]: / buổi
                    - link "Xem hồ sơ" [ref=f1e188] [cursor=pointer]:
                      - /url: /tutors/ha-linh
                - article [ref=f1e192]:
                  - generic [ref=f1e193]:
                    - img "Ảnh đại diện của Lê Đức Minh" [ref=f1e194]:
                      - generic [aria-hidden] [ref=f1e195]: ĐM
                    - generic:
                      - heading "Lê Đức Minh" [level=3]
                      - paragraph: ĐH Bách khoa TP.HCM
                    - button "Lưu Lê Đức Minh" [ref=f1e196] [cursor=pointer]
                  - generic [ref=f1e199]:
                    - generic [ref=f1e200]:
                      - strong [ref=f1e203]: "4.8"
                      - generic [ref=f1e204]: (31 đánh giá)
                    - generic [ref=f1e205]: Đã xác minh
                  - generic "Môn dạy" [ref=f1e209]:
                    - generic [ref=f1e210]: Toán
                    - generic [ref=f1e211]: Hóa học
                  - generic [ref=f1e212]:
                    - generic [ref=f1e213]: Phú Nhuận
                    - generic [ref=f1e217]: 17:00–21:00 · 13:00–17:00
                  - generic [ref=f1e221]:
                    - generic [ref=f1e222]:
                      - strong [ref=f1e223]: 170.000đ
                      - generic [ref=f1e224]: / buổi
                    - link "Xem hồ sơ" [ref=f1e225] [cursor=pointer]:
                      - /url: /tutors/duc-minh
                - article [ref=f1e229]:
                  - generic [ref=f1e230]:
                    - img "Ảnh đại diện của Võ Thu Trang" [ref=f1e231]:
                      - generic [aria-hidden] [ref=f1e232]: TT
                    - generic:
                      - heading "Võ Thu Trang" [level=3]
                      - paragraph: ĐH Sư phạm TP.HCM
                    - button "Lưu Võ Thu Trang" [ref=f1e233] [cursor=pointer]
                  - generic [ref=f1e236]:
                    - generic [ref=f1e237]:
                      - strong [ref=f1e240]: "4.7"
                      - generic [ref=f1e241]: (22 đánh giá)
                    - generic [ref=f1e242]: Đã xác minh
                  - generic "Môn dạy" [ref=f1e246]:
                    - generic [ref=f1e247]: Tiếng Anh
                    - generic [ref=f1e248]: Ngữ văn
                  - generic [ref=f1e249]:
                    - generic [ref=f1e250]: Bình Thạnh
                    - generic [ref=f1e254]: 08:00–12:00
                  - generic [ref=f1e258]:
                    - generic [ref=f1e259]:
                      - strong [ref=f1e260]: 190.000đ
                      - generic [ref=f1e261]: / buổi
                    - link "Xem hồ sơ" [ref=f1e262] [cursor=pointer]:
                      - /url: /tutors/thu-trang
                - article [ref=f1e266]:
                  - generic [ref=f1e267]:
                    - img "Ảnh đại diện của Đặng Gia Huy" [ref=f1e268]:
                      - generic [aria-hidden] [ref=f1e269]: GH
                    - generic:
                      - heading "Đặng Gia Huy" [level=3]
                      - paragraph: ĐH Khoa học Tự nhiên
                    - button "Lưu Đặng Gia Huy" [ref=f1e270] [cursor=pointer]
                  - generic [ref=f1e274]:
                    - strong [ref=f1e277]: "4.7"
                    - generic [ref=f1e278]: (18 đánh giá)
                  - generic "Môn dạy" [ref=f1e279]:
                    - generic [ref=f1e280]: Vật lý
                    - generic [ref=f1e281]: Toán
                  - generic [ref=f1e282]:
                    - generic [ref=f1e283]: Thủ Đức
                    - generic [ref=f1e287]: 19:00–21:00
                  - generic [ref=f1e291]:
                    - generic [ref=f1e292]:
                      - strong [ref=f1e293]: 150.000đ
                      - generic [ref=f1e294]: / buổi
                    - link "Xem hồ sơ" [ref=f1e295] [cursor=pointer]:
                      - /url: /tutors/gia-huy
              - generic [ref=f1e299]:
                - generic [ref=f1e300]:
                  - generic [ref=f1e301]: 📍 Bản đồ trực quan (6 gia sư)
                  - generic [ref=f1e302]: Bấm ghim giá để chọn gia sư
                - img "Bản đồ minh họa khu vực gia sư" [ref=f1e303]:
                  - generic [ref=f1e307]:
                    - generic [ref=f1e308]: PHÚ NHUẬN
                    - generic [ref=f1e309]: BÌNH THẠNH
                    - generic [ref=f1e310]: THỦ ĐỨC
                    - generic [ref=f1e311]: QUẬN 3
                  - button "Chọn Nguyễn Mai Anh, Bình Thạnh" [ref=f1e312] [cursor=pointer]:
                    - generic: MA
                    - generic [ref=f1e314]: 180k
                  - button "Chọn Trần Gia Bảo, Thủ Đức" [ref=f1e316] [cursor=pointer]:
                    - generic: GB
                    - generic [ref=f1e318]: 220k
                  - button "Chọn Phạm Hà Linh, Quận 3" [ref=f1e320] [cursor=pointer]:
                    - generic: HL
                    - generic [ref=f1e322]: 160k
                  - button "Chọn Lê Đức Minh, Phú Nhuận" [ref=f1e324] [cursor=pointer]:
                    - generic: ĐM
                    - generic [ref=f1e326]: 170k
                  - button "Chọn Võ Thu Trang, Bình Thạnh" [ref=f1e328] [cursor=pointer]:
                    - generic: TT
                    - generic [ref=f1e330]: 190k
                  - button "Chọn Đặng Gia Huy, Thủ Đức" [ref=f1e332] [cursor=pointer]:
                    - generic: GH
                    - generic [ref=f1e334]: 150k
          - complementary "Thông tin hỗ trợ" [ref=f1e336]:
            - link [ref=f1e337] [cursor=pointer]:
              - /url: /learner/map
              - text: KHÁM PHÁ KHU VỰC
              - heading "Bản đồ gia sư gần bạn" [level=3] [ref=f1e338]
              - img "Bản đồ minh họa khu vực gia sư" [ref=f1e339]:
                - generic [ref=f1e343]:
                  - generic [ref=f1e344]: PHÚ NHUẬN
                  - generic [ref=f1e345]: BÌNH THẠNH
                  - generic [ref=f1e346]: THỦ ĐỨC
                  - generic [ref=f1e347]: QUẬN 3
                - generic [ref=f1e348]: MA
                - generic [ref=f1e350]: GB
                - generic [ref=f1e352]: HL
                - generic [ref=f1e354]: ĐM
                - generic [ref=f1e356]: TT
                - generic [ref=f1e358]: GH
                - generic [ref=f1e360]: TV
                - generic [ref=f1e362]: HP
                - generic [ref=f1e364]: MC
                - generic [ref=f1e366]: TA
                - generic [ref=f1e368]: QH
              - paragraph [ref=f1e370]: Xem khu vực và khoảng cách giữa các gia sư.
              - generic [ref=f1e371]: Mở bản đồ
            - generic [ref=f1e374]:
              - text: BẮT ĐẦU ĐƠN GIẢN
              - heading "Ba bước để bắt đầu" [level=3] [ref=f1e375]
              - list [ref=f1e376]:
                - listitem [ref=f1e377]:
                  - generic [ref=f1e378]: "01"
                  - text: Chọn môn và khu vực
                - listitem [ref=f1e379]:
                  - generic [ref=f1e380]: "02"
                  - text: So sánh hồ sơ gia sư
                - listitem [ref=f1e381]:
                  - generic [ref=f1e382]: "03"
                  - text: Gửi yêu cầu học phù hợp
            - paragraph [ref=f1e387]:
              - strong [ref=f1e388]: Thông tin minh bạch
              - text: Bạn luôn thấy mức phí và lịch rảnh trước khi quyết định.
    - contentinfo [ref=f1e389]:
      - generic [ref=f1e390]:
        - link "TutorNearMe — trang chủ" [ref=f1e391] [cursor=pointer]:
          - /url: /
          - generic [aria-hidden] [ref=f1e392]: TN
          - generic [ref=f1e393]: TutorNearMe
        - paragraph [ref=f1e394]: Kết nối đúng người. Học theo cách của bạn.
        - generic [ref=f1e395]: Giao diện mẫu · TutorNearMe
  - complementary "Widget nhắn tin nhanh" [ref=f1e396]:
    - button "Mở cửa sổ trò chuyện" [ref=f1e397] [cursor=pointer]:
      - generic [ref=f1e400]: "1"
```

# Test source

```ts
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
  151 |   expect(intercepts,'Background widget must stay below modal overlay').toBe(false);
  152 | });
  153 | 
  154 | test('UI-COMP-L14 mobile split-map tutor profile CTA remains fully inside its card', async ({page}) => {
  155 |   await page.setViewportSize({width:390,height:844});
  156 |   await setup(page);await page.goto('/learner/search');
  157 |   await page.getByRole('button',{name:'Bản đồ chia đôi',exact:true}).click();
  158 |   await page.evaluate(()=>document.fonts.ready);
  159 |   const card=page.locator('#tutor-card-mai-anh');
  160 |   const cardBox=await card.boundingBox();const linkBox=await card.getByRole('link',{name:'Xem hồ sơ'}).boundingBox();
> 161 |   expect(linkBox.x+linkBox.width,'Profile CTA must not clip inside narrow split-list').toBeLessThanOrEqual(cardBox.x+cardBox.width);
      |                                                                                        ^ Error: Profile CTA must not clip inside narrow split-list
  162 | });
  163 | 
```