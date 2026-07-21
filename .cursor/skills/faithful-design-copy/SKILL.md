---
name: faithful-design-copy
description: >-
  Pixel-faithful UI rebuild from a live reference site by measuring computed
  styles and verifying with side-by-side screenshots. Use when copying or
  porting a design from WordPress/Avada/live URL to Astro (or any stack), when
  the user asks for visual parity, design fidelity, "copy the design",
  measure-then-build, or complains the rebuild is not faithful.
---

# Faithful design copy

Rebuild UI from a **live reference**, not from theme options, memory, or guesses.

## Hard rules

1. **Measure, don't guess.** Before writing UI code for a section, read **computed styles** on the live page (`getComputedStyle` via browser CDP / DevTools). Theme option dumps (Avada `fusion_options`, Global Options, etc.) are hints only — they lie (e.g. Antic Slab on `h6` ≠ hero title).
2. **One section at a time.** Header → next section only after user OK. Never restyle the whole page in one pass.
3. **If you can't measure it, ask.** Do not invent fonts, colors, spacing, or structure.
4. **Proof before "done".** Screenshot reference + rebuild side-by-side. Quote measured values. Wait for user confirmation before the next section.

## Workflow (every section)

Copy and track:

```
Section: [name]
- [ ] 1. Open reference URL (match lang / viewport, e.g. 1920×1080)
- [ ] 2. Screenshot reference section
- [ ] 3. Measure computed styles (see checklist)
- [ ] 4. Write measured values into a short note (code comment or chat)
- [ ] 5. Implement only that section
- [ ] 6. Screenshot rebuild at same viewport
- [ ] 7. Diff measurements (height, font, padding, colors)
- [ ] 8. User confirms → next section
```

### What to measure

For the section root and key children (logo, nav link, heading, button, etc.):

- Box: `width`, `height`, `padding`, `margin`, `max-width`, position/float
- Type: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `text-transform`, `color`
- Chrome: `background-color`, `border`, `box-shadow`
- Layout: flex/grid/float, gaps between siblings (prefer `getBoundingClientRect` deltas)
- Assets: displayed image size + which file (`currentSrc`)

**Section-to-section gaps (easy to miss — measure every time):**

- Gap after previous section → this section (`margin-top` on section root, or `getBoundingClientRect` delta between previous bottom and this top)
- Within a section that has a header + grid/list: gap from heading/subtitle bottom → first media/item top (not only inner `padding`)
- Do **not** assume home-page portfolio margins apply unchanged after a colored band / quote bar — re-measure on the target URL
- Prefer deltas between visible boxes over summing nested margins (Avada fullwidths often use `margin-top: 80px` then a separate portfolio fullwidth `margin-top: 45px`)

Prefer **elements you can see** (e.g. hero `h2`) over global typography tables.

### CDP pattern

```js
// Runtime.evaluate, returnByValue: true
(() => {
  const el = document.querySelector('SELECTOR');
  if (!el) return null;
  const s = getComputedStyle(el);
  const r = el.getBoundingClientRect();
  return {
    w: Math.round(r.width), h: Math.round(r.height),
    fontFamily: s.fontFamily, fontSize: s.fontSize, fontWeight: s.fontWeight,
    lineHeight: s.lineHeight, letterSpacing: s.letterSpacing,
    textTransform: s.textTransform, color: s.color,
    backgroundColor: s.backgroundColor, padding: s.padding, margin: s.margin,
    border: s.border, boxShadow: s.boxShadow, display: s.display,
  };
})()
```

Match viewport to the reference when comparing (e.g. `Emulation.setDeviceMetricsOverride` 1920×1080).

## Anti-patterns (do not)

- Inferring hero/nav fonts from Avada H1–H6 option rows
- Using Tailwind greys/limes “close enough” instead of measured hex
- Building multiple sections before a visual checkpoint
- Calling something faithful without screenshots + measurement table
- Trusting AI screenshot captions for font names — always verify with `getComputedStyle`

## Checkpoint format (show the user)

```markdown
### [Section] checkpoint
**Reference:** [url]
**Rebuild:** [url]

| Property | Reference | Rebuild |
|---|---|---|
| height | … | … |
| font | … | … |
| padding | … | … |

Open both and confirm before I continue.
```

## This project (Garavaglia)

- Reference: `https://garavaglia.test/` (IT) / `https://garavaglia.test/en/home-2/` (EN)
- Rebuild: `http://localhost:4322/` (port may vary)
- Tokens live in `src/styles/tokens.css` + `src/data/tokens.ts` — update from measurements, not the reverse
- Design review page: `/design-system`

When the user says things like “test the header now” or “do the intro next”, run this skill’s workflow for that section only.
