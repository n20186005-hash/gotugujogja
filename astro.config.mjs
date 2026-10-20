// Design reminder: “Malam di Pal Putih” — indigo editorial heritage, real photography, restrained brass accents.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://gotugujogja.com';
const integrations = site ? [sitemap({filter:(page)=>!page.endsWith('/404/')})] : [];

export default defineConfig({
  site,
  output: 'static',
  integrations,
  vite: {
    plugins: [tailwindcss()],
  },
});
