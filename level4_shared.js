// Shared by level4_guide.js (build time, node) and inlined into the page (browser). ES5 only.
// l4Render(D, TWC, LINKS, FLAGS): D = level4.json "countries" (every destination the US rates Level 3 or 4), TWC = {USN, CAN, UKS},
// LINKS = {key: '/country/x/'}. Returns the live HTML blocks and the stat numbers, so the baked page and the 6-hourly refresh use the same logic.
function l4Render(D, TWC, LINKS) {
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var dShort = function (iso) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || ''); return m ? MON[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : ''; };
  var pill = function (lvl, b, s) { return '<span class="tw-p l4-p tw-s' + lvl + '"><b>' + esc(b) + '</b>' + (s ? '<span>' + esc(s) + '</span>' : '') + '</span>'; };
  var cap = function (s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; };
  var rank = function (x) { var k = ((x.uk && x.uk.status) || []).filter(function (s) { return TWC.UKS[s]; }); return k.length ? Math.max.apply(null, k.map(function (s) { return TWC.UKS[s][1]; })) : 0; };
  var ukPills = function (x) {
    var k = ((x.uk && x.uk.status) || []).filter(function (s) { return TWC.UKS[s]; });
    if (!x.uk) return pill(1, 'UK: no advice found');
    return k.length ? k.map(function (s) { return pill(TWC.UKS[s][1], 'UK: ' + TWC.UKS[s][0]); }).join('') : pill(1, 'UK: No warning');
  };
  var caPill = function (x) { return x.ca ? pill(x.ca.level, 'Canada: ' + TWC.CAN[x.ca.level], x.ca.regional ? '+ regional advisories' : '') : pill(1, 'Canada: no advice found'); };
  var flag = function (x) { return x.code ? '<img src="https://flagcdn.com/w40/' + x.code.toLowerCase() + '.png" alt="" width="22" height="16" loading="lazy">' : ''; };
  var nameOf = function (k, x) { return LINKS && LINKS[k] ? '<a href="' + LINKS[k] + '">' + esc(x.name) + '</a>' : esc(x.name); };
  var ukClean = function (x) { var t = x.uk && x.uk.summary; return t && !/[:,]$/.test(t) && t.length <= 260 ? t : ''; };

  var l4 = [], l3 = [];
  Object.keys(D).forEach(function (k) {
    var x = D[k]; if (!x || !x.us) return;
    var o = { k: k, x: x };
    if (x.us.level >= 4) l4.push(o); else if (x.us.level === 3) l3.push(o);
  });
  l4.sort(function (a, b) { return a.x.name.localeCompare(b.x.name); });
  l3.sort(function (a, b) { return a.x.name.localeCompare(b.x.name); });

  var cardHtml = function (o) {
    var x = o.x, u = x.us;
    var why = u.reason ? '<p class="l4-why"><strong>Why (US State Department):</strong> ' + esc(cap(u.reason)) + '.</p>' : '';
    var help = (u.help || []).length ? '<ul class="l4-help">' + u.help.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>' : '';
    var rules = (u.rules || []).length ? '<p class="l4-rule"><strong>Rule beyond the advice:</strong> ' + esc(u.rules.join(' ')) + '</p>' : '';
    var uk = ukClean(x) ? '<p class="l4-uk"><strong>UK FCDO:</strong> ' + esc(ukClean(x)) + '.</p>' : '';
    return '<div class="l4-card" data-n="' + esc(x.name.toLowerCase()) + '" data-r="' + esc(x.region || 'Other') + '"><h3>' + flag(x) + nameOf(o.k, x) + '</h3>' +
      '<div class="cb-pills">' + pill(4, 'US: Level 4', 'Do not travel') + ukPills(x) + caPill(x) + '</div>' + why + (u.help && u.help.length ? '<p class="l4-h">Help if something goes wrong</p>' + help : '') + rules + uk +
      '<div class="tw-d l4-foot">US advisory updated ' + esc(dShort(u.date)) + ' &middot; <a href="' + esc(u.url) + '" target="_blank" rel="noopener">Read the full US advisory</a>' + (x.uk ? ' &middot; <a href="https://www.gov.uk/foreign-travel-advice/' + esc(x.uk.slug) + '" target="_blank" rel="noopener">UK advice</a>' : '') + (x.ca && x.ca.slug ? ' &middot; <a href="https://travel.gc.ca/destinations/' + esc(x.ca.slug) + '" target="_blank" rel="noopener">Canada advice</a>' : '') + '</div></div>';
  };
  var l4Html = l4.length ? '<div class="l4-grid" id="l4-grid">' + l4.map(cardHtml).join('') + '</div>' : '<p>No destination is at US Level 4 right now.</p>';

  var l3Html = l3.length ? '<ul class="l4-l3" id="l4-l3list">' + l3.map(function (o) {
    var x = o.x, u = x.us;
    return '<li data-n="' + esc(x.name.toLowerCase()) + '" data-r="' + esc(x.region || 'Other') + '"><span class="l4-l3n">' + flag(x) + nameOf(o.k, x) + '</span>' + (u.reason ? '<span class="l4-l3w">' + esc(cap(u.reason)) + '</span>' : '') +
      '<span class="cb-pills l4-l3p">' + ukPills(x) + caPill(x) + '</span></li>';
  }).join('') + '</ul>' : '<p>No destination is at US Level 3 right now.</p>';

  // where the governments disagree: US Level 4 but Canada below its top level, or the UK has no warning against going
  var dis = l4.filter(function (o) { return (o.x.ca && o.x.ca.level < 4) || rank(o.x) < 3; });
  var disHtml = dis.length ? '<ul class="cb-mid">' + dis.map(function (o) {
    var bits = [];
    if (o.x.ca && o.x.ca.level < 4) bits.push('Canada: ' + TWC.CAN[o.x.ca.level]);
    var r = rank(o.x); if (r === 0) bits.push('UK: no warning against travel'); else if (r < 3) bits.push('UK: essential travel only or parts of the country');
    return '<li><strong>' + nameOf(o.k, o.x) + '</strong><span class="tw-d">' + esc(bits.join(' · ')) + '</span></li>';
  }).join('') + '</ul>' : '<p>The US, UK and Canada are all at their highest level for every destination on the list.</p>';

  // US names wrongful detention / arbitrary arrest as a reason
  var det = l4.filter(function (o) { return /detention|arbitrary arrest|detain/i.test(o.x.us.reason || ''); });
  var detHtml = det.length ? det.map(function (o) { return '<li>' + nameOf(o.k, o.x) + '</li>'; }).join('') : '';


  // region chips (only regions that have a Level 4 destination; the number is the Level 4 count)
  var ORDER = ['Africa', 'Middle East', 'Asia', 'Europe', 'Americas', 'Oceania', 'Other'], rc = {};
  l4.forEach(function (o) { var r = o.x.region || 'Other'; rc[r] = (rc[r] || 0) + 1; });
  var chipsHtml = '<button type="button" class="tw-chip" data-r="" aria-pressed="true">All <span>' + l4.length + '</span></button>' + ORDER.filter(function (r) { return rc[r]; }).map(function (r) {
    return '<button type="button" class="tw-chip" data-r="' + esc(r) + '" aria-pressed="false">' + esc(r) + ' <span>' + rc[r] + '</span></button>';
  }).join('');
  var us4 = l4.length, ukWhole = 0, ukAny4 = 0, caAvoid = 0;
  l4.forEach(function (o) {
    var st = (o.x.uk && o.x.uk.status) || [];
    if (st.indexOf('avoid_all_travel_to_whole_country') >= 0) ukWhole++;
    if (rank(o.x) >= 3) ukAny4++;
    if (o.x.ca && o.x.ca.level >= 4) caAvoid++;
  });
  return { chipsHtml: chipsHtml, l4Html: l4Html, l3Html: l3Html, disHtml: disHtml, detHtml: detHtml, us4: us4, us3: l3.length, ukWhole: ukWhole, ukAny: ukAny4, caAvoid: caAvoid, l4Names: l4.map(function (o) { return o.x.name; }), l3Names: l3.map(function (o) { return o.x.name; }), detNames: det.map(function (o) { return o.x.name; }), disNames: dis.map(function (o) { return o.x.name; }) };
}
if (typeof module !== 'undefined') module.exports = l4Render;
