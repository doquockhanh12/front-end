import {chromium} from '@playwright/test';
import {createDemoState} from '../../src/features/domain/demoDomain.js';
const browser=await chromium.launch();const page=await browser.newPage({viewport:{width:390,height:844}});
await page.addInitScript(s=>{localStorage.setItem('tnm.demo.domain.v1',JSON.stringify(s));localStorage.setItem('tutornearme.demo-auth.v1',JSON.stringify({user:s.users.find(u=>u.id==='demo-learner'),accounts:[]}))},createDemoState(new Date('2026-10-05T06:00:00+07:00')));
await page.goto('http://127.0.0.1:5180/learner/schedule');await page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first().click();
console.log(await page.getByRole('dialog').evaluate(n=>({rect:n.getBoundingClientRect().toJSON(),height:n.clientHeight,scroll:n.scrollHeight,top:n.scrollTop,overflow:getComputedStyle(n).overflowY,maxheight:getComputedStyle(n).maxHeight,text:n.innerText.slice(-200)})));
await page.getByRole('dialog').evaluate(n=>n.scrollTop=n.scrollHeight);await page.waitForTimeout(100);console.log(await page.getByRole('dialog').evaluate(n=>({top:n.scrollTop,scroll:n.scrollHeight})));
await page.screenshot({path:'playwright-report/audit-learner/modal-bottom-viewport.png'});await browser.close();
