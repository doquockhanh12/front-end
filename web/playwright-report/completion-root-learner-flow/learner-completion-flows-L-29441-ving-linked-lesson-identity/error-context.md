# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-completion-flows.spec.js >> Learner reschedules an owned future lesson while preserving linked lesson identity
- Location: tests\e2e\learner-completion-flows.spec.js:32:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Yêu cầu đổi lịch' })

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
          - generic [ref=e35]:
            - generic [ref=e36]: LỊCH HỌC & LỚP TRỰC TUYẾN
            - heading "Lịch học gia sư của bạn" [level=1] [ref=e37]
            - paragraph [ref=e38]: Xem lịch học, tham gia phòng học Google Meet và quản lý bảo lưu buổi dạy.
          - generic [ref=e39]:
            - button "Danh sách" [ref=e40] [cursor=pointer]
            - button "Lịch tuần" [ref=e42] [cursor=pointer]
        - generic [ref=e45]:
          - generic [ref=e46]:
            - button "Tất cả (5)" [ref=e47] [cursor=pointer]
            - button "Sắp diễn ra" [ref=e48] [cursor=pointer]
            - button "Đã hoàn thành" [ref=e49] [cursor=pointer]
            - button "Đã hủy" [ref=e50] [cursor=pointer]
          - generic [ref=e51]:
            - article [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]:
                  - strong [ref=e55]: Thứ 7, 06/06
                  - text: "2026"
                - generic [ref=e56]:
                  - heading "Tiếng Anh" [level=3] [ref=e57]
                  - generic [ref=e58]:
                    - generic [ref=e59]: 18:00 – 18:45
                    - generic [ref=e63]: •
                    - generic [ref=e64]:
                      - text: "Gia sư:"
                      - strong [ref=e65]: Trần Gia Bảo
                    - generic [ref=e66]: •
                    - generic [ref=e67]: Online
              - generic [ref=e71]:
                - button "Vào phòng học Online" [ref=e72] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=e76] [cursor=pointer]
            - article [ref=e77]:
              - generic [ref=e78]:
                - generic [ref=e79]:
                  - strong [ref=e80]: Thứ 6, 03/07
                  - text: "2026"
                - generic [ref=e81]:
                  - heading "Tiếng Anh" [level=3] [ref=e82]
                  - generic [ref=e83]:
                    - generic [ref=e84]: 18:00 – 18:45
                    - generic [ref=e88]: •
                    - generic [ref=e89]:
                      - text: "Gia sư:"
                      - strong [ref=e90]: Trần Gia Bảo
                    - generic [ref=e91]: •
                    - generic [ref=e92]: Online
              - generic [ref=e96]:
                - button "Vào phòng học Online" [ref=e97] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=e101] [cursor=pointer]
            - article [ref=e102]:
              - generic [ref=e103]:
                - generic [ref=e104]:
                  - strong [ref=e105]: CN, 20/09
                  - text: "2026"
                - generic [ref=e106]:
                  - heading "Tiếng Anh" [level=3] [ref=e107]
                  - generic [ref=e108]:
                    - generic [ref=e109]: 18:00 – 18:45
                    - generic [ref=e113]: •
                    - generic [ref=e114]:
                      - text: "Gia sư:"
                      - strong [ref=e115]: Trần Gia Bảo
                    - generic [ref=e116]: •
                    - generic [ref=e117]: Online
              - generic [ref=e121]:
                - button "Vào phòng học Online" [ref=e122] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=e126] [cursor=pointer]
            - article [ref=e127]:
              - generic [ref=e128]:
                - generic [ref=e129]:
                  - strong [ref=e130]: CN, 27/09
                  - text: "2026"
                - generic [ref=e131]:
                  - heading "IELTS" [level=3] [ref=e132]
                  - generic [ref=e133]:
                    - generic [ref=e134]: 19:00 – 19:45
                    - generic [ref=e138]: •
                    - generic [ref=e139]:
                      - text: "Gia sư:"
                      - strong [ref=e140]: Trần Gia Bảo
                    - generic [ref=e141]: •
                    - generic [ref=e142]: Online
              - generic [ref=e146]:
                - button "Vào phòng học Online" [ref=e147] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=e151] [cursor=pointer]
            - article [ref=e152]:
              - generic [ref=e153]:
                - generic [ref=e154]:
                  - strong [ref=e155]: Thứ 5, 01/10
                  - text: "2026"
                - generic [ref=e156]:
                  - heading "Tiếng Anh" [level=3] [ref=e157]
                  - generic [ref=e158]:
                    - generic [ref=e159]: 18:00 – 18:45
                    - generic [ref=e163]: •
                    - generic [ref=e164]:
                      - text: "Gia sư:"
                      - strong [ref=e165]: Trần Gia Bảo
                    - generic [ref=e166]: •
                    - generic [ref=e167]: Online
              - generic [ref=e171]:
                - button "Vào phòng học Online" [ref=e172] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=e176] [cursor=pointer]
    - complementary "Widget nhắn tin nhanh" [ref=e177]:
      - button "Mở cửa sổ trò chuyện" [ref=e178] [cursor=pointer]:
        - generic [ref=e181]: "1"
  - dialog [ref=e183]:
    - button "Đóng cửa sổ" [active] [ref=e184] [cursor=pointer]
    - banner [ref=e188]:
      - generic [ref=e189]: CHI TIẾT BUỔI HỌC
      - heading "Tiếng Anh" [level=2] [ref=e190]
      - generic [ref=e191]:
        - generic [ref=e192]: Thứ 7, 06/06 · 18:00 – 18:45
        - generic [ref=e196]: •
        - generic [ref=e197]:
          - text: "Gia sư:"
          - strong [ref=e198]: Trần Gia Bảo
        - generic [ref=e199]: •
        - generic [ref=e200]:
          - text: "Học phí:"
          - strong [ref=e201]: 180.000 đ
    - generic [ref=e202]:
      - button "Vào phòng học Online (Google Meet)" [ref=e203] [cursor=pointer]
      - generic [ref=e207]: "Prototype: không kết nối phòng học hay Google Meet thật."
    - generic [ref=e208]:
      - heading "Tài liệu & Bài tập về nhà" [level=3] [ref=e209]
      - generic [ref=e213]:
        - paragraph [ref=e214]: Gia sư chưa đính kèm tài liệu cho buổi học này.
        - generic [ref=e215]:
          - text: Nộp bài tập
          - button "Nộp bài tập" [ref=e216]
        - paragraph [ref=e217]:
          - strong [ref=e218]: "Nhận xét / Tiến độ:"
          - text: Chưa có nhận xét từ gia sư.
    - generic [ref=e219]:
      - heading "Đánh giá & Gia hạn khóa học" [level=3] [ref=e220]
      - generic [ref=e221]: Đánh giá gia sư
      - combobox "Đánh giá gia sư" [ref=e222] [cursor=pointer]:
        - option "5 sao" [selected]
        - option "4 sao"
        - option "3 sao"
        - option "2 sao"
        - option "1 sao"
      - generic [ref=e223]: Nhận xét
      - textbox "Nhận xét" [ref=e224]
      - button "Gửi đánh giá buổi học" [ref=e225] [cursor=pointer]
      - generic [ref=e226]: Gia hạn với gia sư Trần Gia Bảo
      - combobox "Gia hạn với gia sư Trần Gia Bảo" [ref=e227] [cursor=pointer]:
        - option "4 buổi" [selected]
        - option "8 buổi"
        - option "12 buổi"
      - group "Chọn buổi học cụ thể (0/4)" [ref=e228]:
        - paragraph [ref=e230]: Chỉ chọn lịch rảnh đã lưu của gia sư. Buổi đã có lớp sẽ không hiển thị.
        - generic [ref=e231]:
          - generic [ref=e232]:
            - checkbox "Thứ 3, 06/10 · 18:00–18:45" [ref=e233]
            - text: Thứ 3, 06/10 · 18:00–18:45
          - generic [ref=e234]:
            - checkbox "Thứ 3, 06/10 · 18:45–19:30" [ref=e235]
            - text: Thứ 3, 06/10 · 18:45–19:30
          - generic [ref=e236]:
            - checkbox "Thứ 3, 06/10 · 19:30–20:15" [ref=e237]
            - text: Thứ 3, 06/10 · 19:30–20:15
          - generic [ref=e238]:
            - checkbox "Thứ 3, 06/10 · 20:15–21:00" [ref=e239]
            - text: Thứ 3, 06/10 · 20:15–21:00
          - generic [ref=e240]:
            - checkbox "Thứ 5, 08/10 · 18:00–18:45" [ref=e241]
            - text: Thứ 5, 08/10 · 18:00–18:45
          - generic [ref=e242]:
            - checkbox "Thứ 5, 08/10 · 18:45–19:30" [ref=e243]
            - text: Thứ 5, 08/10 · 18:45–19:30
          - generic [ref=e244]:
            - checkbox "Thứ 5, 08/10 · 19:30–20:15" [ref=e245]
            - text: Thứ 5, 08/10 · 19:30–20:15
          - generic [ref=e246]:
            - checkbox "Thứ 5, 08/10 · 20:15–21:00" [ref=e247]
            - text: Thứ 5, 08/10 · 20:15–21:00
          - generic [ref=e248]:
            - checkbox "Thứ 6, 09/10 · 18:00–18:45" [ref=e249]
            - text: Thứ 6, 09/10 · 18:00–18:45
          - generic [ref=e250]:
            - checkbox "Thứ 6, 09/10 · 18:45–19:30" [ref=e251]
            - text: Thứ 6, 09/10 · 18:45–19:30
          - generic [ref=e252]:
            - checkbox "Thứ 6, 09/10 · 19:30–20:15" [ref=e253]
            - text: Thứ 6, 09/10 · 19:30–20:15
          - generic [ref=e254]:
            - checkbox "Thứ 6, 09/10 · 20:15–21:00" [ref=e255]
            - text: Thứ 6, 09/10 · 20:15–21:00
          - generic [ref=e256]:
            - checkbox "Thứ 7, 10/10 · 09:00–09:45" [ref=e257]
            - text: Thứ 7, 10/10 · 09:00–09:45
          - generic [ref=e258]:
            - checkbox "Thứ 7, 10/10 · 09:45–10:30" [ref=e259]
            - text: Thứ 7, 10/10 · 09:45–10:30
          - generic [ref=e260]:
            - checkbox "Thứ 7, 10/10 · 10:30–11:15" [ref=e261]
            - text: Thứ 7, 10/10 · 10:30–11:15
          - generic [ref=e262]:
            - checkbox "Thứ 7, 10/10 · 11:15–12:00" [ref=e263]
            - text: Thứ 7, 10/10 · 11:15–12:00
      - button "Đặt cọc gia hạn" [ref=e264] [cursor=pointer]
    - generic [ref=e265]:
      - generic [ref=e266]:
        - generic [ref=e267]: Gặp sự cố hoặc gia sư vắng mặt?
        - text: Bảo hiểm Escrow hoàn lại 100% học phí ngay lập tức.
      - button "Yêu cầu Hoàn tiền 100% vì Sự cố" [ref=e268] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login, logout } from './demoHelpers.js';
  3  | import { createDemoState } from '../../src/features/domain/demoDomain.js';
  4  | import { fixedTime } from './demoHelpers.js';
  5  | 
  6  | test('Learner lesson downloads real attached content and can submit homework', async ({ page }) => {
  7  |   const state = createDemoState(fixedTime);
  8  |   const lesson = state.lessons.find(item => item.learnerId === 'demo-learner');
  9  |   lesson.materials = [{ name: 'assignment.txt', type: 'text/plain', dataUrl: 'data:text/plain;base64,bGVzc29u' }];
  10 |   await resetDemo(page, { state }); await login(page, 'minhanh', '/learner/schedule');
  11 |   await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  12 |   const downloaded = page.waitForEvent('download');
  13 |   await page.getByRole('link', { name: 'Tải assignment.txt' }).click();
  14 |   expect((await downloaded).suggestedFilename()).toBe('assignment.txt');
  15 |   await page.getByLabel('Nộp bài tập').setInputFiles({ name: 'homework.txt', mimeType: 'text/plain', buffer: Buffer.from('Learner submission') });
  16 |   await expect(page.getByText('homework.txt', { exact: true })).toBeVisible();
  17 | });
  18 | 
  19 | test('Learner completed lesson supports review and a four-session renewal with concrete dates', async ({ page }) => {
  20 |   await resetDemo(page); await login(page, 'minhanh', '/learner/schedule');
  21 |   await page.getByRole('button', { name: 'Đã hoàn thành', exact: true }).click();
  22 |   await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  23 |   await page.getByLabel('Nhận xét', { exact: true }).fill('Buổi học rõ ràng, giải thích dễ hiểu.');
  24 |   await page.getByRole('button', { name: 'Gửi đánh giá buổi học' }).click();
  25 |   await expect(page.getByRole('status')).toContainText('Đã gửi đánh giá');
  26 |   await page.getByLabel(/Gia hạn với gia sư/).selectOption('4');
  27 |   for (let index = 0; index < 4; index++) await page.locator('.offer-session-picker input').nth(index).check();
  28 |   await page.getByRole('button', { name: 'Đặt cọc gia hạn' }).click();
  29 |   await expect(page.getByRole('status')).toContainText('Đã đặt cọc và gia hạn');
  30 | });
  31 | 
  32 | test('Learner reschedules an owned future lesson while preserving linked lesson identity', async ({ page }) => {
  33 |   await resetDemo(page); await login(page, 'minhanh', '/learner/schedule');
  34 |   await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
> 35 |   await page.getByRole('button', { name: 'Yêu cầu đổi lịch' }).click();
     |                                                                ^ Error: locator.click: Test timeout of 60000ms exceeded.
  36 |   await page.locator('.lesson-reschedule .offer-session-picker input').first().check();
  37 |   await page.getByRole('button', { name: 'Xác nhận đổi lịch' }).click();
  38 |   await expect(page.getByRole('status')).toContainText('Đã đổi lịch');
  39 | });
  40 | 
  41 | test('Tutor sends a concrete offer and Learner pays the same conversation proposal', async ({ page }) => {
  42 |   const browserErrors = [];
  43 |   page.on('pageerror', error => browserErrors.push(error.message));
  44 |   await resetDemo(page); await login(page, 'giabao', '/messages');
  45 |   await page.getByRole('button', { name: 'Gửi Đề xuất Học phí', exact: true }).first().click();
  46 |   expect(browserErrors).toEqual([]);
  47 |   await expect(page.getByRole('dialog')).toBeVisible();
  48 |   await page.getByLabel('Khối lớp / Trình độ').fill('THPT');
  49 |   await page.getByLabel('Lịch học dự kiến').fill('Lịch cụ thể đã chọn');
  50 |   await page.locator('.custom-offer-modal .offer-session-picker input').nth(0).check();
  51 |   await page.locator('.custom-offer-modal .offer-session-picker input').nth(1).check();
  52 |   await page.getByRole('button', { name: 'Xác nhận gửi đề xuất' }).click();
  53 |   await expect(page.getByRole('dialog')).toHaveCount(0);
  54 |   await page.goto('/tutor/dashboard'); await logout(page);
  55 |   await login(page, 'minhanh', '/messages');
  56 |   const offer = page.getByTestId('custom-offer-card').filter({ hasText: 'THPT' });
  57 |   await offer.getByRole('button', { name: 'Đồng ý & Đặt cọc ngay' }).click();
  58 |   await page.getByRole('button', { name: 'Xác nhận đặt cọc', exact: true }).click();
  59 |   await expect(offer.locator('[data-status="accepted"]')).toBeVisible();
  60 | });
  61 | 
  62 | test('Learner discovery preserves tutor map positions after sorting and filters by level', async ({ page }) => {
  63 |   await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  64 |   await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  65 |   const pin = page.getByRole('button', { name: /Chọn Trần Gia Bảo,/ });
  66 |   const before = await pin.getAttribute('transform');
  67 |   await page.getByLabel('Sắp xếp').selectOption('price');
  68 |   expect(await pin.getAttribute('transform')).toBe(before);
  69 |   await page.getByRole('group', { name: 'Cấp độ học' }).getByLabel('THCS', { exact: true }).check();
  70 |   await expect(page.locator('.learner-split-list .tutor-card')).not.toHaveCount(0);
  71 | });
  72 | 
  73 | test('Learner post supports Mầm non and stores user-selected concrete session proposals', async ({ page }) => {
  74 |   await resetDemo(page); await login(page, 'minhanh', '/learner/post-class');
  75 |   await page.getByLabel('Khối lớp học viên *').selectOption('Mầm non');
  76 |   await page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' }).click();
  77 |   await page.getByLabel('Ngày học mong muốn').fill('2026-10-08');
  78 |   await page.getByLabel('Giờ bắt đầu').fill('18:00');
  79 |   await page.getByRole('button', { name: 'Thêm buổi học' }).click();
  80 |   await page.getByRole('button', { name: 'Tiếp tục: Ngân sách & Mục tiêu' }).click();
  81 |   await page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last().click();
  82 |   await expect(page).toHaveURL(/my-classes$/);
  83 |   await expect(page.locator('.myclass-card').filter({ hasText: 'Mầm non' })).toContainText('08/10');
  84 | });
  85 | 
```