import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/FM-dine-restaurant/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        booking: resolve(__dirname, "booking/index.html"),
      },
    },
  },
});
