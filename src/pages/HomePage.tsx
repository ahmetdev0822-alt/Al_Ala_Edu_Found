import React from 'react';
import { PageView, WelfarePillar, ActivityStory } from '../types';
import { HeroSection } from '../components/HeroSection';
import { StatBand } from '../components/StatBand';
import { MissionIntro } from '../components/MissionIntro';
import { FocusAreasGrid } from '../components/FocusAreasGrid';
import { ChairpersonQuote } from '../components/ChairpersonQuote';
import { FeaturedPrograms } from '../components/FeaturedPrograms';
import { StrategicGoalsSection } from '../components/StrategicGoalsSection';
import { NewsletterBand } from '../components/NewsletterBand';

interface HomePageProps {
  setCurrentView: (view: PageView) => void;
  setSelectedPillarId?: (id: string | null) => void;
  openPillarModal?: (pillarId: string) => void;
  openProgramDetail?: (program: WelfarePillar) => void;
  openZakatModal?: () => void;
  openReportModal: () => void;
  openStoryDetail?: (story: ActivityStory) => void;
  onStorySelect?: (story: ActivityStory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentView,
  setSelectedPillarId = () => {},
  openPillarModal,
  openProgramDetail,
  openZakatModal,
  openReportModal,
  openStoryDetail,
  onStorySelect
}) => {
  // Normalize pillar modal trigger
  const handleOpenPillar = (pillarId: string) => {
    if (openPillarModal) {
      openPillarModal(pillarId);
    } else if (openProgramDetail) {
      // Find pillar from foundationData if needed
      setSelectedPillarId(pillarId);
    }
  };

  // Normalize story modal trigger
  const handleStorySelect = (story: ActivityStory) => {
    if (openStoryDetail) {
      openStoryDetail(story);
    } else if (onStorySelect) {
      onStorySelect(story);
    }
  };

  return (
    <div className="w-full">
      {/* Unified Hero Section with Integrated Gallery */}
      <HeroSection 
        setCurrentView={setCurrentView} 
        openReportModal={openReportModal}
        openZakatModal={openZakatModal}
      />
      
      {/* Impact Stat Counter Band */}
      <StatBand />

      {/* Mission & Purpose */}
      <MissionIntro 
        setCurrentView={setCurrentView} 
        openReportModal={openReportModal} 
      />

      {/* 8 Focus Areas (Welfare Pillars) */}
      <FocusAreasGrid 
        setCurrentView={setCurrentView}
        setSelectedPillarId={setSelectedPillarId}
        openPillarModal={handleOpenPillar}
      />

      {/* Chairperson Quote */}
      <ChairpersonQuote />

      {/* Field Activity Stories */}
      <FeaturedPrograms 
        onStorySelect={handleStorySelect}
      />

      {/* 2026-2027 Strategic Roadmap */}
      <StrategicGoalsSection 
        setCurrentView={setCurrentView} 
      />

      {/* Community Newsletter Band */}
      <NewsletterBand 
        setCurrentView={setCurrentView} 
      />
    </div>
  );
};
