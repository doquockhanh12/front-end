# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-polish-completion.spec.js >> UI-COMP-S01 minhanh mobile notification panel stays inside viewport
- Location: tests\e2e\admin-polish-completion.spec.js:34:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Thông báo', exact: true })

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
          - generic [ref=e17]: TUTORNEARME · HỌC GẦN HƠN, HIỂU NHAU HƠN
          - heading [level=1] [ref=e18]:
            - text: Bạn đau đầu đểtìm gia sư tốt,
            - emphasis [ref=e19]: TutorNearMesẽ giúp bạn.
          - paragraph [ref=e20]: Tìm sinh viên gia sư theo đúng môn, khu vực, thời gian rảnh và mức phí gia đình mong muốn — tất cả trong một trải nghiệm rõ ràng, dễ so sánh.
          - generic [ref=e21]:
            - link "Tìm gia sư phù hợp" [ref=e22] [cursor=pointer]:
              - /url: "#search-controls"
            - link "Xem cách hoạt động ↘" [ref=e25] [cursor=pointer]:
              - /url: /learner#how
        - generic [ref=e26]:
          - img "Học sinh học tập cùng bạn bè" [ref=e27]
          - img "Gia sư đang hướng dẫn bài học" [ref=e28]
          - generic [ref=e29]:
            - generic [ref=e30]: Gần bạn
            - generic [ref=e31]: ưu tiên khu vực phù hợp
          - generic [ref=e32]:
            - generic [ref=e33]: 4.9/5
            - generic [ref=e34]: đánh giá demo
      - region "Tìm kiếm nhanh" [ref=e35]:
        - generic [ref=e36]:
          - generic [ref=e37]:
            - text: Tên hoặc từ khóa
            - searchbox "Tên hoặc từ khóa" [ref=e42]
          - generic [ref=e43]:
            - text: Môn học
            - combobox "Môn học" [ref=e44] [cursor=pointer]:
              - option "Tất cả môn" [selected]
              - option "Toán"
              - option "Ngữ văn"
              - option "Tiếng Anh"
              - option "Vật lý"
              - option "Hóa học"
              - option "Sinh học"
              - option "Lịch sử"
              - option "Địa lý"
              - option "Tin học"
              - option "IELTS"
              - option "TOEIC"
              - option "Lập trình Python"
              - option "Giáo dục Kinh tế & Pháp luật"
              - option "Tiếng Trung"
              - option "Tiếng Nhật"
              - option "SAT"
              - option "Cấu trúc dữ liệu và giải thuật"
              - option "Khác"
          - generic [ref=e45]:
            - text: Khu vực
            - combobox "Khu vực" [ref=e46] [cursor=pointer]:
              - option "Tất cả khu vực" [selected]
              - option "Quận 1"
              - option "Quận 3"
              - option "Quận 5"
              - option "Quận 7"
              - option "Quận 10"
              - option "Bình Thạnh"
              - option "Phú Nhuận"
              - option "Thủ Đức"
              - option "Cầu Giấy"
              - option "Đống Đa"
          - generic [ref=e47]:
            - text: Thời gian rảnh
            - combobox "Thời gian rảnh" [ref=e48] [cursor=pointer]:
              - option "Mọi khung giờ" [selected]
              - option "Buổi sáng"
              - option "Buổi chiều"
              - option "Buổi tối"
              - option "Cuối tuần"
          - generic [ref=e49]:
            - text: Mức phí
            - combobox "Mức phí" [ref=e50] [cursor=pointer]:
              - option "Mọi mức phí" [selected]
              - option "Đến 160.000đ"
              - option "Đến 180.000đ"
              - option "Đến 200.000đ"
          - button "Tìm gia sư" [ref=e51] [cursor=pointer]
      - generic [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]:
            - text: KHÁM PHÁ GIA SƯ
            - heading "Một lựa chọn tốt bắt đầu từ sự phù hợp" [level=2] [ref=e58]
          - paragraph [ref=e59]: Lọc theo điều quan trọng với bạn, rồi so sánh trong một góc nhìn rõ ràng.
        - generic [ref=e60]:
          - region "Kết quả tìm gia sư" [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e63]:
                - strong [ref=e64]: 6 gia sư phù hợp
                - text: tại TP. Hồ Chí Minh
              - generic [ref=e65]:
                - group "Chế độ hiển thị" [ref=e66]:
                  - button "Danh sách" [pressed] [ref=e67] [cursor=pointer]
                  - button "Bản đồ chia đôi" [ref=e71] [cursor=pointer]
                - button "Bộ lọc" [ref=e74] [cursor=pointer]
                - generic [ref=e76]: Sắp xếp
                - combobox "Sắp xếp" [ref=e77] [cursor=pointer]:
                  - option "Đề xuất" [selected]
                  - option "Đánh giá cao"
                  - option "Học phí thấp"
            - generic [ref=e78]:
              - article [ref=e79]:
                - generic [ref=e80]:
                  - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=e81]:
                    - generic [aria-hidden] [ref=e82]: MA
                  - generic [ref=e83]:
                    - generic [ref=e84]: Gia sư nổi bật
                    - heading "Nguyễn Mai Anh" [level=3] [ref=e85]
                    - paragraph [ref=e86]: ĐH Khoa học Tự nhiên
                  - button "Lưu Nguyễn Mai Anh" [ref=e87] [cursor=pointer]
                - generic [ref=e90]:
                  - generic [ref=e91]:
                    - strong [ref=e94]: "4.9"
                    - generic [ref=e95]: (48 đánh giá)
                  - generic [ref=e96]: Đã xác minh
                - paragraph [ref=e100]: Giúp học sinh xây nền tảng vững chắc qua cách giải thích gần gũi và lộ trình học rõ ràng.
                - generic "Môn dạy" [ref=e101]:
                  - generic [ref=e102]: Toán
                  - generic [ref=e103]: Vật lý
                - generic [ref=e104]:
                  - generic [ref=e105]: Bình Thạnh
                  - generic [ref=e109]: 17:00–21:00 · 09:00–12:00
                - generic [ref=e113]:
                  - generic [ref=e114]:
                    - strong [ref=e115]: 180.000đ
                    - generic [ref=e116]: / buổi
                  - link "Xem hồ sơ" [ref=e117] [cursor=pointer]:
                    - /url: /tutors/mai-anh
              - article [ref=e121]:
                - generic [ref=e122]:
                  - img "Ảnh đại diện của Trần Gia Bảo" [ref=e123]:
                    - generic [aria-hidden] [ref=e124]: GB
                  - generic [ref=e125]:
                    - heading "Trần Gia Bảo" [level=3] [ref=e126]
                    - paragraph [ref=e127]: ĐH Ngoại thương
                  - button "Lưu Trần Gia Bảo" [ref=e128] [cursor=pointer]
                - generic [ref=e131]:
                  - generic [ref=e132]:
                    - strong [ref=e135]: "4.9"
                    - generic [ref=e136]: (36 đánh giá)
                  - generic [ref=e137]: Đã xác minh
                - generic "Môn dạy" [ref=e141]:
                  - generic [ref=e142]: Tiếng Anh
                  - generic [ref=e143]: IELTS
                - generic [ref=e144]:
                  - generic [ref=e145]: Thủ Đức
                  - generic [ref=e149]: 18:00–21:00 · 09:00–12:00
                - generic [ref=e153]:
                  - generic [ref=e154]:
                    - strong [ref=e155]: 220.000đ
                    - generic [ref=e156]: / buổi
                  - link "Xem hồ sơ" [ref=e157] [cursor=pointer]:
                    - /url: /tutors/quoc-bao
              - article [ref=e161]:
                - generic [ref=e162]:
                  - img "Ảnh đại diện của Phạm Hà Linh" [ref=e163]:
                    - generic [aria-hidden] [ref=e164]: HL
                  - generic [ref=e165]:
                    - heading "Phạm Hà Linh" [level=3] [ref=e166]
                    - paragraph [ref=e167]: ĐH Sư phạm TP.HCM
                  - button "Lưu Phạm Hà Linh" [ref=e168] [cursor=pointer]
                - generic [ref=e171]:
                  - generic [ref=e172]:
                    - strong [ref=e175]: "4.8"
                    - generic [ref=e176]: (29 đánh giá)
                  - generic [ref=e177]: Đã xác minh
                - generic "Môn dạy" [ref=e181]:
                  - generic [ref=e182]: Ngữ văn
                  - generic [ref=e183]: Tiếng Anh
                - generic [ref=e184]:
                  - generic [ref=e185]: Quận 3
                  - generic [ref=e189]: 13:00–17:00 · 09:00–12:00
                - generic [ref=e193]:
                  - generic [ref=e194]:
                    - strong [ref=e195]: 160.000đ
                    - generic [ref=e196]: / buổi
                  - link "Xem hồ sơ" [ref=e197] [cursor=pointer]:
                    - /url: /tutors/ha-linh
              - article [ref=e201]:
                - generic [ref=e202]:
                  - img "Ảnh đại diện của Lê Đức Minh" [ref=e203]:
                    - generic [aria-hidden] [ref=e204]: ĐM
                  - generic [ref=e205]:
                    - heading "Lê Đức Minh" [level=3] [ref=e206]
                    - paragraph [ref=e207]: ĐH Bách khoa TP.HCM
                  - button "Lưu Lê Đức Minh" [ref=e208] [cursor=pointer]
                - generic [ref=e211]:
                  - generic [ref=e212]:
                    - strong [ref=e215]: "4.8"
                    - generic [ref=e216]: (31 đánh giá)
                  - generic [ref=e217]: Đã xác minh
                - generic "Môn dạy" [ref=e221]:
                  - generic [ref=e222]: Toán
                  - generic [ref=e223]: Hóa học
                - generic [ref=e224]:
                  - generic [ref=e225]: Phú Nhuận
                  - generic [ref=e229]: 17:00–21:00 · 13:00–17:00
                - generic [ref=e233]:
                  - generic [ref=e234]:
                    - strong [ref=e235]: 170.000đ
                    - generic [ref=e236]: / buổi
                  - link "Xem hồ sơ" [ref=e237] [cursor=pointer]:
                    - /url: /tutors/duc-minh
              - article [ref=e241]:
                - generic [ref=e242]:
                  - img "Ảnh đại diện của Võ Thu Trang" [ref=e243]:
                    - generic [aria-hidden] [ref=e244]: TT
                  - generic [ref=e245]:
                    - heading "Võ Thu Trang" [level=3] [ref=e246]
                    - paragraph [ref=e247]: ĐH Sư phạm TP.HCM
                  - button "Lưu Võ Thu Trang" [ref=e248] [cursor=pointer]
                - generic [ref=e251]:
                  - generic [ref=e252]:
                    - strong [ref=e255]: "4.7"
                    - generic [ref=e256]: (22 đánh giá)
                  - generic [ref=e257]: Đã xác minh
                - generic "Môn dạy" [ref=e261]:
                  - generic [ref=e262]: Tiếng Anh
                  - generic [ref=e263]: Ngữ văn
                - generic [ref=e264]:
                  - generic [ref=e265]: Bình Thạnh
                  - generic [ref=e269]: 08:00–12:00
                - generic [ref=e273]:
                  - generic [ref=e274]:
                    - strong [ref=e275]: 190.000đ
                    - generic [ref=e276]: / buổi
                  - link "Xem hồ sơ" [ref=e277] [cursor=pointer]:
                    - /url: /tutors/thu-trang
              - article [ref=e281]:
                - generic [ref=e282]:
                  - img "Ảnh đại diện của Đặng Gia Huy" [ref=e283]:
                    - generic [aria-hidden] [ref=e284]: GH
                  - generic [ref=e285]:
                    - heading "Đặng Gia Huy" [level=3] [ref=e286]
                    - paragraph [ref=e287]: ĐH Khoa học Tự nhiên
                  - button "Lưu Đặng Gia Huy" [ref=e288] [cursor=pointer]
                - generic [ref=e292]:
                  - strong [ref=e295]: "4.7"
                  - generic [ref=e296]: (18 đánh giá)
                - generic "Môn dạy" [ref=e297]:
                  - generic [ref=e298]: Vật lý
                  - generic [ref=e299]: Toán
                - generic [ref=e300]:
                  - generic [ref=e301]: Thủ Đức
                  - generic [ref=e305]: 19:00–21:00
                - generic [ref=e309]:
                  - generic [ref=e310]:
                    - strong [ref=e311]: 150.000đ
                    - generic [ref=e312]: / buổi
                  - link "Xem hồ sơ" [ref=e313] [cursor=pointer]:
                    - /url: /tutors/gia-huy
          - complementary "Thông tin hỗ trợ" [ref=e317]:
            - link [ref=e318] [cursor=pointer]:
              - /url: /learner/map
              - text: KHÁM PHÁ KHU VỰC
              - heading "Bản đồ gia sư gần bạn" [level=3] [ref=e319]
              - img "Bản đồ minh họa khu vực gia sư" [ref=e320]:
                - generic [ref=e324]:
                  - generic [ref=e325]: PHÚ NHUẬN
                  - generic [ref=e326]: BÌNH THẠNH
                  - generic [ref=e327]: THỦ ĐỨC
                  - generic [ref=e328]: QUẬN 3
                - generic [ref=e329]: MA
                - generic [ref=e331]: GB
                - generic [ref=e333]: HL
                - generic [ref=e335]: ĐM
                - generic [ref=e337]: TT
                - generic [ref=e339]: GH
                - generic [ref=e341]: TV
                - generic [ref=e343]: HP
                - generic [ref=e345]: MC
                - generic [ref=e347]: TA
                - generic [ref=e349]: QH
              - paragraph [ref=e351]: Xem khu vực và khoảng cách giữa các gia sư.
              - generic [ref=e352]: Mở bản đồ
            - generic [ref=e355]:
              - text: BẮT ĐẦU ĐƠN GIẢN
              - heading "Ba bước để bắt đầu" [level=3] [ref=e356]
              - list [ref=e357]:
                - listitem [ref=e358]:
                  - generic [ref=e359]: "01"
                  - text: Chọn môn và khu vực
                - listitem [ref=e360]:
                  - generic [ref=e361]: "02"
                  - text: So sánh hồ sơ gia sư
                - listitem [ref=e362]:
                  - generic [ref=e363]: "03"
                  - text: Gửi yêu cầu học phù hợp
            - paragraph [ref=e368]:
              - strong [ref=e369]: Thông tin minh bạch
              - text: Bạn luôn thấy mức phí và lịch rảnh trước khi quyết định.
    - contentinfo [ref=e370]:
      - generic [ref=e371]:
        - link "TutorNearMe — trang chủ" [ref=e372] [cursor=pointer]:
          - /url: /
          - generic [aria-hidden] [ref=e373]: TN
          - generic [ref=e374]: TutorNearMe
        - paragraph [ref=e375]: Kết nối đúng người. Học theo cách của bạn.
        - generic [ref=e376]: Giao diện mẫu · TutorNearMe
  - complementary "Widget nhắn tin nhanh" [ref=e377]:
    - button "Mở cửa sổ trò chuyện" [ref=e378] [cursor=pointer]:
      - generic [ref=e381]: "1"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login } from './demoHelpers.js';
  3  | test('UI-COMP-A13 mobile appeal empty state is readable without scrolling a blank table', async ({ page }) => {
  4  |   await resetDemo(page);
  5  |   await page.setViewportSize({ width: 390, height: 900 });
  6  |   await login(page, 'admin', '/admin/appeals');
  7  |   const message = page.getByText('Chưa có kháng cáo. Hồ sơ người dùng gửi sẽ xuất hiện tại đây.', { exact: true });
  8  |   await expect(message).toBeVisible();
  9  |   const bounds = await message.boundingBox();
  10 |   expect(bounds.x).toBeGreaterThanOrEqual(0);
  11 |   expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
  12 | });
  13 | test('MASTER Admin notification opens a private actionable message', async ({ page }) => {
  14 |   await resetDemo(page);
  15 |   await login(page, 'admin', '/admin/dashboard');
  16 |   await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  17 |   await expect(page.getByRole('region', { name: 'Thông báo của bạn' })).toBeVisible();
  18 | });
  19 | 
  20 | test('UI-COMP-A14 warning feedback uses saved suspension threshold', async ({ page }) => {
  21 |   await resetDemo(page);
  22 |   await login(page, 'admin', '/admin/settings');
  23 |   await page.locator('main input[type=number]').last().fill('1');
  24 |   await page.getByRole('button', { name: 'Lưu cấu hình hệ thống' }).click();
  25 |   await page.goto('/admin/issues');
  26 |   await page.locator('tbody tr').filter({ hasText: 'ISSUE-104' }).getByRole('button', { name: /Xử lý sự cố/ }).click();
  27 |   await page.locator('#warning-reason-input').fill('Cảnh cáo căn cứ đối chiếu sự cố và cấu hình được quản trị viên phê duyệt.');
  28 |   await page.getByRole('button', { name: /Gửi cảnh cáo & Giải quyết sự cố/ }).click();
  29 |   await expect(page.getByRole('status')).toContainText('TỰ ĐỘNG BỊ KHÓA');
  30 |   await expect(page.getByRole('status')).toContainText('vượt quá 1 lần');
  31 | });
  32 | 
  33 | for (const [username, route] of [['admin', '/admin/dashboard'], ['giabao', '/tutor/dashboard'], ['minhanh', '/learner/search']]) {
  34 |   test(`UI-COMP-S01 ${username} mobile notification panel stays inside viewport`, async ({ page }) => {
  35 |     await resetDemo(page);
  36 |     await page.setViewportSize({ width: 390, height: 900 });
  37 |     await login(page, username, route);
> 38 |     await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
     |                                                                        ^ Error: locator.click: Test timeout of 60000ms exceeded.
  39 |     const panel = page.getByRole('region', { name: 'Thông báo của bạn' });
  40 |     await expect(panel).toBeVisible();
  41 |     const bounds = await panel.boundingBox();
  42 |     expect(bounds.x).toBeGreaterThanOrEqual(0);
  43 |     expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
  44 |   });
  45 | }
  46 | 
```