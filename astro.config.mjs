// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://maciejtwarog.dev",
  output: "static",
  integrations: [
    icon({
      iconDir: "src/icons",
    }),
    sitemap(),
  ],

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.npm(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: [400, 500, 600],
      subsets: ["latin-ext"],
      display: "swap",
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
});
