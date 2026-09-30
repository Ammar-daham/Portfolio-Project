import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitest: the tests live in tests/. `npm test` runs once (as CI will),
  // `npm run test:watch` watches.
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.{js,jsx}'],
    setupFiles: './tests/setup.js',
  },
})
