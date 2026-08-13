import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const ImageLoadSequenceContext = createContext(null);
const TIER_TIMEOUT_MS = 1200;

export function ImageLoadSequenceProvider({ children }) {
  const [activeTier, setActiveTier] = useState(0);
  const pendingByTier = useRef(new Map());
  const completedTiers = useRef(new Set());
  const maxTierRef = useRef(0);

  const noteTier = useCallback((tier) => {
    maxTierRef.current = Math.max(maxTierRef.current, tier);
  }, []);

  const advancePast = useCallback((tier) => {
    if (completedTiers.current.has(tier)) return;
    completedTiers.current.add(tier);
    setActiveTier((current) => Math.max(current, tier + 1));
  }, []);

  const checkTierComplete = useCallback(
    (tier) => {
      if (completedTiers.current.has(tier)) return;

      const pending = pendingByTier.current.get(tier);
      if (pending && pending.size === 0) {
        advancePast(tier);
      }
    },
    [advancePast],
  );

  const register = useCallback((tier, id) => {
    if (!pendingByTier.current.has(tier)) {
      pendingByTier.current.set(tier, new Set());
    }
    pendingByTier.current.get(tier).add(id);
  }, []);

  const unregister = useCallback(
    (tier, id) => {
      pendingByTier.current.get(tier)?.delete(id);
      checkTierComplete(tier);
    },
    [checkTierComplete],
  );

  const markSettled = useCallback(
    (tier, id) => {
      pendingByTier.current.get(tier)?.delete(id);
      checkTierComplete(tier);
    },
    [checkTierComplete],
  );

  useLayoutEffect(() => {
    let tier = activeTier;

    while (tier <= maxTierRef.current && !completedTiers.current.has(tier)) {
      const pending = pendingByTier.current.get(tier);
      if (pending && pending.size > 0) break;

      completedTiers.current.add(tier);
      tier += 1;
    }

    if (tier !== activeTier) {
      setActiveTier(tier);
    }
  }, [activeTier]);

  // Don't let a slow image block the rest of the page forever.
  useEffect(() => {
    if (activeTier > maxTierRef.current) return undefined;
    if (completedTiers.current.has(activeTier)) return undefined;

    const timer = window.setTimeout(() => {
      advancePast(activeTier);
    }, TIER_TIMEOUT_MS);

    return () => window.clearTimeout(timer);
  }, [activeTier, advancePast]);

  const value = useMemo(
    () => ({ activeTier, register, unregister, markSettled, noteTier }),
    [activeTier, register, unregister, markSettled, noteTier],
  );

  return (
    <ImageLoadSequenceContext.Provider value={value}>
      {children}
    </ImageLoadSequenceContext.Provider>
  );
}

function useImageTierReady(tier) {
  const ctx = useContext(ImageLoadSequenceContext);
  return !ctx || tier <= ctx.activeTier;
}

export function useNoteImageTier(tier) {
  const ctx = useContext(ImageLoadSequenceContext);

  useLayoutEffect(() => {
    ctx?.noteTier(tier);
  }, [ctx, tier]);
}

export function useImageLoadSequence(tier, canStart = true) {
  const id = useId();
  const ctx = useContext(ImageLoadSequenceContext);
  const tierReady = useImageTierReady(tier);
  const active = tierReady && canStart;

  useLayoutEffect(() => {
    if (!ctx || !active) return undefined;

    ctx.register(tier, id);
    return () => ctx.unregister(tier, id);
  }, [ctx, tier, id, active]);

  const markSettled = useCallback(() => {
    ctx?.markSettled(tier, id);
  }, [ctx, tier, id]);

  return { tierReady, active, markSettled };
}

export function SequentialImage({
  tier = 0,
  src,
  srcSet,
  sizes,
  alt,
  className,
  fetchPriority,
  decoding = 'async',
  ...rest
}) {
  const imgRef = useRef(null);
  const { active, markSettled } = useImageLoadSequence(tier);

  useLayoutEffect(() => {
    if (!active) return;
    const img = imgRef.current;
    if (img?.complete) {
      markSettled();
    }
  }, [active, markSettled, src]);

  return (
    <img
      ref={imgRef}
      src={active ? src : undefined}
      srcSet={active ? srcSet : undefined}
      sizes={active ? sizes : undefined}
      alt={alt}
      className={className}
      fetchPriority={fetchPriority}
      decoding={decoding}
      onLoad={markSettled}
      onError={markSettled}
      {...rest}
    />
  );
}
