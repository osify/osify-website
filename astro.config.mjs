// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// osify.com is served from GitHub Pages at the apex domain (see public/CNAME),
// so there is no base path to carry around.
export default defineConfig({
  site: 'https://osify.com',
  base: '/',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    vue(),
    sitemap({
      // Legacy permalink stubs exist only to bounce old links; keep them out of
      // the sitemap so search engines index the canonical /posts/<slug>/ URLs.
      filter: (page) => !/\/(go|qa)\//.test(page) && !/\/\d{4}\/\d{2}\//.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: true,
    },
  },
  image: {
    // All post media is pre-optimised to WebP by scripts/migrate-media.mjs.
    responsiveStyles: true,
  },
});
