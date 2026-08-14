import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Award, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience & Simulations
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Practical data analysis, forensic discovery, and executive data storytelling completed via industry simulations.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Bento Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-blue-200 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Circle */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-600 items-center justify-center text-blue-600 shadow-md z-10">
                    <Building2 className="w-4 h-4" />
                  </div>

                  {/* Bento Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)] text-left">
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group">
                      
                      {/* Header row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.dateBadge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      {/* Company & Role */}
                      <div className="mb-3">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {exp.company}
                        </h3>
                        <h4 className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      {/* Key tasks bullets */}
                      <div className="space-y-2 mb-5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology tags */}
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop alternating */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
