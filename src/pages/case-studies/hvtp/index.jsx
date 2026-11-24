import {
  CaseStudyFigure,
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyVideo,
} from '../caseStudyComponents';
import { hvtpAssets, hvtpCopy, hvtpMeta } from './hvtpContent';

export default function HvtpCaseStudy() {
  return (
    <CaseStudyLayout
      ariaLabel={`${hvtpMeta.title} case study`}
      logo={hvtpAssets.logo}
      cover="/images/posters/hvtp-thumb.webp"
      heroTitle={hvtpMeta.title}
      overviewName={hvtpMeta.shortTitle}
      overviewType={hvtpMeta.subtitle}
      overviewParagraphs={hvtpMeta.overview}
      role={hvtpMeta.role}
      team={hvtpMeta.team}
      timeline={hvtpMeta.timeline}
      skills={hvtpMeta.skills}
    >
          <CaseStudySection label="Context">
            <h2 className="cs-heading">{hvtpCopy.context.title}</h2>
            <div className="cs-prose">
              {hvtpCopy.context.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="Final Prototype">
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

            <CaseStudyFigure
              src={hvtpAssets.uxrInsights}
              alt="Interview notes on colored sticky notes, with a legend showing one color per interviewee"
              zoomable
              zoomSrc={hvtpAssets.zoom.uxrInsights}
              className="cs-figure--board cs-figure--swipe cs-figure--swipe-short"
            />

            <p className="cs-subheading">{hvtpCopy.userResearch.affinityIntro}</p>

            <div className="cs-map-split cs-map-split--wide">
              <CaseStudyFigure
                src={hvtpAssets.uxrAffinityMap}
                alt="Affinity map grouping interview notes by designer and buyer, producer, and inventory management, with How Might We questions"
                zoomable
                zoomSrc={hvtpAssets.zoom.uxrAffinityMap}
                className="cs-figure--board"
              />
              <div className="cs-map-split-text cs-map-split-text--cards">
                <p className="cs-subheading">{hvtpCopy.userResearch.painPointsLabel}</p>
                <div className="cs-card-grid">
                  {hvtpCopy.userResearch.painPoints.map((point) => (
                    <div key={point.title} className="cs-card cs-card--neutral cs-card--titled">
                      <div>
                        <h3>{point.title}</h3>
                        <p>{point.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="cs-heading cs-heading--spaced">
              {hvtpCopy.userResearch.similarPlatforms.title}
            </h3>
            <div className="cs-prose">
              {hvtpCopy.userResearch.similarPlatforms.paragraphs.map((p) => (
                <p key={p.slice(0, 26)}>{p}</p>
              ))}
            </div>

            <div className="cs-image-row">
              {hvtpCopy.userResearch.similarPlatforms.boards.map((board) => (
                <CaseStudyFigure
                  key={board.image}
                  label={board.label}
                  src={hvtpAssets[board.image]}
                  alt={board.alt}
                  zoomable
                  zoomSrc={hvtpAssets.zoom[board.image]}
                  className="cs-figure--board"
                />
              ))}
            </div>

            <p className="cs-subheading">
              {hvtpCopy.userResearch.similarPlatforms.takeawaysIntro}
            </p>

            <div className="cs-card-grid cs-card-grid--3">
              {hvtpCopy.userResearch.similarPlatforms.takeaways.map((text, i) => (
                <div key={i} className="cs-card cs-card--neutral">
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
              zoomable
              zoomSrc={hvtpAssets.zoom.featurePrioritization}
              className="cs-figure--board"
            />

            <div className="cs-prose">
              <p>{hvtpCopy.ideation.informationArchitectureIntro}</p>
            </div>

            <div className="cs-image-row">
              <CaseStudyFigure
                label="Early"
                src={hvtpAssets.informationArchitectureEarly}
                alt="Early information architecture, split into mobile and desktop branches"
                zoomable
                zoomSrc={hvtpAssets.zoom.informationArchitectureEarly}
                className="cs-figure--board"
              />
              <CaseStudyFigure
                label="Final"
                src={hvtpAssets.informationArchitecture}
                alt="Final information architecture: public site and admin, with dashboard, inventory, and transactions leading to lot details"
                zoomable
                zoomSrc={hvtpAssets.zoom.informationArchitecture}
                className="cs-figure--board"
              />
            </div>

            <div className="cs-prose">
              <p>{hvtpCopy.ideation.informationArchitectureOutro}</p>
            </div>

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

            <h3 className="cs-heading cs-heading--spaced">Card Format</h3>

            <div className="cs-image-row">
              <CaseStudyFigure
                label="Horizontal cards"
                src={hvtpAssets.midfiHorizontalDefault}
                alt="Mid-fi: horizontal cards inventory view"
                className="cs-figure--board"
              />
              <CaseStudyFigure
                label="Vertical cards"
                src={hvtpAssets.midfiVerticalCards}
                alt="Mid-fi: vertical cards inventory view"
                className="cs-figure--board"
              />
            </div>

            <div className="cs-prose">
              <p>{hvtpCopy.midfi.callouts.cards}</p>
            </div>

            <h3 className="cs-heading cs-heading--spaced">Table Format</h3>

            <div className="cs-media-split cs-media-split--text">
              <CaseStudyFigure
                src={hvtpAssets.midfiTable}
                alt="Mid-fi: table inventory view with sort, filters, and columns controls"
                className="cs-figure--board"
              />
              <div className="cs-prose">
                <p>{hvtpCopy.midfi.callouts.table}</p>
              </div>
            </div>

            <h3 className="cs-heading cs-heading--spaced">Filter Format</h3>

            <div className="cs-prose">
              <p>{hvtpCopy.midfi.callouts.filters}</p>
            </div>

            <div className="cs-image-row">
              <CaseStudyFigure
                label="Individual filters"
                src={hvtpAssets.midfiFilterOption2}
                alt="Mid-fi: separate grade, color, state, and status filters, with the color filter open"
                className="cs-figure--board"
              />
              <CaseStudyFigure
                label="Filters dropdown"
                src={hvtpAssets.midfiFilterDropdown}
                alt="Mid-fi: one Filters button opening a dropdown with grade, breed, and color groups"
                className="cs-figure--board"
              />
            </div>

            <div className="cs-prose">
              <p>{hvtpCopy.midfi.callouts.filtersShift}</p>
              <p>{hvtpCopy.midfi.callouts.sort}</p>
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
                {subsection.images ? (
                  // Several screens: side by side, with the text underneath
                  <>
                    <div className="cs-image-row">
                      {subsection.images.map((item) => (
                        <CaseStudyFigure
                          key={item.image}
                          src={hvtpAssets[item.image]}
                          alt={item.alt}
                          className="cs-figure--board"
                          zoomable
                        />
                      ))}
                    </div>
                    <div className="cs-prose">
                      <p>{subsection.description}</p>
                    </div>
                  </>
                ) : (
                  <div className="cs-media-split cs-media-split--text">
                    <CaseStudyFigure
                      src={hvtpAssets[subsection.image]}
                      alt={`Hi-fi: ${subsection.label.toLowerCase()}`}
                      className="cs-figure--board"
                      zoomable
                    />
                    <div className="cs-prose">
                      <p>{subsection.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <h3 className="cs-heading cs-heading--spaced">{hvtpCopy.themesAnswered.title}</h3>

            <div className="cs-map-split cs-map-split--wide">
              <CaseStudyFigure
                src={hvtpAssets.lotDetails}
                alt={hvtpCopy.themesAnswered.imageAlt}
                className="cs-figure--board"
                zoomable
              />
              <div className="cs-map-split-text cs-map-split-text--cards">
                <div className="cs-card-grid">
                  {hvtpCopy.themesAnswered.themes.map((theme) => (
                    <div key={theme.title} className="cs-card cs-card--neutral cs-card--titled">
                      <div>
                        <h3>{theme.title}</h3>
                        <p>{theme.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="cs-figure-credit">{hvtpCopy.themesAnswered.credit}</p>
          </CaseStudySection>

          <CaseStudySection label="Testing">
            <h2 className="cs-heading">{hvtpCopy.testing.title}</h2>
            <div className="cs-prose">
              {hvtpCopy.testing.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <blockquote className="cs-task">{hvtpCopy.testing.task}</blockquote>

            <p className="cs-subheading">{hvtpCopy.testing.findingsIntro}</p>

            <div className="cs-card-grid cs-card-grid--2 cs-findings">
              {hvtpCopy.testing.findings.map((finding) => (
                <div key={finding.image} className="cs-card cs-card--neutral cs-card--titled">
                  <h3>{finding.title}</h3>
                  <p>{finding.body}</p>
                  <CaseStudyFigure
                    label={finding.label}
                    src={hvtpAssets[finding.image]}
                    alt={finding.alt}
                    className="cs-figure--board"
                  />
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="Reflection">
            <h2 className="cs-heading">{hvtpCopy.reflection.title}</h2>
            <div className="cs-prose">
              {hvtpCopy.reflection.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </CaseStudySection>
    </CaseStudyLayout>
  );
}
