# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-completion-flows.spec.js >> Tutor sends a concrete offer and Learner pays the same conversation proposal
- Location: tests\e2e\learner-completion-flows.spec.js:41:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('dialog')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('dialog') with timeout 5000ms
  - waiting for getByRole('dialog')

```

```yaml
- banner:
  - link "TutorNearMe · Trò chuyện":
    - /url: /
  - link "Quay lại bảng điều khiển":
    - /url: /tutor/dashboard
  - img "Ảnh đại diện của Trần Gia Bảo"
- complementary:
  - heading "Tin nhắn" [level=2]
  - textbox "Tìm kiếm cuộc trò chuyện":
    - /placeholder: Tìm đoạn chat...
  - list:
    - listitem:
      - 'button "Ảnh đại diện của Nguyễn Minh Anh Nguyễn Minh Anh 15:10 Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần)"':
        - img "Ảnh đại diện của Nguyễn Minh Anh"
        - text: Nguyễn Minh Anh 15:10
        - paragraph: "Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần)"
- main:
  - button "Trở lại danh sách hội thoại"
  - img "Ảnh đại diện của Nguyễn Minh Anh"
  - heading "Nguyễn Minh Anh" [level=3]
  - paragraph: Học viên · Trực tuyến
  - button "Gửi Đề xuất Học phí": Gửi đề xuất học phí
  - alert:
    - strong: "CẢNH BÁO:"
    - text: Mọi thỏa thuận chuyển khoản ngoài sàn sẽ
    - strong: MẤT TOÀN BỘ BẢO HIỂM HOÀN TIỀN 100%
    - text: . TutorNearMe miễn trừ mọi trách nhiệm khi giao dịch ngoài hệ thống.
  - button "Gửi Đề xuất Học phí"
  - text: Hôm nay Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không? 14:45 Dạ chào chị Minh Anh! Em hoàn toàn sắp xếp được lịch vào tối Thứ 3 và Thứ 5 ạ. Em sẽ mang theo giáo án chuyên biệt để test năng lực buổi đầu cho bé. 15:00 Đề xuất học phí
  - heading "Toán lớp 8 · Lớp 8" [level=4]
  - text: Chờ phản hồi Số buổi 2 buổi Học phí / buổi 220.000 đ Lịch học Thứ 3 & Thứ 5 (18:30 - 20:00) Tổng tiền cọc ký quỹ (Escrow) 440.000 đ
  - paragraph: Bảo vệ 100% hoàn tiền bởi TutorNearMe Escrow Shield. Tiền chỉ giải ngân sau khi buổi học hoàn thành.
  - text: Đang chờ học viên phản hồi và thanh toán ký quỹ.
  - textbox "Nội dung tin nhắn":
    - /placeholder: Nhập tin nhắn...
  - button "Gửi" [disabled]
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
  35 |   await page.getByRole('button', { name: 'Yêu cầu đổi lịch' }).click();
  36 |   await page.locator('.lesson-reschedule .offer-session-picker input').first().check();
  37 |   await page.getByRole('button', { name: 'Xác nhận đổi lịch' }).click();
  38 |   await expect(page.getByRole('status')).toContainText('Đã đổi lịch');
  39 | });
  40 | 
  41 | test('Tutor sends a concrete offer and Learner pays the same conversation proposal', async ({ page }) => {
  42 |   const browserErrors = [];
  43 |   page.on('pageerror', error => browserErrors.push(error.message));
  44 |   await resetDemo(page); await login(page, 'giabao', '/messages');
  45 |   await page.getByRole('button', { name: 'Gửi Đề xuất Học phí' }).first().click();
  46 |   expect(browserErrors).toEqual([]);
> 47 |   await expect(page.getByRole('dialog')).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
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