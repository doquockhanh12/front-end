# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L02 secondary learner cannot see another account class posts or conversations
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
  3   | import { resetDemo, login, fixedTime } from './demoHelpers.js';
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
  25  | test('UI-COMP-L02 secondary learner cannot see another account class posts or conversations', async ({page}) => {
  26  |   const state=seed(); const user=state.users.find(u=>u.id==='user-learner-active-2');
  27  |   await setup(page,state,user);
  28  |   await page.goto('/learner/my-classes');
> 29  |   await expect(page.getByText('MÃ LỚP: #post-101', {exact:true})).toHaveCount(0);
      |                                                                   ^ Error: expect(locator).toHaveCount(expected) failed
  30  |   await page.goto('/messages');
  31  |   await expect(page.locator('.chat-thread-item')).toHaveCount(0);
  32  | });
  33  | 
  34  | test('UI-COMP-L02 learner schedule only shows owned lesson IDs, not unowned history', async ({page}) => {
  35  |   await setup(page);
  36  |   await page.goto('/learner/schedule');
  37  |   const ownedCount=seed().lessons.filter(l=>l.learnerId==='demo-learner').length;
  38  |   await expect(page.locator('.lesson-card')).toHaveCount(ownedCount);
  39  | });
  40  | 
  41  | test('UI-COMP-L03 completed lesson cannot be cancelled by learner', async ({page}) => {
  42  |   await setup(page); await page.goto('/learner/schedule');
  43  |   await page.getByRole('button', {name:/Đã hoàn thành/}).click();
  44  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  45  |   await expect(page.getByRole('dialog')).toBeVisible();
  46  |   await expect(page.getByRole('button', {name:'Hủy buổi học này'})).toHaveCount(0);
  47  | });
  48  | 
  49  | test('UI-COMP-L04 refund without linked escrow never consumes unrelated class escrow', async ({page}) => {
  50  |   await setup(page); await page.goto('/learner/schedule');
  51  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  52  |   const before=await stateOf(page);
  53  |   await page.getByRole('button', {name:'Yêu cầu Hoàn tiền 100% vì Sự cố'}).click();
  54  |   const after=await stateOf(page);
  55  |   expect(after.escrowTransactions).toEqual(before.escrowTransactions);
  56  |   expect(after.wallets).toEqual(before.wallets);
  57  | });
  58  | 
  59  | test('UI-COMP-L05 insufficient balance cannot mark offer deposit successful', async ({page}) => {
  60  |   const state=seed();state.wallets['demo-learner'].availableBalance=0;
  61  |   await setup(page,state);await page.goto('/messages');
  62  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  63  |   await expect(page.getByText('Đã đồng ý & Đặt cọc thành công',{exact:true})).toHaveCount(0);
  64  |   expect((await stateOf(page)).messages.find(m=>m.type==='custom_offer').offerData.status).toBe('pending');
  65  | });
  66  | 
  67  | test('UI-COMP-L06 paid offer produces linked shared lessons visible to Tutor', async ({page}) => {
  68  |   await setup(page); await page.goto('/messages');
  69  |   const before=await stateOf(page);const offer=before.messages.find(m=>m.type==='custom_offer');
  70  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  71  |   const after=await stateOf(page);
  72  |   const newEscrow=after.escrowTransactions.find(e=>!before.escrowTransactions.some(old=>old.id===e.id));
  73  |   expect(newEscrow,'Successful payment must create canonical escrow').toBeTruthy();
  74  |   expect(after.lessons.filter(l=>l.escrowId===newEscrow.id||l.offerId===offer.id||l.messageId===offer.id)).toHaveLength(offer.offerData.sessionsCount);
  75  | });
  76  | 
  77  | test('UI-COMP-L07 lesson modal supports keyboard Escape and focus return', async ({page}) => {
  78  |   await setup(page);await page.goto('/learner/schedule');
  79  |   const trigger=page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first();
  80  |   await trigger.click();await expect(page.getByRole('dialog')).toBeVisible();
  81  |   await expect.poll(()=>page.getByRole('dialog').evaluate(el=>el.contains(document.activeElement))).toBe(true);
  82  |   await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
  83  |   await expect(trigger).toBeFocused();
  84  | });
  85  | 
  86  | test('UI-COMP-L08 proposal profile agrees with canonical public tutor university', async ({page}) => {
  87  |   await setup(page);await page.goto('/learner/my-classes');
  88  |   const profile=seed().profiles.find(p=>p.id==='quoc-bao');
  89  |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  90  |   await expect(candidate).toContainText(profile.university);
  91  | });
  92  | 
  93  | test('UI-COMP-L09 newly submitted class awaits Admin moderation', async ({page}) => {
  94  |   await setup(page);await page.goto('/learner/post-class');
  95  |   await page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'}).click();
  96  |   await page.getByRole('button',{name:'Tiếp tục: Ngân sách & Mục tiêu'}).click();
  97  |   const before=await stateOf(page);
  98  |   await page.getByRole('button',{name:/Đăng tin|Gửi tin/}).last().click();
  99  |   await expect(page).toHaveURL(/\/learner\/my-classes$/);
  100 |   const created=(await stateOf(page)).classPosts.find(p=>!before.classPosts.some(old=>old.id===p.id));
  101 |   expect(created).toBeTruthy();expect(created.moderationStatus).toBe('pending');
  102 | });
  103 | 
  104 | test('UI-COMP-L10 selected candidate provides a deposit next step before claiming matched class', async ({page}) => {
  105 |   await setup(page);await page.goto('/learner/my-classes');
  106 |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  107 |   await candidate.getByRole('button',{name:'Chọn gia sư này'}).click();
  108 |   await expect(page.getByRole('button',{name:/Đặt cọc/}).or(page.getByRole('link',{name:/Đặt cọc/}))).toBeVisible();
  109 | });
  110 | 
  111 | test('UI-COMP-L11 mobile thread selection opens a readable conversation and composer', async ({page}) => {
  112 |   await page.setViewportSize({width:390,height:844});
  113 |   await setup(page);await page.goto('/messages');
  114 |   await page.locator('.chat-thread-item').first().click();
  115 |   await expect(page.getByRole('textbox',{name:'Nội dung tin nhắn'})).toBeVisible();
  116 | });
  117 | 
  118 | test('UI-COMP-L12 mobile post-class Next control stays entirely inside form', async ({page}) => {
  119 |   await page.setViewportSize({width:390,height:844});
  120 |   await setup(page);await page.goto('/learner/post-class');
  121 |   await page.evaluate(()=>document.fonts.ready);
  122 |   const next=page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'});
  123 |   const box=await next.boundingBox();
  124 |   expect(box.x+box.width,'Full label and arrow must not clip outside the viewport').toBeLessThanOrEqual(390);
  125 | });
  126 | 
```