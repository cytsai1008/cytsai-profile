import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      featured_priority: z.coerce.number().int().default(0),
    }),
});

const about = defineCollection({
  loader: glob({ base: "./src/content/about", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    location: z.string(),
    summaryTitle: z.string(),
    experienceTitle: z.string(),
    experience: z.array(
      z.object({
        period: z.string(),
        role: z.string(),
        org: z.string(),
        bullets: z.array(z.string()),
      })
    ),
    educationTitle: z.string(),
    education: z.array(
      z.object({
        period: z.string(),
        dept: z.string().optional(),
        degree: z.string().optional(),
        school: z.string(),
      })
    ),
    projectsTitle: z.string(),
    projects: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        url: z.string(),
      })
    ),
    stackTitle: z.string(),
    stack: z.array(
      z.object({
        label: z.string(),
        items: z.array(z.string()),
      })
    ),
    linksTitle: z.string(),
  }),
});

export const collections = { blog, about };
