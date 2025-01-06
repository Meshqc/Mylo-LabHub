import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
    open: true, // Opens browser on start
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias for easier imports
    },
  },
});
