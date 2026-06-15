import { useEffect, useMemo, useState } from 'react';
import cameraPhotos from '../data/cameraPhotos';
import CameraPhoto from './CameraPhoto';
import './CameraPhotoGrid.css';

function parseAspectRatio(aspectRatio) {
  const [width, height] = aspectRatio.split('/').map((value) => parseFloat(value.trim()));
  return height / width;
}

function shufflePhotos(photos) {
  const shuffled = [...photos];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function distributeToColumns(photos, columnCount) {
  const columns = Array.from({ length: columnCount }, () => []);
  const columnHeights = Array(columnCount).fill(0);

  photos.forEach((photo) => {
    const relativeHeight = parseAspectRatio(photo.aspectRatio);
    let targetColumn = 0;

    for (let i = 1; i < columnCount; i += 1) {
      if (columnHeights[i] < columnHeights[targetColumn]) {
        targetColumn = i;
      }
    }

    columns[targetColumn].push(photo);
    columnHeights[targetColumn] += relativeHeight;
  });

  return columns;
}

function getColumnCount(width) {
  if (width <= 400) return 1;
  if (width <= 640) return 2;
  if (width <= 900) return 3;
  if (width <= 1200) return 4;
  return 5;
}

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(() =>
    typeof window === 'undefined' ? 5 : getColumnCount(window.innerWidth),
  );

  useEffect(() => {
    const updateColumnCount = () => {
      setColumnCount(getColumnCount(window.innerWidth));
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  return columnCount;
}

export default function CameraPhotoGrid() {
  const columnCount = useColumnCount();
  const [shuffledPhotos] = useState(() => shufflePhotos(cameraPhotos));
  const columns = useMemo(
    () => distributeToColumns(shuffledPhotos, columnCount),
    [columnCount, shuffledPhotos],
  );

  return (
    <section className="camera-gallery" aria-label="Photo gallery">
      <div className="camera-gallery__masonry">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="camera-gallery__column">
            {column.map((photo, photoIndex) => (
              <CameraPhoto
                key={photo.src}
                photo={photo}
                revealDelay={columnIndex * 70 + photoIndex * 90}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
