import React from 'react';
import { PageView } from '../types';
import { FOUNDATION_META, CHAIRPERSON_MESSAGE } from '../data/foundationData';
import { Award, BookOpen, Heart, Shield, Sparkles, CheckCircle, Quote } from 'lucide-react';

interface AboutPageProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <div className="w-full bg-[#FCFCFA] pb-20 font-sans">
      
      {/* Header Banner */}
      <section className="bg-[#1B262C] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2C3A3F]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1622D]/30 border border-[#C1622D]/50 text-amber-300 text-xs font-semibold">
            <Award className="w-3 h-3 text-[#C1622D]" />
            <span>ESTABLISHED 1999 • CELEBRATING 27 YEARS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            About Al-Ala Education Foundation
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            A charitable trust dedicated to serving society through education, healthcare, social welfare, and humanitarian relief guided by Islamic values.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Intro & History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C1622D]">
              OUR HISTORY & FOUNDATION
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B262C]">
              27 Years of Unbroken Trust & Educational Leadership
            </h2>
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p className="p-4 bg-[#F7F5F0] rounded-xl border-l-4 border-[#C1622D] italic font-serif text-stone-800">
                "Alhamdulillah, during the academic year 2025–2026, Al-Ala Education Foundation continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives. Guided by Islamic values and a spirit of service, the Foundation worked across multiple sectors to support students, families, women, and communities while promoting education, health, and social responsibility."
              </p>
              <p>
                Established in 1999, <strong className="text-[#1B262C]">Al-Ala Education Foundation</strong> operates under <strong className="text-[#1B262C]">Al-Ala International Islamic School</strong> in Lahore, Pakistan. Over the past 27 years, our trust has evolved into a premier community service organization, combining academic rigor with comprehensive social care.
              </p>
              <p>
                Whether providing full scholarships for orphans, funding chemotherapy for underprivileged cancer patients via Shaukat Khanum Hospital, organizing dental checkups, or distributing emergency rations during floods and Gaza relief campaigns, the Foundation remains deeply rooted in local communities.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={openReportModal}
                className="bg-[#1B262C] hover:bg-[#C1622D] text-white text-xs font-bold px-5 py-3 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Read 2025–2026 Report Summary</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
                alt="Al-Ala International Islamic School campus"
                className="w-full h-80 object-cover"
              />
              <div className="p-5 bg-[#1B262C] text-white space-y-1">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Al-Ala International Islamic School
                </div>
                <div className="font-serif text-sm">
                  Educating leaders of tomorrow with academic excellence and Islamic tarbiyyah.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chairperson Message Section */}
        <div className="p-8 sm:p-10 bg-[#2C3A3F] text-white rounded-3xl space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C1622D]" />
            <span>LEADERSHIP VISION</span>
          </div>

          <Quote className="w-10 h-10 text-[#C1622D]" />

          <blockquote className="font-serif text-xl sm:text-2xl font-medium leading-relaxed italic text-stone-100">
            "{CHAIRPERSON_MESSAGE.quote}"
          </blockquote>

          <div className="pt-4 border-t border-stone-600 flex items-center justify-between">
            <div>
              <div className="font-serif font-bold text-amber-400 text-lg">
                {CHAIRPERSON_MESSAGE.author}
              </div>
              <div className="text-xs text-stone-300">
                {CHAIRPERSON_MESSAGE.role}
              </div>
            </div>

            <div className="hidden sm:block text-right text-xs text-stone-400">
              {FOUNDATION_META.name} • 27 Years (Est. 1999)
            </div>
          </div>
        </div>

        {/* 4 Core Islamic Values */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-[#C1622D] uppercase tracking-widest">
              OUR FOUNDATIONAL ETHOS
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#1B262C]">
              Values Grounded in Islamic Service
            </h2>
            <p className="text-stone-600 text-sm font-sans">
              Every project and dollar managed by Al-Ala Foundation is held to the highest standards of transparency and spiritual purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#F7F5F0] rounded-2xl border border-[#ECE7DF] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C1622D]/20 text-[#C1622D] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B262C]">
                Khidmah (Service)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Serving creation is the highest form of devotion. We treat every recipient with profound honor and warmth.
              </p>
            </div>

            <div className="p-6 bg-[#F7F5F0] rounded-2xl border border-[#ECE7DF] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C1622D]/20 text-[#C1622D] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B262C]">
                Amanah (Trust)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Complete financial and operational transparency. Donor funds go directly to verified social welfare causes.
              </p>
            </div>

            <div className="p-6 bg-[#F7F5F0] rounded-2xl border border-[#ECE7DF] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C1622D]/20 text-[#C1622D] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B262C]">
                Tarbiyyah (Character)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nurturing moral, spiritual, and civic leadership in students alongside top-tier academic training.
              </p>
            </div>

            <div className="p-6 bg-[#F7F5F0] rounded-2xl border border-[#ECE7DF] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C1622D]/20 text-[#C1622D] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B262C]">
                Shumuliyyah (Inclusion)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Equal access to education and welfare regardless of gender, disability, or background. "Care Without Barriers."
              </p>
            </div>

          </div>
        </div>

        {/* CTA Box */}
        <div className="p-8 bg-stone-100 rounded-2xl border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-xl text-[#1B262C]">
              Partner with Us in Community Transformation
            </h3>
            <p className="text-xs text-stone-600">
              Support our 2025–2026 ongoing welfare projects or join our volunteer network.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('donate')}
            className="bg-[#C1622D] hover:bg-[#A85020] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Support Our Work →
          </button>
        </div>

      </div>
    </div>
  );
};
