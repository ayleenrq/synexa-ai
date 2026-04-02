import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import SecondaryFeatures from './components/SecondaryFeatures';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import AIDemo from './components/AIDemo';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <SecondaryFeatures />
      <HowItWorks />
      <Pricing />
      <AIDemo />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
