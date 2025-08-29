import { defineConfig } from 'vite';

export default defineConfig({
    // Asegurar que los assets se copien correctamente
    publicDir: 'public',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Copiar todos los archivos de images/
        rollupOptions: {
            input: {
                main: './index.html',
            },
        },
    },
});
