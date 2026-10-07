import { chromium } from '/home/claude/hetzner-wt/funded-mockups/funded/node_modules/playwright/index.mjs';
import { pathToFileURL } from 'node:url';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto(pathToFileURL(process.argv[2]).href);
const r = await p.evaluate(() => {
  const out = [];
  const th = document.querySelector('.lbt thead th'); const cs = getComputedStyle(th);
  out.push(['th', cs.backgroundColor, cs.position, cs.top, cs.opacity]);
  const tr = [...document.querySelectorAll('.lbt tr.cant')][1]; 
  for (const td of tr.children) { const c = getComputedStyle(td); out.push([td.className, c.backgroundColor, c.boxShadow, c.outline, c.borderBottom, c.opacity, c.filter]); }
  const tbl = getComputedStyle(document.querySelector('.lbt')); out.push(['table', tbl.borderCollapse, tbl.borderSpacing]);
  return out;
});
console.log(r.map(x => x.join(' | ')).join('\n'));
await b.close();
