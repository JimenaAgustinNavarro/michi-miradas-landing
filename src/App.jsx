import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-michi-cream flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Process />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
