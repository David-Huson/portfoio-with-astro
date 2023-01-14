import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({config: {applyBaseStyles: true}}), react(), partytown(), prefetch()],
  vite: {
    ssr: {
      noExternal: ['@fontsource/cormorant', '@fontsource/roboto']
    }
  }
});