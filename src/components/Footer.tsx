import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import headerLogo from '../assets/images/technootiz_logo_header_1779551213095.png';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-start">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2.5 rounded-xl h-14 flex items-center justify-center shadow-lg border border-slate-850">
                <img
                  src={headerLogo}
                  alt="TECHNOOTIZ"
                  referrerPolicy="no-referrer"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <span className="text-[10px] bg-slate-900 text-slate-300 font-mono font-bold px-1.5 py-0.5 rounded border border-slate-800 tracking-wider uppercase">
                Sarl-s
              </span>
            </div>
            <div>
              <p className="text-xs text-slate-500 mt-1.5 max-w-sm">
                {t.footerDesc}
              </p>
            </div>
          </div>

          <div className="text-center md:text-end space-y-2">
            <p className="text-xs text-slate-400 font-mono">
              {t.footerLegal}
            </p>
            <p className="text-xs text-slate-500">
              {t.footerCopyright}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
