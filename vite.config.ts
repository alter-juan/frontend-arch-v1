import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: { 'process.env': process.env },
  server: { port: 8080 },
  test: {
    globals: true,
  },
})
