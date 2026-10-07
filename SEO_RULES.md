# SEO rules (site-wide, enforced by code)

**One rule: every SEO fix is made in a template or in `seo_post.js`, never page by page, so it reaches every page and every page type added later.** `build.js` runs `seo_post.js` on every generated `index.html` and takes sitemap `lastmod` from it. `node audit_seo.js` audits all built pages by type; run it before every deploy (`node audit_seo.js --fail` exits 1 on a hard failure: no/duplicate-brand H1, missing title, description or canonical, noindex).

**What is enforced on every page (2026-10-07):**
- Exactly one H1 that says what the page is about (never the brand). Airline and country pages: the H1 is the page title; the brand is a `span.bn`.
- Title: keyword and number first; the ` | canitakethis.co` suffix only when the title is 60 characters or shorter.
- Meta description: starts with the subject (airline, country, drug) and gives the real answer; 115+ characters; no two pages share a description (`batchDesc` in build.js).
- Social: `og:image`, `twitter:card`, `og:site_name`, `og:locale`. Pages without their own image get the default `assets/og-default.png` (1200x630) ONLY once the owner has added a designed one; until then no default og:image is emitted (a pixel-font placeholder was rejected on 2026-10-07).
- Structured data: BreadcrumbList, FAQPage where the page has FAQs, `WebPage` (home: `WebSite`) with `dateModified`; blog `Article` gets `datePublished` (from ARTICLES_LIST.md) and `dateModified`.
- Honest dates: `dateModified` and sitemap `lastmod` are the date the content last changed (`SITE_REVIEWED` in `seo_post.js`, the article's list date, the baggage "Checked" date), today only for pages that refresh every 6 hours (`LIVE_SLUGS`). Bump `SITE_REVIEWED` when you re-review the rule data in bulk; never set it to the build date automatically.
- Internal linking: every page type gets a "Related" block (`related()` in `seo_post.js`): airline pages link to the same topic on neighbouring airlines, to the airline's other topics and to the matching guides; country, food, pets and medication pages link across categories and to neighbouring countries; blog articles link to the rest of their section.
- Sitemap: every indexable page including about, contact, privacy, terms, each with `lastmod`; `robots.txt` points to it.
- Canonical on every page; the `/app/` copy of the home app canonicals to `/`.

**When you add a page type:** add its URL pattern to `type()` in `audit_seo.js` and its related links to `related()` in `seo_post.js`; run the audit; it must show 0 in the hard columns.

**Known and accepted:** many hand-written blog titles are over 70 characters and 28 blog descriptions are over 165 (Google truncates, nothing breaks); shorten them when an article is next edited.
