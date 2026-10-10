import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  Store, 
  MapPin, 
  Phone,
  ShieldCheck
} from 'lucide-react';
import { WILAYAS_58 } from '../data/algeriaData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (cyberName: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'partner'>('login');
  const [emailOrPhone, setEmailOrPhone] = useState('cyber.futur@alger.dz');
  const [password, setPassword] = useState('••••••••');
  const [cyberName, setCyberName] = useState('سيبار ومكتب خدمات المستقبل');
  const [wilaya, setWilaya] = useState('16 - الجزائر العاصمة');
  const [phone, setPhone] = useState('05.50.12.34.56');
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(true);
    setTimeout(() => {
      onLoginSuccess(cyberName);
      onClose();
      setSuccessMsg(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn no-print">
      <div className="relative w-full max-w-md glass-panel-cyan rounded-3xl p-6 md:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute left-6 top-6 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
            <Store className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-['Alexandria',sans-serif]">
            {mode === 'login' ? 'تسجيل دخول صاحب السيبار' : 'طلب شراكة واعتماد سيبار'}
          </h3>
          <p className="text-xs text-slate-400">
            {mode === 'login' 
              ? 'الوصول إلى لوحة التحكم وخزينة المستندات المحفوظة'
              : 'انضم لشبكة مقاهي الإنترنت المعتمدة واستفد من التخفيضات'}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`py-2 rounded-lg font-bold transition cursor-pointer ${
              mode === 'login' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            تسجيل الدخول
          </button>
          <button
            type="button"
            onClick={() => setMode('partner')}
            className={`py-2 rounded-lg font-bold transition cursor-pointer ${
              mode === 'partner' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            إبرام شراكة جديدة
          </button>
        </div>

        {successMsg ? (
          <div className="p-6 text-center space-y-3 bg-emerald-950/40 rounded-2xl border border-emerald-500/40 animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-base font-bold text-white">تم الدخول بنجاح!</h4>
            <p className="text-xs text-slate-300">جاري توجيهك إلى لوحة تحكم السيبار المعتمدة...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'partner' && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  اسم مقهى الإنترنت / المكتب
                </label>
                <input
                  type="text"
                  required
                  value={cyberName}
                  onChange={(e) => setCyberName(e.target.value)}
                  placeholder="مثال: سيبار السلام"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                البريد الإلكتروني أو رقم الهاتف
              </label>
              <input
                type="text"
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="name@cyber.dz أو 0655..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            {mode === 'partner' && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  الولاية
                </label>
                <select
                  value={wilaya}
                  onChange={(e) => setWilaya(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
                >
                  {WILAYAS_58.map((w) => (
                    <option key={w.code} value={`${w.code} - ${w.nameAr}`}>
                      {w.code} - {w.nameAr}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                كلمة المرور
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.35)] transition cursor-pointer"
            >
              <span>{mode === 'login' ? 'دخول لوحة التحكم' : 'إرسال طلب الاعتماد'}</span>
            </button>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-500">
                بيانات الدخول التجريبي مفعلة مسبقاً للتجربة المباشرة ✓
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
