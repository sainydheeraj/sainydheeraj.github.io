import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  base: './',
  plugins: [
    tanstackStart({
      router: {
        autoCodeSplitting: false
      },
      server: { entry: 'server' }
    }),
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
  server: {
    port: 3030,
    host: true
  }
})
