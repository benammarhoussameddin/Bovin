import { BovineType } from './types';

export const BOVINE_TYPES: BovineType[] = [
  {
    id: 'genisses',
    name: {
      fr: 'Génisses Laitières (Gestantes/Non-gestantes)',
      ar: 'عجلات حلوب (حوامل / غير حوامل)'
    },
    description: {
      fr: 'Sélectionnées parmi les meilleures races européennes (Prim\'Holstein, Montbéliarde, Simmental) avec de hauts rendements laitiers et une excellente génétique.',
      ar: 'مختارة من أفضل السلالات الأوروبية (هولشتاين، مونبيليارد، سيمينتال) بإنتاجية حليب عالية وجينات ممتازة.'
    }
  },
  {
    id: 'taurillons',
    name: {
      fr: 'Taurillons d\'engraissement',
      ar: 'عجول للتسمين'
    },
    description: {
      fr: 'Idéaux pour la production de viande de haute qualité. Excellente croissance musculaire et santé irréprochable (Charolaise, Limousine, Blanc Bleu Belge).',
      ar: 'مثالية لإنتاج لحوم عالية الجودة. نمو عضلي ممتاز وصحة خالية من العيوب (شاروليه، ليموزين، بلجيكي أزرق).'
    }
  },
  {
    id: 'vaches',
    name: {
      fr: 'Vaches Laitières Certifiées',
      ar: 'أبقار حلوب معتمدة'
    },
    description: {
      fr: 'Uny-productivité laitière élevée, saines, vaccinées et prêtes pour l\'exploitation.',
      ar: 'أبقار حلوب عالية الإنتاجية، سليمة ومحصنة وجاهزة للتربية والإنتاج.'
    }
  },
  {
    id: 'veaux',
    name: {
      fr: 'Veaux d\'élevage',
      ar: 'عجول صغيرة للتربية'
    },
    description: {
      fr: 'Jeunes bovins robustes élevés sous contrôle sanitaire rigoureux garantissant un taux de réussite optimal.',
      ar: 'عجول صغيرة قوية البنية، نشأت تحت رقابة بيطرية صارمة تضمن أفضل معدلات النجاح والنمو.'
    }
  }
];

export const TRANSLATIONS = {
  fr: {
    heroTitle: 'TECHNOOTIZ Sarl-s',
    heroSubtitle: 'Import-Export Bovins',
    heroTagline: 'Votre partenaire de confiance pour le commerce international de bovins entre l’Europe, l’Algérie, la Tunisie et le Maroc.',
    ctaEstimate: 'Demander un devis',
    ctaContact: 'Nous contacter',
    
    // About
    aboutTitle: 'À Propos de TECHNOOTIZ',
    aboutText: 'TECHNOOTIZ Sarl-s est une entreprise spécialisée basée au Luxembourg, agissant comme un pont stratégique pour l\'importation et l\'exportation de bétail vivant (bovins de haute qualité). Nous garantissons des bêtes certifiées, soumises à de stricts contrôles vétérinaires de l\'Union Européenne.',
    
    // Strengths
    strengthsTitle: 'Pourquoi nous choisir ?',
    strength1Title: 'Qualité Supérieure',
    strength1Desc: 'Sélection méticuleuse de races de renommée internationale pour le lait et la viande.',
    strength2Title: 'Logistique Sécurisée',
    strength2Desc: 'Transport terrestre et maritime dans le respect absolu du bien-être animal.',
    strength3Title: 'Accompagnement Douanier',
    strength3Desc: 'Gestion complète des formalités de douane, certificats sanitaires et paperasse.',
    
    // Form Quote
    devisTitle: 'Demandez votre devis personnalisé',
    devisSubtitle: 'Remplissez le formulaire ci-dessous pour recevoir une offre adaptée à vos besoins d\'importation.',
    labelSelectBovine: 'Type de Bovins',
    labelQty: 'Quantité estimée (Têtes)',
    labelDest: 'Pays de destination',
    labelName: 'Nom et Prénom / Raison Sociale',
    labelEmail: 'Adresse Email',
    labelPhone: 'Numéro de Téléphone',
    labelNotes: 'Spécifications ou demandes particulières',
    btnSubmitQuote: 'Envoyer ma Demande de Devis',
    quoteSuccess: 'Demande reçue avec succès ! Notre pôle logistique vous contactera sous 24/48h avec une offre chiffrée.',
    
    // Contact Info
    contactTitle: 'Discutons de vos projets',
    contactSubtitle: 'Notre équipe est à votre écoute pour vous accompagner dans vos projets d’importation et de commerce de bovins entre l’Europe, l’Algérie, la Tunisie et le Maroc.',
    gerant: 'Gérant',
    coGerant: 'Co-gérant',
    responsableCommercial: 'Responsable Commercial',
    officeLux: 'Siège Social (Luxembourg)',
    officeDz: 'Représentation commerciale (Algérie)',
    copyBtn: 'Copier',
    copiedBtn: 'Copié !',
    vcardBtn: 'Ajouter aux contacts (VCF)',
    vcardSuccess: 'Fiche contact téléchargée !',
    
    // Footer
    footerDesc: 'TECHNOOTIZ Sarl-s – Spécialiste de l’importation et de l’exportation de bétail vivant au cœur de l’Europe.',
    footerCopyright: '© 2026 TECHNOOTIZ Sarl-s. Tous droits réservés.',
    footerLegal: 'Enregistrée au Luxembourg – RCS B L-4125',

    // Form Contact
    contactFormTitle: 'Envoyer un message',
    subject: 'Sujet',
    message: 'Votre message',
    btnSendMessage: 'Envoyer le message',
    contactSuccess: 'Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.',
  },
  ar: {
    heroTitle: 'TECHNOOTIZ Sarl-s',
    heroSubtitle: 'استيراد وتصدير الأبقار والمواشي',
    heroTagline: 'شريككم الموثوق للتجارة الدولية للمواشي بين أوروبا، الجزائر، تونس والمغرب.',
    ctaEstimate: 'طلب تسعيرة (Devis)',
    ctaContact: 'اتصل بنا',
    
    // About
    aboutTitle: 'حول TECHNOOTIZ',
    aboutText: 'شركة TECHNOOTIZ Sarl-s هي شركة متخصصة مقرها في لوكسمبورغ، تخدم كجسر استراتيجي لاستيراد وتصدير الماشية الحية (بقر عالي الجودة). نحن نضمن مواشي معتمدة تخضع لفحوصات بيطرية صارمة من الاتحاد الأوروبي.',
    
    // Strengths
    strengthsTitle: 'لماذا تختارنا؟',
    strength1Title: 'جودة فائقة',
    strength1Desc: 'انتقاء دقيق للسلالات ذات السمعة العالمية لإنتاج الحليب واللحوم.',
    strength2Title: 'لوجستيات آمنة',
    strength2Desc: 'نقل بري وبحري آمن مع الاحترام الكامل لمعايير سلامة وصحة الحيوان.',
    strength3Title: 'تسهيلات جمركية',
    strength3Desc: 'إدارة كاملة للملفات الجمركية، الشهادات البيطرية والوثائق المطلوبة.',
    
    // Form Quote
    devisTitle: 'اطلب تسعيرتك المخصصة',
    devisSubtitle: 'يرجى ملء النموذج أدناه لتلقي عرض أسعار يتناسب مع احتياجات الاستيراد الخاصة بكم.',
    labelSelectBovine: 'نوع الماشية المرجو',
    labelQty: 'الكمية التقديرية',
    labelDest: 'بلد الوجهة',
    labelName: 'الاسم الكامل / اسم الشركة',
    labelEmail: 'البريد الإلكتروني',
    labelPhone: 'رقم الهاتف',
    labelNotes: 'مواصفات أو طلبات خاصة',
    btnSubmitQuote: 'إرسال طلب التسعيرة',
    quoteSuccess: 'تم استلام طلبكم بنجاح! سيتصل بكم قطب اللوجستيات الخاص بنا في غضon 24 إلى 48 ساعة لتقديم العرض.',
    
    // Contact Info
    contactTitle: 'تواصل مباشرة معنا',
    contactSubtitle: 'فريقنا في خدمتكم لمرافقتكم في مشاريعكم لاستيراد وتجارة الأبقار بين أوروبا، الجزائر، تونس والمغرب.',
    gerant: 'المسير',
    coGerant: 'المسير الشريك',
    responsableCommercial: 'المسؤول التجاري',
    officeLux: 'المقر الاجتماعي (لوكسمبورغ)',
    officeDz: 'التمثيل التجاري (الجزائر)',
    copyBtn: 'نسخ',
    copiedBtn: 'تم النسخ!',
    vcardBtn: 'حفظ كجهة اتصال (VCF)',
    vcardSuccess: 'تم تحميل بطاقة جهة الاتصال!',
    
    // Footer
    footerDesc: 'TECHNOOTIZ Sarl-s – أخصائي استيراد وتصدير الماشية الحية في قلب أوروبا.',
    footerCopyright: '© 2026 TECHNOOTIZ Sarl-s. جميع الحقوق محفوظة.',
    footerLegal: 'مسجلة في لوكسمبورغ – RCS B L-4125',

    // Form Contact
    contactFormTitle: 'أرسل لنا رسالة',
    subject: 'الموضوع',
    message: 'رسالتك',
    btnSendMessage: 'إرسال الرسالة',
    contactSuccess: 'تم إرسال رسالتك بنجاح! سنجيبك في أقرب وقت ممكن.',
  }
};

export const CONTACTS = {
  gerants: [
    {
      name: 'Responsable Commercial Luxembourg',
      titleKey: 'responsableCommercial',
      phone: '+352 691 320 929',
      location: 'Luxembourg',
      email: 'importexportbovin@technootiz.com'
    },
    {
      name: 'Gérant Luxembourg',
      titleKey: 'gerant',
      phone: '+352 661 497 947',
      location: 'Luxembourg',
      email: 'importexportbovin@technootiz.com'
    }
  ],
  address: {
    street: '2 RUE DES FRANCISCIANS',
    postalCode: 'L-4125',
    city: 'ESCH-SUR-ALZETTE',
    country: 'LUXEMBOURG'
  }
};
