import React, { useState, useEffect } from 'react';
import { PageView, WelfarePillar, ActivityStory } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { StrategicGoalsPage } from './pages/StrategicGoalsPage';
import { DonatePage } from './pages/DonatePage';
import { ContactPage } from './pages/ContactPage';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ZakatCalculatorModal } from './components/ZakatCalculatorModal';
import { AnnualReportModal } from './components/AnnualReportModal';
import { StoryDetailModal } from './components/StoryDetailModal';
import { Calculator, Heart, ShieldCheck, PhoneCall } from 'lucide-react';
import { FOUNDATION_META } from './data/foundationData';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  
  // Modal States
  const [selectedProgram, setSelectedProgram] = useState<WelfarePillar | null>(null);
  const [selectedStory, setSelectedStory] = useState<ActivityStory | null>(null);
  const [isZakatModalOpen, setIsZakatModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [presetZakatAmount, setPresetZakatAmount] = useState<number | undefined>(undefined);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleOpenProgramDetail = (program: WelfarePillar) => {
    setSelectedProgram(program);
  };

  const handleOpenStoryDetail = (story: ActivityStory) => {
    setSelectedStory(story);
  };

  const handleApplyZakatToDonate = (amount: number) => {
    setPresetZakatAmount(amount);
    setIsZakatModalOpen(false);
    setCurrentView('donate');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0D3B82] font-sans antialiased selection:bg-[#008CD3] selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        openZakatModal={() => setIsZakatModalOpen(true)}
        openReportModal={() => setIsReportModalOpen(true)}
      />

      {/* Main Page View Renderer */}
      <main className="flex-1 w-full">
        {currentView === 'home' && (
          <HomePage
            setCurrentView={setCurrentView}
            openProgramDetail={handleOpenProgramDetail}
            openZakatModal={() => setIsZakatModalOpen(true)}
            openReportModal={() => setIsReportModalOpen(true)}
            openStoryDetail={handleOpenStoryDetail}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            setCurrentView={setCurrentView}
            openReportModal={() => setIsReportModalOpen(true)}
          />
        )}

        {currentView === 'programs' && (
          <ProgramsPage
            setCurrentView={setCurrentView}
            openProgramDetail={handleOpenProgramDetail}
            openZakatModal={() => setIsZakatModalOpen(true)}
          />
        )}

        {currentView === 'strategic-goals' && (
          <StrategicGoalsPage
            setCurrentView={setCurrentView}
            openReportModal={() => setIsReportModalOpen(true)}
          />
        )}

        {currentView === 'donate' && (
          <DonatePage
            openZakatModal={() => setIsZakatModalOpen(true)}
            presetZakatAmount={presetZakatAmount}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Quick Access Floating Action Dock (Mobile/Desktop Bottom Corner) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Quick Zakat Calculator Button */}
        <button
          onClick={() => setIsZakatModalOpen(true)}
          className="pointer-events-auto bg-[#0D3B82] hover:bg-[#1A4E9E] text-amber-300 font-sans font-bold text-xs px-4 py-3 rounded-full shadow-xl border border-amber-400/30 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer group"
          title="Open Zakat & Sadaqah Calculator"
        >
          <div className="p-1.5 rounded-full bg-[#008CD3] text-white">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline">Calculate Zakat</span>
        </button>

        {/* Quick Donate CTA */}
        {currentView !== 'donate' && (
          <button
            onClick={() => setCurrentView('donate')}
            className="pointer-events-auto bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-xs px-5 py-3 rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer group"
          >
            <Heart className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
            <span>Donate Now</span>
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer
        setCurrentView={setCurrentView}
        openZakatModal={() => setIsZakatModalOpen(true)}
        openReportModal={() => setIsReportModalOpen(true)}
      />

      {/* Modals */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onDonateClick={() => {
          setSelectedProgram(null);
          setCurrentView('donate');
        }}
      />

      <StoryDetailModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onDonateClick={() => {
          setSelectedStory(null);
          setCurrentView('donate');
        }}
      />

      <ZakatCalculatorModal
        isOpen={isZakatModalOpen}
        onClose={() => setIsZakatModalOpen(false)}
        onApplyZakatToDonate={handleApplyZakatToDonate}
      />

      <AnnualReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

    </div>
  );
}
