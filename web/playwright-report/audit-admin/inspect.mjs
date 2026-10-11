import { chromium } from '@playwright/test';
import { resetDemo, login } from '../../tests/e2e/demoHelpers.js';
import fs from 'node:fs';
const dir = new URL('./', import.meta.url).pathname.replace(/^\/(\w:)/,'$1');
const browser=await chromium.launch();
const context=await browser.newContext({baseURL:'http://127.0.0.1:5180',timezoneId:'Asia/Ho_Chi_Minh'});
const page=await context.newPage(); const errors=[];
page.on('pageerror',e=>errors.push(String(e)));
await resetDemo(page); await login(page,'admin','/admin/dashboard');
const results=[];
for(const width of [1440,1024,390]){
 await page.setViewportSize({width,height:900});
 for(const route of ['dashboard','users','tutors','reviews','issues','appeals','classes','finance','subjects','locations','settings','logs']){
  await page.goto('/admin/'+route); await page.evaluate(()=>document.fonts.ready);
  await page.screenshot({path:dir+route+'-'+width+'.png',fullPage:true});
  const metrics=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,width:innerWidth,font:getComputedStyle(document.querySelector('main')).fontFamily,headings:[...document.querySelectorAll('h1')].map(e=>e.innerText),controls:[...document.querySelectorAll('main input,main select,main textarea')].map(e=>({type:e.type,name:e.getAttribute('aria-label')||e.labels?.[0]?.innerText||'',placeholder:e.placeholder})),offenders:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>innerWidth+1&&r.width>0&&e.tagName!=='TD'&&e.tagName!=='TH'&&e.tagName!=='TABLE'}).slice(0,6).map(e=>({tag:e.tagName,class:e.className,text:e.innerText?.slice(0,80),right:e.getBoundingClientRect().right}))}));
  results.push({route,width,...metrics});
  for(const table of await page.locator('.admin-table-container,.admin-table-scroll').all())await table.evaluate(e=>e.scrollLeft=e.scrollWidth);
  await page.screenshot({path:dir+route+'-'+width+'-end.png',fullPage:true});
 }
}
fs.writeFileSync(dir+'metrics.json',JSON.stringify({results,errors},null,2));console.log(JSON.stringify({results,errors},null,2));await browser.close();
