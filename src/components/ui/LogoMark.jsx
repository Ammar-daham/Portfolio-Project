import styles from './LogoMark.module.css'

// The logo: an A whose crossbar is the accent dot. The same shape as
// public/icon.svg, cropped to the letter (7:6). It takes the text colour,
// and it's decorative: the name always sits next to it or in a label.
const LogoMark = ({ className = '' }) => (
  <svg
    viewBox="11 14 42 36"
    focusable="false"
    aria-hidden="true"
    className={`${styles.mark} ${className}`.trim()}
  >
    <path d="M11.13 50 28.13 14h7.74l17 36h-7.74L32 22.2 18.87 50z" />
    <circle cx="32" cy="39" r="5" />
  </svg>
)

export default LogoMark
