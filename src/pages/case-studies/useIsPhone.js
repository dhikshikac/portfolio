import { useEffect, useState } from 'react';

// Phones in either orientation. Keep the width in step with the phone rules
// in caseStudyShared.css.
export const PHONE_QUERY =
  '(max-width: 640px), (max-height: 480px) and (pointer: coarse)';

function matches() {
  return window.matchMedia?.(PHONE_QUERY).matches ?? false;
}

export default function useIsPhone() {
  const [isPhone, setIsPhone] = useState(matches);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const query = window.matchMedia(PHONE_QUERY);
    const onChange = () => setIsPhone(query.matches);
    onChange();
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return isPhone;
}
