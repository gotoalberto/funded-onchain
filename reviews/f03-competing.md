# F03 Competing, review (rf7, 2026-10-06 night, after round 3)

Screenshots: `.shots/rf6-f03-competing-<screen>.png` at 1440 (all seven, rebuilt), plus
`.shots/rf7-f03-04-score.png`, `rf7-f03-05-trade.png`, `rf7-f03-04-1280.png`,
`rf7-f03-05-trade-1280.png` after the fixes. Judged against BRIEF, round 3 first.

Round 3 sweep over every source in the flow: no freeze, frozen account, unmatched fill or fill
check; no position cap, leverage cap of ours, deposit fee or minimum; no trading window,
rollover, automatic or partial claim, 20% tranche, $4,500 / $5,500, daily loss, appeal,
activation, waitlist, Band column. The season rule is "Drawdown requirement" everywhere
(column "Drawdown", Kept / Broken, "your line"). Only own account figures appear; the header
chip is tagged Own. "Frozen at the close" refers to the score and stays.

## 01 Home, competing
Question: am I inside the seats, and what moves my score? The first viewport answers it: the
headline names the blocker (4 more trading days), "#17 on the board, seat #16", the band is
conditional, seat map with points to each zone, Trade as the one primary action.
- Keep everything. Drawdown meter arithmetic checks: start $1,286.00, +$412.80 = +32.1%,
  line $871.40 = $1,286.00 less $414.60 withdrawn, equity $1,284.20 is $412.80 above it.
- No MUST.

## 02 Leaderboard
Question: where am I against everyone else? Answered by the own bar and the seat map. Canonical
rows, seat numbering (#4 and #58 skipped, board #62 holds seat #60), 2,314 total, 186 can't
request: all agree with BRIEF. No Band column. Keep.
- No MUST.

## 07 Leaderboard, around the cut
Question: who is fighting for the last seats, and how far am I? Answered. 2,314 less 186 =
2,128 counted; board #63 and below = 2,252. "Accounts are live at once" matches the answers
(no activation step). Keep.
- No MUST.

## 03 Trader profile (drawer over the leaderboard)
Question: how is the trader above me doing it? vandal vs you by factor, points sum to the 2.6
gap, public data with a 24h delay, alias plus shortened wallet. Keep.
- No MUST.

## 04 Score breakdown
Question: how is my score built and what would raise it? Lead 781.6; weights x percentiles
sum to 781.6; simulator +28.1 to 809.7.
- SHOULD, fixed. "Requirements, projected 3 of 3" while Home lists four (15 trading days,
  drawdown requirement, net PnL positive, $100 balance at the close) and 07 step 2 also names
  four. Now "4 of 4", caption "Now 3 of 4: net PnL positive, drawdown requirement kept, $100
  balance. 4 trading days still needed."
- SHOULD, fixed. Round 3 rule missing where the score is defined: a claim landing in the own
  account counts as a deposit. Added to the Net PnL tooltip: "Profit claimed from a funded
  account counts as a deposit, not PnL."

## 05 Trade, own account
Question: trade with my own money while the season runs. Terminal, ticket with risk sizing,
pre-trade information, season panel. Ticket arithmetic checks (0.0242 BTC, -$12.83, +$25.65,
$399.97 above your line).
- SHOULD, fixed. "Leverage after fill 2.4x of 10x" read as a cap. Round 3: never quote a cap.
  Now "2.4x". The ticket's "Cross, 10x" stays: it is the trader's own Hyperliquid leverage
  setting on the own account, not a rule of ours. "Liq. price" in positions is Hyperliquid's
  own liquidation on the own account; kept.

## 06 Stats
Question: how good is my trading, really? Lead +$412.80. Calendar, months, long/short and
by-market totals all reconcile to 67 trades, 11 days (8 green, 3 red) and +$412.80. Keep.
- No MUST.

## Cross screen
- Score, rank, seat, net PnL, return, trading days and balance agree on every screen.
- Every `<main>` links to another F03 screen; tests pass.

## Left undefined
- How a claimed amount, counted as a deposit, enters "Return on capital" (time weighting) is
  not shown; the tooltip states the rule only.
