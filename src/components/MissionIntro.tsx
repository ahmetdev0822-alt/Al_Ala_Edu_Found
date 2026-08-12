import React from 'react';
import { PageView } from '../types';
import { FOUNDATION_META, CHAIRPERSON_MESSAGE } from '../data/foundationData';
import { BookMarked, Sparkles, Heart, CheckCircle } from 'lucide-react';

interface MissionIntroProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const MissionIntro: React.FC<MissionIntroProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <section className="py-16 md:py-20 bg-[#F7F5F0] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Photo Composite */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000" 
                alt="Al-Ala Education Foundation Annual Initiatives"
                className="w-full h-[380px] sm:h-[420px] object-cover"
              />
              <div className="p-4 bg-[#1B262C] text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Annual Report 2025–2026 • Introduction</span>
                </div>
                <p className="text-xs text-stone-300 mt-1 font-serif italic">
                  Serving students, families, women, and communities guided by Islamic principles of service.
                </p>
              </div>
            </div>

            {/* Small Overlay Badge */}
            <div className="absolute -bottom-6 -right-4 bg-[#C1622D] text-white p-4 rounded-xl shadow-lg max-w-[200px]">
              <div className="font-serif text-2xl font-bold">1999–2026</div>
              <div className="text-[11px] font-medium leading-tight text-amber-100">
                27 Years of Unbroken Educational & Social Service
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C1622D]">
              <BookMarked className="w-4 h-4" />
              <span>Foundation Introduction & Vision</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B262C] leading-tight">
              Guided by Islamic Values, Dedicated to Human Dignity
            </h2>

            <p className="text-base sm:text-lg text-[#2C3A3F] leading-relaxed font-sans">
              Alhamdulillah, during the academic year 2025–2026, <strong className="text-[#1B262C] font-semibold">Al-Ala Education Foundation</strong> continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
              Guided by Islamic values and a spirit of service, the Foundation worked across multiple sectors to support students, families, women, and communities while promoting education, health, and social responsibility. Operating under the umbrella of <strong className="text-[#1B262C]">Al-Ala International Islamic School</strong>, our trust integrates academic rigor with compassionate social care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-lg border border-stone-200/80 shadow-2xs flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C1622D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1B262C]">Orphan & Support Staff Support</h4>
                  <p className="text-[11px] text-stone-500">Free tuition, stationery, books, and tarbiyyah classes.</p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-stone-200/80 shadow-2xs flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C1622D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1B262C]">Health & Hospital Partnerships</h4>
                  <p className="text-[11px] text-stone-500">Shaukat Khanum Cancer Hospital & Edhi Homes aid.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setCurrentView('about')}
                className="bg-[#1B262C] hover:bg-[#C1622D] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                Learn More About Our History →
              </button>
              
              <button
                onClick={openReportModal}
                className="text-xs font-bold text-[#C1622D] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Read Official 2025–2026 Report Summary
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
