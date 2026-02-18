import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: '/web-audio-demos/',
  server: { host: "127.0.0.1" },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "hello-tone": resolve(__dirname, "katas/hello-tone/index.html"),
        "oscillator": resolve(__dirname, "katas/oscillator/index.html"),
      },
    },
  },
});
