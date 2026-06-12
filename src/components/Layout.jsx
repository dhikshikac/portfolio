import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import AmbientSky from './AmbientSky';
import PageTransition from './PageTransition';
import './Layout.css';

export default function Layout() {
  const location = useLocation();
  const showAmbientSky =
    location.pathname === '/about' || location.pathname === '/camera';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="layout">
      {showAmbientSky && <AmbientSky />}
      <Nav />
      <main className="layout__main">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
