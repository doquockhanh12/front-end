import { chromium } from '@playwright/test';
import { resetDemo, login } from '../../../tests/e2e/demoHelpers.js';

const out = new URL('.', import.meta.url).pathname.replace(/^\//, '').replaceAll('/', '\\');
const browser = await chromium.launch({ headless: true });
const results = {};
async function freshPage() {
  const context = await browser.newContext({ baseURL: 'http://127.0.0.1:5181', viewport: { width: 390, height: 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await resetDemo(page);
  return { context, page };
}
function intersection(a, b) {
  if (!a || !b) return 0;
  const width = Math.max(0, Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x));
  const height = Math.max(0, Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y));
  return { width, height, area: width * height };
}

{
  const { context, page } = await freshPage();
  await login(page, 'admin', '/admin/appeals');
  await page.evaluate(() => document.fonts.ready);
  const empty = page.getByText('Chưa có kháng cáo. Hồ sơ người dùng gửi sẽ xuất hiện tại đây.', { exact: true });
  const textBox = await empty.boundingBox();
  const tableBox = await page.getByRole('region', { name: 'Bảng kháng cáo' }).boundingBox();
  const metrics = await page.evaluate(() => ({
    viewport: innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    table: (() => { const e = document.querySelector('.admin-table-scroll'); return e && { clientWidth: e.clientWidth, scrollWidth: e.scrollWidth, left: e.getBoundingClientRect().left, right: e.getBoundingClientRect().right }; })(),
  }));
  await page.screenshot({ path: `${out}a13-appeals-390.png`, fullPage: true });
  await page.screenshot({ path: `${out}a13-appeals-390-viewport.png` });
  results.appeals = { textBox, tableBox, ...metrics };
  await context.close();
}

{
  const { context, page } = await freshPage();
  await login(page, 'giabao', '/tutor/wallet');
  await page.evaluate(() => document.fonts.ready);
  const chat = page.getByRole('button', { name: 'Mở cửa sổ trò chuyện' });
  const chatBox = await chat.boundingBox();
  const cardRects = await page.locator('main section, main article, main [class*="card"], main [class*="wallet"]').evaluateAll(nodes => nodes.map(e => {
    const r = e.getBoundingClientRect();
    return { text: (e.innerText || '').trim().slice(0, 100), box: { x: r.x, y: r.y, width: r.width, height: r.height }, visible: r.width > 0 && r.height > 0 };
  }).filter(x => x.visible));
  await page.screenshot({ path: `${out}tutor-wallet-390.png`, fullPage: true });
  await page.screenshot({ path: `${out}tutor-wallet-390-viewport.png` });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => document.fonts.ready);
  const chatBox844 = await chat.boundingBox();
  await page.screenshot({ path: out + 'tutor-wallet-390x844.png', fullPage: true });
  await page.screenshot({ path: out + 'tutor-wallet-390x844-viewport.png' });
  results.tutorWallet = { chatBox, chatBox844, cardIntersections: cardRects.map(card => ({ ...card, intersection: intersection(chatBox, card.box) })).filter(x => x.intersection.area > 0) };
  await context.close();
}

{
  const { context, page } = await freshPage();
  await login(page, 'minhanh', '/learner/post-class');
  await page.evaluate(() => document.fonts.ready);
  const next = page.getByRole('button', { name: 'Tiếp tục: Địa điểm & Lịch học' });
  const chat = page.getByRole('button', { name: 'Mở cửa sổ trò chuyện' });
  const nextBox = await next.boundingBox();
  const chatBox = await chat.boundingBox();
  await page.screenshot({ path: `${out}learner-post-class-390.png`, fullPage: true });
  await page.screenshot({ path: `${out}learner-post-class-390-viewport.png` });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => document.fonts.ready);
  const nextBox844 = await next.boundingBox();
  const chatBox844 = await chat.boundingBox();
  await page.screenshot({ path: out + 'learner-post-class-390x844.png', fullPage: true });
  await page.screenshot({ path: out + 'learner-post-class-390x844-viewport.png' });
  await next.scrollIntoViewIfNeeded();
  const nextBoxScrolled = await next.boundingBox();
  const chatBoxScrolled = await chat.boundingBox();
  await page.screenshot({ path: out + 'learner-post-class-390x844-cta-scroll.png' });

  results.learnerPostClass = { nextBox844, chatBox844, overlap844: intersection(nextBox844, chatBox844), nextBox, chatBox, overlap: intersection(nextBox, chatBox), documentWidth: await page.evaluate(() => document.documentElement.scrollWidth) };
  results.learnerPostClass.scrolled = { nextBox: nextBoxScrolled, chatBox: chatBoxScrolled, overlap: intersection(nextBoxScrolled, chatBoxScrolled) };  await next.click();
  const next2 = page.getByRole('button', { name: /Tiếp tục: Ngân sách & Mục tiêu/ });
  await next2.scrollIntoViewIfNeeded();
  const next2Box = await next2.boundingBox();
  const chat2Box = await chat.boundingBox();
  await page.screenshot({ path: out + 'learner-post-class-step2-390x844.png' });
  await next2.click();
  const step3Heading = page.getByRole('heading', { name: 'Bước 3: Ngân sách & Mục tiêu học tập', exact: true });
  await step3Heading.waitFor({ state: 'visible' });
  const submit = page.getByRole('button', { name: /Đăng tin|Gửi tin/ }).last();
  await submit.scrollIntoViewIfNeeded();
  const submitBox = await submit.boundingBox();
  const chat3Box = await chat.boundingBox();
  const hitGrid = await submit.evaluate(button => {
    const r = button.getBoundingClientRect();
    return [.15, .5, .85, .97].flatMap(x => [.15, .5, .85].map(y => {
      const px = r.left + r.width * x, py = r.top + r.height * y;
      const hit = document.elementFromPoint(px, py);
      return { x: px, y: py, hit: hit?.outerHTML.slice(0, 120), own: hit === button || button.contains(hit) };
    }));
  });
  await page.screenshot({ path: out + 'learner-post-class-step3-390x844.png' });
  results.learnerPostClass.step3 = { submitBox, chatBox: chat3Box, overlap: intersection(submitBox, chat3Box), hitGrid };
  await context.close();
}

await browser.close();
process.stdout.write(JSON.stringify(results, null, 2));






