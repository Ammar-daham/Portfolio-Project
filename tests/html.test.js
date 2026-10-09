import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

// fi/index.html is index.html in Finnish. The two must keep the same tags,
// scripts and links; only the text, the language and their URLs differ.
const SITE = 'https://ammardaham.netlify.app'
// Paths are relative to the project root, where Vitest runs
const read = (path) => readFileSync(path)
const parse = (path) =>
  new DOMParser().parseFromString(read(path).toString(), 'text/html')
const en = parse('index.html')
const fi = parse('fi/index.html')

const attr = (doc, selector, name) =>
  doc.querySelector(selector)?.getAttribute(name)
const tags = (doc) =>
  [...doc.head.children].map((el) =>
    [
      el.tagName.toLowerCase(),
      el.getAttribute('property') ?? el.getAttribute('name'),
      el.getAttribute('rel'),
      el.getAttribute('hreflang'),
    ]
      .filter(Boolean)
      .join(' '),
  )
const hrefs = (doc, selector) =>
  [...doc.querySelectorAll(selector)].map(
    (el) => el.getAttribute('href') ?? el.getAttribute('src'),
  )
// Width and height from a PNG's header
const pngSize = (path) => {
  const png = read(path)
  return [png.readUInt32BE(16), png.readUInt32BE(20)]
}

describe('index.html and fi/index.html', () => {
  it('have the same tags in the same order', () => {
    expect(tags(fi)).toEqual(tags(en))
  })

  it('share the theme script, structured data, preloads, icons and app', () => {
    for (const selector of [
      'script:not([type])',
      'script[type="application/ld+json"]',
    ]) {
      expect(fi.querySelector(selector).textContent).toBe(
        en.querySelector(selector).textContent,
      )
    }
    const shared =
      'link[rel="preload"], link[rel="icon"], link[rel="apple-touch-icon"], link[rel="manifest"], script[type="module"]'
    expect(hrefs(fi, shared)).toEqual(hrefs(en, shared))
  })

  it('set their own language and URLs', () => {
    expect(en.documentElement.lang).toBe('en')
    expect(fi.documentElement.lang).toBe('fi')
    for (const [doc, url, locale] of [
      [en, `${SITE}/`, 'en_US'],
      [fi, `${SITE}/fi/`, 'fi_FI'],
    ]) {
      expect(attr(doc, 'link[rel="canonical"]', 'href')).toBe(url)
      expect(attr(doc, 'meta[property="og:url"]', 'content')).toBe(url)
      expect(attr(doc, 'meta[property="og:locale"]', 'content')).toBe(locale)
    }
  })

  it('point to each other with the same hreflang links', () => {
    const alternates = (doc) =>
      [...doc.querySelectorAll('link[rel="alternate"]')].map(
        (link) =>
          `${link.getAttribute('hreflang')} ${link.getAttribute('href')}`,
      )
    expect(alternates(en)).toEqual([
      `en ${SITE}/`,
      `fi ${SITE}/fi/`,
      `x-default ${SITE}/`,
    ])
    expect(alternates(fi)).toEqual(alternates(en))
  })

  it('translate the title, description and share image', () => {
    for (const selector of ['title', 'meta[name="description"]']) {
      expect(fi.querySelector(selector).outerHTML).not.toBe(
        en.querySelector(selector).outerHTML,
      )
    }
    expect(attr(en, 'meta[property="og:image"]', 'content')).toBe(
      `${SITE}/og-image.png`,
    )
    expect(attr(fi, 'meta[property="og:image"]', 'content')).toBe(
      `${SITE}/og-image-fi.png`,
    )
    expect(pngSize('public/og-image.png')).toEqual([1200, 630])
    expect(pngSize('public/og-image-fi.png')).toEqual([1200, 630])
  })
})
