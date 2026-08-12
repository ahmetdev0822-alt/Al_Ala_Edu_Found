import React from 'react';
import { WelfarePillar } from '../types';
import { X, CheckCircle2, Heart, Calendar, Sparkles } from 'lucide-react';

interface ProgramDetailModalProps {
  pillar: WelfarePillar | null;
  onClose: () => void;
  onDonateClick: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  pillar,
  onClose,
  onDonateClick
}) => {
  if (!pillar) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Image Frame */}
        <div className="relative h-60 sm:h-72 bg-stone-900 shrink-0">
          <img 
            src={pillar.imageUrl} 
            alt={pillar.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B262C] via-[#1B262C]/50 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#C1622D] text-white text-[11px] font-bold uppercase tracking-wider">
              <span>Pillar {pillar.number}</span>
              {pillar.highlightTag && <span>• {pillar.highlightTag}</span>}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              {pillar.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 font-sans">
          
          <div className="p-4 bg-[#F7F5F0] rounded-xl border border-[#ECE7DF] space-y-1">
            <div className="text-xs font-bold text-[#1B262C] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C1622D]" />
              <span>Pillar Overview</span>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed font-sans">
              {pillar.fullDescription}
            </p>
          </div>

          {/* Major Activities Checklist */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1B262C] border-b border-stone-200 pb-2">
              Official 2025–2026 Key Initiatives & Activities ({pillar.activities.length})
            </h3>

            <div className="grid grid-cols-1 gap-2.5 pt-1">
              {pillar.activities.map((act, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-stone-50 border border-stone-200/70 hover:bg-[#F7F5F0] transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C1622D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2C3A3F] font-medium leading-normal">
                    {act}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metric Banner */}
          {pillar.impactMetric && (
            <div className="p-4 bg-[#1B262C] text-white rounded-xl flex justify-between items-center">
              <div>
                <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">
                  Impact Milestone
                </div>
                <div className="font-serif text-lg font-bold">
                  {pillar.impactMetric}
                </div>
              </div>
              <Calendar className="w-6 h-6 text-[#C1622D]" />
            </div>
          )}

        </div>

        {/* Sticky Action Footer */}
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
            className="bg-[#C1622D] hover:bg-[#A85020] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Heart className="w-4 h-4 fill-white/20" />
            <span>Support This Pillar</span>
          </button>
        </div>

      </div>
    </div>
  );
};
