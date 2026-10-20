import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, HeartHandshake, Users, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = '',
  duration = 1200
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalSteps = Math.min(Math.floor(duration / 16), 100);
    const increment = end / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextVal = Math.round(increment * currentStep);
      if (nextVal >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(nextVal);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

export const StatBand: React.FC = () => {
  return (
    <section className="w-full bg-[#0D3B82] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1A4E9E]">
      <div className="max-w-7xl mx-auto">
        
        {/* 4 Clean, High-Impact Stat Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Stat 1 */}
          <ScrollReveal delay={75} className="w-full">
            <div className="text-center space-y-2 p-6 rounded-2xl bg-[#1A4E9E]/30 border border-[#1A4E9E]/60 h-full flex flex-col justify-center">
              <div className="inline-flex p-2.5 rounded-xl bg-[#008CD3]/20 text-[#008CD3] mx-auto mb-1">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400">
                <AnimatedNumber value={27} suffix=" Years" />
              </div>
              <div className="text-sm font-bold text-white tracking-wide">
                Unbroken Service
              </div>
              <p className="text-xs text-stone-300 font-sans">
                Under Al-Ala Int'l Islamic School (Est. 1999)
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 2 */}
          <ScrollReveal delay={150} className="w-full">
            <div className="text-center space-y-2 p-6 rounded-2xl bg-[#1A4E9E]/30 border border-[#1A4E9E]/60 h-full flex flex-col justify-center">
              <div className="inline-flex p-2.5 rounded-xl bg-[#008CD3]/20 text-[#008CD3] mx-auto mb-1">
                <Users className="w-6 h-6 text-amber-300" />
              </div>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400">
                <AnimatedNumber value={100} suffix="%" />
              </div>
              <div className="text-sm font-bold text-white tracking-wide">
                Free for Orphans
              </div>
              <p className="text-xs text-stone-300 font-sans">
                Full tuition, textbooks, uniforms & meals
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 3 */}
          <ScrollReveal delay={225} className="w-full">
            <div className="text-center space-y-2 p-6 rounded-2xl bg-[#1A4E9E]/30 border border-[#1A4E9E]/60 h-full flex flex-col justify-center">
              <div className="inline-flex p-2.5 rounded-xl bg-[#008CD3]/20 text-[#008CD3] mx-auto mb-1">
                <HeartHandshake className="w-6 h-6 text-amber-300" />
              </div>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400">
                <AnimatedNumber value={8} suffix=" Pillars" />
              </div>
              <div className="text-sm font-bold text-white tracking-wide">
                Holistic Welfare
              </div>
              <p className="text-xs text-stone-300 font-sans">
                Education, healthcare, women & child care
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 4 */}
          <ScrollReveal delay={300} className="w-full">
            <div className="text-center space-y-2 p-6 rounded-2xl bg-[#1A4E9E]/30 border border-[#1A4E9E]/60 h-full flex flex-col justify-center">
              <div className="inline-flex p-2.5 rounded-xl bg-[#008CD3]/20 text-[#008CD3] mx-auto mb-1">
                <ShieldAlert className="w-6 h-6 text-amber-300" />
              </div>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400">
                Rapid Aid
              </div>
              <div className="text-sm font-bold text-white tracking-wide">
                Emergency Response
              </div>
              <p className="text-xs text-stone-300 font-sans">
                Flood relief, cancer patient aid & Gaza drives
              </p>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
