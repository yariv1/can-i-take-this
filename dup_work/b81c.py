# Batch 8 fix: where a newer national law overrides WHO, the WHO profile stays on the page but is no longer the card's source
p = 'country_vape.js'
s = open(p, encoding='utf8', newline='').read()
def sub(a, b):
    global s
    assert s.count(a) == 1, (a, s.count(a))
    s = s.replace(a, b)
a = """'<div class="bd-src"><div class="h">✓ Official source</div><a href="' + D.pdf + '" target="_blank" rel="noopener noreferrer">WHO report on the global tobacco epidemic ' + (N25 ? '2025' : '2023') + ': country profile, ' + esc(cn) + '</a>' + (X"""
b = """'<div class="bd-src"><div class="h">✓ Official source</div>' + (XO.lead ? '' : whoLink) + (X"""
sub(a, b)
sub("""  if (XO.age) list.push(""", """  const whoLink = '<a href="' + D.pdf + '" target="_blank" rel="noopener noreferrer">WHO report on the global tobacco epidemic ' + (N25 ? '2025' : '2023') + ': country profile, ' + esc(cn) + '</a>';
  if (XO.lead) list.push('Source: ' + whoLink);
  if (XO.age) list.push(""")
open(p, 'w', encoding='utf8', newline='').write(s)
print('ok')
