import React from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Printer, 
  Layers, 
  Clock, 
  FileCheck,
  Building2,
  Users
} from 'lucide-react';
import { LiveFormSimulator } from './LiveFormSimulator';

interface HeroSectionProps {
  onStartWizard: () => void;
  onExplorePortals: () => void;
  onSelectFormInWizard?: (formId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartWizard,
  onExplorePortals,
  onSelectFormInWizard
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden tech-grid-pattern">
      {/* Background Animated Ambient Glowing Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Authoritative Badge */}
        <div className="text-center space-y-5 max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-[0_0_20px_rgba(0,242,254,0.15)] animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>المنظومة الرقمية الموحدة لمقاهي الإنترنت ومكاتب الخدمات العمومية في الجزائر 🇩🇿</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-['Alexandria',sans-serif] tracking-tight leading-[1.2]">
            أتمتة الاستمارات الإدارية وبناء الملفات{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]">
              في أقل من 3 ثوانٍ
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            استبدل عشرات علامات التبويب المشتتة بمنصة مؤسساتية واحدة. توليد فوري لاستمارات سكنات عدل 3، منحة البطالة، عقود الحالة المدنية، تسجيلات المراسلة، وتصاريح الشرف بجودة A4 رسمية معتمدة وبدون علامة مائية.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onStartWizard}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm flex items-center gap-2.5 shadow-[0_0_30px_rgba(0,242,254,0.45)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>معالج الاستمارات وبناء الملفات الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={onExplorePortals}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 hover:border-cyan-500/40 transition flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>دليل البوابات الحكومية الرسمية (30+)</span>
            </button>
          </div>

          {/* High-Trust Value Props Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>طباعة A4 رسمية بدون علامة مائية</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>مطابق للقوانين والمراسيم الجزائرية</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>توفير 80% من وقت صاحب السيبار</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LIVE FORM SIMULATOR WIDGET */}
        <div className="max-w-5xl mx-auto my-6">
          <LiveFormSimulator onSelectFormInWizard={onSelectFormInWizard} />
        </div>

        {/* Quantitative Platform Metrics Strip */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              58
            </span>
            <p className="text-xs text-slate-400 font-medium">ولاية مغطاة بالكامل</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="font-mono text-3xl font-black text-cyan-300">
              +30
            </span>
            <p className="text-xs text-slate-400 font-medium">بوابة وهيئة حكومية مدمجة</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="font-mono text-3xl font-black text-white">
              +140,000
            </span>
            <p className="text-xs text-slate-400 font-medium">استمارة رسمية منجزة</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="font-mono text-3xl font-black text-emerald-400">
              99.8%
            </span>
            <p className="text-xs text-slate-400 font-medium">نسبة قبول الملفات لدى الإدارات</p>
          </div>
        </div>
      </div>
    </section>
  );
};
