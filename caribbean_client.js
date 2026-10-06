/* Client script for the Caribbean travel warning article: refreshes the "islands with a warning" lists and the stat strip from /advisories.json.
   Inlined after caribbean_shared.js (cbRender) and travel_warning_client.js. CBC = { codes, links } and TWC are injected before. */
(function () {
  var hot = document.getElementById('cb-hot'), mid = document.getElementById('cb-mid');
  if (!hot || !mid) return;
  fetch('/advisories.json?h=' + Math.floor(Date.now() / 3600000)).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
    if (!j || !j.countries) return;
    var o = cbRender(j.countries, CBC.codes, TWC, CBC.links);
    hot.innerHTML = o.hotHtml; mid.innerHTML = o.midHtml;
    [['us3', o.us3], ['uk', o.uk], ['ca3', o.ca3], ['n', o.n]].forEach(function (p) { var e = document.getElementById('cb-s-' + p[0]); if (e) e.textContent = p[1]; });
  }).catch(function () {});
})();
