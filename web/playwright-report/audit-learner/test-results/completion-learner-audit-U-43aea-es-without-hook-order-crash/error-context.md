# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L01 floating chat opens Messages without hook-order crash
- Location: tests\e2e\completion-learner-audit.spec.js:15:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('textbox', { name: 'Nội dung tin nhắn' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('textbox', { name: 'Nội dung tin nhắn' }) with timeout 5000ms
  - waiting for getByRole('textbox', { name: 'Nội dung tin nhắn' })

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
> 21  |   await expect(page.getByRole('textbox', {name:'Nội dung tin nhắn'})).toBeVisible();
      |                                                                       ^ Error: expect(locator).toBeVisible() failed
  22  |   expect(errors).toEqual([]);
  23  | });
  24  | 
  25  | test('UI-COMP-L02 secondary learner cannot see another account class posts or conversations', async ({page}) => {
  26  |   const state=seed(); const user=state.users.find(u=>u.id==='user-learner-active-2');
  27  |   await setup(page,state,user);
  28  |   await page.goto('/learner/my-classes');
  29  |   await expect(page.getByText('MÃ LỚP: #post-101', {exact:true})).toHaveCount(0);
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
```