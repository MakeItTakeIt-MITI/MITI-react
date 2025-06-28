import { defineConfig } from 'vitest/config.ts';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: "/tests/setup.ts"
    }
})