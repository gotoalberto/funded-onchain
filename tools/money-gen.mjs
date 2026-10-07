// Generates src/pages/f09-money/*.html. Scenario: Dec 2, 10:00 UTC, Season 2 running.
import { writeFileSync, mkdirSync } from 'node:fs';
const out = '/home/claude/hetzner-wt/funded-mockups/funded/src/pages/f09-money';
mkdirSync(out, { recursive: true });

const ADDR = '0x4E2b9c1A0f53De87b6C4a2E91f0B3d58c6A07D19';
const ADDR_S = '0x4E2b…7D19';
const DEST = '0x9C14d7B2a05Fe1386cD4b07e9A31F5c2D8b0e2A7';
const DEST_S = '0x9C14…e2A7';

const LINKS = {
  acct: '01-balance.html', deposit: '02-deposit.html',
  home: '{{root}}f05-funded-trading/01-home-funded.html',
  trade: '{{root}}f03-competing/05-trade.html',
  leaderboard: '{{root}}f03-competing/02-leaderboard.html',
  stats: '{{root}}f03-competing/06-stats.html',
  payouts: '{{root}}f07-claims/01-payouts.html',
};
const CHIP = h => `<span class="k">Cycle 2 ends in</span> 15d ${h}h`;
const meta = (value, extra = {}) => `<!--page ${JSON.stringify({
  header: 'funded',
  season: '<span class="k">Cycle 2 ends in</span> 15d 14h',
  seasonPct: 46,
  acct: { tag: 'own', label: 'Own', value },
  links: LINKS,
  ...extra,
})} -->`;

// fake but plausible QR: 25 modules, three finder patterns, seeded fill
function qr(seed = 7) {
  let s = seed >>> 0; const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const n = 25, cells = [];
  const inFinder = (x, y) => [[0, 0], [n - 7, 0], [0, n - 7]].some(([fx, fy]) => x >= fx - 1 && x <= fx + 7 && y >= fy - 1 && y <= fy + 7);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (!inFinder(x, y) && r() > 0.52) cells.push(`M${x} ${y}h1v1h-1z`);
  const finder = (fx, fy) => `<path d="M${fx} ${fy}h7v7h-7z M${fx + 1} ${fy + 1}v5h5v-5z" fill-rule="evenodd"/><path d="M${fx + 2} ${fy + 2}h3v3h-3z"/>`;
  return `<svg viewBox="-2 -2 ${n + 4} ${n + 4}" width="148" height="148" role="img" aria-label="QR code of your EVM deposit address for USDC" shape-rendering="crispEdges"><rect x="-2" y="-2" width="${n + 4}" height="${n + 4}" fill="#fff"/><g fill="#0a0a0d">${finder(0, 0)}${finder(n - 7, 0)}${finder(0, n - 7)}<path d="${cells.join(' ')}"/></g></svg>`;
}

// chain glyph, neutral on purpose (colour is reserved)
const G = { Arbitrum: 'AR', Base: 'BA', Ethereum: 'ET', Optimism: 'OP', Polygon: 'PO', 'BNB Chain': 'BN', Avalanche: 'AV', Solana: 'SO' };
const glyph = c => `<span class="cg" aria-hidden="true">${G[c]}</span>`;

// ---------- balance page (also the blurred page under every modal) ----------
const ROWS_BASE = [
  ['Dec 2, 08:15', 'claim', `Claim from <span class="acct-tag funded src">Funded</span>`, `All $2,100.00 profit above $25,000 on your $25K funded account. 80% here, $420.00 to Bitso.`, '+1,680.00', '4,208.45', 'up'],
  ['Dec 1, day', 'pnl', 'Trading PnL', '6 closed trades, after fees and funding', '+64.20', '2,528.45', 'up'],
  ['Nov 30, day', 'pnl', 'Trading PnL', '4 closed trades, after fees and funding', '-37.85', '2,464.25', 'down'],
  ['Nov 27, 14:02', 'out', 'Withdrawal', `To <span class="mono">0x7a3F…c91E</span> on Arbitrum <a class="tx" href="#tx">tx</a>`, '-300.00', '2,502.10', ''],
  ['Nov 26, 14:30', 'claim', `Claim from <span class="acct-tag funded src">Funded</span>`, `All $1,250.00 profit above $25,000 on your $25K funded account. 80% here, $250.00 to Bitso.`, '+1,000.00', '2,802.10', 'up'],
  ['Nov 25, day', 'pnl', 'Trading PnL', '9 closed trades, after fees and funding', '+118.30', '1,802.10', 'up'],
  ['Nov 21, 09:47', 'in', 'Deposit', `500.00 USDC from Base <a class="tx" href="#tx">tx</a>`, '+500.00', '1,683.80', ''],
];
const ROW_DEP = ['Dec 2, 10:05', 'in', 'Deposit', `500.00 USDC from Arbitrum, 0.50 forwarding fee <a class="tx" href="#tx">tx</a>`, '+499.50', '4,707.95', ''];
const ROW_ARR = ['Dec 2, 10:04', 'in', 'Deposit', `500.00 USDC from Arbitrum, arriving <a class="tx" href="#tx">tx</a>`, '+500.00', 'Arriving', 'dim'];
const ROW_WD = ['Dec 2, 10:21', 'out', 'Withdrawal', `To <span class="mono">${DEST_S}</span> on Base, on its way <a class="tx" href="#tx">tx</a>`, '-1,000.00', '3,707.95', ''];
const TYPE_ICON = { claim: 'hand-coins', pnl: 'candlestick-chart', out: 'arrow-up-right', in: 'arrow-down-left' };

const STATES = {
  base: { value: '$4,240.20', avail: '$3,600.20', availPct: 84.9, rows: ROWS_BASE, dep: '+1,100.00', wd: '-300.00' },
  arriving: { value: '$4,240.20', avail: '$3,600.20', availPct: 84.9, rows: [ROW_ARR, ...ROWS_BASE], dep: '+1,100.00', wd: '-300.00' },
  deposited: { value: '$4,739.70', avail: '$4,099.70', availPct: 86.5, rows: [ROW_DEP, ...ROWS_BASE], dep: '+1,599.50', wd: '-300.00' },
  withdrawn: { value: '$3,739.70', avail: '$3,099.70', availPct: 82.9, rows: [ROW_WD, ROW_DEP, ...ROWS_BASE], dep: '+1,599.50', wd: '-1,300.00' },
};

function rowsHtml(rows) {
  return rows.map(([t, k, label, detail, amt, bal, cls]) => `
            <tr${k === 'claim' ? ' class="is-claim"' : ''}><td class="muted">${t}</td><td><span class="mv mv-${k}">{{icon:${TYPE_ICON[k]}:ico-sm}}${label}</span></td><td class="detail">${detail}</td><td class="r w6 nw ${cls}">${amt}</td><td class="r dim">${bal}</td></tr>`).join('');
}

function balance(stateKey, { problemBanner = true, time = '10:00' } = {}) {
  const s = STATES[stateKey];
  return `
  <div class="bal-grid">
    <div class="stack gap-3">
      <section class="panel hero" aria-labelledby="bal-h">
        <div class="row-between" style="align-items:flex-start">
          <div>
            <h1 id="bal-h" class="t-sub row gap-3"><span class="acct-tag own">Own</span>Account balance</h1>
            <p class="t-caption muted mt-2">Your money on Hyperliquid, the same account onchain.cc uses. You deposit USDC, withdraw, trade and compete in Season 2 with it. Dec 2, ${time} UTC.</p>
          </div>
          <div class="row gap-3">
            <a class="btn btn-glass" href="05-withdraw.html">{{icon:arrow-up-from-line:ico-sm}}Withdraw</a>
            <a class="btn btn-primary" href="02-deposit.html">{{icon:arrow-down-to-line:ico-sm}}Deposit</a>
          </div>
        </div>
        <p class="t-display num mt-5">${s.value}</p>
        <div class="split mt-5" role="img" aria-label="Available ${s.avail}, margin in open positions $640.00">
          <i class="split-free" style="width:${s.availPct}%"></i><i class="split-used"></i>
        </div>
        <div class="hero-stats mt-4">
          <div class="stat"><span class="k row gap-2"><span class="key key-free"></span>Available to trade or withdraw</span><span class="v-lg">${s.avail}</span></div>
          <div class="stat"><span class="k row gap-2"><span class="key key-used"></span>Margin in 2 open positions</span><span class="v-lg">$640.00</span></div>
          <div class="stat"><span class="k">Unrealized PnL, included above</span><span class="v-lg up">+$31.75</span></div>
        </div>
      </section>
${problemBanner ? `
      <div class="banner warn">{{icon:triangle-alert:ico}}<div class="grow"><p class="banner-title">250.00 DAI on Base wasn't credited</p><p class="banner-body">Only USDC is credited. Your balance didn't change.</p></div><a class="btn btn-glass btn-sm" href="08-deposit-problem.html">See what happened</a></div>` : ''}
      <section class="panel panel-flush" aria-labelledby="mv-h">
        <div class="panel-head">
          <h2 id="mv-h" class="panel-title">Movements</h2>
          <span class="seg" role="tablist" aria-label="Filter movements"><span aria-current="true">All</span><span>Deposits</span><span>Withdrawals</span><span>Claims</span><span>Trading PnL</span></span>
        </div>
        <table class="table mv-table">
          <thead><tr><th>Time, UTC</th><th>Movement</th><th>Detail</th><th class="r">Amount, USDC</th><th class="r">Balance after</th></tr></thead>
          <tbody>${rowsHtml(s.rows)}
          </tbody>
        </table>
        <div class="mv-foot t-caption muted">Balance after counts closed results only. Trading PnL is one line per UTC day.</div>
      </section>
    </div>

    <aside class="stack gap-3">
      <section class="panel" aria-labelledby="src-h">
        <h2 id="src-h" class="section-title">Where it came from</h2>
        <p class="t-caption muted mt-2">Since your first deposit, Oct 14</p>
        <div class="ledger mt-4">
          <div class="kv"><span class="k">Deposits</span><span class="v">${s.dep}</span></div>
          <div class="kv"><span class="k">Withdrawals</span><span class="v">${s.wd}</span></div>
          <div class="kv"><span class="k">Claims, your 80%</span><span class="v up">+2,680.00</span></div>
          <div class="kv"><span class="k">Trading PnL, closed</span><span class="v up">+728.45</span></div>
          <div class="kv"><span class="k">Unrealized PnL, open positions</span><span class="v up">+31.75</span></div>
          <div class="kv total"><span class="k">Balance</span><span class="v">${s.value}</span></div>
        </div>
      </section>
    </aside>
  </div>`;
}

const BAL_CSS = `
.bal { max-width: 1200px; margin: 0 auto; padding: 16px 16px 96px; }
.bal-grid { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 8px; align-items: start; }
.hero { padding: 20px; }
.split { display: flex; gap: 3px; height: 8px; }
.split i { display: block; height: 100%; border-radius: 3px; }
.split-free { background: #cfcfd4; }
.split-used { flex: 1; background: rgb(255 255 255 / 0.16); }
.key { width: 8px; height: 8px; border-radius: 2px; display: inline-block; }
.key-free { background: #cfcfd4; } .key-used { background: rgb(255 255 255 / 0.22); }
.hero-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.mv-table th:first-child, .mv-table td:first-child { padding-left: 16px; }
.mv-table th:last-child, .mv-table td:last-child { padding-right: 16px; }
.mv-table .detail { color: var(--text-3); white-space: normal; min-width: 220px; }
.mv { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; }
.mv .ico { color: var(--muted); }
.tx { color: var(--primary); font-weight: 500; margin-left: 4px; }
.step-row .tx { white-space: nowrap; }
.tx:hover { text-decoration: underline; text-underline-offset: 3px; }
.mv-foot { padding: 10px 16px; border-top: 1px solid var(--glass-sep); }
.inline { display: inline-block; }
.nw { white-space: nowrap; }
.acct-tag.src { height: 18px; padding: 0 6px; font-size: 10px; }
.hero .t-display { font-size: 44px; line-height: 48px; }
`;

const MODAL_CSS = `
.cg { line-height: 1; width: 22px; height: 22px; border-radius: 50%; display: grid; place-items: center; flex: none; font-size: 9px; font-weight: 700; letter-spacing: 0.02em; background: #2a2a2a; color: var(--text-2); box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.08); }
.nets { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; }
.net { display: flex; align-items: center; gap: 8px; height: 40px; padding: 0 10px; border-radius: var(--r-md); background: var(--glass-subtle); box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.08); font-size: 13px; font-weight: 500; color: var(--text-2); white-space: nowrap; }
.net:hover { background: var(--glass); }
.net[aria-checked="true"] { background: var(--primary-15); box-shadow: inset 0 0 0 1px rgb(144 149 253 / 0.6); color: #fff; }
.sub { margin-top: -8px; }
.big { font-size: 30px; line-height: 34px; font-weight: 600; letter-spacing: -0.02em; }
.ok-ico { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; background: var(--buy-20); color: var(--buy-light); }
.step-row .t { font-weight: 600; }
.step-row .s { font-size: 12px; line-height: 16px; color: var(--muted); margin-top: 2px; }
.step-row .when { font-size: 12px; color: var(--text-3); font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }
.step-row.now .step-ico .ico { animation: spin 1.2s linear infinite; }
.ex { display: inline-flex; align-self: flex-start; align-items: center; gap: 4px; padding: 0 6px; border-radius: 4px; border: 1px dashed rgb(255 255 255 / 0.24); font-size: 11px; line-height: 18px; color: var(--muted); white-space: nowrap; }
@keyframes spin { to { transform: rotate(360deg); } }
.stepper .step-row + .step-row { border-top: 1px solid rgb(255 255 255 / 0.05); }
`;

function page(file, value, extraMeta, body, css, modalOnly = false) {
  const html = `${meta(value, extraMeta)}
<main>
${body}
</main>
<style>${BAL_CSS}${modalOnly ? MODAL_CSS : ''}${css || ''}
</style>
`;
  writeFileSync(`${out}/${file}`, html);
}

const EX = (what = 'Example values') => `<span class="ex">${what}</span>`;
const under = (state, opts) => `  <div class="under bal" aria-hidden="true">${balance(state, opts)}
  </div>`;

// ---------- 01 balance ----------
writeFileSync(`${out}/01-balance.html`, `${meta('$4,240.20', { unread: true })}
<main class="bal">${balance('base')}
</main>
<style>${BAL_CSS}
</style>
`);

// ---------- 02 deposit ----------
page('02-deposit.html', '$4,240.20', {}, `${under('base')}
  <div class="scrim">
    <div class="modal modal-dep" role="dialog" aria-modal="true" aria-labelledby="dep-h">
      <div class="modal-head">
        <h1 id="dep-h" class="modal-title row gap-3"><span class="acct-tag own">Own</span>Deposit USDC</h1>
        <a class="icon-btn" href="01-balance.html" aria-label="Close">{{icon:x:ico}}</a>
      </div>
      <div class="modal-body">
        <p class="t-small dim sub">Send USDC to your personal deposit address. It moves it to your own account on Hyperliquid by itself.</p>
        <div class="field">
          <span class="field-label" id="net-l">Sending from</span>
          <span class="seg seg-lg" role="tablist" aria-labelledby="net-l"><a href="02-deposit.html" role="tab" aria-current="true" aria-selected="true">Any EVM chain</a><a href="02-deposit.html" role="tab" aria-selected="false">Solana</a></span>
        </div>
        <div class="addr-box">
          ${qr(11)}
          <div class="stack gap-3 grow">
            <span class="field-label">Your EVM deposit address for USDC</span>
            <p class="mono addr">${ADDR}</p>
            <p class="t-caption muted">A smart contract that belongs to your account. The same address on every EVM chain; Solana has its own.</p>
          </div>
        </div>
        <div class="stack gap-2">
          <div class="panel-deep">
            <div class="kv"><span class="k">Token</span><span class="v">USDC only</span></div>
            <div class="kv"><span class="k">Minimum per deposit</span><span class="v">5 USDC</span></div>
            <div class="kv"><span class="k">Forwarding fee</span><span class="v">0.50 USDC</span></div>
            <div class="kv"><span class="k">Typical arrival</span><span class="v">About 2 min</span></div>
          </div>
          ${EX('Example minimum, fee and timing')}
        </div>
        <p class="t-caption muted">You can close this dialog, the deposit shows in Movements.</p>
      </div>
      <div class="modal-foot">
        <a class="btn btn-primary btn-block" href="03-deposit-arriving.html">{{icon:copy:ico-sm}}Copy address</a>
      </div>
    </div>
  </div>`, `
.modal-dep { max-width: 600px; }
.seg-lg { height: 36px; align-self: flex-start; }
.seg-lg a { height: 32px; padding: 0 16px; font-size: 13px; }
.addr-box { display: flex; gap: 16px; align-items: flex-start; padding: 14px; border-radius: var(--r-lg); background: rgb(10 10 10 / 0.45); box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.05); }
.addr-box svg { border-radius: 8px; flex: none; }
.addr { font-size: 14px; line-height: 20px; color: #fff; word-break: break-all; }
`, true);

// ---------- 03 deposit arriving ----------
page('03-deposit-arriving.html', '$4,240.20', { season: CHIP(13) }, `${under('arriving', { time: '10:04' })}
  <div class="scrim">
    <div class="modal modal-wide" role="dialog" aria-modal="true" aria-labelledby="arr-h">
      <div class="modal-head">
        <h1 id="arr-h" class="modal-title">Deposit arriving</h1>
        <a class="icon-btn" href="01-balance.html" aria-label="Close">{{icon:x:ico}}</a>
      </div>
      <div class="modal-body">
        <div>
          <p class="big num">500.00 USDC</p>
          <p class="t-small dim mt-2">Seen on Arbitrum, now on its way to your own account.</p>
        </div>
        <ol class="stepper" aria-label="Deposit progress">
          <li class="step-row done"><span class="step-ico">{{icon:check:ico-sm}}</span><div><p class="t">Received at your deposit address on Arbitrum</p><p class="s">From <span class="mono">0x7a3F…c91E</span>. <a class="tx" href="#tx" style="margin:0">Arbiscan tx 0x8d2e…41b7</a></p></div><span class="when">10:04:12 UTC</span></li>
          <li class="step-row now"><span class="step-ico">{{icon:loader-circle:ico-sm}}</span><div><p class="t">Forwarding to Hyperliquid</p><p class="s">About 1 min left</p></div><span class="when">Started 10:04:20</span></li>
          <li class="step-row pending"><span class="step-ico">3</span><div><p class="t">Credited to your own account</p><p class="s">499.50 USDC after the 0.50 forwarding fee ${EX('Example fee')}</p></div><span class="when">About 10:06 UTC</span></li>
        </ol>
        <p class="t-caption muted">Nothing to do here. Closing this dialog doesn't stop the deposit, it stays in Movements as arriving until it's credited.</p>
      </div>
      <div class="modal-foot">
        <a class="btn btn-glass btn-block" href="01-balance.html">Close</a>
      </div>
    </div>
  </div>`, '', true);

// ---------- 04 deposit done ----------
page('04-deposit-done.html', '$4,739.70', { season: CHIP(13) }, `${under('deposited', { time: '10:05' })}
  <div class="scrim">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="done-h">
      <div class="modal-head">
        <span class="ok-ico">{{icon:check:ico}}</span>
        <a class="icon-btn" href="01-balance.html" aria-label="Close">{{icon:x:ico}}</a>
      </div>
      <div class="modal-body">
        <div>
          <h1 id="done-h" class="t-small dim" style="font-weight:500">499.50 USDC credited. Your own account is now</h1>
          <p class="t-figure mt-2">$4,739.70</p>
        </div>
        <div class="panel-deep">
          <div class="kv"><span class="k">Available to trade</span><span class="v">$4,099.70</span></div>
          <div class="kv"><span class="k">Sent</span><span class="v">500.00 USDC from Arbitrum</span></div>
          <div class="kv"><span class="k">Forwarding fee ${EX('Example fee')}</span><span class="v">-0.50 USDC</span></div>
          <div class="kv"><span class="k">Credited</span><span class="v">10:05:31 UTC, 1 min 19 s after it was seen</span></div>
        </div>
        <p class="t-caption muted row gap-3"><a class="link" href="#tx">Arbiscan tx</a><a class="link" href="#tx">Hyperliquid tx</a><span class="grow"></span><a class="link" href="01-balance.html">All movements</a></p>
      </div>
      <div class="modal-foot">
        <a class="btn btn-primary btn-block" href="{{root}}f03-competing/05-trade.html">{{icon:candlestick-chart:ico-sm}}Back to trading</a>
      </div>
    </div>
  </div>`, '', true);

// ---------- 05 withdraw ----------
const WNETS = ['Arbitrum', 'Base', 'Ethereum', 'Optimism', 'Polygon', 'BNB Chain', 'Avalanche'];
page('05-withdraw.html', '$4,739.70', { season: CHIP(13) }, `${under('deposited', { time: '10:20' })}
  <div class="scrim">
    <div class="modal modal-dep" role="dialog" aria-modal="true" aria-labelledby="wd-h">
      <div class="modal-head">
        <h1 id="wd-h" class="modal-title row gap-3"><span class="acct-tag own">Own</span>Withdraw USDC</h1>
        <a class="icon-btn" href="01-balance.html" aria-label="Close">{{icon:x:ico}}</a>
      </div>
      <div class="modal-body">
        <div class="field">
          <div class="row-between"><label class="field-label" for="amt">Amount</label><span class="t-caption muted">Available 4,099.70 USDC. $640.00 stays as margin.</span></div>
          <div class="input amt">
            <input id="amt" value="1,000.00" inputmode="decimal">
            <span class="unit">USDC</span>
            <a class="btn btn-glass btn-xs" href="05-withdraw.html">Max</a>
          </div>
          <p class="help">Your Season 2 score weighs your balance over time, so withdrawing lowers that factor.</p>
        </div>
        <div class="field">
          <div class="row-between"><label class="field-label" for="dst">Destination address</label><a class="link t-caption" href="05-withdraw.html">Use my wallet <span class="mono">0x7a3F…c91E</span></a></div>
          <div class="input input-ok">
            <input id="dst" class="mono" value="${DEST}" aria-describedby="dst-help" spellcheck="false">
            {{icon:circle-check:ico-sm up}}
          </div>
          <p id="dst-help" class="help">Valid EVM address. You haven't withdrawn to it before.</p>
        </div>
        <div class="field">
          <div class="row-between"><span class="field-label" id="wnet-l">EVM network it arrives on</span>${EX('Example networks')}</div>
          <div class="nets" role="radiogroup" aria-labelledby="wnet-l">
            ${WNETS.map(n => `<a class="net" href="05-withdraw.html" role="radio" aria-checked="${n === 'Base'}">${glyph(n)}${n}</a>`).join('\n            ')}
          </div>
        </div>
        <div class="ledger">
          <div class="kv"><span class="k">Leaves your own account</span><span class="v">1,000.00 USDC</span></div>
          <div class="kv"><span class="k">Hyperliquid withdrawal fee</span><span class="v">-1.00 USDC</span></div>
          <div class="kv"><span class="k">Bridge to Base</span><span class="v">-0.60 USDC</span></div>
          <div class="kv total"><span class="k">Arrives on Base, in about 5 min</span><span class="v">998.40 USDC</span></div>
        </div>
        ${EX('Example fees and timing')}
      </div>
      <div class="modal-foot">
        <a class="btn btn-primary btn-block" href="06-withdraw-confirm.html">Review withdrawal</a>
      </div>
    </div>
  </div>`, `
.modal-dep { max-width: 600px; }
.amt { height: 52px; }
.amt input { font-size: 24px; font-weight: 600; }
.input-ok { box-shadow: inset 0 0 0 1px rgb(0 165 102 / 0.55); }
.input input.mono { font-size: 13px; }
`, true);

// ---------- 06 confirm ----------
page('06-withdraw-confirm.html', '$4,739.70', { season: CHIP(13) }, `${under('deposited', { time: '10:21' })}
  <div class="scrim">
    <div class="modal modal-wide" role="dialog" aria-modal="true" aria-labelledby="cf-h">
      <div class="modal-head">
        <h1 id="cf-h" class="modal-title row gap-3"><span class="acct-tag own">Own</span>Confirm withdrawal</h1>
        <a class="icon-btn" href="01-balance.html" aria-label="Close">{{icon:x:ico}}</a>
      </div>
      <div class="modal-body">
        <div>
          <p class="big num">998.40 USDC</p>
          <p class="t-small dim mt-2">arrives on Base in about 5 min</p>
        </div>
        <div class="ledger">
          <div class="kv kv-to"><span class="k">To</span><span class="v mono to-addr">${DEST}</span></div>
          <div class="kv"><span class="k">Network</span><span class="v row gap-3" style="justify-content:flex-end">${glyph('Base')}Base</span></div>
          <div class="kv"><span class="k">Leaves your own account</span><span class="v">1,000.00 USDC</span></div>
          <div class="kv"><span class="k">Fees, Hyperliquid and bridge ${EX('Example fees')}</span><span class="v">-1.60 USDC</span></div>
          <div class="kv"><span class="k">Own account after</span><span class="v">$3,739.70</span></div>
        </div>
        <div class="banner warn">{{icon:triangle-alert:ico}}<div><p class="banner-title">Check that this address takes USDC on Base</p><p class="banner-body">If the address is on another network, for example an exchange deposit address for Arbitrum only, the USDC is lost. A withdrawal can't be reversed once it leaves.</p></div></div>
      </div>
      <div class="modal-foot">
        <a class="btn btn-ghost" href="05-withdraw.html">Back</a>
        <a class="btn btn-primary grow" href="07-withdraw-sent.html">Withdraw 1,000.00 USDC</a>
      </div>
    </div>
  </div>`, `
.to-addr { font-size: 13px; color: #fff; word-break: break-all; }
.kv-to { align-items: center; }
`, true);

// ---------- 07 sent ----------
page('07-withdraw-sent.html', '$3,739.70', { season: CHIP(13) }, `${under('withdrawn', { time: '10:23' })}
  <div class="scrim">
    <div class="modal modal-wide" role="dialog" aria-modal="true" aria-labelledby="sent-h">
      <div class="modal-head">
        <h1 id="sent-h" class="modal-title">Withdrawal on its way</h1>
        <a class="icon-btn" href="01-balance.html" aria-label="Close">{{icon:x:ico}}</a>
      </div>
      <div class="modal-body">
        <div>
          <p class="big num">998.40 USDC</p>
          <p class="t-small dim mt-2">to <span class="mono">${DEST_S}</span> on Base, expected about 10:26 UTC</p>
        </div>
        <ol class="stepper" aria-label="Withdrawal progress">
          <li class="step-row done"><span class="step-ico">{{icon:check:ico-sm}}</span><div><p class="t">Left Hyperliquid</p><p class="s">1,000.00 USDC out of your own account. <a class="tx" href="#tx" style="margin:0">Hyperliquid tx 0x3b1f…a0c2</a></p></div><span class="when">10:21:08 UTC</span></li>
          <li class="step-row now"><span class="step-ico">{{icon:loader-circle:ico-sm}}</span><div><p class="t">Bridging from Arbitrum to Base</p><p class="s">About 3 min left. <a class="tx" href="#tx" style="margin:0">Arbiscan tx 0xc07a…5e18</a></p></div><span class="when">Started 10:22:40</span></li>
          <li class="step-row pending"><span class="step-ico">3</span><div><p class="t">Arrived on Base</p><p class="s">998.40 USDC at <span class="mono">${DEST_S}</span></p></div><span class="when">About 10:26 UTC</span></li>
        </ol>
        <p class="t-caption muted">You can close this dialog. The withdrawal stays in Movements with each transaction link.</p>
      </div>
      <div class="modal-foot">
        <a class="btn btn-glass btn-block" href="01-balance.html">Close</a>
      </div>
    </div>
  </div>`, '', true);

// ---------- 08 deposit problem ----------
page('08-deposit-problem.html', '$4,240.20', {}, `${under('base')}
  <div class="scrim">
    <div class="modal modal-dep" role="dialog" aria-modal="true" aria-labelledby="pb-h">
      <div class="modal-head">
        <h1 id="pb-h" class="modal-title">250.00 DAI wasn't credited</h1>
        <a class="icon-btn" href="01-balance.html" aria-label="Close">{{icon:x:ico}}</a>
      </div>
      <div class="modal-body">
        <p class="t-small dim sub">Deposits are USDC only. This DAI reached your deposit address <span class="mono nw">${ADDR_S}</span> and was not moved to your own account, so your balance didn't change.</p>
        <section class="case" aria-labelledby="c1-h">
          <div class="row-between"><h2 id="c1-h" class="case-title row gap-3">${glyph('Base')}250.00 DAI on Base</h2><span class="pill pill-warn">Not USDC</span></div>
          <div class="kv"><span class="k">Seen</span><span class="v">Dec 2, 09:41 UTC <a class="tx" href="#tx">Basescan tx</a></span></div>
          <div class="kv"><span class="k">From</span><span class="v mono">0x7a3F…c91E</span></div>
          <div class="kv"><span class="k">Now</span><span class="v">At your deposit address, not in your balance</span></div>
        </section>
      </div>
      <div class="modal-foot">
        <a class="btn btn-primary btn-block" href="02-deposit.html">{{icon:arrow-down-to-line:ico-sm}}Deposit USDC</a>
      </div>
    </div>
  </div>`, `
.modal-dep { max-width: 600px; }
.case { display: flex; flex-direction: column; gap: 2px; padding: 12px 14px; border-radius: var(--r-lg); background: rgb(10 10 10 / 0.45); box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.05); }
.case .row-between { margin-bottom: 6px; }
.case-title { font-size: 14px; font-weight: 600; }
.nw { white-space: nowrap; }
`, true);

console.log('ok');
