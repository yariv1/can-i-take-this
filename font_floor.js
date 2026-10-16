// Global 14px font floor (DESIGN_SYSTEM.md 8.25). No text on the site is smaller than 14px.
// build.js write() runs every generated page through floorFonts(); audit_font_floor.js fails the build if anything slips through.
const MIN = 14;
function fix(css) {
  return css.replace(/font-size:\s*([\d.]+)(px|rem)/g, (m, n, u) => {
    const px = u === 'px' ? +n : +n * 16;
    return px < MIN ? 'font-size:' + MIN + 'px' : m;
  });
}
function floorFonts(html) {
  html = html.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (m, a, b, c) => a + fix(b) + c);
  html = html.replace(/(\sstyle=")([^"]*)(")/g, (m, a, b, c) => a + fix(b) + c);
  return html;
}
module.exports = { floorFonts, fix, MIN };
