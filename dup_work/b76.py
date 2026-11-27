# Batch 3 (27 November 2026): Israir power bank and alcohol, Hawaiian medication, Ethiopian perfume
import json

D = '2026-11-27'
CHK = '27 November 2026'


def rw(p, old, new):
    s = open(p, encoding='utf8', newline='').read()
    if '\r\n' in s:
        old, new = old.replace('\n', '\r\n'), new.replace('\n', '\r\n')
    assert s.count(old) == 1, (p, old[:60], s.count(old))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(old, new))


BAT = 'https://storage.googleapis.com/prod-wgclients/isra2023/document/84325_bateries_litum.pdf?alt=media'
POL = 'https://www.israir.co.il/en/Passengers_Info/Baggage_Policy.html'

p = 'topics_new.json'
raw = open(p, encoding='utf8', newline='').read()
d = json.loads(raw)

# ---------------- Israir power bank
q = d['Israir']['power']
q['answer'] = ("Israir's battery document puts loose power banks of up to 100 Wh in the cabin, protected against short circuit, and never loose in checked baggage; 100-160 Wh needs approval, two spares at most. "
               "It also bans laptops and tablets from checked baggage.")
iaa = q['sections'][0]
iaa['list'] = ["<strong>Not on the airport page:</strong> a Wh limit or a number of power banks."]
q['sections'] = [
    {"h": "🔋 What Israir&rsquo;s battery document says",
     "p": "From Israir&rsquo;s own document on lithium batteries (PDF in Hebrew, file dated August 2019), read 27 November 2026, translated by us.",
     "table": {"head": ["Item", "Israir rule"], "rows": [
         ["Power banks and other lithium-ion batteries up to 100 Wh", "Cabin: allowed, loose ones protected against damage or short circuit. Checked baggage: loose ones forbidden"],
         ["The same battery inside a device, in checked baggage", "Allowed only with approval"],
         ["100 to 160 Wh", "Cabin only, with the airline&rsquo;s approval, no more than two spares; forbidden in checked baggage"],
         ["Number up to 100 Wh", "No limit stated for ordinary consumer batteries"],
         ["Laptops and tablets", "Forbidden in checked baggage on Israir flights; carry them in hand baggage"],
         ["Smart suitcase", "Forbidden if it is larger than cabin size (55 x 40 x 25 cm) and the battery cannot be removed; if it goes in the hold, remove the battery and take it into the cabin"],
         ["Hoverboards, Solowheels and mini Segways", "Forbidden in hand and checked baggage"],
         ["Protecting spares", "Original packaging, a battery case or a separate pocket; tape over exposed terminals"]]},
     "list": ["<strong>Newer than this document:</strong> current industry guidance (IATA) allows two power banks and says not to recharge them on board, so plan on two."]},
    {"h": "🧳 If your Israir trolley goes to the hold",
     "p": "From Israir&rsquo;s baggage policy page, in Hebrew, read 27 November 2026.",
     "table": {"head": ["Point", "Israir policy"], "rows": [
         ["Small personal bag", "Up to 40 x 30 x 20 cm, included, goes under the seat in front"],
         ["Trolley or large backpack", "Up to 55 x 40 x 25 cm and 10 kg, paid on international flights other than New York"],
         ["Cabin space", "About 50 such bags; once it is full, the rest go to the hold, even if paid for"],
         ["After a bag is sent to the plane", "Nothing may be taken out of it"]]},
     "list": ["<strong>What to do:</strong> pack the power bank in the small personal bag, or take it out before a trolley is tagged for the hold."]},
    iaa]
q['faq'] = [["How many power banks can I take on Israir?", "Israir's 2019 battery document states no number up to 100 Wh and allows two spares of 100-160 Wh with approval. Industry guidance now allows two power banks, so plan on two."],
            q['faq'][1]]
q['sources'] = [[BAT, 'Israir &mdash; Lithium batteries: allowed and forbidden (PDF in Hebrew, 2019)'], [POL, 'Israir &mdash; Baggage policy (in Hebrew)'], q['sources'][0]]
q['unofficial'] = False
q['checked'] = CHK

# ---------------- Israir alcohol
q = d['Israir']['alcohol']
q['answer'] = q['answer'].replace("It sets no separate alcohol limit.", "It sets no separate alcohol limit, and says the liquid limits do not apply to checked baggage.")
assert 'checked baggage' in q['answer']
q['sections'].insert(1, {
    "h": "🍾 Taking bottles in the hold on Israir",
    "p": "From the same Israir baggage policy page, read again 27 November 2026. Fees are as shown that day.",
    "table": {"head": ["Point", "Israir policy"], "rows": [
        ["Liquid limits", "Do not apply to checked baggage, so such products can be sent to the hold"],
        ["Checked bag on international flights", "Not in the ticket price (New York flights include one in economy); up to 65 x 45 x 30 cm and 23 kg"],
        ["First checked bag, bought in advance", "65 US dollars each way; 100 dollars if bought at Ben Gurion"],
        ["Domestic flights", "First bag 20 shekels each way when paid in advance"],
        ["At the gate", "The security authorities may carry out further checks there"],
        ["Once the bag is sent to the plane", "Nothing may be taken out of it"]]},
    "list": ["<strong>Packing:</strong> a bottle from home over 100 ml belongs in the checked bag, so add one to your booking in advance."]})
q['checked'] = CHK

# ---------------- Ethiopian perfume
CARRY = 'https://www.ethiopianairlines.com/us/information/baggage-information/carry-on-baggage'
DIR = 'https://www.ethiopianairlines.com/docs/globallibraries/default-document-library/minster-of-finance-english.pdf'
q = d['Ethiopian Airlines']['perfume']
q['answer'] = ("Ethiopian Airlines allows hair spray, perfume and medicines containing alcohol in carry-on and checked baggage, up to 0.5 kg/L per article and 2.0 kg/L in total, and lists duty-free items among the extras you may carry. "
               "Entering Ethiopia, a directive allows 500 ml of perfume and 500 ml of soft perfume duty-free.")
q['sections'] += [
    {"h": "🛍️ Duty-free perfume and your Ethiopian cabin allowance",
     "p": "From Ethiopian Airlines&rsquo; carry-on baggage page (US site), read 27 November 2026.",
     "table": {"head": ["Point", "Ethiopian Airlines wording, in short"], "rows": [
         ["Cabin bag size", "23 x 40 x 55 cm"],
         ["Economy weight", "7 kg"],
         ["Extras carried free", "Duty-free items are on the list, with a handbag, coat, reading material and infant items; the extras may weigh 5 kg at most"],
         ["Check-in", "All carry-on baggage must be presented for inspection at check-in"]]}},
    {"h": "🇪🇹 Perfume you can bring into Ethiopia without duty",
     "p": "This is a customs rule for arrivals, not an airline rule. From Ethiopian Ministry of Finance Directive No. 923/2014, read 27 November 2026 in an English copy on ethiopianairlines.com, which is why we treat it as unofficial.",
     "table": {"head": ["Item", "Duty-free for personal use"], "rows": [["Perfume", "500 ml"], ["Soft perfume", "500 ml"]]},
     "list": ["<strong>Check the current figure</strong> with the Ethiopian Customs Commission; the copy gives no penalty for going over."]}]
q['faq'].append(["How much perfume can I bring into Ethiopia?", "Directive 923/2014, read in an unofficial English copy, allows 500 ml of perfume and 500 ml of soft perfume for personal use without duty or tax."])
q['sources'] += [[CARRY, 'Ethiopian Airlines &mdash; Carry-on baggage'], [DIR, 'Unofficial source: English copy of Directive 923/2014 (PDF)']]
q['checked'] = CHK
open(p, 'w', encoding='utf8', newline='').write(json.dumps(d, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))

# ---------------- home app and airline card: Israir power bank rule
rw('canitakethis.html', 'var POWER_RULES={', 'var POWER_RULES={"Israir":{"nolimit":true,"wh":100,"use":"unk","chk":"27 November 2026","mid":"Cabin only, with Israir\'s approval; no more than two spares, never in checked baggage.","note":"Israir\'s 2019 battery document states no number up to 100 Wh. Industry guidance now allows two power banks, so plan on two.","keep":"Carry loose power banks in the cabin, protected against short circuit; never loose in checked baggage.","url":"' + BAT + '"},')
rw('canitakethis.html', "var psrc='From '+airline+\"'s own published rules, checked October 2026. Rules change, so confirm with the airline before you fly.\";\n        function PRR",
   "var psrc='From '+airline+\"'s own published rules, checked \"+(PR.chk||'October 2026')+'. Rules change, so confirm with the airline before you fly.';\n        function PRR")

# ---------------- Hawaiian medication: medical cannabis
DOH = 'https://health.hawaii.gov/medicalcannabisregistry/travel/'
TSAM = 'https://www.tsa.gov/travel/security-screening/whatcanibring/items/medical-marijuana'
p = 'airline_medication_b13.js'
rw(p, """        card('drips', 'Drips and oxygen', 'warn', 'Rules for IV and oxygen', 'Intravenous devices, personal oxygen',""",
   """        card('cannabis', 'Medical cannabis', 'warn', 'State advises against it', 'Flying with a cannabis card', 'Hawaii\\'s Department of Health does not recommend travelling with medical cannabis, because flying passes through federal jurisdiction and may put you at risk of delay or arrest.', [
          'A visitor with a medical cannabis card from another US state or territory may apply for a temporary Hawaii registration, valid up to 60 days and renewable once a calendar year, for a non-refundable 47.41 US dollar fee; apply up to 60 days ahead.',
          'The health department lists licensed dispensaries on Hawaii Island, Maui, Oahu and Kauai.',
          'TSA says its officers do not search for illegal drugs, but refer any they find during screening to law enforcement.'
        ], [['""" + DOH + """', 'Hawaii Department of Health: Out-of-state patient application', 'Medical cannabis and travel (read 27 November 2026)'], ['""" + TSAM + """', 'TSA: Medical marijuana', 'Last updated 27 April 2026']]),
        card('drips', 'Drips and oxygen', 'warn', 'Rules for IV and oxygen', 'Intravenous devices, personal oxygen',""")
rw(p, """        ['Can I check my medication on Hawaiian Airlines?', 'The joint Alaska and Hawaiian page says medication should always stay in carry-on baggage, never in checked baggage.']
      ],""", """        ['Can I check my medication on Hawaiian Airlines?', 'The joint Alaska and Hawaiian page says medication should always stay in carry-on baggage, never in checked baggage.'],
        ['Can I fly with medical cannabis in Hawaii?', 'Hawaii\\'s Department of Health does not recommend travelling with it, because flying passes through federal jurisdiction and may put you at risk of delay or arrest.']
      ],""")
rw(p, """        ['Ice packs for medicine?', 'Allowed in reasonable quantity (TSA); no refrigerators on board'],""",
   """        ['Ice packs for medicine?', 'Allowed in reasonable quantity (TSA); no refrigerators on board'],
        ['Medical cannabis?', 'Hawaii health department advises against flying with it'],""")

# ---------------- logs and dates
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = D
    l[k] = x


lg('airline/israir/power-bank', 'official', 'read 2026-11-27: Israir lithium battery PDF (2019) and baggage policy page (browser pane), ' + BAT + ' ' + POL)
lg('airline/israir/alcohol', 'official', 'read 2026-11-27: Israir baggage policy page (browser pane), ' + POL)
lg('airline/hawaiian-airlines/medication', 'official', 'read 2026-11-27: Alaska/Hawaiian joint page (Wayback 20260714), Hawaii DOH and TSA medical marijuana pages, ' + DOH + ' ' + TSAM)
lg('airline/ethiopian-airlines/perfume-aerosols', 'official', 'read 2026-11-27: Ethiopian carry-on baggage and restricted items pages, ' + CARRY)
lg('airline/ethiopian-airlines/perfume-aerosols', 'reliable', 'read 2026-11-27: English copy of Directive 923/2014, ' + DIR)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for u_ in ['/airline/israir/power-bank/', '/airline/israir/alcohol/', '/airline/hawaiian-airlines/medication/', '/airline/ethiopian-airlines/perfume-aerosols/']:
    ov[u_] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
