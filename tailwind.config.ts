import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "heading-xl": ["2.125rem", { lineHeight: "38px", letterSpacing: "0em" }],
      "heading-lg": ["1.375rem", { lineHeight: "24px", letterSpacing: "0em" }],
      "heading-md": ["1.25rem", { lineHeight: "24px", letterSpacing: "0em" }],
      "heading-sm": ["1rem", { lineHeight: "18px", letterSpacing: "0em" }],
      "heading-xs": ["0.875rem", { lineHeight: "14px", letterSpacing: "0em" }],

      "display-xl": ["2.75rem", { lineHeight: "52px", letterSpacing: "0em" }],
      "display-lg": ["2rem", { lineHeight: "45px", letterSpacing: "0em" }],
      "display-md": ["1.75rem", { lineHeight: "32px", letterSpacing: "0em" }],
      "display-sm": ["1.375rem", { lineHeight: "32px", letterSpacing: "0em" }],
      // "display-xs": ["0.75rem", { lineHeight: "32px", letterSpacing: "0em" }],

      "label-xl": ["1.25rem", { lineHeight: "24px", letterSpacing: "0em" }],
      "label-lg": ["1.125rem", { lineHeight: "20px", letterSpacing: "0em" }],
      "label-md": ["1rem", { lineHeight: "18px", letterSpacing: "0em" }],
      "label-sm": ["0.75rem", { lineHeight: "14px", letterSpacing: "0em" }],
      "label-xs": ["0.625rem", { lineHeight: "14px", letterSpacing: "0em" }],

      "para-xl": ["1.5rem", { lineHeight: "38px", letterSpacing: "0em" }],
      "para-lg": ["1.125rem", { lineHeight: "18px", letterSpacing: "0em" }],
      "para-md": ["1rem", { lineHeight: "18px", letterSpacing: "0em" }],
      "para-sm": ["0.75rem", { lineHeight: "18px", letterSpacing: "0em" }],
      "para-xs": ["0.625rem", { lineHeight: "18px", letterSpacing: "0em" }],

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
