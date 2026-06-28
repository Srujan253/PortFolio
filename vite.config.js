import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          reactThree: ['@react-three/fiber', '@react-three/drei'],
          framer: ['framer-motion'],
          spline: ['@splinetool/react-spline', '@splinetool/runtime']
        }
      }
    }
  }
}); 