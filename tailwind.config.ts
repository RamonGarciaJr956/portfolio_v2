import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        GeneralSans: ['General Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
