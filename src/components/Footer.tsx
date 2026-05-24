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
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-10 border-t border-slate-900 relative">
      {/* Premium green ambient light effect at the top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900/65">
          
          {/* Column 1: Minimalist logo and brief note */}
          <div className="md:col-span-5 space-y-4">
            <div className={`flex items-center gap-2.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="bg-white px-2 py-1 rounded-lg h-10 flex items-center justify-center shadow-md">
                <img
                  src={headerLogo}
                  alt="TECHNOOTIZ"
                  referrerPolicy="no-referrer"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="text-[9px] bg-emerald-950 text-emerald-450 font-mono font-black px-1.5 py-0.5 rounded border border-emerald-900/50">
                SARL-S
              </span>
            </div>
            
            <p className={`text-xs text-slate-400 leading-relaxed max-w-sm ${isRtl ? 'text-right' : 'text-left'}`}>
              {isRtl 
                ? 'تصدير النخبة البقرية من قلب أوروبا مع المرافقة الكاملة والتراخيص والشهادات الصحية.'
                : 'Pôle d\'excellence pour la sélection et l\'export de bovins d\'élite depuis le Luxembourg.'
              }
            </p>
            
            <div className={`flex items-center gap-2 text-[11px] text-emerald-555 font-semibold ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
              <Shield className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{isRtl ? 'رقابة معتمدة طبقا لشروط الاتحاد الأوروبي' : 'Contrôle Sanitaire Strict Normes UE'}</span>
            </div>
          </div>

          {/* Column 2: Minimalist list of categories (reduced writing/text) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className={`text-[10px] font-bold text-slate-300 uppercase tracking-widest font-mono ${isRtl ? 'text-right' : 'text-left'}`}>
              {isRtl ? 'سلالاتنا الرئيسية' : 'NOS CATÉGORIES'}
            </h4>
            <div className={`flex flex-wrap gap-2 text-xs ${isRtl ? 'justify-end' : 'justify-start'}`}>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                {isRtl ? 'عجلات حلوب (حوامل)' : 'Génisses Gestantes'}
              </span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                {isRtl ? 'عجول تسمين ممتازة' : 'Taurillons d\'élite'}
              </span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                {isRtl ? 'أبقار حلوب منتجة' : 'Vaches Laitières'}
              </span>
            </div>
          </div>

          {/* Column 3: Headquarters Address */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className={`text-[10px] font-bold text-slate-300 uppercase tracking-widest font-mono ${isRtl ? 'text-right' : 'text-left'}`}>
              {isRtl ? 'الاتصال والمقر' : 'CONTACT & SIÈGE'}
            </h4>
            <div className={`space-y-3 text-xs text-slate-400 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-start gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-normal">
                  {CONTACTS.address.street}, {CONTACTS.address.postalCode} {CONTACTS.address.city}, <strong className="text-slate-300">{CONTACTS.address.country}</strong>
                </span>
              </div>
              <div className={`flex items-center gap-2 justify-start ${isRtl ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a 
                  href={`mailto:${CONTACTS.gerants[0].email}`} 
                  className="hover:text-emerald-400 transition-colors font-mono hover:underline"
                >
                  {CONTACTS.gerants[0].email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Details: Registration, Legal, Copyright with reduced texts */}
        <div className={`pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <p className="font-mono text-slate-400">
              {t.footerLegal} • {isRtl ? 'منظمة قانوناً' : 'Enregistrement de commerce'}
            </p>
          </div>
          
          <div className="text-center md:text-end">
            <p className="text-slate-500 font-mono text-[10px]">
              {t.footerCopyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
