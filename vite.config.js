import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build", // O 'dist' si deseas cambiarlo
  },
  plugins: [react()],
});
