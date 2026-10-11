# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tutor-completion-flows.spec.js >> TUTOR-QA all connected Tutor screens and dialogs remain usable at 390px
- Location: tests\e2e\tutor-completion-flows.spec.js:85:36

# Error details

```
Error: Modal title must not extend under close target

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 322
Received:    350
```

# Page snapshot

```yaml
- generic [ref=f8e1]:
  - generic [ref=f8e2]:
    - generic [ref=f8e3]:
      - complementary "Điều hướng gia sư" [ref=f8e4]:
        - generic [ref=f8e5]:
          - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn." [ref=f8e6] [cursor=pointer]:
            - /url: /
            - strong [ref=f8e7]: TutorNearMe
            - generic [ref=f8e8]: Gia sư gần bạn. Tri thức gần hơn.
          - button "Đóng điều hướng" [ref=f8e9] [cursor=pointer]
        - navigation "Các mục của gia sư" [ref=f8e13]:
          - link "Tổng quan" [ref=f8e14] [cursor=pointer]:
            - /url: /tutor/dashboard
          - link "Yêu cầu học 6" [ref=f8e21] [cursor=pointer]:
            - /url: /tutor/requests
            - generic [ref=f8e25]: Yêu cầu học
            - generic [ref=f8e26]: "6"
          - link "Lịch dạy học" [ref=f8e27] [cursor=pointer]:
            - /url: /tutor/timetable
          - link "Tìm học viên mới" [ref=f8e31] [cursor=pointer]:
            - /url: /tutor/find-students
          - link "Ví & Thu nhập" [ref=f8e38] [cursor=pointer]:
            - /url: /tutor/wallet
          - link "Thu nhập" [ref=f8e43] [cursor=pointer]:
            - /url: /tutor/income
          - link "Hồ sơ gia sư" [ref=f8e48] [cursor=pointer]:
            - /url: /tutor/profile
          - link "Tin nhắn" [ref=f8e53] [cursor=pointer]:
            - /url: /messages
          - link "Kháng cáo" [ref=f8e57] [cursor=pointer]:
            - /url: /appeals
          - link "Trung tâm Trợ giúp" [ref=f8e63] [cursor=pointer]:
            - /url: /help
      - generic [ref=f8e68]:
        - banner [ref=f8e69]:
          - button "Mở điều hướng" [ref=f8e70] [cursor=pointer]
          - navigation "Điều hướng nhanh" [ref=f8e72]:
            - link "Tìm lớp gần tôi" [ref=f8e73] [cursor=pointer]:
              - /url: /tutor/map
            - link "Tổng Quan" [ref=f8e77] [cursor=pointer]:
              - /url: /tutor/dashboard
          - generic [ref=f8e83]:
            - button "Thông báo" [ref=f8e85] [cursor=pointer]:
              - generic [ref=f8e89]: "1"
            - link "Ảnh đại diện của Trần Gia Bảo giabao" [ref=f8e90] [cursor=pointer]:
              - /url: /tutor/profile
              - img "Ảnh đại diện của Trần Gia Bảo" [ref=f8e91]:
                - generic [aria-hidden] [ref=f8e92]: GB
              - generic [ref=f8e93]: giabao
            - button "Đăng xuất" [ref=f8e94] [cursor=pointer]
        - main [ref=f8e98]:
          - generic [ref=f8e100]:
            - text: KHÔNG GIAN GIA SƯ · DEMO
            - heading "Ví & Rút tiền" [level=1] [ref=f8e101]
            - paragraph [ref=f8e102]: Quản lý thù lao giảng dạy sau trừ 10% phí sàn, tiền bồi thường hủy lịch và yêu cầu rút tiền về ngân hàng.
          - generic [ref=f8e103]:
            - generic [ref=f8e104]:
              - generic [ref=f8e105]:
                - generic [ref=f8e106]:
                  - generic [ref=f8e107]: Số dư khả dụng
                  - generic [ref=f8e116]: 1.250.000 đ
                  - paragraph [ref=f8e117]: Số dư thực nhận sẵn sàng để rút về tài khoản ngân hàng bất kỳ lúc nào.
                - button "Rút tiền về STK Ngân hàng" [ref=f8e119] [cursor=pointer]
              - generic [ref=f8e124]:
                - generic [ref=f8e125]: Tổng thu nhập tích lũy
                - generic [ref=f8e134]: 506.000 đ
                - generic [ref=f8e135]: Đã khấu trừ 10% phí nền tảng TutorNearMe
                - paragraph [ref=f8e139]: Bao gồm thù lao các buổi dạy đã hoàn tất (90% giá gói) và tiền đền bù khi học viên hủy lịch (50% hoặc 100%).
            - generic [ref=f8e140]:
              - generic [ref=f8e141]:
                - heading "Sổ cái giao dịch thu nhập & rút tiền" [level=2] [ref=f8e142]
                - tablist [ref=f8e148]:
                  - button "Tất cả (2)" [ref=f8e149] [cursor=pointer]
                  - button "Thù lao dạy học (90%)" [ref=f8e150] [cursor=pointer]
                  - button "Bồi thường hủy lịch" [ref=f8e151] [cursor=pointer]
                  - button "Lệnh rút tiền" [ref=f8e152] [cursor=pointer]
              - table [ref=f8e154]:
                - rowgroup [ref=f8e155]:
                  - row [ref=f8e156]:
                    - columnheader "Thời gian" [ref=f8e157]
                    - columnheader "Mã GD" [ref=f8e158]
                    - columnheader "Loại khoản tiền" [ref=f8e159]
                    - columnheader "Chi tiết diễn giải" [ref=f8e160]
                    - columnheader "Số tiền" [ref=f8e161]
                    - columnheader "Trạng thái" [ref=f8e162]
                - rowgroup [ref=f8e163]:
                  - row [ref=f8e164]:
                    - cell "20:00 30/09/2026" [ref=f8e165]
                    - cell "tx-t-001" [ref=f8e166]
                    - cell "Thù lao buổi học (90%)" [ref=f8e167]
                    - cell "Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn)" [ref=f8e172]
                    - cell "+396.000 đ" [ref=f8e173]
                    - cell "Thành công" [ref=f8e174]
                  - row [ref=f8e179]:
                    - cell "18:00 03/10/2026" [ref=f8e180]
                    - cell "tx-t-002" [ref=f8e181]
                    - cell "Bồi thường hủy lịch" [ref=f8e182]
                    - cell "Đền bù học viên hủy lịch sát giờ (50% học phí 220.000đ)" [ref=f8e187]
                    - cell "+110.000 đ" [ref=f8e188]
                    - cell "Thành công" [ref=f8e189]
    - complementary "Widget nhắn tin nhanh" [ref=f8e194]:
      - button "Mở cửa sổ trò chuyện" [ref=f8e195] [cursor=pointer]
  - dialog [ref=f8e199]:
    - button "Đóng cửa sổ" [active] [ref=f8e200] [cursor=pointer]
    - banner [ref=f8e204]:
      - heading "Rút tiền về tài khoản ngân hàng" [level=2] [ref=f8e205]
      - paragraph [ref=f8e209]: Lệnh rút tiền demo cần Admin phê duyệt. Không chuyển tiền thật tới ngân hàng.
    - generic [ref=f8e210]:
      - generic [ref=f8e211]:
        - generic [ref=f8e212]: "Ngân hàng nhận tiền:"
        - combobox "Ngân hàng nhận tiền:" [ref=f8e213] [cursor=pointer]:
          - option "Vietcombank" [selected]
          - option "MBBank (Quân Đội)"
          - option "Techcombank"
          - option "ACB (Á Châu)"
          - option "VPBank"
          - option "BIDV"
          - option "VietinBank"
          - option "TPBank"
          - option "HDBank"
          - option "Sacombank"
      - generic [ref=f8e214]:
        - generic [ref=f8e215]: "Số tài khoản ngân hàng:"
        - textbox "Số tài khoản ngân hàng:" [ref=f8e216]:
          - /placeholder: "Ví dụ: 1012345678"
          - text: "1012345678"
      - generic [ref=f8e217]:
        - generic [ref=f8e218]: "Tên chủ tài khoản (Viết hoa không dấu):"
        - textbox "Tên chủ tài khoản (Viết hoa không dấu):" [ref=f8e219]:
          - /placeholder: TRAN GIA BAO
          - text: TRAN GIA BAO
      - generic [ref=f8e220]:
        - generic [ref=f8e221]:
          - generic [ref=f8e222]: "Số tiền muốn rút (VNĐ):"
          - button "Rút toàn bộ (1.250.000 đ)" [ref=f8e223] [cursor=pointer]
        - generic [ref=f8e224]:
          - spinbutton "Số tiền muốn rút (VNĐ):" [ref=f8e225]: "500000"
          - generic [ref=f8e226]: VNĐ
        - generic [ref=f8e227]: "Khả dụng tối đa: 1.250.000 đ"
      - generic [ref=f8e228]:
        - button "Hủy bỏ" [ref=f8e229] [cursor=pointer]
        - button "Xác nhận rút tiền" [ref=f8e230] [cursor=pointer]
```

# Test source

```ts
  7   |   const state=createDemoState(fixedTime);state.subjects[0].isActive=false;
  8   |   await resetDemo(page,{state});await login(page,'giabao','/tutor/profile');
  9   |   const tier=selectTutorTier(state,'quoc-bao');
  10  |   await expect(page.getByLabel('Danh hiệu gia sư')).toContainText(`${tier.feePercent}%`);
  11  |   if(!Number.isFinite(tier.punctuality))await expect(page.getByLabel('Danh hiệu gia sư')).toContainText('Chưa đủ dữ liệu xác nhận');
  12  |   await expect(page.locator('#tutor-active-subjects option')).toHaveCount(state.subjects.filter(s=>s.isActive).length);
  13  |   await expect(page.locator('#tutor-active-subjects option[value="Toán"]')).toHaveCount(0);
  14  | });
  15  | 
  16  | test('TUTOR-FLOW Help opens a private canonical Admin support conversation',async({page})=>{
  17  |   await resetDemo(page);await login(page,'giabao','/help');
  18  |   await page.getByRole('button',{name:'Chat hỗ trợ demo'}).click();
  19  |   await expect(page).toHaveURL(/\/messages\?thread=/);
  20  |   await expect(page.locator('main')).toContainText(/hỗ trợ/i);
  21  | });
  22  | 
  23  | test('TUTOR-FLOW share trip opens a functional local demo view and stays within mobile bounds', async ({ page }) => {
  24  |   await page.setViewportSize({width:390,height:844});
  25  |   await resetDemo(page); await login(page,'giabao','/tutor/timetable');
  26  |   await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  27  |   const dialog=page.getByRole('dialog',{name:'Chia sẻ hành trình dạy học cho người thân'});
  28  |   const link=dialog.getByLabel('Liên kết demo buổi dạy');
  29  |   await expect(link).toHaveValue(/\/safety\/trip\?lesson=/);
  30  |   const box=await dialog.boundingBox(); const copy=await dialog.getByRole('button',{name:'Sao chép',exact:true}).boundingBox();
  31  |   expect(copy.x+copy.width).toBeLessThanOrEqual(box.x+box.width);
  32  |   await dialog.getByRole('link',{name:'Xem hành trình demo'}).click();
  33  |   await expect(page.getByRole('heading',{name:'Hành trình buổi dạy demo'})).toBeVisible();
  34  |   await expect(page.locator('main')).toContainText(/không.*GPS/i);
  35  | });
  36  | 
  37  | test('TUTOR-FLOW onboarding checklist and two student card images persist', async ({page})=>{
  38  |   await resetDemo(page); await login(page,'giabao','/tutor/profile');
  39  |   const image={name:'student-card.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5ZkAAAAASUVORK5CYII=','base64')};
  40  |   await page.getByLabel('Ảnh mặt trước thẻ sinh viên').setInputFiles(image);
  41  |   await page.getByLabel('Ảnh mặt sau thẻ sinh viên').setInputFiles({...image,name:'student-card-back.png'});
  42  |   await page.getByRole('button',{name:'Gửi hồ sơ xác minh demo'}).click();
  43  |   await expect(page.getByRole('status')).toContainText('chờ Admin');
  44  |   await page.reload();
  45  |   await expect(page.getByRole('img',{name:'Mặt trước thẻ sinh viên'})).toBeVisible();
  46  |   await expect(page.getByRole('img',{name:'Mặt sau thẻ sinh viên'})).toBeVisible();
  47  |   await page.goto('/tutor/dashboard');
  48  |   await expect(page.getByLabel('Checklist hồ sơ gia sư')).toContainText('6/6');
  49  | });
  50  | 
  51  | test('TUTOR-FLOW pending application can be withdrawn and remains withdrawn on reload',async({page})=>{
  52  |   await resetDemo(page); await login(page,'giabao','/tutor/find-students');
  53  |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  54  |   const card=page.locator('.my-proposal-card').first();
  55  |   await card.getByRole('button',{name:'Rút đơn ứng tuyển'}).click();
  56  |   await expect(card).toContainText('Đã rút đơn'); await page.reload();
  57  |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  58  |   await expect(page.locator('.my-proposal-card').first()).toContainText('Đã rút đơn');
  59  | });
  60  | 
  61  | test('TUTOR-FLOW lesson progress, material and learner review persist through the shared domain',async({page})=>{
  62  |   const state=createDemoState(fixedTime);const lesson=state.lessons.find(l=>l.id==='seed-0');
  63  |   // Isolate learning/review behavior with the existing canonical learner identity.
  64  |   // Historical/operational lessons without learnerId cannot receive a review.
  65  |   const learner=state.users.find(u=>u.id==='demo-learner');
  66  |   lesson.learnerId=learner.id; lesson.learner=learner.fullName;
  67  |   await resetDemo(page,{state}); await login(page,'giabao','/tutor/timetable');
  68  |   await page.getByRole('button',{name:new RegExp(`${lesson.subject}.*${lesson.learner}`)}).click();
  69  |   const dialog=page.getByRole('dialog',{name:'Chi tiết lớp học'});
  70  |   await dialog.getByLabel('Nhận xét tiến độ buổi học').fill('Đã nắm chắc nội dung; luyện thêm bài tập.');
  71  |   await dialog.getByLabel('Tài liệu và bài tập buổi học').setInputFiles({name:'lesson.txt',mimeType:'text/plain',buffer:Buffer.from('Demo lesson material')});
  72  |   await dialog.getByRole('button',{name:'Lưu tiến độ và tài liệu'}).click();
  73  |   await expect(dialog.getByRole('link',{name:'lesson.txt'})).toBeVisible();
  74  |   await dialog.getByRole('button',{name:'Đánh dấu hoàn tất'}).click();
  75  |   await dialog.getByLabel('Đánh giá người học').selectOption('5');
  76  |   await dialog.getByLabel('Nhận xét về người học').fill('Người học tích cực và đúng giờ.');
  77  |   await dialog.getByRole('button',{name:'Gửi đánh giá người học'}).click();
  78  |   await expect(dialog).toContainText('Đã lưu đánh giá người học');
  79  |   const runtime=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),DOMAIN_STORAGE_KEY);
  80  |   const saved=runtime.lessons.find(l=>l.id===lesson.id);
  81  |   expect(saved.progress).toContain('Đã nắm chắc');expect(saved.materials[0].name).toBe('lesson.txt');
  82  |   expect(runtime.twoWayReviews.some(r=>r.lessonId===lesson.id)).toBe(true);
  83  | });
  84  | 
  85  | for(const width of [1440,1024,390])test(`TUTOR-QA all connected Tutor screens and dialogs remain usable at ${width}px`,async({page})=>{
  86  |   const errors=[];page.on('pageerror',error=>errors.push(String(error)));
  87  |   await page.setViewportSize({width,height:900});await resetDemo(page);await login(page,'giabao','/tutor/dashboard');
  88  |   for(const path of ['dashboard','profile','timetable','find-students','requests','requests/req-1','income','wallet']){
  89  |     await page.goto(`/tutor/${path}`);await page.evaluate(()=>document.fonts.ready);
  90  |     await expect(page.getByRole('heading',{level:1})).toBeVisible();
  91  |     expect(await page.evaluate(()=>document.documentElement.scrollWidth),path).toBeLessThanOrEqual(width);
  92  |     await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-${path.replaceAll('/','-')}.png`,fullPage:true});
  93  |     if(path==='timetable'){
  94  |       for(const timeline of await page.locator('.weekly-timeline__scroll').all())await timeline.evaluate(el=>{el.scrollTop=el.scrollHeight;el.scrollLeft=el.scrollWidth;});
  95  |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-timetable-end.png`,fullPage:true});
  96  |       await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  97  |       const dialog=page.getByRole('dialog');const bounds=await dialog.boundingBox();
  98  |       expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
  99  |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-share-modal.png`});
  100 |       await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  101 |     }
  102 |     if(path==='wallet'){
  103 |       await page.getByRole('button',{name:'Rút tiền về STK Ngân hàng',exact:true}).click();
  104 |       const dialog=page.getByRole('dialog');await expect(dialog.getByLabel('Số tài khoản ngân hàng:')).toBeVisible();
  105 |       const bounds=await dialog.boundingBox();expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
  106 |       const heading=await dialog.getByRole('heading',{level:2}).boundingBox();const close=await dialog.getByRole('button',{name:'Đóng cửa sổ'}).boundingBox();
> 107 |       expect(heading.x+heading.width,'Modal title must not extend under close target').toBeLessThanOrEqual(close.x);
      |                                                                                        ^ Error: Modal title must not extend under close target
  108 |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-payout-modal.png`});
  109 |       await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  110 |     }
  111 |   }
  112 |   expect(errors).toEqual([]);
  113 | });
  114 | 
```