// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE are set by the GitHub Pages workflow for the github.io preview.
// On the real domain they are left unset.
const site = process.env.SITE || 'https://www.boeketlong.co.za';
const base = process.env.BASE || '/';

// Old CMS URLs -> new pages, so Google results and old links keep working.
// Hosts that read public/_redirects (Cloudflare Pages, Netlify) send a real 301;
// everywhere else (GitHub Pages) these become small HTML redirect pages.
const oldUrls = {
  '/about.html': '/about/',
  '/accommodation.html': '/accommodation/',
  '/facilities/conference-centre.html': '/facilities/conference-centre/',
  '/facilities/beauty-spa.html': '/facilities/beauty-spa/',
  '/facilities/salon.html': '/facilities/salon/',
  '/facilities/gym.html': '/facilities/gym/',
  '/Gallery.html': '/gallery/',
  '/contact-us.html': '/contact/',
  '/privacy.html': '/privacy/',
  '/disclaimer.html': '/terms/',
  '/rooms/Executive.html': '/accommodation/presidential-suite/',
  '/rooms/Luxury-Suite.html': '/accommodation/luxury-suite/',
  '/rooms/Deluxe-Ro.html': '/accommodation/deluxe-room/',
  '/rooms/Standard.html': '/accommodation/standard-room/',
  '/rooms/Family-Suite.html': '/accommodation/family-suite/',
  '/portfolio/Entry-Roo.html': '/accommodation/economy-room/',
};

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  redirects: Object.fromEntries(
    Object.entries(oldUrls).map(([from, to]) => [from, `${base.replace(/\/$/, '')}${to}`]),
  ),
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets so first paint needs no extra request.
    inlineStylesheets: 'auto',
  },
  image: {
    responsiveStyles: true,
  },
});
