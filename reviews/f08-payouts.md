# F08 Payouts, review round 4

Scope: 5 screens (01 to 05), 1440 full page shots plus sources, judged against BRIEF.md with
"Alberto's answers, 2026-10-06" as binding.

Arithmetic checked, all correct: $6,240.50 minus $5,000 = $1,240.50, split $992.40 / $248.10. Partial
claim $800 = $1,000 profit, $200 Bitso; equity $5,240.50, $259.50 to $5,500; remaining $240.50 profit,
80% = $192.40. Window 2 end: $310.00, $62.00, $248.00; window 2 total $1,048.00. Window 1 end $115.36,
$23.07, $92.29. Total to you $1,140.29. Window dates match Alberto (W1 Nov 19 to Dec 19, W2 Dec 19 to
Jan 18, W3 Jan 18 to Feb 17); day counters (19 of 30 on Jan 6, 16 of 30 on Feb 2) and "14d 14h" right.

Contradictions with Alberto's answers: none of the retired concepts remain (no week 8, no monthly
date, no fill review wait, no daily loss, no appeal, no wallet or Bitso destination). Claims go to
the own Hyperliquid account, every claim resets the floor to $4,500, auto claim at window end. Good.
The remaining MUST items are copy that asserts rules the brief does not define (see 01, 04).

## 01 Profit to claim

Question: how much can I take out now, and what does claiming do to my loss limit?
First viewport answers both: "$992.40 yours to claim now" and the floor table.

| Component | Verdict | Why |
|---|---|---|
| h1 $992.40 + "yours to claim now" | KEEP | One figure, answers the question. |
| Caption ($25K, $5,000 USDC, window 2 dates, Jan 6 09:40 UTC) | KEEP | Dated, reads cold. |
| Paragraph "Claim any time... own Hyperliquid account" | KEEP, CHANGE | Core rule, keep. Cut "the one you trade with on onchain.cc": 02 and 03 say it again. |
| Primary "Claim $992.40" | KEEP | Names the action and amount. |
| Ghost "Claim part" | REMOVE | Opens the same modal, which already has the amount field and slider. Two buttons, one destination. |
| Ledger (equity, delivered, profit, unrealized, 20%, 80%) | KEEP, CHANGE | The derivation is what a pro trusts. Rename "Profit above it" to "Profit above the $5,000 delivered" (04 already uses this). Drop "Equity now": it is in the header chip and in the floor table "Now" row. |
| Unrealized sub row +$86.30 | KEEP, CHANGE | Precise and needed, but it asserts that unrealized profit is claimable while positions stay open. Undefined (Q1, Q2). Until answered, keep the row and do not promise more. |
| Caption "The amount follows equity until you claim" | KEEP | Honest. |
| Floor table (Now / After claiming all) | KEEP, CHANGE | Best instrument in the flow, it is the second half of the question. Drop the "Equity" column "Now" value duplication by keeping only Floor and Room columns, or drop the ledger equity row (pick one). The "moved up at $5,500, Dec 30" note is good evidence. |
| Floor caption | KEEP | States Alberto's rule exactly. |
| Window end strip | CHANGE | "then window 3 starts" is conditional: only at or above $5,000. Say "If equity is at or above $5,000 then, window 3 starts; below, the account closes." |

Missing:
- Claims on this account (the table on 05). 01 is the Payouts tab; the history must live here, not
  only in the below-start state. One row today: Dec 19, automatic, $92.29.
- Open exposure next to "After claiming all": room drops from $1,240.50 to $500.00 while
  $11,240 of positions stay open. Show the open notional once, so the trader sees the risk of a
  full claim. Neutral fact, no advice.

Superfluous: equity $6,240.50 shown three times (header chip, ledger, table).
Hierarchy: fine. Lead panel dominates, floor table second, strip third.

## 02 Claim profit (modal)

Question: choose how much to claim and confirm where it goes. Answered.

| Component | Verdict | Why |
|---|---|---|
| "You receive" input, USDC, Max, "Up to $992.40" | KEEP | Input in the net amount the trader gets is right. |
| Slider with 25/50/75/Max ticks | KEEP | Fast partials. Neutral colour, correct. |
| Ledger: profit claimed $1,000, Bitso $200, to 0x7a3F…c91E $800 | KEEP | Gross, split, destination in one block. |
| Equity $6,240.50 to $5,240.50 | KEEP | |
| Floor $5,000 to $4,500 in amber | KEEP | Amber is the right warning: the floor resets. |
| "Floor back to $5,000 at $5,500, $259.50 away" | KEEP | Precise, pro traders read this. |
| "Open positions: Stay open" | KEEP, CHANGE | Add room after claim ($740.50 above the floor) on this line or the floor line; that is the number that matters with positions open. |
| Footer caption (own account, "arrives in seconds", instant fill check, freeze) | CHANGE | "Your own account on onchain.cc, the one you trade with" is the third time. Keep only the fill check sentence. "Arrives in seconds" is a timing claim the brief does not define (Q5): remove or confirm. |
| Cancel + "Claim $800.00" | KEEP | |

Missing: amount staleness. Equity moves while the modal is open; say what happens if profit drops
below the typed amount before confirming ("Max updates live; if the amount is no longer available,
the claim stops and nothing moves"). Needs Q3.
Missing: link to the freeze outcome (F06) from the fill check sentence, since a failed check is the
only failure state of this flow.

## 03 Profit claimed

Question: did it reach my own account, and can I share it? Answered: "$800.00 USDC in your own
Hyperliquid account" and the share panel.

| Component | Verdict | Why |
|---|---|---|
| h1 $800.00 + caption with time | KEEP | Caption: cut "It is in the balance you trade with on onchain.cc" (said on 01 and 02), keep "yours to keep, trade or withdraw". |
| Ledger To | REMOVE | The h1 says where it went; the wallet appears again on the share card. |
| Ledger Transfer hash | KEEP | Proof, pro traders click it. |
| Ledger Fill check "214 of 214 fills from the terminal" | KEEP | Trust signal, exactly Alberto's instant check. |
| Ledger "Profit claimed, of which Bitso 20%: $1,000.00, $200.00" | CHANGE | Two numbers in one row reads badly. Either two rows or drop it (02 showed the split, 05 table shows it). Prefer drop. |
| After stats (equity, floor, still yours $192.40) | KEEP, CHANGE | Floor and "still yours to claim" are the next questions. Equity now is in the header chip: drop it. |
| Share card | KEEP | Referral link per brief, own band chip ok. |
| Share copy "works like your onchain.cc referrals" | KEEP | Matches "no new rules on screen". |
| Post on X (primary) + Copy link | KEEP | One primary. |

Missing: nothing essential. Hierarchy: lead and share panel have equal weight; fine because the
question has two halves.

## 04 Claimed at window end

Question: my window ended; what was claimed automatically and what carries on? Answered: $248.00 and
"Window 3 started at $5,000, it rolled over".

| Component | Verdict | Why |
|---|---|---|
| h1 $248.00 + caption (ended Jan 18 00:00, 00:05 now) | KEEP | Dated cold. |
| Paragraph "same 80 / 20 split and same place" | KEEP | Short and needed. |
| Trade (primary) | KEEP | Next action after a rollover. |
| Ledger row "Equity read at 00:00 UTC, no open positions" | MUST CHANGE | Asserts that positions are closed at a rollover. Alberto defined real closing prices only for a closed account; whether positions stay open across a rollover, and how unrealized profit is auto claimed, is undefined (Q4). Brief: never claim a rule it does not define. Write "Equity at 00:00 UTC" and leave positions out until answered. |
| Ledger profit, 20%, 80% to 0x7a3F…c91E | KEEP | |
| Caption "Window 2 also had your own claim... total $1,048.00" | REMOVE | History belongs in the claims table (01, 05). Here it adds a second figure to a one figure screen. |
| Window 3 panel: dates + "1 month, same length" | KEEP | Alberto: length fixed at request, rolls over the same. |
| Equity $5,000.00 "Nothing to claim until it is above" | KEEP, CHANGE | Duplicates the header chip value; keep only if the caption carries the meaning. Could fold into the panel title. |
| Max loss floor $4,500, "$5,000 again at $5,500" | KEEP | Shows that the auto claim reset the floor, Alberto's rule. |
| Caption "Had equity been below $5,000..." + link | KEEP, CHANGE | Useful counterfactual, but "nothing to claim" restates 05. Shorten to "Below $5,000 at a window end, the account closes." |

Missing: the zero case of this screen. Equity at or above $5,000 but with no profit above it
(exactly $5,000) still rolls over with $0 claimed; not needed as a screen, one line is enough.

## 05 Nothing to claim

Question: my account is below its start; what can I claim, and what happens at the window end?
Answered: "$0.00 to claim, equity is $129.80 below $5,000" and the window end stat.

| Component | Verdict | Why |
|---|---|---|
| h1 $0.00 dimmed + "equity is $129.80 below $5,000" | KEEP | Correct lead for the question. Dim figure is a good non alarm state. |
| Caption dated Feb 2 10:00 UTC | KEEP | |
| Paragraph | CHANGE | "Equity is $4,870.20" repeats the header chip and is derivable from the h1. Keep "Claiming opens again as soon as equity is back above $5,000." |
| Trade (primary) | KEEP | |
| Stat Window 3 ends Feb 17 + "Below $5,000 then, the account closes" | KEEP | The decisive rule, plainly. Consider amber for "the account closes" sentence only: it is a real warning at 14d. |
| Stat Max loss floor $4,500, "$370.20 below equity. Closes at once, any day." | KEEP | Precise. |
| Link "How a window end works" (F07) | KEEP | |
| Claims on this account table | KEEP | Right component, wrong exclusivity: it must also be on 01. Dates link to 03/04, transfer hashes, total. Fine. "No history of past accounts" does not apply: this is the live account. |

Missing: nothing. Superfluous: equity restated in the paragraph.

## Flow

Sequence: available (01), claim (02), receipt (03), automatic claim at window end (04), below start
(05). Complete for the happy path and the main alternate.

States missing:
- Claim stopped by the fill check (account freezes): only a sentence in 02. One state, or a link to
  F06 frozen, is enough. Prefer the link (remove over add).
- Claim while frozen or during a platform incident: can the trader claim? Undefined (Q6, Q7). Do not
  draw until answered.
- Claims history visible on the main tab (01).

States redundant: none. 04 and 05 are distinct moments.

Consistency across screens:
- Delivered amount worded three ways: "$5,000 USDC from Bitso", "USDC Bitso delivered", "the $5,000
  delivered". Pick "the $5,000 Bitso delivered" and use it on every screen.
- "Your own Hyperliquid account, the one you trade with on onchain.cc" appears on 01, 02 and 03.
  Say it once, on 01.
- Colour: violet only on primary buttons and text links; slider neutral; amber only on the floor
  reset in 02. Correct.

## Fix list

MUST
1. 04 ledger: remove "no open positions" from "Equity read at 00:00 UTC". The brief does not define
   whether positions close at a rollover or how unrealized profit is auto claimed (Q4).
2. 01 window end strip: make the rollover conditional ("at or above $5,000 rolls over, below closes").
   As written it says window 3 always starts, which contradicts Alberto's rule.
3. 01: add the "Claims on this account" table (same component as 05). The Payouts tab must show what
   was already claimed, not only in the below-start state.

SHOULD
4. 01: remove "Claim part" ghost button; the modal handles partials.
5. 01: show equity once (drop the ledger row or the table "Equity" column); rename "Profit above it"
   to "Profit above the $5,000 Bitso delivered".
6. 01 and 02: show open position notional ($11,240) next to the post claim room ($500.00 / $740.50).
   Claiming with positions open is the real risk of this flow; one neutral line.
7. 02 caption: keep only the fill check sentence, link it to F06 frozen; remove "arrives in seconds"
   unless confirmed (Q5).
8. 03: remove ledger "To" row and the merged "Profit claimed, of which Bitso 20%" row; remove "Funded
   equity now" stat.
9. 04: remove the "Window 2 also had your own claim... $1,048.00" caption.
10. Unify the delivered amount wording across all five screens.

COULD
11. 05: amber on "Below $5,000 then, the account closes."
12. 05 paragraph: drop the equity figure, keep the reopen rule.
13. 04: shorten the counterfactual caption to one sentence.
14. 03 caption: drop "It is in the balance you trade with on onchain.cc".

## Questions for Alberto (undefined rules)

1. Can unrealized profit be claimed while positions stay open, or only realized profit? 01 shows
   $86.30 unrealized inside the claimable $992.40.
2. Is a claim capped by withdrawable margin on Hyperliquid (equity minus margin used by open
   positions)? With $11,240 open in cross margin, the full claim may not be withdrawable.
3. If equity drops between opening the modal and confirming, does the claim fail, shrink to the
   new max, or go through at the old figure?
4. At a rollover, do open positions stay open into the next window? If they do, is the auto claim
   computed on equity including unrealized PnL, and does it close part of the positions to pay it?
5. Is there a stated delivery time for claims (Hyperliquid transfer), and any minimum claim amount?
6. Can a frozen account claim profit while frozen? (Alberto: unpaid profit goes to Bitso if the
   breach is confirmed, which suggests no.)
7. During a platform incident (positions closed, trading blocked), can the trader claim?
8. Does the automatic claim at a window end reset the floor to $4,500 like a manual claim? 04
   assumes yes (window 3 floor $4,500); the answers say "every claim" without naming the auto claim.
