import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        screens: {
        'lg':'1080px',
        'xl':'1280px',
        '2xl':'1480px',
        '3xl': '1720px',
        '4xl': '1920px',
        '5xl':'2100px',
        '6xl':'2400px',

      },
       fontFamily: {
        'agrandir': ['Agrandir', 'sans-serif'],
         'mulish': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

export default config;