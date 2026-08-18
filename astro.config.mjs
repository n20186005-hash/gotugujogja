// Design reminder: “Malam di Pal Putih” — indigo editorial heritage, real photography, restrained brass accents.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || undefined;
const integrations = site ? [sitemap()] : [];

export default defineConfig({
  site,
  output: 'static',
  integrations,
  vite: {
    plugins: [tailwindcss()],
  },
});
