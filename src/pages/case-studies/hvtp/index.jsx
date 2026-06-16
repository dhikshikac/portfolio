import {
  CaseStudyBackLink,
  CaseStudyBackToTop,
  CaseStudyFigure,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyVideo,
  useScrollProgress,
} from '../caseStudyComponents';
import { hvtpAssets, hvtpCopy, hvtpMeta } from './hvtpContent';
import '../caseStudyShared.css';

export default function HvtpCaseStudy() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="cs" aria-label={`${hvtpMeta.title} case study`}>
      <div
        className="cs-scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <CaseStudyBackLink />

      <CaseStudyHero logo={hvtpAssets.logo} title={hvtpMeta.title} />

      <article className="cs-container">
        <header className="cs-header">
          <div className="cs-overview">
            <div>
              <h1 className="cs-overview-name">{hvtpMeta.shortTitle}</h1>
              <p className="cs-overview-type">{hvtpMeta.subtitle}</p>
            </div>
            <div className="cs-overview-text">
              {hvtpMeta.overview.map((p) => (
                <p key={p.slice(0, 22)}>{p}</p>
              ))}
            </div>
          </div>

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>{hvtpMeta.role}</dd>
            </div>
            <div className="cs-meta-fields">
              <div>
                <dt>Team</dt>
                <dd>
                  {hvtpMeta.team.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>
                  {hvtpMeta.timeline.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>Skills/Tools</dt>
                <dd>
                  {hvtpMeta.skills.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </dd>
              </div>
            </div>
          </dl>
        </header>

        <div className="cs-body">
          <CaseStudySection label="Context">
            <h2 className="cs-heading">{hvtpCopy.context.title}</h2>
            <div className="cs-prose">
              {hvtpCopy.context.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="Final Prototype">
            <p className="cs-eyebrow">{hvtpCopy.finalPrototype.eyebrow}</p>
            <h2 className="cs-heading">{hvtpCopy.finalPrototype.title}</h2>
            <CaseStudyVideo
              src={hvtpAssets.finalVideo}
              label="HVTP final prototype walkthrough"
            />
          </CaseStudySection>

          <CaseStudySection label="User Research">
            <h2 className="cs-heading">{hvtpCopy.userResearch.title}</h2>
            <div className="cs-prose">
              {hvtpCopy.userResearch.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="cs-figure-stack">
              <CaseStudyFigure
                src={hvtpAssets.uxrAffinityTop}
                alt="Affinity map: user research themes (top)"
              />
              <CaseStudyFigure
                src={hvtpAssets.uxrAffinityBottom}
                alt="Affinity map: user research themes (bottom)"
              />
            </div>

            <div className="cs-card-grid cs-card-grid--3">
              {hvtpCopy.userResearch.painPoints.slice(0, 3).map((text, i) => (
                <div key={i} className="cs-card cs-card--blue">
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <div className="cs-card-grid cs-card-grid--2">
              {hvtpCopy.userResearch.painPoints.slice(3, 5).map((text, i) => (
                <div key={i} className="cs-card cs-card--blue">
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <h3 className="cs-heading cs-heading--spaced">
              {hvtpCopy.userResearch.similarPlatforms.title}
            </h3>
            <div className="cs-prose">
              {hvtpCopy.userResearch.similarPlatforms.paragraphs.map((p) => (
                <p key={p.slice(0, 26)}>{p}</p>
              ))}
            </div>

            <div className="cs-card-grid cs-card-grid--3">
              {hvtpCopy.userResearch.similarPlatforms.takeaways.map((text, i) => (
                <div key={i} className="cs-card cs-card--gray">
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="Ideation">
            <h2 className="cs-heading">{hvtpCopy.ideation.title}</h2>
            <div className="cs-prose">
              <p>{hvtpCopy.ideation.brainstormingIntro}</p>
            </div>

            <CaseStudyFigure
              src={hvtpAssets.featurePrioritization}
              alt="Feature prioritization matrix: quick wins vs major projects"
              className="cs-figure--board"
            />

            <div className="cs-prose">
              <p>{hvtpCopy.ideation.informationArchitectureIntro}</p>
            </div>

            <CaseStudyFigure
              src={hvtpAssets.informationArchitecture}
              alt="Information architecture diagram showing page structure"
              className="cs-figure--board"
            />

            <h3 className="cs-heading cs-heading--spaced">{hvtpCopy.ideation.initialDesignsTitle}</h3>
            <div className="cs-prose">
              <p>{hvtpCopy.ideation.initialDesignsIntro}</p>
            </div>

            <div className="cs-image-row">
              <CaseStudyFigure
                src={hvtpAssets.lofiGrid}
                alt="Lo-fi sketch: spreadsheet-style inventory grid"
                className="cs-figure--board"
              />
              <CaseStudyFigure
                src={hvtpAssets.lofiCards}
                alt="Lo-fi sketch: card-based inventory layout"
                className="cs-figure--board"
              />
            </div>

            <div className="cs-prose">
              <p>{hvtpCopy.ideation.initialDesignsOutro}</p>
            </div>
          </CaseStudySection>

          <CaseStudySection label="Mid-Fidelity">
            <h2 className="cs-heading">{hvtpCopy.midfi.title}</h2>
            <div className="cs-prose">
              <p>{hvtpCopy.midfi.intro}</p>
            </div>

            <p className="cs-subheading">Card Format Decision:</p>

            <div className="cs-media-split">
              <div className="cs-media-frame">
                <CaseStudyFigure
                  src={hvtpAssets.midfiHorizontalDefault}
                  alt="Mid-fi: horizontal cards inventory view"
                  className="cs-figure--framed"
                />
              </div>
              <aside className="cs-callout">
                <p>{hvtpCopy.midfi.callouts.horizontal}</p>
              </aside>
            </div>

            <div className="cs-media-split">
              <div className="cs-media-frame">
                <CaseStudyFigure
                  src={hvtpAssets.midfiVerticalCards}
                  alt="Mid-fi: vertical cards inventory view"
                  className="cs-figure--framed"
                />
              </div>
              <aside className="cs-callout">
                <p>{hvtpCopy.midfi.callouts.vertical}</p>
              </aside>
            </div>

            <p className="cs-subheading">Filter Bar Format:</p>

            <div className="cs-media-split">
              <div className="cs-media-frame">
                <CaseStudyFigure
                  src={hvtpAssets.midfiFilterOption2}
                  alt="Mid-fi: choosing filters on horizontal cards view"
                  className="cs-figure--framed"
                />
              </div>
              <aside className="cs-callout-stack">
                <div className="cs-callout">
                  <p>{hvtpCopy.midfi.callouts.filters}</p>
                </div>
                <div className="cs-callout">
                  <p>{hvtpCopy.midfi.callouts.sort}</p>
                </div>
              </aside>
            </div>
          </CaseStudySection>

          <CaseStudySection label="High-Fidelity">
            <h2 className="cs-heading">{hvtpCopy.hifi.title}</h2>
            <div className="cs-prose">
              <p>{hvtpCopy.hifi.intro}</p>
            </div>

            {hvtpCopy.hifi.subsections.map((subsection) => (
              <div key={subsection.label} className="cs-showcase">
                <h3 className="cs-heading cs-heading--spaced">{subsection.label}</h3>
                <CaseStudyFigure
                  src={hvtpAssets[subsection.image]}
                  alt={`Hi-fi: ${subsection.label.toLowerCase()}`}
                  className="cs-figure--framed"
                />
                <div className="cs-prose">
                  <p>{subsection.description}</p>
                </div>
              </div>
            ))}
          </CaseStudySection>

          <CaseStudySection label="Reflection">
            <h2 className="cs-heading">{hvtpCopy.reflection.title}</h2>
            <div className="cs-prose">
              {hvtpCopy.reflection.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </CaseStudySection>
        </div>
      </article>

      <CaseStudyBackToTop />
    </div>
  );
}
