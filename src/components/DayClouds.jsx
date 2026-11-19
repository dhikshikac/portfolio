import { useId } from 'react';

// Cloud layer for the daytime theme. Hidden by CSS on every other theme.
// Each cloud is a cluster of overlapping ellipses, blurred together, drawn
// in a 100×40 box: [cx, cy, rx, ry]. Uneven sizes and offsets keep the
// silhouettes irregular instead of a pill with bumps on top.
const SHAPES = {
  cumulus: [
    [22, 29, 15, 7],
    [33, 23, 12, 10],
    [47, 18, 14, 13],
    [61, 22, 11, 10],
    [72, 27, 12, 7],
    [84, 30, 9, 5],
    [50, 31, 32, 6],
  ],
  puff: [
    [30, 28, 13, 8],
    [42, 21, 12, 12],
    [56, 24, 10, 9],
    [64, 29, 10, 6],
    [46, 31, 22, 5],
  ],
  streak: [
    [18, 24, 16, 3],
    [38, 21, 22, 4.5],
    [62, 23, 24, 4],
    [82, 25, 14, 2.5],
    [52, 25.5, 30, 2.5],
  ],
  lopsided: [
    [26, 27, 11, 7],
    [37, 20, 10, 11],
    [49, 25, 9, 8],
    [62, 28, 16, 6],
    [44, 30, 26, 4.5],
  ],
  wisp: [
    [28, 25, 18, 4],
    [48, 22, 14, 6],
    [64, 25, 18, 3.5],
    [46, 27, 26, 3],
  ],
};

const CLOUDS = [
  // Upper right — where the hero constellations sit at night
  { shape: 'cumulus', x: 54, y: 8, w: 380, o: 0.8, dur: 34, delay: -8, drift: 6 },
  { shape: 'puff', x: 78, y: 26, w: 240, o: 0.65, dur: 28, delay: -16, drift: 8 },
  { shape: 'streak', x: 60, y: 46, w: 440, o: 0.5, dur: 42, delay: -22, drift: 5 },
  // A couple of strays lower down
  { shape: 'lopsided', x: 2, y: 74, w: 220, o: 0.45, dur: 38, delay: -4, drift: 7 },
  { shape: 'wisp', x: 82, y: 82, w: 220, o: 0.4, dur: 32, delay: -12, drift: 7 },
];

export default function DayClouds() {
  const filterId = `day-cloud-blur-${useId().replace(/:/g, '')}`;

  return (
    <div className="day-sky" aria-hidden="true">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id={filterId} x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </svg>
      {CLOUDS.map((c, i) => (
        <svg
          key={i}
          className="day-cloud"
          viewBox="0 0 100 40"
          style={{
            '--x': `${c.x}%`,
            '--y': `${c.y}%`,
            '--w': `${c.w}px`,
            '--o': c.o,
            '--dur': `${c.dur}s`,
            '--delay': `${c.delay}s`,
            '--drift': `${c.drift}vw`,
          }}
        >
          <g filter={`url(#${filterId})`}>
            {SHAPES[c.shape].map(([cx, cy, rx, ry], j) => (
              <ellipse key={j} cx={cx} cy={cy} rx={rx} ry={ry} />
            ))}
          </g>
        </svg>
      ))}
    </div>
  );
}
