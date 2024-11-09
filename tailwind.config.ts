import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-1100": { max: "1100px" },
        "max-1050": { max: "1050px" },
        "max-1000": { max: "1000px" },
        "max-950": { max: "950px" },
        "max-900": { max: "900px" },
        "max-850": { max: "850px" },
        "max-800": { max: "800px" },
        "max-750": { max: "750px" },
        "max-700": { max: "700px" },
        "max-650": { max: "650px" },
        "max-600": { max: "600px" },
        "max-550": { max: "550px" },
        "max-500": { max: "500px" },
        "max-450": { max: "450px" },
        "max-400": { max: "400px" },
      },
      colors: {
        background: "#FFF5F0",
        primary:"#FFEFE5",
        secondary:"#FFDECC",
        orange:"#FF8D4D",
        orange80:"#FFBE99",
        text:"#333333"
      },
    },
  },
  plugins: [],
};
export default config;
