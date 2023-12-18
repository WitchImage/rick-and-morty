/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        globals: true,
        environment: 'happy-dom',
        include: ['**/__tests__/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        css: true,
    },
});

