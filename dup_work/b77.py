# Batch 4 (27 November 2026): the eleven pages still at 55% or more duplicate
import json

D = '2026-11-27'
R = 'read 27 November 2026'


def load(p):
    raw = open(p, encoding='utf8', newline='').read()
    return raw, json.loads(raw)


def tail(raw):
    return '\n' if raw.endswith('\n') else ''


# ---------------- airline topic pages
LHB = 'https://www.lufthansa.com/us/en/prepare-for-your-trip/baggage/electronic-devices-and-batteries'
FRA = 'https://www.frankfurt-airport.com/en/travel-planning/check-in-luggage-controls/security-check.html'
raw, t = load('topics_new.json')

lh = t['Lufthansa']['power']
lh['sections'].append({
    "h": "🧳 Smart suitcases, e-scooters and luggage trackers on Lufthansa",
    "p": "From the same Lufthansa battery page, " + R + ". These are battery items that follow different rules from a power bank.",
    "table": {"head": ["Item", "Lufthansa rule"], "rows": [
        ["Smart suitcase with a removable battery", "Take the battery out and carry it in the cabin; the case without it may be checked"],
        ["Smart suitcase with a fixed battery", "Prohibited above 2.7 Wh or 0.3 g lithium"],
        ["Hoverboards, e-bikes, e-scooters, monowheels, Segways, ride-on luggage", "Prohibited as baggage, whatever the battery size and even with it removed"],
        ["Luggage tracker up to 2.7 Wh", "Cabin or checked; it may stay switched on inside a bag"],
        ["GPS tracker above 2.7 Wh, up to 100 Wh", "Cabin only, switched off and protected from accidental activation"],
        ["All devices with lithium batteries", "At most 15 per passenger; in checked baggage at most 3 that are larger than a smartphone"]]}})
lh['faq'].append(["Can I check in a smart suitcase on Lufthansa?", "Yes if you take the removable battery out and carry it in the cabin. A suitcase with a fixed lithium battery above 2.7 Wh is prohibited."])
lh['checked'] = '27 November 2026'

ita = t['ITA Airways']['power']
ita['sections'].append({
    "h": "🔋 Spare camera and laptop batteries, and wheelchairs, on ITA Airways",
    "p": "From the same ITA Airways battery page, " + R + ". ITA counts loose spare batteries separately from power banks, with a much higher number.",
    "table": {"head": ["Item", "ITA Airways rule"], "rows": [
        ["Spare lithium batteries up to 100 Wh or 2 g lithium", "Hand baggage; up to 20 per person, a total that includes every battery type"],
        ["Spare lithium-ion batteries above 100 Wh up to 160 Wh", "Hand baggage, with ITA’s transport authorisation"],
        ["Lithium-metal batteries above 2 g up to 8 g", "At most 2, for medical equipment only, with authorisation"],
        ["Protecting spares", "Original packaging, taped terminals, or a protective case or separate plastic bag for each"],
        ["Charging spare batteries on board", "Not permitted"],
        ["Battery wheelchair or mobility aid", "Needs authorisation: send the maker’s details to ITA’s assistance team and attach ITA’s battery mobility aid form to the device"]]}})
ita['faq'].append(["How many spare camera batteries can I take on ITA Airways?", "Up to 20 spare batteries of up to 100 Wh each in hand baggage. This count is separate from the two power banks."])
ita['checked'] = '27 November 2026'

pf = t['Lufthansa']['perfume']
pf['sections'].append({
    "h": "🛫 Bigger bottles at Frankfurt Airport security",
    "p": "Not from Lufthansa: Frankfurt Airport’s own security check page, " + R + ". It matters if your journey starts at Lufthansa’s Frankfurt hub, because the liquid limit there depends on the checkpoint.",
    "table": {"head": ["Where at Frankfurt", "Liquids in hand luggage"], "rows": [
        ["Most checkpoints in Terminal 1 and all checkpoints in Terminal 3", "Up to 2 litres, thanks to CT scanners; no plastic bag required"],
        ["Certain special checkpoints in Terminal 1, and transfer checkpoints", "Containers of up to 100 ml in one resealable bag of up to 1 litre"],
        ["Duty-free purchases when you transfer", "Keep them in the sealed bags"],
        ["Finding your checkpoint", "Look up your departure gate under Departures before you pack"]]},
    "list": ["<strong>For perfume:</strong> Lufthansa’s own limit of 0.5 litres per item still applies. The card above shows the standard 100 ml limit, and another airport on your return may apply it."]})
pf['sources'].append([FRA, "Unofficial source: Frankfurt Airport — security check"])
pf['faq'].append(["Can I take a perfume bottle over 100 ml from Frankfurt?", "At the checkpoints with CT scanners Frankfurt Airport allows liquids up to 2 litres in hand luggage. Transfer checkpoints and some special ones still apply 100 ml."])
open('topics_new.json', 'w', encoding='utf8', newline='').write(json.dumps(t, ensure_ascii=False, indent=1) + tail(raw))

# ---------------- airline medication pages
GA = 'https://www.gulfair.com/help/medical-cases'
CN = 'https://www.gov.cn/gongbao/content/2016/content_5139413.htm'
AE = 'https://www.uae-embassy.org/permitted-prescriptionsdrugs-while-entering-uae'


def sec(h, p, items, src, url, label):
    return ('<section class="bd-sec"><h2>' + h + '</h2><p>' + p + '</p><ul>' + ''.join('<li>' + x + '</li>' for x in items) +
            '</ul><p class="bd-chk">' + src + ' <a href="' + url + '" target="_blank" rel="noopener">' + label + '</a></p></section>')


def med(file, marker, html):
    s = open(file, encoding='utf8', newline='').read()
    i = s.index(marker)
    assert s.count(marker) == 1, marker
    j = s.index('])', i) + 2
    assert s[j:j + 3] != ' + ', 'already patched'
    s = s[:j] + ' + ' + json.dumps(html, ensure_ascii=False) + s[j:]
    open(file, 'w', encoding='utf8', newline='').write(s)


med('airline_medication_b9.js', "extra: steps(['Carry insulin, syringes and needles with you.'", sec(
    '🩺 Flying Gulf Air with a medical condition',
    'The same Gulf Air page sets rules for passengers who need medical clearance or equipment, not only for diabetes.',
    ['The treating doctor completes the medical passenger application online at least 72 hours before departure.',
     'The detailed medical report must be issued no more than 14 days before departure.',
     'Cabin crew are trained in first aid only and may not give any injection.',
     'Therapeutic oxygen can be requested on the form; ask for a wheelchair at least two days before travel.',
     'Conditions Gulf Air lists as unacceptable for air travel include pregnancy beyond the end of week 36, chest surgery within 21 days, simple abdominal surgery within 10 days and acute contagious disease.'],
    'Official source ' + R + ':', GA, 'Gulf Air: Medical cases'))

med('airline_medication_b13.js', "extra: steps(['Keep medicine you take regularly in your carry-on.'", sec(
    '🇨🇳 Strong painkillers and certain psychiatric drugs into or out of China',
    'This is Chinese law, not an Air China rule. Article 44 of the State Council regulation on narcotic and psychotropic drugs covers patients who carry them.',
    ['It applies to narcotic drugs and to China’s first class of psychotropic drugs.',
     'Carry the medical diagnosis issued by a medical institution and your own identity document.',
     'The amount may not exceed the maximum for a single prescription.',
     'At the border, Chinese customs releases them on the test of personal use and a reasonable amount.',
     'Ask the nearest Chinese embassy whether your medicine is on China’s controlled lists and whether a foreign doctor’s document is accepted; the article does not say.'],
    'Official source ' + R + ', text published in the State Council Gazette after the 2016 amendment (in Chinese, translated by us):', CN, 'gov.cn: regulation on narcotic and psychotropic drugs'))

med('airline_medication_b10.js', "extra: steps(['Carry a medical certificate for syringes.'", sec(
    '🇦🇪 Approval before you fly into the UAE',
    'Air Arabia is based in Sharjah. The UAE Embassy in the United States sets out what a traveller must do before arriving with medicine.',
    ['Controlled medication needs approval through the Ministry of Health website, completed before the trip.',
     'Other prescription medicine and over-the-counter medicine does not need that prior approval.',
     'Carry the prescription for the quantity of medicine you bring.',
     'Ask your doctor whether your medicine counts as controlled, and which quantity and documents then apply.'],
    'Official UAE government source (not Air Arabia), ' + R + ':', AE, 'UAE Embassy: permitted prescription drugs'))

# ---------------- country pages
MA = 'https://www.gov.uk/foreign-travel-advice/morocco/safety-and-security'
ID = 'https://www.gov.uk/foreign-travel-advice/indonesia/safety-and-security'
CY = 'https://www.mof.gov.cy/mof/Customs/customs.nsf/All/4603C94C5BB01227C2258ABA003C32F6/$file/%CE%A3%CE%A5%CE%93%CE%9A%CE%95%CE%9D%CE%A4%CE%A1%CE%A9%CE%A4%CE%99%CE%9A%CE%97%20%CE%9A%CE%91%CE%A4%CE%91%CE%A3%CE%A4%CE%91%CE%A3%CE%97%20%CE%95%CE%99%CE%94%CE%A9%CE%9D%20%CE%A0%CE%9F%CE%A5%20%CE%95%CE%A0%CE%99%CE%A4%CE%A1%CE%95%CE%A0%CE%9F%CE%9D%CE%A4%CE%91%CE%99%20%CE%89%20%CE%91%CE%A0%CE%91%CE%93%CE%9F%CE%A1%CE%95%CE%A5%CE%9F%CE%9D%CE%A4%CE%91%CE%99.pdf'
BZ = 'https://www.astrid-online.it/static/upload/Prov/ProvBolzano-L.pr-12_05_10n6.pdf'
BE = 'https://news.economie.fgov.be/164290-paiement-cash-c-est-maximum-3-000-euros/'

raw, u = load('country_unique.json')


def more(cat, c, items):
    e = u[cat][c]
    assert 'more' not in e
    e['more'] = items


more('alcohol', 'morocco', [{
    "h": "Where you may drink in Morocco",
    "p": ["The UK government’s advice says alcohol is available in licensed venues, but drinking it in the street, or anywhere other than a licensed restaurant or bar, is illegal and can lead to arrest.",
          "Drink-driving is treated as serious: a driver found with any alcohol in their system faces a fine and possible imprisonment.",
          "The same advice reports deaths and serious illness in Morocco from drinks containing methanol, which cannot be detected by taste or smell. Get medical help urgently if signs of poisoning appear after drinking."],
    "src": "Unofficial source read 27 November 2026: UK government (FCDO) travel advice for Morocco, safety and security, page updated 19 August 2026. It is another government’s advice, not Moroccan law.",
    "unofficial": True,
    "link": [MA, "Unofficial source: GOV.UK travel advice for Morocco, safety and security"]}])
more('alcohol', 'indonesia', [{
    "h": "Aceh’s alcohol ban and fake spirits in Indonesia",
    "p": ["In Aceh province, drinking, making and distributing alcohol are all illegal under Sharia law, and the UK government says punishment after a Sharia court process is public caning.",
          "Methanol poisoning has caused deaths in Indonesia, including from drinks bought in licensed bars, shops and hotels in tourist areas. Criminal gangs copy well-known brands, so a familiar label is not proof.",
          "There are also reports of drink spiking linked to sexual assault in Bali, Lombok and the Gili Islands: watch your drink being prepared and do not leave it unattended."],
    "src": "Unofficial source read 27 November 2026: UK government (FCDO) travel advice for Indonesia, safety and security, page updated 18 September 2026. It is another government’s advice, not Indonesian law.",
    "unofficial": True,
    "link": [ID, "Unofficial source: GOV.UK travel advice for Indonesia, safety and security"]}])
more('plants', 'cyprus', [{
    "h": "Bringing plants and produce across the Green Line",
    "p": ["Crossing from the north of the island into the government-controlled areas has its own list. For personal use, Cyprus Customs allows small quantities of farm produce, up to 3 kg or 3 bunches.",
          "The list bans ornamental plants, including trees, shrubs, potted flowers and cut flowers, as well as fruit trees, seeds for planting, grapes and vine plants, and citrus fruit with leaves and stalks. Citrus and potatoes moved on a commercial basis need a plant health inspection report.",
          "Firewood and timber from conifers, plane and chestnut trees is banned. Other wood is allowed up to 25 kg, only with one of the forestry transport documents the list names.",
          "Customs calls its list indicative and says officers at the crossing points can answer further questions."],
    "src": "Official source read 27 November 2026: Cyprus Department of Customs and Excise, summary of goods allowed and banned under Green Line Regulation 866/2004 (document dated February 2024, in Greek, translated by us). The customs website did not respond to our reader, so we read the Internet Archive’s saved copy.",
    "link": [CY, "Cyprus Customs: Green Line goods list (PDF, in Greek)"]}])
more('plants', 'italy', [{
    "h": "Picking wild flowers in South Tyrol",
    "p": ["The mountain province of Bolzano protects all wild plants. For species that are fully protected, picking, keeping them fresh or dried and transporting them are banned; the fine is 50 euros for the first plant and 5 euros for each further one.",
          "Every other wild plant is partly protected: each person may pick no more than ten flowering stems a day. Uprooting them, taking underground parts or rosettes and selling them are banned. Picking more than ten stems costs 30 euros, plus 5 euros for each further plant.",
          "This is one province’s law. Other Italian regions and parks set their own rules, so check locally before you pick anything."],
    "src": "Unofficial source read 27 November 2026: Provincial Law no. 6 of 12 May 2010 of Bolzano, articles 6 to 8 and its penalties, in the copy published by Astrid, a private research foundation (in Italian, translated by us). Later amendments were not checked.",
    "unofficial": True,
    "link": [BZ, "Unofficial source: Astrid copy of Bolzano Provincial Law 6/2010 (PDF, in Italian)"]}])
more('cash', 'belgium', [{
    "h": "Paying in cash once you are in Belgium",
    "p": ["Carrying cash and spending it are separate rules. Belgium’s economy ministry says a payment or gift in cash is capped at 3,000 euros for the whole amount due, even if you pay in several instalments or the purchases are closely linked.",
          "The cap does not apply to payments between private individuals or to certain dealings with financial institutions such as banks. Buying property in cash is banned altogether.",
          "Both businesses and consumers who break the limit risk a fine of up to 10% of the amount paid illegally, with a ceiling of 1.8 million euros."],
    "src": "Official source read 27 November 2026: Belgian FPS Economy newsroom, article of 1 March 2018 (in French, translated by us). The Wikifin consumer site of Belgium’s financial regulator, read the same day, also gives the 3,000 euro cash maximum.",
    "side": True,
    "link": [BE, "FPS Economy: cash payments are limited to 3,000 euros (in French)"]}])
open('country_unique.json', 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + tail(raw))

# ---------------- logs and dates
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = D
    l[k] = x


lg('airline/lufthansa/power-bank', 'official', 'read 2026-11-27: Lufthansa electronic devices and batteries page, ' + LHB)
lg('airline/ita-airways/power-bank', 'official', 'read 2026-11-27: ITA Airways electronic devices and batteries page (browser pane)')
lg('airline/lufthansa/perfume-aerosols', 'reliable', 'read 2026-11-27: Frankfurt Airport security check page, ' + FRA)
lg('airline/gulf-air/medication', 'official', 'read 2026-11-27: Gulf Air medical cases page (browser pane), ' + GA)
lg('airline/air-china/medication', 'official', 'read 2026-11-27: gov.cn narcotic and psychotropic drugs regulation, article 44, ' + CN)
lg('airline/air-arabia/medication', 'official', 'read 2026-11-27: UAE Embassy permitted prescription drugs page, ' + AE)
lg('country/morocco/alcohol', 'reliable', 'read 2026-11-27: GOV.UK Morocco safety and security, ' + MA)
lg('country/indonesia/alcohol', 'reliable', 'read 2026-11-27: GOV.UK Indonesia safety and security, ' + ID)
lg('country/cyprus/plants-seeds', 'official', 'read 2026-11-27: Cyprus Customs Green Line goods list (live site no response, Wayback 2025 copy), ' + CY)
lg('country/italy/plants-seeds', 'reliable', 'read 2026-11-27: Bolzano Provincial Law 6/2010 copy, ' + BZ)
lg('country/belgium/cash', 'official', 'read 2026-11-27: FPS Economy newsroom and Wikifin; finance.belgium.be pages showed a CAPTCHA and were not opened further, ' + BE)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for u_ in ['airline/lufthansa/power-bank', 'airline/ita-airways/power-bank', 'airline/lufthansa/perfume-aerosols', 'airline/gulf-air/medication',
           'airline/air-china/medication', 'airline/air-arabia/medication', 'country/morocco/alcohol', 'country/indonesia/alcohol',
           'country/cyprus/plants-seeds', 'country/italy/plants-seeds', 'country/belgium/cash']:
    ov['/' + u_ + '/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + tail(raw))
print('ok')
