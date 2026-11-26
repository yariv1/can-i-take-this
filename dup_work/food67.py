# Official plant-quarantine law cards on four food pages (laws read 26 November 2026)
import json

def rw(p, old, new):
    s = open(p, encoding='utf8', newline='').read()
    if '\r\n' in s:
        old, new = old.replace('\n', '\r\n'), new.replace('\n', '\r\n')
    assert s.count(old) == 1, (p, old)
    open(p, 'w', encoding='utf8', newline='').write(s.replace(old, new))

rw('food_detail.js', "function srcBlock(c) {\n  const d = DETAIL[c.name];\n  if (!d || !d.sources) return '';\n  const UN = !!d.unofficial;\n  const rows = d.sources.map(",
   "function srcBlock(c, t) {\n  const d = DETAIL[c.name];\n  if (!d || !d.sources) return '';\n  const own = t && t.src;   // a card may carry its own source (official law card beside unofficial cards)\n  const UN = own ? !t.official : !!d.unofficial;\n  const rows = (own ? t.src : d.sources).map(")
rw('food_detail.js', "srcBlock(c) + '</div></div></div>';", "srcBlock(c, t) + '</div></div></div>';")
rw('food_detail.js', "unofficial: !!e.unofficial }; TOPICS", "unofficial: !!e.unofficial, lawNote: e.lawNote }; TOPICS")
rw('food_detail.js', ' + " Food import rules change', " + (d.lawNote ? ' ' + d.lawNote : '') + \" Food import rules change")

def S(when, status, tag, *lines):
    return {"when": when, "status": status, "tag": tag, "lines": list(lines)}

p = 'food_extra.json'
raw = open(p, encoding='utf8', newline='').read()
d = json.loads(raw)

def add(c, card, answer, faq, note, url, label):
    e = d[c]
    card['src'] = [[url, label]]
    card['official'] = True
    i = [t['id'] for t in e['topics']].index('notread')
    e['topics'].insert(i, card)
    e['answer'] += ' ' + answer
    e['faq'] += faq
    e['sources'].append([url, label])
    e['lawNote'] = note

def line(c, tid, text):
    next(t for t in d[c]['topics'] if t['id'] == tid)['scen'][0]['lines'].append(text)

add('Vietnam', {"id": "law", "label": "Plant quarantine law", "status": "warn", "verdict": "Declare it", "head": "Vietnam's plant protection law says plant items carried in luggage must be declared for inspection.", "scen": [
    S("Plants and plant products in hand or checked luggage", "warn", "Declare it",
      "Article 29 of Law No. 41/2013/QH13 says quarantine objects carried in hand luggage, or in luggage sent with a means of transport, must be declared so the plant quarantine agency can inspect them.",
      "The law counts plants, plant products and other things that could carry harmful organisms as quarantine objects.",
      "Customs clearance for these items happens only after plant quarantine is finished, at the first border gate or at the place they are brought in from."),
    S("Soil", "stop", "Not allowed", "Article 13 strictly prohibits sending or carrying into Vietnam soil that contains harmful organisms."),
    S("What the law leaves to other rules", "warn", "Ask first",
      "The item lists and declaration details are set by the agriculture ministry, and we did not read them. The law says nothing about meat or dairy.",
      "We read an English translation of the 2013 law, posted on the International Plant Protection Convention (IPPC) site.")]},
    "Separately, Vietnam's plant protection law says plant items carried in luggage must be declared for plant quarantine inspection.",
    [["Do I have to declare plants in my luggage in Vietnam?", "Yes. Article 29 of Law No. 41/2013/QH13 says quarantine objects, which include plants and plant products, carried in hand or sent luggage must be declared for inspection."],
     ["Can I carry soil into Vietnam?", "Article 13 prohibits sending or carrying in soil that contains harmful organisms."]],
    "The plant quarantine law card was read on 26 November 2026 in an English translation on the IPPC site.",
    "https://www.ippc.int/static/media/files/reportingobligation/2015/09/01/PQ_LAW_41_QH_13.pdf", "Vietnam: Law on Plant Protection and Quarantine No. 41/2013/QH13 (English translation on IPPC)")

add('Cambodia', {"id": "law", "label": "Plant inspection law", "status": "warn", "verdict": "Declare it", "head": "Cambodia's phytosanitary sub-decree says plant material brought in must be declared and inspected.", "scen": [
    S("Plants, plant products and soil", "warn", "Declare it",
      "Sub-Decree No. 15 of 13 March 2003 says all plant quarantine material brought into Cambodia must be inspected and follow any treatment ordered.",
      "The material includes plants and plant parts, plant and farm products not certified free of pests, soil (also soil on roots), packaging and live or dead pests.",
      "Article 22 says the owner must declare it and apply for inspection at the first point of entry."),
    S("Importing plants", "warn", "Certificate",
      "Article 21 requires a plant quarantine certificate from the exporting country's authority, and the material must be free of quarantine pests.",
      "Article 22 also asks an importer of plants to inform the quarantine check point 10 days before arrival."),
    S("Sealed cans, tins and bottles", "go", "Outside the definition",
      "The sub-decree's definition of \"plant\" leaves out preserved fruit or vegetables imported in hermetically sealed cans, tins, bottles or other containers."),
    S("Avoiding inspection", "stop", "Fine",
      "Article 35 provides a fine for moving plant quarantine material around the check points to avoid inspection.",
      "We read an English translation by Cambodia's plant protection office, marked \"not for legal purpose\", on the IPPC site. It says nothing about meat or dairy, and we did not check for later changes.")]},
    "Cambodia's 2003 phytosanitary sub-decree also says plant material brought in must be declared at the first point of entry and inspected.",
    [["Do I have to declare plant products on arrival in Cambodia?", "Sub-Decree No. 15 says plant quarantine material, including plants, uncertified plant products and soil, must be declared and inspected at the first point of entry."],
     ["Are canned fruit and vegetables covered?", "The sub-decree's definition of plant leaves out preserved fruit or vegetables in hermetically sealed cans, tins, bottles or other containers."]],
    "The plant inspection law card was read on 26 November 2026 in an English translation on the IPPC site.",
    "https://www.ippc.int/static/media/files/reportingobligation/2015/03/30/1115267545020_PQ_S.Decree__English__2013042321-17En.pdf", "Cambodia: Sub-Decree No. 15 on Phytosanitary Inspection (English translation on IPPC)")
line('Cambodia', 'fresh', "For plant products such as fresh produce, see the plant inspection law card: uncertified plant products must be declared and inspected.")

add('Ethiopia', {"id": "law", "label": "Plant quarantine law", "status": "warn", "verdict": "Permit", "head": "Ethiopia's 1992 plant quarantine regulation asks for an import permit for listed plants and bans soil.", "scen": [
    S("Fresh fruit, vegetables, coffee and other listed plants", "warn", "Permit",
      "Article 4 of Regulation No. 4/1992 says no one may import the plants in Schedule I without an import permit from the agriculture minister.",
      "Schedule I names, among others, fresh fruit and vegetables, coffee, the tea plant, citrus, dates, potatoes, rice, wheat, maize and sesame. Several entries leave out seeds.",
      "Article 6 says listed plants must come with a phytosanitary certificate, with a copy fixed to the outside of the container."),
    S("Soil, compost and plant packing", "stop", "Not allowed",
      "Schedule II prohibits compost, soil (alone or stuck to plants), live plant pests and snails, listed weeds, and risky plant packing such as banana leaves, cereal straw, coffee hulls and rice hulls."),
    S("Inspection", "warn", "Inspected",
      "All imported plants that could carry pests are subject to quarantine. Infected items are treated, sent back or destroyed at the owner's cost.",
      "We read the Negarit Gazeta text of 2 October 1992 on FAO's FAOLEX database. The minister may change the lists and we did not check for later changes. It says nothing about meat or dairy.")]},
    "Ethiopia's 1992 Plant Quarantine Regulation also asks for an import permit and a phytosanitary certificate for listed plants, including fresh fruit and vegetables and coffee, and bans soil and compost.",
    [["Can I bring fresh fruit or vegetables into Ethiopia?", "Regulation No. 4/1992 lists fresh fruit and vegetables as restricted: they need an import permit and a phytosanitary certificate."],
     ["Can I bring soil or compost into Ethiopia?", "No. Schedule II of the regulation prohibits compost and soil, whether alone or attached to plants."]],
    "The plant quarantine law card was read on 26 November 2026 in the gazette text on FAOLEX.",
    "https://faolex.fao.org/docs/pdf/eth4524.pdf", "Ethiopia: Plant Quarantine Council of Ministers Regulation No. 4/1992 (FAOLEX)")
line('Ethiopia', 'fresh', "For fruit and vegetables, see the plant quarantine law card: the 1992 regulation lists them as needing a permit.")

add('Nepal', {"id": "law", "label": "Plant permit law", "status": "warn", "verdict": "Permit", "head": "Nepal's Plant Protection Act asks for an entry permit before plants or plant products are brought in.", "scen": [
    S("Plants, plant products and soil", "warn", "Permit",
      "Sections 7 and 11 of the Plant Protection Act 2064 (2007) say an entry permit must be obtained before importing plants, plant products, beneficial organisms, or growing media such as soil and moss.",
      "The Act's definition of a plant includes stems, bark, roots, leaves, fruit and seeds."),
    S("For your own use", "warn", "Permit",
      "Section 7(3) lets the plant quarantine office issue an entry permit, for a fee, to a person bringing plants or plant products for personal or research use.",
      "A permit is valid for three months."),
    S("Without the papers", "stop", "Offence",
      "Importing without an entry permit, or without a phytosanitary certificate, is listed as an offence in Section 22.",
      "We read the 2007 Nepal Gazette text hosted by the Asian Development Bank. A 2022 amendment changed several sections, including penalties, so we quote no fine amounts. The Act says nothing about meat or dairy.")]},
    "Nepal's Plant Protection Act also asks for an entry permit before plants or plant products are brought in, including for personal use.",
    [["Do I need a permit to bring plants or seeds into Nepal?", "The Plant Protection Act 2064 (2007) says an entry permit must be obtained before importing plants or plant products, and lets the office issue one for personal use for a fee."],
     ["Is it an offence to bring plants without papers?", "Section 22 lists importing without an entry permit or a phytosanitary certificate as an offence."]],
    "The plant permit law card was read on 26 November 2026 in the gazette text hosted by the Asian Development Bank.",
    "https://lpr.adb.org/sites/default/files/resource/%5Bnid%5D/nep100397.pdf", "Nepal: Plant Protection Act 2064 (2007), Nepal Gazette text (hosted by ADB)")
line('Nepal', 'fruit', "This value limit does not remove the entry permit that the Plant Protection Act asks for; see the plant permit law card.")

out = json.dumps(d, ensure_ascii=False, indent=1)
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
for c in ['Vietnam', 'Cambodia', 'Ethiopia', 'Nepal']:
    k = 'food/' + c.lower()
    x = l.get(k) or {}
    u, lab = d[c]['sources'][-1]
    x.setdefault('official', []).append('read 2026-11-26: ' + lab + ', ' + u)
    x['date'] = '2026-11-26'
    l[k] = x
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1).replace('\n', '\r\n'))
print('ok')
