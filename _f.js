const fs=require('fs');let s=fs.readFileSync('airline_medication.js','utf8');const crlf=s.includes('\r\n');s=s.replace(/\r\n/g,'\n');
const old="'<p class=\"bd-chk\">Last checked ' + CHECKED + ' on the airline\'s own pages and on tsa.gov. We re-check regularly because airline and TSA rules change.</p></div>'";
if(!s.includes(old))throw new Error('chk marker');
s=s.replace(old,"'<p class=\"bd-chk\">Last checked ' + CHECKED + ' on ' + esc(cfg.name) + '\'s own pages' + (/tsa\.gov/.test(JSON.stringify(cfg.scen)) ? ' and on tsa.gov' : (/catsa/.test(JSON.stringify(cfg.scen)) ? ' and on catsa-acsta.gc.ca' : '')) + '. We re-check regularly because airline' + (/tsa\.gov/.test(JSON.stringify(cfg.scen)) ? ' and TSA' : '') + ' rules change.</p></div>'");
if(crlf)s=s.replace(/\n/g,'\r\n');fs.writeFileSync('airline_medication.js',s);
