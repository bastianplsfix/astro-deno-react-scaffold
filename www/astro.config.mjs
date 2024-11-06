// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import deno from "@deno/astro-adapter";
import react from "@astrojs/react";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [react()],
  vite: {
    plugins: [TanStackRouterVite(), viteReact()],
  },
  image: {
    service: passthroughImageService(),
  },
});
