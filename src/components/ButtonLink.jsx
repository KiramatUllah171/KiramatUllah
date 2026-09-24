import { Icon } from './Icon.jsx'

export function ButtonLink({
  children,
  className = '',
  href,
  icon,
  disabled = false,
  download,
  external = false,
  variant = 'primary',
}) {
  const classes = `button button-${variant} ${className}`.trim()

  if (disabled) {
    return (
      <span aria-disabled="true" className={`${classes} is-disabled`} role="link" tabIndex="-1">
        {children}
        {icon && <Icon name={icon} />}
      </span>
    )
  }

  return (
    <a
      className={classes}
      download={download}
      href={href}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
      {icon && <Icon name={icon} />}
    </a>
  )
}
