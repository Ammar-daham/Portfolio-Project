import styles from './Container.module.css'

const Container = ({
  as: Element = 'div',
  className = '',
  children,
  ...props
}) => (
  <Element className={`${styles.container} ${className}`.trim()} {...props}>
    {children}
  </Element>
)

export default Container
