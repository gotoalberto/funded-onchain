# Review: F02 Not qualified yet

Reviewed cold: BRIEF.md (with Decisions), manifest.json, the five screenshots at 1440 and the sources.
Persona: kestrel, 0x7a3F…c91E, Nov 6, Season 1, with 5 onchain.cc trades since Oct 20.

## 01 Home, nothing met yet

**Question:** what do I need to do to get on the board? The first viewport answers it: the h1 lists the three gaps and the meters show them. But the h1 holds three figures, so no single number leads.

| Component | Verdict | Why |
|---|---|---|
| Pill "0 of 3 minimums met" above h1 | REMOVE | Acts as an eyebrow above the heading, which Decisions forbid. It also repeats what the three meters already show. |
| H1 "A $100 balance, 5 more trades and $590 of volume" | CHANGE | Three figures in one line. Lead with the first blocker instead: "Deposit $100 to start", then "then 5 trades and $590 of volume" in the caption. The meters carry the detail. |
| Caption "Meet all three before Nov 18, 00:00 UTC…" | KEEP, shorten | The deadline is needed. "Start with a deposit: trading needs a balance" restates the h1 once the h1 is changed. |
| Three meter rows (balance, trades, volume) | KEEP | This is the core instrument. The foot "5 closed on onchain.cc since Oct 20, same account" is what builds trust. |
| Deposit (violet) / Trade (glass) buttons | KEEP | One primary action, correct. |
| "Grows with every trade" in the volume action column | REMOVE | Filler. Leave the column empty, or merge trades and volume into one row with a single Trade button. |
| Panel "Seats also need 15 trading days" | KEEP, MOVE | The content is right and the arithmetic holds (4 + 11 of the 12 days left = 15). But it sits in the main column here and in the aside on 03, so the same fact jumps around. Put it in the aside on every screen. |
| Aside Season 1: countdown 11d 14h | REMOVE | The header chip already says "Season 1 ends in 11d 14h". Decisions: no repeated countdown. Keep "Oct 20 to Nov 18". |
| Aside timeline (5 steps) | KEEP on 01 only, CHANGE colour | Opened cold, it is the best explanation of the season. The done dot, the done line and the "now" ring are violet, which breaks the colour rule (they are not actions, selection or own data). Use neutral white or grey. |
| Caption "60 seats, accounts from $5K to $200K. 80% of the profit is yours." | KEEP | It is the only "why bother" line on a flow that must stand alone. |

**Information:**
- Missing: the variant for a trader with no onchain.cc history since Oct 20. Decisions require saying that Season 1 is out of reach and that Dec 18 is the realistic request. This persona has history, but most traffic arriving from F01 will not.
- Repeated: Nov 18 appears in the caption and the timeline, and the countdown appears twice.

**Consistency:**
- The deposit lands at 08:41 on 03, so 01 happens before 08:41 and the chip should read 11d 15h, not 11d 14h. Move the deposit to 09:01, or accept the gap.
- The volume figures add up across 01 and 03: $410 plus $230 = $640.

**Hierarchy:** the h1 wraps to two lines at 1440 and dominates. Below the meters the page is empty, which is fine. The trading-days panel competes with the meters for attention.

## 02 Deposit (modal)

**Question:** how do I fund my own trading account? Answered at once: method, amount, button.

| Component | Verdict | Why |
|---|---|---|
| Title, plus "Into your own trading account, the same one you use on onchain.cc" | KEEP | Tells the trader where the money goes. |
| Method radios (Arbitrum wallet / another chain) | KEEP | Matches Decisions: no card, no Bitso source. The violet on the selected option is selection, so it is allowed. |
| Right column "About 1 min / Network fee only" | REMOVE | The summary box repeats both facts. Keep them in one place only. |
| Amount input, "Wallet: 1,412.08 USDC", quick pills | KEEP | Standard and precise. |
| Help line "$100 or more meets the balance minimum…" | KEEP | Ties the deposit to the flow's goal. The green check counts as a pass state. |
| Summary box (fee, arrival, balance after) | KEEP only "Balance after" and the fee | "Arrives in about 1 minute" repeats the option row. Cut one of the two. |
| "Deposit 250 USDC" button | KEEP | Names the action and the amount. |

**Information:**
- Missing: the pending state (wallet signature, then "arriving") and a failure or rejection state. 03 jumps straight to a settled balance.
- Missing: the minimum deposit, if Hyperliquid enforces one.
- For the bridge option: who bridges, what the fee covers, and what happens if a bridge stalls.

**Consistency:** the wallet address matches the persona and the amounts match 03. The 0.1% bridge fee is not in the BRIEF, so it needs to be confirmed.

**Hierarchy:** clean. The two radio cards are taller than they need to be.

## 03 Home, in progress

**Question:** how close am I? The first viewport answers it: "3 more trades and $360 of volume", with the meters.

| Component | Verdict | Why |
|---|---|---|
| Pill "1 of 3 minimums met" above h1 | REMOVE | Eyebrow, and it repeats the meters. |
| H1 "3 more trades and $360 of volume" | KEEP | Concrete. Two figures, but they are one task. |
| Caption "Three $60 positions… cover both" | KEEP | Excellent, a precise path. But see the open question on minimum trade size. |
| Inline violet link "leaderboard" (goes to 04) | CHANGE | A mockup shortcut posing as a link. It competes with the primary Trade button and its target makes no sense in the product. Point it to the leaderboard, and reach 04 from Trade or from a state switch. |
| Balance row: foot "Met" plus a "Met" pill | CHANGE | "Met" appears twice in one row. Keep the pill, and use the foot for "Deposited 250 USDC, Nov 6, 08:41 UTC". |
| Trades row with violet Trade button | KEEP | Primary moved here correctly once the deposit was done. |
| Volume row "Grows with every trade" | REMOVE | Same as 01. |
| Table "Latest trades that count" (7 columns) | REMOVE | The meters answer the question. The table repeats the count (7, and 5 from onchain.cc) that the trades foot already gives. Keep a single "See the 7 trades that count" link in the trades foot. If it stays: "Size $60 / Volume $120" will confuse traders unless the columns say notional, and with no fee column the PnL looks like it ignores fees. |
| Footer "Perps trades closed from Oct 20 count. Spot trades and transfers never do." | KEEP, move into a meter foot or tooltip | Useful rule, needed once. |
| Aside Season 1 with countdown | CHANGE | Countdown repeats the header chip. Keep the dates and the request window. |
| Aside "To request a seat later, 5 of 15 days" | CHANGE copy | Wrong arithmetic (below). |

**Information:**
- Wrong: "You need 10 more and 12 days are left, today included, so trade on 10 of them." Today already counts, which is why the count went from 4 to 5. The remaining days are Nov 7 to Nov 17, which makes 10 of 11. Same error on 04.
- Superfluous: the trade table and the second countdown.

**Consistency:**
- The 01 aside has a timeline and 03 has none. Fine if the timeline is kept as a 01 only explainer, but the rule should be stated.
- Balance $251.95 = 250 + 3.05 - 1.10. That implies zero fees, so either show the fees or have the PnL net them out.

**Hierarchy:** the table is the heaviest block on the page and sits below the answer, pulling the eye down. Remove it and the screen is calm.

## 04 Home, on the leaderboard

**Question:** I made it, where do I stand? Answered: #812 of 2,314 leads, with score 402.1 secondary.

| Component | Verdict | Why |
|---|---|---|
| Green pill "All 3 minimums met" above #812 | REMOVE | Eyebrow. The caption "Your 10th trade closed at 09:56 UTC" already says it. |
| #812 of 2,314 | KEEP | The leading figure. Matches BRIEF and F03. |
| Score 402.1 "of 1000" top right | KEEP | Needed for the bar. |
| Score bar: You, projected cut #60 at 701.4, #1 at 942.7 | KEEP, CHANGE labels | Good instrument. Its "You 402.1" label repeats the score top right, so drop the number under "You". 701.4 appears in no BRIEF or F03 screen. Add it to the demo data so F03 agrees. |
| Foot "299.3 points to the projected cut… it can move" + Trade (violet) | KEEP | Honest and correctly labelled projected. One primary. |
| Floors panel: h2 "10 more trading days to request a seat" + "2 of 3 floors met" | KEEP | Names the blocker, as Decisions require. The pill restates the h2, so remove the pill. |
| Net PnL positive meter (100% green bar) | CHANGE | A binary condition drawn as a full progress bar means nothing. Show it as a pass row: check, +$9.85, "above $0". |
| Max drawdown meter (green fill 15%) | CHANGE | A green bar growing toward a limit reads as "more is better". Use a neutral fill with the 25% limit marker. Go amber only when it gets close. |
| Trading days meter (amber) | KEEP | Correct warning colour. |
| Amber line "12 days are left… Close a trade on 10 of them" | CHANGE | Wrong arithmetic (10 of the 11 days from Nov 7). It also repeats the h2 and the meter's "10 more". Fold the deadline into the h2 caption and delete the line. |
| Alias banner (glass "Choose an alias") | KEEP | The correct secondary action at this moment. |
| Aside Season 1: countdown, close date, two links | CHANGE | The countdown repeats the header chip. "What moves your score" points to f03 06-stats, but F03 has 04-score "Score breakdown", which answers exactly that. "Who is around you" is fine. |

**Information:**
- Missing: nothing essential.
- Superfluous: the score shown twice, the floor pill, the amber line, and the countdown.

**Consistency:**
- The unread bell dot has no defined notification behind it.
- The violet header season chip bar is a data bar, not an action, so it breaks the colour rule. It is a kit issue, flag it for all flows.
- The violet `.link` text links ("Who is around you", "What moves your score", the inline "leaderboard" on 03) are not primary actions. Decide whether links are exempt.

**Hierarchy:** strong. #812 leads, the bar reads well. The floors panel has three equal columns while only trading days matters. A smaller pass row for the two met floors would let the blocker lead.

## 05 Choose an alias (modal)

**Question:** how will others see me? Answered by the preview row.

| Component | Verdict | Why |
|---|---|---|
| Input with "@" and "Available" | KEEP | |
| Rules list (3 to 16 chars, letters/numbers/underscore, Not taken) | CHANGE | "Not taken" repeats "Available". Drop it. |
| Preview row (#812, K, kestrel, 402.1, +$9.85) on violet tint | KEEP | Own row, so violet is allowed. Check that the leaderboard really shows a $ PnL column, otherwise match its columns. |
| "Your referral link becomes funded.onchain.cc/r/kestrel" | KEEP | It implies a link exists before the alias. Define it (open question). |
| "Not now" + "Save alias" | KEEP | |

**Information:** missing whether the alias can be changed later and what happens to old referral links and share cards. One line is enough, for example "You can change it once per season".

**Consistency:** saving returns to 04, which still shows "Others see you as 0x7a3F…c91E". There is no "after save" state.

## Flow

**Sequence:** new, then deposit, then in progress, then on the board, then alias. It is complete for the happy path. Missing or weak states:
- Deposit pending or failed (between 02 and 03). This SHOULD be at least a state on 03: "250 USDC arriving".
- A new trader with no onchain.cc history. Season 1 seat requests are impossible for them, and Decisions require saying so. This is the most common F02 entry and it is not shown.
- 04 after the alias is saved. Banner gone, row shows kestrel. A COULD, but without it the flow ends on a stale screen.
- Dropping off the board. Undefined (see questions), so do not draw it until the rule exists.
- Redundant: none of the five screens is redundant.

## Fix list

### MUST
1. **03, 04:** fix the trading-days arithmetic. Today is already counted, so the copy becomes "10 more, trade on 10 of the 11 days from Nov 7 to Nov 17". Wrong numbers destroy trust with pro traders.
2. **01, 03, 04:** remove the pills above the h1 ("0 of 3", "1 of 3", "All 3 minimums met"). They are eyebrows, which Decisions forbid, and they repeat the meters.
3. **01, 03, 04:** remove the 11d 14h countdown from the aside. The header chip already shows it, and Decisions say each fact once.
4. **01 (and 02 underlay):** timeline dots and line go from violet to neutral (colour rule).
5. **04:** "What moves your score" should link to `f03-competing/04-score.html`, not 06-stats.
6. **01:** add the no-history variant ("Your first seat request is at the Season 2 close, Dec 18"), as a second state of 01 or a documented copy swap. Decisions require it and it is the main F02 audience.

### SHOULD
7. **03:** remove the "Latest trades that count" table and keep one link in the trades meter foot. It repeats the count and is the heaviest block on the page.
8. **04:** remove the amber deadline line and the "2 of 3 floors met" pill, and fold the deadline into the floors caption. Each fact once.
9. **04:** show Net PnL positive and Max drawdown as compact pass rows (no full green bar, no green drawdown fill), and let trading days lead the panel.
10. **01:** make the h1 one leading action ("Deposit $100 to start") and let the meters carry the trades and volume gaps.
11. **01, 03:** put the trading-days block in the same place (the aside) on every screen.
12. **02:** state fee and arrival once (in the summary or on the option, not both), and add a pending state for the deposit.
13. **03:** the inline violet "leaderboard" link should not jump to 04. Link it to the leaderboard or drop it.
14. **BRIEF:** add the projected #60 cut (701.4 on Nov 6) to the demo data so F03 can match it.

### COULD
15. **01:** move the deposit to 09:01 so the 11d 14h chip on 01 is true.
16. **03, 04:** remove "Grows with every trade" and the duplicate "Met" foot.
17. **05:** drop the "Not taken" rule (it duplicates "Available"). Add a 04 state after the alias is saved.
18. **Kit:** neutral fill for the header season chip bar. Decide whether violet text links are allowed.
19. **04:** drop "402.1" under "You" on the score bar.

## Questions for Alberto (product rules not defined)

1. **Balance minimum:** is $100 checked continuously, at a snapshot, or only at the season close? If a trader withdraws or loses below $100, do they leave the board?
2. **Trading day:** a UTC calendar day with at least one closed trade? Does a day with only opens or partial closes count?
3. **Gaming:** is there a minimum trade size or holding time for a trade to count? Today "three $60 positions" are encouraged, and wash-like round trips would meet the volume.
4. **Which trades count:** only orders placed on funded.onchain.cc or onchain.cc, or any fill on the same Hyperliquid account (for example the Hyperliquid UI or bots)? The "Placed on" column suggests a restriction the BRIEF only states for funded accounts.
5. **Deposits and the score:** how do deposits and withdrawals affect max drawdown, return on capital and the balance factor? Here the starting balance was $0 before the deposit.
6. **Fees and funding:** are trading fees and funding inside "Net PnL" and the score?
7. **Referral link before an alias:** what is it (wallet based)? Can the alias change, and do old /r/ links keep working?
8. **Alias policy:** reserved words (bitso, onchain, admin), impersonation of top traders, change frequency.
9. **Bridge:** who provides it, is the 0.1% fee real, and is Solana really a source?
10. **The unread notification on 04:** which event triggers it (joining the board?), and through which channels?
