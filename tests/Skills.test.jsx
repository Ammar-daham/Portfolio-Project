import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { skillGroups } from '../src/data/skills'
import Skills from '../src/components/Skills'

describe('Skills', () => {
  it.each(skillGroups.map((group) => [group.title, group]))(
    '%s: lists every skill, everyday (core) skills first',
    (title, group) => {
      render(<Skills />)

      expect(
        screen.getByRole('heading', { level: 3, name: title }),
      ).toBeInTheDocument()
      const list = screen.getByRole('list', { name: `${title} skills` })
      const expected = [
        ...group.skills.filter((skill) => skill.core),
        ...group.skills.filter((skill) => !skill.core),
      ].map((skill) => skill.name)
      expect(
        within(list)
          .getAllByRole('listitem')
          .map((item) => item.textContent),
      ).toEqual(expected)
    },
  )
})
