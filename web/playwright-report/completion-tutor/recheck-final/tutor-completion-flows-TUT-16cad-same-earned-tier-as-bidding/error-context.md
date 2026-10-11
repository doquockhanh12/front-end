# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tutor-completion-flows.spec.js >> TUTOR-FLOW Wallet fee labels follow the same earned tier as bidding
- Location: tests\e2e\tutor-completion-flows.spec.js:23:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('main')
Expected substring: "7%"
Received string:    "KHÔNG GIAN GIA SƯ · DEMOVí & Rút tiềnQuản lý thù lao giảng dạy sau trừ 10% phí sàn, tiền bồi thường hủy lịch và yêu cầu rút tiền về ngân hàng. Số dư khả dụng1.250.000 đSố dư thực nhận sẵn sàng để rút về tài khoản ngân hàng bất kỳ lúc nào. Rút tiền về STK Ngân hàng Tổng thu nhập tích lũy506.000 đ Đã khấu trừ 10% phí nền tảng TutorNearMeBao gồm thù lao các buổi dạy đã hoàn tất (90% giá gói) và tiền đền bù khi học viên hủy lịch (50% hoặc 100%). Sổ cái giao dịch thu nhập & rút tiềnTất cả (2)Thù lao dạy học (90%)Bồi thường hủy lịchLệnh rút tiềnThời gianMã GDLoại khoản tiềnChi tiết diễn giảiSố tiềnTrạng thái20:00 30/09/2026tx-t-001 Thù lao buổi học (90%)Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn)+396.000 đThành công18:00 03/10/2026tx-t-002 Bồi thường hủy lịchĐền bù học viên hủy lịch sát giờ (50% học phí 220.000đ)+110.000 đThành công"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('main') with timeout 5000ms
  - waiting for locator('main')
    - locator resolved to <main class="auth-main">…</main>
    - unexpected value " TUTORNEARME · MỘT TÀI KHOẢNChào mừng bạn trở lại TutorNearMe.Không cần chọn vai trò. Tài khoản demo sẽ đưa bạn tới đúng không gian phù hợp.Một cửa đăng nhậpUsername, email hoặc số điện thoại đều dùng chung.→Tự chuyển đúng không gianNgười học, gia sư và admin vào đúng khu vực.ĐĂNG NHẬP TUTORNEARMEĐăng nhập tài khoảnDùng tài khoản đã đăng ký để tiếp tục.Username / Email / Số điện thoại *Mật khẩu * Ghi nhớ đăng nhập trên thiết bị nàyQuên mật khẩu?Đăng nhậpTài khoản bị khóa hoặc cần giải trình? Gửi kháng cáoHoặc tiếp tục vớiTiếp tục với GoogleTiếp tục với FacebookTiếp tục với số điện thoạiChưa có tài khoản? Đăng ký người học · Đăng ký gia sưDemo: minhanh, giabao hoặc admin / demo1234"
    12 × locator resolved to <main class="tutor-main tutor-flow">…</main>
       - unexpected value "KHÔNG GIAN GIA SƯ · DEMOVí & Rút tiềnQuản lý thù lao giảng dạy sau trừ 10% phí sàn, tiền bồi thường hủy lịch và yêu cầu rút tiền về ngân hàng. Số dư khả dụng1.250.000 đSố dư thực nhận sẵn sàng để rút về tài khoản ngân hàng bất kỳ lúc nào. Rút tiền về STK Ngân hàng Tổng thu nhập tích lũy506.000 đ Đã khấu trừ 10% phí nền tảng TutorNearMeBao gồm thù lao các buổi dạy đã hoàn tất (90% giá gói) và tiền đền bù khi học viên hủy lịch (50% hoặc 100%). Sổ cái giao dịch thu nhập & rút tiềnTất cả (2)Thù lao dạy học (90%)Bồi thường hủy lịchLệnh rút tiềnThời gianMã GDLoại khoản tiềnChi tiết diễn giảiSố tiềnTrạng thái20:00 30/09/2026tx-t-001 Thù lao buổi học (90%)Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn)+396.000 đThành công18:00 03/10/2026tx-t-002 Bồi thường hủy lịchĐền bù học viên hủy lịch sát giờ (50% học phí 220.000đ)+110.000 đThành công"

```

```yaml
- main:
  - text: KHÔNG GIAN GIA SƯ · DEMO
  - heading "Ví & Rút tiền" [level=1]
  - paragraph: Quản lý thù lao giảng dạy sau trừ 10% phí sàn, tiền bồi thường hủy lịch và yêu cầu rút tiền về ngân hàng.
  - text: Số dư khả dụng 1.250.000 đ
  - paragraph: Số dư thực nhận sẵn sàng để rút về tài khoản ngân hàng bất kỳ lúc nào.
  - button "Rút tiền về STK Ngân hàng"
  - text: Tổng thu nhập tích lũy 506.000 đ Đã khấu trừ 10% phí nền tảng TutorNearMe
  - paragraph: Bao gồm thù lao các buổi dạy đã hoàn tất (90% giá gói) và tiền đền bù khi học viên hủy lịch (50% hoặc 100%).
  - heading "Sổ cái giao dịch thu nhập & rút tiền" [level=2]
  - tablist:
    - button "Tất cả (2)"
    - button "Thù lao dạy học (90%)"
    - button "Bồi thường hủy lịch"
    - button "Lệnh rút tiền"
  - table:
    - rowgroup:
      - row "Thời gian Mã GD Loại khoản tiền Chi tiết diễn giải Số tiền Trạng thái":
        - columnheader "Thời gian"
        - columnheader "Mã GD"
        - columnheader "Loại khoản tiền"
        - columnheader "Chi tiết diễn giải"
        - columnheader "Số tiền"
        - columnheader "Trạng thái"
    - rowgroup:
      - row "20:00 30/09/2026 tx-t-001 Thù lao buổi học (90%) Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn) +396.000 đ Thành công":
        - cell "20:00 30/09/2026"
        - cell "tx-t-001"
        - cell "Thù lao buổi học (90%)"
        - cell "Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn)"
        - cell "+396.000 đ"
        - cell "Thành công"
      - row "18:00 03/10/2026 tx-t-002 Bồi thường hủy lịch Đền bù học viên hủy lịch sát giờ (50% học phí 220.000đ) +110.000 đ Thành công":
        - cell "18:00 03/10/2026"
        - cell "tx-t-002"
        - cell "Bồi thường hủy lịch"
        - cell "Đền bù học viên hủy lịch sát giờ (50% học phí 220.000đ)"
        - cell "+110.000 đ"
        - cell "Thành công"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
  3   | import { resetDemo, login, fixedTime } from './demoHelpers.js';
  4   | import { selectTutorTier } from '../../src/features/domain/commerce.js';
  5   | 
  6   | test('TUTOR-FLOW tier and profile catalog read runtime data without invented punctuality',async({page})=>{
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
  23  | test('TUTOR-FLOW Wallet fee labels follow the same earned tier as bidding',async({page})=>{
  24  |   const state=createDemoState(fixedTime);const profile=state.profiles.find(p=>p.id==='quoc-bao');
  25  |   profile.rating=4.9;profile.punctualityRate=99;
  26  |   const count=state.lessons.filter(l=>l.tutorId===profile.id&&l.status==='completed').length;
  27  |   for(let i=count;i<30;i++)state.lessons.push({id:`test-tier-${i}`,tutorId:profile.id,status:'completed',date:'2026-09-01'});
  28  |   await resetDemo(page,{state});await login(page,'giabao','/tutor/wallet');
> 29  |   await expect(page.locator('main')).toContainText('7%');
      |                                      ^ Error: expect(locator).toContainText(expected) failed
  30  |   await expect(page.locator('main')).toContainText('93%');
  31  | });
  32  | 
  33  | test('TUTOR-FLOW share trip opens a functional local demo view and stays within mobile bounds', async ({ page }) => {
  34  |   await page.setViewportSize({width:390,height:844});
  35  |   await resetDemo(page); await login(page,'giabao','/tutor/timetable');
  36  |   await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  37  |   const dialog=page.getByRole('dialog',{name:'Chia sẻ hành trình dạy học cho người thân'});
  38  |   const link=dialog.getByLabel('Liên kết demo buổi dạy');
  39  |   await expect(link).toHaveValue(/\/safety\/trip\?lesson=/);
  40  |   const box=await dialog.boundingBox(); const copy=await dialog.getByRole('button',{name:'Sao chép',exact:true}).boundingBox();
  41  |   expect(copy.x+copy.width).toBeLessThanOrEqual(box.x+box.width);
  42  |   await dialog.getByRole('link',{name:'Xem hành trình demo'}).click();
  43  |   await expect(page.getByRole('heading',{name:'Hành trình buổi dạy demo'})).toBeVisible();
  44  |   await expect(page.locator('main')).toContainText(/không.*GPS/i);
  45  | });
  46  | 
  47  | test('TUTOR-FLOW onboarding checklist and two student card images persist', async ({page})=>{
  48  |   await resetDemo(page); await login(page,'giabao','/tutor/profile');
  49  |   const image={name:'student-card.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5ZkAAAAASUVORK5CYII=','base64')};
  50  |   await page.getByLabel('Ảnh mặt trước thẻ sinh viên').setInputFiles(image);
  51  |   await page.getByLabel('Ảnh mặt sau thẻ sinh viên').setInputFiles({...image,name:'student-card-back.png'});
  52  |   await page.getByRole('button',{name:'Gửi hồ sơ xác minh demo'}).click();
  53  |   await expect(page.getByRole('status')).toContainText('chờ Admin');
  54  |   await page.reload();
  55  |   await expect(page.getByRole('img',{name:'Mặt trước thẻ sinh viên'})).toBeVisible();
  56  |   await expect(page.getByRole('img',{name:'Mặt sau thẻ sinh viên'})).toBeVisible();
  57  |   await page.goto('/tutor/dashboard');
  58  |   await expect(page.getByLabel('Checklist hồ sơ gia sư')).toContainText('6/6');
  59  | });
  60  | 
  61  | test('TUTOR-FLOW pending application can be withdrawn and remains withdrawn on reload',async({page})=>{
  62  |   await resetDemo(page); await login(page,'giabao','/tutor/find-students');
  63  |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  64  |   const card=page.locator('.my-proposal-card').first();
  65  |   await card.getByRole('button',{name:'Rút đơn ứng tuyển'}).click();
  66  |   await expect(card).toContainText('Đã rút đơn'); await page.reload();
  67  |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  68  |   await expect(page.locator('.my-proposal-card').first()).toContainText('Đã rút đơn');
  69  | });
  70  | 
  71  | test('TUTOR-FLOW lesson progress, material and learner review persist through the shared domain',async({page})=>{
  72  |   const state=createDemoState(fixedTime);const lesson=state.lessons.find(l=>l.id==='seed-0');
  73  |   // Isolate learning/review behavior with the existing canonical learner identity.
  74  |   // Historical/operational lessons without learnerId cannot receive a review.
  75  |   const learner=state.users.find(u=>u.id==='demo-learner');
  76  |   lesson.learnerId=learner.id; lesson.learner=learner.fullName;
  77  |   await resetDemo(page,{state}); await login(page,'giabao','/tutor/timetable');
  78  |   await page.getByRole('button',{name:new RegExp(`${lesson.subject}.*${lesson.learner}`)}).click();
  79  |   const dialog=page.getByRole('dialog',{name:'Chi tiết lớp học'});
  80  |   await dialog.getByLabel('Nhận xét tiến độ buổi học').fill('Đã nắm chắc nội dung; luyện thêm bài tập.');
  81  |   await dialog.getByLabel('Tài liệu và bài tập buổi học').setInputFiles({name:'lesson.txt',mimeType:'text/plain',buffer:Buffer.from('Demo lesson material')});
  82  |   await dialog.getByRole('button',{name:'Lưu tiến độ và tài liệu'}).click();
  83  |   await expect(dialog.getByRole('link',{name:'lesson.txt'})).toBeVisible();
  84  |   await dialog.getByRole('button',{name:'Đánh dấu hoàn tất'}).click();
  85  |   await dialog.getByLabel('Đánh giá người học').selectOption('5');
  86  |   await dialog.getByLabel('Nhận xét về người học').fill('Người học tích cực và đúng giờ.');
  87  |   await dialog.getByRole('button',{name:'Gửi đánh giá người học'}).click();
  88  |   await expect(dialog).toContainText('Đã lưu đánh giá người học');
  89  |   const runtime=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),DOMAIN_STORAGE_KEY);
  90  |   const saved=runtime.lessons.find(l=>l.id===lesson.id);
  91  |   expect(saved.progress).toContain('Đã nắm chắc');expect(saved.materials[0].name).toBe('lesson.txt');
  92  |   expect(runtime.twoWayReviews.some(r=>r.lessonId===lesson.id)).toBe(true);
  93  | });
  94  | 
  95  | for(const width of [1440,1024,390])test(`TUTOR-QA all connected Tutor screens and dialogs remain usable at ${width}px`,async({page})=>{
  96  |   const errors=[];page.on('pageerror',error=>errors.push(String(error)));
  97  |   await page.setViewportSize({width,height:900});await resetDemo(page);await login(page,'giabao','/tutor/dashboard');
  98  |   for(const path of ['dashboard','profile','timetable','find-students','requests','requests/req-1','income','wallet']){
  99  |     await page.goto(`/tutor/${path}`);await page.evaluate(()=>document.fonts.ready);
  100 |     await expect(page.getByRole('heading',{level:1})).toBeVisible();
  101 |     expect(await page.evaluate(()=>document.documentElement.scrollWidth),path).toBeLessThanOrEqual(width);
  102 |     await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-${path.replaceAll('/','-')}.png`,fullPage:true});
  103 |     if(path==='timetable'){
  104 |       const timelines=page.locator('.weekly-timeline-scroll');await expect(timelines).toHaveCount(1);
  105 |       for(const timeline of await timelines.all()){
  106 |         await timeline.evaluate(el=>{el.scrollTop=el.scrollHeight;el.scrollLeft=el.scrollWidth;});
  107 |         expect(await timeline.evaluate(el=>Math.abs(el.scrollHeight-el.clientHeight-el.scrollTop))).toBeLessThanOrEqual(1);
  108 |       }
  109 |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-timetable-end.png`,fullPage:true});
  110 |       await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  111 |       const dialog=page.getByRole('dialog');const bounds=await dialog.boundingBox();
  112 |       expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
  113 |       const heading=await dialog.getByRole('heading',{level:2}).boundingBox();const close=await dialog.getByRole('button',{name:'Đóng cửa sổ'}).boundingBox();
  114 |       expect(heading.x+heading.width,'Share title must not extend under close target').toBeLessThanOrEqual(close.x);
  115 |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-share-modal.png`});
  116 |       await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  117 |     }
  118 |     if(path==='wallet'){
  119 |       await page.getByRole('button',{name:'Rút tiền về STK Ngân hàng',exact:true}).click();
  120 |       const dialog=page.getByRole('dialog');await expect(dialog.getByLabel('Số tài khoản ngân hàng:')).toBeVisible();
  121 |       const bounds=await dialog.boundingBox();expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
  122 |       const heading=await dialog.getByRole('heading',{level:2}).boundingBox();const close=await dialog.getByRole('button',{name:'Đóng cửa sổ'}).boundingBox();
  123 |       expect(heading.x+heading.width,'Modal title must not extend under close target').toBeLessThanOrEqual(close.x);
  124 |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-payout-modal.png`});
  125 |       await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  126 |     }
  127 |   }
  128 |   expect(errors).toEqual([]);
  129 | });
```