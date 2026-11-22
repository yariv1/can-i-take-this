exec(open('C:/Users/yariv/Utility Website/can-i-take-this/dup_work/cv_batch7.py', encoding='utf8').read().split("add('CN'")[0])

add('AT', 'austria', [sec('🛃 What Austrian customs says about tobacco and e-cigarettes',
    'From the Austrian Federal Ministry of Finance (page "Mitnahme von Tabakwaren aus anderen EU-Staaten" on oesterreich.gv.at, updated 21 October 2026, read 22 November 2026) and its customs press release of 17 November 2025 on summer checks at Vienna airport. The ministry page lists tobacco and heated tobacco only; it does not name e-cigarettes or vape liquid.',
    ['Item', 'What the Ministry of Finance says'],
    [['Cigarettes, own use from another EU state', 'Up to 800 (no proof needed below this level)'],
     ['Cigarillos / cigars / smoking tobacco', '400 / 200 / 1 kg'],
     ['Heated tobacco', '800 sticks, or 250 g of tobacco in other packaging'],
     ['Above these amounts', 'You must show the goods are for personal use (reason, transport, documents, quantity)'],
     ['Summer 2025 checks, July to September', '518 e-cigarettes and liquids were found prohibited or undeclared, next to 391,122 cigarettes'],
     ['E-cigarette liquid allowance', 'Not named on the ministry page']],
    ['<strong>Not read:</strong> any Austrian customs figure for e-liquid or devices from non-EU countries. Ask Zentrale Auskunftsstelle Zoll before carrying more than a device and a few pods.'])],
    [['Does Austrian customs check e-cigarettes in luggage?', 'Yes. The Ministry of Finance reported 518 prohibited or undeclared e-cigarettes and liquids among its summer 2025 findings at Vienna airport, but its traveller page sets limits only for tobacco and heated tobacco.']],
    [['https://www.oesterreich.gv.at/de/themen/eu_und_international/einfuhr-von-waren-nach-oesterreich-und-zoll/3/Seite.2960170', 'Austrian Ministry of Finance - Mitnahme von Tabakwaren (oesterreich.gv.at)'],
     ['https://www.bmf.gv.at/presse/pressemeldungen/2025/november/zoll-sommerbilanz.html', 'Austrian Ministry of Finance - customs summer review 2025 (press release)']],
    {'official': ['read 2026-11-22: oesterreich.gv.at tobacco page (BMF, updated 2026-10-21): tobacco and heated tobacco limits, no e-liquid; bmf.gv.at press release 2025-11-17: 518 e-cigarettes and liquids found'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['bmf.gv.at Zoll-Info PDF July 2023: HTTP 404 on curl 2026-11-22'], 'date': '2026-11-22'})

for slug, t in {
 'lithuania': '2026-11-22: mano.muitine.lt arrivals page: HTTP 403 Cloudflare check in the browser pane, not bypassed; lrmuitine.lt 2018 PDF: host not reachable (curl and browser); search summary names 20 ml / 50 ml e-liquid but is not a source',
 'morocco': '2026-11-22: douane.gov.ma circulars found by search deal with domestic tax (TIC) on e-liquid and disposables, no traveller allowance; not read in full',
 'cuba': '2026-11-22: aduana.gob.cu pages found by search (what you can import) do not name vapes in the summaries; not read in full',
 'belgium': '2026-11-22: financien.belgium.be traveller pages found by search give no tobacco or e-liquid quantities in the summaries; not read in full'}.items():
    k = 'country/' + slug + '/vaping'
    L[k].setdefault('other', []).append(t)
wrx(); wrl()
