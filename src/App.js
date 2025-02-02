
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourPackages from './pages/TourPackages';
import Destinations from './pages/Destinations';
import CabServices from './pages/CabServices';
import SelfDrive from './pages/SelfDrive';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/cab-services" element={<CabServices />} />
        <Route path="/self-drive" element={<SelfDrive />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <ChatWidget />
      <Footer />
    </Router>
  );
};

export default App;
