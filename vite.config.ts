/// <reference types="vitest" /> // ⬅️ Import the vite typings
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite
 * https://vitejs.dev/config/
 *
 * Vitest
 * https://vitest.dev/guide/#configuring-vitest
 */
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
