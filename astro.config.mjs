// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, fontProviders } from "astro/config";
import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://maciejtwarog.dev",
  adapter: vercel(),

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
      cssVariable: "--font-fraunces",
      weights: [400, 500, 600],
      subsets: ["latin-ext"],
      display: "swap",
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  env: {
    schema: {
      RESUME_BLOB_URL: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
});
