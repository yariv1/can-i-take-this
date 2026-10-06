/* Client script for the Level 4 travel advisory countries article: refreshes the lists and the stat strip from /level4.json (rebuilt every 6 hours)
   and wires the search box. Inlined after level4_shared.js (l4Render). TWC and L4C = { links } are injected before. */
(function () {
  var q = document.getElementById('l4-q'), count = document.getElementById('l4-count'), none = document.getElementById('l4-none'), chipBox = document.getElementById('l4-chips'), region = '';
  function applyFilter() {
    var v = (q && q.value || '').trim().toLowerCase(), shown = 0, any = 0;
    [].forEach.call(document.querySelectorAll('#l4-grid .l4-card, #l4-l3list li'), function (e) {
      var ok = (!v || (e.getAttribute('data-n') || '').indexOf(v) >= 0) && (!region || e.getAttribute('data-r') === region); e.hidden = !ok;
      if (ok) { any++; if (e.classList.contains('l4-card')) shown++; }
    });
    if (count) count.textContent = shown + (shown === 1 ? ' country' : ' countries');
    if (none) none.style.display = (v || region) && !any ? 'block' : 'none';
  }
  function markChips() {
    var on = false;
    [].forEach.call(document.querySelectorAll('#l4-chips .tw-chip'), function (c) { var p = c.getAttribute('data-r') === region; if (p) on = true; c.setAttribute('aria-pressed', p ? 'true' : 'false'); });
    if (!on && region) { region = ''; markChips(); }
  }
  if (q) q.addEventListener('input', applyFilter);
  if (chipBox) chipBox.addEventListener('click', function (ev) {
    var c = ev.target.closest ? ev.target.closest('.tw-chip') : null; if (!c) return;
    region = c.getAttribute('data-r') || ''; markChips(); applyFilter();
  });
  function setHtml(id, h) { var e = document.getElementById(id); if (e) e.innerHTML = h; }
  fetch('/level4.json?h=' + Math.floor(Date.now() / 3600000)).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
    if (!j || !j.countries) return;
    var o = l4Render(j.countries, TWC, L4C.links);
    setHtml('l4-chips', o.chipsHtml); setHtml('l4-cards', o.l4Html); setHtml('l4-l3', o.l3Html); setHtml('l4-dis', o.disHtml); setHtml('l4-det', o.detHtml);
    [['us4', o.us4], ['us3', o.us3], ['ukwhole', o.ukWhole], ['caavoid', o.caAvoid]].forEach(function (p) { var e = document.getElementById('l4-s-' + p[0]); if (e) e.textContent = p[1]; });
    [].forEach.call(document.querySelectorAll('.l4-n4'), function (e) { e.textContent = o.us4; });
    var u = document.getElementById('l4-updated'); if (u && j.updated) { var d = new Date(j.updated); if (!isNaN(d)) u.textContent = d.getUTCDate() + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getUTCMonth()] + ' ' + d.getUTCFullYear() + ', ' + ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2) + ' UTC'; }
    markChips(); applyFilter();
  }).catch(function () {});
})();
