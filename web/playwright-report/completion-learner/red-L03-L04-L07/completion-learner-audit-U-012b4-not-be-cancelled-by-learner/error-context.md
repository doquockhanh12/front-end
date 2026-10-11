# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L03 completed lesson cannot be cancelled by learner
- Location: tests\e2e\completion-learner-audit.spec.js:53:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('button', { name: 'Hủy buổi học này' })
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByRole('button', { name: 'Hủy buổi học này' }) with timeout 5000ms
  - waiting for getByRole('button', { name: 'Hủy buổi học này' })
    12 × locator resolved to 1 element
       - unexpected value "1"

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
            - generic [ref=f1e36]: LỊCH HỌC & LỚP TRỰC TUYẾN
            - heading "Lịch học gia sư của bạn" [level=1] [ref=f1e37]
            - paragraph [ref=f1e38]: Xem lịch học, tham gia phòng học Google Meet và quản lý bảo lưu buổi dạy.
          - generic [ref=f1e39]:
            - button "Danh sách" [ref=f1e40] [cursor=pointer]
            - button "Lịch tuần" [ref=f1e42] [cursor=pointer]
        - generic [ref=f1e45]:
          - generic [ref=f1e46]:
            - button "Tất cả (5)" [ref=f1e47] [cursor=pointer]
            - button "Sắp diễn ra" [ref=f1e48] [cursor=pointer]
            - button "Đã hoàn thành" [ref=f1e49] [cursor=pointer]
            - button "Đã hủy" [ref=f1e50] [cursor=pointer]
          - generic [ref=f1e51]:
            - article [ref=f1e52]:
              - generic [ref=f1e53]:
                - generic [ref=f1e54]:
                  - strong [ref=f1e55]: Thứ 7, 06/06
                  - text: "2026"
                - generic [ref=f1e56]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e57]
                  - generic [ref=f1e58]:
                    - generic [ref=f1e59]: 18:00 – 18:45
                    - generic [ref=f1e63]: •
                    - generic [ref=f1e64]:
                      - text: "Gia sư:"
                      - strong [ref=f1e65]: Trần Gia Bảo
                    - generic [ref=f1e66]: •
                    - generic [ref=f1e67]: Online
              - generic [ref=f1e71]:
                - button "Vào phòng học Online" [ref=f1e72] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [active] [ref=f1e76] [cursor=pointer]
            - article [ref=f1e77]:
              - generic [ref=f1e78]:
                - generic [ref=f1e79]:
                  - strong [ref=f1e80]: Thứ 6, 03/07
                  - text: "2026"
                - generic [ref=f1e81]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e82]
                  - generic [ref=f1e83]:
                    - generic [ref=f1e84]: 18:00 – 18:45
                    - generic [ref=f1e88]: •
                    - generic [ref=f1e89]:
                      - text: "Gia sư:"
                      - strong [ref=f1e90]: Trần Gia Bảo
                    - generic [ref=f1e91]: •
                    - generic [ref=f1e92]: Online
              - generic [ref=f1e96]:
                - button "Vào phòng học Online" [ref=f1e97] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e101] [cursor=pointer]
            - article [ref=f1e102]:
              - generic [ref=f1e103]:
                - generic [ref=f1e104]:
                  - strong [ref=f1e105]: CN, 20/09
                  - text: "2026"
                - generic [ref=f1e106]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e107]
                  - generic [ref=f1e108]:
                    - generic [ref=f1e109]: 18:00 – 18:45
                    - generic [ref=f1e113]: •
                    - generic [ref=f1e114]:
                      - text: "Gia sư:"
                      - strong [ref=f1e115]: Trần Gia Bảo
                    - generic [ref=f1e116]: •
                    - generic [ref=f1e117]: Online
              - generic [ref=f1e121]:
                - button "Vào phòng học Online" [ref=f1e122] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e126] [cursor=pointer]
            - article [ref=f1e127]:
              - generic [ref=f1e128]:
                - generic [ref=f1e129]:
                  - strong [ref=f1e130]: CN, 27/09
                  - text: "2026"
                - generic [ref=f1e131]:
                  - heading "IELTS" [level=3] [ref=f1e132]
                  - generic [ref=f1e133]:
                    - generic [ref=f1e134]: 19:00 – 19:45
                    - generic [ref=f1e138]: •
                    - generic [ref=f1e139]:
                      - text: "Gia sư:"
                      - strong [ref=f1e140]: Trần Gia Bảo
                    - generic [ref=f1e141]: •
                    - generic [ref=f1e142]: Online
              - generic [ref=f1e146]:
                - button "Vào phòng học Online" [ref=f1e147] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e151] [cursor=pointer]
            - article [ref=f1e152]:
              - generic [ref=f1e153]:
                - generic [ref=f1e154]:
                  - strong [ref=f1e155]: Thứ 5, 01/10
                  - text: "2026"
                - generic [ref=f1e156]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e157]
                  - generic [ref=f1e158]:
                    - generic [ref=f1e159]: 18:00 – 18:45
                    - generic [ref=f1e163]: •
                    - generic [ref=f1e164]:
                      - text: "Gia sư:"
                      - strong [ref=f1e165]: Trần Gia Bảo
                    - generic [ref=f1e166]: •
                    - generic [ref=f1e167]: Online
              - generic [ref=f1e171]:
                - button "Vào phòng học Online" [ref=f1e172] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e176] [cursor=pointer]
    - complementary "Widget nhắn tin nhanh" [ref=f1e177]:
      - button "Mở cửa sổ trò chuyện" [ref=f1e178] [cursor=pointer]:
        - generic [ref=f1e181]: "1"
  - dialog [ref=f1e183]:
    - button "Đóng cửa sổ" [ref=f1e184] [cursor=pointer]
    - banner [ref=f1e188]:
      - generic [ref=f1e189]: CHI TIẾT BUỔI HỌC
      - heading "Tiếng Anh" [level=2] [ref=f1e190]
      - generic [ref=f1e191]:
        - generic [ref=f1e192]: Thứ 7, 06/06 · 18:00 – 18:45
        - generic [ref=f1e196]: •
        - generic [ref=f1e197]:
          - text: "Gia sư:"
          - strong [ref=f1e198]: Trần Gia Bảo
        - generic [ref=f1e199]: •
        - generic [ref=f1e200]:
          - text: "Học phí:"
          - strong [ref=f1e201]: 180.000 đ
    - generic [ref=f1e202]:
      - button "Vào phòng học Online (Google Meet)" [ref=f1e203] [cursor=pointer]
      - generic [ref=f1e207]: Phòng học kích hoạt tự động 15 phút trước giờ học và bảo mật chuẩn Google Meet HD.
    - generic [ref=f1e208]:
      - heading "Tài liệu & Bài tập về nhà" [level=3] [ref=f1e209]
      - generic [ref=f1e213]:
        - generic [ref=f1e214]:
          - generic [ref=f1e215]:
            - strong [ref=f1e216]: Slide_LyThuyet_ChuyenDe.pdf
            - generic [ref=f1e217]: PDF · 2.4 MB · Cập nhật bởi gia sư
          - button "Tải về" [ref=f1e218] [cursor=pointer]
        - generic [ref=f1e222]:
          - generic [ref=f1e223]:
            - strong [ref=f1e224]: BaiTap_TuLuyen_15Cau.docx
            - generic [ref=f1e225]: Tài liệu bài tập ôn tập tại nhà
          - button "Nộp bài" [ref=f1e226] [cursor=pointer]
        - generic [ref=f1e230]: "Ghi chú buổi học: Học sinh ôn kỹ lý thuyết chuyên đề và chuẩn bị câu hỏi trước khi vào lớp."
    - generic [ref=f1e231]:
      - heading "Chính sách & Hủy buổi học" [level=3] [ref=f1e232]
      - generic [ref=f1e235]:
        - text: "Thời gian trước giờ học (Mô phỏng):"
        - generic [ref=f1e236]:
          - 'button "> 24h (Ví dụ: 26 giờ)" [ref=f1e237] [cursor=pointer]'
          - 'button "2h – 24h (Ví dụ: 5 giờ)" [ref=f1e238] [cursor=pointer]'
          - 'button "< 2h (Ví dụ: 1 giờ)" [ref=f1e239] [cursor=pointer]'
      - generic [ref=f1e240]:
        - generic [ref=f1e241]:
          - generic [ref=f1e242]: "Quy chế áp dụng:"
          - generic [ref=f1e243]: "Hủy trước >= 24h: Hoàn tiền 100%"
        - generic [ref=f1e244]:
          - generic [ref=f1e245]: "Số tiền bạn được hoàn:"
          - generic [ref=f1e246]: +180.000 đ (100%)
        - generic [ref=f1e247]:
          - generic [ref=f1e248]: "Bồi thường cho gia sư:"
          - generic [ref=f1e249]: 0 đ (0%)
        - paragraph [ref=f1e250]: Bạn được hoàn lại 100% học phí vào ví khả dụng. Lịch rảnh của gia sư được tự động mở lại.
      - button "Hủy buổi học này" [ref=f1e251] [cursor=pointer]
    - generic [ref=f1e252]:
      - generic [ref=f1e253]:
        - generic [ref=f1e254]: Gặp sự cố hoặc gia sư vắng mặt?
        - text: Bảo hiểm Escrow hoàn lại 100% học phí ngay lập tức.
      - button "Yêu cầu Hoàn tiền 100% vì Sự cố" [ref=f1e255] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
  3   | import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';
  4   | 
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
  38  | test('UI-COMP-L02 unauthenticated visitor cannot read private seeded chat', async ({page}) => {
  39  |   const state=seed();await resetDemo(page,{state});await page.goto('/login');
  40  |   const trigger=page.getByRole('button',{name:'Mở cửa sổ trò chuyện'});
  41  |   if (await trigger.count()) await trigger.click();
  42  |   const privateText=state.messages.find(m=>m.type==='text').text;
  43  |   await expect(page.getByText(privateText,{exact:true})).toHaveCount(0);
  44  | });
  45  | 
  46  | test('UI-COMP-L02 learner schedule only shows owned lesson IDs, not unowned history', async ({page}) => {
  47  |   await setup(page);
  48  |   await page.goto('/learner/schedule');
  49  |   const ownedCount=seed().lessons.filter(l=>l.learnerId==='demo-learner').length;
  50  |   await expect(page.locator('.lesson-card')).toHaveCount(ownedCount);
  51  | });
  52  | 
  53  | test('UI-COMP-L03 completed lesson cannot be cancelled by learner', async ({page}) => {
  54  |   await setup(page); await page.goto('/learner/schedule');
  55  |   await page.getByRole('button', {name:/Đã hoàn thành/}).click();
  56  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  57  |   await expect(page.getByRole('dialog')).toBeVisible();
> 58  |   await expect(page.getByRole('button', {name:'Hủy buổi học này'})).toHaveCount(0);
      |                                                                     ^ Error: expect(locator).toHaveCount(expected) failed
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
  151 |   expect(intercepts,'Background widget must stay below modal overlay').toBe(false);
  152 | });
  153 | 
  154 | test('UI-COMP-L14 mobile split-map tutor profile CTA remains fully inside its card', async ({page}) => {
  155 |   await page.setViewportSize({width:390,height:844});
  156 |   await setup(page);await page.goto('/learner/search');
  157 |   await page.getByRole('button',{name:'Bản đồ chia đôi',exact:true}).click();
  158 |   await page.evaluate(()=>document.fonts.ready);
```