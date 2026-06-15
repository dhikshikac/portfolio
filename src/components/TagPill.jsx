import './TagPill.css';

export default function TagPill({ children, variant, index }) {
  const resolvedVariant = variant ?? (index === 0 ? 'default' : 'gold');

  return <span className={`tag-pill tag-pill--${resolvedVariant}`}>{children}</span>;
}
