# Batch 8 addition: Qatar Airways perfume (moved to 53% once its siblings changed)
import json
D = '2026-11-28'
H = 'https://dohahamadairport.com/airport-guide/at-the-airport/security-customs'
raw = open('topics_new.json', encoding='utf8', newline='').read()
t = json.loads(raw)
e = t['Qatar Airways']['perfume']
e['sections'].append({"h": "🛬 Perfume when you change planes in Doha",
    "p": "From Hamad International Airport’s security and customs page, read 28 November 2026. It is the airport’s rule, not a Qatar Airways page.",
    "list": ["Departing from Doha: liquid containers go in a clear resealable bag, each 100 ml or less.",
             "Transferring: your hand baggage is screened again, and the resealable bag for personal liquids holds at most 1 litre.",
             "Duty-free perfume over 100 ml bought at another airport must be sealed in a tamper-evident bag with the receipt, or it is confiscated at the transfer check.",
             "Source: <a href=\"" + H + "\" target=\"_blank\" rel=\"noopener\">Hamad International Airport: Security and customs (unofficial for Qatar Airways)</a>"]})
e['faq'] = e.get('faq', []) + [["Will my duty-free perfume get through a Doha connection?", "Only if a bottle over 100 ml bought at another airport is still sealed in its tamper-evident bag with the receipt."]]
out = json.dumps(t, ensure_ascii=False, indent=1)
if '\r\n' in raw: out = out.replace('\n', '\r\n')
open('topics_new.json', 'w', encoding='utf8', newline='').write(out + (('\r\n' if '\r\n' in raw else '\n') if raw.endswith('\n') else ''))
l = json.load(open('ladder_log.json', encoding='utf8'))
k = 'airline/qatar-airways/perfume-aerosols'
x = l.get(k) or {}
x.setdefault('reliable', []).append('read 2026-11-28: ' + H)
x['date'] = D; l[k] = x
r = open('ladder_log.json', encoding='utf8', newline='').read()
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1) + ('\n' if r.endswith('\n') else ''))
r = open('lastmod_overrides.json', encoding='utf8', newline='').read()
o = json.loads(r); o['/' + k + '/'] = D
out = json.dumps(o, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in r else out + ('\n' if r.endswith('\n') else ''))
print('ok')
