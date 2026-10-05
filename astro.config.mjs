// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production client domain (attach this as a custom domain in Cloudflare Pages).
  // Until DNS is pointed, the preview URL is https://garavaglia.pages.dev
  site: 'https://www.garavaglia.eu',
  base: '/',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/design-system'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
