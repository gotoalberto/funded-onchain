# F04 Seat claim: review 7 (round 3 answers)

Scope: 9 screens in src/pages/f04-seat-claim. Shots in .shots/rf6-f04-seat-claim-*.png at 1440, with
01 and 06 also at 1280. Judged against BRIEF with "Alberto's answers, round 3" first.

Overall: the flow already follows round 2 and the final consistency rules. It has no trading windows,
rollover, automatic or partial claims, 20% tranche, daily loss, appeals, activation, waitlist,
position cap or Band column. The season rule is called "Drawdown requirement" (Kept / Broken).
Funded and Own tags are never mixed in one block. Round 3 removed the freeze state, and four
screens still mentioned it.

## MUST (all fixed)

1. "Ends if liquidated or a freeze is confirmed" (01 terms, 02 underlay and modal, 05 lead, 06 terms).
   Round 3 says an account is only active or liquidated. Now "No end date. Ends only if liquidated" /
   "until liquidated".
2. 06 "Orders: only from funded.onchain.cc or onchain.cc" hinted at the removed fill check. Removed;
   the Trade now button already leads to the terminal.

## SHOULD (applied)

- 06 "Blocked: markets off the list, isolated margin" became two plain facts a pro trader looks for:
  "Markets: allowed list only, cross margin" and "Leverage: what Hyperliquid allows per market"
  (round 3: no limit of ours, no cap quoted).
- 06 liquidation caption now says equity is read at Hyperliquid's mark price (round 3).
- 04 "You stay on the board" in Season 2 was not defined after the reset (entry minimums are per
  season). Removed.

## Per screen

01 Home, window open. The first viewport answers the question: headline, Funded $25,000, "#17 on
the board, seat #14", and one Request seat button. The seat map and the Own result aside stay.
Arithmetic: 801.3 minus 776.9 = 24.4, minus 708.3 = 93.0; 612 minus 60 = 552.

02 Request (modal). One action, no window choice, no signature, withdraw note. Keep.

03 Home, requested. Lead #14 of 612, margins, seat map, worst case #16, withdraw until close,
notifications on by default. The amber variant banner is a correct use of amber. Keep.

09 Live request board. Seat map kept. The 2 traders above who have not requested (okapi,
0x2fa8…d051) plus nightjar (Can't request) explain #17 on the board and seat #14. The sticky cut row
over a row only shows up in full page shots.

04 Cannot request. Headline names the blocker, meter 13 of 15, the other requirements met, and the
Season 2 timing (start by Dec 3 to reach 15, which checks out).

05 Already funded. The Funded figures $25,923.00 / $23,423.00 match the F05 demo. The three paths fit
"liquidated during the request window can request in it".

06 Seat granted. Live at 00:00 Nov 19, $25,000.00 lead, liquidation track, six terms, Trade now, and
a separate Own note.

07 No seat. #69 of 701, 7.7 below the last seat (714.2), and seats do not come back. The Season 2
timeline follows.

08 Missed. One action (Go to Season 2) and Season 2 deadline reminders. Keep.

## Left undefined (not invented)

- Whether entry minimums carry over into the next season (04 now says nothing about it).
- 09 "If all 24 request, the last seat rises to 731.2" is a demo figure, not a rule.
