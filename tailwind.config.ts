import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        walone: ["var(--font-z06-walone)"],
        archivo: ["var(--font-archivo)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
      primaryColor: "var(--primary-color)",
      secondaryColor: "var(--secondary-color)",
      tertiaryColor: "var(--tertiary-color)",
      primaryTextColor: "var(--primaryText-color)",
      secondaryTextColor: "var(--secondaryText-color)",
      tertiaryTextColor: "var(--tertiaryText-color)",
      successColor: "var(--success-color)",
      warnningColor: "var(--warnning-color)",
      dangerColor: "var(--danger-color)",
      grayColor: "var(--gray-color)",
    },
    },
   
    fontSize: {
      "sm": [
        "0.875rem",
        {
          lineHeight: "1.313rem",
          fontWeight: "400",
          letterSpacing: "0rem",
        },
      ],
      "md": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
          letterSpacing: "0rem",
        },
      ],
      "md_bold": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "700",
          letterSpacing: "0rem",
        },
      ],
      "lg": [
        "1.5rem",
        {
          lineHeight: "2.25rem",
          fontWeight: "600",
          letterSpacing: "0rem",
        },
      ],
      "xl": [
        "1.875rem",
        {
          lineHeight: "2.813rem",
          fontWeight: "600",
          letterSpacing: "0rem",
        },
      ],
      "2xl": [
        "3.125rem",
        {
          lineHeight: "4.688rem",
          fontWeight: "700",
          letterSpacing: "0rem",
        },
      ],
      "2xl-md": [
        "3.125rem",
        {
          lineHeight: "3.6rem",
          fontWeight: "700",
          letterSpacing: "0rem",
        },
      ],
      "3xl": [
        "4.375rem",
        {
          lineHeight: "4.688rem",
          fontWeight: "700",
          letterSpacing: "0rem",
        },
      ],
    },
  },
  plugins: [],
};
export default config;
