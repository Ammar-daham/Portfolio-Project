import { profile } from '../data/profile'
import ContactForm from './ContactForm'
import Icon from './ui/Icon'
import Section from './ui/Section'
import styles from './Contact.module.css'

const linkedinLabel = profile.links.linkedin
  .replace(/^https:\/\/(www\.)?/, '')
  .replace(/\/$/, '')

const Contact = () => (
  <Section
    id="contact"
    eyebrow="// 05 — say hello"
    title="Let's build something."
    sub="Have a role, a project, or a question? My inbox is open."
    side={<ContactForm />}
  >
    <a className={styles.email} href={`mailto:${profile.email}`}>
      {profile.email}
    </a>
    <ul className={styles.meta}>
      <li>
        <Icon name="map-pin" className={styles.icon} />
        {profile.location}
      </li>
      <li>
        <Icon name="linkedin" className={styles.icon} />
        <a
          className={styles.link}
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          {linkedinLabel}
        </a>
      </li>
    </ul>
  </Section>
)

export default Contact
