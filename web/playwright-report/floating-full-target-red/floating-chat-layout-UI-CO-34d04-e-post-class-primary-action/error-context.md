# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: floating-chat-layout.spec.js >> UI-COMP-S02 mobile chat launcher does not cover the post-class primary action
- Location: tests\e2e\floating-chat-layout.spec.js:3:1

# Error details

```
Error: Every section of the primary action should accept its own clicks, including the right edge

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
        - button "Mở menu" [ref=e11] [cursor=pointer]
    - main [ref=e13]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]: "1"
          - generic [ref=e18]:
            - generic [ref=e19]: Bước 1
            - text: Môn & Khối lớp
        - generic [ref=e20]:
          - generic [ref=e21]: "2"
          - generic [ref=e22]:
            - generic [ref=e23]: Bước 2
            - text: Địa điểm & Lịch học
        - generic [ref=e24]:
          - generic [ref=e25]: "3"
          - generic [ref=e26]:
            - generic [ref=e27]: Bước 3
            - text: Ngân sách & Mục tiêu
      - generic [ref=e29]:
        - 'heading "Bước 1: Môn học và Khối lớp" [level=2] [ref=e30]'
        - paragraph [ref=e31]: Chọn môn học và cấp độ học viên để kết nối nhanh chóng với các gia sư có chuyên môn phù hợp.
        - generic [ref=e32]:
          - generic [ref=e33]:
            - generic [ref=e34]: Môn học cần tìm gia sư *
            - textbox "Môn học cần tìm gia sư *" [ref=e37]:
              - /placeholder: "VD: Toán, Tiếng Anh, Ngữ văn..."
              - text: Toán
            - generic [ref=e38]:
              - button "Toán" [ref=e39] [cursor=pointer]
              - button "Ngữ văn" [ref=e40] [cursor=pointer]
              - button "Tiếng Anh" [ref=e41] [cursor=pointer]
              - button "Vật lý" [ref=e42] [cursor=pointer]
              - button "Hóa học" [ref=e43] [cursor=pointer]
              - button "Sinh học" [ref=e44] [cursor=pointer]
              - button "Lịch sử" [ref=e45] [cursor=pointer]
              - button "Địa lý" [ref=e46] [cursor=pointer]
          - generic [ref=e47]:
            - generic [ref=e48]: Khối lớp học viên *
            - combobox "Khối lớp học viên *" [ref=e49] [cursor=pointer]:
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
        - generic [ref=e50]:
          - link "Hủy bỏ" [ref=e51] [cursor=pointer]:
            - /url: /learner/my-classes
          - 'button "Tiếp tục: Địa điểm & Lịch học" [ref=e52] [cursor=pointer]'
    - contentinfo [ref=e55]:
      - generic [ref=e56]:
        - generic [ref=e57]:
          - link "TN TutorNearMe Gia sư gần bạn" [ref=e58] [cursor=pointer]:
            - /url: /
            - generic [ref=e59]: TN
            - generic [ref=e60]:
              - strong [ref=e61]: TutorNearMe
              - generic [ref=e62]: Gia sư gần bạn
          - paragraph [ref=e63]: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
        - generic [ref=e64]:
          - strong [ref=e65]: Người học
          - link "Dành cho người học" [ref=e66] [cursor=pointer]:
            - /url: /learner
          - link "Tìm gia sư" [ref=e67] [cursor=pointer]:
            - /url: /learner/search
          - link "Yêu cầu học" [ref=e68] [cursor=pointer]:
            - /url: /requests
        - generic [ref=e69]:
          - strong [ref=e70]: Gia sư
          - link "Trở thành gia sư" [ref=e71] [cursor=pointer]:
            - /url: /tutor
          - link "Không gian gia sư" [ref=e72] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Cơ hội dạy" [ref=e73] [cursor=pointer]:
            - /url: /tutor/requests
        - generic [ref=e74]:
          - strong [ref=e75]: Khám phá
          - link "Trang chủ" [ref=e76] [cursor=pointer]:
            - /url: /
          - link "Admin demo" [ref=e77] [cursor=pointer]:
            - /url: /admin/dashboard
      - generic [ref=e78]: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
  - complementary "Widget nhắn tin nhanh" [ref=e79]:
    - button "Mở cửa sổ trò chuyện" [ref=e80] [cursor=pointer]:
      - generic [ref=e83]: "1"
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
> 16 |   expect(usable, 'Every section of the primary action should accept its own clicks, including the right edge').toBe(true);
     |                                                                                                                ^ Error: Every section of the primary action should accept its own clicks, including the right edge
  17 | });
  18 | 
```