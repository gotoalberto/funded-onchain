# F04 Seat claim, review

Reviewed cold: 11 screenshots at 1440 plus `src/pages/f04-seat-claim/*.html`, against BRIEF.md and its Decisions.
Dates, countdowns, seat arithmetic and rules wording check out
(18h 12m at Nov 18 05:48, 7 of 15 taken for #14, 47h 55m to Nov 21, 26d 15h at Nov 21 08:30, 13 lit day cells,
"start by Dec 3"). The problems are repetition, an unlabelled projected band, one reallocation rule that two
screens contradict, and the persona changing results between screens.

## 01 Home, request window open

1. Question: can I request, and what would I get? First viewport answers it: headline, $25,000 / $5,000, Request seat.
2. Components
   * Headline plus date caption: KEEP.
   * Offer ($25K chip, max position, USDC): CHANGE. It reads as guaranteed, but it depends on who else requests.
     Label it "Projected at #14 among requesters now" (Decisions: bands on live boards say Projected).
   * Terms row (daily loss, max loss, window): KEEP, it is the one place the rules show before the modal.
   * Request seat + caption: KEEP. "One signature, no gas" is good trust copy.
   * "Your place among requesters" (ladder, #14 of 612, two foot lines): KEEP the ladder, CHANGE the foot to one
     line. "7 of 15 $25K seats taken, 8 left" restates the ladder marker; the "3 above you" sentence is the useful one.
   * "Your Season 1 result" (rank #17, score, floors 3 of 3): KEEP floors, CHANGE: #17 next to #14 is the main
     confusion on the page. Rename "Final rank" to "Season rank" and add once, in the ladder header, "Requesters only,
     so your season #17 becomes #14 here".
   * "After the window" timeline: CHANGE order and wording. "Trading opens Nov 20" listed before "Activation deadline
     Nov 21" reads as if trading opens without activating. Say "Your window starts Nov 20 whether or not you have
     activated; activate by Nov 21 00:00 UTC".
   * Missing: a reminder offer ("Remind me 1 hour before requests close") for traders who open this page and leave.
     F04-10 shows that this failure is real; offer it here, before it happens.
3. Repeated: close time twice (header chip countdown and caption). Keep the caption date, the chip is enough for the countdown.
4. Consistent with BRIEF (+$498.30, 19 days, 11.4% DD are plausible end values from the Nov 6 data).
5. Hierarchy fine. The ladder's violet $25K segment is the own marker: allowed.

## 02 Request a seat (modal)

1. Question: pick my window and accept the rules. Answered.
2. Components
   * Step 1 account card: REMOVE. It repeats the offer visible right behind the scrim. One line in the title
     ("Request a $25K seat, $5,000 USDC, projected") is enough.
   * Step 2 window options with dates: KEEP. Outcome lines (rolls over / closes / first payout): KEEP, they follow the
     chosen length ("another month"). Good.
   * Step 3 rules list: KEEP, CHANGE daily loss to the Decisions definition: "Equity drop of 5%, $250, from the day's
     starting equity, realized plus unrealized. Pauses until 00:00 UTC". This is the acceptance screen; it must be the precise one.
   * Fill caption under the rules: KEEP.
   * Accept checkbox: CHANGE. Shown pre-checked. Show the default unchecked with the primary disabled, or note the state.
   * Footer: KEEP ("Signs with 0x7a3F…c91E. No gas, nothing moves").
3. Missing: whether a request can be withdrawn after signing (see questions). Missing that a second signature
   (activation) follows if granted; the trader should know this is not the last step.
5. Hierarchy: two-column body is balanced; numbering 1, 2, 3 is fine.

## 03 Home, seat requested

1. Question: where am I in the queue and how many seats above me? Answered by #14 of 640 and the ladder.
2. Components
   * Lead (#14 of 640): KEEP.
   * "7 of 15 taken, 8 left" second figure: REMOVE, the ladder says it. Two big figures break "one leading figure".
   * Ladder: KEEP.
   * Foot sentence "If granted: $25,000 ... 2 traders above you can still request": KEEP the second half,
     drop the account recap.
   * "Cut line, live" table: REMOVE or shrink to one line in the lead ("24.4 points above the last $25K seat, 91.5 above
     the last seat"). It repeats the ladder, which the Decisions forbid ("no table repeating a ladder").
   * Your request panel: KEEP. Change window button: KEEP.
   * "Tell me the result" toggles: KEEP, small.
   * "What a granted seat looks like" link: REMOVE (mockup navigation, see flow notes).
3. Missing: the state where late requesters push you into a lower band or below #60. That is what this screen exists
   to warn about; one amber line variant ("2 requests above you since 06:20, you moved from #12 to #14") would do.
4. 612 requests on 01, 640 here, 701 final: consistent progression.

## 04 Home, cannot request

1. Question: why can't I request? Headline answers it ("2 trading days short"). Good, it names the blocker as Decisions require.
2. Components
   * Headline, date caption, explanation sentence: KEEP; the sentence restates "13 of 15", trim to the consequence.
   * Result box (#142, 688.4): CHANGE to smaller. Rank is irrelevant when you cannot request and it is visually bigger
     than the blocker figure.
   * Floors meters: KEEP.
   * Day by day grid: REMOVE. Third statement of 13 days (headline, meter, grid). The definition caption under it
     ("a UTC day with at least one closed trade") is valuable: move it under the trading days meter.
   * "Next chance: Season 2 close" three items: KEEP; "start by Dec 3" is exactly the precise number pros want.
   * "The request screen for traders who met all 3 floors" link: REMOVE (mockup navigation).
   * Keep trading primary: KEEP, but it points to F03 trade; fine.
3. Missing: the drawdown variant ("Can't request", no band) from the Decisions. One example is enough for the mockup, but
   name the other two blockers in a caption so the designer knows the headline changes per floor.

## 05 Home, already funded

1. Question: I hold an account, what does the season mean for me? Answered in the headline.
2. Components
   * Headline: CHANGE, too long. "You hold an account, so no request this season".
   * Body "in the request order you are skipped and the next requester takes the place": CHANGE to plain
     "You stay on the leaderboard. Requests skip you while you hold an account."
   * Result box with neutral "Funded trading does not count" caption: KEEP.
   * Account row (equity, window day 29 of 30, Open account): KEEP, make Open account the primary. The screen has no
     primary action now.
   * "When you can request again" two paths: KEEP. Correct reasoning (window ends Dec 20, after the Dec 19 close, so
     Season 3 close Jan 17).
   * Bottom link to 01: REMOVE (mockup navigation).
3. Missing: payout tie-in. A rollover on Dec 20 keeps the Jan 15 first payout alive; one clause would answer why to stay above $5,000.
4. Date stated (Dec 18). Equity $5,412.80 differs from BRIEF's day 9 figure, which is fine at day 29.

## 06 Seat granted

1. Question: what exactly do I get? Answered fully above the fold. Best screen of the flow.
2. Components
   * Title "You got a $25K seat": KEEP. Caption: KEEP.
   * Account card (figures plus six terms): KEEP here; this is the screen that owns the full terms.
   * Activate + caption: KEEP, CHANGE caption order: lead with the deadline and the consequence, then
     "Your window runs Nov 20 to Dec 20 even if you activate later" (Decisions: window starts activated or not).
     Today the caption hides that activating on Nov 20 at noon costs half a day.
3. Missing: a "now" caption (Nov 19, 00:05 UTC). It is only inferable from the chip and "47h 55m left".
4. "Window end: at or above $5,000 rolls over, below closes" matches the Decisions wording.

## 07 Activate (modal)

1. Question: sign once and start trading. Answered; the signature preview (can / cannot / no network fee) is excellent trust material.
2. Components
   * Three step list: KEEP. Signature card: KEEP. Fill warning: KEEP but it is the third time in the flow (02, 07, 08);
     fine here since this is where the key is registered.
   * "Waiting for your signature" pill in violet: CHANGE to neutral or amber. Violet is for actions, selection, own row.
   * Underlying Activate button visible through the scrim: fine.
   * "Expires in 9m 41s": KEEP, but define what happens on expiry (new prompt, same deadline).
3. Missing states: signed and waiting for Bitso's deposit (step 2 pending), and deposit failed or delayed. With a
   48h deadline the trader needs to know a slow deposit does not cost them the seat.

## 08 Account ready

1. Question: when can I place my first order? Countdown 23h 51m leads. Good.
2. Components
   * Title + caption: KEEP.
   * Countdown and track: KEEP. Track foot "Nov 20, 00:00 UTC, first order": KEEP.
   * Account card: CHANGE to a compact row (band, $5,000.00 in the account, window, contract). The six terms were on 06
     one tap ago; Decisions: prefer removing.
   * "Orders are accepted from Nov 20, 00:00 UTC" next to the button: REMOVE, third statement of the same time.
   * "The seat you accepted" link: REMOVE (mockup navigation).
   * Share your seat with referral: KEEP as secondary. Correct 1bp wording.
3. "Open the funded terminal" before trading opens: fine if the terminal shows a locked state; say what the trader can
   do there now (set up layouts, nothing else).

## 09 No seat left

1. Question: why no seat, and when is the next chance? Headline and "7.7 points below the last seat" answer it.
2. Components
   * Lead text: KEEP. Result box with three figures: CHANGE to two (place among requesters, score); season rank is noise here.
   * "Where the seats ended" table: KEEP, it is the evidence a pro trusts. #63 to #72 = 10 rows hidden: correct.
   * "What would have closed the gap" estimates: REMOVE or move behind a link. "About $170" and "4 pts" are model
     estimates a pro cannot verify; the score breakdown in F03 is the trustworthy place.
   * Season 2 timeline: KEEP. "How the request window works" link to 01: REMOVE (01 is a live state, not docs).
3. Inconsistency: the table says "Final" on Nov 19, but 06 and 11 say an unactivated seat "goes to the next requester".
   So #61 to #73 are not final until Nov 21. Either this screen is a waitlist ("You are 13th in line if seats are not
   activated by Nov 21") or 06/11 change. Needs Alberto's rule.
4. Persona: kestrel here is #73 with 706.5 and season #96, while the BRIEF fixes F04 kestrel at #17 / 801.3.

## 10 Request window missed

1. Question: I forgot, what now? Answered: headline, "would have been #14, a $25K seat", next window date.
2. Components
   * Lead and result box: KEEP. "so it went to the next requester" is slightly off (seats are not reserved per trader);
     say "seats went down the requester list without you".
   * Reminder settings: KEEP, the right remedy. CHANGE: the two notification channels are already on in 03, so "Save
     reminders" as a violet primary next to a glass "Go to Season 2" creates two competing actions. Make the toggles
     save on change and keep one primary, Go to Season 2.
   * "How the request window works" link: REMOVE.
3. Missing a "now" date caption (only the chip implies Nov 19 00:00).

## 11 Activation deadline missed

1. Question: is my seat gone? Yes, answered in the headline and caption.
2. Components: lead text KEEP; "nothing is taken from you" KEEP (no penalty, per Decisions); result box KEEP.
   "The seat you were granted" link: REMOVE (it opens a live Activate button for a dead seat).
3. "27 days are left" against the chip's 26d 15h: say "26 days left" or "27 UTC days including today" so both agree.
4. "The seat went to the next requester below the last seat": which band that trader gets is undefined (see questions).

## Flow

Sequence: open window, request, requested (or not eligible, or already funded), granted, activate, ready, plus
the three misses (no seat, did not request, did not activate). Complete for the happy path and the main failures.

Missing states
* Requested and pushed down by late requesters (into $5K or below #60) before the close.
* Activation signed, Bitso deposit pending or failed (07 step 2).
* Granted but not yet activated after Nov 20 00:00, window already running.
* Waitlist between Nov 19 and Nov 21 for #61 onwards, if forfeited seats are reassigned.

Redundant
* The account card appears on 01, 02, 06, 08. Keep it on 06 only, one line elsewhere.
* Cut table on 03 duplicates the ladder.
* Mockup-only cross links ("What a granted seat looks like", "The seat you accepted", "The request screen for traders
  who…", "How the request window works") exist to satisfy the same-flow link test but read as product copy. Mark them as
  mockup annotations (dashed, outside the panels) or route them to real destinations.
* Kit level, not this flow: the "Funded" product pill beside the logo and the "Funded" account tag are violet without
  being actions. Check against the colour rule.

## Fix list

MUST
1. 01: label the offer "Projected at #14 among requesters now"; it is not guaranteed until the close.
2. 09 vs 06/11: resolve whether no-seat is final on Nov 19 or a waitlist until Nov 21; make the three screens agree.
3. 06 and 01 timeline: say the window starts Nov 20 whether or not the trader has activated, and fix the 01 order
   (activate by Nov 21, window from Nov 20).
4. 09 (and 04 by avatar K and balance): use the BRIEF F04 persona numbers or a caption "Another trader's result",
   so the flow does not show kestrel with three different Season 1 results.
5. 03: remove the second lead figure and the cut table (or collapse to one line); one figure, no table repeating the ladder.
6. 02: daily loss rule in the Decisions wording (equity drop, realized plus unrealized, from the day's starting equity).

SHOULD
7. 02: remove the step 1 account card; show the checkbox unchecked with the primary disabled.
8. 04: remove the day grid, move the trading day definition under the meter, shrink the rank box.
9. 05: shorter headline, plain skip wording, Open account as the primary.
10. 07: neutral or amber status pill instead of violet; add deposit pending and expired signature states.
11. 08: compact account row, drop the repeated "Orders are accepted from" caption.
12. 10: one primary (Go to Season 2), reminders save on toggle.
13. 01: add "Remind me before requests close"; collapse the queue foot to one line; explain #17 vs #14 once.
14. All: remove or restyle mockup-only cross links; add "now" captions on 06 and 10.
15. 03: add the pushed-down variant (amber), since it is the risk this screen watches.

COULD
16. 09: drop "What would have closed the gap" or move it behind a link to the score breakdown.
17. 11: align "27 days" with the 26d 15h chip.
18. 05: one clause linking rollover on Dec 20 to the Jan 15 first payout.

## Questions for Alberto (undefined rules)

1. A forfeited seat (not activated by Nov 21): does #61 get a $5K seat, or does everyone below the forfeit move up one
   band (a $25K forfeit lifting #22 into $25K)? Does the new holder still get a window ending Dec 20?
2. Are #61 onwards told they are on a waitlist on Nov 19, or is "No seat" final?
3. Can a trader withdraw a request after signing? Is a request binding in any way?
4. What does the request signature contain, and is it per season?
5. Score ties among requesters: how are they broken?
6. A funded trader whose account closes during the request window (e.g. max loss on Dec 18 at 10:00): can they request in that same window?
7. Do the entry minimums (including the $100 balance) still have to hold at the close, or only the three floors?
8. If Bitso's deposit is delayed past Nov 21 00:00 after the trader signed, is the seat safe? (Assumed yes, but unstated.)
9. Activation signature expiry: a new prompt with the same deadline, presumably; confirm.
10. Trading day: "a UTC day with at least one closed trade" (04). Confirm it counts closed trades only, or any fill.
11. Where does the notification email come from with no KYC (Privy login email?) and are reminders on by default?
