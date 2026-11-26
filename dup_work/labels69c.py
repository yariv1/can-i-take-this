# guard + design rule for the source caption
def rw(p, old, new):
    s = open(p, encoding='utf8', newline='').read()
    if '\r\n' in s:
        old, new = old.replace('\n', '\r\n'), new.replace('\n', '\r\n')
    assert s.count(old) == 1, (p, old[:60], s.count(old))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(old, new))

p = 'audit_source_label.js'
rw(p, r"""    for (const sm of m[2].matchAll(/<small>([^<]*)<\/small>/g)) if (sm[1] !== 'Official guidance') bad.push(p + ': source link label "' + sm[1] + '" (must be "Official guidance")');
""", r"""    for (const sm of m[2].matchAll(/<small>([^<]*)<\/small>/g)) if (!/^(Official|Unofficial) guidance$/.test(sm[1])) bad.push(p + ': source link label "' + sm[1] + '" (must be "Official guidance" or "Unofficial guidance")');
""")
rw(p, "const fs = require('fs'), path = require('path');\n", "const fs = require('fs'), path = require('path');\nconst SRCKIND = require('./source_kind.js');\n")
add = r"""
// Whole site (DS 8.21, 2026-11-26): the caption under a link says whether that source is official, and a card that links only unofficial sources never says OFFICIAL SOURCE.
(function walk3(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (['node_modules', 'dup_work', '_site'].includes(f.name) || f.name.startsWith('.')) continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) { walk3(p); continue; }
    if (f.name !== 'index.html') continue;
    const url = '/' + p.split(path.sep).join('/').replace(/index\.html$/, '');
    const s = fs.readFileSync(p, 'utf8').replace(/\\u003c/g, '<').replace(/\\"/g, '"');
    for (const m of s.matchAll(/<a class="hitem" href="(https?:[^"]*)"(?:(?!hitem)[\s\S]){0,600}?<span class="hi-l">((?:(?!hi-go|hitem)[\s\S]){0,900}?)<small>(Official|Unofficial) guidance<\/small>/g))
      if (m[3] === 'Official' && SRCKIND.isUnofficial(m[1], m[2], url)) { console.log('UNOFFICIAL LINK CAPTIONED OFFICIAL (DS 8.21): ' + p + ' ' + m[1]); process.exitCode = 1; }
    for (const m of s.matchAll(/<div class="help[^"]*"><div class="help-h">[^<]*<\/div>((?:<a class="hitem"[\s\S]*?<\/a>)+)<div class="hnote">[^<]*<\/div><\/div><div class="src"><b class="src-ok">/g)) {
      const ls = [...m[1].matchAll(/href="([^"]*)"[\s\S]*?<span class="hi-l">([\s\S]*?)<small>/g)];
      if (ls.length && ls.every(x => SRCKIND.isUnofficial(x[1], x[2], url))) { console.log('OFFICIAL SOURCE FOOTER ON UNOFFICIAL LINKS ONLY (DS 8.28): ' + p); process.exitCode = 1; }
    }
  }
})('.');
if (!fs.readFileSync('canitakethis.html', 'utf8').includes('/*SRCUN*/' + SRCKIND.clientFn() + '/*ENDSRCUN*/')) { console.log('canitakethis.html source rule differs from source_kind.js'); process.exitCode = 1; }
"""
s = open(p, encoding='utf8', newline='').read()
nl = '\r\n' if '\r\n' in s else '\n'
open(p, 'w', encoding='utf8', newline='').write(s.rstrip('\r\n') + nl + add.replace('\n', nl))

rw('DESIGN_SYSTEM.md', "### 8.22 Global UI rules live in ONE file", """**8.21 caption rule (user order, 2026-11-26, HARD; supersedes "every link labelled Official guidance" in 8.30, 8.31 and 8.61):** the small caption under each source link says what that source is: "Official guidance" for an authority, airport or airline page; "Unofficial guidance" for a link whose name says Unofficial, for a named third party (list in `source_kind.js`, e.g. IATA, charities, NGOs, news sites, Travel Doc, private law copies) and for one government's travel advice about another country. A card whose links are all unofficial never carries `✓ OFFICIAL SOURCE`. Rule and list live only in `source_kind.js` (server pages relabelled in `write()`, browser cards via `srcUn`). A new third-party site is added to that list. Guard: `audit_source_label.js`.

### 8.22 Global UI rules live in ONE file""")
print('ok')
