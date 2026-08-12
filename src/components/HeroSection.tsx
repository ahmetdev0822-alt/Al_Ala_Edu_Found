import React from 'react';
import { PageView } from '../types';
import { Heart, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <section className="relative w-full bg-[#FCFCFA] pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Editorial Headline + High Impact Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 27 Years Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F5F0] border border-[#ECE7DF]">
              <span className="w-2 h-2 rounded-full bg-[#C1622D] animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1B262C]">
                Established 1999 • 27 Years of Service
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-xs font-serif italic text-[#C1622D]">
                Annual Report 2025–2026
              </span>
            </div>

            {/* Editorial Serif Display Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B262C] leading-[1.12] tracking-tight text-balance">
              Every child deserves to learn. Every family deserves dignity.
            </h1>

            {/* Subtitle / Mission Statement */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-sans">
              For 27 years, <strong className="text-[#1B262C] font-semibold">Al-Ala Education Foundation</strong> (under Al-Ala International Islamic School) has empowered underprivileged communities across Pakistan through quality education, healthcare, women's skill development, and emergency humanitarian relief.
            </p>

            {/* Key Value Pill Highlights */}
            <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#2C3A3F] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C1622D]" />
                <span>100% Free Education for Orphans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C1622D]" />
                <span>Islamic Values of Service (Khidmah)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C1622D]" />
                <span>Shaukat Khanum & Edhi Collaborations</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setCurrentView('donate')}
                className="bg-[#C1622D] hover:bg-[#A85020] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Heart className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Support Our Work</span>
              </button>

              <button
                onClick={() => setCurrentView('programs')}
                className="bg-[#F7F5F0] hover:bg-[#ECE7DF] text-[#1B262C] font-semibold text-base px-6 py-3.5 rounded-lg border border-stone-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore 8 Focus Areas</span>
                <ArrowRight className="w-4 h-4 text-[#C1622D]" />
              </button>
            </div>

            {/* Annual Report Quick Trigger */}
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Transparent Non-Profit Governance. View our{' '}
                <button 
                  onClick={openReportModal}
                  className="text-[#C1622D] font-semibold underline hover:text-[#A85020] cursor-pointer"
                >
                  2025–2026 Annual Report Summary
                </button>
              </span>
            </div>

          </div>

          {/* Right Hero Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
              
              {/* Main Classroom Image */}
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Students studying at Al-Ala International Islamic School"
                className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B262C]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AL-ALA INTERNATIONAL ISLAMIC SCHOOL</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  "Talent Deserves Opportunity"
                </h3>
                <p className="text-xs text-stone-200 mt-1 font-sans">
                  Free education, textbooks, and moral tarbiyyah for underprivileged children.
                </p>
              </div>

              {/* Floating Stat Badge top right */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-stone-200 text-right">
                <div className="font-serif text-xl font-extrabold text-[#C1622D]">
                  27th Year
                </div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-600">
                  Since 1999
                </div>
              </div>

            </div>

            {/* Decorative Offset Background Shape */}
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#ECE7DF] -z-10 hidden sm:block"></div>
          </div>

        </div>

      </div>
    </section>
  );
};
