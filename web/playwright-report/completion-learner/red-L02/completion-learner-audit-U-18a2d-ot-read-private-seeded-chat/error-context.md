# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L02 unauthenticated visitor cannot read private seeded chat
- Location: tests\e2e\completion-learner-audit.spec.js:38:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByText('Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không?', { exact: true })
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByText('Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không?', { exact: true }) with timeout 5000ms
  - waiting for getByText('Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không?', { exact: true })
    13 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e5]:
        - link "TutorNearMe — trang chủ" [ref=e6] [cursor=pointer]:
          - /url: /
          - generic [ref=e7]: TN
          - generic [ref=e8]:
            - strong [ref=e9]: TutorNearMe
            - generic [ref=e10]: Gia sư gần bạn
        - navigation "Điều hướng chính" [ref=e11]:
          - link "Tìm gia sư" [ref=e12] [cursor=pointer]:
            - /url: /#finder
          - link "Nhu cầu học" [ref=e13] [cursor=pointer]:
            - /url: /#needs
          - link "Gia sư nổi bật" [ref=e14] [cursor=pointer]:
            - /url: /#tutors
          - link "Ưu đãi" [ref=e15] [cursor=pointer]:
            - /url: /#offers
          - link "Góc học tập" [ref=e16] [cursor=pointer]:
            - /url: /#stories
        - generic [ref=e17]:
          - link "Trở thành gia sư" [ref=e18] [cursor=pointer]:
            - /url: /tutor/register
          - link "Đăng nhập" [ref=e19] [cursor=pointer]:
            - /url: /login
          - link "Đăng ký" [ref=e20] [cursor=pointer]:
            - /url: /register
    - main [ref=e21]:
      - generic [ref=e22]:
        - generic [ref=e23]:
          - generic [ref=e24]: TUTORNEARME · MỘT TÀI KHOẢN
          - heading [level=1] [ref=e28]:
            - text: Chào mừng bạn trở lại
            - emphasis [ref=e29]: TutorNearMe.
          - paragraph [ref=e30]: Không cần chọn vai trò. Tài khoản demo sẽ đưa bạn tới đúng không gian phù hợp.
          - generic [ref=e31]:
            - paragraph [ref=e37]:
              - strong [ref=e38]: Một cửa đăng nhập
              - generic [ref=e39]: Username, email hoặc số điện thoại đều dùng chung.
            - generic [ref=e40]:
              - generic [ref=e41]: →
              - paragraph [ref=e42]:
                - strong [ref=e43]: Tự chuyển đúng không gian
                - generic [ref=e44]: Người học, gia sư và admin vào đúng khu vực.
        - region [ref=e45]:
          - generic [ref=e46]:
            - text: ĐĂNG NHẬP TUTORNEARME
            - heading "Đăng nhập tài khoản" [level=2] [ref=e47]
            - paragraph [ref=e48]: Dùng tài khoản đã đăng ký để tiếp tục.
          - generic [ref=e49]:
            - generic [ref=e50]:
              - generic [ref=e51]: Username / Email / Số điện thoại *
              - textbox "Username / Email / Số điện thoại *" [ref=e52]:
                - /placeholder: Nhập thông tin tài khoản
            - generic [ref=e53]:
              - generic [ref=e54]: Mật khẩu *
              - generic [ref=e55]:
                - textbox "Mật khẩu * Hiện mật khẩu" [ref=e56]:
                  - /placeholder: Nhập mật khẩu
                - button "Hiện mật khẩu" [ref=e57] [cursor=pointer]
            - generic [ref=e61]:
              - generic [ref=e62]:
                - checkbox "Ghi nhớ đăng nhập trên thiết bị này" [checked] [ref=e63]
                - text: Ghi nhớ đăng nhập trên thiết bị này
              - button "Quên mật khẩu?" [ref=e64] [cursor=pointer]
            - button "Đăng nhập" [ref=e65] [cursor=pointer]
            - paragraph [ref=e66]:
              - text: Tài khoản bị khóa hoặc cần giải trình?
              - link "Gửi kháng cáo" [ref=e67] [cursor=pointer]:
                - /url: /appeals
            - generic [ref=e68]: Hoặc tiếp tục với
            - generic "Phương thức đăng ký nhanh" [ref=e70]:
              - button "Tiếp tục với Google" [ref=e71] [cursor=pointer]
              - button "Tiếp tục với Facebook" [ref=e76] [cursor=pointer]
              - button "Tiếp tục với số điện thoại" [ref=e82] [cursor=pointer]
            - paragraph [ref=e86]:
              - text: Chưa có tài khoản?
              - link "Đăng ký người học" [ref=e87] [cursor=pointer]:
                - /url: /register
              - text: ·
              - link "Đăng ký gia sư" [ref=e88] [cursor=pointer]:
                - /url: /tutor/register
            - paragraph [ref=e89]: "Demo: minhanh, giabao hoặc admin / demo1234"
    - contentinfo [ref=e90]:
      - generic [ref=e91]:
        - generic [ref=e92]:
          - link "TN TutorNearMe Gia sư gần bạn" [ref=e93] [cursor=pointer]:
            - /url: /
            - generic [ref=e94]: TN
            - generic [ref=e95]:
              - strong [ref=e96]: TutorNearMe
              - generic [ref=e97]: Gia sư gần bạn
          - paragraph [ref=e98]: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
        - generic [ref=e99]:
          - strong [ref=e100]: Người học
          - link "Dành cho người học" [ref=e101] [cursor=pointer]:
            - /url: /learner
          - link "Tìm gia sư" [ref=e102] [cursor=pointer]:
            - /url: /learner/search
          - link "Yêu cầu học" [ref=e103] [cursor=pointer]:
            - /url: /requests
        - generic [ref=e104]:
          - strong [ref=e105]: Gia sư
          - link "Trở thành gia sư" [ref=e106] [cursor=pointer]:
            - /url: /tutor
          - link "Không gian gia sư" [ref=e107] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Cơ hội dạy" [ref=e108] [cursor=pointer]:
            - /url: /tutor/requests
        - generic [ref=e109]:
          - strong [ref=e110]: Khám phá
          - link "Trang chủ" [ref=e111] [cursor=pointer]:
            - /url: /
          - link "Admin demo" [ref=e112] [cursor=pointer]:
            - /url: /admin/dashboard
      - generic [ref=e113]: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
  - complementary "Widget nhắn tin nhanh" [ref=e114]:
    - dialog "Hộp thoại nhắn tin" [ref=e115]:
      - generic [ref=e116]:
        - generic [ref=e117]:
          - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=e118]:
            - generic [aria-hidden] [ref=e119]: MA
          - generic [ref=e120]:
            - heading "Nguyễn Minh Anh" [level=4] [ref=e121]
            - paragraph [ref=e122]: Trực tuyến · Ký quỹ an toàn
        - generic [ref=e123]:
          - button "Mở toàn màn hình" [ref=e124] [cursor=pointer]
          - button "Thu nhỏ" [ref=e130] [cursor=pointer]
      - generic [ref=e132]: Thanh toán qua Escrow để nhận bảo hiểm hoàn tiền 100%.
      - generic [ref=e137]:
        - generic [ref=e139]:
          - generic [ref=e140]: Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không?
          - generic [ref=e141]: 14:45
        - generic [ref=e143]:
          - generic [ref=e144]: Dạ chào chị Minh Anh! Em hoàn toàn sắp xếp được lịch vào tối Thứ 3 và Thứ 5 ạ. Em sẽ mang theo giáo án chuyên biệt để test năng lực buổi đầu cho bé.
          - generic [ref=e145]: 15:00
        - generic [ref=e147]:
          - generic [ref=e148]:
            - generic [ref=e149]:
              - generic [ref=e150]: Đề xuất học phí
              - heading "Toán lớp 8 · Lớp 8" [level=4] [ref=e153]
            - generic [ref=e154]: Chờ phản hồi
          - generic [ref=e158]:
            - generic [ref=e159]:
              - generic [ref=e160]:
                - generic [ref=e161]: Số buổi
                - generic [ref=e162]: 2 buổi
              - generic [ref=e163]:
                - generic [ref=e164]: Học phí / buổi
                - generic [ref=e165]: 220.000 đ
              - generic [ref=e166]:
                - generic [ref=e167]: Lịch học
                - text: Thứ 3 & Thứ 5 (18:30 - 20:00)
            - generic [ref=e168]:
              - generic [ref=e169]: Tổng tiền cọc ký quỹ (Escrow)
              - generic [ref=e174]: 440.000 đ
              - paragraph [ref=e175]: Bảo vệ 100% hoàn tiền bởi TutorNearMe Escrow Shield. Tiền chỉ giải ngân sau khi buổi học hoàn thành.
            - generic [ref=e176]: Đang chờ học viên phản hồi và thanh toán ký quỹ.
      - generic [ref=e178]:
        - textbox "Tin nhắn nhanh" [ref=e179]:
          - /placeholder: Nhập tin nhắn...
        - button "Gửi tin nhắn" [disabled] [ref=e180]
    - button "Mở cửa sổ trò chuyện" [active] [ref=e184] [cursor=pointer]
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
> 43  |   await expect(page.getByText(privateText,{exact:true})).toHaveCount(0);
      |                                                          ^ Error: expect(locator).toHaveCount(expected) failed
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
  136 |   await page.evaluate(()=>document.fonts.ready);
  137 |   const next=page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'});
  138 |   const box=await next.boundingBox();
  139 |   expect(box.x+box.width,'Full label and arrow must not clip outside the viewport').toBeLessThanOrEqual(390);
  140 | });
  141 | 
  142 | test('UI-COMP-L13 background chat cannot overlap and intercept a lesson dialog', async ({page}) => {
  143 |   await page.setViewportSize({width:390,height:844});
```