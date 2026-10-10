import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  Building2, 
  Briefcase, 
  FileText, 
  GraduationCap, 
  Scale, 
  Landmark, 
  AlertCircle,
  FileDown,
  Layers,
  Sparkles
} from 'lucide-react';
import { GOVERNMENT_PORTALS } from '../data/algeriaData';
import { GovernmentPortal } from '../types';

interface PortalsHubProps {
  onSelectFormInWizard?: (formId: string) => void;
}

export const PortalsHub: React.FC<PortalsHubProps> = ({ onSelectFormInWizard }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedPortalId, setExpandedPortalId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'جميع البوابات (30+)', icon: Layers },
    { id: 'housing', label: 'السكن والعمران', icon: Building2 },
    { id: 'employment', label: 'التشغيل والضمان الاجتماعي', icon: Briefcase },
    { id: 'civil_status', label: 'الحالة المدنية والداخلية', icon: FileText },
    { id: 'education', label: 'التعليم والتكوين العالي', icon: GraduationCap },
    { id: 'justice', label: 'العدالة والقضاء', icon: Scale },
    { id: 'finance', label: 'المالية والضرائب والبريد', icon: Landmark }
  ];

  const filteredPortals = useMemo(() => {
    return GOVERNMENT_PORTALS.filter((portal) => {
      const matchesCategory = selectedCategory === 'all' || portal.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        portal.title.toLowerCase().includes(q) ||
        portal.description.toLowerCase().includes(q) ||
        portal.tags.some(tag => tag.toLowerCase().includes(q)) ||
        portal.requiredDocs.some(doc => doc.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyLink = (portal: GovernmentPortal) => {
    navigator.clipboard.writeText(portal.url);
    setCopiedId(portal.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="portals-hub" className="py-16 md:py-24 relative">
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>الدليل الرقمي الوطني الموحد للإدارة الجزائرية</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white font-['Alexandria',sans-serif] tracking-tight">
            مجمع البوابات الحكومية الرسمية
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            وداعاً لفتح عشرات علامات التبويب وضياع الروابط المتكرر في السيبار. وصول مباشر وآمن إلى جميع المنصات الرسمية للدولة مع قائمة الوثائق المطلوبة لكل خدمة.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن بوابة، استمارة، شهادة (مثل: عدل 3، منحة البطالة، بطاقة الشفاء، B3، سكن...)"
              className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-slate-400 text-sm transition outline-none shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                مسح
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,242,254,0.35)] scale-102'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count & Quick Tips */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>تم العثور على <strong className="text-cyan-300 font-mono text-sm">{filteredPortals.length}</strong> بوابة حكومية رسمية</span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            جميع البوابات تعمل بشكل مستقر
          </span>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPortals.map((portal) => {
            const isCopied = copiedId === portal.id;
            const isExpanded = expandedPortalId === portal.id;

            return (
              <div
                key={portal.id}
                className="group relative rounded-2xl glass-panel p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.1)]"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/90 text-cyan-300 border border-slate-700/60">
                      {portal.category === 'housing' && 'السكن والعمران'}
                      {portal.category === 'employment' && 'التشغيل والضمان'}
                      {portal.category === 'civil_status' && 'الحالة المدنية'}
                      {portal.category === 'education' && 'التعليم والتكوين'}
                      {portal.category === 'justice' && 'العدالة والقضاء'}
                      {portal.category === 'finance' && 'المالية والبريد'}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      نشطة ومتاحة
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-['Alexandria',sans-serif] mb-2 leading-snug">
                    {portal.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {portal.description}
                  </p>

                  {/* Required Documents Toggle */}
                  {portal.requiredDocs.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => setExpandedPortalId(isExpanded ? null : portal.id)}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer transition"
                      >
                        <FileText className="w-3 h-3" />
                        <span>{isExpanded ? 'إخفاء الوثائق المطلوبة' : `عرض الوثائق المطلوبة (${portal.requiredDocs.length})`}</span>
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5 text-[11px] text-slate-300 animate-fadeIn">
                          <p className="font-bold text-cyan-300 text-[10px] uppercase tracking-wider mb-1">
                            الملف والوثائق الإلزامية:
                          </p>
                          {portal.requiredDocs.map((doc, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              <span>{doc}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {portal.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-400 border border-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition shadow-[0_0_12px_rgba(0,242,254,0.25)]"
                    >
                      <span>دخول للبوابة</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleCopyLink(portal)}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition text-xs cursor-pointer"
                      title="نسخ الرابط المباشر"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Associated Form in DZAIR FORM */}
                  {portal.associatedFormId && onSelectFormInWizard && (
                    <button
                      onClick={() => onSelectFormInWizard(portal.associatedFormId!)}
                      className="text-[11px] text-cyan-400 hover:text-white px-2 py-1.5 rounded bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 transition flex items-center gap-1 cursor-pointer"
                    >
                      <FileDown className="w-3 h-3" />
                      <span>توليد الاستمارة</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredPortals.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800 p-8 space-y-3">
            <AlertCircle className="w-10 h-10 text-cyan-400 mx-auto" />
            <h4 className="text-base font-bold text-white">لم يتم العثور على أي بوابة مطابقة</h4>
            <p className="text-xs text-slate-400">يرجى تجربة كلمات بحث أخرى أو اختيار تصنيف مختلف من القائمة أعلاه.</p>
          </div>
        )}
      </div>
    </section>
  );
};
