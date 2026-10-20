import React from 'react';
import { WELFARE_PILLARS } from '../data/foundationData';
import { PageView } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FocusAreasGridProps {
  setCurrentView: (view: PageView) => void;
  setSelectedPillarId: (id: string | null) => void;
  openPillarModal: (pillarId: string) => void;
}

export const FocusAreasGrid: React.FC<FocusAreasGridProps> = ({ 
  setCurrentView, 
  setSelectedPillarId,
  openPillarModal
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
                <span>OUR 8 WELFARE PILLARS</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-[#0D3B82] tracking-tight">
                Where Your Support Creates Change
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-sans">
                Each pillar represents a dedicated, ground-level initiative serving orphans, struggling families, and vulnerable communities.
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentView('programs');
                setSelectedPillarId(null);
              }}
              className="self-start md:self-end bg-white hover:bg-[#008CD3] hover:text-white text-[#0D3B82] text-xs font-bold px-6 py-3 rounded-xl border border-stone-300 shadow-2xs transition-all cursor-pointer shrink-0"
            >
              Browse Complete Directory →
            </button>
          </div>
        </ScrollReveal>

        {/* 8-Tile Clean Visual Photo Grid with Max 1-Line Description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WELFARE_PILLARS.map((pillar, idx) => {
            const delays: (75 | 100 | 150 | 200 | 300 | 400 | 500)[] = [75, 150, 225, 300, 75, 150, 225, 300];
            const delay = delays[idx % delays.length];

            return (
              <ScrollReveal key={pillar.id} delay={delay} className="h-full">
                <div
                  onClick={() => openPillarModal(pillar.id)}
                  className="group relative h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-stone-900 border border-stone-200/80 flex flex-col justify-between p-6 text-white h-full zoom-container"
                >
                  {/* Background Photo with Calming Smooth Zoom */}
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="absolute inset-0 w-full h-full object-cover zoom-image opacity-80 group-hover:opacity-90"
                  />

                  {/* Dark Radial Gradient Overlay for High Contrast Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82] via-[#0D3B82]/40 to-transparent group-hover:from-[#0D3B82]/95 transition-all duration-300"></div>

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white bg-[#008CD3] px-3 py-1 rounded-full shadow-xs">
                      Pillar {pillar.number}
                    </span>

                    {pillar.highlightTag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-amber-400 px-2.5 py-0.5 rounded-full shadow-xs">
                        {pillar.highlightTag}
                      </span>
                    )}
                  </div>

                  {/* Bottom Content Area: Minimalist & Visual */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-sans text-xl font-bold leading-tight text-white group-hover:text-amber-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md shrink-0 flex items-center justify-center group-hover:bg-[#008CD3] group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Strict 1-Line Description */}
                    <p className="text-xs text-stone-200 leading-relaxed font-sans line-clamp-1">
                      {pillar.shortDescription}
                    </p>

                    <div className="pt-2 text-right">
                      <span className="text-[11px] font-semibold text-amber-300 group-hover:underline">
                        View Pillar Details →
                      </span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
