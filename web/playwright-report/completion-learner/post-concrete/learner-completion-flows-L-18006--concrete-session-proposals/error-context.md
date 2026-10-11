# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-completion-flows.spec.js >> Learner post supports Mầm non and stores user-selected concrete session proposals
- Location: tests\e2e\learner-completion-flows.spec.js:15:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByLabel('Khối lớp / Trình độ *')

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
      - generic [ref=e35]:
        - generic [ref=e36]:
          - generic [ref=e37]: "1"
          - generic [ref=e38]:
            - generic [ref=e39]: Bước 1
            - text: Môn & Khối lớp
        - generic [ref=e41]:
          - generic [ref=e42]: "2"
          - generic [ref=e43]:
            - generic [ref=e44]: Bước 2
            - text: Địa điểm & Lịch học
        - generic [ref=e46]:
          - generic [ref=e47]: "3"
          - generic [ref=e48]:
            - generic [ref=e49]: Bước 3
            - text: Ngân sách & Mục tiêu
      - generic [ref=e51]:
        - 'heading "Bước 1: Môn học và Khối lớp" [level=2] [ref=e52]'
        - paragraph [ref=e53]: Chọn môn học và cấp độ học viên để kết nối nhanh chóng với các gia sư có chuyên môn phù hợp.
        - generic [ref=e54]:
          - generic [ref=e55]:
            - generic [ref=e56]: Môn học cần tìm gia sư *
            - textbox "Môn học cần tìm gia sư *" [ref=e59]:
              - /placeholder: "VD: Toán, Tiếng Anh, Ngữ văn..."
              - text: Toán
            - generic [ref=e60]:
              - button "Toán" [ref=e61] [cursor=pointer]
              - button "Ngữ văn" [ref=e62] [cursor=pointer]
              - button "Tiếng Anh" [ref=e63] [cursor=pointer]
              - button "Vật lý" [ref=e64] [cursor=pointer]
              - button "Hóa học" [ref=e65] [cursor=pointer]
              - button "Sinh học" [ref=e66] [cursor=pointer]
              - button "Lịch sử" [ref=e67] [cursor=pointer]
              - button "Địa lý" [ref=e68] [cursor=pointer]
          - generic [ref=e69]:
            - generic [ref=e70]: Khối lớp học viên *
            - combobox "Khối lớp học viên *" [ref=e71] [cursor=pointer]:
              - option "Mầm non"
              - option "Lớp 1"
              - option "Lớp 2"
              - option "Lớp 3"
              - option "Lớp 4"
              - option "Lớp 5"
              - option "Lớp 6"
              - option "Lớp 7"
              - option "Lớp 8" [selected]
              - option "Lớp 9"
              - option "Lớp 10"
              - option "Lớp 11"
              - option "Lớp 12"
              - option "Đại học"
              - option "Người đi làm"
        - generic [ref=e72]:
          - link "Hủy bỏ" [ref=e73] [cursor=pointer]:
            - /url: /learner/my-classes
          - 'button "Tiếp tục: Địa điểm & Lịch học" [ref=e74] [cursor=pointer]'
    - contentinfo [ref=e77]:
      - generic [ref=e78]:
        - generic [ref=e79]:
          - link "TN TutorNearMe Gia sư gần bạn" [ref=e80] [cursor=pointer]:
            - /url: /
            - generic [ref=e81]: TN
            - generic [ref=e82]:
              - strong [ref=e83]: TutorNearMe
              - generic [ref=e84]: Gia sư gần bạn
          - paragraph [ref=e85]: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
        - generic [ref=e86]:
          - strong [ref=e87]: Người học
          - link "Dành cho người học" [ref=e88] [cursor=pointer]:
            - /url: /learner
          - link "Tìm gia sư" [ref=e89] [cursor=pointer]:
            - /url: /learner/search
          - link "Yêu cầu học" [ref=e90] [cursor=pointer]:
            - /url: /requests
        - generic [ref=e91]:
          - strong [ref=e92]: Gia sư
          - link "Trở thành gia sư" [ref=e93] [cursor=pointer]:
            - /url: /tutor
          - link "Không gian gia sư" [ref=e94] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Cơ hội dạy" [ref=e95] [cursor=pointer]:
            - /url: /tutor/requests
        - generic [ref=e96]:
          - strong [ref=e97]: Khám phá
          - link "Trang chủ" [ref=e98] [cursor=pointer]:
            - /url: /
          - link "Admin demo" [ref=e99] [cursor=pointer]:
            - /url: /admin/dashboard
      - generic [ref=e100]: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
  - complementary "Widget nhắn tin nhanh" [ref=e101]:
    - button "Mở cửa sổ trò chuyện" [ref=e102] [cursor=pointer]:
      - generic [ref=e105]: "1"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login } from './demoHelpers.js';
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
> 17 | });
     |                                                  ^ Error: locator.selectOption: Test timeout of 60000ms exceeded.
  18 | 
  19 | test('Learner discovery preserves tutor map positions after sorting and filters by level', async ({ page }) => {
  20 |   await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  21 |   await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  22 |   const pin = page.getByRole('button', { name: /Chọn Trần Gia Bảo,/ });
  23 |   const before = await pin.getAttribute('transform');
  24 |   await page.getByLabel('Sắp xếp').selectOption('price');
  25 |   expect(await pin.getAttribute('transform')).toBe(before);
  26 |   await page.getByRole('group', { name: 'Cấp độ học' }).getByLabel('THCS', { exact: true }).check();
  27 |   await expect(page.locator('.learner-split-list .tutor-card')).not.toHaveCount(0);
  28 | });
  29 | 
  30 | test('Learner post supports Mầm non and stores user-selected concrete session proposals', async ({ page }) => {
  31 |   await resetDemo(page); await login(page, 'minhanh', '/learner/post-class');
  32 |   await page.getByLabel('Khối lớp / Trình độ *').selectOption('Mầm non');
  33 |   await page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' }).click();
  34 |   await page.getByLabel('Ngày học mong muốn').fill('2026-10-08');
  35 |   await page.getByLabel('Giờ bắt đầu').fill('18:00');
  36 |   await page.getByRole('button', { name: 'Thêm buổi học' }).click();
  37 |   await page.getByRole('button', { name: 'Tiếp tục: Ngân sách & Mục tiêu' }).click();
  38 |   await page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last().click();
  39 |   await expect(page).toHaveURL(/my-classes$/);
  40 |   await expect(page.locator('.myclass-card').filter({ hasText: 'Mầm non' })).toContainText('08/10');
  41 | });
  42 | 
```