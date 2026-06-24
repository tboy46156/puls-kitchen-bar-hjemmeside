# Restaurant Website — Conversion Rate Optimisation

## The 3 Conversions That Matter

1. **Table reservation** (primary)
2. **Phone call** (secondary — high intent)
3. **Direction request / map click** (tertiary — foot traffic)

Everything else (social follows, newsletter signups) is vanity. Optimise for these three.

---

## Above the Fold (the first 5 seconds)

The single most important CRO principle: the visitor should be able to reserve a table without scrolling.

**Must-have above the fold:**
- Restaurant name visible
- One clear CTA: "Book bord" / "Book a Table"
- Cuisine type or USP (one line)
- No auto-playing audio

**CTA button rules:**
- High contrast with background — if background is dark, use white or gold button; if light, use dark or brand colour
- Minimum 48px tall, 160px wide
- Copy that creates action:
  - ✅ "Book bord nu" — direct, specific
  - ✅ "Reserver dit bord" — possessive, personal
  - ❌ "Kontakt os" — vague, low urgency
  - ❌ "Klik her" — no context

---

## Sticky Header Strategy

The sticky header is your persistent conversion surface. It must always show:

```
[Logo]  [Menu]  [Om os]  [Events]  [  Book bord  ]
                                    ↑ Always visible CTA button
```

**On scroll:** header can shrink (reduce padding) but "Book bord" must stay visible.

**Mobile sticky header:** Logo + hamburger + "Book" button. The booking CTA must NOT disappear into the hamburger.

---

## Booking Flow Optimisation

**Best-in-class booking flow = 3 steps maximum:**
1. Choose date + time + party size
2. Enter name + phone/email
3. Confirm

**Integration options (Denmark):**
- **DinnerBooking** — most popular in Denmark, integrates with website
- **OpenTable** — international, good for Copenhagen tourists
- **Resy** — growing in Scandinavia, strong UX
- **MaitreD / Book a Table** — local
- **Custom form** → email/SMS — only for very small restaurants, high friction

**Widget placement:**
- Embed inline on the homepage (visible without scrolling on desktop)
- Also embed on /contact as the primary element
- Do NOT open booking in a new tab — kills conversion

**After booking (confirmation page):**
- Thank clearly with date/time/party size
- Upsell: "Fejrer I noget særligt? Tilføj en flaske champagne →"
- Add to calendar button (Google Calendar + Apple Calendar)
- Capture email for remarketing (if not already done)

---

## The Menu as a Conversion Tool

The menu page is the #2 most visited page on any restaurant site. Optimise it like a product page.

**HTML menu vs PDF:**
| | HTML menu | PDF menu |
|--|-----------|----------|
| Mobile UX | Excellent | Poor |
| Google indexable | Yes | No |
| Linkable | Yes | Partially |
| Update frequency | Easy | Manual upload |
| Conversion | High | Low |

**Menu CRO tactics:**
- "Hero dishes" (3–5 per section) get a photo card — they anchor price perception and increase order intent
- Include prices — users who can't find prices bounce
- Dietary icons (V, VG, GF) reduce phone friction
- "Chef's recommendation" or "Most popular" label on 1–2 items per section — choice architecture
- Sticky "Book bord" button on mobile while browsing menu

---

## Trust Signals (near the booking CTA)

Social proof placed near or above the booking CTA increases conversion 15–30%.

**Best placement:** Between hero and first booking CTA, or as a section just above the "Book bord" section.

**Types ranked by impact:**
1. **Google/TripAdvisor star rating + review count** — "4.6 ★ · 78 anmeldelser på Google"
2. **Press mentions** — "Anbefalet af Politiken", "Årets bistro — AOK"
3. **Number of covers** — "Vi har serveret for 50.000+ gæster siden 2020"
4. **Specific pull-quotes** from reviews — use real quotes, not generic praise

---

## Urgency & Friction Reduction

**Urgency:**
- Real-time availability: "Kun 2 borde tilbage i aften" (if booking system supports)
- Seasonal CTAs: "Book nu til Valentine's Day → kun 12 borde tilbage"
- Event countdowns: "Nytårsmenu — 18 pladser tilgængelige"

**Friction reduction:**
- Show opening hours clearly on the homepage — don't make users search
- Phone number must be a tap-to-call link on mobile (`<a href="tel:+45XXXXXXXX">`)
- Address must link to Google Maps (`<a href="https://maps.google.com/?q=[address]">`)
- Show parking + public transport info on the contact page

---

## Mobile CRO (70%+ of restaurant traffic is mobile)

**Fixed bottom bar — the most impactful mobile CRO element:**
```css
.mobile-cta-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: [brand colour];
  padding: 12px 16px;
  display: flex;
  gap: 12px;
}
/* Hide on desktop */
@media (min-width: 768px) {
  .mobile-cta-bar { display: none; }
}
```

Contents: `[📞 Ring os]` `[Book bord →]` — two buttons, booking primary.

**Mobile speed = mobile conversion:**
Each 1-second delay in mobile load time reduces conversions by 7%.
Target: <2.5s LCP on mobile 4G connection.

---

## Analytics Setup (measure everything)

**Google Analytics 4 — conversion events to track:**
```javascript
// Track booking widget interaction
gtag('event', 'booking_started', { method: 'widget' });

// Track booking completion (fire on confirmation page)
gtag('event', 'booking_completed', { party_size: N });

// Track menu page view
gtag('event', 'menu_viewed');

// Track phone click
gtag('event', 'phone_click');

// Track directions click
gtag('event', 'directions_click');
```

**Free heatmap tool:** Microsoft Clarity (free, GDPR-compliant, shows clicks + scroll depth)
