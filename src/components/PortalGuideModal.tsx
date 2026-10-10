import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  FileCheck, 
  CreditCard, 
  ListOrdered, 
  AlertCircle, 
  Printer, 
  FileDown, 
  Building2, 
  Sparkles,
  ShieldCheck,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { GovernmentService, GovernmentSector } from '../data/sectorsData';
import { useLanguage } from '../contexts/LanguageContext';

interface PortalGuideModalProps {
  service: GovernmentService | null;
  sector: GovernmentSector | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PortalGuideModal: React.FC<PortalGuideModalProps> = ({
  service,
  sector,
  isOpen,
  onClose
}) => {
  const { language, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<'docs' | 'steps' | 'fees'>('docs');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !service) return null;

  const title = language === 'fr' ? service.titleFr : language === 'en' ? service.titleEn : service.titleAr;
  const desc = language === 'fr' ? service.descriptionFr : language === 'en' ? service.descriptionEn : service.descriptionAr;
  const docs = language === 'fr' ? service.requiredDocsFr : language === 'en' ? service.requiredDocsEn : service.requiredDocsAr;
  const ministry = language === 'fr' ? sector?.ministryFr : sector?.ministryAr;

  // Default rich guide steps if not explicitly defined
  const steps = service.guideStepsAr || [
    'تجهيز الوثائق الرسمية الإلزامية بصيغة رقمية أو ورقية (بطاقة التعريف البيومترية، الصك المشطوب، وشهادة الإقامة).',
    'الولوج إلى البوابة الحكومية الرسمية عبر الرابط المعتمد أو استخدام المعالج الآلي لـ DZAIR FORM.',
    'إدخال رقم التعريف الوطني البيومتري (NIN) ورقم الضمان الاجتماعي أو الحساب البريدي بدقة متناهية.',
    'التأكد من مطابقة المعلومات المدخلة مع سجلات الحالة المدنية ببلدية الإقامة لتفادي تعليق أو رفض الطلب.',
    'سحب واستخراج وصل التسجيل أو استدعاء الموعد الرسمي، وطباعته بجودة A4 واضحة ومختومة.'
  ];

  const fees = service.feesAr || 'مجاني بصفة رسمية عبر البوابة الرقمية (بدون رسوم إضافية).';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(service.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn no-print">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl glass-panel-cyan border border-cyan-500/40 shadow-2xl overflow-hidden bg-[#0a0f1d] dark:bg-[#0a0f1d] light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900"
        dir={dir}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-start justify-between gap-4 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                {sector ? (language === 'fr' ? sector.nameFr : sector.nameAr) : 'بوابة حكومية'}
              </span>
              <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 inline" />
                رابط رسمي معتمد
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-['Alexandria',sans-serif] text-white dark:text-white light:text-slate-900 leading-snug">
              {title}
            </h3>

            {ministry && (
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                {ministry}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-200 text-slate-400 hover:text-white cursor-pointer transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-800 dark:border-slate-800 light:border-slate-200 px-6 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('docs')}
            className={`py-3 px-4 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'docs'
                ? 'border-cyan-400 text-cyan-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>الوثائق والشروط المطلوبة ({docs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('steps')}
            className={`py-3 px-4 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'steps'
                ? 'border-cyan-400 text-cyan-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <ListOrdered className="w-4 h-4" />
            <span>خطوات التسجيل والتسديد</span>
          </button>

          <button
            onClick={() => setActiveTab('fees')}
            className={`py-3 px-4 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'fees'
                ? 'border-cyan-400 text-cyan-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>الرسوم وتوصيات السيبار</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm">
          {/* TAB 1: REQUIRED DOCUMENTS */}
          {activeTab === 'docs' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-3 rounded-xl bg-cyan-950/30 dark:bg-cyan-950/30 light:bg-cyan-50 border border-cyan-500/20 text-cyan-300 dark:text-cyan-300 light:text-cyan-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                <p className="text-xs leading-relaxed">
                  يجب على المواطن أو صاحب السيبار التحقق من سلامة الوثائق التالية ومطابقة الأسماء بالأحرف اللاتينية والعربية كما هي مدونة في شهادة الميلاد الأصلية:
                </p>
              </div>

              <div className="space-y-2.5">
                {docs.map((doc, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: STEP BY STEP GUIDE */}
          {activeTab === 'steps' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-3">
                {steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-800 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FEES & CYBER TIPS */}
          {activeTab === 'fees' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-cyan-400 block">التعريفة الرسمية للهيئة:</span>
                <p className="text-sm font-semibold text-white dark:text-white light:text-slate-900 font-mono">
                  {fees}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 dark:bg-amber-950/20 light:bg-amber-50 border border-amber-500/30 text-amber-300 dark:text-amber-300 light:text-amber-900 space-y-2">
                <span className="font-bold flex items-center gap-1.5 text-xs text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  توصية ذهبية لأصحاب مقاهي الإنترنت (السيبار):
                </span>
                <p className="text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
                  احرص دائماً على تسليم الزبون نسختين مطبوعتين من وصل التسجيل الرسمي أو استدعاء الموعد. احتفظ بنسخة مؤقتة في خزينة DZAIR FORM حتى يتمكن الزبون من إعادة طباعتها في حال ضياع الوصل دون إعادة التسجيل من الصفر.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-3 py-2 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-200 hover:bg-slate-800 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم نسخ الرابط' : 'نسخ رابط المنصة'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {service.associatedFormId && (
              <Link
                to={`/dossier-builder?form=${service.associatedFormId}`}
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-200 hover:bg-cyan-950 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 border border-cyan-500/30 text-xs font-bold flex items-center gap-1.5 transition"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>توليد الاستمارة في DZAIR FORM</span>
              </Link>
            )}

            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,242,254,0.3)] transition"
            >
              <span>دخول المنصة الرسمية</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
