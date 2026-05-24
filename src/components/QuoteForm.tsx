import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, CircleCheck, ClipboardList, Loader2, MailCheck } from 'lucide-react';
import { Language, QuoteRequest } from '../types';
import { TRANSLATIONS, BOVINE_TYPES } from '../data';

interface QuoteFormProps {
  lang: Language;
}

export default function QuoteForm({ lang }: QuoteFormProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const [form, setForm] = useState<Partial<QuoteRequest>>({
    bovineType: 'genisses',
    quantity: 30,
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const randomTicket = 'TQ-' + Math.floor(100000 + Math.random() * 900000);

    try {
      // Send real email via Express backend API proxy secure route
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
          quantity: Math.max(1, form.quantity || 1),
          bovineType: form.bovineType,
          notes: form.notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur de communication avec le serveur principal.');
      }

      const result = await response.json();

      // Save locally to local history
      const existing = localStorage.getItem('technootiz_quotes');
      const list = existing ? JSON.parse(existing) : [];
      list.push({ ...form, id: randomTicket, date: new Date().toISOString() });
      localStorage.setItem('technootiz_quotes', JSON.stringify(list));

      setTicketNumber(randomTicket);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting form', err);
      setSubmitError(
        lang === 'fr' 
          ? "Un problème est survenu lors de l'envoi. Veuillez réessayer ou contacter un gérant." 
          : "حدث خطأ أثناء الإرسال. يرجى المحاولة مجدداً أو الاتصال بمسيرينا مباشرة."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      bovineType: 'genisses',
      quantity: 30,
      fullName: '',
      phone: '',
      email: '',
      notes: '',
    });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-b border-slate-100" id="devis">
      <div className="max-w-xl mx-auto px-4">
        
        {/* Simple Header */}
        <div className="text-center mb-8">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-2xs">
            <FileText className="w-5 h-5" />
          </div>
          <h2 className={`text-2xl font-black text-slate-900 ${isRtl ? 'font-sans' : ''}`}>
            {t.devisTitle}
          </h2>
          <p className="text-slate-500 text-xs mt-1 leading-relaxed">
            {lang === 'fr' 
              ? 'Remplissez ces quelques informations pour obtenir un devis rapide.' 
              : 'يرجى إدخال معلومات بسيطة للحصول على عرض أسعار سريع من مسيرينا.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden p-6 sm:p-8">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="simple-quote-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Full name input */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'fr' ? 'Nom complet / Entreprise' : 'الاسم الكامل / الشركة'} <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder={lang === 'fr' ? 'Saisissez votre nom ou entreprise' : 'أدخل الاسم أو اسم كيان الشركة'}
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-600 outline-none transition-all text-sm font-medium"
                  />
                </div>

                {/* Phone input */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.labelPhone} <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+352 XX XX XX XX"
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-600 outline-none transition-all text-sm font-medium"
                  />
                </div>

                {/* Email input - required to send confirmation email */}
                <div>
                  <label className="block text-[11px] font-bold text-[11px] text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'fr' ? 'Adresse E-mail (Recommandée)' : 'البريد الإلكتروني (مستحسن للتأكيد)'}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-600 outline-none transition-all text-sm font-medium"
                  />
                </div>

                {/* Quantity input with custom design */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'fr' ? 'Quantité (Nombre de têtes)' : 'الكمية المطلوبة'} <span className="text-emerald-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setForm(f => ({ ...f, quantity: Math.max(1, (f.quantity || 1) - 10) }))}
                      className="w-12 h-11 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 border-r-0 rounded-l-xl flex items-center justify-center font-bold text-xs select-none cursor-pointer transition-colors active:bg-slate-300"
                      title="-10"
                    >
                      -10
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm(f => ({ ...f, quantity: Math.max(1, (f.quantity || 1) - 1) }))}
                      className="w-10 h-11 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 border-r-0 flex items-center justify-center font-semibold text-xs select-none cursor-pointer transition-colors active:bg-slate-200"
                      title="-1"
                    >
                      -1
                    </button>
                    <input
                      type="number"
                      min="1"
                      required
                      value={form.quantity || ''}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setForm({ ...form, quantity: isNaN(val) ? undefined : Math.max(1, val) });
                      }}
                      onBlur={() => {
                        if (!form.quantity || form.quantity < 1) {
                          setForm({ ...form, quantity: 1 });
                        }
                      }}
                      className="w-full h-11 px-3 bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white text-center font-bold focus:outline-none transition-all text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      type="button"
                      onClick={() => setForm(f => ({ ...f, quantity: (f.quantity || 1) + 1 }))}
                      className="w-10 h-11 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 border-l-0 flex items-center justify-center font-semibold text-xs select-none cursor-pointer transition-colors active:bg-slate-200"
                      title="+1"
                    >
                      +1
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm(f => ({ ...f, quantity: (f.quantity || 1) + 10 }))}
                      className="w-12 h-11 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 border-l-0 rounded-r-xl flex items-center justify-center font-bold text-xs select-none cursor-pointer transition-colors active:bg-slate-300"
                      title="+10"
                    >
                      +10
                    </button>
                  </div>
                </div>

                {/* Simple note area */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'fr' ? 'Précisions supplémentaires' : 'ملاحظات إضافية'}
                  </label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder={lang === 'fr' ? 'Ex: Destination, race spécifique, date...' : 'مثال: مكان التوصيل، تاريخ الوصول المفضل، الخ...'}
                    className="w-full p-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-600 outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>

                {submitError && (
                  <div className="p-3 bg-red-50 text-red-800 border border-red-150 rounded-xl text-xs font-semibold text-center">
                    {submitError}
                  </div>
                )}

                {/* Submit button with loading feedback */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-emerald-600 hover:bg-emerald-55 text-white font-bold rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 group text-sm mt-2 disabled:bg-emerald-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>{lang === 'fr' ? "Envoi du devis..." : "جاري الإرسال..."}</span>
                    </>
                  ) : (
                    <>
                      <ClipboardList className="w-4 h-4" />
                      <span>{t.btnSubmitQuote}</span>
                    </>
                  )}
                </button>

              </motion.form>
            ) : (
              <motion.div
                key="success-receipt"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                  <CircleCheck className="w-8 h-8" />
                </div>

                {/* Banner alert notification for delivery confirmation */}
                <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-100/70 rounded-xl text-xs font-semibold text-center max-w-sm mx-auto flex items-center gap-3">
                  <MailCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="text-left leading-normal">
                    {lang === 'fr' 
                      ? "Félicitations ! Votre demande a été reçue. Un e-mail de confirmation et de suivi a été généré avec succès !" 
                      : "تهانينا! تم استلام طلبكم بنجاح وتم إرسال رسالة تأكيد ومتابعة لبريدكم الإلكتروني!"}
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    {lang === 'fr' ? 'Demande reçue !' : 'تم استلام طلبكم !'}
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    {lang === 'fr' 
                      ? "Nous vous contacterons par téléphone ou e-mail dans les plus brefs délais pour affiner votre besoin." 
                      : "سنتواصل معكم هاتفياً أو عبر البريد الإلكتروني في أقرب وقت ممكن لتأكيد التفاصيل."}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 text-left space-y-2 font-mono text-xs max-w-xs mx-auto">
                  <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-2 mb-2">
                    <span className="text-slate-400">TICKET</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {ticketNumber}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{lang === 'fr' ? 'Nom :' : 'الاسم :'}</span>
                    <strong className="text-slate-900 max-w-[150px] truncate text-right">{form.fullName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{lang === 'fr' ? 'Têtes :' : 'الكمية :'}</span>
                    <strong className="text-slate-900">{form.quantity}</strong>
                  </div>
                  {form.email && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Email :</span>
                      <strong className="text-slate-900 max-w-[150px] truncate text-right">{form.email}</strong>
                    </div>
                  )}
                </div>

                <button
                  onClick={resetForm}
                  className="px-5 py-2 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  {lang === 'fr' ? 'Nouvelle Demande' : 'طلب جديد'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
