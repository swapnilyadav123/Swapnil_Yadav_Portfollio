import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Formal education in Computer Science Engineering providing deep foundations in database systems, data structures, algorithms, and analytical modeling.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Bento Education Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 text-left relative overflow-hidden group"
              id={`edu-card-${edu.id}`}
            >
              {/* Top status bar accent */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {edu.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="text-sm font-semibold text-slate-700 flex items-center gap-2 flex-wrap">
                    <span>{edu.institution}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-normal">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Score Bento Badge */}
                <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-center shrink-0 min-w-[130px]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    {edu.scoreLabel}
                  </div>
                  <div className="text-2xl font-black text-blue-900 mt-0.5">
                    {edu.score}
                  </div>
                </div>
              </div>

              {/* Coursework Tags */}
              {edu.coursework && (
                <div className="pt-3 border-t border-slate-100 mb-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    <span>Key Coursework & Relevant Subjects</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-xl text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {edu.highlights && (
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
