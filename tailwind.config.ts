import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "Noto Sans KR", "Apple SD Gothic Neo", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
