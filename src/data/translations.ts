export type Language = 'ar' | 'fr' | 'en';

export interface Translations {
  // Navigation
  navHome: string;
  navPortals: string;
  navDossierBuilder: string;
  navCvBuilder: string;
  navExamsLibrary: string;
  navResearch: string;
  navCalculator: string;
  navPricing: string;
  navDashboard: string;
  navAdvisor: string;
  navLogin: string;
  navPartner: string;

  // Common buttons & badges
  startNow: string;
  explorePortals: string;
  printA4: string;
  saveVault: string;
  copyLink: string;
  copied: string;
  generateForm: string;
  officialVerified: string;
  freeNoWatermark: string;
  algerianStandards: string;

  // Hero
  heroTagline: string;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroSubheadline: string;
  heroStatWilayas: string;
  heroStatPortals: string;
  heroStatDocs: string;
  heroStatTimeSaved: string;

  // Portals
  portalsHeading: string;
  portalsSubtitle: string;
  allSectors: string;
  searchPortalPlaceholder: string;
  requiredDocuments: string;
  openDirect: string;
  servicesFound: string;

  // Sectors
  sectorInterior: string;
  sectorHousing: string;
  sectorEmployment: string;
  sectorEducation: string;
  sectorSocial: string;
  sectorTransport: string;
  sectorJustice: string;
  sectorFinance: string;

  // Research
  researchHeading: string;
  researchSubtitle: string;
  topicLabel: string;
  topicPlaceholder: string;
  academicLevel: string;
  generateResearchBtn: string;

  // Calculator
  calculatorHeading: string;
  calculatorSubtitle: string;
  dailyFormsLabel: string;
  formPriceLabel: string;
  monthlyNetProfitLabel: string;
  hoursSavedLabel: string;

  // Pricing
  pricingHeading: string;
  pricingSubtitle: string;
  monthly: string;
  yearly: string;
  dzdPerMonth: string;
  dzdPerYear: string;
  freeTier: string;
  proTier: string;
  enterpriseTier: string;

  // Dashboard
  dashboardHeading: string;
  vaultTab: string;
  wallPriceSignTab: string;
  customerInvoiceTab: string;

  // Theme
  themeDark: string;
  themeLight: string;
}

export const translations: Record<Language, Translations> = {
  ar: {
    navHome: 'الرئيسية',
    navPortals: 'البوابات الحكومية',
    navDossierBuilder: 'معالج الاستمارات والملفات',
    navCvBuilder: 'صانع السيرة الذاتية (CV)',
    navExamsLibrary: 'مكتبة الامتحانات',
    navResearch: 'مولد البحوث الذكي',
    navCalculator: 'حاسبة أرباح السيبار',
    navPricing: 'الأسعار والاشتراكات',
    navDashboard: 'لوحة التحكم والخزينة',
    navAdvisor: 'المستشار الإداري',
    navLogin: 'تسجيل الدخول',
    navPartner: 'إبرام شراكة / سيبار',

    startNow: 'ابدأ بناء الاستمارات فوراً',
    explorePortals: 'دليل البوابات الحكومية',
    printA4: 'طباعة فورية A4',
    saveVault: 'حفظ في الخزينة',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ!',
    generateForm: 'توليد الاستمارة في DZAIR FORM',
    officialVerified: 'معتمد ومطابق للقوانين',
    freeNoWatermark: 'بدون علامة مائية',
    algerianStandards: 'المعايير الإدارية الجزائرية',

    heroTagline: 'المنظومة الرقمية الموحدة لمقاهي الإنترنت ومكاتب الخدمات العمومية في الجزائر 🇩🇿',
    heroHeadline: 'أتمتة الاستمارات الإدارية وبناء الملفات',
    heroHeadlineHighlight: 'في أقل من 3 ثوانٍ',
    heroSubheadline: 'بديل عشرات علامات التبويب المشتتة. توليد فوري لاستمارات سكنات عدل 3، منحة البطالة، عقود الحالة المدنية، تسجيلات المراسلة، وتصاريح الشرف بجودة A4 رسمية معتمدة وبدون علامة مائية.',
    heroStatWilayas: '58 ولاية مغطاة',
    heroStatPortals: '+35 بوابة حكومية مدمجة',
    heroStatDocs: '+140,000 استمارة منجزة',
    heroStatTimeSaved: 'توفير 80% من وقت السيبار',

    portalsHeading: 'دليل ومجمع البوابات الحكومية الرسمية',
    portalsSubtitle: 'دليل وطني مركزي شامل يجمع كافة المنصات والخدمات الإدارية الجزائرية موزعة حسب القطاعات الوزارية مع قائمة الوثائق المطلوبة.',
    allSectors: 'كافة القطاعات',
    searchPortalPlaceholder: 'ابحث عن منصة أو استمارة (مثل: عدل 3، منحة البطالة، الشفاء، B3، رخصة السياقة)...',
    requiredDocuments: 'الوثائق الإلزامية المطلوبة',
    openDirect: 'دخول المنصة الرسمية',
    servicesFound: 'خدمة وبوابة حكومية متاحة',

    sectorInterior: 'الداخلية والحالة المدنية',
    sectorHousing: 'السكن والتعمير (عدل / LPP)',
    sectorEmployment: 'العمل والتشغيل (ANEM / وسيط)',
    sectorEducation: 'التعليم والجامعات (ONEFD / ONEC)',
    sectorSocial: 'الضمان الاجتماعي (CNAS / CASNOS)',
    sectorTransport: 'النقل والمواصلات ورخص السياقة',
    sectorJustice: 'العدالة والقضاء (B3 / الجنسية)',
    sectorFinance: 'المالية والضرائب والبريد (ECCP / DGI)',

    researchHeading: 'مولد البحوث والتقارير الأكاديمية الذكي',
    researchSubtitle: 'أنشئ بحوثاً مدرسية وجامعية وتقارير إدارية متكاملة مع صفحة الغلاف الرسمية، خطة البحث، المقدمة، المتن، والخاتمة والمراجع المعتمدة.',
    topicLabel: 'عنوان أو موضوع البحث / التقرير',
    topicPlaceholder: 'اكتب موضوع البحث هنا (مثال: الثورة التحريرية الجزائرية، الطاقات المتجددة، الذكاء الاصطناعي...)...',
    academicLevel: 'المستوى الدراسي',
    generateResearchBtn: 'توليد البحث الأكاديمي الشامل',

    calculatorHeading: 'حاسبة أرباح السيبار وتوفير الوقت',
    calculatorSubtitle: 'احسب إيرادات محلك الشهرية والسنوية بالدينار الجزائري وتعرف على عدد الساعات الموفرة أسبوعياً بفضل أتمتة الاستمارات.',
    dailyFormsLabel: 'عدد الاستمارات والملفات اليومية:',
    formPriceLabel: 'متوسط سعر الاستمارة للزبون:',
    monthlyNetProfitLabel: 'صافي الربح الشهري التقديري',
    hoursSavedLabel: 'ساعة موفرة أسبوعياً',

    pricingHeading: 'باقات الاشتراك والدفع المحلي الميسر',
    pricingSubtitle: 'اختر الباقة المناسبة لحجم نشاطك. دفع محلي بالدينار عبر بريدي موب (BaridiMob) أو حساب CCP أو رصيد فليكسي مع تفعيل فوري.',
    monthly: 'اشتراك شهري',
    yearly: 'اشتراك سنوي (وفر 20%)',
    dzdPerMonth: 'دج / شهر',
    dzdPerYear: 'دج / سنة',
    freeTier: 'باقة المواطن والباحث',
    proTier: 'باقة السيبار الاحترافي (Pro)',
    enterpriseTier: 'باقة المراكز والشركات (Hub)',

    dashboardHeading: 'لوحة تحكم السيبار وخزينة الملفات',
    vaultTab: 'خزينة المستندات المحفوظة',
    wallPriceSignTab: 'لافتة أسعار خدمات السيبار A4',
    customerInvoiceTab: 'وصل تسليم وفاتورة الزبون',

    themeDark: 'الوضع الليلي',
    themeLight: 'الوضع النهاري'
  },

  fr: {
    navHome: 'Accueil',
    navPortals: 'Portails Gouvernementaux',
    navDossierBuilder: 'Générateur de Dossiers',
    navCvBuilder: 'Créateur de CV (AI)',
    navExamsLibrary: 'Banque d’Examens',
    navResearch: 'Générateur de Recherches',
    navCalculator: 'Calculateur Cybercafé',
    navPricing: 'Tarifs & Abonnements',
    navDashboard: 'Tableau de Bord',
    navAdvisor: 'Conseiller Administratif',
    navLogin: 'Connexion',
    navPartner: 'Devenir Partenaire Cyber',

    startNow: 'Créer un Dossier Maintenant',
    explorePortals: 'Explorer les Portails',
    printA4: 'Impression Directe A4',
    saveVault: 'Enregistrer au Coffre-fort',
    copyLink: 'Copier le lien',
    copied: 'Copié !',
    generateForm: 'Générer dans DZAIR FORM',
    officialVerified: 'Conforme aux Décrets',
    freeNoWatermark: 'Sans Filigrane',
    algerianStandards: 'Normes Administratives Algériennes',

    heroTagline: 'Plateforme Digitale Unifiée pour Cybercafés et Bureaux de Services en Algérie 🇩🇿',
    heroHeadline: 'Automatisation des Formulaires Administratifs',
    heroHeadlineHighlight: 'en Moins de 3 Secondes',
    heroSubheadline: 'Remplacez des dizaines d’onglets dispersés. Génération instantanée pour logements AADL 3, Allocation Chômage ANEM, État Civil, Inscriptions ONEFD et Déclarations sur l’honneur au format A4 certifié.',
    heroStatWilayas: '58 Wilayas Couvertes',
    heroStatPortals: '+35 Portails Officiels Intégrés',
    heroStatDocs: '+140 000 Dossiers Réalisés',
    heroStatTimeSaved: '80% de Gain de Temps',

    portalsHeading: 'Annuaire Central des Portails Gouvernementaux',
    portalsSubtitle: 'Tous les services publics algériens regroupés par secteurs ministériels avec la liste exacte des pièces requises et raccourcis officiels.',
    allSectors: 'Tous les Secteurs',
    searchPortalPlaceholder: 'Rechercher un service (ex: AADL 3, Minha chômage, Chifa, B3 casier, Permis de conduire)...',
    requiredDocuments: 'Pièces Justificatives Requises',
    openDirect: 'Accéder au Portail Officiel',
    servicesFound: 'services officiels disponibles',

    sectorInterior: 'Intérieur & État Civil',
    sectorHousing: 'Habitat & Urbanisme (AADL / LPP)',
    sectorEmployment: 'Emploi & Travail (ANEM / Wassit)',
    sectorEducation: 'Éducation & Université (ONEFD / ONEC)',
    sectorSocial: 'Sécurité Sociale (CNAS / CASNOS)',
    sectorTransport: 'Transports & Permis de Conduire',
    sectorJustice: 'Justice & Tribunaux (Casier B3 / Nationalité)',
    sectorFinance: 'Finances, Impôts & Poste (ECCP / DGI)',

    researchHeading: 'Générateur Intelligent de Recherches et Rapports',
    researchSubtitle: 'Générez des exposés scolaires, mémoires universitaires et rapports administratifs structurés avec page de garde officielle, plan détaillé, corps et références.',
    topicLabel: 'Sujet ou Titre de la Recherche',
    topicPlaceholder: 'Entrez le sujet (ex: Révolution Algérienne, Énergies Renouvelables, Transition Digitale)...',
    academicLevel: 'Niveau d’Études',
    generateResearchBtn: 'Générer la Recherche Académique',

    calculatorHeading: 'Calculateur de Rentabilité Cybercafé',
    calculatorSubtitle: 'Évaluez vos revenus mensuels et annuels en Dinars Algériens (DZD) et le nombre d’heures gagnées par semaine grâce à l’automatisation.',
    dailyFormsLabel: 'Nombre de formulaires traités par jour :',
    formPriceLabel: 'Prix moyen par formulaire facturé au client :',
    monthlyNetProfitLabel: 'Bénéfice Net Mensuel Estimé',
    hoursSavedLabel: 'Heures Économisées / Semaine',

    pricingHeading: 'Abonnements & Paiement Local Simplifié',
    pricingSubtitle: 'Paiement facile en Dinars Algériens via BaridiMob, CCP ou Flexy avec activation instantanée par clé de licence.',
    monthly: 'Mensuel',
    yearly: 'Annuel (-20%)',
    dzdPerMonth: 'DZD / mois',
    dzdPerYear: 'DZD / an',
    freeTier: 'Formule Citoyen & Étudiant',
    proTier: 'Formule Cybercafé Pro',
    enterpriseTier: 'Formule Hub Entreprise',

    dashboardHeading: 'Tableau de Bord & Coffre-Fort',
    vaultTab: 'Coffre-fort des Documents',
    wallPriceSignTab: 'Affiche des Tarifs Murale A4',
    customerInvoiceTab: 'Reçu de Livraison Client',

    themeDark: 'Mode Sombre',
    themeLight: 'Mode Clair'
  },

  en: {
    navHome: 'Home',
    navPortals: 'Government Portals',
    navDossierBuilder: 'Dossier Builder',
    navCvBuilder: 'AI CV Builder',
    navExamsLibrary: 'Exams Library',
    navResearch: 'Research Generator',
    navCalculator: 'Profit Calculator',
    navPricing: 'Pricing & Plans',
    navDashboard: 'Dashboard & Vault',
    navAdvisor: 'Administrative Advisor',
    navLogin: 'Login',
    navPartner: 'Become a Partner',

    startNow: 'Build Dossiers Now',
    explorePortals: 'Explore Government Portals',
    printA4: 'Direct A4 Print',
    saveVault: 'Save to Vault',
    copyLink: 'Copy Link',
    copied: 'Copied!',
    generateForm: 'Generate in DZAIR FORM',
    officialVerified: 'Official & Verified',
    freeNoWatermark: 'No Watermark',
    algerianStandards: 'Algerian Institutional Standards',

    heroTagline: 'Unified Digital Operating System for Cybercafés & Public Service Offices in Algeria 🇩🇿',
    heroHeadline: 'Automate Administrative Forms & Dossiers',
    heroHeadlineHighlight: 'in Under 3 Seconds',
    heroSubheadline: 'Replace dozens of scattered tabs. Instant generation of AADL 3 housing dossiers, ANEM Unemployment Allowances, Civil Status certificates, ONEFD correspondence, and legal affidavits with certified A4 printing.',
    heroStatWilayas: '58 Wilayas Covered',
    heroStatPortals: '+35 Integrated Official Portals',
    heroStatDocs: '+140,000 Documents Created',
    heroStatTimeSaved: '80% Working Time Saved',

    portalsHeading: 'Official Algerian Government Portals Hub',
    portalsSubtitle: 'Centralized directory of all Algerian public administrative portals arranged by ministries and sectors with required document checklists.',
    allSectors: 'All Sectors',
    searchPortalPlaceholder: 'Search service or portal (e.g., AADL 3, Minha allowance, Chifa, B3 police record, Driving license)...',
    requiredDocuments: 'Mandatory Documents Required',
    openDirect: 'Access Official Portal',
    servicesFound: 'official government services available',

    sectorInterior: 'Interior & Civil Status',
    sectorHousing: 'Housing & Urban Planning (AADL / LPP)',
    sectorEmployment: 'Employment & Labor (ANEM / Wassit)',
    sectorEducation: 'Education & Universities (ONEFD / ONEC)',
    sectorSocial: 'Social Security (CNAS / CASNOS)',
    sectorTransport: 'Transport & Driving Licenses',
    sectorJustice: 'Justice & Judiciary (B3 Record / Nationality)',
    sectorFinance: 'Finance, Taxes & Postal (ECCP / DGI)',

    researchHeading: 'Intelligent Academic Research & Report Generator',
    researchSubtitle: 'Generate complete structured school and university research papers and administrative reports with official cover page, outline, body, conclusion, and bibliography.',
    topicLabel: 'Research Topic or Title',
    topicPlaceholder: 'Enter research topic (e.g. Algerian Revolution, Renewable Energy, Public Sector Digitalization)...',
    academicLevel: 'Academic Level',
    generateResearchBtn: 'Generate Complete Academic Paper',

    calculatorHeading: 'Cybercafé Profit & Time Savings Calculator',
    calculatorSubtitle: 'Calculate your monthly and annual revenue in Algerian Dinars (DZD) and discover hours saved per week through automated document generation.',
    dailyFormsLabel: 'Daily forms and files processed:',
    formPriceLabel: 'Average service fee per form in DZD:',
    monthlyNetProfitLabel: 'Estimated Monthly Net Profit',
    hoursSavedLabel: 'Hours Saved / Week',

    pricingHeading: 'Subscription Plans & Local Payment Options',
    pricingSubtitle: 'Select the right plan for your cybercafé. Convenient local payments via BaridiMob, CCP, or Flexy with instant license key activation.',
    monthly: 'Monthly',
    yearly: 'Yearly (Save 20%)',
    dzdPerMonth: 'DZD / month',
    dzdPerYear: 'DZD / year',
    freeTier: 'Citizen & Student Free',
    proTier: 'Cybercafé Pro Plan',
    enterpriseTier: 'Multi-Desk Hub Enterprise',

    dashboardHeading: 'Cybercafé Dashboard & Document Vault',
    vaultTab: 'Saved Documents Vault',
    wallPriceSignTab: 'Printable Cyber Wall Price List A4',
    customerInvoiceTab: 'Customer Delivery Receipt',

    themeDark: 'Dark Mode',
    themeLight: 'Light Mode'
  }
};
