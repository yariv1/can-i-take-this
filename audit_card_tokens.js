// DS: the ticket/card component (.pass, .perf, .help) needs the --card* colour tokens. A template that renders the component without defining them
// shows a different (black, no perforation) ticket. Fails when any built page uses var(--card) without defining --card. Exit 1 on violation.
const fs = require('fs'), path = require('path');
const bad = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (f.name === 'node_modules' || f.name.startsWith('.')) continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name === 'index.html') {
      const s = fs.readFileSync(p, 'utf8');
      if (/var\(--card\)/.test(s) && !/--card:#/.test(s)) bad.push(p);
    }
  }
})('.');
if (bad.length) { console.log('PAGES USING THE TICKET COMPONENT WITHOUT --card TOKENS (' + bad.length + '), e.g. ' + bad[0]); process.exit(1); }
console.log('OK card tokens');
