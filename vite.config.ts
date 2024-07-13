import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ rollupTypes: true }),
    svgr(),
    tailwindcss(),
  ],
  build: {
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
    lib: {
      entry: [
        resolve(__dirname, "lib/index.ts"),
        resolve(__dirname, "lib/icons/icons.ts"),
      ],
      name: "design-system",
      fileName: (format, name) => {
        if (format === "es") {
          return `${name}.js`;
        }

        return `${name}.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});
