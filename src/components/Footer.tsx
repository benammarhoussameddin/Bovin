import { Language } from '../types';
import { TRANSLATIONS, CONTACTS } from '../data';
import headerLogo from '../assets/images/technootiz_logo_header_1779551213095.png';
import { Mail, MapPin, Shield } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  return (
    <footer className="bg-[#030712] text-slate-400 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Luxurious green ambient light effect at the top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-slate-900/40">
          
          {/* Column 1: Minimalist logo and brief note */}
          <div className="md:col-span-5 space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="bg-white px-3 py-1.5 rounded-lg h-10 flex items-center justify-center shadow-lg border border-white hover:border-emerald-100 transition-colors duration-300">
                <img
                  src={headerLogo}
                  alt="TECHNOOTIZ"
                  referrerPolicy="no-referrer"
                  className="h-6 w-auto object-contain select-none"
                />
              </div>
              <span className="text-[10px] bg-emerald-950/50 text-emerald-400 font-mono font-semibold px-2 py-0.5 rounded border border-emerald-900/40 tracking-wider">
                SARL-S
              </span>
            </div>
            
            <p className={`text-xs text-slate-400 leading-relaxed max-w-sm ${isRtl ? 'text-right' : 'text-left'}`}>
              {isRtl 
                ? 'تصدير النخبة البقرية من قلب أوروبا مع المرافقة الكاملة والتراخيص والشهادات الصحية.'
                : 'Pôle d\'excellence pour la sélection et l\'export de bovins d\'élite depuis le Luxembourg.'
              }
            </p>
            
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/20 border border-emerald-900/30 text-[11px] text-emerald-400 font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{isRtl ? 'رقابة معتمدة طبقا لشروط الاتحاد الأوروبي' : 'Contrôle Sanitaire • Normes UE'}</span>
            </div>
          </div>

          {/* Column 2: Minimalist list of categories */}
          <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start text-center md:text-left md:border-l md:border-r border-slate-900/30 md:px-8">
            <h4 className={`text-[11px] font-bold text-slate-200 uppercase tracking-widest font-mono ${isRtl ? 'text-right' : 'text-left'}`}>
              {isRtl ? 'سلالاتنا الرئيسية' : 'SÉLECTIONS BOVINES'}
            </h4>
            <div className={`flex flex-col gap-2.5 w-full ${isRtl ? 'items-end' : 'items-start'}`}>
              {[
                isRtl ? 'عجلات حلوب (حوامل)' : 'Génisses Gestantes (Elite)',
                isRtl ? 'عجول تسمين ممتازة' : 'Taurillons d\'élite',
                isRtl ? 'أبقار حلوب منتجة' : 'Vaches Laitières'
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 group cursor-default text-xs text-slate-400 hover:text-slate-205 transition-colors duration-200 ${isRtl ? 'flex-row-reverse' : ''}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-all duration-300 transform group-hover:scale-125" />
                  <span className="group-hover:text-slate-300 transition-colors duration-250">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Headquarters */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className={`text-[11px] font-bold text-slate-200 uppercase tracking-widest font-mono ${isRtl ? 'text-right' : 'text-left'}`}>
              {isRtl ? 'اتصال والمقر' : 'CONTACT & SIÈGE'}
            </h4>
            <div className={`space-y-3.5 text-xs text-slate-400 w-full flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
              <div className={`flex items-start gap-2.5 ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed hover:text-slate-300 transition-colors">
                  {CONTACTS.address.street}, {CONTACTS.address.postalCode} {CONTACTS.address.city}, <strong className="text-emerald-400 font-medium">{CONTACTS.address.country}</strong>
                </span>
              </div>
              <div className={`flex items-center gap-2.5 justify-center md:justify-start ${isRtl ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a 
                  href={`mailto:${CONTACTS.gerants[0].email}`} 
                  className="font-mono text-slate-400 hover:text-emerald-400 transition-colors hover:underline tracking-wide"
                >
                  {CONTACTS.gerants[0].email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Details: Registration, Legal, Copyright */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <p className="font-mono text-slate-450 hover:text-slate-300 transition-colors">
              {t.footerLegal} • <span className="text-slate-500">{isRtl ? 'منظمة قانوناً' : 'Enregistrement de commerce'}</span>
            </p>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="text-slate-500 font-mono text-[10px]">
              {t.footerCopyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
