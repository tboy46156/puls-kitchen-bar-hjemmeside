# Restaurant Website — Page Structure

## Sitemap

```
/ (Home)
/menu
/about
/gallery          ← only if 20+ professional photos
/events           ← only if events happen >1x/month
/contact          ← doubles as booking page
/privacy-policy   ← required for GDPR (EU/Denmark)
```

Single-page scroll works for smaller restaurants. Multi-page is better for SEO.

---

## Page Blueprints

### Home (/)
**Goal:** Communicate identity in <3 seconds, drive to booking or menu.

Sections in order:
1. **Hero** — Full-viewport image or ambient video loop. Restaurant name, one-line USP, primary CTA ("Book bord" / "Book a Table") + secondary CTA ("Se menu"). Zero paragraph text here.
2. **Atmosphere strip** — 3–4 interior/vibe photos. No copy needed.
3. **Concept teaser** — 2–3 sentences max. Who you are, what you serve, what makes you different. Link → /about.
4. **Featured dishes** ��� 3 hero dishes with photo + name + 1-line descriptor. Link → /menu.
5. **Social proof** — Google/TripAdvisor rating + count, or 1–2 press pull-quotes. Place near booking CTA.
6. **Booking CTA block** — Full-width: "Klar til at besøge os?" + embedded booking widget or "Book bord" button.
7. **Hours + Location** — Opening hours, address, phone (tap-to-call), Google Maps embed.
8. **Footer** — Logo, nav links, social icons, address, privacy policy.

### Menu (/menu)
**Goal:** Remove friction between "I'm curious" and "let's book."

- Sticky section tabs: Brunch / Frokost / Middag / Drinks
- Desktop: 3-column grid. Mobile: 1-column.
- Each item: **Name** — *description (1 line)* — price (right-aligned)
- Dietary icons inline: V / VG / GF / N
- 3–5 "hero dishes" per section get a photo card; rest are text-only
- Sticky "Book bord" floating button on mobile while scrolling
- Seasonal notice at top: "Menuen opdateres [måned]."
- **NEVER use PDF-only.** PDFs are not crawlable, terrible on mobile, and kill conversion.

### About (/about)
**Goal:** Build trust and emotional connection. Underrated for long-tail SEO.

1. Full-width hero — chef, team, or atmospheric shot
2. The story — 2–3 paragraphs. Founding year, inspiration, location context, culinary philosophy. First person or brand voice.
3. Chef/team feature — photo + 3–4 line bio
4. Values — sustainability, local sourcing, seasonal menus
5. CTA — "Kom og oplev det" → Book button

### Contact / Book (/contact)
**Goal:** Zero-friction reservation or enquiry.

- Embedded booking widget at top (no scrolling required)
- Phone (large, tap-to-call `tel:` link)
- Email
- Address + Google Maps embed
- Opening hours (clear table layout)
- Transport info (Metro, cycling, parking)
- Private dining / event enquiry form (separate from general booking)

---

## HTML Head Template (every page)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Page] | [Restaurant Name] – [Cuisine] i [Neighbourhood]</title>
<meta name="description" content="[150–160 chars, include primary keyword + USP + CTA]">
<link rel="canonical" href="[full URL]">

<!-- Open Graph -->
<meta property="og:title" content="[Restaurant Name]">
<meta property="og:description" content="[Short description]">
<meta property="og:image" content="[Hero image URL — min 1200×630px]">
<meta property="og:url" content="[Page URL]">
<meta property="og:type" content="restaurant">

<!-- Performance: preload hero -->
<link rel="preload" as="image" href="[hero.webp]">
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | <2.5s |
| CLS (Cumulative Layout Shift) | <0.1 |
| Page weight (home) | <2MB |
| Image format | WebP everywhere |
| Hero image file size | <400KB |
| Mobile PageSpeed score | >80 |

---

## Mobile Layout Rules

- Header: Logo centred, "Book" button always visible (NOT inside hamburger)
- Hero: Test portrait crop (4:5 or 9:16) on real devices
- Menu: Horizontally scrollable section tabs
- CTA: Fixed bottom bar — "Book bord" — always in view while scrolling
- Footer: Stacked vertically, large tap targets for phone + address
