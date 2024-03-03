import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Amplify from 'aws-amplify';
import awsExports from './aws-exports'; // your generated aws-exports file

Amplify.configure(awsExports);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: './runtimeConfig', replacement: './runtimeConfig.browser' }
    ]
  }
});
