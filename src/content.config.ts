import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Dynamic content layer — markdown files are CMS-ready.
 * Later: map the same schema to Keystatic / Decap / a headless CMS.
 */
const areaSection = z.object({
  id: z.string().optional(),
  /** Plain title (used when titleHtml is absent) */
  title: z.string(),
  /** Optional HTML title (e.g. strong + br for Amusement) */
  titleHtml: z.string().optional(),
  titleTag: z.enum(['h1', 'h2', 'h3']).default('h2'),
  bodyHtml: z.string(),
});

const areas = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/areas',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    /** URL slug shared across locales (amusement, visual-mkt, …) */
    area: z.string(),
    lang: z.enum(['it', 'en']),
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string().optional(),
    /** Brand / separator / rollover accent */
    color: z.string(),
    /** Intro: two equal columns (Amusement) or stacked full-width */
    introLayout: z.enum(['two-col', 'stack']).default('stack'),
    hero: z.object({
      backgroundImage: z.string(),
      backgroundPosition: z.string().default('center bottom'),
      logo: z.string(),
      logoAlt: z.string(),
      logoWidth: z.number(),
      logoHeight: z.number(),
      padding: z.string().default('180px 30px'),
    }),
    sections: z.array(areaSection),
    quoteBar: z
      .object({
        text: z.string(),
        author: z.string().optional(),
        backgroundColor: z.string().optional(),
      })
      .optional(),
    projects: z
      .object({
        title: z.string(),
        subtitle: z.string(),
        /** Matches caseStudies.category (e.g. "Amusement") */
        category: z.string(),
      })
      .optional(),
    events: z
      .object({
        title: z.string(),
        images: z.array(
          z.object({
            src: z.string(),
            alt: z.string(),
          }),
        ),
      })
      .optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/case-studies',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    lang: z.enum(['it', 'en']),
    title: z.string(),
    category: z.string(),
    color: z.string(),
    image: z.string(),
    place: z.string().optional(),
    client: z.string().optional(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { areas, caseStudies };
