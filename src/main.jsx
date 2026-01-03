import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    console.error(error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-6 text-center">
          <p className="mb-3">Something went wrong.</p>
          <button
            onClick={() => location.reload()}
            className="bg-brand text-white px-3 py-1 rounded"
          >
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

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
document.title = document.title || 'Arun Lama — Data Analyst'

createRoot(container).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)

if (typeof import.meta !== 'undefined' && import.meta.hot) {
  import.meta.hot.accept()
}
