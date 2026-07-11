import React, { useState, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import { Language } from '../types';

// Importing generated images (using their unique timestamp names as saved in the filesystem)
import imgReal1 from '../assets/images/real_cow_calf_1783639398073.jpg';
import imgReal2 from '../assets/images/real_beef_group_1783639414314.jpg';
import imgPregnant from '../assets/images/pregnant_cow_1783639429319.jpg';
import imgYoungCalves from '../assets/images/young_calves_1783639445517.jpg';
import imgCowEating from '../assets/images/cow_eating_1783639459919.jpg';
import imgModernFarm from '../assets/images/modern_farm_1783639476521.jpg';
import imgCattleFacility from '../assets/images/cattle_facility_1783698107161.jpg';
import imgBovineHero from '../assets/images/bovine_hero_photo_new_1779553263106.png';
import imgCowBlackBg from '../assets/images/cow_black_bg_1779554871492.png';

interface GallerySectionProps {
  lang: Language;
}

type CategoryType = 'all' | 'real' | 'pregnant' | 'young' | 'nutrition' | 'farm';

interface GalleryItem {
  id: number;
  categories: CategoryType[];
  images: string[];
  isReal: boolean;
  badgeFr: string;
  badgeAr: string;
  fr: {
    title: string;
    subtitle: string;
    desc: string;
    specs: Record<string, string>;
  };
  ar: {
    title: string;
    subtitle: string;
    desc: string;
    specs: Record<string, string>;
  };
}

// Subcomponent for each Card containing its own image carousel
interface GalleryCardProps {
  item: GalleryItem;
  isRtl: boolean;
  onOpenLightbox: (slideIndex: number) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, isRtl, onOpenLightbox }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const text = isRtl ? item.ar : item.fr;

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % item.images.length);
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const handleDotClick = (e: MouseEvent, index: number) => {
    e.stopPropagation();
    setActiveSlide(index);
  };

  // Swiping support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      setActiveSlide((prev) => (prev + 1) % item.images.length);
      setTouchStart(null);
    } else if (diff < -50) {
      setActiveSlide((prev) => (prev - 1 + item.images.length) % item.images.length);
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <div
      onClick={() => onOpenLightbox(activeSlide)}
      className="group relative bg-slate-850 rounded-2xl overflow-hidden border border-slate-800 shadow-xl cursor-pointer hover:border-slate-750 transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Carousel Container with precise aspect ratio */}
      <div 
        className="relative aspect-video sm:aspect-[4/3] w-full overflow-hidden bg-slate-900 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide}
            src={item.images[activeSlide]}
            alt={`${text.title} - Slide ${activeSlide + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-all duration-300">
            <Eye className="w-5 h-5" />
          </div>
        </div>

        {/* Left/Right Navigation inside image block */}
        <button
          onClick={handlePrev}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center border border-slate-800 transition-colors opacity-0 group-hover:opacity-100 sm:transition-opacity focus:opacity-100 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center border border-slate-800 transition-colors opacity-0 group-hover:opacity-100 sm:transition-opacity focus:opacity-100 active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Small pagination dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 bg-slate-950/50 px-2 py-1 rounded-full backdrop-blur-xs">
          {item.images.map((_, idx) => (
            <span
              key={idx}
              onClick={(e) => handleDotClick(e, idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeSlide ? 'bg-emerald-400 w-3' : 'bg-slate-500 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Category Badge - Adaptive Content */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/90 text-emerald-400 text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-xs border border-slate-700/40">
          {isRtl ? item.badgeAr : item.badgeFr}
        </span>
      </div>

      {/* Details Card Content */}
      <div className="p-4 sm:p-5">
        {text.subtitle && (
          <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
            {text.subtitle}
          </span>
        )}
        <h3 className={`text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors ${isRtl ? 'font-sans' : ''}`}>
          {text.title}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
          {text.desc}
        </p>

        {/* Mini Spec Indicator */}
        <div className={`mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono ${isRtl ? 'flex-row-reverse' : ''}`}>
          <span>
            {isRtl ? 'عرض التفاصيل' : 'En savoir plus'}
          </span>
          <span className="text-emerald-500 font-bold">→</span>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const isRtl = lang === 'ar';
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);

  const handleScrollToQuote = () => {
    const el = document.getElementById('devis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Gallery Data translated elegantly
  const galleryItems: GalleryItem[] = [
    // --- CATEGORY 1: NOS BOVINS (3 photos inside carousel) ---
    {
      id: 1,
      categories: ['real' as CategoryType, 'young' as CategoryType, 'farm' as CategoryType],
      images: [
        imgReal2, // Real beef group (uploaded)
        imgBovineHero // Real bovine hero banner (uploaded)
      ],
      isReal: true,
      badgeFr: 'NOS BOVINS',
      badgeAr: 'مواشينا',
      fr: {
        title: 'Bovins sélectionnés',
        subtitle: 'Sélection d\'élite',
        desc: 'Lot homogène de jeunes bovins sélectionnés pour leur excellente santé et leur conformation.',
        specs: {
          race: 'Sélection d’élite rustique',
          origin: 'Europe',
          weight: '320 - 450 kg par tête',
          purpose: 'Élevage / Production de viande',
        }
      },
      ar: {
        title: 'مواشي مختارة',
        subtitle: 'نخبة الاختيار',
        desc: 'مجموعة متجانسة من المواشي الفتية المختارة لبنيتها وصحتها الممتازة.',
        specs: {
          race: 'سلالات نخبة ممتازة',
          origin: 'أوروبا',
          weight: '320 - 450 كغ للرأس',
          purpose: 'تربية / إنتاج اللحوم الممتازة',
        }
      }
    },
    // --- CATEGORY 2: VACHES GESTANTES (3 photos inside carousel) ---
    {
      id: 2,
      categories: ['pregnant' as CategoryType, 'farm' as CategoryType],
      images: [
        imgPregnant, // Real pregnant cow (uploaded)
        'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1200&auto=format&fit=crop', // Grazing healthy cow
        'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=1200&auto=format&fit=crop' // Healthy cow on pasture (heifer)
      ],
      isReal: true,
      badgeFr: 'VACHES GESTANTES',
      badgeAr: 'أبقار عشار (حوامل)',
      fr: {
        title: 'Vaches gestantes',
        subtitle: 'Fertilité certifiée',
        desc: 'Vaches gestantes (génisses pleines) certifiées sélectionnées avec fiches de saillie et d\'échographie vétérinaire.',
        specs: {
          race: 'Sélection laitière & mixte certifiée',
          origin: 'Europe (France, Allemagne, Hollande)',
          weight: '550 - 680 kg',
          purpose: 'Production laitière & Renouvellement',
        }
      },
      ar: {
        title: 'أبقار عشار (حوامل)',
        subtitle: 'خصوبة مضمونة',
        desc: 'أبقار عشار (حوامل) من سلالات مختارة ممتازة مع شهادات المتابعة والتلقيح والفحص البيطري بالصدى.',
        specs: {
          race: 'سلالات إنتاج حليب ولحوم ممتازة',
          origin: 'أوروبا (فرنسا، ألمانيا، هولندا)',
          weight: '550 - 680 كغ',
          purpose: 'إنتاج الحليب وتجديد القطعان',
        }
      }
    },
    // --- CATEGORY 3: VEAUX & JEUNES BOVINS (3 photos inside carousel) ---
    {
      id: 3,
      categories: ['young' as CategoryType, 'farm' as CategoryType],
      images: [
        imgYoungCalves, // Real young calves (uploaded)
        imgReal1 // Real cow with calf (uploaded)
      ],
      isReal: true,
      badgeFr: 'VEAUX & JEUNES BOVINS',
      badgeAr: 'عجول ومواشي فتية',
      fr: {
        title: 'Veaux et jeunes bovins de 40 à 100 kg',
        subtitle: 'Vigueur et robustesse',
        desc: 'Jeunes veaux rigoureusement sélectionnés, sevrés avec soin et dotés d\'une immunité robuste pour une croissance rapide.',
        specs: {
          race: 'Sélection d’excellence pour engraissement',
          origin: 'Europe',
          weight: '40 - 100 kg par tête',
          purpose: 'Élevage / Engraissement rapide',
        }
      },
      ar: {
        title: 'عجول ومواشي فتية من 40 إلى 100 كغ',
        subtitle: 'حيوية وبنية قوية',
        desc: 'عجول صغيرة قوية البنية، نشأت تحت رقابة بيطرية صارمة ومفطومة بعناية لضمان أفضل معدلات النمو.',
        specs: {
          race: 'سلالات تسمين ممتازة',
          origin: 'أوروبا',
          weight: '40 - 100 كغ للرأس',
          purpose: 'تربية / تسمين سريع ومضمون',
        }
      }
    },
    // --- CATEGORY 4: ALIMENTATION & NUTRITION (3 photos inside carousel) ---
    {
      id: 4,
      categories: ['nutrition' as CategoryType],
      images: [
        imgCowEating, // Real cow eating hay (uploaded)
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop', // Feeding line
        'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1200&auto=format&fit=crop' // Hay roll / clean straw
      ],
      isReal: true,
      badgeFr: 'ALIMENTATION & NUTRITION',
      badgeAr: 'التغذية والرفاهية',
      fr: {
        title: 'Alimentation et nutrition',
        subtitle: 'Ration de précision',
        desc: 'Bovins nourris avec des rations riches en fibres, oligo-éléments et herbe naturelle, optimisant la santé et le rendement final.',
        specs: {
          feedType: 'Fourrages naturels et ensilage de qualité',
          healthStatus: 'Contrôles sanitaires rigoureux',
          vets: 'Suivi vétérinaire et nutritionnel quotidien',
          welfare: 'Bien-être, confort et hydratation continue',
        }
      },
      ar: {
        title: 'التغذية والأعلاف',
        subtitle: 'تغذية دقيقة ومتكاملة',
        desc: 'مواشي تتغذى على أعلاف طبيعية متوازنة غنية بالألياف والمعادن لضمان مناعة قوية ومردودية ممتازة.',
        specs: {
          feedType: 'أعلاف طبيعية وكلأ بجودة عالية',
          healthStatus: 'فحص صحي ومخبري دوري مستمر',
          vets: 'متابعة بيطرية وغذائية يومية',
          welfare: 'توفير الراحة التامة ومياه نقية باستمرار',
        }
      }
    },
    // --- CATEGORY 5: ÉLEVAGE & FERME (2 photos inside carousel) ---
    {
      id: 5,
      categories: ['farm' as CategoryType, 'nutrition' as CategoryType],
      images: [
        imgModernFarm, // Real modern farm (uploaded)
        imgCattleFacility // Real livestock facility (uploaded)
      ],
      isReal: true,
      badgeFr: 'ÉLEVAGE & FERME',
      badgeAr: 'التربية والمزارع',
      fr: {
        title: 'Élevage et ferme',
        subtitle: 'Infrastructures modernes',
        desc: 'Nos exploitations partenaires disposent de technologies avancées de ventilation, de couchage sur paille propre et d\'hygiène stricte.',
        specs: {
          ventilation: 'Automatisée et dynamique',
          bedding: 'Paille naturelle épaisse et nettoyée',
          traceability: 'Identification complète et boucle d\'oreille double',
          standard: 'Certifié conforme aux normes de bien-être animal Europe',
        }
      },
      ar: {
        title: 'التربية والمزارع',
        subtitle: 'بنية تحتية متطورة',
        desc: 'المزارع الشريكة لنا مجهزة بأحدث تقنيات التهوية، النوم على القش النظيف، ونظام تعقيم صارم.',
        specs: {
          ventilation: 'تهوية آلية وديناميكية متكاملة',
          bedding: 'فرش سميك من القش الطبيعي النظيف',
          traceability: 'تتبع المسار بترقيم مزدوج للأذن وتوثيق كامل',
          standard: 'مطابق لمعايير الرفق بالحيوان في أوروبا والاتحاد الأوروبي',
        }
      }
    }
  ];

  const sectionTitle = isRtl ? 'اكتشف مجموعتنا المختارة من المواشي' : 'Découvrez notre sélection de bovins';

  // Navigation inside Lightbox
  const handleNext = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedItemIndex !== null) {
      const imagesCount = galleryItems[selectedItemIndex].images.length;
      setLightboxImageIndex((prev) => (prev + 1) % imagesCount);
    }
  };

  const handlePrev = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedItemIndex !== null) {
      const imagesCount = galleryItems[selectedItemIndex].images.length;
      setLightboxImageIndex((prev) => (prev - 1 + imagesCount) % imagesCount);
    }
  };

  const handleOpenLightboxForCard = (cardIndex: number, slideIndex: number) => {
    setSelectedItemIndex(cardIndex);
    setLightboxImageIndex(slideIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Absolute Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.15] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{isRtl ? 'جودة النخبة المضمونة' : 'EXCELLENCE & TRAÇABILITÉ'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${isRtl ? 'font-sans' : ''}`}>
            {sectionTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            {isRtl 
              ? 'اكتشف مجموعتنا المختارة من المواشي المخصصة للتربية والتسمين، بالإضافة إلى الأبقار الحوامل، والتي تم اختيارها بعناية لتلبية احتياجات الاستيراد الخاصة بكم.'
              : 'Découvrez notre sélection de bovins destinés à l’élevage et à l’engraissement, ainsi que nos vaches gestantes, sélectionnés avec soin pour répondre à vos besoins d’importation.'
            }
          </p>
        </div>

        {/* Dynamic Responsive 5-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {galleryItems.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              isRtl={isRtl}
              onOpenLightbox={(slideIndex) => handleOpenLightboxForCard(idx, slideIndex)}
            />
          ))}
        </div>

        {/* Gallery CTA block */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-850 border border-slate-800 text-center max-w-2xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {isRtl 
              ? 'هل تبحث عن نوع مواشي معين؟ اتصل بفريقنا للحصول على اختيار مخصص لاحتياجاتك.'
              : 'Vous recherchez un type de bovin spécifique ? Contactez notre équipe pour une sélection adaptée à vos besoins.'
            }
          </p>
          <button
            onClick={handleScrollToQuote}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm sm:text-base hover:bg-emerald-500 transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transform hover:-translate-y-0.5"
          >
            {isRtl ? 'طلب تسعيرة مخصصة' : 'Demander un devis'}
          </button>
        </div>
      </div>

      {/* LIGHTBOX MODAL VIEWER */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItemIndex(null)}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Inner Container */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex flex-col md:flex-row relative"
            >
              {/* Left/Right Navigation inside image block */}
              <button
                onClick={handlePrev}
                className={`absolute left-4 top-[35%] md:top-[50%] md:-translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center border border-slate-800 transition-colors cursor-pointer ${
                  isRtl ? 'order-last' : ''
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-[35%] md:top-[50%] md:-translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center border border-slate-800 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Large Image Showcase */}
              <div className="w-full md:w-3/5 bg-slate-950 relative aspect-video md:aspect-auto flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxImageIndex}
                    src={galleryItems[selectedItemIndex].images[lightboxImageIndex]}
                    alt={isRtl ? galleryItems[selectedItemIndex].ar.title : galleryItems[selectedItemIndex].fr.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Category Badge in Lightbox */}
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-900/90 text-emerald-400 text-[10px] font-bold uppercase tracking-wider shadow-lg border border-slate-700/40 backdrop-blur-xs">
                  {isRtl ? galleryItems[selectedItemIndex].badgeAr : galleryItems[selectedItemIndex].badgeFr}
                </span>

                {/* Image Navigation Indicators in Lightbox */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 bg-slate-950/50 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {galleryItems[selectedItemIndex].images.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setLightboxImageIndex(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === lightboxImageIndex ? 'bg-emerald-400 w-3' : 'bg-slate-500 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Specifications Panel */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800">
                <div>
                  {(isRtl ? galleryItems[selectedItemIndex].ar.subtitle : galleryItems[selectedItemIndex].fr.subtitle) && (
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                      {isRtl ? galleryItems[selectedItemIndex].ar.subtitle : galleryItems[selectedItemIndex].fr.subtitle}
                    </span>
                  )}
                  <h3 className={`text-2xl font-black text-white ${isRtl ? 'font-sans' : ''}`}>
                    {isRtl ? galleryItems[selectedItemIndex].ar.title : galleryItems[selectedItemIndex].fr.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                    {isRtl ? galleryItems[selectedItemIndex].ar.desc : galleryItems[selectedItemIndex].fr.desc}
                  </p>

                  {/* Structured Technical Spec Grid */}
                  <div className="mt-6 space-y-3">
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {isRtl ? 'المواصفات الفنية' : 'Fiche technique'}
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {Object.entries(isRtl ? galleryItems[selectedItemIndex].ar.specs : galleryItems[selectedItemIndex].fr.specs).map(([key, val]) => (
                        <div 
                          key={key} 
                          className={`flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/40 border border-slate-850/50 text-xs text-slate-300 ${
                            isRtl ? 'flex-row-reverse text-right' : 'text-left'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] text-slate-500 font-mono block uppercase">
                              {key === 'race' ? (isRtl ? 'السلالة' : 'Race / Génétique') :
                               key === 'origin' ? (isRtl ? 'المنشأ' : 'Origine de provenance') :
                               key === 'weight' ? (isRtl ? 'الوزن التقريبي' : 'Tranche de poids') :
                               key === 'purpose' ? (isRtl ? 'الغرض' : 'Aptitude / Usage') :
                               key === 'feedType' ? (isRtl ? 'نوع التغذية' : 'Type d\'Alimentation') :
                               key === 'healthStatus' ? (isRtl ? 'الوضع الصحي' : 'Contrôle Sanitaire') :
                               key === 'vets' ? (isRtl ? 'الإشراف البيطري' : 'Suivi Vétérinaire') :
                               key === 'welfare' ? (isRtl ? 'راحة الحيوان' : 'Bien-être & Confort') :
                               key === 'ventilation' ? (isRtl ? 'نظام التهوية' : 'Ventilation') :
                               key === 'bedding' ? (isRtl ? 'مضجع الحيوان' : 'Litière / Couchage') :
                               key === 'traceability' ? (isRtl ? 'التتبع والمسار' : 'Traçabilité') :
                               key === 'standard' ? (isRtl ? 'المعايير الصحية' : 'Normes de Conformité') : key}
                            </span>
                            <span className="font-semibold text-slate-200">{val}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer of panel */}
                <div className="mt-8 pt-4 border-t border-slate-850 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Image {lightboxImageIndex + 1} / {galleryItems[selectedItemIndex].images.length}</span>
                  <span className="text-slate-400">TechnOptiz Sarl-s</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
