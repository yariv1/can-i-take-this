// Validates the raw WHO prevalence extraction: only rows with exactly 10 values, a plain one-decimal e-cigarette value, and Both-sexes between Male and Female (when both are given).
const raw = require(process.argv[2]);
const ok = v => v !== undefined && /^\d{1,2}(\.\d)?$/.test(v);
const out = {};
for (const c of Object.keys(raw)) {
  for (const kind of ['adult', 'youth']) {
    const r = raw[c][kind]; if (!r) continue;
    const B = r.rows['Both sexes'], M = r.rows['Male'], F = r.rows['Female'];
    if (!B || B.length !== 10 || /\s\d+(\.\d+)?\s\d+(\.\d+)?$/.test(r.head)) continue;
    const hasC = ok(B[4]);
    const hasE = ok(B[8]);
    const b = +B[8];
    const chk = (i) => { if (M && F && M.length === 10 && F.length === 10 && ok(M[i]) && ok(F[i]) && ok(B[i])) { const lo = Math.min(+M[i], +F[i]), hi = Math.max(+M[i], +F[i]); return +B[i] >= lo - 0.11 && +B[i] <= hi + 0.11; } return true; };
    if ((hasC && !chk(4)) || (hasE && !chk(8))) continue;
    (out[c] = out[c] || {})[kind] = { head: r.head, cig: hasC ? B[4] : null, tob: ok(B[0]) ? B[0] : null, cur: hasE ? B[8] : null, daily: hasE && ok(B[9]) ? B[9] : null, male: hasE && M && ok(M[8]) ? M[8] : null, female: hasE && F && ok(F[8]) ? F[8] : null };
  }
}
console.log(JSON.stringify(out, null, 1));
