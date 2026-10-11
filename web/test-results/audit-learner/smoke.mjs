import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
import { createDemoState } from '../../src/features/domain/demoDomain.js';
const browser = await chromium.launch({headless:true});
const base='http://127.0.0.1:5180';
const routes=['/learner/search','/learner/dashboard','/tutors/quoc-bao','/requests/new','/requests','/requests/req-1','/learner/post-class','/learner/my-classes','/learner/wallet','/learner/schedule','/messages'];
const results=[];
for(const width of [1440,1024,390]){
const context=await browser.newContext({viewport:{width,height:900},timezoneId:'Asia/Ho_Chi_Minh'});
const page=await context.newPage();
await page.clock.install({time:new Date('2026-10-05T06:00:00+07:00')});
await page.addInitScript((state)=>{if(sessionStorage.getItem('audit'))return;localStorage.clear();sessionStorage.clear();localStorage.setItem('tnm.demo.domain.v1',JSON.stringify(state));localStorage.setItem('tutornearme.demo-auth.v1',JSON.stringify({user:{id:'demo-learner',fullName:'Nguyễn Minh Anh',username:'minhanh',role:'learner'},accounts:[]}));sessionStorage.setItem('audit','1');},createDemoState(new Date('2026-10-05T06:00:00+07:00')));
let errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
for(const route of routes){errors=[];await page.goto(base+route);await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(450);
const key=route.replaceAll('/','_');await page.screenshot({path:`test-results/audit-learner/${width}${key}.png`,fullPage:true});
const metrics=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,headings:[...document.querySelectorAll('h1,h2')].map(n=>n.innerText),body:document.body.innerText.slice(0,500),small:[...document.querySelectorAll('button,input,p,td')].filter(n=>n.getBoundingClientRect().width>0&&parseFloat(getComputedStyle(n).fontSize)<12).map(n=>({text:n.innerText,size:getComputedStyle(n).fontSize})).slice(0,8)}));
results.push({width,route,metrics,errors});console.log(JSON.stringify({width,route,scroll:metrics.scroll,errors}));
}
await context.close();}
await fs.writeFile('test-results/audit-learner/smoke.json',JSON.stringify(results,null,2));await browser.close();
