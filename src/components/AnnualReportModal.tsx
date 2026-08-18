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
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto border border-stone-200 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-6 bg-[#0D3B82] text-white flex items-center justify-between border-b border-[#1A4E9E]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#008CD3] text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans font-bold text-lg">
                  Annual Report 2025–2026
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-[#1A4E9E] px-2 py-0.5 rounded border border-stone-700">
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
            className="text-stone-400 hover:text-white p-2 rounded-lg hover:bg-[#1A4E9E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="bg-[#F4F7FA] border-b border-[#E6EEF5] px-6 py-2 flex items-center gap-4 text-xs font-bold text-[#0D3B82]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-3 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'overview' ? 'bg-white shadow-2xs text-[#008CD3]' : 'hover:bg-stone-200/60'
            }`}
          >
            Report Summary & Introduction
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`py-2 px-3 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'sections' ? 'bg-white shadow-2xs text-[#008CD3]' : 'hover:bg-stone-200/60'
            }`}
          >
            8 Welfare Pillars
          </button>
          <button
            onClick={() => setActiveTab('strategic')}
            className={`py-2 px-3 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'strategic' ? 'bg-white shadow-2xs text-[#008CD3]' : 'hover:bg-stone-200/60'
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 bg-[#0D3B82] text-white rounded-2xl">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#008CD3] text-white text-[11px] font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>CELEBRATING 27 YEARS</span>
                  </div>
                  <h2 className="font-sans text-xl sm:text-2xl font-bold leading-tight">
                    AL-ALA EDUCATION FOUNDATION
                  </h2>
                  <div className="font-sans text-base text-amber-300 font-bold tracking-wider">
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
                  <div className="font-sans text-xs font-bold text-stone-200 uppercase tracking-wider">
                    Official Document
                  </div>
                  <div className="text-[11px] text-stone-300">
                    Full Report Pages: 01 to 11
                  </div>
                  <button
                    onClick={handleDownloadSim}
                    className="w-full bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-xs py-2 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>

              {/* Introduction Text */}
              <div className="space-y-3 p-5 bg-[#F4F7FA] rounded-xl border border-[#E6EEF5]">
                <h4 className="font-sans font-bold text-base text-[#0D3B82]">
                  Report Introduction
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  Alhamdulillah, during the academic year 2025–2026, Al-Ala Education Foundation continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives. Guided by Islamic values and a spirit of service, the Foundation worked across multiple sectors to support students, families, women, and communities while promoting education, health, and social responsibility.
                </p>
              </div>

              {/* Core Accomplishments List */}
              <div className="space-y-3">
                <h4 className="font-sans font-bold text-[#0D3B82] text-sm uppercase tracking-wider">
                  Annual Report Highlights (2025–2026)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#008CD3] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">Shaukat Khanum Cancer Hospital & Edhi Homes ration support</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#008CD3] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">Free Education & Scholarship Program for orphans and deserving children</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#008CD3] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">Gaza Relief Camps & Community Bake Sale fundraising drives</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#008CD3] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">Free Dental & Medical Checkup Camps for students and local families</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'sections' && (
            <div className="space-y-4">
              <h4 className="font-sans font-bold text-base text-[#0D3B82]">
                8 Core Welfare Sections from the 2025–2026 Report
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WELFARE_PILLARS.map((p) => (
                  <div key={p.id} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#008CD3] bg-[#F4F7FA] px-2 py-0.5 rounded">
                        Pillar {p.number}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-500">
                        {p.activities.length} Activities
                      </span>
                    </div>
                    <h5 className="font-sans font-bold text-[#0D3B82] text-xs uppercase tracking-wider">
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
              <h4 className="font-sans font-bold text-base text-[#0D3B82]">
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
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#F4F7FA] rounded-lg border border-[#E6EEF5]">
                    <span className="font-mono text-xs font-bold text-[#008CD3] w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-medium text-[#0D3B82]">
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
            className="bg-[#0D3B82] hover:bg-[#008CD3] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Full Report (PDF)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
