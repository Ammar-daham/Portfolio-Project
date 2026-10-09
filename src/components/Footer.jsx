import { useContent } from '../i18n'
import Container from './ui/Container'
import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

const Footer = () => {
  const { profile, ui } = useContent()
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.text}>
          © {YEAR} {profile.name}
        </p>
        <p className={styles.text}>{ui.footer.credit}</p>
      </Container>
    </footer>
  )
}

export default Footer
