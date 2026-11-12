import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tslkids.my.id',
  integrations: [sitemap({
    filter: (page) => new URL(page).pathname !== '/terima-kasih/',
  })],
  output: 'static',
});
