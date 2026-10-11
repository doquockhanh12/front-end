# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-completion-flows.spec.js >> Tutor sends a concrete offer and Learner pays the same conversation proposal
- Location: tests\e2e\learner-completion-flows.spec.js:74:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Xác nhận gửi đề xuất' })
    - locator resolved to <button type="submit" class="btn-modal-submit">Xác nhận gửi đề xuất</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    46 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - element is outside of the viewport
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - link "TutorNearMe · Trò chuyện" [ref=e5] [cursor=pointer]:
      - /url: /
    - generic [ref=e10]:
      - link "Quay lại bảng điều khiển" [ref=e11] [cursor=pointer]:
        - /url: /tutor/dashboard
      - img "Ảnh đại diện của Trần Gia Bảo" [ref=e14]:
        - generic [aria-hidden] [ref=e15]: GB
  - generic [ref=e16]:
    - complementary [ref=e17]:
      - generic [ref=e18]:
        - heading "Tin nhắn" [level=2] [ref=e20]
        - textbox "Tìm kiếm cuộc trò chuyện" [ref=e25]:
          - /placeholder: Tìm đoạn chat...
      - list [ref=e26]:
        - listitem [ref=e27]:
          - 'button "Ảnh đại diện của Nguyễn Minh Anh Nguyễn Minh Anh 15:10 Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần)" [ref=e28] [cursor=pointer]':
            - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=e30]:
              - generic [aria-hidden] [ref=e31]: MA
            - generic [ref=e32]:
              - generic [ref=e33]:
                - generic [ref=e34]: Nguyễn Minh Anh
                - generic [ref=e35]: 15:10
              - paragraph [ref=e37]: "Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần)"
    - main [ref=e38]:
      - generic [ref=e39]:
        - button "Trở lại danh sách hội thoại" [ref=e40] [cursor=pointer]
        - generic [ref=e43]:
          - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=e44]:
            - generic [aria-hidden] [ref=e45]: MA
          - generic [ref=e46]:
            - heading "Nguyễn Minh Anh" [level=3] [ref=e47]
            - paragraph [ref=e48]:
              - generic [ref=e50]: Học viên · Trực tuyến
        - button "Gửi Đề xuất Học phí" [ref=e52] [cursor=pointer]:
          - generic [ref=e56]: Gửi đề xuất học phí
      - alert [ref=e57]:
        - generic [ref=e60]:
          - strong [ref=e61]: "CẢNH BÁO:"
          - text: Mọi thỏa thuận chuyển khoản ngoài sàn sẽ
          - strong [ref=e62]: MẤT TOÀN BỘ BẢO HIỂM HOÀN TIỀN 100%
          - text: . TutorNearMe miễn trừ mọi trách nhiệm khi giao dịch ngoài hệ thống.
      - button "Gửi Đề xuất Học phí" [ref=e64] [cursor=pointer]
      - generic [ref=e67]:
        - generic [ref=e68]: Hôm nay
        - generic [ref=e71]:
          - generic [ref=e72]: Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không?
          - generic [ref=e73]: 14:45
        - generic [ref=e75]:
          - generic [ref=e76]: Dạ chào chị Minh Anh! Em hoàn toàn sắp xếp được lịch vào tối Thứ 3 và Thứ 5 ạ. Em sẽ mang theo giáo án chuyên biệt để test năng lực buổi đầu cho bé.
          - generic [ref=e77]: 15:00
        - generic [ref=e79]:
          - generic [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]: Đề xuất học phí
              - heading "Toán lớp 8 · Lớp 8" [level=4] [ref=e85]
            - generic [ref=e86]: Chờ phản hồi
          - generic [ref=e90]:
            - generic [ref=e91]:
              - generic [ref=e92]:
                - generic [ref=e93]: Số buổi
                - generic [ref=e94]: 2 buổi
              - generic [ref=e95]:
                - generic [ref=e96]: Học phí / buổi
                - generic [ref=e97]: 220.000 đ
              - generic [ref=e98]:
                - generic [ref=e99]: Lịch học
                - text: Thứ 3 & Thứ 5 (18:30 - 20:00)
            - generic [ref=e100]:
              - generic [ref=e101]: Tổng tiền cọc ký quỹ (Escrow)
              - generic [ref=e106]: 440.000 đ
              - paragraph [ref=e107]: Bảo vệ 100% hoàn tiền bởi TutorNearMe Escrow Shield. Tiền chỉ giải ngân sau khi buổi học hoàn thành.
            - generic [ref=e108]: Đang chờ học viên phản hồi và thanh toán ký quỹ.
      - generic [ref=e110]:
        - textbox "Nội dung tin nhắn" [ref=e111]:
          - /placeholder: Nhập tin nhắn...
        - button "Gửi" [disabled] [ref=e112]
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
  52  |   await expect(page.locator('.lesson-info-meta')).toContainText(`${String(updated.start / 60 | 0).padStart(2, '0')}:${String(updated.start % 60).padStart(2, '0')}`);
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
> 85  |   await page.getByRole('button', { name: 'Xác nhận gửi đề xuất' }).click();
      |                                                                    ^ Error: locator.click: Test timeout of 60000ms exceeded.
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