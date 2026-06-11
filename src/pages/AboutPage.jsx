import { Link } from 'react-router-dom';
import SocialIcons from '../components/SocialIcons';
import './AboutPage.css';

const COMMUNITIES = [
  {
    title: 'HACK 4 IMPACT @ CORNELL',
    role: 'Design New Member Instructor & Designer',
    image: '/images/about/h4i.svg',
    rotate: 0,
    offsetY: 0,
  },
  {
    title: 'DESIGN CONSULTING @ CORNELL',
    role: 'Product Design Consultant',
    image: '/images/about/dcc.svg',
    rotate: 4.329,
    offsetY: -32,
  },
  {
    title: 'ART ACROSS AGES',
    role: 'Co-Founder & Ex Executive Director',
    image: '/images/about/aaa.svg',
    rotate: -3.451,
    offsetY: 0,
  },
];

const HOBBY_FRAMES = [
  { id: 'cafe-1', src: '/images/about/cafe-1.svg', alt: 'At a vending machine' },
  { id: 'cafe-2', src: '/images/about/cafe-2.svg', alt: 'Matcha drinks' },
  { id: 'cafe-3', src: '/images/about/cafe-3.svg', alt: 'Pastries in bags' },
  { id: 'painting', src: '/images/about/painting.svg', alt: 'Paint supplies' },
  { id: 'drawing', src: '/images/about/drawing.svg', alt: 'Lighthouse drawing' },
  { id: 'baking', src: '/images/about/baking.svg', alt: 'Chocolate chip cookies' },
];

const HOBBY_LABELS = [
  { id: 'cafe', text: 'CAFE HOPPING' },
  { id: 'painting', text: 'PAINTING' },
  { id: 'drawing', text: 'DRAWING' },
  { id: 'baking', text: 'BAKING' },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__left">
          <h1 className="about-hero__title">HI! I&apos;M DHIKSHIKA!</h1>
          <p className="about-hero__location">
            📍 LONG ISLAND, NY &nbsp;✦&nbsp; CS @ CORNELL UNIVERSITY
          </p>
          <div className="about-hero__bio">
            <p>
              I&apos;ve always loved creating things—whether that meant baking,
              making handcrafted birthday gifts for friends, designing
              merchandise, or sharing the joys of art with my community.
              Creating has always been a big part of who I am.
            </p>
            <p>
              That passion eventually led me to where I am today: exploring the
              intersection of software engineering, design, and human-centered
              technology, where I build thoughtful digital experiences that blend
              creativity with code.
            </p>
          </div>
        </div>

        <div className="about-hero__right">
          <div className="about-hero__frame">
            <div className="about-hero__portrait-wrap">
              <img
                src="/images/about/portrait.svg"
                alt="Dhikshika sitting on grass at sunset"
                className="about-hero__portrait"
              />
            </div>

            <img
              src="/images/about/about-frame.png"
              alt=""
              className="about-hero__frame-overlay"
              aria-hidden="true"
            />

            <div className="about-hero__contact">
              <h2 className="about-hero__contact-title">GET IN TOUCH</h2>
              <p>
                <a
                  href="mailto:dhikshika.cherivirala@gmail.com"
                  className="about-hero__contact-email"
                >
                  <span>dhikshika.cherivirala</span>
                  <span>@gmail.com</span>
                </a>
              </p>
              <p>
                <a href="tel:+16317109851">(631) 710-9851</a>
              </p>
              <SocialIcons size="sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-communities">
        <h2 className="about-section-title">✦ MY COMMUNITIES</h2>
        <div className="about-communities__row">
          {COMMUNITIES.map((community) => (
            <article
              key={community.title}
              className="about-community-card"
              style={{
                '--card-rotate': `${community.rotate}deg`,
                '--card-offset': `${community.offsetY}px`,
              }}
            >
              <img
                src="/images/about/community-star.png"
                alt=""
                className="about-community-card__star"
                aria-hidden="true"
              />
              <h3 className="about-community-card__title">{community.title}</h3>
              <div className="about-community-card__image-wrap">
                <img src={community.image} alt={community.title} />
              </div>
              <p className="about-community-card__role">{community.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-hobbies">
        <h2 className="about-section-title">
          WHAT I DO IN MY FREE TIME ✦
        </h2>

        <div className="about-hobbies__collage">
          {HOBBY_FRAMES.map((frame) => (
            <figure key={frame.id} className={`about-hobby-frame about-hobby-frame--${frame.id}`}>
              <img src={frame.src} alt={frame.alt} />
            </figure>
          ))}

          {HOBBY_LABELS.map((label) => (
            <span key={label.id} className={`about-tape about-tape--${label.id}`}>
              {label.text}
            </span>
          ))}

          <div className="about-hobbies__photo-action">
            <span className="about-tape about-tape--photography">PHOTOGRAPHY</span>
            <Link to="/camera" className="about-hobbies__view-more">
              VIEW MORE →
            </Link>
          </div>

          <img
            src="/images/about/community-star.png"
            alt=""
            className="about-hobbies__corner-star"
            aria-hidden="true"
          />
          <span className="about-hobby-dot about-hobby-dot--1" aria-hidden="true" />
          <span className="about-hobby-dot about-hobby-dot--2" aria-hidden="true" />
          <span className="about-hobby-dot about-hobby-dot--3" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
