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
          <a href="#contact" className="process-cta-link">Start with a Front Door Review &rarr;</a>
        </div>
      </div>
    </section>
  );
}
