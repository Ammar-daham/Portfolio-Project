import { useEffect, useState } from 'react'

// Light or dark. The inline script in index.html sets data-theme on <html>
// before the first paint; this hook keeps it, the saved choice and the
// browser's theme colour in sync. Without a saved choice the theme follows
// the system setting, live.
const KEY = 'theme'
const LIGHT_QUERY = '(prefers-color-scheme: light)'
const THEME_COLOR = { dark: '#0b0d10', light: '#f7f8fa' }

const systemTheme = () =>
  window.matchMedia?.(LIGHT_QUERY).matches ? 'light' : 'dark'

const savedTheme = () => {
  try {
    const theme = localStorage.getItem(KEY)
    return theme === 'light' || theme === 'dark' ? theme : null
  } catch {
    return null
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const current = document.documentElement.dataset.theme
    return current === 'light' || current === 'dark'
      ? current
      : (savedTheme() ?? systemTheme())
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme])
  }, [theme])

  // Follow the system setting until the visitor picks a theme
  useEffect(() => {
    const media = window.matchMedia?.(LIGHT_QUERY)
    if (!media) return
    const onChange = () => {
      if (!savedTheme()) setTheme(systemTheme())
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    try {
      // Only remember a choice that differs from the system setting, so
      // switching back to the system's theme means following it again
      if (next === systemTheme()) localStorage.removeItem(KEY)
      else localStorage.setItem(KEY, next)
    } catch {
      // Storage can be blocked; the choice then lasts for this visit only
    }
    setTheme(next)
  }

  return [theme, toggleTheme]
}
