# Batch 5 fixes: links that do not answer the card stay inside their section; the stale "official customs site could not be read" line goes where the card is official
import json, re, os

# ---------------- airline links
raw = open('topics_new.json', encoding='utf8', newline='').read()
t = json.loads(raw)


def link(url, label):
    return '<a href="' + url + '" target="_blank" rel="noopener">' + label + '</a>'


for a, drop in [('EgyptAir', ['Conditions-of-Carriage', 'thepointsguy']), ('Lufthansa', ['onboard-delights'])]:
    e = t[a]['alcohol']
    moved = [s for s in e['sources'] if any(d in s[0] for d in drop)]
    assert len(moved) == len(drop), (a, moved)
    e['sources'] = [s for s in e['sources'] if s not in moved]
    sec = e['sections'][0] if a == 'EgyptAir' else e['sections'][-1]
    sec['list'] = sec.get('list', []) + ['Source: ' + link(s[0], s[1]) for s in moved]
open('topics_new.json', 'w', encoding='utf8', newline='').write(json.dumps(t, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))

# ---------------- stale sentence
raw = open('country_unique.json', encoding='utf8', newline='').read()
u = json.loads(raw)
DIR = {'plants': 'plants-seeds', 'vape': 'vaping'}
STALE = ' The official customs site could not be read.'
done = []
for cat, v in u.items():
    for c, e in v.items():
        if not isinstance(e, dict) or STALE not in e.get('src', ''):
            continue
        p = 'country/%s/%s/index.html' % (c, DIR.get(cat, cat))
        if not os.path.exists(p):
            continue
        s = open(p, encoding='utf8').read()
        card = s[s.find('<div class="pass '):s.find('<div class="bd-wrap">')]
        if 'OFFICIAL SOURCE' in card and 'UNOFFICIAL SOURCE' not in card:
            e['src'] = e['src'].replace(STALE, ' The card above comes from the official page linked under it.')
            done.append(p)
open('country_unique.json', 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + ('\n' if raw.endswith('\n') else ''))
ov_raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(ov_raw)
for p in done:
    ov['/' + p.replace('index.html', '')] = '2026-11-27'
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in ov_raw else out + ('\n' if ov_raw.endswith('\n') else ''))
print(len(done)); print('\n'.join(done))
