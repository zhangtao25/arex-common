import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';
export default defineConfig({
  plugins: [
    react({
      // jsxImportSource: '@emotion/react',
    }),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ArexCommon',
      fileName: 'arex-common',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
      output: {
        globals: {
          react: 'react',
          antd: 'antd',
          'react-dom': 'react-dom',
        },
      },
    },
  },
});
