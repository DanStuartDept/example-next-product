import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    reporters: ['junit', 'default'],
    outputFile: './test-results/junit.xml',
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,jsx,ts,tsx}', '**/*.d.ts', '**/*.css'],
      reporter: ['text', 'lcov', 'clover', 'json'],
      reportsDirectory: './coverage',
    },
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
  },
})
