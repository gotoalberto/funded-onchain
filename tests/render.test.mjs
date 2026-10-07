// Renders every built page in Chrome at the two desktop widths that matter.
// Fails on console errors, failed local requests and horizontal overflow.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const widths = [1280, 1440];

function htmlFiles(dir) {
  return readdirSync(dir).flatMap(n => {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return p.endsWith('.html') ? [p] : [];
  });
}

test('pages render cleanly at desktop widths', async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome' });
  const problems = [];
  try {
    for (const width of widths) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      let current = '';
      page.on('console', m => { if (m.type() === 'error') problems.push(`${width} ${current} console: ${m.text()}`); });
      page.on('pageerror', e => problems.push(`${width} ${current} pageerror: ${e.message}`));
      page.on('requestfailed', r => { if (r.url().startsWith('file:')) problems.push(`${width} ${current} missing: ${r.url()}`); });
      for (const file of htmlFiles(dist)) {
        current = file.replace(dist, '');
        await page.goto(pathToFileURL(file).href, { waitUntil: 'load' });
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        if (overflow > 0) problems.push(`${width} ${current} overflows by ${overflow}px`);
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }
  assert.deepEqual(problems, []);
});
