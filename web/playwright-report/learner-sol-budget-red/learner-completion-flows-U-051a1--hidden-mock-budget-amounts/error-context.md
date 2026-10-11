# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-completion-flows.spec.js >> UI-COMP-L17 negotiable class does not persist hidden mock budget amounts
- Location: tests\e2e\learner-completion-flows.spec.js:119:1

# Error details

```
Error: expect(received).toBeNull()

Received: 250000
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
      - generic [ref=e34]:
        - generic [ref=e35]:
          - heading "Lớp học của tôi" [level=1] [ref=e36]
          - paragraph [ref=e37]: Theo dõi các tin tìm gia sư đã đăng, xem hồ sơ ứng tuyển và chọn gia sư phù hợp nhất.
        - link "Đăng tin tìm gia sư" [ref=e38] [cursor=pointer]:
          - /url: /learner/post-class
      - tablist [ref=e40]:
        - tab "Đang tìm gia sư (Mở) (2)" [selected] [ref=e41] [cursor=pointer]
        - tab "Đã chốt gia sư (0)" [ref=e42] [cursor=pointer]
        - tab "Đã đóng / Hết hạn (0)" [ref=e43] [cursor=pointer]
      - generic [ref=e44]:
        - article [ref=e45]:
          - generic [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e48]:
                - generic [ref=e49]: "MÃ LỚP: #post-1791154805372-junn"
                - generic [ref=e50]: Chờ kiểm duyệt
              - heading "Toán – Lớp 8" [level=2] [ref=e51]
            - generic [ref=e52]:
              - generic [ref=e53]: Ngân sách dự kiến
              - strong [ref=e54]: Thương lượng với gia sư
          - generic [ref=e55]:
            - generic [ref=e56]: Quận 1, TP. Hồ Chí Minh (Tại nhà)
            - generic [ref=e60]: Thứ 3 và Thứ 5 (18:30 - 20:00)
            - generic [ref=e63]:
              - strong [ref=e69]: "0"
              - text: gia sư đã ứng tuyển
          - generic [ref=e70]:
            - generic [ref=e71]: Yêu cầu học thử 45 phút
            - paragraph [ref=e74]:
              - strong [ref=e75]: "Mục tiêu:"
              - text: Lấy lại căn bản hình học không gian, nâng cao tư duy giải bài tập và chuẩn bị kiểm tra giữa kỳ.
          - generic [ref=e76]:
            - generic [ref=e77]: Danh sách ứng viên (0)
            - paragraph [ref=e79]: Chưa có gia sư nào ứng tuyển. Thông báo của bạn đang được ưu tiên hiển thị tới gia sư gần khu vực.
        - article [ref=e80]:
          - generic [ref=e81]:
            - generic [ref=e82]:
              - generic [ref=e83]:
                - generic [ref=e84]: "MÃ LỚP: #post-101"
                - generic [ref=e85]: Đang mở nhận hồ sơ
              - heading "Toán – Lớp 8" [level=2] [ref=e86]
            - generic [ref=e87]:
              - generic [ref=e88]: Ngân sách dự kiến
              - strong [ref=e89]: 220.000 đ / buổi (Cố định)
          - generic [ref=e90]:
            - generic [ref=e91]: Bình Thạnh, TP. Hồ Chí Minh (Tại nhà)
            - generic [ref=e95]: Thứ 3 và Thứ 5 (18:30 - 20:00)
            - generic [ref=e98]:
              - strong [ref=e104]: "2"
              - text: gia sư đã ứng tuyển
          - generic [ref=e105]:
            - generic [ref=e106]: Yêu cầu học thử 45 phút
            - paragraph [ref=e109]:
              - strong [ref=e110]: "Mục tiêu:"
              - text: Lấy lại căn bản hình học không gian và ôn thi giữa kỳ
          - generic [ref=e111]:
            - generic [ref=e112]:
              - generic [ref=e113]: Danh sách ứng viên (2)
              - button "So sánh các ứng viên (2)" [ref=e114] [cursor=pointer]
            - generic [ref=e119]:
              - generic [ref=e120]:
                - generic [ref=e121]:
                  - img "Ảnh đại diện của Trần Gia Bảo" [ref=e122]:
                    - generic [aria-hidden] [ref=e123]: GB
                  - generic [ref=e124]:
                    - generic [ref=e125]:
                      - strong [ref=e126]: Trần Gia Bảo
                      - generic "Tích xanh xác minh thẻ sinh viên" [ref=e127]: ✓ Tích xanh
                      - generic [ref=e128]: Top-Rated
                    - generic [ref=e129]: ĐH Ngoại thương
                    - generic [ref=e130]:
                      - generic [ref=e131]: "4.9"
                      - generic [ref=e134]: ·
                      - generic [ref=e135]: "Đúng giờ: Chưa có dữ liệu"
                - generic [ref=e139]:
                  - generic [ref=e140]: Đề xuất học phí
                  - strong [ref=e141]: 220.000 đ / buổi
                  - generic [ref=e142]: "Thực nhận: 198.000 đ"
                - generic [ref=e143]:
                  - button "Chọn gia sư này" [ref=e144] [cursor=pointer]
                  - button "Nhắn tin" [ref=e145] [cursor=pointer]
              - generic [ref=e148]:
                - generic [ref=e149]:
                  - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=e150]:
                    - generic [aria-hidden] [ref=e151]: MA
                  - generic [ref=e152]:
                    - generic [ref=e153]:
                      - strong [ref=e154]: Nguyễn Mai Anh
                      - generic "Tích xanh xác minh thẻ sinh viên" [ref=e155]: ✓ Tích xanh
                    - generic [ref=e156]: ĐH Khoa học Tự nhiên
                    - generic [ref=e157]:
                      - generic [ref=e158]: "4.9"
                      - generic [ref=e161]: ·
                      - generic [ref=e162]: "Đúng giờ: Chưa có dữ liệu"
                - generic [ref=e166]:
                  - generic [ref=e167]: Đề xuất học phí
                  - strong [ref=e168]: 240.000 đ / buổi
                  - generic [ref=e169]: "Thực nhận: 216.000 đ"
                - generic [ref=e170]:
                  - button "Chọn gia sư này" [ref=e171] [cursor=pointer]
                  - button "Nhắn tin" [ref=e172] [cursor=pointer]
    - contentinfo [ref=e175]:
      - generic [ref=e176]:
        - generic [ref=e177]:
          - link "TN TutorNearMe Gia sư gần bạn" [ref=e178] [cursor=pointer]:
            - /url: /
            - generic [ref=e179]: TN
            - generic [ref=e180]:
              - strong [ref=e181]: TutorNearMe
              - generic [ref=e182]: Gia sư gần bạn
          - paragraph [ref=e183]: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
        - generic [ref=e184]:
          - strong [ref=e185]: Người học
          - link "Dành cho người học" [ref=e186] [cursor=pointer]:
            - /url: /learner
          - link "Tìm gia sư" [ref=e187] [cursor=pointer]:
            - /url: /learner/search
          - link "Yêu cầu học" [ref=e188] [cursor=pointer]:
            - /url: /requests
        - generic [ref=e189]:
          - strong [ref=e190]: Gia sư
          - link "Trở thành gia sư" [ref=e191] [cursor=pointer]:
            - /url: /tutor
          - link "Không gian gia sư" [ref=e192] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Cơ hội dạy" [ref=e193] [cursor=pointer]:
            - /url: /tutor/requests
        - generic [ref=e194]:
          - strong [ref=e195]: Khám phá
          - link "Trang chủ" [ref=e196] [cursor=pointer]:
            - /url: /
          - link "Admin demo" [ref=e197] [cursor=pointer]:
            - /url: /admin/dashboard
      - generic [ref=e198]: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
  - complementary "Widget nhắn tin nhanh" [ref=e199]:
    - button "Mở cửa sổ trò chuyện" [ref=e200] [cursor=pointer]:
      - generic [ref=e203]: "1"
```

# Test source

```ts
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
> 129 |   for (const field of ['budgetAmount', 'minBudget', 'maxBudget']) expect(created[field]).toBeNull();
      |                                                                                          ^ Error: expect(received).toBeNull()
  130 | });
  131 | 
```