// Guard: Trip check sheet (DS 8.57). Button + sheet markup and logic must exist in the home app and /app/; the sheet only on item tabs.
const fs = require('fs'), path = require('path'), fail = [];
['canitakethis.html', 'index.html', 'app/index.html'].forEach(f => {
  const s = fs.readFileSync(path.join(__dirname, f), 'utf8');
  ['id="tcBtn"', 'id="tcSheet"', 'id="tcClose"', 'function tcOpen', 'function tcSections', 'function tcDraw', 'Change trip details', 'tcnote', 'tcthumb', 'tcscroll', '@keyframes tcup', 'TC_SEC', 'function tcSlug', 'tcclose', 'function tcNz', 'function tcGen', 'TC_OFFICER', 'TC_ARR', 'tcBtnHtml()+', 'function tripVerdict', 'aria-modal="true"', "key==='Escape'"].forEach(k => { if (s.indexOf(k) < 0) fail.push(f + ' missing ' + k); });
  if (s.indexOf('id="tcBar"') > -1 || s.indexOf('tcOverall') > -1) fail.push(f + ' old trip check bar/banner must not exist');
  if (/st:'info'/.test(s.slice(s.indexOf('function tcDepRows'), s.indexOf('function tcOpen')))) fail.push(f + ' trip check must never render a No clear answer row (info)');
  if (/{ext:|g.ext/.test(s.slice(s.indexOf('function tcSections'), s.indexOf('function tcOpen')))) fail.push(f + ' trip check rows must never open an external source: always our own pages');
  const m = s.match(/var TC_PLANE=\{([^}]*)\},TC_COUNTRY=\{([^}]*)\}/);
  if (!m) fail.push(f + ' TC_PLANE/TC_COUNTRY missing');
  else ['baginfo', 'alcohol', 'sharp', 'sports', 'lighter', 'animal', 'cash', 'tobacco'].forEach(c => { if (new RegExp('\b' + c + ':1').test(m[1] + m[2])) fail.push(f + ' trip check must not be on tab ' + c); });
});
if (fail.length) { console.log('FAIL audit_tripcheck (' + fail.length + ')'); fail.slice(0, 20).forEach(m => console.log(' - ' + m)); process.exit(1); }
console.log('OK audit_tripcheck');
