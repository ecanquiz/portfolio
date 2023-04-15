import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://ejimenez123.github.io',
  base: '/site',
  integrations: [
    astroI18next(),
    tailwind({
      config: { applyBaseStyles: true }
    }),
    vue()
  ],
});
