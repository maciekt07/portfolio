/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  useTabs: false,
  tabWidth: 2,
  endOfLine: "lf",
  trailingComma: "all",
  semi: true,
  singleQuote: false,
  printWidth: 80,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        printWidth: 120,
      },
    },
  ],
};
