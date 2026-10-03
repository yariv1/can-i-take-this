# HARD RULE: no duplicate-content pages (set 2026-10-03, user red flag)

Google detects near-duplicate pages and ranks them down. Applies to every article and every heavy-content page.

## What is protected (do NOT change)
The ticket-style result card (Allowed / Not allowed, bullets, sources, "checked October 2026") that appears for every airline and country. Same layout every time is intentional UX. This rule is about articles and heavy content pages, not about that card.

## Rules
1. One dedicated page per query that has real search volume, even if another page overlaps. Title/H1 uses the query's own phrasing.
2. Sibling pages (e.g. Delta / Southwest / American baggage fees) are NEVER the same text with the airline name, logo and numbers swapped.
3. Structure and framing come from what is distinctive in that airline's/country's OWN published policy (from its own official domain): H2 order, opening, exceptions, perks, fee structure differ accordingly.
4. Each page has its own FAQs (from the Ahrefs Questions tab for that query), its own examples, data fields and images.
5. Shared text is limited to a short disclaimer.
6. UNIQUENESS GATE before shipping any set of sibling pages: run `node audit_duplicates.js` (shares 5-word phrases between pages of the same group, main content only, tables included). Target for new article-type sibling pages: under 30% shared per page (blog articles today are ~7%). Rewrite anything above.
7. No two pages target the same query (no cannibalization).

## Audit of existing pages (2026-10-03, share of 5-word phrases also found on another page of the same group)
- blog articles (29): 7% (healthy)
- airline liquids: 56%; baggage-allowance: 57% (worst 97%); power-bank: 72%
- airline alcohol 85%, perfume-aerosols 84%, vape 82%, airline main page 81% (all ~75-100 words of main text)
- country plants-seeds 79%, vaping 74%, tobacco 64%, alcohol 61%, cash 60%, main page 62%
- food/<country> 90% (~200 words), pets/<country> 94% (~134 words)
Biggest risk: thin programmatic pages (pets, food, airline alcohol/perfume/vape) are ~85-95% shared with very little text.
