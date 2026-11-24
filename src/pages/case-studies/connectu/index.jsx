import {
  CaseStudyFigure,
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyVideo,
} from '../caseStudyComponents';
import { connectuCopy, connectuMeta, images } from './connectuContent';

function Phones({ screens }) {
  return (
    <div className="cs-phones" style={{ '--phones': screens.length }}>
      {screens.map((screen) => (
        <CaseStudyFigure
          key={screen.image}
          src={images[screen.image]}
          alt={screen.alt}
          className="cs-figure--phone"
        />
      ))}
    </div>
  );
}

function Prose({ text }) {
  return (
    <div className="cs-prose">
      {[].concat(text).map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </div>
  );
}

function TitledCards({ items }) {
  return (
    <div className="cs-card-grid cs-card-grid--3">
      {items.map((item) => (
        <div key={item.title} className="cs-card cs-card--neutral cs-card--titled">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function ConnectuCaseStudy() {
  const { context, finalPrototype, userResearch, ideation, midfi, pivot, hifi, reflection } =
    connectuCopy;
  const { competitors, persona } = userResearch;

  return (
    <CaseStudyLayout
      ariaLabel={`${connectuMeta.title} case study`}
      cover={images.cover}
      heroTitle={connectuMeta.title}
      overviewName={connectuMeta.title}
      overviewType={connectuMeta.subtitle}
      overviewParagraphs={connectuMeta.overview}
      role={connectuMeta.role}
      team={connectuMeta.team}
      timeline={connectuMeta.timeline}
      skills={connectuMeta.skills}
    >
      <CaseStudySection label="Context">
        <h2 className="cs-heading">{context.title}</h2>
        <Prose text={context.paragraphs} />
      </CaseStudySection>

      <CaseStudySection label="Final Prototype">
        <h2 className="cs-heading">{finalPrototype.title}</h2>
        <CaseStudyVideo
          src={finalPrototype.video}
          poster={finalPrototype.poster}
          className="cs-figure--window"
          label={finalPrototype.label}
        />
        <Prose text={finalPrototype.paragraphs} />
      </CaseStudySection>

      <CaseStudySection label="User Research">
        <h2 className="cs-heading">{userResearch.title}</h2>
        <Prose text={userResearch.paragraphs} />
        <p className="cs-subheading">{userResearch.intro}</p>

        <div className="cs-map-split cs-map-split--wide">
          <CaseStudyFigure
            src={images['affinity-map']}
            alt={userResearch.affinityAlt}
            className="cs-figure--board"
            zoomable
            zoomSrc={userResearch.affinityZoom}
          />
          <div className="cs-map-split-text cs-map-split-text--cards">
            <p className="cs-subheading">{userResearch.findingsLabel}</p>
            <div className="cs-card-grid">
              {userResearch.groups.map((group) => (
                <div key={group.title} className="cs-card cs-card--neutral cs-card--titled">
                  <div>
                    <h3>{group.title}</h3>
                    <ul className="cs-card-list">
                      {group.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Prose text={userResearch.findingsOutro} />

        <p className="cs-subheading">{userResearch.hmwIntro}</p>
        <blockquote className="cs-task">{userResearch.hmw}</blockquote>

        <h3 className="cs-heading cs-heading--spaced">{competitors.title}</h3>
        <p className="cs-subheading">{competitors.intro}</p>

        <div className="cs-card-grid cs-card-grid--3">
          {competitors.items.map((item) => (
            <div key={item.title} className="cs-card cs-card--neutral cs-card--titled">
              <h3>{item.title}</h3>
              <ul className="cs-card-list">
                <li>
                  <strong>Strengths:</strong> {item.strengths}
                </li>
                <li>
                  <strong>Weaknesses:</strong> {item.weaknesses}
                </li>
              </ul>
            </div>
          ))}
        </div>

        <Prose text={competitors.takeaway} />

        <h3 className="cs-heading cs-heading--spaced">{persona.title}</h3>
        <p className="cs-subheading">{persona.intro}</p>

        <div className="cs-card-grid cs-card-grid--2">
          {persona.struggles.map((struggle) => (
            <div key={struggle} className="cs-card cs-card--neutral">
              <p>{struggle}</p>
            </div>
          ))}
        </div>
        <Prose text={persona.outro} />
      </CaseStudySection>

      <CaseStudySection label="Ideation">
        <h2 className="cs-heading">{ideation.title}</h2>
        <p className="cs-subheading">{ideation.intro}</p>

        <div className="cs-image-row cs-image-row--sketches">
          {ideation.sketches.map((sketch) => (
            <CaseStudyFigure
              key={sketch.image}
              src={images[sketch.image]}
              alt={sketch.alt}
              className="cs-figure--board"
              zoomable
            />
          ))}
        </div>

        <Prose text={ideation.outro} />
      </CaseStudySection>

      <CaseStudySection label="Mid-Fidelity">
        <h2 className="cs-heading">{midfi.title}</h2>
        <Prose text={midfi.intro} />

        {midfi.groups.map((group) => (
          <div key={group.title} className="cs-showcase">
            <h3 className="cs-heading cs-heading--spaced">{group.title}</h3>
            <Phones screens={group.screens} />
            <Prose text={group.description} />
          </div>
        ))}
      </CaseStudySection>

      <CaseStudySection label="Pivot">
        <h2 className="cs-heading">{pivot.title}</h2>
        <Prose text={pivot.paragraphs} />
        <p className="cs-subheading">{pivot.intro}</p>
        <TitledCards items={pivot.problems} />

        <h3 className="cs-heading cs-heading--spaced">{pivot.clubs.title}</h3>
        <Prose text={pivot.clubs.paragraphs} />

        <p className="cs-subheading">{pivot.directionIntro}</p>
        <TitledCards items={pivot.directions} />
        <Prose text={pivot.outro} />
      </CaseStudySection>

      <CaseStudySection label="High-Fidelity">
        <h2 className="cs-heading">{hifi.title}</h2>
        <Prose text={hifi.paragraphs} />

        <ul className="cs-swatches">
          {hifi.colors.map((color) => (
            <li key={color.hex}>
              <span className="cs-swatch" style={{ background: color.hex }} aria-hidden="true" />
              <span className="cs-swatch-hex">{color.hex}</span>
              <span className="cs-swatch-use">{color.use}</span>
            </li>
          ))}
        </ul>

        {hifi.groups.map((group) => (
          <div key={group.title} className="cs-showcase">
            <h3 className="cs-heading cs-heading--spaced">{group.title}</h3>
            {group.screens.length === 2 ? (
              <div className="cs-media-split cs-media-split--text">
                <Phones screens={group.screens} />
                <Prose text={group.description} />
              </div>
            ) : (
              <>
                <Phones screens={group.screens} />
                <Prose text={group.description} />
              </>
            )}
          </div>
        ))}
      </CaseStudySection>

      <CaseStudySection label="Reflection">
        <h2 className="cs-heading">{reflection.title}</h2>
        <Prose text={reflection.paragraphs} />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
