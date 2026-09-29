import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import Button from './ui/Button'
import Container from './ui/Container'
import Icon from './ui/Icon'
import styles from './Navbar.module.css'

const LINKS = [
  { id: 'header', label: 'Home' },
  { id: 'about-me', label: 'About' },
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
  const navRef = useRef(null)
  const toggleRef = useRef(null)
  const [first, last] = profile.name.toLowerCase().split(' ')

  // While the mobile menu is open: Esc, a click outside, or growing to the
  // desktop layout closes it
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setOpen(false)
    }
    const onResize = () => {
      if (window.matchMedia(DESKTOP).matches) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Main">
      <Container className={styles.bar}>
        <a
          href="#header"
          className={styles.logo}
          aria-label={`${profile.name}, back to top`}
        >
          {first}
          <span>.</span>
          {last}
        </a>

        <ul
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
        </ul>

        <div className={styles.actions}>
          <Button variant="ghost" href={RESUME_URL} download>
            Résumé <Icon name="download" />
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
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
  )
}

export default Navbar
