import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/fem-ecommerce-product-page/',
  plugins: [vue()],
})
