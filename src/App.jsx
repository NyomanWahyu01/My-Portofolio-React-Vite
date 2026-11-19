import React from 'react';
import Navbar from './components/Navbar';
import PreLoader from './components/PreLoader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Design from './components/Design';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useT } from './i18n/LanguageProvider';

export default function App() {
  const { t } = useT();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <PreLoader />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-[10px] focus:border-[3px] focus:border-[var(--border)] focus:bg-card-alt focus:px-4 focus:py-2 focus:font-sans focus:font-bold focus:text-on-card"
      >
        {t("a11y.skip")}
      </a>
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
