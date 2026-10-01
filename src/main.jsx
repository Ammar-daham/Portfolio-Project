import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './styles/tokens.css'
import './styles/base.css'
import App from './App'
import { DEFAULT_LANGUAGE, LANGUAGES, LanguageContext } from './i18n'

// Each page sets its language in <html lang>
const pageLang = document.documentElement.lang
const lang = LANGUAGES.includes(pageLang) ? pageLang : DEFAULT_LANGUAGE

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LanguageContext.Provider value={lang}>
      <App />
    </LanguageContext.Provider>
  </React.StrictMode>,
)
