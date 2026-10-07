# F07 Trading window end: review

Reviewer read: BRIEF.md (Alberto's answers 2026-10-06 as binding), manifest, the three sources, the three 1440 shots.
Persona: kestrel, $25K account, $5,000 USDC, 1 month window, window 1 Nov 19 to Dec 19.

Numbers were recomputed and agree across the flow: 01 unrealized -$30.45 (XAU -$7.70, ETH -$22.75); gap meter 46.23%
for $4,962.30 on a $4,500 to $5,500 scale; TP, stop and close-now scenarios ($5,115.36, $4,911.84, $4,960.38) follow from
the positions with about 0.028% fees; 02 split $92.29 + $23.07 = $115.36 (+2.31%); 03 ledger $4,938.94 minus $1.15 =
$4,937.79, -$62.21, -1.24%, and the ETH stop on Dec 18 plus the XAU fee rate match screen 01. Dates (Nov 19, Dec 19,
Jan 18, Season 3 Dec 19 to Jan 17, 28d 22h, "start by Jan 2") are correct. No daily loss, no payout dates, no activation,
no appeal anywhere. Good base; the work left is mostly removing and wording.

## 01 Window ending soon

Question: my window ends tomorrow and I'm below the start, what happens? First viewport answers it fully: -$37.70 below
$5,000, 22h 04m left, the two outcomes side by side. Strongest screen of the flow.

Components
- Header chip "Window ends in 22h 04m": KEEP. It is the screen's date stamp.
- H1 "-$37.70 below $5,000 with 22h 04m left": CHANGE to "-$37.70 below $5,000". The countdown is already in the chip;
  the end time is in the caption. One countdown per screen.
- Caption "$25K account ... Window 1 of 1 month, Nov 19 to Dec 19. Dec 18, 01:56 UTC now.": CHANGE. "Window 1 of 1 month"
  reads as "1 of 1". Write "1 month windows, window 1, Nov 19 to Dec 19, ends Dec 19, 00:00 UTC. Dec 18, 01:56 UTC now."
- Paragraph "Equity is read once at Dec 19 00:00 UTC, open positions included at their mark price": CHANGE. "At their
  mark price" is not defined by BRIEF, and next to "real closing prices" in the left card it creates a second price
  concept a pro will poke at (what if mark is $5,000.40 and the real close is $4,999.80?). Until Alberto defines it, say
  "Equity at Dec 19, 00:00 UTC, open positions included, decides between the two outcomes below." See questions.
- Trade button (primary): KEEP. Only action that changes the outcome.
- Gap meter (floor $4,500, delivered $5,000, $5,500 step, now): KEEP. It is the instrument this screen needs. CHANGE the
  left label "Floor $4,500, closes at once, any day" to "Floor $4,500" plus the rule once below; "any day" is noise.
- Two outcome cards: KEEP content, CHANGE behaviour. They are links to 02 and 03 (future states), so in the product they
  would navigate to a result that has not happened. Make them static; put the same-flow mockup link on a caption.
  Left card: KEEP "You owe nothing". Right card: "Open positions carry over" is not defined in BRIEF when profit is
  auto-claimed with unrealized PnL (see questions); keep it only if Alberto confirms.
- Frozen caption "An account that is frozen at 00:00 UTC closes, whatever its equity": KEEP, matches Alberto.
- Open positions table: KEEP. CHANGE the column "Break-even, this position alone, before fees" to "Price for $5,000"
  with a tooltip "this position alone, before fees". "Break-even" to a trader means entry plus fees, not account level.
  The header is the widest thing on the screen and pushes the table off balance.
- Scenario rows (both TPs, both stops, close now): KEEP. Precise and exactly what a pro wants the day before. CHANGE
  "$92.29 claimed for you" to "$92.29 to you" to match 02's "Your 80%".

Missing
- The Season 2 request window is open right now (Dec 18 00:00 to Dec 19 00:00 UTC) and kestrel cannot request because
  she holds an account. If the account closes at 00:00 the request window has just ended too. A trader below $5,000
  will ask "can I request a Season 2 seat in case I lose this one?" One line: "You hold an account, so you can't request
  in the Season 2 window that closes at the same time. Next chance: Season 3 close, Jan 17." Needs Alberto to confirm the
  rule first (question 3).
- Nothing tells the trader a reminder was sent; not needed, notifications are global. Do not add.

Superfluous or repeated: countdown twice (chip, h1); "00:00 UTC" five times (caption, paragraph, both cards, frozen
note); trim the cards to "Below $5,000" and "At or above $5,000" since the paragraph already names the time.

Visual: red gap segment and red "Now" label are fine (pass/fail). The coin gradient on XAU is an asset logo, fine.
Large empty area under the table is fine. No violet misuse.

## 02 Window rolled over

Question: I finished in profit, what carries into the next window? First viewport answers both halves (claim ledger,
carry list). The lead figure answers a different question though.

Components
- Header chip "Window 2 day 1 of 30": KEEP, it dates the screen and reflects the chosen length.
- H1 "+$115.36 window 1 closed in profit, rolled over": CHANGE. +$115.36 is gross profit; what the trader got is $92.29.
  Lead with "$92.29 to your account, window 2 started" or keep +$115.36 only if the ledger is shortened. A pro reading
  +$115.36 big and green will assume that is theirs. Pick one lead.
- Caption "... Window 1 ended Dec 19, 00:00 UTC, +2.31%. Dec 19, 00:05 UTC now.": KEEP.
- Trade button: KEEP.
- Ledger "Claimed for you at 00:00 UTC": KEEP. Rows are right. CHANGE "Equity read at 00:00 UTC, no open positions"
  to "Equity at 00:00 UTC" (the "no open positions" fact is repeated in the carry list).
- Caption "Unclaimed profit is claimed automatically ... You can also claim any time before. How claims work": KEEP.
- Carry list, 5 rows: CHANGE to 3 rows.
  - "Window 2" and "Window end" both carry Jan 18 and the length: merge into one row "Window 2, Dec 19 to Jan 18 (30
    days). At or above $5,000 on Jan 18, 00:00 UTC rolls over, below closes." Drop "the length was set when you
    requested and does not change" to the rules link; true but not this screen's question.
  - "Equity $5,000.00": KEEP but drop "The profit left with the claim" (the ledger just said so). Header acct chip also
    shows $5,000.00; acceptable.
  - "Open positions ... None were open at this rollover.": REMOVE on this screen. With none open it is a general rule
    the trader does not need now, and the rule itself is undefined (question 2).
  - "Max loss floor $4,500 ... moves up at $5,500 ... back to $4,500 after every claim": KEEP. This is the one thing that
    changed silently with the auto-claim and must be said.
- "How the read works" link to 01: CHANGE target to the rules page; 01 is a past moment, not documentation.

Missing
- Where the $92.29 landed in balance terms: own account now $1,376.49 (if $1,284.20 before). One clause in the total
  row ("own account now $1,376.49") closes the loop. COULD.

Inconsistency: overlaps f08-payouts/04-auto-claimed. If both ship, 02 should be the only place with the full split and
04 should link here (or the reverse). Decide one owner.

Visual: lead panel is one long column; two section titles plus a five row list makes it read as a document. Shortening
the carry list fixes it.

## 03 Account closed at window end

Question: I finished below the start, what now? First viewport answers: -$62.21, closed, owe nothing, ledger, next
chance at Season 3 close.

Components
- Header (member, Own $1,284.20, "Season 3 ends in 28d 22h"): KEEP. Correct switch from funded to member header and
  Payouts disappears. Own balance identical to Nov 6 is a demo artefact; COULD vary it.
- H1 "-$62.21 account closed, you owe nothing": KEEP.
- Caption with dates and -1.24%: KEEP.
- Paragraph "Equity was below $5,000 at the 00:00 UTC read ... real closing price, not the mark at the read": CHANGE to
  one sentence "Equity was below $5,000 at Dec 19, 00:00 UTC. Open positions were closed at their real prices." The
  ledger shows the mechanism; the paragraph repeats it.
- Ledger: KEEP. CHANGE row 3 label "XAU-USD long 1.10 oz, real close 2,663.60, fee $0.82 ... -$1.15": the value is the
  difference between the mark read and the real close plus fee, not the position's PnL. Write "XAU-USD closed at
  2,663.60 vs mark 2,663.90, fee $0.82". If Alberto drops the mark read (question 1), the ledger becomes delivered,
  positions closed at real prices, returned.
- Caption "Nothing was claimed ... ETH-USD short hit its stop at 3,160.00 on Dec 18, 18:37 UTC. The day before":
  CHANGE. Keep "Nothing was claimed: no profit above $5,000." The ETH stop story is history of the window and the app
  keeps no funded history (Alberto); it is also the only place the trader learns why equity dropped from $4,962 to
  $4,939, so if kept, make it a ledger row ("ETH-USD short stopped Dec 18, 18:37 UTC, -$48.86") instead of a caption.
- Footer "Your own account was not touched." + "Trade your own account": KEEP.
- Aside "Request again at the Season 3 close": KEEP heading and the dates line. CHANGE the rest: it rebuilds the F02
  home (two meters plus four bullets) inside a result screen. Keep one meter, Trading days 0 of 15 with "Start by Jan 2
  to reach 15" (the only binding constraint), and replace the bullets and the closed trades meter with a "Season 3
  rules" link. Prefer removing.
- "Each season starts from zero": KEEP, short and true.

Missing
- How long this result stays visible. Alberto: no history of past funded accounts in the app. If the ledger vanishes on
  next load, the trader needs to know (or get it by email). Question 4.
- Season 2 result line: kestrel competed on the Season 2 board with own money while funded. Not needed here. Do not add.

Visual: two column layout with a tall empty right column below the aside is fine. Bullet list at 12px is the weakest
type on the screen; removing it solves it.

## Flow

Sequence: ending (below) to rolled over, ending (below) to closed. Story is coherent: 01's TP scenario is exactly 02's
$5,115.36, and 03 continues 01 with the ETH stop. Cold open works: 01 states account, window, date and both rules.

States missing
- Window ending while in profit (the common case). Nothing to decide, but a pro will want to see "auto-claim of
  $X at 00:00, floor goes back to $4,500" the day before, especially if the floor is currently at $5,000 after +10%.
  SHOULD only if the f05 home does not already show the window end line; otherwise skip.
- Window end while frozen: covered by one caption in 01 and by F06; no screen needed.
- 1 week and 2 weeks variants: copy already follows the length; no screen needed.

Redundant: 02 vs f08 04-auto-claimed (see 02).

## Fix list

MUST
1. 01 and 03: remove or neutralize "read at mark price". BRIEF defines only that closed accounts settle at real closing
   prices; the mark read is an invented second rule that makes the close decision ambiguous. Ask Alberto (Q1).
2. 01 card and 02 carry row: "Open positions carry over" with profit auto-claimed is undefined (unrealized profit?).
   Remove from 02, mark as pending in 01 until Alberto answers (Q2).
3. 03: no funded history is kept (Alberto). The ETH stop caption with "The day before" link presents window history;
   turn it into a ledger row or drop it, and do not imply the screen stays as a record (Q4).

SHOULD
4. 01 h1: drop "with 22h 04m left" (countdown already in chip).
5. 01 caption: "1 month windows, window 1" instead of "Window 1 of 1 month".
6. 01 table: rename "Break-even, this position alone, before fees" to "Price for $5,000" with tooltip.
7. 01 outcome cards: static, not links to future states.
8. 02 lead: pick one figure, the trader's $92.29, or label +$115.36 clearly as gross profit.
9. 02 carry list: 5 rows to 3 (merge Window 2 + Window end, remove Open positions).
10. 03 ledger row 3: label as mark vs real close difference.
11. 03 aside: one meter plus a rules link; remove closed trades meter and bullets.
12. 01: one line on the Season 2 request window being open and not available while funded, once Q3 is answered.

COULD
13. 01: cut "00:00 UTC" repetitions in the cards.
14. 02: "How the read works" should link to rules, not to screen 01.
15. 02 total row: show the new own account balance.
16. Decide one owner between 02 and f08 04-auto-claimed.
17. 03: vary the own balance from the Nov 6 $1,284.20.

## Questions for Alberto (undefined rules)

1. At window end, what equity decides rollover vs close: mark at 00:00 UTC, or real closing prices? If mark says
   $5,000.40 and the real close lands at $4,999.80, does the account roll over or close?
2. At rollover, are open positions kept? If yes, is the auto-claim on realized profit only, or on equity including
   unrealized PnL (which means paying out margin of open positions)?
3. A 1 month window ends exactly when the season request window ends (Dec 19 00:00). Can a funded trader whose window
   ends inside a request window request a seat conditionally, or do they always skip one season?
4. After a funded account closes, how long is its result shown, and is it sent by email? ("No history kept" leaves the
   closing ledger with no home.)
5. Fees on the final close at window end: same taker fee as the terminal, and borne by the account (reducing what
   returns to Bitso)? Screens assume yes.
