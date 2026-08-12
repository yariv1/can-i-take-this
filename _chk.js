const fs = require('fs');
const b = fs.readFileSync('build.js', 'utf8');

// locate the 2nd </body>
let i = b.indexOf('</body>');
i = b.indexOf('</body>', i + 1);

// dump the 80 chars before it as an array of char codes + the literal
const seg = b.slice(i - 80, i);
console.log('LITERAL:', JSON.stringify(seg));
console.log('CODES:', Array.from(seg).map(c => c.charCodeAt(0)).join(','));
