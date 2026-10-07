# F09 After the account: review (round 3)

Reviewed cold: BRIEF.md with its Decisions, manifest.json, the three 1440 shots and the three sources.
Story of the flow: kestrel's Season 1 $25K account closed at max loss on Dec 2 (Dec 3: home), he
keeps competing in Season 2 (Dec 10), Season 2 closes and he can request again (Dec 18, 09:40 UTC).

Arithmetic checked and consistent across the flow: own balance $1,284.20 + PnL ($96.40, $218.40,
$341.20) gives $1,380.60, $1,502.60, $1,625.40; returns +17.0% and +26.6% match; rank #44 to #33
matches "11 this week"; trading days 6 (15 left), 12 (8 left), 16; closed account $4,488.60 +
$511.40 = $5,000, same figures as F06 03; 14h 20m from Dec 18 09:40 to Dec 19 00:00 is right;
#19 + 3 = #22 is the first $5K place. The problems are wording, repetition and hierarchy, not maths.

## 01 Home after losing the account (Dec 3)

**Question:** My account is gone. How do I get another one?
**First viewport:** half answers. The h1 says "Request a new seat on Dec 18", but he cannot: he
needs 9 more trading days. The real answer ("9 more trading days, by Dec 18") is the big figure
below, so the headline and the lead figure contradict each other.

**Components**
* h1 "Your $25K account closed on Dec 2. Request a new seat on Dec 18." CHANGE. Breaks the
  Decision "when a floor is unmet, the headline names the blocker". Use: "Your $25K account closed
  on Dec 2. Trade 9 more days to request a new seat on Dec 18."
* Intro paragraph ("Dec 3. Your own account kept its place...") CHANGE. The date is buried as the
  first word of a sentence; move "Dec 3, 02:00 UTC" to its own caption (as 03 does with "Now:").
  The rest repeats the h1 and the timeline; keep one line: "Only your own account counts on the
  board. One funded account at a time is the only limit."
* Lead "9 more trading days needed" plus trading days meter KEEP. This is the answer. The foot
  "15 days left, trade on 9 of them" is the most useful line on the page; keep it.
* Floors block ("2 of 3 floors met", PnL, drawdown) KEEP, but it competes in size with the lead.
  Fine as secondary.
* Rank row "#44 of 2,871. Score 716.8." KEEP as a small line, not as a second display figure.
  Today it is set at figure size, giving the screen two lead numbers (9 and #44).
* Band ladder REMOVE on this screen. It answers "where do I stand", the question of 02 and of
  F03. It is also not labelled "Projected" on screen (only in aria-label), which breaks the
  Decision. If kept, add the caption 02 already has.
* Foot sentence "Your rank sits in the projected $5K band... only becomes a seat you can request
  once you reach 15 trading days." REMOVE with the ladder; it restates the h1 blocker.
* Trade button KEEP, the right single primary action.
* Aside "The account that closed" KEEP, trimmed. Rows: Seat, Active, Closed by, Returned to Bitso,
  Loss carried by Bitso, You owe, Payout. "Loss carried by Bitso" and "You owe: Nothing" say the
  same thing; keep "You owe: Nothing" (that is the trader's worry) and drop "Loss carried by Bitso"
  (derivable). Add why $4,488.60 is below the $4,500 floor (one caption: "closed at market, $11.40
  of slippage below the floor"); a pro trader will spot the gap and distrust the floor otherwise.
  "Seat: Season 1, $25K, $5,000 USDC" quotes both size and USDC, good.
* Aside "What comes next" timeline CHANGE. Missing the activation deadline (Dec 21, 00:00 UTC by
  analogy with Nov 21). The first item "Competing, own account" repeats the intro. Dec 18 now appears
  4 times (h1, paragraph, timeline, skip link).
* "Skip to Dec 10 / Skip to Dec 18" links: mockup navigation inside product UI. KEEP for the test,
  but style them as mockup chrome (outside panels, muted), not as product links in the aside.

**Missing:** what lost the account in one word up top is fine; nothing essential missing besides
the slippage note and the activation deadline.
**Superfluous / repeated:** ladder, foot sentence, second display figure, Dec 18 x4, Bitso loss row.
**Inconsistencies:** h1 vs honesty Decision; ladder not labelled Projected; header chip "14d 22h"
implies 02:00 UTC but no time is stated anywhere on the page (03 states "09:40 UTC").
**Hierarchy:** three heavy blocks in one panel (lead, rank plus ladder, foot) with equal weight;
the eye lands on "9" and "#44" at once. The aside panels are as bright as the main panel.

## 02 Competing again (Dec 10)

**Question:** I'm back on the board. Does my last account count against me?
**First viewport:** yes, the h1 answers it directly ("does not count against your score or
floors"). Good. But the lead figure (#33) answers a different question (where do I stand).

**Components**
* h1 KEEP. Clear, neutral, as the Decision asks.
* Intro paragraph CHANGE. "Dec 10." again buried in the sentence; move to a caption. "Your Season 1
  account closed at max loss on Dec 2, and one funded account at a time is the only limit" repeats
  01 and adds nothing for this question; cut to "Score and floors use your own account only."
* "#33 of 3,040 traders", "11 this week" pill, Score 744.2 with "How it's built" KEEP. Rank is the
  natural proof that the loss did not hurt; consider a caption "No change from the closed account".
* Band ladder with "Projected among traders who meet or can still meet the floors" CHANGE. The
  marker sits in the $5K zone while he still misses a floor, with no word of it inside this panel.
  Decision: never imply "inside the seats" while a floor is unmet. Either drop the marker or add
  "Needs 3 more trading days" next to it. Also #33 is a rank among all 3,040, while the zones are
  projected among eligible traders: the marker mixes two populations (see questions).
* Foot "#32 quillon is 1.4 points ahead. The last $25K seat is #21, 18.6 points above you." KEEP,
  precise and useful.
* Trade button KEEP.
* Floors panel "3 more trading days to request on Dec 18" KEEP: this heading follows the honesty
  rule. Pill "2 of 3 met" REMOVE, the heading already says it.
* Net PnL meter CHANGE: a binary floor drawn as a full green bar reads as "100% of something". Use
  the check and the figure only. Max drawdown meter KEEP (it is a real distance to a limit).
* "Back to Dec 3 / Skip to Dec 18" same note as 01.

**Missing:** nothing essential.
**Superfluous / repeated:** the loss and "one account at a time" sentence (said in 01 and in 03),
"2 of 3 met" pill.
**Inconsistencies:** ladder labelled Projected here but not in 01; layout is single column narrow
(1000px) while 01 and 03 use main plus aside, so the same home changes shape across three days.
**Hierarchy:** the floor blocker, which decides whether he can request at all, sits in the second
panel below the fold line of attention; the ladder above takes the most space. Swap weight: the
blocker deserves the space the ladder has.

## 03 Request a seat again (Dec 18, 09:40 UTC)

**Question:** Season 2 closed. Can I request a seat now?
**First viewport:** yes. h1 "Season 2 closed. You can request a seat", primary "Request seat"
visible, floors met. Strong screen.

**Components**
* h1 KEEP (honest: 3 of 3 floors met, no funded account held).
* Caption "Now: Dec 18, 09:40 UTC. You meet all three floors and hold no funded account." KEEP the
  date, REMOVE the eligibility sentence (said by h1, "Eligible" pill and floors line).
* "#19 of 604 requesters so far" CHANGE. He has not requested yet, so he is not #19 of the
  requesters. Write "#19 if you request now, of 604 requests so far". Precision matters most here.
* "Eligible" pill REMOVE (fourth statement of eligibility). Green here is pass/fail, allowed, but
  redundant.
* Caption "Final board rank #29 of 3,118, score 768.0" KEEP, small.
* Two band cards ($25K "Likely", $5K) CHANGE. "Likely" is a guess; pro traders want the rule. Rename
  to "If you request now" and state the condition on the $5K card ("If 3 or more above you request").
  The violet border and violet "Likely" pill are not a primary action, selection or own row: break
  the colour rule. Use a neutral emphasis.
* Cutline box "Eligible traders above you who have not requested yet: 10" plus explanation KEEP, it
  is the honest mechanism. Then the band cards repeat its conclusion; consider merging the $5K card
  into this sentence and showing only one band card.
* Foot "You pick a trading window of 1 week, 2 weeks or 1 month when you request." KEEP.
* "Request seat" button KEEP (leads to F04 02, inactive in this build, as intended).
* Floors line "3 of 3 floors met" with PnL, drawdown, days KEEP as the single place for floors.
* Aside "Request window" timeline KEEP. "Season 2 closed" done dot is violet; done states are not
  selection, use neutral. Activation deadline (Dec 21, 00:00 UTC) missing. "Funded window starts
  Dec 20" is right by analogy with Season 1.
* Caption "Your Season 1 account closed on Dec 2. It has no effect on this request." KEEP: it is the
  reason this screen belongs to F09.
* Skip links same note.

**Missing:** activation deadline; nothing else.
**Superfluous / repeated:** eligibility x4; requests close stated in header chip and timeline (fine,
different forms, but the timeline row "Until Dec 19, 00:00 UTC" is enough if the chip stays).
**Inconsistencies:** violet on "Likely" and the likely card; date caption format differs from 01/02.
**Hierarchy:** good. The single lead figure and one large button read in order.

## The flow

Sequence: loss, competing, request. Complete for the main path. The three dated steps chain
correctly and the numbers evolve consistently.

States missing (decide, do not necessarily build):
1. Lost account and drawdown already over 25% in Season 2: "Can't request this season", next
   close Jan 17, 2027. This is the most likely real case after a max loss day if the trader keeps
   trading, and the flow promises "request again" without showing when it fails.
2. Account closed at window end below start (F07 03) as the entry point instead of max loss: does
   01 change copy (no "max loss", Returned to Bitso differs)? 01 is written only for max loss.
3. Account closed by a freeze (F06 02, unmatched fill) that is upheld: can that trader request
   again? The flow summary implies yes for any loss.
Redundant: none of the three screens is redundant; 02 is the weakest (its question is answered by
one sentence) and could be a variant of F03 01 with one caption.

## Fix list

MUST
1. 01 h1: name the blocker. "Trade 9 more days to request a new seat on Dec 18." (Honesty Decision.)
2. 03 lead: "#19 if you request now, of 604 requests so far". He is not a requester yet.
3. 01 remove the ladder and its foot sentence; keep "#44 of 2,871, score 716.8" as a small line.
   One leading figure (9 days) and one question per screen. If the ladder stays, label it Projected.
4. 02 ladder marker: say inside the panel that he cannot request yet ("3 more trading days"), or
   drop the marker. Never imply a seat while a floor is unmet.
5. 03 colour: remove violet from the "Likely" pill and the likely card border, and from done
   timeline dots in 01/03. Violet only for primary action, selection, own row and own marker.
6. 01 aside: drop "Loss carried by Bitso" (duplicates "You owe: Nothing") and explain $4,488.60
   below the $4,500 floor in one caption.

SHOULD
7. 01, 02: move the date to its own caption with the time ("Dec 3, 02:00 UTC"), same format as 03.
8. 03: remove "Eligible" pill and the "You meet all three floors" sentence; floors line says it.
9. 03: rename "Likely" to "If you request now"; consider one band card plus the cutline sentence.
10. 01, 03 timelines: add "Activation deadline, Dec 21, 00:00 UTC".
11. 02: remove "2 of 3 met" pill; show Net PnL floor as check plus figure, not a full bar.
12. 02: give the floor blocker the weight; move the floors panel above or into the standing panel.
13. 01, 02: cut the repeated "closed at max loss, one account at a time" sentences to one line each.
14. Use one layout for the three homes (main plus aside, or narrow), so the same page does not
    change shape between Dec 3 and Dec 10.

COULD
15. Style the Skip/Back date links as mockup chrome, outside product panels.
16. 02: caption under the rank "Same as without the closed account" to make the answer visible in
    the numbers, not only in the h1.
17. Header brand tag "Funded" appears for a trader who holds no funded account; confirm it reads as
    the product name, not his status (the Own chip is correct).

## Undefined product rules (questions for Alberto)

1. Rank population: is "#44 of 2,871" the rank among all traders on the board or among traders who
   meet or can meet the floors? The zones are projected among the latter, so the marker position
   depends on the answer.
2. Max loss closes "at the floor" but returns $4,488.60: is slippage below $4,500 carried by Bitso
   always, and is it shown as such? Any cap?
3. Activation deadline for Season 2 seats: Dec 21, 00:00 UTC (48h after assignment), as for Season 1?
4. Does an account lost by an upheld freeze (unmatched fill) allow requesting again, or only losses
   by max loss and window end?
5. Own account trading days while funded: during Nov 20 to Dec 2 he held a funded account; did own
   account days in that period count for Season 2 floors? The flow assumes yes (6 days by Dec 3).
6. Does net PnL for the floor use deposits and withdrawals adjusted PnL? $1,284.20 start is assumed
   constant; a deposit mid season is not covered.
7. Can a trader who just lost an account inside a request window (e.g. closes on Dec 18) request in
   that same window?
