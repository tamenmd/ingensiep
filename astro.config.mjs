import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tamenmd.github.io',
  base: '/ingensiep',
  integrations: [tailwind()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
