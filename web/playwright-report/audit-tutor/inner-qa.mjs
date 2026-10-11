import { chromium } from '@playwright/test';
import { resetDemo, login } from '../../tests/e2e/demoHelpers.js';
import { writeFile } from 'node:fs/promises';
const browser=await chromium.launch();const results=[];
try{for(const width of [1440,1024,390]){
 const ctx=await browser.newContext({baseURL:'http://127.0.0.1:5180',viewport:{width,height:900},timezoneId:'Asia/Ho_Chi_Minh'});const page=await ctx.newPage();
 await resetDemo(page);await login(page,'giabao','/tutor/timetable');
 const panel=page.locator('.weekly-timeline-scroll');await panel.waitFor({state:'visible'});
 for(const expanded of [false,true]){
  if(expanded)await page.getByRole('button',{name:'Mở chi tiết 19:00',exact:true}).click();
  for(const ratio of [0,.5,1]){
   await panel.evaluate((el,r)=>{el.scrollTop=(el.scrollHeight-el.clientHeight)*r;el.scrollLeft=(el.scrollWidth-el.clientWidth)*r},ratio);
   await panel.screenshot({path:`playwright-report/audit-tutor/${width}-inner-${expanded}-${ratio}.png`});
   results.push({width,expanded,ratio,geometry:await panel.evaluate(el=>({scrollTop:el.scrollTop,scrollLeft:el.scrollLeft,height:el.scrollHeight,width:el.scrollWidth}))});
  }
 }
 await ctx.close();console.log('inner inspected',width);
}}finally{await browser.close();await writeFile('playwright-report/audit-tutor/inner.json',JSON.stringify(results,null,2));}
