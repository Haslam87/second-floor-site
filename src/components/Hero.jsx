import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title slide-up">
            Your customers decide before they ever get in touch.
          </h1>
          <p className="hero-subtitle slide-up" style={{ animationDelay: '100ms' }}>
            We help independent clinics improve the moments that shape trust, confidence, and action online.
          </p>
          <div className="hero-actions slide-up" style={{ animationDelay: '200ms' }}>
            <button className="btn btn-primary">Request a Front Door Review</button>
            <button className="btn btn-secondary">See how it works</button>
          </div>
          <p className="hero-review-desc slide-up" style={{ animationDelay: '225ms' }}>
            A 7-day diagnostic review of your website and booking journey, delivered as a personalised insight report with clear, practical recommendations.
          </p>
          <p className="hero-note slide-up" style={{ animationDelay: '250ms' }}>
            Enterprise strategy. Independent business focus.
          </p>
        </div>
        <div className="hero-visual dropoff-journey fade-in" style={{ animationDelay: '300ms' }}>
          <div className="journey-title">The Silent Drop-Off Journey</div>
          
          <div className="journey-track">
            {/* Stage 1 */}
            <div className="journey-card stage-1">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <div className="card-content">
                <span className="card-label">Discovery</span>
                <span className="card-microcopy">A potential customer finds your business.</span>
              </div>
              <div className="card-tooltip">Found through search, referrals, or social.</div>
            </div>
            
            <div className="journey-connector"></div>
            
            {/* Stage 2 */}
            <div className="journey-card stage-2">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div className="card-content">
                <span className="card-label">First Impression</span>
                <span className="card-microcopy">They scan your website in seconds.</span>
              </div>
              <div className="card-tooltip">Mobile, messaging, and trust signals matter.</div>
            </div>
            
            <div className="journey-connector"></div>
            
            {/* Stage 3 (Hesitation) */}
            <div className="journey-card hesitation-card">
              <div className="card-icon pulse-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
              </div>
              <div className="card-content">
                <span className="card-label">Hesitation</span>
                <span className="card-microcopy">Small points of friction quietly create doubt.</span>
              </div>
              <div className="annotation-tag">Most businesses never see this moment.</div>
              <div className="card-tooltip">Unclear navigation, weak positioning, hidden friction.</div>
            </div>
            
            <div className="journey-branches">
              <div className="branch-left">
                <div className="branch-connector"></div>
                <div className="journey-card success-card">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div className="card-content">
                    <span className="card-label">Action</span>
                    <span className="card-microcopy">Trust is built. Action follows.</span>
                  </div>
                  <div className="card-tooltip">Trust drives action.</div>
                </div>
              </div>
              
              <div className="branch-right">
                <div className="branch-connector"></div>
                <div className="journey-card dropoff-card">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                  </div>
                  <div className="card-content">
                    <span className="card-label">Lost Opportunity</span>
                    <span className="card-microcopy">Potential customers quietly move on.</span>
                  </div>
                  <div className="card-tooltip">Lost opportunity.</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
