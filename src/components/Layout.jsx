import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import AmbientSky from './AmbientSky';
import Stardust from './Stardust';
import PageTransition from './PageTransition';
import './Layout.css';

export default function Layout() {
  const location = useLocation();

  const isWork = location.pathname.startsWith('/work');
  const showAmbientSky =
    location.pathname === '/about' || location.pathname === '/camera';
  const showStardust = !isWork && !showAmbientSky;

  return (
    <div className="layout">
      {showAmbientSky && <AmbientSky />}
      {showStardust && <Stardust />}
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
