import vue from "@vitejs/plugin-vue";
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
  test: {
    globals: true,
  },
});
