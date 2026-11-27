# Batch 6 fixes: mark the dated WHO indoor row where a newer rule exists; tidy "Source: Unofficial source:" wording
def sub(p, a, b):
    s = open(p, encoding='utf8', newline='').read()
    assert s.count(a) == 1, (p, a, s.count(a))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(a, b))


sub('country_vape.js', "  list.push('<strong>On the plane:</strong>", "  if (OV) list.push('<strong>Indoor row out of date:</strong> a newer national rule on where you may vape is set out below.');\n  list.push('<strong>On the plane:</strong>")
sub('topics_new.json', '>Unofficial source: La Prensa (in Spanish)</a>', '>La Prensa, unofficial (in Spanish)</a>')
sub('topics_new.json', '>Unofficial source: The Points Guy on airlines that do not serve alcohol</a>', '>The Points Guy, unofficial: airlines that do not serve alcohol</a>')
sub('dup_work/b79.py', "link(PA, \"Unofficial source: La Prensa (in Spanish)\")", "link(PA, \"La Prensa, unofficial (in Spanish)\")")
import json
raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
ov['/airline/egyptair/alcohol/'] = '2026-11-27'
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
