import { experience } from '../data/experience'
import Section from './ui/Section'
import styles from './Experience.module.css'

const MONTH = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})
const formatMonth = (yearMonth) =>
  MONTH.format(new Date(`${yearMonth}-01T00:00:00Z`))

const Period = ({ start, end }) => (
  <p className={styles.when}>
    <time dateTime={start}>{formatMonth(start)}</time>
    {' – '}
    {end ? <time dateTime={end}>{formatMonth(end)}</time> : 'Present'}
  </p>
)

const Experience = () => (
  <Section
    id="experience"
    eyebrow="// 02 — where I've worked"
    title="Experience"
    sub="From managing gas-station accounts to shipping full-stack products."
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

export default Experience
