import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ClipboardList, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import headerLogo from '../assets/images/technootiz_logo_header_1779551213095.png';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div className="flex items-center gap-0.5 h-16">
            <img
              src={headerLogo}
              alt="TECHNOOTIZ"
              referrerPolicy="no-referrer"
              className="h-12 sm:h-15 w-auto object-contain"
            />
            <span className="text-[10px] bg-slate-100 text-slate-500 font-mono font-bold px-1.5 py-0.5 rounded ml-0 tracking-wider uppercase">
              Sarl-s
            </span>
          </div>

          {/* Desktop Navigation - Center Links Removed for simplified premium look */}
          <div className="hidden md:flex items-center" />

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* CTA Button is now Demande de Devis styled like the original Contact button */}
            <a
              href="#devis"
              onClick={(e) => handleScroll(e, '#devis')}
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
            >
              <ClipboardList className="w-4 h-4 text-emerald-400" />
              <span>{t.ctaEstimate}</span>
            </a>
            {/* Companion Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="flex items-center gap-2 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-xs cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-550" />
              <span>{lang === 'fr' ? 'Contact' : 'اتصل بنا'}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gray-100 bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 block text-center">
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="#devis"
                  onClick={(e) => handleScroll(e, '#devis')}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 shadow-xs cursor-pointer"
                >
                  <ClipboardList className="w-4 h-4 text-emerald-400" />
                  <span>{t.ctaEstimate}</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 border border-slate-200 bg-white text-slate-700 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 shadow-xs cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-555" />
                  <span>{lang === 'fr' ? 'Contact' : 'اتصل بنا'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
