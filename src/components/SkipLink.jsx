import styles from './SkipLink.module.css'

// The first thing keyboard users reach: jumps past the navbar
const SkipLink = ({ href }) => (
  <a href={href} className={styles.skip}>
    Skip to content
  </a>
)

export default SkipLink
