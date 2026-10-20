import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Heart, ArrowRight, Calculator, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
  openZakatModal?: () => void;
}

const HERO_SLIDES = [
  {
    url: '/assets/img_-016.png',
    caption: 'Al-Ala International Islamic School',
    subcaption: '100% Free schooling and tarbiyyah for orphan scholars'
  },
  {
    url: '/assets/home_slide_1.jpg',
    caption: 'Ramadan Food Distribution',
    subcaption: 'Monthly family ration bags for low-income communities'
  },
  {
    url: '/assets/home_slide_2.png',
    caption: 'Nurturing Future Leaders',
    subcaption: '27 years of academic excellence and character building'
  },
  {
    url: '/assets/img_-027.png',
    caption: 'Free Health & Dental Camps',
    subcaption: 'On-site medical checkups and essential treatment aid'
  },
  {
    url: '/assets/home_slide_4.jpg',
    caption: 'Humanitarian Relief Support',
    subcaption: 'Emergency disaster response and Gaza relief drives'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  setCurrentView, 
  openReportModal,
  openZakatModal 
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#F8FAFC] pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Balanced Grid: Copy + Integrated Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Trust Badge */}
            <ScrollReveal direction="fade" delay={75}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-xs border border-stone-200/80">
                <span className="w-2 h-2 rounded-full bg-[#008CD3] animate-pulse-ring"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D3B82]">
                  EST. 1999 • 27 YEARS OF COMPASSION & TRUST
                </span>
              </div>
            </ScrollReveal>

            {/* Inspiring Emotional Headline */}
            <ScrollReveal delay={150}>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0D3B82] leading-[1.15] tracking-tight text-balance">
                Educate a Child. <br className="hidden sm:inline" />
                <span className="text-[#008CD3]">Restore a Family.</span> <br className="hidden sm:inline" />
                Transform a Generation.
              </h1>
            </ScrollReveal>

            {/* Clean, Concise Sub-headline */}
            <ScrollReveal delay={200}>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-sans">
                Operating under <strong className="text-[#0D3B82] font-semibold">Al-Ala International Islamic School</strong>, we provide 100% free tuition for orphans, cancer patient aid, and emergency relief across Pakistan.
              </p>
            </ScrollReveal>

            {/* Elevated, High-Contrast Action CTAs */}
            <ScrollReveal delay={300}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setCurrentView('donate')}
                  className="bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <Heart className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>Donate with Zakat & Sadaqah</span>
                </button>

                {openZakatModal && (
                  <button
                    onClick={openZakatModal}
                    className="bg-white hover:bg-stone-50 text-[#0D3B82] font-bold text-sm px-6 py-4 rounded-xl border border-stone-300 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-[#008CD3]" />
                    <span>Calculate Zakat</span>
                  </button>
                )}
              </div>
            </ScrollReveal>

            {/* Minimalist Trust & Report Hook */}
            <ScrollReveal delay={400}>
              <div className="pt-2 flex items-center gap-3 text-xs text-stone-500">
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Registered Tax-Exempt Non-Profit
                </span>
                <span className="text-stone-300">•</span>
                <button 
                  onClick={openReportModal}
                  className="text-stone-500 hover:text-[#008CD3] underline cursor-pointer transition-colors"
                >
                  View 2025–2026 Annual Report
                </button>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={200}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group aspect-4/5 sm:aspect-square lg:aspect-4/5">
                
                {/* Crossfading Slide Images */}
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img 
                      src={slide.url} 
                      alt={slide.caption}
                      className="w-full h-full object-cover"
                    />
                    {/* Calming Dark Gradient at Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82]/95 via-[#0D3B82]/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                      <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Al-Ala Foundation in Action</span>
                      </div>
                      <h3 className="font-sans text-lg sm:text-xl font-bold leading-tight">
                        {slide.caption}
                      </h3>
                      <p className="text-xs text-stone-200 mt-1 font-sans line-clamp-1">
                        {slide.subcaption}
                      </p>
                    </div>
                  </div>
                ))}

                {/* 27th Year Milestone Floating Pill */}
                <div className="absolute top-5 right-5 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-stone-200 text-right">
                  <div className="font-mono text-base font-extrabold text-[#008CD3] leading-none">
                    27th Year
                  </div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-600 mt-0.5">
                    1999–2026
                  </div>
                </div>

                {/* Slide Navigation Dots */}
                <div className="absolute bottom-4 right-6 z-20 flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        i === activeSlide ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/50 hover:bg-white'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

              </div>
            </ScrollReveal>

            {/* Soft Ambient Backdrop */}
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl bg-[#E6EEF5] -z-10 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
