import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nav: {
          100: "#5ec576",
          200: '#9afcb1'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
};
export default config;
