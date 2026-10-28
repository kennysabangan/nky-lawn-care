// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Removed city pages (Oct 2026 cleanup) → service index. Declared here as well
// as in vercel.json because the Vercel adapter emits its own routing config.
const removedCityRedirects = Object.fromEntries(
  [
    'bellevue-ky',
    'cold-spring-ky',
    'taylor-mill-ky',
    'villa-hills-ky',
    'crescent-springs-ky',
    'lakeside-park-ky',
    'park-hills-ky',
    'walnut-hills-oh',
    'hyde-park-oh',
    'norwood-oh',
    'montgomery-oh',
    'deer-park-oh',
    'amberly-oh',
    'westwood-oh',
    'fort-heights-oh',
    'mt-adams-oh',
    'mt-lookout-oh',
    'oakley-oh',
    'columbia-tusculum-oh',
    'pleasant-ridge-oh',
  ].map((slug) => [`/lawn-care/${slug}`, { status: 301, destination: '/lawn-care/' }])
);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nkylawncarepros.com',

  output: 'server',

  redirects: {
    ...removedCityRedirects,
    '/reviews': { status: 301, destination: '/' },
  },
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    filter: (page) => !page.includes('404'),
  })]
});
