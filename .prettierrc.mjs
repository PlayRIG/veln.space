/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  printWidth: 90,
  bracketSameLine: true,
  bracketSpacing: false,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  trailingComma: "all",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
