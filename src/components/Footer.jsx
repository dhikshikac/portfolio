import './Footer.css';

const FOOTER_LINKS = [
  { label: 'Email', href: 'mailto:dhikshika.cherivirala@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhikshika-cherivirala/' },
  { label: 'GitHub', href: 'https://github.com/dhikshikac' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1yP3OELgtL4TXj09cWDGiEkjyxZIQPzy7/view?usp=sharing' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <p className="footer__thanks">✦ Thanks for stopping by ✦</p>
          <p className="footer__tagline">
            Built with curiosity, creativity, and a{' '}
            <em className="footer__stardust">little stardust</em>.
          </p>
        </div>
        <div className="footer__right">
          <ul className="footer__links">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer__copyright">Dhikshika Cherivirala © 2026</p>
        </div>
      </div>
    </footer>
  );
}
