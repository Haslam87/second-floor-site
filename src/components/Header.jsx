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
          Second Floor Digital
        </a>
        <nav className="nav-desktop">
          <a href="#how-it-works">How It Works</a>
          <a href="#reviews">Results</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn btn-primary nav-cta">Front Door Review</button>
      </div>
    </header>
  );
}
