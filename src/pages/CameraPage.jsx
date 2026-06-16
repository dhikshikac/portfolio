import CameraPhotoGrid from '../components/CameraPhotoGrid';
import Label from '../components/Label';
import './CameraPage.css';

const POLAROIDS = [
  {
    alt: 'Dhikshika at a cafe',
    src: '/images/camera/digi2.jpg',
    className: 'camera-hero__frame--small',
    rotation: -3.774,
    zIndex: 6,
  },
  {
    alt: 'Dhikshika portrait',
    src: '/images/camera/digi.jpg',
    className: 'camera-hero__frame--large',
    rotation: 1.556,
    zIndex: 7,
    label: 'CANON POWERSHOT ELPH 180 DIGITAL CAMERA',
  },
];

export default function CameraPage() {
  return (
    <div className="camera-page">
      <section className="camera-hero" aria-labelledby="camera-hero-title">
        <div className="camera-hero__canvas">
          <div className="camera-hero__copy">
            <h1 id="camera-hero-title" className="camera-hero__title">
              <span className="camera-hero__title-line">WELCOME TO</span>
              <span className="camera-hero__title-line">MY CAMERA</span>
            </h1>
            <p className="camera-hero__subtitle">
              Snapshots of people, places, and little moments in between.
            </p>
          </div>

          {POLAROIDS.map((frame) => (
            <figure
              key={frame.className}
              className={`camera-hero__frame ${frame.className}`}
              style={{
                '--frame-rotate': `${frame.rotation}deg`,
                zIndex: frame.zIndex,
              }}
            >
              <img
                src={frame.src}
                alt={frame.alt}
                className="camera-hero__frame-photo"
              />
              {frame.label && (
                <Label as="p" className="camera-hero__label" delay="camera" size="sm">
                  {frame.label}
                </Label>
              )}
            </figure>
          ))}

          <div className="camera-hero__camera-wrap">
            <div className="camera-hero__screen-placeholder" aria-hidden="true">
              <img
                src="/images/camera/digi-me.jpg"
                alt=""
                className="camera-hero__screen-photo"
              />
            </div>
            <img
              src="/images/camera/star-12.png"
              alt=""
              aria-hidden="true"
              className="camera-hero__star"
            />
            <img
              src="/images/camera/camera-frame-no-star.png"
              alt="Canon PowerShot ELPH 180 digital camera"
              className="camera-hero__camera"
            />
          </div>
        </div>
      </section>

      <CameraPhotoGrid />
    </div>
  );
}
