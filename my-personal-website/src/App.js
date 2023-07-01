import * as React from 'react';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import TysonPage from './components/TysonPage';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function MyApp() {
  return (
    <div>
      
      

      <Router>
      <TopBar />
      <Routes>
        {/* <Route exact path="/education" component={TopBar} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    {/* </Router> */}

      {/* <Router> */}
      
      <Routes>
        {/* <Route exact path="/education" component={TopBar} /> */}
        <Route path="/education" element={<TysonPage />} />
      </Routes>
    </Router>
    </div>
  );
}