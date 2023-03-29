import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPLugin from 'vite-plugin-eslint';
import { checker } from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@c': resolve(__dirname, 'src/components')
    }
  },
  plugins: [
    vue(),
    eslintPLugin(),
    checker({
      typescript: true
    })
  ]
});
