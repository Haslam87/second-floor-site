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
        <a href="mailto:contact@secondfloordigital.co.uk?subject=Front%20Door%20Review%20Request&body=Hi%20Mark%2C%0D%0A%0D%0AI%E2%80%99d%20love%20to%20request%20a%20Front%20Door%20Review%20for%20my%20business.%0D%0A%0D%0ABusiness%20name%3A%0D%0A%0D%0AWebsite%3A%0D%0A%0D%0AWhat%20feels%20like%20it%E2%80%99s%20not%20working%20online%20right%20now%3A%0D%0A%0D%0AThanks%2C" className="btn btn-primary cta-btn">Request Your Review</a>
      </div>
    </section>
  );
}
