# F07 Trading window end: review

Scope: 01-window-ending, 02-rolled-over, 03-window-closed. Screenshots at 1440, sources read.
Arithmetic on 01 checked and correct (gap meter positions, price that closes the gap, both stop and
TP scenarios, 80/20 split on 02, week 5 of 8 and 26 days to Jan 15). The problems are in the story
between screens, duplicated facts and the lead figure of 03.

## 01-window-ending

1. **Question:** "My window ends tomorrow and I'm below the start. What happens?"
   First viewport: **yes**. -$37.70 below the $5,000.00 start, 22h 04m left, two outcome cards that
   say exactly what happens. Strongest screen of the flow.
2. **Components:** app header (window chip, funded acct pill), lead panel (label, display figure,
   time left stat, gap meter floor/start/now, two outcome cards, footer note + Trade button), Open
   positions table with scenario rows, Window 1 card (timeline, best/lowest equity, closed trades),
   Rules today (daily loss meter, max loss meter), Payouts card.
3. **Missing:**
   - Cold-open context: nothing says this is a $25K funded account from Bitso in the lead; it lives
     only in the aside ("$25K" tag, "$5,000 USDC from Bitso"). One clause in the lead fixes it.
   - Whether closing at 00:00 is at mark or at market, and who pays fees (see inconsistencies).
   - Rule for exactly $5,000.00 is decided here as "at or above rolls over"; the BRIEF says "in
     profit (above starting USDC)". Needs a product decision, then the same words everywhere.
4. **Superfluous / competing:**
   - Time left appears three times (header chip, lead side stat, timeline "22h 04m left"). Keep the
     lead stat and the header chip; drop it from the timeline.
   - Window 1 card: the 3 step timeline restates the label and outcome cards; best/lowest equity and
     closed trades do not help the decision. Cut the card or reduce to one line "1 month, Nov 20 to
     Dec 20, $25K account, $5,000 USDC".
   - Payouts card: one sentence of value ("first payout Jan 15 only if it rolls over"). "Profit above
     the start now $0.00" is a duplicate of the lead. Fold into the rollover outcome card or drop.
   - "Rules today" Max loss meter repeats the gap meter floor. Keep daily loss only (it is the one
     limit that can still stop trading today).
   - "If you close both now" row: fine, but "fees $1.92 aside" is awkward; say "Equity $4,960.38
     after $1.92 fees".
5. **Inconsistencies:**
   - Outcome card says positions "are closed at market"; lead says result "read ... at their mark
     price"; 03 says "closed at the 00:00 UTC mark" and returns exactly the equity. Pick one model:
     result read at mark, positions closed at market, returned amount = equity after close fees.
   - TP / SL column colours prices green/red; the rule reserves green/red for PnL and pass/fail.
     Show prices neutral.
   - Closed trades 58 here, 61 on 02 and 03 (both alternative outcomes from this state). Plausible
     only if 3 trades close in the last 22h; on 03 only 2 positions were open. Align.
6. **Visual:** lead panel is tall (figure, paragraph, meter, two cards, footer) before the
   positions table, which is the actionable part. Paragraph wraps at 56ch next to an empty right
   area. Column header "Price that closes the gap alone" is long; "Break-even to start" is enough.

## 02-rolled-over

1. **Question:** "I finished in profit. What carries into the next window?"
   First viewport: **partly**. +$402.10 and "rolled over into window 2, Dec 20 to Jan 19" answer
   "did it roll over". The actual question, what carries over, sits below the fold in the
   "What carries into window 2" list, under a large equity curve and a 6 stat row.
2. **Components:** header (window 2 day chip, funded pill), lead panel (label, display figure,
   return pill, paragraph, Rolled over pill, link back to 01, equity curve, 6 stat summary row,
   footer + Trade), carry list (5 rows), First payout card (split, week meter), Share card (preview,
   Post on X, Copy link).
3. **Missing:**
   - Which positions closed and why ETH-USD is gone (01 had two open; 02 says only XAU carries).
   - Daily loss state for day 1 of window 2 (fresh $250).
4. **Superfluous / competing:**
   - Equity curve + 6 stat row is a window report, not the answer. Move to a "Window 1 report"
     link (or Stats) and keep the curve small or drop it.
   - "Window 2 is the same length ... same rules" (footer), "Next window end" row and "Loss limits"
     row say overlapping things. Keep the carry list; drop the footer sentence.
   - Payout appears twice (carry row "Payouts" and the First payout card). Keep the card.
   - Share card competes with the primary action; it is the second panel in the aside with its own
     glass button. Acceptable but make it collapsed (one "Share window 1" link) for a calm screen.
   - "Rolled over" pill duplicates the paragraph and the share card text.
5. **Inconsistencies:**
   - **Story break:** "How it looked on Dec 19" links to 01, which shows equity $4,962.30. Going to
     $5,402.10 means +$439.80 on the last day, yet "Best day +$188.40 Dec 11". Also more than the
     both TPs scenario on 01 ($5,117.26). Either the numbers follow 01 (e.g. both TPs fill: equity
     $5,117.26, +$117.26, +2.35%, no positions carry; or ETH TP fills and XAU stays open) or the
     link to 01 goes.
   - "Max drawdown 6.9% of 10%": drawdown from peak compared to a static 10% loss from start. Mixes
     two measures. Show "Lowest equity $4,871.10, floor $4,500.00" or "Max loss used 25.8% of $500".
   - Payout basis: here "profit above the $5,000.00 start, less what was already paid"; F08 demo
     data uses "profit above high water mark". Use the F08 term and definition in both flows.
   - "Your 80% if it held" is fine; but the meter fill is violet (primary), which the rules reserve
     for actions, selection and own row. Use neutral.
   - Share card subtitle "Window 1 closed in profit" uses "closed" for a rollover, the word the
     flow uses for account closure. Say "Window 1 ended +8.04%, Nov 20 to Dec 20".
6. **Visual:** two violet-ish emphasis points (Trade button, payout meter) and a green pill next to
   a green figure. Display figure + pill + pill + link in the first 140px is busy. The aside is
   longer than the useful content.

## 03-window-closed

1. **Question:** "I finished below the start. What now?"
   First viewport: **partly**. "Account closed, you owe nothing" is clear, but the lead figure is
   **$4,962.30 returned to Bitso**, a number about Bitso, not the trader. "What now" (compete in
   Season 3, next request Jan 17 to 18) is in the aside.
2. **Components:** header (Season 3 chip, Closed pill $0.00), lead panel (label, display figure,
   paragraph, Closed pill, link to 01, settlement ledger, footer + Go to your own account),
   "What you keep" list (4 rows), Your next chance timeline (4 steps), Season 3 so far (2 meters,
   caption).
3. **Missing:**
   - The two performance floors still to meet in Season 3: net PnL positive and max DD 25%. Only
     trading days shown; the request needs all three.
   - When a new account would start if granted (Jan 19, assuming the pattern seats day after
     request window, windows the day after that).
   - Why he could not request at the Season 2 close (Dec 18 to 19): he held a seat. One line makes
     the gap to Jan 17 understandable for a cold open.
4. **Superfluous / competing:**
   - "You owe nothing" in the paragraph, "The loss was Bitso's", "No debt" row, plus 01. Say it once.
   - "What you keep" list: "Your record" and "The leaderboard" are low value here; "The right to
     request" duplicates "Your next chance". Reduce to one line under the lead or drop the panel.
   - Settlement ledger "Payout: None, profit is only paid above the start" restates the obvious.
   - Footer "Your own account was never touched. Balance $1,284.20" overlaps "No debt" row.
   - Season 3 time left shown three times (header, timeline "27 days 22 hours", meter foot
     "28 days left") with two different values.
5. **Inconsistencies:**
   - Positions "closed at the 00:00 UTC mark" at 2,661.40 and 3,140.00: the same marks as Dec 19
     01:56, and equity exactly unchanged after 22h while trade count rose 58 to 61. Make the final
     marks and equity differ from 01 (e.g. ETH stop at 3,160.00 filled overnight) and deduct close
     fees, so returned = equity after fees.
   - "Season 3 so far: Day 2 of 30": Season 3 is Dec 19 to Jan 17, 29 days (as is Season 1).
     Use "Day 2 of 29" or state the season as dated, without a day count.
   - "28 days left in the season" vs "27d 22h" in header and timeline. Use one format.
   - Header is still `funded` with a red "Closed $0.00" pill while the trader now operates his own
     account. Header should show the own account ($1,284.20) or the member header with the account
     pill linking to F09.
   - Meters "Closed trades" and "Trading days" use amber (caution). In progress is not a warning;
     amber is reserved for warnings. Use the neutral fill as in F03.
   - Win rate 52.5% here vs 57.4% on 02: they are alternative outcomes, fine, but max DD 6.9% is the
     same in both while equity paths differ. Minor; align or vary deliberately.
6. **Visual:** lead figure in white with "returned to Bitso" reads like a balance the trader has.
   Lead panel ends with the primary button low on the page; the useful next step box is on the
   right at the same weight as the list. Closed pill in red plus red "$37.70 below" competes.

## Flow

**Sequence.** 01 to 02 and 01 to 03 is the right shape. Missing or worth deciding:
- **Window ending in profit** (the more common case for good traders): 01 only covers below.
  Either a 01b state or make 01 handle both (same layout, figure green, outcome card highlighted).
- **Result being read** at 00:00 UTC (positions closing, a few minutes of pending state): an
  inline state on 02/03 ("Closing positions, final figure in a moment") is enough; not a screen.
- **Short windows** (1 week, 2 weeks): rollover copy says "another month"; the flow should mention
  the window length as data ("Same length, 1 month") so the screens work for any length.
- **Equal to start** decision (see 01).
- Out of scope but linked: a window that hits the floor on the last day belongs to F06; link it
  from the 01 floor label rather than duplicating.
- Merge: none needed. Drop the "How it looked on Dec 19" links if the numbers stay as they are.

**Shared kit candidates.**
- Gap meter (floor, start, now, ceiling) from 01: also useful in F05 home and F06.
- Outcome card (icon, condition, consequence, link): F04 allocation and F06 use the same pattern.
- Carry/fact list (icon, key, sentence): used on 02 and 03 ("carry" class).
- Settlement ledger (kv rows with total): 03, F08 payouts, F09.
- Share card for X: also in F03/F08; must be one component with the referral link.
- Timeline (done/now/next): 01 and 03, also F04.
- Window summary stat row: 02 and F09.

## Fix list

### MUST
1. 02: make the final equity follow from 01 or remove the "How it looked on Dec 19" link. Recommended:
   both TPs fill, equity $5,117.26, +$117.26, +2.35%, no open positions carry; update payout card
   (80% $93.81, 20% $23.45), share card %, carry list row "Open positions: none".
2. 01 and 03: one closing model. Result read at mark at 00:00 UTC; positions closed at market;
   returned = equity after fees. 03 final marks and equity must differ from the Dec 19 snapshot,
   and the trade count must match the positions that actually closed.
3. 03: change the lead figure from "$4,962.30 returned to Bitso" to the trader's answer:
   "Account closed, -$37.70 (-0.75%). You owe nothing." with the next request date
   "Next request window Jan 17 to 18" as the second line and primary action next to it.
4. 03: show all request requirements for Season 3 (net PnL positive, max DD 25% or better, 15
   trading days) and the entry minimums together, not trading days alone.
5. 03: fix Season 3 length (29 days, not 30) and use one time-left value (27d 22h).
6. 02: replace "Max drawdown 6.9% of 10%" with a measure that matches the 10% rule ("Max loss used
   $128.90 of $500" or lowest equity vs floor).
7. 01/02: decide and state the equal-to-start rule consistently with BRIEF ("above the start" rolls
   over), then use the same words in both outcome cards and the 02 carry list.

### SHOULD
1. 01: add "$25K account, $5,000 USDC from Bitso" to the lead line so a cold open has context;
   delete the Window 1 card (or reduce to that one line).
2. 01: drop the Payouts card and the Max loss meter; the outcome card gains "First payout Jan 15
   only if it rolls over".
3. 01: TP/SL prices in neutral colour; rename column to "Break-even to start".
4. 02: move the "What carries into window 2" list directly under the figure; shrink or remove the
   equity curve and the 6 stat row (link "Window 1 report").
5. 02: payout basis wording to match F08 (high water mark), payout meter neutral, drop the
   "Payouts" carry row (card covers it).
6. 02: share card subtitle "Window 1 ended +8.04%", avoid "closed" for a rollover.
7. 03: say "You owe nothing" once; cut "What you keep" to one line ("No penalty, you can request
   again at the Season 3 close") or drop it; remove the ledger "Payout: None" row.
8. 03: switch header to the own account ($1,284.20) instead of "Closed $0.00".
9. 03: in progress meters neutral, not amber.
10. 03: one line explaining why the next chance is Season 3, not Season 2 (seat held at Dec 18).
11. 01: remove time left from the timeline (header and lead already show it).

### COULD
1. Add a profit variant of 01 (window ending in profit) or make 01 state agnostic.
2. Add an inline "closing positions" pending state for 00:00 on 02/03.
3. Collapse the 02 share panel to a single "Share window 1" action.
4. 03: add "If granted, the new account starts Jan 19" to the next chance timeline.
5. Extract gap meter, outcome card, carry list, settlement ledger and share card into the kit.
6. Phrase window length as data ("same length, 1 month") so the copy fits 1 and 2 week windows.
