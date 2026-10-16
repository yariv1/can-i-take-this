const fs=require('fs'),path=require('path');let bad=new Set(),n=0;
function ex(u){u=u.split('#')[0].split('?')[0];if(!u.startsWith('/'))return true;const p=path.join('.',u);return fs.existsSync(p)&&(fs.statSync(p).isFile()||fs.existsSync(path.join(p,'index.html')));}
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name.startsWith('.')||e.name==='node_modules')continue;const p=path.join(d,e.name);if(e.isDirectory()){if(['medication','country','food','pets'].includes(d==='.'?e.name:d.split(path.sep)[0]))walk(p);else if(d==='.')continue;}else if(e.name==='index.html'){const t=fs.readFileSync(p,'utf8').replace(/<script[\s\S]*?<\/script>/g,'');for(const m of t.matchAll(/href="(\/[^"]*)"/g)){n++;if(!ex(m[1]))bad.add(p+' -> '+m[1]);}}}}
for(const d of ['medication','country','food','pets'])walk(d);
console.log(bad.size?'FAIL internal links broken: '+[...bad].slice(0,10).join(' ; '):'OK internal links ('+n+' checked)');process.exit(bad.size?1:0);
