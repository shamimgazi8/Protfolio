import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   xsm: "490px",
    //   smd: "620px",
    // },

    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      backdropBlur: {
        xs: "2px",
      },
      // tailwind.config.ts
      // tailwind.config.ts
      keyframes: {
        streak: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        // ... your other keyframes
      },
      animation: {
        streak: "streak 1s linear infinite", // Sped up to 1s for "Hyperspeed" feel
        hyperspeed: "hyperspeed 0.2s ease-out forwards",
      },
      backgroundImage: {
        circulerLight:
          "repating-redial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
