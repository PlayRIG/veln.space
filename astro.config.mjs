// @ts-check
// @ts-check
import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({nesting: true})],
  experimental: {
    svg: true,
  },
  vite: {
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
