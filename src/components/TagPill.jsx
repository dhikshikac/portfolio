import './TagPill.css';

export default function TagPill({ children, index }) {
  const variant = index === 0 ? 'default' : 'gold';

  return <span className={`tag-pill tag-pill--${variant}`}>{children}</span>;
}
