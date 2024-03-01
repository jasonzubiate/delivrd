import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bridal-health": "#131313",
        "demo-smoke": "#EFEFEF",
        "ashen-taupe": "#8E8B86",
      },
    },
  },
  plugins: [],
};
export default config;
