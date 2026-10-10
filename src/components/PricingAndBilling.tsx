import React, { useState } from 'react';
import { 
  Check, 
  Upload, 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Copy, 
  CheckCircle2, 
  FileCheck, 
  PhoneCall,
  Smartphone
} from 'lucide-react';

interface PaymentSubmission {
  tierName: string;
  method: 'ccp' | 'baridimob' | 'flexy';
  transactionNo: string;
  senderName: string;
  senderPhone: string;
  receiptName?: string;
  status: 'pending' | 'approved';
  licenseKey?: string;
  timestamp: string;
}

export const PricingAndBilling: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedTier, setSelectedTier] = useState<string>('pro');
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'ccp' | 'baridimob' | 'flexy'>('baridimob');
  
  // Payment form state
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [transactionNo, setTransactionNo] = useState('');
  const [receiptFileName, setReceiptFileName] = useState<string | null>(null);
  const [submission, setSubmission] = useState<PaymentSubmission | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const tiers = [
    {
      id: 'free',
      name: 'باقة المواطن والباحث',
      subtitle: 'للأفراد والطلبة ومستخدمي المنازل',
      priceMonthly: 0,
      priceYearly: 0,
      badge: null,
      features: [
        'وصول كامل لمجمع البوابات الحكومية (30+ بوابة)',
        'استخراج وتوليد الاستمارات الأساسية',
        'معاينة المستندات وطباعة بدون علامة مائية',
        'حفظ حتى 5 مستندات في الخزينة'
      ],
      cta: 'ابدأ الاستخدام مجاناً',
      isPopular: false
    },
    {
      id: 'pro',
      name: 'باقة السيبار الاحترافي (Pro)',
      subtitle: 'الحل الشامل والمفضل لمقاهي الإنترنت ومكاتب الخدمات',
      priceMonthly: 2500,
      priceYearly: 24000,
      badge: 'الأكثر طلباً واختياراً في الجزائر',
      features: [
        'توليد غير محدود لجميع الاستمارات والملفات الرسمية',
        'مولد البحوث والتقارير الأكاديمية الشامل',
        'خزينة مستندات لا نهائية للزبائن مع استرجاع فوري',
        'طباعة فورية A4 رسمية مطابقة للقانون الجزائري',
        'مولد لافتات أسعار الخدمات لتعليقها في المحل',
        'مولد وصولات الاستلام وفواتير الزبائن',
        'تحديثات فورية لأي تعديل في استمارات عدل أو منحة البطالة',
        'دعم فني مخصص عبر واتساب وتيليغرام'
      ],
      cta: 'ترقية واشتراك السيبار',
      isPopular: true
    },
    {
      id: 'enterprise',
      name: 'باقة المراكز والشركات (Hub)',
      subtitle: 'لمكاتب الترجمة والخدمات العامة متعددة المكاتب',
      priceMonthly: 5900,
      priceYearly: 58000,
      badge: 'متعدد الأجهزة',
      features: [
        'تشغيل متزامن على حتى 10 أجهزة كمبيوتر في السيبار',
        'تخصيص كامل للشعار والختم الرسمي لمكتب الخدمات',
        'أولوية قصوى في معالجة طلبات التفعيل والدعم',
        'تدريب عن بعد لموظفي السيبار على الأتمتة السريعة'
      ],
      cta: 'اشتراك الشركات والمكاتب',
      isPopular: false
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptFileName(e.target.files[0].name);
    }
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderPhone) return;

    const newSub: PaymentSubmission = {
      tierName: selectedTier === 'pro' ? 'السيبار الاحترافي (Pro)' : 'باقة الشركات (Hub)',
      method: paymentMethod,
      transactionNo: transactionNo || 'TXN-' + Math.floor(100000 + Math.random() * 900000),
      senderName,
      senderPhone,
      receiptName: receiptFileName || 'recu_paiement.jpg',
      status: 'pending',
      timestamp: new Date().toLocaleTimeString('ar-DZ')
    };

    setSubmission(newSub);

    // Simulate instant auto-approval after 3 seconds for demonstration
    setTimeout(() => {
      setSubmission((prev) => prev ? {
        ...prev,
        status: 'approved',
        licenseKey: 'DZF-PRO-' + Math.random().toString(36).substring(2, 10).toUpperCase()
      } : null);
    }, 2800);
  };

  const handleCopyLicenseKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>اشتراكات شفافة ودفع محلي ميسر</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white font-['Alexandria',sans-serif]">
            باقات الاشتراك وخدمات السيبار
          </h2>

          <p className="text-slate-400 text-sm md:text-base">
            اختر الباقة المناسبة لحجم نشاطك. دفع سهل عبر بريدي موب (BaridiMob)، حساب CCP، أو رصيد فليكسي مع تفعيل فوري.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs ${billingCycle === 'monthly' ? 'text-white font-bold' : 'text-slate-400'}`}>
              اشتراك شهري
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 rounded-full bg-slate-800 border border-slate-700 p-1 transition cursor-pointer"
            >
              <div 
                className={`w-5 h-5 rounded-full bg-cyan-400 transition-transform ${
                  billingCycle === 'yearly' ? '-translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs ${billingCycle === 'yearly' ? 'text-white font-bold' : 'text-slate-400'}`}>
              اشتراك سنوي <span className="text-cyan-400 font-mono text-[11px]">(وفر 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
          {tiers.map((tier) => {
            const price = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceYearly;
            const isPro = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'glass-panel-cyan shadow-[0_0_35px_rgba(0,242,254,0.15)] scale-102 z-10'
                    : 'glass-panel hover:border-slate-700'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-[10px] tracking-wider shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white font-['Alexandria',sans-serif]">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">
                    {tier.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-3xl md:text-4xl font-black text-white">
                        {price === 0 ? '0' : new Intl.NumberFormat('fr-DZ').format(price)}
                      </span>
                      <span className="text-xs font-bold text-cyan-400">دج</span>
                      <span className="text-xs text-slate-400">
                        {price === 0 ? 'مجاناً' : billingCycle === 'monthly' ? '/ شهر' : '/ سنة'}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setSelectedTier(tier.id);
                    setShowPaymentModal(true);
                  }}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center gap-2 ${
                    isPro
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.35)]'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <span>{tier.cta}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Local Payment Details Card */}
        <div className="max-w-4xl mx-auto rounded-2xl glass-panel p-6 md:p-8 border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="text-lg font-bold text-white font-['Alexandria',sans-serif]">
              معلومات الدفع المباشر عبر الحساب البريدي الجاري CCP & BaridiMob
            </h3>
            <p className="text-xs text-slate-400">
              يمكنك التحويل فورياً عبر تطبيق بريدي موب أو مكاتب بريد الجزائر ثم رفع صورة الوصل للحصول على كود التفعيل في دقائق.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 block">رقم الحساب البريدي الجاري CCP:</span>
              <span className="font-mono text-cyan-300 font-bold text-sm block">0021948214 Clé 38</span>
              <span className="text-[11px] text-slate-500 block">DZAIR FORM SOLUTIONS</span>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 block">رمز RIP بريدي موب (BaridiMob):</span>
              <span className="font-mono text-cyan-300 font-bold text-sm block">00799999002194821438</span>
              <span className="text-[11px] text-slate-500 block">تحويل فوري في ثانية</span>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 block">خدمة الزبائن وتأكيد التفعيل:</span>
              <span className="font-mono text-cyan-300 font-bold text-sm block">05.50.12.34.56</span>
              <span className="text-[11px] text-slate-500 block">متاح يومياً 08:00 - 22:00</span>
            </div>
          </div>
        </div>

        {/* PAYMENT SUBMISSION MODAL */}
        {showPaymentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-xl glass-panel-cyan rounded-3xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-['Alexandria',sans-serif]">
                    تأكيد اشتراك السيبار ورفع الوصل
                  </h3>
                  <p className="text-xs text-slate-400">
                    الباقة المختارة: <strong className="text-cyan-300">{selectedTier === 'pro' ? 'السيبار الاحترافي' : 'الشركات'}</strong>
                  </p>
                </div>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="text-slate-400 hover:text-white text-sm cursor-pointer p-1"
                >
                  ✕
                </button>
              </div>

              {/* If no submission yet */}
              {!submission ? (
                <form onSubmit={handleSubmitPayment} className="space-y-4">
                  {/* Payment Method selector */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'baridimob', label: 'بريدي موب (BaridiMob)', icon: Smartphone },
                      { id: 'ccp', label: 'وصل البريد (CCP)', icon: CreditCard },
                      { id: 'flexy', label: 'تعبئة فليكسي (Flexy)', icon: PhoneCall }
                    ].map((m) => {
                      const Icon = m.icon;
                      const isSelected = paymentMethod === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setPaymentMethod(m.id as any)}
                          className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                            isSelected
                              ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                          }`}
                        >
                          <Icon className="w-4 h-4 mx-auto mb-1" />
                          <span className="text-[11px] block">{m.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        اسم صاحب السيبار / المحل
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="مثال: عبد القادر مقران"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        رقم الهاتف لاستلام كود التفعيل
                      </label>
                      <input
                        type="tel"
                        required
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        placeholder="06.XX.XX.XX.XX"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      رقم العملية المدون في الوصل (Numéro de transaction)
                    </label>
                    <input
                      type="text"
                      value={transactionNo}
                      onChange={(e) => setTransactionNo(e.target.value)}
                      placeholder="مثال: TXN-892104"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  {/* File Upload Box */}
                  <div className="border-2 border-dashed border-slate-700 hover:border-cyan-400/60 rounded-xl p-4 text-center cursor-pointer transition">
                    <input
                      type="file"
                      id="receipt-file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="receipt-file" className="cursor-pointer block space-y-2">
                      <Upload className="w-7 h-7 text-cyan-400 mx-auto" />
                      <div className="text-xs text-slate-300">
                        {receiptFileName ? (
                          <span className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                            <Check className="w-4 h-4" /> تم اختيار الوصل: {receiptFileName}
                          </span>
                        ) : (
                          <span>انقر لرفع صورة الوصل (Capture d'écran / Photo du reçu)</span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500 block">PNG, JPG, PDF حتى 10MB</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.35)] cursor-pointer transition"
                  >
                    <span>إرسال وتأكيد التفعيل</span>
                  </button>
                </form>
              ) : (
                /* Submission Status Tracking */
                <div className="space-y-6 text-center py-4">
                  {submission.status === 'pending' ? (
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full border-3 border-cyan-400 border-t-transparent animate-spin mx-auto" />
                      <h4 className="text-base font-bold text-white">
                        جاري مراجعة الوصل والتحقق الآلي من العملية...
                      </h4>
                      <p className="text-xs text-slate-400">
                        التحقق من رقم العملية: <span className="font-mono text-cyan-300">{submission.transactionNo}</span>
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <div>
                        <h4 className="text-lg font-black text-white font-['Alexandria',sans-serif]">
                          تهانينا! تم تفعيل اشتراك السيبار بنجاح ✓
                        </h4>
                        <p className="text-xs text-slate-300 mt-1">
                          حسابك الآن في وضع "السيبار الاحترافي" مع صلاحيات الطباعة والوثائق اللامحدودة.
                        </p>
                      </div>

                      {/* License Key Display */}
                      <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/40 text-right space-y-2">
                        <span className="text-[11px] text-slate-400 block">كود الترخيص الخاص بمحلك:</span>
                        <div className="flex items-center justify-between font-mono text-sm text-cyan-300 font-black">
                          <span>{submission.licenseKey}</span>
                          <button
                            onClick={() => handleCopyLicenseKey(submission.licenseKey!)}
                            className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer flex items-center gap-1"
                          >
                            {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedKey ? 'تم النسخ' : 'نسخ'}</span>
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => setShowPaymentModal(false)}
                        className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer transition"
                      >
                        العودة إلى لوحة التحكم
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
