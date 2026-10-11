# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L02 secondary learner cannot see another account conversation
- Location: tests\e2e\completion-learner-audit.spec.js:32:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.chat-thread-item')
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.chat-thread-item') with timeout 5000ms
  - waiting for locator('.chat-thread-item')
    13 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - banner [ref=f1e4]:
    - link "TutorNearMe · Trò chuyện" [ref=f1e5] [cursor=pointer]:
      - /url: /
    - generic [ref=f1e10]:
      - link "Quay lại bảng điều khiển" [ref=f1e11] [cursor=pointer]:
        - /url: /learner/dashboard
      - img "Ảnh đại diện của Lê Hoàng Nam" [ref=f1e14]:
        - generic [aria-hidden] [ref=f1e15]: HN
  - generic [ref=f1e16]:
    - complementary [ref=f1e17]:
      - generic [ref=f1e18]:
        - heading "Tin nhắn" [level=2] [ref=f1e20]
        - textbox "Tìm kiếm cuộc trò chuyện" [ref=f1e25]:
          - /placeholder: Tìm đoạn chat...
      - list [ref=f1e26]:
        - listitem [ref=f1e27]:
          - 'button "Ảnh đại diện của Trần Gia Bảo Trần Gia Bảo 15:10 Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần) 1" [ref=f1e28] [cursor=pointer]':
            - img "Ảnh đại diện của Trần Gia Bảo" [ref=f1e30]:
              - generic [aria-hidden] [ref=f1e31]: GB
            - generic [ref=f1e32]:
              - generic [ref=f1e33]:
                - generic [ref=f1e34]: Trần Gia Bảo
                - generic [ref=f1e35]: 15:10
              - generic [ref=f1e36]:
                - paragraph [ref=f1e37]: "Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần)"
                - generic [ref=f1e38]: "1"
    - main [ref=f1e39]:
      - generic [ref=f1e41]:
        - img "Ảnh đại diện của Trần Gia Bảo" [ref=f1e42]:
          - generic [aria-hidden] [ref=f1e43]: GB
        - generic [ref=f1e44]:
          - heading "Trần Gia Bảo" [level=3] [ref=f1e45]
          - paragraph [ref=f1e46]:
            - generic [ref=f1e48]: Gia sư · Trực tuyến
      - alert [ref=f1e49]:
        - generic [aria-hidden] [ref=f1e50]: ⚠️
        - generic [ref=f1e51]:
          - strong [ref=f1e52]: "CẢNH BÁO:"
          - text: Mọi thỏa thuận chuyển khoản ngoài sàn sẽ
          - strong [ref=f1e53]: MẤT TOÀN BỘ BẢO HIỂM HOÀN TIỀN 100%
          - text: . TutorNearMe miễn trừ mọi trách nhiệm khi giao dịch ngoài hệ thống.
      - generic [ref=f1e54]:
        - generic [ref=f1e55]: Hôm nay
        - generic [ref=f1e58]:
          - generic [ref=f1e59]: Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không?
          - generic [ref=f1e60]: 14:45
        - generic [ref=f1e62]:
          - generic [ref=f1e63]: Dạ chào chị Minh Anh! Em hoàn toàn sắp xếp được lịch vào tối Thứ 3 và Thứ 5 ạ. Em sẽ mang theo giáo án chuyên biệt để test năng lực buổi đầu cho bé.
          - generic [ref=f1e64]: 15:00
        - generic [ref=f1e66]:
          - generic [ref=f1e67]:
            - generic [ref=f1e68]:
              - generic [ref=f1e69]: Đề xuất học phí
              - heading "Toán lớp 8 · Lớp 8" [level=4] [ref=f1e72]
            - generic [ref=f1e73]: Chờ phản hồi
          - generic [ref=f1e77]:
            - generic [ref=f1e78]:
              - generic [ref=f1e79]:
                - generic [ref=f1e80]: Số buổi
                - generic [ref=f1e81]: 2 buổi
              - generic [ref=f1e82]:
                - generic [ref=f1e83]: Học phí / buổi
                - generic [ref=f1e84]: 220.000 đ
              - generic [ref=f1e85]:
                - generic [ref=f1e86]: Lịch học
                - text: Thứ 3 & Thứ 5 (18:30 - 20:00)
            - generic [ref=f1e87]:
              - generic [ref=f1e88]: Tổng tiền cọc ký quỹ (Escrow)
              - generic [ref=f1e93]: 440.000 đ
              - paragraph [ref=f1e94]: Bảo vệ 100% hoàn tiền bởi TutorNearMe Escrow Shield. Tiền chỉ giải ngân sau khi buổi học hoàn thành.
            - generic [ref=f1e95]:
              - button "Đồng ý & Đặt cọc ngay" [ref=f1e96] [cursor=pointer]
              - button "Từ chối" [ref=f1e100] [cursor=pointer]
      - generic [ref=f1e106]:
        - textbox "Nội dung tin nhắn" [ref=f1e107]:
          - /placeholder: Nhập tin nhắn...
        - button "Gửi" [disabled] [ref=f1e108]
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
> 35  |   await expect(page.locator('.chat-thread-item')).toHaveCount(0);
      |                                                   ^ Error: expect(locator).toHaveCount(expected) failed
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
```