import { render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { profile } from '../src/data/profile'
import Hero from '../src/components/Hero'

// Freeze the clock at the 15th of a month, `years` after fullStackSince
const atYearsSince = (years, monthOffset = 0) => {
  const [year, month] = profile.fullStackSince.split('-').map(Number)
  vi.useFakeTimers({ toFake: ['Date'] })
  vi.setSystemTime(new Date(year + years, month - 1 + monthOffset, 15, 12))
}

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading, lead and role from the profile', () => {
    render(<Hero />)
    const { greeting, headline, lead } = profile.hero

    const h1 = screen.getByRole('heading', { level: 1 })
    for (const part of [greeting, headline.before, headline.emphasis]) {
      expect(h1).toHaveTextContent(part)
    }
    expect(h1).toHaveTextContent(headline.after)
    expect(screen.getByText(lead)).toBeInTheDocument()
    expect(
      screen.getByText(`${profile.role} · ${profile.location}`),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: `Portrait of ${profile.name}` }),
    ).toBeInTheDocument()
  })

  it('links the buttons to the projects and contact sections', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute(
      'href',
      '#projects',
    )
    expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('links GitHub and LinkedIn in a new tab, and email with mailto:', () => {
    render(<Hero />)

    for (const [name, href] of [
      [/github/i, profile.links.github],
      [/linkedin/i, profile.links.linkedin],
    ]) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
    const email = screen.getByRole('link', { name: /^email/i })
    expect(email).toHaveAttribute('href', `mailto:${profile.email}`)
    expect(email).not.toHaveAttribute('target')
  })

  it('counts whole years of full-stack experience', () => {
    atYearsSince(4, -1)
    const { unmount } = render(<Hero />)
    expect(screen.getByText(/3\+ yrs/)).toBeInTheDocument()
    unmount()

    atYearsSince(4)
    render(<Hero />)
    const stat = screen.getByText(/4\+ yrs/).closest('p')
    expect(within(stat).getByText(/full-stack experience/)).toBeInTheDocument()
  })

  it('hides the experience badge in the first year', () => {
    atYearsSince(0)
    render(<Hero />)

    expect(screen.queryByText(/\+ yrs/)).not.toBeInTheDocument()
  })
})
