import React from 'react';
import { FOUNDATION_META } from '../data/foundationData';
import { GraduationCap, HeartHandshake, Users, ShieldAlert } from 'lucide-react';

export const StatBand: React.FC = () => {
  return (
    <section className="w-full bg-[#1B262C] text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-[#2C3A3F]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Banner Headline (Inspired by Malala Fund's stat callout) */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#C1622D] font-bold">
            2025–2026 Annual Report Summary
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-stone-100">
            "27 Years of Serving Communities Through Education & Welfare."
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-sans">
            Grounded in Islamic values of service (Khidmah & Sadaqah), bridging inequality across 8 comprehensive welfare sectors in Pakistan.
          </p>
        </div>

        {/* 4 Key Stat Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#2C3A3F]">
          
          <div className="text-center space-y-1 p-4 rounded-xl bg-[#2C3A3F]/50 border border-[#2C3A3F]">
            <div className="inline-flex p-2 rounded-lg bg-[#C1622D]/20 text-[#C1622D] mb-1">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400">
              27 Years
            </div>
            <div className="text-xs font-semibold text-stone-300">
              Educational Excellence (Est. 1999)
            </div>
            <p className="text-[11px] text-stone-400">Under Al-Ala Int'l Islamic School</p>
          </div>

          <div className="text-center space-y-1 p-4 rounded-xl bg-[#2C3A3F]/50 border border-[#2C3A3F]">
            <div className="inline-flex p-2 rounded-lg bg-[#C1622D]/20 text-[#C1622D] mb-1">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400">
              8 Pillars
            </div>
            <div className="text-xs font-semibold text-stone-300">
              Welfare & Relief Sectors
            </div>
            <p className="text-[11px] text-stone-400">Child, Women, Health, Relief & More</p>
          </div>

          <div className="text-center space-y-1 p-4 rounded-xl bg-[#2C3A3F]/50 border border-[#2C3A3F]">
            <div className="inline-flex p-2 rounded-lg bg-[#C1622D]/20 text-[#C1622D] mb-1">
              <Users className="w-5 h-5" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400">
              100% Free
            </div>
            <div className="text-xs font-semibold text-stone-300">
              Scholarships for Orphans & Poor
            </div>
            <p className="text-[11px] text-stone-400">Tuition, Uniforms & Free Books</p>
          </div>

          <div className="text-center space-y-1 p-4 rounded-xl bg-[#2C3A3F]/50 border border-[#2C3A3F]">
            <div className="inline-flex p-2 rounded-lg bg-[#C1622D]/20 text-[#C1622D] mb-1">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400">
              Active Aid
            </div>
            <div className="text-xs font-semibold text-stone-300">
              Gaza & Flood Emergency Relief
            </div>
            <p className="text-[11px] text-stone-400">Community Bake Sales & Medical Camps</p>
          </div>

        </div>

      </div>
    </section>
  );
};
