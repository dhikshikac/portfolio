import './CaseStudyContent.css';

function CaseStudyImage({ src, alt, className = '' }) {
  return (
    <figure className={`case-study__figure ${className}`}>
      <img src={src} alt={alt} className="case-study__image" loading="lazy" />
    </figure>
  );
}

function renderBlock(block, index) {
  switch (block.type) {
    case 'text':
      return (
        <div key={index} className="case-study__text">
          {block.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );

    case 'image':
      return <CaseStudyImage key={index} src={block.src} alt={block.alt} />;

    case 'image-row':
      return (
        <div key={index} className="case-study__image-row">
          {block.images.map((img, i) => (
            <CaseStudyImage key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      );

    case 'image-stack':
      return (
        <div key={index} className="case-study__image-stack">
          {block.images.map((img, i) => (
            <CaseStudyImage key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      );

    case 'feature-cards':
      return (
        <div key={index} className="case-study__feature-grid">
          {block.cards.map((card) => (
            <div key={card.title} className="case-study__feature-card">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      );

    case 'design-goals':
      return (
        <div key={index} className="case-study__goals">
          <h4 className="case-study__goals-title">{block.title}</h4>
          <div className="case-study__goals-grid">
            {block.goals.map((goal) => (
              <div key={goal.num} className="case-study__goal-card">
                <span className="case-study__goal-num">Goal {goal.num}</span>
                <h5>{goal.title}</h5>
                <p>{goal.text}</p>
              </div>
            ))}
          </div>
          {block.colors && (
            <div className="case-study__color-row">
              {block.colors.map((color) => (
                <span
                  key={color}
                  className="case-study__color-swatch"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>
      );

    case 'subsection': {
      const hasSplitLayout =
        block.paragraphs?.length > 0 && block.images?.length === 1;

      return (
        <div key={index} className="case-study__subsection">
          <h4
            className={`case-study__subsection-label case-study__subsection-label--${block.accent || 'yellow'}`}
          >
            {block.label}
          </h4>

          {hasSplitLayout ? (
            <div className="case-study__subsection-split">
              <CaseStudyImage src={block.images[0].src} alt={block.images[0].alt} />
              <div className="case-study__subsection-callout">
                {block.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ) : (
            <>
              {block.paragraphs?.map((p, i) => (
                <p key={i} className="case-study__subsection-text">
                  {p}
                </p>
              ))}
              {block.images?.length === 1 && (
                <CaseStudyImage src={block.images[0].src} alt={block.images[0].alt} />
              )}
              {block.images?.length === 2 && (
                <div className="case-study__image-row">
                  {block.images.map((img, i) => (
                    <CaseStudyImage key={i} src={img.src} alt={img.alt} />
                  ))}
                </div>
              )}
              {block.images?.length > 2 && (
                <div className="case-study__image-stack">
                  {block.images.map((img, i) => (
                    <CaseStudyImage key={i} src={img.src} alt={img.alt} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      );
    }

    default:
      return null;
  }
}

export default function CaseStudyContent({ sections }) {
  return (
    <div className="case-study__body">
      {sections.map((section) => (
        <section key={section.id} className="case-study__section" id={section.id}>
          <h3
            className={`case-study__label case-study__label--${section.accent}`}
          >
            {section.label}
          </h3>
          <div className="case-study__section-content">
            {section.content.map((block, i) => renderBlock(block, i))}
          </div>
        </section>
      ))}
    </div>
  );
}
