import React from 'react';
import './CTA.css';

export default function CTA() {
  return (
    <section id="contact" className="section cta-section">
      <div className="container cta-container fade-in">
        <h2 className="cta-title">Start with clarity.</h2>
        <p className="cta-body">
          Our Front Door Review gives you an independent perspective on how your customers experience your business online—and where small changes could make a meaningful difference.
        </p>
        <button className="btn btn-primary cta-btn">Request Your Review</button>
      </div>
    </section>
  );
}
