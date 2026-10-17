/*
 Country vaping helper (session 35): adds ONE country's section, read in full from the country's OWN official page (health ministry, customs, regulator), to vape_extra.json.
 country_vape.js shows it after the WHO table and lists the source in the "Official source" box. Title, description, H1 and the schema FAQ of the page stay unchanged (keepSchema); the visible "Quick answers" block carries the extra FAQ.
 usage: node vape_add_country.js spec.json
 spec = {"code":"SG","sections":[{"h":"emoji heading","p":"one sentence intro","table":{"head":["Item","What the page says"],"rows":[["a","b"]]},"list":["<strong>x:</strong> y"]}],
         "faq":[["Q","A"],...],"src":[["https://...","Label"]],"card":{"status":"warn|stop|go","head":"...","lines":["..."]}}
 Rules: only facts stated on the page, own words, no invented numbers/URLs; say what was not read.
 After adding: node build.js, audit_source_state.js, audit_country_cat_sources.js, audit_seo_change_scope.js, audit_duplicates.js.
*/
const fs = require('fs'), path = require('path');
const EXTRA = path.join(__dirname, 'vape_extra.json');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
if (!spec.code || !Array.isArray(spec.sections) || !spec.sections.length || !Array.isArray(spec.faq) || spec.faq.length < 2 || !Array.isArray(spec.src) || !spec.src.length) { console.log('bad spec'); process.exit(1); }
const extra = fs.existsSync(EXTRA) ? JSON.parse(fs.readFileSync(EXTRA, 'utf8')) : {};
const e = { sections: spec.sections, faq: spec.faq, src: spec.src, keepSchema: true };
if (spec.card) e.card = spec.card;
extra[spec.code] = e;
fs.writeFileSync(EXTRA, JSON.stringify(extra, null, 1));
console.log('vape_extra now has ' + Object.keys(extra).length + ' entries (added/updated ' + spec.code + ')');
