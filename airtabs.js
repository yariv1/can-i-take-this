// Airline page tab row: one horizontally scrollable row (YouTube-style), arrows on desktop (hidden on touch, swipe instead), active tab scrolled into view.
(function () {
  var n = document.querySelector('nav.tabs'); if (!n) return;
  var w = document.createElement('div'); w.className = 'tabs-wrap';
  n.parentNode.insertBefore(w, n); w.appendChild(n);
  function mk(c, d) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'tabs-arrow ' + c;
    b.setAttribute('aria-label', c === 'l' ? 'Scroll tabs left' : 'Scroll tabs right');
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>';
    w.appendChild(b); return b;
  }
  var L = mk('l', 'M15 6l-6 6 6 6'), R = mk('r', 'M9 6l6 6-6 6');
  function up() {
    L.classList.toggle('on', n.scrollLeft > 4);
    R.classList.toggle('on', n.scrollLeft + n.clientWidth < n.scrollWidth - 4);
  }
  L.onclick = function () { n.scrollBy({ left: -n.clientWidth * 0.7 }); };
  R.onclick = function () { n.scrollBy({ left: n.clientWidth * 0.7 }); };
  n.addEventListener('scroll', up, { passive: true });
  window.addEventListener('resize', up);
  function center() {
    var a = n.querySelector('.tab.on');
    if (a) { n.style.scrollBehavior = 'auto'; n.scrollLeft = Math.max(0, a.offsetLeft - n.clientWidth / 2 + a.offsetWidth / 2); n.style.scrollBehavior = ''; }
    up();
  }
  center();
  window.addEventListener('load', center);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(center);
})();
