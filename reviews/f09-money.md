# F09 Deposit and withdraw: final review (rf7)

Reviewed cold against BRIEF with round 3 first (deposits: no fee, no minimum; non USDC tokens stay
at the deposit address, no recovery promise; a claim counts as a season deposit), then the final
consistency rules, round 2 and the earlier answers. Eight 1440 shots, 01 also at 1280.
Story: kestrel, Dec 2, 10:00 to 10:23 UTC, Season 2 (15d 14h left). Own account only; the funded
account appears only as the source of a claim, tagged Funded (gold).

## MUST (all fixed)

1. Deposit fee presented as a rule. 02 listed "Forwarding fee 0.50 USDC", 03 promised
   "499.50 USDC after the 0.50 forwarding fee", 04 credited 499.50 with a -0.50 line, and every
   underlay ledger row read "500.00 USDC from Arbitrum, 0.50 forwarding fee, +499.50". Round 3:
   no fee. Now 02 says "Fee and minimum: None", 03 "500.00 USDC, no fee", 04 "500.00 USDC credited",
   ledger rows +500.00.
2. 02 did not say what happens to a token that is not USDC. Added one neutral line: "Any other token
   is not credited and stays at the deposit address." No recovery promise (08 already complies).
3. Ledger had to stay canonical (own balance $2,022.60 after the withdrawal, claim $738.40). Removing
   the 0.50 fee would have ended at $2,023.10, so the Dec 1 trading PnL moved from +64.20 to +63.70.
   Rebuilt figures:
   - Dec 2 10:00: $2,522.60 (was 2,523.10), available $1,882.60, margin $640.00.
   - Dec 1 balance after 2,490.85; closed trading PnL total +952.45.
   - 10:05 deposit +500.00: $3,022.60, available $2,382.60, deposits total +1,600.00.
   - 10:21 withdrawal -1,000.00: $2,022.60 (canonical, unchanged).
   - Check: 1,100.00 - 300.00 + 738.40 + 952.45 + 31.75 = 2,522.60.

## SHOULD (done)

- Round 3 says a claim counts as a deposit for the season. The aside lists claims beside trading
  PnL, which could read as performance. Added under it: "A claim counts as a deposit for the season
  score: no PnL, no return, no effect on your Drawdown requirement."
- 04: "Sent 500.00 USDC from Arbitrum" repeated the heading figure. Now "From 0x7a3F…c91E on
  Arbitrum"; the fee line is gone.

## Per screen

01 Own account balance. Answers the question in the first viewport: $2,522.60 leads, Available plus
Margin sum to it, Deposit is the one primary. DAI banner is the entry to 08. Movements ledger with
Balance after and tx links, aside "Where it came from" adds up to the lead. Keep all.

02 Deposit. Address, QR, EVM / Solana switch, token, fee and minimum, arrival (marked Example
timing), one primary "Copy address". Answers where, from which chain, how long.

03 Deposit arriving. 500.00 USDC, three timed steps, glass Close. Underlay shows the Arriving row.

04 Deposit arrived. One lead, $3,022.60, under "500.00 USDC credited". Primary "Back to trading"
leaves the flow; "All movements" stays in it.

05 Withdraw. Amount, destination, EVM network, fee breakdown, one primary. Withdrawal fees and the
network list stay tagged Example (round 3 only rules out deposit fees). Balance factor note stays.

06 Confirm withdrawal. Full address once, fees match 05, amber address check, "Withdraw 1,000.00
USDC", own account after $2,022.60.

07 Withdrawal sent. 998.40 USDC, three steps, header chip $2,022.60. Consistent with 03.

08 Deposit not credited. 250.00 DAI on Base: seen, from, now "At your deposit address, not in your
balance". No recovery path promised. Primary "Deposit USDC" back to 02.

## Checks against BRIEF

No freeze, unmatched fills or fill check; no leverage or position cap; no deposit fee or minimum as a
rule; no windows, rollover, automatic or partial claims, 20% tranche, daily loss, appeals,
activation, waitlist, Band column. Own and funded figures never mixed; the season rule is named
"Drawdown requirement". No em or en dashes. Every main links inside the flow. Structure tests pass.

## Left undefined (for Alberto)

- Deposit arrival time per chain (shown as Example timing).
- Withdrawal fees, the supported EVM networks, and who pays the bridge.
- Where funds land if a withdrawal fails in the bridge.
