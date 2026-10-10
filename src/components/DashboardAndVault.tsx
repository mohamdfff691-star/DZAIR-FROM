import React, { useState } from 'react';
import { 
  FolderLock, 
  Search, 
  Printer, 
  Trash2, 
  Download, 
  Sparkles, 
  FileCheck, 
  TrendingUp, 
  Clock, 
  Plus, 
  ExternalLink,
  Receipt,
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';
import { SavedDocument } from '../types';

interface DashboardAndVaultProps {
  savedDocuments: SavedDocument[];
  onDeleteDocument: (id: string) => void;
  onOpenWizard: () => void;
}

export const DashboardAndVault: React.FC<DashboardAndVaultProps> = ({
  savedDocuments,
  onDeleteDocument,
  onOpenWizard
}) => {
  const [searchVault, setSearchVault] = useState('');
  const [activeTab, setActiveTab] = useState<'vault' | 'price_sign' | 'invoice'>('vault');
  const [selectedDocForInvoice, setSelectedDocForInvoice] = useState<SavedDocument | null>(savedDocuments[0] || null);

  // Price Sign State for Cybercafé Wall
  const [cyberName, setCyberName] = useState('سيبار ومكتب خدمات المستقبل');
  const [cyberPhone, setCyberPhone] = useState('05.50.12.34.56');
  const [cyberWilaya, setCyberWilaya] = useState('الجزائر العاصمة');
  const [customPrices, setCustomPrices] = useState([
    { service: 'استمارة سكنات عدل 3 مع التدقيق وطباعة الوصل', price: '300 دج' },
    { service: 'تسجيل وتجديد منحة البطالة (ANEM Minha)', price: '200 دج' },
    { service: 'استخراج وثائق الحالة المدنية (شهادة ميلاد 12خ / إقامة)', price: '150 دج' },
    { service: 'كتابة طلب خطي رسمي أو تصريح شرفي معتمد', price: '200 دج' },
    { service: 'إعداد بحوث مدرسية وجامعية متكاملة (بالصفحة)', price: '80 دج / صفحة' },
    { service: 'تسجيلات المراسلة ONEFD وسحب الاستدعاء وكشف النقاط', price: '250 دج' },
    { service: 'تصريح الضمان الاجتماعي للعمال والبطاقة الشفاء (CNAS)', price: '200 دج' },
    { service: 'طباعة وتصوير مستندات A4 أبيض وأسود', price: '10 دج / صفحة' }
  ]);

  const filteredVault = savedDocuments.filter((doc) => {
    const q = searchVault.toLowerCase();
    return (
      doc.clientName.toLowerCase().includes(q) ||
      doc.title.toLowerCase().includes(q) ||
      doc.wilaya.toLowerCase().includes(q) ||
      (doc.nin && doc.nin.includes(q))
    );
  });

  const totalVaultEarnings = savedDocuments.reduce((acc, curr) => acc + (curr.feeCharged || 200), 0);

  return (
    <section id="dashboard" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 no-print">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <FolderLock className="w-3.5 h-3.5" />
              <span>فضاء إدارة السيبار وخزينة الملفات المحفوظة</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white font-['Alexandria',sans-serif]">
              لوحة تحكم السيبار والخزينة الرقمية
            </h2>
          </div>

          {/* Quick Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenWizard}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,242,254,0.3)] transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>إنشاء استمارة جديدة</span>
            </button>
          </div>
        </div>

        {/* Top Stats Overview Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 no-print">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400">الملفات المحفوظة في الخزينة:</span>
            <div className="font-mono text-2xl font-black text-white">
              {savedDocuments.length}
            </div>
            <span className="text-[10px] text-emerald-400">متاحة لإعادة الطباعة فوراً</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400">مداخيل الخدمات المسجلة:</span>
            <div className="font-mono text-2xl font-black text-cyan-300">
              {new Intl.NumberFormat('fr-DZ').format(totalVaultEarnings)} دج
            </div>
            <span className="text-[10px] text-slate-400">مجموع رسوم الزبائن</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400">حالة الاشتراك:</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white text-base">سيبار معتمد ✓</span>
            </div>
            <span className="text-[10px] text-cyan-400 font-mono">DZF-PRO-LICENSED</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400">سرعة الإنجاز المحققة:</span>
            <div className="font-mono text-2xl font-black text-white">
              ~ 1.8 دقيقة
            </div>
            <span className="text-[10px] text-cyan-400">أسرع 6 أضعاف من اليدوي</span>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center gap-2 mb-8 no-print border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('vault')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'vault'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <FolderLock className="w-4 h-4" />
            <span>خزينة المستندات ({savedDocuments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('price_sign')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'price_sign'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>لافتة أسعار خدمات السيبار (جاهزة للطباعة والتعليق)</span>
          </button>

          <button
            onClick={() => setActiveTab('invoice')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'invoice'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>وصل تسليم وفاتورة الزبون</span>
          </button>
        </div>

        {/* TAB 1: VAULT */}
        {activeTab === 'vault' && (
          <div className="space-y-6 no-print">
            {/* Search Input */}
            <div className="relative max-w-md">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchVault}
                onChange={(e) => setSearchVault(e.target.value)}
                placeholder="ابحث في الخزينة باسم الزبون، الاستمارة، أو الولاية..."
                className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
              />
            </div>

            {/* Documents List */}
            {filteredVault.length > 0 ? (
              <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4 font-semibold">رقم الملف</th>
                        <th className="py-3 px-4 font-semibold">نوع الاستمارة</th>
                        <th className="py-3 px-4 font-semibold">اسم الزبون</th>
                        <th className="py-3 px-4 font-semibold">الولاية</th>
                        <th className="py-3 px-4 font-semibold">تاريخ الإنشاء</th>
                        <th className="py-3 px-4 font-semibold">رسوم الخدمة</th>
                        <th className="py-3 px-4 font-semibold text-center">إجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {filteredVault.map((doc) => (
                        <tr key={doc.id} className="hover:bg-slate-900/40 transition">
                          <td className="py-3 px-4 font-mono text-cyan-300">{doc.id}</td>
                          <td className="py-3 px-4 font-bold text-white">{doc.title}</td>
                          <td className="py-3 px-4">{doc.clientName}</td>
                          <td className="py-3 px-4 text-slate-400">{doc.wilaya}</td>
                          <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{doc.createdAt}</td>
                          <td className="py-3 px-4 font-mono font-bold text-cyan-400">{doc.feeCharged || 200} دج</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => {
                                  setSelectedDocForInvoice(doc);
                                  setActiveTab('invoice');
                                }}
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 transition cursor-pointer"
                                title="استخراج وصل تسليم"
                              >
                                <Receipt className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => window.print()}
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
                                title="طباعة فورية"
                              >
                                <Printer className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => onDeleteDocument(doc.id)}
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-rose-400 transition cursor-pointer"
                                title="حذف من الخزينة"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center glass-panel rounded-2xl border border-slate-800 space-y-3">
                <FolderLock className="w-10 h-10 text-cyan-400 mx-auto" />
                <h4 className="text-base font-bold text-white">الخزينة فارغة حالياً</h4>
                <p className="text-xs text-slate-400">
                  عند إكمال أي استمارة في المعالج، اضغط على "حفظ في الخزينة" لتظهر هنا وتبقى محفوظة لزبائنك.
                </p>
                <button
                  onClick={onOpenWizard}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer transition mt-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>إنشاء أول استمارة الآن</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PRINTABLE CYBERCAFE WALL PRICE SIGN */}
        {activeTab === 'price_sign' && (
          <div className="space-y-6">
            <div className="glass-panel p-4 rounded-xl flex items-center justify-between no-print border border-slate-800">
              <span className="text-xs text-slate-300">
                يمكنك تعديل أسعار محلك وطباعة هذه اللافتة A4 لتعليقها على جدار أو واجهة السيبار.
              </span>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer transition shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة لافتة الأسعار A4</span>
              </button>
            </div>

            {/* Editable Settings on top */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 glass-panel p-4 rounded-xl no-print text-xs">
              <div>
                <label className="block text-slate-400 mb-1">اسم مقهى الإنترنت / المكتب:</label>
                <input
                  type="text"
                  value={cyberName}
                  onChange={(e) => setCyberName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">رقم الهاتف للتواصل:</label>
                <input
                  type="text"
                  value={cyberPhone}
                  onChange={(e) => setCyberPhone(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">الولاية والموقع:</label>
                <input
                  type="text"
                  value={cyberWilaya}
                  onChange={(e) => setCyberWilaya(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
                />
              </div>
            </div>

            {/* A4 PRINTABLE WALL PRICE LIST */}
            <div className="printable-area max-w-[210mm] mx-auto bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-sm border border-slate-300 font-['Cairo',sans-serif]">
              {/* Header */}
              <div className="text-center border-b-4 border-slate-900 pb-4 mb-6 space-y-1">
                <p className="text-xs font-bold text-slate-600">الجمهورية الجزائرية الديمقراطية الشعبية</p>
                <h1 className="text-2xl font-black text-slate-900 font-['Alexandria',sans-serif]">
                  {cyberName}
                </h1>
                <p className="text-xs font-bold text-slate-700">
                  مكتب الخدمات العمومية، الإعلام الآلي، والأشغال الإدارية الرقمية
                </p>
                <div className="flex justify-center gap-6 text-[11px] font-mono text-slate-600 pt-1">
                  <span>هاتف: {cyberPhone}</span>
                  <span>الموقع: {cyberWilaya}</span>
                  <span>نظام DZAIR FORM المعتمد</span>
                </div>
              </div>

              {/* Title Banner */}
              <div className="text-center bg-slate-900 text-white py-2 mb-6 rounded">
                <h2 className="text-base font-black tracking-wider">
                  تعريفة وأسعار الخدمات الإدارية والرقمية الرسمية
                </h2>
              </div>

              {/* Price Table */}
              <table className="w-full text-right text-xs border border-slate-900 mb-6">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-900">
                    <th className="p-3 font-black border-l border-slate-900 w-12 text-center">الرقم</th>
                    <th className="p-3 font-black border-l border-slate-900">طبيعة الخدمة / نوع الاستمارة</th>
                    <th className="p-3 font-black w-32 text-center">السعر المعمول به</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 font-semibold text-slate-800">
                  {customPrices.map((cp, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-2.5 text-center font-mono border-l border-slate-300">{idx + 1}</td>
                      <td className="p-2.5 border-l border-slate-300">{cp.service}</td>
                      <td className="p-2.5 text-center font-mono font-black text-slate-900">{cp.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Footer Notice */}
              <div className="border border-slate-300 p-3 rounded bg-slate-50 text-[11px] text-slate-600 leading-relaxed text-justify mb-8">
                <strong>تنبيه للزبائن الكرام:</strong> نحرص على دقة البيانات المدخلة وتدقيق أرقام التعريف الوطني والضمان الاجتماعي لتفادي أي رفض لملفاتكم لدى الإدارات المختصة. يرجى مراجعة وصل المراجعة والتأكيد قبل المغادرة.
              </div>

              <div className="flex justify-between items-end pt-4 border-t-2 border-slate-900 text-xs">
                <div>
                  <span className="font-bold text-slate-800 block">إدارة السيبار:</span>
                  <div className="h-10 border border-dashed border-slate-300 w-32 mt-1 rounded flex items-center justify-center text-[9px] text-slate-400">
                    الختم والتأشيرة
                  </div>
                </div>
                <div className="text-left font-mono text-[9px] text-slate-400">
                  تاريخ التعليق: {new Date().toLocaleDateString('ar-DZ')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CUSTOMER DELIVERY RECEIPT / INVOICE */}
        {activeTab === 'invoice' && (
          <div className="space-y-6">
            <div className="glass-panel p-4 rounded-xl flex items-center justify-between no-print border border-slate-800">
              <span className="text-xs text-slate-300">
                وصل تسليم رسمي يحفظ حق الزبون ويحتوي على الرقم المرجعي للعملية وسعر الخدمة.
              </span>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer transition shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة الوصل</span>
              </button>
            </div>

            {/* A4 or Ticket Printable Invoice */}
            <div className="printable-area max-w-[150mm] mx-auto bg-white text-slate-900 p-6 sm:p-8 shadow-2xl rounded-sm border border-slate-400 font-['Cairo',sans-serif]">
              <div className="text-center border-b-2 border-slate-900 pb-3 mb-4">
                <h2 className="text-lg font-black text-slate-900 font-['Alexandria',sans-serif]">
                  {cyberName}
                </h2>
                <p className="text-[11px] text-slate-600 font-mono">هاتف: {cyberPhone} | ولاية {cyberWilaya}</p>
                <div className="inline-block mt-2 px-3 py-0.5 rounded bg-slate-900 text-white text-xs font-bold">
                  وصل تسليم خدمة إدارية رقم: DZ-REC-{Date.now().toString().slice(-6)}
                </div>
              </div>

              <div className="space-y-2 text-xs mb-6 font-semibold">
                <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                  <span className="text-slate-600">اسم الزبون:</span>
                  <span className="font-bold text-slate-900">{selectedDocForInvoice?.clientName || 'زبون السيبار'}</span>
                </div>
                <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                  <span className="text-slate-600">طبيعة الخدمة المنجزة:</span>
                  <span className="font-bold text-slate-900">{selectedDocForInvoice?.title || 'استمارة إدارية'}</span>
                </div>
                <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                  <span className="text-slate-600">تاريخ وساعة الإنجاز:</span>
                  <span className="font-mono text-slate-700">{selectedDocForInvoice?.createdAt || new Date().toLocaleString('ar-DZ')}</span>
                </div>
                <div className="flex justify-between pt-2 text-sm font-black bg-slate-100 p-2 rounded">
                  <span>المبلغ الواجب دفعه:</span>
                  <span className="font-mono text-slate-900">{selectedDocForInvoice?.feeCharged || 250} دج</span>
                </div>
              </div>

              <div className="text-center border-t border-slate-300 pt-3 text-[10px] text-slate-500 font-mono">
                شكراً لثقتكم بخدماتنا | تمت المعالجة عبر منصة DZAIR FORM
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
