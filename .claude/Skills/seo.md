# Restaurant SEO — Complete Guide

## 1. Local SEO Foundations

Local SEO is the highest-ROI SEO investment for a restaurant. Most diners search "[cuisine] near me" or "[cuisine] [neighbourhood]".

**NAP Consistency (Name, Address, Phone)**
The exact same name, address format, and phone number must appear identically on:
- Website (footer + contact page)
- Google Business Profile
- TripAdvisor, The Fork, OpenTable
- Facebook, Instagram bio
- Danish directories: Krak.dk, De Gule Sider, VisitCopenhagen.dk

Even minor variations ("Ørestad" vs "Ørestaden") split your local authority.

**Danish Citation Targets**
Google Business Profile → TripAdvisor → The Fork/LaFourchette → OpenTable → Krak.dk → De Gule Sider → VisitCopenhagen → VisitDenmark → Zomato → Foursquare

---

## 2. Keyword Strategy

**Primary formula:** `[cuisine] restaurant [neighbourhood/city]`

Examples for a restaurant in Ørestad:
- "restaurant ørestad" (highest local intent)
- "bistro ørestad"
- "brunch ørestad"
- "middag ørestad"
- "restaurant ved royal arena"
- "restaurant nær fields"
- "restaurant københavn amager"

**Long-tail examples:**
- "brunch restaurant med terrasse københavn"
- "restaurant til selskaber ørestad"
- "nordisk restaurant københavn"

**Keyword placement priorities:**
1. `<title>`: `[Restaurant Name] – [Cuisine] Restaurant i [Neighbourhood], [City]`
2. `<h1>`: Naturally contains primary keyword
3. `<meta description>`: Primary keyword + USP + CTA (max 155 chars)
4. Hero image alt text: "[Restaurant name] indendørs – [cuisine] restaurant i [neighbourhood]"
5. First paragraph of homepage copy

---

## 3. Schema Markup (JSON-LD) — Copy & Customise

Place in `<head>` on homepage. Validate at search.google.com/test/rich-results

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "[Restaurant Name]",
  "description": "[1–2 sentence description with cuisine types and location]",
  "url": "https://[domain].dk",
  "telephone": "+45-XX-XX-XX-XX",
  "email": "kontakt@[domain].dk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Gade og nummer]",
    "addressLocality": "[Bydel]",
    "addressRegion": "København",
    "postalCode": "[XXXX]",
    "addressCountry": "DK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [XX.XXXX],
    "longitude": [XX.XXXX]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"],
      "opens": "11:30",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday","Saturday"],
      "opens": "11:30",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "servesCuisine": ["Nordic", "French", "Italian"],
  "priceRange": "$$",
  "currenciesAccepted": "DKK",
  "paymentAccepted": "Cash, Credit Card, MobilePay",
  "image": ["[hero image URL]", "[food image URL]"],
  "sameAs": [
    "https://www.facebook.com/[handle]",
    "https://www.instagram.com/[handle]"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[X.X]",
    "reviewCount": "[N]"
  },
  "menu": "https://[domain].dk/menu",
  "acceptsReservations": "True"
}
```

---

## 4. Technical SEO Checklist

**Crawlability**
- [ ] robots.txt doesn't block key pages
- [ ] XML sitemap at /sitemap.xml, submitted to Google Search Console
- [ ] Menu is HTML (not PDF-only)
- [ ] No broken links

**Performance**
- [ ] All images WebP format
- [ ] Images lazy-loaded (except above-fold hero)
- [ ] Hero image preloaded with `<link rel="preload">`
- [ ] Core Web Vitals pass (PageSpeed Insights)

**Mobile**
- [ ] Responsive on iPhone SE, iPhone 14, Samsung Galaxy
- [ ] Tap targets ≥44px
- [ ] Phone: `href="tel:+45XXXXXXXX"`
- [ ] Address links to Google Maps

**Legal / Trust (EU/Denmark)**
- [ ] HTTPS active
- [ ] GDPR cookie notice
- [ ] Privacy policy page linked from footer
- [ ] `<link rel="canonical">` on every page

---

## 5. Google Business Profile

Single highest-impact local SEO action. Fully-optimised GBP appears in the "local pack" (3 map results).

**Must-complete fields:**
- [ ] Business name (exact match to website)
- [ ] Category: "Restaurant" + secondary (e.g. "French Restaurant", "Bar")
- [ ] Address (exact NAP match)
- [ ] Phone + website URL
- [ ] Opening hours (including holiday hours)
- [ ] 10+ photos: exterior, interior, food, team — updated monthly
- [ ] Menu link → /menu
- [ ] Reservations link → booking widget or /kontakt
- [ ] Description (750 chars, include primary keyword naturally)
- [ ] Services and attributes (outdoor seating, vegetarian options, etc.)

**Ongoing (weekly minimum):**
- Post 1 GBP update (photo + text)
- Respond to ALL reviews within 48 hours
- Update holiday hours proactively

**Google Review QR code:**
Generate: `https://g.page/r/[PLACE_ID]/review`
Print and display on tables + receipts. Train staff to ask verbally after positive experiences.

---

## 6. AI/GEO Visibility (2025+)

AI assistants (ChatGPT, Gemini, Perplexity) increasingly answer "where should I eat in [area]" queries. To appear in AI recommendations:
- Schema markup is essential — AI reads structured data
- Consistent NAP across all platforms
- FAQ page directly answering questions AI gets asked: "What type of food does X serve?", "Does X take reservations?", "Is X good for groups?"
- High review volume with keyword-rich text
- Fresh content (recently updated sites rank higher in RAG lookups)
