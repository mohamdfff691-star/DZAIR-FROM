import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Building2, 
  FileText, 
  BookOpen, 
  Calculator, 
  CreditCard,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { LiveFormSimulator } from '../components/LiveFormSimulator';
import { ALGERIAN_SECTORS } from '../data/sectorsData';
import { useLanguage } from '../contexts/LanguageContext';

export const HomePage: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const navigate = useNavigate();

  const handleSelectFormInSimulator = (formId: string) => {
    navigate(`/dossier-builder?form=${formId}`);
  };

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="pt-24 md:pt-32 pb-16 space-y-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden tech-grid-pattern pb-8">
        {/* Ambient Neon Blobs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-4xl">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/80 dark:bg-cyan-950/80 light:bg-cyan-100 border border-cyan-500/40 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 text-xs font-semibold shadow-[0_0_20px_rgba(0,242,254,0.15)] animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t.heroTagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif] tracking-tight leading-[1.2]">
            {t.heroHeadline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 drop-shadow-[0_0_25px_rgba(0,242,254,0.4)]">
              {t.heroHeadlineHighlight}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            {t.heroSubheadline}
          </p>

          {/* Action CTAs with Route Transitions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/dossier-builder"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm flex items-center gap-2.5 shadow-[0_0_30px_rgba(0,242,254,0.45)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.startNow}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>

            <Link
              to="/portals"
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 text-white dark:text-white light:text-slate-900 font-semibold text-sm border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 transition flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>{t.explorePortals}</span>
            </Link>
          </div>

          {/* High-Trust Value Props Strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t.freeNoWatermark}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{t.officialVerified}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>{t.heroStatTimeSaved}</span>
            </div>
          </div>
        </div>

        {/* 2. EMBEDDED LIVE FORM SIMULATOR WIDGET */}
        <div className="max-w-5xl mx-auto mt-12 px-4 sm:px-6">
          <LiveFormSimulator onSelectFormInWizard={handleSelectFormInSimulator} />
        </div>
      </section>

      {/* 3. SECTOR CARDS PREVIEW GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>تغطية قطاعية شاملة لكافة الهيئات الرسمية</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif]">
            دليل القطاعات والخدمات الوزارية المدمجة
          </h2>
          <p className="text-slate-400 text-xs md:text-sm">
            انقر على أي قطاع للانتقال إلى دليله المفصل واستعراض المنصات والوثائق الإلزامية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALGERIAN_SECTORS.map((sector) => {
            const sectorName = language === 'fr' ? sector.nameFr : language === 'en' ? sector.nameEn : sector.nameAr;
            const ministry = language === 'fr' ? sector.ministryFr : sector.ministryAr;

            return (
              <Link
                key={sector.id}
                to={`/portals?sector=${sector.id}`}
                className="group relative rounded-2xl glass-panel p-5 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                      {sector.services.length} خدمات
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-300 transition-colors font-['Alexandria',sans-serif] mb-1">
                    {sectorName}
                  </h3>

                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {ministry}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                  <span>استعراض المنصات والدليل</span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Featured Educational and Career Modules Ribbon */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/cv-builder"
            className="p-6 rounded-2xl glass-panel-cyan border border-cyan-500/30 flex items-center justify-between gap-4 group hover:scale-[1.01] transition-transform"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                جديد المنصة
              </span>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif] group-hover:text-cyan-300">
                صانع السيرة الذاتية الذكي (10 نماذج احترافية)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                إنشاء سير ذاتية متوافقة مع متطلبات التوظيف ومسابقات الوظيفة العمومية، مع تحسين النصوص بالذكاء الاصطناعي وطباعة A4 فورية.
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
          </Link>

          <Link
            to="/exams-library"
            className="p-6 rounded-2xl glass-panel-cyan border border-cyan-500/30 flex items-center justify-between gap-4 group hover:scale-[1.01] transition-transform"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                مركز الموارد البيداغوجية
              </span>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif] group-hover:text-cyan-300">
                بنك الامتحانات والاختبارات الجزائرية
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                مواضيع امتحانات واختبارات رسمية ونماذج البكالوريا والتعليم المتوسط BEM مرفقة بالحلول وسلالم التنقيط، جاهزة للطباعة بنقرة واحدة.
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. PLATFORM QUANTITATIVE METRICS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="font-mono text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              58
            </span>
            <p className="text-xs text-slate-400 font-medium">{t.heroStatWilayas}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="font-mono text-3xl md:text-4xl font-black text-cyan-300">
              +35
            </span>
            <p className="text-xs text-slate-400 font-medium">{t.heroStatPortals}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="font-mono text-3xl md:text-4xl font-black text-white">
              +140,000
            </span>
            <p className="text-xs text-slate-400 font-medium">{t.heroStatDocs}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="font-mono text-3xl md:text-4xl font-black text-emerald-400">
              ~ 1.8 دقيقة
            </span>
            <p className="text-xs text-slate-400 font-medium">متوسط زمن إنجاز الاستمارة</p>
          </div>
        </div>
      </section>

      {/* 5. QUICK NAVIGATION BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl glass-panel-cyan p-8 md:p-12 border border-cyan-500/30 text-center space-y-5 relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-black text-white font-['Alexandria',sans-serif]">
            جاهز لمضاعفة سرعة وأرباح مقهى الإنترنت الخاص بك؟
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            انضم الآن إلى شبكة مقاهي الإنترنت ومكاتب الخدمات العمومية المعتمدة في كامل التراب الوطني واستفد من الأتمتة الشاملة.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/dossier-builder"
              className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-lg cursor-pointer transition"
            >
              ابدأ بناء الاستمارات الآن
            </Link>
            <Link
              to="/calculator"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 cursor-pointer transition"
            >
              احسب أرباحك التقديرية
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
