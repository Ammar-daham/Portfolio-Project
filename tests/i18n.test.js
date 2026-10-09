import { describe, expect, it } from 'vitest'
import { LANGUAGES, content, localize } from '../src/i18n'

describe('localize', () => {
  it("swaps each { en } object for that language's text and keeps shared values", () => {
    const data = {
      title: { en: 'Projects' },
      links: { code: 'https://example.com' },
      items: [{ name: { en: 'Salon' }, year: 2024 }],
      label: { en: (group) => `${group} skills` },
    }

    const result = localize(data, 'en')
    expect(result.title).toBe('Projects')
    expect(result.links).toEqual({ code: 'https://example.com' })
    expect(result.items).toEqual([{ name: 'Salon', year: 2024 }])
    expect(result.label('Data')).toBe('Data skills')
  })

  it('falls back to English when a language is missing', () => {
    expect(localize({ en: 'Home' }, 'xx')).toBe('Home')
  })
})

describe('content', () => {
  // A plain object whose keys are all language codes is a leftover translation
  const leftovers = (value, path = '') => {
    if (Array.isArray(value)) {
      return value.flatMap((item, i) => leftovers(item, `${path}[${i}]`))
    }
    if (value && typeof value === 'object' && value.constructor === Object) {
      const keys = Object.keys(value)
      if (keys.length && keys.every((key) => LANGUAGES.includes(key))) {
        return [path]
      }
      return keys.flatMap((key) => leftovers(value[key], `${path}.${key}`))
    }
    return []
  }

  it.each(LANGUAGES)('%s: every piece of text is resolved', (lang) => {
    expect(leftovers(content(lang))).toEqual([])
  })
})
