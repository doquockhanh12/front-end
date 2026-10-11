# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tutor-class-report.spec.js >> TUTOR-SAFETY suspicious class report persists once and reaches Admin with its reason
- Location: tests\e2e\tutor-class-report.spec.js:5:1

# Error details

```
Test timeout of 10000ms exceeded.
```

```
Error: locator.click: Test timeout of 10000ms exceeded.
Call log:
  - waiting for locator('.tutor-find__class').filter({ hasText: 'Mã #post-101' }).getByRole('button', { name: 'Báo cáo tin đáng ngờ', exact: true })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - complementary "Điều hướng gia sư" [ref=e4]:
      - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn." [ref=e6] [cursor=pointer]:
        - /url: /
        - strong [ref=e7]: TutorNearMe
        - generic [ref=e8]: Gia sư gần bạn. Tri thức gần hơn.
      - navigation "Các mục của gia sư" [ref=e9]:
        - link "Tổng quan" [ref=e10] [cursor=pointer]:
          - /url: /tutor/dashboard
        - link "Yêu cầu học 6" [ref=e17] [cursor=pointer]:
          - /url: /tutor/requests
          - generic [ref=e21]: Yêu cầu học
          - generic [ref=e22]: "6"
        - link "Lịch dạy học" [ref=e23] [cursor=pointer]:
          - /url: /tutor/timetable
        - link "Tìm học viên mới" [ref=e27] [cursor=pointer]:
          - /url: /tutor/find-students
        - link "Ví & Thu nhập" [ref=e34] [cursor=pointer]:
          - /url: /tutor/wallet
        - link "Thu nhập" [ref=e39] [cursor=pointer]:
          - /url: /tutor/income
        - link "Hồ sơ gia sư" [ref=e44] [cursor=pointer]:
          - /url: /tutor/profile
        - link "Tin nhắn" [ref=e49] [cursor=pointer]:
          - /url: /messages
        - link "Kháng cáo" [ref=e53] [cursor=pointer]:
          - /url: /appeals
        - link "Trung tâm Trợ giúp" [ref=e59] [cursor=pointer]:
          - /url: /help
    - generic [ref=e64]:
      - banner [ref=e65]:
        - navigation "Điều hướng nhanh" [ref=e66]:
          - link "Tìm lớp gần tôi" [ref=e67] [cursor=pointer]:
            - /url: /tutor/map
          - link "Tổng Quan" [ref=e71] [cursor=pointer]:
            - /url: /tutor/dashboard
        - generic [ref=e77]:
          - button "Thông báo" [ref=e79] [cursor=pointer]:
            - generic [ref=e83]: "1"
          - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=e84] [cursor=pointer]:
            - /url: /tutor/profile
            - img "Ảnh đại diện của Trần Gia Bảo" [ref=e85]:
              - generic [aria-hidden] [ref=e86]: GB
            - generic [ref=e87]: giabao
          - button "Đăng xuất" [ref=e88] [cursor=pointer]
      - main [ref=e92]:
        - generic [ref=e94]:
          - text: KHÔNG GIAN GIA SƯ · DEMO
          - heading "Tìm học viên & Nhận lớp mới" [level=1] [ref=e95]
          - paragraph [ref=e96]: Bảng tin tìm gia sư trực tiếp từ học viên và phụ huynh. Ứng tuyển minh bạch, nhận lớp an toàn.
        - alert [ref=e97]:
          - generic [ref=e100]:
            - strong [ref=e101]: "CẢNH BÁO AN TOÀN: Không chuyển tiền nhận lớp hoặc giữ chỗ ngoài ứng dụng. Kiểm tra và báo cáo yêu cầu đáng ngờ."
            - paragraph [ref=e102]: Tất cả giao dịch học phí và phí sàn (10% hoặc 7% cho Top-Rated) được giải ngân minh bạch qua ví số sau khi buổi học hoàn thành. Không thanh toán bất kỳ khoản tiền nào trước khi dạy.
        - tablist [ref=e103]:
          - tab "Bảng tin Lớp học Mới (3)" [selected] [ref=e104] [cursor=pointer]
          - tab "Đơn ứng tuyển của tôi (1)" [ref=e105] [cursor=pointer]
        - generic [ref=e106]:
          - complementary "Bộ lọc tìm lớp" [ref=e107]:
            - generic [ref=e108]:
              - heading "Bộ lọc tìm lớp" [level=2] [ref=e109]
              - button "Đặt lại" [ref=e111] [cursor=pointer]
            - group "Điều kiện tìm lớp" [ref=e112]:
              - group "Môn học Có thể chọn nhiều" [ref=e114]:
                - generic [ref=e115]:
                  - text: Môn học
                  - generic [ref=e116]: Có thể chọn nhiều
                - generic [ref=e117] [cursor=pointer]:
                  - checkbox "Toán" [ref=e118]
                  - generic [ref=e119]: Toán
                - generic [ref=e120] [cursor=pointer]:
                  - checkbox "Tiếng Anh" [ref=e121]
                  - generic [ref=e122]: Tiếng Anh
                - generic [ref=e123] [cursor=pointer]:
                  - checkbox "Vật lý" [ref=e124]
                  - generic [ref=e125]: Vật lý
              - group "Khu vực Có thể chọn nhiều" [ref=e126]:
                - generic [ref=e127]:
                  - text: Khu vực
                  - generic [ref=e128]: Có thể chọn nhiều
                - generic [ref=e129] [cursor=pointer]:
                  - checkbox "Bình Thạnh, TP. Hồ Chí Minh" [ref=e130]
                  - generic [ref=e131]: Bình Thạnh, TP. Hồ Chí Minh
                - generic [ref=e132] [cursor=pointer]:
                  - checkbox "Toàn quốc (Online)" [ref=e133]
                  - generic [ref=e134]: Toàn quốc (Online)
                - generic [ref=e135] [cursor=pointer]:
                  - checkbox "Quận 3, TP. Hồ Chí Minh" [ref=e136]
                  - generic [ref=e137]: Quận 3, TP. Hồ Chí Minh
              - group "Khoảng học phí VNĐ / buổi" [ref=e138]:
                - generic [ref=e139]:
                  - text: Khoảng học phí
                  - generic [ref=e140]: VNĐ / buổi
                - generic [ref=e141]:
                  - status "Học phí từ" [ref=e142]: 0đ
                  - generic [ref=e143]: –
                  - status "Học phí đến" [ref=e144]: 500.000đ
                - generic [ref=e145]:
                  - slider "Học phí tối thiểu": "0"
                  - slider "Học phí tối đa": "500000"
                - generic [ref=e147]:
                  - generic [ref=e148]: 0đ
                  - generic [ref=e149]: 500.000đ
            - generic [ref=e150]:
              - strong [ref=e151]: "Mẹo nhận lớp:"
              - text: Giới thiệu phương pháp dạy rõ ràng và mức học phí phù hợp để phụ huynh so sánh.
          - region "Danh sách lớp học mở" [ref=e152]:
            - generic [ref=e154]:
              - text: BẢNG TIN THỊ TRƯỜNG
              - heading "3 lớp đang tìm gia sư" [level=2] [ref=e155]
            - paragraph [ref=e156]: Các lớp học được đăng tải trực tiếp bởi phụ huynh và học viên. Bạn có thể tự do đề xuất mức học phí phù hợp.
            - generic [ref=e157]:
              - article [ref=e158]:
                - generic [ref=e159]:
                  - generic [ref=e160]:
                    - generic [ref=e161]: Toán – Lớp 8
                    - 'heading "Học viên: Nguyễn Minh Anh · Mã #post-101" [level=3] [ref=e164]'
                  - generic [ref=e165]: "Cố định: 220.000đ / buổi"
                - paragraph [ref=e167]: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
                - generic [ref=e168]:
                  - generic [ref=e169]: Bình Thạnh, TP. Hồ Chí Minh (Tại nhà)
                  - generic [ref=e173]: Thứ 3 và Thứ 5 (18:30 - 20:00)
                  - generic [ref=e176]: Chưa có khoảng cách được xác nhận
                  - generic [ref=e177]: Yêu cầu học thử 45 phút
                  - generic [ref=e178]: 2 đã ứng tuyển
                - generic [ref=e184]:
                  - generic [ref=e185]: "Đăng lúc: Thứ 7, 03/10"
                  - generic [ref=e186]: Đã nộp đơn ứng tuyển
              - article [ref=e189]:
                - generic [ref=e190]:
                  - generic [ref=e191]:
                    - generic [ref=e192]: Tiếng Anh – Lớp 9
                    - 'heading "Học viên: Trần Thu Hà · Mã #post-102" [level=3] [ref=e195]'
                  - generic [ref=e196]: "Khoảng giá: 220.000đ – 280.000đ / buổi"
                - paragraph [ref=e198]: Luyện đề thi tuyển sinh vào lớp 10 chuyên Anh
                - generic [ref=e199]:
                  - generic [ref=e200]: Toàn quốc (Online) (Online)
                  - generic [ref=e204]: Thứ 2, Thứ 4, Thứ 6 (19:30 - 21:00)
                  - generic [ref=e207]: 1 đã ứng tuyển
                - generic [ref=e213]:
                  - generic [ref=e214]: "Đăng lúc: CN, 04/10"
                  - button "Ứng tuyển nhận lớp" [ref=e215] [cursor=pointer]
              - article [ref=e216]:
                - generic [ref=e217]:
                  - generic [ref=e218]:
                    - generic [ref=e219]: Vật lý – Lớp 11
                    - 'heading "Học viên: Lê Hoàng Nam · Mã #post-103" [level=3] [ref=e222]'
                  - generic [ref=e223]: Thương lượng với gia sư
                - paragraph [ref=e225]: Nắm vững kiến thức điện xoay chiều và dao động điều hòa
                - generic [ref=e226]:
                  - generic [ref=e227]: Quận 3, TP. Hồ Chí Minh (Tại nhà)
                  - generic [ref=e231]: Thứ 7 & Chủ nhật (09:00 - 10:30)
                  - generic [ref=e234]: Chưa có khoảng cách được xác nhận
                  - generic [ref=e235]: Yêu cầu học thử 45 phút
                  - generic [ref=e236]: 0 đã ứng tuyển
                - generic [ref=e242]:
                  - generic [ref=e243]: "Đăng lúc: Thứ 2, 05/10"
                  - button "Ứng tuyển nhận lớp" [ref=e244] [cursor=pointer]
  - complementary "Widget nhắn tin nhanh" [ref=e245]:
    - button "Mở cửa sổ trò chuyện" [ref=e246] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
  3  | import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';
  4  | 
  5  | test('TUTOR-SAFETY suspicious class report persists once and reaches Admin with its reason', async ({ page }) => {
  6  |   const state = createDemoState(fixedTime);
  7  |   const post = state.classPosts.find(item => item.status === 'open' && item.moderationStatus === 'approved');
  8  |   const reason = 'Tin đăng yêu cầu chuyển phí giữ chỗ ngoài ứng dụng. Đề nghị kiểm tra.';
  9  |   await resetDemo(page, { state });
  10 |   await login(page, 'giabao', '/tutor/find-students');
  11 |   const card = page.locator('.tutor-find__class').filter({ hasText: `Mã #${post.id}` });
  12 |   const trigger = card.getByRole('button', { name: 'Báo cáo tin đáng ngờ', exact: true });
> 13 |   await trigger.click();
     |                 ^ Error: locator.click: Test timeout of 10000ms exceeded.
  14 |   const dialog = page.getByRole('dialog', { name: 'Báo cáo tin lớp đáng ngờ' });
  15 |   expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
  16 |   await page.keyboard.press('Escape');
  17 |   await expect(dialog).toHaveCount(0);
  18 |   await expect(trigger).toBeFocused();
  19 |   await trigger.click();
  20 |   await dialog.getByRole('button', { name: 'Gửi báo cáo demo', exact: true }).click();
  21 |   await expect(dialog.getByRole('alert')).toContainText('Vui lòng');
  22 |   await dialog.getByLabel('Lý do báo cáo *').fill(reason);
  23 |   await dialog.getByRole('button', { name: 'Gửi báo cáo demo', exact: true }).click();
  24 |   await expect(dialog).toHaveCount(0);
  25 |   await expect(page.getByRole('status')).toContainText('Đã gửi báo cáo');
  26 |   await expect(card.getByRole('button', { name: 'Đã gửi báo cáo', exact: true })).toBeDisabled();
  27 |   await page.reload();
  28 |   await expect(card.getByRole('button', { name: 'Đã gửi báo cáo', exact: true })).toBeDisabled();
  29 |   const after = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);
  30 |   const reports = after.issues.filter(issue => issue.relatedClassPostId === post.id && issue.reporterId === 'demo-tutor');
  31 |   expect(reports).toHaveLength(1);
  32 |   expect(reports[0].description).toContain(reason);
  33 |   await logout(page);
  34 |   await login(page, 'admin', '/admin/issues');
  35 |   await page.getByRole('searchbox', { name: 'Tìm kiếm sự cố' }).fill(reports[0].id);
  36 |   await page.getByRole('button', { name: `Xử lý sự cố ${reports[0].id}` }).click();
  37 |   await expect(page.getByRole('dialog')).toContainText(reason);
  38 |   await expect(page.getByRole('dialog')).toContainText('Trần Gia Bảo');
  39 | });
  40 | 
  41 | for (const width of [1440, 1024, 390]) {
  42 |   test(`TUTOR-SAFETY report dialog is usable at ${width}px`, async ({ page }) => {
  43 |     const errors = [];
  44 |     page.on('pageerror', error => errors.push(String(error)));
  45 |     await page.setViewportSize({ width, height: 900 });
  46 |     await resetDemo(page);
  47 |     await login(page, 'giabao', '/tutor/find-students');
  48 |     await page.getByRole('button', { name: 'Báo cáo tin đáng ngờ', exact: true }).first().click();
  49 |     const dialog = page.getByRole('dialog', { name: 'Báo cáo tin lớp đáng ngờ' });
  50 |     const bounds = await dialog.boundingBox();
  51 |     expect(bounds.x).toBeGreaterThanOrEqual(0);
  52 |     expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
  53 |     const title = await dialog.getByRole('heading', { level: 2 }).boundingBox();
  54 |     const close = await dialog.getByRole('button', { name: 'Đóng báo cáo' }).boundingBox();
  55 |     expect(title.x + title.width).toBeLessThanOrEqual(close.x);
  56 |     await expect(dialog.getByLabel('Lý do báo cáo *')).toBeVisible();
  57 |     await expect(dialog.getByRole('button', { name: 'Gửi báo cáo demo' })).toBeVisible();
  58 |     await page.screenshot({ path: `playwright-report/completion-tutor/report/${width}-report-dialog.png` });
  59 |     await page.keyboard.press('Escape');
  60 |     expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  61 |     expect(errors).toEqual([]);
  62 |   });
  63 | }
  64 | 
```