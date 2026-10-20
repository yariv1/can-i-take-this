// Guard (user order 2026-10-20, DESIGN_SYSTEM 8.38): every airline Medication page has the same "Which medicine?" typeahead as the country pages and the app,
// with the clear (x) inside the field. Fails if any airline medication page lacks it.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, 'airline');
let n = 0; const bad = [];
for (const d of fs.readdirSync(root)) {
  const f = path.join(root, d, 'medication', 'index.html');
  if (!fs.existsSync(f)) continue;
  n++;
  const h = fs.readFileSync(f, 'utf8');
  const need = ['id="taInput"', 'Which medicine?', 'Type a medicine or ingredient (e.g. Sudafed)', 'id="taClear"', 'id="taSuggest"', 'id="taResult"', 'id="taOriginal"', 'tabs(false)'];
  const miss = need.filter(x => !h.includes(x));
  if (miss.length) bad.push(d + ' missing ' + miss.join(', '));
}
if (bad.length) { console.log('FAIL airline typeahead:\n' + bad.slice(0, 20).join('\n')); process.exit(1); }
console.log('OK airline typeahead (' + n + ' medication pages)');
