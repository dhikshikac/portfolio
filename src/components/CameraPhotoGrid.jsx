import { useEffect, useMemo, useState } from 'react';
import cameraPhotos from '../data/cameraPhotos';
import './CameraPhotoGrid.css';

function parseAspectRatio(aspectRatio) {
  const [width, height] = aspectRatio.split('/').map((value) => parseFloat(value.trim()));
  return height / width;
}

function isPortrait(aspectRatio) {
  const [width, height] = aspectRatio.split('/').map((value) => parseFloat(value.trim()));
  return height > width;
}

function interleaveByOrientation(photos) {
  const vertical = photos.filter((photo) => isPortrait(photo.aspectRatio));
  const horizontal = photos.filter((photo) => !isPortrait(photo.aspectRatio));
  const interleaved = [];

  let verticalIndex = 0;
  let horizontalIndex = 0;

  while (verticalIndex < vertical.length || horizontalIndex < horizontal.length) {
    if (horizontalIndex < horizontal.length) {
      interleaved.push(horizontal[horizontalIndex]);
      horizontalIndex += 1;
    }

    if (verticalIndex < vertical.length) {
      interleaved.push(vertical[verticalIndex]);
      verticalIndex += 1;
    }
  }

  return interleaved;
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
  const columns = useMemo(() => {
    const orderedPhotos = interleaveByOrientation(cameraPhotos);
    return distributeToColumns(orderedPhotos, columnCount);
  }, [columnCount]);

  return (
    <section className="camera-gallery" aria-label="Photo gallery">
      <div className="camera-gallery__masonry">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="camera-gallery__column">
            {column.map((photo) => (
              <figure key={photo.src} className="camera-photo">
                <div
                  className="camera-photo__media"
                  style={{ aspectRatio: photo.aspectRatio }}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
