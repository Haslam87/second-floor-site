import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-logo">Second Floor Digital</span>
          <p>Trust, Clarity & Conversion for Independent Clinics.</p>
        </div>
        <div className="footer-links">
          <nav>
            <a href="#how-it-works">How It Works</a>
            <a href="#reviews">Results</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-legal">
          <p>&copy; {new Date().getFullYear()} Second Floor Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
