import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { experience } from '../data/experience'
import Experience from './Experience'

const role = (job) => `${job.title} @ ${job.company}`

describe('Experience', () => {
  it('lists every job, newest first as in the data', () => {
    render(<Experience />)

    expect(
      screen
        .getAllByRole('heading', { level: 3 })
        .map((heading) => heading.textContent),
    ).toEqual(experience.map(role))
  })

  it.each(experience.map((job) => [role(job), job]))(
    '%s: shows its dates and highlights',
    (name, job) => {
      render(<Experience />)
      const item = screen.getByRole('heading', { level: 3, name }).closest('li')

      const [start, end] = item.querySelectorAll('time')
      expect(start).toHaveAttribute('datetime', job.start)
      expect(start).toHaveTextContent(job.start.slice(0, 4))
      if (job.end) {
        expect(end).toHaveAttribute('datetime', job.end)
        expect(end).toHaveTextContent(job.end.slice(0, 4))
      } else {
        expect(end).toBeUndefined()
        expect(item).toHaveTextContent('Present')
      }

      const highlights = within(item).getAllByRole('listitem')
      expect(highlights.map((li) => li.textContent)).toEqual(job.highlights)
    },
  )
})
