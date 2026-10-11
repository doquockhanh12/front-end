# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L02 secondary learner cannot see another account class posts
- Location: tests\e2e\completion-learner-audit.spec.js:25:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByText('MÃ LỚP: #post-101', { exact: true })
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByText('MÃ LỚP: #post-101', { exact: true }) with timeout 5000ms
  - waiting for getByText('MÃ LỚP: #post-101', { exact: true })
    10 × locator resolved to 1 element
       - unexpected value "1"

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
          - link "Ảnh đại diện của Lê Hoàng Nam hoangnam" [ref=f1e25] [cursor=pointer]:
            - /url: /learner/dashboard
            - img "Ảnh đại diện của Lê Hoàng Nam" [ref=f1e26]:
              - generic [aria-hidden] [ref=f1e27]: HN
            - generic [ref=f1e28]: hoangnam
          - button "Đăng xuất" [ref=f1e29] [cursor=pointer]
    - main [ref=f1e33]:
      - generic [ref=f1e34]:
        - generic [ref=f1e35]:
          - heading "Lớp học của tôi" [level=1] [ref=f1e36]
          - paragraph [ref=f1e37]: Theo dõi các tin tìm gia sư đã đăng, xem hồ sơ ứng tuyển và chọn gia sư phù hợp nhất.
        - link "Đăng tin tìm gia sư" [ref=f1e38] [cursor=pointer]:
          - /url: /learner/post-class
      - tablist [ref=f1e40]:
        - tab "Đang tìm gia sư (Mở) (1)" [selected] [ref=f1e41] [cursor=pointer]
        - tab "Đã chốt gia sư (0)" [ref=f1e42] [cursor=pointer]
        - tab "Đã đóng / Hết hạn (0)" [ref=f1e43] [cursor=pointer]
      - article [ref=f1e45]:
        - generic [ref=f1e46]:
          - generic [ref=f1e47]:
            - generic [ref=f1e48]:
              - generic [ref=f1e49]: "MÃ LỚP: #post-101"
              - generic [ref=f1e50]: Đang mở nhận hồ sơ
            - heading "Toán – Lớp 8" [level=2] [ref=f1e51]
          - generic [ref=f1e52]:
            - generic [ref=f1e53]: Ngân sách dự kiến
            - strong [ref=f1e54]: 220.000 đ / buổi (Cố định)
        - generic [ref=f1e55]:
          - generic [ref=f1e56]: Bình Thạnh, TP. Hồ Chí Minh (Tại nhà)
          - generic [ref=f1e60]: Thứ 3 và Thứ 5 (18:30 - 20:00)
          - generic [ref=f1e63]:
            - strong [ref=f1e69]: "2"
            - text: gia sư đã ứng tuyển
        - generic [ref=f1e70]:
          - generic [ref=f1e71]: 🎯 Yêu cầu học thử 30-45 phút
          - paragraph [ref=f1e72]:
            - strong [ref=f1e73]: "Mục tiêu:"
            - text: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
        - generic [ref=f1e74]:
          - generic [ref=f1e75]:
            - generic [ref=f1e76]: Danh sách ứng viên (2)
            - button "So sánh các ứng viên (2)" [ref=f1e77] [cursor=pointer]
          - generic [ref=f1e82]:
            - generic [ref=f1e83]:
              - generic [ref=f1e84]:
                - img "Ảnh đại diện của Trần Gia Bảo" [ref=f1e85]:
                  - generic [aria-hidden] [ref=f1e86]: GB
                - generic [ref=f1e87]:
                  - generic [ref=f1e88]:
                    - strong [ref=f1e89]: Trần Gia Bảo
                    - generic "Tích xanh xác minh thẻ sinh viên" [ref=f1e90]: ✓ Tích xanh
                    - generic [ref=f1e91]: Top-Rated
                  - generic [ref=f1e92]: ĐH Sư Phạm TP.HCM (Sư phạm Toán)
                  - generic [ref=f1e93]:
                    - generic [ref=f1e94]: ⭐ 4.9
                    - generic [ref=f1e95]: ·
                    - generic [ref=f1e96]: "🕒 Đúng giờ: 99%"
              - generic [ref=f1e97]:
                - generic [ref=f1e98]: Đề xuất học phí
                - strong [ref=f1e99]: 220.000 đ / buổi
                - generic [ref=f1e100]: "Thực nhận: 198.000 đ"
              - generic [ref=f1e101]:
                - button "Chọn gia sư này" [ref=f1e102] [cursor=pointer]
                - link "Nhắn tin" [ref=f1e103] [cursor=pointer]:
                  - /url: /messages
            - generic [ref=f1e106]:
              - generic [ref=f1e107]:
                - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=f1e108]:
                  - generic [aria-hidden] [ref=f1e109]: MA
                - generic [ref=f1e110]:
                  - generic [ref=f1e111]:
                    - strong [ref=f1e112]: Nguyễn Mai Anh
                    - generic "Tích xanh xác minh thẻ sinh viên" [ref=f1e113]: ✓ Tích xanh
                  - generic [ref=f1e114]: ĐH Bách Khoa TP.HCM (Khoa học Máy tính)
                  - generic [ref=f1e115]:
                    - generic [ref=f1e116]: ⭐ 4.8
                    - generic [ref=f1e117]: ·
                    - generic [ref=f1e118]: "🕒 Đúng giờ: 97%"
              - generic [ref=f1e119]:
                - generic [ref=f1e120]: Đề xuất học phí
                - strong [ref=f1e121]: 240.000 đ / buổi
                - generic [ref=f1e122]: "Thực nhận: 216.000 đ"
              - generic [ref=f1e123]:
                - button "Chọn gia sư này" [ref=f1e124] [cursor=pointer]
                - link "Nhắn tin" [ref=f1e125] [cursor=pointer]:
                  - /url: /messages
    - contentinfo [ref=f1e128]:
      - generic [ref=f1e129]:
        - generic [ref=f1e130]:
          - link "TN TutorNearMe Gia sư gần bạn" [ref=f1e131] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e132]: TN
            - generic [ref=f1e133]:
              - strong [ref=f1e134]: TutorNearMe
              - generic [ref=f1e135]: Gia sư gần bạn
          - paragraph [ref=f1e136]: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
        - generic [ref=f1e137]:
          - strong [ref=f1e138]: Người học
          - link "Dành cho người học" [ref=f1e139] [cursor=pointer]:
            - /url: /learner
          - link "Tìm gia sư" [ref=f1e140] [cursor=pointer]:
            - /url: /learner/search
          - link "Yêu cầu học" [ref=f1e141] [cursor=pointer]:
            - /url: /requests
        - generic [ref=f1e142]:
          - strong [ref=f1e143]: Gia sư
          - link "Trở thành gia sư" [ref=f1e144] [cursor=pointer]:
            - /url: /tutor
          - link "Không gian gia sư" [ref=f1e145] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Cơ hội dạy" [ref=f1e146] [cursor=pointer]:
            - /url: /tutor/requests
        - generic [ref=f1e147]:
          - strong [ref=f1e148]: Khám phá
          - link "Trang chủ" [ref=f1e149] [cursor=pointer]:
            - /url: /
          - link "Admin demo" [ref=f1e150] [cursor=pointer]:
            - /url: /admin/dashboard
      - generic [ref=f1e151]: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
  - complementary "Widget nhắn tin nhanh" [ref=f1e152]:
    - button "Mở cửa sổ trò chuyện" [ref=f1e153] [cursor=pointer]:
      - generic [ref=f1e156]: "1"
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
> 29  |   await expect(page.getByText('MÃ LỚP: #post-101', {exact:true})).toHaveCount(0);
      |                                                                   ^ Error: expect(locator).toHaveCount(expected) failed
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
```