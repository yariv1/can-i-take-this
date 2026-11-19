const fs=require('fs');const log=JSON.parse(fs.readFileSync('ladder_log.json','utf8'));
const A={
'air-arabia':{reliable:'read 2026-11-17: Air Arabia Prohibited items FAQ (official) battery rules added to the page'},
'aegean':{reliable:'read 2026-11-17: Aegean Hub baggage policy (Aegean-published) battery rules added to the page; en.aegeanair.com dangerous goods page 403'},
'virgin-australia':{other:'tried 2026-11-17: virginaustralia.com dangerous goods and conditions of carriage: connection reset (not read); casa.gov.au dangerous goods: timeout; search snippets not used'},
'norwegian':{other:'tried 2026-11-17: norwegian.com batteries-on-board page: HTTP 403; not read'},
'south-african-airways':{other:'tried 2026-11-17: flysaa.com restricted-items page: HTTP 403; not read'},
'aer-lingus':{other:'tried 2026-11-17: Aer Lingus conditions of carriage PDF: not machine-readable; aerlingus.com vape page not found'},
'air-canada':{other:'tried 2026-11-17: tc.canada.ca battery page URL 404; search returned retailer blogs only'},
'japan-airlines':{other:'tried 2026-11-17: mlit.go.jp page was unrelated; faa.gov lithium page HTTP 403'}
};
for(const [s,v] of Object.entries(A)){const k='airline/'+s+'/vape-e-cigarette';const r=log[k]||{};for(const f of ['reliable','other']) if(v[f]) r[f]=(r[f]||[]).filter(x=>x!==v[f]).concat([v[f]]);r.date='2026-11-17';log[k]=r;}
fs.writeFileSync('ladder_log.json',JSON.stringify(log,null,1));
