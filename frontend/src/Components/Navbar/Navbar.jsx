import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa"; // Import the hamburger icon from react-icons
import logo from '../Assets/White Logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#services">SERVICES</a>
        <a href="#about">ABOUT US</a>
        <a href="#contact">CONTACT US</a>
        <a href="#careers">CAREERS</a>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
      {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
