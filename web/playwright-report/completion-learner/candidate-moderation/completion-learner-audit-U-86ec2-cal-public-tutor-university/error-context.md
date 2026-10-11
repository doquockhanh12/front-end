# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L08 proposal profile agrees with canonical public tutor university
- Location: tests\e2e\completion-learner-audit.spec.js:105:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.myclass-proposal-card').filter({ hasText: 'Trần Gia Bảo' })
Expected substring: "ĐH Ngoại thương"
Received string:    "GBTrần Gia Bảo✓ Tích xanhTop-RatedĐH Sư Phạm TP.HCM (Sư phạm Toán)⭐ 4.9·🕒 Đúng giờ: 99%Đề xuất học phí220.000 đ / buổiThực nhận: 198.000 đChọn gia sư này Nhắn tin"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('.myclass-proposal-card').filter({ hasText: 'Trần Gia Bảo' }) with timeout 5000ms
  - waiting for locator('.myclass-proposal-card').filter({ hasText: 'Trần Gia Bảo' })
    13 × locator resolved to <div class="myclass-proposal-card ">…</div>
       - unexpected value "GBTrần Gia Bảo✓ Tích xanhTop-RatedĐH Sư Phạm TP.HCM (Sư phạm Toán)⭐ 4.9·🕒 Đúng giờ: 99%Đề xuất học phí220.000 đ / buổiThực nhận: 198.000 đChọn gia sư này Nhắn tin"

```

```yaml
- img "Ảnh đại diện của Trần Gia Bảo"
- strong: Trần Gia Bảo
- text: "✓ Tích xanh Top-Rated ĐH Sư Phạm TP.HCM (Sư phạm Toán) ⭐ 4.9 · 🕒 Đúng giờ: 99% Đề xuất học phí"
- strong: 220.000 đ / buổi
- text: "Thực nhận: 198.000 đ"
- button "Chọn gia sư này"
- button "Nhắn tin"
```

# Test source

```ts
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
  74  |   await page.locator('.offer-session-picker input[type="checkbox"]').nth(0).check();
  75  |   await page.locator('.offer-session-picker input[type="checkbox"]').nth(1).check();
  76  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  77  |   await expect(page.locator('[data-testid="custom-offer-card"] [data-status="accepted"]')).toHaveCount(0);
  78  |   expect((await stateOf(page)).messages.find(m=>m.type==='custom_offer').offerData.status).toBe('pending');
  79  | });
  80  | 
  81  | test('UI-COMP-L06 paid offer produces linked shared lessons visible to Tutor', async ({page}) => {
  82  |   await setup(page); await page.goto('/messages');
  83  |   const before=await stateOf(page);const offer=before.messages.find(m=>m.type==='custom_offer');
  84  |   await page.locator('.offer-session-picker input[type="checkbox"]').nth(0).check();
  85  |   await page.locator('.offer-session-picker input[type="checkbox"]').nth(1).check();
  86  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  87  |   const after=await stateOf(page);
  88  |   const newEscrow=after.escrowTransactions.find(e=>!before.escrowTransactions.some(old=>old.id===e.id));
  89  |   expect(newEscrow,'Successful payment must create canonical escrow').toBeTruthy();
  90  |   await page.goto('/learner/dashboard');await logout(page);
  91  |   await login(page,'giabao','/tutor/timetable');
  92  |   const tutorState=await stateOf(page);
  93  |   expect(tutorState.lessons.filter(l=>l.escrowId===newEscrow.id||l.offerId===offer.id||l.messageId===offer.id)).toHaveLength(offer.offerData.sessionsCount);
  94  | });
  95  | 
  96  | test('UI-COMP-L07 lesson modal supports keyboard Escape and focus return', async ({page}) => {
  97  |   await setup(page);await page.goto('/learner/schedule');
  98  |   const trigger=page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first();
  99  |   await trigger.click();await expect(page.getByRole('dialog')).toBeVisible();
  100 |   await expect.poll(()=>page.getByRole('dialog').evaluate(el=>el.contains(document.activeElement))).toBe(true);
  101 |   await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
  102 |   await expect(trigger).toBeFocused();
  103 | });
  104 | 
  105 | test('UI-COMP-L08 proposal profile agrees with canonical public tutor university', async ({page}) => {
  106 |   await setup(page);await page.goto('/learner/my-classes');
  107 |   const profile=seed().profiles.find(p=>p.id==='quoc-bao');
  108 |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
> 109 |   await expect(candidate).toContainText(profile.university);
      |                           ^ Error: expect(locator).toContainText(expected) failed
  110 | });
  111 | 
  112 | test('UI-COMP-L09 newly submitted class awaits Admin moderation', async ({page}) => {
  113 |   await setup(page);await page.goto('/learner/post-class');
  114 |   await page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'}).click();
  115 |   await page.getByRole('button',{name:'Tiếp tục: Ngân sách & Mục tiêu'}).click();
  116 |   const before=await stateOf(page);
  117 |   await page.getByRole('button',{name:/Đăng tin|Gửi tin/}).last().click();
  118 |   await expect(page).toHaveURL(/\/learner\/my-classes$/);
  119 |   const created=(await stateOf(page)).classPosts.find(p=>!before.classPosts.some(old=>old.id===p.id));
  120 |   expect(created).toBeTruthy();expect(created.moderationStatus).toBe('pending');
  121 | });
  122 | 
  123 | test('UI-COMP-L10 selected candidate provides a deposit next step before claiming matched class', async ({page}) => {
  124 |   await setup(page);await page.goto('/learner/my-classes');
  125 |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  126 |   await candidate.getByRole('button',{name:'Chọn gia sư này'}).click();
  127 |   await expect(page.getByRole('button',{name:/Đặt cọc/}).or(page.getByRole('link',{name:/Đặt cọc/}))).toBeVisible();
  128 | });
  129 | 
  130 | test('UI-COMP-L11 mobile thread selection opens a readable conversation and composer', async ({page}) => {
  131 |   await page.setViewportSize({width:390,height:844});
  132 |   await setup(page);await page.goto('/messages');
  133 |   await page.locator('.chat-thread-item').first().click();
  134 |   await expect(page.getByRole('textbox',{name:'Nội dung tin nhắn'})).toBeVisible();
  135 | });
  136 | 
  137 | test('UI-COMP-L12 mobile post-class Next control stays entirely inside form', async ({page}) => {
  138 |   await page.setViewportSize({width:390,height:844});
  139 |   await setup(page);await page.goto('/learner/post-class');
  140 |   await page.evaluate(()=>document.fonts.ready);
  141 |   const next=page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'});
  142 |   const box=await next.boundingBox();
  143 |   expect(box.x+box.width,'Full label and arrow must not clip outside the viewport').toBeLessThanOrEqual(390);
  144 | });
  145 | 
  146 | test('UI-COMP-L13 background chat cannot overlap and intercept a lesson dialog', async ({page}) => {
  147 |   await page.setViewportSize({width:390,height:844});
  148 |   await setup(page);await page.goto('/learner/schedule');
  149 |   await page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first().click();
  150 |   await expect(page.getByRole('dialog')).toBeVisible();
  151 |   const intercepts=await page.getByRole('button',{name:'Mở cửa sổ trò chuyện'}).evaluate(button=>{
  152 |     const r=button.getBoundingClientRect();const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);
  153 |     return Boolean(hit&&button.contains(hit));
  154 |   });
  155 |   expect(intercepts,'Background widget must stay below modal overlay').toBe(false);
  156 | });
  157 | 
  158 | test('UI-COMP-L14 mobile split-map tutor profile CTA remains fully inside its card', async ({page}) => {
  159 |   await page.setViewportSize({width:390,height:844});
  160 |   await setup(page);await page.goto('/learner/search');
  161 |   await page.getByRole('button',{name:'Bản đồ chia đôi',exact:true}).click();
  162 |   await page.evaluate(()=>document.fonts.ready);
  163 |   const card=page.locator('#tutor-card-mai-anh');
  164 |   const cardBox=await card.boundingBox();const linkBox=await card.getByRole('link',{name:'Xem hồ sơ'}).boundingBox();
  165 |   expect(linkBox.x+linkBox.width,'Profile CTA must not clip inside narrow split-list').toBeLessThanOrEqual(cardBox.x+cardBox.width);
  166 | });
  167 | 
```