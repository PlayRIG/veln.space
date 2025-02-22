/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        machina: ["PP Neue Machina", "sans-serif"],
      },
      colors: {
        "brand-pink": "#FF006B",
      },
    },
  },
  plugins: [],
};
