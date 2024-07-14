import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.GET_ENDPOINT': JSON.stringify("http://127.0.0.1:8000/product/list"),
    'import.meta.env.POST_ENDPOINT': JSON.stringify("http://127.0.0.1:8000/product/list/"),
    'import.meta.env.POST_SALE': JSON.stringify("http://127.0.0.1:8000/product/sales_list/"),
    'import.meta.env.DELETE_ENDPOINT': JSON.stringify("http://127.0.0.1:8000/product/"),
    'import.meta.env.PUT_ENDPOINT': JSON.stringify("http://127.0.0.1:8000/product/")
  }
})