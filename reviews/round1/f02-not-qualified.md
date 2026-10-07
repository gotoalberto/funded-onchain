# F02 Not qualified yet: review

Scope: 01-home-new, 02-deposit, 03-home-progress, 04-home-on-board, 05-alias. Screenshots at 1440, sources read for copy and links.

## Cross-cutting findings first

1. **The trading days floor is out of reach on 01.** On Nov 6 a trader with 0 closed trades has 12 days left and needs 15 trading days. Step 3 on 01 says "You request one on Nov 18" anyway. A cold reader will plan for a seat they can't get this season.
2. **01 and 03 contradict each other.** 03 lists 5 onchain.cc trades closed Oct 24 to Nov 5, before the deposit (Nov 6 08:41). The same account must therefore show 5 of 10 trades and $430 volume on 01, not 0 of 10 and $0. Either 01 shows those trades ("5 from onchain.cc") or every trade in 03 lands after the deposit.
3. **The clock is off.** "12d 04h left" until Nov 18 00:00 UTC puts "now" at Nov 5 about 20:00 UTC. Yet 03 and 04 show trades on Nov 6 at 10:22 and 10:58. At Nov 6 10:58 the countdown is 11d 13h. This comes from the BRIEF demo data, so it affects every flow. Fix it once there, either by moving "today" to Nov 5 or by changing the countdown.
4. **Countdown said three times per screen.** The header chip says "Season 1 ends in 12d 04h", the side card says "12d 04h left", and the timeline row says "Now. 12 days 04 hours left". On 04 the amber warning adds "12 days are left". Keep the header chip and the side card only.
5. **Eyebrows.** "Season 1 leaderboard" (01, 03) and "You're on the leaderboard" (04) are small labels above the main heading or figure. The brief forbids eyebrows.
6. **Colour rules.**
   - Band chips in "What the seats are worth" (01) use amber ($200K), orange ($50K) and violet ($25K). Amber is for warnings only, and violet is for primary, selection and the own row only.
   - On 04 the seat cut tick is green and the #1 tick is amber.
   - On 03 Long and Short are coloured green and red, but green and red are for PnL and pass/fail only.
7. **Trade is a dead end.** Every Trade button points to f03-competing/05-trade.html, which the build makes inactive. That's fine as documentation, but 03's primary action goes nowhere inside this project. State it in the flow index, or link to a static trade screen.
8. **The balance rule is unclear.** "Keep it at $100 or more" (03) implies a continuous requirement, but nothing says what happens if the balance drops below $100 after the trader is on the board (removed? frozen rank?). The brief only says "$100 balance, inside the season". The rule must be defined, then shown once.

## 01-home-new

1. **Question:** "What do I need to do to get on the board?" Viewport: **yes**. All three minimums are visible, each with its action. The lead figure "0 of 3" carries no information, though. The meters below it answer the question; the headline does not.
2. **Components:**
   - Header: countdown chip, Own $0.00 account pill, + button, bell
   - Lead panel: label, display figure, paragraph
   - Minimums panel: 3 rows of icon, meter and action button
   - Info banner "Trades on onchain.cc count here too"
   - 3 step cards "Once all three are met"
   - Season timeline card
   - "What the seats are worth" band table
3. **Missing:**
   - That 15 trading days are no longer possible in Season 1, with the Season 2 dates (Nov 19 to Dec 18, requests Dec 18 to 19).
   - The exact cutoff "Nov 18, 00:00 UTC" in the lead copy ("before Nov 18" is ambiguous by a day).
   - Rank ranges per band in the seats table.
4. **Superfluous or competing:**
   - The two identical Trade buttons (trades and volume are met by the same action).
   - The "Once all three are met" 3-step block duplicates the timeline.
   - The seats table duplicates step 2 ("$5,000 to $200,000").
   - The page has 6 panels for one question, so cut at least two.
5. **Inconsistencies:**
   - 0 trades contradicts 03 (see cross-cutting 2).
   - Step 3 promises a request that can't happen (cross-cutting 1).
   - Eyebrow "Season 1 leaderboard".
   - Band chip colours.
6. **Visual:** The violet Deposit is correctly the only primary action. The display "0 of 3" is the biggest thing on the page and the least useful. The right column ends at 735px while the left runs to 780px, which is acceptable.

## 02-deposit (modal over 01)

1. **Question:** "How do I fund my own trading account?" Viewport: **yes**. Sources, amount and summary all fit, and the CTA "Deposit 250 USDC" names the action.
2. **Components:** modal header with close, source radio cards (4), amount input with quick chips, inline success hint, summary list, Back plus primary button.
3. **Missing:**
   - The minimum deposit, if any.
   - What happens after pressing the button: no pending or arrived state (see flow).
4. **Superfluous:**
   - The wallet balance appears twice ("holds 1,412.08 USDC" on the source card and "Wallet: 1,412.08 USDC" above the input). Keep the one above the input.
   - "Back" next to the X does the same thing. Use one, labelled "Cancel".
   - Four sources is a lot. Card is the least relevant for this crowd (see 5).
5. **Inconsistencies:**
   - The card on-ramp ("Visa or Mastercard, converted to USDC") implies an identity check in practice, which conflicts with "NO KYC anywhere". Drop it, or confirm it runs with no verification step.
   - "From Bitso" is fine; it is not a funder mention.
6. **Visual:** Clean. The selected source card and the $250 chip both use violet selection, which is correct.

## 03-home-progress

1. **Question:** "How close am I?" Viewport: **yes**. "3 more trades and $360 of volume" is the right leading figure: specific and actionable.
2. **Components:**
   - Lead panel with a "1 of 3 minimums met" pill
   - Minimums panel (one row met, with a "Met" pill)
   - "Trades that count so far" table (7 rows) with "Placed on" source chips
   - Season timeline card
   - "When the last one is met" card linking to 04
3. **Missing:**
   - Feasibility of the trading days floor. The trader has 5 days and needs 15, with about 11 to 12 days left, so the only way to qualify is to trade on 10 of the next 12 days. 04 says this, but it is already true and urgent here.
4. **Superfluous:**
   - The trades table (7 micro trades, 7 columns) is the second-heaviest block and competes with the lead. Collapse it to one line ("7 trades counted, 5 from onchain.cc") with a "See trades" link, or limit it to the 3 latest.
   - The second Trade button.
   - "That is all that stands between you and the board." is filler with a marketing tone. Keep only "Three round trips of $60 would cover both."
   - The timeline is identical to 01. On a progress screen the countdown alone is enough.
5. **Inconsistencies:**
   - The header shows Own $250.00, but the two Nov 6 trades after the deposit net +$1.95, so the balance should be about $251.95.
   - "Size $60.00" next to "Volume $120.00" is correct (open plus close), but "round trips of $60" should say "$60 positions".
   - The link copy "What you will see on the board" is mockup navigation, not product copy.
   - Eyebrow "Season 1 leaderboard".
6. **Visual:**
   - The violet Trade on row 2 and the glass Trade on row 3 sit side by side, a double action.
   - The green "Met" pill sits where an action button would be, which breaks the column rhythm a little. That's acceptable.

## 04-home-on-board

1. **Question:** "I made it. Where do I stand?" Viewport: **partly**. #812 and the score track answer it. But the alias banner, the floors and the score breakdown all fall inside the first 900px and pull attention. Two primary-looking actions compete: a filled violet "Choose an alias" and a glass Trade.
2. **Components:**
   - Lead panel: rank display, "All 3 minimums met" pill, score block, score track with You / Seat cut / #1 markers, gap line with Trade
   - Alias banner with primary button
   - Floors panel: 3 floor meters, amber warning line
   - "Around you" table (5 rows)
   - "What your score is made of" breakdown (6 weighted bars)
   - Season card linking to the F03 home
3. **Missing:**
   - The max per factor in the score breakdown ("71.2 of 300"). Without it the bars and numbers can't be read against each other.
   - That the seat cut is a projection (ranks count among requesters, so the cut moves).
   - That the floors also apply; the lead says "the top 60 who request at the close get a seat".
4. **Superfluous:**
   - The "Band now" column, which reads "No seat" in all 5 rows. Drop it on this screen.
   - "Around you" plus the score track plus the breakdown is three views of the same position. Keep the track. Move "Around you" behind "Full leaderboard" and the breakdown behind a "What moves your score" link, or into F03.
   - The season card repeats the countdown a third time.
   - In effect 04 is the F03 home. Make it the arrival state of that home (a one-time "You're on the board" banner plus the alias prompt) rather than a full parallel layout.
5. **Inconsistencies:**
   - Own $258.92 doesn't match the trades. 250 + $1.95 (Nov 6 trades) + the $3.60 that the last 3 trades must add to reach net PnL +$9.85 gives about $255.55.
   - Score parts sum to 402.1 (correct), and return +3.9% matches 9.85 / 250.
   - Amber #1 tick and green cut tick break the colour rules.
   - The eyebrow "You're on the leaderboard" above #812.
   - "12 days are left ... 10 of the next 12 days": if today counts, about 11 days remain (cross-cutting 3).
6. **Visual:**
   - The page is dense, with 5 blocks of roughly equal weight. Home should be calm.
   - The alias banner sits between the lead and the floors, which breaks the reading order. Move it below, or into a dismissible toast.
   - "Choose an alias" is the only filled violet button on the page, so it reads as the primary action of a screen about rank.

## 05-alias (modal over 04)

1. **Question:** "How will others see me on the board?" Viewport: **yes**. The preview row shows exactly how kestrel will look.
2. **Components:** modal header, text input with availability status, rule checklist (3), preview leaderboard row, referral link note, radio pair "Use the alias / Stay as", Not now plus Save alias.
3. **Missing:**
   - Error states: alias taken, invalid characters, too short. Show at least one.
   - What happens to shared cards and the old referral link when the alias changes. If the link depends on the alias, a change breaks every link already shared. Say whether old links keep working.
4. **Superfluous:** The radio pair duplicates the buttons. "Stay as 0x7a3F…c91E" equals "Not now", and with it selected "Save alias" has the wrong label. Remove the radios.
5. **Inconsistencies:**
   - "Not taken this season" plus "change once per season" suggests aliases are scoped per season, while the referral link implies a permanent identity. Pick one: "Not taken" (permanent).
6. **Visual:** Fine. The underlying 04 is blurred correctly.

## Flow

**Sequence completeness.** Missing states, in order of need:

- **Deposit submitted / arrived.** After "Deposit 250 USDC" the flow jumps straight to 03, which already has 2 new trades. Add a toast or pending row on 01 ("250 USDC arriving, about 1 min"), then 01 with balance met (1 of 3, 0 new trades).
- **Season 1 out of reach for floors.** 01 must say it. The flow needs a state such as "Minimums met, but too few trading days left to request in Season 1. Your rank still counts; next request window Dec 18 to 19."
- **Season closed before the minimums were met.** What the trader sees on Nov 18 and 19 if still 2 of 3, and that Season 2 starts Nov 19 from zero (or what carries over).
- **Balance dropped below $100 after reaching the board**, once the rule is defined.
- **Alias error state** (taken).

Merge or drop:

- 04 into the F03 home as an arrival state. If it stays in F02, cut it to lead plus floors plus season card.
- The 01 step cards, merged into the timeline.

**Shared kit components** (needed in more than one screen or flow):

- Minimum row: check icon, meter, action or Met pill (01, 03)
- Floor meter with pass/warn icon (04, F03, F04)
- Season timeline card with countdown (01, 03, 04, F03)
- Score track: You / cut / #1 (04, F03)
- Leaderboard row and "Around you" table with YOU tag and avatar letter (04, 05 preview, F03)
- Score breakdown with weights and max per factor (04, F03 stats)
- Band chip, with one neutral palette (01, 04, F03, F04)
- Deposit modal, reached from the header "+" and the Own pill in every flow
- Alias modal (F02, F03, F09)
- Info banner with icon (01 onchain.cc note, 04 alias)
- Source chip "Placed on" (03, F05 fill review)

## Fix list

### MUST
1. **01:** Resolve the 15 trading days impossibility. Change step 3 to "Seats need 15 trading days. With 12 days left, Season 1 requests are out of reach; your board rank still counts and Season 2 requests open Dec 18", or move 01's "today" to before Nov 3.
2. **01 vs 03:** Make the trade history agree. On 01 show "5 of 10, 5 from onchain.cc", $430 of $1,000 and the right "to go" figures, or move every 03 trade after the deposit.
3. **BRIEF, all screens:** Fix "today" against the countdown. At Nov 6 10:58 UTC, 12d 04h is wrong. Use Nov 5 ~20:00 with trades on Nov 5, or show 11d 13h.
4. **05:** Remove the "Use the alias / Stay as" radios. Keep Not now plus Save alias.
5. **05:** State whether the old referral link and share cards keep working after an alias change. Drop "this season" from "Not taken this season" unless aliases really are per season.
6. **02:** Remove the Card source, or confirm it involves no identity check. Otherwise it contradicts the no-KYC rule.
7. **01, 03, 04:** Remove the eyebrows ("Season 1 leaderboard", "You're on the leaderboard"). Make the figure or sentence the h1.
8. **04:** One primary action. Make "Choose an alias" glass, or move it to a toast, and keep Trade as the primary.
9. **01, 04:** Band chips and track ticks must use neutral colours (no amber, orange or violet for bands; no green or amber ticks).
10. **Brief/rules:** Define the $100 balance rule after the trader reaches the board, then show it once (03 "Keep it at $100 or more" foot).

### SHOULD
1. **01:** Replace the "0 of 3" display with the to-do figure in the 03 pattern: "$100, 10 trades, $1,000 volume".
2. **01, 03:** One Trade button per screen (on the trades row), and drop it from the volume row.
3. **01:** Drop the "Once all three are met" cards (the timeline says it). Add rank ranges to the seats table, or drop the table and keep one line: "60 seats, $5K to $200K accounts, 80% of profit to you".
4. **03:** Collapse the trades table to a one-line summary with a link, and add the trading days feasibility line now.
5. **03, 04:** Fix the Own balance ($251.95 and about $255.55, or adjust the trade PnLs).
6. **04:** Drop the "Band now" column, show the max per factor ("71.2 of 300"), and label the cut "Projected seat cut".
7. **04:** Move "Around you" and the score breakdown behind links, or into F03. Keep lead plus floors plus season.
8. **02:** Show the wallet balance once. Replace Back with Cancel, or drop it (the X exists).
9. **Flow:** Add the deposit pending / 1 of 3 state and the season closed with minimums unmet state.
10. **All:** Remove the timeline row "Now. 12 days 04 hours left" and the countdown repeats.

### COULD
1. **03:** Neutral colour for Long/Short. Rewrite "round trips of $60" as "$60 positions", and the link to "See the board".
2. **01:** Add "Funded windows start Nov 20" to the last timeline step.
3. **05:** Add an alias taken error state, and a 04 variant showing kestrel after saving.
4. **01:** Write the cutoff as "before Nov 18, 00:00 UTC" in the lead paragraph.
5. **Flow index:** Note that Trade and Leaderboard live in F03 and are inactive in this build.
