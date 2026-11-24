import { useEffect } from 'react';
import useIsPhone from './useIsPhone';

const POLL_MS = 400;

// Zoom files are large, so don't fetch them ahead of time for visitors who
// asked to save data or are on a slow connection. They still load on click.
function shouldSkip() {
  const connection = navigator.connection;
  if (!connection) return false;
  return connection.saveData || /(^|-)(2g|3g)$/.test(connection.effectiveType || '');
}

function pageImagesLoaded(root) {
  if (document.readyState !== 'complete') return false;
  // Images further down have no src until the load sequence reaches them.
  return [...root.querySelectorAll('img')].every(
    (img) => img.getAttribute('src') && img.complete,
  );
}

/**
 * Once everything on the page has loaded, fetches the high-resolution zoom
 * files (`[data-zoom-src]`) in page order, one at a time, at low priority.
 */
export default function useZoomPreload(rootRef) {
  const isPhone = useIsPhone();

  useEffect(() => {
    const root = rootRef.current;
    // Phones have no zoom, so there is nothing to fetch
    if (!root || isPhone || shouldSkip()) return undefined;

    let cancelled = false;
    let timer;
    // Held so the browser keeps the files ready until the page is left
    const preloaded = [];

    function loadNext(queue) {
      if (cancelled || queue.length === 0) return;
      const [src, ...rest] = queue;
      const img = new Image();
      img.fetchPriority = 'low';
      img.onload = () => loadNext(rest);
      img.onerror = () => loadNext(rest);
      preloaded.push(img);
      img.src = src;
    }

    function check() {
      if (cancelled) return;
      if (!pageImagesLoaded(root)) {
        timer = window.setTimeout(check, POLL_MS);
        return;
      }
      const sources = [...root.querySelectorAll('[data-zoom-src]')].map(
        (element) => element.dataset.zoomSrc,
      );
      loadNext([...new Set(sources)]);
    }

    timer = window.setTimeout(check, POLL_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      preloaded.forEach((img) => {
        img.onload = null;
        img.onerror = null;
        // Stop a download still in flight when leaving the page
        if (!img.complete) img.removeAttribute('src');
      });
    };
  }, [rootRef, isPhone]);
}
