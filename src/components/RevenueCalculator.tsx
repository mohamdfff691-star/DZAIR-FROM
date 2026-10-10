import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Sparkles, 
  ArrowUpRight, 
  Zap, 
  CheckCircle2, 
  Layers,
  FileSpreadsheet
} from 'lucide-react';

export const RevenueCalculator: React.FC = () => {
  const [dailyForms, setDailyForms] = useState<number>(30);
  const [formPrice, setFormPrice] = useState<number>(250); // DZD
  const [dailyResearches, setDailyResearches] = useState<number>(4);
  const [researchPrice, setResearchPrice] = useState<number>(700); // DZD
  const [monthlyCosts, setMonthlyCosts] = useState<number>(20000); // DZD (paper, ink, internet)
  const [workingDays, setWorkingDays] = useState<number>(26); // days per month

  // Calculations
  const dailyFormsRevenue = dailyForms * formPrice;
  const dailyResearchRevenue = dailyResearches * researchPrice;
  const totalDailyRevenue = dailyFormsRevenue + dailyResearchRevenue;

  const monthlyGrossRevenue = totalDailyRevenue * workingDays;
  const monthlyNetProfit = Math.max(0, monthlyGrossRevenue - monthlyCosts);
  const annualNetProfit = monthlyNetProfit * 12;

  // Time savings: Manual takes ~12 mins per form; DZAIR FORM takes ~2 mins -> 10 mins saved per form
  const minutesSavedPerDay = dailyForms * 10;
  const hoursSavedPerWeek = Math.round((minutesSavedPerDay * 6) / 60);

  const formatDzd = (amount: number) => {
    return new Intl.NumberFormat('fr-DZ', { maximumFractionDigits: 0 }).format(amount) + ' دج';
  };

  return (
    <section id="revenue-calculator" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>حاسبة العائد الاستثماري لمقاهي الإنترنت ومكاتب الخدمات</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white font-['Alexandria',sans-serif]">
            حاسبة أرباح السيبار وتوفير الوقت
          </h2>

          <p className="text-slate-400 text-sm md:text-base">
            اكتشف كم يمكنك أن تجني شهرياً وكم ساعة عمل توفرها أنت وعمالك أسبوعياً من خلال أتمتة إنجاز الاستمارات والبحوث.
          </p>
        </div>

        {/* Dual Layout: Sliders & Controls on Left, KPI Board on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Controls Column */}
          <div className="lg:col-span-7 glass-panel p-6 md:p-8 rounded-2xl border border-slate-800 space-y-7">
            <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-['Alexandria',sans-serif]">
                معدلات النشاط اليومي في السيبار
              </h3>
              <span className="text-xs text-cyan-400 font-mono">العملة: الدينار الجزائري (DZD)</span>
            </div>

            {/* Slider 1: Daily Forms */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">
                  عدد الاستمارات والملفات اليومية المنجزة:
                </span>
                <span className="font-mono text-cyan-300 font-bold text-sm bg-slate-900 px-3 py-1 rounded border border-slate-700">
                  {dailyForms} استمارة / يوم
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                value={dailyForms}
                onChange={(e) => setDailyForms(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>5 استمارات</span>
                <span>60 استمارة</span>
                <span>120 استمارة</span>
              </div>
            </div>

            {/* Slider 2: Form Price */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">
                  متوسط سعر الاستمارة للزبون:
                </span>
                <span className="font-mono text-cyan-300 font-bold text-sm bg-slate-900 px-3 py-1 rounded border border-slate-700">
                  {formPrice} دج
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                step="50"
                value={formPrice}
                onChange={(e) => setFormPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>100 دج</span>
                <span>400 دج</span>
                <span>800 دج</span>
              </div>
            </div>

            {/* Slider 3: Daily Researches */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">
                  بحوث الطلبة والتقارير المطولة يومياً:
                </span>
                <span className="font-mono text-cyan-300 font-bold text-sm bg-slate-900 px-3 py-1 rounded border border-slate-700">
                  {dailyResearches} بحوث / يوم
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={dailyResearches}
                onChange={(e) => setDailyResearches(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 بحوث</span>
                <span>10 بحوث</span>
                <span>20 بحث</span>
              </div>
            </div>

            {/* Slider 4: Monthly Operational Costs */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">
                  المصاريف الشهرية (ورق، حبر، اشتراك الإنترنت، كهرباء):
                </span>
                <span className="font-mono text-rose-300 font-bold text-sm bg-slate-900 px-3 py-1 rounded border border-slate-700">
                  {formatDzd(monthlyCosts)}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="60000"
                step="2500"
                value={monthlyCosts}
                onChange={(e) => setMonthlyCosts(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>5,000 دج</span>
                <span>30,000 دج</span>
                <span>60,000 دج</span>
              </div>
            </div>

            {/* Slider 5: Working Days */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">
                  أيام فتح المحل في الشهر:
                </span>
                <span className="font-mono text-cyan-300 font-bold text-sm bg-slate-900 px-3 py-1 rounded border border-slate-700">
                  {workingDays} يوماً
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="30"
                step="1"
                value={workingDays}
                onChange={(e) => setWorkingDays(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>

          {/* Results Board Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Net Profit Card */}
            <div className="rounded-2xl glass-panel-cyan p-6 md:p-8 space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-300">
                  صافي الربح الشهري التقديري
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  +35% نمو بالأتمتة
                </span>
              </div>

              <div className="font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 font-['Alexandria',sans-serif]">
                {formatDzd(monthlyNetProfit)}
              </div>

              <p className="text-xs text-slate-400">
                بعد اقتطاع المصاريف التشغيلية (الورق والحبر والإنترنت).
              </p>

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 block">الدخل السنوي الصافي:</span>
                  <span className="font-bold text-white font-mono text-sm">
                    {formatDzd(annualNetProfit)}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">الدخل اليومي الخام:</span>
                  <span className="font-bold text-cyan-300 font-mono text-sm">
                    {formatDzd(totalDailyRevenue)}
                  </span>
                </div>
              </div>
            </div>

            {/* Time Savings Hero Card */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <Clock className="w-5 h-5 animate-pulse" />
                <h4 className="text-sm font-bold text-white font-['Alexandria',sans-serif]">
                  الوقت الموفر أسبوعياً
                </h4>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-cyan-300 font-mono">
                  +{hoursSavedPerWeek}
                </span>
                <span className="text-xs text-slate-300 font-bold">ساعة موفرة كل أسبوع!</span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                بدلاً من قضاء 10-15 دقيقة في البحث عن الروابط وكتابة البيانات يدوياً وتصحيح الأخطاء، تنهي كل استمارة في دقيقتين فقط مع طباعة فورية.
              </p>
            </div>

            {/* Quick Comparison Card */}
            <div className="rounded-2xl bg-slate-900/80 p-5 border border-slate-800 text-xs space-y-3">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>مقارنة الأداء:</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40 space-y-1">
                  <span className="font-bold text-rose-400 block">الطريقة التقليدية:</span>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    تشتت بين 15 علامة تبويب، كتابة يدوية مكررة، ضياع الوقت، وأخطاء متكررة في أرقام NIN.
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 space-y-1">
                  <span className="font-bold text-cyan-300 block">مع DZAIR FORM:</span>
                  <p className="text-[11px] text-slate-300 leading-tight">
                    تدقيق آلي، طباعة A4 فورية بدون علامة مائية، حفظ في الخزينة، ومضاعفة عدد الزبائن.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
