import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from '../src/components/Footer'
import { content } from '../src/i18n'

const { profile } = content('en')

describe('Footer', () => {
  it('shows the logo, my name, where I live and this year', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(profile.name)).toBeInTheDocument()
    expect(within(footer).getByText('Helsinki, Finland')).toBeInTheDocument()
    expect(footer).toHaveTextContent(`© ${new Date().getFullYear()}`)
    // The mark is decorative: the name is right next to it
    expect(footer.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    // The phone number stays off the site
    expect(footer.querySelector('a[href^="tel:"]')).toBeNull()
  })
})
