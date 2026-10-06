/* Client script for the Mexico travel warning article: re-renders the table, destination cards and stats from /advisories.json (national levels)
   and /mexico.json (UK and Canada regions, rebuilt every 6 hours); wires search and level chips. mxRender, TWC, MXC = { us, dest } are injected before. */
(function () {
  var q = document.getElementById('mx-q'), count = document.getElementById('mx-count'), none = document.getElementById('mx-none'), box = document.getElementById('mx-chips'), lvl = '';
  function applyFilter() {
    var v = (q && q.value || '').trim().toLowerCase(), shown = 0;
    [].forEach.call(document.querySelectorAll('#mx-body tr'), function (r) {
      var ok = (!v || r.getAttribute('data-n').indexOf(v) >= 0) && (!lvl || r.getAttribute('data-l') === lvl); r.hidden = !ok; if (ok) shown++;
    });
    if (count) count.textContent = shown + (shown === 1 ? ' state' : ' states');
    if (none) none.style.display = shown ? 'none' : 'block';
  }
  function mark() { [].forEach.call(document.querySelectorAll('#mx-chips .tw-chip'), function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-l') === lvl ? 'true' : 'false'); }); }
  if (q) q.addEventListener('input', applyFilter);
  if (box) box.addEventListener('click', function (e) { var c = e.target.closest ? e.target.closest('.tw-chip') : null; if (!c) return; lvl = c.getAttribute('data-l') || ''; mark(); applyFilter(); });
  function set(id, h) { var e = document.getElementById(id); if (e) e.innerHTML = h; }
  function get(u) { return fetch(u + '?h=' + Math.floor(Date.now() / 3600000)).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }
  Promise.all([get('/advisories.json'), get('/mexico.json')]).then(function (res) {
    var adv = res[0] && res[0].countries && res[0].countries.MX, mx = res[1];
    if (!adv && !mx) return;
    var o = mxRender(MXC.us, mx || MXC.mx, adv || MXC.adv, TWC, MXC.dest);
    set('mx-nat', o.natHtml); set('mx-body', o.rowsHtml); set('mx-dest', o.destHtml); set('mx-banner', o.banner); set('mx-chips', o.chipsHtml);
    [['l4', o.l4], ['l3', o.l3], ['uk', o.ukN], ['ca', o.caN]].forEach(function (p) { var e = document.getElementById('mx-s-' + p[0]); if (e) e.textContent = p[1]; });
    mark(); applyFilter();
  });
})();
