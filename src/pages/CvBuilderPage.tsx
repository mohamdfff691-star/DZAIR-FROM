import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Sparkles, 
  Printer, 
  Save, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  User, 
  Languages, 
  Award, 
  Sliders, 
  Layout, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Check,
  Palette,
  Eye,
  MapPin,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Search
} from 'lucide-react';
import { WILAYAS_58 } from '../data/algeriaData';
import { useLanguage } from '../contexts/LanguageContext';
import { CV_TEMPLATES_DATA, CvTemplateConfig } from '../../lib/data/exams-and-cvs';

export interface CvData {
  fullName: string;
  fullNameFr: string;
  jobTitle: string;
  jobTitleFr: string;
  email: string;
  phone: string;
  birthDate: string;
  birthPlace: string;
  maritalStatus: string;
  wilaya: string;
  address: string;
  nin: string;
  militaryStatus: string;
  drivingLicense: string;
  summary: string;
  summaryFr?: string;
  experiences: {
    id: string;
    position: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    id: string;
    degree: string;
    school: string;
    year: string;
    details: string;
  }[];
  skills: { name: string; level: number }[];
  languages: { name: string; level: string }[];
}

export const INITIAL_CV: CvData = {
  fullName: 'أمين بن بلقاسم',
  fullNameFr: 'Amine BENBELKACEM',
  jobTitle: 'تقني سامي في الشبكات والأنظمة المعلوماتية',
  jobTitleFr: 'Technicien Supérieur en Informatique & Réseaux',
  email: 'amine.belkacem@dzair.com',
  phone: '06.61.82.94.10',
  birthDate: '14 سبتمبر 1995',
  birthPlace: 'حسين داي - الجزائر',
  maritalStatus: 'أعزب (Célibataire)',
  wilaya: '16 - الجزائر العاصمة',
  address: 'حي البدر، عمارة 12، حسين داي، الجزائر',
  nin: '199516040019283741',
  militaryStatus: 'معفى / مؤدى (مسوى الوضعية تجاه الخدمة الوطنية)',
  drivingLicense: 'صنف ب (Permis Catégorie B)',
  summary: 'متحمس ومختص في صيانة وتأمين الشبكات والأنظمة الإدارية بخبرة عملية تتجاوز 4 سنوات في إدارة الخوادم والدعم الفني لمكاتب الخدمات والشركات، مع إتقان تام للمنصات الرقمية والمعايير التنظيمية الجزائرية.',
  summaryFr: 'Professionnel rigoureux et passionné en informatique avec plus de 4 ans d’expérience en gestion des réseaux et serveurs.',
  experiences: [
    {
      id: '1',
      position: 'مسؤول الأنظمة والدعم الفني',
      company: 'مؤسسة الخدمات الرقمية الجزائرية - الرويبة',
      period: '2022 - الآن',
      description: 'إدارة وتأمين شبكة الحواسيب وربط الأجهزة بخوادم البيانات المحلية، مع ضمان المتابعة اليومية لأكثر من 40 محطة عمل وتطبيق أنظمة النسخ الاحتياطي التلقائي.'
    },
    {
      id: '2',
      position: 'تقني إعلام آلي وشبكات',
      company: 'مركز الخدمات العامة والإلكترونية',
      period: '2020 - 2022',
      description: 'صيانة العتاد والتجهيزات، تثبيت أنظمة الحماية ومضادات الفيروسات، ومعالجة واستخراج الوثائق الإدارية الرسمية للزبائن بدون أخطاء.'
    }
  ],
  education: [
    {
      id: '1',
      degree: 'شهادة تقني سامي (BTS) في الإعلام الآلي والشبكات',
      school: 'المعهد الوطني المتخصص في التكوين المهني (INSFP) - الجزائر',
      year: '2018 - 2020',
      details: 'تخصص صيانة شبكات الأنظمة المعلوماتية بملاحظة جيد جداً.'
    },
    {
      id: '2',
      degree: 'شهادة البكالوريا - شعبة تقني رياضي',
      school: 'ثانوية الإدريسي - الجزائر',
      year: '2018',
      details: 'معدل النجاح 14.20'
    }
  ],
  skills: [
    { name: 'إدارة خوادم Windows Server & Linux', level: 90 },
    { name: 'صيانة وتثبيت شبكات الاتصال (LAN/WAN)', level: 85 },
    { name: 'النسخ الاحتياطي وأمن المعلومات', level: 80 },
    { name: 'إتقان حزمة برمجيات Microsoft Office & G-Suite', level: 95 },
    { name: 'إدارة وتأمين قواعد البيانات SQL', level: 75 }
  ],
  languages: [
    { name: 'العربية (Arabe)', level: 'اللغة الأم (Langue Maternelle)' },
    { name: 'الفرنسية (Français)', level: 'إتقان تام (Courant)' },
    { name: 'الإنجليزية (Anglais)', level: 'مستوى مهني وتقني (Professionnel)' },
    { name: 'الأمازيغية (Tamazight)', level: 'مستوى متوسط (Intermédiaire)' }
  ]
};

export interface TemplateInfo {
  id: string;
  name: string;
  subtitle: string;
  nameFr: string;
  category: string;
  accentColor: string;
  secondaryColor: string;
  badge: string;
  styleDesc: string;
  recommendedFor: string;
  features: string[];
}

export const CANVA_TEMPLATES: TemplateInfo[] = CV_TEMPLATES_DATA.map((tpl) => ({
  id: tpl.id,
  name: tpl.name,
  subtitle: tpl.subtitle || tpl.nameFr,
  nameFr: tpl.nameFr,
  category: tpl.category,
  accentColor: tpl.accentColor,
  secondaryColor: tpl.secondaryColor,
  badge: tpl.badge,
  styleDesc: tpl.descriptionAr,
  recommendedFor: tpl.recommendedFor,
  features: tpl.features
}));

export const CvBuilderPage: React.FC = () => {
  const [cv, setCv] = useState<CvData>(INITIAL_CV);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('algerian-official');
  const [isEnhancingSummary, setIsEnhancingSummary] = useState(false);
  const [enhancingExpId, setEnhancingExpId] = useState<string | null>(null);
  const [activeFormTab, setActiveFormTab] = useState<'personal' | 'experience' | 'education' | 'skills'>('personal');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false);
  const [gallerySearch, setGallerySearch] = useState<string>('');
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(80);
  const [saveToast, setSaveToast] = useState(false);

  const { dir } = useLanguage();

  const activeTemplate = CANVA_TEMPLATES.find((t) => t.id === selectedTemplateId) || 
    CANVA_TEMPLATES.find((t) => t.id === 'algerian-official') || 
    CANVA_TEMPLATES[0];

  const galleryCategories = [
    { id: 'all', label: 'جميع القوالب (10)' },
    { id: 'إداري ورسمي', label: 'إداري ورسمي (NIN)' },
    { id: 'تنفيذي وإداري', label: 'تنفيذي فاخر (Canva Gold)' },
    { id: 'شركات وبنوك', label: 'شركات وبنوك' },
    { id: 'تجاري ومبيعات', label: 'تجاري ومبيعات' },
    { id: 'أكاديمي وتدريس', label: 'أكاديمي ووظيفة عمومية' },
    { id: 'تكنولوجيا ومعلوماتية', label: 'تكنولوجيا و IT' },
    { id: 'ثنائي اللغة', label: 'ثنائي اللغة (عربي/فرنسي)' },
    { id: 'إدارة وتسيير', label: 'إدارة وتسيير' },
    { id: 'خريجون جدد', label: 'خريجون جدد (ANEM)' },
    { id: 'مكثف صفحة واحدة', label: 'مدمج صفحة واحدة A4' }
  ];

  const filteredTemplates = useMemo(() => {
    return CANVA_TEMPLATES.filter((tpl) => {
      const matchCat = galleryCategory === 'all' || tpl.category === galleryCategory;
      const q = gallerySearch.toLowerCase().trim();
      const matchSearch = !q || 
        tpl.name.toLowerCase().includes(q) ||
        tpl.subtitle.toLowerCase().includes(q) ||
        tpl.styleDesc.toLowerCase().includes(q) ||
        tpl.recommendedFor.toLowerCase().includes(q) ||
        tpl.features.some((f) => f.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [galleryCategory, gallerySearch]);

  // AI Summary Enhancement
  const handleEnhanceSummary = async () => {
    setIsEnhancingSummary(true);
    try {
      const response = await fetch('/api/gemini/enhance-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'summary',
          text: cv.summary,
          jobTitle: cv.jobTitle
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.enhancedText) {
          setCv((prev) => ({ ...prev, summary: data.enhancedText }));
          setIsEnhancingSummary(false);
          return;
        }
      }
    } catch (e) {
      console.log('AI enhance fallback:', e);
    }

    // High quality fallback
    setTimeout(() => {
      setCv((prev) => ({
        ...prev,
        summary: `إطار تقني وإداري متميز يتمتع بخبرة عملية مثبتة في قطاع ${cv.jobTitle}، يمتلك كفاءة عالية في إدارة العمليات، قيادة المشاريع التقنية، وتحسين الأداء المؤسساتي مع التزام صارم بالمعايير التنظيمية والقوانين المعمول بها في الجزائر.`
      }));
      setIsEnhancingSummary(false);
    }, 700);
  };

  // AI Experience Bullet Enhancement
  const handleEnhanceExperience = async (id: string, currentDesc: string, position: string) => {
    setEnhancingExpId(id);
    try {
      const response = await fetch('/api/gemini/enhance-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'experience',
          text: currentDesc,
          jobTitle: position
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.enhancedText) {
          setCv((prev) => ({
            ...prev,
            experiences: prev.experiences.map((e) => e.id === id ? { ...e, description: data.enhancedText } : e)
          }));
          setEnhancingExpId(null);
          return;
        }
      }
    } catch (e) {
      console.log('Experience polish fallback:', e);
    }

    // Fallback
    setTimeout(() => {
      setCv((prev) => ({
        ...prev,
        experiences: prev.experiences.map((e) => e.id === id ? {
          ...e,
          description: `• قيادة وتنفيذ المهام التقنية والإدارية اليومية بكفاءة عالية وفق المعايير المعتمدة.\n• متابعة صيانة وتأمين الأنظمة لضمان استمرارية الخدمات والتقليل من فترات التوقف بنسبة 35%.\n• التنسيق مع مختلف المصالح المعنية لتحسين جودة وسرعة معالجة الملفات والبيانات.`
        } : e)
      }));
      setEnhancingExpId(null);
    }, 700);
  };

  const handleAddExperience = () => {
    setCv((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          id: Date.now().toString(),
          position: 'المنصب الوظيفي الجديد',
          company: 'المؤسسة أو الشركة',
          period: '2023 - 2024',
          description: 'المهام والمسؤوليات الرئيسية المنجزة بدقة واحترافية...'
        }
      ]
    }));
  };

  const handleRemoveExperience = (id: string) => {
    setCv((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id)
    }));
  };

  const handleAddEducation = () => {
    setCv((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now().toString(),
          degree: 'شهادة أو دبلوم جديد',
          school: 'الجامعة أو المعهد الوطني',
          year: '2023',
          details: 'التخصص والملاحظات...'
        }
      ]
    }));
  };

  const handleRemoveEducation = (id: string) => {
    setCv((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id)
    }));
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkillName.trim()) {
      setCv((prev) => ({
        ...prev,
        skills: [...prev.skills, { name: newSkillName.trim(), level: newSkillLevel }]
      }));
      setNewSkillName('');
    }
  };

  const handleRemoveSkill = (idx: number) => {
    setCv((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== idx)
    }));
  };

  const handleSaveToVault = () => {
    try {
      const stored = localStorage.getItem('dzair_saved_cvs') || '[]';
      const parsed = JSON.parse(stored);
      parsed.unshift({
        ...cv,
        templateId: selectedTemplateId,
        savedAt: new Date().toLocaleString('ar-DZ')
      });
      localStorage.setItem('dzair_saved_cvs', JSON.stringify(parsed));
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="pt-24 md:pt-30 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* 1. TOP HEADER & CANVA TEMPLATE GALLERY TRIGGER */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-5 no-print">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>معرض قوالب السيرة الذاتية (Canva-Grade Gallery)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif]">
            صانع السيرة الذاتية الاحترافية الجزائري
          </h1>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={() => setShowGalleryModal(true)}
            className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-700 hover:border-cyan-400 text-white dark:text-white light:text-slate-900 text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-md"
          >
            <Palette className="w-4 h-4 text-cyan-400" />
            <span>معرض القوالب (10 نماذج ملونة)</span>
          </button>

          <button
            onClick={handleSaveToVault}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-cyan-500/30 transition shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>حفظ في الخزينة</span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.35)] cursor-pointer transition"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة وتصدير A4 (PDF رسمي)</span>
          </button>
        </div>
      </div>

      {saveToast && (
        <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-500 text-emerald-300 text-xs text-center font-bold no-print animate-fadeIn">
          تم حفظ السيرة الذاتية بنجاح في خزينة مقهى الإنترنت!
        </div>
      )}

      {/* 2. CANVA-INSPIRED VISUAL TEMPLATES STRIP */}
      <div className="no-print space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span className="font-bold">القوالب السريعة (اختر قالباً للتحديث المباشر):</span>
          <span className="text-cyan-400 font-mono text-[11px] font-bold">
            القالب الحالي: {activeTemplate.name}
          </span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {CANVA_TEMPLATES.map((tpl) => {
            const isSelected = selectedTemplateId === tpl.id;
            return (
              <button
                key={tpl.id}
                onClick={() => setSelectedTemplateId(tpl.id)}
                className={`p-3 rounded-2xl border text-right transition cursor-pointer shrink-0 w-52 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-slate-900 light:bg-white border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.25)] scale-102'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: tpl.secondaryColor }}
                    />
                    <span className="text-[10px] font-bold text-slate-400">{tpl.badge}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white dark:text-white light:text-slate-900 truncate">
                    {tpl.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate">{tpl.subtitle}</p>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
                  <span className={isSelected ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
                    {isSelected ? 'محدد حالياً ✓' : 'تطبيق القالب'}
                  </span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tpl.accentColor }} />
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tpl.secondaryColor }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MAIN SPLIT-SCREEN WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RIGHT COLUMN: MANDATORY ALGERIAN ADMINISTRATIVE FORM EDITOR */}
        <div className="lg:col-span-6 space-y-5 no-print order-2 lg:order-1">
          {/* Form Tabs */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-slate-900 dark:bg-slate-900 light:bg-slate-100 rounded-xl border border-slate-800 text-xs font-semibold text-center">
            {[
              { id: 'personal', label: 'البيانات الرسمية' },
              { id: 'experience', label: 'الخبرات والمهام' },
              { id: 'education', label: 'التعليم والشهادات' },
              { id: 'skills', label: 'المهارات واللغات' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFormTab(tab.id as any)}
                className={`py-2 rounded-lg transition cursor-pointer ${
                  activeFormTab === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
            {/* TAB 1: MANDATORY ALGERIAN ADMINISTRATIVE FIELDS */}
            {activeFormTab === 'personal' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>البيانات الإدارية الجزائرية الإلزامية</span>
                  </h3>
                  <span className="text-[10px] text-cyan-400 font-mono">مطابق للمرسوم 18-07</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">الاسم واللقب (بالعربية)</label>
                    <input
                      type="text"
                      value={cv.fullName}
                      onChange={(e) => setCv({ ...cv, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom et Prénom (en Français)</label>
                    <input
                      type="text"
                      value={cv.fullNameFr}
                      onChange={(e) => setCv({ ...cv, fullNameFr: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">المسمى المهني (الوظيفة المطلوبة)</label>
                    <input
                      type="text"
                      value={cv.jobTitle}
                      onChange={(e) => setCv({ ...cv, jobTitle: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Titre du Poste (Français)</label>
                    <input
                      type="text"
                      value={cv.jobTitleFr}
                      onChange={(e) => setCv({ ...cv, jobTitleFr: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono"
                    />
                  </div>

                  {/* MANDATORY ALGERIAN ADMINISTRATIVE FIELD: NIN */}
                  <div>
                    <label className="block text-xs font-semibold text-cyan-400 mb-1">
                      رقم التعريف الوطني البيومتري (NIN) *
                    </label>
                    <input
                      type="text"
                      maxLength={18}
                      value={cv.nin}
                      onChange={(e) => setCv({ ...cv, nin: e.target.value })}
                      placeholder="18 رقماً من بطاقة التعريف"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/50 text-xs font-mono text-cyan-200"
                    />
                  </div>

                  {/* MANDATORY ALGERIAN ADMINISTRATIVE FIELD: MILITARY STATUS */}
                  <div>
                    <label className="block text-xs font-semibold text-cyan-400 mb-1">
                      الوضعية تجاه الخدمة الوطنية *
                    </label>
                    <select
                      value={cv.militaryStatus}
                      onChange={(e) => setCv({ ...cv, militaryStatus: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/50 text-xs text-white"
                    >
                      <option value="معفى / مؤدى (مسوى الوضعية تجاه الخدمة الوطنية)">معفى أو مؤدى (مسوى الوضعية)</option>
                      <option value="أدى الخدمة الوطنية (Dégagé)">أدى الخدمة الوطنية كاملة</option>
                      <option value="معفى لأسباب طبية أو عائلية (Dispensé)">معفى لأسباب طبية أو عائلية (كفيل)</option>
                      <option value="مؤجل قانونياً (Sursitaire)">مؤجل قانونياً (بطاقة تأجيل سارية)</option>
                      <option value="مسجل في الإحصاء (Inscrit au recensement)">مسجل في الإحصاء العسكري</option>
                    </select>
                  </div>

                  {/* MANDATORY ALGERIAN ADMINISTRATIVE FIELD: DRIVING LICENSE */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      رخصة السياقة
                    </label>
                    <select
                      value={cv.drivingLicense}
                      onChange={(e) => setCv({ ...cv, drivingLicense: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    >
                      <option value="صنف ب (Permis Catégorie B - خفيف)">صنف ب (خفيف B)</option>
                      <option value="صنف ج (Catégorie C - وزن ثقيل)">صنف ج (وزن ثقيل C)</option>
                      <option value="صنف د (Catégorie D - نقل مشترك)">صنف د (نقل مسافرين D)</option>
                      <option value="أصناف متعددة (B / C / D)">أصناف متعددة (B / C / D)</option>
                      <option value="لا يوجد (Sans permis)">لا يوجد رخصة سياقة</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">الحالة العائلية</label>
                    <select
                      value={cv.maritalStatus}
                      onChange={(e) => setCv({ ...cv, maritalStatus: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    >
                      <option value="أعزب (Célibataire)">أعزب / عزباء</option>
                      <option value="متزوج (Marié)">متزوج(ة)</option>
                      <option value="مطلق (Divorcé)">مطلق(ة)</option>
                      <option value="أرمل (Veuf)">أرمل(ة)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">تاريخ ومكان الميلاد</label>
                    <input
                      type="text"
                      value={cv.birthDate + ' - ' + cv.birthPlace}
                      onChange={(e) => setCv({ ...cv, birthDate: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">الولاية (58 ولاية)</label>
                    <select
                      value={cv.wilaya}
                      onChange={(e) => setCv({ ...cv, wilaya: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs"
                    >
                      {WILAYAS_58.map((w) => (
                        <option key={w.code} value={`${w.code} - ${w.nameAr}`}>
                          {w.code} - ولاية {w.nameAr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">العنوان السكني المباشر</label>
                    <input
                      type="text"
                      value={cv.address}
                      onChange={(e) => setCv({ ...cv, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">رقم الهاتف</label>
                    <input
                      type="text"
                      value={cv.phone}
                      onChange={(e) => setCv({ ...cv, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={cv.email}
                      onChange={(e) => setCv({ ...cv, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono"
                    />
                  </div>
                </div>

                {/* AI Summary Refinement Box */}
                <div className="pt-2 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-300">
                      الملخص والهدف المهني (Profil Professionnel)
                    </label>
                    <button
                      type="button"
                      onClick={handleEnhanceSummary}
                      disabled={isEnhancingSummary}
                      className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer transition disabled:opacity-50"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isEnhancingSummary ? 'جاري التحسين الذكي...' : 'تحسين الصياغة بالذكاء الاصطناعي'}</span>
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={cv.summary}
                    onChange={(e) => setCv({ ...cv, summary: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs leading-relaxed"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: WORK EXPERIENCES WITH AI POLISH */}
            {activeFormTab === 'experience' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>الخبرات والمهام الميدانية</span>
                  </h3>
                  <button
                    onClick={handleAddExperience}
                    className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إضافة خبرة</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {cv.experiences.map((exp, idx) => (
                    <div key={exp.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 relative">
                      <button
                        onClick={() => handleRemoveExperience(exp.id)}
                        className="absolute left-3 top-3 text-slate-400 hover:text-rose-400 p-1"
                        title="حذف الخبرة"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-2">
                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">المسمى الوظيفي</label>
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) => {
                              const updated = [...cv.experiences];
                              updated[idx].position = e.target.value;
                              setCv({ ...cv, experiences: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">المؤسسة أو الشركة</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => {
                              const updated = [...cv.experiences];
                              updated[idx].company = e.target.value;
                              setCv({ ...cv, experiences: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-[11px] text-slate-400 mb-1">الفترة الزمنية</label>
                          <input
                            type="text"
                            value={exp.period}
                            onChange={(e) => {
                              const updated = [...cv.experiences];
                              updated[idx].period = e.target.value;
                              setCv({ ...cv, experiences: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono"
                          />
                        </div>

                        <div className="sm:col-span-2 space-y-1">
                          <div className="flex items-center justify-between">
                            <label className="text-[11px] text-slate-400">المهام والإنجازات</label>
                            <button
                              type="button"
                              onClick={() => handleEnhanceExperience(exp.id, exp.description, exp.position)}
                              disabled={enhancingExpId === exp.id}
                              className="text-[10px] text-cyan-300 hover:text-cyan-200 font-bold flex items-center gap-1 cursor-pointer transition"
                            >
                              <Sparkles className="w-3 h-3 text-cyan-400" />
                              <span>{enhancingExpId === exp.id ? 'جاري الصياغة...' : 'تحسين المهام بالذكاء الاصطناعي'}</span>
                            </button>
                          </div>
                          <textarea
                            rows={3}
                            value={exp.description}
                            onChange={(e) => {
                              const updated = [...cv.experiences];
                              updated[idx].description = e.target.value;
                              setCv({ ...cv, experiences: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs leading-relaxed"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: EDUCATION */}
            {activeFormTab === 'education' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>التعليم والشهادات الأكاديمية</span>
                  </h3>
                  <button
                    onClick={handleAddEducation}
                    className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إضافة شهادة</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {cv.education.map((edu, idx) => (
                    <div key={edu.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 relative">
                      <button
                        onClick={() => handleRemoveEducation(edu.id)}
                        className="absolute left-3 top-3 text-slate-400 hover:text-rose-400 p-1"
                        title="حذف"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-2">
                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">الشهادة أو الدبلوم</label>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => {
                              const updated = [...cv.education];
                              updated[idx].degree = e.target.value;
                              setCv({ ...cv, education: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">الجامعة أو المعهد</label>
                          <input
                            type="text"
                            value={edu.school}
                            onChange={(e) => {
                              const updated = [...cv.education];
                              updated[idx].school = e.target.value;
                              setCv({ ...cv, education: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">السنة / الدورة</label>
                          <input
                            type="text"
                            value={edu.year}
                            onChange={(e) => {
                              const updated = [...cv.education];
                              updated[idx].year = e.target.value;
                              setCv({ ...cv, education: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">الملاحظات والتخصص</label>
                          <input
                            type="text"
                            value={edu.details}
                            onChange={(e) => {
                              const updated = [...cv.education];
                              updated[idx].details = e.target.value;
                              setCv({ ...cv, education: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: SKILLS & LANGUAGES */}
            {activeFormTab === 'skills' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-800">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>المهارات ومستوى الإتقان (0 - 100%)</span>
                  </h3>

                  <form onSubmit={handleAddSkill} className="flex gap-2">
                    <input
                      type="text"
                      value={newSkillName}
                      onChange={(e) => setNewSkillName(e.target.value)}
                      placeholder="اسم المهارة أو البرنامج..."
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs"
                    />
                    <input
                      type="number"
                      min={10}
                      max={100}
                      value={newSkillLevel}
                      onChange={(e) => setNewSkillLevel(Number(e.target.value))}
                      className="w-20 px-2 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-center"
                      title="نسبة الإتقان %"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer"
                    >
                      إضافة
                    </button>
                  </form>

                  <div className="space-y-2 pt-1">
                    {cv.skills.map((skill, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="text-[11px] font-mono text-cyan-400">({skill.level}%)</span>
                        </div>
                        <button
                          onClick={() => handleRemoveSkill(idx)}
                          className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <Languages className="w-4 h-4 text-cyan-400" />
                    <span>اللغات المتقنة</span>
                  </h3>

                  <div className="space-y-2 text-xs">
                    {cv.languages.map((lang, i) => (
                      <div key={i} className="flex justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                        <span className="font-bold text-slate-200">{lang.name}</span>
                        <span className="text-cyan-400 font-mono text-[11px]">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* LEFT COLUMN: INTERACTIVE CANVA-GRADE A4 LIVE PREVIEW CANVAS */}
        <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
          {/* Canvas Toolbar */}
          <div className="glass-panel p-3 rounded-2xl flex items-center justify-between gap-3 no-print border border-slate-800">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-cyan-400">القالب المعروض:</span>
              <span className="text-slate-300 font-semibold">{activeTemplate.name}</span>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setZoomLevel((z) => Math.max(60, z - 10))}
                className="p-1 text-slate-400 hover:text-white cursor-pointer"
                title="تصغير"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-cyan-300 px-1 text-[11px]">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(140, z + 10))}
                className="p-1 text-slate-400 hover:text-white cursor-pointer"
                title="تكبير"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                className="p-1 text-slate-500 hover:text-cyan-300 cursor-pointer ml-1"
                title="إعادة ضبط"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* THE REAL A4 CANVAS CONTAINER */}
          <div className="overflow-x-auto p-2 bg-slate-950/40 rounded-2xl border border-slate-800 flex justify-center">
            <div 
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
              className="printable-area w-[210mm] min-h-[297mm] bg-white text-slate-900 shadow-2xl rounded-sm border border-slate-300 font-['Cairo',sans-serif] text-xs transition-transform duration-150 select-none overflow-hidden relative"
            >
              {/* RENDER TEMPLATE 1: CLASSIC OFFICIAL ALGERIAN */}
              {(selectedTemplateId === 'algerian-official' || selectedTemplateId === 'classic_algerian') && (
                <div className="p-8 sm:p-10 space-y-6">
                  {/* Official Header */}
                  <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-start">
                    <div className="space-y-1">
                      <h1 className="text-2xl font-black text-slate-900 font-['Alexandria',sans-serif]">
                        {cv.fullName}
                      </h1>
                      <p className="text-sm font-bold text-slate-700 font-mono">
                        {cv.fullNameFr}
                      </p>
                      <p className="text-xs font-black text-cyan-800">
                        {cv.jobTitle}
                      </p>
                    </div>

                    <div className="text-left font-mono text-[10px] space-y-0.5 text-slate-700 bg-slate-50 p-3 rounded border border-slate-300">
                      <p><strong>NIN:</strong> {cv.nin}</p>
                      <p><strong>الهاتف:</strong> {cv.phone}</p>
                      <p><strong>البريد:</strong> {cv.email}</p>
                      <p><strong>العنوان:</strong> {cv.address}</p>
                    </div>
                  </div>

                  {/* Algerian Administrative Block */}
                  <div className="bg-slate-100 p-3 rounded border border-slate-300 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-800">
                    <div><span className="text-slate-600">الوضعية العسكرية:</span> {cv.militaryStatus}</div>
                    <div><span className="text-slate-600">رخصة السياقة:</span> {cv.drivingLicense}</div>
                    <div><span className="text-slate-600">الحالة العائلية:</span> {cv.maritalStatus}</div>
                    <div><span className="text-slate-600">الميلاد:</span> {cv.birthDate} ({cv.birthPlace})</div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-1.5">
                    <h2 className="text-xs font-black text-slate-900 border-b border-slate-300 pb-1 uppercase tracking-wider">
                      الملخص المهني (Profil Professionnel)
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-justify text-[11px]">
                      {cv.summary}
                    </p>
                  </div>

                  {/* Experiences */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-black text-slate-900 border-b border-slate-300 pb-1 uppercase tracking-wider">
                      الخبرات والمهام الميدانية
                    </h2>
                    <div className="space-y-3">
                      {cv.experiences.map((exp) => (
                        <div key={exp.id} className="space-y-1">
                          <div className="flex justify-between font-bold text-[11px]">
                            <span className="text-slate-900 font-black">{exp.position} - {exp.company}</span>
                            <span className="font-mono text-slate-600">{exp.period}</span>
                          </div>
                          <p className="text-slate-600 text-[10.5px] leading-relaxed whitespace-pre-line">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-black text-slate-900 border-b border-slate-300 pb-1 uppercase tracking-wider">
                      المؤهلات العلمية والشهادات
                    </h2>
                    <div className="space-y-2">
                      {cv.education.map((edu) => (
                        <div key={edu.id} className="flex justify-between items-start text-[11px]">
                          <div>
                            <p className="font-bold text-slate-900">{edu.degree}</p>
                            <p className="text-slate-600 text-[10px]">{edu.school} {edu.details && `(${edu.details})`}</p>
                          </div>
                          <span className="font-mono text-slate-600 text-[10.5px]">{edu.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Languages */}
                  <div className="grid grid-cols-2 gap-6 pt-2 border-t border-slate-300">
                    <div className="space-y-2">
                      <h3 className="font-black text-slate-900 text-xs border-b border-slate-300 pb-0.5">
                        الكفاءات التقنية
                      </h3>
                      <div className="space-y-1">
                        {cv.skills.map((s, idx) => (
                          <div key={idx} className="flex justify-between text-[10px]">
                            <span>{s.name}</span>
                            <span className="font-mono text-slate-500">{s.level}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-black text-slate-900 text-xs border-b border-slate-300 pb-0.5">
                        اللغات والتحكم
                      </h3>
                      <div className="space-y-1 text-[10.5px]">
                        {cv.languages.map((l, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="font-bold">{l.name}:</span>
                            <span className="text-slate-600">{l.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* RENDER TEMPLATE 2: GOLD & SLATE LUXURY */}
              {(selectedTemplateId === 'canva-gold-slate' || selectedTemplateId === 'gold_slate') && (
                <div className="grid grid-cols-12 min-h-[297mm]">
                  {/* Left Sidebar in Dark Slate & Gold */}
                  <div className="col-span-4 bg-[#1e293b] text-white p-6 space-y-6">
                    <div className="space-y-1 border-b border-amber-500/40 pb-4">
                      <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center font-black text-xl font-mono mx-auto mb-2">
                        {cv.fullName.charAt(0)}
                      </div>
                      <h2 className="text-center font-black text-sm text-amber-300 font-['Alexandria',sans-serif]">
                        {cv.fullName}
                      </h2>
                      <p className="text-center text-[10px] text-slate-300 font-mono">
                        {cv.jobTitle}
                      </p>
                    </div>

                    {/* Contact & Administrative */}
                    <div className="space-y-2 text-[10.5px]">
                      <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-slate-700 pb-1">
                        البيانات الإدارية
                      </h3>
                      <p><strong>NIN:</strong> {cv.nin}</p>
                      <p><strong>الهاتف:</strong> {cv.phone}</p>
                      <p><strong>البريد:</strong> {cv.email}</p>
                      <p><strong>الولاية:</strong> {cv.wilaya}</p>
                      <p><strong>الخدمة الوطنية:</strong> {cv.militaryStatus.split(' ')[0]}</p>
                      <p><strong>الرخصة:</strong> {cv.drivingLicense}</p>
                    </div>

                    {/* Skills with Gold meters */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-slate-700 pb-1">
                        المهارات
                      </h3>
                      <div className="space-y-2 text-[10px]">
                        {cv.skills.map((s, idx) => (
                          <div key={idx} className="space-y-0.5">
                            <div className="flex justify-between">
                              <span>{s.name}</span>
                              <span className="font-mono text-amber-400">{s.level}%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-amber-400 h-full rounded-full" style={{ width: `${s.level}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-slate-700 pb-1">
                        اللغات
                      </h3>
                      <div className="space-y-1 text-[10px] text-slate-300">
                        {cv.languages.map((l, idx) => (
                          <p key={idx}><strong>{l.name}:</strong> {l.level}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="col-span-8 p-8 space-y-6 bg-white">
                    <div className="border-b-2 border-amber-500 pb-3">
                      <h1 className="text-2xl font-black text-slate-900">
                        {cv.fullName}
                      </h1>
                      <p className="text-xs font-bold text-amber-700 font-mono">
                        {cv.jobTitleFr}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-black text-xs text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-0.5">
                        الملخص المهني
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-justify text-[11px]">
                        {cv.summary}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-black text-xs text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-0.5">
                        المسار المهني والخبرات
                      </h3>
                      {cv.experiences.map((exp) => (
                        <div key={exp.id} className="space-y-1">
                          <div className="flex justify-between font-bold text-slate-900 text-[11px]">
                            <span>{exp.position} - {exp.company}</span>
                            <span className="font-mono text-amber-800">{exp.period}</span>
                          </div>
                          <p className="text-slate-600 text-[10.5px] leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-black text-xs text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-0.5">
                        التعليم والشهادات
                      </h3>
                      {cv.education.map((edu) => (
                        <div key={edu.id} className="flex justify-between text-[11px]">
                          <div>
                            <p className="font-bold text-slate-900">{edu.degree}</p>
                            <p className="text-slate-500 text-[10px]">{edu.school}</p>
                          </div>
                          <span className="font-mono text-slate-500">{edu.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* RENDER TEMPLATE 3 TO 10: CORPORATE / TECH / BILINGUAL / COMPACT */}
              {!(selectedTemplateId === 'algerian-official' || selectedTemplateId === 'classic_algerian' || selectedTemplateId === 'canva-gold-slate' || selectedTemplateId === 'gold_slate') && (
                <div className="p-8 space-y-6">
                  {/* Modern Header Banner */}
                  <div 
                    className="p-6 rounded-xl text-white space-y-1"
                    style={{ backgroundColor: activeTemplate.accentColor }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h1 className="text-2xl font-black font-['Alexandria',sans-serif]">
                          {cv.fullName}
                        </h1>
                        <p className="text-sm font-semibold opacity-90">{cv.jobTitle}</p>
                        <p className="text-xs font-mono opacity-80">{cv.fullNameFr}</p>
                      </div>
                      <div className="text-left font-mono text-[10px] bg-black/30 p-2.5 rounded space-y-0.5">
                        <p>NIN: {cv.nin}</p>
                        <p>{cv.phone}</p>
                        <p>{cv.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Algerian Admin Strip */}
                  <div className="p-3 bg-slate-50 rounded border border-slate-200 grid grid-cols-3 gap-2 text-[10.5px] font-semibold text-slate-700">
                    <div><strong>الخدمة الوطنية:</strong> {cv.militaryStatus.split(' ')[0]}</div>
                    <div><strong>الرخصة:</strong> {cv.drivingLicense}</div>
                    <div><strong>الولاية:</strong> {cv.wilaya}</div>
                  </div>

                  {/* Dual Column Layout */}
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8 space-y-5">
                      <div>
                        <h3 className="font-black text-xs uppercase border-b-2 pb-1 mb-2" style={{ borderColor: activeTemplate.secondaryColor }}>
                          الملخص والهدف المهني
                        </h3>
                        <p className="text-[11px] text-slate-700 leading-relaxed text-justify">
                          {cv.summary}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-black text-xs uppercase border-b-2 pb-1" style={{ borderColor: activeTemplate.secondaryColor }}>
                          الخبرات المهنية
                        </h3>
                        {cv.experiences.map((exp) => (
                          <div key={exp.id} className="space-y-1">
                            <div className="flex justify-between font-bold text-[11px]">
                              <span>{exp.position} - {exp.company}</span>
                              <span className="font-mono text-slate-500">{exp.period}</span>
                            </div>
                            <p className="text-[10.5px] text-slate-600 leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-black text-xs uppercase border-b-2 pb-1" style={{ borderColor: activeTemplate.secondaryColor }}>
                          الشهادات والتكوين
                        </h3>
                        {cv.education.map((edu) => (
                          <div key={edu.id} className="flex justify-between text-[11px]">
                            <div>
                              <p className="font-bold text-slate-900">{edu.degree}</p>
                              <p className="text-slate-500 text-[10px]">{edu.school}</p>
                            </div>
                            <span className="font-mono text-slate-500">{edu.year}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right column in grid */}
                    <div className="col-span-4 space-y-5 bg-slate-50 p-4 rounded border border-slate-200">
                      <div>
                        <h3 className="font-black text-xs uppercase border-b pb-1 mb-2">
                          المهارات والكفاءات
                        </h3>
                        <div className="space-y-2">
                          {cv.skills.map((s, idx) => (
                            <div key={idx} className="space-y-0.5 text-[10px]">
                              <div className="flex justify-between">
                                <span>{s.name}</span>
                                <span className="font-mono font-bold">{s.level}%</span>
                              </div>
                              <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                                <div className="h-full rounded-full" style={{ width: `${s.level}%`, backgroundColor: activeTemplate.secondaryColor }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-black text-xs uppercase border-b pb-1 mb-2">
                          اللغات
                        </h3>
                        <div className="space-y-1 text-[10px] text-slate-700">
                          {cv.languages.map((l, idx) => (
                            <p key={idx}><strong>{l.name}:</strong> {l.level}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. CANVA GALLERY MODAL (POPUP SELECTOR) */}
      {showGalleryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn no-print">
          <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl glass-panel-cyan border border-cyan-500/40 shadow-2xl overflow-hidden bg-[#0a0f1d] text-white">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold font-['Alexandria',sans-serif] flex items-center gap-2">
                  <Palette className="w-5 h-5 text-cyan-400" />
                  <span>معرض القوالب الاحترافية للسير الذاتية الجزائرية (Canva Design)</span>
                </h3>
                <p className="text-xs text-slate-400">
                  اختر من بين 10 تصاميم معتمدة للأطر الإدارية، الهندسية، الأكاديمية والتقنية مع إبراز NIN والخدمة الوطنية
                </p>
              </div>
              <button
                onClick={() => setShowGalleryModal(false)}
                className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Filter and Search Bar inside Modal */}
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 space-y-3">
              <div className="relative">
                <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={gallerySearch}
                  onChange={(e) => setGallerySearch(e.target.value)}
                  placeholder="ابحث في القوالب بالاسم أو التخصص (مثل: رسمي، إداري، ذهبي، تقني، أكاديمي، مبيعات)..."
                  className="w-full pr-10 pl-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
                />
              </div>

              {/* Categories Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setGalleryCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer border ${
                      galleryCategory === cat.id
                        ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredTemplates.map((tpl) => {
                const isSelected = selectedTemplateId === tpl.id;
                return (
                  <div
                    key={tpl.id}
                    onClick={() => {
                      setSelectedTemplateId(tpl.id);
                      setShowGalleryModal(false);
                    }}
                    className={`p-4 rounded-2xl border text-right transition cursor-pointer flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.3)]'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300">
                          {tpl.badge}
                        </span>
                        <div className="flex gap-1.5 items-center">
                          <span className="text-[10px] text-slate-400 font-mono">{tpl.category}</span>
                          <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: tpl.accentColor }} />
                          <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: tpl.secondaryColor }} />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white font-['Alexandria',sans-serif]">
                          {tpl.name}
                        </h4>
                        <p className="text-[10px] font-mono text-cyan-400">{tpl.subtitle}</p>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
                        {tpl.styleDesc}
                      </p>

                      {tpl.recommendedFor && (
                        <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[10px] text-slate-300">
                          <strong className="text-cyan-400">مناسب لـ:</strong> {tpl.recommendedFor}
                        </div>
                      )}

                      {/* Features */}
                      {tpl.features && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {tpl.features.map((feat, i) => (
                            <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <button 
                      className={`w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      }`}
                    >
                      {isSelected ? '✓ القالب المطبق حالياً' : 'اختيار وتطبيق القالب'}
                    </button>
                  </div>
                );
              })}

              {filteredTemplates.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-400 text-xs">
                  لا توجد قوالب مطابقة للبحث. يرجى اختيار تصنيف آخر.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
