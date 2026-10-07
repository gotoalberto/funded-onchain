# F06 Risk events, review

Screens: 01 daily pause, 02 frozen, 03 closed at max loss, 04 incident, 05 appeal, 06 appeal sent.
Read cold at 1440. Arithmetic checked: every figure inside a screen adds up (day total -$250.40,
floor headroom $434.20, slippage -$11.40, returned $4,488.60, fill realized +$33.92, position value
$11,254). The problems are across screens, in the colour rule, and in product rules that the copy
presents as settled.

## 01 Daily pause (Trade, Sun Nov 29 18:48 UTC)

Question: I lost 5% today. When can I trade again?
First viewport: yes. Banner title "Paused until 00:00 UTC" plus amber clock 05:12:08.

Components
- Event banner (title, cause, clock): KEEP. Clock is the right lead figure. CHANGE the body to two
  facts only: loss $250.40 against the $250 limit and what was closed. Drop "on your $25K account"
  (header already says it).
- "Scenario: Sun, Nov 29..." caption: CHANGE to "Sun, Nov 29, 18:48 UTC". "Scenario" is mockup voice
  and the window day already sits in the header chip (said twice now).
- Market header, chart, order book: KEEP (terminal context), but the XAU "Weekend, reopens 23:00 UTC"
  stat invites a question nobody asked here. COULD switch the demo to a weekday.
- Chart line "Closed long 2.78 at 2,641.10, reduce only": KEEP, it is what a pro looks for.
- Rule log tab: KEEP. It is the evidence that the pause was correct.
- Ticket: CHANGE. Box "New orders open at 00:00 UTC, Mon, Nov 30" and button "Paused until 00:00 UTC"
  say the same thing in one panel. Keep the box, make the button a plain disabled "Long" / "Short".
- Account rules panel: CHANGE. The "Paused" tag repeats header tag, banner and ticket (4 times).
  The daily loss meter repeats the banner. Keep the max loss meter (the useful fact: $434.20 above
  the floor). Add the day's starting equity ($5,184.60), without it the 5% cannot be checked.
- "What you keep": CHANGE. "Nothing is owed and nothing carries into tomorrow" is wrong for a trader:
  the loss carries, equity starts tomorrow at $4,934.20 with the floor $434.20 away. Replace with one
  line: "Tomorrow: a fresh $250 from $4,934.20. Closes at $4,500".
- "Appeal the pause" link: CHANGE, it points to `#appeal-pause`, a dead anchor (see flow).

Missing: day start equity; whether the trader may trade the own account meanwhile (a "Switch to own
account" action would be the one primary action, if Alberto wants that).
Superfluous: 00:00 UTC appears 5 times (title, ticket box, button, meter foot, clock label).
Inconsistent: BRIEF says the daily limit "pauses trading". This screen also force closes both positions
and cancels brackets. That is a product rule the BRIEF never states (see questions).
Hierarchy: the banner body runs to two lines at 1440 and competes with the clock; fine otherwise.
No primary action, no violet: correct for a blocked state.

## 02 Frozen (Home, Tue Dec 1 16:16 UTC)

Question: An order was filled outside the terminal. What happens now?
First viewport: yes. Title, cause, deadline 21h 46m and "Explain the fill".

Components
- Lead (title, cause, deadline, reviewer, primary): KEEP. CHANGE "Reviewed by Bitso risk desk" from a
  stat the same size as the deadline to a caption; it is not a figure. CHANGE "Answers by email and
  in the app": email is optional in 05 and absent in 06.
- "The unmatched fill" (fill vs terminal orders): KEEP. Best component in the flow for pro trust:
  signer, hash, Hyperliquid link, checked window 14:00 to 14:05.
- "What happens next" timeline: CHANGE. Steps 1 and 2 repeat the lead (time of freeze, the desk
  reviews). Keep only the two outcomes. Timeline line and dots are violet: colour rule breach.
- "While frozen": KEEP, but it hides the most important trust question: positions stay open and the
  trader cannot place orders. Can they close them? Today the copy implies they are stuck with risk
  while max loss "still applies". State it either way (see questions).
- "Common causes": KEEP, short. It prevents the next freeze.

Missing: whether reduce only closes are allowed; what happens to profit if the outcome is "Closed".
Superfluous: deadline and "Bitso risk desk" also inside the timeline wording; date in caption and chip.
Inconsistent: positions listed (XAU long 2.78 oz, ETH short 1.25 to 0.45) are the same positions that
01 force closed on Nov 29. Same sizes reappear on Dec 4 (04). A pro reading the flow sees recycled data.

## 03 Closed at max loss (Home, Wed Dec 2 15:20 UTC)

Question: I hit the 10% limit. What did I keep?
First viewport: partly. The big figure is "$0 owed", which answers "what do I owe", not "what did I
keep". What was kept (own account, right to request on Dec 18) sits in the second panel.

Components
- Title "Your $25K account closed at the 10% max loss": KEEP.
- "$0 owed" display plus "Bitso covers the $511.40 loss": CHANGE. "Covers" suggests a debt that Bitso
  forgave; the loss was always Bitso's USDC. Lead with what was kept, and fold the money into one line:
  "You owe nothing. Bitso's $511.40 loss stays with Bitso."
- Body paragraph comparing with the daily limit: KEEP the cause sentence, REMOVE the daily limit
  comparison (it belongs to 01 and pulls attention to another screen).
- Figures "Returned to Bitso $4,488.60" and "Slippage -$11.40": KEEP, pros will check them. Missing
  third fact from F09: "Payout: none, closed before week 8". Add it, it is the real "what did I keep".
- "What you keep": KEEP, move up as the lead. "Funded trading does not count for the season
  leaderboard" is neutral, OK per Decisions.
- Equity chart Nov 20 to Dec 2: COULD REMOVE or collapse. History, not an answer to the question.
- "Closing fills" table: KEEP. CHANGE column "Floor price" to "Price at floor": floor is an equity
  level, not a price.
- Aside "What next" timeline + "Go to Season 2": KEEP the button. The timeline repeats Dec 18 already
  stated in "What you keep" and "15 days left" repeats the header chip. Keep one.

Inconsistent: own balance $1,284.20 here vs $1,380.60 in F09 the next day; score 702.4 vs 716.8 (can
move in a day, but say so or align). Header chip switches to "Season 2 ends in", the other five
screens use a date chip: fine for a closed account, but note it is the only one.
Colour: the "now" dot of the timeline is violet. Primary button violet is correct.
Appeal link `#appeal-close` is dead.

## 04 Platform incident (Trade, Fri Dec 4 14:49 UTC)

Question: Something broke on our side. Am I protected?
First viewport: no. The title says "Your rules are held at 14:31 UTC", which is jargon. The trader
cannot tell from it whether a loss during the incident counts. The footnote "The rules measure live
equity again when the incident ends" suggests it does count later, so "protected" means only "not
closed while you cannot act". Say that in the title.

Components
- Banner: CHANGE title to the protection in plain words (draft: "Order placement is down. The rules
  will not pause or close your account until it is back"). Keep the 18 minutes and the TP/SL sentence.
  "I was affected" link points to a dead anchor.
- "Status page" button plus "Latest update" panel: same information twice. Keep the panel (it carries
  the content), REMOVE the banner button or vice versa.
- Ticket box "Hyperliquid is rejecting new orders" and disabled button: KEEP the box, the button
  repeats it (same pattern as 01).
- Positions table with "Resting on venue" pills: KEEP, the strongest reassurance on the screen.
- Account rules: CHANGE. "Held at 14:31" pill is blue info, fine. Daily loss $62.10: against held or
  live equity? With live $14 lower the figure is ambiguous. Show which. Open position meter is violet
  (kit default `.meter-fill`, also in F05): colour rule breach, use neutral.
- Leading figure: none. Candidate: "Held equity $5,184.60" next to live $5,170.60, which is the
  number the protection is about.

Inconsistent: manifest says "our side"; copy says Hyperliquid fails "on every frontend". These are two
different incidents with different responsibility. Timeline: the account is live on Dec 4 after being
closed at max loss on Dec 2 (03).

## 05 Appeal (modal over 02)

Question: I think this was wrong. How do I contest it?
First viewport: yes.

Components
- Title "Appeal the freeze" vs button "Explain the fill" vs manifest "Appeal": pick one word. The demo
  text is an admission ("It was my API wallet"), so "Explain" fits better; the screen is a statement
  to the desk, not a contest.
- Event card (read only): KEEP, short context inside a modal is right.
- "What happened" select plus "Your account of it" textarea: CHANGE label to "In your words"; keep
  the select, it routes the case.
- Screenshots: KEEP.
- "Email for the answer, optional": REMOVE or make 02 consistent. The app already answers in app.
- Owner box repeats the deadline for the third time in this state. REMOVE, or keep only here and drop
  it from the lead.
- Cancel and "Send appeal": KEEP.

Missing: appeal variants for pause, close and incident, which all link here in words but not in href.

## 06 Appeal sent (modal over 02)

Question: What happens with my appeal, and when will I hear back?
First viewport: yes. 21h 44m, Bitso risk desk, reference APL-1201-4417.

Components
- Reference and sent time: KEEP.
- "Answer in" + "Owner": KEEP the deadline, demote Owner to caption (same as 02).
- "What the reviewer checks": KEEP, good for trust.
- "Meanwhile the account stays frozen" box: REMOVE, it repeats "While frozen" visible right behind.
- "Back to the account": KEEP.

Inconsistent: page behind says 16:16 and 21h 46m; modal says 16:18 and 21h 44m. Under page should
carry 16:18. Owner "Answers in the app" vs 02 "by email and in the app".

## Flow

Sequence: four events, one appeal path. Gaps:
1. The four scenarios are dated as one story (Nov 29, Dec 1, Dec 2, Dec 4) and contradict each other:
   positions closed on Nov 29 reappear Dec 1 and Dec 4; the account is frozen on Dec 1 with XAU
   2.78 oz and ETH 0.45, then closes at max loss on Dec 2 with XAU 3.40 oz, SOL and BTC (new orders
   are impossible while frozen); it closes Dec 2 and trades again Dec 4.
2. Appeal exists only for the freeze. 01, 03 and 04 promise an appeal through dead anchors.
3. No resolution states: freeze lifted, freeze ends in closure, appeal answered (accepted or rejected),
   incident over (rules measure live again, did anything breach?).
4. Freeze triggered by the payout fill review (Decisions) is not shown; a caption variant on 02 is
   enough.

Redundant: 05 and 06 render the full 02 page underneath with no changes, fine for mockups.

## Fix list

MUST
1. All screens: make the timeline coherent. Either order it so closure is last (incident around
   Nov 25, pause Nov 29, freeze Dec 1 resolved, close later with positions that exist), or caption each
   screen as an independent example. Positions must not be reused on days they were closed.
2. 01, 03, 04: link "Appeal" to 05 with the event card for that event, or remove the link where
   Alberto says no appeal exists. No dead `#appeal-*` anchors.
3. 04: rewrite the title to state the protection plainly and say whether incident losses count once
   it ends. Show whether daily loss is measured on held or live equity.
4. 02, 05, 06: state whether reduce only closes are allowed while frozen. Today the trader holds open
   risk with "max loss still applies" and no stated way out.
5. 01: replace "Nothing is owed and nothing carries into tomorrow" with tomorrow's real numbers
   (fresh $250 from $4,934.20, floor $4,500). Current line is false for an equity based rule.
6. 03: lead with what was kept; add "Payout: none, closed before week 8" (as F09 says). Replace
   "Bitso covers the loss".
7. Colour: remove violet from the 02/05/06 timeline line and dots, the 03 now dot and the 04 open
   position meter (kit `.meter-fill` default, also in F05).

SHOULD
8. 01, 04: drop the disabled ticket button that repeats the ticket box; keep one blocked message.
9. 01: remove the "Paused" tag on Account rules and the daily loss meter (repeat banner); add day
   start equity $5,184.60.
10. All: replace "Scenario: ..." with the plain date, and drop the window day there (chip has it).
11. 02: cut timeline steps 1 and 2, keep the two outcomes; demote "Reviewed by" to a caption.
12. 05/02/06: one name for the action (Explain the fill), one answer channel (in app; email only if
    optional everywhere).
13. 04: one status source (panel or button, not both).
14. 06: remove "Meanwhile the account stays frozen" box; sync under page time to 16:18.
15. Add resolution states: freeze lifted, freeze closed, appeal answered.

COULD
16. 03: collapse the equity chart; rename "Floor price" to "Price at floor"; drop the daily limit
    comparison sentence.
17. 01: weekday demo so the "Weekend, reopens" stat does not distract.
18. 03: align own balance and score with F09 (or show them as of Dec 2 explicitly).
19. 01: one primary action "Switch to own account" if Alberto allows own trading during a pause.

## Undefined product rules (questions for Alberto)

1. Daily loss: does reaching it force close open positions and cancel brackets, or only block new
   orders? 01 force closes; BRIEF says "pauses trading".
2. Frozen: may the trader close or reduce positions? Do resting TP/SL still fire (02 says yes)?
3. Frozen and closed by the review: does unrealized or unpaid profit go to the trader, or is it
   forfeited? Same question for the trader's 80% if the review runs at payout time.
4. Review SLA: is 24h from the fill a commitment? Who is "Bitso risk desk" to the user?
5. Which events can be appealed: pause, max loss close, freeze, incident? What can an appeal change
   after a pause (refund of a day? nothing)?
6. Incident: does it cover only onchain.cc outages, or Hyperliquid outages too? What is "held":
   no pause and no close during the incident only, or are losses during it excluded afterwards? If
   equity is below the floor when it ends, does the account close?
7. "I was affected": what does the trader get (compensation, window extension, nothing)?
8. Max loss closes at market below the floor: is slippage below $4,500 Bitso's loss (as shown), never
   the trader's?
9. During a pause: can the trader trade the own account and does that matter for anything?
10. Does a freeze stop the window clock or the payout date (02 says "same payout date")?
