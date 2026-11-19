import json
ROOT = 'C:/Users/yariv/Utility Website/can-i-take-this/'
def rd(f): return json.loads(open(ROOT + f, encoding='utf8').read())
def wr(f, d, crlf=True):
    s = json.dumps(d, indent=1, ensure_ascii=False)
    if crlf: s = s.replace('\n', '\r\n')
    open(ROOT + f, 'w', encoding='utf8', newline='').write(s)

d = rd('topics_new.json')
CHK = '19 November 2026'
log = {}
def sec(h, p, head=None, rows=None, lst=None):
    s = {'h': h, 'p': p}
    if head: s['table'] = {'head': head, 'rows': rows}
    if lst: s['list'] = lst
    return s

# ---------- GOL (Receita Federal) ----------
e = d['GOL']['alcohol']
e['answer'] = ("GOL's baggage pages returned an error (403), so this page gives the Brazilian customs rule for alcohol you bring into Brazil: 12 litres in total per traveller, with no alcohol in the baggage of anyone under 18. "
               "Duty-free shops at the first Brazilian airport sell up to 24 units, no more than 12 of one type.")
e['sections'] = [sec('🍷 What Brazilian customs says about alcohol on arrival',
                     'From the Receita Federal page on the exemption quota, duty free and taxable baggage (published 26 February 2016, updated 27 January 2026, read 19 November 2026). It is customs guidance, not GOL wording, so check GOL for how many bottles you can carry in the cabin or hold.',
                     ['Question', 'Receita Federal'],
                     [['Alcohol in accompanied baggage', '12 litres in total, by air, sea or land'],
                      ['Value quota', 'US$1,000 by air or sea, US$500 by other routes; personal, not shared with family'],
                      ['Over the limit', 'Not treated as commercial if the amount is reasonable, but the tax exemption is lost'],
                      ['Minors', 'Alcohol may not be part of the baggage of children or adolescents, even with a guardian'],
                      ['Free shop on arrival (airport)', '24 units, no more than 12 of any one type; extra US$1,000 quota at the first Brazilian airport'],
                      ['Buyers', 'Under 18 may not buy alcohol']],
                     ['<strong>Not on the page:</strong> GOL&rsquo;s own limits per bag and the strength tiers. The page also does not define a &ldquo;unit&rdquo; for the free shop limit.'])]
e['sources'] = [['https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/viagens-internacionais/guia-do-viajante/entrada-no-brasil/cota-de-isencao-duty-free-e-bagagem-tributavel', 'Unofficial source (customs authority): Receita Federal &mdash; Quota, duty free and taxable baggage']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/gol/alcohol'] = {'official': ['tried 2026-11-19: voegol.com.br carry-on and checked baggage pages HTTP 403'], 'reliable': ['read 2026-11-19: Receita Federal (gov.br) quota and duty free page, updated 2026-01-27 (12 L)'], 'other': [], 'date': '2026-11-19'}

# ---------- Air Arabia ----------
e = d['Air Arabia']['alcohol']
e['answer'] = ("Air Arabia's help page says smoking and alcohol are prohibited on board its aircraft, and its General Conditions of Carriage let it refuse carriage to anyone who seems under the influence of alcohol or ignores crew instructions on drinking. "
               "Neither document gives a limit for bottles in baggage.")
e['sections'] = [sec('🚫 What Air Arabia says about alcohol',
                     'From the Air Arabia FAQ "Smoking and drinking" and the General Conditions of Carriage (PDF, December 2025 edition), both read 19 November 2026.',
                     ['Question', 'Air Arabia wording'],
                     [['Alcohol on board', 'Smoking and alcohol are prohibited on board Air Arabia aircraft'],
                      ['Passenger who appears under the influence of alcohol or drugs', 'Air Arabia may refuse to carry the passenger (Article 10.1)'],
                      ['Impairment that is a risk to others or the aircraft', 'Also a ground for refusal'],
                      ['Instructions on consumption of alcohol', 'Failing to follow crew or airline instructions on drinking is a ground for refusal'],
                      ['Alcohol in checked or cabin bags', 'No rule or quantity is stated']],
                     ['<strong>Not in these documents:</strong> how many bottles you may carry and whether duty-free alcohol is allowed in the cabin. Ask Air Arabia, and check the alcohol rules of the country you land in; some places ban it.'])]
e['sources'] = [['https://www.airarabia.com/en/help/frequently-asked-questions/faq-source/onboard/smoking-and-drinking', 'Air Arabia &mdash; Smoking and drinking (FAQ)'],
                ['https://www.airarabia.com/-/media/conditions-of-carriage/20251215_gcoc_english_version_air-arabia.pdf', 'Air Arabia &mdash; General Conditions of Carriage (PDF, December 2025)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/air-arabia/alcohol'] = {'official': ['read 2026-11-19: Air Arabia FAQ smoking and drinking (alcohol prohibited on board); read 2026-11-19: Air Arabia General Conditions of Carriage PDF Dec 2025 (Article 10.1, refusal for alcohol); no baggage quantity rule on either'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-19'}

# ---------- flydubai (Dubai Customs) ----------
e = d['flydubai']['alcohol']
e['answer'] = ("flydubai's baggage pages timed out, so this page gives Dubai Customs' rule for alcohol arriving in Dubai: no more than 4 litres, or 2 cartons of beer (24 cans each, 355 ml or less a can), for passengers over 18 carrying it for personal use.")
e['sections'] = [sec('🍺 What Dubai Customs says about alcohol on arrival',
                     'From the Dubai Customs page "Permitted luggage and items" (read 19 November 2026; undated). It is customs guidance, not flydubai wording.',
                     ['Question', 'Dubai Customs'],
                     [['Spirits, wine and similar', 'No more than 4 litres of alcoholic beverages'],
                      ['Beer', '2 cartons of 24 cans, each can no more than 355 ml'],
                      ['Age', 'The passenger must be over 18'],
                      ['Personal use', 'Exemptions apply only to goods that are personal and not in commercial quantities']],
                     ['<strong>Not on the page:</strong> what happens to alcohol above the limit, and flydubai&rsquo;s own cabin and checked-bag rules.'])]
e['sources'] = [['https://www.dubaicustoms.gov.ae/en/mobile/Pages/PermittedLuggageItems.aspx', 'Unofficial source (customs authority): Dubai Customs &mdash; Permitted luggage and items']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/flydubai/alcohol'] = {'official': ['tried 2026-11-19: flydubai.com dangerous goods and forbidden items pages: timeouts'], 'reliable': ['read 2026-11-19: Dubai Customs permitted luggage and items page (4 L / 2 cartons beer, over 18)'], 'other': [], 'date': '2026-11-19'}

# ---------- United (TSA) ----------
e = d['United']['alcohol']
e['answer'] = ("United's pages did not load, so this is the US TSA rule that applies at the checkpoint and in checked bags: alcohol is allowed in carry-on in containers of 3.4 oz (100 ml) or less, and in checked bags in unopened retail packaging, up to 5 liters for drinks over 24% and up to 70%.")
e['sections'] = [sec('🥃 What the TSA says about alcoholic beverages',
                     'From the TSA page "Alcoholic beverages" (read 19 November 2026; undated). It is a US federal rule, not United wording.',
                     ['Question', 'TSA wording'],
                     [['Carry-on bag', 'Yes, 3.4 oz (100 ml) or less per container'],
                      ['Mini bottles in carry-on', 'Must fit comfortably in the single quart-sized bag'],
                      ['Checked bag', 'Yes'],
                      ['Drinks over 24% and up to 70%', 'Limited to 5 liters per passenger, in unopened retail packaging'],
                      ['Drinks of 24% or less', 'No limit in checked bags'],
                      ['Final decision', 'The TSA officer decides at the checkpoint; check with your airline first']],
                     ['<strong>Not on the page:</strong> drinks above 70%, duty-free bottles and United&rsquo;s own policy. Ask United about those.'])]
e['sources'] = [['https://www.tsa.gov/travel/security-screening/whatcanibring/items/alcoholic-beverages', 'Unofficial source (US government): TSA &mdash; Alcoholic beverages']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/united/alcohol'] = {'official': ['tried 2026-11-19: united.com dangerous goods and TSA/security pages: timeouts; search of united.com returned no results'], 'reliable': ['read 2026-11-19: TSA alcoholic beverages page (3.4 oz carry-on, 5 L checked 24-70%)'], 'other': [], 'date': '2026-11-19'}

# ---------- Iberia (Agencia Tributaria) ----------
e = d['Iberia']['alcohol']
e['answer'] = ("Iberia's pages returned an error (403), so this page gives the Spanish Tax Agency rule for alcohol arriving in Spain from outside the EU: 1 litre of drinks above 22% (or 2 litres of weaker, fortified or sparkling drinks), plus 4 litres of still wine and 16 litres of beer, for travellers aged 17 or older.")
e['sections'] = [sec('🍷 What the Spanish Tax Agency says about alcohol on arrival',
                     'From the Agencia Tributaria page on allowances for tobacco, alcohol and other goods (English version, updated 23 September 2026, read 19 November 2026). It is customs guidance, not Iberia wording.',
                     ['Question', 'Agencia Tributaria'],
                     [['Spirits above 22%, or ethyl alcohol of 80% or more', '1 litre'],
                      ['Drinks below 22%, fortified or sparkling wine', '2 litres'],
                      ['Combining the two', 'Each counts as 100% of the allowance; combine only up to that total'],
                      ['Still wine', '4 litres on top'],
                      ['Beer', '16 litres on top'],
                      ['Age', 'Travellers under 17 get no allowance'],
                      ['Value of all goods in your luggage', '430 euros by air or sea; 150 euros for under 15']],
                     ['<strong>Not on the page:</strong> travel inside the EU, and Iberia&rsquo;s own rules for bottles in cabin and checked bags. The Iberia help centre points to the EU rules; ask Iberia before packing glass in the hold.'])]
e['sources'] = [['https://sede.agenciatributaria.gob.es/Sede/en_gb/viajeros-trabajadores-desplazados-fronterizos/viajeros/franquicias-tabaco-alcohol-otras-mercancias.html', 'Unofficial source (customs authority): Agencia Tributaria &mdash; Allowances: tobacco, alcohol and other goods']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/iberia/alcohol'] = {'official': ['tried 2026-11-19: ayuda.iberia.com alcohol in checked luggage and alcohol volume pages: HTTP 403 and 404'], 'reliable': ['read 2026-11-19: Agencia Tributaria allowances page, updated 2026-09-23 (1 L/2 L/4 L/16 L)'], 'other': [], 'date': '2026-11-19'}

# ---------- Vueling (Vueling-hosted DGR table, 66th edition) ----------
e = d['Vueling']['alcohol']
e['answer'] = ("Vueling's help pages returned an error (403), but its site hosts the passenger dangerous goods table (66th edition, 1 January 2025). It lists alcoholic drinks above 24% and up to 70% in retail packaging, in containers of up to 5 L and 5 L in total per person, and drinks of 24% or less with no restriction.")
e['sections'] = [sec('🥃 What the Vueling-hosted dangerous goods table says',
                     'From the Spanish-language PDF "Reglamentación sobre Mercancías Peligrosas, tabla 2.3.A" (66th edition, 1 January 2025) on static.vueling.com, read 19 November 2026. The PDF text does not show clearly which column applies to cabin and which to hold, so confirm that with Vueling.',
                     ['Question', 'Table 2.3.A'],
                     [['Drinks above 24% and up to 70% alcohol by volume', 'Retail packaging, containers of no more than 5 L, 5 L in total net quantity per person'],
                      ['Drinks of 24% or less', 'Not subject to any restriction'],
                      ['Drinks above 70%', 'Not listed as allowed'],
                      ['Cabin liquids', 'The 100 ml airport rule still limits bottles in hand luggage'],
                      ['Hair sprays, perfumes and alcohol-based medicines', 'Listed in a separate row with 2 kg or 2 L limits']],
                     ['<strong>Not in the table:</strong> Vueling&rsquo;s own advice on glass bottles in the hold and the alcohol import limits of the country you fly to.'])]
e['sources'] = [['https://static.vueling.com/corporative7/media/2308/word-2-3-a-esp-ed66-2025.pdf', 'Vueling &mdash; Dangerous goods table 2.3.A, 66th edition (PDF on vueling.com)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/vueling/alcohol'] = {'official': ['tried 2026-11-19: help.vueling.com liquids pages HTTP 403', 'read 2026-11-19: Vueling-hosted dangerous goods table 2.3.A 66th edition (static.vueling.com PDF): alcohol 24-70% 5 L per person, 24% or less unrestricted'], 'reliable': [], 'other': ['IATA table text replaced by the Vueling-hosted file wording'], 'date': '2026-11-19'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
wr('ladder_log.json', L)
print('ok')
