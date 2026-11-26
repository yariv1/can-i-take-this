# put the shared source rule into the home app, and mark the two power-bank pages that rest on FAA/ICAO as unofficial
import json, subprocess

fn = subprocess.run(['node', '-e', "process.stdout.write(require('./source_kind.js').clientFn())"], capture_output=True, text=True, encoding='utf8', check=True).stdout
assert fn.startswith('var THIRD_PARTY=')
p = 'canitakethis.html'
s = open(p, encoding='utf8', newline='').read()
mark = '/*SRCUN*//*ENDSRCUN*/'
assert s.count(mark) == 1
s = s.replace(mark, '/*SRCUN*/' + fn + '/*ENDSRCUN*/')
open(p, 'w', encoding='utf8', newline='').write(s)

p = 'topics_new.json'
raw = open(p, encoding='utf8', newline='').read()
d = json.loads(raw)
for a in ['Middle East Airlines', 'United']:
    d[a]['power']['unofficial'] = True
open(p, 'w', encoding='utf8', newline='').write(json.dumps(d, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))
print('ok', len(fn))
