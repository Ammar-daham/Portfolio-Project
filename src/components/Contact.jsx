import { useContent } from '../i18n'
import ContactForm from './ContactForm'
import Icon from './ui/Icon'
import Section from './ui/Section'
import styles from './Contact.module.css'

const Contact = () => {
  const { profile, ui } = useContent()
  const linkedinLabel = profile.links.linkedin
    .replace(/^https:\/\/(www\.)?/, '')
    .replace(/\/$/, '')
  return (
    <Section
      id="contact"
      eyebrow={ui.contact.eyebrow}
      title={ui.contact.title}
      sub={ui.contact.sub}
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
}

export default Contact
