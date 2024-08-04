import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import logo from '../Assets/White Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="AT Digital Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <Link to="/services">SERVICES</Link>
        <Link to="/about-us">ABOUT US</Link>
        <Link to="/contact-us">CONTACT US</Link>
        <Link to="/careers">CAREERS</Link>
      </div>
    </nav>
  );
};

export default Navbar;
