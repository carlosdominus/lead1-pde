import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Garante caminhos relativos para funcionar em subpastas no cPanel
  define: {
    'process.env': {} // Evita erros de referência ao process no navegador
  },
  build: {
    outDir: 'dist',
  }
});