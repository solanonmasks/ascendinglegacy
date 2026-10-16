// Defines the "insights" articles. Each article is a Markdown file in src/content/insights/.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    // Set to true to hide an article from the site without deleting it.
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
