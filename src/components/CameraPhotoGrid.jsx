import cameraPhotos from '../data/cameraPhotos';
import './CameraPhotoGrid.css';

export default function CameraPhotoGrid() {
  return (
    <section className="camera-gallery" aria-label="Photo gallery">
      <div className="camera-gallery__masonry">
        {cameraPhotos.map((photo, i) => (
          <figure key={i} className="camera-photo">
            <div
              className="camera-photo__media"
              style={{ aspectRatio: photo.aspectRatio }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
