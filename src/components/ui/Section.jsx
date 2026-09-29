import { useId } from 'react'
import Container from './Container'
import styles from './Section.module.css'

// A page section with the mockup's heading block: eyebrow, title, sub.
const Section = ({ id, eyebrow, title, sub, className = '', children }) => {
  const titleId = useId()
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`${styles.section} ${className}`.trim()}
    >
      <Container>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        {sub && <p className={styles.sub}>{sub}</p>}
        {children}
      </Container>
    </section>
  )
}

export default Section
