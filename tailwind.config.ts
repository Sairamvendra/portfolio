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
        'neobrutalism-black': '#000000',
        'neobrutalism-white': '#FFFFFF',
        'neobrutalism-yellow': '#FFD700',
        'neobrutalism-pink': '#FF6B6B',
        'neobrutalism-cyan': '#4ECDC4',
        'neobrutalism-purple': '#A78BFA',
        'neobrutalism-green': '#00FF00',
        'neobrutalism-blue': '#0066FF',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neobrutalism-sm': '4px 4px 0 0 rgba(0, 0, 0, 1)',
        'neobrutalism-md': '6px 6px 0 0 rgba(0, 0, 0, 1)',
        'neobrutalism-lg': '8px 8px 0 0 rgba(0, 0, 0, 1)',
        'neobrutalism-xl': '12px 12px 0 0 rgba(0, 0, 0, 1)',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
    },
  },
  plugins: [],
};

export default config;
