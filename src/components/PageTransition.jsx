import { useEffect, useState } from 'react';
import './PageTransition.css';

export default function PageTransition({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`page-transition${visible ? ' page-transition--visible' : ''}`}>
      {children}
    </div>
  );
}
