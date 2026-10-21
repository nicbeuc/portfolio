// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: 'https://nickbeuchat.com',
  fonts: [{
    provider: fontProviders.local(),
    name: 'Switzer',
    cssVariable: '--font-switzer',
    options: {
      variants: [
        {
          weight: '100 900',
          style: 'normal',
          src: ['./src/assets/fonts/switzer-variable.woff2', './src/assets/fonts/switzer-variable.woff']
        },
        {
          weight: '100 900',
          style: 'italic',
          src: ['./src/assets/fonts/switzer-variable-italic.woff2', './src/assets/fonts/switzer-variable-italic.woff']
        }
      ]
    }
  }]
});