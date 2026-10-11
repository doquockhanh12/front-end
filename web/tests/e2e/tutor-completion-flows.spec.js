import { test, expect } from '@playwright/test';
import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
import { resetDemo, login, fixedTime } from './demoHelpers.js';
import { selectTutorTier } from '../../src/features/domain/commerce.js';

test('TUTOR-FLOW tier and profile catalog read runtime data without invented punctuality',async({page})=>{
  const state=createDemoState(fixedTime);state.subjects[0].isActive=false;
  await resetDemo(page,{state});await login(page,'giabao','/tutor/profile');
  const tier=selectTutorTier(state,'quoc-bao');
  await expect(page.getByLabel('Danh hiệu gia sư')).toContainText(`${tier.feePercent}%`);
  if(!Number.isFinite(tier.punctuality))await expect(page.getByLabel('Danh hiệu gia sư')).toContainText('Chưa đủ dữ liệu xác nhận');
  await expect(page.locator('#tutor-active-subjects option')).toHaveCount(state.subjects.filter(s=>s.isActive).length);
  await expect(page.locator('#tutor-active-subjects option[value="Toán"]')).toHaveCount(0);
});

test('TUTOR-FLOW Help opens a private canonical Admin support conversation',async({page})=>{
  await resetDemo(page);await login(page,'giabao','/help');
  await page.getByRole('button',{name:'Chat hỗ trợ demo'}).click();
  await expect(page).toHaveURL(/\/messages\?thread=/);
  await expect(page.locator('main')).toContainText(/hỗ trợ/i);
});

test('TUTOR-FLOW Wallet fee labels follow the same earned tier as bidding',async({page})=>{
  const state=createDemoState(fixedTime);const profile=state.profiles.find(p=>p.id==='quoc-bao');
  profile.rating=4.9;profile.punctualityRate=99;
  const count=state.lessons.filter(l=>l.tutorId===profile.id&&l.status==='completed').length;
  for(let i=count;i<30;i++)state.lessons.push({id:`test-tier-${i}`,tutorId:profile.id,status:'completed',date:'2026-09-01'});
  await resetDemo(page,{state});await login(page,'giabao','/tutor/wallet');
  await expect(page.locator('main')).toContainText('7%');
  await expect(page.locator('main')).toContainText('93%');
});

test('TUTOR-FLOW share trip opens a functional local demo view and stays within mobile bounds', async ({ page }) => {
  await page.setViewportSize({width:390,height:844});
  await resetDemo(page); await login(page,'giabao','/tutor/timetable');
  await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  const dialog=page.getByRole('dialog',{name:'Chia sẻ hành trình dạy học cho người thân'});
  const link=dialog.getByLabel('Liên kết demo buổi dạy');
  await expect(link).toHaveValue(/\/safety\/trip\?lesson=/);
  const box=await dialog.boundingBox(); const copy=await dialog.getByRole('button',{name:'Sao chép',exact:true}).boundingBox();
  expect(copy.x+copy.width).toBeLessThanOrEqual(box.x+box.width);
  await dialog.getByRole('link',{name:'Xem hành trình demo'}).click();
  await expect(page.getByRole('heading',{name:'Hành trình buổi dạy demo'})).toBeVisible();
  await expect(page.locator('main')).toContainText(/không.*GPS/i);
});

test('TUTOR-FLOW onboarding checklist and two student card images persist', async ({page})=>{
  await resetDemo(page); await login(page,'giabao','/tutor/profile');
  const image={name:'student-card.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5ZkAAAAASUVORK5CYII=','base64')};
  await page.getByLabel('Ảnh mặt trước thẻ sinh viên').setInputFiles(image);
  await page.getByLabel('Ảnh mặt sau thẻ sinh viên').setInputFiles({...image,name:'student-card-back.png'});
  await page.getByRole('button',{name:'Gửi hồ sơ xác minh demo'}).click();
  await expect(page.getByRole('status')).toContainText('chờ Admin');
  await page.reload();
  await expect(page.getByRole('img',{name:'Mặt trước thẻ sinh viên'})).toBeVisible();
  await expect(page.getByRole('img',{name:'Mặt sau thẻ sinh viên'})).toBeVisible();
  await page.goto('/tutor/dashboard');
  await expect(page.getByLabel('Checklist hồ sơ gia sư')).toContainText('6/6');
});

test('TUTOR-FLOW pending application can be withdrawn and remains withdrawn on reload',async({page})=>{
  await resetDemo(page); await login(page,'giabao','/tutor/find-students');
  await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  const card=page.locator('.my-proposal-card').first();
  await card.getByRole('button',{name:'Rút đơn ứng tuyển'}).click();
  await expect(card).toContainText('Đã rút đơn'); await page.reload();
  await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  await expect(page.locator('.my-proposal-card').first()).toContainText('Đã rút đơn');
});

test('TUTOR-FLOW lesson progress, material and learner review persist through the shared domain',async({page})=>{
  const state=createDemoState(fixedTime);const lesson=state.lessons.find(l=>l.id==='seed-0');
  // Isolate learning/review behavior with the existing canonical learner identity.
  // Historical/operational lessons without learnerId cannot receive a review.
  const learner=state.users.find(u=>u.id==='demo-learner');
  lesson.learnerId=learner.id; lesson.learner=learner.fullName;
  await resetDemo(page,{state}); await login(page,'giabao','/tutor/timetable');
  await page.getByRole('button',{name:new RegExp(`${lesson.subject}.*${lesson.learner}`)}).click();
  const dialog=page.getByRole('dialog',{name:'Chi tiết lớp học'});
  await dialog.getByLabel('Nhận xét tiến độ buổi học').fill('Đã nắm chắc nội dung; luyện thêm bài tập.');
  await dialog.getByLabel('Tài liệu và bài tập buổi học').setInputFiles({name:'lesson.txt',mimeType:'text/plain',buffer:Buffer.from('Demo lesson material')});
  await dialog.getByRole('button',{name:'Lưu tiến độ và tài liệu'}).click();
  await expect(dialog.getByRole('link',{name:'lesson.txt'})).toBeVisible();
  await dialog.getByRole('button',{name:'Đánh dấu hoàn tất'}).click();
  await dialog.getByLabel('Đánh giá người học').selectOption('5');
  await dialog.getByLabel('Nhận xét về người học').fill('Người học tích cực và đúng giờ.');
  await dialog.getByRole('button',{name:'Gửi đánh giá người học'}).click();
  await expect(dialog).toContainText('Đã lưu đánh giá người học');
  const runtime=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),DOMAIN_STORAGE_KEY);
  const saved=runtime.lessons.find(l=>l.id===lesson.id);
  expect(saved.progress).toContain('Đã nắm chắc');expect(saved.materials[0].name).toBe('lesson.txt');
  expect(runtime.twoWayReviews.some(r=>r.lessonId===lesson.id)).toBe(true);
});

for(const width of [1440,1024,390])test(`TUTOR-QA all connected Tutor screens and dialogs remain usable at ${width}px`,async({page})=>{
  const errors=[];page.on('pageerror',error=>errors.push(String(error)));
  await page.setViewportSize({width,height:900});await resetDemo(page);await login(page,'giabao','/tutor/dashboard');
  for(const path of ['dashboard','profile','timetable','find-students','requests','requests/req-1','income','wallet']){
    await page.goto(`/tutor/${path}`);await page.evaluate(()=>document.fonts.ready);
    await expect(page.getByRole('heading',{level:1})).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth),path).toBeLessThanOrEqual(width);
    await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-${path.replaceAll('/','-')}.png`,fullPage:true});
    if(path==='timetable'){
      const timelines=page.locator('.weekly-timeline-scroll');await expect(timelines).toHaveCount(1);
      for(const timeline of await timelines.all()){
        await timeline.evaluate(el=>{el.scrollTop=el.scrollHeight;el.scrollLeft=el.scrollWidth;});
        expect(await timeline.evaluate(el=>Math.abs(el.scrollHeight-el.clientHeight-el.scrollTop))).toBeLessThanOrEqual(1);
      }
      await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-timetable-end.png`,fullPage:true});
      await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
      const dialog=page.getByRole('dialog');const bounds=await dialog.boundingBox();
      expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
      const heading=await dialog.getByRole('heading',{level:2}).boundingBox();const close=await dialog.getByRole('button',{name:'Đóng cửa sổ'}).boundingBox();
      expect(heading.x+heading.width,'Share title must not extend under close target').toBeLessThanOrEqual(close.x);
      await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-share-modal.png`});
      await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
    }
    if(path==='wallet'){
      await page.getByRole('button',{name:'Rút tiền về STK Ngân hàng',exact:true}).click();
      const dialog=page.getByRole('dialog');await expect(dialog.getByLabel('Số tài khoản ngân hàng:')).toBeVisible();
      const bounds=await dialog.boundingBox();expect(bounds.x+bounds.width).toBeLessThanOrEqual(width);
      const heading=await dialog.getByRole('heading',{level:2}).boundingBox();const close=await dialog.getByRole('button',{name:'Đóng cửa sổ'}).boundingBox();
      expect(heading.x+heading.width,'Modal title must not extend under close target').toBeLessThanOrEqual(close.x);
      await page.screenshot({path:`playwright-report/completion-tutor/qa/${width}-payout-modal.png`});
      await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
    }
  }
  expect(errors).toEqual([]);
});
