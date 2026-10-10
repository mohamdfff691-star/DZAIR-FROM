import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Printer, 
  Save, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  User,
  CreditCard,
  Building,
  RotateCcw
} from 'lucide-react';
import { FORM_TEMPLATES, WILAYAS_58 } from '../data/algeriaData';
import { FormTemplate, SavedDocument } from '../types';

interface FormsWizardProps {
  initialFormId?: string;
  onSaveToVault?: (doc: SavedDocument) => void;
}

export const FormsWizard: React.FC<FormsWizardProps> = ({ initialFormId, onSaveToVault }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(initialFormId || FORM_TEMPLATES[0].id);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [checkedAttachments, setCheckedAttachments] = useState<Record<string, boolean>>({});
  const [serviceFee, setServiceFee] = useState<number>(200);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Sync if initialFormId changes from outside
  useEffect(() => {
    if (initialFormId) {
      setSelectedTemplateId(initialFormId);
      setCurrentStep(2);
    }
  }, [initialFormId]);

  const activeTemplate: FormTemplate = 
    FORM_TEMPLATES.find((t) => t.id === selectedTemplateId) || FORM_TEMPLATES[0];

  // Initialize default form values when template changes
  useEffect(() => {
    const defaults: Record<string, any> = {};
    activeTemplate.fields.forEach((field) => {
      defaults[field.id] = field.defaultValue || (field.type === 'select' && field.options ? field.options[0].value : '');
      if (field.id === 'wilaya' && !defaults[field.id]) {
        defaults[field.id] = '16 - الجزائر العاصمة';
      }
    });
    setFormData(defaults);

    // Reset attachments checklist
    const attState: Record<string, boolean> = {};
    activeTemplate.requiredAttachments.forEach((att) => {
      attState[att] = false;
    });
    setCheckedAttachments(attState);
  }, [selectedTemplateId]);

  const handleInputChange = (fieldId: string, value: any) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleAttachmentToggle = (att: string) => {
    setCheckedAttachments((prev) => ({ ...prev, [att]: !prev[att] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveToVault = () => {
    const clientName = 
      formData.senderName || 
      formData.applicantName || 
      formData.declarantName || 
      formData.fullName || 
      formData.studentName || 
      formData.appellantName || 
      'زبون السيبار';

    const newDoc: SavedDocument = {
      id: 'DOC-' + Date.now().toString(36).toUpperCase(),
      templateId: activeTemplate.id,
      title: activeTemplate.title,
      clientName,
      nin: formData.nin || '',
      wilaya: formData.wilaya || 'الجزائر العاصمة',
      createdAt: new Date().toLocaleDateString('ar-DZ', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      formData: { ...formData },
      feeCharged: serviceFee,
      status: 'ready'
    };

    if (onSaveToVault) {
      onSaveToVault(newDoc);
    }

    setSaveSuccessMsg('تم حفظ الوثيقة بنجاح في خزينة السيبار!');
    setTimeout(() => setSaveSuccessMsg(null), 3500);
  };

  const totalAttachments = activeTemplate.requiredAttachments.length;
  const readyAttachmentsCount = Object.values(checkedAttachments).filter(Boolean).length;

  return (
    <section id="forms-wizard" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wizard Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 no-print">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>معالج الوثائق وبناء الملفات الإدارية المعتمدة</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-['Alexandria',sans-serif]">
            معالج الاستمارات الذكي (Dossier Builder)
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            أنشئ، دقق، واطبع ملفات رسمية خالية من الأخطاء في ثوانٍ معدودة بجودة A4 فائقة الدقة.
          </p>
        </div>

        {/* Multi-step progress bar */}
        <div className="max-w-4xl mx-auto mb-10 no-print">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { step: 1, title: 'اختيار الاستمارة' },
              { step: 2, title: 'تعبئة البيانات' },
              { step: 3, title: 'تدقيق المرفقات' },
              { step: 4, title: 'المعاينة والطباعة' }
            ].map((s) => (
              <button
                key={s.step}
                onClick={() => setCurrentStep(s.step)}
                className={`p-3 rounded-xl border transition-all text-right md:text-center cursor-pointer ${
                  currentStep === s.step
                    ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                    : currentStep > s.step
                    ? 'bg-slate-900 border-emerald-500/50 text-emerald-400'
                    : 'bg-slate-900/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-between md:justify-center gap-1.5 mb-1">
                  <span className="text-[10px] uppercase font-mono">الخطوة {s.step}</span>
                  {currentStep > s.step && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="font-semibold text-xs truncate">{s.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* STEP 1: SELECT TEMPLATE */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn no-print">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FORM_TEMPLATES.map((tmpl) => {
                const isSelected = tmpl.id === selectedTemplateId;
                return (
                  <div
                    key={tmpl.id}
                    onClick={() => {
                      setSelectedTemplateId(tmpl.id);
                      setCurrentStep(2);
                    }}
                    className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.2)]'
                        : 'glass-panel hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-800 text-cyan-300">
                          {tmpl.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {tmpl.fields.length} حقول مطلوبة
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-2 font-['Alexandria',sans-serif]">
                        {tmpl.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {tmpl.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                        <span>بدء التعبئة</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {tmpl.requiredAttachments.length} مرفقات إلزامية
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: FILL FORM DATA */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto glass-panel p-6 md:p-8 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn no-print">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                  {activeTemplate.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 font-['Alexandria',sans-serif]">
                  {activeTemplate.title}
                </h3>
                <p className="text-xs text-slate-400">{activeTemplate.subtitle}</p>
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>تغيير الاستمارة</span>
              </button>
            </div>

            {/* Dynamic Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeTemplate.fields.map((field) => {
                const spanClass = 
                  field.gridSpan === 3 ? 'md:col-span-3' : 
                  field.gridSpan === 2 ? 'md:col-span-2' : 'md:col-span-1';

                return (
                  <div key={field.id} className={`${spanClass} space-y-1.5`}>
                    <label className="block text-xs font-semibold text-slate-300">
                      {field.label} {field.required && <span className="text-cyan-400">*</span>}
                    </label>

                    {field.id === 'wilaya' ? (
                      <select
                        value={formData[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 outline-none"
                      >
                        {WILAYAS_58.map((w) => (
                          <option key={w.code} value={`${w.code} - ${w.nameAr} (${w.nameFr})`}>
                            {w.code} - ولاية {w.nameAr} ({w.nameFr})
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'select' && field.options ? (
                      <select
                        value={formData[field.id] || field.options[0]?.value}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 outline-none"
                      >
                        {field.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        rows={5}
                        value={formData[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 outline-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 outline-none font-mono"
                      />
                    )}

                    {field.id === 'nin' && (
                      <p className="text-[10px] text-slate-500">
                        * رقم التعريف الوطني يتكون من 18 رقماً وموجود في بطاقة التعريف البيومترية ورخصة السياقة.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stepper Navigation */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                <span>الرجوع</span>
              </button>

              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
              >
                <span>متابعة لتدقيق المرفقات</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: ATTACHMENTS & DOSSIER CHECKLIST */}
        {currentStep === 3 && (
          <div className="max-w-3xl mx-auto glass-panel p-6 md:p-8 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn no-print">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>التدقيق الإداري وفحص اكتمال الملف</span>
              </div>
              <h3 className="text-xl font-bold text-white font-['Alexandria',sans-serif]">
                قائمة المرفقات والوثائق الإلزامية للملف
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                تحقق من توفر الوثائق أدناه مع الزبون أو المواطن لتفادي رفض الملف لدى الإدارة المعنية.
              </p>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              {activeTemplate.requiredAttachments.map((att, idx) => {
                const isChecked = checkedAttachments[att] || false;
                return (
                  <div
                    key={idx}
                    onClick={() => handleAttachmentToggle(att)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isChecked
                        ? 'bg-emerald-950/30 border-emerald-500/50 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600 bg-slate-800'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-sm font-medium">{att}</span>
                    </div>

                    <span className={`text-xs font-semibold ${isChecked ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {isChecked ? 'متوفر ✓' : 'في انتظار الإرفاق'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Completion Indicator */}
            <div className={`p-4 rounded-xl border flex items-center gap-3 ${
              readyAttachmentsCount === totalAttachments
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                : 'bg-amber-950/30 border-amber-500/30 text-amber-300'
            }`}>
              <AlertCircle className="w-5 h-5 shrink-0" />
              <div className="text-xs">
                <span className="font-bold">
                  {readyAttachmentsCount === totalAttachments
                    ? 'الملف مكتمل 100% وجاهز للإيداع الرسمي!'
                    : `اكتمل ${readyAttachmentsCount} من أصل ${totalAttachments} وثائق مطلوبة.`}
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  يمكنك مع ذلك استخراج الاستمارة وطباعتها للزبون لاستكمال بقية أوراقه لاحقاً.
                </p>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                <span>تعديل البيانات</span>
              </button>

              <button
                onClick={() => setCurrentStep(4)}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
              >
                <span>معاينة المستند الرسمي للطباعة</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: OFFICIAL A4 PRINTABLE DOCUMENT PREVIEW */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            {/* Action Bar for Cybercafé Owner */}
            <div className="max-w-4xl mx-auto glass-panel p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 no-print border border-cyan-500/30 shadow-[0_0_20px_rgba(0,242,254,0.1)]">
              <div className="flex items-center gap-3">
                <div className="text-xs">
                  <span className="text-slate-400">سعر الخدمة للزبون (دج):</span>
                  <input
                    type="number"
                    value={serviceFee}
                    onChange={(e) => setServiceFee(Number(e.target.value))}
                    className="w-20 px-2 py-1 mr-2 rounded bg-slate-900 border border-slate-700 text-cyan-300 font-mono text-xs font-bold"
                  />
                  <span className="text-[11px] text-slate-400">دج</span>
                </div>
              </div>

              <div className="flex items-center flex-wrap gap-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer"
                >
                  تعديل الحقول
                </button>

                <button
                  onClick={handleSaveToVault}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>حفظ في الخزينة</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,242,254,0.4)] cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>طباعة A4 فورية (بدون علامة مائية)</span>
                </button>
              </div>
            </div>

            {saveSuccessMsg && (
              <div className="max-w-4xl mx-auto p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs text-center font-bold no-print animate-fadeIn">
                {saveSuccessMsg}
              </div>
            )}

            {/* THE OFFICIAL A4 PRINTABLE DOCUMENT CONTAINER */}
            <div className="printable-area max-w-[210mm] min-h-[297mm] mx-auto bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-sm border border-slate-300 relative font-['Cairo',sans-serif]">
              {/* Republic Official Seal Header */}
              <div className="text-center space-y-1 border-b-2 border-slate-900 pb-4 mb-6">
                <p className="text-sm font-black text-slate-900 tracking-wider">
                  الجمهورية الجزائرية الديمقراطية الشعبية
                </p>
                <p className="text-xs font-bold text-slate-700">
                  {activeTemplate.ministry}
                </p>
                <p className="text-[11px] text-slate-600 font-mono">
                  ولاية: {formData.wilaya || 'الجزائر'} - الدائرة والبلدية المختصة
                </p>
              </div>

              {/* Reference Number and Date */}
              <div className="flex items-center justify-between text-xs text-slate-700 mb-6 font-mono border-b border-dashed border-slate-300 pb-2">
                <div>
                  <span className="font-bold">الرقم المرجعي: </span>
                  <span className="font-black text-slate-900">DZ-{Date.now().toString().slice(-8)}</span>
                </div>
                <div>
                  <span className="font-bold">تاريخ التحرير: </span>
                  <span>{new Date().toLocaleDateString('ar-DZ')}</span>
                </div>
              </div>

              {/* Document Main Heading */}
              <div className="text-center my-6 py-2 border-y-2 border-slate-900 bg-slate-50">
                <h1 className="text-lg md:text-xl font-black text-slate-900">
                  {activeTemplate.title}
                </h1>
                <p className="text-xs font-semibold text-slate-600 mt-1">
                  {activeTemplate.subtitle}
                </p>
              </div>

              {/* Template Specific Content Body */}
              {activeTemplate.id === 'formal-request-letter' && (
                <div className="space-y-6 text-sm leading-relaxed">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p><span className="font-bold">المعني بالأمر:</span> {formData.senderName || '................................'}</p>
                      <p><span className="font-bold">العنوان:</span> {formData.address || '................................'}</p>
                      <p><span className="font-bold">رقم الهاتف:</span> {formData.phone || '................................'}</p>
                      {formData.nin && <p><span className="font-bold">رقم التعريف الوطني (NIN):</span> {formData.nin}</p>}
                    </div>
                    <div className="text-left font-bold text-slate-800">
                      <p className="bg-slate-100 p-2 border border-slate-300 rounded text-center">
                        {formData.recipientTitle || 'إلى السيد المحترم'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-100/70 p-3 border-r-4 border-slate-900 font-bold">
                    <span>الموضوع: </span> {formData.subject || 'طلب إداري رسمي'}
                  </div>

                  <div className="text-justify leading-loose whitespace-pre-line min-h-[180px] p-2">
                    {formData.bodyText || 'يشرفني أن أتقدم إلى سيادتكم المحترمة بهذا الطلب قصد...'}
                  </div>

                  <div className="text-justify pt-4">
                    <p className="leading-relaxed">
                      وفي انتظار قبول طلبي هذا، تقبلوا مني سيدي فائق عبارات التقدير والاحترام.
                    </p>
                  </div>
                </div>
              )}

              {activeTemplate.id === 'official-affidavit' && (
                <div className="space-y-6 text-sm leading-relaxed">
                  <p className="text-justify leading-loose">
                    أنا الموقع أسفله: السيد(ة) <strong className="border-b border-dotted border-slate-900 px-2">{formData.declarantName || '..............................'}</strong>،
                    المولود(ة) بتاريخ <strong className="border-b border-dotted border-slate-900 px-2">{formData.birthDate || '..../..../........'}</strong> ببلدية: <strong className="border-b border-dotted border-slate-900 px-2">{formData.birthPlace || '..............................'}</strong>،
                    الحامل(ة) لبطاقة التعريف الوطنية البيومترية رقم: <strong className="font-mono border-b border-dotted border-slate-900 px-2">{formData.nin || '..............................'}</strong>،
                    الساكن(ة) حالياً بـ: <strong className="border-b border-dotted border-slate-900 px-2">{formData.address || '..............................'}</strong> ولاية <strong className="border-b border-dotted border-slate-900 px-2">{formData.wilaya || '..............................'}</strong>.
                  </p>

                  <div className="bg-slate-100 p-4 border border-slate-300 rounded-md text-justify space-y-2">
                    <h4 className="font-black text-slate-900 text-center border-b border-slate-300 pb-2">
                      محتوى الإقرار والتصريح
                    </h4>
                    <p className="leading-loose whitespace-pre-line">
                      {formData.customDetails || 'أصرح بشرفي وتحت كامل مسؤوليتي القانونية والجزائية بأنني لا أمارس أي نشاط مأجور أو غير مأجور ولا أتقاضى أي دخل...'}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 text-justify leading-relaxed">
                    حرر هذا التصريح الشرفي للإدلاء به واستعماله في حدود ما يسمح به القانون والتشريع الجزائري المعمول به، مع علمي التام بالعقوبات المترتبة عن أي تصريح كاذب أو تزوير.
                  </p>
                </div>
              )}

              {/* General Grid for AADL, ANEM, and others */}
              {activeTemplate.id !== 'formal-request-letter' && activeTemplate.id !== 'official-affidavit' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 border border-slate-300 rounded">
                    {activeTemplate.fields.map((f) => (
                      <div key={f.id} className="border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-700 block">{f.label}:</span>
                        <span className="font-mono text-slate-900 font-semibold text-sm">
                          {formData[f.id] || '................................'}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border border-slate-300 p-3 rounded text-xs space-y-1">
                    <span className="font-bold block text-slate-800">قائمة الوثائق المصاحبة لهذا الملف:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                      {activeTemplate.requiredAttachments.map((att, i) => (
                        <li key={i}>{att}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Signatures & Cachet Seal Section */}
              <div className="mt-12 pt-6 border-t-2 border-slate-900 grid grid-cols-2 gap-8 text-center text-xs">
                <div className="space-y-16">
                  <p className="font-black text-slate-900">توقيع وبصمة المعني بالأمر</p>
                  <div className="h-14 border border-dashed border-slate-400 mx-auto w-36 rounded flex items-center justify-center text-[10px] text-slate-400">
                    مكان التوقيع
                  </div>
                </div>

                <div className="space-y-16">
                  <p className="font-black text-slate-900">تأشيرة ومصادقة المصلحة الإدارية / السيبار</p>
                  <div className="h-14 border border-dashed border-slate-400 mx-auto w-36 rounded flex items-center justify-center text-[10px] text-slate-400">
                    الختم الرسمي
                  </div>
                </div>
              </div>

              {/* Security Barcode & Document Verification */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>وثيقة مستخرجة عبر منصة DZAIR FORM الموحدة</span>
                <span>VERIFIED ALGERIA ADMINISTRATIVE SYSTEM</span>
                <span>||||| ||| ||||||| || ||||</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
