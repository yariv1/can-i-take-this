// QA GATE (HARD RULE #1). Run after build, before any handoff: node qa_gate.js
// Runs every audit_*.js guard; only if ALL pass does it write .claude/qa_stamp.json with a hash of the current working tree.
// The Stop hook .claude/qa_gate_check.js blocks the handoff unless the stamp matches the tree AND browser QA happened after the last edit.
const fs = require('fs'), cp = require('child_process'), crypto = require('crypto'), path = require('path');
const R = __dirname;
function treeHash() {
  const sh = c => cp.execSync(c, { cwd: R, maxBuffer: 1 << 28 }).toString();
  const diff = sh('git diff HEAD');
  const un = sh('git ls-files -o --exclude-standard').split('\n').filter(f => f && !/^(\.claude\/|\.tmp|OUTREACH_PACK)/.test(f)).sort();
  const h = crypto.createHash('sha1'); h.update(diff);
  un.forEach(f => { h.update(f); try { h.update(fs.readFileSync(path.join(R, f))); } catch (e) {} });
  return h.digest('hex');
}
if (require.main === module) {
  const fails = [];
  const files = fs.readdirSync(R).filter(f => /^audit_.*\.js$/.test(f));
  files.forEach(f => { try { cp.execSync('node ' + f, { cwd: R, stdio: 'pipe', maxBuffer: 1 << 28 }); } catch (e) { fails.push(f + ': ' + String(e.stdout || '').trim().split('\n').slice(-2).join(' | ')); } });
  if (fails.length) { console.log('QA GATE FAILED (' + fails.length + ' of ' + files.length + ' guards):\n' + fails.join('\n')); process.exit(1); }
  fs.mkdirSync(path.join(R, '.claude'), { recursive: true });
  fs.writeFileSync(path.join(R, '.claude', 'qa_stamp.json'), JSON.stringify({ hash: treeHash(), at: new Date().toISOString(), guards: files.length }));
  console.log('QA GATE PASSED: ' + files.length + ' guards, stamp written. Now do the browser QA (click every changed page type) and put a "QA:" line in the reply.');
}
module.exports = { treeHash };
