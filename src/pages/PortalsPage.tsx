import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  Building, 
  Home, 
  Briefcase, 
  GraduationCap, 
  HeartPulse, 
  Car, 
  Scale, 
  CreditCard,
  FileText,
  FileDown,
  Layers,
  Sparkles,
  AlertCircle,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { ALGERIAN_SECTORS, GovernmentService, GovernmentSector } from '../data/sectorsData';
import { useLanguage } from '../contexts/LanguageContext';
import { PortalGuideModal } from '../components/PortalGuideModal';

export const PortalsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSector = searchParams.get('sector') || 'all';

  const [selectedSectorId, setSelectedSectorId] = useState<string>(initialSector);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedDocIds, setExpandedDocIds] = useState<Record<string, boolean>>({});

  // Guide Modal State
  const [guideService, setGuideService] = useState<GovernmentService | null>(null);
  const [guideSector, setGuideSector] = useState<GovernmentSector | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const { language, t } = useLanguage();

  useEffect(() => {
    const s = searchParams.get('sector');
    if (s) {
      setSelectedSectorId(s);
    }
  }, [searchParams]);

  const handleSelectSector = (id: string) => {
    setSelectedSectorId(id);
    if (id === 'all') {
      searchParams.delete('sector');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ sector: id });
    }
  };

  const sectorIconMap: Record<string, React.ElementType> = {
    interior: Building,
    housing: Home,
    employment: Briefcase,
    education: GraduationCap,
    social: HeartPulse,
    transport: Car,
    justice: Scale,
    finance: CreditCard
  };

  // Collect all services or filter by sector
  const allServicesWithSector = useMemo(() => {
    const list: { service: GovernmentService; sector: GovernmentSector }[] = [];
    ALGERIAN_SECTORS.forEach((sec) => {
      sec.services.forEach((srv) => {
        list.push({ service: srv, sector: sec });
      });
    });
    return list;
  }, []);

  const filteredServices = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return allServicesWithSector.filter(({ service, sector }) => {
      const matchesSector = selectedSectorId === 'all' || sector.id === selectedSectorId;

      const title = language === 'fr' ? service.titleFr : language === 'en' ? service.titleEn : service.titleAr;
      const desc = language === 'fr' ? service.descriptionFr : language === 'en' ? service.descriptionEn : service.descriptionAr;
      const docs = language === 'fr' ? service.requiredDocsFr : language === 'en' ? service.requiredDocsEn : service.requiredDocsAr;

      const matchesSearch = 
        !q ||
        title.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        docs.some(d => d.toLowerCase().includes(q)) ||
        sector.nameAr.toLowerCase().includes(q) ||
        sector.nameFr.toLowerCase().includes(q);

      return matchesSector && matchesSearch;
    });
  }, [allServicesWithSector, selectedSectorId, searchQuery, language]);

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleDocs = (id: string) => {
    setExpandedDocIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenGuide = (service: GovernmentService, sector: GovernmentSector) => {
    setGuideService(service);
    setGuideSector(sector);
    setIsGuideOpen(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>الدليل القطاعي الموحد للإدارة الجزائرية</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif]">
          {t.portalsHeading}
        </h1>

        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
          {t.portalsSubtitle}
        </p>
      </div>

      {/* Global Search Bar */}
      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.searchPortalPlaceholder}
          className="w-full pr-12 pl-4 py-3.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white dark:text-white light:text-slate-900 placeholder-slate-400 text-xs sm:text-sm transition outline-none shadow-xl"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
          >
            مسح
          </button>
        )}
      </div>

      {/* Sector Cards Filter Ribbon */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span className="font-bold">تصفية حسب القطاع الوزاري:</span>
          <span className="font-mono text-cyan-300 font-bold">{filteredServices.length} {t.servicesFound}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
          {/* All button */}
          <button
            onClick={() => handleSelectSector('all')}
            className={`p-2.5 rounded-xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
              selectedSectorId === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="text-[11px] leading-tight font-medium">{t.allSectors}</span>
          </button>

          {/* Sector buttons */}
          {ALGERIAN_SECTORS.map((sector) => {
            const Icon = sectorIconMap[sector.id] || Building;
            const isSelected = selectedSectorId === sector.id;
            const name = language === 'fr' ? sector.nameFr : language === 'en' ? sector.nameEn : sector.nameAr;

            return (
              <button
                key={sector.id}
                onClick={() => handleSelectSector(sector.id)}
                className={`p-2.5 rounded-xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[11px] leading-tight truncate max-w-full font-medium">
                  {name.split(' ')[0]} {name.split(' ')[1] || ''}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredServices.map(({ service, sector }) => {
          const isCopied = copiedId === service.id;
          const isDocsOpen = !!expandedDocIds[service.id];

          const title = language === 'fr' ? service.titleFr : language === 'en' ? service.titleEn : service.titleAr;
          const desc = language === 'fr' ? service.descriptionFr : language === 'en' ? service.descriptionEn : service.descriptionAr;
          const docs = language === 'fr' ? service.requiredDocsFr : language === 'en' ? service.requiredDocsEn : service.requiredDocsAr;
          const sectorName = language === 'fr' ? sector.nameFr : language === 'en' ? sector.nameEn : sector.nameAr;

          return (
            <div
              key={service.id}
              className="group rounded-2xl glass-panel p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.1)] relative"
            >
              <div>
                {/* Sector Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800/90 text-cyan-300 border border-slate-700/60">
                    {sectorName}
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    بوابة نشطة
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-300 transition-colors font-['Alexandria',sans-serif] mb-2 leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {desc}
                </p>

                {/* Required Documents Toggle */}
                {docs && docs.length > 0 && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleDocs(service.id)}
                      className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer transition"
                    >
                      <FileText className="w-3 h-3" />
                      <span>{isDocsOpen ? 'إخفاء الوثائق المطلوبة' : `${t.requiredDocuments} (${docs.length})`}</span>
                    </button>

                    {isDocsOpen && (
                      <div className="mt-2.5 p-3 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1.5 text-[11px] text-slate-300 animate-fadeIn">
                        <p className="font-bold text-cyan-300 text-[10px] uppercase tracking-wider mb-1">
                          قائمة الوثائق الإلزامية للملف:
                        </p>
                        {docs.map((doc, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span>{doc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Actions with Guide Modal Trigger */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2">
                  {/* Dedicated Registration Guide Button */}
                  <button
                    onClick={() => handleOpenGuide(service, sector)}
                    className="flex-1 py-2 px-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition"
                    title="عرض الشروط، الوثائق، وخطوات التسجيل"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>دليل التسجيل والمتطلبات</span>
                  </button>

                  <button
                    onClick={() => handleCopy(service.id, service.url)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition text-xs cursor-pointer shrink-0"
                    title={t.copyLink}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-[0_0_12px_rgba(0,242,254,0.25)]"
                  >
                    <span>{t.openDirect}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {service.associatedFormId && (
                    <Link
                      to={`/dossier-builder?form=${service.associatedFormId}`}
                      className="text-[11px] text-cyan-400 hover:text-white px-2.5 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 transition flex items-center gap-1 shrink-0"
                    >
                      <FileDown className="w-3 h-3" />
                      <span>توليد الاستمارة</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800 p-8 space-y-3">
          <AlertCircle className="w-10 h-10 text-cyan-400 mx-auto" />
          <h4 className="text-base font-bold text-white">لم يتم العثور على أي خدمة مطابقة</h4>
          <p className="text-xs text-slate-400">يرجى تجربة كلمات بحث أخرى أو اختيار قطاع وزاري مختلف.</p>
        </div>
      )}

      {/* Guide Slide-Over / Modal */}
      <PortalGuideModal
        service={guideService}
        sector={guideSector}
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
};

