import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { readFileSync, mkdirSync } from 'node:fs';
const m = JSON.parse(readFileSync('src/manifest.json', 'utf8'));
mkdirSync('.shots/review', { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
for (const f of m.flows) for (const s of f.screens) {
  await p.goto(pathToFileURL(`dist/${f.id}/${s.id}.html`).href, { waitUntil: 'networkidle' });
  await p.addStyleTag({ content: '.mockbar{display:none!important}' });
  await p.waitForTimeout(800);
  await p.screenshot({ path: `.shots/review/${f.id}--${s.id}.png`, fullPage: true });
}
await b.close();
