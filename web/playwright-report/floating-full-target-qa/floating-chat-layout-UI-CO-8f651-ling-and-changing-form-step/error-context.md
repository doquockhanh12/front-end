# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: floating-chat-layout.spec.js >> UI-COMP-S02 mobile chat launcher avoids controls after scrolling and changing form step
- Location: tests\e2e\floating-chat-layout.spec.js:19:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Bước 3: Ngân sách và Mục tiêu' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Bước 3: Ngân sách và Mục tiêu' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Bước 3: Ngân sách và Mục tiêu' })

```

```yaml
- banner:
  - link "TutorNearMe — trang chủ":
    - /url: /
    - text: TN
    - strong: TutorNearMe
    - text: Gia sư gần bạn
  - button "Mở menu"
- main:
  - text: ✓ Bước 1 Môn & Khối lớp ✓ Bước 2 Địa điểm & Lịch học 3 Bước 3 Ngân sách & Mục tiêu
  - 'heading "Bước 3: Ngân sách & Mục tiêu học tập" [level=2]'
  - paragraph: Linh hoạt thiết lập mức học phí phù hợp với ngân sách của gia đình và nêu rõ mục tiêu đào tạo.
  - text: Chế độ định giá học phí *
  - button "1. Giá cố định Mức phí chính xác/buổi"
  - button "2. Khoảng giá Từ min đến max"
  - button "3. Giá tối đa Ngân sách trần"
  - button "4. Thương lượng Thỏa thuận trực tiếp"
  - text: "Nhập số tiền học phí mong muốn (VNĐ / buổi học):"
  - spinbutton "Nhập số tiền học phí mong muốn (VNĐ / buổi học):": "250000"
  - text: đ / buổi
  - button "150.000 đ"
  - button "200.000 đ"
  - button "250.000 đ"
  - button "300.000 đ"
  - button "350.000 đ"
  - checkbox "Cho phép gia sư thương lượng/thỏa thuận học phí nếu có năng lực vượt trội"
  - text: Cho phép gia sư thương lượng/thỏa thuận học phí nếu có năng lực vượt trội Mục tiêu học tập & Ghi chú cho gia sư *
  - textbox "Mục tiêu học tập & Ghi chú cho gia sư *":
    - /placeholder: "VD: Học viên bị mất gốc phần đại số, cần gia sư kiên nhẫn giảng chậm, ôn thi giữa kỳ và rèn phản xạ làm đề..."
    - text: Lấy lại căn bản hình học không gian, nâng cao tư duy giải bài tập và chuẩn bị kiểm tra giữa kỳ.
  - checkbox [checked]
  - text: 🎯 Yêu cầu 1 buổi học thử (30-45 phút) Gia sư nhận lớp sẽ thực hiện 1 buổi học thử ngắn để đánh giá độ tương thích về phương pháp trước khi hai bên ký hợp đồng học chính thức.
  - button "Quay lại Bước 2"
  - button "Đăng tin tìm gia sư ngay"
- contentinfo:
  - link "TN TutorNearMe Gia sư gần bạn":
    - /url: /
    - text: TN
    - strong: TutorNearMe
    - text: Gia sư gần bạn
  - paragraph: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
  - strong: Người học
  - link "Dành cho người học":
    - /url: /learner
  - link "Tìm gia sư":
    - /url: /learner/search
  - link "Yêu cầu học":
    - /url: /requests
  - strong: Gia sư
  - link "Trở thành gia sư":
    - /url: /tutor
  - link "Không gian gia sư":
    - /url: /tutor/dashboard
  - link "Cơ hội dạy":
    - /url: /tutor/requests
  - strong: Khám phá
  - link "Trang chủ":
    - /url: /
  - link "Admin demo":
    - /url: /admin/dashboard
  - text: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện": "1"
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
> 36 |   await expect(page.getByRole('heading', { name: 'Bước 3: Ngân sách và Mục tiêu' })).toBeVisible();
     |                                                                                      ^ Error: expect(locator).toBeVisible() failed
  37 | });
  38 | 
```