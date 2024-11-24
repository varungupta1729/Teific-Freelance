import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { Route, Router, Routes } from 'react-router';
import OrganizationOverviewPage from './pages/OrganizationOverviewPage';
import AboutPage from './pages/AboutPage';
import Loader from './components/Loader/Loader';
// import HomePage from './pages/HomePage';

const Home = React.lazy(() => import("./pages/HomePage"));
const WhyTeific = React.lazy(() => import("./pages/WhyTeificPage"));
const Contact = React.lazy(()=>import("./pages/ContactPage"))

function App() {
  return (
  
         
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<WhyTeific />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/organization" element={<OrganizationOverviewPage />} />
        </Routes>
      </Suspense>
    
   
  );
}

export default App;
