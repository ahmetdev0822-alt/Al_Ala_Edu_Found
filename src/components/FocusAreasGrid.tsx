import React from 'react';
import { WELFARE_PILLARS } from '../data/foundationData';
import { PageView } from '../types';
import { ArrowUpRight, Layers } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-[#FCFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C1622D]">
              <Layers className="w-4 h-4" />
              <span>Our Focus Areas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B262C] text-balance">
              Where We Work: 8 Core Welfare Pillars
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-sans">
              Mirroring our holistic community development model, each pillar addresses a vital social need with dedicated programs, trained staff, and volunteer outreach.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentView('programs');
              setSelectedPillarId(null);
            }}
            className="self-start md:self-end bg-[#F7F5F0] hover:bg-[#C1622D] hover:text-white text-[#1B262C] text-xs font-bold px-5 py-2.5 rounded-lg border border-stone-300 transition-all cursor-pointer shrink-0"
          >
            View All Program Details →
          </button>
        </div>

        {/* 8-Tile Photo Grid (Inspired by Malala Fund's country photo grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WELFARE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => openPillarModal(pillar.id)}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-stone-900 border border-stone-200/80 flex flex-col justify-end p-6 text-white"
            >
              {/* Background Photo */}
              <img
                src={pillar.imageUrl}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-75 group-hover:opacity-85"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B262C] via-[#1B262C]/40 to-transparent group-hover:from-[#1B262C]/95 transition-all"></div>

              {/* Number Badge Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-serif text-xs font-bold text-white bg-[#C1622D] px-2.5 py-1 rounded shadow-sm">
                  Pillar {pillar.number}
                </span>
              </div>

              {/* Highlight Tag Top Right if exists */}
              {pillar.highlightTag && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-amber-400 px-2 py-0.5 rounded shadow-sm">
                    {pillar.highlightTag}
                  </span>
                </div>
              )}

              {/* Bottom Content */}
              <div className="relative z-10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-semibold text-stone-300 tracking-wide">
                    {pillar.activities.length} Key Initiatives
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#C1622D] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold leading-tight text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 font-sans">
                  {pillar.shortDescription}
                </p>

                {pillar.impactMetric && (
                  <div className="pt-1 text-[11px] font-semibold text-amber-300 flex items-center gap-1">
                    <span>★ {pillar.impactMetric}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
