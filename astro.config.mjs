import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  site: "https://wesell.com.co",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [tailwind(), icon(), mdx(), sitemap({
    i18n: {
      defaultLocale: "es", 
      locales: {
        en: "en", 
        es: "es",
      },
    },
  }), astroI18next()]
});