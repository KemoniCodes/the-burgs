import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redRobin: "var(--redRobin)",
        pickleGreen: "var(--pickleGreen)",
        bunBeige: "var(--bunBeige)",
        retroBlue: "var(--retroBlue)",
        neonPink: "var(--neonPink)",
      },
      fontFamily: {
        neueMontreal: ["var(--font-neueMontreal)"],
        rightGrotesk: ["var(--font-rightGrotesk)"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
