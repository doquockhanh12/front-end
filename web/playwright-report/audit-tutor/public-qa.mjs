import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { resetDemo, login } from '../../tests/e2e/demoHelpers.js';
const root='playwright-report/audit-public'; await mkdir(root,{recursive:true});
const browser=await chromium.launch(); const results=[];
try {
 for(const width of [1440,1024,390]) {
  const context=await browser.newContext({baseURL:'http://127.0.0.1:5180',viewport:{width,height:900}});
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const route of ['/','/learner','/tutor','/login','/register','/tutor/register','/help']) {
   await page.goto(route);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`${root}/${width}-${route.replaceAll('/','_')}.png`,fullPage:true});
   results.push({width,route,errors:[...errors],geometry:await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,fonts:[...new Set([...document.querySelectorAll('h1,h2,input,button')].map(e=>getComputedStyle(e).fontFamily))]}))});
  }
  await resetDemo(page);await login(page,'giabao','/tutor/timetable');
  const viewport=page.locator('.weekly-timeline-scroll');
  if(await viewport.count()) for(const ratio of [0,.5,1]) {
   await viewport.evaluate((el,r)=>{el.scrollTop=(el.scrollHeight-el.clientHeight)*r;el.scrollLeft=(el.scrollWidth-el.clientWidth)*r},ratio);
   await viewport.screenshot({path:`playwright-report/audit-tutor/${width}-timetable-inner-${ratio}.png`});
  }
  await context.close();console.log('public reviewed',width);
 }
} finally {await browser.close();await writeFile(`${root}/findings.json`,JSON.stringify(results,null,2));}
