import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Contact from '../src/components/Contact'
import { content } from '../src/i18n'

const { profile } = content('en')

describe('Contact', () => {
  it('shows my email, location and LinkedIn next to the form', () => {
    render(<Contact />)

    expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute(
      'href',
      `mailto:${profile.email}`,
    )
    expect(screen.getByText(profile.location)).toBeInTheDocument()
    const linkedin = screen.getByRole('link', { name: /linkedin\.com\/in\// })
    expect(linkedin).toHaveAttribute('href', profile.links.linkedin)
    expect(linkedin).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('button', { name: 'Send message' })).toBeVisible()
  })
})
