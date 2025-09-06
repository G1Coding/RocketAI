import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nanum: ['"Nanum Pen Script"', "sans-serif"],
        zen: ['"Zen Antique"', "serif"],
        asi: ['"Asi Gothic"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      spacing: {
        mobileInputHeight: "40px",
        tabletInputHeight: "44px",
      },
    },
  },
  plugins: [],
} satisfies Config;
