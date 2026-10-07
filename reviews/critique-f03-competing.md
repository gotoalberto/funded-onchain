# Critique, flow f03-competing (Competing)

Screens seen: 01 home, 02 leaderboard, 07 leaderboard cut, 03 trader profile, 04 score, 05 trade, 06 stats.
Scores: clarity / hierarchy / simplicity / craft / trust, out of 10.

## 01 Home, competing (Am I inside the seats, and what moves my score?)
Scores: 8 / 6 / 7 / 7 / 6
1. Two headlines fight. "4 more trading days to request a seat" (h1) and the giant "#17 on the board, seat #16" both claim the lead. The question is "am I inside", so lead with "Seat #16 of 60, inside" and demote the trading days line to the right panel, where it already lives with the 11 of 15 meter.
2. The drawdown block in the right panel is unreadable: a hatched bar with "-10%, Start, +10%, You +32.1%" ticks, then "$412.80 above your line, $871.40" and "Closest $33.11, Oct 21". Three numbers, no sentence. Replace with one line: "Your line is $871.40. You are $412.80 above it." plus a single bar with the line marked. Drop "Closest" or explain it.
3. The ladder segments are equal width although $200K is one seat and $5K is 39 seats, and the "Last seat, #60 701.4" label floats above an empty hatched stub. Either make widths proportional to seats or drop the "by seat number" framing. Also the lower 140 px and the whole right column below 437 px are dead black; the page ends early and looks unfinished.
Keep: the distance row under the ladder (+161.1 to reach, 16.2 above #21, 80.2 above #60). Every number checks out and it is exactly what a competitor wants.

## 02 Leaderboard (Where am I against everyone else?)
Scores: 7 / 7 / 5 / 5 / 6
1. The sticky "Last seat, #60, score 701.4" divider renders across row #6 (between the $50K group and #7), and a hover tooltip covers rows #5 and #6. In a static read the cut appears to sit at seat #6. Make the divider live in the row flow at the real cut, and show a small "cut below" pin on the sticky header only when it is out of view.
2. Two rank columns, Board and Seat, off by one or more because "can't request" traders keep a board rank. A pro reads one number. Lead with Seat (the thing that pays), show board rank as a muted secondary, and explain the offset once in the header, not via red "Can't request" rows mid-table.
3. Below the cut, rows fade to ~25% opacity: fenwick's red -$84.10 and the 9/15 trading days are illegible. Dim to 55 to 60%, never below contrast. Also the footer "Showing #1 to #25 and #55 to #70 of 2,314" with 93 pages contradicts the collapsed "Board #26 to #54" band. Pick one model.
Keep: the sticky "kestrel #17, seat #16, to $50K +56.8 pts, above the cut 80.2 pts" bar with "Jump to my row". Best element of the flow.

## 07 Leaderboard, around the cut (Who is fighting for the last seats, and how far am I?)
Scores: 7 / 6 / 6 / 5 / 5
1. Same divider bug, worse: the cut line overlays row #58 (thrum) and a tooltip hides #59 and #60, so the three rows that matter most on this screen are unreadable. Fix as above.
2. The tab says "On the bubble 10" but the table shows 23 rows (#51 to #73) plus an empty blank band between #62 and #63 that looks like a rendering hole. Show the 10, or rename the tab "Around the cut", and kill the gap.
3. The tooltip on this screen defines the drawdown as "equity fell more than 10% of its starting capital below its highest point"; on screen 02 it is "fell back below its starting capital after reaching +10%". Two different rules for the same disqualification. This is a trust killer (see flow fix 1). The "How the cut moves" example also uses #61/#62 for traders who have no seat number in the table above (they show as board #63/#64); label them as board ranks.
Keep: the "How the cut moves at the close" panel with the before/after example. It answers a question nobody else in the industry answers.

## 03 Trader profile (How is the trader above me doing it?)
Scores: 8 / 7 / 7 / 6 / 7
1. "Recent closed trades" shows only its header row; the drawer is cut at 663 px and the footer actions sit on top of where trades should be. Either show 3 trades above the fold or drop the section into a scroll with a visible first row.
2. vandal's row on the board behind gets the same violet highlight as your own row. Violet is reserved for you; use a neutral outline for the selected other trader.
3. The "Points" column (vandal minus you) mixes signs with no visual cue; -54.1 Volume is the whole story, so make it the lead: "vandal is 2.6 ahead. Your volume gives back 54.1, net PnL costs you 28.8." Bars per factor would read faster than signed decimals.
Keep: "vandal vs you" by factor with points. Numbers sum to the 2.6 gap exactly.

## 04 Score breakdown (How is my score built and what would raise it?)
Scores: 8 / 8 / 7 / 7 / 8
1. The table has a 300 px void between Weight and Your value; Weight is pushed left, the eye has to jump. Right-align Weight next to Percentile, or put a percentile bar in that space (it would also make "most room left" visible).
2. Slider copy is machine-written: "Now 58.2%, the tick", "22, the most possible", "No points, meets the requirement". Rewrite: "Now 58.2%", "Max 22 (days left)", "Unlocks the seat request, no points".
3. Nav highlights Home while this is the score page and the breadcrumb says Home. Add Score as a visible destination or highlight nothing. The "+3.8 today" in the hero floats alone top right; attach it to 781.6.
Keep: the projection card (809.7, #11 seat #10, 28.7 to $50K, 4 of 4). Arithmetic matches the board exactly.

## 05 Trade, own account (Trade with my own money while the season runs)
Scores: 8 / 8 / 7 / 6 / 7
1. Right price axis: the last price tag "68,411.4" collides with another label behind it near 68,580. And the position lines are off scale: from the axis (70,419 at y185, 68,411 at y280) TP 69,200 should sit near y243 but is at y229; SL 67,300 drawn about 15 px too low. On a terminal, lines off by 0.2% are a bug a pro will spot.
2. The left column ends at y697 with ~220 px of black under the positions table while the right column runs to y897. Let the chart take that height.
3. The Season card duplicates Home's right panel nearly line for line. On the terminal keep it to one line: "#17, seat #16, 781.6, 4 trading days to go", expandable.
Keep: "Counts for Season 1: if held 60 s" and "Above your line if stopped $399.97" inside the ticket. Season rules at the moment of the order, perfect.

## 06 Stats (How good is my trading, really?)
Scores: 8 / 8 / 7 / 7 / 6
1. Return +32.1% does not reconcile: net PnL $412.80 on a starting line of $871.40 (Home) is +47.4%. If return is on time weighted balance ($1,241.60), say so under the figure.
2. The drawdown label "-11.4% from peak, Oct 29, above your line" next to "Lowest vs start -6.2% Oct 21" and Home's "Closest $33.11, Oct 21" are three framings of risk. A trader who sees -11.4% and a "10%" rule will panic. One definition, one number, the rule threshold drawn on the drawdown strip.
3. Metrics panel ends at y915 beside a calendar that runs to y1050; dead block. Move "By market" up beside the calendar or let Metrics fill.
Keep: the daily PnL calendar plus metrics. Every number reconciles (daily sums to 412.80, avg win/loss to PF 1.76, market and direction splits to 412.80 and 67 trades).

## Flow
Overall: 6.8 / 10. Strong, honest arithmetic and a clear competitive model; let down by one inconsistent rule, overlay bugs on the most important rows, and dead space that makes desktop pages feel half built.

Patterns that repeat:
- The drawdown rule is described four ways (Home bar, two tooltips, Stats strip). Biggest trust risk in the product.
- Overlays (sticky cut line, hover tooltips) cover the exact rows the screen exists for.
- Board rank and seat number side by side everywhere; the offset is never explained where it shows.
- Columns that end early leave large black voids (Home right, Trade left, Stats metrics).
- Violet leaks to non-own items (vandal's row). Format drift: "13 of 15" vs "13 /15" vs "18 ✓".
- Copy reads generated in places ("the tick", "the most possible", "Closest $33.11").

Prioritized fixes:
1. One drawdown definition, one sentence, used verbatim on Home, tooltips, Stats and the trade ticket; draw the threshold on the Stats drawdown strip.
2. Cut divider in the row flow at the real cut; no hover tooltips over rows in default state; never hide #56 to #62.
3. Reconcile Return on capital with the stated starting line, and label its base.
4. Lead with Seat, demote Board rank, explain the offset once in the leaderboard header.
5. Home: one lead ("Seat #16 of 60, inside"), trading days to the right panel, rewrite the drawdown block in plain words.
6. Fix the trade chart axis collision and put position lines on the price scale.
7. Fill the voids: chart height on Trade, page bottom on Home, Metrics beside the calendar on Stats.
8. "On the bubble 10" must show 10 rows, remove the blank band, raise below-cut contrast, unify trading days format, neutral highlight for other traders.
