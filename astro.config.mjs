import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";
import compress from "astro-compress";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";
import { config } from "/src/settings";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: `${config.site.base.url}`,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  integrations: [keystatic(), sitemap({
    filter: page => page !== `${config.site.base.url}/test` && page !== `${config.site.base.url}/keystatic`
  }), tailwind({
    applyBaseStyles: false
  }), compress(), mdx(), react(), markdoc(), metaTags(), icon()],
  output: "hybrid",
  adapter: vercel()
});