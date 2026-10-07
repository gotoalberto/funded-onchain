# Critique: f09-money (Deposit and withdraw)

Screens reviewed from screenshots only, 1440 desktop, demo data. Scores: clarity / hierarchy / simplicity / craft / trust.

## 01 Own account balance: "How much do I have, and where did it come from?"
Scores: 8 / 7 / 6 / 7 / 8

The numbers reconcile (1,100 deposits, 300 out, 738.40 claims, 952.45 closed, 31.75 open = 2,522.60; available plus margin = total; every "Balance after" row chains correctly). That is rare and it is the reason a pro would trust this page.

Problems:
1. The gold DAI banner sits between the hero and the ledger at full width and is the loudest thing below the figure. A one-off notice outranks the movements. Fix: move it into the Movements table as a pinned first row with a gold "Not credited" status, or shrink it to a single line inside the balance card footer.
2. The summary says Deposits +1,100 since Oct 14, but the table shows one 500 deposit and starts Nov 21 with no "Load older" or count. The trader cannot find the other 600. Fix: add "Showing 6 of 23" plus Load older, or make each summary row a link that applies the matching filter.
3. The right column stops at 360px and leaves a 500px black void under it, while the left column carries all the weight. Fix: either put "Where it came from" directly under the hero as an inline breakdown (it is the answer to half the question) or extend the right rail with the open deposit/withdrawal status.
Also: "Your Hyperliquid account, shared with onchain.cc" reads like custody risk to a trader; say exactly what onchain.cc can and cannot do (e.g. "onchain.cc can trade, never withdraw"). The "Dec 1, day" time cell is odd; use "Dec 1" and a "Daily" tag in Movement.

Keep: the reconciliation panel with the footnote "a claim counts as a deposit, not PnL". It is the most trustworthy element of the flow.

## 02 Deposit: "Where do I send funds, from which chain, and how long does it take?"
Scores: 8 / 8 / 7 / 6 / 6

Problems:
1. "Any EVM chain" is the riskiest claim in the flow and it is unqualified. No list of supported chains, nothing about native USDC versus bridged USDC.e on Arbitrum/Polygon/Avalanche, no note that Ethereum takes longer. Fix: a chain chip row under the toggle ("Works on: Arbitrum, Base, Ethereum, Optimism, Polygon, BNB, Avalanche") and a line "Native USDC only, USDC.e is not credited".
2. The "not credited" rule is a 12px grey sentence after a dashed annotation. Fix: promote it into the Token row ("USDC only, other tokens stay here") with a gold dot, the same treatment as the DAI state so the cause and the effect look related.
3. The "Example timing" dashed chip is mockup scaffolding inside product UI and it reads like a dev label. Fix: drop it from the screen; keep the caveat in the review notes. Also chunk the address (0x4E2b 9c1A 0f53 ... 7D19) with the first and last 4 characters in full white so people can verify what they paste.

Keep: the three row Token / Fee and minimum / Arrival table. It answers the whole question in one glance.

## 03 Deposit arriving: "I sent it. Where is my money now?"
Scores: 9 / 9 / 8 / 6 / 8

Problems:
1. The in progress icon renders as a white circle with a "C" in it. It looks like a broken glyph or a copyright mark, not a spinner. Fix: a real rotating arc in violet, or a pulsing dot, same 24px footprint.
2. Step 3 shows "About 10:06 UTC" while step 2 says "About 1 min left": two different time languages for one ETA. Fix: one ETA, absolute time on the right, relative under the step title, on every step.
3. The modal has no "Own" pill while 02, 05 and 06 do. Fix: one modal header pattern for the whole flow (pill + title + close).

Keep: the three step timeline with real tx links and "Closing this doesn't stop it". Exactly what a nervous sender needs.

## 04 Deposit arrived: "Is it in my trading balance?"
Scores: 8 / 7 / 8 / 6 / 8

Problems:
1. The top row holds only a green check on the left and an X on the right, a full row of nothing. Fix: put the check inline with a title "Deposit credited" like every other modal, then the figure.
2. "500.00 USDC credited. Your own account is now" is a sentence that breaks into the hero figure; the actual credited amount is small grey text. Fix: hero "+500.00 USDC" in green, then "Own account $3,022.60, available to trade $2,382.60" as the two supporting figures.
3. Modal width (440) differs from 03 (560) and 02 (600) for the same deposit story, so the card visibly jumps between steps. Fix: one width per flow.

Keep: "Back to trading" as the single primary action and the header pill already showing $3,022.60.

## 05 Withdraw: "How do I send money out, to which address and network?"
Scores: 7 / 7 / 5 / 5 / 6

Problems:
1. "Lowers the balance factor of your Season 2 score" is the most consequential line on the screen for a competitor and it is 12px grey under the amount, with no number. Fix: quantify it in gold ("Score balance factor 0.92 to 0.61") and repeat it on the confirm screen.
2. The seven network tiles with two letter monograms (AR, BA, ET, OP, PO, BN, AV) look templated and eat 90px. Fix: real chain logos in a compact select or one row of chips; preselect the chain the address was last used on.
3. "Example networks" and "Example fees and timing" dashed chips again, twice on one form. They make the fee table look provisional, which kills trust exactly where money leaves. Fix: remove from the UI.
Also: "First withdrawal to it" is a risk signal styled as plain help text under a green valid border. Make it a neutral or gold note; green says "safe", which is not known.

Keep: "Use my wallet 0x7a3F...c91E" shortcut and the leaves / fees / arrives summary with the net figure in bold.

## 06 Confirm withdrawal: "Is everything right before it leaves?"
Scores: 8 / 7 / 8 / 7 / 7

Problems:
1. Hero says 998.40 USDC, the button says "Withdraw 1,000.00 USDC". Two numbers for one action makes people hesitate. Fix: button "Withdraw 1,000.00, receive 998.40" or keep the button verb only ("Confirm withdrawal") and let the hero carry the number.
2. The full address is one undifferentiated monospace string. This is the moment to verify it. Fix: chunk it and render the first 6 and last 4 characters bright, the middle dimmed.
3. "Back" is a bare text link floating left of a full width violet button, weaker than every other secondary in the flow (03 and 07 use a filled grey pill). Fix: same grey pill style, fixed width.
Also: the Season score consequence from 05 vanishes here; add it as a row.

Keep: the gold "Check that this address takes USDC on Base. Withdrawals can't be reversed" box. Right level of alarm, right place.

## 07 Withdrawal sent: "Did it leave, and when will it arrive?"
Scores: 8 / 8 / 8 / 6 / 7

Problems:
1. "Bridging from Arbitrum to Base" appears from nowhere: the trader picked Base and never heard of Arbitrum. Fix: explain once on 05 ("Leaves Hyperliquid on Arbitrum, bridged to Base") or label the step "Bridging to Base".
2. Same broken "C" spinner as 03.
3. Step 3 has no sub line while steps 1 and 2 have two lines, so the list looks unfinished. Fix: "998.40 USDC to 0x9C14...e2A7" under it, with a Basescan link once it lands.

Keep: the background already showing $2,022.60 and Withdrawals -1,300.00. The page behind the modal tells the truth.

## 08 Deposit not credited: "I sent a token that is not USDC. What happened to it?"
Scores: 7 / 5 / 7 / 7 / 3

Problems:
1. It answers "what happened" but not the only question that matters: can I get my 250 DAI back? There is no recovery path, no "contact support", no "sweep back to 0x7a3F...c91E", not even "it cannot be recovered". Fix: a primary "Return DAI to 0x7a3F...c91E" (or "Request recovery") and a clear statement of cost and timing.
2. The primary action is "Deposit USDC", which upsells while the user is worried. Fix: make recovery primary; Deposit USDC becomes secondary.
3. The title has no warning icon and no gold, while the banner that opened it was gold. Fix: carry the gold triangle and accent into the modal header so the state reads the same in both places.

Keep: the compact token card with network, seen time, scan link and sender. Precise and calm.

## Flow

Overall: 7.0 / 10. The arithmetic is honest everywhere and the timelines are excellent; the flow loses points on modal inconsistency, mockup scaffolding left in the UI and one dead end with real money in it.

Patterns that repeat:
- Modal shell drifts: widths 440 / 560 / 600, "Own" pill on some titles, a titleless success modal, three different secondary button styles.
- Dashed "Example ..." chips on 02, 05 (twice) and 06 make real numbers look fake.
- Tx link labels vary: "tx", "Arbiscan tx 0x8d2e...41b7", "Basescan tx", "Hyperliquid tx". Pick one: "Explorer tx 0x8d2e...41b7".
- Risk text is consistently whispered in 12px grey (other tokens, first withdrawal, score impact) while non risk elements get color.
- Long addresses are never chunked for verification.

Prioritized fixes:
1. 08: add a recovery action for the stuck DAI and make it primary; state cost and timing or say plainly it cannot be recovered.
2. Remove every dashed "Example ..." chip from product screens.
3. 05/06: quantify the Season 2 score impact of a withdrawal in gold and show it on both screens.
4. 02: list supported chains and say native USDC only (no USDC.e).
5. Replace the "C" in-progress glyph on 03 and 07 with a real spinner.
6. One modal shell for the flow: one width, pill + title + close on every modal, one secondary button style.
7. 06: one number on the confirm button and the hero; chunk the address for verification.
8. 01: move the DAI notice out of the hero zone and make the Movements table account for every deposit in the summary (count, Load older, summary rows as filters).
