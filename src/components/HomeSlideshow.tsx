import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { url: '/assets/home_slide_1.jpg', alt: 'Al-Ala Education Foundation Ramadan Food Drive' },
  { url: '/assets/home_slide_2.png', alt: 'Al-Ala International Islamic School students in uniform' },
  { url: '/assets/home_slide_3.jpg', alt: 'Food Bank distribution drive' },
  { url: '/assets/home_slide_4.jpg', alt: 'Alkhidmat Palestine humanitarian support packaging' },
  { url: '/assets/home_slide_5.jpg', alt: 'Welfare volunteers packaging boxes' }
];

export const HomeSlideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  return (
    <div className="relative w-full h-44 sm:h-60 md:h-72 lg:h-[340px] overflow-hidden bg-stone-900 border-b border-stone-200 group">
      {/* Slides */}
      {IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover object-[center_75%] transition-transform duration-5000 ease-out"
            style={{
              transform: idx === activeIndex ? 'scale(1.04)' : 'scale(1.0)'
            }}
          />
          {/* Subtle dark overlay gradient for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
        </div>
      ))}

      {/* Manual Control Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/35 hover:bg-black/60 text-white transition-colors opacity-0 group-hover:opacity-100 cursor-pointer hidden sm:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/35 hover:bg-black/60 text-white transition-colors opacity-0 group-hover:opacity-100 cursor-pointer hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              idx === activeIndex 
                ? 'bg-[#008CD3] w-5 shadow-sm' 
                : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
