import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Printer, 
  FileCheck, 
  ShieldCheck, 
  Sparkles,
  ArrowLeft,
  Cpu
} from 'lucide-react';

interface SimulationPreset {
  id: string;
  name: string;
  badge: string;
  fields: {
    label: string;
    value: string;
    type: string;
  }[];
  officialHeader: string;
  officialRef: string;
}

const PRESETS: SimulationPreset[] = [
  {
    id: 'aadl',
    name: 'سكنات عدل 3 (AADL 2024)',
    badge: 'وزارة السكن والعمران',
    officialHeader: 'الجمهورية الجزائرية الديمقراطية الشعبية\nوزارة السكن والعمران والمدينة\nالوكالة الوطنية لتحسين السكن وتطويره (AADL)',
    officialRef: 'REF-AADL3-DZ-2024-984210',
    fields: [
      { label: 'رقم التعريف الوطني (NIN)', value: '199216120034500981', type: 'nin' },
      { label: 'رقم الضمان الاجتماعي (NSS)', value: '921600345812', type: 'nss' },
      { label: 'اسم ولقب المكتتب', value: 'بشير عبد الرحمان بن علي', type: 'text' },
      { label: 'الولاية وموقع المشروع', value: '16 - الجزائر العاصمة (سيدي عبد الله)', type: 'wilaya' },
      { label: 'الدخل الشهري المصرح به', value: '68,500.00 دج (مطابق للشروط القانونية)', type: 'salary' }
    ]
  },
  {
    id: 'anem',
    name: 'منحة البطالة (ANEM Minha)',
    badge: 'الوكالة الوطنية للتشغيل',
    officialHeader: 'الجمهورية الجزائرية الديمقراطية الشعبية\nوزارة العمل والتشغيل والضمان الاجتماعي\nالوكالة الوطنية للتشغيل - ملحقة وسيط',
    officialRef: 'MINHA-RDV-2024-774102',
    fields: [
      { label: 'رقم طالب العمل (WASSIT)', value: 'WST-16-0428910', type: 'wassit' },
      { label: 'رقم الحساب البريدي الجاري CCP', value: '0019482012 clé 48', type: 'ccp' },
      { label: 'رمز RIP البريدي', value: '00799999001948201248', type: 'rip' },
      { label: 'الملحقة المحلية للتشغيل (ALEM)', value: 'ملحقة الرويبة - الجزائر', type: 'agency' },
      { label: 'تاريخ موعد المقابلة والتأكيد', value: '14 نوفمبر 2024 - الساعة 09:30 صباحاً', type: 'date' }
    ]
  },
  {
    id: 'civil',
    name: 'شهادة الميلاد الخاصة 12خ (الحالة المدنية)',
    badge: 'وزارة الداخلية والجماعات المحلية',
    officialHeader: 'الجمهورية الجزائرية الديمقراطية الشعبية\nوزارة الداخلية والجماعات المحلية والتهيئة العمرانية\nسجل الحالة المدنية الرقمي الموحد',
    officialRef: 'EC-NAISS-12KH-991204',
    fields: [
      { label: 'رقم عقد الميلاد في السجل', value: 'العقد رقم 0142 / سنة 1995', type: 'act' },
      { label: 'الاسم واللقب باللغتين', value: 'مريم بودية / Meriem BOUDIA', type: 'name' },
      { label: 'بلدية وولاية الميلاد', value: 'بلدية بوفاريك - ولاية البليدة (09)', type: 'wilaya' },
      { label: 'رقم التعريف الوطني البيومتري', value: '199509140028711429', type: 'nin' },
      { label: 'حالة العقد والتحقق', value: 'عقد مسجل ومصادق عليه إلكترونياً (رمز QR سارٍ)', type: 'status' }
    ]
  },
  {
    id: 'onefd',
    name: 'تسجيلات المراسلة ONEFD',
    badge: 'الديوان الوطني للتعليم عن بعد',
    officialHeader: 'الجمهورية الجزائرية الديمقراطية الشعبية\nوزارة التربية الوطنية\nالديوان الوطني للتعليم والتكوين عن بعد',
    officialRef: 'ONEFD-INSCRIP-2024-5519',
    fields: [
      { label: 'اسم ولقب المترشح', value: 'ياسين قاسي / Yacine KACI', type: 'text' },
      { label: 'المستوى والشعبة المطلوبة', value: '3 ثانوي - شعبة علوم تجريبية (دورة 2024-2025)', type: 'level' },
      { label: 'المركز الجهوي للتعليم عن بعد', value: 'المركز الجهوي قسنطينة (25)', type: 'center' },
      { label: 'رقم حوالة بريد الجزائر Mandat', value: 'MD-881920-POSTE-DZ', type: 'mandat' },
      { label: 'الكتب والقرص البيداغوجي', value: 'تم اختيار الدعم عبر الأرضية الرقمية Moodle', type: 'support' }
    ]
  }
];

interface LiveFormSimulatorProps {
  onSelectFormInWizard?: (formId: string) => void;
}

export const LiveFormSimulator: React.FC<LiveFormSimulatorProps> = ({ onSelectFormInWizard }) => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [typedLengths, setTypedLengths] = useState<number[]>([0, 0, 0, 0, 0]);

  const currentPreset = PRESETS[activePresetIndex];

  // Auto typing simulator effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Update typed lengths based on progress
  useEffect(() => {
    const totalFields = currentPreset.fields.length;
    const progressPerField = 100 / totalFields;
    
    const newLengths = currentPreset.fields.map((field, idx) => {
      const fieldStart = idx * progressPerField;
      const fieldEnd = (idx + 1) * progressPerField;
      if (progress <= fieldStart) return 0;
      if (progress >= fieldEnd) return field.value.length;
      const fieldProgressRatio = (progress - fieldStart) / progressPerField;
      return Math.floor(field.value.length * fieldProgressRatio);
    });

    setTypedLengths(newLengths);
  }, [progress, currentPreset]);

  const handleReset = () => {
    setProgress(0);
    setTypedLengths([0, 0, 0, 0, 0]);
    setIsPlaying(true);
  };

  const handleSwitchPreset = (index: number) => {
    setActivePresetIndex(index);
    setProgress(0);
    setTypedLengths([0, 0, 0, 0, 0]);
    setIsPlaying(true);
  };

  const isCompleted = progress >= 100;

  return (
    <div className="relative rounded-2xl glass-panel-cyan p-5 md:p-7 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
            <Cpu className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Alexandria',sans-serif]">
                المحاكي الآلي لملء الاستمارات الرسمية
              </h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-500/40">
                Live Simulator
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              ملء وتوليد فوري للوثائق الإدارية في أقل من 3 ثوانٍ مع التدقيق في الأخطاء الشائعة
            </p>
          </div>
        </div>

        {/* Preset Selector buttons */}
        <div className="flex items-center flex-wrap gap-2">
          {PRESETS.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => handleSwitchPreset(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                activePresetIndex === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                  : 'bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Control & Progress Bar */}
      <div className="relative z-10 mt-5 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isCompleted ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-cyan-400 animate-ping'}`} />
            <span className="text-slate-700 dark:text-slate-300 font-sans">
              {isCompleted ? (
                <span className="text-emerald-500 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 inline" /> تم التدقيق والمصادقة على الاستمارة بنجاح (مكتمل ✓)
                </span>
              ) : (
                <span className="text-cyan-700 dark:text-cyan-300 font-semibold">
                  جاري التدقيق الآلي ومطابقة البيانات الرسمية ({progress}%)...
                </span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
              title="إعادة المحاكاة"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2.5 py-1 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 transition text-[11px] flex items-center gap-1 cursor-pointer font-bold"
            >
              <Play className={`w-3 h-3 ${isPlaying ? 'opacity-50' : 'opacity-100'}`} />
              {isPlaying ? 'إيقاف مؤقت' : 'متابعة'}
            </button>
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-900 overflow-hidden border border-slate-300 dark:border-slate-800 p-0.5">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(0,242,254,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Dual Grid: Form Inputs Live Stream + Official A4 Document Card */}
      <div className="relative z-10 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left/Main Column: Fields with typewriter effect */}
        <div className="lg:col-span-7 space-y-3 bg-slate-50 dark:bg-slate-900/60 p-4 md:p-5 rounded-xl border border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              حقول الاستمارة الآلية:
            </span>
            <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400/80 bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
              {currentPreset.officialRef}
            </span>
          </div>

          <div className="space-y-2.5 pt-1">
            {currentPreset.fields.map((field, idx) => {
              const currentLength = typedLengths[idx] || 0;
              const displayText = field.value.substring(0, currentLength);
              const isFieldComplete = currentLength >= field.value.length;

              return (
                <div key={idx} className="bg-white dark:bg-slate-950/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 transition-all hover:border-slate-400 dark:hover:border-slate-700 shadow-sm">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-semibold text-slate-800 dark:text-slate-300">{field.label}</span>
                    {isFieldComplete ? (
                      <span className="text-emerald-500 dark:text-emerald-400 flex items-center gap-1 text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3" /> تم التحقق
                      </span>
                    ) : (
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] font-mono">
                        {currentLength > 0 ? 'جاري الكتابة...' : 'في الانتظار'}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-xs text-slate-900 dark:text-cyan-200 min-h-[22px] flex items-center bg-slate-100 dark:bg-slate-900/70 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800/60">
                    <span>{displayText}</span>
                    {!isFieldComplete && currentLength > 0 && (
                      <span className="inline-block w-1.5 h-3.5 bg-cyan-500 dark:bg-cyan-400 ml-1 animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>موافقة للقوانين والمراسيم التنفيذية المعمول بها</span>
            </div>
            {onSelectFormInWizard && (
              <button
                onClick={() => onSelectFormInWizard(currentPreset.id)}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
              >
                <span>فتح وبناء في المعالج</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Miniature A4 Official Preview */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white text-slate-900 rounded-xl p-5 shadow-2xl border-4 border-slate-800/50 relative overflow-hidden select-none">
          {/* Official Republic Header Watermark */}
          <div className="text-center border-b border-slate-300 pb-3 space-y-1">
            <p className="text-[10px] font-bold text-slate-800 tracking-wider">
              الجمهورية الجزائرية الديمقراطية الشعبية
            </p>
            <p className="text-[9px] font-semibold text-slate-600 whitespace-pre-line leading-tight">
              {currentPreset.officialHeader}
            </p>
          </div>

          {/* Central Title */}
          <div className="my-3 text-center bg-slate-100 p-2 rounded border border-slate-200">
            <h4 className="text-xs font-black text-slate-900">
              {currentPreset.name}
            </h4>
            <p className="text-[9px] font-mono text-slate-500 mt-0.5">
              رقم الوصل المرجعي: {currentPreset.officialRef}
            </p>
          </div>

          {/* Miniature Form Data Grid */}
          <div className="space-y-1.5 text-[10px] bg-slate-50 p-3 rounded border border-slate-200 font-sans">
            {currentPreset.fields.map((f, i) => (
              <div key={i} className="flex justify-between border-b border-slate-200/60 pb-1">
                <span className="font-bold text-slate-600">{f.label}:</span>
                <span className="font-mono text-slate-900 max-w-[170px] truncate">
                  {typedLengths[i] > 0 ? f.value.substring(0, typedLengths[i]) : '..........'}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Stamps & Barcode Area */}
          <div className="mt-4 pt-3 border-t border-slate-200 flex items-end justify-between">
            <div className="space-y-1">
              <div className="text-[8px] text-slate-500 font-mono">ختم وتوقيع المصلحة الرقمية</div>
              {/* Simulated Official Cachet Seal */}
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-cyan-800/60 flex items-center justify-center p-1 text-[7px] text-cyan-900 text-center font-bold rotate-[-12deg] bg-cyan-50/50">
                مكتب خدمات معتمد DZAIR FORM
              </div>
            </div>

            <div className="text-right space-y-1">
              {/* Barcode representation */}
              <div className="font-mono tracking-widest text-[8px] text-slate-700 bg-slate-100 px-2 py-1 rounded border border-slate-300">
                |||| | |||||| || |||||
              </div>
              <div className="text-[8px] text-slate-400 font-mono">
                {isCompleted ? 'صالحة قانونياً ✓' : 'قيد المعالجة...'}
              </div>
            </div>
          </div>

          {/* Completed Stamp Overlay */}
          {isCompleted && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] pointer-events-none">
              <div className="px-4 py-2 rounded-lg border-2 border-emerald-600 bg-emerald-500/10 text-emerald-700 font-black text-sm tracking-widest shadow-lg flex items-center gap-1">
                <FileCheck className="w-4 h-4" />
                مكتمل ومصادق عليه ✓
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
