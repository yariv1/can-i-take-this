/* Guard (DS 8.33, user order 2026-10-18): the tab-row scroll arrows are as tall as the tab buttons; the rule lives in global_ui.css and no page CSS may reintroduce an offset (bottom:22px) after it. */
const fs = require('fs');
const css = fs.readFileSync('global_ui.css', 'utf8');
const ok = /html body \.tabs-wrap \.tabs-arrow\{top:0;bottom:0;height:100%\}/.test(css);
const bld = fs.readFileSync('build.js', 'utf8');
const bad = [];
if (!/html body .tabs-wrap{margin-left:-18px;margin-right:-18px}/.test(css) || !/html body .hg-row{margin-left:-18px/.test(css)) bad.push('global_ui.css lost the phone edge-to-edge rows rule (DS 8.34)');
if (!ok) bad.push('global_ui.css lost the full-height arrow rule');
if (!/airtabs\.js/.test(bld)) bad.push('airtabs.js no longer referenced');
console.log(bad.length ? 'FAIL tab arrows: ' + bad.join(' ; ') : 'OK tab arrows (full tab height rule present)');
process.exit(bad.length ? 1 : 0);
