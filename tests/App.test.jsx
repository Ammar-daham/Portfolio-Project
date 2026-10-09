import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App'
import { content } from '../src/i18n'

const { profile } = content('en')

describe('App', () => {
  it('renders the hero heading with my name', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: new RegExp(profile.name) }),
    ).toBeInTheDocument()
  })

  it('has the page landmarks, with every section labelled', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    // A <section> with an accessible name is a region landmark
    const sections = within(screen.getByRole('main')).getAllByRole('region')
    expect(sections).toHaveLength(6)
  })

  it('points every in-page link at an element that exists', () => {
    const { container } = render(<App />)

    const hrefs = [...container.querySelectorAll('a[href^="#"]')].map((link) =>
      link.getAttribute('href'),
    )
    expect(hrefs.length).toBeGreaterThan(0)
    for (const href of new Set(hrefs)) {
      expect(document.getElementById(href.slice(1)), href).not.toBeNull()
    }
  })
})
