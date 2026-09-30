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
    links: within(nav).getByRole('list').querySelectorAll('a'),
  }
}

describe('Navbar', () => {
  it('links to every section and marks the current one', () => {
    const { nav } = setup()

    const links = [...within(nav).getByRole('list').querySelectorAll('a')]
    expect(
      links.map((link) => [link.textContent, link.getAttribute('href')]),
    ).toEqual(SECTIONS)
    // Without scrolling, the top of the page (Home) is current
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'location',
    )
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
