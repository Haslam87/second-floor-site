import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Process from './components/Process';
import ReviewMockups from './components/ReviewMockups';
import SocialProof from './components/SocialProof';
import Founder from './components/Founder';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Process />
        <Problem />
        <ReviewMockups />
        <SocialProof />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
