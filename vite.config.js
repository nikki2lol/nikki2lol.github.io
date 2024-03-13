import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  base: './',
  root: 'src',
  build: {
    outDir: '../build',
    emptyOutDir: true,
    sourcemap: true,
  },
});
