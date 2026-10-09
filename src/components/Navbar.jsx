import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useContent } from '../i18n'
import { useTheme } from '../hooks/useTheme'
import Button from './ui/Button'
import Container from './ui/Container'
import Icon from './ui/Icon'
import styles from './Navbar.module.css'

const SECTION_IDS = [
  'home',
  'projects',
  'experience',
  'skills',
  'education',
  'contact',
]
const RESUME_URL = '/Ammar-Daham-CV.pdf'
const DESKTOP = '(min-width: 901px)'

const Navbar = () => {
  const { profile, ui } = useContent()
  const t = ui.nav
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const [theme, toggleTheme] = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const other = t.otherLanguage
  // Keep the visitor's place when switching: /#skills → /fi/#skills
  const keepSection = (event) => {
    event.currentTarget.href = other.href + window.location.hash
  }
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const [first, last] = profile.name.toLowerCase().split(' ')

  // Opening the mobile menu moves focus to its first link (the links come
  // before the toggle in the DOM, so Tab alone would skip them). While it's
  // open, Esc, a click or focus outside the header, or growing to the
  // desktop layout closes it.
  useEffect(() => {
    if (!open) return
    menuRef.current?.querySelector('a')?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }
    const onResize = () => {
      if (window.matchMedia(DESKTOP).matches) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onOutside)
    document.addEventListener('focusin', onOutside)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onOutside)
      document.removeEventListener('focusin', onOutside)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header ref={headerRef} className={styles.nav}>
      <nav aria-label={t.label}>
        <Container className={styles.bar}>
          <a
            href="#home"
            className={styles.logo}
            aria-label={t.backToTop(profile.name)}
          >
            {first}
            <span>.</span>
            {last}
          </a>

          <ul
            ref={menuRef}
            id="nav-menu"
            className={`${styles.links} ${open ? styles.open : ''}`.trim()}
          >
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={styles.link}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {t.links[id]}
                </a>
              </li>
            ))}
            <li className={styles.menuOnly}>
              <button
                type="button"
                className={styles.menuRow}
                onClick={toggleTheme}
              >
                <Icon name={nextTheme === 'light' ? 'sun' : 'moon'} />
                {t.switchTheme(nextTheme)}
              </button>
            </li>
            <li className={styles.menuOnly}>
              <a
                href={other.href}
                hrefLang={other.lang}
                lang={other.lang}
                className={styles.menuRow}
                onClick={keepSection}
              >
                <Icon name="globe" />
                {other.label}
              </a>
            </li>
          </ul>

          <div className={styles.actions}>
            <a
              href={other.href}
              hrefLang={other.lang}
              lang={other.lang}
              className={`${styles.iconButton} ${styles.barOnly} ${styles.language}`}
              aria-label={`${other.short} – ${other.label}`}
              title={other.label}
              onClick={keepSection}
            >
              {other.short}
            </a>
            <button
              type="button"
              className={`${styles.iconButton} ${styles.barOnly}`}
              aria-label={t.switchTheme(nextTheme)}
              title={t.switchTheme(nextTheme)}
              onClick={toggleTheme}
            >
              <Icon name={nextTheme === 'light' ? 'sun' : 'moon'} size={18} />
            </button>
            <Button variant="ghost" href={RESUME_URL} download>
              {t.resume} <Icon name="download" />
            </Button>
            <button
              ref={toggleRef}
              type="button"
              className={`${styles.iconButton} ${styles.toggle}`}
              aria-expanded={open}
              aria-controls="nav-menu"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen((isOpen) => !isOpen)}
            >
              <Icon name={open ? 'x' : 'menu'} size={20} />
            </button>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Navbar
