import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { FOUNDATION_META, WELFARE_PILLARS } from '../data/foundationData';
import { 
  Heart, 
  ChevronDown, 
  Menu, 
  X, 
  Calculator, 
  BookOpen, 
  Phone, 
  Award,
  Search
} from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  selectedPillarId: string | null;
  setSelectedPillarId: (id: string | null) => void;
  openZakatModal: () => void;
  openReportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  setSelectedPillarId,
  openZakatModal,
  openReportModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePillarSelect = (pillarId: string) => {
    setSelectedPillarId(pillarId);
    setCurrentView('programs');
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About Us', view: 'about' },
    { label: 'Our Programs', view: 'programs' },
    { label: 'Strategic Goals', view: 'goals' },
    { label: 'Get Involved', view: 'donate' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner - Islamic Values & Quick Access */}
      <div className="bg-[#1B262C] text-white text-xs py-2 px-4 border-b border-[#2C3A3F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#C1622D] text-white font-semibold text-[11px] tracking-wide">
              <Award className="w-3 h-3" /> 27 YEARS (EST. 1999)
            </span>
            <span className="hidden md:inline text-stone-300 font-serif italic">
              Al-Ala International Islamic School — Educating & Serving Communities
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-300 text-[11px]">
            <button 
              onClick={openZakatModal}
              className="hover:text-amber-400 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#C1622D]" />
              <span>Zakat & Sadaqah Calculator</span>
            </button>
            <span className="text-stone-600">|</span>
            <button 
              onClick={openReportModal}
              className="hover:text-amber-400 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Annual Report 2025–26</span>
            </button>
            <span className="text-stone-600 hidden sm:inline">|</span>
            <a 
              href={`tel:${FOUNDATION_META.contactPhone}`}
              className="hover:text-white hidden sm:flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-400" />
              <span>{FOUNDATION_META.contactPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-stone-200 py-3' 
            : 'bg-[#FCFCFA] border-stone-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Foundation Name */}
          <button 
            onClick={() => { setCurrentView('home'); setSelectedPillarId(null); }}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-[#2C3A3F] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:bg-[#C1622D] transition-colors">
              AA
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-[#1B262C] leading-tight group-hover:text-[#C1622D] transition-colors">
                Al-Ala Education Foundation
              </div>
              <div className="text-xs text-stone-500 font-medium tracking-wide">
                Under Al-Ala Int'l Islamic School • Est. 1999
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.view === 'programs') {
                return (
                  <div 
                    key={item.view}
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setCurrentView('programs');
                        setSelectedPillarId(null);
                      }}
                      className={`flex items-center gap-1 font-medium text-sm transition-colors py-2 cursor-pointer ${
                        currentView === 'programs'
                          ? 'text-[#C1622D] font-semibold border-b-2 border-[#C1622D]'
                          : 'text-[#2C3A3F] hover:text-[#C1622D]'
                      }`}
                    >
                      <span>Our Programs</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-[#C1622D]' : ''}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {isMegaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-xl shadow-2xl border border-stone-200 p-6 grid grid-cols-2 gap-4 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-3 mb-1 border-b border-stone-100 flex justify-between items-center">
                          <div>
                            <h4 className="font-serif font-bold text-base text-[#1B262C]">
                              Welfare Pillars & Community Initiatives
                            </h4>
                            <p className="text-xs text-stone-500">
                              8 core areas of educational & humanitarian service (2025–2026)
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setCurrentView('programs');
                              setSelectedPillarId(null);
                              setIsMegaMenuOpen(false);
                            }}
                            className="text-xs font-semibold text-[#C1622D] hover:underline"
                          >
                            View All Programs →
                          </button>
                        </div>

                        {WELFARE_PILLARS.map((pillar) => (
                          <button
                            key={pillar.id}
                            onClick={() => handlePillarSelect(pillar.id)}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F7F5F0] transition-all text-left group cursor-pointer"
                          >
                            <span className="font-serif text-xs font-bold text-[#C1622D] bg-[#F7F5F0] group-hover:bg-[#C1622D] group-hover:text-white w-7 h-7 rounded flex items-center justify-center transition-colors">
                              {pillar.number}
                            </span>
                            <div>
                              <div className="text-xs font-bold text-[#1B262C] group-hover:text-[#C1622D] transition-colors">
                                {pillar.title}
                              </div>
                              <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                                {pillar.shortDescription}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.view}
                  onClick={() => {
                    setCurrentView(item.view);
                    if (item.view !== 'programs') setSelectedPillarId(null);
                  }}
                  className={`font-medium text-sm transition-colors py-2 cursor-pointer ${
                    currentView === item.view
                      ? 'text-[#C1622D] font-semibold border-b-2 border-[#C1622D]'
                      : 'text-[#2C3A3F] hover:text-[#C1622D]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('donate')}
              className="bg-[#C1622D] hover:bg-[#A85020] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white/20 text-white" />
              <span>Donate</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#2C3A3F] hover:text-[#C1622D] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => {
                    setCurrentView(item.view);
                    setSelectedPillarId(null);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentView === item.view
                      ? 'bg-[#F7F5F0] text-[#C1622D] font-bold'
                      : 'text-[#2C3A3F] hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Programs Pillar List */}
            <div className="pt-2 border-t border-stone-100">
              <div className="text-xs font-serif font-bold text-stone-500 uppercase tracking-wider px-3 mb-2">
                Our 8 Focus Areas
              </div>
              <div className="grid grid-cols-1 gap-1">
                {WELFARE_PILLARS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePillarSelect(p.id)}
                    className="w-full text-left px-3 py-2 text-xs text-[#2C3A3F] hover:text-[#C1622D] hover:bg-stone-50 rounded flex items-center gap-2"
                  >
                    <span className="font-mono text-[10px] text-[#C1622D] font-bold">{p.number}.</span>
                    <span>{p.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  openZakatModal();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 text-xs font-semibold text-[#1B262C] bg-[#F7F5F0] rounded-lg flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#C1622D]" />
                <span>Zakat & Sadaqah Calculator</span>
              </button>
              
              <button
                onClick={() => {
                  openReportModal();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 text-xs font-semibold text-[#1B262C] border border-stone-200 rounded-lg flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Annual Report 2025–2026 Summary</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
