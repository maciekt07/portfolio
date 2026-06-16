// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://maciejtwarog.dev",
  integrations: [
    icon({
      iconDir: "src/icons",
    }),
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
      cssVariable: "--font-space-grotesk",
      weights: [400, 500, 600],
      subsets: ["latin-ext"],
      display: "swap",
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
});
