import { useLayoutEffect, useRef } from 'react';
import useInView from '../hooks/useInView';
import { useImageLoadSequence } from './ImageLoadSequence';
import './CameraPhotoGrid.css';

export default function CameraPhoto({ photo, revealDelay = 0, tier = 1 }) {
  const imgRef = useRef(null);
  const [ref, inView] = useInView();
  const { active, markSettled } = useImageLoadSequence(tier, inView);
  const caption = photo.description ?? photo.alt;
  const hasDescription = Boolean(caption);

  useLayoutEffect(() => {
    if (!active) return;
    const img = imgRef.current;
    if (img?.complete) {
      markSettled();
    }
  }, [active, markSettled, photo.src]);

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
        <img
          ref={imgRef}
          src={active ? photo.src : undefined}
          alt={photo.alt}
          decoding="async"
          onLoad={markSettled}
          onError={markSettled}
        />
        {hasDescription && (
          <figcaption className="camera-photo__caption">{caption}</figcaption>
        )}
      </div>
    </figure>
  );
}
