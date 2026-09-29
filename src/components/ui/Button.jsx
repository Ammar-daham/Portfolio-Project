import styles from './Button.module.css'

// Renders a link when `href` is given, otherwise a button.
const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    styles.button,
    styles[variant],
    size === 'lg' && styles.lg,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
