# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-completion-flows.spec.js >> Tutor sends a concrete offer and Learner pays the same conversation proposal
- Location: tests\e2e\learner-completion-flows.spec.js:32:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByLabel('Khối lớp / Trình độ')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - link "TutorNearMe · Trò chuyện" [ref=e5] [cursor=pointer]:
      - /url: /
    - generic [ref=e10]:
      - link "Quay lại bảng điều khiển" [ref=e11] [cursor=pointer]:
        - /url: /tutor/dashboard
      - img "Ảnh đại diện của Trần Gia Bảo" [ref=e14]:
        - generic [aria-hidden] [ref=e15]: GB
  - generic [ref=e16]:
    - complementary [ref=e17]:
      - generic [ref=e18]:
        - heading "Tin nhắn" [level=2] [ref=e20]
        - textbox "Tìm kiếm cuộc trò chuyện" [ref=e25]:
          - /placeholder: Tìm đoạn chat...
      - list [ref=e26]:
        - listitem [ref=e27]:
          - 'button "Ảnh đại diện của Nguyễn Minh Anh Nguyễn Minh Anh 15:10 Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần)" [ref=e28] [cursor=pointer]':
            - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=e30]:
              - generic [aria-hidden] [ref=e31]: MA
            - generic [ref=e32]:
              - generic [ref=e33]:
                - generic [ref=e34]: Nguyễn Minh Anh
                - generic [ref=e35]: 15:10
              - paragraph [ref=e37]: "Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần)"
    - main [ref=e38]:
      - generic [ref=e39]:
        - button "Trở lại danh sách hội thoại" [ref=e40] [cursor=pointer]
        - generic [ref=e43]:
          - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=e44]:
            - generic [aria-hidden] [ref=e45]: MA
          - generic [ref=e46]:
            - heading "Nguyễn Minh Anh" [level=3] [ref=e47]
            - paragraph [ref=e48]:
              - generic [ref=e50]: Học viên · Trực tuyến
        - button "Gửi Đề xuất Học phí" [ref=e52] [cursor=pointer]:
          - generic [ref=e56]: Gửi đề xuất học phí
      - alert [ref=e57]:
        - generic [ref=e60]:
          - strong [ref=e61]: "CẢNH BÁO:"
          - text: Mọi thỏa thuận chuyển khoản ngoài sàn sẽ
          - strong [ref=e62]: MẤT TOÀN BỘ BẢO HIỂM HOÀN TIỀN 100%
          - text: . TutorNearMe miễn trừ mọi trách nhiệm khi giao dịch ngoài hệ thống.
      - button "Gửi Đề xuất Học phí" [ref=e64] [cursor=pointer]
      - generic [ref=e67]:
        - generic [ref=e68]: Hôm nay
        - generic [ref=e71]:
          - generic [ref=e72]: Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không?
          - generic [ref=e73]: 14:45
        - generic [ref=e75]:
          - generic [ref=e76]: Dạ chào chị Minh Anh! Em hoàn toàn sắp xếp được lịch vào tối Thứ 3 và Thứ 5 ạ. Em sẽ mang theo giáo án chuyên biệt để test năng lực buổi đầu cho bé.
          - generic [ref=e77]: 15:00
        - generic [ref=e79]:
          - generic [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]: Đề xuất học phí
              - heading "Toán lớp 8 · Lớp 8" [level=4] [ref=e85]
            - generic [ref=e86]: Chờ phản hồi
          - generic [ref=e90]:
            - generic [ref=e91]:
              - generic [ref=e92]:
                - generic [ref=e93]: Số buổi
                - generic [ref=e94]: 2 buổi
              - generic [ref=e95]:
                - generic [ref=e96]: Học phí / buổi
                - generic [ref=e97]: 220.000 đ
              - generic [ref=e98]:
                - generic [ref=e99]: Lịch học
                - text: Thứ 3 & Thứ 5 (18:30 - 20:00)
            - generic [ref=e100]:
              - generic [ref=e101]: Tổng tiền cọc ký quỹ (Escrow)
              - generic [ref=e106]: 440.000 đ
              - paragraph [ref=e107]: Bảo vệ 100% hoàn tiền bởi TutorNearMe Escrow Shield. Tiền chỉ giải ngân sau khi buổi học hoàn thành.
            - generic [ref=e108]: Đang chờ học viên phản hồi và thanh toán ký quỹ.
      - generic [ref=e110]:
        - textbox "Nội dung tin nhắn" [ref=e111]:
          - /placeholder: Nhập tin nhắn...
        - button "Gửi" [disabled] [ref=e112]
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
  32 | test('Tutor sends a concrete offer and Learner pays the same conversation proposal', async ({ page }) => {
  33 |   await resetDemo(page); await login(page, 'giabao', '/messages');
  34 |   await page.getByRole('button', { name: 'Gửi Đề xuất Học phí' }).first().click();
> 35 |   await page.getByLabel('Khối lớp / Trình độ').fill('THPT');
     |                                                ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  36 |   await page.getByLabel('Lịch học dự kiến').fill('Lịch cụ thể đã chọn');
  37 |   await page.locator('.custom-offer-modal .offer-session-picker input').nth(0).check();
  38 |   await page.locator('.custom-offer-modal .offer-session-picker input').nth(1).check();
  39 |   await page.getByRole('button', { name: 'Xác nhận gửi đề xuất' }).click();
  40 |   await expect(page.getByRole('dialog')).toHaveCount(0);
  41 |   await page.goto('/tutor/dashboard'); await logout(page);
  42 |   await login(page, 'minhanh', '/messages');
  43 |   const offer = page.getByTestId('custom-offer-card').filter({ hasText: 'THPT' });
  44 |   await offer.getByRole('button', { name: 'Đồng ý & Đặt cọc ngay' }).click();
  45 |   await page.getByRole('button', { name: 'Xác nhận đặt cọc', exact: true }).click();
  46 |   await expect(offer.locator('[data-status="accepted"]')).toBeVisible();
  47 | });
  48 | 
  49 | test('Learner discovery preserves tutor map positions after sorting and filters by level', async ({ page }) => {
  50 |   await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  51 |   await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  52 |   const pin = page.getByRole('button', { name: /Chọn Trần Gia Bảo,/ });
  53 |   const before = await pin.getAttribute('transform');
  54 |   await page.getByLabel('Sắp xếp').selectOption('price');
  55 |   expect(await pin.getAttribute('transform')).toBe(before);
  56 |   await page.getByRole('group', { name: 'Cấp độ học' }).getByLabel('THCS', { exact: true }).check();
  57 |   await expect(page.locator('.learner-split-list .tutor-card')).not.toHaveCount(0);
  58 | });
  59 | 
  60 | test('Learner post supports Mầm non and stores user-selected concrete session proposals', async ({ page }) => {
  61 |   await resetDemo(page); await login(page, 'minhanh', '/learner/post-class');
  62 |   await page.getByLabel('Khối lớp học viên *').selectOption('Mầm non');
  63 |   await page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' }).click();
  64 |   await page.getByLabel('Ngày học mong muốn').fill('2026-10-08');
  65 |   await page.getByLabel('Giờ bắt đầu').fill('18:00');
  66 |   await page.getByRole('button', { name: 'Thêm buổi học' }).click();
  67 |   await page.getByRole('button', { name: 'Tiếp tục: Ngân sách & Mục tiêu' }).click();
  68 |   await page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last().click();
  69 |   await expect(page).toHaveURL(/my-classes$/);
  70 |   await expect(page.locator('.myclass-card').filter({ hasText: 'Mầm non' })).toContainText('08/10');
  71 | });
  72 | 
```