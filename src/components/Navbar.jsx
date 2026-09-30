import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import Button from './ui/Button'
import Container from './ui/Container'
import Icon from './ui/Icon'
import styles from './Navbar.module.css'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
const SECTION_IDS = LINKS.map((link) => link.id)
const RESUME_URL = '/Ammar-Daham-CV.pdf'
const DESKTOP = '(min-width: 901px)'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const [theme, toggleTheme] = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
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
      <nav aria-label="Main">
        <Container className={styles.bar}>
          <a
            href="#home"
            className={styles.logo}
            aria-label={`${profile.name}, back to top`}
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
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={styles.link}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className={styles.themeItem}>
              <button
                type="button"
                className={styles.themeRow}
                onClick={toggleTheme}
              >
                <Icon name={nextTheme === 'light' ? 'sun' : 'moon'} />
                Switch to {nextTheme} theme
              </button>
            </li>
          </ul>

          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.iconButton} ${styles.themeBar}`}
              aria-label={`Switch to ${nextTheme} theme`}
              title={`Switch to ${nextTheme} theme`}
              onClick={toggleTheme}
            >
              <Icon name={nextTheme === 'light' ? 'sun' : 'moon'} size={18} />
            </button>
            <Button variant="ghost" href={RESUME_URL} download>
              Résumé <Icon name="download" />
            </Button>
            <button
              ref={toggleRef}
              type="button"
              className={`${styles.iconButton} ${styles.toggle}`}
              aria-expanded={open}
              aria-controls="nav-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
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
