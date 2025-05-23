import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // important for external access
    port: 3000,
    allowedHosts: ["test-coolify.open-elements.cloud"], // ← add your domain here
  },
});
