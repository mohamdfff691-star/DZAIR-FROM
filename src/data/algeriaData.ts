import { Wilaya, GovernmentPortal, FormTemplate } from '../types';

export const WILAYAS_58: Wilaya[] = [
  { code: '01', nameAr: 'أدرار', nameFr: 'Adrar', dairas: ['أدرار', 'فنوغيل', 'زاوية كنتة', 'رڤان', 'أولف', 'تيميمون'] },
  { code: '02', nameAr: 'الشلف', nameFr: 'Chlef', dairas: ['الشلف', 'تنس', 'أبو الحسن', 'بوقادير', 'وادي الفضة'] },
  { code: '03', nameAr: 'الأغواط', nameFr: 'Laghouat', dairas: ['الأغواط', 'أفلو', 'قصر الحيران', 'عين ماضي'] },
  { code: '04', nameAr: 'أم البواقي', nameFr: 'Oum El Bouaghi', dairas: ['أم البواقي', 'عين البيضاء', 'عين مليلة'] },
  { code: '05', nameAr: 'باتنة', nameFr: 'Batna', dairas: ['باتنة', 'عين التوتة', 'بريكة', 'مروانة', 'آريس'] },
  { code: '06', nameAr: 'بجاية', nameFr: 'Béjaïa', dairas: ['بجاية', 'أميزور', 'أقبو', 'صدوق', 'تيزي نبربر'] },
  { code: '07', nameAr: 'بسكرة', nameFr: 'Biskra', dairas: ['بسكرة', 'طولقة', 'سيدي عقبة', 'أولاد جلال'] },
  { code: '08', nameAr: 'بشار', nameFr: 'Béchar', dairas: ['بشار', 'القنادسة', 'بني ونيف', 'العبادلة'] },
  { code: '09', nameAr: 'البليدة', nameFr: 'Blida', dairas: ['البليدة', 'بوفاريك', 'الشبلي', 'أولاد يعيش', 'العفرون'] },
  { code: '10', nameAr: 'البويرة', nameFr: 'Bouira', dairas: ['البويرة', 'الأخضرية', 'عين بسام', 'سور الغزلان'] },
  { code: '11', nameAr: 'تمنراست', nameFr: 'Tamanrasset', dairas: ['تمنراست', 'عين أمقل', 'إيدلس'] },
  { code: '12', nameAr: 'تبسة', nameFr: 'Tébessa', dairas: ['تبسة', 'بئر العاتر', 'الونزة', 'الشريعة'] },
  { code: '13', nameAr: 'تلمسان', nameFr: 'Tlemcen', dairas: ['تلمسان', 'مغنية', 'المنصورة', 'ندرومة', 'الغزوات'] },
  { code: '14', nameAr: 'تيارت', nameFr: 'Tiaret', dairas: ['تيارت', 'السوقر', 'فرندة', 'قصر الشلالة'] },
  { code: '15', nameAr: 'تيزي وزو', nameFr: 'Tizi Ouzou', dairas: ['تيزي وزو', 'عزازقة', 'ذراع الميزان', 'واقنون'] },
  { code: '16', nameAr: 'الجزائر العاصمة', nameFr: 'Alger', dairas: ['سيدي امحمد', 'باب الوادي', 'بئر مراد رايس', 'الحراش', 'الدار البيضاء', 'حسين داي', 'الرويبة', 'الزرالدة', 'بوشاوي'] },
  { code: '17', nameAr: 'الجلفة', nameFr: 'Djelfa', dairas: ['الجلفة', 'عين وسارة', 'مسعد', 'حاسي بحبح'] },
  { code: '18', nameAr: 'جيجل', nameFr: 'Jijel', dairas: ['جيجل', 'العوانة', 'الطاهير', 'الميلية'] },
  { code: '19', nameAr: 'سطيف', nameFr: 'Sétif', dairas: ['سطيف', 'العلمة', 'عين ولمان', 'عين الكبيرة'] },
  { code: '20', nameAr: 'سعيدة', nameFr: 'Saïda', dairas: ['سعيدة', 'عين الحجر', 'الحساسنة'] },
  { code: '21', nameAr: 'سكيكدة', nameFr: 'Skikda', dairas: ['سكيكدة', 'القل', 'الحروش', 'عزابة'] },
  { code: '22', nameAr: 'سيدي بلعباس', nameFr: 'Sidi Bel Abbès', dairas: ['سيدي بلعباس', 'تلاغ', 'سفيزف', 'بن باديس'] },
  { code: '23', nameAr: 'عنابة', nameFr: 'Annaba', dairas: ['عنابة', 'البوني', 'الحجار', 'برحال'] },
  { code: '24', nameAr: 'قالمة', nameFr: 'Guelma', dairas: ['قالمة', 'وادي الزناتي', 'بوشقوف', 'حمام دباغ'] },
  { code: '25', nameAr: 'قسنطينة', nameFr: 'Constantine', dairas: ['قسنطينة', 'الخروب', 'حامة بوزيان', 'زيغود يوسف'] },
  { code: '26', nameAr: 'المدية', nameFr: 'Médéa', dairas: ['المدية', 'البرواقية', 'قصر البخاري', 'بني سليمان'] },
  { code: '27', nameAr: 'مستغانم', nameFr: 'Mostaganem', dairas: ['مستغانم', 'عين تادلس', 'سيدي لخضر', 'حاسي مماش'] },
  { code: '28', nameAr: 'المسيلة', nameFr: "M'Sila", dairas: ['المسيلة', 'بوسعادة', 'سيدي عيسى', 'مقرة'] },
  { code: '29', nameAr: 'معسكر', nameFr: 'Mascara', dairas: ['معسكر', 'سيق', 'المحمدية', 'تيغنيف'] },
  { code: '30', nameAr: 'ورقلة', nameFr: 'Ouargla', dairas: ['ورقلة', 'حاسي مسعود', 'سيدي خويلد'] },
  { code: '31', nameAr: 'وهران', nameFr: 'Oran', dairas: ['وهران', 'السانية', 'بئر الجير', 'عين الترك', 'أرزيو', 'بطيوة'] },
  { code: '32', nameAr: 'البيض', nameFr: 'El Bayadh', dairas: ['البيض', 'بريزينة', 'الأبيض سيدي الشيخ'] },
  { code: '33', nameAr: 'إليزي', nameFr: 'Illizi', dairas: ['إليزي', 'إن أمناس', 'دبداب'] },
  { code: '34', nameAr: 'برج بوعريريج', nameFr: 'Bordj Bou Arreridj', dairas: ['برج بوعريريج', 'رأس الوادي', 'المنصورة'] },
  { code: '35', nameAr: 'بومرداس', nameFr: 'Boumerdès', dairas: ['بومرداس', 'الثنية', 'برج منايل', 'دلس', 'بودواو'] },
  { code: '36', nameAr: 'الطارف', nameFr: 'El Tarf', dairas: ['الطارف', 'بوثلجة', 'القالة', 'الذرعان'] },
  { code: '37', nameAr: 'تندوف', nameFr: 'Tindouf', dairas: ['تندوف'] },
  { code: '38', nameAr: 'تيسمسيلت', nameFr: 'Tissemsilt', dairas: ['تيسمسيلت', 'ثنية الحد', 'لرجام'] },
  { code: '39', nameAr: 'الوادي', nameFr: 'El Oued', dairas: ['الوادي', 'قمار', 'الدبيلة', 'الرقيبة'] },
  { code: '40', nameAr: 'خنشلة', nameFr: 'Khenchela', dairas: ['خنشلة', 'ششار', 'قايس', 'بابار'] },
  { code: '41', nameAr: 'سوق أهراس', nameFr: 'Souk Ahras', dairas: ['سوق أهراس', 'سدراتة', 'تاورة', 'المراهنة'] },
  { code: '42', nameAr: 'تيبازة', nameFr: 'Tipaza', dairas: ['تيبازة', 'شرشال', 'القليعة', 'فوكة', 'حجوط'] },
  { code: '43', nameAr: 'ميلة', nameFr: 'Mila', dairas: ['ميلة', 'شلغوم العيد', 'فرجيوة', 'تاجنانت'] },
  { code: '44', nameAr: 'عين الدفلى', nameFr: 'Aïn Defla', dairas: ['عين الدفلى', 'خميس مليانة', 'مليانة', 'العطاف'] },
  { code: '45', nameAr: 'النعامة', nameFr: 'Naâma', dairas: ['النعامة', 'المشرية', 'عين الصفراء'] },
  { code: '46', nameAr: 'عين تموشنت', nameFr: 'Aïn Témouchent', dairas: ['عين تموشنت', 'بني صاف', 'حمام بوحجر'] },
  { code: '47', nameAr: 'غرداية', nameFr: 'Ghardaïa', dairas: ['غرداية', 'متليلي', 'القرارة', 'بريان'] },
  { code: '48', nameAr: 'غليزان', nameFr: 'Relizane', dairas: ['غليزان', 'وادي ارهيو', 'مازونة', 'عمي موسى'] },
  { code: '49', nameAr: 'تيميمون', nameFr: 'Timimoun', dairas: ['تيميمون', 'أوقروت', 'شروين'] },
  { code: '50', nameAr: 'برج باجي مختار', nameFr: 'Bordj Badji Mokhtar', dairas: ['برج باجي مختار', 'تيمياوين'] },
  { code: '51', nameAr: 'أولاد جلال', nameFr: 'Ouled Djellal', dairas: ['أولاد جلال', 'سيدي خالد'] },
  { code: '52', nameAr: 'بني عباس', nameFr: 'Béni Abbès', dairas: ['بني عباس', 'إقلي', 'الواتة'] },
  { code: '53', nameAr: 'إن صالح', nameFr: 'In Salah', dairas: ['إن صالح', 'فقارة الزوى'] },
  { code: '54', nameAr: 'إن قزام', nameFr: 'In Guezzam', dairas: ['إن قزام', 'تين زواتين'] },
  { code: '55', nameAr: 'تقرت', nameFr: 'Touggourt', dairas: ['تقرت', 'الطيبات', 'تماسين'] },
  { code: '56', nameAr: 'جانت', nameFr: 'Djanet', dairas: ['جانت', 'برج الحواس'] },
  { code: '57', nameAr: 'المغير', nameFr: 'El M’Ghair', dairas: ['المغير', 'جامعة'] },
  { code: '58', nameAr: 'المنيعة', nameFr: 'El Menia', dairas: ['المنيعة', 'المنصورة'] }
];

export const GOVERNMENT_PORTALS: GovernmentPortal[] = [
  // السكن والعمران
  {
    id: 'aadl-portal',
    title: 'وكالة عدل - المنصة الرسمية AADL 3',
    category: 'housing',
    description: 'البوابة الرقمية الرسمية للتسجيل ومتابعة ملفات سكنات البيع بالإيجار (برنامج عدل 3).',
    url: 'https://aadl3inscription2024.dz',
    status: 'online',
    requiredDocs: ['رقم التعريف الوطني (NIN)', 'رقم الضمان الاجتماعي (NSS)', 'شهادة الإقامة', 'كشف الراتب أو شهادة الدخل'],
    associatedFormId: 'aadl-3-dossier',
    tags: ['سكنات عدل', 'AADL 3', 'وزارة السكن', 'بيع بالإيجار']
  },
  {
    id: 'lpa-enpi-portal',
    title: 'المؤسسة الوطنية للترقية العقارية ENPI (LPP)',
    category: 'housing',
    description: 'بوابة الاكتتاب والتسجيل في السكن الترقوي العمومي LPP والتوزيع.',
    url: 'https://www.enpi.dz',
    status: 'online',
    requiredDocs: ['بطاقة التعريف البيومترية', 'كشف الراتب للزوجين (أكثر من 108,000 دج)', 'شهادة عدم الملكية'],
    tags: ['LPP', 'ترقوي عمومي', 'ENPI']
  },
  {
    id: 'anep-portal',
    title: 'الوكالة الوطنية للوساطة الإشهارية ANEP',
    category: 'housing',
    description: 'بوابة المناقصات العمومية والطلبيات الوطنية والإعلانات القانونية الرسمية.',
    url: 'https://www.anep.com.dz',
    status: 'online',
    requiredDocs: ['السجل التجاري', 'رقم التعريف الجبائي NIF'],
    tags: ['مناقصات', 'صفقات عمومية']
  },

  // التشغيل والضمان الاجتماعي
  {
    id: 'anem-minha',
    title: 'منصة منحة البطالة - وكالة ANEM (منحة)',
    category: 'employment',
    description: 'المنصة الوطنية لحجز المواعيد وتجديد الاستفادة من منحة البطالة للشباب طالبي العمل.',
    url: 'https://minha.anem.dz',
    status: 'online',
    requiredDocs: ['رقم طالب العمل (Wassit)', 'بطاقة التعريف الوطنية', 'صك بريدي مشطوب (Chèque barré)', 'شهادة التعهد والالتزام'],
    associatedFormId: 'anem-minha-form',
    tags: ['منحة البطالة', 'ANEM', 'وسيط', 'تشغيل الشباب']
  },
  {
    id: 'anem-wassit',
    title: 'الوسيط الرقمي للتشغيل - WASSIT Online',
    category: 'employment',
    description: 'التسجيل وتحديث بطاقة طلب العمل عن بعد وتصفح عروض العمل في القطاعين العام والخاص.',
    url: 'https://wassitonline.anem.dz',
    status: 'online',
    requiredDocs: ['شهادة التخرج أو التكوين', 'بطاقة التعريف', 'السيرة الذاتية CV'],
    tags: ['طلب عمل', 'بطاقة زرقاء', 'وسيط']
  },
  {
    id: 'cnas-chifa',
    title: 'فضاء الهناء - الصندوق الوطني للتأمينات CNAS (الشفاء)',
    category: 'employment',
    description: 'استخراج شهادة الانتساب، متابعة التعويضات، وطلب بطاقة الشفاء الإلكترونية الجديدة.',
    url: 'https://elhanaa.cnas.dz',
    status: 'online',
    requiredDocs: ['رقم الضمان الاجتماعي NSS', 'صورة شمسية رقمية', 'فصيلة الدم'],
    associatedFormId: 'cnas-affiliation',
    tags: ['ضمان اجتماعي', 'بطاقة الشفاء', 'الهناء', 'CNAS']
  },
  {
    id: 'casnos-daman',
    title: 'بوابة ضمانكم CASNOS (غير الأجراء)',
    category: 'employment',
    description: 'التصريح باشتراكات الضمان الاجتماعي للتجار، الحرفيين، والأحرار مع دفع الاشتراكات إلكترونياً.',
    url: 'https://damancom.casnos.dz',
    status: 'online',
    requiredDocs: ['السجل التجاري أو بطاقة الحرفي', 'رقم الانتساب CASNOS', 'كشف الحساب'],
    tags: ['كاسنوس', 'تجار', 'حرفيين', 'اشتراكات سنوية']
  },
  {
    id: 'cnr-retraite',
    title: 'فضاء المتقاعدين - الصندوق الوطني للتقاعد CNR',
    category: 'employment',
    description: 'متابعة كشف المعاشات، شهادة الدخل للمتقاعدين، وطلب بطاقة التقاعد الرقمية.',
    url: 'https://retraite.cnr.dz',
    status: 'online',
    requiredDocs: ['رقم المعاش', 'تاريخ الميلاد', 'رقم الهاتف المسجل'],
    tags: ['تقاعد', 'معاشات', 'CNR']
  },

  // الحالة المدنية والداخلية
  {
    id: 'interior-etat-civil',
    title: 'بوابة استخراج وثائق الحالة المدنية (وزارة الداخلية)',
    category: 'civil_status',
    description: 'استخراج عقود الميلاد 12خ، عقود الزواج، الوفاة وشهادات الإقامة عن بعد بصفة رسمية ومجانية.',
    url: 'https://etatcivil.interieur.gov.dz',
    status: 'online',
    requiredDocs: ['رقم التعريف الوطني NIN', 'الولاية وبلدية الميلاد', 'رقم عقد الميلاد'],
    associatedFormId: 'civil-status-birth',
    tags: ['شهادة ميلاد 12خ', 'عقد زواج', 'وزارة الداخلية', 'الحالة المدنية']
  },
  {
    id: 'interior-passport',
    title: 'متابعة جواز السفر وبطاقة التعريف البيومترية',
    category: 'civil_status',
    description: 'متابعة مسار إنجاز جواز السفر البيومتري وبطاقة التعريف الوطنية في الدائرة.',
    url: 'https://passeport.interieur.gov.dz',
    status: 'online',
    requiredDocs: ['رقم الوصل المؤقت', 'الولاية والدائرة المعنية'],
    tags: ['جواز سفر', 'بيومتري', 'بطاقة تعريف']
  },
  {
    id: 'interior-residence',
    title: 'طلب بطاقة الإقامة الإلكترونية',
    category: 'civil_status',
    description: 'التسجيل واستخراج بطاقة الإقامة الرقمية المصادق عليها برمز الاستجابة السريعة QR Code.',
    url: 'https://residence.interieur.gov.dz',
    status: 'online',
    requiredDocs: ['وصل الكهرباء والغاز أو عقد الإيجار', 'بطاقة التعريف الوطنية'],
    associatedFormId: 'civil-status-residence',
    tags: ['بطاقة إقامة', 'شهادة سكنى']
  },

  // التعليم والتكوين
  {
    id: 'onefd-portal',
    title: 'الديوان الوطني للتعليم والتكوين عن بعد ONEFD',
    category: 'education',
    description: 'التسجيل الأولي، تأكيد التسجيل، سحب الاستدعاءات واستخراج كشوف نقاط المراسلة.',
    url: 'http://inscriptic.onefd.edu.dz',
    status: 'online',
    requiredDocs: ['استمارة التسجيل الإلكترونية', 'شهادة مدرسية أصلية', 'وصل حقوق التسجيل البريدي', 'صور شمسية'],
    associatedFormId: 'onefd-registration',
    tags: ['مراسلة', 'ONEFD', 'إثبات المستوى', 'تعليم عن بعد']
  },
  {
    id: 'onec-bac-bem',
    title: 'الديوان الوطني للامتحانات والمسابقات ONEC (BAC / BEM)',
    category: 'education',
    description: 'تسجيلات شهادة البكالوريا وشهادة التعليم المتوسط، سحب الاستدعاءات وكشف النقاط.',
    url: 'https://bac.onec.dz',
    status: 'online',
    requiredDocs: ['اسم المستخدم والرقم السري', 'استمارة التسجيل المصادق عليها', 'وصل الدفع الإلكتروني'],
    tags: ['بكالوريا', 'بيام', 'ONEC', 'امتحانات']
  },
  {
    id: 'progres-mesrs',
    title: 'بوابة وزارة التعليم العالي والبحث العلمي - PROGRES',
    category: 'education',
    description: 'منصة الطالب الجامعي: التسجيلات الجامعية الأولية، بطاقة الطالب، المنحة، والإيواء والنقل.',
    url: 'https://progres.mesrs.dz/webetu',
    status: 'online',
    requiredDocs: ['رقم تسجيل البكالوريا', 'الرقم السري لكشف نقاط البكالوريا'],
    tags: ['جامعة', 'بروقرس', 'منحة جامعية', 'إقامة جامعية']
  },
  {
    id: 'mfep-mihanati',
    title: 'منصة مهنتي للتكوين والتعليم المهنيين Mihanati',
    category: 'education',
    description: 'التسجيل في دورات التكوين المهني لشهادات الكفاءة، التقني والتقني سامي عبر كامل المعاهد الوطنية.',
    url: 'https://mihanati.mfep.gov.dz',
    status: 'online',
    requiredDocs: ['شهادة مدرسية', 'شهادة الميلاد', 'صورة شمسية'],
    tags: ['تكوين مهني', 'مهنتي', 'شهادة تقني سامي']
  },

  // العدالة
  {
    id: 'justice-casier',
    title: 'صحيفة السوابق القضائية الإلكترونية (القسيمة رقم 3)',
    category: 'justice',
    description: 'استخراج شهادة السوابق العدلية B3 ممضاة إلكترونياً ومقبولة في جميع الإدارات والمسابقات.',
    url: 'https://casierjudiciaire.mjustice.dz',
    status: 'online',
    requiredDocs: ['رقم التعريف الوطني NIN', 'رقم الهاتف المشترك لدى المتعاملين'],
    tags: ['سوابق عدلية', 'B3', 'وزارة العدل', 'مسابقات']
  },
  {
    id: 'justice-nationalite',
    title: 'استخراج شهادة الجنسية الجزائرية عن بعد',
    category: 'justice',
    description: 'طلب واستخراج شهادة الجنسية الجزائرية الأصلية الإلكترونية دون التنقل إلى المحكمة.',
    url: 'https://nationalite.mjustice.dz',
    status: 'online',
    requiredDocs: ['عقد ميلاد المعني والأب', 'عقد ميلاد الجد إن وجد'],
    tags: ['جنسية', 'محكمة', 'وزارة العدل']
  },

  // المالية والضرائب والبريد
  {
    id: 'poste-baridimob',
    title: 'فضاء بريد الجزائر - BaridiMob & ECC',
    category: 'finance',
    description: 'الاطلاع على كشف الحساب الجاري، طلب وتتبع البطاقة الذهبية، والتحويلات المالية الفورية.',
    url: 'https://eccp.poste.dz',
    status: 'online',
    requiredDocs: ['رقم الحساب الجاري CCP', 'الرمز السري الخاص بالحساب'],
    tags: ['بريد الجزائر', 'بطاقة ذهبية', 'ECCP', 'بريدي موب']
  },
  {
    id: 'dgi-jibayatic',
    title: 'بوابة جبايتك - المديرية العامة للضرائب DGI',
    category: 'finance',
    description: 'التصريح الجبائي عن بعد G50، استخراج شهادة عدم الإخضاع الضريبي ودفع الضرائب.',
    url: 'https://jibayatic.mfdgi.gov.dz',
    status: 'online',
    requiredDocs: ['رقم التعريف الجبائي NIF', 'السجل التجاري', 'الحساب الضريبي المعتمد'],
    tags: ['ضرائب', 'جبايتك', 'G50', 'NIF']
  },
  {
    id: 'cnrc-sidjil',
    title: 'بوابة السجل التجاري الإلكتروني CNRC',
    category: 'finance',
    description: 'استخراج وتعديل السجلات التجارية، التحقق من رمز النشاط والتسميات التجارية للشركات والتجار.',
    url: 'https://sidjilcom.cnrc.dz',
    status: 'online',
    requiredDocs: ['رقم السجل التجاري', 'الرمز السري للرمز الإلكتروني'],
    tags: ['سجل تجاري', 'CNRC', 'تجار', 'شركات']
  }
];

export const FORM_TEMPLATES: FormTemplate[] = [
  {
    id: 'formal-request-letter',
    title: 'طلب خطي رسمي معتمد (Demande Manuscrite)',
    category: 'رسائل وإداريات',
    subtitle: 'موجه إلى السادة الولاة، رؤساء الدوائر، رؤساء المجالس الشعبية، أو مدراء المؤسسات',
    ministry: 'الجمهورية الجزائرية الديمقراطية الشعبية',
    description: 'الصيغة الرسمية المعتمدة قانونياً لجميع الطلبات الإدارية في الجزائر مع الحفاظ على القواعد البروتوكولية.',
    requiredAttachments: ['نسخة من بطاقة التعريف الوطنية', 'المستندات المدعمة للطلب'],
    previewType: 'request_letter',
    fields: [
      { id: 'senderName', label: 'الاسم واللقب الكامل', type: 'text', placeholder: 'مثال: محمد بن علي', required: true, gridSpan: 2 },
      { id: 'nin', label: 'رقم التعريف الوطني (NIN)', type: 'text', placeholder: '18 رقماً من بطاقة التعريف البيومترية', required: false, gridSpan: 1 },
      { id: 'phone', label: 'رقم الهاتف', type: 'text', placeholder: '06.XX.XX.XX.XX', required: true, gridSpan: 1 },
      { id: 'address', label: 'العنوان الكامل', type: 'text', placeholder: 'حي السلام، عمارة ب، شقة 14', required: true, gridSpan: 2 },
      { id: 'wilaya', label: 'الولاية', type: 'select', required: true, gridSpan: 1 },
      { id: 'recipientTitle', label: 'الجهة الموجه إليها الطلب', type: 'text', placeholder: 'مثال: إلى السيد والي ولاية الجزائر / المحترم', required: true, gridSpan: 2 },
      { id: 'subject', label: 'موضوع الطلب', type: 'text', placeholder: 'مثال: طلب تسوية وضعية عقارية / طلب منصب عمل / طلب سكن', required: true, gridSpan: 3 },
      { id: 'bodyText', label: 'نص ومحتوى الطلب الخطي', type: 'textarea', placeholder: 'يشرفني أن أتقدم إلى سيادتكم المحترمة بهذا الطلب قصد...', required: true, gridSpan: 3 }
    ]
  },
  {
    id: 'official-affidavit',
    title: 'تصريح شرفي رسمي (Déclaration sur l’honneur)',
    category: 'تصاريح وعقود',
    subtitle: 'تصريح بعدم العمل، العزوبية، السكن المشترك، أو عدم ممارسة نشاط تجاري',
    ministry: 'الجمهورية الجزائرية الديمقراطية الشعبية / وزارة العدل والداخلية',
    description: 'وثيقة رسمية يعتمد عليها في مختلف الملفات الإدارية وتتحمل المسؤولية القانونية أمام المشرع الجزائري.',
    requiredAttachments: ['بطاقة التعريف الوطنية', 'شاهدين إن لزم الأمر'],
    previewType: 'affidavit',
    fields: [
      { id: 'declarantName', label: 'الاسم واللقب للمصرح', type: 'text', placeholder: 'أنا الموقع أسفله: فلان بن فلان', required: true, gridSpan: 2 },
      { id: 'birthDate', label: 'تاريخ الميلاد', type: 'date', required: true, gridSpan: 1 },
      { id: 'birthPlace', label: 'مكان الميلاد والبلدية', type: 'text', placeholder: 'البليدة، الجزائر', required: true, gridSpan: 1 },
      { id: 'nin', label: 'رقم التعريف الوطني البيومتري', type: 'text', placeholder: '18 رقماً', required: true, gridSpan: 2 },
      { id: 'address', label: 'مكان الإقامة الحالي', type: 'text', placeholder: 'العنوان المسجل في بطاقة الإقامة', required: true, gridSpan: 2 },
      { id: 'wilaya', label: 'الولاية', type: 'select', required: true, gridSpan: 1 },
      { id: 'affidavitType', label: 'نوع وموضوع التصريح الشرفي', type: 'select', required: true, gridSpan: 3, options: [
        { value: 'non_working', label: 'تصريح شرفي بعدم ممارسة أي نشاط مأجور أو غير مأجور' },
        { value: 'celibacy', label: 'تصريح شرفي بعدم الزواج (العزوبية)' },
        { value: 'housing', label: 'تصريح شرفي بالإيواء والسكن المشترك مع العائلة' },
        { value: 'no_pension', label: 'تصريح بعدم تقاضي أي منحة أو معاش تقاعد' },
        { value: 'custom', label: 'تصريح شرفي مخصص (كتابة نص حر)' }
      ]},
      { id: 'customDetails', label: 'نص الإقرار والتفاصيل الإضافية', type: 'textarea', placeholder: 'أصرح بشرفي وتحت كامل مسؤوليتي القانونية والجزائية بأنني...', required: true, gridSpan: 3 }
    ]
  },
  {
    id: 'aadl-3-dossier',
    title: 'استمارة وبناء ملف سكن عدل 3 (AADL 3)',
    category: 'السكن والعمران',
    subtitle: 'استمارة الاكتتاب وبطاقة المعلومات الموحدة لبرنامج البيع بالإيجار 2024-2025',
    ministry: 'وزارة السكن والعمران والمدينة - الوكالة الوطنية لتحسين السكن وتطويره',
    description: 'ملف جاهز للاكتتاب يجمع بيانات المكتتب والزوج(ة) مع التدقيق في شروط الراتب والمطابقة الآلية.',
    requiredAttachments: ['بطاقة التعريف البيومترية للمكتتب والزوج', 'شهادة الميلاد 12خ', 'كشف الراتب للأشهر الثلاثة الأخيرة', 'شهادة الإقامة حديثة', 'شهادة عدم الملكية العقارية'],
    previewType: 'aadl',
    fields: [
      { id: 'applicantName', label: 'اسم ولقب المكتتب', type: 'text', placeholder: 'مثال: كريم بن يحيى', required: true, gridSpan: 2 },
      { id: 'nin', label: 'رقم التعريف الوطني البيومتري (NIN)', type: 'text', placeholder: '18 رقماً', required: true, gridSpan: 1 },
      { id: 'nss', label: 'رقم الضمان الاجتماعي (NSS)', type: 'text', placeholder: '12 رقماً', required: true, gridSpan: 1 },
      { id: 'phone', label: 'رقم الهاتف المعتمد في المنصة', type: 'text', placeholder: '05.XX.XX.XX.XX', required: true, gridSpan: 1 },
      { id: 'wilaya', label: 'ولاية الإقامة والمشروع', type: 'select', required: true, gridSpan: 1 },
      { id: 'maritalStatus', label: 'الحالة العائلية', type: 'select', required: true, gridSpan: 1, options: [
        { value: 'married', label: 'متزوج (كشف راتب مجمع)' },
        { value: 'single', label: 'أعزب' },
        { value: 'divorced', label: 'مطلق' },
        { value: 'widow', label: 'أرمل(ة)' }
      ]},
      { id: 'monthlyIncome', label: 'الدخل الشهري الخام (دج)', type: 'number', placeholder: 'بين 24,000 دج و 108,000 دج', required: true, gridSpan: 1 },
      { id: 'spouseName', label: 'اسم ولقب الزوج(ة)', type: 'text', placeholder: 'في حالة الزواج', required: false, gridSpan: 1 },
      { id: 'spouseNin', label: 'رقم التعريف الوطني للزوج(ة)', type: 'text', placeholder: '18 رقماً', required: false, gridSpan: 1 },
      { id: 'spouseIncome', label: 'الدخل الشهري للزوج(ة)', type: 'number', placeholder: '0 إن كان لا يعمل', required: false, gridSpan: 1 },
      { id: 'employer', label: 'المؤسسة أو المشغل', type: 'text', placeholder: 'القطاع العام / الخاص / نشاط حر', required: true, gridSpan: 2 },
      { id: 'residenceAddress', label: 'عنوان الإقامة الحالي بالتفصيل', type: 'text', placeholder: 'العنوان حسب بطاقة الإقامة', required: true, gridSpan: 2 }
    ]
  },
  {
    id: 'anem-minha-form',
    title: 'استمارة التعهد والالتزام لمنحة البطالة (ANEM Minha)',
    category: 'التشغيل',
    subtitle: 'الوثيقة الإلزامية لموعد تجديد أو مقابلة منحة البطالة في ملحقة التشغيل',
    ministry: 'وزارة العمل والتشغيل والضمان الاجتماعي - الوكالة الوطنية للتشغيل ANEM',
    description: 'تعهد رسمي بعدم ممارسة أي عمل مأجور وعدم الاستفادة من أي دخل والتزام بحضور عروض العمل والتكوين.',
    requiredAttachments: ['بطاقة طالب العمل الوسيط WASSIT', 'صك بريدي مشطوب CCP Chèque barré', 'شهادة المؤهل أو المستوى الدراسي', 'شهادة تسوية الوضعية تجاه الخدمة الوطنية'],
    previewType: 'anem',
    fields: [
      { id: 'fullName', label: 'الاسم واللقب الكامل', type: 'text', placeholder: 'أمين بلحاج', required: true, gridSpan: 2 },
      { id: 'nin', label: 'رقم التعريف الوطني NIN', type: 'text', placeholder: '18 رقماً', required: true, gridSpan: 1 },
      { id: 'wassitId', label: 'رقم طالب العمل WASSIT', type: 'text', placeholder: 'مسجل على بطاقة طالب العمل', required: true, gridSpan: 1 },
      { id: 'ccpAccount', label: 'رقم الحساب الجاري البريدي CCP', type: 'text', placeholder: 'رقم الحساب + المفتاح Clé', required: true, gridSpan: 1 },
      { id: 'ripCode', label: 'رمز RIP البريدي (20 رقماً)', type: 'text', placeholder: '0079999900XXXXXXXXXX', required: true, gridSpan: 1 },
      { id: 'wilaya', label: 'ولاية ملحقة التشغيل', type: 'select', required: true, gridSpan: 1 },
      { id: 'agencyBranch', label: 'الملحقة المحلية للتشغيل (ALEM)', type: 'text', placeholder: 'ملحقة الحراش / باب الوادي / عين تموشنت', required: true, gridSpan: 2 },
      { id: 'appointmentDate', label: 'تاريخ المقابلة والموعد', type: 'date', required: true, gridSpan: 1 },
      { id: 'qualifications', label: 'المستوى الدراسي أو الدبلوم', type: 'text', placeholder: 'ليسانس حقوق / تقني سامي / مستوى ثالثة ثانوي', required: true, gridSpan: 2 }
    ]
  },
  {
    id: 'administrative-appeal',
    title: 'عريضة طعن إداري رسمي (Recours Administratif)',
    category: 'رسائل وإداريات',
    subtitle: 'طعن في قرارات السكن الاجتماعي، منحة البطالة، مسابقات التوظيف، أو الضرائب',
    ministry: 'الجمهورية الجزائرية الديمقراطية الشعبية / لجان الطعن الولائية',
    description: 'صياغة قانونية متقنة لتقديم الطعون والاعتراضات الإدارية مع تسبيب الرفض وإرفاق الأدلة الداحضة.',
    requiredAttachments: ['نسخة من القرار المطعون فيه أو وصل الرفض', 'المستندات الثبوتية القانونية الجديدة', 'بطاقة التعريف الوطنية'],
    previewType: 'appeal',
    fields: [
      { id: 'appellantName', label: 'اسم ولقب الطاعن', type: 'text', required: true, gridSpan: 2 },
      { id: 'nin', label: 'رقم التعريف الوطني NIN', type: 'text', required: true, gridSpan: 1 },
      { id: 'phone', label: 'الهاتف', type: 'text', required: true, gridSpan: 1 },
      { id: 'wilaya', label: 'الولاية', type: 'select', required: true, gridSpan: 1 },
      { id: 'appealCommittee', label: 'لجنة الطعن المختصة', type: 'text', placeholder: 'إلى السيد رئيس لجنة الطعن الولائية لولاية...', required: true, gridSpan: 2 },
      { id: 'contestedDecision', label: 'القرار أو الإشعار المطعون فيه', type: 'text', placeholder: 'قرار إسقاط من قائمة المستفيدين رقم 142 بتاريخ...', required: true, gridSpan: 3 },
      { id: 'groundsForAppeal', label: 'أسباب وحيثيات الطعن القانونية والواقعية', type: 'textarea', placeholder: 'حيث أن القرار المشوب بالبطلان استند على... وحيث أنني أثبت بموجب الوثائق المرفقة...', required: true, gridSpan: 3 }
    ]
  },
  {
    id: 'onefd-registration',
    title: 'استمارة تأكيد التسجيل في التعليم عن بعد (ONEFD)',
    category: 'التعليم والتكوين',
    subtitle: 'الديوان الوطني للتعليم والتكوين عن بعد - دورة إثبات المستوى السنوية',
    ministry: 'وزارة التربية الوطنية - الديوان الوطني للتعليم والتكوين عن بعد',
    description: 'استمارة تجميع بيانات تلميذ المراسلة مع المستوى والشعبة وتفاصيل دفع الحوالة البريدية.',
    requiredAttachments: ['الشهادة المدرسية الأصلية لآخر مستوى متمدرس به', 'شهادة الميلاد 12خ', 'وصل دفع حقوق التسجيل من البريد', 'صورتان شمسيتان'],
    previewType: 'onefd',
    fields: [
      { id: 'studentName', label: 'اسم ولقب المترشح', type: 'text', required: true, gridSpan: 2 },
      { id: 'birthDate', label: 'تاريخ الميلاد', type: 'date', required: true, gridSpan: 1 },
      { id: 'studyLevel', label: 'المستوى المطلوب التسجيل فيه', type: 'select', required: true, gridSpan: 2, options: [
        { value: 'cem1', label: 'الأولى متوسط' },
        { value: 'cem2', label: 'الثانية متوسط' },
        { value: 'cem3', label: 'الثالثة متوسط' },
        { value: 'cem4', label: 'الرابعة متوسط (شهادة التعليم المتوسط)' },
        { value: 'lycee1_st', label: 'الأولى ثانوي - جذع مشترك علوم وتكنولوجيا' },
        { value: 'lycee1_l', label: 'الأولى ثانوي - جذع مشترك آداب' },
        { value: 'lycee2_s', label: 'الثانية ثانوي - شعبة علوم تجريبية' },
        { value: 'lycee2_l', label: 'الثانية ثانوي - آداب وفلسفة / لغات' },
        { value: 'lycee3_s', label: 'الثالثة ثانوي (بكالوريا) - علوم تجريبية' },
        { value: 'lycee3_l', label: 'الثالثة ثانوي (بكالوريا) - آداب وفلسفة' },
        { value: 'lycee3_ge', label: 'الثالثة ثانوي (بكالوريا) - تسيير واقتصاد' }
      ]},
      { id: 'wilaya', label: 'الولاية والمركز الجهوي', type: 'select', required: true, gridSpan: 1 },
      { id: 'previousRegistrationNo', label: 'رقم التسجيل السابق (إن وجد)', type: 'text', placeholder: 'للمترشحين القدامى', required: false, gridSpan: 1 },
      { id: 'receiptNumber', label: 'رقم وصل الحوالة البريدية Mandat', type: 'text', placeholder: 'الرقم المدون على وصل بريد الجزائر', required: true, gridSpan: 2 }
    ]
  }
];
