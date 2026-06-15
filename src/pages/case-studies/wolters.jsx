import { Link } from 'react-router-dom';
import TagPill from '../../components/TagPill';
import './wolters.css';

const IMG = '/images/case-studies/wolters';

function Figure({ src, alt, className = '' }) {
  return (
    <figure className={`wk-figure ${className}`}>
      <img src={src} alt={alt} className="wk-image" loading="lazy" />
    </figure>
  );
}

function Subsection({ label, accent = 'yellow', paragraphs, images, split }) {
  const isSplit = split && images?.length === 1 && paragraphs?.length > 0;

  return (
    <div className="wk-subsection">
      <h4 className={`wk-subsection-label wk-subsection-label--${accent}`}>{label}</h4>

      {isSplit ? (
        <div className="wk-subsection-split">
          <Figure src={images[0].src} alt={images[0].alt} />
          <div className="wk-subsection-callout">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      ) : (
        <>
          {paragraphs?.map((p, i) => (
            <p key={i} className="wk-subsection-text">
              {p}
            </p>
          ))}
          {images?.length === 1 && <Figure src={images[0].src} alt={images[0].alt} />}
          {images?.length === 2 && (
            <div className="wk-image-row">
              {images.map((img) => (
                <Figure key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
          )}
          {images?.length > 2 && (
            <div className="wk-image-stack">
              {images.map((img) => (
                <Figure key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function wolters() {
  return (
    <article className="wk-page">
      <Link to="/work" className="wk-page__back">
        ← BACK TO WORK
      </Link>

      <header className="wk-page__header">
        <div className="wk-page__title-row">
          <h1 className="wk-page__title">Wolters Kluwer</h1>
          <div className="wk-page__tags">
            <TagPill index={0}>CONTRACT</TagPill>
            <TagPill index={1}>WEBSITE</TagPill>
            <TagPill index={2}>DESIGN</TagPill>
          </div>
        </div>

        <div className="wk-page__overview">
          <div>
            <dt>WOLTERS KLUWER</dt>
            <dd>Web Application</dd>
          </div>
          <div className="wk-text">
            <p>Wolters Kluwer is a global leader in professional information, software, 
              and services, providing trusted tools and insights that help professionals make informed, 
              high-stakes decisions. 
            </p>
            <p>Their products are used in 180+ countries, supporting 93% of Fortune 500 
              companies and serving 2M+ clinicians.</p>
          </div>
          <hr className="wk-page__divider" />
        </div>

        <dl className="wk-page__meta">
          <div>
            <dt>ROLE</dt>
            <dd>Product Designer</dd>
          </div>
          <div>
            <dt>TEAM</dt>
            <dd>2 Project Managers, 6 Product Designers</dd>
          </div>
          <div>
            <dt>TIMEFRAME</dt>
            <dd>1 Semester, January – May 2026</dd>
          </div>
          <div>
            <dt>CONTEXT</dt>
            <dd>Design Consulting @ Cornell</dd>
          </div>
        </dl>
        <hr className="wk-page__divider" />
      </header>

      <div className="wk-body">
        {/* PROBLEM */}
        <section className="wk-section" id="problem">
          <h3 className="wk-label wk-label--pink">PROBLEM</h3>
          <div className="wk-section-content">
            <div className="wk-text">
              <p>
                Wolters Kluwer is a global leader in professional information, software solutions,
                and services for healthcare, tax, accounting, and legal professionals. They wanted
                to create a GenAI research tool that would allow users to search through their vast
                database of legal and regulatory information.
              </p>
              <p>
                The existing tool suffered from navigation difficulties and a lack of cohesive
                visual identity. Users struggled to find relevant documents quickly, and the
                interface felt cluttered and inconsistent across different sections of the
                application.
              </p>
            </div>
            <Figure
              src={`${IMG}/wk-hifi-1.png`}
              alt="Healthcare Compliance dashboard showing search results table"
            />
          </div>
        </section>

        {/* FIRST PROTOTYPE */}
        <section className="wk-section" id="first-prototype">
          <h3 className="wk-label wk-label--pink">FIRST PROTOTYPE</h3>
          <div className="wk-section-content">
            <div className="wk-text">
              <p>
                The first prototype was focused on the search experience. We wanted to make sure
                that users could easily find what they were looking for, with clear filtering
                options and an intuitive document viewing flow.
              </p>
              <p>
                Our initial work centered on feature organization and hierarchy, mapping out user
                flows on a collaborative whiteboard before moving into wireframes.
              </p>
            </div>
            <Figure
              src={`${IMG}/competitor-analysis.png`}
              alt="FigJam whiteboard with sticky notes and user flow diagrams"
            />
            <div className="wk-feature-grid">
              <div className="wk-feature-card">
                <h4>Search results</h4>
                <p>
                  Table format with highlighted info to surface the most relevant documents at a
                  glance.
                </p>
              </div>
              <div className="wk-feature-card">
                <h4>Filtering</h4>
                <p>
                  Criteria like date, jurisdiction, and document type to narrow results efficiently.
                </p>
              </div>
              <div className="wk-feature-card">
                <h4>Document view</h4>
                <p>Opens in a new tab for easy reading without losing search context.</p>
              </div>
              <div className="wk-feature-card">
                <h4>AI Summary</h4>
                <p>Generated summary to help users understand content quickly.</p>
              </div>
            </div>
            <div className="wk-goals">
              <h4 className="wk-goals-title">DESIGN GOALS</h4>
              <div className="wk-goals-grid">
                <div className="wk-goal-card">
                  <span className="wk-goal-num">Goal 1</span>
                  <h5>Simplify navigation</h5>
                  <p>Reduce cognitive load with a clear, consistent information hierarchy.</p>
                </div>
                <div className="wk-goal-card">
                  <span className="wk-goal-num">Goal 2</span>
                  <h5>Improve efficiency</h5>
                  <p>Help users find and act on information faster through smart defaults.</p>
                </div>
                <div className="wk-goal-card">
                  <span className="wk-goal-num">Goal 3</span>
                  <h5>Enhance clarity</h5>
                  <p>
                    Make complex legal data scannable with thoughtful typography and spacing.
                  </p>
                </div>
                <div className="wk-goal-card">
                  <span className="wk-goal-num">Goal 4</span>
                  <h5>Ensure consistency</h5>
                  <p>Unify the visual language across all tool sections and states.</p>
                </div>
              </div>
              <div className="wk-color-row">
                <span className="wk-color-swatch" style={{ backgroundColor: '#3B82F6' }} title="#3B82F6" />
                <span className="wk-color-swatch" style={{ backgroundColor: '#22C55E' }} title="#22C55E" />
                <span className="wk-color-swatch" style={{ backgroundColor: '#F5C842' }} title="#F5C842" />
                <span className="wk-color-swatch" style={{ backgroundColor: '#EF4444' }} title="#EF4444" />
              </div>
            </div>
          </div>
        </section>

        {/* KEY SECTIONS */}
        <section className="wk-section" id="key-sections">
          <h3 className="wk-label wk-label--yellow">KEY SECTIONS</h3>
          <div className="wk-section-content">
            <div className="wk-text">
              <p>
                We focused on three key sections of the tool: the search results page, the document
                view, and the AI summary. Each section went through iterative refinement from low to
                high fidelity.
              </p>
            </div>

            <Subsection
              label="INFORMATION ARCHITECTURE"
              accent="yellow"
              split
              paragraphs={[
                'We restructured the site map to better reflect user mental models, grouping related features and reducing the number of top-level navigation items.',
              ]}
              images={[
                {
                  src: `${IMG}/wk-pages.png`,
                  alt: 'Hierarchical sitemap diagram',
                },
              ]}
            />

            <Subsection
              label="LOW-FIDELITY WIREFRAMES"
              accent="yellow"
              paragraphs={[
                'Rapid iteration on paper and digital sketches allowed us to test layout ideas quickly and gather stakeholder feedback early.',
              ]}
              images={[
                { src: `${IMG}/wk-lofi-1.png`, alt: 'Low-fidelity wireframe sketch one' },
                { src: `${IMG}/wk-lofi-2.png`, alt: 'Low-fidelity wireframe sketch two' },
              ]}
            />

            <Subsection
              label="MID-FIDELITY WIREFRAMES"
              accent="yellow"
              paragraphs={[
                'Mid-fidelity wireframes defined visual hierarchy and interaction patterns before committing to color and branding.',
              ]}
              images={[
                { src: `${IMG}/wk-midfi-1.png`, alt: 'Mid-fidelity search results wireframe' },
                { src: `${IMG}/wk-midfi-2.png`, alt: 'Mid-fidelity document view wireframe' },
              ]}
            />

            <Subsection
              label="HIGH-FIDELITY WIREFRAMES"
              accent="yellow"
              split
              paragraphs={[
                'High-fidelity wireframes incorporated brand identity and refined micro-interactions for key user flows.',
              ]}
              images={[
                { src: `${IMG}/wk-midfi-3.png`, alt: 'High-fidelity home dashboard wireframe' },
              ]}
            />

            <Subsection
              label="FINAL DESIGN"
              accent="pink"
              paragraphs={[
                'The final design delivers a clean, professional aesthetic with improved navigation and an integrated AI assistant panel for contextual help.',
              ]}
              images={[
                { src: `${IMG}/wk-hifi-1.png`, alt: 'Final dashboard with search results' },
                { src: `${IMG}/wk-hifi-2.png`, alt: 'Create project modal' },
                { src: `${IMG}/wk-hifi-3.png`, alt: 'Home dashboard with project table' },
              ]}
            />
          </div>
        </section>

        {/* VISUALS */}
        <section className="wk-section" id="visuals">
          <h3 className="wk-label wk-label--pink">VISUALS</h3>
          <div className="wk-section-content">
            <div className="wk-text">
              <p>
                The visual design was focused on creating a clean and professional look that would
                be easy to navigate and use. We balanced Wolters Kluwer brand guidelines with modern
                UI patterns.
              </p>
            </div>
            <div className="wk-image-row">
              <Figure
                src={`${IMG}/wk-hifi-3.png`}
                alt="Search results page final design"
              />
              <Figure
                src={`${IMG}/wk-midfi-4.png`}
                alt="Document view final design"
              />
            </div>
            <Figure
              src={`${IMG}/wk.png`}
              alt="Split-screen view with document and AI assistant"
            />
          </div>
        </section>

        {/* FINAL THOUGHTS */}
        <section className="wk-section" id="final-thoughts">
          <h3 className="wk-label wk-label--pink">FINAL THOUGHTS</h3>
          <div className="wk-section-content">
            <div className="wk-text">
              <p>
                This project was a great opportunity to work on a real-world problem at the
                intersection of AI and professional services. I learned a lot about the design
                process and how to work effectively in a cross-functional team.
              </p>
              <p>
                User research was the foundation of every design decision — from restructuring the
                information architecture to refining the AI summary feature. Listening to how legal
                professionals actually search for information shaped our entire approach.
              </p>
              <p>Thank you for reading!</p>
            </div>
            <div className="wk-image-stack">
              <Figure
                src={`${IMG}/wk-midfi-4.png`}
                alt="Data table interface"
              />
              <Figure
                src={`${IMG}/wk-hifi-2.png`}
                alt="Create project modal window"
              />
              <Figure
                src={`${IMG}/wk-midfi-1.png`}
                alt="Healthcare Compliance search interface"
              />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
