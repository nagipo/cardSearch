import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FrontendRoute from './shared/route.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FrontendRoute/>
    </BrowserRouter>
  </StrictMode>,
)
