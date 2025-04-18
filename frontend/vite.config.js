import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: process.env.VITE_HOST || '0.0.0.0',
    port: process.env.VITE_PORT || 5173
  },
  base: '/'
})
