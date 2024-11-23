import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sanf-sarif"],
        general: ["general", "sanf-sarif"],
        "circular-web": ["circular-web", "sanf-sarif"],
        "robert-medium": ["robert-medium", "sanf-sarif"],
        "robert-regular": ["robert-regular", "sanf-sarif"],
      },
    },
  },
  plugins: [],
};
export default config;
