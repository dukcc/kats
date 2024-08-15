import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    color: {
      transparent: "#00000000",
      accent: "#007151",
      fg: "rgba(var(--accent) / 0.5)",
      white: "#fff",
      black: "#000",
    },
    boxShadow: {
      fg: "0px -3px 10.9px -1px rgba(0, 0, 0, 0.25), 0px 4px 9.3px 0px rgba(255, 255, 255, 0.25)",
    },
    backdropBlur: {
      DEFAULT: "8px",
    },
    borderRadius: {
      DEFAULT: "192px",
    },
    fontSize: {
      h1: "4rem",
      h2: "2.8125rem",
      h3: "1.75rem",
      body: "1rem",
    },
    spacing: {
      256: "256px",
      200: "200px",
      192: "192px",
      128: "128px",
      110: "110px",
      96: "96px",
      86: "86px",
      72: "72px",
      64: "64px",
      56: "56px",
      48: "48px",
      36: "36px",
      32: "32px",
      30: "30px",
      28: "28px",
      24: "24px",
      20: "20px",
      18: "18px",
      16: "16px",
      12: "12px",
      10: "10px",
      8: "8px",
      6: "6px",
      4: "4px",
      0: "0px",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(50%)" },
          "50%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
