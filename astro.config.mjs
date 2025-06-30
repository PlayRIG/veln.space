// @ts-check
// @ts-check
import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({nesting: true})],
  experimental: {svg: true},
  server: {
    port: 8080,
    host: "0.0.0.0",
  },
  vite: {
    preview: {
      allowedHosts: ["velnspace-production.up.railway.app", "veln.space"],
    },
    plugins: [
      svgr({
        include: "**/*.svg?react",
        svgrOptions: {
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
          svgoConfig: {
            plugins: [
              "preset-default",
              "removeTitle",
              "removeDesc",
              "removeDoctype",
              "cleanupIds",
            ],
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@components": "/src/components",
        "@layouts": "/src/layouts",
      },
    },
  },
});
