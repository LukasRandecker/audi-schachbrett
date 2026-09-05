import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Eigene Subdomain (audi.lukasrandecker.de) — die Seite liegt an der Wurzel.
  // Freigabe von Lukas am 05.09.2026, siehe CLAUDE.md.
  base: "/",
  plugins: [react(), tailwindcss()],
})
