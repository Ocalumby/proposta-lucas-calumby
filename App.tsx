import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Methodology from './components/Methodology';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Methodology />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;