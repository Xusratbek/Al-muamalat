import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite' // 1. Bu qatorni qo'shing

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // 2. Bu yerni ham unutmang!
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})