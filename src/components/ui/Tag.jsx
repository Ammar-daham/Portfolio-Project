import { Children } from 'react'
import styles from './Tag.module.css'

// `size="sm"` for project stacks, `size="md"` for skills; `core` highlights.
export const Tag = ({ core = false, size = 'sm', children }) => (
  <span
    className={[styles.tag, styles[size], core && styles.core]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </span>
)

export const TagList = ({ label, children }) => (
  <ul className={styles.list} aria-label={label}>
    {Children.map(children, (child) => (
      <li>{child}</li>
    ))}
  </ul>
)
