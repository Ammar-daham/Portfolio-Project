import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '../data/profile'
import Footer from './Footer'

describe('Footer', () => {
  it('shows this year, my name and the credit line', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(
      `© ${new Date().getFullYear()} ${profile.name}`,
    )
    expect(footer).toHaveTextContent(/Built with React \+ Vite/)
    // The phone number stays off the site
    expect(footer.querySelector('a[href^="tel:"]')).toBeNull()
  })
})
