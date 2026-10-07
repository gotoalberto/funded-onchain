# Final copy and UI pass

One last pass on every screen. Think as the trader looking at this screen for the first time: what do they need to know, and what do they do next? Everything else is noise. Edit the live files in src/pages/ in place. Do not regenerate pages from scratch scripts, do not touch nav-track blocks or DATAURI tokens.

## For every screen, in this order

1. **Job.** Name the screen's one job in your head (for example "show I'm funded and let me start trading"). If an element doesn't serve that job or the next action, cut it or demote it.
2. **Headline.** One headline that says the state in the trader's words. Max 8 words. A short subline only if it adds a fact the headline doesn't.
3. **Primary action.** Exactly one primary button, visible without scrolling, saying what happens ("Request seat", "Request payout", "Trade now"). Secondary actions are secondary buttons or links. No two primary buttons on one screen.
4. **Cut repetition.** The same fact must not appear twice on a screen (for example the 80/20 split, "seats go by score", "your own account isn't affected", the request deadline). Keep it where it matters most.
5. **Cut explanation.** Rules belong on How it works. A screen states the fact, not the rule behind it. Helper text under a tile or row is max 6 words, or gone.
6. **Numbers.** Show the number the trader acts on, rounded in tiles and headlines ($738, not $738.40; $5,923, not $5,923.00). Tables, receipts and money movements keep cents. Don't stack three numbers where one does.
7. **Labels.** Short nouns, sentence case: "Seat balance", "Your payout", "Loss room", "Days below start", "Score", "Rank", "Score to beat", "Seat today". Same label for the same thing on every screen.
8. **Visual hierarchy.** The most important number or state is the biggest thing on the page. Check spacing and alignment in the screenshot: tiles in a row share height and structure, no orphaned single words on a line, no cramped or clipped text, no empty boxes. Fix layout in the page's own style block.

## Words

- Punchy and concise. Short sentences. Active voice. No filler ("please", "simply", "note that", "in order to").
- No em dashes. No brackets in sentences. No arithmetic in sentences.
- "Qualification" in chips and labels, "qualification window" inside sentences, never numbered. "Request window" for the 24 hours.
- Payout, never claim. Seat, never account, for the funded side. "My account" or "your own account" for the trader's money.
- Never: Bitso, Hyperliquid, explorer, epoch, season, liquidation, line, lock point, percentile, time weighted, pilot.
- Calm, never scary. Say what happened and what's next.

## Keep consistent

Use these exact phrasings where they apply:
- "Trade your way. Get funded." (landing)
- "You're on the leaderboard"
- "You qualified. Request your seat in the next 21h 14m."
- "Seats ran out before your rank."
- "You're funded."
- "$738 payout ready"
- "$150 left before today's pause."
- "Paused until 00:00 UTC."
- "Your seat closed. Your $738 payout is yours to keep."

## Done means

- `npm test` shows no lint hits on your screens.
- You checked every one of your screens after your last edit and each one passes the eight checks above.
- Report back in under 150 words: the biggest changes per screen and anything you think Kevin should decide.
