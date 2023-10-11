import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [
    react({
      // jsxImportSource: '@emotion/react',
    })
  ],
  resolve: {
    alias: {
      // 'arex-common': path.resolve('../arex-common/src'),
    },
  },
  base: 'arex-common',
  server: {
    port: 16868,
    proxy: {
      '/report': {
        target: 'http://10.5.153.1:8090',
        changeOrigin: true,
        rewrite: (path) => path.replace('/report', '/api'),
      },
    },
  },
});
