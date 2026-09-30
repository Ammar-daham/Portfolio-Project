import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { certifications, education } from '../data/education'
import Education from './Education'

describe('Education', () => {
  it.each(education.map((study) => [study.title, study]))(
    '%s: shows the school, years and details',
    (title, study) => {
      render(<Education />)
      const card = screen
        .getByRole('heading', { level: 3, name: title })
        .closest('article')

      expect(within(card).getByText(study.school)).toBeInTheDocument()

      const times = [...card.querySelectorAll('time')].map((time) =>
        time.getAttribute('datetime'),
      )
      expect(times).toEqual(
        study.start === study.end ? [study.start] : [study.start, study.end],
      )

      if (study.thesis) {
        expect(
          within(card).getByText(`Thesis: ${study.thesis}`),
        ).toBeInTheDocument()
      }
      for (const project of study.projects ?? []) {
        expect(within(card).getByText(project)).toBeInTheDocument()
      }
      if (study.link) {
        const link = within(card).getByRole('link', {
          name: `${study.link.label}: ${study.link.title}`,
        })
        expect(link).toHaveAttribute('href', study.link.href)
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noreferrer')
      } else {
        expect(within(card).queryByRole('link')).toBeNull()
      }
    },
  )

  it('lists the certifications with their issuer and year', () => {
    render(<Education />)

    for (const cert of certifications) {
      const item = screen
        .getByRole('heading', { level: 3, name: cert.name })
        .closest('li')
      expect(item.querySelector('time')).toHaveAttribute('datetime', cert.date)
      expect(item).toHaveTextContent(cert.date.slice(0, 4))
      if (cert.issuer) expect(item).toHaveTextContent(cert.issuer)
    }
  })
})
