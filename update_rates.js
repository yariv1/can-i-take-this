// Fetches the ECB daily euro reference rates and writes rates.json (same-origin snapshot for currency.js).
// Run before every deploy: node update_rates.js. If the ECB is unreachable the old rates.json is kept.
const https = require('https');
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, 'rates.json');
const URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';

https.get(URL, { headers: { 'User-Agent': 'canitakethis-rates/1.0' } }, res => {
  let xml = '';
  res.on('data', d => (xml += d));
  res.on('end', () => {
    const date = (/time=['"](\d{4}-\d{2}-\d{2})['"]/.exec(xml) || [])[1];
    const rates = { EUR: 1 };
    const re = /currency=['"]([A-Z]{3})['"]\s+rate=['"]([0-9.]+)['"]/g;
    let m;
    while ((m = re.exec(xml))) rates[m[1]] = parseFloat(m[2]);
    if (!date || !rates.USD || Object.keys(rates).length < 20) {
      console.error('ECB response unusable; keeping existing rates.json');
      process.exit(0);
    }
    fs.writeFileSync(OUT, JSON.stringify({ source: 'ECB euro foreign exchange reference rates', date, base: 'EUR', rates }) + '\n');
    console.log('rates.json updated', date, Object.keys(rates).length, 'currencies');
  });
}).on('error', e => { console.error('ECB fetch failed:', e.message, '- keeping existing rates.json'); process.exit(0); });
