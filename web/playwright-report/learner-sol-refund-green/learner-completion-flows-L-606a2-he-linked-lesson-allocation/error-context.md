# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learner-completion-flows.spec.js >> Learner incident refund records selected reason and only settles the linked lesson allocation
- Location: tests\e2e\learner-completion-flows.spec.js:132:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Yêu cầu Hoàn tiền 100% vì Sự cố' })
    - locator resolved to <button type="button" class="one-click-refund-btn">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

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
                - strong [ref=e55]: Thứ 7, 06/06
                - text: "2026"
              - generic [ref=e56]:
                - heading "Tiếng Anh" [level=3] [ref=e57]
                - generic [ref=e58]:
                  - generic [ref=e59]: 18:00 – 18:45
                  - generic [ref=e63]: •
                  - generic [ref=e64]:
                    - text: "Gia sư:"
                    - strong [ref=e65]: Trần Gia Bảo
                  - generic [ref=e66]: •
                  - generic [ref=e67]: Online
            - generic [ref=e71]:
              - button "Vào phòng học Online" [ref=e72] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=e76] [cursor=pointer]
          - article [ref=e77]:
            - generic [ref=e78]:
              - generic [ref=e79]:
                - strong [ref=e80]: Thứ 6, 03/07
                - text: "2026"
              - generic [ref=e81]:
                - heading "Tiếng Anh" [level=3] [ref=e82]
                - generic [ref=e83]:
                  - generic [ref=e84]: 18:00 – 18:45
                  - generic [ref=e88]: •
                  - generic [ref=e89]:
                    - text: "Gia sư:"
                    - strong [ref=e90]: Trần Gia Bảo
                  - generic [ref=e91]: •
                  - generic [ref=e92]: Online
            - generic [ref=e96]:
              - button "Vào phòng học Online" [ref=e97] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=e101] [cursor=pointer]
          - article [ref=e102]:
            - generic [ref=e103]:
              - generic [ref=e104]:
                - strong [ref=e105]: CN, 20/09
                - text: "2026"
              - generic [ref=e106]:
                - heading "Tiếng Anh" [level=3] [ref=e107]
                - generic [ref=e108]:
                  - generic [ref=e109]: 18:00 – 18:45
                  - generic [ref=e113]: •
                  - generic [ref=e114]:
                    - text: "Gia sư:"
                    - strong [ref=e115]: Trần Gia Bảo
                  - generic [ref=e116]: •
                  - generic [ref=e117]: Online
            - generic [ref=e121]:
              - button "Vào phòng học Online" [ref=e122] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=e126] [cursor=pointer]
          - article [ref=e127]:
            - generic [ref=e128]:
              - generic [ref=e129]:
                - strong [ref=e130]: CN, 27/09
                - text: "2026"
              - generic [ref=e131]:
                - heading "IELTS" [level=3] [ref=e132]
                - generic [ref=e133]:
                  - generic [ref=e134]: 19:00 – 19:45
                  - generic [ref=e138]: •
                  - generic [ref=e139]:
                    - text: "Gia sư:"
                    - strong [ref=e140]: Trần Gia Bảo
                  - generic [ref=e141]: •
                  - generic [ref=e142]: Online
            - generic [ref=e146]:
              - button "Vào phòng học Online" [ref=e147] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=e151] [cursor=pointer]
          - article [ref=e152]:
            - generic [ref=e153]:
              - generic [ref=e154]:
                - strong [ref=e155]: Thứ 5, 01/10
                - text: "2026"
              - generic [ref=e156]:
                - heading "Tiếng Anh" [level=3] [ref=e157]
                - generic [ref=e158]:
                  - generic [ref=e159]: 18:00 – 18:45
                  - generic [ref=e163]: •
                  - generic [ref=e164]:
                    - text: "Gia sư:"
                    - strong [ref=e165]: Trần Gia Bảo
                  - generic [ref=e166]: •
                  - generic [ref=e167]: Online
            - generic [ref=e171]:
              - button "Vào phòng học Online" [ref=e172] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=e176] [cursor=pointer]
          - article [ref=e177]:
            - generic [ref=e178]:
              - generic [ref=e179]:
                - strong [ref=e180]: Thứ 3, 06/10
                - text: "2026"
              - generic [ref=e181]:
                - heading "Toán lớp 8" [level=3] [ref=e182]
                - generic [ref=e183]:
                  - generic [ref=e184]: 18:00 – 18:45
                  - generic [ref=e188]: •
                  - generic [ref=e189]:
                    - text: "Gia sư:"
                    - strong [ref=e190]: Trần Gia Bảo
                  - generic [ref=e191]: •
                  - generic [ref=e192]: Online (Google Meet)
            - generic [ref=e196]:
              - button "Vào phòng học Online" [ref=e197] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=e201] [cursor=pointer]
          - article [ref=e202]:
            - generic [ref=e203]:
              - generic [ref=e204]:
                - strong [ref=e205]: Thứ 3, 06/10
                - text: "2026"
              - generic [ref=e206]:
                - heading "Toán lớp 8" [level=3] [ref=e207]
                - generic [ref=e208]:
                  - generic [ref=e209]: 18:45 – 19:30
                  - generic [ref=e213]: •
                  - generic [ref=e214]:
                    - text: "Gia sư:"
                    - strong [ref=e215]: Trần Gia Bảo
                  - generic [ref=e216]: •
                  - generic [ref=e217]: Online (Google Meet)
            - generic [ref=e221]:
              - button "Vào phòng học Online" [ref=e222] [cursor=pointer]
              - button "Chi tiết & Hủy lịch" [ref=e226] [cursor=pointer]
  - complementary "Widget nhắn tin nhanh" [ref=e227]:
    - button "Mở cửa sổ trò chuyện" [ref=e228] [cursor=pointer]:
      - generic [ref=e231]: "1"
```

# Test source

```ts
  45  |   await page.getByRole('button', { name: 'Yêu cầu đổi lịch' }).click();
  46  |   await page.locator('.lesson-reschedule .offer-session-picker input').first().check();
  47  |   await page.getByRole('button', { name: 'Xác nhận đổi lịch' }).click();
  48  |   await expect(page.getByRole('status')).toContainText('Đã đổi lịch');
  49  |   const updated = await page.evaluate(id => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')).lessons.find(lesson => lesson.id === id), original.id);
  50  |   for (const field of ['id', 'requestId', 'escrowId', 'sessionFee']) expect(updated[field]).toBe(original[field]);
  51  |   expect([updated.date, updated.start, updated.end]).not.toEqual([original.date, original.start, original.end]);
  52  |   await expect(page.getByRole('dialog').locator('.lesson-info-meta')).toContainText(`${String(updated.start / 60 | 0).padStart(2, '0')}:${String(updated.start % 60).padStart(2, '0')}`);
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
  74  | test('UI-COMP-L18 concrete offer form remains scrollable and payable across roles', async ({ page }) => {
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
  132 | test('Learner incident refund records selected reason and only settles the linked lesson allocation', async ({ page }) => {
  133 |   const seed = createDemoState(fixedTime);
  134 |   const proposals = bookableSessions(getBookableRanges(seed.availability, seed.lessons, 'quoc-bao'), 45).slice(0, 2);
  135 |   const paid = acceptDomainOffer(seed, 'msg-003', 'accepted', seed.users.find(user => user.id === 'demo-learner'), { proposals }, fixedTime);
  136 |   expect(paid.ok, paid.error).toBe(true);
  137 |   const lesson = paid.state.lessons.find(item => item.id === paid.lessonIds[0]);
  138 |   await resetDemo(page, { state: paid.state }); await login(page, 'minhanh', '/learner/schedule');
  139 |   await page.getByRole('button', { name: 'Sắp diễn ra', exact: true }).click();
  140 |   await page.getByRole('button', { name: 'Chi tiết & Hủy lịch' }).first().click();
  141 |   const refund = page.getByRole('button', { name: 'Yêu cầu Hoàn tiền 100% vì Sự cố' });
  142 |   await expect(refund).toBeDisabled();
  143 |   const reason = 'Gia sư trễ từ 15 phút';
  144 |   await page.getByLabel('Lý do yêu cầu hoàn tiền').selectOption(reason);
> 145 |   await refund.click();
      |                ^ Error: locator.click: Test timeout of 60000ms exceeded.
  146 |   await expect(page.getByRole('dialog')).toHaveCount(0);
  147 |   const after = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  148 |   const escrow = after.escrowTransactions.find(item => item.id === lesson.escrowId);
  149 |   expect(escrow.status).toBe('held');
  150 |   expect(escrow.settlements).toHaveLength(1);
  151 |   expect(escrow.settlements[0]).toMatchObject({ lessonId: lesson.id, reason, refund: lesson.sessionFee });
  152 |   expect(after.lessons.find(item => item.id === lesson.id)).toMatchObject({ status: 'cancelled', cancelReason: reason });
  153 |   expect(after.lessons.find(item => item.id === paid.lessonIds[1]).status).toBe('confirmed');
  154 |   expect(after.wallets['demo-learner'].availableBalance).toBe(paid.state.wallets['demo-learner'].availableBalance + lesson.sessionFee);
  155 | });
  156 | 
```