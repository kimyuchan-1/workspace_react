import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode로 console.log()의 결과가 2번 출력*/} 
    <App />
  </StrictMode>,
)
