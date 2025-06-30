/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "heuvel-groteks": ["HeuvelGrotesk-Medium", "sans-serif"],
      },
      colors: {"brand-pink": "#FF006B"},
    },
  },
  plugins: [],
};
