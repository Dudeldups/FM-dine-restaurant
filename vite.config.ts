import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // base: process.env.MODE === "production" ? "/FM-dine-restaurant/" : "/",
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
