import { sync } from "glob";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  publicDir: "../public",
  appType: "mpa",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    },
  },
});
