import React from 'react';
import './Footer.css'; // Import the CSS file
import logo from '../Assets/White Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logoSection">
          <img src={logo} alt="AT Digital Logo" className="logo"/>
          <p className="text">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
          </p>
        </div>
        <div className="linksSection">
          <div className="column">
            <h3 className="columnTitle">Our Technologies</h3>
            <ul className="list">
              <li className="listItem">ReactJS</li>
              <li className="listItem">Gatsby</li>
              <li className="listItem">NextJS</li>
              <li className="listItem">NodeJS</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="columnTitle">Our Services</h3>
            <ul className="list">
              <li className="listItem">Social Media Marketing</li>
              <li className="listItem">Web & Mobile App Development</li>
              <li className="listItem">Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <a href="/privacy-policy" className="link">Privacy Policy</a>
        <span className="divider">|</span>
        <a href="/terms-conditions" className="link">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
