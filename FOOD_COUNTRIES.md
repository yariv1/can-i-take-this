# Food pages rebuilt from official pages (session 34, 2026-10-17)

Format: chip + card test format (food_detail.js). Data in food_extra.json, added with node food_add_country.js spec.json (spec fields in the script header). Only facts read on the official pages; what was not read is stated in a Not read card.

Done in session 34 (24): United Kingdom, Canada, Japan, United States, New Zealand, Australia, Hong Kong, Germany, France, Ireland, Switzerland, Netherlands, Spain, Finland, Sweden, Austria, Czechia, Chile, Thailand, Croatia, Latvia, Belgium, Singapore, United Arab Emirates.
Done on 2026-10-12 (test group, 8): South Korea, Norway, Mauritius, Taiwan, Romania, Iceland, Argentina, Serbia.

Still generic (no readable official page found yet): see node audit_duplicates.js and food/*/ pages containing "The rule above is the general rule most countries follow".
Notes: bot-blocked sites read via the Browser pane (get_page_text / document.body.textContent); WebFetch with an exact-quote prompt works for open hosts. EU members share the EU baseline (Delegated Regulation 2019/2122); each page must use its own national authority page.

## 2026-11-08 (session 43, AdSense review): 12 more food pages from official pages
Done: Philippines, India, Indonesia, Dominican Republic, Poland, Hungary, Portugal, Peru, Mexico, South Africa, Brazil, Turkey (food_extra.json now 36). Still generic (36, official site unreadable from here or no food rules on it): bahrain cambodia china colombia costa-rica cuba egypt ethiopia fiji georgia greece israel jamaica jordan kenya kuwait lebanon lithuania luxembourg malaysia maldives malta morocco nepal nigeria oman panama qatar russia saudi-arabia seychelles slovakia slovenia sri-lanka ukraine vietnam.
Method notes: domain-restricted WebSearch (allowed_domains = the agency) finds official pages; WebFetch fails on some hosts (DNS, 403, 418): those load in the user's Chrome (gob.pe worked); PDFs: curl + pdftotext. Never write files with Python on Windows (it converts LF to CRLF and broke the app build): use the Edit/Write tools.
Pages with no source link no longer say "official source below" (DS 8.62, audit_source_pointer.js).

## 2026-11-09 — 9 more food pages sourced
Greece, Lithuania, Luxembourg, Malta, Slovakia, Slovenia (EU Your Europe page, 21 Oct 2026), Georgia (rs.ge brochure), Sri Lanka (doa.gov.lk + customs FAQ), Kenya (KEPHIS). Austria verdict label fixed; typeahead guard accepts `tabs(false)`.
Still generic (27): bahrain cambodia china colombia costa-rica cuba egypt ethiopia fiji israel jamaica jordan kuwait lebanon malaysia maldives morocco nepal nigeria oman panama qatar russia saudi-arabia seychelles ukraine vietnam. Unreachable from here: malaysia colombia nepal(PDF) panama jordan costa-rica ukraine(403).
