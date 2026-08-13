import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import { CaseStudyRoute } from './pages/case-studies/caseStudyRoutes';
import WorkPage from './pages/WorkPage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const CameraPage = lazy(() => import('./pages/CameraPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/work" replace />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<CaseStudyRoute />} />
          <Route
            path="about"
            element={
              <Suspense fallback={null}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="camera"
            element={
              <Suspense fallback={null}>
                <CameraPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
