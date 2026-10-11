# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L06 paid offer produces linked shared lessons visible to Tutor
- Location: tests\e2e\completion-learner-audit.spec.js:67:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5180/login?redirect=%2Flearner%2Fdashboard
Call log:
  - navigating to "http://127.0.0.1:5180/login?redirect=%2Flearner%2Fdashboard", waiting until "load"

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
  3  | 
  4  | export const fixedTime = new Date('2026-10-05T06:00:00+07:00');
  5  | 
  6  | export async function resetDemo(page, options = {}) {
  7  |   const referenceTime = options.referenceTime || fixedTime;
  8  |   await page.clock.install({ time: referenceTime });
  9  |   const workspace = options.state || createDemoState(referenceTime);
  10 |   if (options.lessons) workspace.lessons = options.lessons;
  11 |   if (options.savedByAccount) workspace.savedByAccount = options.savedByAccount;
  12 |   await page.addInitScript(({ seed, key: domainKey, options }) => {
  13 |     if (sessionStorage.getItem('tnm.e2e.initialized')) return;
  14 |     for (const key of Object.keys(localStorage)) {
  15 |       if (key.startsWith('tnm.') || key === 'tutornearme.demo-auth.v1') localStorage.removeItem(key);
  16 |     }
  17 |     sessionStorage.removeItem('tutornearme.demo-auth.v1');
  18 |     localStorage.setItem(domainKey, JSON.stringify(seed));
  19 |     if (options.user) localStorage.setItem('tutornearme.demo-auth.v1', JSON.stringify({ user: options.user, accounts: [] }));
  20 |     if (options.legacySaved) localStorage.setItem('tnm.savedTutors', JSON.stringify(options.legacySaved));
  21 |     sessionStorage.setItem('tnm.e2e.initialized', 'true');
  22 |   }, { seed: workspace, key: DOMAIN_STORAGE_KEY, options });
  23 | }
  24 | 
  25 | export async function login(page, username, destination) {
> 26 |   await page.goto(`/login?redirect=${encodeURIComponent(destination)}`);
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5180/login?redirect=%2Flearner%2Fdashboard
  27 |   await page.getByLabel('Username / Email / Số điện thoại *').fill(username);
  28 |   await page.getByLabel('Mật khẩu *', { exact: true }).fill('demo1234');
  29 |   await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
  30 |   await expect(page).toHaveURL(new RegExp(`${destination}$`));
  31 | }
  32 | 
  33 | export async function logout(page) {
  34 |   if (await page.getByRole('button', { name: 'Đăng xuất', exact: true }).count() === 0) {
  35 |     await page.getByRole('button', { name: 'Mở menu', exact: true }).click();
  36 |   }
  37 |   await page.getByRole('button', { name: 'Đăng xuất', exact: true }).click();
  38 | }
  39 | 
```