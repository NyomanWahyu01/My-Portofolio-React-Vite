import React from 'react';
import Navbar from './components/Navbar';
import { useT } from './i18n/LanguageProvider';

export default function App() {
  const { t } = useT();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />
      
      <main className="container mx-auto px-5 md:px-8">
        {/* Sections will be implemented here */}
        <section id="hero" className="py-20 md:py-32">
          {/* Hero placeholder */}
          <h1 className="font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.95] uppercase">
            {t("hero.title")}
          </h1>
        </section>
      </main>

      <footer className="mt-20 border-t-[3px] border-[var(--border)] py-10 text-center">
        <p className="font-display text-8xl uppercase tracking-wider opacity-10">NYOMAN</p>
      </footer>
    </div>
  );
}
