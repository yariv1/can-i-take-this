// Single source for every scrollbar on the site (DESIGN_SYSTEM 8.10).
// Default: calm #2F416A for the thumb and both arrows. Light blue accent only on hover, each part on its own.
// Chrome/Edge/Safari get custom arrows via ::-webkit-scrollbar; Firefox cannot style arrows, so it gets scrollbar-color.
const DEF = '2F416A', HOV_DARK = '4CC2FF', HOV_LIGHT = '1E86D6';
const path = {
  left: 'M10 3 5 8l5 5', right: 'M6 3l5 5-5 5', up: 'M3 10l5-5 5 5', down: 'M3 6l5 5 5-5'
};
const icon = (dir, hex) => 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27' +
  path[dir].replace(/ /g, '%20') + '%27 fill=%27none%27 stroke=%27%23' + hex + '%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/%3E%3C/svg%3E")';

// sel: one selector (or comma list). vertical: true for up/down scrollers.
function sb(sel, vertical, noArrows) {
  const sels = sel.split(',').map(s => s.trim());
  const all = (suffix) => sels.map(s => s + suffix).join(',');
  const dec = vertical ? 'up' : 'left', inc = vertical ? 'down' : 'right';
  const ori = vertical ? ':vertical' : ':horizontal';
  const btn = (d, hex) => `background:center/16px 16px no-repeat ${icon(d, hex)}`;
  let css = '';
  css += all('::-webkit-scrollbar') + '{' + (vertical ? 'width' : 'height') + ':16px}';
  css += all('::-webkit-scrollbar-track') + '{background:var(--surface);border-radius:999px}';
  css += all('::-webkit-scrollbar-thumb') + '{background:#' + DEF + ';border:4px solid transparent;background-clip:padding-box;border-radius:999px}';
  css += all('::-webkit-scrollbar-thumb:hover') + '{background:var(--accent);background-clip:padding-box}';
  if (noArrows) { css += all('::-webkit-scrollbar-button') + '{display:none}'; css += '@supports not selector(::-webkit-scrollbar){' + all('') + '{scrollbar-width:thin;scrollbar-color:#' + DEF + ' var(--surface)}}'; return css; }
  css += all('::-webkit-scrollbar-button:single-button') + '{display:block;width:16px;height:16px}';
  css += all('::-webkit-scrollbar-button:single-button' + ori + ':decrement') + '{' + btn(dec, DEF) + '}';
  css += all('::-webkit-scrollbar-button:single-button' + ori + ':increment') + '{' + btn(inc, DEF) + '}';
  css += all('::-webkit-scrollbar-button:single-button' + ori + ':decrement:hover') + '{' + btn(dec, HOV_DARK) + '}';
  css += all('::-webkit-scrollbar-button:single-button' + ori + ':increment:hover') + '{' + btn(inc, HOV_DARK) + '}';
  css += sels.map(s => '[data-theme="light"] ' + s + '::-webkit-scrollbar-button:single-button' + ori + ':decrement:hover').join(',') + '{' + btn(dec, HOV_LIGHT) + '}';
  css += sels.map(s => '[data-theme="light"] ' + s + '::-webkit-scrollbar-button:single-button' + ori + ':increment:hover').join(',') + '{' + btn(inc, HOV_LIGHT) + '}';
  css += '@supports not selector(::-webkit-scrollbar){' + all('') + '{scrollbar-width:thin;scrollbar-color:#' + DEF + ' var(--surface)}}';
  return css;
}
module.exports = { h: (sel, noArrows) => sb(sel, false, noArrows), v: (sel) => sb(sel, true), DEF, icon };
