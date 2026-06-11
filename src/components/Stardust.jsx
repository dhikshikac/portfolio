import './Stardust.css';

const AMBIENT_DOTS = [
  { top: '8%', left: '12%', size: 3 },
  { top: '15%', left: '78%', size: 2 },
  { top: '22%', left: '45%', size: 2 },
  { top: '35%', left: '92%', size: 3 },
  { top: '48%', left: '6%', size: 2 },
  { top: '55%', left: '33%', size: 3 },
  { top: '62%', left: '67%', size: 2 },
  { top: '71%', left: '18%', size: 2 },
  { top: '78%', left: '85%', size: 3 },
  { top: '88%', left: '52%', size: 2 },
  { top: '42%', left: '58%', size: 2 },
  { top: '95%', left: '28%', size: 3 },
];

export default function Stardust() {
  return (
    <div className="stardust" aria-hidden="true">
      {AMBIENT_DOTS.map((dot, i) => (
        <span
          key={i}
          className="stardust__dot"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
    </div>
  );
}
