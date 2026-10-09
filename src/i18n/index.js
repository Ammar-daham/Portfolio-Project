import { createContext, useContext } from 'react'
import { certifications, education } from '../data/education'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { ui } from '../data/ui'

// Text that changes with the language is written where it's used, as
// { en: '…', fi: '…' }. Everything else (links, dates, stack names) is
// written once and shared by every language.
export const LANGUAGES = ['en', 'fi']
export const DEFAULT_LANGUAGE = 'en'

const isPlainObject = (value) =>
  value !== null &&
  typeof value === 'object' &&
  Object.getPrototypeOf(value) === Object.prototype

const isTranslation = (value) =>
  isPlainObject(value) &&
  Object.keys(value).length > 0 &&
  Object.keys(value).every((key) => LANGUAGES.includes(key))

// Swaps every { en, … } object for the given language's value, falling back
// to the default language when a translation is missing
export const localize = (value, lang) => {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang))
  if (isTranslation(value)) return value[lang] ?? value[DEFAULT_LANGUAGE]
  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, lang)]),
    )
  }
  return value
}

const ALL = {
  profile,
  projects,
  experience,
  education,
  certifications,
  skillGroups,
  ui,
}
const cache = {}

// All the site's content and interface text in one language
export const content = (lang = DEFAULT_LANGUAGE) => {
  cache[lang] ??= localize(ALL, lang)
  return cache[lang]
}

// The page's language comes from <html lang> (see main.jsx)
export const LanguageContext = createContext(DEFAULT_LANGUAGE)
export const useLanguage = () => useContext(LanguageContext)
export const useContent = () => content(useLanguage())
