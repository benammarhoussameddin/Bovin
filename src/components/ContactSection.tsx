import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACTS } from '../data';

interface ContactSectionProps {
  lang: Language;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md uppercase tracking-widest">
            {lang === 'fr' ? 'Nous joindre' : 'قنوات تواصلنا'}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black text-slate-900 mt-4 leading-none ${isRtl ? 'font-sans' : ''}`}>
            {t.contactTitle}
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="space-y-6">

          {/* List of phone contacts */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
              {lang === 'fr' ? 'LIGNES TÉLÉPHONIQUES EN SERVICE' : 'خطوط الهاتف المفتوحة'}
            </h4>

            {CONTACTS.gerants.map((g, idx) => {
              const cleanedPhone = g.phone.replace(/\s+/g, '');
              const waLink = `https://wa.me/${g.phone.replace(/[^0-9]/g, '')}`;

              return (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/10 transition-all flex items-center justify-between gap-4"
                >
                  {/* Make the main info block a single big clickable link */}
                  <a
                    href={`tel:${cleanedPhone}`}
                    className="flex items-center gap-3 grow cursor-pointer select-none"
                    title={lang === 'fr' ? 'Appeler le numéro' : 'اتصل بالرقم'}
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                        {t[g.titleKey as keyof typeof t] || g.titleKey}
                      </p>
                      <span className="text-base sm:text-lg font-extrabold text-slate-950 group-hover:text-emerald-700 font-mono transition-colors block leading-tight">
                        {g.phone}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp click integration */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer shadow-sm hover:shadow-md transition-all shrink-0 flex items-center gap-1.5 text-xs font-bold"
                    title="WhatsApp"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Email Contact Card */}
          <a
            href="mailto:importexportbovin@technootiz.com"
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-950 hover:bg-slate-850 hover:border-emerald-500/30 transition-all flex items-center gap-3 cursor-pointer"
            title={lang === 'fr' ? 'Envoyer un e-mail' : 'إرسال بريد إلكتروني'}
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">EMAIL PROFESSIONNEL (mailto)</p>
              <span className="text-base font-extrabold font-mono text-emerald-300 group-hover:text-emerald-400 transition-colors block break-all">
                importexportbovin@technootiz.com
              </span>
            </div>
          </a>

          {/* Address Card */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs text-slate-600 leading-normal uppercase">
              <p className="font-bold text-slate-900">{t.officeLux}</p>
              <p>{CONTACTS.address.street}</p>
              <p>{CONTACTS.address.postalCode} {CONTACTS.address.city}</p>
              <p>{CONTACTS.address.country}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
