import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Evitar errores en el overlay
    },
  },
});