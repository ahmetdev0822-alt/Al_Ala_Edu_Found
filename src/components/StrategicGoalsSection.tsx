import React from 'react';
import { STRATEGIC_GOALS_2026_2027 } from '../data/foundationData';
import { PageView } from '../types';
import { 
  GraduationCap, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  Activity, 
  Building2, 
  TreePine, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface StrategicGoalsSectionProps {
  setCurrentView?: (view: PageView) => void;
  isStandalonePage?: boolean;
}

const GOAL_ICONS = [
  GraduationCap, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  Activity, 
  Building2, 
  TreePine, 
  ShieldAlert, 
  CheckCircle2
];

export const StrategicGoalsSection: React.FC<StrategicGoalsSectionProps> = ({ 
  setCurrentView,
  isStandalonePage = false 
}) => {
  return (
    <section className={`py-20 md:py-28 ${isStandalonePage ? 'bg-[#F8FAFC]' : 'bg-white'} border-t border-stone-200/80`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
              <Sparkles className="w-4 h-4" />
              <span>ROADMAP 2026–2027</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-[#0D3B82] tracking-tight">
              Strategic Objectives at a Glance
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-sans">
              Our 9 key commitments for the upcoming year, focused on academic excellence, welfare expansion, and transparent governance.
            </p>
          </div>
        </ScrollReveal>

        {/* Visual, Punchy 3x3 Grid with Crisp 1-Line Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRATEGIC_GOALS_2026_2027.map((goal, idx) => {
            const delays: (75 | 100 | 150 | 200 | 300 | 400 | 500)[] = [75, 150, 225];
            const delay = delays[idx % delays.length];
            const IconComponent = GOAL_ICONS[idx % GOAL_ICONS.length];

            return (
              <ScrollReveal key={goal.id} delay={delay} className="h-full">
                <div 
                  className="p-6 rounded-3xl bg-[#F8FAFC] border border-stone-200/80 hover:border-[#008CD3] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Number & Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 shadow-2xs text-[#008CD3] flex items-center justify-center group-hover:bg-[#008CD3] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 bg-white border border-stone-200 px-2.5 py-0.5 rounded-full">
                          {goal.targetCategory}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#0D3B82]">
                          0{goal.id}
                        </span>
                      </div>
                    </div>

                    {/* Punchy Title */}
                    <h3 className="font-sans text-base sm:text-lg font-bold text-[#0D3B82] leading-snug">
                      {goal.title}
                    </h3>

                    {/* Exactly 1 Line Description */}
                    <p className="text-xs text-stone-500 leading-relaxed font-sans line-clamp-1">
                      {goal.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>2026–2027 Priority Target</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {!isStandalonePage && setCurrentView && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setCurrentView('goals')}
              className="inline-flex items-center gap-2 bg-[#0D3B82] hover:bg-[#008CD3] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer group"
            >
              <span>View Full Institutional Roadmap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
