# F10 Deposit and withdraw: review (round 4)

Reviewed cold: BRIEF.md (Alberto's answers of 2026-10-06 first), manifest.json, the eight 1440 shots
and the eight sources. Story: Dec 2, 10:00 UTC, Season 2 (15d 14h left, correct for Dec 18 close).
kestrel holds a $25K funded account (window 1 Nov 19 to Dec 19, matches Alberto's dates) and has
just claimed profit. He deposits 500 USDC from Arbitrum, then withdraws 1,000 USDC to Base, and a
side screen shows two deposits that were not credited.

Arithmetic checked and consistent: 1,100.00 deposits, minus 300.00 withdrawals, plus 992.40 claim,
plus 728.45 closed PnL = 2,520.85, plus 31.75 unrealized = $2,552.60. Available 1,912.60 + margin
640.00 = 2,552.60. Every "Balance after" row adds up. 80% of 1,240.50 = 992.40, 248.10 to Bitso.
Deposit 500.00 minus 0.50 = 499.50, new balance $3,052.10, available $2,412.10. Withdrawal 1,000.00
minus 1.00 minus 0.60 = 998.40, balance after $2,052.10. 10:04:12 to 10:05:31 = 1 min 19 s. The
maths is clean; the problems are invented rules, one rendering bug and a few missing states.

## 01 Own account balance

**Question:** How much do I have, and where did it come from?
**First viewport:** yes. $2,552.60 leads, the split bar and three figures explain it, "Where it came
from" answers the second half, Deposit is the one violet action.

**Components**
* Title "Own account" plus caption "Your trading balance on Hyperliquid, the same one onchain.cc
  uses. Dec 2, 10:00 UTC." KEEP. Sets context cold and states the date, as Decisions require.
* Lead $2,552.60 KEEP.
* Split bar (available vs margin, neutral greys) KEEP. Neutral, correct per colour rule.
* Three figures: Available, Margin in 2 open positions, Unrealized PnL "included above" KEEP. A pro
  trader needs exactly these three; "included above" removes the usual equity vs balance doubt.
* Withdraw (glass) and Deposit (violet) KEEP.
* "Where it came from" card KEEP. Four lines that reconcile to the lead (with unrealized), which
  is what makes the number trustworthy. CHANGE: add a last line "Unrealized PnL +31.75" and a
  total "= 2,552.60" so the card closes on the lead figure instead of leaving the trader to add.
* Movements table with filters KEEP. Ledger with "Balance after" and tx links is what traders
  expect from an exchange statement. Filter "Trading PnL" etc fine.
* Foot "Balance after counts closed results only. Trading PnL is one line per UTC day." KEEP.
* "Funded profit lands here" card CHANGE. Four lines of prose under a heading. Cut to one
  sentence: "Your 80% of each funded claim arrives here. Unclaimed profit is claimed automatically
  at the window end, Dec 19." plus the link. It is the only place the flow ties the two accounts
  together, so it stays, shorter.

**Missing**
* A pending row in Movements while a deposit or withdrawal is in flight. 02 and 03 both promise
  "the progress shows in Movements" and "it stays in Movements until it's credited", but no
  underlay shows an "Arriving" row (03 underlay has none). Either show it or drop the promise.
* The amber "2 deposits weren't credited" banner exists only in the 08 underlay. 01 is the entry
  screen; the trader must be able to reach 08 from somewhere visible. Show a variant of 01 with the
  banner, or say in the manifest that it appears only when there are held deposits.

**Superfluous or repeated:** nothing serious. "Season 2 ends in 15d 14h" chip is header chrome.

## 02 Deposit

**Question:** Where do I send funds, from which chain, and how long does it take?
**First viewport:** yes. Network grid, QR, address, accepted tokens, minimum, fee, arrival time,
one violet "Copy address".

**Components**
* Intro sentence KEEP.
* Network grid (8, Arbitrum selected in violet) CHANGE. Alberto: the address "accepts funds from
  any EVM chain or Solana". The screen lists 7 EVM chains and says any network not on the list is
  held and does not arrive. That is a rule BRIEF does not define and it contradicts "any EVM
  chain". Either the list is the supported set (question for Alberto) or the grid becomes "EVM
  network" plus "Solana" with arrival time per chain shown after selection.
* QR plus address plus "The same address works on every EVM network above" KEEP, but show the
  Solana state: a Solana address is necessarily different. One extra screen or a note in the
  manifest; today selecting Solana is undefined.
* Token pills USDC, USDT, "USDT arrives as USDC" CHANGE to a question. BRIEF says "accepts funds",
  never which tokens or the conversion. Keep the pills only once Alberto confirms the list.
* Amber warning "Only USDC or USDT, only on a network listed here" CHANGE. Two invented rules in
  the most prominent block of the modal. Rewrite after the answers; until then neutral: "Send
  USDC. Other tokens are not forwarded." if that is confirmed.
* Facts: Minimum 5 USDC, Forwarding fee 0.50 USDC, Typical arrival About 2 min KEEP as layout,
  but minimum and fee are invented numbers. Mark them as demo or ask.
* "What happens next" paragraph CHANGE. Repeats 03. Keep half a line: "You can close this
  window, the deposit shows in Movements."
* Primary "Copy address" KEEP. It links to 03 in the mockup, fine.

## 03 Deposit arriving

**Question:** I sent it. Where is my money now?
**First viewport:** yes. 500.00 USDC lead, three steps with times and the Arbiscan link.

**Components**
* Lead "500.00 USDC" with "Seen on Arbitrum, now on its way" KEEP.
* Steps: Received (green check, done), Forwarding (spinner, "About 1 min left"), Credited (pending,
  "499.50 USDC after the 0.50 forwarding fee", "About 10:06 UTC") KEEP. Exactly what traders want.
* "Nothing to do here..." note KEEP but see 01: the Movements row it promises is not drawn.
* "Close" glass button KEEP. No primary action is right for a waiting state.

**Inconsistency:** step 3 says "About 10:06", 04 credits at 10:05:31 and the Movements row says
10:05. Fine as an estimate, but every page caption still reads "Dec 2, 10:00 UTC" while the events
happen at 10:04 to 10:22. Advance the caption time per screen or drop minutes from it.

## 04 Deposit arrived

**Question:** Is it in my trading balance?
**First viewport:** yes, but with two leads: "499.50 USDC credited" (h1) and "$3,052.10" (display).

**Components**
* Green check icon KEEP (pass state).
* h1 "499.50 USDC credited" plus display "$3,052.10" CHANGE. Pick one lead. The question is "is it
  in my balance", so lead with $3,052.10 and make "499.50 USDC credited" the title line; reduce the
  title size so the eye goes to the balance.
* Receipt: Available to trade, Sent, Forwarding fee, Credited KEEP. "Available to trade $2,412.10"
  is the useful one; fee repeats 02 and 03 but on a receipt that is expected.
* Links Arbiscan tx, Hyperliquid tx, All movements KEEP.
* Primary "Back to trading" KEEP.

## 05 Withdraw

**Question:** How do I send money out, to which address and network?
**First viewport:** yes. Amount, destination, network, fee breakdown, arrival, one violet button.

**Components**
* Amount with "Available 2,412.10 USDC. $640.00 stays as margin." and Max KEEP. Good: it explains
  why the max is not the balance.
* Destination with "Use my wallet 0x7a3F…c91E" and validation "Valid EVM address. You haven't
  withdrawn to it before." KEEP. Green border is pass/fail, allowed.
* Network grid (7 EVM, Base selected, "EVM networks only") KEEP. Matches Alberto (EVM only, no
  Solana out). Same question as 02 about which EVM networks.
* Breakdown: leaves balance, Hyperliquid fee -1.00, Bridge -0.60, "Arrives on Base, in about 5 min
  998.40" KEEP.
* Primary "Review withdrawal" KEEP.

**Missing**
* One neutral line on season effects. Alberto: score uses a time weighted balance factor, and a
  request needs $100 or more at the close. A withdrawal can change both. Under the amount:
  "Your season score uses your time weighted balance. Requesting a seat needs $100 at the close."
  This is the only money fact that touches the competition and a pro will look for it.
* Error states: amount above available, invalid or non EVM address. At least one shot with the
  amount over 2,412.10 so Esteban sees the blocked button and the message.

## 06 Confirm withdrawal

**Question:** Is everything right before it leaves?
**First viewport:** yes. 998.40 USDC lead, To, Network, Leaves balance, Fees, Balance after, amber
check, violet "Withdraw 1,000 USDC".

**Components**
* Lead "998.40 USDC arrives on Base in about 5 min" KEEP.
* "To" row CHANGE (bug). The tooltip with the full address renders permanently in the shot, so the
  address appears twice side by side (full in a box, short underlined). On a confirm screen the
  full address is the one thing to verify: show the full address once, in mono, wrapped if needed,
  and drop the hover tooltip.
* Network, Leaves your trading balance, Trading balance after KEEP.
* "Fees, Hyperliquid and bridge 1.60 USDC" CHANGE. 05 shows them as "-1.00" and "-0.60"; here a
  positive 1.60. Same sign convention as 05.
* Amber "Check that this address takes USDC on Base" KEEP. Real risk, says what happens.
* Button "Withdraw 1,000 USDC" vs lead 998.40 KEEP but write "Withdraw 1,000.00 USDC" so the two
  figures read as gross and net with the same precision.
* "Back" text button KEEP.

## 07 Withdrawal sent

**Question:** Did it leave, and when will it arrive?
**First viewport:** yes. 998.40 USDC to 0x9C14…e2A7 on Base, expected 10:26 UTC, three steps.

**Components:** lead, steps (Left Hyperliquid with tx, Bridging with Arbiscan tx, Arrived on Base),
close note, Done KEEP.
* "Bridging to Base" links an Arbiscan tx CHANGE: if funds bridge from Arbitrum, say "Arbitrum to
  Base" in the step so the explorer link makes sense; otherwise link Basescan.
* "Done" is violet. A completion acknowledgment is not the primary action of anything; 03 uses a
  glass "Close". Use the same glass button here for consistency.

**Missing:** a withdrawal that fails or stalls in the bridge (what happens to the funds, where they
land). One state, since a stuck withdrawal is the screen that decides trust.

## 08 Deposit not recognised

**Question:** I sent an unsupported token or too little. What happens to it?
**First viewport:** partly. Two cases with Seen, Why, Where it is. It does not answer "what
happens to it" for the DAI case, and says so in an OPEN QUESTION note.

**Components**
* Title "2 deposits weren't credited" plus "Your trading balance didn't change" KEEP.
* Case DAI on Base, amber pill "Token not accepted" CHANGE. Depends on the token list question.
* Case 3.00 USDC on Polygon, "Under the 5 USDC minimum", "Send 2 USDC or more on Polygon; both go
  together" CHANGE. Aggregation of held amounts is an invented rule; keep only if Alberto confirms
  the minimum and that held USDC is swept with the next deposit.
* OPEN QUESTION note KEEP for the mockup (it documents, it does not promise), but it must not ship.
* Primary "Deposit USDC or USDT" KEEP once tokens are confirmed.

## Flow

**Sequence:** balance, deposit, arriving, arrived, withdraw, confirm, sent, problem. Complete for
the happy path and readable cold; 01 sets the context and every modal keeps 01 underneath.

**States missing (in order of value):**
1. Withdraw blocked: amount over available (margin held), invalid address.
2. Withdrawal failed or stuck in the bridge.
3. Deposit from Solana (different address, different arrival time).
4. 01 with a pending deposit row and with the held deposits banner, so 03 and 08 have an entry.
5. Empty own account (first visit, $0, first deposit). Probably covered in F01/F02; link it.

**States redundant:** none. 03 and 07 are parallel and should look identical (they almost do).

**Header:** nav label "Payouts" while Alberto removed payout dates ("claim at any time"). Cross
flow; consider "Claims". Account chip "Own $2,552.60" updates per screen correctly.

## Prioritized fixes

MUST
1. 02: remove the claim that a network not on the list is "held and doesn't reach your balance".
   Alberto says the address accepts funds from any EVM chain or Solana. Until the supported list
   is defined, do not state a rule BRIEF does not define.
2. 02, 08: accepted tokens (USDC, USDT, USDT converted to USDC), the 5 USDC minimum, the 0.50
   forwarding fee and "both go together" are not in BRIEF. Mark them as open questions in the
   manifest or the mock note, not as product facts in the main warning.
3. 06: fix the "To" row that shows the address twice (tooltip rendered open). Show the full
   address once, it is what the trader verifies.
4. 01: show the "Arriving" Movements row (or remove the promise in 02 and 03) and give 08 a
   visible entry from 01.

SHOULD
5. 05: add the neutral line on time weighted balance and the $100 at close requirement.
6. 05: add the over available error state; 07: add a failed or stuck withdrawal state.
7. 04: one lead figure, $3,052.10; title smaller.
8. 07: "Done" glass like 03 "Close"; violet only for actions that do something.
9. 06: fees with the same sign convention as 05; button "Withdraw 1,000.00 USDC".
10. 01 "Where it came from": add unrealized line and the total that equals the lead.

COULD
11. 01: shorten "Funded profit lands here" to one sentence plus link.
12. 02: shorten "What happens next" to half a line.
13. Advance the page caption time per screen (10:00 is stale once events happen at 10:04 to 10:22).
14. 07: bridging step names the source chain so the Arbiscan link reads right.
15. Nav "Payouts" to "Claims" (cross flow, ask).

## Undefined product rules (questions for Alberto)

* Which EVM chains does the deposit address actually support? All EVM chains, or a fixed list?
  What happens to funds sent on a chain the contract is not deployed on?
* Which tokens are forwarded (USDC only, USDT, native ETH, others) and are non USDC tokens swapped?
* Is there a minimum deposit and a forwarding fee? Who pays the gas of the forwarder?
* What happens to held funds (wrong token, under minimum): recoverable, swept with the next
  deposit, or lost? Can the trader withdraw them from the deposit address?
* Which EVM networks are offered for withdrawals, and who pays the bridge fee?
* Is the Solana deposit address different, and what tokens does it accept there?
* If a withdrawal fails in the bridge, where do the funds land (back in the trading balance)?
* Can the trader withdraw while a seat request is pending in the 24h window, and does the $100
  requirement apply at the close or at assignment?
