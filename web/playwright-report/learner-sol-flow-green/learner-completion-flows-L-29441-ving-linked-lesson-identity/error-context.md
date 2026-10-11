# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-completion-flows.spec.js >> Learner reschedules an owned future lesson while preserving linked lesson identity
- Location: tests\e2e\learner-completion-flows.spec.js:35:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.lesson-info-meta')
Expected substring: "19:30"
Error: strict mode violation: locator('.lesson-info-meta') resolved to 3 elements:
    1) <div class="lesson-info-meta">…</div> aka getByText(':30 – 20:15•Gia sư: Trần Gia Bảo•Online (Google Meet)')
    2) <div class="lesson-info-meta">…</div> aka getByText('18:45 – 19:30•Gia sư: Trần')
    3) <div class="lesson-info-meta">…</div> aka getByText('Thứ 3, 06/10 · 19:30 – 20:15•')

Call log:
  - Expect "toContainText" locator('.lesson-info-meta') with timeout 5000ms
  - waiting for locator('.lesson-info-meta')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - generic [ref=e34]:
          - generic [ref=e35]:
            - generic [ref=e36]: LỊCH HỌC & LỚP TRỰC TUYẾN
            - heading "Lịch học gia sư của bạn" [level=1] [ref=e37]
            - paragraph [ref=e38]: Xem lịch học, tham gia phòng học Google Meet và quản lý bảo lưu buổi dạy.
          - generic [ref=e39]:
            - button "Danh sách" [ref=e40] [cursor=pointer]
            - button "Lịch tuần" [ref=e42] [cursor=pointer]
        - generic [ref=e45]:
          - generic [ref=e46]:
            - button "Tất cả (7)" [ref=e47] [cursor=pointer]
            - button "Sắp diễn ra" [ref=e48] [cursor=pointer]
            - button "Đã hoàn thành" [ref=e49] [cursor=pointer]
            - button "Đã hủy" [ref=e50] [cursor=pointer]
          - generic [ref=e51]:
            - article [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]:
                  - strong [ref=e55]: Thứ 3, 06/10
                  - text: "2026"
                - generic [ref=e56]:
                  - heading "Toán lớp 8" [level=3] [ref=e57]
                  - generic [ref=e58]:
                    - generic [ref=e59]: 19:30 – 20:15
                    - generic [ref=e63]: •
                    - generic [ref=e64]:
                      - text: "Gia sư:"
                      - strong [ref=e65]: Trần Gia Bảo
                    - generic [ref=e66]: •
                    - generic [ref=e67]: Online (Google Meet)
              - generic [ref=e71]:
                - button "Vào phòng học Online" [ref=e72] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=e76] [cursor=pointer]
            - article [ref=e77]:
              - generic [ref=e78]:
                - generic [ref=e79]:
                  - strong [ref=e80]: Thứ 3, 06/10
                  - text: "2026"
                - generic [ref=e81]:
                  - heading "Toán lớp 8" [level=3] [ref=e82]
                  - generic [ref=e83]:
                    - generic [ref=e84]: 18:45 – 19:30
                    - generic [ref=e88]: •
                    - generic [ref=e89]:
                      - text: "Gia sư:"
                      - strong [ref=e90]: Trần Gia Bảo
                    - generic [ref=e91]: •
                    - generic [ref=e92]: Online (Google Meet)
              - generic [ref=e96]:
                - button "Vào phòng học Online" [ref=e97] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=e101] [cursor=pointer]
    - complementary "Widget nhắn tin nhanh" [ref=e102]:
      - button "Mở cửa sổ trò chuyện" [ref=e103] [cursor=pointer]:
        - generic [ref=e106]: "1"
  - dialog [ref=e108]:
    - button "Đóng cửa sổ" [ref=e109] [cursor=pointer]
    - banner [ref=e113]:
      - generic [ref=e114]: CHI TIẾT BUỔI HỌC
      - heading "Toán lớp 8" [level=2] [ref=e115]
      - generic [ref=e116]:
        - generic [ref=e117]: Thứ 3, 06/10 · 19:30 – 20:15
        - generic [ref=e121]: •
        - generic [ref=e122]:
          - text: "Gia sư:"
          - strong [ref=e123]: Trần Gia Bảo
        - generic [ref=e124]: •
        - generic [ref=e125]:
          - text: "Học phí:"
          - strong [ref=e126]: 220.000 đ
    - generic [ref=e127]:
      - button "Vào phòng học Online (Google Meet)" [ref=e128] [cursor=pointer]
      - generic [ref=e132]: "Prototype: không kết nối phòng học hay Google Meet thật."
    - generic [ref=e133]:
      - heading "Tài liệu & Bài tập về nhà" [level=3] [ref=e134]
      - generic [ref=e138]:
        - paragraph [ref=e139]: Gia sư chưa đính kèm tài liệu cho buổi học này.
        - generic [ref=e140]:
          - text: Nộp bài tập
          - button "Nộp bài tập" [ref=e141]
        - paragraph [ref=e142]:
          - strong [ref=e143]: "Nhận xét / Tiến độ:"
          - text: Chưa có nhận xét từ gia sư.
    - generic [ref=e144]:
      - button "Yêu cầu đổi lịch" [ref=e145] [cursor=pointer]
      - generic [ref=e146]:
        - paragraph [ref=e147]: Đổi lịch trước giờ học ít nhất 24 giờ. Chọn một buổi rảnh cùng thời lượng.
        - group "Chọn buổi học cụ thể (1/1)" [ref=e148]:
          - paragraph [ref=e150]: Chỉ chọn lịch rảnh đã lưu của gia sư. Buổi đã có lớp sẽ không hiển thị.
          - generic [ref=e151]:
            - generic [ref=e152]:
              - checkbox "Thứ 3, 06/10 · 18:00–18:45" [disabled] [ref=e153]
              - text: Thứ 3, 06/10 · 18:00–18:45
            - generic [ref=e154]:
              - checkbox "Thứ 3, 06/10 · 20:15–21:00" [disabled] [ref=e155]
              - text: Thứ 3, 06/10 · 20:15–21:00
            - generic [ref=e156]:
              - checkbox "Thứ 5, 08/10 · 18:00–18:45" [disabled] [ref=e157]
              - text: Thứ 5, 08/10 · 18:00–18:45
            - generic [ref=e158]:
              - checkbox "Thứ 5, 08/10 · 18:45–19:30" [disabled] [ref=e159]
              - text: Thứ 5, 08/10 · 18:45–19:30
            - generic [ref=e160]:
              - checkbox "Thứ 5, 08/10 · 19:30–20:15" [disabled] [ref=e161]
              - text: Thứ 5, 08/10 · 19:30–20:15
            - generic [ref=e162]:
              - checkbox "Thứ 5, 08/10 · 20:15–21:00" [disabled] [ref=e163]
              - text: Thứ 5, 08/10 · 20:15–21:00
            - generic [ref=e164]:
              - checkbox "Thứ 6, 09/10 · 18:00–18:45" [disabled] [ref=e165]
              - text: Thứ 6, 09/10 · 18:00–18:45
            - generic [ref=e166]:
              - checkbox "Thứ 6, 09/10 · 18:45–19:30" [disabled] [ref=e167]
              - text: Thứ 6, 09/10 · 18:45–19:30
            - generic [ref=e168]:
              - checkbox "Thứ 6, 09/10 · 19:30–20:15" [disabled] [ref=e169]
              - text: Thứ 6, 09/10 · 19:30–20:15
            - generic [ref=e170]:
              - checkbox "Thứ 6, 09/10 · 20:15–21:00" [disabled] [ref=e171]
              - text: Thứ 6, 09/10 · 20:15–21:00
            - generic [ref=e172]:
              - checkbox "Thứ 7, 10/10 · 09:00–09:45" [disabled] [ref=e173]
              - text: Thứ 7, 10/10 · 09:00–09:45
            - generic [ref=e174]:
              - checkbox "Thứ 7, 10/10 · 09:45–10:30" [disabled] [ref=e175]
              - text: Thứ 7, 10/10 · 09:45–10:30
            - generic [ref=e176]:
              - checkbox "Thứ 7, 10/10 · 10:30–11:15" [disabled] [ref=e177]
              - text: Thứ 7, 10/10 · 10:30–11:15
            - generic [ref=e178]:
              - checkbox "Thứ 7, 10/10 · 11:15–12:00" [disabled] [ref=e179]
              - text: Thứ 7, 10/10 · 11:15–12:00
        - button "Xác nhận đổi lịch" [active] [ref=e180] [cursor=pointer]
        - status [ref=e181]: Đã đổi lịch buổi học.
      - heading "Chính sách & Hủy buổi học" [level=3] [ref=e182]
      - generic [ref=e185]: "Thời gian trước giờ học: 37.5 giờ"
      - generic [ref=e187]:
        - generic [ref=e188]:
          - generic [ref=e189]: "Quy chế áp dụng:"
          - generic [ref=e190]: "Hủy trước >= 24h: Hoàn tiền 100%"
        - generic [ref=e191]:
          - generic [ref=e192]: "Số tiền bạn được hoàn:"
          - generic [ref=e193]: +220.000 đ (100%)
        - generic [ref=e194]:
          - generic [ref=e195]: "Bồi thường cho gia sư:"
          - generic [ref=e196]: 0 đ (0%)
        - paragraph [ref=e197]: Bạn được hoàn lại 100% học phí vào ví khả dụng. Lịch rảnh của gia sư được tự động mở lại.
      - button "Hủy buổi học này" [ref=e198] [cursor=pointer]
    - generic [ref=e199]:
      - generic [ref=e200]:
        - generic [ref=e201]: Gặp sự cố hoặc gia sư vắng mặt?
        - text: Chỉ hoàn khoản ký quỹ demo còn giữ và liên kết với buổi học này.
      - button "Yêu cầu Hoàn tiền 100% vì Sự cố" [ref=e202] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { resetDemo, login, logout } from './demoHelpers.js';
  3   | import { createDemoState } from '../../src/features/domain/demoDomain.js';
  4   | import { fixedTime } from './demoHelpers.js';
  5   | import { acceptDomainOffer } from '../../src/features/domain/commerce.js';
  6   | import { getBookableRanges } from '../../src/data/tutorSchedule.js';
  7   | import { bookableSessions } from '../../src/features/learner/profileSelection.js';
  8   | 
  9   | test('Learner lesson downloads real attached content and can submit homework', async ({ page }) => {
  10  |   const state = createDemoState(fixedTime);
  11  |   const lesson = state.lessons.find(item => item.learnerId === 'demo-learner');
  12  |   lesson.materials = [{ name: 'assignment.txt', type: 'text/plain', dataUrl: 'data:text/plain;base64,bGVzc29u' }];
  13  |   await resetDemo(page, { state }); await login(page, 'minhanh', '/learner/schedule');
  14  |   await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  15  |   const downloaded = page.waitForEvent('download');
  16  |   await page.getByRole('link', { name: 'Tải assignment.txt' }).click();
  17  |   expect((await downloaded).suggestedFilename()).toBe('assignment.txt');
  18  |   await page.getByLabel('Nộp bài tập').setInputFiles({ name: 'homework.txt', mimeType: 'text/plain', buffer: Buffer.from('Learner submission') });
  19  |   await expect(page.getByText('homework.txt', { exact: true })).toBeVisible();
  20  | });
  21  | 
  22  | test('Learner completed lesson supports review and a four-session renewal with concrete dates', async ({ page }) => {
  23  |   await resetDemo(page); await login(page, 'minhanh', '/learner/schedule');
  24  |   await page.getByRole('button', { name: 'Đã hoàn thành', exact: true }).click();
  25  |   await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  26  |   await page.getByLabel('Nhận xét', { exact: true }).fill('Buổi học rõ ràng, giải thích dễ hiểu.');
  27  |   await page.getByRole('button', { name: 'Gửi đánh giá buổi học' }).click();
  28  |   await expect(page.getByRole('status')).toContainText('Đã gửi đánh giá');
  29  |   await page.getByLabel(/Gia hạn với gia sư/).selectOption('4');
  30  |   for (let index = 0; index < 4; index++) await page.locator('.offer-session-picker input').nth(index).check();
  31  |   await page.getByRole('button', { name: 'Đặt cọc gia hạn' }).click();
  32  |   await expect(page.getByRole('status')).toContainText('Đã đặt cọc và gia hạn');
  33  | });
  34  | 
  35  | test('Learner reschedules an owned future lesson while preserving linked lesson identity', async ({ page }) => {
  36  |   const seed = createDemoState(fixedTime);
  37  |   const proposals = bookableSessions(getBookableRanges(seed.availability, seed.lessons, 'quoc-bao'), 45)
  38  |     .filter(item => new Date(`${item.date}T00:00:00+07:00`).getTime() + item.start * 60000 - fixedTime.getTime() >= 86400000).slice(0, 2);
  39  |   const paid = acceptDomainOffer(seed, 'msg-003', 'accepted', seed.users.find(user => user.id === 'demo-learner'), { proposals }, fixedTime);
  40  |   expect(paid.ok, paid.error).toBe(true);
  41  |   const original = paid.state.lessons.find(lesson => lesson.id === paid.lessonIds[0]);
  42  |   await resetDemo(page, { state: paid.state }); await login(page, 'minhanh', '/learner/schedule');
  43  |   await page.getByRole('button', { name: 'Sắp diễn ra', exact: true }).click();
  44  |   await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  45  |   await page.getByRole('button', { name: 'Yêu cầu đổi lịch' }).click();
  46  |   await page.locator('.lesson-reschedule .offer-session-picker input').first().check();
  47  |   await page.getByRole('button', { name: 'Xác nhận đổi lịch' }).click();
  48  |   await expect(page.getByRole('status')).toContainText('Đã đổi lịch');
  49  |   const updated = await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).lessons.find(lesson => lesson.id === id), original.id);
  50  |   for (const field of ['id', 'requestId', 'escrowId', 'sessionFee']) expect(updated[field]).toBe(original[field]);
  51  |   expect([updated.date, updated.start, updated.end]).not.toEqual([original.date, original.start, original.end]);
> 52  |   await expect(page.locator('.lesson-info-meta')).toContainText(`${String(updated.start / 60 | 0).padStart(2, '0')}:${String(updated.start % 60).padStart(2, '0')}`);
      |                                                   ^ Error: expect(locator).toContainText(expected) failed
  53  | });
  54  | 
  55  | test('UI-COMP-L16 cancellation preview uses the actual lesson time and linked deposit', async ({ page }) => {
  56  |   const seed = createDemoState(fixedTime);
  57  |   const proposals = bookableSessions(getBookableRanges(seed.availability, seed.lessons, 'quoc-bao'), 45).slice(0, 2);
  58  |   const paid = acceptDomainOffer(seed, 'msg-003', 'accepted', seed.users.find(user => user.id === 'demo-learner'), { proposals }, fixedTime);
  59  |   expect(paid.ok, paid.error).toBe(true);
  60  |   const lesson = paid.state.lessons.find(item => item.id === paid.lessonIds[0]);
  61  |   const referenceTime = new Date(new Date(`${lesson.date}T00:00:00+07:00`).getTime() + lesson.start * 60000 - 5 * 3600000);
  62  |   await resetDemo(page, { state: paid.state, referenceTime }); await login(page, 'minhanh', '/learner/schedule');
  63  |   await page.getByRole('button', { name: 'Sắp diễn ra', exact: true }).click();
  64  |   await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  65  |   await expect(page.getByRole('dialog')).toContainText('Hủy trong 2h – 24h: Hoàn tiền 50%');
  66  |   await expect(page.getByRole('button', { name: /Ví dụ:.*giờ/ })).toHaveCount(0);
  67  |   await page.getByRole('button', { name: 'Hủy buổi học này', exact: true }).click();
  68  |   await page.getByRole('button', { name: 'Xác nhận hủy buổi học' }).click();
  69  |   const after = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  70  |   expect(after.lessons.find(item => item.id === lesson.id).status).toBe('cancelled');
  71  |   expect(after.wallets['demo-learner'].availableBalance).toBe(paid.state.wallets['demo-learner'].availableBalance + lesson.sessionFee / 2);
  72  | });
  73  | 
  74  | test('Tutor sends a concrete offer and Learner pays the same conversation proposal', async ({ page }) => {
  75  |   const browserErrors = [];
  76  |   page.on('pageerror', error => browserErrors.push(error.message));
  77  |   await resetDemo(page); await login(page, 'giabao', '/messages');
  78  |   await page.getByRole('button', { name: 'Gửi Đề xuất Học phí', exact: true }).first().click();
  79  |   expect(browserErrors).toEqual([]);
  80  |   await expect(page.getByRole('dialog')).toBeVisible();
  81  |   await page.getByLabel('Khối lớp / Trình độ').fill('THPT');
  82  |   await page.getByLabel('Lịch học dự kiến').fill('Lịch cụ thể đã chọn');
  83  |   await page.locator('.custom-offer-modal .offer-session-picker input').nth(0).check();
  84  |   await page.locator('.custom-offer-modal .offer-session-picker input').nth(1).check();
  85  |   await page.getByRole('button', { name: 'Xác nhận gửi đề xuất' }).click();
  86  |   await expect(page.getByRole('dialog')).toHaveCount(0);
  87  |   await page.goto('/tutor/dashboard'); await logout(page);
  88  |   await login(page, 'minhanh', '/messages');
  89  |   const offer = page.getByTestId('custom-offer-card').filter({ hasText: 'THPT' });
  90  |   await offer.getByRole('button', { name: 'Đồng ý & Đặt cọc ngay' }).click();
  91  |   await page.getByRole('button', { name: 'Xác nhận đặt cọc', exact: true }).click();
  92  |   await expect(offer.locator('[data-status="accepted"]')).toBeVisible();
  93  | });
  94  | 
  95  | test('Learner discovery preserves tutor map positions after sorting and filters by level', async ({ page }) => {
  96  |   await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  97  |   await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  98  |   const pin = page.getByRole('button', { name: /Chọn Trần Gia Bảo,/ });
  99  |   const before = await pin.getAttribute('transform');
  100 |   await page.getByLabel('Sắp xếp').selectOption('price');
  101 |   expect(await pin.getAttribute('transform')).toBe(before);
  102 |   await page.getByRole('group', { name: 'Cấp độ học' }).getByLabel('THCS', { exact: true }).check();
  103 |   await expect(page.locator('.learner-split-list .tutor-card')).not.toHaveCount(0);
  104 | });
  105 | 
  106 | test('Learner post supports Mầm non and stores user-selected concrete session proposals', async ({ page }) => {
  107 |   await resetDemo(page); await login(page, 'minhanh', '/learner/post-class');
  108 |   await page.getByLabel('Khối lớp học viên *').selectOption('Mầm non');
  109 |   await page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' }).click();
  110 |   await page.getByLabel('Ngày học mong muốn').fill('2026-10-08');
  111 |   await page.getByLabel('Giờ bắt đầu').fill('18:00');
  112 |   await page.getByRole('button', { name: 'Thêm buổi học' }).click();
  113 |   await page.getByRole('button', { name: 'Tiếp tục: Ngân sách & Mục tiêu' }).click();
  114 |   await page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last().click();
  115 |   await expect(page).toHaveURL(/my-classes$/);
  116 |   await expect(page.locator('.myclass-card').filter({ hasText: 'Mầm non' })).toContainText('08/10');
  117 | });
  118 | 
  119 | test('UI-COMP-L17 negotiable class does not persist hidden mock budget amounts', async ({ page }) => {
  120 |   await resetDemo(page); await login(page, 'minhanh', '/learner/post-class');
  121 |   const before = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).classPosts.map(post => post.id));
  122 |   await page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' }).click();
  123 |   await page.getByRole('button', { name: 'Tiếp tục: Ngân sách & Mục tiêu' }).click();
  124 |   await page.getByRole('button', { name: /4. Thương lượng/ }).click();
  125 |   await page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last().click();
  126 |   await expect(page).toHaveURL(/my-classes$/);
  127 |   const created = await page.evaluate(ids => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).classPosts.find(post => !ids.includes(post.id)), before);
  128 |   expect(created.budgetMode).toBe('negotiable');
  129 |   for (const field of ['budgetAmount', 'minBudget', 'maxBudget']) expect(created[field]).toBeNull();
  130 | });
  131 | 
```