// ─────────────────────────────────────────────────────────────
//  SITE SETTINGS — edit this file to change contact details,
//  menu links, photos and tracking IDs across the whole site.
//  Items marked PLACEHOLDER must be replaced before launch.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Ascending Legacy Inc.',
  tagline: 'Life, health and travel insurance advisors in Metro Vancouver.',

  // PLACEHOLDER phone number. `phoneHref` is the digits used for tap-to-call links.
  phone: '604 555 0148',
  phoneHref: 'tel:+16045550148',

  advisor: 'Chris Asuncion',
  email: 'casuncion@ascendinglegacy.ca',

  // PLACEHOLDER office address.
  address: {
    street: '4710 Kingsway, Suite 1200',
    city: 'Burnaby',
    region: 'BC',
    postalCode: '',
    country: 'CA',
  },
  serviceArea: 'Metro Vancouver and the Fraser Valley, in person or by video.',

  // PLACEHOLDER social profile URLs. Leave as '' to hide a link.
  social: {
    linkedin: '',
    instagram: '',
  },

  // PLACEHOLDER trust numbers.
  yearsAdvising: '12',
  reviewScore: '5.0',
  reviewCount: '48',

  carriers: ['Manulife', 'Industrial Alliance', 'Equitable Life'],

  licence: 'Chris Asuncion, licensed with the Insurance Council of BC.',
  copyrightYear: new Date().getFullYear(),

  // Calendly booking link shown on the thank-you page, e.g.
  // 'https://calendly.com/your-name/30min'. Leave '' to show a placeholder box.
  calendlyUrl: '',

  // Google Analytics 4 measurement ID, e.g. 'G-XXXXXXX'. Leave '' to turn tracking off.
  ga4Id: '',
  // Google Ads conversion, e.g. 'AW-123456789/AbCdEfGh'. Leave '' to turn off.
  adsConversion: '',
};

// Main menu (header + mobile menu).
export const nav = [
  { label: 'Travel Insurance', href: '/travel-insurance/' },
  { label: 'Protection', href: '/protect-your-income/' },
  { label: 'Business Owners', href: '/business-owners/' },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'About', href: '/about/' },
  { label: 'Insights', href: '/insights/' },
];

// Stock photos (Unsplash, free licence). To self-host: download each image into
// public/images/photos/ and change the URL here to e.g. '/images/photos/family.jpg'.
const unsplash = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const photos = {
  heroFamily: unsplash('1609220136736-443140cffec6'),
  vancouver: unsplash('1559511260-66a654ae982a'),
  travel: unsplash('1436491865332-7a61a109cc05', 1200),
  family: unsplash('1484665754804-74b091211472', 1600),
  business: unsplash('1577415124269-fc1140a69e91', 1200),
  lake: unsplash('1476514525535-07fb3b4ae5f1', 1600),
  paperwork: unsplash('1450101499163-c8848c66ca85', 1600),
  chris: '/images/chris.png',
};
