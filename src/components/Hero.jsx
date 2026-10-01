import { useId } from 'react'
import portrait from '../ammar.webp'
import { useContent } from '../i18n'
import Button from './ui/Button'
import Container from './ui/Container'
import Icon from './ui/Icon'
import styles from './Hero.module.css'

// Whole years since a 'YYYY-MM' date
const yearsSince = (yearMonth) => {
  const [year, month] = yearMonth.split('-').map(Number)
  const now = new Date()
  const months =
    now.getFullYear() * 12 + now.getMonth() - (year * 12 + month - 1)
  return Math.floor(months / 12)
}

const Hero = () => {
  const { profile, ui } = useContent()
  const t = ui.hero
  const { hero, links, email, name, role, location } = profile
  const years = yearsSince(profile.fullStackSince)
  const titleId = useId()
  const socials = [
    { label: 'GitHub', href: links.github, external: true },
    { label: 'LinkedIn', href: links.linkedin, external: true },
    { label: t.email, href: `mailto:${email}` },
  ]

  return (
    <section id="home" aria-labelledby={titleId} className={styles.hero}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.pill}>
            <span className={styles.dot} aria-hidden="true" />
            {role} · {location}
          </p>
          <h1 id={titleId} className={styles.title}>
            {hero.greeting}
            <br />
            {hero.headline.before} <em>{hero.headline.emphasis}</em>
            <br />
            {hero.headline.after}
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.ctas}>
            <Button href="#projects">
              {t.viewWork} <Icon name="arrow-right" />
            </Button>
            <Button variant="ghost" href="#contact">
              {t.getInTouch}
            </Button>
          </div>
          <ul className={styles.socials}>
            {socials.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && { target: '_blank', rel: 'noreferrer' })}
                >
                  {label} <Icon name="arrow-up-right" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.portrait}>
          <div className={styles.tile}>
            <img
              src={portrait}
              alt={t.portraitAlt(name)}
              width="800"
              height="800"
            />
          </div>
          {years > 0 && (
            <p className={styles.stat}>
              <strong>{t.years(years)}</strong> {t.experience}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Hero
