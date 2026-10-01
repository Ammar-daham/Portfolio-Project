import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Two pages share one bundle: English at /, Finnish at /fi/
  build: {
    rolldownOptions: {
      input: {
        en: resolve(import.meta.dirname, 'index.html'),
        fi: resolve(import.meta.dirname, 'fi/index.html'),
      },
    },
  },
  // Vitest: the tests live in tests/. `npm test` runs once (as CI will),
  // `npm run test:watch` watches.
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.{js,jsx}'],
    setupFiles: './tests/setup.js',
  },
})
