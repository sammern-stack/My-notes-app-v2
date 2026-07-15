// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// ——— Helper ——————————————————————————————————————————————————————————————————————————————————————
const resolvePath = (p: string) => path.resolve(__dirname, p);

// ——— Vite Config —————————————————————————————————————————————————————————————————————————————————
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: "**/*.svg" })],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
      "@pages": resolvePath("./src/pages"),
      "@components": resolvePath("./src/components"),
      "@stores": resolvePath("./src/stores"),
      "@hooks": resolvePath("./src/hooks"),
      "@utils": resolvePath("./src/utils"),
      "@types": resolvePath("./src/types"),
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
