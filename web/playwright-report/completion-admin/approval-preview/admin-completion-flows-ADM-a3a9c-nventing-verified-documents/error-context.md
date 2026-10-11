# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-completion-flows.spec.js >> ADMIN-MASTER approval preview uses uploaded student card images without inventing verified documents
- Location: tests\e2e\admin-completion-flows.spec.js:81:1

# Error details

```
Test timeout of 25000ms exceeded.
```

```
Error: locator.click: Test timeout of 25000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Xem chi tiết gia sư Trần Gia Bảo', exact: true })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary "Điều hướng quản trị" [ref=e4]:
    - link "TutorNearMe — trang chủ" [ref=e6] [cursor=pointer]:
      - /url: /
      - generic [aria-hidden] [ref=e7]: TN
      - generic [ref=e8]: TutorNearMe
    - generic [ref=e9]: QUẢN TRỊ HỆ THỐNG
    - navigation "Các mục quản trị" [ref=e10]:
      - link "Tổng quan" [ref=e11] [cursor=pointer]:
        - /url: /admin/dashboard
      - link "Gia sư 3" [ref=e18] [cursor=pointer]:
        - /url: /admin/tutors
        - generic [ref=e22]: Gia sư
        - generic [ref=e23]: "3"
      - link "Người dùng" [ref=e24] [cursor=pointer]:
        - /url: /admin/users
      - link "Đánh giá 2" [ref=e31] [cursor=pointer]:
        - /url: /admin/reviews
        - generic [ref=e34]: Đánh giá
        - generic [ref=e35]: "2"
      - link "Báo cáo & sự cố 4" [ref=e36] [cursor=pointer]:
        - /url: /admin/issues
        - generic [ref=e39]: Báo cáo & sự cố
        - generic [ref=e40]: "4"
      - link "Kháng cáo" [ref=e41] [cursor=pointer]:
        - /url: /admin/appeals
      - link "Lớp học" [ref=e47] [cursor=pointer]:
        - /url: /admin/classes
      - link "Tài chính Escrow 1" [ref=e52] [cursor=pointer]:
        - /url: /admin/finance
        - generic [ref=e55]: Tài chính Escrow
        - generic [ref=e56]: "1"
      - link "Môn học" [ref=e57] [cursor=pointer]:
        - /url: /admin/subjects
      - link "Khu vực" [ref=e61] [cursor=pointer]:
        - /url: /admin/locations
      - link "Cài đặt" [ref=e66] [cursor=pointer]:
        - /url: /admin/settings
      - link "Nhật ký" [ref=e71] [cursor=pointer]:
        - /url: /admin/logs
    - generic [ref=e76]:
      - generic [ref=e77]: Bản demo frontend
      - generic [ref=e79]: TutorNearMe · Admin workspace
  - generic [ref=e80]:
    - banner [ref=e81]:
      - generic [ref=e82]:
        - text: Quản trị
        - strong [ref=e85]: Quản lý gia sư
      - generic [ref=e86]:
        - generic [ref=e87]:
          - img "Ảnh đại diện của Quản trị viên" [ref=e88]:
            - generic [aria-hidden] [ref=e89]: AD
          - generic [ref=e90]: Quản trị viên
        - button "Đăng xuất" [ref=e91] [cursor=pointer]
    - main [ref=e95]:
      - generic [ref=e97]:
        - text: DANH SÁCH & PHÊ DUYỆT
        - heading "Quản lý Gia sư" [level=1] [ref=e98]
        - paragraph [ref=e99]: Duyệt hồ sơ mới đăng ký, quản lý tài liệu chứng chỉ và kiểm soát trạng thái hoạt động.
      - generic [ref=e100]:
        - tablist "Lọc theo trạng thái hồ sơ" [ref=e101]:
          - tab "Tất cả" [active] [selected] [ref=e102] [cursor=pointer]
          - tab "Chờ duyệt" [ref=e103] [cursor=pointer]
          - tab "Đã duyệt" [ref=e104] [cursor=pointer]
          - tab "Đã từ chối" [ref=e105] [cursor=pointer]
          - tab "Tạm khóa" [ref=e106] [cursor=pointer]
        - searchbox "Tìm kiếm gia sư" [ref=e111]
      - generic [ref=e112]: Hiển thị 11 / 11 bản ghi
      - region "Bảng danh sách gia sư" [ref=e114]:
        - table [ref=e115]:
          - rowgroup [ref=e116]:
            - row [ref=e117]:
              - columnheader "Gia sư" [ref=e118]
              - columnheader "Môn có thể dạy" [ref=e119]
              - columnheader "Học phí" [ref=e120]
              - columnheader "Thời gian gửi" [ref=e121]
              - columnheader "Trạng thái" [ref=e122]
              - columnheader "Thao tác" [ref=e123]
          - rowgroup [ref=e124]:
            - row [ref=e125]:
              - cell "Ảnh đại diện của Nguyễn Mai Anh Nguyễn Mai Anh ĐH Khoa học Tự nhiên" [ref=e126]:
                - generic [ref=e127]:
                  - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=e128]:
                    - generic [aria-hidden] [ref=e129]: MA
                  - generic [ref=e130]:
                    - strong [ref=e131]: Nguyễn Mai Anh
                    - generic "ĐH Khoa học Tự nhiên" [ref=e132]
              - cell "Toán, Vật lý" [ref=e133]
              - cell [ref=e135]:
                - strong [ref=e136]: 180.000 đ
                - text: /buổi
              - cell "Hôm nay" [ref=e137]
              - cell "Đã duyệt" [ref=e139]
              - cell [ref=e142]:
                - generic [ref=e143]:
                  - button "Xem chi tiết hồ sơ Nguyễn Mai Anh" [ref=e144] [cursor=pointer]
                  - button "Tạm khóa tài khoản Nguyễn Mai Anh" [ref=e148] [cursor=pointer]
            - row [ref=e152]:
              - cell "Ảnh đại diện của Trần Gia Bảo Trần Gia Bảo ĐH Ngoại thương" [ref=e153]:
                - generic [ref=e154]:
                  - img "Ảnh đại diện của Trần Gia Bảo" [ref=e155]:
                    - generic [aria-hidden] [ref=e156]: GB
                  - generic [ref=e157]:
                    - strong [ref=e158]: Trần Gia Bảo
                    - generic "ĐH Ngoại thương" [ref=e159]
              - cell "Tiếng Anh, IELTS" [ref=e160]
              - cell [ref=e162]:
                - strong [ref=e163]: 220.000 đ
                - text: /buổi
              - cell "Hôm nay" [ref=e164]
              - cell "Đã duyệt" [ref=e166]
              - cell [ref=e169]:
                - generic [ref=e170]:
                  - button "Xem chi tiết hồ sơ Trần Gia Bảo" [ref=e171] [cursor=pointer]
                  - button "Tạm khóa tài khoản Trần Gia Bảo" [ref=e175] [cursor=pointer]
            - row [ref=e179]:
              - cell "Ảnh đại diện của Phạm Hà Linh Phạm Hà Linh ĐH Sư phạm TP.HCM" [ref=e180]:
                - generic [ref=e181]:
                  - img "Ảnh đại diện của Phạm Hà Linh" [ref=e182]:
                    - generic [aria-hidden] [ref=e183]: HL
                  - generic [ref=e184]:
                    - strong [ref=e185]: Phạm Hà Linh
                    - generic "ĐH Sư phạm TP.HCM" [ref=e186]
              - cell "Ngữ văn, Tiếng Anh" [ref=e187]
              - cell [ref=e189]:
                - strong [ref=e190]: 160.000 đ
                - text: /buổi
              - cell "Hôm nay" [ref=e191]
              - cell "Đã duyệt" [ref=e193]
              - cell [ref=e196]:
                - generic [ref=e197]:
                  - button "Xem chi tiết hồ sơ Phạm Hà Linh" [ref=e198] [cursor=pointer]
                  - button "Tạm khóa tài khoản Phạm Hà Linh" [ref=e202] [cursor=pointer]
            - row [ref=e206]:
              - cell "Ảnh đại diện của Lê Đức Minh Lê Đức Minh ĐH Bách khoa TP.HCM" [ref=e207]:
                - generic [ref=e208]:
                  - img "Ảnh đại diện của Lê Đức Minh" [ref=e209]:
                    - generic [aria-hidden] [ref=e210]: ĐM
                  - generic [ref=e211]:
                    - strong [ref=e212]: Lê Đức Minh
                    - generic "ĐH Bách khoa TP.HCM" [ref=e213]
              - cell "Toán, Hóa học" [ref=e214]
              - cell [ref=e216]:
                - strong [ref=e217]: 170.000 đ
                - text: /buổi
              - cell "Hôm nay" [ref=e218]
              - cell "Đã duyệt" [ref=e220]
              - cell [ref=e223]:
                - generic [ref=e224]:
                  - button "Xem chi tiết hồ sơ Lê Đức Minh" [ref=e225] [cursor=pointer]
                  - button "Tạm khóa tài khoản Lê Đức Minh" [ref=e229] [cursor=pointer]
            - row [ref=e233]:
              - cell "Ảnh đại diện của Võ Thu Trang Võ Thu Trang ĐH Sư phạm TP.HCM" [ref=e234]:
                - generic [ref=e235]:
                  - img "Ảnh đại diện của Võ Thu Trang" [ref=e236]:
                    - generic [aria-hidden] [ref=e237]: TT
                  - generic [ref=e238]:
                    - strong [ref=e239]: Võ Thu Trang
                    - generic "ĐH Sư phạm TP.HCM" [ref=e240]
              - cell "Tiếng Anh, Ngữ văn" [ref=e241]
              - cell [ref=e243]:
                - strong [ref=e244]: 190.000 đ
                - text: /buổi
              - cell "Hôm nay" [ref=e245]
              - cell "Đã duyệt" [ref=e247]
              - cell [ref=e250]:
                - generic [ref=e251]:
                  - button "Xem chi tiết hồ sơ Võ Thu Trang" [ref=e252] [cursor=pointer]
                  - button "Tạm khóa tài khoản Võ Thu Trang" [ref=e256] [cursor=pointer]
            - row [ref=e260]:
              - cell "Ảnh đại diện của Đặng Gia Huy Đặng Gia Huy ĐH Khoa học Tự nhiên" [ref=e261]:
                - generic [ref=e262]:
                  - img "Ảnh đại diện của Đặng Gia Huy" [ref=e263]:
                    - generic [aria-hidden] [ref=e264]: GH
                  - generic [ref=e265]:
                    - strong [ref=e266]: Đặng Gia Huy
                    - generic "ĐH Khoa học Tự nhiên" [ref=e267]
              - cell "Vật lý, Toán" [ref=e268]
              - cell [ref=e270]:
                - strong [ref=e271]: 150.000 đ
                - text: /buổi
              - cell "Hôm nay" [ref=e272]
              - cell "Đã duyệt" [ref=e274]
              - cell [ref=e277]:
                - generic [ref=e278]:
                  - button "Xem chi tiết hồ sơ Đặng Gia Huy" [ref=e279] [cursor=pointer]
                  - button "Tạm khóa tài khoản Đặng Gia Huy" [ref=e283] [cursor=pointer]
            - row [ref=e287]:
              - cell "Ảnh đại diện của Lê Thảo Vy Lê Thảo Vy ĐH Sư phạm TP.HCM" [ref=e288]:
                - generic [ref=e289]:
                  - img "Ảnh đại diện của Lê Thảo Vy" [ref=e290]:
                    - generic [aria-hidden] [ref=e291]: TV
                  - generic [ref=e292]:
                    - strong [ref=e293]: Lê Thảo Vy
                    - generic "ĐH Sư phạm TP.HCM" [ref=e294]
              - cell "Tiếng Anh" [ref=e295]
              - cell [ref=e297]:
                - strong [ref=e298]: 160.000 đ
                - text: /buổi
              - cell "04/10/2026" [ref=e299]
              - cell "Chờ duyệt" [ref=e301]
              - cell [ref=e304]:
                - generic [ref=e305]:
                  - button "Xem chi tiết hồ sơ Lê Thảo Vy" [ref=e306] [cursor=pointer]
                  - button "Duyệt hồ sơ Lê Thảo Vy" [ref=e310] [cursor=pointer]
                  - button "Từ chối hồ sơ Lê Thảo Vy" [ref=e313] [cursor=pointer]
            - row [ref=e317]:
              - cell "Ảnh đại diện của Nguyễn Hoàng Phúc Nguyễn Hoàng Phúc ĐH Bách khoa TP.HCM" [ref=e318]:
                - generic [ref=e319]:
                  - img "Ảnh đại diện của Nguyễn Hoàng Phúc" [ref=e320]:
                    - generic [aria-hidden] [ref=e321]: HP
                  - generic [ref=e322]:
                    - strong [ref=e323]: Nguyễn Hoàng Phúc
                    - generic "ĐH Bách khoa TP.HCM" [ref=e324]
              - cell "Toán, Vật lý" [ref=e325]
              - cell [ref=e327]:
                - strong [ref=e328]: 200.000 đ
                - text: /buổi
              - cell "04/10/2026" [ref=e329]
              - cell "Chờ duyệt" [ref=e331]
              - cell [ref=e334]:
                - generic [ref=e335]:
                  - button "Xem chi tiết hồ sơ Nguyễn Hoàng Phúc" [ref=e336] [cursor=pointer]
                  - button "Duyệt hồ sơ Nguyễn Hoàng Phúc" [ref=e340] [cursor=pointer]
                  - button "Từ chối hồ sơ Nguyễn Hoàng Phúc" [ref=e343] [cursor=pointer]
            - row [ref=e347]:
              - cell "Ảnh đại diện của Trần Minh Châu Trần Minh Châu ĐH KHXH&NV" [ref=e348]:
                - generic [ref=e349]:
                  - img "Ảnh đại diện của Trần Minh Châu" [ref=e350]:
                    - generic [aria-hidden] [ref=e351]: MC
                  - generic [ref=e352]:
                    - strong [ref=e353]: Trần Minh Châu
                    - generic "ĐH KHXH&NV" [ref=e354]
              - cell "Ngữ văn" [ref=e355]
              - cell [ref=e357]:
                - strong [ref=e358]: 170.000 đ
                - text: /buổi
              - cell "03/10/2026" [ref=e359]
              - cell "Chờ duyệt" [ref=e361]
              - cell [ref=e364]:
                - generic [ref=e365]:
                  - button "Xem chi tiết hồ sơ Trần Minh Châu" [ref=e366] [cursor=pointer]
                  - button "Duyệt hồ sơ Trần Minh Châu" [ref=e370] [cursor=pointer]
                  - button "Từ chối hồ sơ Trần Minh Châu" [ref=e373] [cursor=pointer]
            - row [ref=e377]:
              - cell "Ảnh đại diện của Nguyễn Tuấn Anh Nguyễn Tuấn Anh ĐH Công nghệ Sài Gòn" [ref=e378]:
                - generic [ref=e379]:
                  - img "Ảnh đại diện của Nguyễn Tuấn Anh" [ref=e380]:
                    - generic [aria-hidden] [ref=e381]: TA
                  - generic [ref=e382]:
                    - strong [ref=e383]: Nguyễn Tuấn Anh
                    - generic "ĐH Công nghệ Sài Gòn" [ref=e384]
              - cell "Toán, Tin học" [ref=e385]
              - cell [ref=e387]:
                - strong [ref=e388]: 150.000 đ
                - text: /buổi
              - cell "01/10/2026" [ref=e389]
              - cell "Đã từ chối" [ref=e391]
              - cell [ref=e394]:
                - button "Xem chi tiết hồ sơ Nguyễn Tuấn Anh" [ref=e396] [cursor=pointer]
            - row [ref=e400]:
              - cell "Ảnh đại diện của Hoàng Quang Huy Hoàng Quang Huy ĐH Kinh tế TP.HCM" [ref=e401]:
                - generic [ref=e402]:
                  - img "Ảnh đại diện của Hoàng Quang Huy" [ref=e403]:
                    - generic [aria-hidden] [ref=e404]: QH
                  - generic [ref=e405]:
                    - strong [ref=e406]: Hoàng Quang Huy
                    - generic "ĐH Kinh tế TP.HCM" [ref=e407]
              - cell "Toán, Tiếng Anh" [ref=e408]
              - cell [ref=e410]:
                - strong [ref=e411]: 160.000 đ
                - text: /buổi
              - cell "20/08/2026" [ref=e412]
              - cell "Tạm khóa" [ref=e414]
              - cell [ref=e417]:
                - generic [ref=e418]:
                  - button "Xem chi tiết hồ sơ Hoàng Quang Huy" [ref=e419] [cursor=pointer]
                  - button "Mở khóa tài khoản Hoàng Quang Huy" [ref=e423] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';
  3   | import { createDemoState } from '../../src/features/domain/demoDomain.js';
  4   | 
  5   | test('APPEAL-MASTER two parties submit independent evidence and Admin sees both', async ({ page }) => {
  6   |   await resetDemo(page);
  7   |   await login(page, 'giabao', '/appeals');
  8   |   await page.getByLabel('Sự cố cần kháng cáo').selectOption('ISSUE-105');
  9   |   await page.getByLabel('Nội dung giải trình', { exact: true }).fill('Đề nghị đối chiếu lại diễn biến buổi học và nội dung trao đổi của hai bên.');
  10  |   await page.getByLabel('Liên kết bằng chứng', { exact: true }).fill('https://example.org/tutor-evidence');
  11  |   await page.getByLabel('Mô tả và nguồn bằng chứng', { exact: true }).fill('Bản trao đổi demo do gia sư cung cấp để đối chiếu.');
  12  |   await page.getByRole('checkbox', { name: /Tôi cam kết/ }).check();
  13  |   await page.getByRole('button', { name: 'Gửi kháng cáo', exact: true }).click();
  14  |   await expect(page.getByRole('status')).toContainText('Đã gửi kháng cáo');
  15  |   await logout(page);
  16  |   await login(page, 'minhanh', '/appeals');
  17  |   await page.getByRole('button', { name: 'Bổ sung giải trình', exact: true }).click();
  18  |   await page.getByLabel('Nội dung phản hồi').fill('Tôi bổ sung nội dung trao đổi từ phía người học để quản trị viên đối chiếu sự việc.');
  19  |   await page.getByLabel('Liên kết bằng chứng phản hồi').fill('https://example.org/learner-evidence');
  20  |   await page.getByLabel('Mô tả nguồn bằng chứng phản hồi').fill('Bản trao đổi demo do người học cung cấp.');
  21  |   await page.getByRole('checkbox', { name: /Tôi cam kết phản hồi/ }).check();
  22  |   await page.getByRole('button', { name: 'Gửi phản hồi', exact: true }).click();
  23  |   await expect(page.getByRole('status')).toContainText('Đã bổ sung');
  24  |   await logout(page);
  25  |   await login(page, 'admin', '/admin/appeals');
  26  |   await page.getByRole('button', { name: /Xem kháng cáo appeal-/ }).click();
  27  |   const dialog = page.getByRole('dialog');
  28  |   await expect(dialog.getByRole('heading', { name: 'Người học / Phụ huynh' })).toBeVisible();
  29  |   await expect(dialog.getByRole('heading', { name: 'Gia sư' })).toBeVisible();
  30  |   await expect(dialog).toContainText('Tôi bổ sung nội dung trao đổi');
  31  |   await expect(dialog).toContainText('Đề nghị đối chiếu lại diễn biến');
  32  | });
  33  | 
  34  | for (const action of ['refund', 'disburse', 'split']) {
  35  |   test(`APPEAL-MASTER confirmed ${action} verdict applies once to the linked escrow`, async ({ page }) => {
  36  |     const state = createDemoState(fixedTime);
  37  |     const escrow = state.escrowTransactions.find(e => e.status === 'held');
  38  |     const issue = state.issues.find(i => i.id === 'ISSUE-105');
  39  |     escrow.lessonId = state.lessons.find(l => l.tutorId === 'quoc-bao' && l.learnerId === 'demo-learner').id;
  40  |     escrow.lessonIds = [escrow.lessonId];
  41  |     issue.relatedLessonId = escrow.lessonId;
  42  |     state.appeals = [{ id: 'appeal-audit', issueId: issue.id, accountId: 'demo-tutor', reason: 'misunderstanding',
  43  |       content: 'Đề nghị đối chiếu bằng chứng và quyết định tiền ký quỹ theo buổi học đã liên kết.', truthful: true,
  44  |       evidence: [{ kind: 'link', url: 'https://example.org/appeal-proof', description: 'Bằng chứng demo phục vụ đối chiếu.' }],
  45  |       status: 'pending', createdAt: fixedTime.toISOString() }];
  46  |     await resetDemo(page, { state });
  47  |     await login(page, 'admin', '/admin/appeals');
  48  |     await page.getByRole('button', { name: 'Xem kháng cáo appeal-audit' }).click();
  49  |     await page.getByLabel('Kết quả xem xét').selectOption('accepted');
  50  |     await page.getByLabel('Căn cứ / phản hồi').fill('Đã đối chiếu bằng chứng của hồ sơ demo và xác nhận phương án xử lý ký quỹ.');
  51  |     await page.getByRole('combobox', { name: /^Xử lý ký quỹ/ }).selectOption(action);
  52  |     await page.getByRole('button', { name: 'Lưu kết quả', exact: true }).click();
  53  |     await expect(page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true })).toBeVisible();
  54  |     expect(await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id).status, escrow.id)).toBe('held');
  55  |     await page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true }).click();
  56  |     await expect(page.getByRole('status')).toContainText('Đã lưu');
  57  |     const after = await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).escrowTransactions.find(e => e.id === id), escrow.id);
  58  |     expect(after.status).toBe(action === 'refund' ? 'refunded' : action === 'disburse' ? 'disbursed' : 'partially_refunded');
  59  |     expect(after.settlements[0].refund).toBe(action === 'refund' ? escrow.amount : action === 'split' ? escrow.amount / 2 : 0);
  60  |     await page.reload();
  61  |     await page.getByRole('button', { name: 'Xem kháng cáo appeal-audit' }).click();
  62  |     await expect(page.getByRole('button', { name: 'Lưu kết quả', exact: true })).toHaveCount(0);
  63  |     await expect(page.getByRole('dialog')).toContainText('Đã áp dụng');
  64  |   });
  65  | }
  66  | 
  67  | test('ADMIN-MASTER account locking requires a reason and records the decision', async ({ page }) => {
  68  |   await resetDemo(page);
  69  |   await login(page, 'admin', '/admin/users');
  70  |   await page.getByRole('searchbox', { name: 'Tìm kiếm người dùng' }).fill('minhanh');
  71  |   await page.getByRole('button', { name: 'Khóa tài khoản minhanh', exact: true }).click();
  72  |   await page.getByRole('button', { name: 'Xác nhận khóa tài khoản', exact: true }).click();
  73  |   await expect(page.getByRole('alert')).toContainText('lý do');
  74  |   await page.getByLabel('Lý do quyết định').fill('Đã đối chiếu báo cáo demo và cần tạm khóa để xử lý sự cố.');
  75  |   await page.getByRole('button', { name: 'Xác nhận khóa tài khoản', exact: true }).click();
  76  |   await expect(page.locator('tbody')).toContainText('Đang bị khóa');
  77  |   await page.goto('/admin/logs');
  78  |   await expect(page.locator('tbody')).toContainText('Đã đối chiếu báo cáo demo');
  79  | });
  80  | 
  81  | test('ADMIN-MASTER approval preview uses uploaded student card images without inventing verified documents', async ({ page }) => {
  82  |   const state = createDemoState(fixedTime);
  83  |   const profile = state.profiles.find(p => p.accountId === 'demo-tutor');
  84  |   const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==';
  85  |   profile.verificationDocuments = [
  86  |     { side: 'front', name: 'uploaded-front.png', type: 'image/png', dataUrl: png },
  87  |     { side: 'back', name: 'uploaded-back.png', type: 'image/png', dataUrl: png },
  88  |   ];
  89  |   await resetDemo(page, { state });
  90  |   await login(page, 'admin', '/admin/tutors');
  91  |   await page.getByRole('tab', { name: 'Tất cả', exact: true }).click();
> 92  |   await page.getByRole('button', { name: 'Xem chi tiết gia sư Trần Gia Bảo', exact: true }).click();
      |                                                                                             ^ Error: locator.click: Test timeout of 25000ms exceeded.
  93  |   const dialog = page.getByRole('dialog');
  94  |   await expect(dialog.getByRole('img', { name: 'Mặt trước thẻ sinh viên' })).toBeVisible();
  95  |   await expect(dialog.getByRole('img', { name: 'Mặt sau thẻ sinh viên' })).toBeVisible();
  96  |   await expect(dialog.locator('.admin-verification-docs')).not.toContainText('Đã kiểm tra');
  97  |   await expect(dialog.locator('.admin-verification-docs')).toContainText('uploaded-front.png');
  98  | });
  99  | 
  100 | test('ADMIN-MASTER dashboard counts each SOS incident once and derives outstanding funds', async ({ page }) => {
  101 |   const state = createDemoState(fixedTime);
  102 |   const lesson = state.lessons.find(l => l.tutorId === 'quoc-bao');
  103 |   state.safetyLogs = [{ id: 'audit-sos', action: 'sos', tutorId: lesson.tutorId, lessonId: lesson.id, timestamp: fixedTime.toISOString(), note: 'Tín hiệu SOS demo' }];
  104 |   state.notifications.push({ id: 'audit-sos-notice', eventId: 'audit-sos', type: 'sos_alert', recipientId: 'demo-admin', tutorId: lesson.tutorId, lessonId: lesson.id, createdAt: fixedTime.toISOString(), message: 'Tín hiệu SOS demo' });
  105 |   const escrow = state.escrowTransactions.find(e => e.status === 'held');
  106 |   escrow.settlements = [{ lessonId: lesson.id, amount: escrow.feePerSession, refund: 0, tutorNet: escrow.feePerSession * 0.9, platformFee: escrow.feePerSession * 0.1 }];
  107 |   await resetDemo(page, { state });
  108 |   await login(page, 'admin', '/admin/dashboard');
  109 |   const pending = escrow.amount - escrow.feePerSession;
  110 |   await expect(page.locator('.stat-item').filter({ hasText: 'Cảnh báo SOS' })).toContainText('1');
  111 |   await expect(page.locator('.stat-item').filter({ hasText: 'Số dư Ký quỹ Escrow' })).toContainText(pending.toLocaleString('vi-VN'));
  112 |   await expect(page.locator('.stat-item').filter({ hasText: 'Doanh thu phí sàn' })).toContainText((escrow.feePerSession * .1).toLocaleString('vi-VN'));
  113 | });
  114 | 
```