import React from 'react';
import { CHAIRPERSON_MESSAGE, FOUNDATION_META } from '../data/foundationData';
import { Quote, Sparkles } from 'lucide-react';

export const ChairpersonQuote: React.FC = () => {
  return (
    <section className="relative w-full bg-[#2C3A3F] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Soft Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1600')` }}
      ></div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        
        {/* Quote Icon & Category Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1622D]/30 border border-[#C1622D]/50 text-amber-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C1622D]" />
          <span>CHAIRPERSON'S ANNUAL MESSAGE • 2025–2026</span>
        </div>

        <Quote className="w-12 h-12 text-[#C1622D] mx-auto opacity-80" />

        {/* Large Editorial Pull Quote */}
        <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed sm:leading-snug text-stone-100 max-w-4xl mx-auto italic">
          "{CHAIRPERSON_MESSAGE.quote}"
        </blockquote>

        {/* Author Signature Line */}
        <div className="pt-4 border-t border-stone-600/60 max-w-md mx-auto space-y-1">
          <div className="font-serif text-lg font-bold text-amber-400">
            {CHAIRPERSON_MESSAGE.author}
          </div>
          <div className="text-xs uppercase tracking-wider text-stone-300 font-medium">
            {CHAIRPERSON_MESSAGE.role}
          </div>
          <div className="text-[11px] text-stone-400">
            {FOUNDATION_META.name} • Est. 1999
          </div>
        </div>

      </div>
    </section>
  );
};
