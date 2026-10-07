# Review: F05 Operating the funded account (round 2)

Scope: 5 screens at 1440, sources in `src/pages/f05-funded-trading/`. Flow date Sat Nov 28, 17:19 UTC, day 9 of the Nov 20 to Dec 20 window, Season 2 running.
Arithmetic checked and correct on every screen: sizing (40 / 40.00 = 1.00 oz), order values, cap ($11,240 + $20,148 = $31,388), daily loss ($62.10 + $198.71 = $260.81), fill effects (equity $5,183.20, avg entry 2,662.04, $11,099 free, all stops -$148.62), close prices (2,415 and 2,481), reset 6h 41m to 00:00, funding 00:41 to 18:00. Nov 28 is a Saturday, so the weekend chip is right.

## 01 Home, funded account

**Question:** How is my account doing against its rules? **Yes**, the first viewport answers it: one sentence under the equity figure, then three meters.

**Components**
- Equity hero ($5,184.60, +$184.60 / +3.69% pill, Trade button): KEEP. Right lead for a funded trader.
- Status sentence "Every rule is inside its limit. $187.90 ... $684.60 ...": CHANGE to "Every rule is inside its limit." Both figures repeat in the meters 100px below.
- Timestamp "Sat, Nov 28, 17:19 UTC": KEEP (states the date cold).
- Account rules card, 3 meters: KEEP. This is the FTMO MetriX pattern pros trust.
- "All inside" green chip: REMOVE, repeats the sentence.
- Meter footnotes (3 lines each): CHANGE to one line each; the full definition belongs on Rules, a "How rules count" link is enough.
- Max loss meter "$0 of 10%, floor $4,500": CHANGE. "$0" reads as broken while equity is above start. Lead with "$684.60 above the floor", keep "10%, floor $4,500" as the label.
- Open position meter: CHANGE bar colour from violet to neutral (data bar, not selection).
- Window chart (start, floor, today marker): KEEP. Add the high water mark only once a payout exists (not now).
- Chart caption "At or above $5,000 on Dec 20 it rolls over into a new month. Below $5,000 it closes.": KEEP, matches Decisions wording.
- "Your account" card (Earned in Season 1 rank #17, split 80/20): REMOVE "Earned in". History, not account health. Split moves into the payout line.
- "First payout Jan 15, 2027" as a large figure: CHANGE to one line ("First payout Jan 15, 2027, if the account rolls over Dec 20. 80% to you.") It is a second leading figure competing with equity.
- "Own account, Season 2, #44 with $1,284.20" card: KEEP small. Necessary context (funded trading does not count, can't request while live) and the only path to switch from Home besides the header chip.
- "Today, Nov 28" closed trades table: KEEP, it explains the daily meter. CHANGE: add "Day start equity $5,246.70" to the table header, it is the number the daily rule is measured from.

**Missing:** none essential. A daily pause line on the window chart is not needed here (it belongs on the Trade chart).

**Superfluous or repeated:** $187.90 and $684.60 twice; "All inside" vs sentence; payout date as a hero.

**Inconsistencies**
- Today's realized PnL sums to exactly -$62.10, the same as daily loss used, while open positions show +$58.78 unrealized. Under the Decisions definition (realized plus unrealized from day start) this only works if unrealized was also +$58.78 at 00:00. A pro will read it as "daily loss is realized only". Change the demo trades so realized and daily used differ (e.g. realized -$48.40, unrealized change -$13.70).
- Chart x axis is not linear: Nov 20 to Nov 28 spans 254px, Nov 28 to Dec 10 (12 days) only 311px.
- Violet on the Open position bar breaks the colour rule.

**Hierarchy:** two big numbers (equity, Jan 15) fight. Right column cards have equal weight to the rules card.

## 02 Trade, funded account

**Question:** Trade within the rules, with the risk of each order shown before I send it. **Yes.** Ticket, pre-check and rule panel are all above 900.

**Components**
- Market header (mark, oracle, 24h, OI, volume, funding countdown, underlying market status): KEEP. Oracle and funding are what Hyperliquid natives check.
- "Underlying market: Weekend, reopens Sun 23:00 UTC": KEEP, CHANGE: when the underlying is closed, add one amber line in the pre-check ("Gold market closed, oracle frozen until Sun 23:00 UTC, weekend gap risk"). That is where it changes a decision.
- Chart with order lines, draft lines with $ at stop and at TP: KEEP.
- "Account closes near 2,415 if XAU alone falls" line + "$684.60 to the floor": KEEP but CHANGE: the binding constraint today is the daily pause, near 2,594 ($187.90 / 2.78 oz). Show the pause line first, the close line second.
- "Account lines" toggle: KEEP.
- "Indicators", timeframes: KEEP.
- "3 headlines today": REMOVE (see pro judgement below).
- Order book with 0.1 / 1 grouping: KEEP.
- Ticket: Long/Short, Market/Limit/Pro, Risk $ / Size toggle, risk + stop, TP with R multiple, bracket checkbox: KEEP. Default to Risk $ on the funded account.
- "Cross 20x" chip: CHANGE. On a $5,000 account with a $25,000 cap, the cap binds at 5x account leverage; a 20x control is noise and invites the question "can I use 20x?". Show "Cross, cap $25,000" read only.
- Sizing sentence "Size works out to 1.00 oz, $2,661.60. It adds to your 2.78 oz long with its own stop.": KEEP, this is exactly the sentence a forex trader wants.
- Pre-check block (stop risk 21% of today's room, open position after fill, fee): KEEP, CHANGE to a single line when everything passes ("Within rules. At stop -$40.00, 21% of today's room. Fee $1.20"). The "Open position after fill $13,902 of $25,000" repeats the rule panel meter right below.
- Place long button: KEEP.
- Shortcut row "B long S short X close all": REMOVE from the ticket, keep the "Shortcuts" link. "X close all" on a funded account is a dangerous default and needs a confirm.
- Positions table: KEEP. CHANGE "Liq. price" to "Account close" price. Liquidation at 890.60 is unreachable; the account closes at 2,415 first. The liq column misleads on a funded account.
- "Loss at stop" column: KEEP, it is what the daily rule uses.
- Tabs Positions, Open orders, Trade history, Funding, Rule log, CSV: KEEP. Rule log is a trust feature (every check and every pause, timestamped).
- Cross margin footnote: KEEP.
- Account rules panel (daily, max, open position + 2 notes): KEEP meters, CHANGE notes to one link. Open position bar violet again.
- "$25K" chip violet in the rules panel: CHANGE to the band class (own marker is arguable, but it is a label, not selection).

**Missing**
- Daily pause price for the current position set (see chart above).
- Aggregate stop risk: "If every stop fills -$108.82 of $187.90" is shown only on 05. It belongs on 02 too; it is the number that decides the next order.

**Superfluous or repeated:** open position after fill (ticket and panel), daily room (ticket, chart, panel), rules notes duplicated with Home.

**Inconsistencies**
- Closed trade on Home at 14:22 UTC Saturday on XAU-USD while the underlying is "Weekend". Fine if the perp trades 24/7, but then the screen must say the perp trades and the oracle is frozen. Today it reads like a contradiction.
- Draft TP label appears on 02 chart but not on 03 (03 has TP 2,714.10 in the ticket, no line).
- Colour rule: Long tab selected and the Place long button are green, not violet. Trading convention says green is right; Decisions say violet for primary action and selection. Needs an explicit exception (question below).

**Hierarchy:** dense but readable. The ticket stacks four bordered blocks; collapsing the pre-check to one line brings Place long up by ~70px.

## 03 Order over the limit

**Question:** Why can't I send this order? **Yes.** "2 account rules would break", each with its number, a fix button and "Nothing was sent to Hyperliquid".

**Components**
- Red input borders on size and stop: KEEP.
- "Order value $20,148. Risk to stop $198.71." KEEP.
- Rule break block: one-click fix "Use 5.16 oz, fixes both" with risk at 5.16: KEEP, best element of the flow.
- Per rule explanations: KEEP cap, CHANGE daily: "At 7.57 oz the widest stop that fits is 2,636.80" is useless advice because 7.57 oz still breaks the cap. Remove that sentence.
- Disabled button "Place long, fix 2 rules first" + "Nothing was sent to Hyperliquid": KEEP.
- "Back to 1.00 oz": KEEP.
- "Account rules, after this order" panel with over-limit hatch: REMOVE or reduce to the meters without numbers. It repeats $260.81, $198.71 and $31,388 that the block already states in red.
- Chart "Not sent, -$198.71" draft line: KEEP.

**Missing**
- What happens to an order with no stop. If a stop is optional, the daily check has nothing to measure; if mandatory, the ticket must say so. Undefined.

**Inconsistencies**
- "Daily loss would break" describes a worst case at the stop; nothing breaks at send time. The headline should separate a hard block (cap, sending is refused) from a stop risk block. Whether stop risk blocks or warns is a product rule (question below).
- Rules panel figure "$260.81 of $250" in white while the ticket shows it red.

**Hierarchy:** the red block is long (8 lines). Lead with the fix button, one line per rule.

## 04 Switch account

**Question:** Move between my own account and the funded one. **Yes.** Two cards, funded selected, one sentence on what follows the switch.

**Components**
- Popover from the header chip: KEEP.
- Funded card ($5,184.60 equity, "Bitso's USDC. Account rules check every order."), selected: KEEP.
- Own card ($1,284.20 balance, "Trades count for Season 2."): KEEP.
- Info line "The ticket, positions and orders follow the account you pick. Funded positions keep running...": KEEP.
- Amber "Switching clears your draft order": KEEP, exactly the kind of warning a pro needs.

**Missing**
- Distinct visual identity per account in the terminal after switching (e.g. ticket header "Trading: Own account"). Placing a funded order thinking it is the own account, or the reverse, is the main risk of this feature. The header chip alone is small.
- Own card should state the own account has no rules but does count for Season 2 rank (#44), so the cost of trading badly there is visible.

**Inconsistencies:** none with the Brief. The header "+" button next to the chip is ambiguous on a funded account (deposit into which?).

## 05 Order placed

**Question:** My order went in. What did it change in my limits? **Yes.** Rules panel moves to the top with "Was" values, toast confirms the fill.

**Components**
- "Account rules, after this fill" with Was values: KEEP. Clear and precise.
- "If every stop fills -$148.62 of $186.50": KEEP, and add it to 02 permanently.
- "Account close, XAU alone 2,481 was 2,415": KEEP.
- Toast "Filled, long 1.00 oz XAU at 2,661.60. Stop and TP placed. Fee $1.20. Trade again": KEEP, CHANGE "Trade again" to nothing (the ticket is right there) or to "View order".
- Positions row "+1.00 now" with merged brackets: KEEP.
- Cleared ticket "Ticket cleared. Set a stop to size the next order.": KEEP.

**Inconsistencies**
- Layout jump: the rules panel moves from below the ticket (02, 03) to above it (05). The ticket moves 330px down after every fill. Keep the panel in one place and highlight changed rows instead.
- Header chip $5,183.20 updated, good; the window chip did not need to change.
- Toast sits at the bottom right below the fold of the ticket column at 900 height; fine at 1440x900, check 1280.

## Flow

Sequence: home, trade, blocked, switch, placed. Complete for the happy path and one block. Missing states, in order of value:
1. RWA order while the underlying is closed (warning in the pre-check). The demo is already on a Saturday.
2. Resting limit order (05 assumes instant fill at the ask). A "Placed, resting" variant shows how open orders count toward the cap.
3. Exchange rejection (Hyperliquid refuses: margin, slippage, post only). Different from a rule block; it must say "Hyperliquid rejected" not "rules".
4. Disallowed market selected (the `#markets` link exists, no state shows what a not allowed market looks like in the selector).
Not missing here: paused and frozen live in F06.

Redundant: none, 5 screens is the right count.

## Pro trader judgement on components onchain.cc does not have today

| Component | Verdict | Why |
|---|---|---|
| Rule meters | Earns its place | The core of every prop dashboard (FTMO, Topstep, Apex). Show once per screen, not three times. |
| Pre-trade check | Earns its place | It is the product: prevents losing Bitso's account by a fat finger. One line when it passes, expanded only on a break. |
| Risk sizing (Risk $ + stop) | Earns its place | Forex and futures prop traders size by risk, they use external calculators today. Make it the default on funded. |
| Bracket orders (TP/SL, OCO, R multiple) | Earns its place | Standard on every serious terminal; prop traders expect every entry with a stop. |
| Account lines on chart | Earns its place, if right | Order and draft lines with $ are standard. The account close line is a strong idea, but the pause line matters more day to day. Keep the toggle. |
| Attention / news ("3 headlines today") | Noise | Pros have their own feed (X, Bloomberg, TradingView). A headline count adds attention, not decisions. If anything, replace with an economic calendar marker (CPI, NFP, FOMC) on RWA markets, because props usually care about news windows. |
| RWA market hours | Earns its place | Weekend gaps with a frozen oracle are the biggest hidden risk on gold, oil, index and stock perps. Show it in the ticket at the moment of ordering. |
| Liq. price column, 20x leverage chip, shortcut row | Noise on funded | The account closes long before liquidation and the cap binds at 5x. |
| Rule log tab | Earns its place | Audit trail is what makes a trader trust an automated rule engine. |

## Fix list

MUST
1. 02/03/05: replace "Liq. price" with "Account close" price on the funded account; liquidation is unreachable and misleads.
2. 02: show the daily pause price on the chart and "If every stop fills" in the rules panel (today only 05 has it). The daily rule binds first (about 2,594 vs 2,415).
3. 03: remove the "widest stop at 7.57 oz" sentence (still breaks the cap) and drop the repeated numbers in "Account rules, after this order".
4. 01/02/03/05: Open position bar and band chip from violet to neutral (colour rule).
5. 01: fix demo data so today's realized PnL is not equal to daily loss used, otherwise the daily rule reads as realized only, contradicting Decisions.
6. 02/03/05: keep the rules panel in one position across states; no 330px ticket jump after a fill.
7. 02: add the RWA closed market warning to the pre-check when the underlying is closed.

SHOULD
8. 01: remove "Earned in", demote First payout to one line, remove "All inside" and the repeated figures in the status sentence.
9. 01: Max loss meter leads with "$684.60 above the floor", not "$0 of 10%".
10. 02: pre-check collapses to one line when it passes; remove "open position after fill" there (panel has it).
11. 02: "Cross 20x" becomes read only "Cross, cap $25,000".
12. 02: remove "3 headlines today".
13. 02: remove the shortcut row from the ticket; "X close all" needs a confirm on funded.
14. 04: show the active account in the ticket header after switching.
15. 05: drop "Trade again" from the toast.

COULD
16. 01: linear x axis on the window chart.
17. 01: add day start equity $5,246.70 to the Today table header.
18. 03: draft TP line on the chart as on 02.
19. Add a resting limit state and a Hyperliquid rejection state to the flow.
20. Economic calendar markers for RWA markets instead of headlines.

## Undefined product rules (questions for Alberto)

1. Is a stop mandatory on funded orders? If not, what does the daily check measure for an order without a stop?
2. Does stop risk over today's room block the order, or only warn? Only the cap is a true hard limit at send time.
3. Is the daily check per order alone ("checks count each order alone") or against the sum of all open stops? Per order lets five orders each pass and together exceed the day.
4. When the daily limit is hit, are open positions closed, or only new orders blocked until 00:00 UTC?
5. Can the funded account open RWA positions while the underlying market is closed (weekend, nights)?
6. Do resting limit orders count toward the $25,000 cap, or only filled positions?
7. Leverage: is there a per market maximum on funded, or only the $25,000 cap?
8. Colour exception: may Long/Short and the Place button stay green and red (trading convention), against "violet only for primary action and selection"?
9. What does the header "+" do on a funded account (deposit is impossible there)?
10. Are links (How payouts work, Shortcuts, Back to 1.00 oz) allowed in violet?
