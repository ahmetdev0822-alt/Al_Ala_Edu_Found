import React from 'react';
import { CHAIRPERSON_MESSAGE, FOUNDATION_META } from '../data/foundationData';
import { Quote, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ChairpersonQuote: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0D3B82] text-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url('/assets/img_-002.png')` }}
      ></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="space-y-6">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>LEADERSHIP VISION & PURPOSE</span>
            </div>

            <Quote className="w-12 h-12 text-[#008CD3] mx-auto opacity-70" />

            {/* Clear, Memorable Pull Quote */}
            <blockquote className="font-sans text-2xl sm:text-3xl md:text-[34px] font-bold leading-relaxed sm:leading-snug text-white max-w-3xl mx-auto tracking-tight">
              "True education does not merely enlighten the mind — it uplifts the heart and restores dignity to the most vulnerable."
            </blockquote>

            {/* Author Signature Line */}
            <div className="pt-6 border-t border-white/15 max-w-xs mx-auto space-y-1">
              <div className="font-sans text-lg font-black text-amber-400">
                {CHAIRPERSON_MESSAGE.author}
              </div>
              <div className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                {CHAIRPERSON_MESSAGE.role}
              </div>
              <div className="text-[11px] text-stone-400 font-mono">
                {FOUNDATION_META.name} • Est. 1999
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
