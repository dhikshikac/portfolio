import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './ImageViewer.css';

// Full-screen viewer for research boards and diagrams: scroll / pinch /
// +/- to zoom, drag to pan, double-click or double-tap to jump in and out.
const MIN_SCALE = 1;
const MAX_SCALE = 6;
const STEP = 1.5;
const DOUBLE_TAP_MS = 300;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function ImageViewer({ src, alt, onClose }) {
  const stageRef = useRef(null);
  const closeRef = useRef(null);
  const pointers = useRef(new Map());
  const gesture = useRef(null);
  const lastTap = useRef({ time: 0, x: 0, y: 0 });
  // Set once a press turns into a drag or pinch, so releasing it isn't
  // treated as a click on the backdrop.
  const dragged = useRef(false);

  // Image shown "contained" in the stage at scale 1 (fit), then zoomed.
  const [fit, setFit] = useState(null); // { w, h, stageW, stageH }
  const [view, setView] = useState({ scale: 1, x: 0, y: 0 });
  const [natural, setNatural] = useState(null);
  // Zoom cap: at least MAX_SCALE, and always enough to reach the file's
  // own pixels, so very wide boards become readable when zoomed in.
  const maxScale = useRef(MAX_SCALE);
  const [showHint, setShowHint] = useState(true);

  // ── Geometry ──────────────────────────────────────────────

  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage || !natural) return;
    const stageW = stage.clientWidth;
    const stageH = stage.clientHeight;
    const ratio = Math.min(stageW / natural.w, stageH / natural.h);
    maxScale.current = Math.max(MAX_SCALE, 1 / ratio);
    setFit({ w: natural.w * ratio, h: natural.h * ratio, stageW, stageH });
  }, [natural]);

  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Keep the image covering the stage where it can, centred where it can't.
  const constrain = useCallback(
    (next) => {
      if (!fit) return next;
      const scale = clamp(next.scale, MIN_SCALE, maxScale.current);
      const w = fit.w * scale;
      const h = fit.h * scale;
      const x =
        w <= fit.stageW ? (fit.stageW - w) / 2 : clamp(next.x, fit.stageW - w, 0);
      const y =
        h <= fit.stageH ? (fit.stageH - h) / 2 : clamp(next.y, fit.stageH - h, 0);
      return { scale, x, y };
    },
    [fit]
  );

  // Reset to fit whenever the fitted size changes (open, resize)
  useEffect(() => {
    if (fit) setView(constrain({ scale: 1, x: 0, y: 0 }));
  }, [fit, constrain]);

  // Zoom so the stage point (px, py) stays under the cursor / fingers
  const zoomAt = useCallback(
    (targetScale, px, py, base) => {
      setView((current) => {
        const from = base || current;
        const scale = clamp(targetScale, MIN_SCALE, maxScale.current);
        const u = (px - from.x) / from.scale;
        const v = (py - from.y) / from.scale;
        return constrain({ scale, x: px - u * scale, y: py - v * scale });
      });
    },
    [constrain]
  );

  const zoomCentre = useCallback(
    (factor) => {
      if (!fit) return;
      setView((current) => {
        const scale = clamp(current.scale * factor, MIN_SCALE, maxScale.current);
        const px = fit.stageW / 2;
        const py = fit.stageH / 2;
        const u = (px - current.x) / current.scale;
        const v = (py - current.y) / current.scale;
        return constrain({ scale, x: px - u * scale, y: py - v * scale });
      });
    },
    [fit, constrain]
  );

  const reset = useCallback(() => setView(constrain({ scale: 1, x: 0, y: 0 })), [constrain]);

  const stagePoint = (event) => {
    const rect = stageRef.current.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  // ── Open / close: scroll lock, focus, keyboard ───────────

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const hintTimer = setTimeout(() => setShowHint(false), 3200);
    return () => {
      document.body.style.overflow = previousOverflow;
      clearTimeout(hintTimer);
      previousFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === '+' || event.key === '=') zoomCentre(STEP);
      else if (event.key === '-' || event.key === '_') zoomCentre(1 / STEP);
      else if (event.key === '0') reset();
      else if (event.key.startsWith('Arrow')) {
        const d = 60;
        const dx = event.key === 'ArrowLeft' ? d : event.key === 'ArrowRight' ? -d : 0;
        const dy = event.key === 'ArrowUp' ? d : event.key === 'ArrowDown' ? -d : 0;
        setView((c) => constrain({ ...c, x: c.x + dx, y: c.y + dy }));
      } else return;
      event.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, zoomCentre, reset, constrain]);

  // Wheel needs a non-passive listener to stop the page from scrolling
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const onWheel = (event) => {
      event.preventDefault();
      setShowHint(false);
      const rect = stage.getBoundingClientRect();
      // Trackpad pinch arrives as ctrl+wheel with small deltas
      const sensitivity = event.ctrlKey ? 0.01 : 0.0015;
      const factor = Math.exp(-event.deltaY * sensitivity);
      setView((current) => {
        const scale = clamp(current.scale * factor, MIN_SCALE, maxScale.current);
        const px = event.clientX - rect.left;
        const py = event.clientY - rect.top;
        const u = (px - current.x) / current.scale;
        const v = (py - current.y) / current.scale;
        return constrain({ scale, x: px - u * scale, y: py - v * scale });
      });
    };
    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => stage.removeEventListener('wheel', onWheel);
  }, [constrain]);

  // ── Pointer: drag to pan, two fingers to pinch ───────────

  const startGesture = () => {
    const pts = [...pointers.current.values()];
    if (pts.length === 1) {
      gesture.current = { type: 'pan', start: pts[0], view, moved: false };
    } else if (pts.length >= 2) {
      const [a, b] = pts;
      gesture.current = {
        type: 'pinch',
        dist: Math.hypot(a.x - b.x, a.y - b.y) || 1,
        mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
        view,
        moved: true,
      };
    }
  };

  const onPointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    stageRef.current.setPointerCapture(event.pointerId);
    if (pointers.current.size === 0) dragged.current = false;
    pointers.current.set(event.pointerId, stagePoint(event));
    if (pointers.current.size > 1) dragged.current = true;
    setShowHint(false);
    startGesture();
  };

  const onPointerMove = (event) => {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, stagePoint(event));
    const g = gesture.current;
    if (!g) return;
    const pts = [...pointers.current.values()];

    if (g.type === 'pan' && pts.length === 1) {
      const dx = pts[0].x - g.start.x;
      const dy = pts[0].y - g.start.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) {
        g.moved = true;
        dragged.current = true;
      }
      setView(constrain({ ...g.view, x: g.view.x + dx, y: g.view.y + dy }));
    } else if (g.type === 'pinch' && pts.length >= 2) {
      const [a, b] = pts;
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const scale = clamp(g.view.scale * (dist / g.dist), MIN_SCALE, maxScale.current);
      const u = (g.mid.x - g.view.x) / g.view.scale;
      const v = (g.mid.y - g.view.y) / g.view.scale;
      setView(constrain({ scale, x: mid.x - u * scale, y: mid.y - v * scale }));
    }
  };

  const onPointerUp = (event) => {
    const g = gesture.current;
    const point = pointers.current.get(event.pointerId);
    pointers.current.delete(event.pointerId);

    // Double-tap (touch) toggles zoom; mouse uses dblclick below
    if (event.pointerType !== 'mouse' && g?.type === 'pan' && !g.moved && point) {
      const now = Date.now();
      const near =
        Math.hypot(point.x - lastTap.current.x, point.y - lastTap.current.y) < 30;
      if (now - lastTap.current.time < DOUBLE_TAP_MS && near) {
        toggleZoomAt(point.x, point.y);
        lastTap.current = { time: 0, x: 0, y: 0 };
      } else {
        lastTap.current = { time: now, x: point.x, y: point.y };
      }
    }

    if (pointers.current.size > 0) startGesture();
    else gesture.current = null;
  };

  const toggleZoomAt = (x, y) => {
    if (view.scale > 1.05) reset();
    else zoomAt(2.5, x, y, view);
  };

  const onDoubleClick = (event) => {
    const p = stagePoint(event);
    toggleZoomAt(p.x, p.y);
  };

  const zoomed = view.scale > 1.01;
  const percent = Math.round(view.scale * 100);

  return createPortal(
    <div
      className="iv"
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${alt}`}
    >
      <div
        ref={stageRef}
        className={`iv-stage${zoomed ? ' iv-stage--zoomed' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
        onClick={(event) => {
          // A still click on the empty backdrop (outside the image) closes
          if (dragged.current || !fit) return;
          const p = stagePoint(event);
          const insideImage =
            p.x >= view.x &&
            p.x <= view.x + fit.w * view.scale &&
            p.y >= view.y &&
            p.y <= view.y + fit.h * view.scale;
          if (!insideImage) onClose();
        }}
      >
        <img
          src={src}
          alt={alt}
          className="iv-image"
          draggable={false}
          onLoad={(event) =>
            setNatural({
              w: event.currentTarget.naturalWidth,
              h: event.currentTarget.naturalHeight,
            })
          }
          style={
            fit
              ? {
                  // Resize rather than scale(): a scaled layer is rasterised at
                  // its fitted size and stretched, which blurs small text.
                  width: fit.w * view.scale,
                  height: fit.h * view.scale,
                  transform: `translate(${view.x}px, ${view.y}px)`,
                }
              : { opacity: 0 }
          }
        />
      </div>

      <p className={`iv-hint${showHint ? '' : ' iv-hint--hidden'}`} aria-hidden="true">
        Scroll or pinch to zoom · drag to move
      </p>

      <div className="iv-toolbar" role="toolbar" aria-label="Zoom controls">
        <button
          type="button"
          className="iv-btn"
          onClick={() => zoomCentre(1 / STEP)}
          disabled={view.scale <= MIN_SCALE}
          aria-label="Zoom out"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /></svg>
        </button>
        <button
          type="button"
          className="iv-zoom-level"
          onClick={reset}
          aria-label={`Zoom ${percent}%. Reset to fit`}
          title="Reset to fit"
        >
          {percent}%
        </button>
        <button
          type="button"
          className="iv-btn"
          onClick={() => zoomCentre(STEP)}
          disabled={view.scale >= maxScale.current - 0.001}
          aria-label="Zoom in"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14" /></svg>
        </button>
      </div>

      <button
        ref={closeRef}
        type="button"
        className="iv-btn iv-close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>,
    document.body
  );
}
