import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const paintings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./paintings" }),
  schema: z.object({
    title: z.string(),
    price: z.number(),
    dimensions: z.string(),
    year: z.number(),
    keyImage: z.string(),
    detailImages: z.array(z.string()),
    isSold: z.boolean().default(false),
  }),
});

export const collections = { paintings };
