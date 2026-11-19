// Extracts "E-cigarette use" prevalence rows (adults and adolescents) from the WHO country-profile PDFs (pdftotext -layout output).
// usage: node dup_work/who_prev.js <folder with CODE.txt files> > out.json
// Row layout in the WHO table: Tobacco use (current, daily) | Tobacco smoking (c,d) | Cigarette smoking (c,d) | Smokeless (c,d) | E-cigarette use (c,d). ". . ." / "..." = no data.
const fs = require('fs'), path = require('path');
const dir = process.argv[2];
const out = {}, bad = [];
function nums(line) {
  let s = line.replace(/^\s*(Male|Female|Both sexes)\s*/, '');
  s = s.replace(/\.\s\.\s\./g, ' NA ').replace(/\.\.\./g, ' NA ').replace(/\s—\s/g, ' NA ');
  const t = s.trim().split(/\s+/).filter(Boolean);
  return t;
}
for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.txt'))) {
  const code = f.replace('.txt', '');
  const lines = fs.readFileSync(path.join(dir, f), 'utf8').split(/\r?\n/).map(l => l.replace(/\s+/g, ' ').trim());
  const rec = {};
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(Adults|Adolescents) survey: (.*)$/);
    if (!m) continue;
    const kind = m[1] === 'Adults' ? 'adult' : 'youth';
    if (rec[kind]) continue;
    let head = m[2];
    let j = i + 1;
    if (!/^(Male|Female|Both sexes)/.test(lines[j]) && lines[j] && !/^(Adults|Adolescents)/.test(lines[j])) { head += ' ' + lines[j]; j++; }
    const rows = {};
    for (let k = j; k < j + 5 && k < lines.length; k++) {
      const r = lines[k].match(/^(Male|Female|Both sexes)\b/);
      if (r) rows[r[1]] = nums(lines[k]);
    }
    rec[kind] = { head, rows };
  }
  out[code] = rec;
  for (const kind of ['adult', 'youth']) {
    const r = rec[kind];
    if (r && r.rows['Both sexes'] && r.rows['Both sexes'].length !== 10) bad.push(code + ' ' + kind + ' ' + r.rows['Both sexes'].length + ' ' + r.rows['Both sexes'].join(' '));
  }
}
fs.writeFileSync(process.argv[3] || 'who_prev_raw.json', JSON.stringify(out, null, 1));
console.error('countries', Object.keys(out).length, 'rows not 10 values:', bad.length);
console.error(bad.slice(0, 20).join('\n'));
