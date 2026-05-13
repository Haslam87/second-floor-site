import React from 'react';
import './Founder.css';

export default function Founder() {
  return (
    <section id="about" className="section founder-section">
      <div className="container founder-container">
        <div className="founder-visual slide-up">
          <img src="/Mark.jpg" alt="Mark Haslam, Founder of Second Floor Digital" className="founder-portrait" />
        </div>
        <div className="founder-content fade-in">
          <h2>After years helping organisations solve complex business problems, Mark created Second Floor to help independent businesses compete where first impressions matter most.</h2>
          <p>Not just better websites.<br /><strong>Better digital experiences.</strong></p>
          <div className="founder-signature">
            <strong>Mark Haslam</strong>
            <span>Founder, Second Floor Digital</span>
          </div>
        </div>
      </div>
    </section>
  );
}
