
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Ensure the alias points to the src folder
    },
  },
  build: {
    rollupOptions: {
      input: './index.html' // Ensure Rollup knows where the main entry is
    },
  },
});
