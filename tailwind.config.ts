import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extending NextUI theme colors for dark mode
        ...nextui.colors,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",  // Still set to class, but only dark theme will be used
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: "#1e90ff",      // Dodger blue
            secondary: "#9353D3",    // Pink
            background: "#121212",   // Dark gray (near black)
            text: "#ffffff",         // White text
            accent: "#00bcd4",       // Cyan
            muted: "#333333",        // Dark gray
          },
        },
      },
    }),
  ],
};

export default config;
