# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L12 mobile post-class Next control stays entirely inside form
- Location: tests\e2e\completion-learner-audit.spec.js:122:1

# Error details

```
Error: Full label and arrow must not clip outside the viewport

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 390
Received:    412.546875
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
          - generic [ref=f1e17]: "1"
          - generic [ref=f1e18]:
            - generic [ref=f1e19]: Bước 1
            - text: Môn & Khối lớp
        - generic [ref=f1e20]:
          - generic [ref=f1e21]: "2"
          - generic [ref=f1e22]:
            - generic [ref=f1e23]: Bước 2
            - text: Địa điểm & Lịch học
        - generic [ref=f1e24]:
          - generic [ref=f1e25]: "3"
          - generic [ref=f1e26]:
            - generic [ref=f1e27]: Bước 3
            - text: Ngân sách & Mục tiêu
      - generic [ref=f1e29]:
        - 'heading "Bước 1: Môn học và Khối lớp" [level=2] [ref=f1e30]'
        - paragraph [ref=f1e31]: Chọn môn học và cấp độ học viên để kết nối nhanh chóng với các gia sư có chuyên môn phù hợp.
        - generic [ref=f1e32]:
          - generic [ref=f1e33]:
            - generic [ref=f1e34]: Môn học cần tìm gia sư *
            - textbox "Môn học cần tìm gia sư *" [ref=f1e37]:
              - /placeholder: "VD: Toán, Tiếng Anh, Ngữ văn..."
              - text: Toán
            - generic [ref=f1e38]:
              - button "Toán" [ref=f1e39] [cursor=pointer]
              - button "Ngữ văn" [ref=f1e40] [cursor=pointer]
              - button "Tiếng Anh" [ref=f1e41] [cursor=pointer]
              - button "Vật lý" [ref=f1e42] [cursor=pointer]
              - button "Hóa học" [ref=f1e43] [cursor=pointer]
              - button "Sinh học" [ref=f1e44] [cursor=pointer]
              - button "Lịch sử" [ref=f1e45] [cursor=pointer]
              - button "Địa lý" [ref=f1e46] [cursor=pointer]
          - generic [ref=f1e47]:
            - generic [ref=f1e48]: Khối lớp học viên *
            - combobox "Khối lớp học viên *" [ref=f1e49] [cursor=pointer]:
              - option "Lớp 1"
              - option "Lớp 2"
              - option "Lớp 3"
              - option "Lớp 4"
              - option "Lớp 5"
              - option "Lớp 6"
              - option "Lớp 7"
              - option "Lớp 8" [selected]
              - option "Lớp 9"
              - option "Lớp 10"
              - option "Lớp 11"
              - option "Lớp 12"
              - option "Đại học"
              - option "Người đi làm"
        - generic [ref=f1e50]:
          - link "Hủy bỏ" [ref=f1e51] [cursor=pointer]:
            - /url: /learner/my-classes
          - 'button "Tiếp tục: Địa điểm & Lịch học" [ref=f1e52] [cursor=pointer]'
    - contentinfo [ref=f1e55]:
      - generic [ref=f1e56]:
        - generic [ref=f1e57]:
          - link "TN TutorNearMe Gia sư gần bạn" [ref=f1e58] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e59]: TN
            - generic [ref=f1e60]:
              - strong [ref=f1e61]: TutorNearMe
              - generic [ref=f1e62]: Gia sư gần bạn
          - paragraph [ref=f1e63]: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
        - generic [ref=f1e64]:
          - strong [ref=f1e65]: Người học
          - link "Dành cho người học" [ref=f1e66] [cursor=pointer]:
            - /url: /learner
          - link "Tìm gia sư" [ref=f1e67] [cursor=pointer]:
            - /url: /learner/search
          - link "Yêu cầu học" [ref=f1e68] [cursor=pointer]:
            - /url: /requests
        - generic [ref=f1e69]:
          - strong [ref=f1e70]: Gia sư
          - link "Trở thành gia sư" [ref=f1e71] [cursor=pointer]:
            - /url: /tutor
          - link "Không gian gia sư" [ref=f1e72] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Cơ hội dạy" [ref=f1e73] [cursor=pointer]:
            - /url: /tutor/requests
        - generic [ref=f1e74]:
          - strong [ref=f1e75]: Khám phá
          - link "Trang chủ" [ref=f1e76] [cursor=pointer]:
            - /url: /
          - link "Admin demo" [ref=f1e77] [cursor=pointer]:
            - /url: /admin/dashboard
      - generic [ref=f1e78]: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
  - complementary "Widget nhắn tin nhanh" [ref=f1e79]:
    - button "Mở cửa sổ trò chuyện" [ref=f1e80] [cursor=pointer]:
      - generic [ref=f1e83]: "1"
```

# Test source

```ts
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
> 128 |   await page.evaluate(()=>document.fonts.ready);
      |                                                                                     ^ Error: Full label and arrow must not clip outside the viewport
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