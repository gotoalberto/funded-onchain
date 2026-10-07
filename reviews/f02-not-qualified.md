# F02 Not qualified yet: final review (rf7, after Alberto's round 3)

Scope: 6 screens in src/pages/f02-not-qualified, shots .shots/rf6-f02-not-qualified-*.png at 1440
(02 and 04 also at 1280). Precedence: round 3, Final consistency rules, round 2, 2026-10-06
answers, Decisions, canonical board.

Overall: clean and honest. One question, one leading figure, one violet action per screen. No
freeze, unmatched fills or fill check; no leverage or position cap; no windows, rollover,
automatic or partial claims, tranche, $5,000 on $25K, $4,500/$5,500, daily loss, appeals,
activation, waitlist or Band column. Own figures carry the Own tag; the single funded mention
("$5,000 to $200,000 of Bitso's USDC") names its account in words. The season rule is called
"Drawdown requirement" with "Kept" and "your line". Round 3 only touches deposits here.

## 01 Home, nothing met yet
- Question "What do I need to do to get on the board?": answered in the first viewport.
- Keep: date caption, three minimum meters with "to go", Deposit primary, Trade glass, trading
  days aside with the Drawdown requirement caption, Season 1 panel (only place that says what is
  at stake).
- MUST (round 3): headline "Deposit $100 to start" reads as a deposit minimum. Deposits have no
  minimum; the $100 is a balance entry minimum. Now "Hold $100 in your own account to start".
- Arithmetic: Oct 27 08:30 to Nov 18 00:00 = 21d 15h; Oct 27 to Nov 17 = 22 days. Correct.

## 02 Deposit (modal over 01)
- Question "How do I fund my own trading account?": answered (network, QR, address, ledger,
  waiting state). USDC only, any EVM chain or Solana, lands in the own account.
- MUST (round 3): ledger row "Board minimum, $100 or more" presented a minimum inside the deposit
  flow. Replaced by "Fee and minimum: None".
- MUST (round 3): non USDC tokens. Added "Other tokens: Not credited, they stay at this address".
  No promise about recovering them.
- Underlay headline follows 01.
- Undefined, left out: same address on every EVM chain, arrival time.

## 03 Home, in progress
- Question "How close am I?": answered by "3 more trades and $360 of volume" plus the three $60
  positions hint (3 x $120 open plus close = $360, each over $50 and 60 s).
- Balance $251.95 after a 250 USDC deposit agrees with no deposit fee.
- Keep everything. MOCKUP note is the designer aid and the in flow link to 04.

## 04 Home, on the leaderboard (key screen)
- Question "I made it. Where do I stand?": "#812 on the board of 1,642. No seat yet." plus the
  blocker "10 more trading days before you can request a seat". Honest: no band stated as fact.
- Keep: seat zone ladder (seat map design), score as the secondary figure, alias banner, "To
  request a seat" panel with segments, Net PnL, Drawdown requirement (Kept, your line $233.40),
  $100 balance at the close.
- SHOULD (each fact once): trading days foot repeated "10 needed" from the lead. Now "21 days
  left" only.
- Drawdown math: start $250.00, 10% = $25.00, highest $258.40, line $233.40, locks at $250.00
  from $275.00. Correct.
- Zone scores differ from the Nov 6 canonical board; correct, screen is dated Oct 27 and names no
  traders.
- 1280: ladder labels fit, no overlap.

## 05 Choose an alias (modal over 04)
- Question "How will others see me on the board?": preview row (own row violet, Seat "No seat").
  "Change it any time" matches Alberto. Underlay mirrors 04 including the SHOULD fix.
- Could: taken and invalid states; not added, happy path is the point.

## 06 Home, new to onchain (example trader)
- Question "When can I realistically request a seat?": "Your first seat request: Dec 18" with the
  arithmetic (12 reachable in Season 1, 29 in Season 2; Dec 3 to Dec 17 = 15). Example caption
  present, header chip 11d 14h. Timeline neutral, Deposit primary.
- No change.

## Cross screen
- Season rule wording identical on 01, 02, 04, 05.
- Balance minimum wording now consistent: "Balance of $100" (meter), "Hold $100" (headline),
  "$100 balance at the close" (request). Never a deposit minimum.
- Flow links: 01 to 02, 02 to 01, 03 to 04, 04 to 05, 05 to 04, 06 to 02.

## Fix list
MUST
1. 01, 02: headline "Deposit $100 to start" to "Hold $100 in your own account to start". Done.
2. 02: "Board minimum" row replaced by "Fee and minimum: None". Done.
3. 02: "Other tokens: Not credited, they stay at this address". Done.
SHOULD
4. 04, 05: trading days foot "10 needed, 21 days left" to "21 days left". Done.
COULD (not done)
5. 05: taken and invalid alias states.

## Undefined, for Alberto
- Season starting capital for a trader with onchain.cc history who had $0 and then deposits $250
  (04 assumes $250 and counts earlier PnL in net PnL +$9.85).
- Whether board entry or minimums carry into the next season.
- Deposit address: one for all EVM chains? Arrival time?
