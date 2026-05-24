import { useState, useEffect } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteForm from './components/QuoteForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');

  useEffect(() => {
    // Dynamic RTL handling on document body/html wrapper
    const rootEl = document.documentElement;
    if (lang === 'ar') {
      rootEl.setAttribute('dir', 'rtl');
      rootEl.setAttribute('lang', 'ar');
    } else {
      rootEl.setAttribute('dir', 'ltr');
      rootEl.setAttribute('lang', 'fr');
    }
  }, [lang]);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-white ${
      lang === 'ar' ? 'text-right' : 'text-left'
    }`}>
      {/* Dynamic Header with language setter */}
      <Header lang={lang} setLang={setLang} />

      {/* Main Sections */}
      <main className="grow">
        <Hero lang={lang} />
        <QuoteForm lang={lang} />
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
