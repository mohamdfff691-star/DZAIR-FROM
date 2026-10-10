/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { PortalsPage } from './pages/PortalsPage';
import { DossierBuilderPage } from './pages/DossierBuilderPage';
import { CvBuilderPage } from './pages/CvBuilderPage';
import { ExamsLibraryPage } from './pages/ExamsLibraryPage';
import { ResearchGeneratorPage } from './pages/ResearchGeneratorPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { PricingPage } from './pages/PricingPage';
import { DashboardPage } from './pages/DashboardPage';
import { AdvisorPage } from './pages/AdvisorPage';

import { SavedDocument } from './types';
import { ArrowUp, Bot } from 'lucide-react';

const INITIAL_DOCUMENTS: SavedDocument[] = [
  {
    id: 'DOC-AADL-2024-01',
    templateId: 'aadl-3-dossier',
    title: 'استمارة وبناء ملف سكن عدل 3 (AADL 3)',
    clientName: 'عبد الحميد بوعلام',
    nin: '198816120094102941',
    wilaya: '16 - الجزائر العاصمة',
    createdAt: '10 أكتوبر 2024 - 11:30',
    formData: {
      applicantName: 'عبد الحميد بوعلام',
      monthlyIncome: '72000',
      employer: 'سوناطراك - حاسي مسعود'
    },
    feeCharged: 300,
    status: 'ready'
  },
  {
    id: 'DOC-MINHA-2024-02',
    templateId: 'anem-minha-form',
    title: 'استمارة التعهد والالتزام لمنحة البطالة (ANEM Minha)',
    clientName: 'فاطمة الزهراء بن مسعود',
    nin: '199931040018294012',
    wilaya: '31 - وهران',
    createdAt: '09 أكتوبر 2024 - 16:45',
    formData: {
      fullName: 'فاطمة الزهراء بن مسعود',
      wassitId: 'WST-31-098214'
    },
    feeCharged: 200,
    status: 'printed'
  },
  {
    id: 'DOC-REQ-2024-03',
    templateId: 'formal-request-letter',
    title: 'طلب خطي رسمي معتمد (Demande Manuscrite)',
    clientName: 'طارق محي الدين',
    nin: '198409150047209144',
    wilaya: '09 - البليدة',
    createdAt: '08 أكتوبر 2024 - 10:15',
    formData: {
      senderName: 'طارق محي الدين',
      subject: 'طلب تسوية وضعية عقارية وشهادة مطابقة'
    },
    feeCharged: 200,
    status: 'ready'
  }
];

function AppContent() {
  const [savedDocuments, setSavedDocuments] = useState<SavedDocument[]>(() => {
    try {
      const stored = localStorage.getItem('dzair_saved_docs');
      return stored ? JSON.parse(stored) : INITIAL_DOCUMENTS;
    } catch {
      return INITIAL_DOCUMENTS;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cyberName, setCyberName] = useState('سيبار ومكتب خدمات المستقبل');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { dir } = useLanguage();

  useEffect(() => {
    try {
      localStorage.setItem('dzair_saved_docs', JSON.stringify(savedDocuments));
    } catch (e) {
      console.error(e);
    }
  }, [savedDocuments]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveToVault = (doc: SavedDocument) => {
    setSavedDocuments((prev) => [doc, ...prev]);
  };

  const handleDeleteDocument = (id: string) => {
    setSavedDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <ScrollToTop />

      {/* Top Navbar */}
      <Navbar onOpenAuthModal={() => setIsAuthModalOpen(true)} />

      {/* Dedicated Route Pages Container */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portals" element={<PortalsPage />} />
          <Route 
            path="/dossier-builder" 
            element={<DossierBuilderPage onSaveToVault={handleSaveToVault} />} 
          />
          <Route path="/cv-builder" element={<CvBuilderPage />} />
          <Route path="/exams-library" element={<ExamsLibraryPage />} />
          <Route path="/research-generator" element={<ResearchGeneratorPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route 
            path="/dashboard" 
            element={
              <DashboardPage 
                savedDocuments={savedDocuments} 
                onDeleteDocument={handleDeleteDocument} 
              />
            } 
          />
          <Route path="/advisor" element={<AdvisorPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Auth / Partner Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={(name) => setCyberName(name)}
      />

      {/* Floating Action Buttons */}
      <div className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-40 flex flex-col gap-2.5 no-print`}>
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white flex items-center justify-center shadow-lg transition cursor-pointer backdrop-blur-md"
            title="الرجوع للأعلى"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <Link
          to="/advisor"
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.4)] transition cursor-pointer"
        >
          <Bot className="w-4 h-4" />
          <span className="hidden sm:inline">المستشار الإداري الذكي</span>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
