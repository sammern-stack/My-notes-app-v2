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
    },
  },
});
