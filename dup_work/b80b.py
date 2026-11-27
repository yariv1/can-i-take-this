# Batch 7 addition: Romania alcohol (moved up to 53% once its siblings changed)
import json

D = '2026-11-27'
RO = 'https://legislatie.just.ro/Public/DetaliiDocument/1534'
raw = open('country_unique.json', encoding='utf8', newline='').read()
u = json.loads(raw)
e = u['alcohol']['romania']
assert 'more' not in e
e['more'] = [{
    "h": "Where you may not drink in public in Romania",
    "p": ["Law 61/1991 on public order bans drinking alcohol on public roads, in parks, stadiums and sports grounds, in cultural venues and halls, in business premises and other institutions, on all public transport, and at bus stations, railway stations and airports.",
          "A place on that list may set aside a marked drinking area, and restaurants, bars and clubs are exempt. Under-18s may not drink there at all.",
          "The fine for drinking where it is banned is 100 to 500 lei."],
    "src": "Official source read 27 November 2026: Law 61/1991, article 2 point 23 and article 3, consolidated text with amendments up to June 2026 on legislatie.just.ro (in Romanian, translated by us), in the Internet Archive copy because the live site did not open for us.",
    "side": True,
    "link": [RO, "legislatie.just.ro: Law 61/1991 (in Romanian)"]}]
open('country_unique.json', 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
x = l.get('country/romania/alcohol') or {}
x.setdefault('official', []).append('read 2026-11-27: Law 61/1991 (Wayback copy of legislatie.just.ro), ' + RO)
x['date'] = D
l['country/romania/alcohol'] = x
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
ov['/country/romania/alcohol/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
