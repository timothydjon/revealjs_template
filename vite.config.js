import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, mkdirSync } from 'fs';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.prod.html'),
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
      '@': resolve(import.meta.dirname, 'src'),
      '@themes': resolve(import.meta.dirname, 'src/themes'),
      '@slides': resolve(import.meta.dirname, 'slides'),
    },
  },
  plugins: [
    {
      name: 'copy-assets',
      closeBundle() {
        // Copy necessary folders to dist
        const folders = ['src', 'slides', 'assets'];
        folders.forEach(folder => {
          try {
            mkdirSync(`dist/${folder}`, { recursive: true });
          } catch {}
        });

        // Copy index.prod.html as index.html in dist
        try {
          copyFileSync('index.prod.html', 'dist/index.html');
        } catch (err) {
          console.error('Error copying index.html:', err);
        }
      }
    }
  ]
});