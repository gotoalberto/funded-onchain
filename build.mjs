// Builds the single-file mockup from src/: dist/index.html, copied to funded-onchain-mockups.html.
// src/pages/<flow>/<screen>.html are final page fragments (header, main, page style, placeholder mockbar).
// The build rewrites each page's nav, drops mock notes, points breadcrumbs back, keeps in-page links inside
// the same stage, regenerates every mockbar and index page, sets titles from src/stages.json, inlines the
// DATAURI_* images and writes everything into src/template.html as one JSON blob.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'src');
const readJson = f => JSON.parse(readFileSync(join(src, f), 'utf8'));
const titles = readJson('titles.json');
const uris = readJson('datauris.json');
const { stages: STAGES, indexKeys: INDEX_KEYS } = readJson('stages.json');

const ICO = '<svg class="ico ico-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > %s </svg>';
const ICONS = {
  'Account': '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />',
  'Trade': '<path d="M9 5v4" /> <rect width="4" height="6" x="7" y="9" rx="1" /> <path d="M9 15v2" /> <path d="M17 3v2" /> <rect width="4" height="8" x="15" y="5" rx="1" /> <path d="M17 13v3" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" />',
  'Leaderboard': '<path d="M11 5h10" /> <path d="M11 12h10" /> <path d="M11 19h10" /> <path d="M4 4h1v5" /> <path d="M4 9h2" /> <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />',
  'How it works': '<circle cx="12" cy="12" r="10" /> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /> <path d="M12 17h.01" />',
  'Referrals': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" />',
};
const ICO_SCREENS = '<svg class="ico" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="7" height="7" x="3" y="3" rx="1" /> <rect width="7" height="7" x="14" y="3" rx="1" /> <rect width="7" height="7" x="14" y="14" rx="1" /> <rect width="7" height="7" x="3" y="14" rx="1" /> </svg>';
const ICO_PREV = '<svg class="ico" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m15 18-6-6 6-6" /> </svg>';
const ICO_NEXT = '<svg class="ico" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m9 18 6-6-6-6" /> </svg>';

// Nav labels in the source pages and the tab each one becomes.
const MAP = { 'Home': 'Account', 'Season': 'Account', 'Account': 'Account', 'Stats': 'Account', 'Claims': 'Account', 'Payout': 'Account',
  'Trade': 'Trade', 'Leaderboard': 'Leaderboard', 'Payouts': 'Leaderboard', 'Rules': 'How it works', 'How it works': 'How it works', 'Referrals': 'Referrals' };
const CURRENT = { 'f03-competing/04-score': 'Account', 'f03-competing/06-stats': 'Account', 'f04-seat-claim/09-request-board': 'Account', 'f03-competing/07-leaderboard-cut': 'Referrals', 'f01-onboarding/03-rules': 'How it works' };
const HREF_OVERRIDE = { 'f02-not-qualified/07-trade-progress': { 'Account': '#/f02-not-qualified/03-home-progress', 'Trade': '#/f02-not-qualified/07-trade-progress' } };
const FIXED = { 'How it works': '#/f01-onboarding/03-rules', 'Referrals': '#/f03-competing/07-leaderboard-cut' };
const TYPE_TAB = { account: 'Account', stats: 'Account', money: 'Account', score: 'Account', trade: 'Trade',
  lb: 'Leaderboard', funded: 'Leaderboard', payouts: 'Leaderboard', referrals: 'Referrals', rules: 'How it works' };
const FALLBACK = { lb: ['funded', 'payouts'], funded: ['lb', 'payouts'], payouts: ['lb', 'funded'] };
const LINK_TYPES = new Set(['account', 'trade', 'lb', 'funded', 'payouts', 'stats', 'money', 'referrals', 'score']);
const KEY_TYPE = new Map(STAGES.flatMap(s => s.screens.map(c => [c.key, c.type])));
const WHERE = new Map(STAGES.flatMap((s, si) => s.screens.map((c, i) => [c.key, [si, i]])));

// Same output as Python's html.escape(s, quote=True).
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
const pad2 = n => String(n).padStart(2, '0');
const replaceAll = (s, from, to) => s.split(from).join(to);

function fixNav(body, key) {
  const m = /<nav class="nav-track"[^>]*>(.*?)<\/nav>/sd.exec(body);
  if (!m) return body;
  const items = [...m[1].matchAll(/<a class="nav-item" href="([^"]*)"([^>]*)>.*?<\/svg>\s*([^<]+?)\s*<\/a>/gs)].map(x => [x[1], x[2], x[3]]);
  const href = Object.create(null);
  let cur = null;
  for (const [h, attrs, label] of items) {
    const t = MAP[label.trim()] ?? label.trim();
    if (!(t in href)) href[t] = h;
    if (attrs.includes('aria-current')) cur = t;
  }
  cur = key in CURRENT ? CURRENT[key] : (key || '').startsWith('f09-money/') ? 'Account' : cur;
  const tab = TYPE_TAB[KEY_TYPE.get(key)];
  if (tab && !(key in CURRENT)) cur = tab;
  // signed-out: no active tab except How it works and Leaderboard
  const signedOut = items.some(([, , l]) => l.trim() === 'Season');
  if ((href['Leaderboard'] ?? '#') === '#') href['Leaderboard'] = signedOut ? '#/f01-onboarding/02-leaderboard' : '#/f03-competing/02-leaderboard';
  if ((href['Trade'] ?? '#') === '#' && !signedOut) href['Trade'] = '#/f03-competing/05-trade';
  if ((href['Account'] ?? '#') === '#' && !signedOut) href['Account'] = '#/f03-competing/01-home-competing';
  if (!('Trade' in href)) href['Trade'] = '#';
  if (signedOut && cur === 'Account') cur = null;
  let out = '';
  for (const t of ['Account', 'Trade', 'Leaderboard', 'How it works', 'Referrals']) {
    let h = HREF_OVERRIDE[key]?.[t] || (t in FIXED ? FIXED[t] : t in href ? href[t] : '#');
    if (signedOut && (t === 'Trade' || t === 'Referrals')) h = '#/f01-onboarding/04-sign-in';
    out += `<a class="nav-item" href="${h}"${t === cur ? ' aria-current="page"' : ''}>${ICO.replace('%s', ICONS[t])}${t}</a>`;
  }
  const [start, end] = m.indices[1];
  return body.slice(0, start) + out + body.slice(end);
}

function fixHeader(body) {
  const m = /<header class="app-header">.*?<\/header>/s.exec(body);
  if (!m) return body;
  const hd = m[0]
    .replace(/(<span class="acct-tag own">)[^<]*(<\/span>)/g, '$1Own$2')
    .replace(/\b(?:Season|Epoch|Qualification window|Qualification) \d+ requests close in/g, 'Requests close in')
    .replace(/\b(?:Season|Epoch) \d+\b/g, 'Qualification')
    .replace(/\b(?:Season|Epoch|Qualification window)\b/g, 'Qualification');
  return body.slice(0, m.index) + hd + body.slice(m.index + m[0].length);
}

// Breadcrumb 'Account' links go back to wherever the trader came from (fall back to the fixed href).
const crumbBack = body => replaceAll(body,
  '<nav class="crumb t-small" aria-label="Breadcrumb"><a class="link-q" href=',
  '<nav class="crumb t-small" aria-label="Breadcrumb"><a class="link-q" onclick="if(history.length&gt;1){history.back();return false}" href=');

// Drop the designer's mockup notes and tags (class mock-note / mock-tag), keep the mockbar.
function stripMock(body) {
  for (const cls of ['mock-note', 'mock-tag']) {
    for (;;) {
      const m = new RegExp(`<(\\w+)\\b[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>`).exec(body);
      if (!m) break;
      const pat = new RegExp(`<(/?)${m[1]}\\b[^>]*>`, 'g');
      let i = m.index + m[0].length, depth = 1;
      while (depth) {
        pat.lastIndex = i;
        const n = pat.exec(body);
        if (!n) { i = body.length; break; }
        depth += n[1] ? -1 : 1;
        i = n.index + n[0].length;
      }
      body = body.slice(0, m.index) + body.slice(i);
    }
  }
  return body;
}

function mockbar(key) {
  const [si, i] = WHERE.get(key);
  const { name, screens: sc } = STAGES[si];
  const prev = i ? `<a href="#/${sc[i - 1].key}" aria-label="Previous screen">${ICO_PREV}</a>` : `<a href="#" aria-disabled="true" aria-label="Previous screen">${ICO_PREV}</a>`;
  const nxt = i + 1 < sc.length ? `<a href="#/${sc[i + 1].key}" aria-label="Next screen">${ICO_NEXT}</a>` : `<a href="#" aria-disabled="true" aria-label="Next screen">${ICO_NEXT}</a>`;
  let flow = '';
  if (i + 1 === sc.length) {
    flow = si + 1 < STAGES.length ? `<a class="mb-next" href="#/${STAGES[si + 1].screens[0].key}">Next flow &rsaquo;</a>` : '<a class="mb-next" href="#/index">All flows &rsaquo;</a>';
  }
  return `<nav class="mockbar" aria-label="Mockup navigation">\n<span class="mb-tag">Mockup</span>\n<a href="#/${INDEX_KEYS[si]}">${ICO_SCREENS}Screens</a>\n${prev}\n`
    + `<span><b>${pad2(si + 1)}</b><span class="mb-flow">${esc(name)}</span>${i + 1}/${sc.length} ${esc(sc[i].name)}</span>\n${nxt}${flow}\n</nav>`;
}

// In-page links to a page type (leaderboard, trade, money...) go to this stage's version of it,
// then to a related type in this stage, then to the nearest other stage that has one.
function stageLinks(body, key) {
  const [si, i] = WHERE.get(key);
  if (si === 0) return body;
  const sc = STAGES[si].screens;
  const closest = t => {
    const js = sc.flatMap((s, j) => s.type === t ? [j] : []);
    if (!js.length) return null;
    const before = js.filter(j => j <= i);
    return before.length ? sc[Math.max(...before)].key : sc[Math.min(...js)].key;
  };
  return body.replace(/href="#\/([^"#]+)"/g, (all, target) => {
    const t = KEY_TYPE.get(target);
    if (!t || !LINK_TYPES.has(t) || WHERE.get(target)?.[0] === si) return all;
    let c = closest(t) || (FALLBACK[t] ?? []).map(closest).find(Boolean) || null;
    if (!c) {
      const order = [];
      for (let sj = si - 1; sj > 0; sj--) order.push(sj);
      for (let sj = si + 1; sj < STAGES.length; sj++) order.push(sj);
      for (const sj of order) {
        const hit = STAGES[sj].screens.find(s => s.type === t);
        if (hit) { c = hit.key; break; }
      }
    }
    return c ? `href="#/${c}"` : all;
  });
}

function indexPage(templateBody, si = null) {
  const head = /<header class="app-header">.*?<\/header>/s.exec(templateBody)[0];
  const style = (templateBody.match(/<style>.*?<\/style>/gs) ?? []).join('');
  let main;
  if (si === null) {
    const items = STAGES.map(({ name, date, description, screens }, n) =>
      `<li><a href="#/${INDEX_KEYS[n]}"><span class="hub-i num">${n + 1}</span><span class="grow"><span class="w6">${esc(name)}</span><span class="muted hub-q">${esc(date)} · ${esc(description)} · ${screens.length} screens</span></span>${ICO_NEXT}</a></li>`).join('');
    const total = STAGES.reduce((a, s) => a + s.screens.length, 0);
    main = '<main class="page-narrow"><p class="hub-num">Flows</p><h1 class="t-title mt-2">funded.onchain.cc, one trader&#39;s story</h1>'
      + `<p class="dim mt-3" style="max-width:68ch">kestrel from sign-up to a funded seat, a payout, a closed seat and back. Eight flows in date order, ${total} screens. Variants are other outcomes.</p>`
      + `<div class="row gap-3 mt-5"><a class="btn btn-primary" href="#/${STAGES[0].screens[0].key}">Start at flow 1</a></div>`
      + `<section class="hub-flow mt-7"><ol class="hub-screens">${items}</ol></section></main>`;
  } else {
    const { name, date, description, screens: sc } = STAGES[si];
    const items = sc.map((s, n) =>
      `<li><a href="#/${s.key}"><span class="hub-i num">${n + 1}</span><span class="grow"><span class="w6">${esc(s.name)}</span><span class="muted hub-q">${esc(s.question)}</span></span>${ICO_NEXT}</a></li>`).join('');
    const nxt = si + 1 < STAGES.length ? `<a class="btn" href="#/${INDEX_KEYS[si + 1]}">Next flow &rsaquo;</a>` : '<a class="btn" href="#/index">All flows</a>';
    main = `<main class="page-narrow"><p class="hub-num">${pad2(si + 1)} · ${esc(date)}</p><h1 class="t-title mt-2">${esc(name)}</h1><p class="dim mt-3" style="max-width:68ch">${esc(description)}</p>`
      + `<div class="row gap-3 mt-5"><a class="btn btn-primary" href="#/${sc[0].key}">Open first screen</a>${nxt}<span class="t-small muted">${sc.length} screens</span></div>`
      + `<section class="hub-flow mt-7"><ol class="hub-screens">${items}</ol></section></main>`;
  }
  return head + '\n' + main + style;
}

// Serialises like Python's json.dumps(pages, ensure_ascii=False), so both builds can be compared byte for byte.
const pagesJson = pages => '{' + [...pages].map(([k, p]) => `${JSON.stringify(k)}: {"title": ${JSON.stringify(p.title)}, "body": ${JSON.stringify(p.body)}}`).join(', ') + '}';

export function build() {
  const pages = new Map();
  for (const [key, fallbackTitle] of Object.entries(titles)) {
    let body = readFileSync(join(src, 'pages', `${key}.html`), 'utf8');
    body = crumbBack(stripMock(fixHeader(fixNav(body, key))));
    for (const [k, u] of Object.entries(uris)) body = replaceAll(body, k, u);
    let title = fallbackTitle;
    if (WHERE.has(key)) {
      const [si, i] = WHERE.get(key);
      body = stageLinks(body, key);
      body = body.replace(/<nav class="mockbar".*?<\/nav>/s, () => mockbar(key));
      title = `${STAGES[si].screens[i].name} · onchain.cc Funded`;
    }
    pages.set(key, { title, body });
  }
  const tmpl = pages.get('f03-competing/index').body;
  pages.set('index', { title: 'Flows · onchain.cc Funded', body: indexPage(tmpl) });
  INDEX_KEYS.forEach((k, n) => pages.set(k, { title: `${STAGES[n].name} · onchain.cc Funded flows`, body: indexPage(tmpl, n) }));
  if (pages.has('f09-money/index')) pages.set('f09-money/index', pages.get(INDEX_KEYS[INDEX_KEYS.length - 1]));
  const js = replaceAll(pagesJson(pages), '</', '<\\/');
  return readFileSync(join(src, 'template.html'), 'utf8').replace('__PAGES__', () => js);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const html = build();
  mkdirSync(join(root, 'dist'), { recursive: true });
  writeFileSync(join(root, 'dist/index.html'), html);
  copyFileSync(join(root, 'dist/index.html'), join(root, 'funded-onchain-mockups.html'));
  console.log(`dist/index.html and funded-onchain-mockups.html, ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB`);
}
