import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import '../styles/tokens.css'
import '../styles/base.css'
import UiPreview from './UiPreview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UiPreview />
  </React.StrictMode>,
)
