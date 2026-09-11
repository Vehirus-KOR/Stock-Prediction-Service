import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs support both GitHub user pages and /repository/ pages.
  base: './',
  build: { outDir: 'dist', target: 'es2020' },
});
