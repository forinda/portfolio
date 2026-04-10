import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), netlifyReactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
});
