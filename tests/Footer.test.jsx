import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from '../src/components/Footer'
import { content } from '../src/i18n'

const { profile } = content('en')

describe('Footer', () => {
  it('shows this year and my name', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(
      `© ${new Date().getFullYear()} ${profile.name}`,
    )
    // The phone number stays off the site
    expect(footer.querySelector('a[href^="tel:"]')).toBeNull()
  })
})
