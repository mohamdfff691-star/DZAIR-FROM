import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  Search, 
  Printer, 
  FileCheck, 
  BookOpen, 
  Download, 
  Sparkles, 
  Layers, 
  Eye, 
  Filter, 
  CheckCircle2, 
  ExternalLink,
  X,
  FileText,
  Copy,
  Check,
  School,
  Clock,
  MapPin,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { EXAMS_DATABASE, ExamRecord } from '../../lib/data/exams-and-cvs';

export const ExamsLibraryPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExamForPreview, setSelectedExamForPreview] = useState<ExamRecord | null>(null);
  const [modalTab, setModalTab] = useState<'both' | 'exam' | 'solution'>('both');
  const [copiedToast, setCopiedToast] = useState(false);

  const { t } = useLanguage();

  const levelCategories = [
    { id: 'all', label: 'الكل (جميع الأطوار)' },
    { id: 'bac_bem', label: 'شهادة البكالوريا والبيام (BAC & BEM)' },
    { id: 'high', label: 'التعليم الثانوي (1، 2، 3 ثانوي)' },
    { id: 'middle', label: 'التعليم المتوسط (1 إلى 4 متوسط)' },
    { id: 'primary', label: 'التعليم الابتدائي (1 إلى 5 ابتدائي)' }
  ];

  const subjects = [
    'الكل',
    'الرياضيات',
    'الفيزياء والكيمياء',
    'اللغة العربية',
    'علوم الطبيعة والحياة',
    'اللغة الفرنسية',
    'الفلسفة',
    'المالية والمحاسبة'
  ];

  const filteredExams = useMemo(() => {
    return EXAMS_DATABASE.filter((item) => {
      const matchesLevel = selectedLevel === 'all' || item.levelCategory === selectedLevel;
      const matchesSubject = selectedSubject === 'الكل' || item.subject === selectedSubject;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.gradeName.toLowerCase().includes(q) ||
        item.academy.toLowerCase().includes(q) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(q));

      return matchesLevel && matchesSubject && matchesSearch;
    });
  }, [selectedLevel, selectedSubject, searchQuery]);

  const handlePrintExam = () => {
    window.print();
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 no-print">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>بنك ومكتبة الامتحانات الجزائرية المعتمدة مع الحلول النموذجية</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white dark:text-white light:text-slate-900 font-['Alexandria',sans-serif]">
          مكتبة الامتحانات والاختبارات الجزائرية
        </h1>

        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
          مركز الموارد التعليمية المفتوح لمقاهي الإنترنت (السيبار) والطلاب. مواضيع امتحانات رسمية وتجريبية لجميع الأطوار الدراسية (ابتدائي، متوسط، ثانوي، بكالوريا) مرفقة بسلالم التنقيط والحلول النموذجية، جاهزة للمعاينة والطباعة الفورية A4.
        </p>
      </div>

      {/* Filters Card */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4 no-print">
        {/* Search */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث برقم السنة، المادة، أو الولاية (مثل: بكالوريا رياضيات، رابعة متوسط، لغة عربية، تسيير)..."
            className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
          />
        </div>

        {/* Level Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {levelCategories.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setSelectedLevel(lvl.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                selectedLevel === lvl.id
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_12px_rgba(0,242,254,0.3)]'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>

        {/* Subject Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
          <span className="text-slate-500 whitespace-nowrap pr-1">المادة:</span>
          {subjects.map((sub, i) => (
            <button
              key={i}
              onClick={() => setSelectedSubject(sub)}
              className={`px-2.5 py-1 rounded-lg transition cursor-pointer border ${
                selectedSubject === sub
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border-cyan-500/40'
                  : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Counter and Results Status */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1 no-print">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>المواضيع المتاحة: <strong className="text-white font-mono">{filteredExams.length}</strong> من أصل <strong className="text-white font-mono">{EXAMS_DATABASE.length}</strong> موضوع معتمد</span>
        </div>
        <div className="text-[11px] text-cyan-300">
          جميع المواضيع مطابقة للمنهاج الجزائري الرسمي الصادر عن وزارة التربية الوطنية
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 no-print">
        {filteredExams.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl glass-panel p-5 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                  {item.gradeName} - {item.subject}
                </span>

                <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  مرفق بالحل وسلم التنقيط
                </span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-['Alexandria',sans-serif] mb-2 leading-snug">
                {item.title}
              </h3>

              <div className="space-y-1 text-slate-400 text-[11px] mb-3">
                <p className="flex items-center gap-1.5 truncate">
                  <School className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="truncate">{item.academy}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>المدة: {item.duration} | {item.trimester} ({item.academicYear})</span>
                </p>
              </div>

              {/* Keywords chips */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.keywords.slice(0, 3).map((kw, idx) => (
                  <span key={idx} className="text-[9.5px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setSelectedExamForPreview(item);
                  setModalTab('both');
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-[0_0_12px_rgba(0,242,254,0.2)]"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>معاينة وطباعة A4</span>
              </button>

              <a
                href={item.studyLink}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition cursor-pointer"
                title="المنصة الرسمية للاختبار"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredExams.length === 0 && (
        <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800 p-8 space-y-3 no-print">
          <BookOpen className="w-10 h-10 text-cyan-400 mx-auto" />
          <h4 className="text-base font-bold text-white">لم يتم العثور على أي موضوع مطابق للبحث</h4>
          <p className="text-xs text-slate-400">يرجى تغيير تصنيف المستوى أو المادة أعلاه أو كتابة مصطلح آخر.</p>
        </div>
      )}

      {/* EXAM PAPER PREVIEW & PRINT MODAL */}
      {selectedExamForPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl glass-panel-cyan border border-cyan-500/40 shadow-2xl overflow-hidden bg-white text-slate-900">
            {/* Modal Ribbon (Hidden when printing) */}
            <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 no-print border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400">معاينة المستند الرسمي A4:</span>
                <span className="text-xs text-slate-300 truncate max-w-sm sm:max-w-md">{selectedExamForPreview.title}</span>
              </div>

              {/* View Tab Toggle */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setModalTab('both')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                    modalTab === 'both' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  الموضوع والحل
                </button>
                <button
                  onClick={() => setModalTab('exam')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                    modalTab === 'exam' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  نص الامتحان فقط
                </button>
                <button
                  onClick={() => setModalTab('solution')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                    modalTab === 'solution' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  الحل النموذجي فقط
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyText(
                    modalTab === 'solution'
                      ? selectedExamForPreview.solutionText
                      : modalTab === 'exam'
                        ? selectedExamForPreview.examText
                        : `${selectedExamForPreview.examText}\n\n=======================\n${selectedExamForPreview.solutionText}`
                  )}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  title="نسخ النص"
                >
                  {copiedToast ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedToast ? 'تم النسخ!' : 'نسخ النص'}</span>
                </button>

                <button
                  onClick={handlePrintExam}
                  className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Printer className="w-4 h-4" />
                  <span>طباعة الموضوع A4</span>
                </button>

                <button
                  onClick={() => setSelectedExamForPreview(null)}
                  className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* A4 OFFICIAL PRINTABLE EXAM PAPER CONTAINER */}
            <div className="printable-area p-8 sm:p-12 overflow-y-auto space-y-8 bg-white font-['Cairo',sans-serif] text-xs leading-normal">
              {/* Republic Official Exam Header */}
              <div className="text-center space-y-1 border-b-2 border-slate-900 pb-4">
                <p className="text-xs font-black text-slate-900">الجمهورية الجزائرية الديمقراطية الشعبية</p>
                <p className="text-xs font-bold text-slate-800">وزارة التربية الوطنية - {selectedExamForPreview.academy}</p>
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-700 pt-2 border-t border-slate-300">
                  <span>المستوى: {selectedExamForPreview.gradeName}</span>
                  <span>المادة: {selectedExamForPreview.subject}</span>
                  <span>الدورة: {selectedExamForPreview.trimester} ({selectedExamForPreview.academicYear})</span>
                  <span>المدة: {selectedExamForPreview.duration}</span>
                </div>
              </div>

              {/* Title Banner */}
              <div className="text-center py-2 bg-slate-100 rounded border border-slate-300">
                <h2 className="text-sm font-black text-slate-900">
                  {selectedExamForPreview.title}
                </h2>
              </div>

              {/* Exam Content */}
              {(modalTab === 'both' || modalTab === 'exam') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-300 pb-1">
                    <span className="font-black text-slate-900 text-xs">نص موضوع الامتحان والتمارين:</span>
                    <span className="text-[10px] font-mono text-slate-500">العلامة الكاملة: 20/20</span>
                  </div>
                  <div className="font-sans whitespace-pre-line text-justify leading-loose bg-slate-50 p-5 rounded-lg border border-slate-200 text-slate-900 text-[11.5px]">
                    {selectedExamForPreview.examText}
                  </div>
                </div>
              )}

              {/* Model Answer Section */}
              {(modalTab === 'both' || modalTab === 'solution') && (
                <div className="pt-6 border-t-2 border-dashed border-slate-900 space-y-3 break-before-page">
                  <div className="bg-slate-900 text-white p-2.5 rounded-lg text-center font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>عناصر الإجابة وسلم التنقيط الرسمي المعتمد</span>
                  </div>

                  <div className="font-sans whitespace-pre-line text-justify leading-loose bg-emerald-50/40 p-5 rounded-lg border border-emerald-200 text-slate-900 text-[11.5px]">
                    {selectedExamForPreview.solutionText}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="pt-4 border-t border-slate-300 flex justify-between text-[10px] text-slate-500 font-mono">
                <span>DZAIR FORM - بنك الامتحانات الجزائرية المعتمدة</span>
                <span className="font-sans">الموقع الرسمي: {selectedExamForPreview.studyLink}</span>
                <span>بالتوفيق والنجاح لجميع المترشحين</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
