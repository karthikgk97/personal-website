import * as React from 'react';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import EducationPage from './components/EducationPage';


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
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </Router>
    </div>
  );
}