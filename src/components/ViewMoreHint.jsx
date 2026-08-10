import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './ViewMoreHint.css';

function canUseHoverHint() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

export default function ViewMoreHint({
  children,
  enabled = true,
  label = 'VIEW MORE',
  variant = 'default',
}) {
  const [active, setActive] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hoverCapable, setHoverCapable] = useState(false);

  useEffect(() => {
    setHoverCapable(canUseHoverHint());
  }, []);

  const isHintSuppressed = useCallback((event) => {
    return Boolean(event.target.closest?.('[data-no-view-hint]'));
  }, []);

  const onMouseMove = useCallback(
    (event) => {
      if (isHintSuppressed(event)) {
        setActive(false);
        return;
      }
      setCoords({ x: event.clientX, y: event.clientY });
      setActive(true);
    },
    [isHintSuppressed],
  );

  const onMouseEnter = useCallback(
    (event) => {
      if (isHintSuppressed(event)) {
        setActive(false);
        return;
      }
      setCoords({ x: event.clientX, y: event.clientY });
      setActive(true);
    },
    [isHintSuppressed],
  );

  const onMouseLeave = useCallback(() => {
    setActive(false);
  }, []);

  if (!enabled || !hoverCapable) {
    return children;
  }

  return (
    <>
      <div
        className="view-more-hint__trigger"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {children}
      </div>
      {active &&
        createPortal(
          <span
            className={`view-more-hint view-more-hint--${variant}`.trim()}
            style={{
              '--view-more-x': `${coords.x}px`,
              '--view-more-y': `${coords.y}px`,
            }}
            aria-hidden="true"
          >
            {label}
          </span>,
          document.body,
        )}
    </>
  );
}
