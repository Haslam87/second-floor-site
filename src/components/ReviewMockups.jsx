import React from 'react';
import './ReviewMockups.css';

export default function ReviewMockups() {
  return (
    <section className="section mockups-section">
      <div className="container">
        <div className="mockups-header fade-in">
          <h2 className="mockups-title">Inside the Front Door Review</h2>
        </div>
        
        <div className="mockups-grid">
          {/* Device 1 */}
          <div className="mockup-item fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="mockup-caption">First Impression Analysis</h3>
            <div className="mockup-frame mobile">
              <div className="mockup-screen">
                <div className="clinic-nav">
                  <div className="clinic-logo"></div>
                  <div className="clinic-menu"></div>
                </div>
                <div className="clinic-hero">
                  <div className="clinic-image-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  </div>
                  <div className="clinic-h1"></div>
                  <div className="clinic-p"></div>
                  <div className="clinic-p short"></div>
                  <div className="clinic-btn"></div>
                </div>
                <div className="clinic-trust">
                  <div className="trust-stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div className="trust-text"></div>
                </div>
              </div>
              
              {/* Annotations */}
              <div className="diagnostic-callout" style={{ top: '25%', right: '40%' }}>
                <span className="text">Messaging lacks clarity</span>
                <span className="line" style={{ width: '40px' }}></span>
                <span className="dot amber"></span>
              </div>
              <div className="diagnostic-callout" style={{ top: '48%', left: '40%' }}>
                <span className="dot amber"></span>
                <span className="line" style={{ width: '50px' }}></span>
                <span className="text">CTA easy to miss</span>
              </div>
              <div className="diagnostic-callout" style={{ top: '70%', right: '40%' }}>
                <span className="text">Trust signals buried</span>
                <span className="line" style={{ width: '40px' }}></span>
                <span className="dot amber"></span>
              </div>
            </div>
          </div>
          
          {/* Continuity Marker */}
          <div className="journey-continuity fade-in" style={{ animationDelay: '200ms' }}>
            <span>First impression &rarr; Decision</span>
          </div>
          
          {/* Device 2 */}
          <div className="mockup-item fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="mockup-caption">Booking Journey Analysis</h3>
            <div className="mockup-frame mobile">
              <div className="mockup-screen">
                <div className="booking-header">Book Appointment</div>
                <div className="booking-progress">
                  <div className="progress-step active"></div>
                  <div className="progress-step"></div>
                  <div className="progress-step"></div>
                </div>
                <div className="booking-body">
                  <div className="booking-label">Select Treatment</div>
                  <div className="booking-field dropdown"></div>
                  <div className="booking-label">Your Details</div>
                  <div className="booking-field"></div>
                  <div className="booking-calendar"></div>
                  <div className="booking-btn"></div>
                </div>
              </div>
              
              {/* Annotations */}
              <div className="diagnostic-callout" style={{ top: '25%', left: '40%' }}>
                <span className="dot red"></span>
                <span className="line" style={{ width: '60px' }}></span>
                <span className="text">Too many steps</span>
              </div>
              <div className="diagnostic-callout" style={{ top: '65%', left: '40%' }}>
                <span className="dot amber"></span>
                <span className="line" style={{ width: '40px' }}></span>
                <span className="text">Hidden reassurance</span>
              </div>
              <div className="diagnostic-callout" style={{ top: '82%', left: '40%' }}>
                <span className="dot amber"></span>
                <span className="line" style={{ width: '50px' }}></span>
                <span className="text">Drop-off risk here</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mockups-conversion-container fade-in" style={{ animationDelay: '400ms' }}>
          <p className="mockups-conversion-text">
            Every Front Door Review highlights the moments where trust, clarity, and conversion quietly break down.
          </p>
          <a href="#contact" className="mockups-cta-link">Request your review &rarr;</a>
        </div>
      </div>
    </section>
  );
}
