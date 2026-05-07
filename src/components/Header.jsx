import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Second Floor Digital Logo" className="logo-img" />
          Second Floor Digital
        </a>
        <nav className="nav-desktop">
          <a href="#how-it-works">How It Works</a>
          <a href="#reviews">Results</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="mailto:contact@secondfloordigital.co.uk?subject=Front%20Door%20Review%20Request&body=Hi%20Mark%2C%0D%0A%0D%0AI%E2%80%99d%20love%20to%20request%20a%20Front%20Door%20Review%20for%20my%20business.%0D%0A%0D%0ABusiness%20name%3A%0D%0A%0D%0AWebsite%3A%0D%0A%0D%0AWhat%20feels%20like%20it%E2%80%99s%20not%20working%20online%20right%20now%3A%0D%0A%0D%0AThanks%2C" className="btn btn-primary nav-cta">Front Door Review</a>
      </div>
    </header>
  );
}
