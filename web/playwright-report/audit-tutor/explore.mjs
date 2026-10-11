import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { resetDemo, login } from '../../tests/e2e/demoHelpers.js';
const root='playwright-report/audit-tutor';
await mkdir(root,{recursive:true});
const browser=await chromium.launch(); const records=[];
try {
 for(const width of [1440,1024,390]) {
  const context=await browser.newContext({baseURL:'http://127.0.0.1:5180',viewport:{width,height:900},timezoneId:'Asia/Ho_Chi_Minh'});
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await resetDemo(page);await login(page,'giabao','/tutor/dashboard');
  for(const route of ['/tutor/dashboard','/tutor/profile','/tutor/timetable','/tutor/find-students','/tutor/requests','/tutor/requests/req-1','/tutor/income','/tutor/wallet','/tutor/map','/appeals']) {
   await page.goto(route);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`${root}/${width}-${route.replaceAll('/','_')}.png`,fullPage:true});
   records.push({width,route,geometry:await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,fonts:[...new Set([...document.querySelectorAll('h1,h2,input,button')].map(e=>getComputedStyle(e).fontFamily))],heading:[...document.querySelectorAll('h1')].map(e=>e.textContent)})),errors:[...errors]});
  }
  await page.goto('/tutor/wallet');const payoutButton=page.getByRole('button',{name:'Rút tiền về STK Ngân hàng'});
  records.push({width,route:'/tutor/wallet',payoutDisabled:await payoutButton.isDisabled(),text:await page.locator('.wallet-page').innerText()});
  if(await payoutButton.isEnabled()) { await payoutButton.click();
  await page.screenshot({path:`${root}/${width}-payout.png`,fullPage:true});
  records.push({width,modal:'payout',focusInside:await page.getByRole('dialog').evaluate(el=>el.contains(document.activeElement)),bounds:await page.getByRole('dialog').boundingBox(),labels:await page.getByRole('dialog').locator('input,select').evaluateAll(es=>es.map(e=>({type:e.type,value:e.value,labels:e.labels.length})))});
  await page.keyboard.press('Escape');records.push({width,modal:'payout-after-ESC',open:await page.getByRole('dialog').count()}); }
  await page.goto('/tutor/timetable');await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  await page.screenshot({path:`${root}/${width}-share-trip.png`,fullPage:true});
  records.push({width,modal:'share-trip',bounds:await page.getByRole('dialog').boundingBox(),overflow:await page.evaluate(()=>document.documentElement.scrollWidth),text:await page.getByRole('dialog').innerText()});
  await page.goto('/tutor/timetable');await page.getByRole('button',{name:'SOS KHẨN CẤP',exact:true}).first().click();
  await page.screenshot({path:`${root}/${width}-SOS.png`,fullPage:true});records.push({width,modal:'SOS',text:await page.getByRole('alertdialog').innerText(),bounds:await page.getByRole('alertdialog').boundingBox()});
  await context.close();console.log('captured',width);
 }
} finally {await browser.close();await writeFile(`${root}/findings.json`,JSON.stringify(records,null,2));}
