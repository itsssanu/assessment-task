import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://64.227.189.27',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/wallet/api/v1'),
      }
    }
  }
})
