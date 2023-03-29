import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from "dotenv"
dotenv.config()
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.jsx",
  })],
  server: {
    '/api': {
      target: "http://localhost:4000/",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
})
