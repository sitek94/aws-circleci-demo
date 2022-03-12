/// <reference types="vitest" /> // ⬅️ Import the vite typings
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

/**
 * Vite
 * https://vitejs.dev/config/
 *
 * Vitest
 * https://vitest.dev/guide/#configuring-vitest
 */
export default defineConfig({
  build: {
    outDir: './build',
  },
  plugins: [react(), eslintPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
