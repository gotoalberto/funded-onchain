import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
const [,, file, out, w='1440', h='900', full='1'] = process.argv;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage({ viewport: { width: +w, height: +h } });
await p.goto(pathToFileURL(file).href, { waitUntil: 'networkidle' });
await p.waitForTimeout(900);
await p.screenshot({ path: out, fullPage: full === '1' });
await b.close();
