import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const paintings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./paintings" }),
  schema: z.object({
    title: z.string(),
    price: z.number(),
    dimensions: z.string(),
    year: z.number(),
  }),
});

export const collections = { paintings };
