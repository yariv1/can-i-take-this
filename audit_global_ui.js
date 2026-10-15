// Guard for DS 8.22: global_ui.css must be injected into every generated index.html.
const fs = require('fs'), path = require('path');
let bad = 0, n = 0;
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (f.name === 'node_modules' || f.name.startsWith('.')) continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name === 'index.html' && d !== __dirname + '/app') {
      const s = fs.readFileSync(p, 'latin1');
      if (!/<\/head>/.test(s)) continue;
      n++;
      if (!s.includes('id="citt-global-ui"')) { console.log('MISSING global_ui.css: ' + p); bad++; }
    }
  }
})(__dirname);
if (bad) { console.log(bad + ' pages without global_ui.css'); process.exit(1); }
console.log('OK global ui (' + n + ' pages)');
