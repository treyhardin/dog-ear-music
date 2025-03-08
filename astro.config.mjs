// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["astro.build", "api.sanity.io"],
  },
  integrations: [
    sanity({
      projectId: 'hz62cv9y',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react()
  ],
  output: 'static',
  adapter: cloudflare()
});