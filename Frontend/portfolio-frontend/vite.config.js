import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Make the server accessible to the host machine
    port: 5173,      // Ensure it uses the correct port
    watch: {
      usePolling: true, // Enable polling for file changes
    },
  },
})