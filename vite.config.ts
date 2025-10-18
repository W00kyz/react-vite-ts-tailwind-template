import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@app": resolve(__dirname, "src", "app"),
        "@components": resolve(__dirname, "src", "components"),
        "@hooks": resolve(__dirname, "src", "hooks"),
        "@datasources": resolve(__dirname, "src", "datasources"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      // setupFiles: "./src/setup/vitest.ts",
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
      },
    },
  };
});
