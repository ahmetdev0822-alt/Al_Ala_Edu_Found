import React, { useState, useEffect } from 'react';
import { WELFARE_PILLARS } from '../data/foundationData';
import { PageView } from '../types';
import { CheckCircle2, Heart, Search, Filter, Layers } from 'lucide-react';

interface ProgramsPageProps {
  selectedPillarId?: string | null;
  setSelectedPillarId?: (id: string | null) => void;
  setCurrentView: (view: PageView) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  selectedPillarId = null,
  setSelectedPillarId = () => {},
  setCurrentView
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTabId, setActiveTabId] = useState<string>('all');

  useEffect(() => {
    if (selectedPillarId) {
      setActiveTabId(selectedPillarId);
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
    <div className="w-full bg-[#F8FAFC] pb-28 font-sans">
      
      {/* Top Header */}
      <section className="relative bg-[#0D3B82] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#1A4E9E] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/img_-020.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B82] via-[#0D3B82]/85 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-amber-300" />
            <span>ANNUAL REPORT 2025–2026 DIRECTORY</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Our 8 Welfare Programs
          </h1>
          <p className="text-stone-200 text-base max-w-2xl leading-relaxed">
            Active community initiatives across education, healthcare, orphan support, women empowerment, and disaster relief.
          </p>
        </div>
      </section>

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Pillar Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTabId === 'all'
                  ? 'bg-[#0D3B82] text-white shadow-xs'
                  : 'bg-[#F4F7FA] text-stone-700 hover:bg-stone-200'
              }`}
            >
              All 8 Pillars
            </button>
            {WELFARE_PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleTabChange(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTabId === p.id
                    ? 'bg-[#008CD3] text-white shadow-xs'
                    : 'bg-[#F4F7FA] text-stone-700 hover:bg-stone-200'
                }`}
              >
                {p.number}. {p.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search initiatives (e.g., cancer, books)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4F7FA] text-xs font-medium text-[#0D3B82] focus:outline-none focus:ring-2 focus:ring-[#008CD3] border border-stone-200"
            />
          </div>

        </div>
      </div>

      {/* Main Program List with Clean Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 space-y-12">
        
        {filteredPillars.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-3xl border border-stone-200 space-y-3">
            <Filter className="w-8 h-8 text-stone-400 mx-auto" />
            <h3 className="font-sans font-bold text-lg text-[#0D3B82]">
              No matching programs found
            </h3>
            <p className="text-xs text-stone-500">
              Try searching for terms like "scholarship", "cancer", "food", or "relief".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTabId('all'); }}
              className="text-xs font-bold text-[#008CD3] underline cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          filteredPillars.map((pillar, idx) => {
            const isImageRight = idx % 2 === 1;
            return (
              <div
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                className="scroll-mt-32 bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md border border-stone-200/90 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Photo (5 cols) */}
                  <div className={`lg:col-span-5 relative h-64 lg:h-auto bg-stone-900 ${isImageRight ? 'lg:order-last' : 'lg:order-first'}`}>
                    <img
                      src={pillar.imageUrl}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82] via-transparent to-transparent lg:hidden"></div>
                    
                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-mono text-xs font-bold text-white bg-[#008CD3] px-3 py-1 rounded-full shadow-xs">
                        PILLAR {pillar.number}
                      </span>
                    </div>

                    {pillar.impactMetric && (
                      <div className="absolute bottom-4 left-4 right-4 z-10 lg:bottom-6 lg:left-6 lg:right-6">
                        <div className="p-3 bg-black/60 backdrop-blur-md rounded-2xl text-white text-xs border border-white/20 font-medium">
                          ★ {pillar.impactMetric}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Content (7 cols) */}
                  <div className="lg:col-span-7 p-7 sm:p-9 space-y-6 flex flex-col justify-between">
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#008CD3]">
                          OFFICIAL FOCUS AREA
                        </span>
                        {pillar.highlightTag && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-amber-400 px-2.5 py-0.5 rounded-full">
                            {pillar.highlightTag}
                          </span>
                        )}
                      </div>

                      <h2 className="font-sans text-2xl font-black text-[#0D3B82]">
                        {pillar.title}
                      </h2>
   
                      <p className="text-stone-600 text-sm leading-relaxed font-sans">
                        {pillar.shortDescription}
                      </p>
                    </div>

                    {/* Key Activities Checklist (Compact & Clean) */}
                    <div className="space-y-2.5">
                      <h3 className="font-sans font-bold text-xs text-[#0D3B82] uppercase tracking-wider">
                        Key Ground Activities:
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pillar.activities.slice(0, 6).map((act, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2 bg-[#F8FAFC] rounded-xl border border-stone-200/70"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#008CD3] shrink-0 mt-0.5" />
                            <span className="text-xs text-stone-700 font-medium leading-snug line-clamp-1">
                              {act}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pillar Action Footer */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs font-semibold text-stone-400 font-mono">
                        {pillar.activities.length} Listed Activities Total
                      </span>

                      <button
                        onClick={() => setCurrentView('donate')}
                        className="w-full sm:w-auto bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-xs px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <Heart className="w-3.5 h-3.5 fill-white/20" />
                        <span>Support {pillar.title}</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })
        )}

      </div>
    </div>
  );
};
