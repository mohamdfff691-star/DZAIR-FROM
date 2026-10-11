import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  FileText, 
  Building2, 
  Scale,
  Sparkles
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#060910] text-slate-600 dark:text-slate-400 py-16 no-print relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/">
              <BrandLogo size="lg" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              المنصة الرقمية الأولى والشاملة لأتمتة الاستمارات الإدارية الرسمية، دليل البوابات الحكومية، وإدارة ومضاعفة مداخيل مقاهي الإنترنت ومكاتب الخدمات العمومية في الجزائر.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>مطابقة للقانون 18-07 المتعلق بحماية المعطيات ذات الطابع الشخصي</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif]">
              {t.navDossierBuilder}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/dossier-builder?form=aadl-3-dossier" className="hover:text-cyan-300 transition">ملف سكنات عدل 3 (AADL)</Link></li>
              <li><Link to="/dossier-builder?form=anem-minha-form" className="hover:text-cyan-300 transition">منحة البطالة والالتزام (ANEM)</Link></li>
              <li><Link to="/dossier-builder?form=official-affidavit" className="hover:text-cyan-300 transition">التصريح الشرفي الرسمي المعتمد</Link></li>
              <li><Link to="/dossier-builder?form=formal-request-letter" className="hover:text-cyan-300 transition">الطلب الخطي والطعون الإدارية</Link></li>
              <li><Link to="/dossier-builder?form=onefd-registration" className="hover:text-cyan-300 transition">تسجيلات المراسلة (ONEFD)</Link></li>
            </ul>
          </div>

          {/* Portals Directory */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif]">
              {t.navPortals}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/portals?sector=interior" className="hover:text-cyan-300 transition">الحالة المدنية وجواز السفر</Link></li>
              <li><Link to="/portals?sector=social" className="hover:text-cyan-300 transition">فضاء الهناء والشفاء (CNAS)</Link></li>
              <li><Link to="/portals?sector=employment" className="hover:text-cyan-300 transition">بوابة وسيط ومنحة للتشغيل</Link></li>
              <li><Link to="/portals?sector=education" className="hover:text-cyan-300 transition">تسجيلات ONEFD و البكالوريا</Link></li>
              <li><Link to="/portals?sector=justice" className="hover:text-cyan-300 transition">السجل القضائي B3 وزارة العدل</Link></li>
            </ul>
          </div>

          {/* Contact & Wilayas */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif]">
              التغطية والدعم
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>تغطية شاملة لكافة الـ 58 ولاية جزائرية</span>
              </p>
              <p className="text-[11px] text-slate-400">
                مكتب الدعم الموحد لمقاهي الإنترنت:
                <br />
                <span className="font-mono text-cyan-300 font-bold">contact@dzairform.dz</span>
              </p>
              <p className="font-mono text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                هاتف الشراكة: 0550.12.34.56
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} DZAIR FORM. جميع الحقوق محفوظة للمنصة ومقاهي الإنترنت الشريكة.</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>صنع بكل فخر لدعم أصحاب السيبار والمواطن الجزائري</span>
            <span className="text-emerald-400">🇩🇿</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
