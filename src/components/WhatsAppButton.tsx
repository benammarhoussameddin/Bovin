import { motion } from 'motion/react';
import { Language } from '../types';

interface WhatsAppButtonProps {
  lang: Language;
}

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const isRtl = lang === 'ar';
  
  // Custom message encoded perfectly
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je vous contacte depuis le site TechnOptiz. Je souhaite obtenir plus d’informations sur vos services."
  );
  const whatsappUrl = `https://wa.me/352691320929?text=${whatsappMessage}`;

  const tooltipText = isRtl ? 'تواصل معنا عبر واتساب' : 'Discutez avec nous';

  return (
    <div 
      id="whatsapp-floating-container"
      className={`fixed bottom-8 sm:bottom-6 z-50 flex items-center gap-3 select-none ${
        isRtl ? 'left-3 sm:left-6 flex-row-reverse' : 'right-3 sm:right-6 flex-row'
      }`}
    >
      {/* Tooltip Label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: isRtl ? 10 : -10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="hidden sm:flex bg-slate-900/90 text-white text-xs font-medium px-3.5 py-2 rounded-full shadow-lg border border-slate-800 backdrop-blur-sm items-center gap-1.5"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>{tooltipText}</span>
      </motion.div>

      {/* Pulsing Backglow Ring */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/25 blur-[4px] animate-ping pointer-events-none scale-110" />

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 15,
        }}
        className="relative flex items-center justify-center w-[46px] h-[46px] sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-400 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
      >
        {/* High Quality WhatsApp Vector Icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-[23px] h-[23px] sm:w-7 sm:h-7 fill-current drop-shadow-sm" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.092-2.868-6.945-1.851-1.852-4.312-2.871-6.937-2.872-5.444 0-9.869 4.413-9.873 9.832-.001 1.768.464 3.494 1.346 5.03L1.936 21.03l4.711-1.876zm12.355-6.52c-.31-.156-1.834-.905-2.115-1.008-.28-.101-.485-.156-.69.156-.202.311-.787 1.008-.966 1.21-.177.202-.355.228-.665.072-1.353-.679-2.29-1.246-3.14-2.71-.225-.387.225-.359.645-1.2.068-.14.034-.26-.017-.364-.051-.104-.485-1.171-.665-1.604-.175-.424-.37-.365-.507-.373-.13-.006-.28-.008-.43-.008-.15 0-.395.056-.603.284-.207.228-.79.771-.79 1.881 0 1.11.807 2.183.918 2.336.111.152 1.588 2.426 3.847 3.399.537.23 1.015.383 1.36.493.54.172 1.03.147 1.417.09.43-.063 1.332-.544 1.518-1.069.185-.525.185-.975.13-1.069-.056-.094-.207-.152-.518-.308z"/>
        </svg>
      </motion.a>
    </div>
  );
}
