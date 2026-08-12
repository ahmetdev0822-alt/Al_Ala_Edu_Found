import React from 'react';
import { RECENT_STORIES } from '../data/foundationData';
import { ActivityStory } from '../types';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface FeaturedProgramsProps {
  onStorySelect: (story: ActivityStory) => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({ onStorySelect }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C1622D]">
            <Sparkles className="w-4 h-4" />
            <span>2025–2026 Impact Stories & Recent Activities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B262C]">
            Stories of Hope, Transformation & Community Service
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Highlights from our ongoing ground projects, school programs, healthcare camps, and emergency humanitarian drives.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECENT_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => onStorySelect(story)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1B262C] text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm">
                  {story.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#C1622D]" />
                    <span>{story.date}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1B262C] group-hover:text-[#C1622D] transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-3">
                    {story.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#C1622D] group-hover:text-[#A85020]">
                  <span>Read Full Impact Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
