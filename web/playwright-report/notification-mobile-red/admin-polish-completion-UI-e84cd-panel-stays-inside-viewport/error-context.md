# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-polish-completion.spec.js >> UI-COMP-S01 giabao mobile notification panel stays inside viewport
- Location: tests\e2e\admin-polish-completion.spec.js:34:3

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 0
Received:    -121.0625
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
          - generic [ref=e84]:
            - button "Thông báo" [expanded] [active] [ref=e85] [cursor=pointer]:
              - generic [ref=e89]: "1"
            - region "Thông báo của bạn" [ref=e90]:
              - generic [ref=e91]:
                - generic [ref=e92]:
                  - text: Thông báo
                  - generic [ref=e93]: (1)
                - button "Đã đọc tất cả" [ref=e94] [cursor=pointer]
              - generic [ref=e104] [cursor=pointer]:
                - generic [ref=e105]: Lớp học mới gần bạn!
                - generic [ref=e106]: Có phụ huynh vừa đăng tin tìm gia sư Tiếng Anh lớp 9 tại Quận Bình Thạnh.
                - generic [ref=e107]: 17:00 · 4/10/2026
          - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=e109] [cursor=pointer]:
            - /url: /tutor/profile
            - img "Ảnh đại diện của Trần Gia Bảo" [ref=e110]:
              - generic [aria-hidden] [ref=e111]: GB
            - generic [ref=e112]: giabao
          - button "Đăng xuất" [ref=e113] [cursor=pointer]
      - main [ref=e117]:
        - generic [ref=e118]:
          - generic [ref=e119]:
            - heading "Xin chào, Trần Gia Bảo" [level=1] [ref=e120]
            - paragraph [ref=e126]: Cùng tiếp tục tạo ra tác động tích cực qua từng buổi học.
          - region "Checklist hồ sơ gia sư" [ref=e127]:
            - generic [ref=e128]:
              - heading "Hoàn thiện hồ sơ giảng dạy" [level=2] [ref=e129]
              - strong [ref=e130]: 5/6 bước · 83%
            - progressbar "Tiến độ hoàn thiện hồ sơ" [ref=e131]
            - list [ref=e132]:
              - listitem [ref=e133]:
                - link "Thông tin cá nhân Đã có" [ref=e134] [cursor=pointer]:
                  - /url: /tutor/profile
                  - generic [ref=e138]: Thông tin cá nhân
                  - generic [ref=e139]: Đã có
              - listitem [ref=e140]:
                - link "Môn có thể dạy Đã có" [ref=e141] [cursor=pointer]:
                  - /url: /tutor/profile
                  - generic [ref=e145]: Môn có thể dạy
                  - generic [ref=e146]: Đã có
              - listitem [ref=e147]:
                - link "Cấp độ giảng dạy Đã có" [ref=e148] [cursor=pointer]:
                  - /url: /tutor/profile
                  - generic [ref=e152]: Cấp độ giảng dạy
                  - generic [ref=e153]: Đã có
              - listitem [ref=e154]:
                - link "Học phí mỗi buổi Đã có" [ref=e155] [cursor=pointer]:
                  - /url: /tutor/profile
                  - generic [ref=e159]: Học phí mỗi buổi
                  - generic [ref=e160]: Đã có
              - listitem [ref=e161]:
                - link "Đăng ký lịch rảnh Đã có" [ref=e162] [cursor=pointer]:
                  - /url: /tutor/timetable
                  - generic [ref=e166]: Đăng ký lịch rảnh
                  - generic [ref=e167]: Đã có
              - listitem [ref=e168]:
                - link "Hai mặt thẻ sinh viên Cần bổ sung" [ref=e169] [cursor=pointer]:
                  - /url: /tutor/profile
                  - generic [ref=e172]: Hai mặt thẻ sinh viên
                  - generic [ref=e173]: Cần bổ sung
            - paragraph [ref=e174]: Bạn có thể bổ sung từng mục. Tải thẻ không tự cấp tích xanh; Admin cần xét duyệt hồ sơ demo.
          - generic "Chỉ số tổng quan" [ref=e175]:
            - generic [ref=e176]:
              - generic [ref=e177]: Yêu cầu học mới
              - strong [ref=e178]: "6"
              - generic [ref=e179]: ↑ +6
              - link "Xem chi tiết" [ref=e180] [cursor=pointer]:
                - /url: "#requests-title"
            - generic [ref=e183]:
              - generic [ref=e184]: Lịch dạy tuần này
              - strong [ref=e185]: "5"
              - generic [ref=e186]: ↑ +2
              - link "Xem chi tiết" [ref=e187] [cursor=pointer]:
                - /url: "#teaching-calendar"
            - generic [ref=e190]:
              - generic [ref=e191]: Thu nhập tháng này
              - strong [ref=e192]: 660.000đ
              - link "Xem chi tiết" [ref=e193] [cursor=pointer]:
                - /url: /tutor/income
            - generic [ref=e196]:
              - generic [ref=e197]: Đánh giá trung bình
              - strong [ref=e198]: 4.9/5
              - link "Xem chi tiết" [ref=e199] [cursor=pointer]:
                - /url: "#tutor-profile-summary"
          - generic [ref=e202]:
            - region [ref=e203]:
              - generic [ref=e204]:
                - heading "Yêu cầu học mới (6)" [level=2] [ref=e205]
                - link "Xem tất cả" [ref=e206] [cursor=pointer]:
                  - /url: /tutor/requests
              - generic [ref=e209]:
                - article [ref=e210]:
                  - generic [ref=e211]:
                    - generic [ref=e212]: Toán lớp 8
                    - heading "Phụ huynh bé An" [level=3] [ref=e213]
                    - strong [ref=e214]: 180.000đ / buổi
                  - paragraph [ref=e215]: Bình Thạnh
                  - generic [ref=e219]:
                    - paragraph [ref=e220]: "Mong muốn: Muốn củng cố kiến thức học kỳ I."
                    - paragraph [ref=e221]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e222]: Tối thứ 3, 5
                  - paragraph [ref=e223]: 2 giờ trước
                  - generic [ref=e227]:
                    - link "Xem chi tiết" [ref=e228] [cursor=pointer]:
                      - /url: /tutor/requests/req-1
                    - generic [ref=e229]:
                      - button "Từ chối" [ref=e230] [cursor=pointer]
                      - button "Chấp nhận" [ref=e231] [cursor=pointer]
                - article [ref=e232]:
                  - generic [ref=e233]:
                    - generic [ref=e234]: Vật lý lớp 10
                    - heading "Nguyễn Khánh Linh" [level=3] [ref=e235]
                    - strong [ref=e236]: 200.000đ / buổi
                  - paragraph [ref=e237]: Thủ Đức
                  - generic [ref=e241]:
                    - paragraph [ref=e242]: "Mong muốn: Cần hỗ trợ phần điện học."
                    - paragraph [ref=e243]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e244]: Chiều cuối tuần
                  - paragraph [ref=e245]: 5 giờ trước
                  - generic [ref=e249]:
                    - link "Xem chi tiết" [ref=e250] [cursor=pointer]:
                      - /url: /tutor/requests/req-2
                    - generic [ref=e251]:
                      - button "Từ chối" [ref=e252] [cursor=pointer]
                      - button "Chấp nhận" [ref=e253] [cursor=pointer]
                - article [ref=e254]:
                  - generic [ref=e255]:
                    - generic [ref=e256]: Toán lớp 9
                    - heading "Phụ huynh bé Nam" [level=3] [ref=e257]
                    - strong [ref=e258]: 220.000đ / buổi
                  - paragraph [ref=e259]: Quận 3
                  - generic [ref=e263]:
                    - paragraph [ref=e264]: "Mong muốn: Ôn tập trước kỳ thi chuyển cấp."
                    - paragraph [ref=e265]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e266]: Tối thứ 2, 4
                  - paragraph [ref=e267]: Hôm qua
                  - generic [ref=e271]:
                    - link "Xem chi tiết" [ref=e272] [cursor=pointer]:
                      - /url: /tutor/requests/req-3
                    - generic [ref=e273]:
                      - button "Từ chối" [ref=e274] [cursor=pointer]
                      - button "Chấp nhận" [ref=e275] [cursor=pointer]
            - region [ref=e276]:
              - generic [ref=e277]:
                - heading "Lịch dạy học" [level=2] [ref=e278]
                - link "Chỉnh sửa lịch" [ref=e279] [cursor=pointer]:
                  - /url: /tutor/timetable
              - table [ref=e283]:
                - caption [ref=e284]: Tổng quan lịch rảnh đã lưu và buổi dạy theo ngày và buổi trong tuần.
                - rowgroup [ref=e285]:
                  - row [ref=e286]:
                    - columnheader "Buổi" [ref=e287]
                    - columnheader "T2" [ref=e289]
                    - columnheader "T3" [ref=e290]
                    - columnheader "T4" [ref=e291]
                    - columnheader "T5" [ref=e292]
                    - columnheader "T6" [ref=e293]
                    - columnheader "T7" [ref=e294]
                    - columnheader "CN" [ref=e295]
                - rowgroup [ref=e296]:
                  - row [ref=e297]:
                    - rowheader "Sáng 06:00–12:00" [ref=e298]:
                      - text: Sáng
                      - generic [ref=e299]: 06:00–12:00
                    - cell [ref=e300]:
                      - link "Sáng T2, chưa có lịch rảnh" [ref=e301] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e302]
                    - cell [ref=e303]:
                      - link "Sáng T3, chưa có lịch rảnh, có buổi dạy" [ref=e304] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e305]
                    - cell [ref=e307]:
                      - link "Sáng T4, chưa có lịch rảnh" [ref=e308] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e309]
                    - cell [ref=e310]:
                      - link "Sáng T5, chưa có lịch rảnh, có buổi dạy" [ref=e311] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e312]
                    - cell [ref=e314]:
                      - link "Sáng T6, chưa có lịch rảnh" [ref=e315] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e316]
                    - cell [ref=e317]:
                      - link "Sáng T7, có lịch rảnh" [ref=e318] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e319]
                    - cell [ref=e320]:
                      - link "Sáng CN, chưa có lịch rảnh" [ref=e321] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e322]
                  - row [ref=e323]:
                    - rowheader "Chiều 12:00–17:00" [ref=e324]:
                      - text: Chiều
                      - generic [ref=e325]: 12:00–17:00
                    - cell [ref=e326]:
                      - link "Chiều T2, chưa có lịch rảnh" [ref=e327] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e328]
                    - cell [ref=e329]:
                      - link "Chiều T3, chưa có lịch rảnh" [ref=e330] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e331]
                    - cell [ref=e332]:
                      - link "Chiều T4, chưa có lịch rảnh, có buổi dạy" [ref=e333] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e334]
                    - cell [ref=e336]:
                      - link "Chiều T5, chưa có lịch rảnh" [ref=e337] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e338]
                    - cell [ref=e339]:
                      - link "Chiều T6, chưa có lịch rảnh, có buổi dạy" [ref=e340] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e341]
                    - cell [ref=e343]:
                      - link "Chiều T7, chưa có lịch rảnh, có buổi dạy" [ref=e344] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e345]
                    - cell [ref=e347]:
                      - link "Chiều CN, chưa có lịch rảnh" [ref=e348] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e349]
                  - row [ref=e350]:
                    - rowheader "Tối 17:00–24:00" [ref=e351]:
                      - text: Tối
                      - generic [ref=e352]: 17:00–24:00
                    - cell [ref=e353]:
                      - link "Tối T2, chưa có lịch rảnh" [ref=e354] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e355]
                    - cell [ref=e356]:
                      - link "Tối T3, có lịch rảnh" [ref=e357] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e358]
                    - cell [ref=e359]:
                      - link "Tối T4, chưa có lịch rảnh" [ref=e360] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e361]
                    - cell [ref=e362]:
                      - link "Tối T5, có lịch rảnh" [ref=e363] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e364]
                    - cell [ref=e365]:
                      - link "Tối T6, có lịch rảnh" [ref=e366] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e367]
                    - cell [ref=e368]:
                      - link "Tối T7, chưa có lịch rảnh, có buổi dạy" [ref=e369] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e370]
                    - cell [ref=e372]:
                      - link "Tối CN, chưa có lịch rảnh" [ref=e373] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e374]
              - generic [ref=e375]:
                - generic [ref=e376]: Có lịch rảnh
                - generic [ref=e378]: Có buổi học
              - paragraph [ref=e380]: Lịch rảnh đã lưu dùng ngày và khoảng giờ cụ thể. Mở thời khóa biểu để chỉnh sửa.
              - generic [ref=e381]:
                - heading "Buổi dạy trong tuần (5)" [level=3] [ref=e382]
                - paragraph [ref=e383]:
                  - strong [ref=e384]: Toán
                  - text: 06/10/2026 · 07:00–07:45
                - paragraph [ref=e385]:
                  - strong [ref=e386]: Tiếng Anh
                  - text: 08/10/2026 · 08:30–09:15
                - paragraph [ref=e387]:
                  - strong [ref=e388]: Vật lý
                  - text: 09/10/2026 · 13:00–13:45
              - link "Xem toàn bộ thời khóa biểu" [ref=e389] [cursor=pointer]:
                - /url: /tutor/timetable
        - complementary "Hồ sơ, thu nhập và cập nhật nhanh" [ref=e392]:
          - generic [ref=e393]:
            - generic [ref=e394]:
              - heading "Hồ sơ gia sư" [level=2] [ref=e395]
              - link "Chỉnh sửa" [ref=e396] [cursor=pointer]:
                - /url: /tutor/profile
            - generic [ref=e399]:
              - img "Ảnh đại diện của Trần Gia Bảo" [ref=e400]:
                - generic [aria-hidden] [ref=e401]: GB
              - generic [ref=e402]:
                - heading "Trần Gia Bảo" [level=3] [ref=e403]
                - paragraph [ref=e404]: Gia sư tại Thủ Đức
                - generic "4.9 trên 5, 36 đánh giá" [ref=e405]: 4.9 (36 đánh giá)
            - generic [ref=e417]:
              - generic [ref=e418]:
                - generic [ref=e419]: Hồ sơ hoàn thiện
                - strong [ref=e420]: 83%
              - progressbar "Độ hoàn thiện hồ sơ" [ref=e421]
            - generic [ref=e422]:
              - generic [ref=e423]:
                - term [ref=e424]: Môn dạy
                - definition [ref=e425]: Tiếng Anh, IELTS
              - generic [ref=e426]:
                - term [ref=e427]: Khu vực
                - definition [ref=e428]: Thủ Đức
              - generic [ref=e429]:
                - term [ref=e430]: Mức phí
                - definition [ref=e431]: 220.000đ / buổi
          - generic [ref=e432]:
            - heading "Thu nhập / buổi học gần đây" [level=2] [ref=e434]
            - strong [ref=e435]: 660.000đ
            - paragraph [ref=e436]: Tháng 10/2026
            - generic [ref=e437]:
              - generic [ref=e438]:
                - generic [ref=e439]: 03/10
                - generic [ref=e440]: Tiếng Anh
                - strong [ref=e441]: 220.000đ
              - generic [ref=e442]:
                - generic [ref=e443]: 02/10
                - generic [ref=e444]: IELTS
                - strong [ref=e445]: 220.000đ
              - generic [ref=e446]:
                - generic [ref=e447]: 01/10
                - generic [ref=e448]: Tiếng Anh
                - strong [ref=e449]: 220.000đ
            - link "Xem thêm" [ref=e450] [cursor=pointer]:
              - /url: /tutor/income
          - generic [ref=e453]:
            - heading "Cập nhật nhanh" [level=2] [ref=e455]
            - generic [ref=e456]:
              - link "Chỉnh sửa hồ sơ" [ref=e457] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Quản lý khu vực" [ref=e462] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Cập nhật môn dạy" [ref=e467] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Thiết lập mức phí" [ref=e471] [cursor=pointer]:
                - /url: /tutor/profile
            - paragraph [ref=e476]: Đã lưu 2 phút trước
  - complementary "Widget nhắn tin nhanh" [ref=e477]:
    - button "Mở cửa sổ trò chuyện" [ref=e478] [cursor=pointer]
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
  38 |     await page.getByRole('button', { name: 'Thông báo', exact: true }).click();
  39 |     const panel = page.getByRole('region', { name: 'Thông báo của bạn' });
  40 |     await expect(panel).toBeVisible();
  41 |     const bounds = await panel.boundingBox();
> 42 |     expect(bounds.x).toBeGreaterThanOrEqual(0);
     |                      ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  43 |     expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
  44 |   });
  45 | }
  46 | 
```