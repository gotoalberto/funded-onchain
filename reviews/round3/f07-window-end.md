# F07 Trading window end: review (round 3)

Scope: 01-window-ending, 02-rolled-over, 03-window-closed. Screenshots at 1440 full page, sources read,
every figure recomputed against BRIEF demo data and Decisions.

Arithmetic check (all correct): gap 5,000 to 4,962.30 = -37.70; unrealized -7.70 + -22.75 = -30.45;
break-even XAU 2,661.40 + 37.70/1.10 = 2,695.67, ETH 3,140 - 37.70/1.25 = 3,109.84; both TPs fill
= 5,115.36 (matches screen 02); both stops = 4,911.84; screen 03 settlement 4,938.94 - 1.15 =
4,937.79, loss 62.21, -1.24%; 80% of 115.36 = 92.29; Dec 20 to Jan 15 = 26 days, week 5 of 8;
Season 3 day 2 of 29, 27d 22h left at Dec 20 02:00. Dates of fills (Dec 19, after 01:56) agree
with screen 01. The numbers are trustworthy; the problems are wording, repetition and two rules.

---

## 01-window-ending (Dec 19, 01:56 UTC, equity $4,962.30)

1. **Question:** "My window ends tomorrow and I'm below the start. What happens?"
   First viewport answers it: lead -$37.70 below the start, time left, gap meter, two outcome cards.
   Good screen, the strongest of the flow.

2. **Components**
   - Header chip "Window ends in 22h 04m": KEEP. It is the screen's date context.
   - Lead figure -$37.70 + "below the $5,000.00 start": KEEP. Right figure, it is the distance to survive.
   - Caption "$25K account, $5,000 USDC... Window 1, 1 month, Nov 20 to Dec 20": KEEP, change "1 month" (see 4).
   - Paragraph "Equity is $4,962.30. At 00:00 UTC on Dec 20 equity is read once, with open positions
     at their mark price": CHANGE. Keep the rule sentence (pro traders need "read once, at mark"),
     drop "Equity is $4,962.30" (it is in the header pill and on the meter "Now" label).
   - Lead side "Time left 22h 04m" + "Dec 19, 01:56 UTC now": CHANGE. The countdown is already in the
     header chip; keep only the date caption so the screen reads cold.
   - Gap meter (floor $4,500, start $5,000, now): KEEP. Rules as instruments, exactly the FTMO idea.
     Change: the right end "$5,100.00" is an arbitrary scale value that reads like a target; drop the
     label or end the track just past the start. The "Now" knob has a 7px red halo: remove (no glows).
   - "Max loss floor $4,500.00 / Closes at once, any day": KEEP. Wording should use the Decisions
     form "Max loss 10%, floor $4,500".
   - Two outcome cards (below / at or above): KEEP. Change: order. Put "At or above" left or keep
     "Below" left but both must be equal weight; fine now. Remove the "See this outcome" links in the
     product (mockup navigation, they read as actions). Keep one same flow link somewhere (tests).
   - Rollover card text "Dec 20 to Jan 19": CHANGE (see 4).
   - Daily loss meter "$41.80 of $250, resets 00:00 UTC": KEEP but it is secondary; it matters only
     because a daily pause before 00:00 would block recovery. Say that, or move it under positions.
   - Primary "Trade": KEEP. One violet action, correct.
   - Open positions table: KEEP. Change the column "Break-even to start" to "Break-even, this
     position alone" and add "before fees"; as written a trader may add the two rows up.
   - Panel head "Unrealized -$30.45 of the $37.70 gap": KEEP (useful decomposition, realized -7.25).
   - Scenario rows (both TPs, both stops, close both now): KEEP. Best trust element in the flow.
     Change: name the outcome per row ("rolls over" / "closes") instead of only "above/below the start".
   - MISSING: what happens if the account is paused by daily loss at 00:00, or frozen. One line.

3. **Information:** $4,962.30 shown 3 times (header pill, paragraph, meter). Countdown 2 times
   (header chip, lead side). "$5,000.00" appears 7 times on one screen; acceptable as the anchor,
   but the outcome card titles could say "Below the start" / "At or above the start".

4. **Inconsistencies**
   - "1 month, Dec 20 to Jan 19" (30 days) here and in 02, but F04 05-home-already-funded says
     "another month, Dec 20 to Jan 20". Window 1 "Nov 20 to Dec 20" is 30 days and a calendar month
     at once, so the ambiguity only shows on window 2. Pick one and use it in F04, F07, F08.
   - Links are styled `.link` = `--primary` violet ("See this outcome"). Colour rule says violet only
     for primary action, selection, own row. Kit level issue, applies to every flow.

5. **Hierarchy:** OK. The lead panel is long (lead, meter, two cards, footer) and pushes the positions
   table to the fold edge at 900px; removing the duplicated equity sentence and countdown helps.

---

## 02-rolled-over (Dec 20, 00:05 UTC, equity $5,115.36)

1. **Question:** "I finished in profit. What carries into the next window?"
   Answered in the first viewport. Lead +$115.36 answers "how did I finish", the carry list answers
   the actual question. Acceptable.

2. **Components**
   - Header chip "Window 2 day 1 of 30": KEEP. Confirms "30", which conflicts with "1 month" (see 4).
   - Lead +$115.36 "window 1, rolled over": KEEP.
   - Caption "$25K account... Window 1 ended Dec 20, 00:00 UTC": KEEP.
   - Paragraph "Equity finished at $5,115.36, +2.31%... rolled over into window 2... Dec 20 to Jan 19.
     Nothing to sign.": CHANGE. Cut to "Rolled over into window 2, Dec 20 to Jan 19. Nothing to sign."
     $5,115.36 is in the header pill and the Equity row; "rolled over" is in the h1.
   - Lead side "Dec 20, 00:05 UTC now" KEEP; "How it looked on Dec 19" REMOVE in the product
     (mockup back link; keep a same flow link for the tests elsewhere, e.g. in the footer).
   - Carry list:
     - Equity "stays in the account. Nothing is withdrawn at a rollover": KEEP.
     - Open positions "None. Both take profits filled...": CHANGE. This is history, not carry. Say
       "None open. Positions open at 00:00 would carry over unchanged." That states the rule, which
       is what a trader who holds positions needs.
     - Loss limits "Daily loss $250... Max loss 10%, floor $4,500.00. Both stay based on the
       $5,000.00 start": KEEP. Exactly the trust fact a prop trader looks for.
     - Next window end "Jan 19... at or above $5,000.00 rolls over again, below closes": KEEP.
   - Footer "Window 1: 60 closed trades, lowest equity $4,871.10": REMOVE (stats, answers nothing here).
   - Primary "Trade": KEEP.
   - Aside "First payout Jan 15, 2027": KEEP, but CHANGE (MUST, see 4): add the amber warning.
   - "Your 80% if it held $92.29": KEEP. Week 5 of 8 meter: KEEP.
   - Share card "Share window 1, +2.31%": COULD remove. A +2.31% card is weak and +2.31% already
     shows in the lead. If kept, it is fine (glass button, not violet).

3. **Information:** Repeated: $5,115.36 (3x), +$115.36 (lead and aside), +2.31% (lead and share),
   Jan 19 (3x: paragraph, carry row, aside caption). Superfluous: lowest equity, TP fill times.

4. **Inconsistencies**
   - Decisions: "warn in amber when a window ends before the next payout date". Window 2 ends Jan 19,
     the payout after Jan 15 is Feb 15. The aside only says in muted grey "Jan 15 falls in window 2,
     which ends Jan 19". It must be an amber note: claiming on Jan 15 brings equity back to $5,000.00,
     so any loss between Jan 15 and Jan 19 closes the account; claims stay open until Feb 15.
     F08 03/04 already carry this banner; F07 must match.
   - "1 month" vs "30" days vs F04 "Dec 20 to Jan 20" (same as screen 01).

5. **Hierarchy:** Fine. The aside is visually as heavy as the lead; the payout pill "Jan 15, 2027"
   competes with the h1. Large empty area below; not a problem.

---

## 03-window-closed (Dec 20, 02:00 UTC, own account $1,284.20)

1. **Question:** "I finished below the start. What now?"
   Half answered. The first viewport says what happened (-$62.21, closed, owe nothing) and when the
   next chance is (Jan 17 to 18), but not what stands between the trader and that chance: they are
   not even on the Season 3 board (6 of 10 trades) and need 13 more trading days.

2. **Components**
   - Header switches to member, "Own $1,284.20", Season 3 chip: KEEP. Correct state change.
     COULD: the "Funded" badge next to the logo now reads like account status; it is the product
     name, confirm with Alberto.
   - Lead -$62.21 "account closed, you owe nothing": KEEP the figure; "you owe nothing" is the key
     reassurance.
   - Caption "...Window 1 ended Dec 20, 00:00 UTC, -1.24%": KEEP.
   - Paragraph "...Your next chance is the Season 3 request window, Jan 17 to 18": CHANGE (MUST).
     Decisions: when a floor is unmet the headline names the blocker. Write "Next chance: Season 3
     close, Jan 17. You need 4 more closed trades to be on the board and 13 more trading days to
     request." Then the aside does not need to restate the dates.
   - Settlement table (start, equity read at mark, market close fee, returned to Bitso): KEEP.
     Pro traders will check the read versus the close; this proves it. Change: the lead -$62.21 is
     the returned figure while the read was 4,938.94 (-61.06); add "Result -$62.21" as the last row
     or label the lead "returned to Bitso" so the two numbers reconcile.
   - Caption "ETH-USD short... hit its stop at 3,160.00... Window 1: 60 closed trades": KEEP the
     stop line (explains the drop from screen 01), REMOVE "60 closed trades".
   - Footer "Your own account was not touched. You keep competing on it in Season 3": KEEP.
   - Primary "Go to your own account": CHANGE. The trader is already home; the button leads to F09.
     Name the action: "Trade your own account", or drop the button and let the aside lead.
   - Aside "Season 3, to request a seat", pill "Day 2 of 29": CHANGE. The paragraph repeats
     "requests open again at the Season 3 close, Jan 17 to 18" (already in the lead) and "you held
     a seat at the Season 2 close" (history). Keep "No penalty for this account" only.
   - Entry minimums (trades 6 of 10, volume, balance) and floors (PnL, drawdown, trading days 2 of
     15): KEEP the two unmet ones (closed trades, trading days); collapse the four met ones into one
     line "Volume, balance, PnL and drawdown met". Balance $1,284.20 duplicates the header pill.

3. **Information:** Missing: the blocker in the headline; whether the closed account's window 1
   record shows anywhere (history). Repeated: Jan 17 to 18 (2x), $1,284.20 (2x), Season 3 dates
   (chip, lead, aside). Superfluous: trade count, "you held a seat at the Season 2 close".

4. **Inconsistencies**
   - Honesty rule (Decisions): "Your next chance is the Season 3 request window" with floors unmet
     and entry minimums unmet. Must name the blocker.
   - "How it looked on Dec 19" (violet link) same as 02.

5. **Hierarchy:** The aside (five meters and checks) is visually denser than the lead and draws the
   eye first. With the blocker in the lead and met rows collapsed, the aside becomes support.

---

## Flow

Sequence: ending (below start) to two outcomes is complete for the demo path and reads cold, each
screen carries its own date. Missing or undefined states:
- Window ending while above the start (most common for a profitable trader): does 01 exist in a calm
  variant, and does it show the payout warning? Probably one line on F05 home is enough; no new screen.
- Rollover with open positions carried (02 only shows "None"). The rule must be stated, not shown.
- Window end while paused by daily loss or frozen (F06): what is read and what happens.
- Window end when the trader claimed a payout days before (Jan 15 claim, Jan 19 end): covered by F08,
  but 02 must warn.
- Notification: no bell or email state for "window ends in 24h"; the bell dot is the obvious place.
- 1 week and 2 week windows: copy is month specific in places ("1 month"); Decisions require copy to
  follow the chosen length.
Redundant: none. Three screens is right.

## Prioritized fixes

MUST
1. 02 aside: add the amber note required by Decisions: claiming on Jan 15 resets equity to $5,000.00
   and window 2 ends Jan 19, so any loss in between closes the account; claims stay open until Feb 15.
   Same text as F08 03.
2. 01, 02 and F04 05: one definition of window length. Today F07 says "1 month, Dec 20 to Jan 19"
   (30 days, header "day 1 of 30") and F04 05 says "Dec 20 to Jan 20". Use the same end date everywhere.
3. 03 lead paragraph: name the blocker (4 more closed trades to be on the board, 13 more trading days
   to request) instead of only "your next chance is Jan 17 to 18".
4. 01 table: rename "Break-even to start" to "Break-even, this position alone, before fees" so the
   two rows are not read as additive.

SHOULD
5. 01: remove "Equity is $4,962.30" from the paragraph and the "Time left 22h 04m" stat (both already
   in the header). Keep the read-at-mark rule and the date caption.
6. 03: rename the primary to an action ("Trade your own account") or drop it; collapse the four met
   rows of the aside into one line; drop the aside paragraph that repeats Jan 17 to 18.
7. 02: replace the "Open positions: None, both TPs filled..." row with the rule "Positions open at
   00:00 carry over unchanged". Remove the footer "60 closed trades, lowest equity".
8. 02: shorten the lead paragraph to window 2 dates plus "Nothing to sign".
9. 03: reconcile -$62.21 with the settlement table (label as returned, or add a result row).
10. 01: state in one line what happens if the account is paused or frozen at the 00:00 read.
11. All: `.link` is violet; per colour rule text links should be neutral (kit decision, every flow).

COULD
12. 01: drop the "$5,100.00" scale end and the halo on the Now knob (no glows).
13. 02: remove the share card (+2.31% repeats the lead and is a weak share).
14. 01: in the scenario rows, say "rolls over" / "closes" next to each projected equity.
15. Remove "How it looked on Dec 19" and "See this outcome" links in the product spec; keep one
    same flow link per page only for the mockup tests.
16. 03: question the "Funded" logo badge for a trader who no longer holds an account.

## Undefined product rules (questions for Alberto)

1. Window length: is "1 month" a calendar month (Dec 20 to Jan 20) or 30 days (Dec 20 to Jan 19)?
   And are 1 week / 2 weeks exactly 7 / 14 days from 00:00 UTC?
2. Close at window end: equity is read at mark at 00:00, positions closed at market after. If the
   market close lands differently from the mark, who carries the difference, and could a trader who
   was below at the read end up above after the close (or the reverse)?
3. Exactly $5,000.00 at the read: "at or above rolls over" is in Decisions; confirm equality rolls over
   also after a payout claim that set equity to exactly $5,000.00.
4. Window end while paused (daily loss) or frozen: is equity still read at 00:00, and does a frozen
   account roll over or close?
5. Can the trader change the window length at rollover, or close the account voluntarily before the
   window ends (and does a voluntary close above the start pay out the profit)?
6. Does a closed account's record (window 1 result) stay visible to the trader anywhere, e.g. Stats
   or a history list? Decisions only say not to claim it stays public.
7. Notifications: is the trader alerted (in app, email) 24h before the window end?
