// Shared by mexico_guide.js (build time, node) and inlined into the page (browser). ES5 only.
// mxRender(US, MX, ADV, TWC, DEST): US = mexico_us.json (hand-read from the official page), MX = mexico.json {uk:{states,date,status}, ca:{states,date}},
// ADV = advisories.json countries.MX (live national levels), TWC = {USN, CAN, UKS}, DEST = [[label, stateKey]].
function mxRender(US, MX, ADV, TWC, DEST) {
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var dShort = function (iso) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || ''); return m ? MON[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : ''; };
  var clip = function (s, n) { s = String(s || ''); return s.length <= n ? s : s.slice(0, n - 1).replace(/[\s,;:.]+\S*$/, '') + '...'; };
  var pill = function (lvl, b, s) { return '<span class="tw-p mx-p tw-s' + lvl + '"><b>' + esc(b) + '</b>' + (s ? '<span>' + esc(s) + '</span>' : '') + '</span>'; };
  var UKS = (MX && MX.uk && MX.uk.states) || {}, CAS = (MX && MX.ca && MX.ca.states) || {};
  var natCa = ADV && ADV.ca ? ADV.ca.level : 2;

  var ukBlock = function (k) {
    var u = UKS[k];
    if (!u) return pill(1, 'No warning') + '<span class="mx-x">The UK does not warn against travel to this state.</span>';
    var txt = u.lines.join(' ');
    return pill(u.whole ? 3 : 2, u.whole ? 'Essential travel only' : 'Essential travel only (parts)') + '<span class="mx-x">' + esc(clip(txt.replace(/FCDO advises against all but essential travel (to|on) /g, ''), 150)) + '</span>';
  };
  var caBlock = function (k) {
    var c = CAS[k];
    if (!c) return pill(natCa, TWC.CAN[natCa], 'no regional advisory') + '';
    var parts = /within|south of|National Park/i.test(c.text);
    return pill(c.level || 3, TWC.CAN[c.level || 3] + (parts ? ' (parts)' : '')) + '<span class="mx-x">' + esc(clip(c.text, 150)) + '</span>';
  };
  var usBlock = function (s) {
    var nm = TWC.USN[s.l];
    return pill(s.l, 'Level ' + s.l, nm) + (s.r ? '<span class="mx-x">due to ' + esc(s.r) + '</span>' : '');
  };

  var states = US.states.slice().sort(function (a, b) { return b.l - a.l || a.n.localeCompare(b.n); });
  var rowsHtml = states.map(function (s) {
    return '<tr data-n="' + esc(s.n.toLowerCase()) + '" data-l="' + s.l + '"><th scope="row">' + esc(s.n) + '</th><td>' + usBlock(s) + (s.flag ? '<span class="mx-x mx-flag">' + esc(s.flag) + '</span>' : '') + '</td><td>' + ukBlock(s.k) + '</td><td>' + caBlock(s.k) + '</td></tr>';
  }).join('');
  var cnt = { 4: 0, 3: 0, 2: 0, 1: 0 }; states.forEach(function (s) { cnt[s.l]++; });
  var chipsHtml = '<button type="button" class="tw-chip" data-l="" aria-pressed="true">All <span>' + states.length + '</span></button>' + [4, 3, 2, 1].map(function (l) {
    return '<button type="button" class="tw-chip" data-l="' + l + '" aria-pressed="false">US Level ' + l + ' <span>' + cnt[l] + '</span></button>';
  }).join('');

  var byKey = {}; US.states.forEach(function (s) { byKey[s.k] = s; });
  var destHtml = '<div class="mx-grid">' + DEST.map(function (d) {
    var s = byKey[d[1]]; if (!s) return '';
    var note = US.notes && US.notes[s.k] ? '<p class="mx-note"><strong>US State Department:</strong> ' + esc(US.notes[s.k]) + '</p>' : '';
    return '<div class="mx-card"><h3>' + esc(d[0]) + '</h3><p class="mx-st">State: ' + esc(s.n) + '</p><div class="mx-pills">' + usBlock(s) + '</div>' + note +
      '<div class="mx-gov"><div class="mx-gh">UK FCDO</div>' + ukBlock(s.k) + '</div><div class="mx-gov"><div class="mx-gh">Canada</div>' + caBlock(s.k) + '</div></div>';
  }).join('') + '</div>';

  var ukN = 0, caN = 0; states.forEach(function (s) { if (UKS[s.k]) ukN++; if (CAS[s.k]) caN++; });
  var date = ADV && ADV.us ? ADV.us.date : '';
  var stale = date && US.feedDate && date !== US.feedDate;
  var banner = stale ? '<div class="callout"><div class="callout-icon">⚠️</div><div><strong>The US advisory for Mexico was updated on ' + esc(dShort(date)) + ', after our last state-by-state check (' + esc(dShort(US.checked)) + ').</strong> The national level below is current, but the US state levels in the table may be out of date. Read the current list on the <a href="' + esc(US.url) + '" target="_blank" rel="noopener">State Department page</a>.</div></div>' : '';
  var natHtml = '';
  if (ADV && ADV.us) {
    var ukSt = ((ADV.uk && ADV.uk.status) || []).filter(function (x) { return TWC.UKS[x]; });
    var ukP = ukSt.length ? ukSt.map(function (x) { return pill(TWC.UKS[x][1], 'UK: ' + TWC.UKS[x][0]); }).join('') : pill(1, 'UK: No warning');
    natHtml = '<div class="mx-grid mx-nat">' +
      '<div class="mx-card"><h3>United States</h3><p class="mx-st">State Department, updated ' + esc(dShort(ADV.us.date)) + '</p><div class="mx-pills">' + pill(ADV.us.level, 'Level ' + ADV.us.level, TWC.USN[ADV.us.level]) + '</div><p>' + esc(ADV.us.summary || '') + '</p></div>' +
      '<div class="mx-card"><h3>United Kingdom</h3><p class="mx-st">FCDO, updated ' + esc(dShort(ADV.uk && ADV.uk.date)) + '</p><div class="mx-pills">' + ukP + '</div><p>The UK has no warning for the country as a whole. It advises against all but essential travel to the states and areas shown in the table.</p></div>' +
      '<div class="mx-card"><h3>Canada</h3><p class="mx-st">Global Affairs Canada, updated ' + esc(dShort(ADV.ca && ADV.ca.date)) + '</p><div class="mx-pills">' + pill(ADV.ca.level, TWC.CAN[ADV.ca.level], ADV.ca.regional ? '+ regional advisories' : '') + '</div><p>Canada advises avoiding non-essential travel to the states and areas shown in the table.</p></div></div>';
  }
  return { natHtml: natHtml, rowsHtml: rowsHtml, chipsHtml: chipsHtml, destHtml: destHtml, banner: banner, n: states.length, l4: cnt[4], l3: cnt[3], ukN: ukN, caN: caN, natUs: ADV && ADV.us ? ADV.us.level : 0 };
}
if (typeof module !== 'undefined') module.exports = mxRender;
