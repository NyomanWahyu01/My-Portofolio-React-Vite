import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Design from './components/Design';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />
      
      <main className="container mx-auto px-5 md:px-8">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Tools />
        <Design />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
