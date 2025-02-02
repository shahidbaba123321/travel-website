// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TravelWorld</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tour-packages">Tour Packages</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/cab-services">Cab Services</Link></li>
        <li><Link to="/self-drive">Self Drive</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
