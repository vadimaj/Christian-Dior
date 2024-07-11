import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: '/Christian-Dior/',
  plugins: [
    react(),
    eslint,

    copy({
      targets: [
        {
          src: 'src/assets/images/products/*.jpg',
          dest: 'dist/assets/images/products',
        },
        {
          src: 'src/assets/images/products/*.png',
          dest: 'dist/assets/images/products',
        },
      ],
      verbose: true,
    }),
  ],
});
