# F08 Payouts, review

Persona kestrel, $25K account ($5,000 USDC), started Nov 20, 2026. Window 1 Nov 20 to Dec 20, window 2 Dec 20 to Jan 19 (30 days each). First payout Jan 15, 2027.

Date math checked and correct: Dec 1 is day 12 of window 1 and day 5 of week 2 (71%); Dec 1 to Jan 15 is 45 days; Jan 15 is day 27 of window 2; 80/20 of $1,240.50 = $992.40 / $248.10; 80/20 of $184.60 = $147.68 / $36.92; review meter 6h 12m of 24h = 25.8%.

## 01 Payouts, before week 8

1. Question: "When can I get paid for the first time?" Yes. The H1 "First payout from Jan 15, 2027" answers it in the first line, and the week strip shows the path.
2. Components: lead panel (H1 date, explanation, "$25K account, started" stat), week strip (8 weeks plus a payout cell, window end flag), rollover caption, three figures (profit, your 80%, Bitso 20%) plus Trade button, Payout history (empty table with an empty state), aside "How payouts work" (6 items), aside "Your account now" (equity, start, window end).
3. Missing:
   - The payout falls inside window 2, four days before it ends (Jan 19). That trap is the main point of 02. Cold, 01 only mentions the Dec 20 rollover. One clause covers it: "Jan 15 falls in window 2, which ends Jan 19."
   - The account is quoted as "$25K account" only. The brief says to always quote both: "$25K account, $5,000 USDC".
4. Superfluous or competing:
   - The three-figure row competes with the date. "Bitso 20% $36.92" is noise this early, and "Your 80% if it held" is a hypothetical. Keep at most one line: "+$184.60 above start, $147.68 yours if it held."
   - The Payout history section with an empty table header adds nothing before the first payout. Drop it, or keep only one muted line.
   - The "Your account now" aside repeats the header chip (equity), the H1 context (start) and the strip (window end). Drop it.
   - "How payouts work" has six items, and two say the same thing ("Equity goes down by the profit paid" and "less earlier payouts"). Cut it to four.
5. Inconsistencies:
   - "every month on the 15th" is a rule only for this account. A Season 2 seat starts Dec 20, so its week 8 lands on Feb 14. Use "then monthly, same day (Feb 15, Mar 15)".
   - "Of the profit above the $5,000 start, less earlier payouts" contradicts 02 ("each payout takes all profit above the start, so the line stays at $5,000"). With a full reset, nothing is ever subtracted. F07 02 also says "less what was already paid". Pick one model (the brief says high water mark) and word it the same everywhere.
   - "at or above $5,000.00" vs the brief's rollover rule "in profit (above starting USDC)". Exactly $5,000 is undefined. The same issue appears on 03 ("at or above") and 02 ("any net loss").
   - The strip puts "Payout" in a 9th cell after Week 8. That reads as week 9, while the brief says "from week 8". Jan 15 is the day after week 8 ends. Either label it "End of week 8" or fix the brief wording.
   - Header chip "Window day 12 of 30" has no number, but the aside says "Window 1". Other screens say "Window 2".
   - Equity $5,184.60 is the demo value for day 9, but this screen is day 12. Other flows may show day 9; align them.
   - "Paid in USDC... or your Bitso account": this destination is not in the brief (see 03).
6. Visual: the week strip is good and readable. The amber week 5 outline is the right warning use. The violet fill on the strip and the violet "Payout" label use primary for data. The flagged week has two lines of amber text that push the strip's height around. The large figures row is visually heavier than the strip, which carries the answer.

## 02 Payouts (payout day, review cleared)

1. Question: "How much can I take out today?" Yes. $992.40 in display size with "ready to claim", and the Claim button is visible at 1440x900.
2. Components: lead (display figure, explanation, "Fill review cleared" pill with time), equity split bar with legend, settlement kv table (7 rows), amber banner, destination line plus "Claim $992.40", Payout history (empty), aside Fill review (3 checks), aside Next payout (3 rows plus a note).
3. Missing:
   - What part of the $1,240.50 is unrealized. Open positions stay open, so equity and the payout can move until signing. A pro trader needs "of which unrealized $X" and the open position size ($11,240 of $25,000 in demo data).
   - The safe option. The banner says a claim now leaves zero cushion until Jan 19, and that claims stay open until Feb 15. The obvious pro move is to claim after Jan 19 00:00 UTC, but the screen never says so. Say it plainly: "Claim after Jan 19 to keep the $1,240.50 cushion through window end."
   - What happens if nothing is claimed by Feb 15: does it roll into the next payout or lapse?
4. Superfluous or duplicated (the screen states the same five numbers three times):
   - The headline paragraph, the split bar and the settlement table all repeat $1,240.50, $5,000, $992.40 and $248.10. Keep the settlement table and drop the split bar, or keep the bar and cut the table to "You receive" and "Equity after".
   - "Network fee $0.00 paid by Bitso" appears in the paragraph, the table and the modal. Once is enough.
   - "Fill review cleared" appears as a lead pill and again as a full aside panel. The aside's three checks are reassurance, not decision data. Collapse them to the pill with a link to details.
   - "Next payout" aside: three rows plus a note that repeats the "line stays at $5,000" rule. One line in the footer is enough: "Next payout Feb 15, on profit above $5,000."
   - Empty Payout history plus "See a sent payout". This is mockup navigation in product copy, and it also exists on 01 ("See what payout day looks like"). Use real labels ("Payout history") and keep the link only as a quiet affordance.
   - "Start, the line profit is measured from" is wordy. Use "Start" or "High water mark".
5. Inconsistencies:
   - "You can pick Bitso instead" brings in a destination the brief does not have. A Bitso exchange account implies identity checks, and the brief says NO KYC anywhere.
   - "on Arbitrum": the network is not in the brief, and the account lives on Hyperliquid. Confirm with Alberto before showing it.
   - "Each payout takes all profit above the start" vs 01 "less earlier payouts" (see 01).
   - Header acct $6,240.50 matches. The window 2 day 27 math is correct.
6. Visual:
   - The split bar uses violet (`--primary`) as a data colour for "Your 80%". Violet is reserved for actions, selection and the own row.
   - The Bitso segment has no label and is grey on near-black. It reads as a disabled cap.
   - The amber banner is correct but sits between the breakdown and the button, so it gets skimmed. Its first line states a fact ("equity is exactly at the start") instead of the consequence.

## 03 Claim payout (modal)

1. Question: "Confirm the amount and where it goes." Yes. The amount, destination radios and sign button are all in one modal.
2. Components: modal head, amount box with caption, "Send to" radio options (onchain.cc wallet with Default pill, Bitso account), "What happens to the account" kv box (5 rows), signing note, Cancel and "Sign and claim $992.40". The page beneath is 02.
3. Missing:
   - The window 2 consequence is a neutral row ("Window 2 ends Jan 19, needs equity at or above $5,000.00"). This is the one risk at the point of commitment, so make it amber.
   - The sentence "it fixes the amount" does not say what happens if equity drops between opening the modal and signing.
4. Superfluous:
   - $992.40 appears three times: the title, the amount box and the button. Title "Claim payout" is enough.
   - The amount caption repeats the 02 breakdown.
   - The Default pill.
   - "Leaves the account $1,240.50 yours and Bitso's" is the same as the Equity row's delta.
   - With the Bitso option removed, the whole radio group becomes one static line: "To 0x7a3F…c91E, onchain.cc wallet".
5. Inconsistencies:
   - The Bitso account option (brief and KYC conflict, as on 02).
   - "Loss limits unchanged, floor $4,500.00" is correct (10% of $5,000). The daily $250 is not shown; that is fine.
   - "at or above" vs the brief's "above".
6. Visual: clean, with good hierarchy. The amount box and the account box are two nested panels of equal weight; one can go.

## 04 Fill review pending

1. Question: "Why is my payout on hold?" Yes. "$992.40 on hold for the fill review", the In review pill and the meter answer it.
2. Components: lead (display figure, explanation, In review pill with time), review time meter, check list (3 checks with status), footer with a disabled Claim button, aside "What you can do" (3 items plus Contact support and "Back to payouts"), aside "Waiting" kv.
3. Missing:
   - What a failed check leads to, per product rules. The brief says any fill not matched to a terminal order freezes the account. The screen says "We write to you... you can explain it before anything is decided". That contradicts the freeze rule, or describes a different process. It must state the real consequence, and link to the frozen state in F06.
   - An ETA in absolute time is present ("Most finish by Jan 16, 00:00 UTC"). That is good.
4. Superfluous:
   - The "Waiting" aside repeats $992.40, $1,240.50, $248.10 and equity. Drop it.
   - "Nothing is needed" plus "Keep trading" plus the copy "Nothing is wrong so far." say the same thing twice. Keep one line.
   - "Back to payouts": this IS the payouts page. Remove it.
   - "Review time" meter and "6h 12m so far" plus "Jan 15, 06:12 UTC now": the time is shown three ways. Keep the meter.
5. Inconsistencies:
   - "No counterparty concentration" is a third check that is not in the brief (the brief only has fill to terminal order matching). It is a new rule that traders will ask about. Confirm it or remove it from all screens (02 also lists it). The same applies to "No self trades".
   - The first check is still running while the second shows "Passed" and the third "Next". The order implies they run sequentially, yet the second finished before the first. Show them as parallel, or order them by state.
   - Copy: "funded.onchain.cc or onchain.cc" is correct per the brief.
   - The screen is orphaned: no screen in the flow links to 04. Chronologically it comes before 02 (review 00:00 to 03:12, then cleared).
6. Visual: the disabled Claim button is a dimmed violet that still looks pressable. Use the kit's disabled style with a reason on hover or below it ("Turns on when the review clears"). The info blue pill and the blue spinner are fine. The page is much shorter than 02 (no history), so the layout jumps between states of the same page.

## 05 Payout sent

1. Question: "Did it arrive, and can I share it?" Yes for "arrived" ($992.40, "USDC arrived in your wallet", Arrived pill). Partly for "share": the share card is in the aside, and the primary button is Trade.
2. Components: lead (display figure, confirmation sentence, Arrived pill), kv box (tx link, network, fee, Bitso 20%, equity now/was), footer with the next payout line and Trade button, Payout history (1 row plus total), aside "Share it" (card preview, post text, referral note, Post on X, Copy link).
3. Missing: the claim time is implicit ("one minute after you signed"). The table row has no time, only a date, which is fine.
4. Superfluous:
   - "Network Arbitrum, 1 confirmation" is chain jargon after "arrived". Drop it.
   - "Network fee $0.00 paid by Bitso" for the fourth time in the flow.
   - The "Payouts" link in the history header points to the same page.
   - "Card for X" label plus a "Post text" block that repeats the card subtitle. Keep one text.
   - The referral note's "paid with your payouts" promises a payout line item that no screen shows. Either add a "Referral" row to the history or drop that clause. The brief does not say how referral earnings are paid, so drop it.
5. Inconsistencies:
   - The header chip shows "Funded $5,000.00", consistent.
   - The history table has columns "Fill review" and "Sent to", but the Bitso option is gone if the MUST below is applied.
   - The pale green highlight on the new history row uses green for a non-PnL emphasis; use the own-row violet tint or nothing.
6. Visual: the share card is well done and matches F07. The primary "Trade" competes with the screen's second question. Make "Post on X" the visible secondary action and keep Trade as the single primary, or swap them. Do not have two filled buttons.

## Flow

### Sequence
- Order follows the chronology badly: 02 (cleared, 03:12) comes before 04 (in review, 06:12 on the same day). It also shows the review clearing at 03:12 while 04 shows it still running at 06:12. Treat them as alternatives or fix the timeline. Reorder as 01 locked, 02 review pending, 03 ready to claim, 04 claim modal, 05 sent, and link pending to ready ("Simulate clear" is not product copy; link the disabled button's hint).
- Missing states, by importance:
  - **No profit on payout day**: equity at or below $5,000 on Feb 15, so $0 to claim. This is the most common month and it is not designed. One screen is enough: "Nothing to pay this month, equity $4,870.20 is below the $5,000 start. Next payout Mar 15."
  - **Second month, history with rows**: shows the reset model working (Feb 15 row after Jan 15). It can be a variant of the ready screen.
  - **Review failed or unmatched fill**: lives in F06 (frozen). Link to it from the pending screen.
  - **Claim window lapsing**: what happens after Feb 15. A copy line on the ready screen is enough, not a screen.
  - **Account closed with an unclaimed payout**: likely F09. Add a cross-flow link.
- Merge or drop:
  - The 01 history panel and the 02 empty history panel: drop both before the first payout.
  - 04's "Waiting" aside: drop.
  - 03 can reuse 02 untouched underneath (it already does).

### Shared kit candidates
- **Payout lead block** (display figure + status phrase + status pill + one sentence). It is used on 02, 03, 04 and 05 with copy-pasted CSS (`.lead`, `.lead-main`, `.lead-side`, `.lead-foot`) in every page.
- **Settlement kv box** (`.settle` with a `.kv.total` row). Used on 02, 03 and 05; F07 likely needs it too.
- **Status pill set** for payout states: Locked, In review, Ready, Sent, Failed.
- **Payout history table**, including its empty state and total footer. Used on 01, 02 and 05; currently `.empty` is redefined per page.
- **Share card for X** (`.share-card`). Already flagged as shared with F07 02.
- **Icon list "how" rows** (`.how`, `.h-ico`). Used on 01 and 04 and likely in other flows' asides.
- **Week strip / milestone track**. Reusable for window progress in F05 and F07.
- **Disabled primary with reason**: needed on 04 and in other gated actions (Request seat in F04).

## Fix list

### MUST
1. 02, 03, 05 and the 01 aside: remove the "Bitso account" destination. It is not in the brief and implies identity checks (brief: no KYC). Pay only to the onchain.cc wallet `0x7a3F…c91E`. Drop the radio group in 03 and replace it with one static line.
2. 04: replace "If a fill does not match, we write to you and you can explain it before anything is decided". Per the brief: "If a fill does not match a terminal order, the account freezes and the payout stays on hold." Link it to F06 frozen.
3. 01, 02 and F07 02: one payout model. Replace "less earlier payouts" / "less what was already paid" with the high water mark model the brief names, worded once: "Profit above the $5,000 high water mark. Each payout brings equity back to it."
4. 02 banner: state the consequence and the safe choice: "Claiming now sets equity to $5,000.00 with window 2 ending Jan 19. Any loss before then closes the account. Claim after Jan 19 00:00 UTC to keep the cushion; claims stay open until Feb 15." Repeat it as an amber row in the 03 modal. Also raise with Alberto: payday sitting four days before window end makes the reset rule a trap.
5. Rollover threshold: use the same wording as the brief everywhere. Either "above $5,000.00" (brief) or "at or above" if Alberto decides that. Today 01 and 03 say "at or above", and the brief says above.
6. Flow order and linking: 04 is orphaned and contradicts 02's timeline (cleared 03:12 vs still running at 06:12). Make the pending screen come first (00:00 to 03:12, now 02:10 for example) and link its hint to the ready screen.
7. 01 "every month on the 15th": change it to "then monthly on the same day (Feb 15, Mar 15)". The 15th only holds for Nov 20 starts.
8. Add the missing "$0 this month" state (equity below the start on payout day). It is the most frequent payday outcome.

### SHOULD
1. 02: remove one of split bar and settlement table. Keep the table with "Equity now, Start, Profit, Bitso 20%, You receive, Equity after". Drop the "Network fee" row (keep "no network fee" once in the sentence).
2. 02: collapse the Fill review aside to the lead pill with a "3 checks passed" link. Fold "Next payout" into the footer line. The aside then goes, or shrinks to one panel.
3. 02: add "of which unrealized" under "Profit above the start" and show the open position ($11,240 of $25,000). The payout follows equity until signing.
4. 01: drop the Bitso 20% figure and "Your account now" aside and the empty history. Keep one line: "+$184.60 above start today."
5. 01: quote both sizes: "$25K account, $5,000 USDC, started Nov 20, 2026". Mention that Jan 15 falls in window 2, which ends Jan 19.
6. 04: drop the "Waiting" aside and "Back to payouts". Use a real disabled button with "Turns on when the review clears".
7. 04 and 02: confirm "No self trades" and "No counterparty concentration" with Alberto. Remove them if they are not product rules (the brief has only fill to order matching).
8. 05: drop "Network: Arbitrum, 1 confirmation" and the network fee row. Remove the "Payouts" link in the history header and the "paid with your payouts" clause.
9. Colours: the split bar and week strip use violet for data. Switch to a neutral fill for the trader's share (or the own-row tint), and label the Bitso segment.
10. 03: title "Claim payout"; drop the Default pill and the amount caption; merge the amount and account boxes.

### COULD
1. 01: label the payout cell "End of week 8, Jan 15", or align the brief's "from week 8" with "after 8 full weeks".
2. 01: use demo day 9 (equity $5,184.60) or update equity for day 12, to match F05.
3. Header chip on 01: "Window 1, day 12 of 30" for parity with 02 to 05.
4. 05: tint the new history row with the own-row violet instead of green; keep one share text (card or post text).
5. Add a "Sending" micro state between signing and arrival (button spinner on 03 is enough, no new screen).
6. Confirm the payout network with Alberto (Arbitrum vs Hyperliquid) before showing it anywhere.
7. Extract the duplicated page CSS (`.lead*`, `.settle`, `.empty`, `.how`, `.checks`) into kit components (list above).
