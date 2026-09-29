import { certifications, education } from '../data/education'
import Card from './ui/Card'
import Icon from './ui/Icon'
import Section from './ui/Section'
import styles from './Education.module.css'

const Years = ({ start, end }) => (
  <p className={styles.when}>
    <time dateTime={start}>{start}</time>
    {end !== start && (
      <>
        {' – '}
        <time dateTime={end}>{end}</time>
      </>
    )}
  </p>
)

const Study = ({ study }) => (
  <Card as="article" padded className={styles.card}>
    <Years start={study.start} end={study.end} />
    <h3 className={styles.title}>{study.title}</h3>
    <p className={styles.school}>{study.school}</p>
    {study.thesis && <p className={styles.detail}>Thesis: {study.thesis}</p>}
    {study.projects && (
      <>
        <p className={styles.detail}>Projects:</p>
        <ul className={styles.list}>
          {study.projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </>
    )}
    {study.link && (
      <a
        className={styles.link}
        href={study.link.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${study.link.label}: ${study.link.title}`}
      >
        {study.link.label} <Icon name="arrow-up-right" />
      </a>
    )}
  </Card>
)

const Education = () => (
  <Section
    id="education"
    eyebrow="// 04 — learning"
    title="Education"
    sub="Two bachelor's degrees, a vocational ICT qualification and an exchange focused on data and machine learning."
  >
    <div className={styles.grid}>
      {education.map((study) => (
        <Study key={study.school} study={study} />
      ))}
      <Card as="article" padded className={`${styles.card} ${styles.certs}`}>
        <p className={styles.when}>Certifications</p>
        <ul className={styles.certList}>
          {certifications.map((cert) => (
            <li key={cert.name}>
              <h3 className={styles.title}>{cert.name}</h3>
              <p className={styles.school}>
                {cert.issuer && `${cert.issuer} · `}
                <time dateTime={cert.date}>{cert.date.slice(0, 4)}</time>
              </p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
)

export default Education
