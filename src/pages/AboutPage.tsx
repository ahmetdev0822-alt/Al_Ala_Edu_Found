import React from 'react';
import { PageView } from '../types';
import { FOUNDATION_META, CHAIRPERSON_MESSAGE } from '../data/foundationData';
import { Award, BookOpen, Quote, Sparkles } from 'lucide-react';

interface AboutPageProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <div className="w-full bg-[#F8FAFC] pb-28 font-sans">
      
      {/* Header Banner */}
      <section className="relative bg-[#0D3B82] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#1A4E9E] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/img_-017.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B82] via-[#0D3B82]/85 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>ESTABLISHED 1999 • CELEBRATING 27 YEARS</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-3xl">
            Rooted in Faith, Dedicated to Service.
          </h1>
          <p className="text-stone-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            A charitable trust serving society through education, healthcare, social welfare, and humanitarian relief guided by Islamic values.
          </p>
        </div>
      </section>

      {/* Main Content with Airy Vertical Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        
        {/* History & Purpose Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#008CD3]">
              OUR FOUNDATION & HISTORY
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-black text-[#0D3B82] tracking-tight">
              27 Years of Community Trust & Educational Leadership
            </h2>
            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Established in 1999, <strong className="text-[#0D3B82]">Al-Ala Education Foundation</strong> operates under <strong className="text-[#0D3B82]">Al-Ala International Islamic School</strong> in Lahore, Pakistan. Over the past 27 years, our trust has evolved into a premier community service organization, combining academic rigor with comprehensive social care.
              </p>
              <p>
                Whether providing full scholarships for orphans, funding chemotherapy for cancer patients via Shaukat Khanum Hospital, organizing dental camps, or distributing emergency rations during floods and Gaza relief campaigns, the Foundation remains deeply rooted in local communities.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={openReportModal}
                className="bg-[#0D3B82] hover:bg-[#008CD3] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Read 2025–2026 Annual Report Summary</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
              <img
                src="/assets/img_-008.png"
                alt="Al-Ala International Islamic School campus"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-[#0D3B82] text-white space-y-1">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Al-Ala International Islamic School
                </div>
                <div className="font-sans text-sm text-stone-200">
                  Educating leaders of tomorrow with academic excellence and Islamic tarbiyyah.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chairperson Message Section (Serene & Inspiring) */}
        <div className="p-8 sm:p-12 bg-[#0D3B82] text-white rounded-3xl space-y-6 relative overflow-hidden shadow-lg border border-[#1A4E9E]">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>LEADERSHIP VISION</span>
          </div>

          <Quote className="w-10 h-10 text-[#008CD3] opacity-75" />

          <blockquote className="font-sans text-xl sm:text-2xl font-bold leading-relaxed italic text-white max-w-4xl">
            "True education does not merely enlighten the mind — it uplifts the heart and restores dignity to the most vulnerable."
          </blockquote>

          <div className="pt-6 border-t border-white/15 flex items-center justify-between">
            <div>
              <div className="font-sans font-black text-amber-400 text-base uppercase tracking-wider">
                {CHAIRPERSON_MESSAGE.author}
              </div>
              <div className="text-xs text-stone-300">
                {CHAIRPERSON_MESSAGE.role}
              </div>
            </div>

            <div className="hidden sm:block text-right text-xs text-stone-400 font-mono">
              {FOUNDATION_META.name} • 27 Years (Est. 1999)
            </div>
          </div>
        </div>

        {/* 4 Core Islamic Values */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="text-xs font-bold text-[#008CD3] uppercase tracking-widest">
              OUR FOUNDATIONAL ETHOS
            </div>
            <h2 className="font-sans text-3xl font-black text-[#0D3B82]">
              Values Grounded in Islamic Service
            </h2>
            <p className="text-stone-600 text-sm font-sans">
              Every project and donation managed by Al-Ala Foundation is held to the highest standards of transparency and spiritual purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white rounded-3xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#008CD3]/15 text-[#008CD3] flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="font-sans font-bold text-base text-[#0D3B82]">
                Khidmah (Service)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Serving creation is a high form of devotion. We treat every recipient with profound honor and warmth.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#008CD3]/15 text-[#008CD3] flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="font-sans font-bold text-base text-[#0D3B82]">
                Amanah (Trust)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Complete financial and operational transparency. Donor funds go directly to verified welfare causes.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#008CD3]/15 text-[#008CD3] flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="font-sans font-bold text-base text-[#0D3B82]">
                Tarbiyyah (Character)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nurturing moral, spiritual, and civic leadership in students alongside top-tier academic training.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#008CD3]/15 text-[#008CD3] flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h3 className="font-sans font-bold text-base text-[#0D3B82]">
                Shumuliyyah (Inclusion)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Equal access to education and welfare regardless of background or physical ability: "Care Without Barriers."
              </p>
            </div>

          </div>
        </div>

        {/* Calm CTA Box */}
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-stone-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-sans font-bold text-xl text-[#0D3B82]">
              Join Us in Transforming Lives
            </h3>
            <p className="text-xs text-stone-500">
              Support our ongoing welfare initiatives or sponsor an orphan student today.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('donate')}
            className="bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all cursor-pointer shrink-0 shadow-xs"
          >
            Support Our Work →
          </button>
        </div>

      </div>
    </div>
  );
};
