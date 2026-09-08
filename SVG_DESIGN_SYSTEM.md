# canitakethis.co — SVG Design System
*Every inline SVG in every blog article must follow these rules exactly. No exceptions.*

---

## The problem this file solves
SVGs with hardcoded dark hex fills look correct in dark mode and completely broken in light mode (dark boxes on light background, unreadable text). All SVGs must adapt to both modes using CSS variables and the tokens below.

---

## CSS variable tokens — use these, never hardcoded hex

### Backgrounds (MUST use CSS vars)
| Purpose | CSS var | Dark value | Light value |
|---------|---------|------------|-------------|
| SVG outer background | `var(--surface)` | `#161F3A` | `#FFFFFF` |
| Card / panel fill | `var(--surface-2)` | `#22304F` | `#F0EEE4` |
| Body text | `var(--text)` | `#EDF0F7` | `#1B2233` |
| Secondary text | `var(--muted)` | `#8A96B8` | `#6B7488` |
| Border lines | `var(--line)` | `#2A3A5E` | `#DED9CB` |

### Accent colors — MANDATORY light/dark switching
| Color | Light mode | Dark mode | Use for |
|-------|-----------|-----------|---------|
| Blue | `#1E86D6` | `#4CC2FF` | Info, neutral, question nodes |
| Green | `#2FCF9B` | `#2FCF9B` | Allowed / go / success |
| Amber | `#F5B841` | `#F5B841` | Warning / partial |
| Red | `#FF6B6B` | `#FF6B6B` | Banned / stop / error |

**GREEN, AMBER, RED are the same in both modes — hardcode them directly.**
**BLUE MUST switch.** `#4CC2FF` is too light on a white/cream background. Always use CSS classes:

```svg
<style>
  .c-blue{fill:#1E86D6}
  .c-blue-s{stroke:#1E86D6}
  [data-theme="dark"] .c-blue{fill:#4CC2FF}
  [data-theme="dark"] .c-blue-s{stroke:#4CC2FF}
</style>
```

Never write `fill="#4CC2FF"` or `stroke="#4CC2FF"` directly on any element. Always use `.c-blue` / `.c-blue-s` classes so it adapts.

**For tinted panel fills behind text, use `fill-opacity` (0.08–0.15) so they work on any background.**

---

## CRITICAL: c-{ramp} classes DO NOT work in blog articles

`c-blue`, `c-red`, `c-green`, `c-teal` etc. are widget-system classes only. They do NOT exist in `guideShell` CSS. Using them in article SVGs produces black fills and invisible text.

**In article SVGs, always use explicit fills:**
- Question/neutral nodes: `fill:var(--surface-2)` + `stroke:var(--accent)`
- Text in nodes: `fill:var(--text)`
- Green success: `fill:none; stroke:#2FCF9B` + tint rect `fill:#2FCF9B; fill-opacity:0.12` + text `fill:#1a7a54` (light) / `fill:#2FCF9B` (dark via `[data-theme="dark"]`)
- Red stop: `fill:none; stroke:#FF6B6B` + tint rect `fill:#FF6B6B; fill-opacity:0.12` + text `fill:#922020` (light) / `fill:#FF6B6B` (dark)
- Blue accent text: `fill:#1E86D6` + `[data-theme="dark"]` override to `fill:#4CC2FF`
- Connectors: `stroke:var(--muted)`

Always use a `<style>` block inside the SVG with these explicit classes.

---

## Mandatory SVG structure

### Every SVG must have a `<style>` block using CSS vars:
```svg
<svg viewBox="..." xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:Xpx;margin:1.5em 0;display:block" role="img" aria-label="...">
  <style>
    .bg{fill:var(--surface)}
    .card{fill:var(--surface-2)}
    .txt{font-family:Inter,sans-serif;font-size:12px;fill:var(--text)}
    .muted{font-family:Inter,sans-serif;font-size:11px;fill:var(--muted)}
    .head{font-family:Space Grotesk,sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;fill:var(--muted)}
  </style>
  <rect x="0" y="0" width="W" height="H" rx="14" class="bg"/>
  ...
</svg>
```

### Colored panel (tinted, works light+dark):
```svg
<!-- DO THIS — transparent tint over card background -->
<rect x="16" y="42" width="164" height="122" rx="10" fill="none" stroke="#2FCF9B" stroke-width="1.5"/>
<rect x="16" y="42" width="164" height="122" rx="10" fill="#2FCF9B" fill-opacity="0.08"/>

<!-- NEVER THIS — hardcoded dark fill -->
<rect x="16" y="42" width="164" height="122" rx="10" fill="#0a1f0a" stroke="#2FCF9B" stroke-width="1.5"/>
```

### Text on colored panels:
- Use the accent color directly for text (`fill="#2FCF9B"`) — it reads on both light and dark tinted backgrounds
- Never use white or `#EDF0F7` as text color on panels — invisible in light mode

---

## viewBox sizing rules
- Always make viewBox wide enough so NO text is clipped
- After writing SVG, count the longest text string and verify it fits
- Minimum widths by content type:
  - 3-column panels: `560px`
  - 4-row status grids: `600px`
  - Flowcharts: `500px`
  - Bag/bottle diagrams: `480px`
- When in doubt: go wider. Text clipping = must fix before shipping.

---

## Flowchart nodes
```svg
<!-- Question node -->
<rect ... class="card" stroke="#4CC2FF" stroke-width="1.5"/>
<text ... class="txt" text-anchor="middle">Question text</text>

<!-- YES result (green) -->
<rect ... fill="none" stroke="#2FCF9B" stroke-width="1.5"/>
<rect ... fill="#2FCF9B" fill-opacity="0.10"/>
<text ... fill="#2FCF9B" text-anchor="middle">✓ Result</text>

<!-- NO result (red) -->
<rect ... fill="none" stroke="#FF6B6B" stroke-width="1.5"/>
<rect ... fill="#FF6B6B" fill-opacity="0.10"/>
<text ... fill="#FF6B6B" text-anchor="middle">✗ Result</text>

<!-- Connector lines -->
<line ... stroke="var(--muted)" stroke-width="1.5"/>

<!-- YES/NO labels -->
<text ... class="muted">YES</text>
```

---

## Pre-ship SVG checklist
Before every article preview is delivered:
- [ ] No hardcoded dark hex (`#161F3A`, `#0d1f30`, `#0a1f0a`, `#1a0505`, `#1a1500`, `#182238`) as rect fills
- [ ] All background rects use `var(--surface)` or `var(--surface-2)` or `fill-opacity` tint
- [ ] All body text uses `var(--text)` or `var(--muted)`
- [ ] No white text (`#fff`, `#EDF0F7`) on colored panels
- [ ] viewBox wide enough — no text clips
- [ ] Tested mentally in light mode: would every element be readable on a white background?

---

## Flowchart routing rules
Lines must NEVER cross or overlap text. Always route precisely:
- Down connectors: from exact bottom-centre of source node to exact top-centre of target node
- Left (NO) connectors: from exact left-centre of source node to exact right-centre of NO node — straight horizontal line only
- Right (YES) connectors: from exact right-centre of source node to exact left-centre of YES node — straight horizontal line only
- NO nodes always sit to the LEFT at x=10, width=140, right edge=150
- YES side nodes always sit to the RIGHT at x=450+
- Main column always centred at x=310, node width=240 (x=190..430)
- Canvas must be wide enough: minimum 620px for a flowchart with side nodes on both sides

## Image prompt format (ChatGPT)

Deliver one prompt per new image file, in this exact format, in the same message as the article preview:

```
## Image prompts for ChatGPT

**`blog-[slug]-hero.webp`** (800×400px)
> [Detailed prompt: subject, composition, lighting, style, mood, colours, what NOT to include]

**`blog-[slug]-[descriptor].webp`** (800×320px)
> [Detailed prompt]
```

Rules for prompts:
- Specify exact dimensions in the prompt
- State: subject, angle/composition, lighting, colour palette, style (editorial/flat/realistic)
- Always end with: "No text overlays. No logos. No brand names."
- Images already committed to repo = no new prompt needed
- Deliver prompts BEFORE the zip is packaged, in the same message as the preview HTML file
