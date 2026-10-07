# Critique: f06 Risk events

Independent screenshot critique, 1440 desktop, demo data. Two screens: account liquidated, platform incident.

I checked every figure. The arithmetic holds on both screens: 26,140 minus 2,500 is 23,640, minus 57.00 of slippage is 23,583.00. On screen 2, the two PnLs add up to +200.81, the liquidation is 25,923 minus 2,500 and the distance is 2,406.93. The math is not the problem. What hurts trust is how the numbers are framed and labelled.

## 01 Account liquidated
Question: my equity reached the liquidation level. What happened and what do I keep?

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 7 | 6 | 7 | 6 | 7 |

Problems and fixes
1. **"What do I keep" is ambiguous.** "$738.40, Your 80% of the Nov 28 claim" does not say whether this money is already paid, still pending, or lost. A trader who has just been liquidated reads "Yours to keep" and still wonders whether the liquidation took it. Fix: state the status inside the figure block ("Paid to your Bitso balance, Nov 28" or "Pending, arrives Dec 3"), and add a line that says the liquidation does not touch it.
2. **The story is buried in a comma-heavy paragraph.** The lead text crams four numbers into one sentence (23,640.00, 2,500, 26,140.00, then "you owe nothing"). Fix: turn it into a three-step mini timeline or ladder: Highest equity 26,140.00 → Liquidation level 23,640.00 (2,500 drawdown) → Final equity 23,583.00 at 15:20. Then "You owe nothing" on its own line, in bold, because it is the line that calms people down.
3. **The scaffolding leaks into the product and the page is lopsided.** "Example: Wed, Dec 2, 15:20 UTC. A separate case from the platform incident." is meta copy for a reviewer, not product copy. A third of the viewport below the fills table is empty, and there is no visual of the equity hitting the level. Fix: drop the example line (the date goes into the badge or the timeline). Use the space for a small equity sparkline with the liquidation line and the 15:20 hit marked. A pro trader trusts a chart more than prose.

Smaller points
- In the fills table, the column header "Closed" holds the values "Long" and "Short". Rename it "Side". The total label "Total difference from the liquidation level" should read "Slippage vs liquidation level". Add the fill time per row.
- The Season 2 requirement "9 more trading days (6 of 15)" is prose. Make it a progress bar beside "Go to Season 2", so the CTA reads as the next step and not as an upsell.
- The global nav has no Claims tab here but does on screen 2. The nav has to be identical across states.
- In the top pill, "Dec 2 Season 2 ends in 15d 08h" glues the date to the label. Separate them or drop the date.

Keep: the two side-by-side figures with the Own and Funded tags ("Yours to keep" vs "Returned to Bitso"). Splitting the money this way is exactly right, and the fills table with mark vs real fill is a strong, honest trust device.

## 02 Platform incident
Question: orders can't reach Hyperliquid. What happened to my positions and my account?

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 6 | 5 | 5 | 6 | 5 |

Problems and fixes
1. **The primary action is wrong for the moment, and its amount is misleading.** The banner's leading figure is "+$200.81 Realized by the closes", with "Claim profit" right under it. That reads as "claim $200.81". The rules panel, though, shows profit above $25,000 as $829.93, and the 80% share would be about $663.94. Three different numbers, and the button says nothing about which one it pays. In an outage, a big violet CTA to withdraw is the wrong first message. Fix: lead with status ("Positions closed. Account active. Trading resumes when service returns"). Show the claimable amount explicitly ("Claim $663.94, 80% of $829.93") as a secondary action, and rename "Realized by the closes" to "PnL from forced closes".
2. **The trading terminal dominates a screen where trading is impossible.** The chart takes about 45% of the viewport and the order panel becomes a huge empty "Trading off until service is back" box. The closed positions, which are the actual answer, sit at the bottom in a tab. Fix: on incident, collapse the chart to a short strip or keep it at reduced height. Move the forced-close table directly under the banner. Replace the empty order box with an incident card that shows when it started (14:31 UTC), its current status, the last update time, a link to the status page and a "notify me when back" toggle.
3. **The banner introduces a new teal or cyan hue and a stock icon.** The palette is near-black, violet and green/red. The teal banner with the radio-wave icon in a circle looks templated and borrowed from a generic alert component. It also clashes with the green PnL figure next to it. Fix: use a neutral glass panel with a thin amber left rule (or the existing warning token) and no illustrative icon. Keep the colour for the status dot only.

Smaller points
- The chart marker "XAU long closed at 2,660.10, 14:31 UTC" floats in the middle-left of a 1D chart. A close that happened today belongs on the last candle. Anchor the marker to that candle, add one for ETH when it is viewed, and switch the default timeframe to 15m during an incident.
- The price tag on the axis reads 2,661.4 while the header says 2,661.40. Use the same precision everywhere.
- The rules slider has three unlabelled ticks. "Locks at $25,000 / at equity $27,500" is cryptic: say "Liquidation floor locks at $25,000 once equity reaches $27,500".
- The history table uses Entry, Mark, Real fill, PnL, while screen 1 uses Mark, Real fill, Difference. Both are forced closes, so use one schema: Side, Size, Entry, Mark at close, Real fill, Slippage, PnL. The "Closed" column is bold here and regular on screen 1.
- The "Example: Fri, Dec 4 ... A separate case from the liquidation." scaffolding appears again. Remove it.

Keep: the explicit "The account stays active" sentence, and the mark vs real fill columns. Saying plainly that the account survives is the single most reassuring line in the flow.

## Flow

Overall: **6 / 10**. The rules are honest and the arithmetic is right. Both screens answer their question only after reading prose, and the second screen keeps its trading layout when it should switch to an incident layout.

Patterns that repeat
- Key facts sit in long, comma-packed sentences instead of labelled figures or a timeline.
- Reviewer scaffolding ("Example: ..., a separate case from ...") is rendered as product copy on both screens.
- The forced-close tables use different columns, header weights and labels for the same concept.
- The nav and the top pill change between screens (Claims tab present or missing, Own vs Funded pill) with no visible reason.
- The violet primary points to a secondary goal (season upsell, claim) rather than to understanding what happened.
- Different amounts (realized PnL, profit above floor, 80% share) appear with no naming system that tells them apart.

Prioritized fixes
1. Screen 2: replace "Claim profit" under +$200.81 with a status-first header and state the exact claimable amount and its basis.
2. Screen 1: give "Yours to keep" an explicit status (paid or pending, and when) plus "untouched by the liquidation".
3. Unify the forced-close table schema across both screens (Side, Size, Entry, Mark, Real fill, Slippage, PnL), with a per-row time.
4. Screen 2: switch to an incident layout. Shrink the chart, put closed positions under the banner, and turn the empty order box into an incident status card (start, status, last update, notify).
5. Remove all "Example: ... separate case" lines from both screens.
6. Screen 1: replace the lead paragraph with a highest → level → final ladder or equity sparkline marking the hit.
7. Drop the teal banner and the stock icon. Use the flow's own warning token on a glass panel.
8. Make the nav and top pill consistent across states, fix price precision, and label the rules slider ticks.
