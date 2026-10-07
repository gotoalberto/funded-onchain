import { chromium } from '/home/claude/hetzner-wt/funded-mockups/funded/node_modules/playwright/index.mjs';
import { pathToFileURL } from 'node:url';
const [,, file, out, w = '1440', ...ys] = process.argv;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage({ viewport: { width: +w, height: 900 } });
await p.goto(pathToFileURL(file).href, { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
const info = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth, h: document.documentElement.scrollHeight }));
console.log(JSON.stringify(info));
for (const y of (ys.length ? ys : ['0'])) {
  await p.evaluate(y => window.scrollTo(0, +y), y);
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${out}-${y}.png` });
}
await b.close();
