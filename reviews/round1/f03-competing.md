# Review: F03 Competing

Reviewed: 6 screens at 1440 wide (`.shots/review/f03-competing--*.png`) and their sources.
Persona kestrel, Nov 6, Season 1, rank #17, score 781.6, band $25K, trading days 11 of 15.

Short verdict: the numbers hold together remarkably well (factor points, percentiles, sim deltas,
daily PnL, market split, order ticket math all check out). The real problems are in what the
screens say: the home headline is false for this exact state, and the leaderboard gives seats to
traders who can never request one. Home is also overloaded: three cards repeat other screens.

---

## 01 Home, competing

1. **Question:** "Am I inside the seats, and what moves my score?" First viewport: **partly**.
   #17 and the ladder answer "where am I in the bands". But the sentence "You are inside the
   seats. If the season closed now you could request a $25K account" is false: with 11 of 15
   trading days, kestrel could NOT request if the season closed now. The floors card that says
   so sits below. "What moves my score" sits in the right column, unranked against the rest.
2. **Components:** standing card (rank, delta pill, score with sparkline, band ladder with
   marker, neighbour sentence, Trade button); floors card (3 meters, "2 of 3 met" chip);
   Around you table (5 rows); season timeline; score factors list; seats per band table.
3. **Missing:** the honest blocker in the headline (seat depends on 4 more trading days);
   funded windows start Nov 20 (timeline ends at Nov 19); one line on how the trading window is
   picked is not needed here, leave it to F04.
4. **Superfluous:** "Seats this season" table repeats the ladder (bands, seats) and the
   leaderboard group headers (USDC each). "What your score is made of" duplicates 04 score.
   Score 781.6 top right is the same size class as #17 and competes with it; the sparkline adds
   nothing the "+4 today" pill does not. Six cards for a calm screen.
5. **Inconsistencies:**
   - Headline claims a seat while floors are 2 of 3 (see 1).
   - "You drop to the $5K band below #21, 9.8 points behind you." 9.8 is the gap to #22
     (771.8), not to #21 (773.0, 8.6 behind). Also you only drop if five traders pass you;
     the sentence reads as if you are 9.8 points from falling.
   - "Each extra $100 of net profit adds about 4.5 points" counts only the Net PnL factor; on
     04 the same $200 also moves Return (+11.0), so the real effect is about 10 points per $100.
   - Floors meter label "11.4% of 25% allowed" vs Stats "11.4% of 25% floor" vs Trade
     "11.4% of 25%": pick one ("of 25% max").
   - $25K band chip is violet on every row (marlowe, vandal, 0x91c2…). Violet is reserved for
     actions, selection and the own row.
6. **Visual:** right column ends at 990px, left at 840px, ragged bottom. Ladder labels at
   11px under 3px bars are hard to scan; the "you" marker is good. Neighbour sentence and Trade
   button share a footer, fine.

## 02 Leaderboard

1. **Question:** "Where am I against everyone else?" First viewport: **yes**. Sticky you-bar
   with rank #17, band, gap up (54.8 to $50K) and gap down (9.8) answers it at a glance.
2. **Components:** title and season picker (Live chip), sticky you-bar (identity, rank, score
   delta, band now, two gaps, floors, Jump to my row), filter segmented control, search, floors
   legend, table grouped by band with group headers, collapsed range row, seat cut divider,
   "No seat" rows dimmed, pagination, footnote.
3. **Missing:** a state for traders who already hold a funded account (brief: they stay on the
   board but cannot request); none shown or legended. Entry minimum reminder is not needed.
4. **Superfluous:** season picker dropdown in Season 1 has nothing to pick (profile even says
   "Season 1 is the first season"). Win rate and Trades columns are low value next to Score; keep
   if density is wanted, but Trading days plus Floors icon is double encoding (both amber).
5. **Inconsistencies:**
   - **#4 nightjar (27.4%) and #63 rook (26.3%) fail the drawdown floor.** Max DD can only grow,
     so they can never request in Season 1, yet nightjar keeps "Band now $50K" and holds one of
     4 seats. Seats are assigned among eligible requesters only, so every band below is
     overstated by one place. Kestrel's real projected rank is #16, not #17.
   - Legend "Drawdown over 25%" only covers one way to fail; negative net PnL is the other.
     Name it "Can't request".
   - Same violet $25K chip on all band rows (colour rule).
   - Footnote "in the 24 hours after Nov 18" fine; consider "Nov 18 00:00 to Nov 19 00:00 UTC"
     to match the canonical window exactly.
6. **Visual:** wallet avatars render the letter "0" (0x91c2…, 0xe03d…): looks like a bug, use a
   neutral glyph or identicon. Rank #1 and #3 coloured, #2 not. Good: cut divider, dimmed
   no-seat rows, band group headers quoting position size and USDC.

## 03 Trader profile (drawer over leaderboard)

1. **Question:** "How is the trader above me doing it?" First viewport: **yes**. Rank #16, score
   784.2 with "2.6 points above you", equity curve and 8 metrics.
2. **Components:** drawer header (avatar, alias, since, wallet), rank and band, score with gap,
   season curve, 8 KPI grid, markets split bar, recent closed trades table, past seasons empty
   state (below fold), footer with two buttons.
3. **Missing:** where vandal beats kestrel, factor by factor. That is the actual answer to "how";
   today it hides behind "Compare with my score" which lands on kestrel's own score page with no
   vandal data. A compact "vandal vs you" diff of the 6 factor points (or 2 lines: biggest lead,
   biggest gap) would answer it; otherwise retitle the link "See my score".
4. **Superfluous:** "Back to leaderboard" duplicates the close X. "Past seasons, none yet" in
   Season 1 is noise. Avg hold time and Profit factor are fine.
5. **Inconsistencies:**
   - "Public with a 24h delay" yet the latest trade is Nov 5 18:40 while today is Nov 6
     (CPI in 2h 14m on 05 puts now near 11:16 UTC): under 17h old. Latest shown trade must be
     before Nov 5 ~11:00.
   - Chart titled "Equity" but plots net PnL ($0 to +$966). Call it "Net PnL, Season 1".
   - "+$966.40 / +41.7%" uses a slash; elsewhere PnL and return are shown separately.
6. **Visual:** trades table is cut mid row by the sticky footer at 900px. Drawer is a good
   pattern; underlying page blur is heavy enough that the you-bar context is lost.

## 04 Score breakdown

1. **Question:** "How is my score built and what would raise it?" First viewport: **yes** for
   "built" (781.6, stacked bar, 6 row table). "Raise it" (simulator) starts at ~730px, partly
   visible.
2. **Components:** back link, lead card (score, rank sentence, today delta, stacked bar with
   points left), breakdown table (weight, value, percentile bar, points, max), what-if simulator
   (3 inputs with sliders, Reset, projected card with rank, band, gap, floors, Trade button),
   floors card, explainer card.
3. **Missing:** definitions a pro needs: how Return on capital is computed (on what capital:
   start, average, peak balance?), what Balance measures (current, average, at close?), whether
   Volume is notional, and that the score freezes at Nov 18 00:00 UTC. One tooltip per factor
   name is enough.
4. **Superfluous:** "Floors are separate" card repeats the home floors card; reduce to one line
   under the projected card ("Floors: 2 of 3, needs 4 more trading days"). "How a factor
   scores" repeats the lead paragraph ("Each factor ranks you..."); keep one. "Today +3.8 /
   Rank up 4" competes with 781.6 at the same weight as the main figure's label.
5. **Inconsistencies:**
   - Nav highlights Home on a page with a back link; acceptable, but the header nav and the
     breadcrumb both say Home.
   - "+3.8" in green: green is for PnL and pass/fail only; a score delta should be neutral or
     violet-free white.
   - Stacked bar uses six violet tints: violet as data colour breaks the colour rule. Use greys
     with the own total in white, or one tint.
   - Return on capital +32.1% vs balance $1,284.20 with +$412.80 PnL implies start ~$871
     (+47%). Either the factor uses another base (say so) or the demo data needs a deposit.
   - Simulator check: 809.7 lands at #10 above 809.3, "up 7", 26.7 to $50K. All correct.
6. **Visual:** the simulator inputs show "+$ 200" with the prefix detached from the value.
   Win rate slider has a tick and a thumb close together, ambiguous which is "now".

## 05 Trade, own account

1. **Question:** "Trade with my own money while the season runs." First viewport: **yes**. Own
   $1,284.20 in header chip, ticket, chart, position, season card all above the fold.
2. **Components:** market header (pair, max lev, mark, oracle, 24h, OI, volume, funding),
   chart toolbar, candles with TP, entry, SL lines and CPI pin, order book, bottom tabs with
   positions table, order ticket (side, type, price, size by risk, stop, bracket TP, precheck,
   place button, shortcuts), season card (rank, score, trading days meter, 2 floors, note),
   Moving now list, CPI warning.
3. **Missing:** Liq. price "None" on a cross position of $1,368 with $1,284 equity is not
   credible for a pro; show a number (far, but a number). Nothing about the allowed markets list
   is needed here because this is the own account.
4. **Superfluous:** "Moving now" competes with the ticket and season card; drop it from this
   flow (market discovery is not the job). "Every trade you close here counts for Season 1" is a
   good line but it is a banner, make it plain muted text under the season card.
5. **Inconsistencies:**
   - Ticket math checks out: risk $12.80 = 1% of $1,284.20, size 0.0242 BTC, $1,654.80,
     2.0R, leverage after fill 2.4x.
   - Brief says onchain.cc perps activity counts too, the note implies only "here". Say
     "Every trade you close counts", or "here or on onchain.cc".
   - US CPI on Nov 6 is not plausible (October CPI prints mid November). Use another event or
     date, or keep generic ("High impact event").
   - "Funding / countdown" label: fine, but "24h change +1,086 / +1.61%" mixes slash style.
6. **Visual:** chart labels "+$25.00" and "0.020 BTC" overlap candles; the price tag
   "68,411.4" overlaps the y axis label beneath it. Y axis shows decimals (70,419.5) on BTC.
   Place long button is dark green with green text, low contrast for the primary action.

## 06 Stats

1. **Question:** "How good is my trading, really?" First viewport: **yes**. +$412.80 large,
   curve, drawdown strip, best/worst day, max DD.
2. **Components:** title with range segmented control and Export CSV, lead card (net PnL,
   return, summary sentence, 3 side stats, PnL curve, drawdown strip with pin), daily PnL
   calendar (2 months with legend), metrics grid (edge, wins and losses, risk and activity,
   direction bar), by market table with share bars, by hour histogram with best/worst hour.
3. **Missing:** fees and funding paid as amounts (the sentence says "after fees and funding",
   a pro wants the cost). Largest position or average leverage (relevant to the account size
   concept they are competing for).
4. **Superfluous:** Trading days in Metrics repeats floors from every other screen; fine to keep
   one, remove "of 15 needed" here, this screen is about quality not eligibility. "Ranked #17
   for Season 1" in the lead sentence is a cross link, fine.
5. **Inconsistencies:**
   - **"11 trading days, 7 green, 4 red"**: the calendar has 8 green (Oct 20, 23, 24, 27, 30,
     Nov 3, 4, 5) and 3 red (Oct 21, 29, Nov 2). Fix to "8 green, 3 red".
   - Drawdown pin "-11.4%, Oct 29" but the PnL curve barely dips there and the worst day is
     -$46.80 (about 4% of balance). Either the DD is intraday (say "intraday") or move the curve.
   - "Max drawdown 11.4% of 25% floor": a 25% max is a limit, not a floor. Use "of 25% max".
   - "US open, 13:00 to 15:00 UTC": after Nov 1 US cash open is 14:30 UTC. Say "13:00 to 15:00
     UTC" without "US open", or shift.
   - Sums verified: months 198.30 + 214.50 = 412.80, by market totals 67 trades / +$412.80,
     long + short 67 / +$412.80, profit factor 1.76, expectancy $6.16. Good.
6. **Visual:** "future" and "outside the season" calendar cells look the same (both outlined);
   legend has no "future" entry. Metrics card leaves an empty block under it (ragged grid);
   By hour has a large empty area above the bars.

---

## Flow

**Cold open:** home sets the context (Season 1, dates, timeline, bands) well enough. It never
says in one line what the season is for ("Top 60 who meet the floors get a Bitso funded account
on Nov 19"). The timeline nearly does it; add funded start Nov 20 and it does.

**Missing states (name them, mock as variants not new flows):**
- Home, outside the seats (#61 or below): "No seat at #64, 5.6 points to #60".
- Home, inside seats but floor permanently failed (DD over 25%): what to do now (wait for
  Season 2 Nov 19).
- Home, last 24h before close (Nov 17): countdown and "last day to add a trading day".
- Leaderboard row and home state for a trader who holds a funded account (competes, cannot
  request).
- Score page from a factor tooltip is enough; no new screen.

**Merge or drop:**
- Drop "Seats this season" and "What your score is made of" cards from home (ladder plus a
  "How it's built" link cover them).
- 03 stays as a drawer state of 02, correct.
- 04 "Floors are separate" and "How a factor scores" collapse into one short line each.

**Shared kit components (used on 3+ screens here):**
- `FloorsMeter` (3 floors, met/not/failed, count chip): home, leaderboard you-bar, score,
  trade, stats, profile.
- `BandChip` with neutral styling for others and violet only on own row; `BandLadder`.
- `TraderCell` (avatar or wallet glyph, alias or mono wallet, YOU tag).
- `StandingSummary` (rank, score, delta, band, gaps): home lead, leaderboard you-bar, trade
  season card.
- `DeltaPill` (rank up 4, score +3.8) in one neutral style.
- `SeasonTimeline` (also needed by F02 and F04).
- `PnlCurve` with drawdown strip, `KpiGrid`, `Drawer`, `DailyPnlCalendar`.

## Fix list

### MUST
1. 01 home: replace "You are inside the seats. If the season closed now you could request a
   $25K account..." with "Rank #17 is inside the $25K band. To request it you still need 4
   more trading days." (or equivalent stating the blocker).
2. 02/03 leaderboard: traders whose max DD exceeds 25% (nightjar #4, rook #63) cannot request
   this season. Mark them "Can't request", dim the row, give "Band now: none", and compute
   bands among eligible traders (kestrel projects #16). Rename legend "Drawdown over 25%" to
   "Can't request". Update home ladder text and you-bar gaps to match.
3. 01 home: fix the down gap sentence: "#22, first in the $5K band, is 9.8 points behind you."
4. 06 stats: "7 green, 4 red" to "8 green, 3 red".
5. 03 profile: latest public trade must be older than 24h (before Nov 5 ~11:00 UTC), or change
   the "24h delay" claim.
6. Colour rule: $25K band chips on other traders' rows (01, 02) and the violet stacked bar (04)
   use violet as data. Make band chips neutral (violet only on kestrel's row), the stacked bar
   grey tints.

### SHOULD
1. 01 home: remove "Seats this season" and "What your score is made of"; keep the timeline,
   add "Funded windows start Nov 20". Shrink score 781.6 to a secondary stat under #17.
2. 01 home: "Each extra $100 adds about 4.5 points" to the full effect (~10 points incl.
   return), matching 04 simulator.
3. One wording for the drawdown limit everywhere: "11.4% of 25% max" (01, 04, 05, 06).
4. 03 profile: add a 6 row factor diff vandal vs you, or rename "Compare with my score" to
   "See my score"; remove "Back to leaderboard" and the Past seasons block.
5. 04 score: factor definitions (Return base, Balance, Volume notional) as tooltips; note
   "Score freezes Nov 18 00:00 UTC". Merge the two side cards into one line each.
6. 04/demo data: reconcile return +32.1% with balance $1,284.20 and PnL +$412.80 (state the
   capital base, or adjust).
7. 05 trade: remove "Moving now"; note text "Every trade you close counts for Season 1" as
   muted text, not a violet banner; give Liq. price a number.
8. 06 stats: drawdown pin consistent with the curve or labelled intraday; add fees and funding
   paid as one line in the lead sentence.
9. 02 leaderboard: hide the season picker until Season 2 exists.

### COULD
1. 02/01: wallet avatars show "0"; use a neutral glyph.
2. 05: fix chart label overlaps and the price tag over the y axis; no decimals on BTC axis;
   raise contrast of the Place long button; replace US CPI on Nov 6 with a plausible event.
3. 06: distinguish future days from outside season (add legend entry); drop "US open" wording
   or correct to 14:30 UTC; tighten the empty space in Metrics and By hour.
4. 04: green "+3.8" to neutral; attach "+$" prefix to the value in the simulator input.
5. 02: footnote window as "Nov 18 00:00 to Nov 19 00:00 UTC".
