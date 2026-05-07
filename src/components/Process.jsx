import React from 'react';
import './Process.css';

export default function Process() {
  return (
    <section id="how-it-works" className="section process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="process-title fade-in">A clear path from insight to transformation</h2>
          <p className="process-subtitle fade-in" style={{ animationDelay: '100ms' }}>
            Start small. Prove value. Scale only when it makes sense.
          </p>
        </div>
        
        <div className="process-journey">
          <div className="process-card fade-in" style={{ animationDelay: '200ms' }}>
            <div className="card-tag">1 week</div>
            <h3>Review</h3>
            <p>We review your digital front door to uncover where potential customers hesitate, lose confidence, or quietly leave.</p>
          </div>
          
          <div className="process-connector fade-in" style={{ animationDelay: '250ms' }}></div>
          
          <div className="process-card highlight fade-in" style={{ animationDelay: '300ms' }}>
            <div className="card-tag">2–4 weeks</div>
            <h3>Sprint</h3>
            <p>We fix the friction quietly costing you trust, enquiries, or bookings—and deliver improvements fast.</p>
          </div>
          
          <div className="process-connector fade-in" style={{ animationDelay: '350ms' }}></div>
          
          <div className="process-card fade-in" style={{ animationDelay: '400ms' }}>
            <div className="card-tag">Project-based</div>
            <h3>Build</h3>
            <p>When bigger change is needed, we redesign and rebuild the moments that shape trust, conversion, and growth.</p>
          </div>
          
          <div className="process-connector fade-in" style={{ animationDelay: '450ms' }}></div>
          
          <div className="process-card fade-in" style={{ animationDelay: '500ms' }}>
            <div className="card-tag">Monthly</div>
            <h3>Support</h3>
            <p>Continuous refinement, insight, and digital stewardship as your business grows.</p>
          </div>
        </div>
        
        <div className="process-cta-container fade-in" style={{ animationDelay: '600ms' }}>
          <a href="mailto:contact@secondfloordigital.co.uk?subject=Front%20Door%20Review%20Request&body=Hi%20Mark%2C%0D%0A%0D%0AI%E2%80%99d%20love%20to%20request%20a%20Front%20Door%20Review%20for%20my%20business.%0D%0A%0D%0ABusiness%20name%3A%0D%0A%0D%0AWebsite%3A%0D%0A%0D%0AWhat%20feels%20like%20it%E2%80%99s%20not%20working%20online%20right%20now%3A%0D%0A%0D%0AThanks%2C" className="process-cta-link">Start with a Front Door Review &rarr;</a>
        </div>
      </div>
    </section>
  );
}
