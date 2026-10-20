import React from 'react';
import { PageView } from '../types';
import { Sparkles, Heart, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface MissionIntroProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const MissionIntro: React.FC<MissionIntroProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <section className="py-20 md:py-28 bg-[#F4F7FA] border-b border-[#E6EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Photo Frame with Clean Elevation */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={100}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group zoom-container">
                <img 
                  src="/assets/img_-008.png" 
                  alt="Al-Ala Education Foundation Campus and Students"
                  className="w-full h-[380px] sm:h-[440px] object-cover zoom-image"
                />
                <div className="p-5 bg-[#0D3B82] text-white space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Holistic Community Impact</span>
                  </div>
                  <p className="text-xs text-stone-200 font-sans">
                    Blending modern academic standards with Islamic moral tarbiyyah.
                  </p>
                </div>
              </div>

              {/* Floating Pill Accent */}
              <div className="absolute -bottom-5 -right-3 bg-white text-[#0D3B82] p-4 rounded-2xl shadow-xl border border-stone-200/80 max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2 text-xs font-bold text-[#008CD3]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>27 Years of Trust</span>
                </div>
                <div className="text-[11px] text-stone-600 font-sans mt-0.5 leading-snug">
                  Guided by Islamic values of Khidmah & Amanah.
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={150}>
              <div className="space-y-6">
                
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
                  <span>WHO WE ARE & WHY WE SERVE</span>
                </div>

                <h2 className="font-sans text-3xl sm:text-4xl font-black text-[#0D3B82] leading-tight">
                  A Sacred Trust: Educating Minds, Uplifting Families.
                </h2>

                <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
                  Founded in 1999 under <strong className="text-[#0D3B82]">Al-Ala International Islamic School</strong> in Lahore, our charitable trust believes every child deserves access to quality education, and no struggling family should face adversity alone.
                </p>

                {/* 3 Spacious Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  
                  <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#008CD3]/10 text-[#008CD3] flex items-center justify-center font-bold">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#0D3B82]">Free Education</h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      100% free tuition, uniforms, and textbooks for orphans & poor scholars.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#008CD3]/10 text-[#008CD3] flex items-center justify-center font-bold">
                      <Heart className="w-4 h-4 text-[#008CD3]" />
                    </div>
                    <h4 className="text-sm font-bold text-[#0D3B82]">Healthcare Aid</h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Cancer treatment support via Shaukat Khanum & free dental screening camps.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#008CD3]/10 text-[#008CD3] flex items-center justify-center font-bold">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                    </div>
                    <h4 className="text-sm font-bold text-[#0D3B82]">Dignified Relief</h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Ramadan food packs, flood relief, and community bakeries for Gaza.
                    </p>
                  </div>

                </div>

                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <button
                    onClick={() => setCurrentView('about')}
                    className="inline-flex items-center gap-2 bg-[#0D3B82] hover:bg-[#008CD3] text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer group"
                  >
                    <span>Our 27-Year History</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    onClick={openReportModal}
                    className="text-xs font-bold text-[#008CD3] hover:text-[#007AB8] underline cursor-pointer"
                  >
                    Read 2025–2026 Annual Report Summary →
                  </button>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
