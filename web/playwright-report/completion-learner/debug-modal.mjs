import { chromium } from '@playwright/test';
import { resetDemo, login } from '../../tests/e2e/demoHelpers.js';
const browser = await chromium.launch();
const context = await browser.newContext({ baseURL: 'http://127.0.0.1:5180', viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
page.on('pageerror', error => console.log('PAGEERROR', error.message));
await resetDemo(page); await login(page, 'giabao', '/messages');
const buttons = page.getByRole('button', { name: 'Gửi Đề xuất Học phí' });
console.log('BUTTONS', await buttons.count());
console.log('BEFORE', await buttons.first().evaluate(node => ({html:node.outerHTML,rect:node.getBoundingClientRect().toJSON(),props:Object.keys(node).filter(key=>key.startsWith('__reactProps')).map(key=>node[key].onClick?.toString())})));
await buttons.first().click();
console.log('AFTERFIRST', await page.locator('.custom-offer-modal').count(),await page.locator('body').innerText());
await page.screenshot({ path: 'playwright-report/completion-learner/debug-modal-first.png', fullPage: true });
if (!(await page.locator('.custom-offer-modal').count())) { await buttons.last().click();console.log('AFTERLAST', await page.locator('.custom-offer-modal').count()); }
await browser.close();
