import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: "dist",
    lib: {
      entry: "src/components/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: /^react/,
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
