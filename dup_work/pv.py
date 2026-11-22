import json,sys
h=open('canitakethis.html',encoding='utf8').read()
s=h.index('var PET_VER=');i=h.index('{',s);d=0;j=i;ins=False
while True:
    c=h[j]
    if ins:
        if c==chr(92): j+=1
        elif c=='"': ins=False
    else:
        if c=='"': ins=True
        elif c=='{': d+=1
        elif c=='}':
            d-=1
            if d==0: break
    j+=1
o=json.loads(h[i:j+1]);print(len(o))
for k in sys.argv[1:]: print(k,json.dumps(o.get(k),ensure_ascii=False,indent=1))
