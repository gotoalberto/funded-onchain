# F03 Competing, review

Reviewed cold against BRIEF.md (Decisions binding), manifest.json, the six screenshots at 1440 and the sources.
Demo date: Nov 6, 10:00 UTC, Season 1 closes in 11d 14h. Numbers were cross checked; most add up (score parts sum to 781.6, simulator deltas sum to +28.1, calendar days sum to +$412.80, by market sums to 67 trades and +$412.80, profile gaps sum to 2.6). The problems are mostly two rank systems, repeated facts and a few undefined formulas.

## 01 Home, competing

**Question:** Am I inside the seats, and what moves my score?
**First viewport:** answers it. The headline names the blocker ("4 more trading days to request a seat"), as Decisions require. But the lead figure is **#17**, while the seat logic uses **#16** (ladder marker, caption). Two ranks inside one panel is the main hierarchy problem.

| Component | Verdict | Why |
|---|---|---|
| Headline "4 more trading days to request a seat" | KEEP | Names the blocker, honest about floors. |
| Lead paragraph "Your rank is inside the projected $25K band, $5,000 USDC ... closes on Nov 18 ... You have 11." | CHANGE | "Inside the projected band" breaks the Decisions rule (no "inside" while a floor is unmet). Rewrite as conditional: "With 15 trading days, your score projects the $25K band ($25,000 max position, $5,000 USDC)." Drop "closes on Nov 18" and "You have 11" (both shown again in the floors meter and the header chip). Also quote both size and USDC (brief rule). |
| Rank row: #17 of 2,314, "4 today" pill, score 781.6 +3.8, "How it's built" | CHANGE | Pick one rank for the seat question. Keep #17 as the board rank but add "seat #16" right beside it (as the leaderboard you-bar already does), or lead with seat #16. Fold "+3.8 today" and "4 today" into one delta. |
| Band ladder (rank zones, last seat #60) | KEEP, CHANGE labels | Zones follow Decisions. Band labels are inconsistent: "$40,000", "$20,000", "$10,000" without USDC, then "$5,000 USDC each". Use "$X USDC" on every zone. |
| Caption about nightjar over 25% | KEEP | Explains #17 vs #16. Shorten once the seat number sits in the rank row. |
| Foot: gap to #16/#18, weakest factor, "+$100 adds about 10 points" | KEEP | Answers "what moves my score". Note the 10 points is Net PnL plus Return combined (score page shows +9.0 and +11.0 per $200); say "about 10 points across Net PnL and Return". |
| Primary "Trade" | KEEP, CHANGE copy | Right action, but the blocker is a trading day. "Trade" is fine; a caption "Close a trade today to reach 12 of 15" would tie action to blocker. |
| Around you table (5 rows) | CHANGE | "Projected band" column is $25K on every row and repeats the ladder: remove it. Keep Rank, Trader, Score, Net PnL, Max DD. |
| Floors to request (3 meters, "2 of 3 met") | CHANGE | Trading days meter KEEP. Max drawdown meter shows "25% max" twice (head and foot): drop the foot. Net PnL meter is a 100% full bar with no meaning: render it as a check row like on 05 Trade. Add drawdown room in dollars ("$X before 25%"), the one floor that can be lost for good. |
| Season timeline panel | CHANGE | Useful cold context, keep. Violet line and dots break the colour rule (not an action, selection or own marker): make done steps neutral, keep only the "today" dot as own marker if wanted. |

**Missing:** drawdown room in dollars (the irreversible floor). **Superfluous/repeated:** season end appears 4 times (header chip 11d 14h, lead paragraph "Nov 18", meter "12 days left in the season", timeline); band of the trader appears in paragraph, ladder, table column.
**Inconsistent:** "12 days left in the season" vs Decisions "(11 days left)" and the 11d 14h chip. 12 is right if today counts as a possible trading day (Nov 6 to Nov 17); decide and write one rule (see questions).
**Hierarchy:** #17 display figure competes with the headline; the right column is as heavy as the lead. Fine otherwise.

## 02 Leaderboard

**Question:** Where am I against everyone else?
**First viewport:** answers it via the sticky you-bar (#17, seat #16, $25K). Good.

| Component | Verdict | Why |
|---|---|---|
| Title, caption "2,314 traders ... updated every minute. Oct 20 to Nov 18, 2026" plus "Live" pill | CHANGE | "Live" and "updated every minute" say the same: keep one. Dates also in header chip; fine to keep once here. |
| Sticky you-bar (rank, score, band seat #16, to $50K 48.1, ahead of $5K 11.4, floors 11 of 15, Jump to my row) | KEEP | Correct numbers (829.7 minus 781.6, 781.6 minus 770.2). Own violet tint is allowed. |
| Filter All / Projected seats / Around me, search | KEEP | |
| Legend (Meets floors, Not yet, Can't request) | KEEP | |
| Band separator rows "Seats #7 to #21" | CHANGE | The separators count seats among requesters, rows count board rank. Result: board #7 ferro sits in the $50K group above a "$25K Seats #7 to #21" header, and #22 sits under $25K. A pro reads this as a bug. Add a **Seat** column (projected seat number, blank for Can't request) and label separators by seat, or drop the "#" from the separators. |
| Projected band column | REMOVE | Repeats the separators row by row. "Can't request" and "No seat" can move into the Seat column. |
| Columns Score, Net PnL, Return, Max DD, Win rate, Trades, Trading days, Floors | KEEP | Pro density is right here. Volume and Balance (20% of score) are absent; acceptable, they live on the profile and score page. |
| Gap row "#24 to #57, 34 more" | KEEP | |
| Cut line "Last seat, #60 among traders who can request. No seat below" | CHANGE | Green text implies pass/fail; use neutral. Copy is good. |
| Footnote | KEEP | Explains the moving cut. |
| Pager | KEEP | Violet current page counts as selection. |

**Missing:** sortable column headers (pros will want to sort by Return or DD), COULD. **Inconsistent:** nothing numeric; the seat vs rank mix is the issue.

## 03 Trader profile (drawer over leaderboard)

**Question:** How is the trader above me doing it?
**First viewport:** answers it with "Where vandal beats you" points per factor. Strong screen.

| Component | Verdict | Why |
|---|---|---|
| Identity: alias, "On onchain.cc since Mar 2026, 0x4e8b…d215" | CHANGE / question | Brief says alias if set, otherwise wallet. Showing the wallet under the alias removes the alias privacy. Needs Alberto's call. |
| Lead: #16 $25K, 784.2 "2.6 points above you" | KEEP | Note #16 is board rank; vandal's seat is #15. Label "Board rank" or show seat to match 02 fix. |
| Factor table (vandal, you, gap bar, points) | KEEP, CHANGE title | Title "Where vandal beats you" but Volume is where you beat vandal (-54.1). Retitle "vandal vs you". Gap bars are neutral grey, good. |
| Insight sentence | KEEP | |
| Net PnL chart | CHANGE | No y values and no note why it stops at Nov 5. Add $ axis and "Through Nov 5, public with a 24h delay". |
| Stat row: Max DD, Profit factor, Avg hold, Trading days | KEEP | |
| Markets traded split (Crypto/RWA) | REMOVE | Weakest block for the question; the recent trades show markets already. |
| Recent closed trades (24h delay) | KEEP, CHANGE | Side coloured green/red breaks the colour rule (green/red only for PnL and pass/fail). Make Long/Short neutral text. |
| Foot "See my score" | KEEP | Correct secondary weight; the drawer has no primary action, which is right. |

## 04 Score breakdown

**Question:** How is my score built and what would raise it?
**First viewport:** answers it. Lead 781.6, stacked bar, "Points left on the table: 218.4, most of it in Net PnL (114.3)" is excellent. Table and simulator are below; fine.

| Component | Verdict | Why |
|---|---|---|
| Back link "Home", lead 781.6 of 1,000 | KEEP | |
| Lead paragraph with rank, band, method, freeze time | CHANGE | Rank and band repeat the simulator output and other screens; keep only method and freeze ("Each factor ranks you against every trader on the board ... freezes Nov 18, 00:00 UTC"). |
| "+3.8 today, Rank up 4 since 00:00 UTC" | REMOVE or shrink | Rank delta belongs to Home; keep "+3.8 today" only. |
| Stacked bar + "points left" | KEEP | Best single element of the flow. |
| Breakdown table | CHANGE | "Max" column is weight × 1,000 and repeats Weight: drop one. Info tooltips must carry exact formulas (see questions: return base, balance timing). |
| Simulator (extra profit, win rate, trading days) + result card + primary Trade | KEEP, CHANGE | Trading days slider runs to 30 but the most reachable is 23 (11 + 12 days left): cap it. Projected rank "#10 up 7" is board rank; add the seat number to match 02. Slider fill violet is acceptable as selection. Floors "3 of 3 met" in green while it is hypothetical: label "Floors, projected". |

**Missing:** how percentiles treat ties and which population counts (all 2,314, or only those on the board). **Repeated:** rank/band in lead and in result card.

## 05 Trade, own account

**Question:** Trade with my own money while the season runs.
**First viewport:** answers it. Ticket math checks out (12.80 / 530 = 0.0242 BTC, 2.0R, leverage 2.4x, position PnL +$9.24, TP +$25.00, SL -$13.00).

| Component | Verdict | Why |
|---|---|---|
| Market header, chart with position lines, book, positions | KEEP | Hyperliquid parity. |
| Chart tools "Events", "5 headlines today" | REMOVE | Noise for this flow; not part of the product truth. |
| Bottom tab "Season stats" linking to 06 | REMOVE | Duplicates the Stats nav item. |
| Ticket (risk sizing, bracket, pre check, Place long) | KEEP, ADD one line | The pre check is the right place to show the season risk: "If the stop fills, season max DD becomes X% of 25%". That is the one season rule a trade can break for good. |
| Long/Short colours (tab, button, side column, book mid, funding rate) | Question | Green for direction contradicts "green only for PnL and pass/fail", but it is terminal convention. Decide once for F03 and F05 (the reference terminal). Funding rate and book mid in green should go neutral either way. |
| Season panel (rank, score, trading days meter "Close one, 12 of 15", Net PnL, Max DD, note) | KEEP, trim | The trading days meter copy is the best action cue in the flow. Rank and score deltas ("up 4", "+3.8 today") repeat Home: keep figures, drop deltas. |

**Missing:** whether the selected market counts for the season (allowed list or any Hyperliquid market).

## 06 Stats

**Question:** How good is my trading, really?
**First viewport:** answers it with +$412.80, +32.1%, fees and funding, equity and drawdown chart. Good.

| Component | Verdict | Why |
|---|---|---|
| Title, Season 1 / 30D / All, Export CSV | KEEP | |
| Lead +$412.80 +32.1%, fees, funding, trades and days, rank link | KEEP | "Ranked #17" is a repeat but serves as the only link back; fine. |
| Best day, worst day, max DD "of 25% max, intraday" | KEEP | |
| Equity and drawdown chart with -11.4% pin | KEEP | |
| Daily PnL calendar | KEEP | Correct: 11 days, 8 green, 3 red, months sum to +$198.30 and +$214.50; Nov 18 onward marked outside the season. |
| Metrics (edge, wins/losses, risk, direction) | KEEP | All consistent (PF 1.76, expectancy $6.16). |
| By market table | KEEP | Sums match. |
| By hour of day | REMOVE (COULD) | Least needed panel on a calmer screen. |

**Inconsistent:** +32.1% equals 412.80 / 1,284.20, i.e. return on the current balance which already includes the profit. If the trader started near $871, return on starting capital is about +47%. The formula must be defined and the tooltip changed (see questions).

## Flow

**Sequence:** Home, Leaderboard, Profile, Score, Trade and Stats are complete for the main state and every screen links inside the flow. Opened cold, Home sets context through the timeline panel.
**States missing:**
- Home, all floors met (3 of 3): the honest "you could request the $25K band" state; the only one where Decisions allow that wording. SHOULD.
- Home, can't request this season (own max DD over 25%): Decisions define it ("Can't request", no band); it exists for others on the board but never for the trader. SHOULD.
- Home, last 24 hours before close (what freezes, what happens next). COULD.
**Redundant:** none of the six screens is redundant. Inside screens, repetition is the issue.

## Fix list

### MUST
1. All screens: one seat concept. Show board rank and **seat** together ("#17 on the board, seat #16") on Home, Leaderboard (new Seat column), Profile and the score simulator. Today #17 and #16 coexist unexplained, and leaderboard separators say "Seats #7 to #21" above board row #8.
2. 01 Home: rewrite "Your rank is inside the projected $25K band" as conditional on the 15 days; Decisions forbid "inside" wording while a floor is unmet. Quote $25,000 max position and $5,000 USDC.
3. 01 Home: season end shown once (header chip) plus the timeline; remove "closes on Nov 18" from the lead and "12 days left in the season" from the meter, or settle 11 vs 12 and use one.
4. 02 Leaderboard: remove the Projected band column (repeats separators); move "Can't request" and "No seat" into the Seat column.
5. 04 Score and 06 Stats: define Return on capital (and Balance) precisely in the tooltips; +32.1% currently equals PnL over the end balance.
6. 01 Home: remove the Projected band column from Around you (all $25K, repeats the ladder).

### SHOULD
7. 01 Home floors: drop the duplicated "25%" foot, turn Net PnL into a check row, add drawdown room in dollars.
8. 05 Trade: add "season max DD after stop" to the pre check; drop rank/score deltas in the season panel; remove Events, headlines and the Season stats tab.
9. Colour: timeline line/dots neutral (01); cut line neutral (02); Long/Short side text neutral on profile trades (03); decide direction colours for the terminal with F05.
10. 03 Profile: retitle "vandal vs you", add y axis and "through Nov 5, 24h delay" to the chart, remove Markets traded split.
11. 04 Score: cap trading days slider at 23, drop Max or Weight column, remove rank and band from the lead, label floors in the result as projected.
12. Add Home states: floors 3 of 3 met, and own max DD over 25% (Can't request).
13. 01 Home ladder: "USDC" on every zone label.

### COULD
14. 02 Leaderboard: keep either "Live" or "updated every minute"; sortable headers.
15. 06 Stats: remove By hour of day.
16. 01 Home: one delta for rank and score instead of a pill and a sentence.

## Undefined product rules (questions for Alberto)

1. Trading day: a UTC day with at least one closed trade? Does a trade opened before Oct 20 and closed inside the season count? Does today count toward "days left" (12 possible days vs "11 days left")?
2. Return on capital: base is starting balance, average balance, net deposits, or end balance?
3. Balance factor: snapshot at close, time weighted average, or peak? Can a deposit on the last day buy points?
4. Max drawdown floor: equity including unrealized, intraday, measured from peak equity? How are deposits and withdrawals treated?
5. Percentiles: computed over everyone on the board (2,314) or all perps traders? Tie breaks for score and for seats?
6. Do trades placed directly on Hyperliquid (same account, not via onchain.cc or funded.onchain.cc) count for the season? The trade page says "here or on onchain.cc".
7. Which markets count for the own account season: any Hyperliquid perp or only the allowed list?
8. Profiles: is the wallet shown next to an alias? Are closed trades public, and is 24h the delay?
9. Score refresh cadence ("every minute") and whether the entry minimums are re-checked at close (could a trader drop off the board on the last day by withdrawing below $100?).
10. Can a trader hide from the public board?
