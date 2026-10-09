# Changelog

All notable changes to this site are listed here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- A light theme. The site follows the system's light or dark setting, and a
  switch in the navbar (in the menu on phones) changes it. A choice that
  differs from the system is remembered.
- A Finnish version of the site at `/fi/`, with its own title, description
  and link preview. A switch in the navbar (in the menu on phones) moves
  between English and Finnish and keeps your place on the page.

### Removed

- The "Built with React + Vite · Hosted on Netlify" line in the footer.

## [1.0.0] - 2026-09-30

Initial release.

### Added

- A one-page portfolio on a dark theme, built with React and Vite, with design
  tokens, CSS Modules and self-hosted Inter and JetBrains Mono fonts.
- Sections for the hero, projects, experience, skills, education and
  certifications, and contact, all rendered from the content in `src/data/`.
- A CV to download from the navbar.
- A contact form with labelled fields, inline validation, sending, sent and
  error states, a `mailto:` fallback and spam protection.
- Link previews for LinkedIn and other sites (Open Graph and Twitter tags with
  a share image), an icon set, a web manifest, a sitemap and structured data
  (JSON-LD `Person`).
- Accessibility: page landmarks, a skip link, a keyboard-friendly mobile menu,
  visible focus (also in Windows High Contrast mode) and reduced-motion
  support.
- Fast loading: the portrait and fonts are preloaded, and hashed assets are
  cached for a year.
- Tests with Vitest and Testing Library, and GitHub Actions CI that runs lint,
  the formatting check, the tests and the build on every pull request.
- Deployment on Netlify, configured in `netlify.toml`.

[unreleased]: https://github.com/Ammar-daham/Portfolio-Project/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Ammar-daham/Portfolio-Project/releases/tag/v1.0.0
