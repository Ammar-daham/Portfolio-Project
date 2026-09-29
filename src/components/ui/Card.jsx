import styles from './Card.module.css'

const Card = ({
  as: Element = 'div',
  padded = false,
  className = '',
  children,
  ...props
}) => (
  <Element
    className={[styles.card, padded && styles.padded, className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </Element>
)

export default Card
