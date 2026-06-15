import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  competitorPatterns,
  images,
  userInsights,
  woltersMeta,
} from './woltersContent';
import './wolterscase.css';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0);
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}

function WkSection({ label, children }) {
  return (
    <section className="wk-section">
      <p className="wk-section__label">{label}</p>
      <div className="wk-section__content">{children}</div>
    </section>
  );
}

function WkFigure({ src, alt, className = '' }) {
  return (
    <figure className={`wk-figure ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

function WkHeroBanner() {
  return (
    <div className="wk-hero-banner">
      <img src={images.wkLogo} alt="" className="wk-hero-banner__logo" aria-hidden="true" />
      <p className="wk-hero-banner__name">Wolters Kluwer</p>
    </div>
  );
}

export default function WoltersCaseStudy() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="wk-case">
      <div className="wk-scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <div className="wk-article">
        <Link to="/work" className="wk-back">
          ← BACK TO WORK
        </Link>
      </div>

      <WkHeroBanner />

      <article className="wk-article">
        <header className="wk-header">
          <div className="wk-overview">
          <div className="wk-overview__title-block">
            <h1 className="wk-overview__name">{woltersMeta.title}</h1>
            <p className="wk-overview__type">{woltersMeta.subtitle}</p>
          </div>
          <div className="wk-overview__text">
            {woltersMeta.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl className="wk-quick-info">
          <div className="wk-quick-info__role">
            <dt>Role</dt>
            <dd>{woltersMeta.role}</dd>
          </div>
          <div className="wk-quick-info__fields">
            <div>
              <dt>Team</dt>
              <dd>
                {woltersMeta.team.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>
                {woltersMeta.timeline.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Skills/Tools</dt>
              <dd>
                {woltersMeta.skills.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </dd>
            </div>
          </div>
        </dl>
      </header>

      <div className="wk-body">
        <WkSection label="Context">
          <h2 className="wk-heading">The Problem</h2>
          <div className="wk-prose">
            <p>
              Across Wolters Kluwer, content of many forms is spread across multiple internal
              systems. This makes it hard to know what exists, where it lives, and who owns it —
              leaving product teams to rely on informal, time-consuming search methods just to find
              the resources they need to do their jobs.
            </p>
            <p>
              We were tasked with exploring how GenAI could help product teams navigate internal
              content in ways that support faster and more confident product decisions.
            </p>
          </div>
        </WkSection>

        <WkSection label="Final Prototype">
          <p className="wk-eyebrow">A GenAI Research Tool</p>
          <h2 className="wk-heading">Final Prototype</h2>

          <figure className="wk-figure wk-figure--video">
            <video
              src={images.finalPrototypeVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              aria-label="Wolters Kluwer GenAI research tool prototype walkthrough"
            />
          </figure>
        </WkSection>

        <WkSection label="User Research">
          <h2 className="wk-heading">Looking into our competitors</h2>
          <div className="wk-prose">
            <p>
              We analyzed 15 products across three categories — direct competitors, regulatory
              intelligence tools, and AI-powered search products — to understand how others
              approach content discovery, synthesis, and trust-building.
            </p>
          </div>

          <WkFigure
            src={images.competitorAnalysis}
            alt="Affinity map clustering competitor research findings across prompting, AI summaries, linking sources, and collaboration"
          />

          <p className="wk-subheading">Four patterns stood out as most relevant to our design direction:</p>

          <div className="wk-pattern-grid">
            {competitorPatterns.map((pattern, i) => (
              <div key={i} className="wk-pattern-card">
                <p>{pattern.text}</p>
              </div>
            ))}
          </div>

          <h2 className="wk-heading wk-heading--spaced">Looking into our users</h2>
          <div className="wk-prose">
            <p>
              We interviewed 2 Wolters Kluwer product owners to understand how they currently
              discover internal content and where GenAI could meaningfully support their workflows.
            </p>
          </div>

          <div className="wk-insight-grid">
            {userInsights.map((insight, i) => (
              <div key={i} className="wk-insight-card">
                <h3>{insight.title}</h3>
                <p>{insight.body}</p>
              </div>
            ))}
          </div>

          <p className="wk-subheading">Based on our insights, we defined a high-level user flow:</p>

          <WkFigure
            src={images.wkFlow}
            alt="User flow diagram: Prompt, Source Output, and Synthesis"
            className="wk-figure--flow"
          />

          <div className="wk-prose">
            <p>
              This structure addresses content discovery and validation at the front end, while
              supporting synthesis and decision-making at the back end — giving users confidence
              that AI-generated insights are grounded in real, verifiable sources.
            </p>
          </div>
        </WkSection>

        <WkSection label="Ideation">
          <h2 className="wk-heading">Starting the designs</h2>
          <div className="wk-prose">
            <p>
              Before jumping into wireframes, we mapped out the full scope of the product —
              identifying which pages were essential, how they connected, and dividing ownership
              so each designer could go deep on their part of the experience.
            </p>
          </div>

          <div className="wk-ideation-split">
            <WkFigure
              src={images.wkPages}
              alt="User flow diagram from Home Page through project list, project home, source list, and chat history"
            />
            <aside className="wk-callout">
              <p>I focused on 3 pages:</p>
              <ol>
                <li>Home Page</li>
                <li>Project Creation Page</li>
                <li>Prompting Page</li>
              </ol>
            </aside>
          </div>

          <div className="wk-prose">
            <p>
              Our initial features didn&apos;t include a Home Page and Project Creation, and instead
              users stepped right into prompting. However, here are my personal sketches of the
              pages:
            </p>
          </div>

          <div className="wk-image-row">
            <WkFigure
              src={images.wkLofi1}
              alt="Hand-drawn wireframe sketch of the prompting page with project sidebar and filter chips"
            />
            <WkFigure
              src={images.wkLofi2}
              alt="Hand-drawn wireframe sketch of the prompting page with an edit prompt filter panel"
            />
          </div>

          <div className="wk-prose">
            <p>
              A chat-like prompting page with a project sidebar, a central prompt field with
              suggested chips, and inline filters for industry, source type, and time range.
            </p>
          </div>
        </WkSection>

        <WkSection label="Exploring and Refining">
          <h2 className="wk-heading">Home Page</h2>
          <div className="wk-prose">
            <p>
              We explored two iterations for the home page: one with a full project library
              (similar to Notion or Google Drive) and another focusing only on recent projects.
            </p>
          </div>

          <div className="wk-image-row wk-image-row--weighted">
            <WkFigure
              src={images.wkHifi3}
              alt="Full home page dashboard with recently visited cards and an all projects table"
              className="wk-figure--wide"
            />
            <WkFigure
              src={images.wkMidfi3}
              alt="Condensed home page view focused on recent projects"
              className="wk-figure--narrow"
            />
          </div>

          <div className="wk-prose">
            <p>
              We ultimately chose the full library view to prevent fragmentation and help users
              orient themselves within the broader ecosystem of their work.
            </p>
          </div>

          <h2 className="wk-heading wk-heading--spaced">Project Onboarding</h2>
          <div className="wk-prose">
            <p>
              When creating a project, users provide a name, description, industry, and
              jurisdiction — context that helps AI-generated recommendations be more relevant to
              their specific domain.
            </p>
          </div>

          <WkFigure
            src={images.wkHifi2}
            alt="Create a new project form with name, description, industry, and jurisdiction fields"
          />

          <h2 className="wk-heading wk-heading--spaced">Prompting Page</h2>
          <div className="wk-prose">
            <p>
              The research interface where users ask questions in natural language. The interface
              is scoped to the project topic and includes filters for source type, publication
              date, and jurisdiction.
            </p>
          </div>

          <WkFigure
            src={images.wkHifi1}
            alt="Healthcare Compliance prompting page with deep search bar and filter sources panel"
          />
        </WkSection>

        <WkSection label="High-Fidelity">
          <h2 className="wk-heading">Wrapping up the designs</h2>
          <div className="wk-prose">
            <p>
              The high-fidelity pass focused on refining spacing, tightening consistency, and
              making the visual language feel cohesive across all three pages. We received positive
              feedback on the mid-fidelity direction, which gave us confidence to invest in polish
              at this stage.
            </p>
          </div>

          <h2 className="wk-heading wk-heading--spaced">Home Page</h2>
          <WkFigure
            src={images.wkHifi3}
            alt="High-fidelity home page dashboard with recently visited cards and an all projects table"
          />

          <h2 className="wk-heading wk-heading--spaced">Project Creation</h2>
          <WkFigure
            src={images.wkHifi2}
            alt="High-fidelity create a new project form with name, description, industry, and jurisdiction fields"
          />

          <h2 className="wk-heading wk-heading--spaced">Prompting</h2>
          <WkFigure
            src={images.wkHifi1}
            alt="High-fidelity Healthcare Compliance prompting page with deep search bar and filter sources panel"
          />
        </WkSection>

        <WkSection label="Reflection">
          <h2 className="wk-heading">Final Thoughts</h2>
          <div className="wk-prose">
            <p>
              This project pushed me to think beyond aesthetics and approach every design decision
              through the lens of research and usability. The competitor analysis was especially
              impactful because it grounded our process in real-world patterns and user
              expectations, rather than designing in a vacuum.
            </p>
            <p>
              If I could revisit one aspect of the project, I would prioritize more direct
              communication with the client earlier in the process. While our PMs primarily
              handled those conversations, having additional one-on-one discussions would have
              helped the design team align more confidently and make decisions with greater
              clarity.
            </p>
            <p>
              Overall, it was a meaningful and rewarding experience to design solutions aimed at
              reducing friction for professionals working in high-stakes environments.
            </p>
          </div>
        </WkSection>
      </div>
      </article>
    </div>
  );
}
