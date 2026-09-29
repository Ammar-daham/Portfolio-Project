import { profile } from '../data/profile'
import Container from './ui/Container'
import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.inner}>
      <p className={styles.text}>
        © {YEAR} {profile.name}
      </p>
      <p className={styles.text}>Built with React + Vite · Hosted on Netlify</p>
    </Container>
  </footer>
)

export default Footer
