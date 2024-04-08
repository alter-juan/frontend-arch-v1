import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import checker from "vite-plugin-checker";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Checking of typescript and vue files
    checker({
      vueTsc: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  test: {
    globals: true,
  },
});
