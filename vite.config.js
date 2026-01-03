import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Determine base: prefer explicit BASE env, then npm package homepage, else root.
const basePath = process.env.BASE || process.env.npm_package_homepage || '/'

export default defineConfig({
  base: basePath,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 5174,
  },
  build: {
    outDir: 'dist',
    sourcemap: process.env.SOURCE_MAP === 'true',
    chunkSizeWarningLimit: 1000,
  },
})
