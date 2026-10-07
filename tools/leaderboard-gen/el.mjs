import { chromium } from '/home/claude/hetzner-wt/funded-mockups/funded/node_modules/playwright/index.mjs';
import { pathToFileURL } from 'node:url';
const [,, file, sel, out, w = '1280'] = process.argv;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage({ viewport: { width: +w, height: 900 }, deviceScaleFactor: 1 });
await p.goto(pathToFileURL(file).href, { waitUntil: 'networkidle' });
await p.waitForTimeout(500);
await p.locator(sel).first().screenshot({ path: out });
await b.close();
