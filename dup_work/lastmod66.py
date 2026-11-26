import subprocess,json,re,collections
out=subprocess.run(['git','log','--name-only','--format=@@%H %cs','--','*.html'],capture_output=True,text=True,encoding='utf8').stdout
newest={}
commits=[]
for blk in out.split('@@')[1:]:
    lines=blk.strip().split('\n'); h,d=lines[0].split(); files=[x for x in lines[1:] if x.endswith('/index.html')]
    commits.append((d,len(files)))
    if len(files)>150: continue
    for f in files:
        if f not in newest: newest[f]=d
ov=json.load(open('lastmod_overrides.json',encoding='utf8'))
base='2026-10-07'
add={}
for f,d in newest.items():
    u='/'+f[:-10]
    if u.startswith('/blog/') or u=='//': continue
    cur=ov.get(u,base)
    if d>cur and d<='2026-11-26': add[u]=d
print(len(add),collections.Counter(add.values()).most_common(12))
json.dump(add,open('dup_work/lastmod66.json','w'),indent=1)
