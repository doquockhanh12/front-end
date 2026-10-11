# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-wallet-completion.spec.js >> UI-COMP-L15 wallet modal traps focus and restores trigger after Escape
- Location: tests\e2e\learner-wallet-completion.spec.js:4:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - /url: /learner/search
            - link "Đăng tin lớp" [ref=e13] [cursor=pointer]:
              - /url: /learner/post-class
            - link "Lớp của tôi" [ref=e14] [cursor=pointer]:
              - /url: /learner/my-classes
            - link "Lịch học" [ref=e15] [cursor=pointer]:
              - /url: /learner/schedule
            - link "Ví của tôi" [ref=e16] [cursor=pointer]:
              - /url: /learner/wallet
            - link "Trợ giúp" [ref=e17] [cursor=pointer]:
              - /url: /help
          - generic [ref=e18]:
            - button "Thông báo" [ref=e20] [cursor=pointer]:
              - generic [ref=e24]: "1"
            - link "Ảnh đại diện của Nguyễn Minh Anh minhanh" [ref=e25] [cursor=pointer]:
              - /url: /learner/dashboard
              - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=e26]:
                - generic [aria-hidden] [ref=e27]: MA
              - generic [ref=e28]: minhanh
            - button "Đăng xuất" [ref=e29] [cursor=pointer]
      - main [ref=e33]:
        - generic [ref=e34]:
          - generic [ref=e35]: HỆ THỐNG VÍ ĐIỆN TỬ & KÝ QUỸ
          - heading "Ví học viên & Bảo vệ Ký quỹ Escrow" [level=1] [ref=e36]
          - paragraph [ref=e37]: Tiền học được bảo vệ 100% trong hợp đồng thông minh Escrow. Chỉ giải ngân khi bạn đã hài lòng với buổi dạy.
        - generic [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]:
              - generic [ref=e41]: Số dư khả dụng
              - generic [ref=e50]: 2.500.000 đ
              - paragraph [ref=e51]: Dùng để thanh toán giữ chỗ lịch học và kích hoạt ký quỹ bảo vệ cho gia sư ngay lập tức.
            - button "Nạp tiền VietQR Napas 247" [active] [ref=e53] [cursor=pointer]
          - generic [ref=e61]:
            - generic [ref=e62]: Tiền đang tạm giữ Ký quỹ (Escrow)
            - generic [ref=e71]: 440.000 đ
            - generic [ref=e72]: Ổ khóa bảo vệ đa tầng TutorNearMe Escrow
            - paragraph [ref=e76]: Khoản tiền này đang được phong tỏa bảo vệ quyền lợi của bạn. Nếu gia sư vắng mặt hoặc hủy sát giờ, số tiền sẽ được tự động hoàn trả 100% về ví.
        - generic [ref=e77]:
          - generic [ref=e78]:
            - heading "Lịch sử biến động số dư" [level=2] [ref=e79]
            - tablist [ref=e85]:
              - button "Tất cả" [ref=e86] [cursor=pointer]
              - button "Nạp tiền" [ref=e87] [cursor=pointer]
              - button "Tạm giữ Ký quỹ" [ref=e88] [cursor=pointer]
              - button "Hoàn tiền" [ref=e89] [cursor=pointer]
          - table [ref=e91]:
            - rowgroup [ref=e92]:
              - row [ref=e93]:
                - columnheader "Thời gian" [ref=e94]
                - columnheader "Mã GD" [ref=e95]
                - columnheader "Loại giao dịch" [ref=e96]
                - columnheader "Diễn giải" [ref=e97]
                - columnheader "Số tiền" [ref=e98]
                - columnheader "Trạng thái" [ref=e99]
            - rowgroup [ref=e100]:
              - row [ref=e101]:
                - cell "10:00 01/10/2026" [ref=e102]
                - cell "tx-l-001" [ref=e103]
                - cell "Nạp tiền" [ref=e104]
                - cell "Nạp tiền vào Ví học viên qua VietQR Napas 247" [ref=e109]
                - cell "+3.000.000 đ" [ref=e110]
                - cell "Hoàn tất" [ref=e111]
              - row [ref=e116]:
                - cell "11:00 02/10/2026" [ref=e117]
                - cell "tx-l-002" [ref=e118]
                - cell "Ký quỹ" [ref=e119]
                - cell "Tạm giữ ký quỹ Escrow bảo vệ 2 buổi Toán lớp 8" [ref=e124]
                - cell "-440.000 đ" [ref=e125]
                - cell "Đang tạm giữ" [ref=e126]
    - complementary "Widget nhắn tin nhanh" [ref=e131]:
      - button "Mở cửa sổ trò chuyện" [ref=e132] [cursor=pointer]:
        - generic [ref=e135]: "1"
  - dialog [ref=e137]:
    - button "Đóng cửa sổ" [ref=e138] [cursor=pointer]
    - banner [ref=e142]:
      - generic [ref=e143]:
        - heading "Nạp tiền qua VietQR Napas 247" [level=2] [ref=e144]
        - generic "Thời gian hiệu lực mã QR" [ref=e151]: 04:54
      - paragraph [ref=e156]: Quét mã QR bằng mọi ứng dụng ngân hàng hoặc ví điện tử. Tiền tự động cập nhật trong 10 giây.
    - generic [ref=e157]:
      - generic [ref=e158]: "Chọn số tiền nạp:"
      - generic [ref=e159]:
        - button "200.000 đ" [ref=e160] [cursor=pointer]
        - button "500.000 đ" [ref=e161] [cursor=pointer]
        - button "1.000.000 đ" [ref=e162] [cursor=pointer]
        - button "2.000.000 đ" [ref=e163] [cursor=pointer]
        - button "5.000.000 đ" [ref=e164] [cursor=pointer]
      - generic [ref=e165]:
        - spinbutton [ref=e166]: "500000"
        - generic [ref=e167]: VNĐ
    - generic [ref=e168]:
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]: Napas 247
          - text: ·
          - generic [ref=e172]: MBBank
        - paragraph [ref=e173]: Mã QR tự động điền số tiền & nội dung
      - generic [ref=e174]:
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]: "Ngân hàng thụ hưởng:"
            - generic [ref=e178]: MBBank (Ngân hàng TMCP Quân Đội)
          - generic [ref=e179]:
            - generic [ref=e180]: "Số tài khoản:"
            - generic [ref=e181]:
              - text: "0900000001"
              - button "Sao chép số tài khoản" [ref=e182] [cursor=pointer]
          - generic [ref=e186]:
            - generic [ref=e187]: "Chủ tài khoản:"
            - generic [ref=e188]: TUTORNEARME ESCROW
          - generic [ref=e189]:
            - generic [ref=e190]: "Số tiền:"
            - generic [ref=e191]: 500.000 đ
          - generic [ref=e192]:
            - generic [ref=e193]: "Nội dung chuyển:"
            - generic [ref=e194]:
              - generic [ref=e195]: TNM NAP MINHANH 8899
              - button "Sao chép nội dung chuyển khoản" [ref=e196] [cursor=pointer]
        - paragraph [ref=e200]: "* Lưu ý: Vui lòng giữ nguyên nội dung chuyển khoản để hệ thống Napas 247 khớp lệnh tự động."
        - button "Mô phỏng Chuyển khoản Thành công" [ref=e201] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login } from './demoHelpers.js';
  3  | 
  4  | test('UI-COMP-L15 wallet modal traps focus and restores trigger after Escape', async ({ page }) => {
  5  |   await resetDemo(page); await login(page, 'minhanh', '/learner/wallet');
  6  |   const trigger = page.getByRole('button', { name: 'Nạp tiền VietQR Napas 247', exact: true });
  7  |   await trigger.click();
  8  |   const dialog = page.getByRole('dialog');
> 9  |   await expect.poll(() => dialog.evaluate(node => node.contains(document.activeElement))).toBe(true);
     |                                                                                           ^ Error: expect(received).toBe(expected) // Object.is equality
  10 |   await page.keyboard.press('Escape'); await expect(dialog).toHaveCount(0); await expect(trigger).toBeFocused();
  11 | });
  12 | 
  13 | test('Learner local QR demonstration credits chosen amount once after three seconds without banking request', async ({ page }) => {
  14 |   const bankingRequests = [];
  15 |   page.on('request', request => { if (/vietqr\.io|napas/i.test(request.url())) bankingRequests.push(request.url()); });
  16 |   await resetDemo(page); await login(page, 'minhanh', '/learner/wallet');
  17 |   const balance = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).wallets['demo-learner'].availableBalance);
  18 |   await page.getByRole('button', { name: 'Nạp tiền VietQR Napas 247', exact: true }).click();
  19 |   await page.getByLabel('Số tiền nạp').fill('200000');
  20 |   await expect(page.getByRole('dialog')).toContainText('Không chuyển tiền thật');
  21 |   await page.clock.fastForward(3000);
  22 |   await expect(page.getByRole('dialog')).toHaveCount(0);
  23 |   await expect(page.getByRole('status')).toContainText('200.000');
  24 |   await page.clock.fastForward(6000);
  25 |   const state = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  26 |   expect(state.wallets['demo-learner'].availableBalance).toBe(balance + 200000);
  27 |   expect(bankingRequests).toEqual([]);
  28 | });
  29 | 
  30 | test('Learner QR demo rejects invalid amount and cancellation prevents a deposit', async ({ page }) => {
  31 |   await resetDemo(page); await login(page, 'minhanh', '/learner/wallet');
  32 |   const balance = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).wallets['demo-learner'].availableBalance);
  33 |   await page.getByRole('button', { name: 'Nạp tiền VietQR Napas 247', exact: true }).click();
  34 |   await page.getByLabel('Số tiền nạp').fill('-1');
  35 |   await page.clock.fastForward(4000); await expect(page.getByRole('dialog')).toBeVisible();
  36 |   await expect(page.getByRole('alert')).toContainText('50.000');
  37 |   await page.getByLabel('Số tiền nạp').fill('200000'); await page.keyboard.press('Escape');
  38 |   await page.clock.fastForward(4000);
  39 |   expect(await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).wallets['demo-learner'].availableBalance)).toBe(balance);
  40 | });
  41 | 
```