// Shared by caribbean_guide.js (build time, node) and inlined into the page (browser). ES5 only.
// cbRender(D, codes, TWC, LINKS): D = advisories "countries" object, codes = Caribbean island codes, TWC = {USN, CAN, UKS}, LINKS = {code: '/country/x/'}.
// Returns the live "islands with a warning" HTML, the "increased caution" list and the stat numbers, so the baked page and the 6-hourly refresh use the same logic.
function cbRender(D, codes, TWC, LINKS) {
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var hot = [], mid = [], us3 = 0, uk = 0, ca3 = 0, n = 0;
  codes.forEach(function (c) {
    var x = D[c]; if (!x) return; n++;
    var u = x.us ? x.us.level : 0, a = x.ca ? x.ca.level : 0;
    var k = ((x.uk && x.uk.status) || []).filter(function (s) { return TWC.UKS[s]; });
    if (u >= 3) us3++; if (k.length) uk++; if (a >= 3) ca3++;
    var ukRank = k.length ? Math.max.apply(null, k.map(function (s) { return TWC.UKS[s][1]; })) : 0;
    var o = { c: c, x: x, u: u, a: a, k: k, score: Math.max(u, a, ukRank) * 10 + u + a + (k.length ? 1 : 0) };
    if (u >= 3 || a >= 3 || k.length) hot.push(o); else if (u >= 2 || a >= 2) mid.push(o);
  });
  hot.sort(function (p, q) { return q.score - p.score || p.x.name.localeCompare(q.x.name); });
  mid.sort(function (p, q) { return p.x.name.localeCompare(q.x.name); });
  var pill = function (lvl, b, s) { return '<span class="tw-p cb-p tw-s' + lvl + '"><b>' + esc(b) + '</b>' + (s ? '<span>' + esc(s) + '</span>' : '') + '</span>'; };
  var name = function (o) { return LINKS && LINKS[o.c] ? '<a href="' + LINKS[o.c] + '">' + esc(o.x.name) + '</a>' : esc(o.x.name); };
  var hotHtml = hot.length ? '<div class="cb-grid">' + hot.map(function (o) {
    var ukp = o.k.length ? o.k.map(function (s) { return pill(TWC.UKS[s][1], 'UK: ' + TWC.UKS[s][0]); }).join('') : pill(1, 'UK: No warning');
    var why = o.x.us && o.u >= 3 && o.x.us.summary ? o.x.us.summary : (o.k.length && o.x.uk.summary ? o.x.uk.summary : (o.x.us && o.x.us.summary ? o.x.us.summary : ''));
    return '<div class="cb-card"><h3>' + name(o) + '</h3><div class="cb-pills">' + (o.x.us ? pill(o.u, 'US: Level ' + o.u, TWC.USN[o.u]) : '') + ukp + (o.x.ca ? pill(o.a, 'Canada: ' + TWC.CAN[o.a]) : '') + '</div>' + (why ? '<p>' + esc(why) + '</p>' : '') + '</div>';
  }).join('') + '</div>' : '<p>No Caribbean island is currently at US Level 3 or 4, Canada Level 3 or 4, or under a UK warning against travel.</p>';
  var midHtml = mid.length ? '<ul class="cb-mid">' + mid.map(function (o) {
    var bits = [];
    if (o.u >= 2) bits.push('US Level ' + o.u + ': ' + TWC.USN[o.u]);
    if (o.a >= 2) bits.push('Canada: ' + TWC.CAN[o.a]);
    return '<li><strong>' + name(o) + '</strong><span class="tw-d">' + esc(bits.join(' · ')) + '</span>' + (o.x.us && o.x.us.summary ? '<span class="cb-why">' + esc(o.x.us.summary) + '</span>' : '') + '</li>';
  }).join('') + '</ul>' : '<p>No other island is at US Level 2 or Canada Level 2.</p>';
  return { hotHtml: hotHtml, midHtml: midHtml, n: n, us3: us3, uk: uk, ca3: ca3, hotN: hot.length, midN: mid.length, hotNames: hot.map(function (o) { return o.x.name; }), midNames: mid.map(function (o) { return o.x.name; }) };
}
if (typeof module !== 'undefined') module.exports = cbRender;
