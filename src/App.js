import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { Route, Router, Routes } from 'react-router';
// import HomePage from './pages/HomePage';

const Home = React.lazy(() => import("./pages/HomePage"));
const WhyTeific = React.lazy(() => import("./pages/WhyTeificPage"));
const Contact = React.lazy(()=>import("./pages/ContactPage"))

function App() {
  return (
  
         
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whyteific" element={<WhyTeific />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    
   
  );
}

export default App;
