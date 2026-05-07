import React from 'react';
import './SocialProof.css';

export default function SocialProof() {
  return (
    <section id="reviews" className="section social-proof-section">
      <div className="container">
        <h2 className="social-proof-title">Trusted by independent businesses who care about customer experience.</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card fade-in" style={{ animationDelay: '100ms' }}>
            <p className="testimonial-text">"The first thing I realised was that I hadn’t even considered reviewing our brand, marketing, and digital presence as one connected experience.</p>
            <p className="testimonial-text">All the points raised made perfect sense. In situations like this, it’s easy to feel lost and not fully understand where improvements need to be made. The review showed exactly where those opportunities were. I was genuinely impressed.”</p>
            <div className="testimonial-author">
              <div className="author-avatar placeholder"></div>
              <div className="author-info">
                <strong>Martin</strong>
                <span>Co-Founder, Muse Hair and Beauty, Broadway</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
