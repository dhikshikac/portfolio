import './TagPill.css';

export default function TagPill({ children, variant = 'default' }) {
  return <span className={`tag-pill tag-pill--${variant}`}>{children}</span>;
}
