import React from 'react';
import './SocialProof.css';

export default function SocialProof() {
  return (
    <section id="reviews" className="section social-proof-section">
      <div className="container">
        <h2 className="social-proof-title">Trusted by independent businesses who care about customer experience.</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card fade-in" style={{ animationDelay: '100ms' }}>
            <p className="testimonial-text">"Second Floor completely changed how we think about our website. It's no longer just an online brochure, but a primary driver of our high-value bookings."</p>
            <div className="testimonial-author">
              <div className="author-avatar placeholder"></div>
              <div className="author-info">
                <strong>Dr. Sarah Jenkins</strong>
                <span>Clinical Director, Aesthetics</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card fade-in" style={{ animationDelay: '200ms' }}>
            <p className="testimonial-text">"The review showed us issues we’d completely overlooked. Within weeks, enquiries felt noticeably stronger."</p>
            <div className="testimonial-author">
              <div className="author-avatar placeholder"></div>
              <div className="author-info">
                <strong>James Carter</strong>
                <span>Managing Partner, Vet Practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
