import { motion } from 'motion/react';
import { FileCheck, Phone, ShieldCheck, Award } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import cowLogo from '../assets/images/cow_leaf_logo_1779560881243.png';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Localized badge text for elite genetics & veterinary standard
  const badgeLeftTitle = isRtl ? 'فحص بيطري معتمد' : 'Contrôle Vétérinaire';
  const badgeLeftSubtitle = isRtl ? 'رقابة بيطرية صارمة %100' : '100% Certifié UE';

  const badgeRightTitle = isRtl ? 'سلالات ممتازة' : 'Génétique Supérieure';
  const badgeRightSubtitle = isRtl ? 'أصل جيني مميز نقي' : 'Races d\'Élite Sélectionnées';

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative premium tech-mesh background */}
      <div 
        id="hero-grid-pattern"
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" 
      />
      
      {/* Elegant glowing background bubbles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-100/35 via-emerald-200/20 to-teal-100/30 rounded-full blur-3xl pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Active International Trade Route Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200/55 border border-slate-200 text-slate-800 text-xs font-bold leading-none backdrop-blur-md shadow-xs mb-8 transition-colors select-none"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono tracking-wide uppercase">
              {isRtl ? 'استيراد وتصدير سلالات النخبة المعتمدة' : 'IMPORT-EXPORT • SÉLECTION BOVINE DE HAUTE GÉNÉTIQUE'}
            </span>
          </motion.div>

          {/* Title - Showing subtitle as the main elegant title with zero redundancy */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-900 bg-clip-text text-transparent tracking-tight leading-normal mb-8 ${
              isRtl ? 'font-sans' : ''
            }`}
          >
            {t.heroSubtitle}
          </motion.h1>

          {/* THE COW LOGO - Center of hero section with double concentric rotating orbit borders and badge anchors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.15 }}
            className="relative mb-12 group select-none flex items-center justify-center"
          >
            {/* Ambient glowing border bloom */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-100/30 via-emerald-200/40 to-teal-100/30 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Outer dotted orbit */}
            <div className="absolute -inset-4 border border-dashed border-slate-200 rounded-full scale-100 group-hover:scale-105 group-hover:border-emerald-200/40 transition-all duration-[1200ms] ease-out pointer-events-none" />

            {/* Inner rotating frame wrapper with premium comfortable padding */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center bg-white shadow-xl shadow-emerald-900/5 border border-slate-100/80 p-5 sm:p-6 md:p-7 transition-all duration-500 group-hover:shadow-emerald-900/10">
              
              {/* Concentric styling inside */}
              <div className="absolute inset-1 border border-slate-100 rounded-full pointer-events-none" />
              <div className="absolute inset-2 border border-dashed border-emerald-550/10 rounded-full group-hover:rotate-12 transition-all duration-1000 pointer-events-none" />

              <img
                src={cowLogo}
                alt="Logo Bovins TECHNOOTIZ"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain relative z-10 transform group-hover:scale-104 transition-transform duration-500"
              />
            </div>

            {/* Floating Badge Left */}
            <div className={`absolute -left-12 sm:-left-16 md:-left-24 lg:-left-36 xl:-left-44 top-8 hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all delay-75 duration-300 transform hover:-translate-y-1 whitespace-nowrap select-none ${
              isRtl ? 'flex-row-reverse text-right' : 'text-left'
            }`}>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-[100px]">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  {isRtl ? 'الرقابة الأوروبية' : 'Normes Vet'}
                </div>
                <div className="text-xs font-black text-slate-800">
                  {badgeLeftTitle}
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {badgeLeftSubtitle}
                </div>
              </div>
            </div>

            {/* Floating Badge Right */}
            <div className={`absolute -right-12 sm:-right-16 md:-right-24 lg:-right-36 xl:-right-44 bottom-8 hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all delay-75 duration-300 transform hover:-translate-y-1 whitespace-nowrap select-none ${
              isRtl ? 'flex-row-reverse text-right' : 'text-left'
            }`}>
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-[100px]">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  {isRtl ? 'السلالة والأصل' : 'Sélection Élite'}
                </div>
                <div className="text-xs font-black text-slate-800">
                  {badgeRightTitle}
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {badgeRightSubtitle}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`text-base sm:text-lg text-slate-600 max-w-3xl mb-12 leading-relaxed ${
              isRtl ? 'font-sans' : ''
            }`}
          >
            {t.heroTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 ${
              isRtl ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <button
              onClick={() => handleScrollTo('#devis')}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold rounded-xl shadow-md shadow-emerald-600/10 cursor-pointer flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-0.5"
            >
              <FileCheck className="w-5 h-5 text-emerald-200" />
              <span>{t.ctaEstimate}</span>
            </button>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-8 py-3.5 bg-slate-950 hover:bg-slate-800 active:bg-slate-900 text-white font-semibold rounded-xl border border-slate-800 cursor-pointer flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{t.ctaContact}</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

