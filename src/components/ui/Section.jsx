import { useId } from 'react'
import Container from './Container'
import styles from './Section.module.css'

// A page section with the mockup's heading block: eyebrow, title, sub.
// With `side`, the heading and children fill the left column and `side`
// the right one; they stack on small screens.
const Section = ({
  id,
  eyebrow,
  title,
  sub,
  side,
  className = '',
  children,
}) => {
  const titleId = useId()
  const main = (
    <>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {sub && <p className={styles.sub}>{sub}</p>}
      {children}
    </>
  )
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`${styles.section} ${className}`.trim()}
    >
      {side ? (
        <Container className={styles.split}>
          <div>{main}</div>
          {side}
        </Container>
      ) : (
        <Container>{main}</Container>
      )}
    </section>
  )
}

export default Section
