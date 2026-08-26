import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3A",
          gold: "#C59B27",
          lustre: "#DFB743",
          sand: "#F5F2EB",
          blue: "#0080FF",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;