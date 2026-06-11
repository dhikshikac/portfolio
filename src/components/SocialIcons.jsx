import './SocialIcons.css';

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/dhikshikac',
  framer: 'https://framer.com',
  email: 'mailto:dhikshika.cherivirala@gmail.com',
  resume: '/resume.pdf',
};

export default function SocialIcons({ showResume = true, size = 'md' }) {
  return (
    <div className={`social-icons social-icons--${size}`}>
      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icons__link"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="2" fill="#0A66C2" />
          <path
            d="M7.5 9.5h2v8h-2v-8zm1-2.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm3 2.5h1.9v1.1c.4-.7 1.3-1.2 2.4-1.2 2.5 0 3 1.6 3 3.7v4.4h-2v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2v-8z"
            fill="#fff"
          />
        </svg>
      </a>
      <a
        href={LINKS.framer}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icons__link"
        aria-label="Framer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="2" fill="#fff" />
          <path d="M6 6h5.5v5.5H6V6zm0 5.5h5.5V17H6v-5.5zm5.5 0H17V6h-5.5v5.5z" fill="#000" />
        </svg>
      </a>
      <a
        href={LINKS.email}
        className="social-icons__link"
        aria-label="Email"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="2" fill="#EA4335" />
          <path
            d="M6 8.5l6 4 6-4v7.5c0 .3-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5V8.5zm0-1.5c0-.3.2-.5.5-.5h11c.3 0 .5.2.5.5v.3l-6 4-6-4V7z"
            fill="#fff"
          />
        </svg>
      </a>
      {showResume && (
        <a href={LINKS.resume} className="social-icons__resume" target="_blank" rel="noopener noreferrer">
          RESUME
        </a>
      )}
    </div>
  );
}
