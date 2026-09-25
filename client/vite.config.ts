// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// ——— Vite Config —————————————————————————————————————————————————————————————————————————————————
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: (src: string, filename: string) => {
          const normalize = filename.replace(/\\/g, "/");
          const shouldExclude = normalize.includes("/shared/styles");

          if (shouldExclude) return src;
          return `@use "@/shared/styles/mixins" as *;\n${src}`;
        },
      },
    },
  },
});
