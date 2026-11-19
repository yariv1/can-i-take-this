import json, re, sys
ROOT = 'C:/Users/yariv/Utility Website/can-i-take-this/'
CLEAN = sys.argv[1]
def rd(f, enc='utf8'): return json.loads(open(f, encoding=enc).read())
prev = rd(CLEAN)
X = rd(ROOT + 'vape_extra.json')
L = rd(ROOT + 'ladder_log.json')
who23 = rd(ROOT + 'country_vape_who.json')['c']; who25 = rd(ROOT + 'country_vape_who_2025.json')['c']
idx = open(ROOT + 'index.html', encoding='utf8').read()
names = dict((c, n) for n, c in re.findall(r"\{name:'([^']+)',code:'([A-Z]{2})'", idx))
SKIP_JS = {'EG', 'TR'}  # entries kept in country_vape_extra.js

def cleanhead(h):
    h = re.split(r' \.\.\.| \. | \.\.', h)[0]
    h = re.sub(r' \d+\.\d.*$', '', h).strip()
    return h

def parse(h):
    h = cleanhead(h)
    if ';' not in h: return None
    survey, rest = h.split(';', 1)
    survey = survey.strip()
    m = re.search(r'ages (.+)$', rest.strip())
    ages = m.group(1).strip() if m else None
    scope = rest.split(',')[0].strip()
    if not ages: return None
    return survey, scope.lower(), ages

def pct(v): return v + '%'

def kindrows(kind, r, cn):
    p = parse(r['head'])
    if not p: return None
    survey, scope, ages = p
    who = 'adults' if kind == 'adult' else 'adolescents'
    rows = [[('Adult' if kind == 'adult' else 'Adolescent') + ' survey', survey + ' (' + scope + ', ages ' + ages + ')']]
    parts = pct(r['cur']) + ' of ' + who + ' currently use e-cigarettes'
    mf = []
    if r.get('male'): mf.append('men ' + pct(r['male']) if kind == 'adult' else 'boys ' + pct(r['male']))
    if r.get('female'): mf.append('women ' + pct(r['female']) if kind == 'adult' else 'girls ' + pct(r['female']))
    rows.append(['E-cigarette use, current', pct(r['cur']) + (' (' + ', '.join(mf) + ')' if mf else '')])
    if r.get('daily'): rows.append(['E-cigarette use, daily', pct(r['daily'])])
    if r.get('cig'): rows.append(['Cigarette smoking, current', pct(r['cig'])])
    faq = parts + (' (' + ', '.join(mf) + ')' if mf else '') + (', and ' + pct(r['daily']) + ' use them daily' if r.get('daily') else '') + ' in the survey "' + survey + '" (' + scope + ', ages ' + ages + ').'
    return rows, faq

added = []
for code in sorted(prev):
    if code in SKIP_JS or code not in names: continue
    d = prev[code]
    cn = names[code]
    D = who25.get(code) or who23.get(code)
    yr = '2025' if code in who25 else '2023'
    rows = []; faqs = []
    for kind in ('adult', 'youth'):
        r = d.get(kind)
        if not r or not r.get('cur'): continue
        kr = kindrows(kind, r, cn)
        if not kr: continue
        rows += kr[0]; faqs.append(kr[1])
    if not rows: continue
    sec = {'h': '📊 How common vaping is in ' + cn + ', per the WHO survey figures',
           'p': 'From the same WHO report on the global tobacco epidemic ' + yr + ', country profile for ' + cn + ', table "Tobacco use prevalence from the latest survey". These are survey results, not a law or a customs rule, and each survey has its own age group.',
           'table': {'head': ['Item', 'What the WHO profile lists for ' + cn], 'rows': rows},
           'list': ['<strong>How to read it:</strong> "current" means the survey&rsquo;s own definition of current use; WHO prints the surveys&rsquo; figures as published and does not harmonise them.']}
    e = X.get(code)
    if e is None:
        e = X[code] = {'sections': [], 'faq': [], 'src': [], 'keepSchema': True}
    if any('How common vaping' in s['h'] for s in e['sections']): continue
    e['sections'].append(sec)
    e['faq'].append(['How common is vaping in ' + cn + '?', ' '.join(('Adults: ' if f.startswith(tuple('0123456789')) and 'of adults' in f else 'Adolescents: ') + f for f in faqs)])
    if len(e['faq']) < 2: e['faq'].append(['What does WHO list for e-cigarette use in ' + cn + '?', faqs[0]])
    k = 'country/' + cn.lower().replace(' ', '-') + '/vaping'
    entry = L.get(k) or {'official': [], 'reliable': [], 'other': [], 'date': '2026-11-19'}
    note = 'read 2026-11-19: WHO country profile PDF (downloaded, pdftotext), table of tobacco use prevalence from the latest survey (e-cigarette use rows)'
    if note not in entry['reliable']: entry['reliable'].append(note)
    if not entry['official']: entry['official'] = ['no national page needed for this section: WHO profile table read']
    entry['date'] = '2026-11-19'
    L[k] = entry
    added.append(code)

open(ROOT + 'vape_extra.json', 'w', encoding='utf8', newline='').write(json.dumps(X, indent=1, ensure_ascii=False))
open(ROOT + 'ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(L, indent=1, ensure_ascii=False).replace('\n', '\r\n'))
print('sections added for', len(added), ':', ' '.join(added))
