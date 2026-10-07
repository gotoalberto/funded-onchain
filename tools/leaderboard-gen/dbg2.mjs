import { chromium } from '/home/claude/hetzner-wt/funded-mockups/funded/node_modules/playwright/index.mjs';
import { pathToFileURL } from 'node:url';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto(pathToFileURL(process.argv[2]).href);
const r = await p.evaluate(() => {
  const tr = document.querySelector('tr.bub-head + tr + tr');
  const td = tr.children[3];
  const c = getComputedStyle(td);
  const out = {};
  for (const k of ['backgroundColor','backgroundImage','boxShadow','borderRadius','transform','willChange','position','zIndex','isolation','mixBlendMode','backdropFilter','contain']) out[k] = c[k];
  out.trStyle = {}; const t = getComputedStyle(tr); for (const k of ['backgroundColor','opacity','position','transform','boxShadow']) out.trStyle[k] = t[k];
  out.rect = td.getBoundingClientRect().toJSON();
  out.next = tr.children[4].getBoundingClientRect().toJSON();
  return out;
});
console.log(JSON.stringify(r, null, 1));
await b.close();
