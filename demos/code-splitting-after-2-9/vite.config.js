import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'react-router-vendor': ['react-router-dom'],
          'utilities-library-vendor': ['localforage', 'match-sorter', 'match-sorter'],
        },
      },
    },
  },
})
