import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Je backend URL
        changeOrigin: true, // Zorg ervoor dat het lijkt alsof het verzoek afkomstig is van dezelfde origin
        rewrite: (path) => path.replace(/^\/api/, ''), // Verwijder de /api prefix
      },
    },
  },
});
