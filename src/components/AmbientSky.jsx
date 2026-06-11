import './AmbientSky.css';

export default function AmbientSky() {
  return (
    <div className="ambient-sky" aria-hidden="true">
      <img
        src="/images/shared/all-pages-sky.svg"
        alt=""
        className="ambient-sky__image"
      />
    </div>
  );
}
