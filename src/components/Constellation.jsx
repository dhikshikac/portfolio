import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { CONSTELLATIONS } from '../data/constellations';
import './Constellation.css';

/** Idle shimmer: how long a burst stays lit, and the gap between bursts. */
const SHIMMER_DURATION = 1900;
const SHIMMER_MIN_GAP = 150;
const SHIMMER_MAX_GAP = 1000;
const SHIMMER_MAX_EDGES = 3;

function buildLines(nodes, edges) {
  return edges.map(([a, b], index) => {
    const from = nodes[a];
    const to = nodes[b];
    const length = Math.hypot(to.x - from.x, to.y - from.y);
    return { from, to, length, index };
  });
}

/** Map each edge index to the indices of the edges it shares a node with. */
function buildAdjacency(edges) {
  return edges.map(([a, b], index) =>
    edges.reduce((neighbors, [c, d], other) => {
      if (other !== index && (a === c || a === d || b === c || b === d)) {
        neighbors.push(other);
      }
      return neighbors;
    }, []),
  );
}

function randomGap() {
  return SHIMMER_MIN_GAP + Math.random() * (SHIMMER_MAX_GAP - SHIMMER_MIN_GAP);
}

/** Pick a short connected run of edges so the shimmer reads as part of the shape. */
function pickBurst(edges, adjacency) {
  if (!edges.length) return null;

  const start = Math.floor(Math.random() * edges.length);
  const chosen = [start];
  const target = 1 + Math.floor(Math.random() * SHIMMER_MAX_EDGES);

  while (chosen.length < target) {
    const neighbors = adjacency[chosen[chosen.length - 1]].filter(
      (index) => !chosen.includes(index),
    );
    if (!neighbors.length) break;
    chosen.push(neighbors[Math.floor(Math.random() * neighbors.length)]);
  }

  const nodes = new Set();
  chosen.forEach((index) => {
    nodes.add(edges[index][0]);
    nodes.add(edges[index][1]);
  });

  return { edges: chosen, nodes };
}

export default function Constellation({
  variant = 'pisces',
  active = false,
  idle = true,
}) {
  const prefix = useId();
  const data = CONSTELLATIONS[variant];
  const [drawLines, setDrawLines] = useState(false);
  const [burst, setBurst] = useState(null);
  const timerRef = useRef(null);

  const lines = useMemo(
    () => (data ? buildLines(data.nodes, data.edges) : []),
    [data],
  );

  const adjacency = useMemo(
    () => (data ? buildAdjacency(data.edges) : []),
    [data],
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

  // Idle shimmer — lights a random run of edges while nothing is hovered.
  useEffect(() => {
    if (!data || !idle || active) {
      setBurst(null);
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const scheduleBurst = (delay) => {
      timerRef.current = setTimeout(() => {
        if (document.hidden) {
          scheduleBurst(SHIMMER_MIN_GAP);
          return;
        }

        setBurst(pickBurst(data.edges, adjacency));
        timerRef.current = setTimeout(() => {
          setBurst(null);
          scheduleBurst(randomGap());
        }, SHIMMER_DURATION);
      }, delay);
    };

    // Random first delay so sibling constellations never shimmer in lockstep.
    scheduleBurst(randomGap());

    return () => clearTimeout(timerRef.current);
  }, [active, adjacency, data, idle]);

  if (!data) return null;

  const activeClass = active ? 'constellation--active' : '';

  return (
    <g className={`constellation ${activeClass}`.trim()} aria-hidden="true">
      {lines.map(({ from, to, length, index }) => {
        const shimmerOrder = burst ? burst.edges.indexOf(index) : -1;
        return (
          <g key={`${prefix}-line-${index}`}>
            <line
              className="constellation__hit"
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
            />
            <line
              className={
                shimmerOrder >= 0
                  ? 'constellation__line constellation__line--shimmer'
                  : 'constellation__line'
              }
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              strokeDasharray={length}
              strokeDashoffset={active && !drawLines ? length : 0}
              style={{
                '--line-length': length,
                '--line-delay': `${index * 80}ms`,
                '--shimmer-delay': `${Math.max(shimmerOrder, 0) * 140}ms`,
              }}
            />
          </g>
        );
      })}
      {data.nodes.map((node, i) => (
        <circle
          key={`${prefix}-node-${i}`}
          className={
            burst?.nodes.has(i)
              ? 'constellation__dot constellation__dot--shimmer'
              : 'constellation__dot'
          }
          cx={node.x}
          cy={node.y}
          r={4}
        />
      ))}
    </g>
  );
}
