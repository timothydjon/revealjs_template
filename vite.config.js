import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    copyPublicDir: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@themes': resolve(__dirname, 'src/themes'),
      '@slides': resolve(__dirname, 'slides'),
    },
  },
});