import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '10mb' }));

// Initialize Google GenAI client (uses process.env.GEMINI_API_KEY)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || ''
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'DZAIR FORM API', timestamp: new Date().toISOString() });
});

// 1. AI Research & Document Generator Endpoint
app.post('/api/gemini/generate-research', async (req, res) => {
  try {
    const { topic, level, subject, studentName, institution, academicYear } = req.body;

    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'Gemini API key not configured', fallback: true });
    }

    const prompt = `أنت أستاذ وباحث أكاديمي جزائري متخصص في المنهجية العلمية والبحث الجامعي.
قم بإعداد بحث أكاديمي جزائري كامل ومنظم بالعربية حول موضوع: "${topic}".
المستوى الدراسي: ${level || 'جامعي'}
التخصص: ${subject || 'عام'}
اسم الطالب: ${studentName || 'طالب باحث'}
المؤسسة: ${institution || 'الجامعة'}
السنة الدراسية: ${academicYear || '2024-2025'}

يجب أن تعيد الإجابة فقط بتنسيق JSON نظيف وصالح تماماً بالحقول التالية:
{
  "title": "عنوان البحث الدقيق",
  "subject": "${subject || 'عام'}",
  "level": "${level || 'جامعي'}",
  "studentName": "${studentName || 'طالب باحث'}",
  "institution": "${institution || 'الجامعة'}",
  "academicYear": "${academicYear || '2024-2025'}",
  "introduction": "مقدمة وافية مع الإشكالية وأهمية الموضوع والمنهج المتبع",
  "outline": [
    {
      "chapter": "المبحث الأول: عنوان المبحث",
      "sections": ["المطلب الأول: ...", "المطلب الثاني: ...", "المطلب الثالث: ..."]
    },
    {
      "chapter": "المبحث الثاني: عنوان المبحث",
      "sections": ["المطلب الأول: ...", "المطلب الثاني: ...", "المطلب الثالث: ..."]
    }
  ],
  "content": [
    {
      "heading": "المبحث الأول: ...",
      "body": "نص تفصيلي معمق من عدة فقرات يغطي مطالب المبحث الأول بأسلوب أكاديمي جزائري رصين"
    },
    {
      "heading": "المبحث الثاني: ...",
      "body": "نص تفصيلي معمق من عدة فقرات يغطي مطالب المبحث الثاني ومقترحات عملية"
    }
  ],
  "conclusion": "خاتمة موجزة تحتوي على أبرز الاستنتاجات والتوصيات",
  "references": [
    "الجريدة الرسمية للجمهورية الجزائرية الديمقراطية الشعبية",
    "مرجع أكاديمي جزائري 1",
    "مرجع أكاديمي جزائري 2",
    "مرجع أكاديمي جزائري 3"
  ]
}
لا تضف أي نص خارج كائن JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text || '';
    const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const paper = JSON.parse(cleanJson);

    return res.json({ paper });
  } catch (error: any) {
    console.error('Research generation error:', error);
    return res.status(500).json({ error: error.message || 'Generation failed', fallback: true });
  }
});

// 2. AI Administrative Advisor Chat Endpoint
app.post('/api/gemini/advisor-chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'Gemini API key not configured', fallback: true });
    }

    const systemInstruction = `أنت "المستشار الإداري الذكي لمنصة DZAIR FORM" 🇩🇿.
أنت خبير محنك في القانون الإداري الجزائري، المراسيم التنفيذية، وإجراءات مقاهي الإنترنت ومكاتب الخدمات العمومية في جميع الـ 58 ولاية جزائرية.
مهامك:
1. الإجابة بدقة وسرعة وبأسلوب رسمي واضح ومهني عن كل ما يتعلق بـ:
   - سكنات عدل 3 (AADL)، الترقوي LPP، السكن الاجتماعي، والإعانات.
   - منحة البطالة (ANEM Minha) وشروط الاستفادة وملف ملحقة التشغيل.
   - وثائق الحالة المدنية (شهادة الميلاد 12خ، عقود الزواج، الوفاة، بطاقة الإقامة).
   - الضمان الاجتماعي (صندوق CNAS للعمال وبطاقة الشفاء، وصندوق CASNOS للتجار والحرفيين، وصندوق CNR للتقاعد).
   - مسابقات الوظيف العمومي والملفات الإدارية.
   - تسجيلات المراسلة ONEFD وامتحانات BAC و BEM.
   - العدالة والسوابق القضائية B3 والجنسية.
   - الضرائب (DGI و جبايتك) والسجل التجاري (CNRC).
2. عند ذكر أي شروط أو ملفات، اذكر الوثائق الإلزامية بدقة في نقاط مرقمة.
3. التحدث بالعربية الفصحى مع المصطلحات الإدارية الجزائرية المعتمدة.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.2
      }
    });

    const reply = response.text || '';
    return res.json({
      reply,
      sources: ['الجريدة الرسمية للجمهورية الجزائرية', 'المراسيم التنفيذية المعمول بها', 'DZAIR FORM']
    });
  } catch (error: any) {
    console.error('Advisor chat error:', error);
    return res.status(500).json({ error: error.message || 'Advisor error', fallback: true });
  }
});

// 3. AI CV Text Polish & Professional Rephrasing Endpoint
app.post('/api/gemini/enhance-cv', async (req, res) => {
  try {
    const { type, text, jobTitle } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'Gemini API key not configured', fallback: true });
    }

    const prompt = type === 'summary'
      ? `أنت خبير توظيف ومستشار موارد بشرية معتمد في الجزائر.
قم بإعادة صياغة وتحسين هذا الملخص المهني لسيرة ذاتية جزائرية تخص وظيفة "${jobTitle || 'محترف'}":
"${text}"
اجعله بأسلوب مهني قوي ومقنع، يبدأ بأفعال تأثير مباشرة، مبرزاً الخبرة والمصداقية التنظيمية. اكتب فقط النص المحسن النهائي دون أي مقدمات أو ملاحظات.`
      : `أنت خبير توظيف في الجزائر. قم بإعادة صياغة وتطوير مهام وإنجازات هذه الوظيفة (${jobTitle || 'موظف'}):
"${text}"
حولها إلى نقاط محددة احترافية تبدأ بأفعال إنجاز قوية (مثل: إدارة، تنسيق، تحسين، متابعة)، وتلائم مسؤولي التوظيف والشركات في الجزائر. اكتب فقط النتيجة النهائية المنسقة.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        temperature: 0.3
      }
    });

    return res.json({ enhancedText: response.text?.trim() });
  } catch (error: any) {
    console.error('CV enhance error:', error);
    return res.status(500).json({ error: error.message || 'Enhancement failed', fallback: true });
  }
});

// Setup Vite in Dev or static files in Production
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`DZAIR FORM Full-Stack Server active on http://0.0.0.0:${PORT}`);
});
