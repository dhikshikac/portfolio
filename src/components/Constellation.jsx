import { useEffect, useId, useMemo, useState } from 'react';
import { CONSTELLATIONS } from '../data/constellations';
import './Constellation.css';

function buildLines(nodes, edges) {
  return edges.map(([a, b], index) => {
    const from = nodes[a];
    const to = nodes[b];
    const length = Math.hypot(to.x - from.x, to.y - from.y);
    return { from, to, length, index };
  });
}

export default function Constellation({
  variant = 'pisces',
  active = false,
  showLabel = false,
  asGroup = false,
  className = '',
}) {
  const prefix = useId();
  const data = CONSTELLATIONS[variant];
  const dotRadius = asGroup ? 4 : 2.8;
  const [drawLines, setDrawLines] = useState(false);

  const lines = useMemo(
    () => (data ? buildLines(data.nodes, data.edges) : []),
    [data]
  );

  useEffect(() => {
    if (!active) {
      setDrawLines(false);
      return undefined;
    }

    setDrawLines(false);
    let outerFrame;
    const innerFrame = requestAnimationFrame(() => {
      outerFrame = requestAnimationFrame(() => setDrawLines(true));
    });

    return () => {
      cancelAnimationFrame(innerFrame);
      cancelAnimationFrame(outerFrame);
    };
  }, [active]);

  if (!data) return null;

  const activeClass = active ? 'constellation--active' : '';
  const content = (
    <>
      {lines.map(({ from, to, length, index }) => (
        <g key={`${prefix}-line-${index}`}>
          <line
            className="constellation__hit"
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
          />
          <line
            className="constellation__line"
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            strokeDasharray={length}
            strokeDashoffset={active && !drawLines ? length : 0}
            style={{ '--line-length': length, '--line-delay': `${index * 80}ms` }}
          />
        </g>
      ))}
      {data.nodes.map((node, i) => (
        <circle
          key={`${prefix}-node-${i}`}
          className="constellation__dot"
          cx={node.x}
          cy={node.y}
          r={dotRadius}
        />
      ))}
      {showLabel && (
        <text x="4" y="12" className="constellation__label">
          {data.name}
        </text>
      )}
    </>
  );

  if (asGroup) {
    return (
      <g className={`constellation ${activeClass} ${className}`.trim()} aria-hidden="true">
        {content}
      </g>
    );
  }

  return (
    <svg
      className={`constellation ${activeClass} ${className}`.trim()}
      viewBox={data.viewBox}
      preserveAspectRatio="xMaxYMin meet"
      aria-hidden={!showLabel}
      role={showLabel ? 'img' : undefined}
      aria-label={showLabel ? `${data.name} constellation` : undefined}
    >
      {content}
    </svg>
  );
}
