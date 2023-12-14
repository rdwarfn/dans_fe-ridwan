import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'remote_app',
			exposes: {
				'./remoteApp': './src/App.tsx'
			},
			remotes: {},
      shared: [
        'react',
        'react-dom',
        'antd'
      ],
		}),
	],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});
