// Packs every built page of dist/ into ONE self-contained HTML file with hash routing.
// Routes look like #/f03-competing/02-leaderboard. Run after `node build.mjs`.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');
const out = process.argv[2] || join(root, 'funded-onchain-mockups.html');

const css = readFileSync(join(dist, 'kit/funded.css'), 'utf8');
const logo = 'data:image/svg+xml;base64,' + readFileSync(join(dist, 'kit/assets/onchain-logo.svg')).toString('base64');

function htmlFiles(dir) {
  return readdirSync(dir).flatMap(n => {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) return n === 'kit' ? [] : htmlFiles(p);
    return p.endsWith('.html') ? [p] : [];
  });
}

const routeOf = file => relative(dist, file).replace(/\\/g, '/').replace(/\.html$/, '');

const pages = {};
for (const file of htmlFiles(dist)) {
  const route = routeOf(file);
  const html = readFileSync(file, 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [, 'onchain.cc Funded'])[1];
  let body = html.split(/<body[^>]*>/)[1].split('</body>')[0];
  const here = posix.dirname(route);
  body = body
    .replace(/src="(?:\.\.\/)?(?:[\w-]+\/)?kit\/assets\/onchain-logo\.svg"/g, `src="${logo}"`)
    .replace(/href="([^"#:][^"]*?)\.html(#[^"]*)?"/g, (m, target) => {
      const r = posix.normalize(posix.join(here === '.' ? '' : here, target));
      return `href="#/${r}"`;
    });
  pages[route] = { title, body };
}

const data = JSON.stringify(pages).replace(/<\/(script)/gi, '<\\/$1');

const doc = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>onchain.cc Funded flows</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap">
<style>${css}</style>
</head>
<body>
<div id="app"></div>
<a id="home" href="#/index">All flows</a>
<style>#home{position:fixed;z-index:80;left:16px;bottom:16px;height:32px;padding:0 14px;display:inline-flex;align-items:center;border-radius:9999px;background:#f2f2f2;color:#111;font-size:12px;font-weight:600;box-shadow:0 6px 24px rgb(0 0 0 / .5)}</style>
<script id="pages" type="application/json">${data}</script>
<script>
(function () {
  var pages = JSON.parse(document.getElementById('pages').textContent);
  var app = document.getElementById('app');
  function show() {
    var h = location.hash;
    if (h && h.indexOf('#/') !== 0) return; // in-page anchors
    var route = h ? decodeURIComponent(h.slice(2)) : 'index';
    var p = pages[route] || pages['index'];
    app.innerHTML = p.body;
    document.getElementById('home').style.display = route === 'index' ? 'none' : '';
    document.title = p.title;
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);
  show();
})();
</script>
</body>
</html>
`;
writeFileSync(out, doc);
console.log(`bundled ${Object.keys(pages).length} pages into ${out} (${(doc.length / 1024).toFixed(0)} KB)`);
