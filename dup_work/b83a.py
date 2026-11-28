# Batch 10, part 1: airline cards that contradicted the airline's own rule (vape, perfume, alcohol); app links to the rule page
import json

p = 'canitakethis.html'
s = open(p, encoding='utf8', newline='').read()
nl = '\r\n' if '\r\n' in s else '\n'


def sub(a, b, n=1):
    global s
    a, b = a.replace('\n', nl), b.replace('\n', nl)
    assert s.count(a) == n, (a[:70], s.count(a))
    s = s.replace(a, b)


def rule(label, url, chk, c=None, h=None, **kw):
    d = {"label": label, "url": url, "chk": chk}
    if c:
        d['c'] = c
    if h:
        d['h'] = h
    d.update(kw)
    return d


VN = ['stop', 'No - not accepted at all.', ['Vietnam Airlines does not accept e-cigarettes, heated tobacco devices or other vaporizers for transport under any circumstances.']]
IG = ['stop', 'No - not in any bag.', ['IndiGo does not allow e-cigarettes in hand baggage or checked baggage.', 'Its conditions say they may not be taken out of or brought into India, and it can refuse carriage.']]
AI = ['stop', 'No - prohibited.', ['Air India lists e-cigarettes, personal vaporizers, heat-not-burn products and similar devices as prohibited.']]
CARD = {
    'vape|Vietnam Airlines': rule('Vietnam Airlines — Cigarettes and electronic cigarettes', 'https://www.vietnamairlines.com/vn/en/travel-information/baggage/restricted-baggage/cigarette-and-electronic-cigarette', '18 October 2026', VN, VN),
    'vape|IndiGo': rule('IndiGo — Conditions of Carriage (clause 15.5)', 'https://www.goindigo.in/information/conditions-of-carriage.html', '18 October 2026', IG, IG),
    'vape|Air India': rule('Air India — Restricted baggage and prohibited items', 'https://www.airindia.com/in/en/travel-information/baggage-guidelines/restricted-baggage.html', '18 October 2026', AI, AI),
    'vape|LATAM': rule('LATAM — Can I bring cigarettes in my baggage?', 'https://www.latamairlines.com/es/en/help-center/faq/baggage/restricted-articles/cigarettes', '14 November 2026',
                       ['warn', 'Cabin only - not to Brazil.', ['LATAM allows e-cigarettes in the cabin, except on international flights to Brazil.']],
                       ['stop', 'No - never in the hold.', ['LATAM prohibits e-cigarettes in checked baggage on every route.']]),
    'vape|GOL': rule('Panrotas — vapes on domestic and international flights in Brazil (22 July 2024)', 'https://www.panrotas.com.br/aviacao/empresas/2024/07/anac-proibe-transporte-de-vape-em-voos-internacionais-e-libera-no-domestico_207418.html', '14 November 2026',
                     ['warn', 'Domestic yes, to Brazil no.', ['Panrotas reported in July 2024 that personal vapes may go in hand luggage on domestic flights, but not on international flights to Brazil.', 'The report does not name GOL, so ask the airline.']], un=True),
    'vape|Virgin Atlantic': rule('Virgin Atlantic — Dangerous or restricted items', 'https://www.virginatlantic.com/en-US/policies/dangerous-or-restricted-items', '8 October 2026',
                                 ['warn', 'Cabin only - banned on some routes.', ['One per person, in hand baggage, never used on board.', 'Not permitted on flights to or from India or in the Maldives; illegal to bring into Mexico and Thailand.']]),
    'vape|Air France': rule('Air France — Lighters, electronic cigarettes and replacement batteries', 'https://wwws.airfrance.co.il/information/bagages/popin_produits-interdits-et-reglementes/produits-interdits-et-reglementes-2', '18 October 2026',
                            ['warn', 'Cabin only - banned under Indian rules.', ['On your person and completely switched off; no use or charging in flight.', 'Air France says e-cigarettes are strictly prohibited under Indian regulations.']]),
    'perfume|Kenya Airways': rule('Kenya Airways — Baggage restrictions', 'https://www.kenya-airways.com/en/plan/baggage-information/baggage-restrictions/', '28 November 2026',
                                  ['stop', 'No - check it in.', ['Kenya Airways lists aerosols, naming hair sprays and perfumes, among items not allowed in hand baggage.', 'Items found at the gate may be removed and not returned.']],
                                  ['go', 'Yes - in your checked bag.', ['Each article 0.5 kg or 0.5 L at most, 2 kg or 2 L in total.']]),
    'perfume|Volaris': rule('Volaris — Restricted and forbidden items', 'https://cms.volaris.com/en/travel-info/baggage-policy/restricted-and-forbidden-items/', '8 October 2026',
                            ['warn', 'Bottles to 100 ml; sprays checked.', ['Liquids in containers over 100 ml may not go in carry-on.', 'Volaris lists personal care and hygiene aerosols as checked baggage only.']], small=True),
    'perfume|Frontier': rule('Frontier — Bag options', 'https://www.flyfrontier.com/travel/travel-info/bag-options/?mobile=true', '17 November 2026',
                             h=['warn', 'Not aerosol sprays.', ['Frontier lists aerosols among the items prohibited in checked bags.', 'Carry hairspray and spray perfume on, in containers of 100 ml or less.']]),
}

sub("'Volaris': ", "'Volaris': ", 0) if False else None
i = s.index('var ALC_RULES=') + len('var ALC_RULES=')
j = s.index(';' + nl + 'var LIQ_RULES={', i)
alc = json.loads(s[i:j])
alc['Avianca'] = rule('Avianca — Food and drinks in baggage', 'https://ayuda.avianca.com/hc/en-us/articles/13083099344667-Can-I-carry-food-and-drinks-in-my-baggage', '28 November 2026',
                      ['warn', 'Depends on your route.', ['Domestic flights: up to 5 L per passenger in carry-on, no bottle above 70%.', 'International flights: check the origin and destination countries first.']],
                      ['stop', 'No - not in checked bags.', ['Avianca says bottled alcoholic beverages are not permitted in checked baggage.']])
s = s[:i] + json.dumps(alc, ensure_ascii=False, separators=(',', ':')) + s[j:]

sub('var LIQ_RULES={', 'var CARD_RULES=' + json.dumps(CARD, ensure_ascii=False, separators=(',', ':')) + ';\nvar LIQ_RULES={')
sub("      var AR=cat==='alcohol'?ALC_RULES[airline]:null;\n"
    "      if(AR){\n"
    "        var av=carry?AR.c:AR.h,ar=R(av[0],av[1],av[2],'From '+airline+\"'s own published rules, checked \"+AR.chk+'. Rules change, so confirm with the airline before you fly.');\n"
    "        ar.source={label:AR.label,url:AR.url,sub:'Alcohol rules'};ar.sources=[ar.source];return ar;\n"
    "      }\n",
    "      var own=cardRule(cat,airline,carry,ml);\n"
    "      if(own)return own;\n")
sub("    if(cat==='vape')return carry?R(", "    var vown=cat==='vape'?cardRule(cat,airline,carry,null):null;\n    if(vown)return vown;\n    if(cat==='vape')return carry?R(")
sub('function verdict(){\n  var mode=S.mode,',
    "function cardRule(cat,airline,carry,ml){\n"
    "  var A=cat==='alcohol'?ALC_RULES[airline]:CARD_RULES[cat+'|'+airline];\n"
    "  var v=A&&(carry?A.c:A.h);\n"
    "  if(!v||(carry&&A.small&&ml!==null&&ml>100))return null;\n"
    "  var r=R(v[0],v[1],v[2],(A.un?'Not taken from '+airline+\"'s own pages, checked \":'From '+airline+\"'s own published rules, checked \")+A.chk+'. Rules change, so confirm with the airline before you fly.');\n"
    "  r.source={label:A.label,url:A.url,sub:'Airline rules'};r.sources=[r.source];r.ownSrc=true;return r;\n"
    "}\n"
    'function verdict(){\n  var mode=S.mode,')
# the home app links the rule page itself, not the airline's front page
sub('r.source={label:LR.label,url:LR.url,sub:\'Liquids rules\'};r.sources=[r.source];return r;}', 'r.source={label:LR.label,url:LR.url,sub:\'Liquids rules\'};r.sources=[r.source];r.ownSrc=true;return r;}')
sub("r.source={label:airline+' power bank rules',url:PR.url};r.sources=[r.source];return r;}", "r.source={label:airline+' power bank rules',url:PR.url};r.sources=[r.source];r.ownSrc=true;return r;}")
sub('(v.airportMix?helpBlock(v.sources,true):helpBlock(v.source))', '((v.airportMix||v.ownSrc)?helpBlock(v.sources,true):helpBlock(v.source))')
sub("  if(S.mode==='plane'&&v.status!=='nomatch')return '<b class=\"src-ok\">",
    "  if(S.mode==='plane'&&v.ownSrc&&v.sources.every(function(a){return srcUn(a.url,a.label);}))return '<b class=\"src-un\">⚠ UNOFFICIAL SOURCE</b> The rule above is taken from an unofficial source. To be more sure and learn further, please check the links placed here above. '+base;\n"
    "  if(S.mode==='plane'&&v.status!=='nomatch')return '<b class=\"src-ok\">")
open(p, 'w', encoding='utf8', newline='').write(s)

D = '2026-11-28'
PAGES = ['vietnam-airlines/vape-e-cigarette', 'indigo/vape-e-cigarette', 'air-india/vape-e-cigarette', 'latam/vape-e-cigarette', 'gol/vape-e-cigarette', 'virgin-atlantic/vape-e-cigarette', 'air-france/vape-e-cigarette',
         'kenya-airways/perfume-aerosols', 'volaris/perfume-aerosols', 'frontier/perfume-aerosols', 'avianca/alcohol']
l = json.load(open('ladder_log.json', encoding='utf8'))
for k in PAGES:
    x = l.get('airline/' + k) or {}
    x.setdefault('reliable' if k.startswith('gol/') else 'official', []).append('read 2026-11-28: card aligned with the rule quoted on the page')
    x['date'] = D
    l['airline/' + k] = x
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))
raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for k in PAGES:
    ov['/airline/' + k + '/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
