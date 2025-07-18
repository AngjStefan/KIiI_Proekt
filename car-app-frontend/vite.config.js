import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
  //plugins: [react()],
//})

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['car-app.local'],
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
    strictPort: true,
  },
})
