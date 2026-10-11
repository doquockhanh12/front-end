# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-completion-flows.spec.js >> APPEAL-MASTER hide_review requires confirmation and changes only the linked entity
- Location: tests\e2e\admin-completion-flows.spec.js:116:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "hidden"
Received: "approved"
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
        - strong [ref=e85]: Kháng cáo
      - generic [ref=e86]:
        - generic [ref=e87]:
          - img "Ảnh đại diện của Quản trị viên" [ref=e88]:
            - generic [aria-hidden] [ref=e89]: AD
          - generic [ref=e90]: Quản trị viên
        - button "Đăng xuất" [ref=e91] [cursor=pointer]
    - main [ref=e95]:
      - generic [ref=e96]:
        - generic [ref=e97]:
          - text: XEM XÉT LẠI BÁO CÁO
          - heading "Kháng cáo" [level=1] [ref=e98]
          - paragraph [ref=e99]: Đối chiếu giải trình và bằng chứng của bên bị báo cáo trước khi đưa ra kết quả.
        - link "Báo cáo & sự cố" [ref=e100] [cursor=pointer]:
          - /url: /admin/issues
      - generic [ref=e101]:
        - generic [ref=e102]:
          - text: Trạng thái kháng cáo
          - combobox "Trạng thái kháng cáo" [ref=e103] [cursor=pointer]:
            - option "Tất cả" [selected]
            - option "Chờ xem xét"
            - option "Đang xem xét"
            - option "Chấp nhận"
            - option "Không chấp nhận"
        - generic [ref=e104]:
          - generic [ref=e105]: Tìm kháng cáo
          - searchbox "Tìm kháng cáo" [ref=e106]
      - status [ref=e107]: Đã lưu kết quả xem xét kháng cáo và các hành động demo đã xác nhận.
      - paragraph [ref=e108]: Hiển thị 1 / 1 hồ sơ
      - region "Bảng kháng cáo" [ref=e110]:
        - table [ref=e111]:
          - rowgroup [ref=e112]:
            - row [ref=e113]:
              - columnheader "Hồ sơ / sự cố" [ref=e114]
              - columnheader "Tài khoản" [ref=e115]
              - columnheader "Lý do" [ref=e116]
              - columnheader "Ngày gửi" [ref=e117]
              - columnheader "Trạng thái" [ref=e118]
              - columnheader "Thao tác" [ref=e119]
          - rowgroup [ref=e120]:
            - row [ref=e121]:
              - cell [ref=e122]:
                - strong [ref=e123]: appeal-account-audit
                - text: ISSUE-105
              - cell "Trần Gia Bảo" [ref=e124]
              - cell "Bị tố cáo oan" [ref=e126]
              - cell "5/10/2026" [ref=e128]
              - cell "Chấp nhận" [ref=e129]
              - cell [ref=e131]:
                - button "Xem kháng cáo appeal-account-audit" [active] [ref=e133] [cursor=pointer]
```

# Test source

```ts
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
  92  |   await page.getByRole('button', { name: 'Xem chi tiết hồ sơ Trần Gia Bảo', exact: true }).click();
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
  115 | for (const action of ['unsuspend', 'reduce_warning', 'hide_review']) {
  116 |   test(`APPEAL-MASTER ${action} requires confirmation and changes only the linked entity`, async ({ page }) => {
  117 |     const state = createDemoState(fixedTime);
  118 |     const issue = state.issues.find(i => i.id === 'ISSUE-105');
  119 |     const account = state.users.find(u => u.id === 'demo-tutor');
  120 |     const review = state.reviews[0];
  121 |     if (action === 'unsuspend') account.status = 'suspended';
  122 |     issue.relatedReviewId = review.id;
  123 |     const priorCount = account.warningCount;
  124 |     state.appeals = [{ id: 'appeal-account-audit', issueId: issue.id, accountId: account.id, reason: 'wrongful', content: 'Đề nghị đối chiếu lại hồ sơ, cảnh cáo và đánh giá liên quan tới sự cố.', truthful: true,
  125 |       evidence: [{ kind: 'link', url: 'https://example.org/account-proof', description: 'Bằng chứng demo phục vụ xét hồ sơ.' }], status: 'pending', createdAt: fixedTime.toISOString() }];
  126 |     await resetDemo(page, { state });
  127 |     await login(page, 'admin', '/admin/appeals');
  128 |     await page.getByRole('button', { name: 'Xem kháng cáo appeal-account-audit' }).click();
  129 |     await page.getByRole('combobox', { name: /^Kết quả xem xét/ }).selectOption('accepted');
  130 |     await page.getByLabel('Căn cứ / phản hồi').fill('Đã đối chiếu bằng chứng độc lập và xác nhận xử lý đúng đối tượng liên quan.');
  131 |     if (action === 'hide_review') await page.getByRole('combobox', { name: /^Đánh giá liên quan/ }).selectOption(review.id);
  132 |     else {
  133 |       await page.getByRole('combobox', { name: /^Xử lý tài khoản/ }).selectOption(action);
  134 |       if (action === 'reduce_warning') await page.getByRole('combobox', { name: /^Cảnh cáo cần xem xét/ }).selectOption(account.warnings.find(w => w.issueId === issue.id).id);
  135 |     }
  136 |     await page.getByRole('button', { name: 'Lưu kết quả', exact: true }).click();
  137 |     await expect(page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true })).toBeVisible();
  138 |     await page.getByRole('button', { name: 'Xác nhận áp dụng demo', exact: true }).click();
  139 |     await expect(page.getByRole('status')).toContainText('Đã lưu');
  140 |     const updated = await page.evaluate(() => JSON.parse(localStorage.getItem('tnm.demo.domain.v1')));
  141 |     if (action === 'unsuspend') expect(updated.users.find(u => u.id === account.id).status).toBe('active');
  142 |     else if (action === 'reduce_warning') expect(updated.users.find(u => u.id === account.id).warningCount).toBe(priorCount - 1);
> 143 |     else expect(updated.reviews.find(r => r.id === review.id).moderationStatus).toBe('hidden');
      |                                                                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  144 |     await page.goto('/admin/logs');
  145 |     await expect(page.locator('tbody')).toContainText('APPEAL_DECISION');
  146 |   });
  147 | }
  148 | 
```