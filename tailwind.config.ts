import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-anek-bangla)",
        display: "var(--font-galada)",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
