import React from 'react';
import { PageView } from '../types';
import { FOUNDATION_META, WELFARE_PILLARS } from '../data/foundationData';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Globe, 
  Calculator, 
  BookOpen 
} from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
  setSelectedPillarId: (id: string | null) => void;
  openZakatModal: () => void;
  openReportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentView,
  setSelectedPillarId,
  openZakatModal,
  openReportModal
}) => {
  const handlePillarClick = (id: string) => {
    setSelectedPillarId(id);
    setCurrentView('programs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageClick = (view: PageView) => {
    setCurrentView(view);
    setSelectedPillarId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D3B82] text-stone-300 pt-16 pb-12 border-t border-[#1A4E9E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1A4E9E]">
          
          {/* Col 1: Brand & Foundation Summary (2 cols wide on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo.png" 
                alt="Al-Ala Education Foundation Logo" 
                className="w-10 h-10 rounded-full object-cover bg-white shadow-sm border border-stone-700" 
              />
              <div>
                <h3 className="font-sans text-lg font-bold text-white">
                  Al-Ala Education Foundation
                </h3>
                <p className="text-xs text-stone-400">
                  Al-Ala International Islamic School • Est. 1999
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans max-w-sm">
              Celebrating 27 years of service. A registered charitable trust in Pakistan operating across education, healthcare, child welfare, women empowerment, and emergency relief.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A4E9E] border border-stone-700 text-amber-400 text-xs font-semibold">
              <Award className="w-4 h-4 text-[#008CD3]" />
              <span>27 Years of Excellence • Annual Report 2025–26</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={openZakatModal}
                className="text-xs font-semibold text-amber-300 hover:text-white flex items-center gap-1.5 bg-[#1A4E9E] px-3 py-2 rounded-lg cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-[#008CD3]" />
                <span>Zakat Calculator</span>
              </button>

              <button
                onClick={openReportModal}
                className="text-xs font-semibold text-stone-300 hover:text-white flex items-center gap-1.5 bg-[#1A4E9E] px-3 py-2 rounded-lg cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Report PDF</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-sans font-semibold text-white text-xs uppercase tracking-wider text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handlePageClick('home')} className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('about')} className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block">
                  About Foundation & History
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('programs')} className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block">
                  Our 8 Welfare Programs
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('goals')} className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block">
                  Strategic Goals 2026–2027
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('donate')} className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block">
                  Get Involved & Donate
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('contact')} className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: 8 Welfare Pillars */}
          <div className="space-y-3">
            <h4 className="font-sans font-semibold text-white text-xs uppercase tracking-wider text-amber-400">
              Welfare Pillars
            </h4>
            <ul className="space-y-1.5 text-xs">
              {WELFARE_PILLARS.map((p) => (
                <li key={p.id}>
                  <button 
                    onClick={() => handlePillarClick(p.id)}
                    className="hover:text-amber-300 hover:translate-x-1 transition-all duration-200 text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#008CD3] font-mono text-[10px] font-bold">{p.number}.</span>
                    <span className="line-clamp-1">{p.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-sans font-semibold text-white text-xs uppercase tracking-wider text-amber-400">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#008CD3] shrink-0 mt-0.5" />
                <span>{FOUNDATION_META.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#008CD3] shrink-0" />
                <a href={`tel:${FOUNDATION_META.contactPhone}`} className="hover:text-white">
                  {FOUNDATION_META.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#008CD3] shrink-0" />
                <a href={`mailto:${FOUNDATION_META.contactEmail}`} className="hover:text-white">
                  {FOUNDATION_META.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#008CD3] shrink-0" />
                <span>www.alala.edu.pk</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handlePageClick('donate')}
                className="w-full bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white/20" />
                <span>Donate & Support</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-sans">
          <div>
            © {new Date().getFullYear()} {FOUNDATION_META.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-stone-300">Chairperson: {FOUNDATION_META.chairperson}</span>
            <span className="text-stone-600">|</span>
            <button onClick={() => handlePageClick('about')} className="hover:text-amber-300">
              Islamic Values of Khidmah
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
