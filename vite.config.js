import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ambiente-libre/', // 👈 Esto es importante
  plugins: [react()],
})
