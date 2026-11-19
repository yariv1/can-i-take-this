import json
R='C:/Users/yariv/Utility Website/can-i-take-this/'
L=json.loads(open(R+'ladder_log.json',encoding='utf8').read())
n={'philippines':'2026-11-19: customs.gov.ph guidelines page and Essential Guide PDF: WebFetch 403 and curl 403, not bypassed',
'maldives':'2026-11-19: customs.gov.mv restricted items page: WebFetch 403 and curl 403, not bypassed',
'bahrain':'2026-11-19: customs.gov.bh duty-free page: WebFetch 403 and curl 403, not bypassed',
'china':'2026-11-19: Shantou customs guide PDF: WebFetch certificate error (self signed certificate in chain), not bypassed',
'indonesia':'2026-11-19: beacukai.go.id passenger goods pages: WebFetch connection refused/not found and curl no connection, retried twice'}
for s,t in n.items():
    k='country/'+s+'/vaping'
    if k in L:
        L[k].setdefault('other',[]).append(t)
        L[k]['date']='2026-11-19'
open(R+'ladder_log.json','w',encoding='utf8',newline='').write(json.dumps(L,indent=1,ensure_ascii=False).replace('\n','\r\n'))
