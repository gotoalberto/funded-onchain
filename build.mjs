// Assembles src/pages/<flow>/<screen>.html into static, self-contained pages in dist/.
// Each source page starts with <!--page {json} --> and holds everything below the app header.
// Placeholders: {{root}} {{icon:name[:class]}} {{chart:seed}} {{equity:seed[:w:h]}} {{spark:seed:up|down}}
import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'src');
const dist = join(root, 'dist');
const manifest = JSON.parse(readFileSync(join(src, 'manifest.json'), 'utf8'));
const iconDir = join(root, 'node_modules/lucide-static/icons');

// ---------- helpers ----------
function icon(name, cls = 'ico') {
  const file = join(iconDir, `${name}.svg`);
  if (!existsSync(file)) throw new Error(`unknown icon: ${name}`);
  return readFileSync(file, 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s(width|height)="24"/g, '')
    .replace(/class="[^"]*"/, `class="${cls}" aria-hidden="true"`)
    .replace(/\n\s*/g, ' ')
    .trim();
}

function rng(seed) {
  let s = 0;
  for (const c of String(seed)) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

function candles(seed, base = 100) {
  const f = v => (v * base / 100).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: base > 1000 ? 1 : 2 });
  const r = rng(seed), W = 800, H = 380, n = 72, pad = 56;
  let p = 100; const cs = [];
  for (let i = 0; i < n; i++) {
    const o = p, c = o + (r() - 0.47) * 3.2, h = Math.max(o, c) + r() * 1.6, l = Math.min(o, c) - r() * 1.6;
    cs.push({ o, c, h, l }); p = c;
  }
  const max = Math.max(...cs.map(x => x.h)), min = Math.min(...cs.map(x => x.l));
  const y = v => 12 + (max - v) / (max - min) * (H - 40);
  const cw = (W - pad) / n;
  let g = '';
  for (let i = 0; i < 5; i++) {
    const yy = 12 + i * (H - 40) / 4;
    g += `<line x1="0" x2="${W - pad}" y1="${yy}" y2="${yy}" stroke="rgba(255,255,255,0.05)"/>`;
  }
  let body = '';
  cs.forEach((k, i) => {
    const x = i * cw + cw / 2, up = k.c >= k.o, col = up ? '#00A566' : '#D73337';
    body += `<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${y(k.h).toFixed(1)}" y2="${y(k.l).toFixed(1)}" stroke="${col}" stroke-width="1"/>`;
    const top = y(Math.max(k.o, k.c)), hgt = Math.max(1, Math.abs(y(k.o) - y(k.c)));
    body += `<rect x="${(x - cw * 0.32).toFixed(1)}" y="${top.toFixed(1)}" width="${(cw * 0.64).toFixed(1)}" height="${hgt.toFixed(1)}" fill="${col}"/>`;
  });
  const last = cs[cs.length - 1].c, ly = y(last);
  const vol = cs.map((k, i) => `<rect x="${(i * cw + cw * 0.18).toFixed(1)}" y="${(H - 4 - r() * 22).toFixed(1)}" width="${(cw * 0.64).toFixed(1)}" height="${(4 + r() * 18).toFixed(1)}" fill="${k.c >= k.o ? 'rgba(0,165,102,0.35)' : 'rgba(215,51,55,0.35)'}"/>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Price chart">${g}${vol}${body}
<line x1="0" x2="${W - pad}" y1="${ly.toFixed(1)}" y2="${ly.toFixed(1)}" stroke="#00A566" stroke-dasharray="3 3" stroke-width="1"/>
<rect x="${W - pad + 2}" y="${(ly - 9).toFixed(1)}" width="${pad - 4}" height="18" rx="3" fill="#00A566"/><text x="${W - pad / 2}" y="${(ly + 4).toFixed(1)}" text-anchor="middle" font-size="10" font-weight="600" fill="#fff" font-family="Google Sans Flex, sans-serif">${f(last)}</text>
${[0,1,2,3,4].map(i => { const yy = 12 + i * (H - 40) / 4; return `<text x="${W - 6}" y="${(yy + 4).toFixed(1)}" text-anchor="end" font-size="10" fill="#717171" font-family="Google Sans Flex, sans-serif">${f(max - i * (max - min) / 4)}</text>`; }).join('')}</svg>`;
}

function equity(seed, w = 800, h = 220, trend = 0.56) {
  const r = rng(seed), n = 90; let v = 0; const pts = [];
  for (let i = 0; i < n; i++) { v += (r() - (1 - trend)) * 4; pts.push(v); }
  const max = Math.max(...pts, 1), min = Math.min(...pts, -1);
  const X = i => (i / (n - 1)) * w, Y = p => 8 + (max - p) / (max - min) * (h - 16);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)} ${Y(p).toFixed(1)}`).join(' ');
  const zero = Y(0).toFixed(1);
  const up = pts[pts.length - 1] >= 0, col = up ? '#00A566' : '#D73337';
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img" aria-label="Equity curve">
<defs><linearGradient id="eq-${seed}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${col}" stop-opacity="0.28"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient></defs>
<line x1="0" x2="${w}" y1="${zero}" y2="${zero}" stroke="rgba(255,255,255,0.12)" stroke-dasharray="2 4"/>
<path d="${line} L${w} ${h} L0 ${h} Z" fill="url(#eq-${seed})"/>
<path d="${line}" fill="none" stroke="${col}" stroke-width="1.75" vector-effect="non-scaling-stroke"/></svg>`;
}

function spark(seed, dir) {
  const r = rng(seed), n = 24, w = 96, h = 28; let v = 0; const pts = [];
  for (let i = 0; i < n; i++) { v += (r() - (dir === 'up' ? 0.4 : 0.6)); pts.push(v); }
  const max = Math.max(...pts), min = Math.min(...pts);
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${(i / (n - 1) * w).toFixed(1)} ${(2 + (max - p) / (max - min || 1) * (h - 4)).toFixed(1)}`).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true"><path d="${d}" fill="none" stroke="${dir === 'up' ? '#00A566' : '#D73337'}" stroke-width="1.5"/></svg>`;
}

// ---------- shell ----------
const screens = manifest.flows.flatMap((f, fi) => f.screens.map((s, si) => ({ f, s, fi, si })));
// Each flow ships as an independent project: dist/<flow>/ holds its own index, kit and screens.
// Links between screens of the same flow work; links to other flows become inert ("#") with a
// title naming where they would lead, so a flow folder never depends on another one.
const NAV = {
  guest: [['Cycle', 'trophy', 'season'], ['Leaderboard', 'list-ordered', 'leaderboard'], ['Payouts', 'badge-dollar-sign', 'payoutsall'], ['Rules', 'scale', 'rules']],
  member: [['Home', 'house', 'home'], ['Trade', 'candlestick-chart', 'trade'], ['Leaderboard', 'list-ordered', 'leaderboard'], ['Payouts', 'badge-dollar-sign', 'payoutsall'], ['Stats', 'chart-no-axes-combined', 'stats']],
  funded: [['Home', 'house', 'home'], ['Trade', 'candlestick-chart', 'trade'], ['Leaderboard', 'list-ordered', 'leaderboard'], ['Payouts', 'badge-dollar-sign', 'payoutsall'], ['Stats', 'chart-no-axes-combined', 'stats'], ['Claims', 'banknote-arrow-down', 'payouts']],
};

const pages = new Map();
for (const e of screens) {
  const file = join(src, 'pages', e.f.id, `${e.s.id}.html`);
  if (!existsSync(file)) continue;
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^<!--page\s+(\{[\s\S]*?\})\s*-->/);
  if (!m) throw new Error(`${file}: missing <!--page {...} --> header`);
  pages.set(e, { meta: JSON.parse(m[1]), content: raw.slice(m[0].length) });
}

// first screen of this flow carrying each nav key, used as the default nav target
function navTargets(flow) {
  const t = {};
  for (const e of screens.filter(x => x.f === flow)) {
    const p = pages.get(e);
    if (p && p.meta.nav && !t[p.meta.nav]) t[p.meta.nav] = `${e.s.id}.html`;
  }
  return t;
}

function header(meta, flow) {
  const kind = meta.header || 'member';
  const navSet = NAV[kind === 'guest' ? 'guest' : kind === 'funded' ? 'funded' : 'member'];
  const links = Object.assign({}, navTargets(flow), meta.links || {});
  const go = key => links[key] || '#';
  const nav = navSet.map(([label, ic, key]) =>
    `<a class="nav-item" href="${go(key)}"${meta.nav === key ? ' aria-current="page"' : ''}>${icon(ic, 'ico ico-sm')}${label}</a>`).join('');
  const brand = `<a class="brand" href="${go(kind === 'guest' ? 'season' : 'home')}" aria-label="onchain.cc Funded home"><img src="kit/assets/onchain-logo.svg" alt="onchain.cc" width="111" height="15"><span class="brand-tag">Funded</span></a>`;
  let right;
  if (kind === 'guest') {
    right = `<span class="chip season-chip">${icon('timer', 'ico ico-sm')}<span>${meta.season || '<span class="k">Cycle 1 ends in</span> 11d 14h'}</span></span>
<a class="btn btn-ghost btn-sm" href="https://onchain.cc">onchain.cc</a>
<a class="btn btn-primary btn-sm" href="${go('signin')}">Sign in</a>`;
  } else {
    const season = meta.season || '<span class="k">Cycle 1 ends in</span> 11d 14h';
    const seasonPct = meta.seasonPct ?? 60;
    const acct = meta.acct || (kind === 'funded'
      ? { tag: 'funded', label: 'Funded', value: '$5,184.60' }
      : { tag: 'own', label: 'Own', value: '$1,284.20' });
    right = `<span class="chip season-chip">${icon('timer', 'ico ico-sm')}<span>${season}</span><span class="bar" aria-hidden="true"><i style="width:${seasonPct}%"></i></span></span>
<a class="acct" href="${go('acct')}"><span class="acct-tag ${acct.tag}">${acct.label}</span><span class="num w6">${acct.value}</span>${icon('chevron-down', 'ico ico-sm muted')}</a>
<a class="icon-btn" href="${go('deposit')}" aria-label="Deposit">${icon('plus', 'ico')}</a>
<button class="icon-btn" aria-label="Notifications">${icon('bell', 'ico')}${meta.unread ? '<span class="badge-dot"></span>' : ''}</button>
<a class="row gap-3" href="${go('alias')}" aria-label="Profile"><span class="avatar">${meta.avatar || 'K'}</span></a>`;
  }
  return `<header class="app-header"><div class="row gap-6">${brand}<nav class="nav-track" aria-label="Main">${nav}</nav></div><div class="header-right">${right}</div></header>`;
}

function mockbar(entry) {
  const list = screens.filter(x => x.f === entry.f);
  const idx = list.indexOf(entry);
  const prev = list[idx - 1], next = list[idx + 1];
  const fnum = `F${String(entry.fi + 1).padStart(2, '0')}`;
  return `<nav class="mockbar" aria-label="Mockup navigation">
<span class="mb-tag">Mockup</span>
<a href="index.html">${icon('layout-grid', 'ico')}Screens</a>
<a href="${prev ? `${prev.s.id}.html` : '#'}"${prev ? '' : ' aria-disabled="true"'} aria-label="Previous screen">${icon('chevron-left', 'ico')}</a>
<span><b>${fnum}</b><span class="mb-flow">${entry.f.name}</span>${entry.si + 1}/${list.length} ${entry.s.title}</span>
<a href="${next ? `${next.s.id}.html` : '#'}"${next ? '' : ' aria-disabled="true"'} aria-label="Next screen">${icon('chevron-right', 'ico')}</a>
</nav>`;
}

function doc({ title, body, description = '' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description.replace(/"/g, '&quot;')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap">
<link rel="stylesheet" href="kit/funded.css">
</head>
<body>
${body}
</body>
</html>
`;
}

const flowName = id => (manifest.flows.find(f => f.id === id) || {}).name || id;

// Rewrites links written as {{root}}<flow>/<screen>.html, ../<flow>/<screen>.html or
// <flow>/<screen>.html: same flow becomes a sibling link, another flow becomes inert.
function localize(html, flow) {
  return html
    .replace(/href="(?:\{\{root\}\}|\.\.\/)?(f\d\d-[a-z-]+)\/([\w-]+\.html)(#[^"]*)?"/g, (_, f, file, hash) =>
      f === flow.id ? `href="${file}${hash || ''}"` : `href="#" data-flow="${f}" title="Continues in ${flowName(f)}"`)
    .replace(/href="(?:\{\{root\}\}|\.\.\/)index\.html"/g, 'href="index.html"')
    .replace(/\{\{root\}\}/g, '');
}

function expand(html) {
  return html
    .replace(/\{\{icon:([a-z0-9-]+)(?::([a-z0-9 -]+))?\}\}/g, (_, n, c) => icon(n, c ? `ico ${c}` : 'ico'))
    .replace(/\{\{chart:([\w-]+)(?::([\d.]+))?\}\}/g, (_, s, b) => candles(s, b ? +b : 100))
    .replace(/\{\{equity:([\w-]+)(?::(\d+):(\d+))?(?::([\d.]+))?\}\}/g, (_, s, w, h, t) => equity(s, w ? +w : 800, h ? +h : 220, t ? +t : 0.56))
    .replace(/\{\{spark:([\w-]+):(up|down)\}\}/g, (_, s, d) => spark(s, d));
}

const HUB_CSS = `<style>
.hub { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.hub-flow { background: var(--glass-subtle); box-shadow: var(--rim); border-radius: var(--r-lg); padding: 20px; }
.hub-flow-head { display: flex; gap: 14px; }
.hub-num { font-family: var(--mono); font-size: 12px; color: var(--primary); padding-top: 5px; }
.hub-sum { font-size: 13px; line-height: 19px; }
.hub-screens { margin-top: 14px; }
.hub-screens a { display: flex; align-items: center; gap: 12px; padding: 9px 10px; border-radius: var(--r-md); transition: background-color 150ms ease; }
.hub-screens a:hover { background: rgb(255 255 255 / 0.05); }
.hub-i { width: 20px; color: var(--muted); font-size: 12px; }
.hub-q { display: block; font-size: 12px; line-height: 16px; }
</style>`;
const hubHeader = home => `<header class="app-header"><a class="brand" href="${home}"><img src="kit/assets/onchain-logo.svg" alt="onchain.cc" width="111" height="15"><span class="brand-tag">Funded</span></a><span class="muted t-small">Flow mockups for funded.onchain.cc. Demo data only.</span></header>`;
const screenList = (f, prefix) => `<ol class="hub-screens">${f.screens.map((s, si) => `<li><a href="${prefix}${s.id}.html"><span class="hub-i num">${si + 1}</span><span class="grow"><span class="w6">${s.title}</span><span class="muted hub-q">${s.answers}</span></span>{{icon:arrow-right:ico-sm muted}}</a></li>`).join('')}</ol>`;

// ---------- build ----------
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

let built = 0;
const missing = [];
for (const [fi, f] of manifest.flows.entries()) {
  const dir = join(dist, f.id);
  mkdirSync(dir, { recursive: true });
  cpSync(join(src, 'kit'), join(dir, 'kit'), { recursive: true });
  for (const entry of screens.filter(x => x.f === f)) {
    const page = pages.get(entry);
    if (!page) { missing.push(`${f.id}/${entry.s.id}`); continue; }
    const body = `${page.meta.noHeader ? '' : header(page.meta, f)}\n${page.content}\n${mockbar(entry)}`;
    const out = doc({ title: `${entry.s.title} · onchain.cc Funded`, body: expand(localize(body, f)), description: entry.s.answers });
    writeFileSync(join(dir, `${entry.s.id}.html`), out);
    built++;
  }
  const idxBody = `${hubHeader('index.html')}
<main class="page-narrow">
  <p class="hub-num">F${String(fi + 1).padStart(2, '0')}</p>
  <h1 class="t-title mt-2">${f.name}</h1>
  <p class="dim mt-3" style="max-width:68ch">${f.summary}</p>
  <div class="row gap-3 mt-5"><a class="btn btn-primary" href="${f.screens[0].id}.html">Open first screen</a><span class="t-small muted">${f.screens.length} screens. Links to other flows are inactive in this project.</span></div>
  <section class="hub-flow mt-7">${screenList(f, '')}</section>
</main>${HUB_CSS}`;
  writeFileSync(join(dir, 'index.html'), doc({ title: `${f.name} · onchain.cc Funded flows`, body: expand(idxBody), description: f.summary }));
}

// top hub: only an entry point to the independent flow projects
mkdirSync(join(dist, 'kit'), { recursive: true });
cpSync(join(src, 'kit'), join(dist, 'kit'), { recursive: true });
const hubFlows = manifest.flows.map((f, fi) => `
<section class="hub-flow">
  <div class="hub-flow-head"><span class="hub-num">F${String(fi + 1).padStart(2, '0')}</span><div class="grow"><h2 class="t-heading"><a href="${f.id}/index.html">${f.name}</a></h2><p class="muted t-caption mt-2">${f.screens.length} screens</p></div><a class="btn btn-glass btn-sm" href="${f.id}/${f.screens[0].id}.html">Open</a></div>
  ${f.why ? `<dl class="hub-why mt-4"><dt>What it does</dt><dd>${f.why.what}</dd><dt>Why</dt><dd>${f.why.why}</dd></dl>` : `<p class="dim mt-2 hub-sum">${f.summary}</p>`}
  ${screenList(f, `${f.id}/`)}
</section>`).join('');
const hubBody = `${hubHeader('index.html')}
<main class="page-narrow">
  <h1 class="t-title">funded.onchain.cc user flows</h1>
  <p class="dim mt-3" style="max-width:70ch">${manifest.flows.length} independent flows, ${screens.length} navigable screens with demo data. Every trader competes with their own account in a dated cycle; when it closes, those who meet the requirements request a seat within 24 hours and seats are assigned by score. Bitso provides the USDC of every funded account.</p>
  <div class="hub mt-7">${hubFlows}</div>
</main>${HUB_CSS}<style>.hub{grid-template-columns:1fr!important}.hub-why{display:grid;grid-template-columns:110px 1fr;gap:6px 14px;font-size:13px;line-height:19px}.hub-why dt{color:var(--muted)}.hub-why dd{margin:0;color:var(--text-2)}</style>`;
writeFileSync(join(dist, 'index.html'), doc({ title: 'Flows · onchain.cc Funded', body: expand(hubBody), description: 'Funded accounts flow mockups' }));

console.log(`built ${built} screens${missing.length ? `, missing ${missing.length}: ${missing.join(', ')}` : ''}`);
