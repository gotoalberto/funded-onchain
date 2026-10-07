# Review: f09-after-account (After the account)

Reviewer brief: senior product designer, opened cold. Judged against BRIEF.md with "Alberto's answers,
2026-10-06" as binding, then the Decisions sections and the canonical board. Screens read from
`.shots/review/f09-after-account--*.png` (1440, full page) and `src/pages/f09-after-account/*.html`.

Story of the flow: kestrel's $25K Season 1 account closes at the floor on Dec 2. Home on Dec 2 (needs
9 more trading days), Dec 10 (needs 3), Dec 18 (request window open, seat #19 if requesting now).

Checked arithmetic that holds: countdowns (15d 08h, 7d 22h, 14h 20m), trading days left (15, 7),
net PnL = balance minus $1,284.20 start on all three screens, loss rule percentages (17.5 and 17.0
points), closing ledger ($4,500 floor, $11.40 slippage, $4,488.60 returned), seat arithmetic on 03
(18 requesters above, 10 pending, #19 to #22 after 3, #29 after 10), window Dec 19 to Jan 18.

---

## 01 Home after losing the account (Dec 2, 15:40 UTC)

Question: "My account is gone. How do I get another one?"
First viewport: yes. Headline "9 more trading days to request a new seat on Dec 18" is the answer,
the closing notice sits beside it. Everything fits above 900px.

Components
- Headline + date caption: KEEP. Names the blocker, as the honesty rule requires.
- Reassurance paragraph ("Your own account has been competing ... costs you nothing else"): KEEP,
  this is the one place in the flow where it belongs.
- Big "6 of 15 trading days" + segment bar: CHANGE. The headline says 9, the big figure says 6;
  two numbers fight for the lead. Either lead with "9 to go" or drop the number from the headline
  ("Trading days stand between you and a seat on Dec 18"). The "today" segment has a violet ring
  (kit `.segs i.today`); acceptable only as own marker, otherwise neutral.
- Floors column (Net PnL, 10% loss rule, $100 balance): CHANGE. "17.5% above floor" is percentage
  points of the start, not percent above the floor (that would be 19.5%). Pro traders will misread
  it. Show dollars: "$224.82 above the $1,155.78 floor". Also missing the rule's trap: at
  $1,412.62 (+10%) the floor moves up to the $1,284.20 start. kestrel is $32 away from triggering
  it; one caption line earns its place.
- Footer "#44 on the board, seat #41, score 702.4. If you reach 15 trading days: $5K account ...":
  CHANGE. This is the only leaderboard information on the screen, as a sentence. See MISSING.
- Trade (primary): KEEP.
- Aside notice "Your $25K account closed" + ledger (Returned to Bitso, Claimed Nov 27, You owe
  Nothing) + dismiss: KEEP. "You owe: Nothing" is exactly the trust line a prop trader looks for.
  The caption "This notice goes once you dismiss it. Past funded accounts are not kept" is honest
  but reads as system copy; shorten to "Not kept after you dismiss it."
- Link "What happened at 15:20": KEEP (cross flow, inactive in build, fine).
- Aside "Season 2 close" timeline: CHANGE or REMOVE. Dec 18 already in headline, countdown in the
  header chip. Only "Season 2 runs Nov 19 to Dec 18" adds information; move it into the date
  caption and drop the timeline. The "now" dot is violet (kit `.timeline .now`), against the
  colour rule.
- Mockup note: CHANGE (see 02/03, dates).

MISSING
- Position against the seat cut. The user's priority is seeing who is in and who is out. A seat #41
  trader is inside the $5K zone (#22 to #60) with a margin to the last seat; neither the margin nor
  the next band appear. Needed: a compact zone strip, one row: "$25K ends seat #21 (765.x) ... you
  seat #41 (702.4) ... last seat #60 (xxx.x)", points to each, and a "Leaderboard" text link to
  the board scrolled to the cut. Reuse the F03 ladder pattern, no grid.
- Claim money: the $148.32 claimed Nov 27 went to kestrel's own Hyperliquid account (Alberto's
  answers). Then the own balance should include it, but $1,380.60 = $1,284.20 + $96.40 PnL leaves
  no room for it. Either the balance is wrong or claims are neutralized like deposits; undefined.

Superfluous / repeated: Dec 18 three times (headline, timeline, timeline row); account close time
twice (caption 15:40 "20 minutes after", notice 15:20). Keep one.

---

## 02 Competing again (Dec 10, 02:00 UTC)

Question: "I'm back on the board. Does my last account count against me?"
First viewport: answers it in the headline, but that makes the wrong thing the headline. On Dec 10
the trader still misses a floor (12 of 15 days); Decisions require the headline to name the
blocker. The reassurance is a one-time fact already given on 01.

Components
- h1 "Your last account does not count against your score or floors": CHANGE. Make the blocker the
  h1: "3 more trading days to request on Dec 18". Keep the reassurance as the single caption line.
- Date caption "... Score and floors use your own account only": KEEP the date, drop the sentence
  if the reassurance stays in the h1, or vice versa. Today it is stated 3 times on this screen
  (h1, caption, aside ledger rows 1 and 2) and once more on 03.
- Rank row: "#33 on the board, seat #31", pill "11 this week", score + "How it's built": KEEP. The
  two-rank format is correct. "11 this week" spans Dec 2 to Dec 10 (8 days); say "11 since Dec 2".
- Blocker box with h2 "3 more trading days to request on Dec 18": CHANGE, its title moves to h1.
- Trading days meter: KEEP; the icon is amber `circle-dashed warn`. An unmet floor with 7 days left
  is progress, not a warning; on 01 the same floor has no icon. Use neutral.
- 10% loss rule meter (scale -10%, Start, +10%, You; hatched old floor; "Floor at your start since
  Dec 6"): KEEP, the best rule visual in the flow. Add the floor in dollars ($1,284.20 = start)
  and the distance in dollars ($218.40). Fill is green; per rule, neutral fill plus green check.
- Net PnL positive row: KEEP.
- Missing $100 balance row, present on 01 and 03: CHANGE for consistency (one line).
- Footer "Seat #30 basalt_k is 1.4 points ahead. The last $25K seat, #21, is 18.6 points above
  you. If you reach 15 trading days: $5K account ...": CHANGE into the zone strip (see 01 MISSING).
  It gives distance up but never distance down to the last seat (#60), which is the "am I in"
  number. basalt_k is a new alias, fine per Decisions.
- Trade (primary): KEEP.
- Aside "What counts for Season 2" ledger: REMOVE rows "Funded account trading", "A funded account
  that closed" (repeats), "Funded accounts held 0 of 1" (superfluous on a member home), "Next
  request" (repeats blocker). KEEP only the caption on what counts as a trade ($50 notional, 60s,
  placed here or on onchain.cc, allowed markets); it is a real rule pros need. Add "allowed markets
  only", which is missing.
- Mockup note says "Dec 3" for screen 01, which is dated Dec 2: CHANGE.

Visual hierarchy: three heading level lines (h1, #33, h2) in the first 200px. Fixing the h1 removes
one.

---

## 03 Request a seat again (Dec 18, 09:40 UTC)

Question: "Season 2 closed. Can I request a seat now?"
First viewport: yes. h1 "Season 2 closed. You can request a seat", lead figure "Seat #19 if you
request now", primary "Request seat". This is the strongest screen of the flow.

Components
- h1 + date caption: KEEP.
- "Seat #19 if you request now" + "#29 on the final board of 3,118, score 768.0. 604 requests so
  far; seats count only requesters": KEEP. Two ranks shown together, as decided.
- Band card "$25K Account at seat #19, Seats #7 to #21, Max position $25,000, USDC from Bitso
  $5,000": KEEP. Both figures quoted. "Seats #7 to #21" assumes Season 1 bands (see questions).
- Cutline box "Traders above you who meet the floors and have not requested yet: 10" + scenarios:
  KEEP the number, CHANGE the form. This is the in/out question at its most intense moment and it
  is a paragraph. A zone strip with three markers reads in one second: now seat #19 ($25K, 2 seats
  of margin), after 3 more requests seat #22 ($5K), worst case seat #29 (31 seats inside the last
  seat #60). Add a text link to the leaderboard filtered to requesters around the cut.
- Footer copy on window choice and withdrawal: KEEP; it is the only place the change/withdraw rule
  appears. "until Dec 19, 00:00 UTC" duplicates the header chip and the timeline.
- Request seat (primary, large): KEEP.
- Floors line panel: CHANGE. "3 of 3 floors met" then four items (balance is the fourth
  requirement); on 01 the same items are 3 rows plus a meter. Say "All requirements met" or count
  4. "Trading days 16 of 15" reads like an error: "16, 15 needed". It wraps to a second line at
  1440 with a lone "Balance at the close"; make it one row or a 4 item grid.
- Aside "Request window" timeline: REMOVE or cut to one row. Close time appears in header chip,
  footer and timeline. The useful unique facts are "Seats assigned Dec 19 00:00, accounts live at
  once" and "A 1 month window runs Dec 19 to Jan 18"; move them under the button as one caption.
  "Season 3 starts and your own account keeps competing" is useful, keep in that caption.
  The "now" dot is violet, against the colour rule.
- "A funded account that closed earlier has no effect on this request": KEEP here (it is the
  manifest's concern for this flow), and remove it from 02.
- Mockup note "Dec 3": CHANGE to Dec 2.

Missing
- The trader does not see the Season 2 seat count anywhere ("still inside the 60 seats" assumes S1).
- After requesting: no "Requested, seat #19, 1 month, change or withdraw" state. It lives in F04;
  add a link-only mention in the mockup note so this flow does not dead end cold. COULD.

---

## Flow

Sequence: close notice, compete, request. Complete for the main path (closed at the floor,
recovers, requests). The three screens are one home on three dates, which is the right model.

States missing (judge before adding):
- Account closed during the 24h request window, trader meets floors and requests in the same
  window (defined by Alberto, not shown). SHOULD, one variant of 03 with a notice.
- Account closed at window end below $5,000 (not at the floor): same home, different notice
  ledger (auto-claimed profit at window end). COULD, notice variant only.
- Account closed after a confirmed fill breach: unpaid profit goes to Bitso, can request again
  unless abuse is proven. The notice ledger differs and the "proven abuse" case has no screen.
  SHOULD once the rule is defined.
- Holding a live account at the Season 2 close: "one account at a time" is the flow's summary
  but the blocked request state is not shown here. SHOULD (or confirm it lives in F04).
- Floor lost on the own account (fell below start after +10%): "Can't request this season, Season
  3 closes Jan 17". COULD; it is the honest outcome the 02 meter is warning about.

Redundant: "the last account does not count" appears on 01, 02 (3 times), 03. Timelines on 01 and
03 repeat the header chip.

Leaderboard (user priority): no screen in this flow shows the trader against the seat zones or the
last seat. All in/out information is in sentences at the bottom of the panel. For a trader coming
back from a lost account the whole question is "am I inside the 60 again, and in which band".

---

## Fix list

MUST
1. 02: h1 becomes the blocker "3 more trading days to request on Dec 18" (Decisions: unmet floor,
   headline names the blocker). Reassurance once as caption; remove aside rows 1, 2, 4 and row 3.
2. 01, 02, 03: claimed profit lands in the own Hyperliquid account (Alberto's answers). Balances
   ($1,380.60, $1,502.60, $1,625.40) equal start plus PnL and ignore the $148.32 claim. Fix the
   figures or add the rule once Alberto defines how claims count (question 1).
3. 01, 02: add the seat zone strip (next band up, you, last seat #60) with points to each and a
   Leaderboard link to the cut. Replaces the footer sentence; it is the user's stated priority.
4. 03: turn the cutline paragraph into the same zone strip with three markers (now #19, after 3
   requests #22, worst case #29) against the $25K/$5K boundary and the last seat.
5. 02, 03 mockup notes: screen 01 is Dec 2, not Dec 3.

SHOULD
6. 01, 02: loss rule in dollars (floor and distance), not "17.5% above floor" points.
7. 01: caption that at $1,412.62 (+10%) the floor moves up to $1,284.20.
8. 01, 03: remove the timelines; fold the unique facts into captions. Kills violet "now" dots and
   the triple close time.
9. All: one requirement set, same items and order everywhere: Net PnL, 10% loss rule, trading
   days, $100 balance at the close. 03 says "3 of 3" with 4 items; 02 lacks balance.
10. 02: trading days icon neutral, not amber; loss rule meter fill neutral with green check.
11. 03: floors line on one row; "16, 15 needed".
12. 03 variant: account closed during the request window, requests the same day.
13. Season 2 seat count and band ranges stated once per screen where seats are quoted (needs
    question 2).

COULD
14. 01: lead with "9 to go" or drop 9 from the h1 so one number leads.
15. 02: "11 since Dec 2" instead of "11 this week".
16. 01: shorter dismiss caption.
17. Notice variants for window-end close and confirmed breach close.
18. 03 mockup note links to the F04 "requested" state.

## Undefined rules (questions for Alberto)

1. Profit claimed from the funded account lands in the own Hyperliquid account, the one competing
   in the season. Does it count as a deposit (neutralized for net PnL, return and the 10% rule) or
   as PnL?
2. Season 2 seats and bands: same as Season 1 (60 seats, $25K at #7 to #21) or a new published
   table? The flow assumes Season 1.
3. Season starting capital for the 10% rule: balance at Nov 19 00:00 UTC, or at the first counted
   trade for someone who joins later or deposits mid season?
4. "Unless abuse is proven": what does the trader see, and does it bar requests for one season or
   for good?
5. Funded profit auto-claimed at window end on a closing account: is it shown anywhere after the
   notice is dismissed, given no history is kept?
6. Does trading the same market on the own and funded account at once (hedging across them) have
   any rule?
