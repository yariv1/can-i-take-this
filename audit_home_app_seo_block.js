/* Guard: the SEO section under the app (/app/, app.html) is byte-identical to the home page's (user order 2026-10-21: one section = one look everywhere). */
const fs = require('fs');
const END = '</footer>\n</div>';
function blk(f) { const h = fs.readFileSync(f, 'utf8'); const s = h.indexOf('<div class="seo">'); const e = h.indexOf(END, s); return s < 0 || e < 0 ? null : h.slice(s, e + END.length); }
const home = blk('index.html'); let bad = 0;
if (!home) { console.log('FAIL home seo block missing'); process.exit(1); }
['app/index.html', 'app.html'].forEach(f => { if (blk(f) !== home) { console.log('FAIL ' + f + ': SEO section differs from home'); bad++; } if (/Airline baggage allowances/.test(fs.readFileSync(f, 'utf8'))) { console.log('FAIL ' + f + ': old SEO section still present'); bad++; } });
console.log(bad ? bad + ' FAIL' : 'OK home and app SEO sections identical'); process.exit(bad ? 1 : 0);
