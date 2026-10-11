# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: income.spec.js >> Tutor sidebar Income shows derived October summary, six-month values and exact eligible details
- Location: tests\e2e\income.spec.js:5:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Thu nhập', exact: true })

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
        - link "Hồ sơ gia sư" [ref=e39] [cursor=pointer]:
          - /url: /tutor/profile
        - link "Tin nhắn" [ref=e44] [cursor=pointer]:
          - /url: /messages
        - link "Kháng cáo" [ref=e48] [cursor=pointer]:
          - /url: /appeals
        - link "Trung tâm Trợ giúp" [ref=e54] [cursor=pointer]:
          - /url: /help
    - generic [ref=e59]:
      - banner [ref=e60]:
        - navigation "Điều hướng nhanh" [ref=e61]:
          - link "Tìm lớp gần tôi" [ref=e62] [cursor=pointer]:
            - /url: /tutor/map
          - link "Tổng Quan" [ref=e66] [cursor=pointer]:
            - /url: /tutor/dashboard
        - generic [ref=e72]:
          - button "Thông báo" [ref=e74] [cursor=pointer]:
            - generic [ref=e78]: "1"
          - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=e79] [cursor=pointer]:
            - /url: /tutor/profile
            - img "Ảnh đại diện của Trần Gia Bảo" [ref=e80]:
              - generic [aria-hidden] [ref=e81]: GB
            - generic [ref=e82]: giabao
          - button "Đăng xuất" [ref=e83] [cursor=pointer]
      - main [ref=e87]:
        - generic [ref=e88]:
          - generic [ref=e89]:
            - heading "Xin chào, Trần Gia Bảo" [level=1] [ref=e90]
            - paragraph [ref=e96]: Cùng tiếp tục tạo ra tác động tích cực qua từng buổi học.
          - generic "Chỉ số tổng quan" [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]: Yêu cầu học mới
              - strong [ref=e100]: "6"
              - generic [ref=e101]: ↑ +6
              - link "Xem chi tiết" [ref=e102] [cursor=pointer]:
                - /url: "#requests-title"
            - generic [ref=e105]:
              - generic [ref=e106]: Lịch dạy tuần này
              - strong [ref=e107]: "5"
              - generic [ref=e108]: ↑ +2
              - link "Xem chi tiết" [ref=e109] [cursor=pointer]:
                - /url: "#teaching-calendar"
            - generic [ref=e112]:
              - generic [ref=e113]: Thu nhập tháng này
              - strong [ref=e114]: 660.000đ
              - link "Xem chi tiết" [ref=e115] [cursor=pointer]:
                - /url: /tutor/income
            - generic [ref=e118]:
              - generic [ref=e119]: Đánh giá trung bình
              - strong [ref=e120]: 4.9/5
              - link "Xem chi tiết" [ref=e121] [cursor=pointer]:
                - /url: "#tutor-profile-summary"
          - generic [ref=e124]:
            - region [ref=e125]:
              - generic [ref=e126]:
                - heading "Yêu cầu học mới (6)" [level=2] [ref=e127]
                - link "Xem tất cả" [ref=e128] [cursor=pointer]:
                  - /url: /tutor/requests
              - generic [ref=e131]:
                - article [ref=e132]:
                  - generic [ref=e133]:
                    - generic [ref=e134]: Toán lớp 8
                    - heading "Phụ huynh bé An" [level=3] [ref=e135]
                    - strong [ref=e136]: 180.000đ / buổi
                  - paragraph [ref=e137]: Bình Thạnh
                  - generic [ref=e141]:
                    - paragraph [ref=e142]: "Mong muốn: Muốn củng cố kiến thức học kỳ I."
                    - paragraph [ref=e143]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e144]: Tối thứ 3, 5
                  - paragraph [ref=e145]: 2 giờ trước
                  - generic [ref=e149]:
                    - link "Xem chi tiết" [ref=e150] [cursor=pointer]:
                      - /url: /tutor/requests/req-1
                    - generic [ref=e151]:
                      - button "Từ chối" [ref=e152] [cursor=pointer]
                      - button "Chấp nhận" [ref=e153] [cursor=pointer]
                - article [ref=e154]:
                  - generic [ref=e155]:
                    - generic [ref=e156]: Vật lý lớp 10
                    - heading "Nguyễn Khánh Linh" [level=3] [ref=e157]
                    - strong [ref=e158]: 200.000đ / buổi
                  - paragraph [ref=e159]: Thủ Đức
                  - generic [ref=e163]:
                    - paragraph [ref=e164]: "Mong muốn: Cần hỗ trợ phần điện học."
                    - paragraph [ref=e165]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e166]: Chiều cuối tuần
                  - paragraph [ref=e167]: 5 giờ trước
                  - generic [ref=e171]:
                    - link "Xem chi tiết" [ref=e172] [cursor=pointer]:
                      - /url: /tutor/requests/req-2
                    - generic [ref=e173]:
                      - button "Từ chối" [ref=e174] [cursor=pointer]
                      - button "Chấp nhận" [ref=e175] [cursor=pointer]
                - article [ref=e176]:
                  - generic [ref=e177]:
                    - generic [ref=e178]: Toán lớp 9
                    - heading "Phụ huynh bé Nam" [level=3] [ref=e179]
                    - strong [ref=e180]: 220.000đ / buổi
                  - paragraph [ref=e181]: Quận 3
                  - generic [ref=e185]:
                    - paragraph [ref=e186]: "Mong muốn: Ôn tập trước kỳ thi chuyển cấp."
                    - paragraph [ref=e187]:
                      - text: "Lịch mong muốn:"
                      - strong [ref=e188]: Tối thứ 2, 4
                  - paragraph [ref=e189]: Hôm qua
                  - generic [ref=e193]:
                    - link "Xem chi tiết" [ref=e194] [cursor=pointer]:
                      - /url: /tutor/requests/req-3
                    - generic [ref=e195]:
                      - button "Từ chối" [ref=e196] [cursor=pointer]
                      - button "Chấp nhận" [ref=e197] [cursor=pointer]
            - region [ref=e198]:
              - generic [ref=e199]:
                - heading "Lịch dạy học" [level=2] [ref=e200]
                - link "Chỉnh sửa lịch" [ref=e201] [cursor=pointer]:
                  - /url: /tutor/timetable
              - table [ref=e205]:
                - caption [ref=e206]: Tổng quan lịch rảnh đã lưu và buổi dạy theo ngày và buổi trong tuần.
                - rowgroup [ref=e207]:
                  - row [ref=e208]:
                    - columnheader "Buổi" [ref=e209]
                    - columnheader "T2" [ref=e211]
                    - columnheader "T3" [ref=e212]
                    - columnheader "T4" [ref=e213]
                    - columnheader "T5" [ref=e214]
                    - columnheader "T6" [ref=e215]
                    - columnheader "T7" [ref=e216]
                    - columnheader "CN" [ref=e217]
                - rowgroup [ref=e218]:
                  - row [ref=e219]:
                    - rowheader "Sáng 06:00–12:00" [ref=e220]:
                      - text: Sáng
                      - generic [ref=e221]: 06:00–12:00
                    - cell [ref=e222]:
                      - link "Sáng T2, chưa có lịch rảnh" [ref=e223] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e224]
                    - cell [ref=e225]:
                      - link "Sáng T3, chưa có lịch rảnh, có buổi dạy" [ref=e226] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e227]
                    - cell [ref=e229]:
                      - link "Sáng T4, chưa có lịch rảnh" [ref=e230] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e231]
                    - cell [ref=e232]:
                      - link "Sáng T5, chưa có lịch rảnh, có buổi dạy" [ref=e233] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e234]
                    - cell [ref=e236]:
                      - link "Sáng T6, chưa có lịch rảnh" [ref=e237] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e238]
                    - cell [ref=e239]:
                      - link "Sáng T7, có lịch rảnh" [ref=e240] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e241]
                    - cell [ref=e242]:
                      - link "Sáng CN, chưa có lịch rảnh" [ref=e243] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e244]
                  - row [ref=e245]:
                    - rowheader "Chiều 12:00–17:00" [ref=e246]:
                      - text: Chiều
                      - generic [ref=e247]: 12:00–17:00
                    - cell [ref=e248]:
                      - link "Chiều T2, chưa có lịch rảnh" [ref=e249] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e250]
                    - cell [ref=e251]:
                      - link "Chiều T3, chưa có lịch rảnh" [ref=e252] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e253]
                    - cell [ref=e254]:
                      - link "Chiều T4, chưa có lịch rảnh, có buổi dạy" [ref=e255] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e256]
                    - cell [ref=e258]:
                      - link "Chiều T5, chưa có lịch rảnh" [ref=e259] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e260]
                    - cell [ref=e261]:
                      - link "Chiều T6, chưa có lịch rảnh, có buổi dạy" [ref=e262] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e263]
                    - cell [ref=e265]:
                      - link "Chiều T7, chưa có lịch rảnh, có buổi dạy" [ref=e266] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e267]
                    - cell [ref=e269]:
                      - link "Chiều CN, chưa có lịch rảnh" [ref=e270] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e271]
                  - row [ref=e272]:
                    - rowheader "Tối 17:00–24:00" [ref=e273]:
                      - text: Tối
                      - generic [ref=e274]: 17:00–24:00
                    - cell [ref=e275]:
                      - link "Tối T2, chưa có lịch rảnh" [ref=e276] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e277]
                    - cell [ref=e278]:
                      - link "Tối T3, có lịch rảnh" [ref=e279] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e280]
                    - cell [ref=e281]:
                      - link "Tối T4, chưa có lịch rảnh" [ref=e282] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e283]
                    - cell [ref=e284]:
                      - link "Tối T5, có lịch rảnh" [ref=e285] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e286]
                    - cell [ref=e287]:
                      - link "Tối T6, có lịch rảnh" [ref=e288] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [checked] [disabled] [aria-hidden] [ref=e289]
                    - cell [ref=e290]:
                      - link "Tối T7, chưa có lịch rảnh, có buổi dạy" [ref=e291] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e292]
                    - cell [ref=e294]:
                      - link "Tối CN, chưa có lịch rảnh" [ref=e295] [cursor=pointer]:
                        - /url: /tutor/timetable
                        - checkbox [disabled] [aria-hidden] [ref=e296]
              - generic [ref=e297]:
                - generic [ref=e298]: Có lịch rảnh
                - generic [ref=e300]: Có buổi học
              - paragraph [ref=e302]: Lịch rảnh đã lưu dùng ngày và khoảng giờ cụ thể. Mở thời khóa biểu để chỉnh sửa.
              - generic [ref=e303]:
                - heading "Buổi dạy trong tuần (5)" [level=3] [ref=e304]
                - paragraph [ref=e305]:
                  - strong [ref=e306]: Toán
                  - text: 06/10/2026 · 07:00–07:45
                - paragraph [ref=e307]:
                  - strong [ref=e308]: Tiếng Anh
                  - text: 08/10/2026 · 08:30–09:15
                - paragraph [ref=e309]:
                  - strong [ref=e310]: Vật lý
                  - text: 09/10/2026 · 13:00–13:45
              - link "Xem toàn bộ thời khóa biểu" [ref=e311] [cursor=pointer]:
                - /url: /tutor/timetable
        - complementary "Hồ sơ, thu nhập và cập nhật nhanh" [ref=e314]:
          - generic [ref=e315]:
            - generic [ref=e316]:
              - heading "Hồ sơ gia sư" [level=2] [ref=e317]
              - link "Chỉnh sửa" [ref=e318] [cursor=pointer]:
                - /url: /tutor/profile
            - generic [ref=e321]:
              - img "Ảnh đại diện của Trần Gia Bảo" [ref=e322]:
                - generic [aria-hidden] [ref=e323]: GB
              - generic [ref=e324]:
                - heading "Trần Gia Bảo" [level=3] [ref=e325]
                - paragraph [ref=e326]: Gia sư tại Thủ Đức
                - generic "4.9 trên 5, 36 đánh giá" [ref=e327]: 4.9 (36 đánh giá)
            - generic [ref=e339]:
              - generic [ref=e340]:
                - generic [ref=e341]: Hồ sơ hoàn thiện
                - strong [ref=e342]: 85%
              - progressbar "Độ hoàn thiện hồ sơ" [ref=e343]
            - generic [ref=e344]:
              - generic [ref=e345]:
                - term [ref=e346]: Môn dạy
                - definition [ref=e347]: Tiếng Anh, IELTS
              - generic [ref=e348]:
                - term [ref=e349]: Khu vực
                - definition [ref=e350]: Thủ Đức
              - generic [ref=e351]:
                - term [ref=e352]: Mức phí
                - definition [ref=e353]: 220.000đ / buổi
          - generic [ref=e354]:
            - heading "Thu nhập / buổi học gần đây" [level=2] [ref=e356]
            - strong [ref=e357]: 660.000đ
            - paragraph [ref=e358]: Tháng 10/2026
            - generic [ref=e359]:
              - generic [ref=e360]:
                - generic [ref=e361]: 03/10
                - generic [ref=e362]: Tiếng Anh
                - strong [ref=e363]: 220.000đ
              - generic [ref=e364]:
                - generic [ref=e365]: 02/10
                - generic [ref=e366]: IELTS
                - strong [ref=e367]: 220.000đ
              - generic [ref=e368]:
                - generic [ref=e369]: 01/10
                - generic [ref=e370]: Tiếng Anh
                - strong [ref=e371]: 220.000đ
            - link "Xem thêm" [ref=e372] [cursor=pointer]:
              - /url: /tutor/income
          - generic [ref=e375]:
            - heading "Cập nhật nhanh" [level=2] [ref=e377]
            - generic [ref=e378]:
              - link "Chỉnh sửa hồ sơ" [ref=e379] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Quản lý khu vực" [ref=e384] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Cập nhật môn dạy" [ref=e389] [cursor=pointer]:
                - /url: /tutor/profile
              - link "Thiết lập mức phí" [ref=e393] [cursor=pointer]:
                - /url: /tutor/profile
            - paragraph [ref=e398]: Đã lưu 2 phút trước
  - complementary "Widget nhắn tin nhanh" [ref=e399]:
    - button "Mở cửa sổ trò chuyện" [ref=e400] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { login, resetDemo } from './demoHelpers.js';
  3   | import { demoReferenceData } from '../../src/data/demoReferenceData.js';
  4   | 
  5   | test('Tutor sidebar Income shows derived October summary, six-month values and exact eligible details', async ({ page }) => {
  6   |   await resetDemo(page);
  7   |   await login(page, 'giabao', '/tutor/dashboard');
  8   |   await expect(page.locator('#tutor-income')).toContainText('660.000đ');
  9   |   await expect(page.locator('#tutor-income')).toContainText('Tháng 10/2026');
> 10  |   await page.getByRole('link', { name: 'Thu nhập', exact: true }).click();
      |                                                                   ^ Error: locator.click: Test timeout of 60000ms exceeded.
  11  |   await expect(page).toHaveURL(/\/tutor\/income$/);
  12  |   await expect(page.getByRole('heading', { name: 'Thu nhập', exact: true })).toBeVisible();
  13  | 
  14  |   const summary = page.getByLabel('Tổng quan thu nhập tháng hiện tại');
  15  |   await expect(summary).toContainText('660.000đ');
  16  |   await expect(summary).toContainText('Tiếng Anh');
  17  |   await expect(summary).toContainText('440.000đ · 2 buổi');
  18  |   await expect(summary.locator('section').nth(1).getByText('3', { exact: true })).toBeVisible();
  19  | 
  20  |   const values = page.getByLabel('Giá trị thu nhập theo tháng').getByRole('listitem');
  21  |   await expect(values).toHaveCount(6);
  22  |   for (const [index, month, amount, tone] of [
  23  |     [0, '05/2026', '180.000đ', 'minimum'], [1, '06/2026', '360.000đ', 'normal'],
  24  |     [2, '07/2026', '400.000đ', 'normal'], [3, '08/2026', '620.000đ', 'normal'],
  25  |     [4, '09/2026', '880.000đ', 'maximum'], [5, '10/2026', '660.000đ', 'normal'],
  26  |   ]) {
  27  |     await expect(values.nth(index)).toHaveAccessibleName(new RegExp(`${month}: ${amount}`));
  28  |     await expect(values.nth(index)).toHaveAttribute('data-tone', tone);
  29  |   }
  30  | 
  31  |   await expect(page.locator('.income-chart__point[data-tone="normal"]').first()).toHaveCSS('fill', 'rgb(255, 211, 61)');
  32  |   await expect(page.locator('.income-chart__point[data-tone="maximum"]')).toHaveCSS('fill', 'rgb(232, 45, 63)');
  33  |   await expect(page.locator('.income-chart__point[data-tone="minimum"]')).toHaveCSS('fill', 'rgb(40, 121, 87)');
  34  | 
  35  |   const rows = page.getByRole('table').locator('tbody tr');
  36  |   await expect(rows).toHaveCount(3);
  37  |   await expect(rows).toHaveText([
  38  |     '03/10/2026Ngọc LanTiếng Anh09:00–09:45220.000đ',
  39  |     '02/10/2026Học sinh THPTIELTS19:00–19:45220.000đ',
  40  |     '01/10/2026Nguyễn Minh AnhTiếng Anh18:00–18:45220.000đ',
  41  |   ]);
  42  | 
  43  |   await page.goto('/tutor/dashboard');
  44  |   await page.locator('#tutor-income').getByRole('link', { name: 'Xem thêm' }).click();
  45  |   await expect(page).toHaveURL(/\/tutor\/income$/);
  46  | });
  47  | 
  48  | test('Clicking a chart point switches the lesson table to that month and the same Lesson exists in timetable history', async ({ page }) => {
  49  |   await resetDemo(page);
  50  |   await login(page, 'giabao', '/tutor/income');
  51  | 
  52  |   const september = page.getByRole('button', { name: 'Xem chi tiết tháng 09/2026: 880.000đ' });
  53  |   await september.click();
  54  |   await expect(september).toHaveAttribute('aria-pressed', 'true');
  55  |   await expect(page.getByText('4 buổi · Tháng 09/2026', { exact: true })).toBeVisible();
  56  | 
  57  |   const rows = page.getByRole('table').locator('tbody tr');
  58  |   await expect(rows).toHaveCount(4);
  59  |   await expect(rows).toHaveText([
  60  |     '27/09/2026Nguyễn Minh AnhIELTS19:00–19:45220.000đ',
  61  |     '20/09/2026Nguyễn Minh AnhTiếng Anh18:00–18:45220.000đ',
  62  |     '12/09/2026Ngọc LanTiếng Anh18:00–18:45220.000đ',
  63  |     '05/09/2026Học sinh THPTIELTS19:00–19:45220.000đ',
  64  |   ]);
  65  | 
  66  |   await page.goto('/tutor/timetable');
  67  |   const previousWeek = page.getByRole('button', { name: 'Tuần trước', exact: true });
  68  |   await previousWeek.click();
  69  |   await previousWeek.click();
  70  |   await expect(page.getByRole('button', { name: /IELTS Nguyễn Minh Anh.*2026-09-27/ })).toBeVisible();
  71  | });
  72  | 
  73  | test('Income chart point supports keyboard month selection', async ({ page }) => {
  74  |   await resetDemo(page);
  75  |   await login(page, 'giabao', '/tutor/income');
  76  | 
  77  |   const august = page.getByRole('button', { name: 'Xem chi tiết tháng 08/2026: 620.000đ' });
  78  |   await august.focus();
  79  |   await page.keyboard.press('Enter');
  80  |   await expect(august).toHaveAttribute('aria-pressed', 'true');
  81  |   await expect(page.getByText('3 buổi · Tháng 08/2026', { exact: true })).toBeVisible();
  82  |   await expect(page.getByRole('table').locator('tbody tr')).toHaveCount(3);
  83  | });
  84  | 
  85  | test('Income route preserves auth redirect', async ({ page }) => {
  86  |   await resetDemo(page);
  87  |   await page.goto('/tutor/income');
  88  |   await expect(page).toHaveURL(/\/login\?redirect=/);
  89  |   await login(page, 'giabao', '/tutor/income');
  90  |   await expect(page.getByRole('heading', { name: 'Thu nhập', exact: true })).toBeVisible();
  91  | });
  92  | 
  93  | test('Income empty state has zero values with normal chart tones for an account without Lessons', async ({ page }) => {
  94  |   await resetDemo(page, { user: { ...demoReferenceData.accounts[1], id: 'income-isolation-tutor' } });
  95  |   await page.goto('/tutor/income');
  96  |   await expect(page.getByRole('heading', { name: 'Chưa có thu nhập trong tháng này' })).toBeVisible();
  97  |   await expect(page.getByRole('table')).toHaveCount(0);
  98  |   const values = page.getByLabel('Giá trị thu nhập theo tháng').getByRole('listitem');
  99  |   await expect(values).toHaveCount(6);
  100 |   for (const value of await values.all()) {
  101 |     await expect(value).toContainText('0đ');
  102 |     await expect(value).toHaveAttribute('data-tone', 'normal');
  103 |   }
  104 | });
  105 | 
  106 | test('Income tied extrema receive their semantic state', async ({ page }) => {
  107 |   const lessons = demoReferenceData.historicalLessons.map((lesson) => ({ ...lesson, sessionFee: 0 }));
  108 |   lessons.find((lesson) => lesson.date.startsWith('2026-05')).sessionFee = 100000;
  109 |   lessons.find((lesson) => lesson.date.startsWith('2026-06')).sessionFee = 100000;
  110 |   await resetDemo(page, { lessons });
```