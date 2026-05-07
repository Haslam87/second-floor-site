import React from 'react';
import './Problem.css';

export default function Problem() {
  return (
    <section id="problem" className="section problem-section">
      <div className="container">
        <div className="problem-header fade-in">
          <h2>Most businesses don't lose customers because of their service.</h2>
          <p className="problem-subtitle">They lose them in the moments before a conversation ever starts.</p>
        </div>
        
        <div className="problem-cards">
          <div className="problem-card slide-up" style={{ animationDelay: '100ms' }}>
            <div className="card-number">01</div>
            <h3>Visitors scan your website in seconds—not minutes.</h3>
            <p>If your value isn't immediately obvious, they click back to Google.</p>
          </div>
          
          <div className="problem-card slide-up" style={{ animationDelay: '200ms' }}>
            <div className="card-number">02</div>
            <h3>Small points of friction create hesitation.</h3>
            <p>A confusing booking flow or missing information breaks momentum and trust.</p>
          </div>
          
          <div className="problem-card slide-up" style={{ animationDelay: '300ms' }}>
            <div className="card-number">03</div>
            <h3>If something feels unclear or impersonal, people quietly leave.</h3>
            <p>First impressions form instantly. A generic feel signals a generic service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
