/* Client script for the Turks and Caicos travel advisory article. Inlined by turks_caicos_guide.js.
   TCC = { USN, CAN, UKS } is injected before this file. Replaces the three government cards with the latest /advisories.json data. */
(function () {
  var gov = document.getElementById('tc-gov');
  if (!gov) return;
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function ds(i) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(i || ''); return m ? MON[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : ''; }
  function st(i) { var m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(i || ''); return m ? (+m[3]) + ' ' + MON[+m[2] - 1] + ' ' + m[1] + ', ' + m[4] + ':' + m[5] + ' UTC' : ''; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
  function pill(l, b, sub) { var p = el('div', 'tc-p tc-s' + l); p.appendChild(el('b', '', b)); if (sub) p.appendChild(el('span', '', sub)); return p; }
  function link(href, text) { var a = el('a', '', text + ' ↗'); a.href = href; a.target = '_blank'; a.rel = 'noopener'; return a; }
  function fill(box, nodes) { box.innerHTML = ''; nodes.forEach(function (n) { box.appendChild(n); }); }
  function render(c) {
    var us = c.us, uk = c.uk, ca = c.ca, b;
    if (us) {
      b = gov.querySelector('[data-k=us] .tc-body');
      fill(b, [pill(us.level, 'Level ' + us.level, TCC.USN[us.level]), el('p', '', us.summary || ''), el('div', 'tc-d', 'Updated ' + ds(us.date)), link(us.url, 'Read the full advisory on travel.state.gov')]);
    }
    if (uk) {
      b = gov.querySelector('[data-k=uk] .tc-body');
      var s = (uk.status || []).filter(function (x) { return TCC.UKS[x]; });
      var pills = s.length ? s.map(function (x) { return pill(TCC.UKS[x][1], TCC.UKS[x][0]); }) : [pill(1, 'No warning')];
      var txt = s.length ? (uk.summary || 'The FCDO advises against travel to parts of the islands or to the whole territory. Open the full advice for the exact areas.') : 'The FCDO does not advise against travel to the Turks and Caicos Islands. It is a British Overseas Territory, so there is no British Embassy and the Turks and Caicos Islands government supports you if you need help.';
      fill(b, pills.concat([el('p', '', txt), el('div', 'tc-d', 'Updated ' + ds(uk.date)), link('https://www.gov.uk/foreign-travel-advice/' + uk.slug, 'Read the full advice on GOV.UK')]));
    }
    if (ca) {
      b = gov.querySelector('[data-k=ca] .tc-body');
      var sub = ca.text && ca.text.toLowerCase() !== TCC.CAN[ca.level].toLowerCase() ? ca.text : '';
      fill(b, [pill(ca.level, TCC.CAN[ca.level], sub), el('p', '', ca.update ? 'Latest update: ' + ca.update : 'Canada publishes this level on its travel advice page.'), el('div', 'tc-d', 'Updated ' + ds(ca.date)), link('https://travel.gc.ca/destinations/' + ca.slug, 'Read the full advice on travel.gc.ca')]);
    }
  }
  fetch('/advisories.json?h=' + Math.floor(Date.now() / 3600000)).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
    if (!j || !j.countries || !j.countries.TC) return;
    render(j.countries.TC);
    var t = st(j.updated);
    if (t) { var u = document.getElementById('tc-updated'); if (u) u.textContent = t; var m = document.getElementById('tc-updated-meta'); if (m) m.textContent = 'Levels checked ' + t; }
  }).catch(function () {});
})();
