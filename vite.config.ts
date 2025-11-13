import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    // Output directory
    outDir: 'dist',
    
    // Enable minification
    minify: 'esbuild',
    
    // Generate sourcemaps for production debugging
    sourcemap: false,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // Rollup options for optimization
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
        
        // File naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          
          if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          
          return `assets/[name]-[hash][extname]`;
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Target modern browsers for smaller bundles
    target: 'esnext',
  },
  
  // Server configuration for development
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    open: true,
  },
})
