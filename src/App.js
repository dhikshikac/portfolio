import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import CaseStudyPage from './pages/CaseStudyPage';
import WoltersKluwerCaseStudy from './pages/case-studies/wolters';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import CameraPage from './pages/CameraPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/work" replace />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/wolters-kluwer" element={<WoltersKluwerCaseStudy />} />
          <Route path="work/:slug" element={<CaseStudyPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="camera" element={<CameraPage />} />
        </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
