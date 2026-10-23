# HARD RULE #1 (user, 2026-10-18): NEVER HAND OFF BEFORE QA AND DEBUG PROVE 100% (NOT 99.99%) THAT IT IS AS IT SHOULD BE WITH NO REGRESSIONS. Read this at the start of EVERY session and confirm it in the first reply. Checklist: memory file feedback_qa_100_percent_before_handoff.md. Compare before/after, test every neighbour (all categories, tabs, modes, desktop AND 375px), run ALL guards, verify the exact view of his screenshot, never change what he did not ask for.

# canitakethis.co — Deploy Flow

**CURRENT DEPLOY SEQUENCE (2026-10, supersedes the zip flow below):** only after the user says "deploy":
1. `git pull --rebase --autostash origin main` (the scheduled job commits `advisories.json` to main every 6 hours; pull first so the push is not rejected; if `advisories.json` conflicts, take the remote copy and re-run step 2).
2. `node update_rates.js` then `node update_advisories.js` (do not call it repeatedly: the State Dept data API rate-limits; the script falls back to the State Dept RSS feed).
3. `node build.js`, then `node audit_article_qa.js <slug>` must PASS, and `node audit_seo.js --fail` must pass for the whole site (SEO_RULES.md).
3a. **`node audit_bag_selector.js` must pass (HARD, 2026-10-12):** the Carry-on / Checked selector is one component with fixed texts on every page (DESIGN_SYSTEM.md 8.18). and node audit_capsules.js (coloured capsules 8px)
3b. **`node audit_seo_change_scope.js` must pass (HARD, 2026-10-12).** It blocks the commit when more than 40 existing pages change a title, description, H1, canonical, robots, schema or related-links block versus what is live. Never override without the user's explicit written approval (SEO_RULES.md CHANGE CONTROL, SEO_INCIDENT_2026-10-07.md).
4. `git add -u` plus explicit `git add` of new files (never `git add -A`, never `.claude/`), commit, `git push origin main`.
5. Verify the live URL returns 200 (1-2 min), update `GSC_INDEXING_TRACKER.md` (new URLs as TO REQUEST) and list them in the reply.
6. Scheduled job: `.github/workflows/refresh-advisories.yml` (every 6 hours, runs `update_advisories.js`, commits only `advisories.json`). Trigger by hand with `gh workflow run refresh-advisories.yml` and read the run with `gh run list --workflow refresh-advisories.yml`.

Follow this at the end of every session, no exceptions.

---

## Steps

1. Package all changed/new files into a zip named `citt-vN.zip` (N increments each deploy — track manually, start at 1).
2. Present the zip for download via `present_files`.
3. Write the Claude Code prompt (see template below) alongside the zip — copy-paste ready, no editing needed.

---

## What goes in the zip

Only changed or new files — never the full repo. Typical contents:

| File | When to include |
|------|----------------|
| `build.js` | Always — it's the build engine |
| `BLOG_SYSTEM.md` | When blog structure or image registry changed |
| `ARTICLE_TEMPLATE.md` | When template was updated |
| `DEPLOY_FLOW.md` | When this file was updated |
| `articles/[slug].md` | When a new source article was added |
| `assets/blog/[image].webp` | When new images were added *(if small enough — otherwise note manually)* |

---

## Repo details

- **Local repo root:** `C:\Users\yariv\Utility Website\can-i-take-this`
- **Remote:** `github.com/yariv1/can-i-take-this`
- **Branch:** `main`
- **Build command:** `node build.js`
- **No asset versioning file** (unlike calcthis — no `.assetver`)

---

## Claude Code Prompt Template

```
Unzip ~/Downloads/citt-vN.zip into the repo root at "C:\Users\yariv\Utility Website\can-i-take-this" (overwrite existing files), then:

1. Run `node build.js` to regenerate all static pages
2. Update sitemap.xml if new URLs were added — new blog articles or guide pages get a <url> block:
   <url><loc>https://canitakethis.co/blog/[slug]/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
3. Run `git add -A`
4. Commit with message: "[descriptive message]"
5. Push to main

New URLs this deploy: [list them here or write "none"]
```

---

## Sitemap rules

- Blog hub `/blog/` — already in sitemap (add once, never again)
- Each new article `/blog/[slug]/` — add on first deploy of that article
- `priority` for blog pages: `0.7`
- `changefreq` for blog pages: `monthly`
- Never remove existing URLs from sitemap

---

## Notes

- Always write the Claude Code prompt in the same message as the zip — ready to copy, no blanks left unfilled.
- Zip name increments every deploy: `citt-v1.zip`, `citt-v2.zip`, etc.
- Commit message should clearly describe what changed this session (e.g. "Add /blog/ + power bank article").
- If images are too large for the zip, note them separately and instruct CC to copy them manually from Downloads.
- Deploy zip is re-delivered after any fix in the same session — always use the latest zip.



## IndexNow (added 2026-10-08)
After `git push` and once the pages are live, run `node indexnow.js` (submits only the index.html URLs changed by the last commit to Bing/Yandex via IndexNow; key file `d57956b5441116130de0656c374107ac.txt` is at the site root). `--all` submits the whole sitemap, `--dry` lists what would be sent. The build no longer submits (it used a placeholder key and ran before pages were live). Google ignores IndexNow: use the sitemap and Search Console.

## Pages build check (added 2026-10-13)
GitHub Pages runs Jekyll on every .md in the repo: ONE invalid UTF-8 byte in any .md (a latin1-mangled euro sign in BLOG_ROADMAP.md) failed the build and nothing deployed until fixed. After every push run `gh run list --limit 1` and confirm "completed success"; when writing .md files with node, never use latin1 (use utf8). Quick check: python reading each *.md with .decode("utf-8").

## Source label gate (added 2026-10-14, DESIGN_SYSTEM.md 8.21)
Before every deploy: `node audit_source_label.js` must print "OK source labels" (every Wi-Fi page source block is labelled Official or Unofficial, unofficial blocks have the explanation line).
Before every deploy: `node audit_global_ui.js` must print "OK global ui" (global_ui.css injected into every page, DS 8.22).

## Card token gate (added 2026-10-14)
`node audit_card_tokens.js` must print "OK card tokens": every template that renders the ticket card (.pass/.perf) defines the --card colour tokens (the airline Baggage template lacked them, so its ticket looked different from all other pages).

**Note 2026-10-15:** `node audit_seo_change_scope.js` now takes more than 110 s: run it with `timeout 280`. Cross-page UI rules live in `global_ui.css` (DS 8.22), never per template.


## Additions from session 32 (2026-10-16)
- New guards that must print OK before every deploy: `node audit_source_state.js` (source-state label vs links on medication/food/pets/country cards, medication OFFICIAL only on verified/confirm-sentence cards, no "not checked" wording, no country-specific claim on unverified medication cards) and `node audit_internal_links.js` (every internal href on medication/country/food/pets pages resolves to a built page). Also `audit_source_links.js`, `audit_source_label.js`, `audit_font_floor.js`, `audit_verdict_label.js`, `audit_country_tabs.js`, `audit_card_tokens.js`, `audit_capsules.js`, `audit_bag_selector.js`, `audit_currency.js`, `audit_global_ui.js`, `audit_seo.js --fail`, `timeout 280 node audit_seo_change_scope.js`.
- New files must be added SEPARATELY: after `git add -u`, `git add <each new medication/<drug>/ dir and new scripts>`; never `git add .claude/`.
- The 6-hourly bot pushes advisories.json / level4.json / mexico.json: if `git push` is rejected, `git pull --rebase origin main`; on conflicts in those three json files take upstream (`git checkout --ours <file>` during the rebase, then `git add`, `GIT_EDITOR=true git rebase --continue`), rerun `node build.js` (should show no diff), push again, then poll `gh run list --limit 1 --json headSha,status,conclusion` until the NEW sha is completed/success (until-loop), then `node indexnow.js`, then fetch one live page.
- Medication work: see MEDICATION_WORKFLOW.md and MEDICATION_COUNTRIES.md (status per country).

**Session 34 addition (2026-10-17):** run `node audit_medication_dup, audit_airline_typeahead, audit_med_tags, audit_tags.js` before every deploy (airline Medication pages must stay below 40% pairwise similarity and 25% shared lines; user order: no generic repeated text, Google duplicate-content risk). New airline Medication cards must carry airline-specific facts; "page does not say" cards are merged into one airline-specific "Not published" card by `polish()` in `airline_medication.js`.

**Session 34 addendum (2026-10-17):** `audit_seo_change_scope.js` compares with local HEAD (its output says "vs HEAD"), not with the live site: run it BEFORE committing content changes or check `git diff origin/main --stat`. Push with `git push origin HEAD:main` after `git merge-base --is-ancestor origin/main HEAD`; select the Pages run by the head SHA (the first "completed" run can be the previous deploy). Add new URLs/rewritten URLs to `GSC_INDEXING_TRACKER.md`. Food/pets rewrite helpers: `food_add_country.js` (+ `food_extra.json`), `pet_add_country.js`; docs `FOOD_COUNTRIES.md`, `PETS_COUNTRIES.md`.


## Addendum, session 35 (2026-10-18)
Before EVERY deploy (and every handoff) run the whole list: update_rates, update_advisories, build, audit_seo_change_scope (before committing), audit_bag_selector, audit_capsules, audit_medication_dup, audit_airline_typeahead, audit_med_tags, audit_tags, audit_source_label, audit_airline_state, audit_source_state, audit_country_cat_sources, audit_tabs_arrow, audit_typeahead_popular, audit_seo --fail. Run guards with timeout 100. Preview server: mcp preview_start citt-preview (port 5055). Compare local vs live with a scripted pass (every category/mode) before deploying UI changes. Never git add .claude/.

**HARD RULE (user, 2026-10-23): after EVERY indexing-request session, update ALL indexing lists in the same turn:** `GSC_INDEXING_TRACKER.md` table rows (`REQUESTED <date>`), URLs with no row added, a dated block at the TOP of `GSC_REQUEST_QUEUE.md` (requested / next quota / already on Google), commit and push, and say which files were updated.
