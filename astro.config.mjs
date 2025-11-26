import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import compressor from 'astro-compressor'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://tedx.ncit.edu.np/',
  prefetch: false,
  image: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
  },
  prefetch: true,
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap(),
    compressor({ gzip: true, brotli: true }),
    react(),
  ],
  output: 'static',
  vite: {
    build: {
      cssMinify: true,
      chunkSizeWarningLimit: 600,
    },
    server: {
      fs: { strict: true },
    },
  },
})
