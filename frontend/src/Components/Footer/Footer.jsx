import React from 'react';
import logo from '../Assets/White Logo.png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <img src={logo} alt="AT Digital Logo" style={styles.logo}/>
          <p style={styles.text}>
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
          </p>
        </div>
        <div style={styles.linksSection}>
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Our Technologies</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>ReactJS</li>
              <li style={styles.listItem}>Gatsby</li>
              <li style={styles.listItem}>NextJS</li>
              <li style={styles.listItem}>NodeJS</li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Our Services</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>Social Media Marketing</li>
              <li style={styles.listItem}>Web & Mobile App Development</li>
              <li style={styles.listItem}>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
        <span style={styles.divider}>|</span>
        <a href="/terms-conditions" style={styles.link}>Terms & Conditions</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#6E40C9', // Purple background color
    color: 'white',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0 20px',
  },
  logoSection: {
    flex: 1,
  },
  logo: {
    width: '150px',
    height: 'auto',
    marginLeft: '50px',
  },
  title: {
    fontSize: '24px',
    margin: '10px 0',
  },
  text: {
    maxWidth: '300px',
    lineHeight: '1.5',
    marginLeft: '50px',
  },
  linksSection: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  column: {
    marginRight: '20px',
  },
  columnTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '5px',
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
  },
  divider: {
    margin: '0 10px',
  },
};

export default Footer;
