import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Navbar from '../src/components/Navbar'

const SECTIONS = [
  ['Home', '#home'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

const setup = () => {
  const user = userEvent.setup()
  render(
    <>
      <Navbar />
      <button type="button">Outside</button>
    </>,
  )
  const nav = screen.getByRole('navigation', { name: 'Main' })
  return {
    user,
    nav,
    toggle: within(nav).getByRole('button', { name: /menu/i }),
    // The section links; the menu also holds the theme and language switches
    links: within(nav).getByRole('list').querySelectorAll('a[href^="#"]'),
  }
}

describe('Navbar', () => {
  it('links to every section and marks the current one', () => {
    const { nav } = setup()

    const links = [
      ...within(nav).getByRole('list').querySelectorAll('a[href^="#"]'),
    ]
    expect(
      links.map((link) => [link.textContent, link.getAttribute('href')]),
    ).toEqual(SECTIONS)
    // Without scrolling, the top of the page (Home) is current
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'location',
    )
  })

  it('links the logo to the top, with the mark hidden from screen readers', () => {
    const { nav } = setup()

    const logo = within(nav).getByRole('link', {
      name: 'Ammar Daham, back to top',
    })
    expect(logo).toHaveAttribute('href', '#home')
    expect(logo).toHaveTextContent('ammar.daham')
    expect(logo.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('offers the CV as a download', () => {
    const { nav } = setup()

    const cv = within(nav).getByRole('link', { name: /résumé/i })
    expect(cv).toHaveAttribute('href', '/Ammar-Daham-CV.pdf')
    expect(cv).toHaveAttribute('download')
  })

  it('opens the mobile menu on its first link and closes it with Escape', async () => {
    const { user, toggle, links } = setup()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName('Close menu')
    expect(links[0]).toHaveFocus()

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAccessibleName('Open menu')
    expect(toggle).toHaveFocus()
  })

  it('lists the languages behind the globe button, marking the current one', async () => {
    const { user, nav } = setup()
    const globe = within(nav).getByRole('button', { name: 'Language: English' })
    expect(globe).toHaveAttribute('aria-expanded', 'false')

    await user.click(globe)
    expect(globe).toHaveAttribute('aria-expanded', 'true')
    const list = document.getElementById(globe.getAttribute('aria-controls'))
    const links = within(list).getAllByRole('link')
    expect(
      links.map((link) => [
        link.textContent,
        link.getAttribute('href'),
        link.getAttribute('hreflang'),
        link.getAttribute('lang'),
      ]),
    ).toEqual([
      ['English', '/', 'en', 'en'],
      ['Suomi', '/fi/', 'fi', 'fi'],
      ['العربية', '/ar/', 'ar', 'ar'],
    ])
    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(links[1]).not.toHaveAttribute('aria-current')

    await user.keyboard('{Escape}')
    expect(globe).toHaveAttribute('aria-expanded', 'false')
    expect(globe).toHaveFocus()

    await user.click(globe)
    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(globe).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the section in view when switching language', async () => {
    // jsdom can't load another page, so stop the link at the document
    const stop = (event) => event.preventDefault()
    document.addEventListener('click', stop)
    window.location.hash = '#skills'
    try {
      const { user, nav } = setup()
      await user.click(
        within(nav).getByRole('button', { name: 'Language: English' }),
      )
      const list = document.getElementById('language-menu')
      const suomi = within(list).getByRole('link', { name: 'Suomi' })
      await user.click(suomi)
      expect(new URL(suomi.href).pathname + new URL(suomi.href).hash).toBe(
        '/fi/#skills',
      )
    } finally {
      document.removeEventListener('click', stop)
      window.location.hash = ''
    }
  })

  it('offers the other languages as rows in the mobile menu', () => {
    const { nav } = setup()

    const rows = within(nav).getByRole('list').querySelectorAll('a[hreflang]')
    expect(
      [...rows].map((row) => [row.textContent, row.getAttribute('lang')]),
    ).toEqual([
      ['Suomi', 'fi'],
      ['العربية', 'ar'],
    ])
  })

  it('closes the menu when a link is chosen or focus leaves the header', async () => {
    const { user, toggle, links } = setup()

    await user.click(toggle)
    await user.click(links[2])
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    act(() => screen.getByRole('button', { name: 'Outside' }).focus())
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
