/* Client script for the "Travel warning by country" article. Inlined into the page by travel_warning_guide.js.
   TWC = { USN, CAN, UKS } is injected before this file. Data: #tw-data (baked at build) is replaced by /advisories.json when it loads. */
(function () {
  var q = document.getElementById('tw-q'), tb = document.getElementById('tw-table');
  if (!q || !tb) return;
  var rows = [].slice.call(tb.tBodies[0].rows), cnt = document.getElementById('tw-count'), none = document.getElementById('tw-none');
  var D = {};
  try { D = JSON.parse(document.getElementById('tw-data').textContent).countries || {}; } catch (e) {}

  /* ---------- typeahead ---------- */
  var ct = '', chips = [].slice.call(document.querySelectorAll('#tw-chips .tw-chip'));
  function filter() {
    var v = q.value.trim().toLowerCase(), n = 0;
    rows.forEach(function (r) { var m = (!v || r.getAttribute('data-n').indexOf(v) > -1) && (!ct || r.getAttribute('data-ct') === ct); r.hidden = !m; if (m) n++; });
    cnt.textContent = n + ' ' + (n === 1 ? (cnt.getAttribute('data-one') || 'country') : (cnt.getAttribute('data-many') || 'countries'));
    none.style.display = n ? 'none' : 'block';
  }
  q.addEventListener('input', filter);
  chips.forEach(function (b) { b.addEventListener('click', function () { ct = b.getAttribute('data-ct'); chips.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); filter(); }); });

  /* ---------- cell rendering (same markup as the build) ---------- */
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function ds(i) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(i || ''); return m ? MON[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : ''; }
  function st(i) { var m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(i || ''); return m ? (+m[3]) + ' ' + MON[+m[2] - 1] + ' ' + m[1] + ', ' + m[4] + ':' + m[5] + ' UTC' : ''; }
  function dd(i) { var d = ds(i); return d ? '<span class="tw-d">' + d + '</span>' : ''; }
  function btn(sys, lvl, inner, extra) { return '<button type="button" class="tw-p tw-s' + lvl + '" data-s="' + sys + '"' + (extra || '') + ' aria-haspopup="dialog">' + inner + '</button>'; }
  function us(o) { return o ? btn('us', o.level, '<b>Level ' + o.level + '</b><span>' + TWC.USN[o.level] + '</span>') + dd(o.date) : '<span class="tw-n">No advisory for itself</span>'; }
  function ca(o) { return o ? btn('ca', o.level, '<b>' + TWC.CAN[o.level] + '</b>' + (o.regional ? '<span>+ regional advisories</span>' : '')) + dd(o.date) : '<span class="tw-n">No advisory for itself</span>'; }
  function uk(o) {
    if (!o) return '<span class="tw-n">No advice for itself</span>';
    var s = (o.status || []).filter(function (x) { return TWC.UKS[x]; });
    var p = s.length ? s.map(function (x) { return btn('uk', TWC.UKS[x][1], '<b>' + TWC.UKS[x][0] + '</b>', ' data-st="' + x + '"'); }).join('') : btn('uk', 1, '<b>No warning</b>', ' data-st="none"');
    return p + dd(o.date);
  }
  function renderAll() {
    rows.forEach(function (r) {
      var c = D[r.getAttribute('data-c')]; if (!c) return;
      r.querySelector('[data-k=us]').innerHTML = us(c.us);
      r.querySelector('[data-k=uk]').innerHTML = uk(c.uk);
      r.querySelector('[data-k=ca]').innerHTML = ca(c.ca);
    });
  }

  /* ---------- click / tap a level: popover with what it means ---------- */
  var CA_DEF = ['', 'Take similar precautions to those you would take in Canada.', 'There are certain safety and security concerns or the situation could change quickly. Be very cautious at all times, monitor local media and follow the instructions of local authorities.', 'Your safety and security could be at risk. You should think about your need to travel to this country, territory or region based on family or business requirements, knowledge of or familiarity with the region, and other factors.', 'You should not travel to this country, territory or region. Your personal safety and security are at great risk.'];
  var US_DEF = ['', '', '', 'Avoid travel due to serious risks to safety and security.', 'This is the highest advisory level due to greater likelihood of life-threatening risks.'];
  var pop = document.createElement('div'); pop.className = 'tw-pop'; pop.setAttribute('role', 'dialog'); pop.hidden = true; document.body.appendChild(pop);
  var cur = null;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
  function content(b) {
    var row = b.closest('tr'), code = row.getAttribute('data-c'), c = D[code]; if (!c) return null;
    var sys = b.getAttribute('data-s'), t, body = [], link, linkText, date;
    if (sys === 'us' && c.us) {
      var o = c.us; t = 'US State Department: Level ' + o.level + ', ' + TWC.USN[o.level];
      if (o.summary) body.push(o.summary);
      if (US_DEF[o.level]) body.push('What the level means: ' + US_DEF[o.level]);
      link = o.url; linkText = 'Read the full advisory on travel.state.gov'; date = o.date;
    } else if (sys === 'ca' && c.ca) {
      var a = c.ca; t = 'Canada: ' + (a.text || TWC.CAN[a.level]);
      body.push(CA_DEF[a.level]);
      if (a.update && !/^editorial change.?$/i.test(a.update)) body.push('Latest update: ' + a.update);
      link = 'https://travel.gc.ca/destinations/' + a.slug; linkText = 'Read the full advice on travel.gc.ca'; date = a.date;
    } else if (sys === 'uk' && c.uk) {
      var u = c.uk, k = b.getAttribute('data-st');
      if (k === 'none') {
        t = 'UK FCDO: no warning against travel';
        body.push('The FCDO does not advise against travel to ' + c.name + '. It still publishes travel advice on entry rules, safety and health.');
      } else {
        t = 'UK FCDO: ' + (TWC.UKS[k] ? TWC.UKS[k][0] : 'advises against travel');
        body.push(u.summary || 'The FCDO advises against travel to parts of ' + c.name + ' or to the whole country. Open the full advice for the exact areas.');
        body.push('Your travel insurance could be invalidated if you travel against FCDO advice.');
      }
      link = 'https://www.gov.uk/foreign-travel-advice/' + u.slug; linkText = 'Read the full advice on GOV.UK'; date = u.date;
    } else return null;
    pop.innerHTML = '';
    pop.appendChild(el('div', 'tw-pop-c', c.name));
    pop.appendChild(el('div', 'tw-pop-t', t));
    body.forEach(function (x) { pop.appendChild(el('p', '', x)); });
    if (date) pop.appendChild(el('div', 'tw-pop-d', 'Updated ' + ds(date)));
    if (link) { var a2 = el('a', 'tw-pop-l', linkText + ' ↗'); a2.href = link; a2.target = '_blank'; a2.rel = 'noopener'; pop.appendChild(a2); }
    return true;
  }
  function place(b) {
    pop.hidden = false;
    var r = b.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
    var x = Math.max(8, Math.min(innerWidth - w - 8, r.left));
    var y = r.bottom + 6;
    if (y + h > innerHeight - 8 && r.top - h - 6 > 8) y = r.top - h - 6;
    y = Math.max(8, Math.min(y, innerHeight - h - 8));
    pop.style.left = x + 'px'; pop.style.top = y + 'px';
  }
  function close() { pop.hidden = true; if (cur) cur.setAttribute('aria-expanded', 'false'); cur = null; }
  tb.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.tw-p') : null;
    if (!b) return;
    e.stopPropagation();
    if (cur === b && !pop.hidden) { close(); return; }
    if (cur) cur.setAttribute('aria-expanded', 'false');
    if (!content(b)) return;
    cur = b; b.setAttribute('aria-expanded', 'true'); place(b);
  });
  pop.addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  window.addEventListener('scroll', function () { if (cur && !pop.hidden) place(cur); }, { passive: true });
  window.addEventListener('resize', function () { if (cur && !pop.hidden) place(cur); });

  /* ---------- refresh from the 6-hourly data file ---------- */
  fetch('/advisories.json?h=' + Math.floor(Date.now() / 3600000)).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
    if (!j || !j.countries) return;
    D = j.countries; close(); renderAll();
    var t = st(j.updated);
    if (t) { document.getElementById('tw-updated').textContent = t; var m = document.getElementById('tw-updated-meta'); if (m) m.textContent = 'Levels checked ' + t; }
  }).catch(function () {});
})();
