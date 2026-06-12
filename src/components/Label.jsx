import './Label.css';

export default function Label({
  children,
  className = '',
  delay,
  size,
  as: Component = 'span',
  ...props
}) {
  const classes = [
    'label',
    'label--floating',
    size && `label--${size}`,
    delay && `label--delay-${delay}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
