import { fileURLToPath, URL } from 'node:url'
import * as path from "path";
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
