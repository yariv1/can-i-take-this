# canitakethis.co — deploy guide

This folder is your whole public website: ~1,600 SEO pages + the interactive app, generated from your real data.

## Deploy to GitHub Pages (free)
1. Create a GitHub repo, upload the CONTENTS of this folder to the repo root.
2. Repo -> Settings -> Pages -> deploy from branch main, folder /root.
3. Settings -> Pages -> Custom domain: canitakethis.co, Save. Enforce HTTPS once ready.

## Namecheap DNS (Advanced DNS)
- 4x A record, host @: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- 1x CNAME, host www: <your-github-username>.github.io.

## After live
- Google Search Console: add site, submit sitemap.xml
- Bing Webmaster Tools: same

## Page types
- /airline/<name>/baggage-allowance/ (79) + /airline/<name>/ hubs
- /country/<name>/<alcohol|cash|tobacco|plants-seeds|vaping>/ + /country/<name>/ hubs
- /medication/<drug>/<country>/ (is X legal in Y) + /medication/into/<country>/ hubs
- /pets/<country>/ (dog & cat import)
- /food/<country>/ (meat, dairy, fruit, etc.)
- /plane/<liquids|power-bank|vape-e-cigarette|alcohol|lighter|sharp-objects>/
- /app/ interactive checker, sitemap.xml, robots.txt

Rebuild after any data update: it regenerates every page from canitakethis.html so nothing drifts.
