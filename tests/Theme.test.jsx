import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Navbar from '../src/components/Navbar'

// A stand-in for window.matchMedia('(prefers-color-scheme: light)')
const mockSystem = (light) => {
  const listeners = new Set()
  const media = {
    matches: light,
    addEventListener: (_, listener) => listeners.add(listener),
    removeEventListener: (_, listener) => listeners.delete(listener),
  }
  window.matchMedia = vi.fn(() => media)
  return {
    change: (nextLight) => {
      media.matches = nextLight
      act(() => listeners.forEach((listener) => listener()))
    },
  }
}

const root = document.documentElement
const themeColor = () =>
  document.querySelector('meta[name="theme-color"]').getAttribute('content')
// The switch is in the bar on desktop and in the menu on mobile; CSS shows
// one of the two, but jsdom has no CSS, so both are here
const themeButtons = (next) =>
  screen.getAllByRole('button', { name: `Switch to ${next} theme` })
const inMenu = (button) => button.closest('#nav-menu') !== null
const themeButton = (next) => themeButtons(next).find((b) => !inMenu(b))

describe('Theme switch', () => {
  beforeEach(() => {
    const meta = document.createElement('meta')
    meta.name = 'theme-color'
    meta.content = '#0b0d10'
    document.head.append(meta)
  })
  afterEach(() => {
    document.querySelector('meta[name="theme-color"]').remove()
    delete window.matchMedia
    delete root.dataset.theme
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('starts from the system setting', () => {
    mockSystem(true)
    render(<Navbar />)

    expect(root).toHaveAttribute('data-theme', 'light')
    expect(themeColor()).toBe('#f7f8fa')
    expect(themeButton('dark')).toBeInTheDocument()
  })

  it('keeps the theme the inline script set before the first paint', () => {
    root.dataset.theme = 'light'
    mockSystem(false)
    render(<Navbar />)

    expect(root).toHaveAttribute('data-theme', 'light')
    expect(themeButton('dark')).toBeInTheDocument()
  })

  it('switches, remembering only a choice that differs from the system', async () => {
    mockSystem(false) // the system is dark
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(themeButton('light'))
    expect(root).toHaveAttribute('data-theme', 'light')
    expect(themeColor()).toBe('#f7f8fa')
    expect(localStorage.getItem('theme')).toBe('light')

    await user.click(themeButton('dark'))
    expect(root).toHaveAttribute('data-theme', 'dark')
    expect(themeColor()).toBe('#0b0d10')
    expect(localStorage.getItem('theme')).toBeNull()
  })

  it('offers the same switch in the mobile menu', async () => {
    mockSystem(false)
    const user = userEvent.setup()
    render(<Navbar />)

    const buttons = themeButtons('light')
    expect(buttons).toHaveLength(2)
    const menu = buttons.find(inMenu)
    expect(menu).toBeDefined()
    await user.click(menu)
    expect(root).toHaveAttribute('data-theme', 'light')
  })

  it('follows the system live until a theme is picked', async () => {
    const system = mockSystem(false)
    const user = userEvent.setup()
    render(<Navbar />)

    system.change(true)
    expect(root).toHaveAttribute('data-theme', 'light')

    await user.click(themeButton('dark')) // differs from the system: saved
    system.change(false)
    system.change(true)
    expect(root).toHaveAttribute('data-theme', 'dark')
  })

  it('still switches when storage is blocked', async () => {
    mockSystem(false)
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(themeButton('light'))
    expect(root).toHaveAttribute('data-theme', 'light')
  })
})
