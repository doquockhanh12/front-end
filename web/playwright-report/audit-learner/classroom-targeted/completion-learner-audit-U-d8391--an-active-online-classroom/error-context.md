# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L14 completed lessons do not advertise an active online classroom
- Location: tests\e2e\completion-learner-audit.spec.js:146:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('button', { name: 'Vào phòng học Online', exact: true })
Expected: 0
Received: 15
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByRole('button', { name: 'Vào phòng học Online', exact: true }) with timeout 5000ms
  - waiting for getByRole('button', { name: 'Vào phòng học Online', exact: true })
    13 × locator resolved to 15 elements
       - unexpected value "15"

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
          - generic [ref=f1e36]: LỊCH HỌC & LỚP TRỰC TUYẾN
          - heading "Lịch học gia sư của bạn" [level=1] [ref=f1e37]
          - paragraph [ref=f1e38]: Xem lịch học, tham gia phòng học Google Meet và quản lý bảo lưu buổi dạy.
        - generic [ref=f1e39]:
          - button "Danh sách" [ref=f1e40] [cursor=pointer]
          - button "Lịch tuần" [ref=f1e42] [cursor=pointer]
      - generic [ref=f1e45]:
        - generic [ref=f1e46]:
          - button "Tất cả (20)" [ref=f1e47] [cursor=pointer]
          - button "Sắp diễn ra" [ref=f1e48] [cursor=pointer]
          - button "Đã hoàn thành" [active] [ref=f1e49] [cursor=pointer]
          - button "Đã hủy" [ref=f1e50] [cursor=pointer]
        - generic [ref=f1e51]:
          - article [ref=f1e52]:
            - generic [ref=f1e53]:
              - generic [ref=f1e54]:
                - strong [ref=f1e55]: Thứ 7, 09/05
                - text: "2026"
              - generic [ref=f1e56]:
                - heading "Tiếng Anh" [level=3] [ref=f1e57]
                - generic [ref=f1e58]:
                  - generic [ref=f1e59]: 09:00 – 09:45
                  - generic [ref=f1e63]: •
                  - generic [ref=f1e64]:
                    - text: "Gia sư:"
                    - strong [ref=f1e65]: Trần Gia Bảo
                  - generic [ref=f1e66]: •
                  - generic [ref=f1e67]: Online
            - generic [ref=f1e71]:
              - button "Vào phòng học Online" [ref=f1e72] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e76] [cursor=pointer]
          - article [ref=f1e77]:
            - generic [ref=f1e78]:
              - generic [ref=f1e79]:
                - strong [ref=f1e80]: Thứ 7, 06/06
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
                - strong [ref=f1e105]: Thứ 7, 20/06
                - text: "2026"
              - generic [ref=f1e106]:
                - heading "IELTS" [level=3] [ref=f1e107]
                - generic [ref=f1e108]:
                  - generic [ref=f1e109]: 19:00 – 19:45
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
                - strong [ref=f1e130]: Thứ 6, 03/07
                - text: "2026"
              - generic [ref=f1e131]:
                - heading "Tiếng Anh" [level=3] [ref=f1e132]
                - generic [ref=f1e133]:
                  - generic [ref=f1e134]: 18:00 – 18:45
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
                - strong [ref=f1e155]: Thứ 6, 17/07
                - text: "2026"
              - generic [ref=f1e156]:
                - heading "IELTS" [level=3] [ref=f1e157]
                - generic [ref=f1e158]:
                  - generic [ref=f1e159]: 19:00 – 19:45
                  - generic [ref=f1e163]: •
                  - generic [ref=f1e164]:
                    - text: "Gia sư:"
                    - strong [ref=f1e165]: Trần Gia Bảo
                  - generic [ref=f1e166]: •
                  - generic [ref=f1e167]: Thủ Đức
            - generic [ref=f1e171]:
              - button "Vào phòng học Online" [ref=f1e172] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e176] [cursor=pointer]
          - article [ref=f1e177]:
            - generic [ref=f1e178]:
              - generic [ref=f1e179]:
                - strong [ref=f1e180]: Thứ 6, 07/08
                - text: "2026"
              - generic [ref=f1e181]:
                - heading "Tiếng Anh" [level=3] [ref=f1e182]
                - generic [ref=f1e183]:
                  - generic [ref=f1e184]: 18:00 – 18:45
                  - generic [ref=f1e188]: •
                  - generic [ref=f1e189]:
                    - text: "Gia sư:"
                    - strong [ref=f1e190]: Trần Gia Bảo
                  - generic [ref=f1e191]: •
                  - generic [ref=f1e192]: Online
            - generic [ref=f1e196]:
              - button "Vào phòng học Online" [ref=f1e197] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e201] [cursor=pointer]
          - article [ref=f1e202]:
            - generic [ref=f1e203]:
              - generic [ref=f1e204]:
                - strong [ref=f1e205]: Thứ 7, 15/08
                - text: "2026"
              - generic [ref=f1e206]:
                - heading "IELTS" [level=3] [ref=f1e207]
                - generic [ref=f1e208]:
                  - generic [ref=f1e209]: 19:00 – 19:45
                  - generic [ref=f1e213]: •
                  - generic [ref=f1e214]:
                    - text: "Gia sư:"
                    - strong [ref=f1e215]: Trần Gia Bảo
                  - generic [ref=f1e216]: •
                  - generic [ref=f1e217]: Online
            - generic [ref=f1e221]:
              - button "Vào phòng học Online" [ref=f1e222] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e226] [cursor=pointer]
          - article [ref=f1e227]:
            - generic [ref=f1e228]:
              - generic [ref=f1e229]:
                - strong [ref=f1e230]: Thứ 6, 28/08
                - text: "2026"
              - generic [ref=f1e231]:
                - heading "Tiếng Anh" [level=3] [ref=f1e232]
                - generic [ref=f1e233]:
                  - generic [ref=f1e234]: 09:00 – 09:45
                  - generic [ref=f1e238]: •
                  - generic [ref=f1e239]:
                    - text: "Gia sư:"
                    - strong [ref=f1e240]: Trần Gia Bảo
                  - generic [ref=f1e241]: •
                  - generic [ref=f1e242]: Thủ Đức
            - generic [ref=f1e246]:
              - button "Vào phòng học Online" [ref=f1e247] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e251] [cursor=pointer]
          - article [ref=f1e252]:
            - generic [ref=f1e253]:
              - generic [ref=f1e254]:
                - strong [ref=f1e255]: Thứ 7, 05/09
                - text: "2026"
              - generic [ref=f1e256]:
                - heading "IELTS" [level=3] [ref=f1e257]
                - generic [ref=f1e258]:
                  - generic [ref=f1e259]: 19:00 – 19:45
                  - generic [ref=f1e263]: •
                  - generic [ref=f1e264]:
                    - text: "Gia sư:"
                    - strong [ref=f1e265]: Trần Gia Bảo
                  - generic [ref=f1e266]: •
                  - generic [ref=f1e267]: Online
            - generic [ref=f1e271]:
              - button "Vào phòng học Online" [ref=f1e272] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e276] [cursor=pointer]
          - article [ref=f1e277]:
            - generic [ref=f1e278]:
              - generic [ref=f1e279]:
                - strong [ref=f1e280]: Thứ 7, 12/09
                - text: "2026"
              - generic [ref=f1e281]:
                - heading "Tiếng Anh" [level=3] [ref=f1e282]
                - generic [ref=f1e283]:
                  - generic [ref=f1e284]: 18:00 – 18:45
                  - generic [ref=f1e288]: •
                  - generic [ref=f1e289]:
                    - text: "Gia sư:"
                    - strong [ref=f1e290]: Trần Gia Bảo
                  - generic [ref=f1e291]: •
                  - generic [ref=f1e292]: Online
            - generic [ref=f1e296]:
              - button "Vào phòng học Online" [ref=f1e297] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e301] [cursor=pointer]
          - article [ref=f1e302]:
            - generic [ref=f1e303]:
              - generic [ref=f1e304]:
                - strong [ref=f1e305]: CN, 20/09
                - text: "2026"
              - generic [ref=f1e306]:
                - heading "Tiếng Anh" [level=3] [ref=f1e307]
                - generic [ref=f1e308]:
                  - generic [ref=f1e309]: 18:00 – 18:45
                  - generic [ref=f1e313]: •
                  - generic [ref=f1e314]:
                    - text: "Gia sư:"
                    - strong [ref=f1e315]: Trần Gia Bảo
                  - generic [ref=f1e316]: •
                  - generic [ref=f1e317]: Online
            - generic [ref=f1e321]:
              - button "Vào phòng học Online" [ref=f1e322] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e326] [cursor=pointer]
          - article [ref=f1e327]:
            - generic [ref=f1e328]:
              - generic [ref=f1e329]:
                - strong [ref=f1e330]: CN, 27/09
                - text: "2026"
              - generic [ref=f1e331]:
                - heading "IELTS" [level=3] [ref=f1e332]
                - generic [ref=f1e333]:
                  - generic [ref=f1e334]: 19:00 – 19:45
                  - generic [ref=f1e338]: •
                  - generic [ref=f1e339]:
                    - text: "Gia sư:"
                    - strong [ref=f1e340]: Trần Gia Bảo
                  - generic [ref=f1e341]: •
                  - generic [ref=f1e342]: Online
            - generic [ref=f1e346]:
              - button "Vào phòng học Online" [ref=f1e347] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e351] [cursor=pointer]
          - article [ref=f1e352]:
            - generic [ref=f1e353]:
              - generic [ref=f1e354]:
                - strong [ref=f1e355]: Thứ 5, 01/10
                - text: "2026"
              - generic [ref=f1e356]:
                - heading "Tiếng Anh" [level=3] [ref=f1e357]
                - generic [ref=f1e358]:
                  - generic [ref=f1e359]: 18:00 – 18:45
                  - generic [ref=f1e363]: •
                  - generic [ref=f1e364]:
                    - text: "Gia sư:"
                    - strong [ref=f1e365]: Trần Gia Bảo
                  - generic [ref=f1e366]: •
                  - generic [ref=f1e367]: Online
            - generic [ref=f1e371]:
              - button "Vào phòng học Online" [ref=f1e372] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e376] [cursor=pointer]
          - article [ref=f1e377]:
            - generic [ref=f1e378]:
              - generic [ref=f1e379]:
                - strong [ref=f1e380]: Thứ 6, 02/10
                - text: "2026"
              - generic [ref=f1e381]:
                - heading "IELTS" [level=3] [ref=f1e382]
                - generic [ref=f1e383]:
                  - generic [ref=f1e384]: 19:00 – 19:45
                  - generic [ref=f1e388]: •
                  - generic [ref=f1e389]:
                    - text: "Gia sư:"
                    - strong [ref=f1e390]: Trần Gia Bảo
                  - generic [ref=f1e391]: •
                  - generic [ref=f1e392]: Online
            - generic [ref=f1e396]:
              - button "Vào phòng học Online" [ref=f1e397] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e401] [cursor=pointer]
          - article [ref=f1e402]:
            - generic [ref=f1e403]:
              - generic [ref=f1e404]:
                - strong [ref=f1e405]: Thứ 7, 03/10
                - text: "2026"
              - generic [ref=f1e406]:
                - heading "Tiếng Anh" [level=3] [ref=f1e407]
                - generic [ref=f1e408]:
                  - generic [ref=f1e409]: 09:00 – 09:45
                  - generic [ref=f1e413]: •
                  - generic [ref=f1e414]:
                    - text: "Gia sư:"
                    - strong [ref=f1e415]: Trần Gia Bảo
                  - generic [ref=f1e416]: •
                  - generic [ref=f1e417]: Online
            - generic [ref=f1e421]:
              - button "Vào phòng học Online" [ref=f1e422] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=f1e426] [cursor=pointer]
  - complementary "Widget nhắn tin nhanh" [ref=f1e427]:
    - button "Mở cửa sổ trò chuyện" [ref=f1e428] [cursor=pointer]:
      - generic [ref=f1e431]: "1"
```

# Test source

```ts
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
  67  |   await expect(page.locator('[data-testid="custom-offer-card"] [data-status="accepted"]')).toHaveCount(0);
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
  105 |   await page.getByRole('button',{name:/Đăng tin|Gửi tin/}).last().click();
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
  146 | test('UI-COMP-L14 completed lessons do not advertise an active online classroom', async ({page}) => {
  147 |   await setup(page);await page.goto('/learner/schedule');
  148 |   await page.getByRole('button',{name:'Đã hoàn thành',exact:true}).click();
> 149 |   await expect(page.getByRole('button',{name:'Vào phòng học Online',exact:true})).toHaveCount(0);
      |                                                                                   ^ Error: expect(locator).toHaveCount(expected) failed
  150 | });
  151 | 
```