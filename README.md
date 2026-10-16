# Ascending Legacy website

Marketing site for Ascending Legacy Inc., built with [Astro](https://astro.build).
Astro turns the files in `src/` into plain HTML pages in `dist/`. Any static host can serve them.

The original design handoff (colours, fonts and layout rules) is in `docs/design-handoff/`.

## Running it on your computer

You need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install        # first time only: downloads Astro
npm run dev        # starts a live preview at http://localhost:4321
npm run build      # makes the finished site in the dist/ folder
```

## Where to change things

| I want to change… | Edit this file |
|---|---|
| Phone, email, address, social links, review numbers, Calendly link, Google Analytics ID | `src/site.ts` |
| Menu links | `src/site.ts` (the `nav` list) |
| Stock photos | `src/site.ts` (the `photos` list) |
| Colours, fonts, spacing | `src/styles/global.css` (top of the file) |
| Header / footer | `src/components/Header.astro`, `src/components/Footer.astro` |
| Text on a page | the matching file in `src/pages/` |
| Add or edit an Insights article | add or edit a `.md` file in `src/content/insights/` |

## Pages

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/travel-insurance/` | `src/pages/travel-insurance/index.astro` |
| `/travel-insurance/super-visa-insurance/` | `src/pages/travel-insurance/super-visa-insurance.astro` |
| `/travel-insurance/visitors-to-canada/` | `src/pages/travel-insurance/visitors-to-canada.astro` |
| `/travel-insurance/snowbird-coverage/` | `src/pages/travel-insurance/snowbird-coverage.astro` |
| `/travel-insurance/trip-and-vacation-coverage/` | `src/pages/travel-insurance/trip-and-vacation-coverage.astro` |
| `/protect-your-income/` | `src/pages/protect-your-income.astro` |
| `/protect-your-family/` | `src/pages/protect-your-family.astro` |
| `/business-owners/` | `src/pages/business-owners.astro` |
| `/how-it-works/` | `src/pages/how-it-works.astro` |
| `/about/` | `src/pages/about.astro` |
| `/insights/` + 3 articles | `src/pages/insights/`, articles in `src/content/insights/` |
| `/contact/` | `src/pages/contact.astro` |
| `/get-a-quote/` | `src/pages/get-a-quote.astro` |
| `/thank-you/` | `src/pages/thank-you.astro` |
| `/privacy-policy/`, `/terms/` | `src/pages/privacy-policy.astro`, `src/pages/terms.astro` |

The product pages share one layout, `src/components/ServicePage.astro`, so they all look consistent.

## Quote form

The forms use **Netlify Forms**. If the site is hosted on [Netlify](https://www.netlify.com), they work with no extra code:
submissions appear in the Netlify dashboard under **Forms**, and you can turn on email notifications to Chris there.
Each submission also records where the visitor came from (UTM tags, Google Ads `gclid`, landing page and form page) for the lead sheet.

If you host somewhere else, change the form's `action` in `src/components/QuoteForm.astro` to a service such as Formspree.

Links can pre-select the product, for example `/get-a-quote/?need=Snowbird`.

## Hosting on Netlify

1. In Netlify, choose **Add new site → Import an existing project** and pick this GitHub repository.
2. The settings come from `netlify.toml` (build command `npm run build`, publish folder `dist`).
3. Set the real domain in `astro.config.mjs` (`site: ...`).

## Before launch checklist

**Placeholder content to replace** (all in `src/site.ts` unless noted):
- [ ] Phone number `604 555 0148` and office address
- [ ] "12 years", "5.0 / 48 Google reviews"
- [ ] The three reviews (`src/pages/index.astro`): use real ones, with permission
- [ ] Julian's bio (`src/pages/about.astro`)
- [ ] LinkedIn / Instagram URLs (hidden until filled in)
- [ ] Calendly link (the thank-you page shows a placeholder box until it's set)
- [ ] Google Analytics 4 ID and Google Ads conversion (tracking is off until they're set)

**Draft copy for Chris to review.** These pages were written from the design's patterns, not from supplied copy.
Each file says `DRAFT` at the top:
- [ ] Visitors to Canada, Snowbird (check the MSP residency rule with Health Insurance BC), Trip and Vacation
- [ ] Protect Your Income, Protect Your Family, Business Owners
- [ ] How It Works, About (story, vision, mission)
- [ ] The three Insights articles (check the Super Visa rules against the current IRCC page)
- [ ] Privacy Policy and Terms (have them reviewed properly)

**Compliance (BC):** no guaranteed approval or claim payment; carrier logos only with permission.

**Photos:** stock photos load from Unsplash. To host them yourself, download them into `public/images/photos/` and update the URLs in `src/site.ts`.

**Not built yet:** call-tracking number swap for Google Ads traffic (needs a call-tracking provider, e.g. CallRail).
