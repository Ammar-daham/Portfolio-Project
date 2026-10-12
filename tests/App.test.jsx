import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App'
import { LanguageContext, content } from '../src/i18n'

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

describe('the Arabic page', () => {
  const renderArabic = () =>
    render(
      <LanguageContext.Provider value="ar">
        <App />
      </LanguageContext.Provider>,
    )

  it('renders in Arabic, with the logo still in Latin letters', () => {
    renderArabic()
    const t = content('ar')

    expect(
      screen.getByRole('heading', { level: 1, name: /عمار فارس دحام/ }),
    ).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: t.ui.nav.label })
    expect(
      within(nav).getByRole('link', {
        name: t.ui.nav.backToTop(t.profile.name),
      }),
    ).toHaveTextContent('ammar.daham')
  })

  it('writes dates with Arabic month names and Western digits', () => {
    renderArabic()

    // June 2023 ends one job and starts the next
    const june2023 = screen.getAllByText('يونيو 2023')
    expect(june2023.map((time) => time.getAttribute('datetime'))).toEqual([
      '2023-06',
      '2023-06',
    ])
    expect(screen.getByText('أكتوبر 2011')).toHaveAttribute(
      'datetime',
      '2011-10',
    )
  })
})
