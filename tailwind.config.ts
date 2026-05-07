import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        forest: {
          900: "#071a0f",
          800: "#0b2a18",
          700: "#104024",
        },
        emerald: {
          DEFAULT: "#10b981",
          dark: "#059669",
        },
        charcoal: "#121212",
        beige: "#f5f0e6",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), rgba(10, 10, 10, 1))',
      }
    },
  },
  plugins: [],
};
export default config;