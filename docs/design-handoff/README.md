# Handoff: Ascending Legacy Inc. website

## Overview
Marketing site for Ascending Legacy Inc., a Metro Vancouver life, health and travel insurance advisory (Chris Asuncion, licensed advisor). Goal: convert referrals and paid search traffic (Super Visa, visitors to Canada, snowbird) into quote requests and booked calls. Brand feel: a private wealth office — calm, expensive, human.

## About the design files
`Ascending Legacy Website v2.dc.html` is a **design reference built in HTML**, not production code. Open it in a browser (it needs `support.js` next to it) to see the intended look and behaviour. Recreate it in the target stack. If no stack exists yet, recommended: **Astro or Next.js (static export) + Tailwind**, a form backend (Formspree, Netlify Forms or a serverless function emailing Chris) and a Calendly embed. Content-heavy pages (Insights) should be Markdown/MDX.

All styles are inline in the reference file — extract them into tokens and components.

## Fidelity
**High fidelity.** Colours, type, spacing and copy are final for the demo. Replace placeholder data before launch (see "Placeholder content").

## Sitemap (from brief)
Built in the reference: **Home, Travel Insurance hub, Super Visa Insurance, Get a Quote, Thank-you.**
To build from the same patterns:
- Travel children: **Visitors to Canada, Snowbird Coverage, Trip and Vacation Coverage** — clone the Super Visa template; rewrite intro + "What decides the price". Snowbird adds a section on how many days a BC resident can be outside the province without losing MSP.
- **Protect Your Income, Protect Your Family, Business Owners** — use the Super Visa page structure (split hero → two-column content → beige split with photo → navy section → CTA).
- **How It Works** — expand the home 4-step block, one paragraph per step + "what to bring" (current policies, employer benefits booklet, rough monthly budget).
- **About** — headline "It all starts with a conversation.", story, vision, mission, team (Chris, Julian), carriers.
- **Insights** — article index + 3 starter articles: "Super Visa insurance requirements for 2027, explained", "What 'stable pre-existing condition' actually means on a travel policy", "Critical illness vs disability insurance: which one do you need first".
- **Contact** — Chris (casuncion@ascendinglegacy.ca, 604 555 0148), Julian (jasuncion@ascendinglegacy.ca), service area, office 4710 Kingsway, Suite 1200, Burnaby, map embed, short form.
- Privacy Policy, Terms.

Full copy for every page is in the original content brief; copy in the reference file is the source of truth where it exists.

## Design tokens

### Colours
| Token | Hex | Use |
|---|---|---|
| navy | `#0c1522` | Header, footer, dark sections, primary ink on gold |
| navy-2 | `#131f30` | FAQ rows on navy |
| navy-photo-fallback | `#1b2a3f` | Image background while loading |
| ink | `#121a26` | Body text on light |
| ink-muted | `#4a5260` | Secondary text on light |
| ink-muted-2 | `#3d4552` | Secondary text on beige |
| paper | `#f3eee6` | Page background, text on navy |
| beige | `#e9e2d6` | Alternate light section, placeholder blocks |
| field | `#fbf8f3` | Input background |
| field-border | `#cdc2b0` | Input border 1.5px |
| gold | `#b8935a` | Primary button, short rules, large numerals, links on navy |
| gold-hover | `#c9a66d` | Primary button hover |
| gold-light | `#d9c39b` | Eyebrow text / italic accents on navy |
| link-on-light | `#8a6a3a` | Text links on paper |
| on-navy-body | `#d6dae1` | Body text on navy |
| on-navy-muted | `#b3bac5`, `#9aa3b0` | Small print on navy |

Gold is an accent only — never a full section background.

### Typography
- **Display serif:** Bodoni Moda (Google Fonts, opsz 6..96), weight 400, italic 400 for accent phrases. Never bold.
- **Sans:** Hanken Grotesk 400/500/600.
- Body: 18px / 1.65 (19–21px for lead paragraphs). Never below 15px (footer small print only).
- Scale (fluid, `clamp(min, vw, max)`):
  - H1 home: `clamp(46px, 6.2vw, 92px)`, line-height 1.04, letter-spacing -0.02em
  - H1 inner pages: `clamp(44px, 5.4–5.8vw, 82–86px)`
  - H2: `clamp(40px, 4.4vw, 64px)`, lh 1.06, ls -0.015em
  - H2 large (Advice first / CTA): `clamp(44–48px, 5.2–6.4vw, 76–96px)`
  - Large numerals (gold serif): `clamp(64px, 6vw, 88px)`, lh 0.9
  - Card titles: 34px serif; list statements 24–30px serif
  - Eyebrow: 16px sans with a 40×2px gold rule to the left (sentence case, no letter-spacing)
- Use `text-wrap: balance` on headlines, `pretty` on paragraphs.

### Spacing & layout
- Container: max-width 1360px, side padding `clamp(24px, 4vw, 64px)`.
- Section vertical padding: `clamp(88px, 11vw, 160px)` (smaller sections 56–88px).
- Section heading block: 48×2px gold rule, 26px gap, then H2.
- Grids: `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` — N = 240 (steps), 300 (trust), 320 (cards/reviews), 420–480 (split sections).
- Radius: 0 everywhere. No shadows. No hairline dividers.

### Buttons
- Primary: gold bg, navy text, 600, 16–17px, height 56px (header 48px), padding 0 32px, no radius. Hover → `#c9a66d`.
- Secondary (on navy/photo only): transparent, 1.5px border `rgba(243,238,230,0.7)`, paper text, 500. Hover → border gold, text gold-light.
- Text links: 600, 17px, with " →".

## Screens

### Global header (sticky, navy, 84px tall)
- Left: logo lockup `images/ali-lockup-light.png`, height 40px.
- Centre (≥1240px): nav — Travel Insurance, Protection, Business Owners, How It Works, About, Insights. 16px paper, hover gold.
- Right: phone "604 555 0148" (≥1240px), primary button "Get a Quote" (48px tall).
- <1240px: nav + phone hidden; "Menu" text button opens full-screen navy overlay (links in 36px serif, phone in gold below). "Close" to dismiss. Navigating closes it.

### Mobile sticky bar (<900px)
Fixed bottom, 60px, two halves: "Call" (navy, `tel:6045550148`) | "Get a quote" (gold). Add 60px bottom padding to the page.

### Home
1. **Hero** — full-bleed photo, `min-height: calc(94vh - 84px)`, overlay `linear-gradient(90deg, rgba(12,21,34,.94) 0%, rgba(12,21,34,.78) 38%, rgba(12,21,34,.12) 78%)`, image position 75% 30%. Content left, max-width 760px: eyebrow → H1 ("Coverage you understand, from someone who *picks up the phone.*" — last phrase italic) → subhead → buttons (Get a quote / Book a conversation) → quiet line "Independent advice across Manulife, Industrial Alliance and Equitable Life."
2. **Trust strip** (navy) — 3 columns: "12" + "years advising families in BC"; "5.0" + "average across 48 Google reviews"; "Licensed advisors" + "Life and accident and sickness, Insurance Council of BC". Numerals gold serif.
3. **Three doors** (paper) — heading "What do you need to protect?" left, short paragraph right. Three portrait (4:5) photo cards: Travel, Income and family, Business owners. **Middle card offset down** `margin-top: clamp(0px, 5vw, 80px)`. Each: photo, 34px serif title, body, gold link.
4. **Advice first** (navy) — split. Left: H2 "Advice first. / *Products second.*" (second line italic, gold-light) + body. Right: 2×2 grid of serif statements, each with a 28×2px gold rule above.
5. **Process** (paper) — H2 "Four steps, one advisor the whole way." + 4 columns: gold numeral, serif step name, description.
6. **Advisor spotlight** (navy) — split: Chris photo full-bleed left (`images/chris.png`, position 60% 20%), text right: "Meet Chris Asuncion." + bio + "About Chris →".
7. **Reviews** (paper) — H2 left, "5.0 from 48 Google reviews" right. 3 columns: gold serif open-quote, quote in 22–26px serif, name + "Google review, 5 stars".
8. **Final CTA** — full-bleed photo with `linear-gradient(0deg, rgba(12,21,34,.92), rgba(12,21,34,.72))`. "Let's have a *conversation.*", body, buttons Get a quote / Call 604 555 0148.

### Travel Insurance hub
1. Hero photo (80vh), headline "Travel insurance that meets the requirement and *pays the claim.*", content bottom-left.
2. Intro split: first sentence as large serif left; rest + "Get a travel quote" right.
3. Navy split: photo left; right a stacked list of 4 links (serif 30–38px + description): Super Visa Insurance, Visitors to Canada, Snowbird Coverage, Trip and Vacation Coverage.
4. Brief also calls for the quote form embedded at the bottom — add it.

### Super Visa Insurance (template for other travel pages)
1. Navy split hero: back link "Travel insurance" with gold rule, H1 "Super Visa insurance, done right *the first time.*", intro, buttons (Get a Super Visa quote / Call). Photo right.
2. Two columns: "What it covers" (body + big gold "$100,000–500,000") | "What decides the price" (5 factors as serif list + "We will tell you the number on the first call.").
3. Beige split: "Pre-existing conditions, explained." + photo right.
4. "How it works" — 4 gold numerals + serif step.
5. Navy FAQ accordion — 4 questions (copy in file). One open at a time; first open by default. Rows `#131f30`, 8px gap, "+"/"−" in gold.
6. CTA row: "Get a Super Visa quote." + button.

### Get a Quote
Split, full viewport height. Left navy: rule, H1 "Tell us who needs coverage. *We will call you back the same business day.*", then "Prefer to talk now?" + phone in gold serif + licence/premium disclaimer. Right: form.
Fields: Your name* · Phone* · Email · What do you need (Super Visa, Visitors to Canada, Snowbird, Trip, Income protection, Life insurance, Business) · Traveller or insured person's age · Country of origin (**only when a travel option is selected**) · Coverage start date · Length of coverage · Pre-existing conditions (segmented Yes / No / Not sure, default No) · Anything else. Submit "Request my quote" → Thank-you page.
Inputs: 54px tall, `#fbf8f3` bg, 1.5px `#cdc2b0` border, 18px text, gold focus outline.

### Thank-you
Split: navy left "Thanks, we have your details." + "Chris will call you within one business day. Want to pick a time instead?"; right: **Calendly inline embed** (placeholder block in reference).

### Footer (navy)
4 columns: stacked logo (`images/ali-logo-light.png`, 200px wide) + "Life, health and travel insurance advisors in Metro Vancouver." · Talk to Chris (phone in serif, email) · Service area (+ address) · Follow (LinkedIn, Instagram — real profile URLs). Bottom row: "Chris Asuncion, licensed with the Insurance Council of BC. © 2027 Ascending Legacy Inc." + Privacy Policy, Terms.

## Interactions & behaviour
- **Scroll reveal:** elements marked `data-fade` that start below the fold fade up (opacity 0→1, translateY 20px→0, 0.9s ease) once, when 10% visible (IntersectionObserver). Respect `prefers-reduced-motion`. No carousels, no animated counters.
- Hover: buttons lighten; text links shift colour. No transforms.
- Page change scrolls to top.
- Form: name and phone required; validate phone format; on success go to /thank-you. Send to Chris by email + log a row (source, segment, page, UTM) for the lead sheet. Add call tracking number swap for Google Ads traffic.

## SEO / tracking (from audit)
- Unique `<title>` and meta description per page. Target pages: Super Visa insurance Vancouver, visitors to Canada insurance, snowbird travel insurance BC, critical illness insurance Vancouver.
- LocalBusiness / InsuranceAgency schema with phone, address, service area.
- GA4 + Google Ads conversion on quote submit and `tel:` clicks. Capture UTMs into the form.

## Compliance (BC)
- Every page names the advisor and licence status (footer covers it; the quote page repeats it).
- No guaranteed approval or claim payment; no premium quoted without age/condition inputs.
- Carrier names/logos only with each carrier's permission.

## Placeholder content — replace before launch
Phone 604 555 0148, office address, "12 years", "48 Google reviews / 5.0", all three reviews, Julian's bio, social URLs. Stock photos (Unsplash, URLs inline in the reference file) except `images/chris.png` (Chris, supplied by client).

## Assets
- `images/chris.png` — Chris Asuncion (from client site).
- `images/ali-logo-original-black.png` — original logo, black, transparent.
- `images/ali-logo-light.png` — stacked logo recoloured `#f3eee6`.
- `images/ali-lockup-light.png` — horizontal lockup (mark + wordmark) in `#f3eee6`, for the header.
- `images/ali-mark-gold.png` — mark only, gold (favicon / small use).
- Stock photography: Unsplash (free licence), IDs in the reference file: hero/CTA family `1609220136736-443140cffec6`, Vancouver `1559511260-66a654ae982a`, travel `1436491865332-7a61a109cc05`, family `1484665754804-74b091211472`, business `1577415124269-fc1140a69e91`, lake `1476514525535-07fb3b4ae5f1`, paperwork `1450101499163-c8848c66ca85`. Download and self-host them in production.
- Fonts: Bodoni Moda, Hanken Grotesk (Google Fonts) — self-host.

## Files
- `Ascending Legacy Website v2.dc.html` — the design reference (all screens; switch with the nav, or the `startPage` prop: home, travel, super, quote, thanks).
- `support.js` — runtime needed to open the reference file in a browser.
- `images/` — assets listed above.
