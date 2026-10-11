# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tutor-completion-flows.spec.js >> TUTOR-QA all connected Tutor screens and dialogs remain usable at 1440px
- Location: tests\e2e\tutor-completion-flows.spec.js:78:36

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { level: 1 })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { level: 1 }) with timeout 5000ms
  - waiting for getByRole('heading', { level: 1 })
    - waiting for "http://127.0.0.1:5180/tutor/dashboard" navigation to finish...
    - navigated to "http://127.0.0.1:5180/tutor/dashboard"

```

```yaml
- text: "[plugin:vite:import-analysis] Failed to resolve import \"./help.css\" from \"src/features/public/HelpCenterPage.jsx\". Does the file exist? D:/IE106_tutor_near_me/apps/web/src/features/public/HelpCenterPage.jsx:22:7 6 | import useDemoDomain from \"../domain/DemoDomainContext.jsx\"; 7 | import useDemoAuth from \"../auth/DemoAuthContext.jsx\"; 8 | import \"./help.css\"; | ^ 9 | var _jsxFileName = \"D:/IE106_tutor_near_me/apps/web/src/features/public/HelpCenterPage.jsx\"; 10 | import { jsxDEV as _jsxDEV } from \"react/jsx-dev-runtime\"; at TransformPluginContext._formatLog (file:///D:/IE106_tutor_near_me/apps/web/node_modules/vite/dist/node/chunks/node.js:8736:39) at TransformPluginContext.error (file:///D:/IE106_tutor_near_me/apps/web/node_modules/vite/dist/node/chunks/node.js:8733:14) at normalizeUrl (file:///D:/IE106_tutor_near_me/apps/web/node_modules/vite/dist/node/chunks/node.js:26423:18) at async file:///D:/IE106_tutor_near_me/apps/web/node_modules/vite/dist/node/chunks/node.js:26493:30 at async Promise.all (index 7) at async TransformPluginContext.transform (file:///D:/IE106_tutor_near_me/apps/web/node_modules/vite/dist/node/chunks/node.js:26459:4) at async EnvironmentPluginContainer.transform (file:///D:/IE106_tutor_near_me/apps/web/node_modules/vite/dist/node/chunks/node.js:8515:14) at async loadAndTransform (file:///D:/IE106_tutor_near_me/apps/web/node_modules/vite/dist/node/chunks/node.js:19998:26) at async viteTransformMiddleware (file:///D:/IE106_tutor_near_me/apps/web/node_modules/vite/dist/node/chunks/node.js:20217:20) Click outside, press Esc key, or fix the code to dismiss. You can also disable this overlay by setting"
- code: server.hmr.overlay
- text: to
- code: "false"
- text: in
- code: vite.config.js
- text: .
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
  16  | test('TUTOR-FLOW share trip opens a functional local demo view and stays within mobile bounds', async ({ page }) => {
  17  |   await page.setViewportSize({width:390,height:844});
  18  |   await resetDemo(page); await login(page,'giabao','/tutor/timetable');
  19  |   await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  20  |   const dialog=page.getByRole('dialog',{name:'Chia sẻ hành trình dạy học cho người thân'});
  21  |   const link=dialog.getByLabel('Liên kết demo buổi dạy');
  22  |   await expect(link).toHaveValue(/\/safety\/trip\?lesson=/);
  23  |   const box=await dialog.boundingBox(); const copy=await dialog.getByRole('button',{name:'Sao chép',exact:true}).boundingBox();
  24  |   expect(copy.x+copy.width).toBeLessThanOrEqual(box.x+box.width);
  25  |   await dialog.getByRole('link',{name:'Xem hành trình demo'}).click();
  26  |   await expect(page.getByRole('heading',{name:'Hành trình buổi dạy demo'})).toBeVisible();
  27  |   await expect(page.locator('main')).toContainText(/không.*GPS/i);
  28  | });
  29  | 
  30  | test('TUTOR-FLOW onboarding checklist and two student card images persist', async ({page})=>{
  31  |   await resetDemo(page); await login(page,'giabao','/tutor/profile');
  32  |   const image={name:'student-card.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5ZkAAAAASUVORK5CYII=','base64')};
  33  |   await page.getByLabel('Ảnh mặt trước thẻ sinh viên').setInputFiles(image);
  34  |   await page.getByLabel('Ảnh mặt sau thẻ sinh viên').setInputFiles({...image,name:'student-card-back.png'});
  35  |   await page.getByRole('button',{name:'Gửi hồ sơ xác minh demo'}).click();
  36  |   await expect(page.getByRole('status')).toContainText('chờ Admin');
  37  |   await page.reload();
  38  |   await expect(page.getByRole('img',{name:'Mặt trước thẻ sinh viên'})).toBeVisible();
  39  |   await expect(page.getByRole('img',{name:'Mặt sau thẻ sinh viên'})).toBeVisible();
  40  |   await page.goto('/tutor/dashboard');
  41  |   await expect(page.getByLabel('Checklist hồ sơ gia sư')).toContainText('6/6');
  42  | });
  43  | 
  44  | test('TUTOR-FLOW pending application can be withdrawn and remains withdrawn on reload',async({page})=>{
  45  |   await resetDemo(page); await login(page,'giabao','/tutor/find-students');
  46  |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  47  |   const card=page.locator('.my-proposal-card').first();
  48  |   await card.getByRole('button',{name:'Rút đơn ứng tuyển'}).click();
  49  |   await expect(card).toContainText('Đã rút đơn'); await page.reload();
  50  |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  51  |   await expect(page.locator('.my-proposal-card').first()).toContainText('Đã rút đơn');
  52  | });
  53  | 
  54  | test('TUTOR-FLOW lesson progress, material and learner review persist through the shared domain',async({page})=>{
  55  |   const state=createDemoState(fixedTime);const lesson=state.lessons.find(l=>l.id==='seed-0');
  56  |   // Isolate learning/review behavior with the existing canonical learner identity.
  57  |   // Historical/operational lessons without learnerId cannot receive a review.
  58  |   const learner=state.users.find(u=>u.id==='demo-learner');
  59  |   lesson.learnerId=learner.id; lesson.learner=learner.fullName;
  60  |   await resetDemo(page,{state}); await login(page,'giabao','/tutor/timetable');
  61  |   await page.getByRole('button',{name:new RegExp(`${lesson.subject}.*${lesson.learner}`)}).click();
  62  |   const dialog=page.getByRole('dialog',{name:'Chi tiết lớp học'});
  63  |   await dialog.getByLabel('Nhận xét tiến độ buổi học').fill('Đã nắm chắc nội dung; luyện thêm bài tập.');
  64  |   await dialog.getByLabel('Tài liệu và bài tập buổi học').setInputFiles({name:'lesson.txt',mimeType:'text/plain',buffer:Buffer.from('Demo lesson material')});
  65  |   await dialog.getByRole('button',{name:'Lưu tiến độ và tài liệu'}).click();
  66  |   await expect(dialog.getByRole('link',{name:'lesson.txt'})).toBeVisible();
  67  |   await dialog.getByRole('button',{name:'Đánh dấu hoàn tất'}).click();
  68  |   await dialog.getByLabel('Đánh giá người học').selectOption('5');
  69  |   await dialog.getByLabel('Nhận xét về người học').fill('Người học tích cực và đúng giờ.');
  70  |   await dialog.getByRole('button',{name:'Gửi đánh giá người học'}).click();
  71  |   await expect(dialog).toContainText('Đã lưu đánh giá người học');
  72  |   const runtime=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),DOMAIN_STORAGE_KEY);
  73  |   const saved=runtime.lessons.find(l=>l.id===lesson.id);
  74  |   expect(saved.progress).toContain('Đã nắm chắc');expect(saved.materials[0].name).toBe('lesson.txt');
  75  |   expect(runtime.twoWayReviews.some(r=>r.lessonId===lesson.id)).toBe(true);
  76  | });
  77  | 
  78  | for(const width of [1440,1024,390])test(`TUTOR-QA all connected Tutor screens and dialogs remain usable at ${width}px`,async({page})=>{
  79  |   const errors=[];page.on('pageerror',error=>errors.push(String(error)));
  80  |   await page.setViewportSize({width,height:900});await resetDemo(page);await login(page,'giabao','/tutor/dashboard');
  81  |   for(const path of ['dashboard','profile','timetable','find-students','requests','requests/req-1','income','wallet']){
  82  |     await page.goto(`/tutor/${path}`);await page.evaluate(()=>document.fonts.ready);
> 83  |     await expect(page.getByRole('heading',{level:1})).toBeVisible();
      |                                                       ^ Error: expect(locator).toBeVisible() failed
  84  |     expect(await page.evaluate(()=>document.documentElement.scrollWidth),path).toBeLessThanOrEqual(width);
  85  |     await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-${path.replaceAll('/','-')}.png`,fullPage:true});
  86  |     if(path==='timetable'){
  87  |       for(const timeline of await page.locator('.weekly-timeline__scroll').all())await timeline.evaluate(el=>{el.scrollTop=el.scrollHeight;el.scrollLeft=el.scrollWidth;});
  88  |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-timetable-end.png`,fullPage:true});
  89  |       await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  90  |       const dialog=page.getByRole('dialog');const bounds=await dialog.boundingBox();
  91  |       expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
  92  |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-share-modal.png`});
  93  |       await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  94  |     }
  95  |     if(path==='wallet'){
  96  |       await page.getByRole('button',{name:'Rút tiền về STK Ngân hàng',exact:true}).click();
  97  |       const dialog=page.getByRole('dialog');await expect(dialog.getByLabel('Số tài khoản ngân hàng:')).toBeVisible();
  98  |       const bounds=await dialog.boundingBox();expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
  99  |       await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-payout-modal.png`});
  100 |       await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  101 |     }
  102 |   }
  103 |   expect(errors).toEqual([]);
  104 | });
  105 | 
```