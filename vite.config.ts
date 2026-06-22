import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [react(), glsl()],
  build: {
    // In Vite 8 Beta, this might be `rolldownOptions`
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              // 1. Three.js Core (Highest Priority)
              name: "three-core",
              test: /node_modules[\\/]three/,
              priority: 30,
            },
            {
              // 2. React Three Fiber & Drei (Grouped together as they depend on Three)
              name: "r3f-ecosystem",
              test: /node_modules[\\/](?:@react-three|drei)/,
              priority: 25,
            },
            {
              // 3. GSAP (Animation library)
              name: "gsap",
              test: /node_modules[\\/]gsap/,
              priority: 20,
            },
            {
              // 4. React & ReactDOM (Standard split)
              name: "react-vendor",
              test: /node_modules[\\/](?:react|react-dom|scheduler)/,
              priority: 15,
            },
            {
              // 5. Fallback for all other node_modules
              name: "vendor",
              test: /node_modules/,
              priority: 10,
            },
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust limit as needed after splitting
  },
});
