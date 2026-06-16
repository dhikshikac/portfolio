import {
  CaseStudyBackLink,
  CaseStudyBackToTop,
  CaseStudyFigure,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyVideo,
  useScrollProgress,
} from '../caseStudyComponents';
import { competitorPatterns, images, userInsights, woltersMeta } from './woltersContent';
import '../caseStudyShared.css';

export default function WoltersCaseStudy() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="cs">
      <div
        className="cs-scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <CaseStudyBackLink />

      <CaseStudyHero logo={images.wkLogo} title="Wolters Kluwer" />

      <article className="cs-container">
        <header className="cs-header">
          <div className="cs-overview">
            <div>
              <h1 className="cs-overview-name">{woltersMeta.title}</h1>
              <p className="cs-overview-type">{woltersMeta.subtitle}</p>
            </div>
            <div className="cs-overview-text">
              {woltersMeta.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>{woltersMeta.role}</dd>
            </div>
            <div className="cs-meta-fields">
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

        <div className="cs-body">
          <CaseStudySection label="Context">
            <h2 className="cs-heading">The Problem</h2>
            <div className="cs-prose">
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
          </CaseStudySection>

          <CaseStudySection label="Final Prototype">
            <p className="cs-eyebrow">A GenAI Research Tool</p>
            <h2 className="cs-heading">Final Prototype</h2>
            <CaseStudyVideo
              src={images.finalPrototypeVideo}
              label="Wolters Kluwer GenAI research tool prototype walkthrough"
            />
          </CaseStudySection>

          <CaseStudySection label="User Research">
            <h2 className="cs-heading">Looking into our competitors</h2>
            <div className="cs-prose">
              <p>
                We analyzed 15 products across three categories — direct competitors, regulatory
                intelligence tools, and AI-powered search products — to understand how others
                approach content discovery, synthesis, and trust-building.
              </p>
            </div>

            <CaseStudyFigure
              src={images.competitorAnalysis}
              alt="Affinity map clustering competitor research findings across prompting, AI summaries, linking sources, and collaboration"
            />

            <p className="cs-subheading">
              Four patterns stood out as most relevant to our design direction:
            </p>

            <div className="cs-card-grid cs-card-grid--4">
              {competitorPatterns.map((pattern, i) => (
                <div key={i} className="cs-card cs-card--neutral">
                  <p>{pattern.text}</p>
                </div>
              ))}
            </div>

            <h2 className="cs-heading cs-heading--spaced">Looking into our users</h2>
            <div className="cs-prose">
              <p>
                We interviewed 2 Wolters Kluwer product owners to understand how they currently
                discover internal content and where GenAI could meaningfully support their workflows.
              </p>
            </div>

            <div className="cs-card-grid cs-card-grid--2">
              {userInsights.map((insight, i) => (
                <div key={i} className="cs-card cs-card--neutral cs-card--titled">
                  <h3>{insight.title}</h3>
                  <p>{insight.body}</p>
                </div>
              ))}
            </div>

            <p className="cs-subheading">Based on our insights, we defined a high-level user flow:</p>

            <CaseStudyFigure
              src={images.wkFlow}
              alt="User flow diagram: Prompt, Source Output, and Synthesis"
              className="cs-figure--flow"
            />

            <div className="cs-prose">
              <p>
                This structure addresses content discovery and validation at the front end, while
                supporting synthesis and decision-making at the back end — giving users confidence
                that AI-generated insights are grounded in real, verifiable sources.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection label="Ideation">
            <h2 className="cs-heading">Starting the designs</h2>
            <div className="cs-prose">
              <p>
                Before jumping into wireframes, we mapped out the full scope of the product —
                identifying which pages were essential, how they connected, and dividing ownership
                so each designer could go deep on their part of the experience.
              </p>
            </div>

            <div className="cs-aside-split">
              <CaseStudyFigure
                src={images.wkPages}
                alt="User flow diagram from Home Page through project list, project home, source list, and chat history"
              />
              <aside className="cs-callout">
                <p>I focused on 3 pages:</p>
                <ol>
                  <li>Home Page</li>
                  <li>Project Creation Page</li>
                  <li>Prompting Page</li>
                </ol>
              </aside>
            </div>

            <div className="cs-prose">
              <p>
                Our initial features didn&apos;t include a Home Page and Project Creation, and instead
                users stepped right into prompting. However, here are my personal sketches of the
                pages:
              </p>
            </div>

            <div className="cs-image-row">
              <CaseStudyFigure
                src={images.wkLofi1}
                alt="Hand-drawn wireframe sketch of the prompting page with project sidebar and filter chips"
              />
              <CaseStudyFigure
                src={images.wkLofi2}
                alt="Hand-drawn wireframe sketch of the prompting page with an edit prompt filter panel"
              />
            </div>

            <div className="cs-prose">
              <p>
                A chat-like prompting page with a project sidebar, a central prompt field with
                suggested chips, and inline filters for industry, source type, and time range.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection label="Exploring and Refining">
            <h2 className="cs-heading">Home Page</h2>
            <div className="cs-prose">
              <p>
                We explored two iterations for the home page: one with a full project library
                (similar to Notion or Google Drive) and another focusing only on recent projects.
              </p>
            </div>

            <div className="cs-image-row cs-image-row--weighted">
              <CaseStudyFigure
                src={images.wkHifi3}
                alt="Full home page dashboard with recently visited cards and an all projects table"
              />
              <CaseStudyFigure
                src={images.wkMidfi3}
                alt="Condensed home page view focused on recent projects"
              />
            </div>

            <div className="cs-prose">
              <p>
                We ultimately chose the full library view to prevent fragmentation and help users
                orient themselves within the broader ecosystem of their work.
              </p>
            </div>

            <h2 className="cs-heading cs-heading--spaced">Project Onboarding</h2>
            <div className="cs-prose">
              <p>
                When creating a project, users provide a name, description, industry, and
                jurisdiction — context that helps AI-generated recommendations be more relevant to
                their specific domain.
              </p>
            </div>

            <CaseStudyFigure
              src={images.wkHifi2}
              alt="Create a new project form with name, description, industry, and jurisdiction fields"
            />

            <h2 className="cs-heading cs-heading--spaced">Prompting Page</h2>
            <div className="cs-prose">
              <p>
                The research interface where users ask questions in natural language. The interface
                is scoped to the project topic and includes filters for source type, publication
                date, and jurisdiction.
              </p>
            </div>

            <CaseStudyFigure
              src={images.wkHifi1}
              alt="Healthcare Compliance prompting page with deep search bar and filter sources panel"
            />
          </CaseStudySection>

          <CaseStudySection label="High-Fidelity">
            <h2 className="cs-heading">Wrapping up the designs</h2>
            <div className="cs-prose">
              <p>
                The high-fidelity pass focused on refining spacing, tightening consistency, and
                making the visual language feel cohesive across all three pages. We received positive
                feedback on the mid-fidelity direction, which gave us confidence to invest in polish
                at this stage.
              </p>
            </div>

            <div className="cs-showcase">
              <h2 className="cs-heading cs-heading--spaced">Home Page</h2>
              <CaseStudyFigure
                src={images.wkHifi3}
                alt="High-fidelity home page dashboard with recently visited cards and an all projects table"
              />
            </div>

            <div className="cs-showcase">
              <h2 className="cs-heading cs-heading--spaced">Project Creation</h2>
              <CaseStudyFigure
                src={images.wkHifi2}
                alt="High-fidelity create a new project form with name, description, industry, and jurisdiction fields"
              />
            </div>

            <div className="cs-showcase">
              <h2 className="cs-heading cs-heading--spaced">Prompting</h2>
              <CaseStudyFigure
                src={images.wkHifi1}
                alt="High-fidelity Healthcare Compliance prompting page with deep search bar and filter sources panel"
              />
            </div>
          </CaseStudySection>

          <CaseStudySection label="Reflection">
            <h2 className="cs-heading">Final Thoughts</h2>
            <div className="cs-prose">
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
          </CaseStudySection>
        </div>
      </article>

      <CaseStudyBackToTop />
    </div>
  );
}
