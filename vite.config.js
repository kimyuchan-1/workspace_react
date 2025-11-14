import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind(),
  ],
  server: {
    proxy: {
      '/photo-api': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/photo-api/, '/B551011/PhotoGalleryService1'),
        secure: false,
      },
      '/festival-api': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/festival-api/, '/6260000/FestivalService'),
        secure: false,
      },
      '/subway-api': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/subway-api/, '/6260000/IndoorAirQuality'),
        secure: false
      },
      '/kobisopenapi': {
        target: 'https://kobis.or.kr/kobisopenapi',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/kobisopenapi/, ''), 
        secure: false
      },
      '/dataApi' : {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dataApi/, ''),
        secure: false
      }
    }
  }
},
)
