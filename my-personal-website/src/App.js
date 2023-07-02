import * as React from 'react';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import QualificationsPage from './components/QualificationsPage';
import WorkPage from './components/WorkPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function MyApp() {
  return (
    <div>
      <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/qualifications" element={<QualificationsPage />} />
      </Routes>

      <Routes>
        <Route path="/work-history" element={<WorkPage />} />
      </Routes>
    </Router>
    </div>
  );
}