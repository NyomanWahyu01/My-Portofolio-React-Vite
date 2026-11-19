import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />
      
      <main className="container mx-auto px-5 md:px-8">
        <Hero />
        <About />
        <Projects />
      </main>

      <footer className="mt-20 border-t-[3px] border-[var(--border)] py-10 text-center">
        <p className="font-display text-8xl uppercase tracking-wider opacity-10">NYOMAN</p>
      </footer>
    </div>
  );
}
