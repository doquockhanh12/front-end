# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L09 newly submitted class awaits Admin moderation
- Location: tests\e2e\completion-learner-audit.spec.js:97:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "pending"
Received: "approved"
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
        - navigation "Điều hướng chính" [ref=f1e11]:
          - link "Tìm gia sư" [ref=f1e12] [cursor=pointer]:
            - /url: /learner/search
          - link "Đăng tin lớp" [ref=f1e13] [cursor=pointer]:
            - /url: /learner/post-class
          - link "Lớp của tôi" [ref=f1e14] [cursor=pointer]:
            - /url: /learner/my-classes
          - link "Lịch học" [ref=f1e15] [cursor=pointer]:
            - /url: /learner/schedule
          - link "Ví của tôi" [ref=f1e16] [cursor=pointer]:
            - /url: /learner/wallet
          - link "Trợ giúp" [ref=f1e17] [cursor=pointer]:
            - /url: /help
        - generic [ref=f1e18]:
          - button "Thông báo" [ref=f1e20] [cursor=pointer]:
            - generic [ref=f1e24]: "1"
          - link "Ảnh đại diện của Nguyễn Minh Anh minhanh" [ref=f1e25] [cursor=pointer]:
            - /url: /learner/dashboard
            - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=f1e26]:
              - generic [aria-hidden] [ref=f1e27]: MA
            - generic [ref=f1e28]: minhanh
          - button "Đăng xuất" [ref=f1e29] [cursor=pointer]
    - main [ref=f1e33]:
      - generic [ref=f1e34]:
        - generic [ref=f1e35]:
          - heading "Lớp học của tôi" [level=1] [ref=f1e36]
          - paragraph [ref=f1e37]: Theo dõi các tin tìm gia sư đã đăng, xem hồ sơ ứng tuyển và chọn gia sư phù hợp nhất.
        - link "Đăng tin tìm gia sư" [ref=f1e38] [cursor=pointer]:
          - /url: /learner/post-class
      - tablist [ref=f1e40]:
        - tab "Đang tìm gia sư (Mở) (2)" [selected] [ref=f1e41] [cursor=pointer]
        - tab "Đã chốt gia sư (0)" [ref=f1e42] [cursor=pointer]
        - tab "Đã đóng / Hết hạn (0)" [ref=f1e43] [cursor=pointer]
      - generic [ref=f1e44]:
        - article [ref=f1e45]:
          - generic [ref=f1e46]:
            - generic [ref=f1e47]:
              - generic [ref=f1e48]:
                - generic [ref=f1e49]: "MÃ LỚP: #post-1791154806162-9pts"
                - generic [ref=f1e50]: Đang mở nhận hồ sơ
              - heading "Toán – Lớp 8" [level=2] [ref=f1e51]
            - generic [ref=f1e52]:
              - generic [ref=f1e53]: Ngân sách dự kiến
              - strong [ref=f1e54]: 250.000 đ / buổi (Cố định)
          - generic [ref=f1e55]:
            - generic [ref=f1e56]: Quận 1, TP. Hồ Chí Minh (Tại nhà)
            - generic [ref=f1e60]: Thứ 3 và Thứ 5 (18:30 - 20:00)
            - generic [ref=f1e63]:
              - strong [ref=f1e69]: "0"
              - text: gia sư đã ứng tuyển
          - generic [ref=f1e70]:
            - generic [ref=f1e71]: 🎯 Yêu cầu học thử 30-45 phút
            - paragraph [ref=f1e72]:
              - strong [ref=f1e73]: "Mục tiêu:"
              - text: Lấy lại căn bản hình học không gian, nâng cao tư duy giải bài tập và chuẩn bị kiểm tra giữa kỳ.
          - generic [ref=f1e74]:
            - generic [ref=f1e75]: Danh sách ứng viên (0)
            - paragraph [ref=f1e77]: Chưa có gia sư nào ứng tuyển. Thông báo của bạn đang được ưu tiên hiển thị tới gia sư gần khu vực.
        - article [ref=f1e78]:
          - generic [ref=f1e79]:
            - generic [ref=f1e80]:
              - generic [ref=f1e81]:
                - generic [ref=f1e82]: "MÃ LỚP: #post-101"
                - generic [ref=f1e83]: Đang mở nhận hồ sơ
              - heading "Toán – Lớp 8" [level=2] [ref=f1e84]
            - generic [ref=f1e85]:
              - generic [ref=f1e86]: Ngân sách dự kiến
              - strong [ref=f1e87]: 220.000 đ / buổi (Cố định)
          - generic [ref=f1e88]:
            - generic [ref=f1e89]: Bình Thạnh, TP. Hồ Chí Minh (Tại nhà)
            - generic [ref=f1e93]: Thứ 3 và Thứ 5 (18:30 - 20:00)
            - generic [ref=f1e96]:
              - strong [ref=f1e102]: "2"
              - text: gia sư đã ứng tuyển
          - generic [ref=f1e103]:
            - generic [ref=f1e104]: 🎯 Yêu cầu học thử 30-45 phút
            - paragraph [ref=f1e105]:
              - strong [ref=f1e106]: "Mục tiêu:"
              - text: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
          - generic [ref=f1e107]:
            - generic [ref=f1e108]:
              - generic [ref=f1e109]: Danh sách ứng viên (2)
              - button "So sánh các ứng viên (2)" [ref=f1e110] [cursor=pointer]
            - generic [ref=f1e115]:
              - generic [ref=f1e116]:
                - generic [ref=f1e117]:
                  - img "Ảnh đại diện của Trần Gia Bảo" [ref=f1e118]:
                    - generic [aria-hidden] [ref=f1e119]: GB
                  - generic [ref=f1e120]:
                    - generic [ref=f1e121]:
                      - strong [ref=f1e122]: Trần Gia Bảo
                      - generic "Tích xanh xác minh thẻ sinh viên" [ref=f1e123]: ✓ Tích xanh
                      - generic [ref=f1e124]: Top-Rated
                    - generic [ref=f1e125]: ĐH Sư Phạm TP.HCM (Sư phạm Toán)
                    - generic [ref=f1e126]:
                      - generic [ref=f1e127]: ⭐ 4.9
                      - generic [ref=f1e128]: ·
                      - generic [ref=f1e129]: "🕒 Đúng giờ: 99%"
                - generic [ref=f1e130]:
                  - generic [ref=f1e131]: Đề xuất học phí
                  - strong [ref=f1e132]: 220.000 đ / buổi
                  - generic [ref=f1e133]: "Thực nhận: 198.000 đ"
                - generic [ref=f1e134]:
                  - button "Chọn gia sư này" [ref=f1e135] [cursor=pointer]
                  - link "Nhắn tin" [ref=f1e136] [cursor=pointer]:
                    - /url: /messages
              - generic [ref=f1e139]:
                - generic [ref=f1e140]:
                  - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=f1e141]:
                    - generic [aria-hidden] [ref=f1e142]: MA
                  - generic [ref=f1e143]:
                    - generic [ref=f1e144]:
                      - strong [ref=f1e145]: Nguyễn Mai Anh
                      - generic "Tích xanh xác minh thẻ sinh viên" [ref=f1e146]: ✓ Tích xanh
                    - generic [ref=f1e147]: ĐH Bách Khoa TP.HCM (Khoa học Máy tính)
                    - generic [ref=f1e148]:
                      - generic [ref=f1e149]: ⭐ 4.8
                      - generic [ref=f1e150]: ·
                      - generic [ref=f1e151]: "🕒 Đúng giờ: 97%"
                - generic [ref=f1e152]:
                  - generic [ref=f1e153]: Đề xuất học phí
                  - strong [ref=f1e154]: 240.000 đ / buổi
                  - generic [ref=f1e155]: "Thực nhận: 216.000 đ"
                - generic [ref=f1e156]:
                  - button "Chọn gia sư này" [ref=f1e157] [cursor=pointer]
                  - link "Nhắn tin" [ref=f1e158] [cursor=pointer]:
                    - /url: /messages
    - contentinfo [ref=f1e161]:
      - generic [ref=f1e162]:
        - generic [ref=f1e163]:
          - link "TN TutorNearMe Gia sư gần bạn" [ref=f1e164] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e165]: TN
            - generic [ref=f1e166]:
              - strong [ref=f1e167]: TutorNearMe
              - generic [ref=f1e168]: Gia sư gần bạn
          - paragraph [ref=f1e169]: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
        - generic [ref=f1e170]:
          - strong [ref=f1e171]: Người học
          - link "Dành cho người học" [ref=f1e172] [cursor=pointer]:
            - /url: /learner
          - link "Tìm gia sư" [ref=f1e173] [cursor=pointer]:
            - /url: /learner/search
          - link "Yêu cầu học" [ref=f1e174] [cursor=pointer]:
            - /url: /requests
        - generic [ref=f1e175]:
          - strong [ref=f1e176]: Gia sư
          - link "Trở thành gia sư" [ref=f1e177] [cursor=pointer]:
            - /url: /tutor
          - link "Không gian gia sư" [ref=f1e178] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Cơ hội dạy" [ref=f1e179] [cursor=pointer]:
            - /url: /tutor/requests
        - generic [ref=f1e180]:
          - strong [ref=f1e181]: Khám phá
          - link "Trang chủ" [ref=f1e182] [cursor=pointer]:
            - /url: /
          - link "Admin demo" [ref=f1e183] [cursor=pointer]:
            - /url: /admin/dashboard
      - generic [ref=f1e184]: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
  - complementary "Widget nhắn tin nhanh" [ref=f1e185]:
    - button "Mở cửa sổ trò chuyện" [ref=f1e186] [cursor=pointer]:
      - generic [ref=f1e189]: "1"
```

# Test source

```ts
  5   | const seed = () => createDemoState(fixedTime);
  6   | async function stateOf(page) {
  7   |   return page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);
  8   | }
  9   | async function setup(page, state = seed(), user = null) {
  10  |   await resetDemo(page, { state, ...(user ? {user} : {}) });
  11  |   if (user) await page.goto('/learner/dashboard');
  12  |   else await login(page, 'minhanh', '/learner/dashboard');
  13  | }
  14  | 
  15  | test('UI-COMP-L01 floating chat opens Messages without hook-order crash', async ({page}) => {
  16  |   await setup(page);
  17  |   const errors=[]; page.on('pageerror', error => errors.push(error.message));
  18  |   await page.getByRole('button', {name:'Mở cửa sổ trò chuyện'}).click();
  19  |   await page.getByRole('button', {name:'Mở toàn màn hình'}).click();
  20  |   await expect(page).toHaveURL(/\/messages$/);
  21  |   await expect(page.getByRole('textbox', {name:'Nội dung tin nhắn'})).toBeVisible();
  22  |   expect(errors).toEqual([]);
  23  | });
  24  | 
  25  | test('UI-COMP-L02 secondary learner cannot see another account class posts', async ({page}) => {
  26  |   const state=seed(); const user=state.users.find(u=>u.id==='user-learner-active-2');
  27  |   await setup(page,state,user);
  28  |   await page.goto('/learner/my-classes');
  29  |   await expect(page.getByText('MÃ LỚP: #post-101', {exact:true})).toHaveCount(0);
  30  | });
  31  | 
  32  | test('UI-COMP-L02 secondary learner cannot see another account conversation', async ({page}) => {
  33  |   const state=seed(); const user=state.users.find(u=>u.id==='user-learner-active-2');
  34  |   await setup(page,state,user);await page.goto('/messages');
  35  |   await expect(page.locator('.chat-thread-item')).toHaveCount(0);
  36  | });
  37  | 
  38  | test('UI-COMP-L02 learner schedule only shows owned lesson IDs, not unowned history', async ({page}) => {
  39  |   await setup(page);
  40  |   await page.goto('/learner/schedule');
  41  |   const ownedCount=seed().lessons.filter(l=>l.learnerId==='demo-learner').length;
  42  |   await expect(page.locator('.lesson-card')).toHaveCount(ownedCount);
  43  | });
  44  | 
  45  | test('UI-COMP-L03 completed lesson cannot be cancelled by learner', async ({page}) => {
  46  |   await setup(page); await page.goto('/learner/schedule');
  47  |   await page.getByRole('button', {name:/Đã hoàn thành/}).click();
  48  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  49  |   await expect(page.getByRole('dialog')).toBeVisible();
  50  |   await expect(page.getByRole('button', {name:'Hủy buổi học này'})).toHaveCount(0);
  51  | });
  52  | 
  53  | test('UI-COMP-L04 refund without linked escrow never consumes unrelated class escrow', async ({page}) => {
  54  |   await setup(page); await page.goto('/learner/schedule');
  55  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  56  |   const before=await stateOf(page);
  57  |   await page.getByRole('button', {name:'Yêu cầu Hoàn tiền 100% vì Sự cố'}).click();
  58  |   const after=await stateOf(page);
  59  |   expect(after.escrowTransactions).toEqual(before.escrowTransactions);
  60  |   expect(after.wallets).toEqual(before.wallets);
  61  | });
  62  | 
  63  | test('UI-COMP-L05 insufficient balance cannot mark offer deposit successful', async ({page}) => {
  64  |   const state=seed();state.wallets['demo-learner'].availableBalance=0;
  65  |   await setup(page,state);await page.goto('/messages');
  66  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  67  |   await expect(page.getByText('Đã đồng ý & Đặt cọc thành công',{exact:true})).toHaveCount(0);
  68  |   expect((await stateOf(page)).messages.find(m=>m.type==='custom_offer').offerData.status).toBe('pending');
  69  | });
  70  | 
  71  | test('UI-COMP-L06 paid offer produces linked shared lessons visible to Tutor', async ({page}) => {
  72  |   await setup(page); await page.goto('/messages');
  73  |   const before=await stateOf(page);const offer=before.messages.find(m=>m.type==='custom_offer');
  74  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  75  |   const after=await stateOf(page);
  76  |   const newEscrow=after.escrowTransactions.find(e=>!before.escrowTransactions.some(old=>old.id===e.id));
  77  |   expect(newEscrow,'Successful payment must create canonical escrow').toBeTruthy();
  78  |   await page.goto('/learner/dashboard');await logout(page);
  79  |   await login(page,'giabao','/tutor/timetable');
  80  |   const tutorState=await stateOf(page);
  81  |   expect(tutorState.lessons.filter(l=>l.escrowId===newEscrow.id||l.offerId===offer.id||l.messageId===offer.id)).toHaveLength(offer.offerData.sessionsCount);
  82  | });
  83  | 
  84  | test('UI-COMP-L07 lesson modal supports keyboard Escape and focus return', async ({page}) => {
  85  |   await setup(page);await page.goto('/learner/schedule');
  86  |   const trigger=page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first();
  87  |   await trigger.click();await expect(page.getByRole('dialog')).toBeVisible();
  88  |   await expect.poll(()=>page.getByRole('dialog').evaluate(el=>el.contains(document.activeElement))).toBe(true);
  89  |   await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
  90  |   await expect(trigger).toBeFocused();
  91  | });
  92  | 
  93  | test('UI-COMP-L08 proposal profile agrees with canonical public tutor university', async ({page}) => {
  94  |   await setup(page);await page.goto('/learner/my-classes');
  95  |   const profile=seed().profiles.find(p=>p.id==='quoc-bao');
  96  |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  97  |   await expect(candidate).toContainText(profile.university);
  98  | });
  99  | 
  100 | test('UI-COMP-L09 newly submitted class awaits Admin moderation', async ({page}) => {
  101 |   await setup(page);await page.goto('/learner/post-class');
  102 |   await page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'}).click();
  103 |   await page.getByRole('button',{name:'Tiếp tục: Ngân sách & Mục tiêu'}).click();
  104 |   const before=await stateOf(page);
> 105 |   await page.getByRole('button',{name:/Đăng tin|Gửi tin/}).last().click();
      |                                                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  106 |   await expect(page).toHaveURL(/\/learner\/my-classes$/);
  107 |   const created=(await stateOf(page)).classPosts.find(p=>!before.classPosts.some(old=>old.id===p.id));
  108 |   expect(created).toBeTruthy();expect(created.moderationStatus).toBe('pending');
  109 | });
  110 | 
  111 | test('UI-COMP-L10 selected candidate provides a deposit next step before claiming matched class', async ({page}) => {
  112 |   await setup(page);await page.goto('/learner/my-classes');
  113 |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  114 |   await candidate.getByRole('button',{name:'Chọn gia sư này'}).click();
  115 |   await expect(page.getByRole('button',{name:/Đặt cọc/}).or(page.getByRole('link',{name:/Đặt cọc/}))).toBeVisible();
  116 | });
  117 | 
  118 | test('UI-COMP-L11 mobile thread selection opens a readable conversation and composer', async ({page}) => {
  119 |   await page.setViewportSize({width:390,height:844});
  120 |   await setup(page);await page.goto('/messages');
  121 |   await page.locator('.chat-thread-item').first().click();
  122 |   await expect(page.getByRole('textbox',{name:'Nội dung tin nhắn'})).toBeVisible();
  123 | });
  124 | 
  125 | test('UI-COMP-L12 mobile post-class Next control stays entirely inside form', async ({page}) => {
  126 |   await page.setViewportSize({width:390,height:844});
  127 |   await setup(page);await page.goto('/learner/post-class');
  128 |   await page.evaluate(()=>document.fonts.ready);
  129 |   const next=page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'});
  130 |   const box=await next.boundingBox();
  131 |   expect(box.x+box.width,'Full label and arrow must not clip outside the viewport').toBeLessThanOrEqual(390);
  132 | });
  133 | 
  134 | test('UI-COMP-L13 background chat cannot overlap and intercept a lesson dialog', async ({page}) => {
  135 |   await page.setViewportSize({width:390,height:844});
  136 |   await setup(page);await page.goto('/learner/schedule');
  137 |   await page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first().click();
  138 |   await expect(page.getByRole('dialog')).toBeVisible();
  139 |   const intercepts=await page.getByRole('button',{name:'Mở cửa sổ trò chuyện'}).evaluate(button=>{
  140 |     const r=button.getBoundingClientRect();const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);
  141 |     return Boolean(hit&&button.contains(hit));
  142 |   });
  143 |   expect(intercepts,'Background widget must stay below modal overlay').toBe(false);
  144 | });
  145 | 
```