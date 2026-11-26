# Picking wild plants: Czechia (government portal) and Lithuania (public broadcaster quoting the environment department), read 26 November 2026
import json

p = 'country_unique.json'
raw = open(p, encoding='utf8', newline='').read()
u = json.loads(raw)

def more(cn, m):
    e = u['plants'][cn]
    assert 'more' not in e
    e['more'] = [m]

CZ = 'https://portal.gov.cz/sluzby-vs/vyjimky-ze-zakazu-u-zvlaste-chranenych-druhu-S7529'
more('czechia', {"h": "Specially protected plants in Czechia",
    "p": ["The Czech government portal says specially protected plants are protected in all their underground and above-ground parts and at every stage of growth, and so is their habitat. It is forbidden to collect, pick, dig up, damage, destroy or disturb them.",
          "It is also forbidden to keep, grow, transport, sell, exchange or offer them. The protection does not apply to a specially protected plant growing in an artificially grown culture. Anything banned needs an exception from the nature protection authority, even for dead plants or parts of them."],
    "src": "Official source read 26 November 2026: Portal veřejné správy (the Czech government portal), \"Výjimky ze zákazů u zvláště chráněných druhů\" (in Czech, translated by us).",
    "link": [CZ, "Czech government portal: exceptions from the bans for specially protected species (in Czech)"]})

LT = 'https://www.lrt.lt/naujienos/laisvalaikis/13/1388586/klausiate-atsakome-miskus-nuklojo-zibuokliu-patalai-ar-jas-galima-skinti-ir-issikasti'
more('lithuania', {"h": "Picking wild flowers in Lithuania",
    "p": ["Public broadcaster LRT, quoting the Environmental Protection Department under the Environment Ministry, reports a list of restricted wild plants from 2000: picking and selling the flowers of all water lilies and all pasqueflowers is banned, as is uprooting or destroying globeflower, martagon lily, snowdrop anemone, cowslip and large yellow foxglove. Picking, uprooting or selling any clubmoss is banned too.",
          "Plants that are neither on that list nor protected, such as liverleaf, may be picked. When digging plants up for the garden or for propagation, at least half must be left undamaged (not on farmland), and digging is banned on slopes steeper than 10 degrees. The report dates from April 2021."],
    "src": "Unofficial source read 26 November 2026: LRT.lt, \"Klausiate – atsakome\" (18 April 2021, in Lithuanian, translated by us). The official legal database refused our reader.",
    "unofficial": True,
    "link": [LT, "LRT.lt: may you pick and dig up liverleaf? (in Lithuanian)"]})
out = json.dumps(u, ensure_ascii=False, separators=(',', ':'))
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = '2026-11-26'
    l[k] = x
lg('country/czechia/plants-seeds', 'official', 'read 2026-11-26: Czech government portal, specially protected species, ' + CZ)
lg('country/lithuania/plants-seeds', 'official', 'tried 2026-11-26: e-seimas consolidated text HTTP 403; am.lrv.lt HTTP 403')
lg('country/lithuania/plants-seeds', 'reliable', 'read 2026-11-26: LRT.lt 2021-04-18 quoting the Environmental Protection Department, ' + LT)
lg('country/portugal/plants-seeds', 'official', 'tried 2026-11-26: gov.pt wild-plant licence page HTTP 404 (curl and browser pane)')
lg('country/cyprus/plants-seeds', 'official', 'tried 2026-11-26: Department of Forests: only a nature-monument flyer reachable, no picking rule')
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for c in ['czechia', 'lithuania']:
    ov['/country/%s/plants-seeds/' % c] = '2026-11-26'
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
