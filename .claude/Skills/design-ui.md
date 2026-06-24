# Restaurant Website — Design & Visual Hierarchy

## The Golden Rule

Professional food photography is the #1 design investment. A well-designed site with amateur photography loses to a simpler site with great photography every time.

---

## Visual Hierarchy Principles

### 1. Hero Section (the make-or-break moment)
The visitor forms a first impression in 50 milliseconds. The hero must:
- Fill the full viewport (100vh)
- Communicate the restaurant's identity and price tier instantly
- Contain ONE primary CTA — not two, not three
- Use no more than 6–8 words of visible text

**Hero options:**
- Full-screen still photo (safest, fastest)
- Ambient video loop, no audio autoplay (highest emotional impact, heavier)
- Parallax scroll effect (editorial feel, good for fine dining)

**What kills heroes:**
- Stock photography (immediately signals "generic")
- Text over busy images without overlay/gradient
- Multiple CTAs competing for attention
- Centred text + centred CTA on mobile (use left-aligned for Western languages)

### 2. Reading Pattern (F and Z)
Users scan in predictable patterns. Place your most important elements accordingly:
- **F-pattern**: Long pages (like the menu) — users read the first line, then scan down the left
- **Z-pattern**: Landing pages (like the homepage hero) — eyes move: left → right → diagonal down → left → right

### 3. Visual Weight & Contrast
- Headlines: large, bold, high contrast
- CTAs: high contrast with background (never subtle)
- Body text: min 16px, line-height 1.5–1.7, max 65 chars per line
- Whitespace is not wasted space — it is a luxury signal

---

## Colour Psychology for Restaurants

| Positioning | Palette | Avoid |
|-------------|---------|-------|
| Fine dining | Black, deep navy, gold, off-white | Bright primaries, pastels |
| Modern bistro | Warm terracotta, olive, cream, warm grey | Cold blues, harsh neons |
| Casual / brunch | Sage green, sand, warm white, dusty pink | Black-heavy, ultra-minimal |
| Bar / cocktails | Dark backgrounds, amber, copper accents | Overly clean/clinical whites |

**Rules:**
- Max 3 brand colours + neutrals (white, near-black, mid-grey)
- CTA button should use the single most "action" colour in the palette
- Never use pure `#000000` black — use `#1a1a1a` or `#111` for warmth
- Test all colour combos for WCAG AA contrast (4.5:1 ratio minimum for body text)

**Tools:** Coolors.co, Realtime Colors, Adobe Color

---

## Typography

### Scale (3 levels — no more)

| Level | Role | Characteristics |
|-------|------|-----------------|
| Display / Hero | Restaurant name, hero headline | Large (48–96px), personality font, tight letter-spacing |
| Heading | Section titles, menu categories | Medium (24–40px), may match display or be simpler |
| Body | Descriptions, paragraph text | Highly readable, 16–18px, generous line-height |

### Font Pairing Patterns

**Fine dining:**
- Display: Cormorant Garamond, Playfair Display, or custom serif
- Body: Inter, Source Sans, or Gill Sans

**Modern bistro (like Puls):**
- Display: Space Grotesk, DM Sans Bold, or Libre Baskerville
- Body: Inter or DM Sans regular

**Rules:**
- Max 2 typefaces per site
- Never use default system fonts if you care about brand
- Headline letter-spacing: -0.02em to -0.04em (tighter feels more premium)
- Body letter-spacing: 0 to 0.01em (never tighten body text)
- Google Fonts are free and load fast: fonts.google.com

---

## Photography Guidelines

### What to shoot (brief your photographer):
1. **Hero shot** — wide interior with good lighting, ideally showing the vibe (no empty chairs)
2. **Atmosphere** — details: candles, textures, table settings, bar shelf
3. **Food** — 5–8 signature dishes. Lit from side or 45°, not straight overhead for fine dining
4. **Team** — chef in action, candid staff moments (not stiff posed portraits)
5. **Exterior** — daytime AND evening if the restaurant has evening ambiance

### Technical requirements:
- Minimum 2000px wide for hero images
- Deliver in WebP (or convert from JPG — never PNG for photos)
- Hero: compress to <400KB
- Product shots: compress to <150KB each
- Use tools: Squoosh.app (free), TinyPNG, or Cloudinary

### What kills restaurant photography:
- Empty restaurant shots
- Flash-lit "forensic" food photography
- Inconsistent colour temperature across images
- Watermarks or visible metadata

---

## Layout Patterns from Award-Winning Restaurant Sites

### Storytelling scroll (most effective homepage structure)
```
HERO (atmosphere/emotion)
↓
FOOD (what you eat)
↓
STORY (who we are)
↓
SOCIAL PROOF (why trust us)
↓
RESERVATION CTA (take action)
↓
LOCATION (how to find us)
```

### Menu presentation options (ranked by design quality)
1. **Card grid with photos** — highest engagement, shows off food
2. **Editorial list** — clean, fast, typographic (great for fine dining)
3. **Tabbed sections** — good UX when many sections
4. **PDF link only** — unacceptable. Don't do this.

### Microinteractions (elevate the experience)
- Button hover: subtle scale (1.02) + colour shift
- Nav link hover: underline slide-in
- Image hover: slight zoom (scale 1.05, overflow hidden)
- Booking form: field focus rings that match brand colour

### CSS for smooth image zoom on hover:
```css
.dish-card img {
  transition: transform 0.4s ease;
}
.dish-card:hover img {
  transform: scale(1.05);
}
.dish-card {
  overflow: hidden;
}
```

---

## Mobile-First Design Checklist

- [ ] Hero reads well at 375px width (iPhone SE)
- [ ] CTA button is ≥48px tall, full-width on mobile
- [ ] Text never smaller than 16px
- [ ] No horizontal scrolling
- [ ] Tap targets ≥44×44px (WCAG requirement)
- [ ] Images don't stretch or crop badly at mobile ratio
- [ ] Navigation is a hamburger with "Book" visible outside it
- [ ] Fixed bottom CTA bar visible while scrolling

---

## Design Inspiration Sources

- awwwards.com/websites/restaurant/ — award-winning restaurant sites
- cssdesignawards.com — high-end UI benchmarks
- land-book.com — curated landing pages
- httpster.net — minimal, typographic sites
- Use browser DevTools to inspect any site you admire
