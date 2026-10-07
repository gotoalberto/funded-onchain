# funded.onchain.cc mockups: brief for every screen

Static, navigable HTML mockups with no functionality. Input for the product designer (Esteban), who
will rebuild them in the real app. Every element, state and style is shown; nothing works.

## Product truth (decided by Alberto, 2026-10-06)

- Standalone app at funded.onchain.cc. Same login (Privy) and the same Hyperliquid account as
  onchain.cc, so a trader's past onchain.cc perps activity already counts.
- Only Bitso funds accounts. There are NO third-party funders: never write funder, fund page,
  subscribe, redeem, pool. Say "Bitso's USDC" or "the account's USDC".
- NO KYC and no identity verification anywhere. US is excluded by geoblock only.
- NO application step. Every perps trader is in automatically.
- Two levels of requirements:
  1. Entry minimums put you on the leaderboard: 10 closed trades, $1,000 perps volume,
     $100 balance, inside the cycle.
  2. Performance floors are needed to request a seat: net PnL positive, max drawdown 25% or
     better, at least 15 trading days in the cycle.
- Dated seasons, same for everyone. Cycle 1: Oct 20 to Nov 18, 2026 (00:00 UTC). When it
  closes, a 24 hour request window opens (Nov 18 00:00 to Nov 19 00:00 UTC). Everyone on the
  leaderboard who meets the floors can request. When the window ends, seats are assigned in
  score order until they run out. Cycle 2 starts Nov 19.
- When requesting, the trader picks a trading window: 1 week, 2 weeks or 1 month.
- One funded account per trader at a time. A funded trader stays on the leaderboard of the next
  cycle (with their own money) but cannot request another seat while they hold one. Someone who
  loses their account can request again at the next cycle close.
- Account sizes by score band. "Account size" = the largest open position (position cap). The
  USDC Bitso deposits is 20% of it. Always quote both.
  | Band | Max position | USDC | Seats S1 | Ranks (S1) |
  |---|---|---|---|---|
  | $200K | $200,000 | $40,000 | 1 | #1 |
  | $100K | $100,000 | $20,000 | 1 | #2 |
  | $50K | $50,000 | $10,000 | 4 | #3 to #6 |
  | $25K | $25,000 | $5,000 | 15 | #7 to #21 |
  | $5K | $5,000 | $1,000 | 39 | #22 to #60 |
  60 seats in Cycle 1. No seat below #60 (ranks are among requesters, so the cut can move).
- Account rules: daily loss 5% of starting USDC pauses trading until 00:00 UTC; total loss 10%
  closes the account (reduce-only, rest returns to Bitso). Cross margin only, allowed markets only
  (depth-gated list, crypto and RWA). Every order must be placed from funded.onchain.cc or
  onchain.cc; any fill not matched to a terminal order freezes the account.
- Trading window end: in profit (above starting USDC) it rolls over into a new window of the same
  length; below the start the account closes and the USDC returns to Bitso.
- Split 80% trader / 20% Bitso. Payouts monthly, the first one from week 8 of the account. A fill
  review must clear before a payout is released. Paid in USDC to the trader's onchain.cc wallet.
- Referral: 1bp of funded volume goes to whoever referred the funded trader. Self-referrals earn
  nothing. Share cards carry the trader's referral link.
- Leaderboard identity: alias if set, otherwise shortened wallet (0x91c2…4ab0 in .mono).
- Score: weighted, 0 to 1000. Weights: Net PnL 30%, Return on capital 25%, Win rate 15%,
  Volume 10%, Trade count 10%, Balance 10%.

## Demo data (use these numbers everywhere so screens agree)

- Persona: alias `kestrel`, avatar letter K, wallet `0x7a3F…c91E`. Referral link
  `funded.onchain.cc/r/kestrel`.
- "Today" during Cycle 1 is Nov 6: 12d 04h left. Own account balance $1,284.20.
- Competing (F03): rank #17 of 2,314, score 781.6, band $25K. Net PnL +$412.80, return +32.1%,
  max DD 11.4%, trading days 11 of 15. Neighbours: #15 marlowe 788.9, #16 vandal 784.2,
  #18 0x91c2…4ab0 779.0, #19 sable_fx 776.3. #1 is `ormond` 942.7, #2 `tidewater` 918.3.
- Not qualified (F02 start): 0 of 3 minimums met; in progress: 7 of 10 trades, $640 of $1,000,
  balance $250 met. On the board at #812 with score 402.1 when the last minimum is met.
- Seat claim (F04): final rank #17, score 801.3. 1,487 traders qualified for the floors,
  612 have requested so far; kestrel is #14 among requesters; 60 seats.
- Funded (F04 seat granted onwards): $25K account, $5,000 USDC, window 1 month (Nov 20 to Dec 20),
  today day 9: equity $5,184.60 (+$184.60, +3.69%). Daily loss limit $250, used today $62.10,
  resets in 6h 41m. Max loss floor $4,500.00. Open position $11,240 of $25,000.
- Payouts (F08): account started Nov 20, first payout from Jan 15, 2027 (week 8). At payout:
  profit above high water mark $1,240.50, trader 80% = $992.40, Bitso 20% = $248.10.
- Markets: BTC-USD, ETH-USD, SOL-USD, HYPE-USD, XAU-USD (gold, RWA), WTI-USD (oil, RWA),
  US500-USD (index, RWA), NVDA-USD and TSLA-USD (stocks, RWA). Gold mark 2,661.40.
- Aliases for others: ormond, tidewater, marlowe, vandal, sable_fx, quillon, nightjar,
  brasswork, 0xe03d…19f2, ferro, lumen.trade, okapi, 0x5be1…77c4. Never John Doe style names.

## Flows (each one ships as an independent project)

| Flow | Folder |
|---|---|
| F01 Onboarding | f01-onboarding |
| F02 Not qualified yet | f02-not-qualified |
| F03 Competing | f03-competing |
| F04 Seat claim (cycle close, request, allocation, activation) | f04-seat-claim |
| F05 Operating the funded account | f05-funded-trading |
| F06 Risk events | f06-risk-events |
| F07 Claims | f07-claims |
| F08 After the account | f08-after-account |
| F09 Deposit and withdraw (own account) | f09-money |

Screens and the question each one answers are in `src/manifest.json`. Each flow is built into
`dist/<flow>/` with its own index and kit. Links to screens of the same flow work. Links to other
flows are still written (they document where the product goes) but the build turns them inactive.
The header nav points by default to the first screen of the same flow with that `nav` key, or is
inactive when the flow has none; override with `links` when a different screen of the flow fits.
Each flow must make sense on its own: open it cold and the first screen sets the context.

## How to build a page

- Source: `src/pages/<flow-id>/<screen-id>.html`. First line is a JSON header:
  `<!--page {"nav":"home","header":"member"} -->`
  - `header`: `guest` (signed out), `member` (signed in, own account), `funded` (holds an account).
  - `nav`: which nav item is current: guest `season|leaderboard|rules` (the nav key stays "season"; the visible label is Cycle); member/funded
    `home|trade|leaderboard|stats|payouts`.
  - optional: `season` (HTML for the header chip text, default "Cycle 1 ends in 12d 04h"),
    `seasonPct`, `unread` (bell dot), `acct` ({"tag":"own|funded|paused|frozen|closed","label":"...","value":"$..."}),
    `links` (override header hrefs: home, trade, leaderboard, stats, payouts, acct, deposit, alias, signin),
    `noHeader`.
  - Everything after the header comment is the page below the app header: write a `<main>`.
- Placeholders: `{{root}}` (relative path to dist root), `{{icon:<lucide-name>:<extra classes>}}`
  (check the name exists in `node_modules/lucide-static/icons/`), `{{chart:<seed>:<base price>}}`
  candlestick SVG, `{{equity:<seed>:<w>:<h>:<trend 0..1>}}` equity curve SVG, `{{spark:<seed>:up|down}}`.
- Styling: use the kit classes in `src/kit/funded.css` (read it first). Page specific CSS goes in
  one `<style>` block at the end of the page. Do not edit `src/kit/funded.css` or `build.mjs`;
  if a shared component is missing, build it in your page style and name it in your report.
- Modals: render the page underneath inside `<div class="under" aria-hidden="true">…</div>`, then
  `<div class="scrim"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="…">…</div></div>`.
- Links: same flow by file name (`02-request-seat.html`); other flows as
  `{{root}}f05-funded-trading/01-home-funded.html` (made inactive by the build). Primary actions
  link to where they lead. Every `<main>` must contain at least one link to another screen of
  the SAME flow (the tests check it).
- Reference screens, match their quality and patterns:
  `src/pages/f03-competing/01-home-competing.html` (home, ladder, meters, tables) and
  `src/pages/f05-funded-trading/02-trade-funded.html` (terminal).
- Build: `node build.mjs`. Screenshot: `node shot.mjs dist/<flow>/<screen>.html .shots/<name>.png 1440 900 1`
  and LOOK at it with the Read tool. Check 1280 width too. Fix overlaps, wraps, overflow.

## Design rules

- Audience: pro traders (prop-firm challenge crowd, forex and futures traders, Hyperliquid natives).
  References: FTMO MetriX (rules as instruments), Topstep/Apex dashboards, Hyperliquid density.
  Avoid: casino aesthetics (confetti, neon, aggressive counters), crowded dashboards with many
  equal cards, generic SaaS heroes, marketing copy.
- Density: Trade is dense like the terminal. Home, Leaderboard, Payouts are calmer: one leading
  figure per screen and one primary action.
- Each screen answers one question (see manifest.json `answers`). Lead with the one number that
  answers it. Everything else is secondary or behind a link.
- Colour: violet `--primary` only for primary actions, selection and the trader's own row. Green
  and red only for PnL and pass/fail. Amber only for warnings. No gradients on text, no glows.
- Copy: English, sentence case, plain verbs, specific numbers. Buttons name the action
  ("Request seat", "Claim $992.40"). No em or en dashes anywhere (use commas, periods, "to").
  No eyebrow labels above headings. No exclamation marks. Errors and blocked states say what
  happened and what to do next.
- Desktop only (1280 and 1440). Pages must not scroll horizontally.

## Decisions from the first review (apply everywhere, they win over anything above)

Calendar and clock
- Cycle 1 "today" is **Nov 6, 10:00 UTC**: Cycle 1 closes in **11d 14h** (11 days left).
  Cycle 1 Oct 20 to Nov 18; requests Nov 18 00:00 to Nov 19 00:00 UTC; seats assigned Nov 19
  00:00; activation deadline Nov 21 00:00 UTC (48h, product assumption); every Cycle 1 account
  window starts **Nov 20 00:00 UTC**, activated or not. Cycle 2 Nov 19 to Dec 18 (requests Dec 18
  to 19). Cycle 3 Dec 19, 2026 to Jan 17, 2027 (requests Jan 17 to 18). Cycle 3 closes
  Jan 17, 2027 00:00 UTC (29 days).
- Each screen states its own date when it is not Cycle 1 "today" (small caption under the title
  or in the header cycle chip), so every screen reads correctly cold.

Honesty about the floors
- Never say "you could request" or "inside the seats" unless the trader meets all three floors.
  When a floor is unmet, the headline names the blocker ("4 more trading days to request a seat").
- Projected bands are computed among traders who meet (or can still meet) the floors. A trader
  whose max drawdown is already over 25% can never request this cycle: show "Can't request" and
  no band. Label bands on live boards "Projected".
- A brand new trader on Nov 6 cannot reach 15 trading days in Cycle 1 unless they have onchain.cc
  history since Oct 20. Say so and point to the Cycle 2 close (Dec 18) as their realistic request.

Rules wording (use exactly)
- Max loss: "10%, floor $4,500" on a $5,000 account (never "$500" alone).
- Daily loss: equity drop (realized plus unrealized) from the day's starting equity, limit 5% of
  the starting USDC ($250). Resets 00:00 UTC.
- Window end: "at or above $5,000 rolls over, below $5,000 closes". Rollover copy follows the
  chosen length (week, two weeks, month), never hard coded "month".
- Payout: paid profit is equity above the high water mark (the $5,000 start, or equity right after
  the last payout if higher). First payout after 8 full weeks (Jan 15 for a Nov 20 start) and only
  if the account is still live, i.e. it rolled over. Then monthly on the same day (Feb 15, Mar 15).
  Claims stay open until the next payout date. Claiming moves profit out, so equity returns to the
  high water mark: warn in amber when a window ends before the next payout date. Paid only to the
  onchain.cc wallet. No Bitso account destination.
- Deposits: from a wallet on Arbitrum, or from another chain by bridge. No card, no Bitso account
  source (both imply identity checks).
- Activation order: the trader signs (registers the trading key), then Bitso deposits the USDC, then
  rules switch on. Trading opens Nov 20 00:00 UTC.
- An unmatched fill freezes the account (F06). The payout fill review only checks; if it finds an
  unmatched fill, the account is frozen and the F06 flow applies.
- Funded trading does not count for the cycle leaderboard; only the own account does. Say it
  neutrally. Do not claim that closed accounts stay public on the profile.
- No "strikes", no penalties for a lost account besides one account at a time.

Seats display
- Alberto rejected the 60 square seat grid. Seats are read off the leaderboard as rank zones:
  #1, #2, #3 to #6, #7 to #21, #22 to #60, then a "last seat, #60" cut line. Use zones, never grids.

Colour
- Violet only for primary actions, selection, the trader's own row and own marker. Other traders'
  band chips use the band classes (the $25K chip is now neutral). No violet in data bars about
  other people or splits; use neutral or semantic colours.

Simplicity
- One leading figure and one primary action per screen. Each fact appears once per screen: no
  countdown three times, no table repeating a ladder, no aside repeating the lead. Prefer removing.
- No eyebrows above headings (small label lines above an h1/h2). Put a needed date or status in a
  caption below the heading instead.

## Decisions from the third review (binding, win over earlier sections)

- Two ranks, one concept. "Board rank" is the position among everyone on the leaderboard.
  "Seat #" is the position among traders who meet (or can still meet) the floors, and at the
  close among requesters. Always show them together the first time: "#17 on the board, seat #16".
  Leaderboards get a Seat column; "Can't request" and "No seat" live in that column. Band
  separators group by seat number, never by board rank. Drop "Projected band" columns where the
  separators already say it.
- Never state a projected band as a fact while a floor is unmet: "If you reach 15 trading days:
  $25K account ($25,000 max position, $5,000 USDC)".
- Time left in Cycle 1 on Nov 6 10:00 UTC: "11d 14h". Today's trade already counts, so the
  days still available for new trading days are Nov 7 to Nov 17: 11 days. Say "11 days left"
  everywhere, never 12.
- "1 month" window = 30 days. Cycle 1 accounts: window 1 Nov 20 to Dec 20, window 2 Dec 20 to
  Jan 19, window 3 Jan 19 to Feb 18. Every account window starts Nov 20 even if activated later.
- Colour: text links may stay violet (they are actions). Everything else that is not a primary
  action, selection or the trader's own row/marker is neutral: timelines, progress, meters that
  are not pass/fail, band chips of other traders, pills. Green/red only for PnL and pass/fail,
  amber only for warnings, blue only for system states (freeze, incident).
- Funded terminal: the liquidation price column becomes "Account close" (price at which the
  account would hit the 10% floor for that position alone). Remove news headlines, the leverage
  chip and the shortcut row. Keep: rule meters (fixed position, above the ticket on every
  terminal screen), pre-trade check, risk sizing, bracket orders, account lines on the chart
  (daily pause line first, then account close line), RWA market hours, economic calendar
  warning, rule log.
- Daily loss pause: product assumption to state once, neutrally, in the pause screen: open
  positions are closed reduce only and new orders are blocked until 00:00 UTC.
- Unactivated seats go to the next requester below the last seat. So on Nov 19 a trader just
  below the cut sees "Waitlist #13, final on Nov 21 00:00 UTC", not a final "no seat".
- When a screen shows a different trader than kestrel or a different moment, it says so in a
  caption under the title ("Another trader: ..." or "Example: ..."). F06 screens are separate
  examples, each with its own caption; they are not one timeline.
- Risk and rules copy never claims what BRIEF does not define. Where a rule is undefined, write
  the neutral fact or leave it out; the open questions go to Alberto.

## Canonical Cycle 1 board on Nov 6, 10:00 UTC (every flow uses these exact rows)

Board | Trader | Score | Net PnL | Return | Max DD | Trading days | Seat
#1 ormond 942.7, +$38,412.60, +61.2%, 18.3%, 18, seat #1
#2 tidewater 918.3, +$21,907.15, +48.3%, 12.1%, 17, seat #2
#3 quillon 903.8, +$9,884.30, +72.4%, 21.6%, 16, seat #3
#4 nightjar 887.2, +$14,120.44, +39.8%, 26.1%, 18, Can't request
#5 brasswork 869.5, seat #4 · #6 0xe03d…19f2 851.0, seat #5 · #7 ferro 838.4, seat #6
#8 lumen.trade 829.9 (14 of 15), seat #7 · #9 okapi 822.1, seat #8 · #10 0x5be1…77c4 815.6, seat #9
#11 halyard 809.3 · #12 corvid 803.7 · #13 0x2fa8…d051 798.2 · #14 meridian_k 794.0
#15 marlowe 788.9, +$1,904.12, seat #14 · #16 vandal 784.2, +$966.40, 13 of 15, seat #15
#17 kestrel 781.6, +$412.80, +32.1%, 11.4%, 11 of 15, seat #16
#18 0x91c2…4ab0 779.0, seat #17 · #19 sable_fx 776.3, seat #18 · #20 tamarind 772.8, seat #19
#21 0xc47e…0b9a 769.1, seat #20 · #22 pelorus 765.4, seat #21 (last $25K) · #23 gannet 761.0, seat #22 (first $5K)
#62 corsair_7 701.4, seat #60 (last seat) · #63 0x3e77…a915 699.6, No seat · #65 nadir 695.2, 27.4% DD, Can't request
2,314 traders on the board.

Zones by seat today: $200K seat #1 (ormond, 942.7), $100K seat #2 (tidewater, 918.3),
$50K seats #3 to #6 (lowest 838.4, ferro), $25K seats #7 to #21 (lowest 765.4, pelorus),
$5K seats #22 to #60 (lowest 701.4, corsair_7).

Aliases are people: one alias, one trader, everywhere. Do not reuse these aliases for other
ranks or other seasons with different numbers. For other moments or other traders invent new
aliases (examples: wren, basalt_k, tallow, juniper.fx, orrery, 0x7d21…a0c3).

## Alberto's answers, 2026-10-06 (binding: they win over EVERYTHING above)

Account and loss rules
- There is NO daily loss limit and no daily pause. Only one max loss rule on the funded account:
  - The account closes if equity falls 10% below the USDC Bitso delivered (floor $4,500 on $5,000).
  - Once profit reaches +10% (equity $5,500), the floor moves up to the delivered amount ($5,000).
  - Every claim of profits resets this: the floor goes back to 10% below the delivered amount until
    +10% is reached again.
- Position cap = SUM of all open positions' notional ($25,000 on a $25K account). Pending orders do
  not count until filled. Only hard limits block an order: the cap, allowed markets, cross margin.
- Stop loss is optional. The pre-trade check only informs (loss at stop, distance to the floor); it
  never blocks for risk.
- RWA markets trade exactly like crypto, also when the underlying market is closed. Session hours may
  be shown as information only.
- When an account is closed (floor or window end), the result is computed at the REAL closing prices
  of the positions, not at the mark read.
- Platform incident (onchain.cc or Hyperliquid down): open positions are closed automatically; the
  account stays active but cannot trade and has no open positions until service is back.
- Freeze (a fill not placed from funded.onchain.cc or onchain.cc): the trader can only reduce
  positions, TP/SL keep working, rules and window keep running; if Bitso confirms the breach the
  account closes and unpaid profit goes to Bitso; the trader can request a seat again unless abuse is
  proven. A frozen account at its window end closes.
- NOTHING can be appealed. No appeal screens, no appeal buttons.

Windows and payouts
- The trading window (1 week, 2 weeks, 1 month = 30 days) is chosen once, when requesting the seat,
  and rolls over with the same length. It cannot be changed later.
- The trader can claim profits AT ANY TIME, partially or fully. There is no week 8 and no monthly
  payout date. The high water mark stays at the delivered amount ($5,000); each claim splits 80% to
  the trader and 20% to Bitso and resets the loss limits as described above.
- At the end of each window, any unclaimed profit is claimed automatically (and the window rolls over
  if equity is at or above the delivered amount; below it, the account closes).
- Claims go to the trader's OWN Hyperliquid account (their onchain.cc trading balance). The funded
  account is a separate account Bitso manages and the trader partially controls.
- Before paying, an automatic check confirms every fill came from the terminal. It is instant; if a
  fill does not match, the account freezes. No review waiting screen.
- No history of past funded accounts is kept in the app.

Seats
- No separate activation step. Requesting a seat in the 24h window is the claim. When the window ends
  and seats are assigned, granted accounts are active immediately: accounts start Nov 19 00:00 UTC
  (window 1 of a 1 month account: Nov 19 to Dec 19, window 2 Dec 19 to Jan 18, window 3 Jan 18 to
  Feb 17). No activation deadline, no waitlist, no forfeited seats.
- Requests can be withdrawn and the window length changed until the 24h window closes.
- Requesting is a button. Terms are accepted once, when entering the product. No signature per
  request.
- A trader whose funded account closes during the 24h window can request in that same window if
  they meet the floors.
- Seats, bands and rules are published at the start of each cycle and fixed during it.

Cycle evaluation (own account)
- Only orders placed from onchain.cc or funded.onchain.cc count, and a trade counts only if it moves
  at least $50 notional and stays open at least 60 seconds (volume always counts).
- Only the allowed markets list counts.
- A trading day = a UTC day with at least one valid execution (open or close).
- Floors to request a seat: net PnL positive, 15 trading days, and the SAME loss rule as the funded
  account instead of the 25% drawdown: the trader must never have fallen 10% below their cycle
  starting capital; once they reached +10%, falling back below their starting capital also
  disqualifies. Measured on equity including unrealized, with deposits and withdrawals neutralized.
- Score: net PnL after fees and funding; return on starting capital plus net deposits, time
  weighted; balance factor time weighted. Each factor as a percentile among traders on the board,
  refreshed every minute, frozen at the cycle close. Ties: higher net PnL, then smaller worst loss.
- Entry minimums, once met, keep the trader on the board all cycle; requesting needs a $100
  balance or more at the close.
- Public profile: alias plus shortened wallet, closed trades public with a 24h delay, no hiding.

Identity, money in and out, other
- Deposits: each trader gets a deposit address (a smart contract) that accepts funds from any EVM
  chain or Solana and moves them automatically to their Hyperliquid account. Withdraw: a button that
  asks for a destination address and an EVM network; funds arrive there.
- Notifications: email (from Privy, or optional in settings) plus the in-app bell, key deadlines on
  by default.
- Alias can be changed freely. Referrals work exactly as onchain.cc's existing referral program (no
  new rules on screen).
- Signing in with a different method than on onchain.cc simply creates a new account, no warning.
- No separate terms page in the product. A VPN user is treated as located where the VPN is.

## Alberto's answers, round 2 (2026-10-06 evening). BINDING, wins over everything above

Two different accounts, never mix them on a screen
- OWN ACCOUNT (the trader's money, their onchain.cc Hyperliquid account): deposit (USDC only, via the
  personal deposit address), withdraw, trade, and compete in the cycle with it. Claimed profit from
  the funded account lands here. It has NO liquidation rule of ours; the cycle only has requirements.
- FUNDED ACCOUNT (Bitso's USDC, a separate account Bitso manages and the trader partially controls):
  the trader trades it, cannot deposit into it, and can only take money out by claiming profit.

Funded account size and liquidation
- The account holds its full size in USDC: $5K = $5,000, $25K = $25,000, $50K = $50,000,
  $100K = $100,000, $200K = $200,000 (the old "20% tranche" is gone). Same 60 seats in Cycle 1.
- Liquidation level starts 10% of the size below the start ($22,500 on a $25,000 account), measured on
  equity (realized plus unrealized). It TRAILS the highest equity, always 10% of the size below it
  (peak $26,000 means liquidation $23,500), and stops rising once it reaches the starting size: from
  equity $27,500 upward the liquidation level stays at $25,000. Reaching it closes the account for
  good (at real closing prices).
- Leverage or a position cap of our own is NOT defined. Do not quote a cap rule. The hard limits that
  block an order are allowed markets and cross margin only.

No windows at all
- There are no trading windows, no window choice, no rollover, no automatic claim, no window end. The
  account lives until it is liquidated or a freeze is confirmed. One funded account at a time.

Claims
- To claim, ALL positions must be closed. A claim always takes ALL profit above the starting size (no
  partial claims, no choosing an amount), split 80% to the trader's own account and 20% to Bitso. After
  a claim the account resets: equity back to the size, liquidation back to 10% below it.
- Unrealized profit can never be claimed (positions must be closed).

Cycle (own account)
- The cycle requirement that replaced the 25% drawdown uses the same shape, as a REQUIREMENT, not a
  liquidation: never fall 10% of your cycle starting capital below your highest equity, until you are
  10% up, after which you must not fall below your starting capital. Breaking it means you cannot
  request a seat this cycle; nothing is closed.

Deposits: USDC only, any EVM chain or Solana to the personal address. Withdrawals: address plus EVM
network.

Design decisions taken by the agent with Alberto's leave: drop the Band column from leaderboards (the
zone separators already say it); primary actions stay violet; how long Bitso takes to confirm a freeze
is not stated anywhere.

## Final consistency rules (2026-10-06 night)
- Cycle rule name everywhere: "Drawdown requirement" (column "Drawdown", values Kept / Broken), its level is "your line". Never "loss rule", never "floor", never "liquidation" for the own account.
- The funded liquidation shown in F06 02 is canonical for the same event in F08 01: $25K account, peak $26,140.00 on Nov 30, liquidation level $23,640.00, closed at real prices $57.00 below, $23,583.00 back to Bitso; earlier claim $923.00 profit, $738.40 to the own account, $184.60 to Bitso; own account balance after: $2,022.60.
- F05 funded demo: equity $25,923.00 = highest equity, liquidation $23,423.00, lock at $27,500.
- Every figure carries its account (Own or Funded tag) where both could be meant. The Funded tag is gold, the Own tag neutral.

## Alberto's answers, round 3 (2026-10-06 night). BINDING, wins over everything above
- Leverage: no limit of ours. The trader can open what Hyperliquid allows per market, cross margin. The trailing liquidation is the only brake. Never quote a cap.
- Equity for the trailing liquidation is measured at Hyperliquid's mark price.
- NO freeze state. A funded account is either active or liquidated. Orders from outside funded.onchain.cc or onchain.cc cannot happen (the trading key only works from our terminals), so never mention freezing, unmatched fills or a fill check before claims.
- During a platform incident the account stays active; once its positions are closed it can claim like any time it is flat.
- Deposits to the own account: no fee and no minimum. A token that is not USDC is not credited and stays at the deposit address; promise nothing about recovering it.
- A claim landing in the own account counts as a deposit for the cycle: no PnL, no return, no effect on the drawdown requirement.
- US visitors get the same treatment as on onchain.cc; no screen of our own.

## Rules from the blind critique (2026-10-06 night)
- The leaderboard cut row is NOT sticky. It sits in the row flow at the real cut; when the cut is off screen a small "Last seat #60, 701.4" chip shows in the table header. No tooltip is open by default.
- Never show demo framing as product copy ("Example: ...", "Another trader, ...", "separate case"). If a screen needs that context for the reviewer, use the kit .mock-note box, outside product panels, at most one per screen.
- Write the liquidation rule as "$2,500 (10% of the $25,000 size) below your highest equity", never "10% below the highest equity".
- One leading figure per screen, one layout width per flow for sibling screens (Home states share one grid).
- Neutral zone styling on leaderboards (no gold/silver/bronze medal colours); violet only for primary action and own items.
- Every number on a screen must reconcile with the others on that screen and the flow. When a figure is derived, the base is visible (e.g. return on what).
- Undefined values (withdrawal network fees, arrival times) appear once per screen as a single small "Example values" note, not as chips on each value.
- Do not apply critic suggestions that contradict BRIEF (e.g. promising recovery of non-USDC tokens, adding a freeze state, caps).

## Public payouts (2026-10-06, Alberto: payouts must be visible to everyone)
- A public "Payouts" page in the main nav for everyone (guest, member, funded): nav key `payoutsall`. In the funded nav "Payouts" (everyone's) sits next to "Claims" (yours).
- It shows: total paid to traders (their 80%), number of payouts, largest payout, traders paid; then a list of every claim: alias or short wallet, account size, amount received by the trader, date, onchain transaction link. Filters by cycle and account size; a "top earners" view. The claim the trader made appears with the YOU tag for members.
- The landing shows a compact strip: total paid, number of payouts and the latest few, linking to the full page. The public trader profile shows total claimed.
- Only paid claims appear (no unrealized, no pending). Amounts are the trader's 80%.
