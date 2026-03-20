/// <reference types="vitest/config" />
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const configDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: configDir,
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [join(configDir, "vitest.setup.ts")],
    include: ["questions/**/*.test.{ts,tsx}", "src/**/*.test.{ts,tsx}"],
  },
});
