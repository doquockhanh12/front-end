# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: floating-chat-layout.spec.js >> UI-COMP-S02 chat launcher leaves Tutor wallet explanation readable at 390x900
- Location: tests\e2e\floating-chat-layout.spec.js:55:3

# Error details

```
Error: Chat launcher must leave the entire fee explanation badge unobscured

Chat launcher must leave the entire fee explanation badge unobscured

expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - complementary "Điều hướng gia sư" [ref=e4]:
      - generic [ref=e5]:
        - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn." [ref=e6] [cursor=pointer]:
          - /url: /
          - strong [ref=e7]: TutorNearMe
          - generic [ref=e8]: Gia sư gần bạn. Tri thức gần hơn.
        - button "Đóng điều hướng" [ref=e9] [cursor=pointer]
      - navigation "Các mục của gia sư" [ref=e13]:
        - link "Tổng quan" [ref=e14] [cursor=pointer]:
          - /url: /tutor/dashboard
        - link "Yêu cầu học 6" [ref=e21] [cursor=pointer]:
          - /url: /tutor/requests
          - generic [ref=e25]: Yêu cầu học
          - generic [ref=e26]: "6"
        - link "Lịch dạy học" [ref=e27] [cursor=pointer]:
          - /url: /tutor/timetable
        - link "Tìm học viên mới" [ref=e31] [cursor=pointer]:
          - /url: /tutor/find-students
        - link "Ví & Thu nhập" [ref=e38] [cursor=pointer]:
          - /url: /tutor/wallet
        - link "Thu nhập" [ref=e43] [cursor=pointer]:
          - /url: /tutor/income
        - link "Hồ sơ gia sư" [ref=e48] [cursor=pointer]:
          - /url: /tutor/profile
        - link "Tin nhắn" [ref=e53] [cursor=pointer]:
          - /url: /messages
        - link "Kháng cáo" [ref=e57] [cursor=pointer]:
          - /url: /appeals
        - link "Trung tâm Trợ giúp" [ref=e63] [cursor=pointer]:
          - /url: /help
    - generic [ref=e68]:
      - banner [ref=e69]:
        - button "Mở điều hướng" [ref=e70] [cursor=pointer]
        - navigation "Điều hướng nhanh" [ref=e72]:
          - link "Tìm lớp gần tôi" [ref=e73] [cursor=pointer]:
            - /url: /tutor/map
          - link "Tổng Quan" [ref=e77] [cursor=pointer]:
            - /url: /tutor/dashboard
        - generic [ref=e83]:
          - button "Thông báo" [ref=e85] [cursor=pointer]:
            - generic [ref=e89]: "1"
          - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=e90] [cursor=pointer]:
            - /url: /tutor/profile
            - img "Ảnh đại diện của Trần Gia Bảo" [ref=e91]:
              - generic [aria-hidden] [ref=e92]: GB
            - generic [ref=e93]: giabao
          - button "Đăng xuất" [ref=e94] [cursor=pointer]
      - main [ref=e98]:
        - generic [ref=e100]:
          - text: KHÔNG GIAN GIA SƯ · DEMO
          - heading "Ví & Rút tiền" [level=1] [ref=e101]
          - paragraph [ref=e102]: "Quản lý thù lao giảng dạy, tiền bồi thường hủy lịch và yêu cầu rút tiền về ngân hàng. Phí sàn hiện tại của bạn: 10%."
        - generic [ref=e103]:
          - generic [ref=e104]:
            - generic [ref=e105]:
              - generic [ref=e106]:
                - generic [ref=e107]: Số dư khả dụng
                - generic [ref=e116]: 1.250.000 đ
                - paragraph [ref=e117]: Số dư thực nhận sẵn sàng để rút về tài khoản ngân hàng bất kỳ lúc nào.
              - button "Rút tiền về STK Ngân hàng" [ref=e119] [cursor=pointer]
            - generic [ref=e124]:
              - generic [ref=e125]: Tổng thu nhập tích lũy
              - generic [ref=e134]: 506.000 đ
              - generic [ref=e135]: Thù lao đã ghi nhận sau phí nền tảng TutorNearMe
              - paragraph [ref=e139]: Bao gồm thù lao các buổi dạy đã hoàn tất và tiền đền bù khi học viên hủy lịch. Với danh hiệu hiện tại, bạn thực nhận 90% sau phí sàn 10%; giao dịch cũ giữ mức phí đã ghi nhận.
          - generic [ref=e140]:
            - generic [ref=e141]:
              - heading "Sổ cái giao dịch thu nhập & rút tiền" [level=2] [ref=e142]
              - tablist [ref=e148]:
                - button "Tất cả (2)" [ref=e149] [cursor=pointer]
                - button "Thù lao dạy học" [ref=e150] [cursor=pointer]
                - button "Bồi thường hủy lịch" [ref=e151] [cursor=pointer]
                - button "Lệnh rút tiền" [ref=e152] [cursor=pointer]
            - table [ref=e154]:
              - rowgroup [ref=e155]:
                - row [ref=e156]:
                  - columnheader "Thời gian" [ref=e157]
                  - columnheader "Mã GD" [ref=e158]
                  - columnheader "Loại khoản tiền" [ref=e159]
                  - columnheader "Chi tiết diễn giải" [ref=e160]
                  - columnheader "Số tiền" [ref=e161]
                  - columnheader "Trạng thái" [ref=e162]
              - rowgroup [ref=e163]:
                - row [ref=e164]:
                  - cell "20:00 30/09/2026" [ref=e165]
                  - cell "tx-t-001" [ref=e166]
                  - cell "Thù lao buổi học" [ref=e167]
                  - cell "Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn)" [ref=e172]
                  - cell "+396.000 đ" [ref=e173]
                  - cell "Thành công" [ref=e174]
                - row [ref=e179]:
                  - cell "18:00 03/10/2026" [ref=e180]
                  - cell "tx-t-002" [ref=e181]
                  - cell "Bồi thường hủy lịch" [ref=e182]
                  - cell "Đền bù học viên hủy lịch sát giờ (50% học phí 220.000đ)" [ref=e187]
                  - cell "+110.000 đ" [ref=e188]
                  - cell "Thành công" [ref=e189]
  - complementary "Widget nhắn tin nhanh" [ref=e194]:
    - button "Mở cửa sổ trò chuyện" [ref=e195] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login } from './demoHelpers.js';
  3  | test('UI-COMP-S02 mobile chat launcher does not cover the post-class primary action', async ({ page }) => {
  4  |   await resetDemo(page);
  5  |   await page.setViewportSize({ width: 390, height: 900 });
  6  |   await login(page, 'minhanh', '/learner/post-class');
  7  |   const primary = page.getByRole('button', { name: /Tiếp tục/ });
  8  |   await expect(primary).toBeVisible();
  9  |   const usable = await primary.evaluate(button => {
  10 |     const r = button.getBoundingClientRect();
  11 |     return [.15, .5, .85, .97].every(fraction => [.15, .5, .85].every(vertical => {
  12 |       const hit = document.elementFromPoint(r.left + r.width * fraction, r.top + r.height * vertical);
  13 |       return hit === button || button.contains(hit);
  14 |     }));
  15 |   });
  16 |   expect(usable, 'Every section of the primary action should accept its own clicks, including the right edge').toBe(true);
  17 | });
  18 | 
  19 | test('UI-COMP-S02 mobile chat launcher avoids controls after scrolling and changing form step', async ({ page }, testInfo) => {
  20 |   await resetDemo(page);
  21 |   await page.setViewportSize({ width: 390, height: 844 });
  22 |   await login(page, 'minhanh', '/learner/post-class');
  23 |   for (const step of [1, 2]) {
  24 |     const primary = page.getByRole('button', { name: /Tiếp tục/ });
  25 |     await primary.scrollIntoViewIfNeeded();
  26 |     await expect.poll(() => primary.evaluate(button => {
  27 |       const r = button.getBoundingClientRect();
  28 |       return [.15, .5, .85, .97].every(horizontal => [.15, .5, .85].every(vertical => {
  29 |         const hit = document.elementFromPoint(r.left + r.width * horizontal, r.top + r.height * vertical);
  30 |         return hit === button || button.contains(hit);
  31 |       }));
  32 |     })).toBe(true);
  33 |     await page.screenshot({ path: testInfo.outputPath(`post-step-${step}-launcher.png`) });
  34 |     await primary.click();
  35 |   }
  36 |   await expect(page.getByRole('heading', { name: 'Bước 3: Ngân sách & Mục tiêu học tập', exact: true })).toBeVisible();
  37 | });
  38 | 
  39 | test('UI-COMP-S02 mobile chat launcher does not obstruct footer navigation', async ({ page }) => {
  40 |   await resetDemo(page);
  41 |   await page.setViewportSize({ width: 390, height: 844 });
  42 |   await login(page, 'minhanh', '/learner/post-class');
  43 |   const link = page.getByRole('contentinfo').getByRole('link', { name: 'Không gian gia sư', exact: true });
  44 |   await link.scrollIntoViewIfNeeded();
  45 |   await expect.poll(() => link.evaluate(element => {
  46 |     const r = element.getBoundingClientRect();
  47 |     return [.15, .5, .85].every(horizontal => {
  48 |       const hit = document.elementFromPoint(r.left + r.width * horizontal, r.top + r.height / 2);
  49 |       return hit === element || element.contains(hit);
  50 |     });
  51 |   })).toBe(true);
  52 | });
  53 | 
  54 | for (const height of [844, 900]) {
  55 |   test(`UI-COMP-S02 chat launcher leaves Tutor wallet explanation readable at 390x${height}`, async ({ page }, testInfo) => {
  56 |     await resetDemo(page);
  57 |     await page.setViewportSize({ width: 390, height });
  58 |     await login(page, 'giabao', '/tutor/wallet');
  59 |     await page.evaluate(() => document.fonts.ready);
  60 |     const explanation = page.getByText(/^Bao gồm thù lao các buổi dạy đã hoàn tất/);
  61 |     const launcher = page.getByRole('button', { name: 'Mở cửa sổ trò chuyện' });
  62 |     await expect(explanation).toBeVisible();
  63 |     await expect.poll(async () => {
  64 |       const text = await explanation.boundingBox(); const button = await launcher.boundingBox();
  65 |       return text.x < button.x + button.width && text.x + text.width > button.x
  66 |         && text.y < button.y + button.height && text.y + text.height > button.y;
  67 |     }, { message: 'Chat launcher must not cover the visible wallet explanation' }).toBe(false);
  68 |     const feeBadge = page.getByText('Thù lao đã ghi nhận sau phí nền tảng TutorNearMe', { exact: true });
  69 |     await expect.poll(async () => {
  70 |       const badge = await feeBadge.boundingBox(); const button = await launcher.boundingBox();
  71 |       return badge.x < button.x + button.width && badge.x + badge.width > button.x
  72 |         && badge.y < button.y + button.height && badge.y + badge.height > button.y;
> 73 |     }, { message: 'Chat launcher must leave the entire fee explanation badge unobscured' }).toBe(false);
     |                                                                                             ^ Error: Chat launcher must leave the entire fee explanation badge unobscured
  74 |     await page.screenshot({ path: testInfo.outputPath('wallet-launcher.png') });
  75 |   });
  76 | }
  77 | 
```