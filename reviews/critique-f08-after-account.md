# Critique: f08 After the account

Flow: the funded account is liquidated, the trader goes back to competing with their own money and requests a seat again at the next close, with no penalty. Three screens, 1440 wide, judged only from screenshots.

## 01 Home after loss (Dec 2, 15:40 UTC)
Question: my account is gone, how do I get another one?

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 7 | 5 | 5 | 6 | 4 |

Problems:
1. **The liquidation math does not add up.** The right card says highest equity $26,140.00 and liquidation level $23,640.00. Screen 03 states the rule: liquidation trails 10% below highest equity. 10% below $26,140 is $23,526, not $23,640. A trader who just lost $25K of buying power will do this sum within seconds, and a $114 gap on the very number that killed the account destroys trust in everything else. Fix: make the three rows reconcile exactly with the stated rule, and add the rule as one muted line under the table ("Level = 90% of highest equity").
2. **No leading figure, and the most important event of the day is in the sidebar.** The main card opens with a 24px sentence, then a 15 segment bar, three requirement rows, a ladder and a footnote, all at similar weight. The rank (#44, seat #41) is buried in an 11px footnote under the ladder, while screen 02 makes the rank a 48px hero. Fix: put one hero line at the top of the main card: "Liquidated today. You owe nothing." with the next step under it ("Trade 9 more days, request on Dec 18"), then the seat figure at the same size and position as screen 02. Move the liquidation breakdown under a "What happened at 15:20" disclosure.
3. **The drawdown row is unreadable.** "Kept, $110.92 above your line" gives no line value, no percentage, and its implied line ($2,022.60 minus $110.92 = $1,911.68) does not match the line shown on screen 02 ($1,187.80). Fix: one format on every screen: "Line $X, you are $Y above", with the same mini bar used on screen 02.

Also: the headline "9 more trading days to request a new seat on Dec 18" reads as if requests open in 9 days. Say "Trade 9 more days to request a seat on Dec 18". The "Own" chip sits inline in the subtitle here but on the panel title on 02 and 03; pick one place.

Keep: the "You owe / Nothing" row and the claim card ("80% of $923.00. Counts as a deposit for Season 2, not as PnL"). That is exactly the fear a trader has after a liquidation, answered in plain words with verifiable math (923 x 0.8 = 738.40 checks out).

## 02 Competing again (Dec 10, 02:00 UTC)
Question: I'm back on the board, does my last account count against me?

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 7 | 7 | 6 | 6 | 5 |

Problems:
1. **The answer to the screen's question is grey body text.** "Your last funded account does not count: not in your score, not in the requirements." sits at 14px grey between the title and the hero, and reads like a subtitle. It is the whole point of this screen. Fix: make it the title ("Your last account does not count against you") or a one line confirmation row with a check icon at the top of the card; demote "3 more trading days" to the requirements panel, where trading days already live.
2. **Two different numbers fight in the hero.** "#33 on the board, seat #31": the trader must guess why rank and seat differ (traders above who will not qualify). On 03 the hero is the seat, here it is the rank. Fix: lead with the seat on every screen ("Seat #31"), and show the board rank as the secondary line, as 03 already does.
3. **The drawdown widget is jargon and its number is wrong.** "Kept, line $1,187.80" with a hatched bar from -10% to +10% and "Locked at your start since Dec 6 (+10% reached)". The trader's starting capital is about $1,926 (balance minus PnL), so a line "locked at your start" should read about $1,926, not $1,187.80. And the hatched segment, the "Start" tick and the "You" label at the far right are a lot of chart for a yes/no rule. Fix: correct the value, replace the copy with "Line locked at your start, $1,926.20. You can no longer fail this one." and keep only the bar plus the You tick.

Also: the requirement rows use bold for "Drawdown requirement" only; the other rows are regular. Ladder zone chips reuse the same grey for $100K and $5K.

Keep: the ladder with "You are 53.8 above" next to the #60 cut (744.2 minus 690.4 checks out). It turns a score into distance from the edge, which is the only thing a trader near the cut cares about.

## 03 Request a seat again (Dec 18, 09:40 UTC)
Question: Season 2 closed, can I request a seat now?

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 8 | 7 | 6 | 7 | 6 |

Problems:
1. **The hero sells the best case.** "Seat #19 if you request now" plus a $25K card with $25,000 and $22,500, while the block below says that if only 3 of the 10 traders above request, you drop to #22 and a $5K account. With 604 requests already in, the realistic outcome is the $5K one. A pro trader will feel baited. Fix: show the range in the hero ("Seat #19 to #29") and make the account card show both outcomes ($25K now, $5K if 3 or more above request), or at least label the card "If no one above requests".
2. **Too many boxes in one card.** Title, hero, a bordered account card, the ladder, a filled scenario box, a divider, a withdraw line, the button and an 11px legal footer: five visual containers for one decision. Fix: drop the bordered account card into the hero line ("Seat #19, $25K account"), keep the scenario box, and merge the withdraw line and footer into one muted line under the button.
3. **Copy before the action is out of order.** "You can withdraw it until Dec 19, 00:00 UTC" refers to a request that does not exist yet. "Trading days: 16, 15 needed" is awkward. Fix: "You can withdraw your request until Dec 19, 00:00 UTC" and "16 of 15 needed".

Also: the no penalty rule is now a 12px footnote in the side panel ("Your closed funded account has no effect"), the third different wording of the same rule in three screens. The scenario radio circles look clickable but are not; use bullets or a small table.

Keep: the "10 traders above you can still request. Each one moves you down a seat." block with concrete outcomes. It is honest, specific and rare in this category; it just needs to drive the hero instead of contradicting it.

## Flow
Overall: **6.5 / 10**

Patterns across screens:
- **Numbers that do not reconcile.** Liquidation level vs the 10% rule (01), drawdown line $1,911.68 implied on 01 vs $1,187.80 on 02 vs a start of about $1,926. Everything else (PnL deltas, scores to the cut, seat scenarios, 80% claim) checks out, which makes the misses stand out more.
- **The leading figure changes every screen.** Nothing on 01, rank on 02, seat on 03. The "no penalty" message is the point of the flow and is never the loudest thing.
- **The same rule is written three ways** ("costs nothing else", "does not count: not in your score...", "has no effect") in three different places (subtitle, subtitle, side panel footnote).
- **Requirements move.** In the main card on 01, in the side panel on 02 and 03, with three different formats for the drawdown row.
- **Small type everywhere.** Ladder labels, zone scores, footnotes and legal lines sit at 11 to 12px grey; the ladder carries 3 rows of tiny text per zone.
- **What works:** consistent shell and top bar, violet reserved for the single primary action, the ladder with distance to the cut, plain language around money owed.

Prioritized fixes:
1. Make every money figure reconcile: liquidation level = 90% of highest equity on 01, one drawdown line value carried consistently from 01 to 02, with the rule stated next to it.
2. Make "your last account does not count against you" the loudest element on 01 and 02 (title or checked confirmation row), written once and reused verbatim on all three screens in the same spot.
3. On 03, show the seat as a range and the account size as both outcomes; never hero the best case alone.
4. One hero figure across the flow: the projected seat, same size and position on 01, 02 and 03, with board rank as the secondary line.
5. Fix the headline grammar: "Trade 9 more days to request a seat on Dec 18" on 01 and 02, so it cannot read as "requests open in 9 days".
6. One requirements component in one place (right panel) on all screens, one drawdown format: line value, distance, small bar, plain language instead of "Locked at your start (+10% reached)".
7. Collapse the liquidation breakdown on 01 under "What happened at 15:20" and keep "You owe nothing" plus the claim card visible.
8. Cut containers on 03 (merge the account card into the hero, merge withdraw line and footer), raise ladder and footnote text to at least 12px and give $100K and $5K chips distinct tokens.
