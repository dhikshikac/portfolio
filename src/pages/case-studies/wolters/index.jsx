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
  const { userResearch, ideation, midFidelity, highFidelity } = woltersCopy;

  return (
    <CaseStudyLayout
      logo={images.wkLogo}
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
          src={images.competitorAnalysis}
          alt={userResearch.competitors.analysisAlt}
          className="cs-figure--board"
        />

        <p className="cs-subheading">{userResearch.competitors.patternsIntro}</p>

        <div className="cs-card-grid cs-card-grid--4">
          {competitorPatterns.map((pattern, i) => (
            <div key={i} className="cs-card cs-card--neutral">
              <p>{pattern.text}</p>
            </div>
          ))}
        </div>

        <h2 className="cs-heading cs-heading--spaced">{userResearch.users.title}</h2>
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

        <CaseStudyFigure
          src={images.wkFlow}
          alt={userResearch.userFlow.alt}
          className="cs-figure--flow"
        />

        <div className="cs-prose">
          <p>{userResearch.userFlow.closing}</p>
        </div>
      </CaseStudySection>

      <CaseStudySection label="Ideation">
        <h2 className="cs-heading">{ideation.title}</h2>
        <div className="cs-prose">
          <p>{ideation.intro}</p>
        </div>

        <div className="cs-aside-split">
          <CaseStudyFigure
            src={images.wkPages}
            alt={ideation.pagesAlt}
            className="cs-figure--board"
          />
          <aside className="cs-callout">
            <p>I focused on 3 pages:</p>
            <ol>
              {ideation.focusPages.map((page) => (
                <li key={page}>{page}</li>
              ))}
            </ol>
          </aside>
        </div>

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

        <h2 className="cs-heading cs-heading--spaced">{midFidelity.homePage.title}</h2>
        <div className="cs-prose">
          <p>{midFidelity.homePage.intro}</p>
        </div>

        <div className="cs-image-row cs-image-row--weighted">
          <CaseStudyFigure
            src={images.wkMidfi1}
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

        <h2 className="cs-heading cs-heading--spaced">{midFidelity.projectOnboarding.title}</h2>
        <div className="cs-prose">
          {midFidelity.projectOnboarding.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <CaseStudyFigure
          src={images.wkMidfi2}
          alt={midFidelity.projectOnboarding.alt}
          className="cs-figure--board"
        />

        <h2 className="cs-heading cs-heading--spaced">{midFidelity.promptingPage.title}</h2>
        <div className="cs-prose">
          {midFidelity.promptingPage.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <CaseStudyFigure
          src={images.wkMidfi4}
          alt={midFidelity.promptingPage.alt}
          className="cs-figure--board"
        />
      </CaseStudySection>

      <CaseStudySection label="High-Fidelity">
        <h2 className="cs-heading">{highFidelity.title}</h2>
        <div className="cs-prose">
          <p>{highFidelity.intro}</p>
        </div>

        {highFidelity.showcases.map((showcase) => (
          <div key={showcase.title} className="cs-showcase">
            <h2 className="cs-heading cs-heading--spaced">{showcase.title}</h2>
            <CaseStudyFigure
              src={images[showcase.image]}
              alt={showcase.alt}
              className="cs-figure--board"
            />
          </div>
        ))}
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
