import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
import {createDemoState} from '../../src/features/domain/demoDomain.js';
const browser=await chromium.launch();const results=[];
for(const width of [1440,1024,390]){
const context=await browser.newContext({viewport:{width,height:900},timezoneId:'Asia/Ho_Chi_Minh'});const page=await context.newPage();
await page.clock.install({time:new Date('2026-10-05T06:00:00+07:00')});
await page.addInitScript(state=>{if(sessionStorage.getItem('audit'))return;localStorage.clear();sessionStorage.clear();localStorage.setItem('tnm.demo.domain.v1',JSON.stringify(state));localStorage.setItem('tutornearme.demo-auth.v1',JSON.stringify({user:state.users.find(u=>u.id==='demo-learner'),accounts:[]}));sessionStorage.setItem('audit','1');},createDemoState(new Date('2026-10-05T06:00:00+07:00')));
async function capture(name){await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(150);await page.screenshot({path:`playwright-report/audit-learner/${width}-${name}.png`,fullPage:true});results.push({width,name,font:await page.evaluate(()=>({body:getComputedStyle(document.body).fontFamily,heading:[...document.querySelectorAll('h1')].map(n=>getComputedStyle(n).fontFamily),width:document.documentElement.scrollWidth})),dialogs:await page.getByRole('dialog').count()});}
for(const id of ['demo-01','demo-02','demo-03']){await page.goto(`http://127.0.0.1:5180/requests/${id}`);await capture(`request-${id}`);}
await page.goto('http://127.0.0.1:5180/learner/my-classes');await page.getByRole('button',{name:/So sánh các ứng viên/}).click();await capture('comparison');await page.getByRole('dialog').evaluate(n=>n.scrollTop=n.scrollHeight);await capture('comparison-bottom');await page.keyboard.press('Escape');
await page.goto('http://127.0.0.1:5180/learner/post-class');await page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'}).click();await capture('post-step2');await page.getByRole('button',{name:'Tiếp tục: Ngân sách & Mục tiêu'}).click();await capture('post-step3');
await page.goto('http://127.0.0.1:5180/learner/schedule');await page.getByRole('button',{name:'Lịch tuần',exact:true}).click();await capture('schedule-week');await page.getByRole('button',{name:'Danh sách',exact:true}).click();await page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first().click();await capture('lesson-modal');await page.getByRole('dialog').evaluate(n=>n.scrollTop=n.scrollHeight);await capture('lesson-modal-bottom');
await context.close();}
await fs.writeFile('playwright-report/audit-learner/round2.json',JSON.stringify(results,null,2));await browser.close();
