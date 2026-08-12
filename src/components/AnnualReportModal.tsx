import React, { useState } from 'react';
import { X, BookOpen, Download, FileText, CheckCircle, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { FOUNDATION_META, WELFARE_PILLARS, CHAIRPERSON_MESSAGE } from '../data/foundationData';

interface AnnualReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnnualReportModal: React.FC<AnnualReportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sections' | 'strategic'>('overview');

  if (!isOpen) return null;

  const handleDownloadSim = () => {
    alert("Annual Report 2025–2026 PDF summary downloaded successfully!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-6 bg-[#1B262C] text-white flex items-center justify-between border-b border-[#2C3A3F]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#C1622D] text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-xl">
                  Annual Report 2025–2026
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-[#2C3A3F] px-2 py-0.5 rounded border border-stone-700">
                  Official Publication
                </span>
              </div>
              <p className="text-xs text-stone-300 font-sans">
                Al-Ala Education Foundation • 27 Years of Excellence (Est. 1999)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-lg hover:bg-[#2C3A3F] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="bg-[#F7F5F0] border-b border-[#ECE7DF] px-6 py-2 flex items-center gap-4 text-xs font-bold text-[#1B262C]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-3 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'overview' ? 'bg-white shadow-2xs text-[#C1622D]' : 'hover:bg-stone-200/60'
            }`}
          >
            Report Summary & Introduction
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`py-2 px-3 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'sections' ? 'bg-white shadow-2xs text-[#C1622D]' : 'hover:bg-stone-200/60'
            }`}
          >
            8 Welfare Pillars
          </button>
          <button
            onClick={() => setActiveTab('strategic')}
            className={`py-2 px-3 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'strategic' ? 'bg-white shadow-2xs text-[#C1622D]' : 'hover:bg-stone-200/60'
            }`}
          >
            Strategic Objectives 2026–2027
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm font-sans">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Cover Card Mockup */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 bg-[#1B262C] text-white rounded-2xl">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#C1622D] text-white text-[11px] font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>CELEBRATING 27 YEARS</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    AL-ALA EDUCATION FOUNDATION
                  </h2>
                  <div className="font-serif text-lg text-amber-300">
                    ANNUAL REPORT 2025–2026
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans max-w-xl">
                    "Alhamdulillah, during the academic year 2025–2026, Al-Ala Education Foundation continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives."
                  </p>
                  <div className="pt-1 text-xs text-stone-400">
                    Chairperson: <strong className="text-white">{FOUNDATION_META.chairperson}</strong>
                  </div>
                </div>

                <div className="md:col-span-4 bg-white/10 p-4 rounded-xl border border-white/20 text-center space-y-2">
                  <FileText className="w-10 h-10 text-amber-400 mx-auto" />
                  <div className="font-serif text-xs font-bold text-stone-200">
                    Official Document
                  </div>
                  <div className="text-[11px] text-stone-300">
                    Full Report Pages: 01 to 11
                  </div>
                  <button
                    onClick={handleDownloadSim}
                    className="w-full bg-[#C1622D] hover:bg-[#A85020] text-white font-bold text-xs py-2 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>

              {/* Introduction Text */}
              <div className="space-y-3 p-5 bg-[#F7F5F0] rounded-xl border border-[#ECE7DF]">
                <h4 className="font-serif font-bold text-lg text-[#1B262C]">
                  Report Introduction
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  Alhamdulillah, during the academic year 2025–2026, Al-Ala Education Foundation continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives. Guided by Islamic values and a spirit of service, the Foundation worked across multiple sectors to support students, families, women, and communities while promoting education, health, and social responsibility.
                </p>
              </div>

              {/* Core Accomplishments List */}
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-[#1B262C] text-base">
                  Annual Report Highlights (2025–2026)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C1622D] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">Shaukat Khanum Cancer Hospital & Edhi Homes ration support</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C1622D] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">Free Education & Scholarship Program for orphans and deserving children</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C1622D] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">Gaza Relief Camps & Community Bake Sale fundraising drives</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C1622D] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">Free Dental & Medical Checkup Camps for students and local families</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'sections' && (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#1B262C]">
                8 Core Welfare Sections from the 2025–2026 Report
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WELFARE_PILLARS.map((p) => (
                  <div key={p.id} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xs font-bold text-[#C1622D] bg-[#F7F5F0] px-2 py-0.5 rounded">
                        Pillar {p.number}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-500">
                        {p.activities.length} Activities
                      </span>
                    </div>
                    <h5 className="font-serif font-bold text-[#1B262C] text-sm">
                      {p.title}
                    </h5>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'strategic' && (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#1B262C]">
                Strategic Objectives 2026–2027
              </h4>
              <p className="text-xs text-stone-600">
                Key institutional goals established in the report under Chairperson Ma'am Tayyiba Imtiaz.
              </p>

              <div className="space-y-2">
                {[
                  "Promote educational excellence, innovation, and research-informed practice",
                  "Expand scholarships and financial assistance to increase equitable access to education",
                  "Strengthen community welfare initiatives and charitable outreach programs",
                  "Empower women through education, leadership development, and skills training",
                  "Advance health, well-being, and public awareness initiatives",
                  "Build strategic partnerships with community organizations and stakeholders",
                  "Foster community leadership, volunteerism, and social responsibility",
                  "Support humanitarian relief efforts and timely emergency response initiatives",
                  "Ensure sustainable institutional growth and long-term organizational development"
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#F7F5F0] rounded-lg border border-[#ECE7DF]">
                    <span className="font-serif text-xs font-bold text-[#C1622D] w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-medium text-[#1B262C]">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-stone-500 font-medium">
            Published by Al-Ala Education Foundation • Annual Report 2025–26
          </div>

          <button
            onClick={handleDownloadSim}
            className="bg-[#1B262C] hover:bg-[#C1622D] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Full Report (PDF)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
