import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sparkles, 
  UserCheck, 
  Globe, 
  Sun, 
  Moon, 
  ChevronDown
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Language } from '../data/translations';

interface NavbarProps {
  onOpenAuthModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuthModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();

  const { language, setLanguage, t, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t.navHome },
    { to: '/portals', label: t.navPortals },
    { to: '/dossier-builder', label: t.navDossierBuilder },
    { to: '/cv-builder', label: t.navCvBuilder },
    { to: '/exams-library', label: t.navExamsLibrary },
    { to: '/research-generator', label: t.navResearch },
    { to: '/calculator', label: t.navCalculator },
    { to: '/pricing', label: t.navPricing },
    { to: '/dashboard', label: t.navDashboard },
    { to: '/advisor', label: t.navAdvisor }
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ar', label: 'العربية', flag: '🇩🇿' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
      isScrolled 
        ? 'bg-white/95 dark:bg-[#080c14]/92 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-2xl py-2.5' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Monogram */}
          <Link to="/" className="cursor-pointer transition-transform hover:scale-102">
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800/80">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,242,254,0.15)] font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Toolbar: Language + Theme + Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer transition shadow-sm"
                title="تغيير اللغة / Changer de langue"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                <span className="font-bold text-[11px] uppercase">{language}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {isLangMenuOpen && (
                <div className={`absolute top-full mt-1.5 w-32 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-1 z-50 animate-fadeIn ${
                  dir === 'rtl' ? 'left-0' : 'right-0'
                }`}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition cursor-pointer ${
                        language === l.code
                          ? 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-bold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{l.label}</span>
                      <span>{l.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition shadow-sm"
              title={theme === 'dark' ? t.themeLight : t.themeDark}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600" />
              )}
            </button>

            {/* Login */}
            <button
              onClick={onOpenAuthModal}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 transition cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <UserCheck className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>{t.navLogin}</span>
            </button>

            {/* Partner / Pricing CTA */}
            <Link
              to="/pricing"
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition shadow-[0_0_15px_rgba(0,242,254,0.35)] cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.navPartner}</span>
            </Link>
          </div>

          {/* Mobile Menu & Quick Settings */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white/98 dark:bg-[#080c14]/98 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-4 backdrop-blur-2xl animate-fadeIn shadow-xl">
          {/* Mobile Language Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
            <span className="text-xs text-slate-400">Language / اللغة :</span>
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    language === l.code
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700'
                  }`}
                >
                  {l.flag} {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `p-3 rounded-xl text-xs font-semibold border transition text-center ${
                    isActive
                      ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuthModal();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <span>{t.navLogin}</span>
            </button>

            <Link
              to="/pricing"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.navPartner}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
