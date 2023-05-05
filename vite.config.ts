import { defineConfig, ConfigEnv, UserConfig } from "vite";
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      host: '127.0.0.1',
      proxy: {
        '/api': {
          target: '',
          ws: false,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      },
      // hmr: {
      //   overlay: false
      // }
    }
  }
})
