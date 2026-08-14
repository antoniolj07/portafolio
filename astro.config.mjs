// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import { appConfig } from "./site-config.mjs";

// https://astro.build/config
export default defineConfig({
    site: appConfig.site.site,
    base: appConfig.site.base,
    trailingSlash: appConfig.site.trailingSlash ? "always" : "never",
    integrations: [mdx(), react(), tailwind({
        applyBaseStyles: false,
    }), icon(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },
    experimental: {
        svg: true,
    }});
