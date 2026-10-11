import {chromium} from '@playwright/test';
import {createDemoState} from '../../src/features/domain/demoDomain.js';
const b=await chromium.launch();
for(const width of [1440,1024,390]){
 const c=await b.newContext({viewport:{width,height:900}});const p=await c.newPage();
 await p.addInitScript(s=>{localStorage.setItem('tnm.demo.domain.v1',JSON.stringify(s));localStorage.setItem('tutornearme.demo-auth.v1',JSON.stringify({user:s.users.find(u=>u.id==='demo-learner'),accounts:[]}))},createDemoState(new Date('2026-10-05T06:00:00+07:00')));
 await p.goto('http://127.0.0.1:5180/learner/map');await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:`playwright-report/audit-learner/${width}-existing-map.png`,fullPage:true});
 await p.goto('http://127.0.0.1:5180/learner/search');await p.getByRole('button',{name:'Bản đồ chia đôi',exact:true}).click();await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:`playwright-report/audit-learner/${width}-search-split.png`,fullPage:true});
 console.log(JSON.stringify({width,scroll:await p.evaluate(()=>document.documentElement.scrollWidth)}));await c.close();
}
await b.close();
