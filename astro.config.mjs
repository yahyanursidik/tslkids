import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tslkids.my.id',
  integrations: [sitemap()],
  output: 'static',
});
