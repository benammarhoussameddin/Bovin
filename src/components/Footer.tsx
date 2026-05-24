import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import headerLogo from '../assets/images/technootiz_logo_header_1779551213095.png';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  return (
    <footer className="bg-[#030712] text-slate-400 py-14 sm:py-16 border-t border-slate-900/60 relative overflow-hidden">
      {/* Luxurious green ambient light effect at the top */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Primary Block: Logo & Description */}
          <div className={`space-y-3.5 max-w-lg flex flex-col items-center ${isRtl ? 'md:items-end' : 'md:items-start'}`}>
            <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="bg-white px-2 py-1 rounded-md h-8 flex items-center justify-center shadow-md border border-white hover:border-emerald-100/55 transition-colors duration-300">
                <img
                  src={headerLogo}
                  alt="TECHNOOTIZ"
                  referrerPolicy="no-referrer"
                  className="h-4.5 w-auto object-contain select-none"
                />
              </div>
              <span className="text-[10px] bg-emerald-950/45 text-emerald-400 font-mono font-medium px-2 py-0.5 rounded border border-emerald-900/25 tracking-wider">
                SARL-S
              </span>
            </div>
            
            <p className={`text-xs text-slate-400 leading-relaxed max-w-sm ${isRtl ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
              {isRtl 
                ? 'تصدير النخبة البقرية من قلب أوروبا مع المرافقة الكاملة والشهادات الصحية.'
                : 'Pôle d\'excellence pour la sélection et l\'export de bovins d\'élite depuis le Luxembourg.'
              }
            </p>
          </div>

          {/* Secondary Block: Copyright */}
          <div className={`flex flex-col items-center ${isRtl ? 'md:items-start' : 'md:items-end'}`}>
            <div className={`text-center ${isRtl ? 'md:text-left' : 'md:text-right'}`}>
              <p className="text-slate-500 font-mono text-[11px] select-none hover:text-slate-400 transition-colors duration-300">
                {t.footerCopyright}
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
