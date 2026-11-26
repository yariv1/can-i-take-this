# DS 8.21 (user approval 26 November 2026): caption follows the source: "Unofficial guidance" for third-party links
import re, base64, json

def rw(p, old, new, count=1):
    s = open(p, encoding='utf8', newline='').read()
    if '\r\n' in s:
        old, new = old.replace('\n', '\r\n'), new.replace('\n', '\r\n')
    assert s.count(old) == count, (p, old[:60], s.count(old))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(old, new))

# 1. server pages: one transform in write()
b = open('build.js', encoding='utf8', newline='').read()
nl = '\r\n' if '\r\n' in b else '\n'
rw('build.js', "  fs.writeFileSync(p,content);}",
   "  if(/(^|[\\\\/])index\\.html$/.test(rel)&&typeof content==='string')content=SRCKIND.relabel(content,'/'+rel.replace(/\\\\/g,'/').replace(/^\\//,'').replace(/index\\.html$/,''));\n  fs.writeFileSync(p,content);}")
rw('build.js', "function write(rel, content){", "const SRCKIND=require('./source_kind.js');\nfunction write(rel, content){")

# 2. browser code: typeahead library (base64 in build.js)
b = open('build.js', encoding='utf8', newline='').read()
m = re.search(r"TA_LIB=/\*v(\d+)\*/Buffer\.from\('([A-Za-z0-9+/=]+)'", b)
lib = base64.b64decode(m.group(2)).decode('utf8')
old = "<span class=\"hi-l\">'+esc(a.label)+'<small>Official guidance</small>"
assert lib.count(old) == 1
lib = lib.replace(old, "<span class=\"hi-l\">'+esc(a.label)+'<small>'+(srcUn(a.url,a.label)?'Unofficial':'Official')+' guidance</small>")
lib = lib.replace('function helpBlock(au){', '/*SRCUN*/function helpBlock(au){', 1)
new = base64.b64encode(lib.encode('utf8')).decode('ascii')
b = b[:m.start()] + "TA_LIB=/*v%d*/Buffer.from('%s'" % (int(m.group(1)) + 1, new) + b[m.end():]
open('build.js', 'w', encoding='utf8', newline='').write(b)
rw('build.js', "'+JSON.stringify(_D)+';'+TA_LIB+'})();", "'+JSON.stringify(_D)+';'+SRCKIND.clientFn()+TA_LIB+'})();") if False else None
b = open('build.js', encoding='utf8', newline='').read()
needle = "JSON.stringify(_D)+';'+TA_LIB"
assert b.count(needle) >= 1
b = b.replace(needle, "JSON.stringify(_D)+';'+require('./source_kind.js').clientFn()+TA_LIB")
open('build.js', 'w', encoding='utf8', newline='').write(b)

# 3. browser code: home app
rw('canitakethis.html', "rows+=linkRow('web',au.label,'Official guidance',au.url);",
   "rows+=linkRow('web',au.label,(srcUn(au.url,au.label)?'Unofficial':'Official')+' guidance',au.url);")
print('ok')
