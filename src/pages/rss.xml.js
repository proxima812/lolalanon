import { config } from '@/settings'
import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
	const diaries = await getCollection("diaries")
	return rss({
		title: config.site.OG.title,
		description: config.site.OG.description,
		site: context.site,
		items: diaries.map(post => ({
			title: post.data.title,
			pubDate: post.data.datePublished,
			description: post.data.description,
			link: `/diaries/${post.slug}/`,
		})),
	})
}
