import { useId } from 'react'
import portrait from '../ammar.webp'
import { profile } from '../data/profile'
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
  const { hero, links, email, name, role, location } = profile
  const years = yearsSince(profile.fullStackSince)
  const titleId = useId()
  const socials = [
    { label: 'GitHub', href: links.github, external: true },
    { label: 'LinkedIn', href: links.linkedin, external: true },
    { label: 'Email', href: `mailto:${email}` },
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
              View my work <Icon name="arrow-right" />
            </Button>
            <Button variant="ghost" href="#contact">
              Get in touch
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
              alt={`Portrait of ${name}`}
              width="800"
              height="800"
            />
          </div>
          {years > 0 && (
            <p className={styles.stat}>
              <strong>{years}+ yrs</strong> full-stack experience
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Hero
