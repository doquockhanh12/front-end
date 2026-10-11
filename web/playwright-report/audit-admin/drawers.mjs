import { chromium } from '@playwright/test';
import { resetDemo,login } from '../../tests/e2e/demoHelpers.js';
import fs from 'node:fs';
const out=new URL('./',import.meta.url).pathname.replace(/^\/(\w:)/,'$1');
const browser=await chromium.launch();const context=await browser.newContext({baseURL:'http://127.0.0.1:5180',timezoneId:'Asia/Ho_Chi_Minh'});const page=await context.newPage();
await resetDemo(page);await login(page,'admin','/admin/dashboard');const results=[];
for(const width of [1440,1024,390]){
 await page.setViewportSize({width,height:900});
 for(const [route,kind,name] of [['classes','title','Xem chi tiết tin đăng'],['subjects','button','Thêm môn học mới'],['locations','button','Thêm khu vực mới'],['finance','button','Từ chối']]){
  await page.goto('/admin/'+route);await page.evaluate(()=>document.fonts.ready);
  const button=kind==='title'?page.getByTitle(name).first():page.getByRole('button',{name,exact:true}).first();await button.click();
  const dialog=page.getByRole('dialog');await dialog.waitFor();await page.locator('.admin-slideover__panel').evaluate(async e=>Promise.all(e.getAnimations().map(a=>a.finished)));
  results.push({route,width,metrics:await dialog.evaluate(e=>({bounds:e.getBoundingClientRect().toJSON(),scrollWidth:e.scrollWidth,clientWidth:e.clientWidth,focusContained:e.contains(document.activeElement),unlabelled:[...e.querySelectorAll('input,select,textarea')].filter(x=>!x.labels?.length&&!x.getAttribute('aria-label')).map(x=>({tag:x.tagName,type:x.type,placeholder:x.placeholder})),controls:[...e.querySelectorAll('button,input,select,textarea')].map(x=>({text:x.innerText||x.placeholder,r:x.getBoundingClientRect().toJSON()}))}))});
  await page.screenshot({path:out+'drawer-'+route+'-'+width+'.png',fullPage:true});await page.locator('.admin-slideover__body').evaluate(e=>e.scrollTop=e.scrollHeight);await page.screenshot({path:out+'drawer-'+route+'-'+width+'-end.png',fullPage:true});await page.keyboard.press('Escape');
 }
}
fs.writeFileSync(out+'drawer-metrics.json',JSON.stringify(results,null,2));console.log('Drawer QA complete',results.length);await browser.close();
