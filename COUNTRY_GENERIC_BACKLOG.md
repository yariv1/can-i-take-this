# Country pages still on "BASED ON GLOBAL RULES" (session 38 end, 2026-10-21, origin/main 906fb40b2 LIVE)

User order (HARD): "stop bullshitting the users", no worthless generic answers. Source ladder (DS 8.37) per cell: (1) official page read; (2) if it fails for ANY reason, a reliable NAMED third party read in full (UNOFFICIAL footer + link); (3) global only if both fail. Never report "no source found" without listing which third-party sources were tried.

## Session 40 (2026-10-22): 11 of 14 cells done (not deployed yet)
Done with NEW source types: HK vaping (DH notice, official, new `noWho` branch in country_vape.js for countries without a WHO profile), Bahrain plants (national portal service page), Oman plants (CAA AIP GEN 1.4 via Wayback), Kuwait plants (GCC Secretariat Plant Quarantine Law, art. 20/22/24/29, UNOFFICIAL), Ethiopia (Reg 4/1992 on FAOLEX, UNOFFICIAL), Vietnam (Law 41/2013 English, art. 29/7/34, UNOFFICIAL), Cambodia (MAFF Prakas 346/2010 on FAOLEX, UNOFFICIAL), Ukraine (Law on Plant Quarantine copy, art. 7, UNOFFICIAL), Dominican Republic (Agriculture Ministry statements in Diario Libre + El Dia, UNOFFICIAL; DGA manual link is cited by other DR pages).
## Still generic (3 cells + Jordan plants + Panama alc/tob = 5 cells)
Jordan plants; Panama alcohol + tobacco; Lebanon alcohol + tobacco + cash (3 cells counted separately).
TRIED this session: Jordan: FAOLEX reg Z/2/2003 (PDF unreadable Arabic font, abstract only), CARC AIP GEN 1.3/1.4 (2006, says only food samples inspected), customs trade portal (commercial live animals only), MoA search, secondary guides (World Baggage Network, Roafly). Panama: ANA declaracion-jurada page (www.ana.gob.pa/w_ana/index.php/declaracion-jurada-de-viajero) redirects to home, Wayback blocked, Gaceta Oficial PDFs blocked; figures (5 L liquor, 500 g tobacco, US$500) seen ONLY in a search summary = NOT usable. Lebanon: customs.gov.lb unreachable (SSL), only copies of one travel-site text (hinterlandtravel) and entrybrief with CONFLICTING figures (800 vs 200 cigarettes), FIDI 2018 removals guide, UAE embassy Beirut page 404, Beirut airport site silent.
Ideas left: Panama ANA page via Chrome (Claude in Chrome, user's browser), Lebanon customs via Chrome/Wayback when rate limit passes, Jordan Customs travellers guide in Arabic via Chrome, FIDI Lebanon PDF read in full.

## Tools (all in repo root)
- `cust_add_country.js spec.json` (alcohol/tobacco/cash). Spec: `{"country","src":[{"label","url","unofficial":true}],"srcByCat":{cat:[...]},"cats":{"alcohol":[head,[lines],"warn|stop|go"],...}}`.
- `plants_add_country.js spec.json` (plants). Spec has `"unofficial":true` for third-party (amber heading + reason line, footer UNOFFICIAL). `src` = `[[url,label]]`, `date`, `lead`, `rows`, `notes`, `faq` (>=2), `card`.
- A cat page must not cite a link that another category page of the same country cites (audit_country_cat_sources.js): use a different URL.
- After adding: `node build.js`, all guards, `node audit_seo_change_scope.js`, `node audit_seo.js --fail`.
- Wayback rescues blocked pages: `curl -sL https://web.archive.org/web/2026id_/<url>` (sometimes gzip: `gunzip -c`); JS-only sites need the Browser pane (`navigate` on tab `seed`, `javascript_tool` with `document.body.textContent`).
- Own words, only facts of the page read that day, say what was NOT read.

## What is done (all live)
Real answers (official or unofficial-labelled) now exist for all other country x category cells, incl. session 38: Russia, Indonesia, Malaysia, Kuwait, Colombia, Cuba, Argentina, Ethiopia, Nepal, Nigeria, Cambodia, Jordan, Egypt, Panama, Jamaica, Maldives (cash/alcohol/tobacco as listed in the roadmap memory) and plants for Cuba, Peru, Taiwan, Russia, Malaysia, Philippines, Serbia, Colombia, UAE, Seychelles, Qatar, Costa Rica, Indonesia, Nepal, Saudi Arabia, Nigeria, Lebanon, Egypt, Panama.

## Session 40 retry through Chrome (2026-10-22, after deploy)
Panama: ANA declaracion-jurada page is GONE (redirects to home in Chrome too), ANA site search finds nothing; the Costa Rica embassy page "Protocolo de viaje a Panama" is about COSTA RICAN rules (RECAUCA art. 208, Ley 8204), not Panama = NOT usable. Lebanon: customs.gov.lb unreachable and mea.com.lb/Lebanese sites geo-block our IP (Cloudflare 1009). Jordan: nothing new. Still generic: Jordan plants, Panama alcohol+tobacco, Lebanon alcohol+tobacco+cash. Ideas left: user checks the Panama ANA page from his own Chrome in Panama/US IP, Lebanon customs via a VPN, Jordan Customs Arabic traveller guide.
