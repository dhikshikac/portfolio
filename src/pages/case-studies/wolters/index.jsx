import {
  CaseStudyFigure,
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyVideo,
} from '../caseStudyComponents';
import {
  competitorPatterns,
  images,
  userInsights,
  woltersCopy,
  woltersMeta,
} from './woltersContent';

export default function WoltersCaseStudy() {
  const { userResearch, ideation, midFidelity, highFidelity, whereItLeads } = woltersCopy;

  return (
    <CaseStudyLayout
      ariaLabel={`${woltersMeta.title} case study`}
      logo={images.wkLogo}
      cover={images.hero}
      heroTitle="Wolters Kluwer"
      overviewName={woltersMeta.title}
      overviewType={woltersMeta.subtitle}
      overviewParagraphs={woltersMeta.overview}
      role={woltersMeta.role}
      team={woltersMeta.team}
      timeline={woltersMeta.timeline}
      skills={woltersMeta.skills}
    >
      <CaseStudySection label="Context">
        <h2 className="cs-heading">{woltersCopy.context.title}</h2>
        <div className="cs-prose">
          {woltersCopy.context.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection label="Final Prototype">
        <h2 className="cs-heading">{woltersCopy.finalPrototype.title}</h2>
        <CaseStudyVideo
          src={images.finalPrototypeVideo}
          label={woltersCopy.finalPrototype.videoLabel}
        />
      </CaseStudySection>

      <CaseStudySection label="User Research">
        <h2 className="cs-heading">{userResearch.competitors.title}</h2>
        <div className="cs-prose">
          {userResearch.competitors.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <CaseStudyFigure
          label={userResearch.competitors.breakdownLabel}
          zoomHint={userResearch.competitors.breakdownZoomHint}
          src={images.competitorBreakdown}
          alt={userResearch.competitors.breakdownAlt}
          className="cs-figure--board cs-figure--swipe"
          zoomable
          zoomSrc={images.zoom.competitorBreakdown}
        />

        <p className="cs-subheading">{userResearch.competitors.affinityIntro}</p>

        <div className="cs-map-split cs-map-split--wide">
          <CaseStudyFigure
            src={images.competitorAnalysis}
            alt={userResearch.competitors.analysisAlt}
            className="cs-figure--board"
            zoomable
            zoomSrc={images.zoom.competitorAnalysis}
          />
          <div className="cs-map-split-text cs-map-split-text--cards">
            <p className="cs-subheading">{userResearch.competitors.patternsIntro}</p>
            <div className="cs-card-grid">
              {competitorPatterns.map((pattern, i) => (
                <div key={i} className="cs-card cs-card--neutral">
                  <p>{pattern.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="cs-heading cs-heading--spaced">{userResearch.users.title}</h3>
        <div className="cs-prose">
          {userResearch.users.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="cs-card-grid cs-card-grid--2">
          {userInsights.map((insight, i) => (
            <div key={i} className="cs-card cs-card--neutral cs-card--titled">
              <h3>{insight.title}</h3>
              <p>{insight.body}</p>
            </div>
          ))}
        </div>

        <p className="cs-subheading">{userResearch.userFlow.intro}</p>

        <ol className="cs-card-grid cs-card-grid--3 cs-flow">
          {userResearch.userFlow.steps.map((step, i) => (
            <li key={step.title} className="cs-card cs-card--neutral cs-card--titled">
              <h3>
                <span className="cs-flow-index">{String(i + 1).padStart(2, '0')}</span>
                {step.title}
              </h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="cs-prose">
          <p>{userResearch.userFlow.closing}</p>
        </div>
      </CaseStudySection>

      <CaseStudySection label="Ideation">
        <h2 className="cs-heading">{ideation.title}</h2>

        <div className="cs-map-split">
          <CaseStudyFigure
            src={images.wkPages}
            alt={ideation.pagesAlt}
            className="cs-figure--board"
            zoomable
          />
          <div className="cs-map-split-text">
            <div className="cs-prose">
              <p>{ideation.intro}</p>
            </div>
            <div>
              <p className="cs-figure-label">{ideation.ownedPagesLabel}</p>
              <ul className="cs-owned-list">
                {ideation.ownedPages.map((page) => (
                  <li key={page.title}>
                    <h3>{page.title}</h3>
                    <p>{page.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <h3 className="cs-heading cs-heading--spaced">{ideation.sketchesTitle}</h3>
        <div className="cs-prose">
          <p>{ideation.sketchesIntro}</p>
        </div>

        <div className="cs-image-row">
          <CaseStudyFigure
            src={images.wkLofi1}
            alt={ideation.lofi1Alt}
            className="cs-figure--board"
          />
          <CaseStudyFigure
            src={images.wkLofi2}
            alt={ideation.lofi2Alt}
            className="cs-figure--board"
          />
        </div>

        <div className="cs-prose">
          <p>{ideation.sketchesCaption}</p>
        </div>
      </CaseStudySection>

      <CaseStudySection label="Mid-Fidelity">
        <h2 className="cs-heading">{midFidelity.title}</h2>
        <div className="cs-prose">
          <p>{midFidelity.intro}</p>
        </div>

        <h3 className="cs-heading cs-heading--spaced">{midFidelity.homePage.title}</h3>
        <div className="cs-prose">
          <p>{midFidelity.homePage.intro}</p>
        </div>

        <div className="cs-image-row cs-image-row--weighted">
          <CaseStudyFigure
            src={images.wkMidfi4}
            alt={midFidelity.homePage.fullAlt}
            className="cs-figure--board"
          />
          <CaseStudyFigure
            src={images.wkMidfi3}
            alt={midFidelity.homePage.condensedAlt}
            className="cs-figure--board"
          />
        </div>

        <div className="cs-prose">
          <p>{midFidelity.homePage.outro}</p>
        </div>

        <h3 className="cs-heading cs-heading--spaced">{midFidelity.projectOnboarding.title}</h3>
        <div className="cs-media-split cs-media-split--text">
          <CaseStudyFigure
            src={images.wkMidfi2}
            alt={midFidelity.projectOnboarding.alt}
            className="cs-figure--board"
          />
          <div className="cs-prose">
            {midFidelity.projectOnboarding.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <h3 className="cs-heading cs-heading--spaced">{midFidelity.promptingPage.title}</h3>
        <div className="cs-media-split cs-media-split--text">
          <CaseStudyFigure
            src={images.wkMidfi1}
            alt={midFidelity.promptingPage.alt}
            className="cs-figure--board"
          />
          <div className="cs-prose">
            {midFidelity.promptingPage.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection label="High-Fidelity">
        <h2 className="cs-heading">{highFidelity.title}</h2>
        <div className="cs-prose">
          <p>{highFidelity.intro}</p>
        </div>

        {highFidelity.showcases.map((showcase) => (
          <div key={showcase.title} className="cs-showcase">
            <h3 className="cs-heading cs-heading--spaced">{showcase.title}</h3>
            {showcase.images ? (
              // Several screens: side by side, with the text underneath
              <>
                <div className="cs-image-row">
                  {showcase.images.map((item) => (
                    <CaseStudyFigure
                      key={item.image}
                      src={images[item.image]}
                      alt={item.alt}
                      className="cs-figure--board"
                      zoomable
                    />
                  ))}
                </div>
                <div className="cs-prose">
                  <p>{showcase.description}</p>
                </div>
              </>
            ) : (
              <div className="cs-media-split cs-media-split--text">
                <CaseStudyFigure
                  src={images[showcase.image]}
                  alt={showcase.alt}
                  className="cs-figure--board"
                  zoomable
                />
                <div className="cs-prose">
                  <p>{showcase.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        <h3 className="cs-heading cs-heading--spaced">{whereItLeads.title}</h3>
        <div className="cs-prose">
          {whereItLeads.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="cs-image-row">
          {whereItLeads.images.map((item) => (
            <CaseStudyFigure
              key={item.image}
              src={images[item.image]}
              alt={item.alt}
              className="cs-figure--board"
            />
          ))}
        </div>
        <p className="cs-figure-credit">{whereItLeads.credit}</p>
      </CaseStudySection>

      <CaseStudySection label="Reflection">
        <h2 className="cs-heading">{woltersCopy.reflection.title}</h2>
        <div className="cs-prose">
          {woltersCopy.reflection.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
