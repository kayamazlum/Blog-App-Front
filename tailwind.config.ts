import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181A2A",
        dark2: "#242535",
        blue: "#4B6BFB",
        light: "#FFFFFF",
        light2: "#E8E8EA",
      },
    },
  },
  plugins: [],
} satisfies Config;
