// Guard (DS 8.25): no font-size under 14px in any built page (<style> blocks and style="" attributes), and no country-link grid (DS 8.14: cloud only).
const fs=require('fs'),path=require('path');
let bad=0,pages=0;const root=__dirname;
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(['node_modules','.git','.claude'].includes(e.name))continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(/\.html$/.test(e.name)&&(e.name==='index.html'||d===root))scan(p)}}
function scan(p){pages++;const h=fs.readFileSync(p,'utf8');const css=[...h.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m=>m[1]).concat([...h.matchAll(/\sstyle="([^"]*)"/g)].map(m=>m[1])).join('\n');
 for(const m of css.matchAll(/font-size:\s*([\d.]+)(px|rem)/g)){const px=m[2]==='px'?+m[1]:+m[1]*16;if(px<14){bad++;if(bad<10)console.log('SMALL FONT',p,m[0]);}}
 if(/\.eu-cl\{[^}]*display:grid/.test(css)||/\.rc[^{]*\{[^}]*display:grid/.test(css)){bad++;console.log('COUNTRY GRID',p)}}
walk(root);console.log(pages+' pages, '+bad+' problems');process.exit(bad?1:0);
