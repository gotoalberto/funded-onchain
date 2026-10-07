// Generates the leaderboard pages from one dataset so every board agrees.
import { writeFileSync, readFileSync } from 'node:fs';
const ROOT = '/home/claude/hetzner-wt/funded-mockups/funded/src/pages';
const SCR = '/tmp/claude-1000/-home-claude-hetzner/67a16c69-9cc9-5393-83d2-45dfe46c6cef/scratchpad/lbx';

// ---------- Season 1 board, Nov 6 10:00 UTC ----------
// b, alias, wallet, score, today, move, pnl, ret, rule(k|b), days, seat(number|'cant'|'none'), extra
const R = (b, alias, wallet, score, today, move, pnl, ret, rule, days, seat, x = {}) =>
  ({ b, alias, wallet, score, today, move, pnl, ret, rule, days, seat, ...x });
const BOARD = [
  R(1, 'ormond', '0x1f3a…9c20', 942.7, 1.2, 0, 38412.60, 61.2, 'k', 18, 1),
  R(2, 'tidewater', '0x77b0…d415', 918.3, 0.4, 0, 21907.15, 48.3, 'k', 17, 2),
  R(3, 'quillon', '0xa2c9…40e8', 903.8, 2.9, 1, 9884.30, 72.4, 'k', 16, 3),
  R(4, 'nightjar', '0x5d6e…0b31', 887.2, -3.1, -1, 14120.44, 39.8, 'b', 18, 'cant', { why: 'Broke the 10% loss rule on Nov 2: fell back below its starting capital after reaching +10% on Oct 25. No seat request this season.' }),
  R(5, 'brasswork', '0x0c44…e7f9', 869.5, 0.8, 0, 6120.40, 61.3, 'k', 15, 4),
  R(6, null, '0xe03d…19f2', 851.0, -1.4, 0, 15388.02, 38.9, 'k', 18, 5),
  R(7, 'ferro', '0x6e92…11ad', 838.4, 1.9, 0, 4410.66, 57.0, 'k', 16, 6),
  R(8, 'lumen.trade', '0x3a07…c8e2', 829.9, 4.6, 2, 3905.31, 49.8, 'k', 14, 7),
  R(9, 'okapi', '0x9f15…2b6c', 822.1, -2.2, -1, 5602.18, 36.4, 'k', 17, 8),
  R(10, null, '0x5be1…77c4', 815.6, -0.7, -1, 2288.90, 52.1, 'k', 12, 9),
  R(11, 'halyard', '0xd830…6f14', 809.3, 0.3, 0, 3120.45, 33.8, 'k', 16, 10),
  R(12, 'corvid', '0x2b7c…e590', 803.7, -1.8, 0, 7840.12, 22.6, 'k', 18, 11),
  R(13, null, '0x2fa8…d051', 798.2, 2.4, 1, 1488.30, 44.2, 'k', 15, 12),
  R(14, 'meridian_k', '0x8e40…3a9d', 794.0, -0.9, -1, 2041.77, 29.5, 'k', 13, 13),
  R(15, 'marlowe', '0xf61d…07b2', 788.9, 1.1, 0, 1904.12, 38.1, 'k', 16, 14),
  R(16, 'vandal', '0x4c1e…7d02', 784.2, 2.0, 1, 966.40, 41.7, 'k', 13, 15),
  R(17, 'kestrel', '0x7a3F…c91E', 781.6, 3.8, 1, 412.80, 32.1, 'k', 11, 16, { me: true }),
  R(18, null, '0x91c2…4ab0', 779.0, -2.6, -2, 2310.77, 19.4, 'k', 17, 17),
  R(19, 'sable_fx', '0x5a83…e04f', 776.3, 0.6, 0, 701.05, 27.9, 'k', 15, 18),
  R(20, 'tamarind', '0x13c5…b8a1', 772.8, -0.2, 0, 1226.30, 23.5, 'k', 15, 19),
  R(21, null, '0xc47e…0b9a', 769.1, 1.5, 1, 845.60, 30.2, 'k', 14, 20),
  R(22, 'pelorus', '0xe5f2…1c07', 765.4, -0.8, -1, 1977.15, 16.8, 'k', 18, 21),
  R(23, 'gannet', '0x40aa…9d3e', 761.0, 0.1, 0, 538.20, 29.4, 'k', 16, 22),
  R(24, null, '0x08dd…e6a1', 757.7, 2.3, 3, 2640.08, 14.1, 'k', 15, 23),
  R(25, 'ostinato', '0xc9d2…5f61', 754.2, -1.0, -1, 719.94, 25.6, 'k', 17, 24),
  R(51, 'tarn_r', '0x2e18…a6c4', 722.5, 0.9, 0, 512.30, 17.2, 'k', 16, 50),
  R(52, null, '0x6f0d…93b8', 720.1, -1.2, -1, 268.44, 21.0, 'k', 15, 51),
  R(53, 'halite', '0x95c3…0e2d', 718.4, 1.6, 2, 340.12, 13.9, 'k', 17, 52),
  R(54, 'vesper.fx', '0x1ab7…c35e', 716.0, -0.5, 0, 455.80, 11.6, 'k', 14, 53),
  R(55, 'sorrel', '0x7e44…2d90', 714.3, 0.2, 1, 298.66, 19.8, 'k', 16, 54),
  R(56, null, '0x4d09…b7e3', 712.0, -0.6, -1, 1034.50, 8.7, 'k', 18, 55),
  R(57, 'wicklow', '0xb3e6…5a17', 709.5, 2.2, 4, 187.40, 22.6, 'k', 13, 56, { bub: '+9.9' }),
  R(58, 'thrum', '0x0e8b…c4f2', 708.2, -4.4, -3, 633.10, 12.0, 'b', 17, 'cant', { why: 'Broke the 10% loss rule on Nov 4: equity fell 10% below its season starting capital. No seat request this season.', bubzone: true }),
  R(59, null, '0x6a10…3c2e', 706.9, 0.4, 0, 402.18, 12.7, 'k', 16, 57, { bub: '+7.3' }),
  R(60, 'brindle', '0x8f71…e0c9', 704.3, -1.1, -1, 291.40, 18.2, 'k', 17, 58, { bub: '+4.7' }),
  R(61, 'latch', '0x2c5a…7716', 702.8, 1.3, 2, 188.75, 9.4, 'k', 15, 59, { bub: '+3.2' }),
  R(62, 'corsair_7', '0xd47b…3e08', 701.4, -0.3, -1, 356.02, 11.0, 'k', 18, 60, { bub: '+1.8' }),
  R(63, null, '0x3e77…a915', 699.6, 2.7, 3, 124.90, 15.3, 'k', 14, 'none', { bub: '-1.8' }),
  R(64, 'fenwick', '0x91aa…6d52', 698.0, -0.4, 0, -84.10, -3.1, 'k', 12, 'none', { bub: '-3.4' }),
  R(65, 'nadir', '0x58e3…f2a0', 695.2, -0.9, -1, 612.33, 7.9, 'b', 16, 'cant', { why: 'Broke the 10% loss rule on Oct 31: equity fell 10% below its season starting capital. No seat request this season.', bubzone: true }),
  R(66, null, '0xb1f0…2d47', 693.8, 0.5, 0, 47.20, 5.8, 'k', 9, 'none', { bub: '-7.6' }),
  R(67, 'rookery', '0x0a3d…8e15', 692.6, 1.0, 1, 215.60, 10.4, 'k', 13, 'none', { bub: '-8.8' }),
  R(68, null, '0x7d21…a0c3', 691.9, -1.7, -2, 88.30, 6.2, 'k', 15, 'none', { bub: '-9.5' }),
  R(69, 'tallow', '0xe2c0…4b18', 690.4, 0.3, 0, 142.75, 9.1, 'k', 11, 'none'),
  R(70, 'orrery', '0x33f8…a5d1', 689.7, -0.2, 0, 96.04, 4.4, 'k', 16, 'none'),
  R(71, 'juniper.fx', '0x5c62…d7a9', 688.9, 0.6, 1, 73.80, 5.0, 'k', 12, 'none'),
  R(72, null, '0xa61e…3b04', 688.1, -0.8, -1, 301.55, 3.9, 'k', 18, 'none'),
  R(73, 'sedge', '0x19d4…c6e7', 687.5, 0.2, 0, 55.10, 7.7, 'k', 10, 'none'),
];
const byB = Object.fromEntries(BOARD.map(r => [r.b, r]));

// zones by seat number
const ZONES = [
  { k: '200', name: '$200K', from: 1, to: 1, n: 1, pos: '$200,000', usdc: '$40,000' },
  { k: '100', name: '$100K', from: 2, to: 2, n: 1, pos: '$100,000', usdc: '$20,000' },
  { k: '50', name: '$50K', from: 3, to: 6, n: 4, pos: '$50,000', usdc: '$10,000' },
  { k: '25', name: '$25K', from: 7, to: 21, n: 15, pos: '$25,000', usdc: '$5,000' },
  { k: '5', name: '$5K', from: 22, to: 60, n: 39, pos: '$5,000', usdc: '$1,000' },
];
const zoneOf = seat => ZONES.find(z => seat >= z.from && seat <= z.to);

// ---------- helpers ----------
const hue = s => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
const money = v => (v < 0 ? '-' : '+') + '$' + Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = v => (v < 0 ? '-' : '+') + Math.abs(v).toFixed(1) + '%';
const sc = v => v.toFixed(1);
const name = r => r.alias || r.wallet;
const floorsMet = r => r.rule === 'k' && r.days >= 15 && r.pnl > 0;

function avatar(r) {
  if (!r.alias) return '<span class="avatar wallet-av">{{icon:wallet:ico-sm}}</span>';
  if (r.me) return '<span class="avatar">K</span>';
  return `<span class="avatar" style="filter:hue-rotate(${hue(r.alias)}deg) saturate(0.55)">${r.alias[0].toUpperCase()}</span>`;
}
function traderCell(r, { link, guest, tip }) {
  const label = r.alias ? r.alias : `<span class="mono">${r.wallet}</span>`;
  const you = r.me && !guest ? ' <span class="you">YOU</span>' : '';
  const inner = `${avatar(r)}<span class="tn">${label}</span>${you}`;
  const t = tip ? `<span class="tip wtip" role="tooltip"><span class="mono">${r.wallet}</span><span class="muted">Wallet, click for the profile</span></span>` : '';
  const title = r.alias ? ` title="${r.wallet}"` : '';
  const tc = tip ? 'c-t tipcell' : 'c-t';
  if (link && !r.me) return `<td class="${tc}">${t}<a class="trader" href="${link}"${title}>${inner}</a></td>`;
  return `<td class="${tc}">${t}<span class="trader"${title}>${inner}</span></td>`;
}
function daysCell(d) {
  const on = Math.min(d, 15);
  const segs = Array.from({ length: 15 }, (_, i) => `<i${i < on ? ' class="on"' : ''}></i>`).join('');
  const lab = d >= 15 ? `<span class="dn ok">${d}{{icon:check:ico-sm}}</span>` : `<span class="dn">${d}<span class="muted">/15</span></span>`;
  return `<td class="c-d"><span class="dd"><span class="segs mini" aria-hidden="true">${segs}</span>${lab}</span></td>`;
}
function moveCell(m) {
  if (m > 0) return `<td class="r c-m"><span class="mv upm">{{icon:arrow-up:ico-xs}}${m}</span></td>`;
  if (m < 0) return `<td class="r c-m"><span class="mv dnm">{{icon:arrow-down:ico-xs}}${-m}</span></td>`;
  return `<td class="r c-m"><span class="mv eq">{{icon:minus:ico-xs}}</span></td>`;
}
function seatCell(r, { cantTip }) {
  if (r.seat === 'cant') {
    const tip = cantTip ? `<span class="tip ctip" role="tooltip">${r.why}</span>` : '';
    return `<td class="c-s${cantTip ? ' tipcell' : ''}">${tip}<span class="cant-tag" title="${r.why}">{{icon:circle-slash:ico-sm}}Can't request</span></td>`;
  }
  const b = r.bub ? `<span class="tocut ${r.bub[0] === '+' ? 'in' : 'out'}" title="${r.bub[0] === '+' ? 'Points it can lose before the first trader outside passes it' : 'Points needed to pass the last seat'}">${r.bub}</span>` : '';
  if (r.seat === 'none') return `<td class="c-s"><span class="muted">No seat</span>${b}</td>`;
  return `<td class="c-s"><b class="seatn">#${r.seat}</b>${b}</td>`;
}
function bandCell(r) {
  if (r.seat === 'cant') return '<td class="c-band"><span class="muted t-caption">None</span></td>';
  if (r.seat === 'none') return '<td class="c-band"><span class="muted t-caption">None</span></td>';
  const z = zoneOf(r.seat);
  if (floorsMet(r)) return `<td class="c-band"><span class="band band-${z.k}">${z.name}</span></td>`;
  return `<td class="c-band"><span class="band band-${z.k} if" title="If the floors are met by the close">${z.name}</span></td>`;
}
function row(r, o = {}) {
  const cls = [];
  if (r.me && !o.guest) cls.push('me');
  if (o.below) cls.push('below');
  if (r.bub || (r.bubzone && o.inBubble)) cls.push('bub');
  if (r.seat === 'cant') cls.push('cant');
  if (o.hover) cls.push('hov');
  if (o.sel) cls.push('sel');
  const id = r.me && !o.guest ? ' id="me"' : '';
  return `<tr${cls.length ? ` class="${cls.join(' ')}"` : ''}${id}>`
    + `<td class="c-b">#${r.b}</td>`
    + seatCell(r, o)
    + traderCell(r, { link: o.link, guest: o.guest, tip: o.walletTip })
    + `<td class="r c-sc">${sc(r.score)}</td>`
    + `<td class="r c-td ${r.today >= 0 ? 'pos' : 'neg'}">${r.today >= 0 ? '+' : '-'}${Math.abs(r.today).toFixed(1)}</td>`
    + moveCell(r.move)
    + `<td class="r ${r.pnl >= 0 ? 'up' : 'down'}">${money(r.pnl)}</td>`
    + `<td class="r ${r.ret >= 0 ? 'up' : 'down'}">${pct(r.ret)}</td>`
    + (r.rule === 'k' ? '<td class="c-lr"><span class="lr ok">{{icon:circle-check:ico-sm}}Kept</span></td>' : '<td class="c-lr"><span class="lr no">{{icon:circle-x:ico-sm}}Broken</span></td>')
    + daysCell(r.days)
    + bandCell(r)
    + '</tr>';
}
const COLS = 11;
function zoneRow(z, extra = '') {
  const rows = BOARD.filter(r => typeof r.seat === 'number' && r.seat >= z.from && r.seat <= z.to);
  const hi = rows[0], lo = rows[rows.length - 1];
  const range = z.n === 1 ? `Score ${sc(hi.score)}` : z.k === '5' ? `Scores 761.0 to 701.4` : `Scores ${sc(hi.score)} to ${sc(lo.score)}`;
  const seats = z.n === 1 ? `Seat #${z.from}` : `Seats #${z.from} to #${z.to}`;
  return `<tr class="zone" id="z${z.k}"><td colspan="${COLS}"><div class="zone-in"><span class="band band-${z.k}">${z.name}</span><b>${seats}</b><span class="dim">${z.n} seat${z.n > 1 ? 's' : ''}, ${z.pos} max position, ${z.usdc} USDC${z.n > 1 ? ' each' : ''}</span><span class="grow"></span>${extra}<span class="muted num">${range}</span></div></td></tr>`;
}
function gapRow(text, href = '#') {
  return `<tr class="gap"><td colspan="${COLS}"><a href="${href}" class="gap-btn">{{icon:chevrons-up-down:ico-sm}}${text}</a></td></tr>`;
}
function bubHead() {
  return `<tr class="bub-head"><td colspan="${COLS}"><div class="bub-in"><b>On the bubble</b><span class="muted">The last 5 seats and the next 5 traders who can request. Figures beside the seat are points to the cut.</span></div></td></tr>`;
}
function cutRow() {
  return `<tr class="cutrow" id="cut"><td colspan="${COLS}"><div class="cutbar"><span class="cut-rule"></span><span class="cut-pill">{{icon:scissors-line-dashed:ico-sm}}<b>Last seat, #60, score 701.4</b><span class="muted">corsair_7, #62 on the board. No seat below</span></span><span class="cut-rule"></span></div></td></tr>`;
}
function thead() {
  return `<colgroup><col class="w-b"><col class="w-s"><col class="w-t"><col class="w-sc"><col class="w-td"><col class="w-m"><col class="w-pnl"><col class="w-ret"><col class="w-lr"><col class="w-d"><col class="w-band"></colgroup>
      <thead><tr><th>Board</th><th>Seat</th><th>Trader</th><th class="r">Score</th><th class="r" title="Score change since 00:00 UTC">Today</th><th class="r" title="Board rank change in the last 24 hours">24h</th><th class="r">Net PnL</th><th class="r">Return</th><th title="10% loss rule on own season capital">Loss rule</th><th>Trading days</th><th>Band</th></tr></thead>`;
}

// rows for the "All" view (02 and its derivatives)
function allRows(o) {
  const out = [];
  const R1 = n => byB[n];
  const opt = (r, extra = {}) => ({ ...o, ...extra, hover: o.hoverB === r.b, walletTip: o.hoverB === r.b, cantTip: o.cantTipB === r.b, sel: o.selB === r.b });
  out.push(zoneRow(ZONES[0])); out.push(row(R1(1), opt(R1(1))));
  out.push(zoneRow(ZONES[1])); out.push(row(R1(2), opt(R1(2))));
  out.push(zoneRow(ZONES[2])); for (const b of [3, 4, 5, 6, 7]) out.push(row(R1(b), opt(R1(b))));
  out.push(zoneRow(ZONES[3])); for (let b = 8; b <= 22; b++) out.push(row(R1(b), opt(R1(b))));
  out.push(zoneRow(ZONES[4])); for (const b of [23, 24, 25]) out.push(row(R1(b), opt(R1(b))));
  out.push(gapRow('Board #26 to #54, seats #25 to #53, 29 traders'));
  for (const b of [55, 56]) out.push(row(R1(b), opt(R1(b))));
  out.push(bubHead());
  for (const b of [57, 58, 59, 60, 61, 62]) out.push(row(R1(b), opt(R1(b), { inBubble: true })));
  out.push(cutRow());
  for (const b of [63, 64, 65, 66, 67, 68]) out.push(row(R1(b), opt(R1(b), { below: true, inBubble: true })));
  for (const b of [69, 70]) out.push(row(R1(b), opt(R1(b), { below: true })));
  return out.join('\n');
}
function bubbleRows(o) {
  const out = [];
  const opt = (r, extra = {}) => ({ ...o, ...extra, cantTip: o.cantTipB === r.b });
  out.push(zoneRow(ZONES[4], '<span class="muted t-caption filt">Showing seats #50 to #60</span>'));
  for (const b of [51, 52, 53, 54, 55, 56]) out.push(row(byB[b], opt(byB[b])));
  out.push(bubHead());
  for (const b of [57, 58, 59, 60, 61, 62]) out.push(row(byB[b], opt(byB[b], { inBubble: true })));
  out.push(cutRow());
  for (const b of [63, 64, 65, 66, 67, 68]) out.push(row(byB[b], opt(byB[b], { below: true, inBubble: true })));
  for (const b of [69, 70, 71, 72, 73]) out.push(row(byB[b], opt(byB[b], { below: true })));
  return out.join('\n');
}

// ---------- seat map ----------
function seatMap({ mode = 'live', youSeat = 16, youLabel = 'You, seat #16', guest = false }) {
  const live = mode === 'live';
  const zl = live
    ? { '200': ['942.7', 'ormond'], '100': ['918.3', 'tidewater'], '50': ['838.4', 'ferro'], '25': ['765.4', 'pelorus'], '5': ['701.4', 'corsair_7'] }
    : { '200': ['951.2', 'ormond'], '100': ['925.0', 'tidewater'], '50': ['851.9', 'ferro'], '25': ['776.9', '0x08dd…e6a1'], '5': ['708.3', 'teasel'] };
  const segs = ZONES.map(z => {
    const you = !guest && youSeat >= z.from && youSeat <= z.to;
    const left = ((youSeat - z.from + 0.5) / z.n * 100).toFixed(1);
    const marker = you ? `<span class="sm-you" style="left:${left}%"><span class="sm-you-tag">${youLabel}</span><span class="sm-you-dot"></span></span>` : '';
    const bub = z.k === '5' && live ? '<span class="sm-bub" style="width:12.8%" aria-hidden="true"><span class="sm-bub-tag">On the bubble</span></span>' : '';
    const [low, who] = zl[z.k];
    const whoTxt = who.startsWith('0x') ? `<span class="mono">${who}</span>` : who;
    return `<div class="sm-zone${you ? ' is-you' : ''}${z.n < 15 ? ' sm-small' : ''}" style="flex:${z.n} 1 0">
          <div class="sm-bar z${z.k}">${bub}${marker}</div>
          <div class="sm-meta">
            <div class="row gap-3"><span class="band band-${z.k}">${z.name}</span><span class="sm-seats">${z.n === 1 ? '#' + z.from : '#' + z.from + ' to #' + z.to}</span></div>
            <span class="sm-l">${z.usdc} USDC${z.n > 1 ? ' each' : ''}</span>
            <span class="sm-l">${z.n} seat${z.n > 1 ? 's' : ''}, ${z.n === 1 ? 'score' : 'lowest'} <b class="num">${low}</b></span>
            <span class="sm-w">${whoTxt}</span>
          </div>
        </div>`;
  }).join('\n        ');
  const outLabel = live ? ['Board #63 and below', '2,252 traders, no seat'] : ['Requesters from #61', '552 requests, no seat now'];
  const cut = live ? '701.4' : '708.3';
  return `<div class="sm-track">
        ${segs}
        <div class="sm-cut" aria-label="Last seat, #60"><span class="sm-cut-tag"><b>Last seat, #60</b><span class="num">${cut}</span></span></div>
        <div class="sm-zone sm-out" style="flex:9 1 0">
          <div class="sm-bar zout">${live ? '<span class="sm-bub out" style="width:38%" aria-hidden="true"></span>' : ''}</div>
          <div class="sm-meta"><span class="sm-seats">${outLabel[0]}</span><span class="sm-l">${outLabel[1]}</span></div>
        </div>
      </div>`;
}

const LB_CSS = readFileSync(`${SCR}/lb.css`, 'utf8');

// ---------- f03 02 ----------
function ownBar(href = '#me') {
  return `<section class="ownbar" aria-label="Your position">
    <div class="trader own-id"><span class="avatar">K</span><b class="w6">kestrel</b><span class="you">YOU</span></div>
    <div class="own-fig"><span class="t-figure-sm num">#17</span><span class="dim t-small">on the board, <b class="w6 hi">seat #16</b></span></div>
    <div class="stat"><span class="k">If you reach 15 trading days</span><span class="v row gap-2"><span class="band band-25">$25K</span><span class="t-small dim w5">$5,000 USDC</span></span></div>
    <div class="stat"><span class="k">To $50K, seat #6</span><span class="v">+56.8 pts</span></div>
    <div class="stat"><span class="k">Above $5K band</span><span class="v">16.2 pts</span></div>
    <div class="stat"><span class="k">Above the cut</span><span class="v">80.2 pts</span></div>
    <div class="stat own-block"><span class="k">To request</span><span class="v warn row gap-2">{{icon:circle-dashed:ico-sm}}4 more trading days</span></div>
    <a class="btn btn-glass btn-sm" href="${href}">{{icon:locate-fixed:ico-sm}}Jump to my row</a>
  </section>`;
}
function tools(current, { guest = false, jumpBase = '' } = {}) {
  const items = [['All', '02-leaderboard.html'], ['In seats', '#'], ['On the bubble', guest ? '#' : '07-leaderboard-cut.html']];
  if (!guest) items.push(['Around me', '#']);
  items.push(["Can't request", '#']);
  const counts = { 'In seats': '60', 'On the bubble': '10', "Can't request": '186' };
  const seg = items.map(([l, h]) => `<a href="${h}"${l === current ? ' aria-current="true"' : ''}>${l}${counts[l] ? ` <span class="cnt">${counts[l]}</span>` : ''}</a>`).join('');
  const jumps = ZONES.map(z => `<a class="jump" href="${jumpBase}#z${z.k}">${z.name}</a>`).join('') + `<a class="jump" href="${jumpBase}#cut">Cut</a>`;
  return `<div class="lb-tools">
    <span class="seg lb-seg">${seg}</span>
    <label class="input input-sm lb-search">{{icon:search:ico-sm muted}}<input type="search" placeholder="Alias or wallet" aria-label="Search alias or wallet"></label>
    <span class="grow"></span>
    <nav class="jumps" aria-label="Jump to a zone"><span class="t-caption muted">Jump to</span>${jumps}</nav>
  </div>`;
}
function seatMapPanel({ guest = false, compact = false } = {}) {
  return `<section class="panel sm${compact ? ' sm-compact' : ''}" aria-labelledby="sm-h">
      <div class="sm-head">
        <div class="stack gap-2">
          <h2 id="sm-h" class="section-title">60 seats, by seat number</h2>
          <p class="t-small muted">Seat number counts only traders who meet or can still meet the floors. At the close, only requesters.</p>
        </div>
        <div class="sm-lead"><span class="k">Last seat, #60</span><span class="t-figure-sm num">701.4</span><span class="t-caption muted">corsair_7, #62 on the board</span></div>
      </div>
      ${seatMap({ mode: 'live', guest })}
      <p class="sm-foot t-small dim">{{icon:circle-slash:ico-sm muted}}<span><b class="w6 hi">186 traders can't request</b> this season: they broke the 10% loss rule on their own capital. They keep a board rank but take no seat number, so #4 nightjar and #58 thrum are skipped and board #62 holds seat #60.</span></p>
    </section>`;
}
function table(rows, label = 'Leaderboard') {
  return `<section class="lbt-wrap" aria-label="${label}">
    <table class="table lbt">
      ${thead()}
      <tbody>
${rows}
      </tbody>
    </table>`;
}
function legend(guest = false) {
  return `<p class="lb-legend t-caption muted">
      <span class="row gap-2"><span class="band band-25">$25K</span>Floors met</span>
      <span class="row gap-2"><span class="band band-25 if">$25K</span>If the floors are met by the close</span>
      <span class="row gap-2"><span class="cant-tag">{{icon:circle-slash:ico-sm}}Can't request</span>Skipped by seat numbers, hover for the reason</span>
      <span class="row gap-2"><span class="tocut in">+1.8</span><span class="tocut out">-1.8</span>Points to the cut</span>
      <a class="link" href="${guest ? '03-rules.html#score' : '04-score.html'}">How the score works</a>
    </p>`;
}

function f03Board({ hoverB, cantTipB, selB } = {}) {
  return `  <div class="lb-head">
    <div class="stack gap-2">
      <h1 class="t-heading">Season 1 leaderboard</h1>
      <p class="t-small muted">2,314 traders on the board, Oct 20 to Nov 18, 2026. Nov 6, 10:00 UTC.</p>
    </div>
    <p class="t-small muted lb-upd">{{icon:refresh-cw:ico-sm}}Updated every minute. Frozen at the close, Nov 18, 00:00 UTC.</p>
  </div>

  ${seatMapPanel()}

  ${ownBar()}

  ${tools('All')}

  ${table(allRows({ link: '03-trader-profile.html', hoverB, cantTipB, selB }))}
    <div class="lb-foot">
      <span class="t-small muted">Showing #1 to #25 and #55 to #70 of 2,314</span>
      <nav class="pager" aria-label="Pages">
        <a class="icon-btn" href="#" aria-label="Previous page" aria-disabled="true">{{icon:chevron-left:ico-sm}}</a>
        <a href="#" aria-current="page">1</a><a href="#">2</a><a href="#">3</a><span class="muted">…</span><a href="#">93</a>
        <a class="icon-btn" href="#" aria-label="Next page">{{icon:chevron-right:ico-sm}}</a>
      </nav>
    </div>
  </section>
  ${legend()}`;
}

const p02 = `<!--page {"nav":"leaderboard","header":"member"} -->
<main class="lb" style="--th-top:116px">
${f03Board({ hoverB: 2, cantTipB: 4 })}
</main>
<style>
${LB_CSS}
</style>
`;
writeFileSync(`${ROOT}/f03-competing/02-leaderboard.html`, p02);

// ---------- f03 07 ----------
const p07 = `<!--page {"nav":"leaderboard","header":"member"} -->
<main class="lb" style="--th-top:116px">
  <div class="lb-head">
    <div class="stack gap-2">
      <h1 class="t-heading">Season 1 leaderboard</h1>
      <p class="t-small muted">2,314 traders on the board, Oct 20 to Nov 18, 2026. Nov 6, 10:00 UTC.</p>
    </div>
    <p class="t-small muted lb-upd">{{icon:refresh-cw:ico-sm}}Updated every minute. Frozen at the close, Nov 18, 00:00 UTC.</p>
  </div>

  ${seatMapPanel({ compact: true })}

  ${ownBar('02-leaderboard.html#me')}

  ${tools('On the bubble', { jumpBase: '02-leaderboard.html' })}

  ${table(bubbleRows({ link: '03-trader-profile.html', cantTipB: 58 }), 'Leaderboard around the cut')}
    <div class="lb-foot">
      <span class="t-small muted">Seats #50 to #70 around the cut, board #51 to #73</span>
      <span class="row gap-5 t-small"><a class="link" href="02-leaderboard.html">Back to the full board</a><a class="link" href="02-leaderboard.html#me">Your row, #17</a></span>
    </div>
  </section>

  <section class="panel moves" aria-labelledby="mv-h">
    <div class="moves-text">
      <h2 id="mv-h" class="section-title">How the cut moves at the close</h2>
      <ol class="mv-steps mt-4">
        <li><b class="w6">Today</b><span class="muted">Seat numbers count the 2,128 traders who meet or can still meet the floors. The 186 who broke the loss rule are skipped.</span></li>
        <li><b class="w6">Nov 18, 00:00 UTC, scores freeze</b><span class="muted">Anyone missing a floor at the close drops out of the numbering: under 15 trading days, net PnL not positive, or under $100.</span></li>
        <li><b class="w6">Nov 18 to Nov 19, only requesters count</b><span class="muted">Every trader above the line who does not request moves everyone below up one seat. When you request does not matter, only the final score.</span></li>
        <li><b class="w6">Nov 19, 00:00 UTC</b><span class="muted">Seats go down the requester list until all 60 are out. Accounts are live at once.</span></li>
      </ol>
    </div>
    <div class="mv-ex" aria-label="Example">
      <p class="t-small dim">Example: two seat holders above the line do not request.</p>
      <div class="mv-cols">
        <div class="mv-col">
          <span class="t-caption muted">Today</span>
          <ul class="mv-list">
            <li><span>#58</span>brindle</li>
            <li><span>#59</span>latch</li>
            <li><span>#60</span>corsair_7</li>
            <li class="mv-cut"><span></span>Last seat</li>
            <li class="out"><span>#61</span><span class="mono">0x3e77…a915</span></li>
            <li class="out"><span>#62</span>fenwick</li>
          </ul>
        </div>
        <span class="mv-arrow">{{icon:arrow-right:ico muted}}</span>
        <div class="mv-col">
          <span class="t-caption muted">At the close</span>
          <ul class="mv-list">
            <li class="gone"><span></span>brindle, no request</li>
            <li class="gone"><span></span>latch, no request</li>
            <li><span>#58</span>corsair_7</li>
            <li class="mv-up"><span>#59</span><span class="mono">0x3e77…a915</span></li>
            <li class="mv-up"><span>#60</span>fenwick</li>
            <li class="mv-cut"><span></span>Last seat</li>
          </ul>
        </div>
      </div>
      <p class="t-caption muted">fenwick only gets #60 if its net PnL is positive at the close. Today it is -$84.10.</p>
    </div>
  </section>
</main>
<style>
${LB_CSS}
</style>
`;
writeFileSync(`${ROOT}/f03-competing/07-leaderboard-cut.html`, p07);

// ---------- f03 03 profile ----------
const drawer = readFileSync(`${SCR}/drawer2.html`, 'utf8');
const p03 = `<!--page {"nav":"leaderboard","header":"member"} -->
<div class="under" aria-hidden="true">
<div class="lb" style="--th-top:116px">
${f03Board({ selB: 16 })}
</div>
</div>
<main>
<div class="drawer-scrim"></div>
${drawer}
</main>
<style>
${LB_CSS}
${readFileSync(`${SCR}/drawer.css`, 'utf8')}
</style>
`;
writeFileSync(`${ROOT}/f03-competing/03-trader-profile.html`, p03);

// ---------- f01 02 public ----------
const p01 = `<!--page {"nav":"leaderboard","header":"guest","links":{"signin":"04-sign-in.html"}} -->
<main class="lb guest" style="--th-top:56px">
  <div class="lb-head">
    <div class="stack gap-2">
      <h1 class="t-heading">Season 1 leaderboard</h1>
      <p class="t-small muted">2,314 traders on the board, Oct 20 to Nov 18, 2026. Nov 6, 10:00 UTC. Seats need the <a class="link" href="03-rules.html#floors">floors</a> and a request at the close.</p>
    </div>
    <p class="t-small muted lb-upd">{{icon:refresh-cw:ico-sm}}Updated every minute. Frozen at the close, Nov 18, 00:00 UTC.</p>
  </div>

  ${seatMapPanel({ guest: true })}

  <section class="ownbar own-guest" aria-label="Sign in">
    <span class="own-guest-ico">{{icon:user:ico}}</span>
    <div class="stack grow"><b class="w6">See your board rank, seat and distance to the cut</b><span class="t-small muted">Same sign in as onchain.cc. Your perps trades there since Oct 20 already count.</span></div>
    <a class="btn btn-primary btn-sm" href="04-sign-in.html">{{icon:log-in:ico-sm}}Sign in</a>
  </section>

  ${tools('All', { guest: true })}

  ${table(allRows({ guest: true, cantTipB: 4 }))}
    <div class="lb-foot">
      <span class="t-small muted">Showing #1 to #25 and #55 to #70 of 2,314</span>
      <nav class="pager" aria-label="Pages">
        <a class="icon-btn" href="02-leaderboard.html" aria-label="Previous page" aria-disabled="true">{{icon:chevron-left:ico-sm}}</a>
        <a href="02-leaderboard.html" aria-current="page">1</a><a href="02-leaderboard.html">2</a><a href="02-leaderboard.html">3</a><span class="muted">…</span><a href="02-leaderboard.html">93</a>
        <a class="icon-btn" href="02-leaderboard.html" aria-label="Next page">{{icon:chevron-right:ico-sm}}</a>
      </nav>
    </div>
  </section>
  ${legend(true)}
</main>
<style>
${LB_CSS}
</style>
`;
writeFileSync(`${ROOT}/f01-onboarding/02-leaderboard.html`, p01);

// ---------- f04 09 request board ----------
// final board at the close (frozen), request state Nov 18 05:48 UTC
const F = (b, alias, wallet, score, req, seat, x = {}) => ({ b, alias, wallet, score, req, seat, ...x });
const FB = [
  F(1, 'ormond', '0x1f3a…9c20', 951.2, 'y', 1), F(2, 'tidewater', '0x77b0…d415', 925.0, 'y', 2),
  F(3, 'quillon', '0xa2c9…40e8', 910.4, 'y', 3),
  F(4, 'nightjar', '0x5d6e…0b31', 893.1, 'cant', null, { why: 'Broke the 10% loss rule on Nov 2. No seat request this season.' }),
  F(5, 'brasswork', '0x0c44…e7f9', 880.6, 'y', 4), F(6, null, '0xe03d…19f2', 866.3, 'y', 5), F(7, 'ferro', '0x6e92…11ad', 851.9, 'y', 6),
  F(8, 'lumen.trade', '0x3a07…c8e2', 843.7, 'y', 7), F(9, 'okapi', '0x9f15…2b6c', 838.0, 'n', 8, { note: 'You to #15' }),
  F(10, null, '0x5be1…77c4', 830.2, 'y', 8), F(11, 'halyard', '0xd830…6f14', 824.5, 'y', 9), F(12, 'corvid', '0x2b7c…e590', 818.9, 'y', 10),
  F(13, null, '0x2fa8…d051', 814.6, 'n', 11, { note: 'You to #15' }), F(14, 'meridian_k', '0x8e40…3a9d', 810.7, 'y', 11), F(15, 'marlowe', '0xf61d…07b2', 807.2, 'y', 12),
  F(16, 'vandal', '0x4c1e…7d02', 804.0, 'y', 13), F(17, 'kestrel', '0x7a3F…c91E', 801.3, 'y', 14, { me: true }),
  F(18, null, '0x91c2…4ab0', 797.5, 'y', 15), F(19, 'sable_fx', '0x5a83…e04f', 794.8, 'y', 16), F(20, 'tamarind', '0x13c5…b8a1', 790.1, 'y', 17),
  F(21, null, '0xc47e…0b9a', 786.4, 'y', 18), F(22, 'pelorus', '0xe5f2…1c07', 782.0, 'y', 19), F(23, 'gannet', '0x40aa…9d3e', 778.3, 'y', 20),
  F(24, null, '0x08dd…e6a1', 776.9, 'y', 21), F(25, 'ostinato', '0xc9d2…5f61', 774.0, 'n', 22),
  F(26, 'gorse', '0x2e18…a6c4', 772.6, 'y', 22),
  F(84, 'ashgrove', '0x63b2…f018', 716.0, 'n', 55), F(85, 'kittiwake', '0xa4d7…21c9', 715.1, 'y', 55),
  F(86, null, '0x8c4b…e217', 714.2, 'n', 56), F(87, 'mossrun', '0x7f06…b3d4', 713.9, 'y', 56),
  F(88, null, '0x1d9e…3f60', 713.0, 'n', 57), F(89, 'quarrel', '0xe8c1…0a77', 711.6, 'y', 57),
  F(90, 'linnet_q', '0x2d5f…c840', 710.2, 'cant', null, { why: '13 trading days at the close, 15 needed.' }),
  F(91, 'ember.x', '0x9a30…4e5b', 709.8, 'y', 58), F(92, null, '0x46e9…d21f', 708.9, 'y', 59),
  F(93, 'teasel', '0xc1f8…7b62', 708.3, 'y', 60),
  F(94, 'brackwater', '0x5e27…a90c', 707.8, 'y', 61), F(95, null, '0xb07d…16e3', 707.0, 'n', 62),
  F(96, 'petrel_q', '0x3f4a…e8d5', 706.5, 'n', 62), F(97, 'skerry', '0x80c3…5d1a', 705.9, 'y', 62),
];
const fby = Object.fromEntries(FB.map(r => [r.b, r]));
function fRow(r, o = {}) {
  const cls = [];
  if (r.me) cls.push('me');
  if (o.below) cls.push('below');
  if (r.req === 'cant') cls.push('cant');
  if (r.req === 'n') cls.push('notyet');
  const req = r.req === 'y' ? '<span class="lr ok">{{icon:circle-check:ico-sm}}Requested</span>'
    : r.req === 'n' ? '<span class="rq-no">{{icon:clock:ico-sm}}Not yet</span>'
    : `<span class="cant-tag" title="${r.why}">{{icon:circle-slash:ico-sm}}Can't request</span>${o.tip ? `<span class="tip ctip" role="tooltip">${r.why}</span>` : ''}`;
  let seat, band;
  if (r.req === 'cant') { seat = '<span class="muted">None</span>'; band = '<span class="muted t-caption">None</span>'; }
  else if (r.req === 'n') {
    seat = `<span class="muted">Would be #${r.seat}</span>${r.note ? `<span class="tocut out" title="If it requests, you move down one seat">${r.note}</span>` : ''}`;
    band = r.seat <= 60 ? `<span class="band band-${zoneOf(r.seat).k} if" title="If it requests">${zoneOf(r.seat).name}</span>` : '<span class="muted t-caption">None</span>';
  } else if (r.seat > 60) { seat = `<span class="muted">#${r.seat}, no seat now</span>`; band = '<span class="muted t-caption">None</span>'; }
  else { seat = `<b class="seatn">#${r.seat}</b>`; band = `<span class="band band-${zoneOf(r.seat).k}">${zoneOf(r.seat).name}</span>`; }
  return `<tr${cls.length ? ` class="${cls.join(' ')}"` : ''}${r.me ? ' id="me"' : ''}><td class="c-b">#${r.b}</td>`
    + traderCell(r, { link: null, guest: false })
    + `<td class="r c-sc">${sc(r.score)}</td><td class="c-rq${o.tip ? ' tipcell' : ''}">${req}</td><td class="c-s2">${seat}</td><td class="c-band">${band}</td></tr>`;
}
const FC = 6;
function fZone(z, low) {
  const seats = z.n === 1 ? `Seat #${z.from}` : `Seats #${z.from} to #${z.to}`;
  return `<tr class="zone" id="z${z.k}"><td colspan="${FC}"><div class="zone-in"><span class="band band-${z.k}">${z.name}</span><b>${seats}</b><span class="dim">${z.n} seat${z.n > 1 ? 's' : ''}, ${z.usdc} USDC${z.n > 1 ? ' each' : ''}</span><span class="grow"></span><span class="muted num">${low}</span></div></td></tr>`;
}
const frows = [];
frows.push(fZone(ZONES[0], 'Held by 951.2')); frows.push(fRow(fby[1]));
frows.push(fZone(ZONES[1], 'Held by 925.0')); frows.push(fRow(fby[2]));
frows.push(fZone(ZONES[2], 'Requesters 910.4 to 851.9')); for (const b of [3, 4, 5, 6, 7]) frows.push(fRow(fby[b], { tip: b === 4 && false }));
frows.push(fZone(ZONES[3], 'Requesters 843.7 to 776.9')); for (let b = 8; b <= 24; b++) frows.push(fRow(fby[b]));
frows.push(fZone(ZONES[4], 'Requesters 772.6 to 708.3')); for (const b of [25, 26]) frows.push(fRow(fby[b]));
frows.push(`<tr class="gap"><td colspan="${FC}"><a href="#" class="gap-btn">{{icon:chevrons-up-down:ico-sm}}Board #27 to #83, seats #23 to #54</a></td></tr>`);
for (const b of [84, 85, 86, 87, 88, 89, 90, 91, 92, 93]) frows.push(fRow(fby[b], { tip: b === 90 }));
frows.push(`<tr class="cutrow" id="cut"><td colspan="${FC}"><div class="cutbar"><span class="cut-rule"></span><span class="cut-pill">{{icon:scissors-line-dashed:ico-sm}}<b>Last seat right now, #60, final score 708.3</b><span class="muted">teasel, #93 on the board. Moves up as traders above request</span></span><span class="cut-rule"></span></div></td></tr>`);
for (const b of [94, 95, 96, 97]) frows.push(fRow(fby[b], { below: true }));

const p09 = `<!--page {"nav":"leaderboard","header":"member","season":"<span class=\\"k\\">Requests close in</span> 18h 12m","seasonPct":24,"acct":{"tag":"own","label":"Own","value":"$1,369.70"}} -->
<main class="lb rb" style="--th-top:116px">
  <div class="lb-head">
    <div class="stack gap-2">
      <h1 class="t-heading">Season 1 requests, live</h1>
      <p class="t-small muted">Nov 18, 05:48 UTC. Final scores, frozen at the close. Only the order among requesters decides seats, not when they requested.</p>
    </div>
    <p class="t-small muted lb-upd">{{icon:refresh-cw:ico-sm}}Updated every minute until Nov 19, 00:00 UTC.</p>
  </div>

  <section class="panel sm" aria-labelledby="sm-h">
    <div class="sm-head">
      <div class="stack gap-2">
        <h2 id="sm-h" class="section-title">60 seats among requesters</h2>
        <p class="t-small muted"><b class="w6 hi">612 requests so far</b> of 1,487 traders who meet the floors. Seats if requests closed now.</p>
      </div>
      <div class="sm-lead"><span class="k">Last seat right now, #60</span><span class="t-figure-sm num">708.3</span><span class="t-caption muted">teasel, #93 on the board</span></div>
    </div>
    ${seatMap({ mode: 'requests', youSeat: 14, youLabel: 'You, seat #14' })}
    <p class="sm-foot t-small dim">{{icon:clock:ico-sm muted}}<span><b class="w6 hi">24 traders above the cut can still request.</b> Each one who does pushes the last seat holder out. If all 24 request, the last seat rises to 731.2. 875 eligible traders have not requested yet.</span></p>
  </section>

  <section class="ownbar" aria-label="Your request">
    <div class="trader own-id"><span class="avatar">K</span><b class="w6">kestrel</b><span class="you">YOU</span></div>
    <div class="own-fig"><span class="t-figure-sm num">#14</span><span class="dim t-small">among requesters, <b class="w6 hi">#17 on the board</b></span></div>
    <div class="stat"><span class="k">Seat now</span><span class="v row gap-2"><span class="band band-25">$25K</span><span class="t-small dim w5">$5,000 USDC</span></span></div>
    <div class="stat"><span class="k">Above the last $25K seat</span><span class="v">24.4 pts</span></div>
    <div class="stat"><span class="k">Above the cut</span><span class="v">93.0 pts</span></div>
    <div class="stat own-block"><span class="k">Above you, not yet requested</span><span class="v">2, worst case seat #16</span></div>
    <a class="btn btn-glass btn-sm" href="03-home-requested.html">{{icon:file-check:ico-sm}}Your request</a>
  </section>

  <div class="lb-tools">
    <span class="seg lb-seg"><a href="#" aria-current="true">All</a><a href="#">Requested <span class="cnt">612</span></a><a href="#">Not yet <span class="cnt">875</span></a><a href="#me">Around me</a></span>
    <label class="input input-sm lb-search">{{icon:search:ico-sm muted}}<input type="search" placeholder="Alias or wallet" aria-label="Search alias or wallet"></label>
    <span class="grow"></span>
    <nav class="jumps" aria-label="Jump to a zone"><span class="t-caption muted">Jump to</span>${ZONES.map(z => `<a class="jump" href="#z${z.k}">${z.name}</a>`).join('')}<a class="jump" href="#cut">Cut</a></nav>
  </div>

  <section class="lbt-wrap" aria-label="Request board">
    <table class="table lbt rbt">
      <colgroup><col class="w-b"><col class="w-t2"><col class="w-sc"><col class="w-rq"><col class="w-s2"><col class="w-band"></colgroup>
      <thead><tr><th>Final board rank</th><th>Trader</th><th class="r">Final score</th><th>Requested</th><th>Seat if requests closed now</th><th>Band</th></tr></thead>
      <tbody>
${frows.join('\n')}
      </tbody>
    </table>
    <div class="lb-foot">
      <span class="t-small muted">Showing #1 to #26 and #84 to #97 of 2,314</span>
      <span class="row gap-5 t-small"><a class="link" href="03-home-requested.html">Your request</a><a class="link" href="01-home-window-open.html">Request window home</a></span>
    </div>
  </section>
  <p class="lb-legend t-caption muted">
    <span class="row gap-2"><span class="band band-25">$25K</span>Seat if requests closed now</span>
    <span class="row gap-2"><span class="band band-25 if">$25K</span>Would take it if they request</span>
    <span class="row gap-2"><span class="cant-tag">{{icon:circle-slash:ico-sm}}Can't request</span>Missed a floor at the close, hover for which</span>
  </p>
</main>
<style>
${LB_CSS}
${readFileSync(`${SCR}/rb.css`, 'utf8')}
</style>
`;
writeFileSync(`${ROOT}/f04-seat-claim/09-request-board.html`, p09);
console.log('ok');
