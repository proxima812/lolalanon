import { defineCollection, z } from "astro:content"

const diaries = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().default("title"),
			description: z.string().default("description"),
			id: z.string().optional(),
			moth: z.string(),
			datePublished: z.union([z.string().datetime(), z.date()]).optional(),
			dateModified: z.union([z.string().datetime(), z.date()]).optional(),
			draft: z.boolean().default(false).optional(),
		}),
})

const pages = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().default("title"),
			description: z.string().default("description"),
			ogImage: image().optional(),
			index: z.boolean().optional(),
		}),
})

export const collections = { diaries, pages }
