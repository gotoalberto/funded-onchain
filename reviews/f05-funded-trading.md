# F05 Operating the funded account, review rf7 (final, after round 3)

Reviewer: senior product designer for pro traders, flow seen cold.
Sources: BRIEF.md (round 3 first, then Final consistency rules, round 2, 2026-10-06 answers), manifest.json, funded.css, src/pages/f05-funded-trading/*.html, 6 screenshots at 1440, 02 also at 1280.

Overall: the flow already follows round 2 and round 3. $25K account holding $25,000, trailing liquidation $23,423.00 off the highest equity $25,923.00, lock at $27,500, claims only when flat and always all profit, 80/20 to the own account. Only allowed markets and cross margin block an order; the pre-trade check informs. Searched every source for freeze, frozen, unmatched fill, fill check, leverage or position cap, deposit fee or minimum, window, rollover, automatic or partial claim, 20% tranche, $4,500/$5,500, daily loss, appeal, activation, waitlist, Band column, drawdown or floor wording: none on screen. Own and funded figures never share a block; Funded tag gold, Own tag neutral.
Every figure reconciles (PnL, liquidation at price per position, all stops, fee, average entry, header chip after the fill, 80/20 split).

## 01 Home, funded account
Question: how is my account doing against its rules? First viewport: equity $25,923.00, "$2,500.00 above liquidation, a new high today", liquidation $23,423.00 and $1,577.00 to the lock. Answered.
- Keep: equity hero with Trade (one violet action), Liquidation block with the stair chart, open positions with "Liquidation at", Claim aside (glass, says why it is not available yet), Own account card.
- SHOULD (fixed): the rule text said equity is "realized plus unrealized" without the price source. Round 3 defines it: now "read at Hyperliquid's mark price".
- OK: $56,199.71 of open notional on a $25,000 account. No cap of ours exists, nothing on screen suggests one.

## 02 Trade, funded account
Question: trade within the rules, with each order's risk shown before sending. Answered by the rules panel above the ticket, the informational pre-trade check and the account lines on the chart.
- SHOULD (fixed): liquidation tooltip now says "equity at Hyperliquid's mark price" (also in 03, 04, 05).
- SHOULD (fixed): the RWA strip read "Underlying market: Closed" next to "Ready to send", which a trader reads as "can't trade". Now "Closed, perp trades" (also 04, 05). Fits at 1280.
- Keep: session strip as information, economic calendar chip, draft TP/stop and "Liquidation 2,481.54, XAU alone" on the chart, book, rules panel, ticket tagged "Funded $25K account" with Switch, risk sizing, bracket, informational check, violet "Place long on funded account".
- Checks: 5.00 oz = $200 / 40.00; $13,308.00; fee $5.99; at stop equity $25,717.01, $2,294.01 above liquidation; all stops -$544.08, $1,955.92 left. Correct.
- COULD (left): "Cross margin, $5,619.97 used" is Hyperliquid margin, not a rule of ours; useful to a pro, no limit implied.

## 03 Order on a market not allowed
Question: why can't I send this order? Answered: "ORDI-USD is not on the allowed list", nothing sent to Hyperliquid, two ways forward, locked button.
- Keep as is. One term ("allowed list") in pill and check. The own account path says honestly that ORDI does not count for the season.

## 04 Switch account
Question: move between own and funded. Answered: popover from the header chip, funded selected in violet, own neutral, each with tag and leading figure, one line on what follows the choice.
- Keep as is. "No deposits; profit leaves only by claiming" and "Claimed profit lands here" match round 2.

## 05 Order placed
Question: what did my order change in my limits? Answered: toast "Filled on funded account", "$2,493.01 away, was $2,500.00", highest equity unchanged, all stops -$743.08 and $1,749.93 left, "+5.00 now".
- Checks: equity $25,916.01 (fee $5.99 plus $1.00 spread), average entry 2,662.04, PnL -$12.12, XAU alone 2,529.49, ETH alone 3,471.88, margin +$1,330.70. Correct.
- Keep as is.

## 06 Liquidation locked at the start
Question: I'm 10% up, where is my liquidation and why won't it rise? Headline "Liquidation locked at $25,000", the stair chart flattening at the lock, one honest sentence on real closing prices.
- Checks: claim $2,562.00, $2,049.60 / $512.40, "Then $25,000, liquidation $22,500". Chart on Nov 28 matches 01. Dec 7 2026 is a Monday, 10d 09h to Dec 18. Correct.
- Keep as is. Trade stays the one violet action; Claim is glass.

## Cross-screen
- Dates: 01 to 05 Sat Nov 28 17:19 UTC, "Season 2 ends in 19d 06h"; 06 Dec 7 14:03 with an Example caption.
- Terms: Liquidation (funded only), allowed list, Claim, Funded/Own tags. No Drawdown requirement on these screens (no own season figure is shown).
- Colour: violet only for Trade, Place, selected side, selected account and the equity dot. Green/red only for PnL, TP/SL and pass/fail. Amber only for the off-list pill.

## Left undefined (not invented)
1. Whether the funded allowed list and the season list are always the same list (03 assumes the brief's single list).
2. Whether "Liquidation at" per position and "at stop" figures use the mark, as the account equity does (assumed mark, stated in the footnote).
3. Content of the Rule log tab now that the only rule is the trailing liquidation.
