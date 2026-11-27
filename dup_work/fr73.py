# Ryanair cabin liquids depend on the departure airport's security (Ryanair's page still states 100 ml). Sources read 27 November 2026.
import json


def rw(p, old, new):
    s = open(p, encoding='utf8', newline='').read()
    if '\r\n' in s:
        old, new = old.replace('\n', '\r\n'), new.replace('\n', '\r\n')
    assert s.count(old) == 1, (p, old[:60], s.count(old))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(old, new))


RL = 'https://help.ryanair.com/hc/en-gb/articles/12890779032209-What-liquids-are-permitted-on-board'
RP = 'https://help.ryanair.com/hc/en-gb/articles/12890774807569-What-items-are-permitted-on-board'
RX = 'https://help.ryanair.com/hc/en-gb/articles/12890928594705-What-items-are-prohibited-on-board-and-in-Check-in-Bags'
DUB = 'https://www.dublinairport.com/at-the-airport/security/security-faqs'
SNN = 'https://www.snnairportgroup.ie/2026/shannon-airport-announces-enhancement-to-hand-luggage-rules/'
NOC = 'https://www.irelandwestairport.com/at-the-airport/security-customs/'
ORK = 'https://www.corkairport.com/at-the-airport/airport-security/how-to-prepare-for-security'
STN = 'https://www.stanstedairport.com/help/security/'
GOV = 'https://www.gov.uk/hand-luggage-restrictions/liquids'

js = r"""      if(airline==='Ryanair'&&carry){
        var frSrc=[{label:'Ryanair — What liquids are permitted on board?',url:'@RL'}].concat(cat==='alcohol'?[{label:'Ryanair — Permitted items (duty-free)',url:'@RP'},{label:'Ryanair — Prohibited items',url:'@RX'}]:[],
          [{label:'Dublin Airport — Security FAQs',url:'@DUB'},
          {label:'Shannon Airport — 100 ml limit lifted, 7 September 2026',url:'@SNN'},
          {label:'Ireland West Airport (Knock) — Security',url:'@NOC'},
          {label:'London Stansted Airport — Security',url:'@STN'}]);
        function FR(st,hd,ls){var r=R(st,hd,ls.filter(Boolean),"From Ryanair's help centre and the Dublin, Shannon, Knock and Stansted airport pages, checked 27 November 2026. Rules change, so confirm before you fly.");r.source=frSrc[0];r.sources=frSrc;r.airportMix=true;return r;}
        var frX=cat==='perfume'?'Perfume and aerosols count as liquids under the same rule.':(cat==='alcohol'?'Alcohol over 70% ABV is banned on Ryanair. A duty-free bag is allowed in the cabin with your cabin bags.':'Liquid medicine for the flight, and baby food and milk for an infant, may go over the limit.');
        if(ml===null)return FR('warn','Depends on your departure airport.',['Most airports, London Stansted among them: 100 ml or less per container, in one clear resealable bag of up to 1 litre.','Dublin, Shannon and Knock: airport security takes containers up to 2 litres.',"Ryanair's own liquids page still states 100 ml and points to the current EU security rules.",frX]);
        if(ml<=100)return FR('go','Yes - carry it on.',[ml+" ml is within Ryanair's 100 ml limit.",'Use one transparent resealable bag of up to 20 x 20 cm and 1 litre. Security at Dublin, Shannon and Knock no longer asks for the bag.',frX]);
        return FR('warn','Depends on your departure airport.',['Most airports, London Stansted among them: not through security, so pack it in your checked bag.','From Dublin, Shannon or Knock: security allows containers up to 2 litres, although the Ryanair liquids page still states 100 ml.','On the way back, the airport you leave from sets the limit.',frX]);
      }
"""
for k, v in (('@RL', RL), ('@RP', RP), ('@RX', RX), ('@DUB', DUB), ('@SNN', SNN), ('@NOC', NOC), ('@STN', STN)):
    js = js.replace(k, v)
rw('canitakethis.html', "      var LR=cat==='liquids'?LIQ_RULES[airline]:null;\n", js + "      var LR=cat==='liquids'?LIQ_RULES[airline]:null;\n")

p = 'topics_new.json'
raw = open(p, encoding='utf8', newline='').read()
d = json.loads(raw)
e = d['Ryanair']

q = e['liquids']
q['answer'] = ("Ryanair's liquids page states 100 ml per container, all in one transparent resealable bag of up to 20 x 20 cm and 1 litre, and ties this to the current EU security rules. "
               "Security at some airports now takes more: Dublin, Shannon and Knock allow containers of up to 2 litres, while Cork and London Stansted still apply 100 ml.")
s = q['sections'][0]
assert s['p'].startswith('From the Ryanair help centre article')
s['p'] = 'From the Ryanair help centre article "What liquids are permitted on board?", updated 26 November 2026 and read 27 November 2026.'
s['table']['rows'].append(["Duty-free", "The duty-free bag is permitted in the cabin along with your cabin bags (Ryanair, \"What items are permitted on board?\")"])
s['list'] = ["<strong>Not on the page:</strong> the liquids article names no airport with a higher limit and gives no rule for checked baggage."]
q['sections'].append({"h": "The airport you fly Ryanair from can change the limit",
    "p": "From each airport&rsquo;s own security page and the UK government&rsquo;s page on liquids in hand luggage, read 27 November 2026. These are airport and government rules, not Ryanair wording.",
    "table": {"head": ["Departing from", "At security"], "rows": [
        ["Dublin", "Any number of containers, none above 2 litres"],
        ["Shannon", "Up to 2 litres per container since 7 September 2026"],
        ["Ireland West (Knock)", "Up to 2 litres per container, no clear bag needed"],
        ["Cork", "Under 100 ml, in one clear resealable bag of at most 1 litre"],
        ["London Stansted", "Each liquid under 100 ml (page last updated September 2026)"],
        ["Other UK airports", "100 ml at most airports; the UK government says some may allow up to 2 litres"],
        ["Stansted, medicine over 100 ml", "Carry proof that it is prescribed to you"]]},
    "list": ["<strong>Round trips:</strong> the limit is set where you are screened, so a large bottle that left Dublin may not get through on the way back."]})
q['faq'] = [["How much liquid can I take in my Ryanair hand baggage?", "Ryanair states containers of at most 100 ml in one transparent resealable bag of up to 20 x 20 cm and 1 litre. Dublin, Shannon and Knock security allow containers up to 2 litres; Cork and London Stansted do not."],
            q['faq'][1]]
q['sources'] += [[RP, 'Ryanair &mdash; What items are permitted on board?'], [DUB, 'Dublin Airport &mdash; Security FAQs'], [SNN, 'Shannon Airport Group &mdash; Enhancement to hand luggage rules, 7 September 2026'],
                 [NOC, 'Ireland West Airport &mdash; Security and customs'], [ORK, 'Cork Airport &mdash; How to prepare for security'], [STN, 'London Stansted Airport &mdash; Security'], [GOV, 'GOV.UK &mdash; Hand luggage restrictions: liquids']]
q['checked'] = '27 November 2026'

q = e['perfume']
assert 'HTTP 403' in q['answer']
q['answer'] = ("Ryanair puts liquids, aerosols and gels under the current EU security rules and states 100 ml per container in one 1-litre bag, so that is the figure for perfume at most of its airports. "
               "Security at Dublin, Shannon and Knock takes containers up to 2 litres, and on UK flights toiletry sprays and perfume are also capped at 0.5 L each and 2 L in total.")
q['sections'][0]['p'] = "From the EU Your Europe page on luggage restrictions, read 17 November 2026. It is the general EU rule, which Ryanair's own liquids page points to; Dublin, Shannon and Knock security now allow larger containers."
q['sections'][1]['table']['rows'][-1] = ["Cabin liquids over 100 ml", "Not permitted through the security point, as the CAA page words it; the UK government says some airports may allow up to 2 litres"]
q['sections'].insert(0, {"h": "🧴 Perfume on Ryanair: the airline's line and the airport's line",
    "p": "From Ryanair&rsquo;s liquids article (updated 26 November 2026) and the airport security pages, read 27 November 2026.",
    "table": {"head": ["Who says it", "Perfume in hand luggage"], "rows": [
        ["Ryanair", "Liquids, aerosols and gels: no more than 100 ml per item, in the 1-litre bag"],
        ["Dublin, Shannon and Knock security", "Containers up to 2 litres go through"],
        ["Cork and London Stansted security", "100 ml remains the limit"]]}})
q['sources'] = [[RL, 'Ryanair &mdash; What liquids are permitted on board?'], [DUB, 'Dublin Airport &mdash; Security FAQs'], [SNN, 'Shannon Airport Group &mdash; Enhancement to hand luggage rules, 7 September 2026'],
                [NOC, 'Ireland West Airport &mdash; Security and customs'], [ORK, 'Cork Airport &mdash; How to prepare for security'], [STN, 'London Stansted Airport &mdash; Security'], [GOV, 'GOV.UK &mdash; Hand luggage restrictions: liquids']] + q['sources']
q['unofficial'] = False
q['checked'] = '27 November 2026'
open(p, 'w', encoding='utf8', newline='').write(json.dumps(d, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))

p = 'airline_topics1.js'
rw(p, 'desc: "Ryanair alcohol rules: a duty-free bag is allowed in the cabin with your cabin bags, alcohol stronger than 70% ABV is prohibited, and liquids follow the 100 ml rule.",',
      'desc: "Ryanair alcohol rules: a duty-free bag is allowed in the cabin with your cabin bags, alcohol over 70% ABV is prohibited, and the liquid limit depends on the airport.",')
rw(p, "Alcohol you bring from home counts as a liquid, so in hand luggage it must follow Ryanair's liquids rule.\",",
      "Alcohol you bring from home counts as a liquid: Ryanair states 100 ml per container, while security at Dublin, Shannon and Knock takes bottles up to 2 litres.\",")
rw(p, '["Liquids in hand luggage", "100 ml per container, in one clear resealable bag of up to 1 litre"] ] },',
      '["Liquids in hand luggage", "Ryanair: 100 ml per container, in one clear resealable bag of up to 1 litre"],\n            ["A bottle from home, departing Dublin, Shannon or Knock", "Airport security allows containers up to 2 litres"],\n            ["The same bottle at Cork or London Stansted", "Over 100 ml goes in your checked bag"] ] },')
rw(p, 'list: ["<strong>Source:</strong> the duty-free and 70% ABV rules are in section 8 of Ryanair\'s terms; the 100 ml liquids rule is on Ryanair\'s permitted liquids page."] }',
      'list: ["<strong>Source:</strong> the duty-free and 70% ABV rules are in section 8 of Ryanair\'s terms and its help centre; the 100 ml figure is on Ryanair\'s liquids page; the airport limits are on each airport\'s security page."] }')
rw(p, 'Other alcohol counts as a liquid and must be within 100 ml per container in one clear resealable bag."],',
      'Other alcohol counts as a liquid: 100 ml per container at most airports, up to 2 litres through security at Dublin, Shannon and Knock."],')
rw(p, 'sources: [["https://www.ryanair.com/gb/en/useful-info/help-centre/terms-and-conditions/termsandconditionsar_696869348", "Ryanair &mdash; General Terms &amp; Conditions of Carriage, section 8"]]\n    }\n  }\n};',
      'sources: [["%s", "Ryanair &mdash; What liquids are permitted on board?"], ["%s", "Ryanair &mdash; What items are permitted on board?"], ["%s", "Ryanair &mdash; What items are prohibited"], ["https://www.ryanair.com/gb/en/useful-info/help-centre/terms-and-conditions/termsandconditionsar_696869348", "Ryanair &mdash; General Terms &amp; Conditions of Carriage, section 8"], ["%s", "Dublin Airport &mdash; Security FAQs"], ["%s", "Shannon Airport Group &mdash; Enhancement to hand luggage rules, 7 September 2026"], ["%s", "Ireland West Airport &mdash; Security and customs"], ["%s", "Cork Airport &mdash; How to prepare for security"], ["%s", "London Stansted Airport &mdash; Security"]],\n      checked: "27 November 2026"\n    }\n  }\n};' % (RL, RP, RX, DUB, SNN, NOC, ORK, STN))

l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = '2026-11-27'
    l[k] = x


for c in ['liquids', 'perfume-aerosols', 'alcohol']:
    k = 'airline/ryanair/' + c
    lg(k, 'official', 'read 2026-11-27: Ryanair liquids article updated 26 November 2026 (help centre article feed), ' + RL)
    lg(k, 'official', 'read 2026-11-27: Dublin, Shannon, Knock, Cork and Stansted airport pages, ' + ' '.join([DUB, SNN, NOC, ORK, STN]))
lg('airline/ryanair/liquids', 'official', 'read 2026-11-27: GOV.UK liquids page, ' + GOV)
lg('airline/ryanair/alcohol', 'official', 'read 2026-11-27: Ryanair permitted and prohibited items articles, ' + RP + ' ' + RX)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for c in ['liquids', 'perfume-aerosols', 'alcohol']:
    ov['/airline/ryanair/%s/' % c] = '2026-11-27'
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
