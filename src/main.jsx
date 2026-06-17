import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

function ensureRoot() {
  let container = document.getElementById('root')
  if (!container) {
    container = document.createElement('div')
    container.id = 'root'
    document.body.appendChild(container)
  }
  return container
}

const container = ensureRoot()
document.title = document.title || 'Arun Lama — ML Researcher & Data Scientist'

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Register Service Worker for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('✓ Service Worker registered:', registration)
      })
      .catch((error) => {
        console.log('✗ Service Worker registration failed:', error)
      })
  })
}

if (typeof import.meta !== 'undefined' && import.meta.hot) {
  import.meta.hot.accept()
}
