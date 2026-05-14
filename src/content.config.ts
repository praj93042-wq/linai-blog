import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const PestleEnum = z.enum([
  'Political',
  'Economic',
  'Social',
  'Technological',
  'Legal',
  'Environmental',
  'Practical',
]);

const CategoryEnum = z.enum([
  'research-breakdown',
  'tool-analysis',
  'policy-watch',
  'market-intelligence',
  'opinion',
  'weekly-roundup',
  'deep-dive',
  'practical-playbook',
]);

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().max(100),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    edition_label: z.string(),
    category: CategoryEnum,
    pestle: z.array(PestleEnum),
    form: z.enum(['short', 'long']),
    published_at: z.coerce.date(),
    updated_at: z.coerce.date().optional(),
    description: z.string().max(160),
    reading_time: z.number().int().positive(),
    topic: z.string(),
    sources: z.array(z.string().url()),
    source_layers: z.array(z.number().int().min(1).max(5)).optional(),
    article_scores: z.array(z.number().min(1).max(7)).optional(),
    big_number: z
      .object({
        label: z.string(),
        value: z.string(),
        context: z.string(),
      })
      .optional(),
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
    infographic_path: z.string().optional(),
    infographic_type: z
      .enum(['by_the_numbers', 'big_picture'])
      .optional(),
    beehiiv_url: z.string().url().optional(),
    linkedin_url: z.string().url().optional(),
    x_thread_url: z.string().url().optional(),
    youtube_short_url: z.string().url().optional(),
  }),
});

export const collections = { posts };
