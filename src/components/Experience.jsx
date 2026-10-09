import { useContent } from '../i18n'
import Section from './ui/Section'
import styles from './Experience.module.css'

const Period = ({ start, end }) => {
  const { ui } = useContent()
  const { formatMonth, present } = ui.experience
  return (
    <p className={styles.when}>
      <time dateTime={start}>{formatMonth(start)}</time>
      {' – '}
      {end ? <time dateTime={end}>{formatMonth(end)}</time> : present}
    </p>
  )
}

const Experience = () => {
  const { experience, ui } = useContent()
  return (
    <Section
      id="experience"
      eyebrow={ui.experience.eyebrow}
      title={ui.experience.title}
      sub={ui.experience.sub}
    >
      <ol className={styles.list}>
        {experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className={styles.job}>
            <Period start={job.start} end={job.end} />
            <div>
              <h3 className={styles.role}>
                {job.title} <span>@ {job.company}</span>
              </h3>
              <ul className={styles.highlights}>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Experience
