// Astro settings. Docs: https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Change this to the real domain before launch (used for the sitemap and SEO links).
  site: 'https://ascendinglegacy.ca',
  // "/super-visa-insurance/" style URLs.
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
