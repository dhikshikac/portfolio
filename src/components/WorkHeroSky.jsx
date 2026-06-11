import { useCallback, useEffect, useRef, useState } from 'react';
import Constellation from './Constellation';
import { HERO_CONSTELLATIONS, SKY_DIMENSIONS } from '../data/constellations';
import './WorkHeroSky.css';

export default function WorkHeroSky({ constellationOpacity = 1 }) {
  const { width, height } = SKY_DIMENSIONS;
  const [active, setActive] = useState(false);
  const deactivateTimer = useRef(null);

  const handleConstellationEnter = useCallback(() => {
    clearTimeout(deactivateTimer.current);
    setActive(true);
  }, []);

  const handleConstellationLeave = useCallback((event) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) {
      return;
    }

    deactivateTimer.current = setTimeout(() => setActive(false), 40);
  }, []);

  const constellationsHidden = constellationOpacity < 0.05;

  useEffect(() => {
    if (constellationsHidden) {
      setActive(false);
    }
  }, [constellationsHidden]);

  return (
    <div className="work-hero__sky" aria-hidden="true">
      <img
        src="/images/work/work-sky.svg"
        alt=""
        className="work-hero__sky-bg"
      />
      <svg
        className="work-hero__sky-constellations"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: constellationOpacity }}
        aria-hidden={constellationsHidden}
      >
        <g
          className="constellation-hover-field"
          onMouseOver={handleConstellationEnter}
          onMouseOut={handleConstellationLeave}
          style={{ pointerEvents: constellationsHidden ? 'none' : undefined }}
        >
          {HERO_CONSTELLATIONS.map((variant) => (
            <Constellation key={variant} variant={variant} active={active} asGroup />
          ))}
        </g>
      </svg>
    </div>
  );
}
