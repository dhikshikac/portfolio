import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
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
          <Route path="work/:slug" element={<Navigate to="/work" replace />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="camera" element={<CameraPage />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
