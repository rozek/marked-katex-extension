import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'MarkedKatexExtension',
      fileName: (format) => `marked-katex-extension.esm.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: ['marked'],
      output: {
        globals: {
          marked: 'marked'
        }
      }
    },
  },
  optimizeDeps: {
    exclude: ['marked']
  }
});

