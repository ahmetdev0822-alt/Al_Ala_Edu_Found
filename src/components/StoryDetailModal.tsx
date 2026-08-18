import React from 'react';
import { ActivityStory } from '../types';
import { X, Calendar, Heart, Share2, Sparkles, Tag } from 'lucide-react';

interface StoryDetailModalProps {
  story: ActivityStory | null;
  onClose: () => void;
  onDonateClick: () => void;
}

export const StoryDetailModal: React.FC<StoryDetailModalProps> = ({
  story,
  onClose,
  onDonateClick
}) => {
  if (!story) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Story link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto border border-stone-200 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Image */}
        <div className="relative h-64 sm:h-80 bg-stone-900 shrink-0">
          <img 
            src={story.imageUrl} 
            alt={story.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82] via-[#0D3B82]/40 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-[#008CD3] text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                {story.category}
              </span>
              <span className="text-xs text-stone-300 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {story.date}
              </span>
            </div>
            <h2 className="font-sans text-xl sm:text-2xl font-bold leading-tight">
              {story.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Story Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 font-sans text-stone-700 text-sm leading-relaxed">
          
          <div className="p-4 bg-[#F4F7FA] rounded-xl border-l-4 border-[#008CD3] font-sans text-sm sm:text-base italic text-[#0D3B82]">
            "{story.summary}"
          </div>

          <div className="space-y-3">
            <h3 className="font-sans font-bold text-base sm:text-lg text-[#0D3B82]">
              Program & Impact Context
            </h3>
            <p>
              {story.fullDetails}
            </p>
            <p>
              Under the leadership of Chairperson Ma'am Tayyiba Imtiaz and operating alongside Al-Ala International Islamic School, our welfare drives ensure full accountability, with 100% of community contributions dedicated to deserving recipients.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
              <Tag className="w-4 h-4 text-[#008CD3]" />
              <span>Category: {story.category}</span>
            </div>

            <button
              onClick={handleShare}
              className="text-xs font-bold text-[#0D3B82] hover:text-[#008CD3] flex items-center gap-1 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Story</span>
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onDonateClick();
            }}
            className="bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Heart className="w-4 h-4 fill-white/20" />
            <span>Support Similar Welfare Initiatives</span>
          </button>
        </div>

      </div>
    </div>
  );
};
