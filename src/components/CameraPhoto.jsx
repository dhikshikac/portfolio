import useInView from '../hooks/useInView';
import './CameraPhotoGrid.css';

export default function CameraPhoto({ photo, revealDelay = 0 }) {
  const [ref, inView] = useInView();
  const caption = photo.description ?? photo.alt;
  const hasDescription = Boolean(caption);

  return (
    <figure
      ref={ref}
      className={`camera-photo${inView ? ' camera-photo--revealed' : ''}`}
      style={{ '--reveal-delay': `${revealDelay}ms` }}
    >
      <div
        className={`camera-photo__media${
          hasDescription ? ' camera-photo__media--has-description' : ''
        }`}
        style={{ aspectRatio: photo.aspectRatio }}
      >
        <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
        {hasDescription && (
          <figcaption className="camera-photo__caption">{caption}</figcaption>
        )}
      </div>
    </figure>
  );
}
