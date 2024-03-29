import * as React from 'react';
import { Helmet } from 'react-helmet';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import QualificationsPage from './components/QualificationsPage';
import WorkPage from './components/WorkPage';
import ContactPage from './components/ContactPage';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export default function MyApp() {
  const theme = createTheme();
  return (
    
    <div>
      
      <Helmet>
        <title>GK website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      </style>

      <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={ <ThemeProvider theme={theme}> <HomePage /> </ThemeProvider>} />
      </Routes>

      <Routes>
        <Route path="/qualifications" element={<QualificationsPage />} />
      </Routes>

      <Routes>
        <Route path="/work-history" element={<WorkPage />} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    </div>
  );
}