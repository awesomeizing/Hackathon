import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
      '/collector-api': {
        target: 'http://127.0.0.1:7100',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/collector-api/, '/api'),
      },
    },
  },
  build: {
    outDir: '../saas/dist',
    emptyOutDir: true,
  },
});
