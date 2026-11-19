// Attempts made 2026-11-17 to find readable unique sources for the highest-duplication airline medication pages. All blocked; nothing added to the pages.
const fs = require('fs');
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const A = {
  'airline/alaska-airlines/medication': 'tried 2026-11-17: alaskaair.com carry-on exceptions page and oxygen page: HTTP 406; faa.gov portable oxygen concentrators page: HTTP 403; not read',
  'airline/hawaiian-airlines/medication': 'tried 2026-11-17: hawaiianairlines.com wifi/medical pages HTTP 406; alaskaair.com carry-on exceptions: HTTP 406; not read',
  'airline/aegean/medication': 'tried 2026-11-17: en.aegeanair.com cabin-baggage and special-needs pages: HTTP 403; eody.gov.gr traveller medicines guide PDF: HTTP 403; not read',
  'airline/azul/medication': 'tried 2026-11-17: gov.br/anac baggage leaflet: human-verification page, not read (no captcha attempted); no readable official Azul or ANAC medication page found',
  'airline/arkia/medication': 'tried 2026-11-17: no readable Israel Ministry of Health or Tax Authority medication page found; search returned third-party guides only',
  'airline/el-al/medication': 'tried 2026-11-17: no readable Israel Ministry of Health or Tax Authority medication page found; search returned third-party guides only'
};
for (const [k, v] of Object.entries(A)) {
  const r = log[k] || {};
  r.other = (r.other || []).filter(x => x !== v).concat([v]);
  log[k] = r;
}
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
