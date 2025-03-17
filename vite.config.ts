import { defineConfig } from "vite";

import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/mathlive/dist/fonts/**.*",
          dest: "assets/deps/fonts",
        },
      ],
    }),
  ],
  build: {
    outDir: "./docs",
  },
  base: "./",
  server: {
    port: 5174,
  },
});
