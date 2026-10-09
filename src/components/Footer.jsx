import { useContent } from '../i18n'
import Container from './ui/Container'
import LogoMark from './ui/LogoMark'
import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

const Footer = () => {
  const { profile } = useContent()
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <LogoMark className={styles.mark} />
          <div>
            <p className={styles.name}>{profile.name}</p>
            <p className={styles.text}>{profile.location}</p>
          </div>
        </div>
        <p className={styles.text}>© {YEAR}</p>
      </Container>
    </footer>
  )
}

export default Footer
