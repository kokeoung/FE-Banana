import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProvider from './app/providers/AppProviders.jsx'
import "./shared/styles/reset.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
)
