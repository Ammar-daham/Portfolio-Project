import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitest: `npm test` runs once (as CI will), `npm run test:watch` watches
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
