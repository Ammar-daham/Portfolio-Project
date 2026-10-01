import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Projects from '../src/components/Projects'
import { content } from '../src/i18n'

const { projects } = content('en')

const LINK_LABELS = { demo: 'Live demo', code: 'Code', api: 'API code' }

describe('Projects', () => {
  it('renders one card per project, in order', () => {
    render(<Projects />)

    const titles = screen
      .getAllByRole('article')
      .map((card) => within(card).getByRole('heading', { level: 3 }))
    expect(titles.map((title) => title.textContent)).toEqual(
      projects.map((project) => project.title),
    )
  })

  it.each(projects.map((project) => [project.title, project]))(
    '%s: shows its role, pitch, stack and links',
    (title, project) => {
      render(<Projects />)
      const card = screen
        .getByRole('heading', { level: 3, name: title })
        .closest('article')

      expect(within(card).getByText(project.role)).toBeInTheDocument()
      expect(within(card).getByText(project.pitch)).toBeInTheDocument()

      const stack = within(card).getByRole('list', { name: `${title} stack` })
      expect(
        within(stack)
          .getAllByRole('listitem')
          .map((item) => item.textContent),
      ).toEqual(project.stack)

      for (const [kind, href] of Object.entries(project.links)) {
        const link = within(card).getByRole('link', {
          name: `${title}: ${LINK_LABELS[kind]}`,
        })
        expect(link).toHaveAttribute('href', href)
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noreferrer')
      }
      expect(within(card).getAllByRole('link')).toHaveLength(
        Object.keys(project.links).length,
      )

      const shot = within(card).queryByRole('img')
      if (project.image) {
        expect(shot).toHaveAccessibleName(`Screenshot of ${title}`)
        expect(shot).toHaveAttribute('loading', 'lazy')
      } else {
        expect(shot).toBeNull()
      }

      if (project.status) {
        expect(within(card).getByText(project.status)).toBeInTheDocument()
      }
    },
  )
})
