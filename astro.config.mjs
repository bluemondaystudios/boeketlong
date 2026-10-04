// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.boeketlong.co.za',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets so first paint needs no extra request.
    inlineStylesheets: 'auto',
  },
  image: {
    responsiveStyles: true,
  },
});
