# Account base: every Account screen is the Account dashboard

Kevin's decisions:
1. Keep every screen, but every Account screen is built on the Account dashboard base. A state (waitlist, request window open, missed the floors, short of a seat, seat requested, request window missed, already funded, funded, payout ready, after the seat closed) is shown INSIDE the dashboard, as a banner or a state panel at the top, with the rest of the dashboard below it. No standalone, floating layouts.
2. One-off moments (You're on the leaderboard, You're funded, Seat closed, Payout sent) are a banner on Account or a modal over Account. A dedicated full page only if truly needed.
3. Money lives inside Account: every Account dashboard has a "My account" card (spec below). Add funds and Withdraw are modals over Account.
4. Stats and Score breakdown stay as Account sub-pages (build.mjs marks Account current on them). Give each a small breadcrumb at the top: "Account / Stats", "Account / Score breakdown", linking back to the matching Account screen of that flow.

## The four bases

Copy the layout, panels and styles of the base for the trader's phase, then put the state on top. Same panel order every time so screens feel like one page.

- **Pre-board base**: src/pages/f02-not-qualified/01-home-new.html (My account tiles, two steps, qualify preview, what a seat gets you, top of the board, invite friends).
- **Competing base**: src/pages/f03-competing/01-home-competing.html (headline, score / rank / score to beat / seat today tiles, qualifying checklist, what moves your score, seats today, My stats, around you). Add the My account card.
- **Funded base**: src/pages/f05-funded-trading/01-home-funded.html (seat tiles, seat equity, today, paid to you, seat stats, open positions, referrals, my account). Replace its small My account card with the spec below.
- **After the seat closed base**: src/pages/f08-after-account/01-home-after-loss.html (competing base for the next qualification window plus the seat record). Add the My account card.

State placement: the state banner or panel replaces the page headline at the top (for example the request window: a "You qualified. Request your seat in the next 21h 14m." panel with the seat card and the inline Request seat button, then the dashboard below). Keep exactly one primary button per screen: the state's action wins, the base's own primary becomes secondary on that screen.

## My account card (same markup on every Account base)

A compact panel titled "My account", placed in the right column below the top panels (on the funded base, where the old My account card was):
- Big number: balance, for example "$1,284". Under it a muted line: "Available $1,148 · In positions $136" (omit "In positions" when flat).
- Two secondary buttons: "Add funds" (links to that flow's Add funds modal screen if it has one, else #/f09-money/02-deposit) and "Withdraw" (#/f09-money/05-withdraw).
- "Recent activity": the last 3 movements, one line each: date, what (Deposit, Withdrawal, Payout from your seat, Trading PnL), amount right-aligned in green or red. Rounded amounts.
- Link "All activity" to #/f09-money/01-balance.
- Must agree with the header account chip balance for that screen. Make the 3 rows plausible and consistent with any money figures elsewhere on the same screen.

Use the page's existing panel classes where they exist; otherwise inline styles with the design tokens (var(--surface), var(--border), var(--text), var(--text-3), var(--buy-light), var(--sell)). No new colours.

## Rules

FINAL_PASS.md and BRIEF.md still apply (naming, banned words, one primary, no repeated facts, rounded tile numbers, helper text 6 words max). Edit live files in src/pages/ in place; do not regenerate from old scratch scripts. Keep titles and mockbar labels unless a screen's name must change, and write any name change to src/stages.json. Run `npm test`, check every one of your screens after your last edit, and report back in under 150 words.
