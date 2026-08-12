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
  enabled = true,
  onSettled,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return undefined;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let isVisible = false;
    let settled = false;

    const settleOnce = () => {
      if (settled) return;
      settled = true;
      onSettled?.();
    };

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

    if (reducedMotion) {
      settleOnce();
      return undefined;
    }

    const onCanPlay = () => {
      playSafe();
      settleOnce();
    };
    const onError = () => settleOnce();

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('error', onError);

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
      video.removeEventListener('error', onError);
      observer.disconnect();
      pauseSafe();
    };
  }, [autoPlay, enabled, onSettled, rootMargin, src]);

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
