# Food pages rebuilt from official pages (session 34, 2026-10-17)

Format: chip + card test format (food_detail.js). Data in food_extra.json, added with node food_add_country.js spec.json (spec fields in the script header). Only facts read on the official pages; what was not read is stated in a Not read card.

Done in session 34 (23): United Kingdom, Canada, Japan, United States, New Zealand, Australia, Hong Kong, Germany, France, Ireland, Switzerland, Netherlands, Spain, Finland, Sweden, Austria, Czechia, Chile, Thailand, Croatia, Latvia, Belgium, Singapore.
Done on 2026-10-12 (test group, 8): South Korea, Norway, Mauritius, Taiwan, Romania, Iceland, Argentina, Serbia.

Still generic (no readable official page found yet): see node audit_duplicates.js and food/*/ pages containing "The rule above is the general rule most countries follow".
Notes: bot-blocked sites read via the Browser pane (get_page_text / document.body.textContent); WebFetch with an exact-quote prompt works for open hosts. EU members share the EU baseline (Delegated Regulation 2019/2122); each page must use its own national authority page.
