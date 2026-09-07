# canitakethis.co — Deploy Flow

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

