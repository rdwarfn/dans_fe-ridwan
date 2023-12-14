import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      filename: 'remoteEntry.js',
      exposes: {},
      remotes: {
        remote_app: 'http://localhost:4174/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'antd']
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
