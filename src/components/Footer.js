import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-center py-3">
      <p>© {new Date().getFullYear()} Honey Priya Dharshini V. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
