import { useContent } from '../i18n'
import styles from './SkipLink.module.css'

// The first thing keyboard users reach: jumps past the navbar
const SkipLink = ({ href }) => {
  const { ui } = useContent()
  return (
    <a href={href} className={styles.skip}>
      {ui.skipLink}
    </a>
  )
}

export default SkipLink
