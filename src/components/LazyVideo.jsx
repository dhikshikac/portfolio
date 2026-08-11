import { useEffect, useRef } from 'react';

/**
 * Loads and plays a video only while it is in (or near) the viewport.
 * Uses preload="none" + poster so nothing downloads until needed.
 */
export default function LazyVideo({
  src,
  poster,
  className,
  'aria-label': ariaLabel,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  rootMargin = '200px 0px',
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let isVisible = false;

    const playSafe = () => {
      if (!autoPlay || reducedMotion || !isVisible) return;
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    };

    const pauseSafe = () => {
      if (!video.paused) video.pause();
    };

    const ensureSrc = () => {
      if (video.dataset.loaded === 'true') return;
      video.dataset.loaded = 'true';
      if (video.dataset.src && !video.getAttribute('src')) {
        video.src = video.dataset.src;
        video.load();
      }
    };

    // Reduced motion: keep poster only, never autoplay/download.
    if (reducedMotion) {
      return undefined;
    }

    const onCanPlay = () => playSafe();
    video.addEventListener('canplay', onCanPlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
          ensureSrc();
          playSafe();
        } else {
          pauseSafe();
        }
      },
      { threshold: 0.2, rootMargin },
    );

    observer.observe(video);
    return () => {
      video.removeEventListener('canplay', onCanPlay);
      observer.disconnect();
      pauseSafe();
    };
  }, [autoPlay, rootMargin, src]);

  return (
    <video
      ref={videoRef}
      className={className}
      data-src={src}
      poster={poster}
      preload="none"
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      aria-label={ariaLabel}
    />
  );
}
