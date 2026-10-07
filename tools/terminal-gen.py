#!/usr/bin/env python3
"""Generates the trading terminal pages of the funded mockups from one template,
so every terminal page shares the same panels, sizes and positions."""
import json, math, random, os

SRC = '/home/claude/hetzner-wt/funded-mockups/funded/src/pages/'

def money(v, d=2):
    s = f"{abs(v):,.{d}f}"
    return ('-$' if v < 0 else '$') + s

def num(v, d=2):
    return f"{v:,.{d}f}"

# ---------------------------------------------------------------- chart
W, H, PAD, TOP, BOT = 800, 380, 56, 12, 352

def chart(seed, mark, unit_pct, d, lines=(), zone=None, extra=(), tags=()):
    """Candles whose last close is `mark`. lines: dicts {price, kind, label}; zone: {price, side}
    extra: prices that must fit in range. Returns (svg, overlay_html)."""
    r = random.Random(seed)
    n = 72
    p = 100.0; cs = []
    for _ in range(n):
        o = p; c = o + (r.random() - 0.47) * 3.2
        h = max(o, c) + r.random() * 1.6; l = min(o, c) - r.random() * 1.6
        cs.append((o, c, h, l)); p = c
    last = cs[-1][1]; unit = mark * unit_pct / 100
    P = lambda v: mark + (v - last) * unit
    cs = [tuple(P(x) for x in k) for k in cs]
    cs[-1] = (cs[-1][0], mark, max(cs[-1][2], mark), min(cs[-1][3], mark))
    hi = max(k[2] for k in cs); lo = min(k[3] for k in cs)
    for e in list(extra) + [ln['price'] for ln in lines] + ([zone['price']] if zone else []):
        hi = max(hi, e); lo = min(lo, e)
    span = hi - lo; hi += span * 0.06; lo -= span * 0.06
    y = lambda v: TOP + (hi - v) / (hi - lo) * (BOT - TOP)
    cw = (W - PAD) / n
    g = ''.join(f'<line x1="0" x2="{W-PAD}" y1="{TOP + i*(BOT-TOP)/4:.1f}" y2="{TOP + i*(BOT-TOP)/4:.1f}" stroke="rgba(255,255,255,0.045)"/>' for i in range(5))
    vol = ''.join(f'<rect x="{i*cw+cw*0.18:.1f}" y="{H-4-r.random()*20:.1f}" width="{cw*0.64:.1f}" height="{4+r.random()*16:.1f}" fill="{"rgba(0,165,102,0.3)" if k[1]>=k[0] else "rgba(215,51,55,0.3)"}"/>' for i, k in enumerate(cs))
    zone_svg = ''
    if zone:
        zy = y(zone['price'])
        if zone.get('side', 'below') == 'below':
            zone_svg = f'<rect x="0" y="{zy:.1f}" width="{W-PAD}" height="{BOT-zy+28:.1f}" fill="url(#dz-{seed})"/>'
        else:
            zone_svg = f'<rect x="0" y="0" width="{W-PAD}" height="{zy:.1f}" fill="rgba(215,51,55,0.08)"/>'
        zone_svg = f'<defs><linearGradient id="dz-{seed}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#D73337" stop-opacity="0.16"/><stop offset="1" stop-color="#D73337" stop-opacity="0.05"/></linearGradient></defs>' + zone_svg
        zone_svg += f'<line x1="0" x2="{W}" y1="{zy:.1f}" y2="{zy:.1f}" stroke="#D73337" stroke-width="1.2" stroke-dasharray="5 3"/>'
    body = ''
    for i, k in enumerate(cs):
        o, c, h, l = k; x = i * cw + cw / 2; col = '#00A566' if c >= o else '#D73337'
        body += f'<line x1="{x:.1f}" x2="{x:.1f}" y1="{y(h):.1f}" y2="{y(l):.1f}" stroke="{col}" stroke-width="1"/>'
        top = y(max(o, c)); hg = max(1, abs(y(o) - y(c)))
        body += f'<rect x="{x-cw*0.32:.1f}" y="{top:.1f}" width="{cw*0.64:.1f}" height="{hg:.1f}" fill="{col}"/>'
    lsvg = ''
    for ln in lines:
        ly = y(ln['price'])
        st = {'entry': 'stroke="rgba(255,255,255,0.55)" stroke-dasharray="4 3"',
              'sl': 'stroke="rgba(215,51,55,0.75)" stroke-dasharray="4 3"',
              'tp': 'stroke="rgba(0,165,102,0.75)" stroke-dasharray="4 3"',
              'draft': 'stroke="rgba(215,51,55,0.75)" stroke-dasharray="1.5 3" stroke-width="1.6"',
              'lock': 'stroke="rgba(232,192,120,0.7)" stroke-dasharray="1.5 3" stroke-width="1.4"',
              'done': 'stroke="rgba(25,175,254,0.7)" stroke-dasharray="4 3"'}[ln['kind']]
        lsvg += f'<line x1="0" x2="{W-PAD}" y1="{ly:.1f}" y2="{ly:.1f}" {st}/>'
    my = y(mark)
    lsvg += f'<line x1="0" x2="{W-PAD}" y1="{my:.1f}" y2="{my:.1f}" stroke="#00A566" stroke-dasharray="2 3" stroke-width="1"/>'
    svg = f'<svg viewBox="0 0 {W} {H}" preserveAspectRatio="none" role="img" aria-label="Price chart">{g}{zone_svg}{vol}{body}{lsvg}</svg>'
    f = lambda v: f'{y(v)/H:.4f}'
    ov = ''
    # axis labels as HTML so they never stretch
    for i in range(5):
        v = hi - i * (hi - lo) / 4
        ov += f'<span class="ax" style="top:calc(8px + (100% - 8px) * {(TOP + i*(BOT-TOP)/4)/H:.4f})">{num(v, d)}</span>'
    for ln in lines:
        ov += f'<span class="cl cl-{ln["kind"]}" style="top:calc(8px + (100% - 8px) * {f(ln["price"])})">{ln["label"]}</span>'
    if zone:
        ov += f'<span class="cl cl-liq" style="top:calc(8px + (100% - 8px) * {f(zone["price"])})">{zone["label"]}</span>'
        ov += f'<span class="axtag axtag-liq" style="top:calc(8px + (100% - 8px) * {f(zone["price"])})"><b>{num(zone["price"], d)}</b><i>{zone["pct"]}</i></span>'
    for t in tags:
        ov += f'<span class="axtag axtag-{t["kind"]}" style="top:calc(8px + (100% - 8px) * {f(t["price"])})"><b>{t["label"]}</b></span>'
    ov += f'<span class="axtag axtag-mark" style="top:calc(8px + (100% - 8px) * {f(mark)})"><b>{num(mark, d)}</b></span>'
    return svg, ov

# ---------------------------------------------------------------- book
def book(seed, mark, tick, d, unit, sd=2, rows=8):
    r = random.Random(seed)
    asks = []; bids = []
    for i in range(rows):
        asks.append((mark + tick * (i + 1), r.uniform(0.2, 1) ))
        bids.append((mark - tick * i, r.uniform(0.2, 1)))
    scale = {'oz': 30, 'ETH': 40, 'BTC': 2.5, 'ORDI': 900}[unit]
    asks = [(p, s * scale) for p, s in asks]; bids = [(p, s * scale) for p, s in bids]
    def side(lst):
        tot = 0; out = []
        for p, s in lst:
            tot += s; out.append((p, s, tot))
        return out
    a = side(asks); b = side(bids); mx = max(a[-1][2], b[-1][2])
    html = ''
    for p, s, t in reversed(a):
        html += f'<div class="bk-row ask"><span>{num(p, d)}</span><span>{num(s, sd)}</span><span>{num(t, sd)}</span><i style="width:{t/mx*100:.0f}%"></i></div>'
    html += f'<div class="bk-mid"><b class="up">{num(mark, d)}</b><span class="muted">Spread {num(tick, d)}, {tick/mark*100:.3f}%</span></div>'
    for p, s, t in b:
        html += f'<div class="bk-row bid"><span>{num(p, d)}</span><span>{num(s, sd)}</span><span>{num(t, sd)}</span><i style="width:{t/mx*100:.0f}%"></i></div>'
    return f'''<section class="panel bk" aria-label="Order book">
      <div class="bk-tabs"><span aria-current="true">Order book</span><span>Trades<i class="live"></i></span></div>
      <div class="bk-row bk-head"><span>Price</span><span>Size ({unit})</span><span>Total</span></div>
      {html}
    </section>'''

# ---------------------------------------------------------------- pieces
COINS = {
    'XAU': ('Au', 'background:linear-gradient(135deg,#f4d77a,#c99a2e)', 'Gold, perpetual', True),
    'BTC': ('₿', 'background:#f7931a;color:#fff', 'Bitcoin, perpetual', False),
    'ETH': ('E', 'background:#627eea;color:#fff', 'Ether, perpetual', False),
    'ORDI': ('O', 'background:#2b2b2b;color:#fff;box-shadow:inset 0 0 0 1px #555', 'ORDI, perpetual', False),
}

def coin(sym, sz=18):
    t, st, _, _ = COINS[sym]
    return f'<span class="coin" style="width:{sz}px;height:{sz}px;font-size:{8 if sz < 20 else 10}px;{st}">{t}</span>'

def mkt_head(sym, href, allowed, session, stats):
    t, st, sub, rwa = COINS[sym]
    rwa_pill = '<span class="pill mini">RWA</span>' if rwa else ''
    if allowed == 'yes':
        chip = '<span class="mh-chip ok" title="On the allowed list: the funded account can trade it and it counts for the cycle">{{icon:circle-check:ico-sm}}Allowed</span>'
    elif allowed == 'no':
        chip = '<span class="mh-chip no" title="Not on the allowed list: blocked on the funded account and not counted for the cycle">{{icon:lock:ico-sm}}Not allowed on Funded</span>'
    else:
        chip = ''
    sess = ''
    if session:
        cls, txt, tip = session
        sess = f'<span class="mh-chip sess {cls}" title="{tip}"><span class="dot"></span>{txt}</span>'
    st_html = ''.join(f'<div class="stat"><span class="k">{k}</span><span class="v">{v}</span></div>' for k, v in stats)
    return f'''<section class="panel mh" aria-label="Market">
      <a class="mh-sym" href="{href}" title="Change market">
        <span class="coin" style="{st}">{t}</span>
        <span class="stack"><span class="row gap-2"><b class="w6">{sym}-USD</b>{rwa_pill}{{{{icon:chevron-down:ico-sm muted}}}}</span><span class="t-micro muted">{sub}</span></span>
      </a>
      <div class="mh-chips">{chip}{sess}</div>
      {st_html}
    </section>'''

def health(s):
    """Funded account health strip."""
    locked = s.get('locked')
    liq_v = f'{s["liq"]}{{{{icon:lock:ico-sm}}}}' if locked else s['liq']
    tip = ("Measured on equity at Hyperliquid&#39;s mark price. It trails your highest equity, $2,500 (10% of the $25,000 size) below it, "
           "and stops rising at $25,000 once equity reaches $27,500. Reaching it closes the account at real closing prices.")
    if locked:
        lock = f'''<div class="hs-lock done" title="Liquidation stays at $25,000 however high equity goes. A claim resets it to $22,500.">
          <div class="hs-lock-k"><span>{{{{icon:lock:ico-sm}}}}Locked at $25,000</span><span class="dim">{s["lock_note"]}</span></div>
          <div class="hs-bar"><i style="width:100%"></i></div>
        </div>'''
    else:
        lock = f'''<div class="hs-lock" title="Liquidation rises with each new high and locks at $25,000 once equity reaches $27,500.">
          <div class="hs-lock-k"><span>Locks at $25,000</span><span class="dim">{s["to_go"]} to go</span></div>
          <div class="hs-bar"><i style="width:{s["lock_pct"]}%"></i><b style="left:{s["lock_pct"]}%"></b></div>
        </div>'''
    bell = ('<a class="hs-bell on" href="#" title="Bell and email when the distance to liquidation falls under $1,000">{{icon:bell-ring:ico-sm}}Alert at $1,000 left</a>'
            if s.get('bell') else '<a class="hs-bell" href="#" title="Set an alert on the distance to liquidation">{{icon:bell:ico-sm}}</a>')
    claim = s['claim']
    return f'''<section class="panel hs" aria-label="Funded account health">
      <span class="acct-tag funded">Funded $25K</span>
      <div class="hs-stat"><span class="k">Equity</span><span class="v">{s["equity"]}</span></div>
      <div class="hs-stat"><span class="k">Highest</span><span class="v">{s["highest"]}</span></div>
      <div class="hs-stat"><span class="k def" title="{tip}">Liquidation</span><span class="v">{liq_v}</span></div>
      <div class="hs-stat hs-dist"><span class="k">Distance</span><span class="v">{s["dist"]}<span class="pct">{s["dist_pct"]}</span></span></div>
      {lock}
      <span class="grow"></span>
      {bell}
      {claim}
    </section>'''

def cycle_strip(c):
    segs = ''.join(f'<i class="{"on" if i < c["days"] else ""}{" today" if i == c["days"]-1 else ""}"></i>' for i in range(15))
    return f'''<section class="panel hs hs-cycle" aria-label="{c["name"]}, own account">
      <span class="acct-tag own">Own</span>
      <span class="hs-live"><i></i>{c["name"]}</span>
      <div class="hs-stat"><span class="k">Board</span><span class="v">{c["board"]}</span></div>
      <div class="hs-stat"><span class="k">Seat</span><span class="v">{c["seat"]}</span></div>
      <div class="hs-stat"><span class="k">Score</span><span class="v">{c["score"]}<span class="pct up">{c["today"]} today</span></span></div>
      <div class="hs-lock hs-days"><div class="hs-lock-k"><span>Trading days {c["days"]} of 15</span><span class="dim">{c["days_note"]}</span></div><div class="segs">{segs}</div></div>
      <div class="hs-stat"><span class="k def" title="Never fall more than 10% of your cycle starting capital below your highest equity; once 10% up, never below your starting capital.">Drawdown</span><span class="v">{{{{icon:circle-check:ico-sm up}}}}Kept</span></div>
      <span class="grow"></span>
      <span class="hs-note" title="A trade counts once it moves at least $50 notional and stays open at least 60 seconds">{{{{icon:timer:ico-sm}}}}This order counts once held 60 s</span>
      <a class="link t-caption" href="{c["more_href"]}">{c["more"]}</a>
    </section>'''

def switcher(own_val, fund_val, sel, own_href, fund_href, fund_off=None):
    own = f'<a class="sw-seg" href="{own_href}" role="radio" aria-checked="{"true" if sel=="own" else "false"}"><span class="acct-tag own">Own</span><span class="num w6">{own_val}</span></a>'
    if fund_off:
        fund = f'<span class="sw-seg off" role="radio" aria-checked="false" aria-disabled="true"><span class="acct-tag funded">Funded</span><span class="t-caption muted">{fund_off}</span></span>'
    else:
        fund = f'<a class="sw-seg" href="{fund_href}" role="radio" aria-checked="{"true" if sel=="funded" else "false"}"><span class="acct-tag funded">Funded</span><span class="num w6">{fund_val}</span></a>'
    return f'''<section class="panel sw" aria-label="Account for orders">
      <div class="sw-track" role="radiogroup" aria-label="Trade with">{own}{fund}</div>
    </section>'''

def ticket(t):
    side_on = 'on-buy'
    slider_pct = t.get('slider', 25)
    ticks = ''.join(f'<i class="stk{" on" if p <= slider_pct else ""}" style="left:{p}%"></i>' for p in (0, 25, 50, 75, 100))
    body = t.get('body')
    if body is None:
        body = f'''<div class="tk-kv"><span class="k">Available</span><span class="v">{t["avail"]}</span></div>
      <div class="tk-kv"><span class="k">Position</span><span class="v">{t["position"]}</span></div>
      <div class="field">
        <span class="field-label">Price</span>
        <div class="input input-sm"><input value="{t["price"]}" aria-label="Limit price"><span class="link t-caption">{t.get("price_ref","Ask")}</span><span class="unit">USD</span></div>
      </div>
      <div class="field">
        <span class="field-label">Size</span>
        <div class="input input-sm"><input value="{t["size"]}" aria-label="Size"><span class="unit">{t["size_val"]}</span><span class="tk-unit">{t["unit"]}{{{{icon:chevron-down:ico-sm}}}}</span></div>
        <div class="tk-slider" aria-hidden="true"><span class="fill" style="width:{slider_pct}%"></span>{ticks}<span class="knob" style="left:{slider_pct}%"></span></div>
      </div>
      <div class="tk-pair">
        <div class="field"><div class="row-between"><span class="field-label">Stop loss</span><span class="t-micro down">{t["stop_risk"]}</span></div><div class="input input-sm"><input value="{t["stop"]}" aria-label="Stop price"></div></div>
        <div class="field"><div class="row-between"><span class="field-label">Take profit</span><span class="t-micro up">{t["tp_r"]}</span></div><div class="input input-sm"><input value="{t["tp"]}" aria-label="Take profit price"></div></div>
      </div>
      {t["impact"]}'''
    return f'''<section class="panel tk" aria-label="Order ticket, {t["acct"]} account">
      <div class="tk-top">
        <span class="tk-pill" title="{t.get("cross_tip","Cross margin")}">{{{{icon:lock:ico-sm}}}}Cross</span>
        <div class="tk-types"><span>Market</span><span aria-current="true">Limit</span><span>Pro</span></div>
      </div>
      <div class="side-toggle"><a class="{side_on}" href="#">Long</a><a href="#">Short</a></div>
      {body}
      {t["button"]}
    </section>'''

def impact(cells, note=None):
    c = ''.join(f'<div class="im-c"><span class="k"{(" title=" + json.dumps(tip)) if tip else ""}>{k}</span><span class="v{(" " + cls) if cls else ""}">{v}</span></div>' for k, v, cls, tip in cells)
    n = f'<p class="im-note">{note}</p>' if note else ''
    return f'<div class="im" aria-label="Order impact, information only">{c}</div>{n}'

def risk_cell(amount, pct, basis='stop'):
    w = min(100, pct)
    tip = 'If its stop fills' if basis == 'stop' else 'At a 5% move, no stop set'
    return f'<td class="r"><span class="rk" title="{tip}: share of the distance to liquidation it uses"><span class="rk-bar"><i style="width:{w:.1f}%"></i></span><span class="rk-v">{pct:.1f}%</span><span class="rk-a">{amount}</span></span></td>'

def positions(rows, tabs, right, liq=True, empty=None, head=None):
    tabs_html = ''.join(f'<a class="tab" href="#"{" aria-current=\"true\"" if i == 0 else ""}>{n}{f"<span class=count>{c}</span>" if c else ""}</a>' for i, (n, c) in enumerate(tabs))
    if head is None:
        if liq:
            head = ('<tr><th>Market</th><th>Side</th><th class="r">Size</th><th class="r">Entry</th><th class="r hide-sm">Mark</th><th class="r">PnL</th>'
                    '<th class="r"><span class="def" title="Price at which this position alone takes equity to the liquidation level">Liq. at</span></th><th>TP / SL</th>'
                    '<th class="r"><span class="def" title="How much of the distance to liquidation this position uses if its stop fills, or at a 5% move when it has no stop">Risk to liquidation</span></th><th class="r">Close</th></tr>')
        else:
            head = ('<tr><th>Market</th><th>Side</th><th class="r">Size</th><th class="r">Entry</th><th class="r hide-sm">Mark</th><th class="r">PnL</th>'
                    '<th class="r"><span class="def" title="Hyperliquid liquidation price, cross margin">Liq. price</span></th><th>TP / SL</th><th class="r">Close</th></tr>')
    body = empty if empty else ''.join(rows)
    return f'''<section class="panel pos" aria-label="Positions and history">
      <div class="tabs pos-tabs">{tabs_html}<span class="grow"></span>{right}</div>
      <table class="table">
        <thead>{head}</thead>
        <tbody>{body}</tbody>
      </table>
    </section>'''

def close_cell(label):
    return f'<td class="r"><span class="qc"><a class="qc-m" href="#" aria-label="Close {label} at market">Market</a><a class="qc-l" href="#" aria-label="Close {label} with a limit">Limit</a></span></td>'

def pos_row(sym, side, size, value, entry, mark, pnl, liq_at, tpsl, risk, label):
    pcls = 'up' if pnl.startswith('+') else 'down'
    scls = 'up' if side == 'Long' else 'down'
    return f'''<tr>
            <td><span class="row gap-3">{coin(sym)}<span class="w6">{sym}-USD</span></span></td>
            <td class="{scls} w6">{side}</td><td class="r"><span class="stack"><span>{size}</span><span class="t-micro muted">{value}</span></span></td><td class="r">{entry}</td><td class="r hide-sm">{mark}</td>
            <td class="r {pcls}">{pnl}</td>{f'<td class="r">{liq_at}</td>' if liq_at is not None else ''}
            <td>{tpsl}</td>{risk}{close_cell(label)}
          </tr>'''

def page(header, mh, strip, chart_html, book_html, sw, tk, pos, extra='', main_cls='tx', after=''):
    return f'''<!--page {json.dumps(header, ensure_ascii=False)} -->
<main class="{main_cls}">
  {strip}
  {mh}
  {sw}
  {chart_html}
  {book_html}
  {tk}
  {pos}
  {extra}
</main>
{after}
<style>
{CSS}
</style>
'''

def chart_panel(svg, ov, tf='1D', overlay=''):
    tfs = ''.join(f'<span class="tf"{" aria-current=\"true\"" if x == tf else ""}>{x}</span>' for x in ('15m', '1h', '4h', '1D'))
    return f'''<section class="panel ch" aria-label="Chart">
      <div class="chart-tools">{tfs}<span class="divider-v"></span><span class="row gap-2">{{{{icon:chart-spline:ico-sm}}}}Indicators</span></div>
      <div class="ch-wrap">
        <div class="ch-svg">{svg}</div>
        {ov}
        {overlay}
      </div>
    </section>'''

CSS = open(os.path.join(os.path.dirname(__file__), 'term.css')).read().strip()

# ================================================================ data
SEASON_NOV28 = '<span class="k">Nov 28</span> Cycle 2, 19d 06h left'
CLOSE_TO_CLAIM = '{{root}}f07-claims/04-close-to-claim.html'
CLAIMS = '{{root}}f07-claims/01-payouts.html'

XAU_MH_STATS = [('Mark', '2,661.40'), ('Oracle', '2,661.05'), ('24h change', '<span class="up">+18.20, +0.69%</span>'),
                ('Open interest', '$84.2M'), ('24h volume', '$212.7M'), ('Funding', '<span class="up">0.0021%</span> <span class="muted">00:41:12</span>')]
GOLD_CLOSED = ('closed', 'Gold closed, opens Sun 23:00 UTC', 'Information only. The perp trades the same while the gold market is closed.')

def claim_chip(label, href, tip):
    return f'<a class="btn btn-glass btn-sm hs-claim" href="{href}" title="{tip}">{{{{icon:banknote-arrow-down:ico-sm}}}}{label}</a>'

FUNDED_TABS = [('Positions', '2'), ('Open orders', '4'), ('Trade history', None), ('Funding', None), ('Liquidation log', None)]

def xau_rows(state):
    if state == 'before':
        return [
            pos_row('XAU', 'Long', '13.90 oz', '$36,993.46', '2,662.20', '2,661.40', '-$11.12', '2,481.54',
                    '<span class="up">2,698.00</span> / <span class="down">2,644.20</span>', risk_cell('$239.08', 9.56), 'XAU-USD long'),
            pos_row('ETH', 'Short', '6.25 ETH', '$19,206.25', '3,121.80', '3,073.00', '+$305.00', '3,473.00',
                    '<span class="up">2,980.00</span> / <span class="down">3,121.80</span>', risk_cell('$305.00', 12.20), 'ETH-USD short'),
        ]
    return [
        pos_row('XAU', 'Long', '18.90 oz <span class="new-tag">+5.00</span>', '$50,300.46', '2,662.04', '2,661.40', '-$12.12', '2,529.49',
                '<span class="stack"><span><span class="up">2,698.00</span> / <span class="down">2,644.20</span> <span class="t-micro muted">13.90 oz</span></span><span><span class="up">2,741.60</span> / <span class="down">2,621.60</span> <span class="t-micro muted">5.00 oz</span></span></span>',
                risk_cell('$438.08', 17.57), 'XAU-USD long'),
        pos_row('ETH', 'Short', '6.25 ETH', '$19,206.25', '3,121.80', '3,073.00', '+$305.00', '3,471.88',
                '<span class="up">2,980.00</span> / <span class="down">3,121.80</span>', risk_cell('$305.00', 12.23), 'ETH-USD short'),
    ]

def funded_right(used):
    return f'<span class="t-caption muted pos-meta">Cross margin, {used} used</span>'

HEALTH_NOV28 = dict(equity='$25,923.00', highest='$25,923.00', liq='$23,423.00', dist='$2,500.00', dist_pct='9.64%',
                    lock_pct=36.92, to_go='$1,577.00', bell=True,
                    claim=claim_chip('Close all, claim $738.40', CLOSE_TO_CLAIM, 'Your 80% of the $923.00 profit above $25,000 at mark. Real closing prices set the final amount.'))

def xau_chart(state, seed='xau-1d-88'):
    if state == 'before':
        lines = [dict(price=2662.20, kind='entry', label='Long 13.90 oz'),
                 dict(price=2644.20, kind='sl', label='SL 2,644.20'),
                 dict(price=2621.60, kind='draft', label='Draft stop 2,621.60, -$200.00'),
                 dict(price=2774.85, kind='lock', label='{{icon:lock:ico-sm}}Lock, equity $27,500')]
        zone = dict(price=2481.54, label='{{icon:shield-alert:ico-sm}}Liquidation, XAU alone, -179.86', pct='-6.76%')
    else:
        lines = [dict(price=2662.04, kind='entry', label='Long 18.90 oz'),
                 dict(price=2644.20, kind='sl', label='SL 2,644.20, 13.90 oz'),
                 dict(price=2621.60, kind='sl', label='SL 2,621.60, 5.00 oz'),
                 dict(price=2745.21, kind='lock', label='{{icon:lock:ico-sm}}Lock, equity $27,500')]
        zone = dict(price=2529.49, label='{{icon:shield-alert:ico-sm}}Liquidation, XAU alone, -131.91', pct='-4.96%')
    return chart(seed, 2661.40, 0.5, 2, lines=lines, zone=zone)

def xau_book():
    return book('xau-book', 2661.40, 0.20, 2, 'oz')

pages = {}

# ---------------- 02 trade funded
svg, ov = xau_chart('before')
pages['f05-funded-trading/02-trade-funded.html'] = page(
    {"nav": "trade", "header": "funded", "season": SEASON_NOV28, "seasonPct": 34,
     "acct": {"tag": "funded", "label": "Funded", "value": "$25,923.00"}, "links": {"acct": "04-account-switch.html"}},
    mkt_head('XAU', '03-order-blocked.html', 'yes', GOLD_CLOSED, XAU_MH_STATS),
    health(HEALTH_NOV28),
    chart_panel(svg, ov), xau_book(),
    switcher('$1,284.20', '$25,923.00', 'funded', '04-account-switch.html', '02-trade-funded.html'),
    ticket(dict(acct='funded', avail='$20,303.03', position='13.90 oz long', price='2,661.60', size='5.00', size_val='$13,308.00', unit='oz',
                slider=25, stop='2,621.60', stop_risk='-$200.00', tp='2,741.60', tp_r='2.0R',
                cross_tip='Funded accounts trade cross margin only',
                impact=impact([
                    ('If all stops fill', '$1,749.93 left', None, 'Distance to liquidation if every stop fills, this one included, plus the $5.99 fee. Now $1,955.92.'),
                    ('Liquidation, ours', '2,529.49', 'liq', 'XAU price at which equity reaches $23,423.00, XAU alone, after this order'),
                    ('Hyperliquid', '1,344.10', 'muted-v', "Hyperliquid's own liquidation price for XAU after this order, cross margin")]),
                button='<a class="btn btn-buy btn-lg btn-block tk-go" href="05-order-placed.html">Long 5.00 oz XAU<span class="tk-acct">Funded</span></a>')),
    positions(xau_rows('before'), FUNDED_TABS, funded_right('$5,619.97')))

# ---------------- 03 order blocked
svg, ov = chart('ordi-1d-14', 38.42, 1.0, 2)
blocked = '''<div class="blk" role="alert">
        <p class="blk-t">{{icon:lock:ico-sm}}ORDI-USD is not on the allowed list. Nothing was sent.</p>
        <a class="fix" href="02-trade-funded.html">{{icon:list-checks:ico-sm}}<span class="stack"><span>Pick an allowed market</span><span class="muted t-micro">BTC, ETH, SOL, HYPE, XAU, WTI, US500, NVDA, TSLA</span></span></a>
        <a class="fix" href="04-account-switch.html">{{icon:arrow-left-right:ico-sm}}<span class="stack"><span>Trade ORDI on Own</span><span class="muted t-micro">Your money, not counted for the cycle</span></span></a>
      </div>'''
pages['f05-funded-trading/03-order-blocked.html'] = page(
    {"nav": "trade", "header": "funded", "season": SEASON_NOV28, "seasonPct": 34,
     "acct": {"tag": "funded", "label": "Funded", "value": "$25,923.00"}, "links": {"acct": "04-account-switch.html"}},
    mkt_head('ORDI', '02-trade-funded.html', 'no', None,
             [('Mark', '38.42'), ('Oracle', '38.40'), ('24h change', '<span class="down">-1.12, -2.83%</span>'), ('Open interest', '$9.6M'), ('24h volume', '$31.4M'), ('Funding', '<span class="up">0.0100%</span> <span class="muted">00:41:12</span>')]),
    health(HEALTH_NOV28),
    chart_panel(svg, ov, overlay='<span class="ch-stamp">{{icon:lock:ico-sm}}Not allowed on Funded</span>'), book('ordi-book', 38.42, 0.01, 2, 'ORDI', 1),
    switcher('$1,284.20', '$25,923.00', 'funded', '04-account-switch.html', '02-trade-funded.html'),
    ticket(dict(acct='funded', avail='$20,303.03', position='None', price='38.43', size='400.0', size_val='$15,372.00', unit='ORDI',
                slider=30, stop='37.93', stop_risk='-$200.00', tp='39.43', tp_r='2.0R', cross_tip='Funded accounts trade cross margin only',
                impact=blocked,
                button='<span class="btn btn-lg btn-block tk-off" aria-disabled="true">{{icon:lock:ico-sm}}Not allowed on Funded</span>')),
    positions(xau_rows('before'), FUNDED_TABS, funded_right('$5,619.97')))

# ---------------- 04 account switch: just switched to Own
svg, ov = chart('xau-1d-88', 2661.40, 0.5, 2, extra=(2560, 2760))
own_empty = '<tr><td colspan="9"><div class="pos-empty">{{icon:layers:ico-sm}}<span>No open positions on Own.</span><a class="link" href="02-trade-funded.html">Funded has 2 open</a></div></td></tr>'
pages['f05-funded-trading/04-account-switch.html'] = page(
    {"nav": "trade", "header": "funded", "season": SEASON_NOV28, "seasonPct": 34,
     "acct": {"tag": "own", "label": "Own", "value": "$1,284.20"}, "links": {"acct": "02-trade-funded.html"}},
    mkt_head('XAU', '#', 'yes', GOLD_CLOSED, XAU_MH_STATS),
    cycle_strip(dict(name='Cycle 2', board='#44', seat='<span class="muted w5">Not while funded</span>', score='731.4', today='+1.1', days=7,
                     days_note='Today counted', more='Leaderboard', more_href='{{root}}f03-competing/02-leaderboard.html')),
    chart_panel(svg, ov), xau_book(),
    switcher('$1,284.20', '$25,923.00', 'own', '04-account-switch.html', '02-trade-funded.html'),
    ticket(dict(acct='own', avail='$1,284.20', position='None', price='2,661.60', size='0.19', size_val='$505.70', unit='oz',
                slider=40, stop='2,621.60', stop_risk='-$7.60', tp='2,741.60', tp_r='2.0R', cross_tip='Cross margin',
                impact=impact([
                    ('If the stop fills', '-$7.60', 'down', 'Loss at the stop, before fees'),
                    ('Hyperliquid liq.', 'None', 'muted-v', 'No liquidation price: the balance covers the position'),
                    ('Counts for cycle', 'Held 60 s', None, 'A trade counts once it moves at least $50 notional and stays open 60 seconds')]),
                button='<a class="btn btn-buy btn-lg btn-block tk-go" href="#">Long 0.19 oz XAU<span class="tk-acct own">Own</span></a>')),
    positions([], [('Positions', '0'), ('Open orders', '0'), ('Trade history', None), ('Funding', None)], '', liq=False, empty=own_empty),
    after='<div class="toast" role="status">{{icon:arrow-left-right:ico-sm}}<span>Switched to <b>Own</b>. Draft cleared, Funded positions keep running.</span><a class="link" href="02-trade-funded.html">Back to Funded</a></div>')

# ---------------- 05 order placed
svg, ov = xau_chart('after')
HEALTH_05 = dict(equity='$25,916.01', highest='$25,923.00', liq='$23,423.00', dist='$2,493.01', dist_pct='9.62%',
                 lock_pct=36.92, to_go='$1,583.99', bell=True,
                 claim=claim_chip('Close all, claim $732.81', CLOSE_TO_CLAIM, 'Your 80% of the $916.01 profit above $25,000 at mark. Real closing prices set the final amount.'))
filled = '''<div class="filled" role="status">
        <p class="filled-t">{{icon:circle-check:ico-sm}}Filled, long 5.00 oz XAU at 2,661.60</p>
        <p class="t-caption muted">Stop 2,621.60 and TP 2,741.60 placed. Fee $5.99. 17:59:12 UTC.</p>
      </div>'''
pages['f05-funded-trading/05-order-placed.html'] = page(
    {"nav": "trade", "header": "funded", "season": SEASON_NOV28, "seasonPct": 34,
     "acct": {"tag": "funded", "label": "Funded", "value": "$25,916.01"}, "links": {"acct": "04-account-switch.html"}},
    mkt_head('XAU', '03-order-blocked.html', 'yes', GOLD_CLOSED, XAU_MH_STATS),
    health(HEALTH_05),
    chart_panel(svg, ov), xau_book(),
    switcher('$1,284.20', '$25,916.01', 'funded', '04-account-switch.html', '02-trade-funded.html'),
    ticket(dict(acct='funded', avail='$18,965.34', position='18.90 oz long', price='', size='', size_val='$0.00', unit='oz',
                slider=0, stop='', stop_risk='', tp='', tp_r='', cross_tip='Funded accounts trade cross margin only',
                impact=filled + impact([
                    ('If all stops fill', '$1,749.93 left', None, 'Distance to liquidation if every stop fills. Was $1,955.92 before this order.'),
                    ('Liquidation, ours', '2,529.49', 'liq', 'XAU price at which equity reaches $23,423.00, XAU alone'),
                    ('Hyperliquid', '1,344.10', 'muted-v', "Hyperliquid's own liquidation price for XAU, cross margin")]),
                button='<span class="btn btn-buy btn-lg btn-block tk-go" aria-disabled="true">Enter size and price</span>')),
    positions(xau_rows('after'), [('Positions', '2'), ('Open orders', '6'), ('Trade history', None), ('Funding', None), ('Liquidation log', None)], funded_right('$6,950.67')))

# ---------------- 06 liquidation locked (Dec 7)
btc_lines = [dict(price=69850, kind='entry', label='Long 0.40 BTC'), dict(price=70400, kind='sl', label='SL 70,400')]
svg, ov = chart('btc-4h-31', 71240, 1.05, 0, lines=btc_lines,
                zone=dict(price=64835, label='{{icon:shield-alert:ico-sm}}Liquidation, BTC alone, -6,405', pct='-8.99%'))
HEALTH_06 = dict(equity='$27,562.00', highest='$27,562.00', liq='$25,000.00', dist='$2,562.00', dist_pct='9.30%', locked=True,
                 lock_note='since Dec 7, 13:41', bell=True,
                 claim=claim_chip('Close all, claim $2,049.60', CLOSE_TO_CLAIM, 'Your 80% of the $2,562.00 profit above $25,000 at mark. Then equity and liquidation reset to $25,000 and $22,500.'))
pages['f05-funded-trading/06-floor-locked.html'] = page(
    {"nav": "trade", "header": "funded", "unread": True, "season": '<span class="k">Dec 7</span> Cycle 2, 10d 09h left', "seasonPct": 64,
     "acct": {"tag": "funded", "label": "Funded", "value": "$27,562.00"}, "links": {"acct": "04-account-switch.html"}},
    mkt_head('BTC', '02-trade-funded.html', 'yes', None,
             [('Mark', '71,240'), ('Oracle', '71,226'), ('24h change', '<span class="up">+1,412, +2.02%</span>'), ('Open interest', '$2.52B'), ('24h volume', '$4.11B'), ('Funding', '<span class="up">0.0100%</span> <span class="muted">00:18:47</span>')]),
    health(HEALTH_06),
    chart_panel(svg, ov, tf='4h', overlay='<span class="ch-note">{{icon:lock:ico-sm}}Liquidation stays at $25,000 from here, however high equity goes</span>'),
    book('btc-book', 71240, 1, 0, 'BTC', 3),
    switcher('$1,284.20', '$27,562.00', 'funded', '04-account-switch.html', '02-trade-funded.html'),
    ticket(dict(acct='funded', avail='$24,712.40', position='0.40 BTC long', price='71,180', size='0.10', size_val='$7,118.00', unit='BTC',
                slider=15, stop='70,400', stop_risk='-$78.00', tp='72,740', tp_r='2.0R', price_ref='Bid', cross_tip='Funded accounts trade cross margin only',
                impact=impact([
                    ('If all stops fill', '$2,144.80 left', None, 'Distance to liquidation if every stop fills, this one included, plus the $3.20 fee. Now $2,226.00.'),
                    ('Liquidation, ours', '66,110', 'liq', 'BTC price at which equity reaches $25,000.00, BTC alone, after this order'),
                    ('Hyperliquid', '16,314', 'muted-v', "Hyperliquid's own liquidation price for BTC after this order, cross margin")]),
                button='<a class="btn btn-buy btn-lg btn-block tk-go" href="02-trade-funded.html">Long 0.10 BTC<span class="tk-acct">Funded</span></a>')),
    positions([pos_row('BTC', 'Long', '0.40 BTC', '$28,496.00', '69,850', '71,240', '+$556.00', '64,835',
                       '<span class="up">72,800</span> / <span class="down">70,400</span>', risk_cell('$336.00', 13.11), 'BTC-USD long')],
              [('Positions', '1'), ('Open orders', '2'), ('Trade history', None), ('Funding', None), ('Liquidation log', None)], funded_right('$2,849.60')))

# ---------------- f03 05 own account, Cycle 1, Nov 6
btc_own_lines = [dict(price=69200, kind='tp', label='TP 69,200, +$25.00'), dict(price=67950, kind='entry', label='Long 0.020 BTC'),
                 dict(price=67300, kind='sl', label='SL 67,300, -$13.00')]
svg, ov = chart('btc-1h-17', 68412, 0.55, 0, lines=btc_own_lines)
pages['f03-competing/05-trade.html'] = page(
    {"nav": "trade", "header": "member", "acct": {"tag": "own", "label": "Own", "value": "$1,284.20"}},
    mkt_head('BTC', '#', 'yes', None,
             [('Mark', '68,412'), ('Oracle', '68,398'), ('24h change', '<span class="up">+1,086, +1.61%</span>'), ('Open interest', '$2.41B'), ('24h volume', '$3.87B'), ('Funding', '<span class="up">0.0100%</span> <span class="muted">00:41:12</span>')]),
    cycle_strip(dict(name='Cycle 1', board='#17', seat='#16', score='781.6', today='+3.2', days=11,
                     days_note='4 to request', more='Requirements', more_href='01-home-competing.html')),
    chart_panel(svg, ov, tf='1h'), book('btc-own-book', 68412, 1, 0, 'BTC', 3),
    switcher('$1,284.20', '', 'own', '05-trade.html', '#', fund_off='None yet'),
    ticket(dict(acct='own', avail='$1,147.38', position='0.020 BTC long', price='68,380', size='0.0242', size_val='$1,654.80', unit='BTC',
                slider=35, stop='67,850', stop_risk='-$12.83', tp='69,440', tp_r='2.0R', price_ref='Mid', cross_tip='Cross margin',
                impact=impact([
                    ('Above your line', '$398.98', None, 'Drawdown requirement: room left above your line if this stop fills'),
                    ('Hyperliquid liq.', '40,010', 'muted-v', "Hyperliquid's liquidation price for BTC after this order, cross margin"),
                    ('Fee, maker', '$0.25', None, None)]),
                button='<a class="btn btn-buy btn-lg btn-block tk-go" href="#">Long 0.0242 BTC<span class="tk-acct own">Own</span></a>')),
    positions([pos_row('BTC', 'Long', '0.020 BTC', '$1,368.24', '67,950', '68,412', '+$9.24', '4,590',
                       '<span class="up">69,200</span> / <span class="down">67,300</span>', '', 'BTC-USD long')],
              [('Positions', '1'), ('Open orders', '2'), ('Trade history', None), ('Funding', None)], '', liq=False))

# ---------------- f06 02 incident, Dec 4
svg, ov = chart('xau-15m-4', 2661.40, 0.18, 2, lines=[dict(price=2660.10, kind='done', label='{{icon:circle-check:ico-sm}}XAU long closed at 2,660.10')])
inc_overlay = '''<div class="inc" role="status" aria-labelledby="inc-h">
          <span class="inc-ico">{{icon:cloud-off:ico-lg}}</span>
          <div class="stack gap-2">
            <h1 id="inc-h" class="inc-t">Hyperliquid not reachable</h1>
            <p class="t-small dim">Since 14:30 UTC, Fri Dec 4. Your 2 positions were closed at 14:31 at real fill prices. The account stays active.</p>
            <p class="t-caption muted">Last update 14:49 UTC. Trading returns here when service is back.</p>
          </div>
        </div>'''
HEALTH_INC = dict(equity='$25,829.93', highest='$25,923.00', liq='$23,423.00', dist='$2,406.93', dist_pct='9.32%',
                  lock_pct=36.92, to_go='$1,670.07', bell=True,
                  claim=claim_chip('Claim $663.94', CLAIMS, 'Flat, so you can claim now: your 80% of the $829.93 profit above $25,000. Then equity resets to $25,000.00 and liquidation to $22,500.00.'))
inc_rows = '''<tr>
            <td><span class="row gap-3">''' + coin('XAU') + '''<span class="w6">XAU-USD</span></span></td>
            <td class="up w6">Long</td><td class="r">13.90 oz</td><td class="r">2,662.20</td><td class="r">2,660.85</td><td class="r">2,660.10</td><td class="r down">-$10.43</td><td class="r down">-$29.19</td>
          </tr>
          <tr>
            <td><span class="row gap-3">''' + coin('ETH') + '''<span class="w6">ETH-USD</span></span></td>
            <td class="down w6">Short</td><td class="r">6.25 ETH</td><td class="r">3,121.80</td><td class="r">3,084.20</td><td class="r">3,085.00</td><td class="r down">-$5.00</td><td class="r up">+$230.00</td>
          </tr>
          <tr class="total"><td colspan="6" class="w6">Total, closed 14:31 UTC</td><td class="r down">-$15.43</td><td class="r up w6">+$200.81</td></tr>'''
inc_head = '<tr><th>Market</th><th>Side</th><th class="r">Size</th><th class="r">Entry</th><th class="r">Mark at close</th><th class="r">Real fill</th><th class="r">Slippage</th><th class="r">PnL</th></tr>'
inc_ticket = '''<section class="panel tk" aria-label="Order ticket, funded account">
      <div class="tk-top">
        <span class="tk-pill">{{icon:lock:ico-sm}}Cross</span>
        <div class="tk-types"><span>Market</span><span aria-current="true">Limit</span><span>Pro</span></div>
      </div>
      <div class="side-toggle tk-dim"><a class="on-buy" href="#">Long</a><a href="#">Short</a></div>
      <div class="tk-kv"><span class="k">Available</span><span class="v">$25,829.93</span></div>
      <div class="tk-kv"><span class="k">Position</span><span class="v">None</span></div>
      <div class="tk-paused">
        <span class="inc-dot"></span>
        <p class="t-small">Orders are off while Hyperliquid is not reachable.</p>
        <p class="t-caption muted">No positions, so equity can't move and the account can't be liquidated. Flat, so you can claim from the bar above.</p>
      </div>
      <span class="btn btn-lg btn-block tk-off" aria-disabled="true">{{icon:cloud-off:ico-sm}}Trading off</span>
    </section>'''
inc_tabs = [('Closed automatically', '2'), ('Positions', '0'), ('Open orders', '0'), ('Trade history', None)]
pages['f06-risk-events/02-incident.html'] = page(
    {"nav": "trade", "header": "funded", "season": '<span class="k">Dec 4</span> Cycle 2, 13d 09h left', "seasonPct": 54, "unread": True,
     "acct": {"tag": "funded", "label": "Funded", "value": "$25,829.93"}},
    mkt_head('XAU', '#', 'yes', ('open', 'Gold open', 'Information only. The perp trades the same whether the gold market is open or closed.'),
             [('Mark', '2,661.40'), ('Oracle', '2,661.05'), ('24h change', '<span class="up">+18.20, +0.69%</span>'), ('Status', '<span class="inc-v"><span class="inc-dot"></span>Hyperliquid not reachable</span>')]),
    health(HEALTH_INC),
    chart_panel(svg, ov, tf='15m', overlay=inc_overlay), xau_book().replace('class="panel bk"', 'class="panel bk bk-stale"'),
    switcher('$1,284.20', '$25,829.93', 'funded', '{{root}}f03-competing/05-trade.html', '02-incident.html'),
    inc_ticket,
    positions([], inc_tabs, '<a class="link t-caption pos-meta" href="01-liquidated.html">Liquidation, a different case</a>', head=inc_head, empty=inc_rows))

for path, html in pages.items():
    with open(SRC + path, 'w') as fh:
        fh.write(html)
    print('wrote', path, len(html))
