# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L10 selected candidate provides a deposit next step before claiming matched class
- Location: tests\e2e\completion-learner-audit.spec.js:108:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /Đặt cọc/ }).or(getByRole('link', { name: /Đặt cọc/ }))
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('button', { name: /Đặt cọc/ }).or(getByRole('link', { name: /Đặt cọc/ })) with timeout 5000ms
  - waiting for getByRole('button', { name: /Đặt cọc/ }).or(getByRole('link', { name: /Đặt cọc/ }))

```

```yaml
- banner:
  - link "TutorNearMe — trang chủ":
    - /url: /
    - text: TN
    - strong: TutorNearMe
    - text: Gia sư gần bạn
  - navigation "Điều hướng chính":
    - link "Tìm gia sư":
      - /url: /learner/search
    - link "Đăng tin lớp":
      - /url: /learner/post-class
    - link "Lớp của tôi":
      - /url: /learner/my-classes
    - link "Lịch học":
      - /url: /learner/schedule
    - link "Ví của tôi":
      - /url: /learner/wallet
    - link "Trợ giúp":
      - /url: /help
  - button "Thông báo": "1"
  - link "Ảnh đại diện của Nguyễn Minh Anh minhanh":
    - /url: /learner/dashboard
    - img "Ảnh đại diện của Nguyễn Minh Anh"
    - text: minhanh
  - button "Đăng xuất"
- main:
  - heading "Lớp học của tôi" [level=1]
  - paragraph: Theo dõi các tin tìm gia sư đã đăng, xem hồ sơ ứng tuyển và chọn gia sư phù hợp nhất.
  - link "Đăng tin tìm gia sư":
    - /url: /learner/post-class
  - tablist:
    - tab "Đang tìm gia sư (Mở) (0)"
    - tab "Đã chốt gia sư (1)" [selected]
    - tab "Đã đóng / Hết hạn (0)"
  - article:
    - text: "MÃ LỚP: #post-101 Đã chốt gia sư"
    - heading "Toán – Lớp 8" [level=2]
    - text: Ngân sách dự kiến
    - strong: 220.000 đ / buổi (Cố định)
    - text: Bình Thạnh, TP. Hồ Chí Minh (Tại nhà) Thứ 3 và Thứ 5 (18:30 - 20:00)
    - strong: "2"
    - text: gia sư đã ứng tuyển 🎯 Yêu cầu học thử 30-45 phút
    - paragraph:
      - strong: "Mục tiêu:"
      - text: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
    - text: Danh sách ứng viên (2)
    - button "So sánh các ứng viên (2)"
    - img "Ảnh đại diện của Trần Gia Bảo"
    - strong: Trần Gia Bảo
    - text: "✓ Tích xanh Top-Rated ĐH Sư Phạm TP.HCM (Sư phạm Toán) ⭐ 4.9 · 🕒 Đúng giờ: 99% Đề xuất học phí"
    - strong: 220.000 đ / buổi
    - text: "Thực nhận: 198.000 đ Đã chọn gia sư này"
    - link "Nhắn tin":
      - /url: /messages
    - img "Ảnh đại diện của Nguyễn Mai Anh"
    - strong: Nguyễn Mai Anh
    - text: "✓ Tích xanh ĐH Bách Khoa TP.HCM (Khoa học Máy tính) ⭐ 4.8 · 🕒 Đúng giờ: 97% Đề xuất học phí"
    - strong: 240.000 đ / buổi
    - text: "Thực nhận: 216.000 đ Không chọn"
    - link "Nhắn tin":
      - /url: /messages
- contentinfo:
  - link "TN TutorNearMe Gia sư gần bạn":
    - /url: /
    - text: TN
    - strong: TutorNearMe
    - text: Gia sư gần bạn
  - paragraph: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
  - strong: Người học
  - link "Dành cho người học":
    - /url: /learner
  - link "Tìm gia sư":
    - /url: /learner/search
  - link "Yêu cầu học":
    - /url: /requests
  - strong: Gia sư
  - link "Trở thành gia sư":
    - /url: /tutor
  - link "Không gian gia sư":
    - /url: /tutor/dashboard
  - link "Cơ hội dạy":
    - /url: /tutor/requests
  - strong: Khám phá
  - link "Trang chủ":
    - /url: /
  - link "Admin demo":
    - /url: /admin/dashboard
  - text: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện": "1"
```

# Test source

```ts
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
  105 |   await page.getByRole('button',{name:/Đăng tin|Gửi tin/}).last().click();
  106 |   await expect(page).toHaveURL(/\/learner\/my-classes$/);
  107 |   const created=(await stateOf(page)).classPosts.find(p=>!before.classPosts.some(old=>old.id===p.id));
  108 |   expect(created).toBeTruthy();expect(created.moderationStatus).toBe('pending');
  109 | });
  110 | 
  111 | test('UI-COMP-L10 selected candidate provides a deposit next step before claiming matched class', async ({page}) => {
> 112 |   await setup(page);await page.goto('/learner/my-classes');
      |                                                                                                       ^ Error: expect(locator).toBeVisible() failed
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