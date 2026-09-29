import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import '../styles/tokens.css'
import '../styles/base.css'
import UiPreview from './UiPreview'

// ?legacy loads the old styles too, to check the primitives hold up next to them
if (new URLSearchParams(window.location.search).has('legacy')) {
  await import('bootstrap/dist/css/bootstrap.min.css')
  await import('../App.css')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UiPreview />
  </React.StrictMode>,
)
