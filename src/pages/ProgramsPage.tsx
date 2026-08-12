import React, { useState, useEffect } from 'react';
import { WELFARE_PILLARS } from '../data/foundationData';
import { PageView } from '../types';
import { CheckCircle2, Heart, Search, Filter, Layers, ArrowUpRight } from 'lucide-react';

interface ProgramsPageProps {
  selectedPillarId: string | null;
  setSelectedPillarId: (id: string | null) => void;
  setCurrentView: (view: PageView) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  selectedPillarId,
  setSelectedPillarId,
  setCurrentView
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTabId, setActiveTabId] = useState<string>('all');

  useEffect(() => {
    if (selectedPillarId) {
      setActiveTabId(selectedPillarId);
      // Smooth scroll to the specific pillar section
      const element = document.getElementById(`pillar-${selectedPillarId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setActiveTabId('all');
    }
  }, [selectedPillarId]);

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setSelectedPillarId(id === 'all' ? null : id);
    if (id !== 'all') {
      const element = document.getElementById(`pillar-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const filteredPillars = WELFARE_PILLARS.filter((p) => {
    const matchesTab = activeTabId === 'all' || p.id === activeTabId;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.activities.some((act) => act.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FCFCFA] pb-24 font-sans">
      
      {/* Top Header */}
      <section className="bg-[#1B262C] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2C3A3F]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1622D]/30 border border-[#C1622D]/50 text-amber-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-[#C1622D]" />
            <span>ANNUAL REPORT 2025–2026 PROGRAM DIRECTORY</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Our 8 Focus Areas & Welfare Programs
          </h1>
          <p className="text-stone-300 text-base max-w-3xl leading-relaxed">
            Detailed breakdown of activities across Social Welfare, Child Welfare, Educational Welfare, Women Welfare, Elderly & Disabled Care, Health Welfare, Economic Relief, and Community Outreach.
          </p>
        </div>
      </section>

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Pillar Tabs (Horizontal Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTabId === 'all'
                  ? 'bg-[#1B262C] text-white'
                  : 'bg-[#F7F5F0] text-stone-700 hover:bg-stone-200'
              }`}
            >
              All 8 Pillars
            </button>
            {WELFARE_PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleTabChange(p.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTabId === p.id
                    ? 'bg-[#C1622D] text-white'
                    : 'bg-[#F7F5F0] text-stone-700 hover:bg-stone-200'
                }`}
              >
                {p.number}. {p.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search activities (e.g., cancer, Gaza, books)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#F7F5F0] text-xs font-medium text-[#1B262C] focus:outline-none focus:ring-2 focus:ring-[#C1622D] border border-stone-200"
            />
          </div>

        </div>
      </div>

      {/* Main Program List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {filteredPillars.length === 0 ? (
          <div className="p-12 text-center bg-[#F7F5F0] rounded-2xl border border-stone-200 space-y-3">
            <Filter className="w-8 h-8 text-stone-400 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-[#1B262C]">
              No matching programs found
            </h3>
            <p className="text-xs text-stone-500">
              Try searching for terms like "scholarship", "cancer", "food", "dental", or "relief".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTabId('all'); }}
              className="text-xs font-bold text-[#C1622D] underline cursor-pointer"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="scroll-mt-32 bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200/90 transition-all duration-300"
            >
              {/* Top Banner Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Photo (5 cols) */}
                <div className="lg:col-span-5 relative h-64 lg:h-auto bg-stone-900">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B262C] via-transparent to-transparent lg:hidden"></div>
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-serif text-xs font-bold text-white bg-[#C1622D] px-3 py-1 rounded shadow-sm">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  {pillar.impactMetric && (
                    <div className="absolute bottom-4 left-4 right-4 z-10 lg:bottom-6 lg:left-6 lg:right-6">
                      <div className="p-3 bg-black/60 backdrop-blur-md rounded-xl text-white text-xs border border-white/20 font-medium">
                        ★ {pillar.impactMetric}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Content (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#C1622D]">
                        ANNUAL REPORT 2025–2026
                      </span>
                      {pillar.highlightTag && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-amber-400 px-2 py-0.5 rounded">
                          {pillar.highlightTag}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B262C]">
                      {pillar.title}
                    </h2>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic font-serif">
                      "{pillar.fullDescription}"
                    </p>
                  </div>

                  {/* Verbatim Major Activities Checklist */}
                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-sm text-[#1B262C] uppercase tracking-wider border-b border-stone-200 pb-2">
                      Official Activities & Initiatives:
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.activities.map((act, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-2.5 bg-[#F7F5F0] rounded-lg border border-[#ECE7DF] hover:border-[#C1622D] transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C1622D] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#2C3A3F] font-medium leading-snug">
                            {act}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pillar CTA */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-stone-500">
                      Total Listed Activities: {pillar.activities.length}
                    </span>

                    <button
                      onClick={() => setCurrentView('donate')}
                      className="w-full sm:w-auto bg-[#C1622D] hover:bg-[#A85020] text-white font-bold text-xs px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white/20" />
                      <span>Donate to {pillar.title}</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
};
