export type PageView = 'home' | 'about' | 'programs' | 'goals' | 'donate' | 'contact';

export interface WelfarePillar {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  activities: string[];
  highlightTag?: string;
  impactMetric?: string;
}

export interface ActivityStory {
  id: string;
  title: string;
  category: string;
  pillarId: string;
  date: string;
  imageUrl: string;
  summary: string;
  fullDetails: string;
}

export interface StrategicGoal {
  id: number;
  title: string;
  description: string;
  targetCategory: string;
}

export interface DonationOption {
  id: string;
  title: string;
  description: string;
  recommendedAmountPKR: number;
  category: 'education' | 'health' | 'food' | 'relief' | 'general';
  imageUrl: string;
}
