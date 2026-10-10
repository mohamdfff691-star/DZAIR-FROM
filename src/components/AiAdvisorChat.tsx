import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Sparkles, 
  RotateCcw, 
  User, 
  CheckCircle2, 
  HelpCircle, 
  Compass, 
  FileSearch,
  ExternalLink
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  sources?: string[];
}

export const AiAdvisorChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `مرحباً بك في المستشار الإداري الذكي لمنصة DZAIR FORM 🇩🇿.
أنا مساعدك الخبير في جميع الإجراءات، المراسيم التنفيذية، وقوانين الإدارة الجزائرية (ملفات السكن عدل 3، منحة البطالة، بطاقة الشفاء، الحالة المدنية، المراسلة، الضرائب، ومسابقات التوظيف).

كيف يمكنني مساعدتك أنت أو زبون السيبار اليوم؟`,
      timestamp: 'الآن'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const predefinedPrompts = [
    'ما هي شروط الاستفادة من منحة البطالة 2024؟',
    'ما هي وثائق وراتب الاكتتاب في سكنات عدل 3؟',
    'كيفية استخراج شهادة السوابق العدلية B3 إلكترونياً؟',
    'ما هو الفرق بين الضمان الاجتماعي CNAS و CASNOS؟'
  ];

  const expertFallbackAnswers: Record<string, string> = {
    minha: `📌 شروط الاستفادة من منحة البطالة في الجزائر (المرسوم التنفيذي رقم 22-70):
1. السن: بين 19 و 40 سنة عند تاريخ التسجيل.
2. أن يكون طالب العمل مسجلاً لدى مصالح الوكالة الوطنية للتشغيل (ANEM) في منصة "وسيط" كطالب عمل لأول مرة منذ مدة لا تقل عن 6 أشهر.
3. عدم التوفر على أي دخل مهما كانت طبيعته (غير مأجور وغير منتسب للضمان الاجتماعي).
4. تسوية الوضعية تجاه الخدمة الوطنية (للذكور).
5. ألا يكون مسجلاً في أي مؤسسة للتعليم العالي أو التكوين المهني كطالب منتظم.
6. عدم استفادة الزوج(ة) من أي دخل في حالة الزواج.

💡 الملف المطلوب في ملحقة التشغيل:
- صك بريدي مشطوب (Chèque barré).
- بطاقة طالب العمل WASSIT.
- استمارة الالتزام والتعهد (يمكنك توليدها فوراً في معالج DZAIR FORM).`,

    aadl: `📌 شروط وراتب الاكتتاب في برنامج سكنات عدل 3 (AADL 3):
1. الدخل الشهري الصافي للمكتتب وزوجه: يجب أن يتراوح بين 24,000 دج و 108,000 دج شهرياً.
2. عدم امتلاك المكتتب أو زوجه لأي عقار ذو طابع سكني أو قطعة أرض صالحة للبناء.
3. عدم الاستفادة المسبقة من أي مساعدة مالية من الدولة لبناء أو شراء سكن (FSRL, CNL, إلخ).
4. التسجيل عبر المنصة الرسمية باستخدام رقم التعريف الوطني (NIN) ورقم الضمان الاجتماعي (NSS).

💡 يمكنك تعبئة استمارة سكنات عدل 3 وطباعة بطاقة المكتتب بدون أخطاء عبر معالج DZAIR FORM!`,

    casier: `📌 استخراج صحيفة السوابق القضائية الإلكترونية (القسيمة رقم 3 - B3):
1. الدخول إلى منصة وزارة العدل الرسمية: casierjudiciaire.mjustice.dz
2. إدخال رقم التعريف الوطني البيومتري (NIN).
3. إدخال رقم الهاتف المسجل باسم المعني لتلقي رمز التحقق السري (OTP).
4. تحميل الوثيقة بصيغة PDF ممضاة إلكترونياً ومزودة برمز الاستجابة السريعة (QR Code).
5. الوثيقة معترف بها قانونياً في جميع المسابقات والإدارات دون الحاجة للتنقل للمحكمة!`,

    cnas: `📌 الفرق بين صندوق CNAS وصندوق CASNOS في الجزائر:
- صندوق CNAS: مخصص للأجراء والعمال الموظفين في القطاع العام أو الشركات الخاصة، حيث يقتطع الاشتراكات صاحب العمل، وتمنح بطاقة الشفاء للتعويض عن الأدوية والعلاج.
- صندوق CASNOS: مخصص لغير الأجراء (التجار، الحرفيين، المحامين، الأطباء الخواص، أصحاب المؤسسات الفردية)، حيث يدفع المعني اشتراكه السنوي بنفسه عبر منصة "ضمانكم".`
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Call server-side Gemini endpoint
      const response = await fetch('/api/gemini/advisor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-6).map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          const botMsg: ChatMessage = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            text: data.reply,
            timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' }),
            sources: data.sources || ['الجريدة الرسمية للجمهورية الجزائرية', 'منصة DZAIR FORM']
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsLoading(false);
          return;
        }
      }
    } catch (e) {
      console.log('Using local legal knowledge base:', e);
    }

    // Expert Fallback
    setTimeout(() => {
      let reply = `بخصوص استفسارك حول "${text}":\n\nتعتمد الإجراءات الإدارية الجزائرية الرسمية على التطابق التام بين الوثائق المدنية (شهادة الميلاد 12خ وبطاقة الإقامة) مع أرقام التعريف الوطنية NIN.\n\nننصحك باستخدام معالج الاستمارات المدمج في DZAIR FORM لبناء الملف وتدقيق مرفقاته خطوة بخطوة قبل التوجه للإدارة المعنية.`;

      const lower = text.toLowerCase();
      if (lower.includes('بطال') || lower.includes('منحة') || lower.includes('وسيط')) {
        reply = expertFallbackAnswers.minha;
      } else if (lower.includes('عدل') || lower.includes('سكن') || lower.includes('aadl')) {
        reply = expertFallbackAnswers.aadl;
      } else if (lower.includes('سوابق') || lower.includes('b3') || lower.includes('عدلية')) {
        reply = expertFallbackAnswers.casier;
      } else if (lower.includes('ضمان') || lower.includes('شفاء') || lower.includes('cnas') || lower.includes('كاسنوس')) {
        reply = expertFallbackAnswers.cnas;
      }

      const botMsg: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' }),
        sources: ['المرسوم التنفيذي الرسمي', 'دليل الإجراءات الإدارية الجزائرية']
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsLoading(false);
    }, 800);
  };

  const handleToggleVoice = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('الميكروفون غير مدعوم في هذا المتصفح. يمكنك كتابة السؤال مباشرة.');
      return;
    }

    if (!isRecording) {
      setIsRecording(true);
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'ar-DZ';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsRecording(false);
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } else {
      setIsRecording(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>الذكاء الاصطناعي الإداري والبحث السريع</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white font-['Alexandria',sans-serif]">
            المستشار الإداري الجزائري الذكي
          </h2>

          <p className="text-slate-400 text-sm md:text-base">
            إجابات قانونية موثوقة وفورية حول جميع الإجراءات، المراسيم، والوثائق الإدارية لمساعدة أصحاب السيبار والمواطنين.
          </p>
        </div>

        {/* Chat Window Container */}
        <div className="rounded-3xl glass-panel-cyan border border-cyan-500/30 flex flex-col h-[650px] shadow-[0_0_35px_rgba(0,242,254,0.1)] overflow-hidden">
          {/* Chat Top Bar */}
          <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-['Alexandria',sans-serif]">
                  المستشار الرقمي - DZAIR AI
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>متصل ومحدث بقوانين ومراسيم 2024-2025</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setMessages([messages[0]])}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 p-2 rounded-lg bg-slate-900 border border-slate-800 transition cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>محادثة جديدة</span>
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[11px] text-slate-500 whitespace-nowrap pr-2">أسئلة شائعة:</span>
            {predefinedPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(p)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[11px] whitespace-nowrap border border-slate-700/60 transition cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'mr-auto flex-row-reverse' : 'ml-auto'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-cyan-400 border border-slate-700'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`space-y-1.5 ${msg.sender === 'user' ? 'text-left' : 'text-right'}`}>
                  <div className={`p-4 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-800 shadow-md'
                  }`}>
                    {msg.text}
                  </div>

                  {msg.sources && (
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pr-1">
                      <span>المصادر:</span>
                      {msg.sources.map((s, idx) => (
                        <span key={idx} className="bg-slate-800/80 px-1.5 py-0.5 rounded text-cyan-400/80">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-slate-500 block px-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-slate-400 mr-2">جاري البحث في القوانين والمراسيم...</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 md:p-4 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <button
                type="button"
                onClick={handleToggleVoice}
                className={`p-3 rounded-xl border transition cursor-pointer ${
                  isRecording
                    ? 'bg-rose-500 text-white border-rose-400 animate-pulse'
                    : 'bg-slate-900 text-slate-400 hover:text-cyan-300 border-slate-800'
                }`}
                title={isRecording ? 'إيقاف التسجيل الصوتي' : 'تسجيل صوتي'}
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isRecording ? 'جاري الاستماع لصوتك...' : 'اسأل عن أي إجراء، مرسوم، استمارة، أو ملف إداري جزائري...'}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-xs md:text-sm outline-none transition"
              />

              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,242,254,0.3)] transition disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4 rotate-180" />
                <span className="hidden sm:inline">إرسال</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
