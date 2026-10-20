import React from 'react';
import { RECENT_STORIES } from '../data/foundationData';
import { ActivityStory } from '../types';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FeaturedProgramsProps {
  onStorySelect: (story: ActivityStory) => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({ onStorySelect }) => {
  return (
    <section className="py-20 md:py-28 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
              <Sparkles className="w-4 h-4" />
              <span>REAL STORIES OF IMPACT</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-[#0D3B82] tracking-tight">
              Hope, Dignity & Community in Action
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-sans">
              Recent highlights from our ground-level welfare drives, student support programs, and emergency humanitarian relief.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Card Grid with Elevated Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECENT_STORIES.map((story, idx) => {
            const delays: (75 | 100 | 150 | 200 | 300 | 400 | 500)[] = [75, 150, 225];
            const delay = delays[idx % delays.length];

            return (
              <ScrollReveal key={story.id} delay={delay} className="h-full">
                <div
                  onClick={() => onStorySelect(story)}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-stone-200/80 flex flex-col group cursor-pointer h-full"
                >
                  {/* Card Image with Gentle Zoom */}
                  <div className="relative h-56 overflow-hidden bg-stone-100 zoom-container">
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="w-full h-full object-cover zoom-image"
                    />
                    <div className="absolute top-4 left-4 bg-[#0D3B82] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-xs">
                      {story.category}
                    </div>
                  </div>

                  {/* Card Body with Clean Spacing */}
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#008CD3]" />
                        <span>{story.date}</span>
                      </div>

                      <h3 className="font-sans text-lg font-bold text-[#0D3B82] group-hover:text-[#008CD3] transition-colors leading-snug">
                        {story.title}
                      </h3>

                      <p className="text-xs text-stone-500 leading-relaxed font-sans line-clamp-1">
                        {story.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#008CD3]">
                      <span>Read Story Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
