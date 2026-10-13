import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

// fi/index.html and ar/index.html are index.html in Finnish and Arabic. The
// three must keep the same tags, scripts and links; only the text, the
// language, the direction and their URLs differ.
const SITE = 'https://ammardaham.fi'
// Paths are relative to the project root, where Vitest runs
const read = (path) => readFileSync(path)
const parse = (path) =>
  new DOMParser().parseFromString(read(path).toString(), 'text/html')
const en = parse('index.html')
const fi = parse('fi/index.html')
const ar = parse('ar/index.html')
const translations = [fi, ar]

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
// The Arabic page also preloads the Arabic font
const ARABIC_FONT =
  '/node_modules/@fontsource-variable/vazirmatn/files/vazirmatn-arabic-wght-normal.woff2'

describe('index.html, fi/index.html and ar/index.html', () => {
  it('have the same tags in the same order', () => {
    expect(tags(fi)).toEqual(tags(en))
    expect(attr(ar, `link[href="${ARABIC_FONT}"]`, 'rel')).toBe('preload')
    const withoutArabicFont = ar.cloneNode(true)
    withoutArabicFont.querySelector(`link[href="${ARABIC_FONT}"]`).remove()
    expect(tags(withoutArabicFont)).toEqual(tags(en))
  })

  it('share the theme script, structured data, preloads, icons and app', () => {
    for (const doc of translations) {
      for (const selector of [
        'script:not([type])',
        'script[type="application/ld+json"]',
      ]) {
        expect(doc.querySelector(selector).textContent).toBe(
          en.querySelector(selector).textContent,
        )
      }
      const shared = `link[rel="preload"]:not([href="${ARABIC_FONT}"]), link[rel="icon"], link[rel="apple-touch-icon"], link[rel="manifest"], script[type="module"]`
      expect(hrefs(doc, shared)).toEqual(hrefs(en, shared))
    }
  })

  it('set their own language, direction and URLs', () => {
    for (const [doc, lang, dir, url, locale] of [
      [en, 'en', null, `${SITE}/`, 'en_US'],
      [fi, 'fi', null, `${SITE}/fi/`, 'fi_FI'],
      [ar, 'ar', 'rtl', `${SITE}/ar/`, 'ar_AR'],
    ]) {
      expect(doc.documentElement.lang).toBe(lang)
      expect(doc.documentElement.getAttribute('dir')).toBe(dir)
      expect(attr(doc, 'link[rel="canonical"]', 'href')).toBe(url)
      expect(attr(doc, 'meta[property="og:url"]', 'content')).toBe(url)
      expect(attr(doc, 'meta[property="og:locale"]', 'content')).toBe(locale)
      const alternates = [
        ...doc.querySelectorAll('meta[property="og:locale:alternate"]'),
      ].map((meta) => meta.getAttribute('content'))
      expect(alternates.toSorted()).toEqual(
        ['en_US', 'fi_FI', 'ar_AR'].filter((l) => l !== locale).toSorted(),
      )
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
      `ar ${SITE}/ar/`,
      `x-default ${SITE}/`,
    ])
    for (const doc of translations) {
      expect(alternates(doc)).toEqual(alternates(en))
    }
  })

  it('translate the title, description and share image', () => {
    for (const doc of translations) {
      for (const selector of ['title', 'meta[name="description"]']) {
        expect(doc.querySelector(selector).outerHTML).not.toBe(
          en.querySelector(selector).outerHTML,
        )
      }
    }
    for (const [doc, image] of [
      [en, 'og-image.png'],
      [fi, 'og-image-fi.png'],
      [ar, 'og-image-ar.png'],
    ]) {
      expect(attr(doc, 'meta[property="og:image"]', 'content')).toBe(
        `${SITE}/${image}`,
      )
      expect(attr(doc, 'meta[name="twitter:image"]', 'content')).toBe(
        `${SITE}/${image}`,
      )
      expect(pngSize(`public/${image}`)).toEqual([1200, 630])
    }
  })
})

describe('sitemap.xml', () => {
  it('lists every page with the same alternates as the pages', () => {
    const sitemap = new DOMParser().parseFromString(
      read('public/sitemap.xml').toString(),
      'application/xml',
    )
    const urls = [...sitemap.getElementsByTagName('url')]
    expect(
      urls.map((url) => url.getElementsByTagName('loc')[0].textContent),
    ).toEqual([`${SITE}/`, `${SITE}/fi/`, `${SITE}/ar/`])
    for (const url of urls) {
      const links = [...url.getElementsByTagName('xhtml:link')].map(
        (link) =>
          `${link.getAttribute('hreflang')} ${link.getAttribute('href')}`,
      )
      expect(links).toEqual([
        `en ${SITE}/`,
        `fi ${SITE}/fi/`,
        `ar ${SITE}/ar/`,
        `x-default ${SITE}/`,
      ])
    }
  })
})
