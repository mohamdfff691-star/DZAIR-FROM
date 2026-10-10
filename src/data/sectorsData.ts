export interface GovernmentService {
  id: string;
  titleAr: string;
  titleFr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionFr: string;
  descriptionEn: string;
  url: string;
  requiredDocsAr: string[];
  requiredDocsFr: string[];
  requiredDocsEn: string[];
  guideStepsAr?: string[];
  guideStepsFr?: string[];
  guideStepsEn?: string[];
  feesAr?: string;
  feesFr?: string;
  feesEn?: string;
  targetAudienceAr?: string;
  notesAr?: string;
  associatedFormId?: string;
  isPopular?: boolean;
}

export interface GovernmentSector {
  id: string;
  nameAr: string;
  nameFr: string;
  nameEn: string;
  iconName: string;
  color: string;
  ministryAr: string;
  ministryFr: string;
  ministryEn?: string;
  descriptionAr: string;
  descriptionFr: string;
  descriptionEn?: string;
  services: GovernmentService[];
}

export const ALGERIAN_SECTORS: GovernmentSector[] = [
  {
    id: 'interior',
    nameAr: 'الداخلية والحالة المدنية',
    nameFr: 'Intérieur & État Civil',
    nameEn: 'Interior & Civil Status',
    iconName: 'Building',
    color: 'from-blue-600 to-cyan-500',
    ministryAr: 'وزارة الداخلية والجماعات المحلية والتهيئة العمرانية',
    ministryFr: "Ministère de l'Intérieur et des Collectivités Locales",
    descriptionAr: 'استخراج وثائق الحالة المدنية عن بعد، جوازات السفر البيومترية، بطاقات التعريف، وشهادات الإقامة.',
    descriptionFr: "Délivrance d'actes d'état civil, passeports biométriques, cartes nationales et certificats de résidence.",
    services: [
      {
        id: 'etat-civil-remote',
        titleAr: 'بوابة الحالة المدنية الإلكترونية (عقد ميلاد 12خ، زواج، وفاة)',
        titleFr: 'Portail National de l’État Civil (Acte 12Kh)',
        titleEn: 'National Electronic Civil Status Portal',
        descriptionAr: 'استخراج عقود الميلاد 12خ وشهادات الزواج والوفاة بصفة رسمية ومجانية ممضاة إلكترونياً.',
        descriptionFr: 'Délivrance numérique officielle et gratuite des actes de naissance 12Kh et de mariage.',
        descriptionEn: 'Official digital issuance of birth and marriage certificates.',
        url: 'https://etatcivil.interieur.gov.dz',
        requiredDocsAr: ['رقم التعريف الوطني NIN', 'الولاية والبلدية المسجل بها العقد', 'رقم العقد وسنة التسجيل'],
        requiredDocsFr: ['Numéro NIN', 'Wilaya et Commune de naissance', "Numéro d'acte"],
        requiredDocsEn: ['National NIN', 'Birth Wilaya & Municipality', 'Act number'],
        associatedFormId: 'civil-status-birth',
        isPopular: true
      },
      {
        id: 'passport-tracking',
        titleAr: 'متابعة إنجاز جواز السفر والبطاقة البيومترية',
        titleFr: 'Suivi Passeport & Carte Biométrique',
        titleEn: 'Biometric Passport & ID Tracking',
        descriptionAr: 'تتبع جاهزية جواز السفر وبطاقة التعريف الوطنية على مستوى الدائرة للاستلام.',
        descriptionFr: 'Suivi de disponibilité et de fabrication du passeport et de la CNI à la Daïra.',
        descriptionEn: 'Tracking biometric passport and national ID processing at the Daïra.',
        url: 'https://passeport.interieur.gov.dz',
        requiredDocsAr: ['رقم وصل الإيداع المسلم في الدائرة', 'الولاية والدائرة المعنية'],
        requiredDocsFr: ['Récépissé de dépôt', 'Wilaya et Daïra'],
        requiredDocsEn: ['Filing receipt number', 'Concerned Wilaya & Daïra'],
        isPopular: true
      },
      {
        id: 'residence-certificate',
        titleAr: 'طلب واستخراج بطاقة الإقامة الإلكترونية',
        titleFr: 'Certificat de Résidence Électronique',
        titleEn: 'Electronic Residence Certificate',
        descriptionAr: 'طلب بطاقة الإقامة عن بعد المعتمدة برمز الاستجابة السريعة (QR Code).',
        descriptionFr: 'Demande en ligne de certificat de résidence certifié par code QR.',
        descriptionEn: 'Online request of residence certificate with certified QR code.',
        url: 'https://residence.interieur.gov.dz',
        requiredDocsAr: ['وصل الكهرباء والغاز (Sonelgaz) أو عقد الإيجار', 'بطاقة التعريف الوطنية'],
        requiredDocsFr: ['Facture Sonelgaz ou contrat de bail', 'Carte d’identité nationale'],
        requiredDocsEn: ['Sonelgaz utility bill or lease contract', 'National ID Card'],
        associatedFormId: 'civil-status-residence',
        isPopular: true
      },
      {
        id: 'permis-points',
        titleAr: 'بوابة رخصة السياقة البيومترية ورخص التنقل',
        titleFr: 'Permis de Conduire Biométrique & Circulation',
        titleEn: 'Biometric Driving License Portal',
        descriptionAr: 'متابعة مسار رخصة السياقة بالنقاط، شهادات الكفاءة، ورخص النقل الاستثنائية.',
        descriptionFr: 'Gestion et suivi du permis de conduire biométrique à points.',
        descriptionEn: 'Tracking points driving license and travel authorizations.',
        url: 'https://circulation.interieur.gov.dz',
        requiredDocsAr: ['رقم رخصة السياقة أو وصل النجاح', 'رقم التعريف الوطني NIN'],
        requiredDocsFr: ['Numéro de permis', 'Numéro NIN'],
        requiredDocsEn: ['License number', 'National NIN']
      }
    ]
  },
  {
    id: 'housing',
    nameAr: 'السكن والتعمير (عدل / LPP)',
    nameFr: 'Habitat & Urbanisme (AADL / LPP)',
    nameEn: 'Housing & Urban Planning (AADL / LPP)',
    iconName: 'Home',
    color: 'from-emerald-600 to-teal-500',
    ministryAr: 'وزارة السكن والعمران والمدينة',
    ministryFr: "Ministère de l'Habitat, de l'Urbanisme et de la Ville",
    descriptionAr: 'الاكتتاب في سكنات البيع بالإيجار عدل 3، السكن الترقوي العمومي LPP، والسكن الترقوي المدعم LPA.',
    descriptionFr: 'Souscription aux programmes AADL 3, Promotionnel Public LPP et Aidé LPA.',
    descriptionEn: 'Subscription to AADL 3 rent-to-own housing, LPP public promotional housing, and LPA.',
    services: [
      {
        id: 'aadl-3-official',
        titleAr: 'منصة الاكتتاب في برنامج عدل 3 (AADL 3)',
        titleFr: 'Plateforme Officielle Inscription AADL 3',
        titleEn: 'Official AADL 3 Housing Platform',
        descriptionAr: 'المنصة الوطنية لتسجيل المكتتبين، تحميل استمارة الاكتتاب، ومتابعة القبول المبدئي.',
        descriptionFr: 'Souscription officielle et suivi du programme de vente par location AADL 3.',
        descriptionEn: 'Official application and tracking for the AADL 3 rent-to-own housing program.',
        url: 'https://aadl3inscription2024.dz',
        requiredDocsAr: ['رقم التعريف الوطني NIN', 'رقم الضمان الاجتماعي NSS', 'كشف الراتب للأشهر الثلاثة الأخيرة', 'شهادة الإقامة'],
        requiredDocsFr: ['NIN biométrique', 'Numéro NSS', 'Fiches de paie récentes', 'Certificat de résidence'],
        requiredDocsEn: ['National NIN', 'Social Security NSS', 'Recent pay slips', 'Residence certificate'],
        associatedFormId: 'aadl-3-dossier',
        isPopular: true
      },
      {
        id: 'enpi-lpp',
        titleAr: 'المؤسسة الوطنية للترقية العقارية ENPI (سكنات LPP)',
        titleFr: 'Entreprise Nationale de Promotion Immobilière ENPI',
        titleEn: 'National Real Estate Promotion Company ENPI',
        descriptionAr: 'اكتتاب وتوزيع سكنات الترقوي العمومي للجالية في الخارج والمواطنين ذوي الدخل المتوسط.',
        descriptionFr: 'Souscription au logement promotionnel public pour résidents et diaspora.',
        descriptionEn: 'Subscription to public promotional housing for residents and diaspora.',
        url: 'https://www.enpi.dz',
        requiredDocsAr: ['كشف الراتب للزوجين (أكثر من 108,000 دج)', 'شهادة عدم الملكية السلبية', 'بطاقة التعريف'],
        requiredDocsFr: ['Revenu cumulé des époux (> 108 000 DZD)', 'Certificat négatif de propriété'],
        requiredDocsEn: ['Spouse combined income (> 108k DZD)', 'Negative property certificate'],
        isPopular: true
      },
      {
        id: 'fnpos-aides',
        titleAr: 'الصندوق الوطني لمعادلة الخدمات الاجتماعية FNPOS',
        titleFr: 'Fonds National de Péréquation Sociale FNPOS',
        titleEn: 'National Social Equalization Fund FNPOS',
        descriptionAr: 'الاستفادة من الإعانة المالية غير القابلة للاسترداد (50 مليون سنتيم) للعمال الأجراء.',
        descriptionFr: 'Aide financière non remboursable pour les salariés affiliés à la CNAS.',
        descriptionEn: 'Non-refundable financial grant for salaried workers affiliated with CNAS.',
        url: 'https://fnpos.dz',
        requiredDocsAr: ['شهادة الانتساب للضمان الاجتماعي CNAS أقدمية 3 سنوات', 'عقد السكن أو رخصة البناء'],
        requiredDocsFr: ['Affiliation CNAS (3 ans min)', 'Contrat de logement ou permis de construire'],
        requiredDocsEn: ['CNAS affiliation (3+ years)', 'Housing contract or building permit']
      }
    ]
  },
  {
    id: 'employment',
    nameAr: 'العمل والتشغيل (ANEM / وسيط)',
    nameFr: 'Emploi & Travail (ANEM / Wassit)',
    nameEn: 'Employment & Labor (ANEM / Wassit)',
    iconName: 'Briefcase',
    color: 'from-amber-600 to-orange-500',
    ministryAr: 'وزارة العمل والتشغيل والضمان الاجتماعي',
    ministryFr: 'Ministère du Travail, de l’Emploi et de la Sécurité Sociale',
    descriptionAr: 'منحة البطالة، تجديد بطاقة طالب العمل وسيط، وعروض التوظيف ومسابقات الوظيفة العمومية.',
    descriptionFr: 'Allocation chômage, renouvellement Wassit, et offres d’emploi dans le secteur public et privé.',
    descriptionEn: 'Unemployment allowance, Wassit job seeker renewals, and public job vacancies.',
    services: [
      {
        id: 'minha-anem-official',
        titleAr: 'منصة منحة البطالة (MINHA ANEM)',
        titleFr: 'Plateforme Allocation Chômage (MINHA)',
        titleEn: 'Unemployment Allowance Platform (MINHA)',
        descriptionAr: 'حجز مواعيد دراسة الملف، تجديد الاستفادة، وتحميل وثيقة التعهد والالتزام.',
        descriptionFr: 'Prise de rendez-vous, réinscription et engagement sur l’honneur pour l’allocation.',
        descriptionEn: 'Appointment booking, re-enrollment, and affidavit for unemployment allowance.',
        url: 'https://minha.anem.dz',
        requiredDocsAr: ['رقم طالب العمل WASSIT', 'صك بريدي مشطوب (Chèque barré)', 'شهادة التعهد والالتزام', 'بطاقة التعريف'],
        requiredDocsFr: ['Numéro WASSIT', 'Chèque barré CCP', 'Engagement sur l’honneur', 'CNI'],
        requiredDocsEn: ['WASSIT candidate number', 'Crossed CCP postal cheque', 'Commitment affidavit', 'National ID'],
        associatedFormId: 'anem-minha-form',
        isPopular: true
      },
      {
        id: 'wassit-online-anem',
        titleAr: 'منصة وسيط الرقمية للتشغيل (Wassit Online)',
        titleFr: 'Wassit Online - Agence Nationale de l’Emploi',
        titleEn: 'Wassit Online - National Employment Agency',
        descriptionAr: 'تجديد بطاقة طالب العمل الزرقاء عن بعد كل 6 أشهر والتقديم على عروض الشركات.',
        descriptionFr: 'Renouvellement en ligne de la carte de demandeur d’emploi tous les 6 mois.',
        descriptionEn: 'Online renewal of job seeker card every 6 months and job applications.',
        url: 'https://wassitonline.anem.dz',
        requiredDocsAr: ['رقم بطاقة التعريف', 'تاريخ الميلاد', 'الشهادة التكوينية أو الجامعية'],
        requiredDocsFr: ['Numéro de CNI', 'Date de naissance', 'Diplôme ou certificat'],
        requiredDocsEn: ['National ID number', 'Date of birth', 'Degree or vocational certificate'],
        isPopular: true
      },
      {
        id: 'dgfp-concours',
        titleAr: 'بوابة مسابقات الوظيفة العمومية (DGFP Concours)',
        titleFr: 'Direction Générale de la Fonction Publique',
        titleEn: 'General Directorate of Public Service Competitions',
        descriptionAr: 'دليل جميع مسابقات التوظيف على أساس الشهادة والاختبار في جميع الوزارات والإدارات.',
        descriptionFr: 'Annuaire national des concours de recrutement dans la fonction publique algérienne.',
        descriptionEn: 'National directory of public recruitment competitions across all ministries.',
        url: 'https://www.dgfp.gov.dz',
        requiredDocsAr: ['استمارة معلومات للمسابقة على أساس الشهادة', 'نسخة من المؤهل العلمي', 'كشف النقاط للمسار الدراسي'],
        requiredDocsFr: ['Fiche de renseignements pour concours', 'Copie du diplôme', 'Relevé de notes global'],
        requiredDocsEn: ['Competition info sheet', 'Copy of degree', 'Full transcripts']
      }
    ]
  },
  {
    id: 'education',
    nameAr: 'التعليم والجامعات (ONEFD / ONEC)',
    nameFr: 'Éducation & Université (ONEFD / ONEC)',
    nameEn: 'Education & Universities (ONEFD / ONEC)',
    iconName: 'GraduationCap',
    color: 'from-purple-600 to-indigo-500',
    ministryAr: 'وزارتي التربية الوطنية والتعليم العالي والبحث العلمي',
    ministryFr: "Ministères de l'Éducation Nationale et de l'Enseignement Supérieur",
    descriptionAr: 'تسجيلات التعليم عن بعد بالمراسلة، شهادات البكالوريا والبيام، وبوابة الطالب الجامعي بروقرس.',
    descriptionFr: 'Inscriptions ONEFD par correspondance, examens nationaux BAC/BEM et plateforme PROGRES.',
    descriptionEn: 'Correspondence education (ONEFD), national exams (BAC/BEM), and university PROGRES portal.',
    services: [
      {
        id: 'onefd-distance',
        titleAr: 'الديوان الوطني للتعليم والتكوين عن بعد (ONEFD - المراسلة)',
        titleFr: 'Office National d’Enseignement à Distance (ONEFD)',
        titleEn: 'National Distance Education Office (ONEFD)',
        descriptionAr: 'التسجيل الأولي، تأكيد التسجيل، وسحب استدعاءات وكشوف نقاط إثبات المستوى السنوية.',
        descriptionFr: 'Inscriptions annuelles, confirmation de mandat et retrait des convocations aux examens.',
        descriptionEn: 'Annual enrollment, postal voucher confirmation, and exam hall ticket retrieval.',
        url: 'http://inscriptic.onefd.edu.dz',
        requiredDocsAr: ['شهادة مدرسية أصلية لآخر مستوى', 'شهادة الميلاد 12خ', 'وصل دفع حقوق التسجيل من البريد', 'صور شمسية'],
        requiredDocsFr: ['Certificat de scolarité original', 'Acte 12Kh', 'Récépissé de mandat postal', 'Photos'],
        requiredDocsEn: ['Original school certificate', '12Kh birth certificate', 'Postal money order slip', 'Photos'],
        associatedFormId: 'onefd-registration',
        isPopular: true
      },
      {
        id: 'onec-bac-bem-reg',
        titleAr: 'الديوان الوطني للامتحانات والمسابقات (BAC / BEM)',
        titleFr: 'Office National des Examens et Concours (ONEC)',
        titleEn: 'National Exams Office (BAC / BEM)',
        descriptionAr: 'تسجيلات مترشحي البكالوريا وشهادة التعليم المتوسط الأحرار والنظاميين وسحب الاستدعاءات.',
        descriptionFr: 'Inscriptions des candidats libres et scolarisés au Baccalauréat et au BEM.',
        descriptionEn: 'Registration of school and private candidates for BAC and BEM exams.',
        url: 'https://bac.onec.dz',
        requiredDocsAr: ['استمارة التسجيل الإلكترونية مصادق عليها', 'وصل الدفع الإلكتروني بالبطاقة الذهبية'],
        requiredDocsFr: ['Formulaire validé', 'Quittance de paiement électronique Edahabia'],
        requiredDocsEn: ['Validated registration form', 'Edahabia card electronic payment slip'],
        isPopular: true
      },
      {
        id: 'progres-student',
        titleAr: 'بوابة الطالب الجامعي الرقمية (PROGRES MESRS)',
        titleFr: 'Portail de l’Étudiant Universitaire (PROGRES)',
        titleEn: 'University Student Digital Portal (PROGRES)',
        descriptionAr: 'التسجيلات الجامعية، بطاقة الطالب الافتراضية، الإيواء، المنحة، والنقل الجامعي.',
        descriptionFr: 'Inscriptions universitaires, carte d’étudiant RFID, hébergement et bourse.',
        descriptionEn: 'University enrollment, RFID student card, accommodation, and stipend.',
        url: 'https://progres.mesrs.dz/webetu',
        requiredDocsAr: ['رقم تسجيل البكالوريا', 'الرمز السري المرفق في كشف نقاط البكالوريا'],
        requiredDocsFr: ['Numéro de matricule Bac', 'Code secret du relevé de notes Bac'],
        requiredDocsEn: ['Bac registration number', 'Secret PIN on Bac transcript'],
        isPopular: true
      },
      {
        id: 'mihanati-training',
        titleAr: 'منصة مهنتي للتكوين المهني (Mihanati)',
        titleFr: 'Plateforme Mihanati - Formation Professionnelle',
        titleEn: 'Mihanati Vocational Training Platform',
        descriptionAr: 'التسجيل في دورات التكوين والتمهين لشهادات تقني سامي، تقني، وتأهيل في المعاهد الوطنية.',
        descriptionFr: 'Inscriptions aux sessions de formation et d’apprentissage professionnel.',
        descriptionEn: 'Enrollment in national vocational training institutes for technician diplomas.',
        url: 'https://mihanati.mfep.gov.dz',
        requiredDocsAr: ['شهادة مدرسية لآخر مستوى تعليمي', 'شهادة الميلاد 12خ', 'صور شمسية'],
        requiredDocsFr: ['Certificat de scolarité', 'Acte de naissance', 'Photos d’identité'],
        requiredDocsEn: ['School certificate', 'Birth certificate', 'Passport photos']
      }
    ]
  },
  {
    id: 'social',
    nameAr: 'الضمان الاجتماعي (CNAS / CASNOS)',
    nameFr: 'Sécurité Sociale (CNAS / CASNOS)',
    nameEn: 'Social Security (CNAS / CASNOS)',
    iconName: 'HeartPulse',
    color: 'from-rose-600 to-pink-500',
    ministryAr: 'الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء وغير الأجراء',
    ministryFr: 'Caisse Nationale des Assurances Sociales des Travailleurs',
    descriptionAr: 'فضاء الهناء، بطاقة الشفاء، شهادات الانتساب، اشتراكات التجار CASNOS، ومعاشات التقاعد CNR.',
    descriptionFr: 'Espace El-Hanaa, carte Chifa, attestations d’affiliation, cotisations CASNOS et retraites CNR.',
    descriptionEn: 'El-Hanaa space, Chifa card, affiliation certificates, CASNOS contributions, and CNR pensions.',
    services: [
      {
        id: 'cnas-elhanaa-space',
        titleAr: 'فضاء الهناء - الصندوق الوطني للضمان الاجتماعي CNAS',
        titleFr: 'Espace El-Hanaa (CNAS & Carte Chifa)',
        titleEn: 'El-Hanaa Space (CNAS & Chifa Card)',
        descriptionAr: 'استخراج شهادة الانتساب، طلب بطاقة الشفاء 2 الجديدة، وتتبع تعويضات الدواء والأمومة.',
        descriptionFr: 'Attestation d’affiliation, commande de la nouvelle carte Chifa 2 et remboursements.',
        descriptionEn: 'Affiliation certificate, new Chifa 2 card requests, and medical reimbursements.',
        url: 'https://elhanaa.cnas.dz',
        requiredDocsAr: ['رقم الضمان الاجتماعي NSS', 'صورة شمسية رقمية', 'فصيلة الدم'],
        requiredDocsFr: ['Numéro NSS', 'Photo d’identité numérique', 'Groupe sanguin'],
        requiredDocsEn: ['Social security NSS', 'Digital photo', 'Blood type certificate'],
        associatedFormId: 'cnas-affiliation',
        isPopular: true
      },
      {
        id: 'casnos-damancom-portal',
        titleAr: 'بوابة ضمانكم CASNOS (للتجار، الحرفيين، والمهن الحرة)',
        titleFr: 'Portail Damancom CASNOS (Non-Salariés)',
        titleEn: 'Damancom Portal CASNOS (Self-Employed)',
        descriptionAr: 'التصريح السنوي بالاشتراكات، الدفع الإلكتروني، واستخراج شهادة أداء المستحقات (Mise à jour).',
        descriptionFr: 'Déclaration d’assiette de cotisation, télépaiement et attestation de mise à jour.',
        descriptionEn: 'Annual contribution filings, electronic payments, and clearance certificates.',
        url: 'https://damancom.casnos.dz',
        requiredDocsAr: ['السجل التجاري أو بطاقة الحرفي', 'رقم الانتساب CASNOS', 'كشف الحساب'],
        requiredDocsFr: ['Registre de commerce ou carte d’artisan', 'Numéro CASNOS'],
        requiredDocsEn: ['Commercial register or artisan card', 'CASNOS number'],
        isPopular: true
      },
      {
        id: 'cnr-retraite-space',
        titleAr: 'فضاء المتقاعدين الرقمي - الصندوق الوطني للتقاعد CNR',
        titleFr: 'Espace Retraités - Caisse Nationale des Retraites',
        titleEn: 'National Pension Fund - Retiree Digital Space',
        descriptionAr: 'استخراج كشف المعاشات، شهادة الدخل للمتقاعد، وتتبع الزيادات السنوية في المنح.',
        descriptionFr: 'Téléchargement du relevé de pension, attestation de revenu et suivi des revalorisations.',
        descriptionEn: 'Downloading pension slips, income certificates, and tracking annual increases.',
        url: 'https://retraite.cnr.dz',
        requiredDocsAr: ['رقم المعاش المسجل', 'تاريخ الميلاد', 'الولاية التابع لها'],
        requiredDocsFr: ['Numéro de pension', 'Date de naissance', 'Wilaya d’affiliation'],
        requiredDocsEn: ['Pension number', 'Date of birth', 'Affiliated Wilaya']
      }
    ]
  },
  {
    id: 'transport',
    nameAr: 'النقل والمواصلات ورخص السياقة',
    nameFr: 'Transports & Permis de Conduire',
    nameEn: 'Transport & Driving Licenses',
    iconName: 'Car',
    color: 'from-amber-500 to-yellow-500',
    ministryAr: 'وزارة النقل',
    ministryFr: 'Ministère des Transports',
    descriptionAr: 'استخراج شهادة الكفاءة لرخصة السياقة، المراقبة التقنية للسيارات، ونفطال لخدمات الوقود وسيرغاز.',
    descriptionFr: 'Certificat de capacité de permis, contrôle technique automobile et services de transport.',
    descriptionEn: 'Driving license capacity certificates, technical vehicle inspections, and transport services.',
    services: [
      {
        id: 'driving-license-capacity',
        titleAr: 'شهادة الكفاءة لرخصة السياقة (لاستبدال الرخصة بالخارج)',
        titleFr: 'Certificat de Capacité du Permis de Conduire',
        titleEn: 'Driving License Capacity Certificate',
        descriptionAr: 'طلب شهادة الكفاءة لتغيير رخصة السياقة الجزائرية في فرنسا ودول المهجر دون التنقل للولاية.',
        descriptionFr: 'Demande du certificat de capacité pour conversion de permis à l’étranger.',
        descriptionEn: 'Certificate of capacity for converting Algerian driver license overseas.',
        url: 'https://capacitepermis.interieur.gov.dz',
        requiredDocsAr: ['رقم رخصة السياقة البيومترية', 'نسخة من جواز السفر أو بطاقة الإقامة بالخارج'],
        requiredDocsFr: ['Numéro de permis', 'Copie du titre de séjour à l’étranger'],
        requiredDocsEn: ['Driving license number', 'Foreign residence permit or passport'],
        isPopular: true
      },
      {
        id: 'enact-controle-technique',
        titleAr: 'المؤسسة الوطنية للمراقبة التقنية للسيارات ENACT',
        titleFr: 'Contrôle Technique Automobile ENACT',
        titleEn: 'National Technical Vehicle Inspection ENACT',
        descriptionAr: 'التحقق من صحة محاضر المراقبة التقنية للسيارات وحجز المواعيد في وكالات الفحص المعتمدة.',
        descriptionFr: 'Vérification de l’authenticité des procès-verbaux de contrôle technique.',
        descriptionEn: 'Verification of motor vehicle technical inspection certificates.',
        url: 'https://enact.dz',
        requiredDocsAr: ['البطاقة الرمادية للمركبة (Carte Grise)', 'رقم المحضر السابق'],
        requiredDocsFr: ['Carte grise du véhicule', 'Numéro du procès-verbal'],
        requiredDocsEn: ['Vehicle registration card', 'Previous inspection slip']
      },
      {
        id: 'naftal-sirghaz',
        titleAr: 'بوابة نفطال للخدمات وتركيب سيرغاز (Naftal GPL)',
        titleFr: 'Portail Naftal & Conversion GPL/Sirghaz',
        titleEn: 'Naftal Portal & LPG Fuel Conversion',
        descriptionAr: 'حجز مواعيد تركيب قارورات غاز البترول المميع (سيرغاز GPL) والدفع الإلكتروني عبر البطاقة الذهبية.',
        descriptionFr: 'Prise de rendez-vous pour installation du kit Sirghaz GPL et cartes carburant.',
        descriptionEn: 'Booking LPG kit vehicle installations and fuel payment cards.',
        url: 'https://naftal.dz',
        requiredDocsAr: ['البطاقة الرمادية للمركبة', 'بطاقة التعريف الوطنية'],
        requiredDocsFr: ['Carte grise', 'Pièce d’identité'],
        requiredDocsEn: ['Vehicle registration card', 'National ID card']
      }
    ]
  },
  {
    id: 'justice',
    nameAr: 'العدالة والقضاء (B3 / الجنسية)',
    nameFr: 'Justice & Tribunaux (Casier B3 / Nationalité)',
    nameEn: 'Justice & Judiciary (B3 Record / Nationality)',
    iconName: 'Scale',
    color: 'from-blue-700 to-indigo-600',
    ministryAr: 'وزارة العدل',
    ministryFr: 'Ministère de la Justice',
    descriptionAr: 'صحيفة السوابق القضائية القسيمة رقم 3، شهادة الجنسية الجزائرية، وفضاء المحامي والقاضي.',
    descriptionFr: 'Casier judiciaire bulletin N°3, certificat de nationalité algérienne et portail des avocats.',
    descriptionEn: 'Police criminal record (Bulletin No. 3), certificate of nationality, and court services.',
    services: [
      {
        id: 'casier-judiciaire-b3',
        titleAr: 'صحيفة السوابق القضائية الإلكترونية (القسيمة رقم 3)',
        titleFr: 'Casier Judiciaire Électronique (Bulletin N° 3)',
        titleEn: 'Electronic Police Clearance Record (Bulletin 3)',
        descriptionAr: 'استخراج وثيقة السوابق العدلية B3 ممضاة إلكترونياً ومقبولة رسمياً في كل المسابقات والملفات.',
        descriptionFr: 'Délivrance en ligne du bulletin N°3 du casier judiciaire signé électroniquement.',
        descriptionEn: 'Online issuance of digitally signed criminal record certificate.',
        url: 'https://casierjudiciaire.mjustice.dz',
        requiredDocsAr: ['رقم التعريف الوطني NIN', 'رقم هاتف مسجل باسم المعني لتلقي رمز التفعيل'],
        requiredDocsFr: ['Numéro NIN biométrique', 'Numéro de téléphone mobile personnel'],
        requiredDocsEn: ['National NIN', 'Personal mobile number for OTP verification'],
        isPopular: true
      },
      {
        id: 'certificat-nationalite',
        titleAr: 'استخراج شهادة الجنسية الجزائرية عن بعد',
        titleFr: 'Certificat de Nationalité Algérienne en Ligne',
        titleEn: 'Algerian Nationality Certificate Online',
        descriptionAr: 'طلب وتحميل شهادة الجنسية الجزائرية الأصلية دون التنقل إلى محكمة مقر الميلاد.',
        descriptionFr: 'Délivrance dématérialisée du certificat de nationalité sans se déplacer au tribunal.',
        descriptionEn: 'Digital issuance of the Algerian nationality certificate without court visits.',
        url: 'https://nationalite.mjustice.dz',
        requiredDocsAr: ['عقد ميلاد المعني والأب', 'عقد ميلاد الجد إن وجد لإثبات الأصل الجزائري'],
        requiredDocsFr: ['Actes de naissance du demandeur et du père', 'Acte du grand-père le cas échéant'],
        requiredDocsEn: ['Applicant and father birth certificates', 'Grandfather certificate if applicable'],
        isPopular: true
      },
      {
        id: 'avocats-jba-portal',
        titleAr: 'بوابة المحامي والتقاضي الإلكتروني (JBA)',
        titleFr: 'Portail des Avocats et Télé-Procédures (JBA)',
        titleEn: 'Lawyers & E-Litigation Portal (JBA)',
        descriptionAr: 'إيداع العرائض القضائية، تبادل المذكرات، ومتابعة جدول جلسات المحاكم والمجالس القضائية.',
        descriptionFr: 'Dépôt des requêtes, échange des mémoires et suivi des rôles d’audience.',
        descriptionEn: 'Filing legal appeals, exchanging briefs, and court hearing schedule tracking.',
        url: 'https://jba.mjustice.dz',
        requiredDocsAr: ['رقم اعتماد المحامي في جدول المحامين', 'المفتاح الإلكتروني للمصادقة'],
        requiredDocsFr: ['Numéro d’agrément au Barreau', 'Clé électronique d’authentification'],
        requiredDocsEn: ['Bar association membership number', 'Electronic key authentication']
      }
    ]
  },
  {
    id: 'finance',
    nameAr: 'المالية والضرائب والبريد (ECCP / DGI)',
    nameFr: 'Finances, Impôts & Poste (ECCP / DGI)',
    nameEn: 'Finance, Taxes & Postal (ECCP / DGI)',
    iconName: 'CreditCard',
    color: 'from-emerald-700 to-green-600',
    ministryAr: 'وزارتي المالية والبريد والمواصلات السلكية واللاسلكية',
    ministryFr: 'Ministères des Finances et de la Poste',
    descriptionAr: 'بريد الجزائر ECCP، تطبيق بريدي موب، البطاقة الذهبية، جبايتك DGI للضرائب، والسجل التجاري CNRC.',
    descriptionFr: 'Algérie Poste ECCP, BaridiMob, déclaration fiscale Jibayatic et registre du commerce CNRC.',
    descriptionEn: 'Algeria Post ECCP, BaridiMob, Jibayatic tax declarations, and CNRC commercial register.',
    services: [
      {
        id: 'eccp-baridimob-post',
        titleAr: 'فضاء الحساب البريدي الجاري ECCP وبريدي موب',
        titleFr: 'Algérie Poste - Espace CCP & BaridiMob',
        titleEn: 'Algeria Post - ECCP & BaridiMob Portal',
        descriptionAr: 'الاطلاع على كشف الحساب البريدي الجاري، طلب وإعادة إصدار البطاقة الذهبية، والتحويلات الفورية.',
        descriptionFr: 'Relevé de compte CCP, commande de carte Edahabia et virements instantanés.',
        descriptionEn: 'CCP postal bank statement, Edahabia gold card issuance, and instant transfers.',
        url: 'https://eccp.poste.dz',
        requiredDocsAr: ['رقم الحساب البريدي الجاري CCP', 'الرمز السري الممنوح من مركز البريد'],
        requiredDocsFr: ['Numéro de compte CCP', 'Code confidentiel fourni par le bureau de poste'],
        requiredDocsEn: ['CCP account number', 'Confidential PIN code from post office'],
        isPopular: true
      },
      {
        id: 'jibayatic-dgi-tax',
        titleAr: 'بوابة جبايتك للتصريح الجبائي الرقمي (DGI Jibayatic)',
        titleFr: 'Portail Fiscal Jibayatic (DGI Algérie)',
        titleEn: 'Jibayatic Tax Portal (DGI Algeria)',
        descriptionAr: 'التصريح برقم الأعمال G50 للتجار والشركات، دفع الضرائب إلكترونياً، واستخراج شهادة السوابق الجبائية.',
        descriptionFr: 'Déclaration mensuelle G50, paiement des impôts en ligne et attestation fiscale.',
        descriptionEn: 'Monthly G50 tax declaration, online tax payment, and tax clearance certificates.',
        url: 'https://jibayatic.mfdgi.gov.dz',
        requiredDocsAr: ['رقم التعريف الجبائي NIF', 'السجل التجاري', 'الحساب الضريبي الإلكتروني'],
        requiredDocsFr: ['Numéro NIF', 'Registre de commerce', 'Compte fiscal dématérialisé'],
        requiredDocsEn: ['Tax ID NIF', 'Commercial register', 'Authorized tax portal account'],
        isPopular: true
      },
      {
        id: 'cnrc-sidjilcom-trade',
        titleAr: 'بوابة السجل التجاري الإلكتروني (CNRC Sidjilcom)',
        titleFr: 'Centre National du Registre du Commerce (CNRC)',
        titleEn: 'National Center of Commercial Registry (CNRC)',
        descriptionAr: 'استخراج مستخرج السجل التجاري الإلكتروني برمز QR، البحث عن تسمية، والتحقق من رموز النشاط.',
        descriptionFr: 'Extrait du registre de commerce électronique, recherche de dénomination et codes d’activités.',
        descriptionEn: 'Electronic commercial register extract with QR code, naming search, and activity codes.',
        url: 'https://sidjilcom.cnrc.dz',
        requiredDocsAr: ['رقم السجل التجاري الإلكتروني', 'رمز المصادقة والتحقق'],
        requiredDocsFr: ['Numéro de registre du commerce', 'Code de vérification'],
        requiredDocsEn: ['Commercial register number', 'Security code verification'],
        isPopular: true
      },
      {
        id: 'douanes-algerie-alces',
        titleAr: 'بوابة الجمارك الجزائرية للمسافرين والتجارة (ALCES)',
        titleFr: 'Direction Générale des Douanes Algériennes',
        titleEn: 'Algerian Customs Directorate (ALCES)',
        descriptionAr: 'سند العبور الجمركي للمركبات (TPD)، التصريح بالعملة الصعبة عند السفر، والتعريفة الجمركية.',
        descriptionFr: 'Titre de passage en douane pour véhicules (TPD) et déclaration de devises.',
        descriptionEn: 'Customs vehicle transit permit (TPD) and foreign currency declaration.',
        url: 'https://douane.gov.dz',
        requiredDocsAr: ['البطاقة الرمادية للسيارة', 'جواز السفر', 'تذكرة السفر أو السند البحري'],
        requiredDocsFr: ['Carte grise', 'Passeport', 'Billet de voyage'],
        requiredDocsEn: ['Vehicle registration card', 'Passport', 'Travel ticket']
      }
    ]
  }
];
