import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Your GitHub Pages project site is served from:
// https://veereshkd7.github.io/dr.amittammanagoudar.com/
// so every built asset URL needs that repo-name prefix, or the page
// loads but all JS/CSS/image requests 404 (which also renders blank).
//
// If you later attach a real custom domain (Settings > Pages >
// Custom domain) and add a CNAME file, change base back to "/".
export default defineConfig({
  base: "/dr.amittammanagoudar.com/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
