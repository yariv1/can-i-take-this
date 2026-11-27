# Aer Lingus cabin liquids depend on the departure airport (Dublin and Shannon 2 litres, Cork 100 ml). Sources read 27 November 2026.
import json

def rw(p, old, new):
    s = open(p, encoding='utf8', newline='').read()
    if '\r\n' in s:
        old, new = old.replace('\n', '\r\n'), new.replace('\n', '\r\n')
    assert s.count(old) == 1, (p, old[:60], s.count(old))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(old, new))

DUB = 'https://www.dublinairport.com/at-the-airport/security/carry-on-baggage'
SNN = 'https://www.snnairportgroup.ie/2026/shannon-airport-announces-enhancement-to-hand-luggage-rules/'
ORK = 'https://www.corkairport.com/at-the-airport/airport-security/how-to-prepare-for-security'
EUL = 'https://www.aerlingus.com/media/pdfs/eu-liquids-jan2014.pdf'
DGR = 'https://www.aerlingus.com/media/pdfs/guide-to-dangerous-goods.pdf'
DA = 'https://deeparrival.com/news/cork-airport-new-security-area-ct-scanners-liquids-december-2026/'

js = """      if(airline==='Aer Lingus'&&carry){
        var eiSrc=[cat==='liquids'?{label:'Aer Lingus EU liquids guide (PDF, 2014)',url:'%s'}:{label:'Aer Lingus \\u2014 Guide to Dangerous Goods',url:'%s'},
          {label:'Dublin Airport \\u2014 Carry-on baggage',url:'%s'},
          {label:'Shannon Airport \\u2014 100 ml limit lifted, 7 September 2026',url:'%s'},
          {label:'Cork Airport \\u2014 Preparing for security',url:'%s'}];
        function EI(st,hd,ls){var r=R(st,hd,ls.filter(Boolean),"From Aer Lingus's own guide and the Dublin, Shannon and Cork airport pages, checked 27 November 2026. Rules change, so confirm before you fly.");r.source=eiSrc[0];r.sources=eiSrc;r.airportMix=true;return r;}
        var eiX=cat==='perfume'?'Aer Lingus caps toiletry and medicinal items, aerosols included, at 0.5 L each and 2 L in total.':(cat==='alcohol'?'Drinks above 24%% and up to 70%% alcohol: 5 L per person, in retail packaging.':'Medicines and baby food needed for the trip are allowed in larger amounts.');
        if(ml===null)return EI('warn','Depends on your departure airport.',['Dublin and Shannon: containers up to 2 litres.','Cork: 100 ml or less, in one clear 1-litre bag.',eiX]);
        if(ml<=100)return EI('go','Yes - carry it on.',[ml+' ml is allowed from Dublin, Shannon and Cork.','At Cork, put it in one clear resealable 1-litre bag and show it at security. Dublin no longer needs the bag.',eiX]);
        return EI('warn','Depends on your departure airport.',['From Dublin or Shannon: containers up to 2 litres can go in your hand luggage.','From Cork: 100 ml is still the limit, so pack it in your checked bag.','Flying back or connecting: the airport you leave from sets the limit, and many still use 100 ml.',eiX]);
      }
""" % (EUL, DGR, DUB, SNN, ORK)
rw('canitakethis.html', "      var LR=cat==='liquids'?LIQ_RULES[airline]:null;\n", js + "      var LR=cat==='liquids'?LIQ_RULES[airline]:null;\n")

# airline page builder: show every source of such a card, with a footer that names airline and airport pages
rw('build.js', "PSRCL=PSRC?[PSRC]:", "PMIX=!!(v&&v.airportMix);PSRCL=PSRC?(PMIX?v.sources:[PSRC]):")
rw('build.js', "  var PSRCL=null;\n", "  var PSRCL=null;\n  var PMIX=false;\n")
rw('build.js', "if(PSRCL) return '<b class=\"src-ok\">✓ OFFICIAL SOURCE</b> '+esc('The rule above is from the official airline rules.",
   "if(PSRCL&&PMIX) return '<b class=\"src-ok\">✓ OFFICIAL SOURCE</b> '+esc('The rule above is from official airline and airport pages. To be more sure and learn further, please check the links placed here above. '); if(PSRCL) return '<b class=\"src-ok\">✓ OFFICIAL SOURCE</b> '+esc('The rule above is from the official airline rules.")

p = 'topics_new.json'
raw = open(p, encoding='utf8', newline='').read()
d = json.loads(raw)
e = d['Aer Lingus']

q = e['liquids']
q['answer'] = ("It depends on the airport you leave from. Dublin and Shannon let you take containers of up to 2 litres in hand luggage; Cork still applies 100 ml in one clear 1-litre bag. "
               "Aer Lingus's own liquids guide, written before these changes, states the 100 ml rule.")
assert q['sections'][0]['list'][0].startswith('<strong>Out of date for Dublin')
q['sections'][0]['list'] = ["<strong>Out of date for Dublin and Shannon:</strong> these Aer Lingus pages were written before those airports changed. The Aer Lingus restricted items page, read 27 November 2026, still links the 2014 EU liquids guide."]
q['sections'].append({"h": "Shannon and Cork: two different limits",
    "p": "From the Shannon Airport Group release of 7 September 2026 and Cork Airport&rsquo;s page on preparing for security, both read 27 November 2026. These are the airport operators&rsquo; rules, not Aer Lingus wording.",
    "table": {"head": ["Departing from", "Hand luggage rule"], "rows": [
        ["Shannon", "Liquids, aerosols and gels in containers of up to 2 litres, in place of the 100 ml limit"],
        ["Cork", "The 100 ml rule still applies: containers under 100 ml in one clear resealable bag of at most 1 litre, shown separately"],
        ["Cork, travelling with a baby", "As much formula, milk and snacks as the flight requires"],
        ["Return journey", "Shannon says other airports may apply different requirements, so check the one you leave from"]]},
    "list": ["<strong>Coming at Cork:</strong> an unofficial report (Deep Arrival, citing Travel Extra and the Irish Examiner) says a new security area with CT scanners opens in early December 2026. Until Cork Airport changes its page, pack to 100 ml."]})
q['faq'][0][1] = "From Dublin or Shannon, containers of up to 2 litres can go in hand luggage. From Cork, containers of 100 ml or less in one clear resealable bag of at most 1 litre. At other airports, check that airport."
for s in q['sources']:
    if s[0].startswith('https://www.dublinairport.com/latest-news'):
        s[1] = 'Dublin Airport &mdash; Security rules eased, 17 September 2025'
q['sources'] += [[DUB, 'Dublin Airport &mdash; Carry-on baggage'], [SNN, 'Shannon Airport Group &mdash; Enhancement to hand luggage rules, 7 September 2026'],
                 [ORK, 'Cork Airport &mdash; How to prepare for security'], [DA, 'Unofficial source: Deep Arrival &mdash; Cork Airport new security hall']]
q['checked'] = '27 November 2026'

q = e['perfume']
assert q['sections'][1]['list'][0].startswith('<strong>What this means:')
q['sections'][1]['list'] = ["<strong>What this means:</strong> from an airport that applies 100 ml, such as Cork, a bigger perfume goes in your checked bag unless you buy it after security and keep it sealed with the receipt. From Dublin and Shannon, containers of up to 2 litres can go through security, but the Aer Lingus limits of 0.5 L per item and 2 L in total still apply."]
q['faq'][2][1] = "From Dublin or Shannon a perfume bottle can be larger than 100 ml, up to Aer Lingus's 0.5 L per item. Where 100 ml applies, such as Cork, duty-free perfume must stay in its sealed security bag with the receipt, and other larger bottles go in checked luggage."
q['sources'] += [[DUB, 'Dublin Airport &mdash; Carry-on baggage'], [SNN, 'Shannon Airport Group &mdash; Enhancement to hand luggage rules, 7 September 2026'],
                 [ORK, 'Cork Airport &mdash; How to prepare for security']]
q['checked'] = '27 November 2026'

q = e['alcohol']
s = q['sections'][1]
old = "and other airports still use the 100 ml rule."
assert old in s['p']
s['p'] = s['p'].replace(old, "and many other airports, Cork among them, still use the 100 ml rule (Shannon lifted it on 7 September 2026).")
q['sources'] += [[SNN, 'Shannon Airport Group &mdash; Enhancement to hand luggage rules, 7 September 2026'], [ORK, 'Cork Airport &mdash; How to prepare for security']]
open(p, 'w', encoding='utf8', newline='').write(json.dumps(d, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = '2026-11-27'
    l[k] = x
for c in ['liquids', 'perfume-aerosols', 'alcohol']:
    k = 'airline/aer-lingus/' + c
    lg(k, 'official', 'read 2026-11-27: Aer Lingus restricted items page (browser pane; no new liquids wording, links the 2014 guide), https://www.aerlingus.com/prepare/bags/restricted-items/')
    lg(k, 'official', 'read 2026-11-27: Dublin, Shannon and Cork airport pages, ' + DUB + ' ' + SNN + ' ' + ORK)
lg('airline/aer-lingus/liquids', 'reliable', 'read 2026-11-27: Deep Arrival on the new Cork security area, ' + DA)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for c in ['liquids', 'perfume-aerosols', 'alcohol']:
    ov['/airline/aer-lingus/%s/' % c] = '2026-11-27'
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
