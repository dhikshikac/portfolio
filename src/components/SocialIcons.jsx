import './SocialIcons.css';

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/dhikshikac',
  github: 'https://github.com/dhikshikac',
  email: 'mailto:dhikshika.cherivirala@gmail.com',
  resume: 'https://drive.google.com/file/d/1yP3OELgtL4TXj09cWDGiEkjyxZIQPzy7/view?usp=sharing',
};

const ICONS = {
  linkedin: '/images/social/linkedin.png',
  github: '/images/social/github.png',
  gmail: '/images/social/gmail.png',
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
        <img src={ICONS.linkedin} alt="" className="social-icons__icon" />
      </a>
      <a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icons__link"
        aria-label="GitHub"
      >
        <img src={ICONS.github} alt="" className="social-icons__icon social-icons__icon--github" />
      </a>
      <a href={LINKS.email} className="social-icons__link" aria-label="Email">
        <img src={ICONS.gmail} alt="" className="social-icons__icon" />
      </a>
      {showResume && (
        <a href={LINKS.resume} className="social-icons__resume" target="_blank" rel="noopener noreferrer">
          RESUME
        </a>
      )}
    </div>
  );
}
